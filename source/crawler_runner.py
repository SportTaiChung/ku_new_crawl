
import threading
import datetime
import json
from threading import Timer
import calendar
import time
import traceback

import action as Action
from upload import init_session, upload_data
from loginManager import LoginManager
from kuWebSocket import KuWebSocket

BB_Last = {}
class CrawlerRunner:
        
    def __init__(self, config, tasks, daemon=False):  
        self._daemon = daemon
        self._config = config
        self._tasks = tasks
        self._config['_running'] = True
        #self._loop = asyncio.get_event_loop()
        self._session_pool = None
        self._mq = None
        self._crawler = None
        self._crawler_tasks = []
        self._sport_info_map = None
        self._task_coro_id_crawler_map = {}
        self._closing = False
        #self._logger_factory = init_logger 
        self._logger_factory = None
        self._verifyKey = ""

    def run(self):

        mq_url = 'amqp://test:qwerasdf@211.75.222.147:5672/%2F?heartbeat=60&connection_attempts=3&retry_delay=3&socket_timeout=3'

        # try:
        #     print("Start connect to MQ, pls change network to VPN.")
        #     connection, channel = init_session(mq_url)
        #     print("MQ connect Success, pls change network to normal.(10)")
        #     time.sleep(10)
        # except Exception:
        #     traceback.print_exc()
        #     print("MQ can't connect")

        _upload_status = True

        datetime_dt = datetime.datetime.today()
        datetime_dt = datetime_dt + datetime.timedelta(hours=8)
        datetime_str = datetime_dt.strftime("%m_%d_%H_%M_%S") 
        fileName = "debug_" + datetime_str

        self._logger_factory = open(fileName + ".log", "ab")

        loginConfig = {
            'platformUrl': self._config['ku_domains'],
            'gameUrl': self._config['game_server'],
            'apiPath': self._config['api_path'],
            'loginHeaders': self._config['login_headers']
        }

        for account, account_info in self._config['accounts'].items():
            if not account_info['enabled']:
                continue

            loginManager = LoginManager(account, account_info['password'], loginConfig)
            loginResponse = loginManager.run()

            print(loginResponse)
            print("Ready Connect to Websocket(10), pls change network to VPN")
            time.sleep(10)

            BBUrl = loginResponse["BBWSUrl"]
            BBUrlSearch = loginResponse["BBUrlSearch"]
            BBProtocol = loginResponse["BBProtocol"]
            self.Key = loginResponse["verify"]

            crawlModeList = ["0", "1", "2"]
            crawlList = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "26", "27"]
            threadList = []

            for crawlMode in crawlModeList:
                for crawlIndex in crawlList:
                    thread = threading.Thread(target = self.openSocket, args = ("BBRS", BBUrl, BBUrlSearch, BBProtocol, crawlIndex, crawlMode,))
                    thread.start()
                    threadList.append(thread)

            self.sendToMQ()

            for thread in threadList:
                thread.join()

            
            break 
        self._logger_factory.close()      

    def sendToMQ(self):
        global connection, channel, _upload_status, mq_url
        datetime.datetime(2009, 1, 6, 15, 8, 24, 789)
        print("[" + str(datetime.datetime.now()) + "]Start Send To MQ." )
        pushData = Action.getNowData()
        for game in pushData:
            if "menu" in game:
                continue
            protobufData, gameType = Action.transformToProtobuf(pushData[game])
            if not protobufData == None and protobufData:
                try:
                    if connection.is_closed or channel.is_closed or not _upload_status:
                        if connection.is_open:
                            connection.close()
            
                        connection, channel = init_session(mq_url)
                    _upload_status = upload_data(channel, protobufData, gameType)
                    print(_upload_status)  
                except Exception:
                    traceback.print_exc()
                    print("Can't connect to MQ.")
                else:
                    print("Send MQ status : " + str(_upload_status))
            else :
                print("[" + str(datetime.datetime.now()) + "] Data is empty." )        

        print("[" + str(datetime.datetime.now()) + "]End Send To MQ." )
        repeat = Timer(60, self.sendToMQ)
        repeat.start()            

    def on_BB_message(self, message):
        
        decodeStr = Action.pako_inflate(message)

        self._logger_factory.write(decodeStr + b'\n')
        self._logger_factory.flush()

        Action.onNext(decodeStr)

        datetime.datetime(2009, 1, 6, 15, 8, 24, 789)
        print("[" + str(datetime.datetime.now()) + "]" + str(decodeStr))


    def on_WR_open(self, ws):
        print("Opened connection")
        ws.send('{"action":"orderR","date":"","ball":0,"dc":' + str(ws.getMessageIndex()) + ',"stick":1}')
        time.sleep(keepLive_time)

    def BB_change(self, ws, sport, gameType, mode):
        
        try:
            gameType = Action.getNextGameType(sport, gameType, mode)
            if gameType > 0:
                command = '{"action":"ckg","sport":' + sport + ',"mode": ' + mode + ',"type":' + str(gameType + 1) + ',"dc":' + str(ws.getMessageIndex()) + '}'
                print("[" + sport + "][" + mode + "][" + str(gameType + 1) + "]Send change. :" + command)
                ws.sendCommand(command)
            else:
                
                print("Not found game.[" + sport + "][" + mode + "][" + str(gameType + 1) + "]")

            repeat = Timer(30, self.BB_change, (ws, sport, gameType, mode,))
            repeat.start()    
        except Exception:
            traceback.print_exc()
            print("[" + sport + "][" + mode + "] Change stop.")

    def on_keepLive(self, ws, sport):
        ws.sendCommand('{"action":"checkTime"}')

    def on_BB_open(self, ws, sport, mode):
        print("[" + sport + "][" + mode + "] Opened connection")
        global BB_Last, VERIFY
        sendCommand = ""
        if bool(BB_Last) == False :
            sendCommand = '{"action":"first","module":0,"device":0,"mode":' + mode + ',"sport":' + sport + ',"deposit":0,"modeId":11,"verify":"' + self._verifyKey  + '","dc":' + str(ws.getMessageIndex()) + '}'
            ws.sendCommand(sendCommand)
    
        sendCommand = '{"action":"cst","module":0,"device":0,"mode":' + mode + ',"sport":' + sport + ',"deposit":0,"modeId":11,"verify":"' + self._verifyKey + '","dc":' + str(ws.getMessageIndex()) + ',"type":1,"stick":1}'
        ws.sendCommand(sendCommand)

        BB_Last = sendCommand 

        repeat = Timer(30, self.BB_change, (ws, sport, 0, mode,))
        repeat.start()

    def openSocket(self, SourceType, urlArray, urlSearch, protocol, crawlIndex, crawlMode):
        socketList = []
        ts = 0.0

        while True:
            if (time.time() - ts) < 5 :
                break

            ts = time.time()

            for index, url in enumerate(urlArray):
                socket = KuWebSocket(url, urlSearch, protocol, on_open=self.on_BB_open, on_message=self.on_BB_message, on_keepLive=self.on_keepLive, crawlIndex=crawlIndex, crawlMode=crawlMode)
                a = threading.Thread(target = socket.connect)
                a.start()
                socketList.append(a)

            for socket in socketList:
                socket.join()

        print(SourceType + "[" + crawlIndex + "][" + crawlMode + "] is closed.")