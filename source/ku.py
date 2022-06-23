
import threading
import json
from threading import Timer
import time
import traceback
import logger
from google.protobuf import text_format

import action as Action
from upload import init_session, upload_data
from loginManager import LoginManager
from kuWebSocket import KuWebSocket

class KUCrawler:
    def __init__(self, tasks, config, daemon=False):  
        self._config = config
        self._tasks = tasks
        self._config['_running'] = True
        self.name = 'ku_crawl'
        self._url = []
        self._urlSearch = ""
        self._protocol = ""
        self._verifyKey = ""
        self._upload_status = True
        self.connection = None
        self.channel = None
        self._sendMqTimer = None
        if self._config['verbose'] :
            self._logger = logger.getLogger("DEBUG")
        else:
            self._logger = logger.getLogger("INFO")

    def stop(self):
        self._logger.debug("KUCrawler Start Stop.")

        if not self._sendMqTimer == None:
            self._sendMqTimer.cancel()

        self._config['_running'] = False

        taskStopList = []
        for task in self._tasks:
            webSocketList = task['socket']
            for webSocket in webSocketList:
                stop = threading.Thread(target = webSocketList[webSocket]["socket"].stop)
                taskStopList.append(stop)
                stop.start()

        for stop in taskStopList:
            stop.join()   

        self._logger.debug("KUCrawler Stoped.")

    def runFromFile(self, fileName):
        self._config['_running'] = False

        f = open(fileName, "rb")
        Lines = f.readlines()
        for line in Lines :
            obj = json.loads(line)
            line = json.dumps(obj)
            Action.onNext(line.encode("utf-8"))
            
        f.close()

        self.sendToMQ()

    def run(self):

        loginConfig = {
            'platformUrl': self._config['ku_domains'],
            'gameUrl': self._config['game_server'],
            'apiPath': self._config['api_path'],
            'loginHeaders': self._config['login_headers']
        }

        for account, account_info in self._config['accounts'].items():
            if not account_info['enabled']:
                continue

            self._url = account_info.get("url", [])
            self._urlSearch = account_info.get("search", "")
            self._protocol = account_info.get("protocol", "")
            self._verifyKey = account_info.get("verifyKey", "")   

            if len(self._url) == 0 or len(self._urlSearch) == 0 or len(self._protocol) == 0 or len(self._verifyKey) == 0:
                loginManager = LoginManager(account, account_info['password'], loginConfig)
                loginResponse = loginManager.run()

                if loginResponse != {}:
                    self._url = loginResponse["BBWSUrl"]
                    self._urlSearch = loginResponse["BBUrlSearch"]
                    self._protocol = loginResponse["BBProtocol"]
                    self._verifyKey = loginResponse["verify"]
                    break
                else:
                    self._logger.warning(loginResponse)

        with open(f'lastLoginInfo.txt', mode='w') as f:
            f.write("url : " + str(self._url) + "\n")
            f.write("search : '" + self._urlSearch + "'\n")
            f.write("protocol : '" + self._protocol + "'\n")
            f.write("verifyKey : '" + self._verifyKey + "'\n")

        crawlModeList = ["0", "1", "2"]
        crawlList = {"soccer" : "11", "basketball" : "12", "baseball" : "13", "tennis" : "14", "hockey" : "15", "volleyball" : "16", 
                    "badminton" : "17", "eSport" : "18", "football" : "19", "billiardball" : "20", "PP" : "21", "UCL" : "26", "wsc" : "27"}

        self.sendToMQ()
        
        while self._config['_running'] :
            for task in self._tasks:
                if str(task['game_type']) in crawlList and str(task['game_mode']) in crawlModeList:
                    for index, url in enumerate(self._url):
                        webSocketList = task['socket']
                        reConnect = False
                        for index in webSocketList:
                            if webSocketList[index]['socket'].isClose():
                                reConnect = True
                            else :
                                reConnect = False
                                break

                        if not url in webSocketList or reConnect:
                            socket = KuWebSocket(url, self._urlSearch, self._protocol, on_open=self.on_open, on_message=self.on_message, on_keepLive=self.on_keepLive, crawlIndex=crawlList[task['game_type']], crawlMode=str(task['game_mode']))
                            startThread = threading.Thread(target = socket.connect)
                            webSocketList[url] = {
                                'socket' : socket
                            }
                            startThread.start()

            time.sleep(1)

        self._logger.info("KUCrawler Exist.")

    def sendToMQ(self):

        pushData = Action.getNowData()
        
        if self._config['dump'] and pushData:
            with open(f'{self.name}.raw', mode='wb') as f:
                f.write(json.dumps(pushData).encode('utf-8'))

            #Clear file
            with open(f'{self.name}.bin', mode='wb') as f:
                f.write(b'')

             #Clear file
            with open(f'{self.name}.txt', mode='w') as f:
                f.write('')                

        for game in pushData:
            if "menu" in game:
                continue

            if self._config['_running'] == False :
                break

            self._logger.debug(f'Start Send [{game}]To MQ.')

            protobufData, gameType = Action.transformToProtobuf(pushData[game])
            if not protobufData == None and protobufData:
                try:
                    if self._config['dump'] and protobufData:
                        with open(f'{self.name}.bin', mode='ab') as f:
                            f.write(protobufData.SerializeToString())

                        with open(f'{self.name}.txt', mode='a') as f:
                            f.write(text_format.MessageToString(protobufData))

                    if self.connection == None or self.channel == None:
                        self.connection, self.channel = init_session(self._config['rabbitmqUrl'])

                    elif self.connection.is_closed or self.channel.is_closed or not self._upload_status:
                        if connection.is_open:
                            connection.close()
                        self.connection, self.channel = init_session(self._config['rabbitmqUrl'])

                    self._upload_status = upload_data(self.channel, protobufData, gameType)
                    self._logger.debug(self._upload_status)

                except Exception:
                    traceback.print_exc()
                    self._logger.error("Can't connect to MQ.")
                else:
                    self._logger.info("Send MQ status : " + str(self._upload_status))
            else :
                self._logger.info("Data is empty." )        

        self._logger.debug("End Send To MQ." )

        if self._config['_running'] == True :
            pushInterval = 30
            if self._config['push_interval'] :
                pushInterval = self._config['push_interval']

            self._sendMqTimer = Timer(pushInterval, self.sendToMQ)
            self._sendMqTimer.start()            

    def on_message(self, socketKey, message):
        
        decodeStr = Action.pako_inflate(message)

        self._logger.debug(str(decodeStr))

        if self._config['dump'] and decodeStr:
            with open(f'{self.name}_{socketKey}.log', mode='ab') as f:
                f.write(decodeStr + b'\n')

        Action.onNext(decodeStr)

    def gameChange(self, ws, sport, gameType, mode, sleepTime):  
        try:
            gameType = Action.getNextGameType(sport, gameType, mode)
            if gameType > 0:
                command = '{"action":"ckg","sport":' + sport + ',"mode": ' + mode + ',"type":' + str(gameType + 1) + ',"dc":' + str(ws.getMessageIndex()) + '}'
                self._logger.info("[" + sport + "][" + mode + "][" + str(gameType + 1) + "]Send change. :" + command)
                if ws.sendCommand(command) == False:
                    self._logger.error("[" + sport + "][" + mode + "][" + str(gameType + 1) + "]Send change stop.")
                    return
            else:
                self._logger.error("Not found game.[" + sport + "][" + mode + "][" + str(gameType + 1) + "]")

            if ws.isClose():
                return

            if self._config['_running'] == True:
                ws.otherTimer = Timer(sleepTime, self.gameChange, (ws, sport, gameType, mode, sleepTime,))
                ws.otherTimer.start()
        except Exception:
            traceback.print_exc()
            self._logger.info("[" + sport + "][" + mode + "] Change stop.")

    def on_keepLive(self, ws, sport):
        ws.sendCommand('{"action":"checkTime"}')

    def on_open(self, ws, sport, mode):
        self._logger.debug("[" + sport + "][" + mode + "] Opened connection")

        sendCommand = '{"action":"first","module":0,"device":0,"mode":' + mode + ',"sport":' + sport + ',"deposit":0,"modeId":11,"verify":"' + self._verifyKey  + '","dc":' + str(ws.getMessageIndex()) + '}'
        ws.sendCommand(sendCommand)
    
        sendCommand = '{"action":"cst","module":0,"device":0,"mode":' + mode + ',"sport":' + sport + ',"deposit":0,"modeId":11,"verify":"' + self._verifyKey + '","dc":' + str(ws.getMessageIndex()) + ',"type":1,"stick":1}'
        ws.sendCommand(sendCommand)

        BB_Last = sendCommand 

        crawlInterval = 20
        if self._config['crawl_interval']:
            crawlInterval = self._config['crawl_interval']

        ws.otherTimer = Timer(crawlInterval, self.gameChange, (ws, sport, 0, mode, crawlInterval,))
        ws.otherTimer.start()