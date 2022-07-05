
import threading
import json
from threading import Timer
import time
import traceback
import logger
import datetime
from google.protobuf import text_format
from constants import Mapping

import action as Action
from upload import init_session, upload_data
from login_manager import LoginManager
from ku_websocket import KuWebsocket

class KUCrawler:
    def __init__(self, tasks, config, daemon=False):  
        self._config = config
        self._tasks = tasks
        self._config['_running'] = True
        self.name = 'ku_crawl'
        self._url = []
        self._url_search = ""
        self._protocol = ""
        self._verify_key = ""
        self._upload_status = True
        self.connection = None
        self.channel = None
        self._send_mq_timer = None
        self._last_send_mq_time = time.time()
        if self._config['verbose'] :
            self._logger = logger.get_logger("DEBUG")
        else:
            self._logger = logger.get_logger("INFO")

        self._logger.info("KU Crawl Init.")
        self._logger.debug(f'Config : {self._config}')
        self._logger.debug(f'Tasks : {self._tasks}')

    def stop(self):
        self._logger.debug("KUCrawler Start Stop.")

        if not self._send_mq_timer == None:
            self._send_mq_timer.cancel()

        self._config['_running'] = False

        task_stop_list = []
        for task in self._tasks:
            websocket_list = task['socket']
            for type_num in websocket_list:
                for websocket in websocket_list[type_num]:
                    stop = threading.Thread(target = websocket_list[type_num][websocket]["socket"].stop)
                    task_stop_list.append(stop)
                    stop.start()

        for stop in task_stop_list:
            stop.join()   

        self._logger.debug("KUCrawler Stoped.")

    def run_from_file(self, fileName):
        self._logger.info(f'[File mode] Start read file[{fileName}].')
        self._config['_running'] = False

        f = open(fileName, "rb")
        Lines = f.readlines()
        for line in Lines :
            obj = json.loads(line)
            line = json.dumps(obj)
            Action.onNext(line.encode("utf-8"))
            
        f.close()

        self.send_to_mq(True)

    def run(self):
        self._logger.info("KU crawl start run")
        _start_run_time = time.perf_counter()

        login_config = {
            'platform_url': self._config['ku_domains'],
            'game_url': self._config['game_server'],
            'api_path': self._config['api_path'],
            'login_headers': self._config['login_headers']
        }

        for account, account_info in self._config['accounts'].items():
            if not account_info['enabled']:
                continue

            self._url = account_info.get("url", [])
            self._url_search = account_info.get("search", "")
            self._protocol = account_info.get("protocol", "")
            self._verify_key = account_info.get("verify_key", "")   

            if len(self._url) == 0 or len(self._url_search) == 0 or len(self._protocol) == 0 or len(self._verify_key) == 0:
                self._logger.info(f'Start login by [{account}]')
                login_manager = LoginManager(account, account_info['password'], login_config)
                login_response = login_manager.run()

                if login_response != {}:
                    self._url = login_response["BBWS_url"]
                    self._url_search = login_response["BB_url_search"]
                    self._protocol = login_response["BB_protocol"]
                    self._verify_key = login_response["verify"]
                    self._logger.info(f'Account[{account}] Login success.')
                    break
                else:
                    self._logger.error(login_response)
                    self._logger.info(f'Account[{account}] Login fail.')

            else :
                self._logger.info(f'Account[{account}] Detect login parameter.')        

        if len(self._url) == 0 or len(self._url_search) == 0 or len(self._protocol) == 0 or len(self._verify_key) == 0:
            self._logger.error(f'Account[{account}] Login fail and not found login parameter.\n Stop crawl...')
            return

        with open(f'last_login_info.txt', mode='w') as f:
            f.write("url : " + str(self._url) + "\n")
            f.write("search : '" + self._url_search + "'\n")
            f.write("protocol : '" + self._protocol + "'\n")
            f.write("verify_key : '" + self._verify_key + "'\n")

        self._logger.info(f'Url : {self._url} \n\t UrlSearch : {self._url_search} \n\t Protocol : {self._protocol} \n\t VerifyKey : {self._verify_key}')        

        crawl_mode_list = {"early" : "0", "today" : "1", "live" : "2"}
        crawl_sport_list = {"soccer" : "11", "basketball" : "12", "baseball" : "13", "tennis" : "14", "hockey" : "15", "volleyball" : "16", 
                    "badminton" : "17", "eSport" : "18", "football" : "19", "billiardball" : "20", "PP" : "21", "UCL" : "26", "wsc" : "27", "coming soon" : "100"}

        self._send_mq_timer = Timer(10, self.send_to_mq)
        self._send_mq_timer.start()
  
        while self._config['_running'] :
            for task in self._tasks:
                if str(task['game_type']) in crawl_sport_list and str(task['game_mode']) in crawl_mode_list:
                    websocket_list = task['socket']
                    need_connect = False
                    sport_index = 1
                    #檢查是否有抓到menu，不用管運動總類，只要確認盤口("早盤"、"今日"、"走地")。
                    #如沒抓到就開啟預設webcoket(type = 1)，抓“全場”
                    receive_data = Action.get_now_data()
                    menu_key = "menu" + crawl_mode_list[task['game_mode']]

                    if menu_key in receive_data :
                        menu_list = receive_data[menu_key]

                        for menu_item in menu_list:
                            if "type" in menu_item and "count" in menu_item and str(menu_item["type"]) == crawl_sport_list[task['game_type']]:
                                count_list = menu_item["count"]
                                for index, count_num in enumerate(count_list):
                                    if count_num == 0 or index == 0 or index == 1:
                                        continue

                                    check_key = str(task['game_type']) + "_" + str(task['game_mode']) + "_" + str(index)
                                    if not check_key in websocket_list:
                                        sport_index = index
                                        break

                                break
                    
                    else :
                        sport_index = 1

                    type_key = str(task['game_type']) + "_" + str(task['game_mode']) + "_" + str(sport_index)    

                    if not type_key in websocket_list:
                        websocket_list[type_key] = {}
                        need_connect = True
                    else : 
                        for type_index in websocket_list:
                            url_list = websocket_list[type_index]
                            for url in url_list:
                                if url_list[url]['socket'].is_close() or time.time() - url_list[url]['socket'].get_last_update_time() > 120:
                                    type_key = type_index
                                    sport_index = int(type_index[-1])
                                    need_connect = True
                                else :
                                    need_connect = False
                                    break

                            if need_connect: 
                                break

                    if need_connect:
                        for index, url in enumerate(self._url):
                            if not url in websocket_list[type_key] or need_connect:
                                sport_type_list = Mapping.sport_type[task['game_type']][str(task['game_mode'])]
                                if sport_index <= len(sport_type_list):
                                    sport_type = sport_type_list[sport_index - 1]
                                else :
                                    sport_type = sport_index

                                socket = KuWebsocket(url, self._url_search, self._protocol, on_open=self.on_open, on_message=self.on_message, on_keep_live=self.on_keep_live, crawl_index=crawl_sport_list[task['game_type']], crawl_mode=crawl_mode_list[task['game_mode']], crawl_type=str(sport_type))
                                start_thread = threading.Thread(target = socket.connect)     
                                type_item = websocket_list[type_key]
                                type_item[url] = {
                                    'socket' : socket
                                }
                                start_thread.start()

                else:
                    self._logger.debug(f'Not support sport[{task["game_type"]}] mode[{task["game_mode"]}]')

                time.sleep(0.1)    

            if time.time() - self._last_send_mq_time > 60:
                if not self._send_mq_timer == None:
                    self._send_mq_timer.cancel()

                self.send_to_mq()    

            time.sleep(1)

        run_time = time.perf_counter() - _start_run_time
        
        self._logger.info(f'KUCrawler Exist.\n Run : {str(datetime.timedelta(seconds=run_time))}')

    def send_to_mq(self, fromFile=False):
        self._logger.info("Send data to MQ.")

        self._last_send_mq_time = time.time()

        push_data = Action.get_now_data()
                
        if self._config['debug'] :
            self._upload_status = False
        else :
            try:
                if self.connection == None or self.channel == None:
                    self.connection, self.channel = init_session(self._config['rabbitmqUrl'])
                    self._upload_status = True

                elif self.connection.is_closed or self.channel.is_closed or not self._upload_status:
                    if self.connection.is_open:
                        self.connection.close()

                    self.connection, self.channel = init_session(self._config['rabbitmqUrl'])
                    self._upload_status = True

            except Exception:
                traceback.print_exc()
                self._logger.error("Can't connect to MQ.")
                self._upload_status = False

        if self._config['dump'] and push_data:
            with open(f'{self.name}.raw', mode='wb') as f:
                f.write(json.dumps(push_data).encode('utf-8'))

            #Clear file
            with open(f'{self.name}.bin', mode='wb') as f:
                f.write(b'')

            #Clear file
            with open(f'{self.name}.txt', mode='w') as f:
                f.write('')                  

        for sport in push_data:
            if "menu" in sport:
                continue

            protobuf_data, sport_type = Action.transform_to_protobuf(push_data[sport])
            if not protobuf_data == None and protobuf_data:
                try:
                    if self._config['dump'] and protobuf_data:
                        with open(f'{self.name}.bin', mode='ab') as f:
                            f.write(protobuf_data.SerializeToString())

                        with open(f'{self.name}.txt', mode='a') as f:
                            f.write(text_format.MessageToString(protobuf_data))
                            
                    if not fromFile and self._config['_running'] == False :
                        break

                    self._logger.debug(f'Start Send [{sport}]To MQ.')                            

                    if self._upload_status:
                        self._upload_status = upload_data(self.channel, protobuf_data, sport_type)
                        self._logger.debug(self._upload_status)

                except Exception:
                    traceback.print_exc()
                    self._logger.error("Can't connect to MQ.")
                    
                else:
                    self._logger.debug(f'Send [{sport}] To MQ status [{str(self._upload_status)}]')

            else :
                self._logger.info("Data is empty." )

        if self._config['_running'] == True :
            push_interval = 30
            if self._config['push_interval'] :
                push_interval = self._config['push_interval']

            self._send_mq_timer = Timer(push_interval, self.send_to_mq)
            self._send_mq_timer.start()

    def on_message(self, socket_key, message):
        
        decode_str = Action.pako_inflate(message)

        self._logger.debug(str(decode_str))

        if self._config['dump'] and decode_str:
            with open(f'{self.name}_{socket_key}.log', mode='ab') as f:
                f.write(decode_str + b'\n')

        Action.onNext(decode_str)

    def game_refresh(self, ws, sport, sport_type, mode, sleep_time):  
        try:
            # 切換數據類型，每送一次server會回傳該類型的完整數據(該回傳數據內action值為請求的"命令類型")
            # {
            #   "action":"ckg",                 根據命令類型 (cm:切換盤口、cs:切換球種、ckg:切換玩法)取得數據
            #   "mode": {盤口},                  參照README 0: 早盤、1:今日、2:走地
            #   "sport":{球種},                  參照README
            #   "type":{玩法},                   參照README 各球種不同
            #   "dc":{命令流水號}                 每傳送一筆該值+1，由1開始
            #}
            command = '{"action":"ckg","sport":' + sport + ',"mode":' + mode + ',"type":' + sport_type + ',"dc":' + str(ws.get_message_index()) + '}'
            self._logger.info(f'[{sport}][{mode}][{str(sport_type)}]Send change.[{command}]')
            if ws.send_command(command) == False:
                self._logger.error(f'[{sport}][{mode}][{str(sport_type)}] Send command fail, stop thread.')
                return

            if ws.is_close():
                self._logger.error(f'[{sport}][{mode}][{str(sport_type)}] Weosocket is closed, stop thread.')
                return

            if self._config['_running'] == True:
                ws.other_timer = Timer(sleep_time, self.game_refresh, (ws, sport, sport_type, mode, sleep_time,))
                ws.other_timer.start()

        except Exception:
            traceback.print_exc()
            self._logger.error(f'[{sport}][{mode}][{str(sport_type)}] Change thread stop.')

    def on_keep_live(self, ws, sport):
        # heartbeat 固定格式
        ws.send_command('{"action":"checkTime"}')

    def on_open(self, ws, sport, mode, type):
        self._logger.debug(f'[{sport}][{mode}] Opened connection')
        # websocket 第一次連線需要發送資料格式
        # {
        #   "action":"first",               命令類型 "first"
        #   "module":0,                     無意義，帶0(參照官網websocket傳送值)
        #   "device":0,                     無意義，帶0(參照官網websocket傳送值)
        #   "mode": {盤口},                  參照README 0: 早盤、1:今日、2:走地
        #   "sport":{球種},                  參照README
        #   "deposit":0,                    無意義，帶0(參照官網websocket傳送值)
        #   "modeId":11,                    無意義，帶11(參照官網websocket傳送值)
        #   "verify":{登入webosocket key},   登入webosocket 需要的Key，由進入大廳時取得
        #   "dc":{命令流水號}                 每傳送一筆該值+1，由1開始
        #}
        # 要求數據
        # {
        #   "action":"cst",                 命令類型 "cst"
        #   "module":0,                     無意義，帶0(參照官網websocket傳送值)
        #   "device":0,                     無意義，帶0(參照官網websocket傳送值)
        #   "mode": {盤口},                  參照README 0: 早盤、1:今日、2:走地
        #   "sport":{球種},                  參照README
        #   "type":{玩法},                   參照README 各球種不同
        #   "deposit":0,                    無意義，帶0(參照官網websocket傳送值)
        #   "modeId":11,                    無意義，帶11(參照官網websocket傳送值)
        #   "verify":{登入webosocket key},   登入webosocket 需要的Key，由進入大廳時取得
        #   "dc":{命令流水號},                每傳送一筆該值+1，由1開始
        #   "stick":1                       無意義，帶1(參照官網websocket傳送值)
        #}        
        send_command = '{"action":"first","module":0,"device":0,"mode":' + mode + ',"sport":' + sport + ',"deposit":0,"modeId":11,"verify":"' + self._verify_key  + '","dc":' + str(ws.get_message_index()) + '}'
        ws.send_command(send_command)
    
        send_command = '{"action":"cst","module":0,"device":0,"mode":' + mode + ',"sport":' + sport + ',"deposit":0,"modeId":11,"verify":"' + self._verify_key + '","dc":' + str(ws.get_message_index()) + ',"type":' + str(type) + ',"stick":1}'
        ws.send_command(send_command)

        crawl_interval = 20
        if self._config['crawl_interval']:
            crawl_interval = self._config['crawl_interval']

        ws.other_timer = Timer(crawl_interval, self.game_refresh, (ws, sport, str(type), mode, crawl_interval,))
        ws.other_timer.start()