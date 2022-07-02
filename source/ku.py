
import threading
import json
from threading import Timer
import time
import traceback
import logger
import datetime
from google.protobuf import text_format

import action as Action
from upload import initSession, uploadData
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
        self._uploadStatus = True
        self.connection = None
        self.channel = None
        self._sendMqTimer = None
        if self._config['verbose'] :
            self._logger = logger.getLogger("DEBUG")
        else:
            self._logger = logger.getLogger("INFO")

        self._logger.info("KU Crawl Init.")
        self._logger.debug(f'Config : {self._config}')
        self._logger.debug(f'Tasks : {self._tasks}')

    def stop(self):
        self._logger.debug("KUCrawler Start Stop.")

        if not self._sendMqTimer == None:
            self._sendMqTimer.cancel()

        self._config['_running'] = False

        taskStopList = []
        for task in self._tasks:
            webSocketList = task['socket']
            for typeNum in webSocketList:
                for webSocket in webSocketList[typeNum]:
                    stop = threading.Thread(target = webSocketList[typeNum][webSocket]["socket"].stop)
                    taskStopList.append(stop)
                    stop.start()

        for stop in taskStopList:
            stop.join()   

        self._logger.debug("KUCrawler Stoped.")

    def runFromFile(self, fileName):
        self._logger.info(f'[File mode] Start read file[{fileName}].')
        self._config['_running'] = False

        f = open(fileName, "rb")
        Lines = f.readlines()
        for line in Lines :
            obj = json.loads(line)
            line = json.dumps(obj)
            Action.onNext(line.encode("utf-8"))
            
        f.close()

        self.sendToMQ(True)

    def run(self):
        self._logger.info("KU crawl start run")
        _startRunTime = time.perf_counter()

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
                self._logger.info(f'Start login by [{account}]')
                loginManager = LoginManager(account, account_info['password'], loginConfig)
                loginResponse = loginManager.run()

                if loginResponse != {}:
                    self._url = loginResponse["BBWSUrl"]
                    self._urlSearch = loginResponse["BBUrlSearch"]
                    self._protocol = loginResponse["BBProtocol"]
                    self._verifyKey = loginResponse["verify"]
                    self._logger.info(f'Account[{account}] Login success.')
                    break
                else:
                    self._logger.error(loginResponse)
                    self._logger.info(f'Account[{account}] Login fail.')

            else :
                self._logger.info(f'Account[{account}] Detect login parameter.')        

        if len(self._url) == 0 or len(self._urlSearch) == 0 or len(self._protocol) == 0 or len(self._verifyKey) == 0:
            self._logger.error(f'Account[{account}] Login fail and not found login parameter.\n Stop crawl...')
            return

        with open(f'lastLoginInfo.txt', mode='w') as f:
            f.write("url : " + str(self._url) + "\n")
            f.write("search : '" + self._urlSearch + "'\n")
            f.write("protocol : '" + self._protocol + "'\n")
            f.write("verifyKey : '" + self._verifyKey + "'\n")

        self._logger.info(f'Url : {self._url} \n\t UrlSearch : {self._urlSearch} \n\t Protocol : {self._protocol} \n\t VerifyKey : {self._verifyKey}')        

        crawlModeList = {"early" : "0", "today" : "1", "team totals" : "2"}
        crawlList = {"soccer" : "11", "basketball" : "12", "baseball" : "13", "tennis" : "14", "hockey" : "15", "volleyball" : "16", 
                    "badminton" : "17", "eSport" : "18", "football" : "19", "billiardball" : "20", "PP" : "21", "UCL" : "26", "wsc" : "27", "coming soon" : "100"}

        self._sendMqTimer = Timer(10, self.sendToMQ)
        self._sendMqTimer.start()
  
        while self._config['_running'] :
            for task in self._tasks:
                if str(task['game_type']) in crawlList and str(task['game_mode']) in crawlModeList:
                    webSocketList = task['socket']
                    needConnect = False
                    sportType = 1
                    #檢查是否有抓到menu，不用管運動總類，只要確認盤口("早盤"、"今日"、"走地")。
                    #如沒抓到就開啟預設webcoket(type = 1)，抓“全場”
                    receiveData = Action.getNowData()
                    menuKey = "menu" + crawlModeList[task['game_mode']]

                    if menuKey in receiveData :
                        menuList = receiveData[menuKey]

                        for menuItem in menuList:
                            if "type" in menuItem and "count" in menuItem and str(menuItem["type"]) == crawlList[task['game_type']]:
                                countList = menuItem["count"]
                                for index, countNum in enumerate(countList):
                                    if countNum == 0 or index == 0 or index == 1:
                                        continue

                                    checkKey = str(task['game_type']) + "_" + str(task['game_mode']) + "_" + str(index)
                                    if not checkKey in webSocketList:
                                        sportType = index
                                        break

                                break
                    
                    else :
                        sportType = 1

                    typeKey = str(task['game_type']) + "_" + str(task['game_mode']) + "_" + str(sportType)    

                    if not typeKey in webSocketList:
                        webSocketList[typeKey] = {}
                        needConnect = True
                    else : 
                        for typeIndex in webSocketList:
                            if typeIndex in webSocketList:
                                urlList = webSocketList[typeIndex]
                                for url in urlList:
                                    if urlList[url]['socket'].isClose() or time.time() - urlList[url]['socket'].getLastUpdateTime() > 120:
                                        typeKey = typeIndex
                                        sportType = int(typeIndex[-1])
                                        needConnect = True
                                    else :
                                        needConnect = False
                                        break

                                if needConnect: 
                                    break

                    if needConnect:
                        for index, url in enumerate(self._url):
                            if not url in webSocketList[typeKey] or needConnect:
                                socket = KuWebSocket(url, self._urlSearch, self._protocol, on_open=self.on_open, on_message=self.on_message, on_keepLive=self.on_keepLive, crawlIndex=crawlList[task['game_type']], crawlMode=crawlModeList[task['game_mode']], crawlType=str(sportType))
                                startThread = threading.Thread(target = socket.connect)     
                                typeItem = webSocketList[typeKey]
                                typeItem[url] = {
                                    'socket' : socket
                                }
                                startThread.start()

                else:
                    self._logger.debug(f'Not support sport[{task["game_type"]}] mode[{task["game_mode"]}]')

                time.sleep(0.1)    

            time.sleep(1)

        runTime = time.perf_counter() - _startRunTime
        
        self._logger.info(f'KUCrawler Exist.\n Run : {str(datetime.timedelta(seconds=runTime))}')

    def sendToMQ(self, fromFile=False):
        self._logger.info("Send data to MQ.")

        pushData = Action.getNowData()
                
        if self._config['debug'] :
            self._uploadStatus = False
        else :    
            try:
                if self.connection == None or self.channel == None:
                    self.connection, self.channel = initSession(self._config['rabbitmqUrl'])
                    self._uploadStatus = True

                elif self.connection.is_closed or self.channel.is_closed or not self._uploadStatus:
                    if self.connection.is_open:
                        self.connection.close()

                    self.connection, self.channel = initSession(self._config['rabbitmqUrl'])
                    self._uploadStatus = True

            except Exception:
                traceback.print_exc()
                self._logger.error("Can't connect to MQ.")
                self._uploadStatus = False

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

            protobufData, gameType = Action.transformToProtobuf(pushData[game])
            if not protobufData == None and protobufData:
                try:
                    if self._config['dump'] and protobufData:
                        with open(f'{self.name}.bin', mode='ab') as f:
                            f.write(protobufData.SerializeToString())

                        with open(f'{self.name}.txt', mode='a') as f:
                            f.write(text_format.MessageToString(protobufData))
                            
                    if not fromFile and self._config['_running'] == False :
                        break

                    self._logger.debug(f'Start Send [{game}]To MQ.')                            

                    if self._uploadStatus:
                        self._uploadStatus = uploadData(self.channel, protobufData, gameType)
                        self._logger.debug(self._uploadStatus)

                except Exception:
                    traceback.print_exc()
                    self._logger.error("Can't connect to MQ.")
                    
                else:
                    self._logger.debug(f'Send [{game}] To MQ status [{str(self._uploadStatus)}]')

            else :
                self._logger.info("Data is empty." )

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

    def gameRefresh(self, ws, sport, gameType, mode, sleepTime):  
        try:
            command = '{"action":"ckg","sport":' + sport + ',"mode":' + mode + ',"type":' + gameType + ',"dc":' + str(ws.getMessageIndex()) + '}'
            self._logger.info(f'[{sport}][{mode}][{str(gameType)}]Send change.[{command}]')
            if ws.sendCommand(command) == False:
                self._logger.error(f'[{sport}][{mode}][{str(gameType)}] Send command fail, stop thread.')
                return

            if ws.isClose():
                self._logger.error(f'[{sport}][{mode}][{str(gameType)}] Weosocket is closed, stop thread.')
                return

            if self._config['_running'] == True:
                ws.otherTimer = Timer(sleepTime, self.gameRefresh, (ws, sport, gameType, mode, sleepTime,))
                ws.otherTimer.start()

        except Exception:
            traceback.print_exc()
            self._logger.error(f'[{sport}][{mode}][{str(gameType)}] Change thread stop.')

    def on_keepLive(self, ws, sport):
        ws.sendCommand('{"action":"checkTime"}')

    def on_open(self, ws, sport, mode, type):
        self._logger.debug(f'[{sport}][{mode}] Opened connection')

        sendCommand = '{"action":"first","module":0,"device":0,"mode":' + mode + ',"sport":' + sport + ',"deposit":0,"modeId":11,"verify":"' + self._verifyKey  + '","dc":' + str(ws.getMessageIndex()) + '}'
        ws.sendCommand(sendCommand)
    
        sendCommand = '{"action":"cst","module":0,"device":0,"mode":' + mode + ',"sport":' + sport + ',"deposit":0,"modeId":11,"verify":"' + self._verifyKey + '","dc":' + str(ws.getMessageIndex()) + ',"type":' + str(type) + ',"stick":1}'
        print(sendCommand)
        ws.sendCommand(sendCommand)

        crawlInterval = 20
        if self._config['crawl_interval']:
            crawlInterval = self._config['crawl_interval']

        ws.otherTimer = Timer(crawlInterval, self.gameRefresh, (ws, sport, str(type), mode, crawlInterval,))
        ws.otherTimer.start()