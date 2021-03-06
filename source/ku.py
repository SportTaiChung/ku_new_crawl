
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
        self._filter_list = {}
        self._last_send_mq_time = time.time()
        if self._config['verbose']:
            self._logger = logger.get_logger("DEBUG")
        else:
            self._logger = logger.get_logger("INFO")

        self._logger.info("KU Crawl Init.")
        self._logger.debug(f'Config : {self._config}')
        self._logger.debug(f'Tasks : {self._tasks}')

    def stop(self):
        self._logger.debug("KUCrawler Start Stop.")

        if self._send_mq_timer is not None:
            self._send_mq_timer.cancel()

        self._config['_running'] = False

        task_stop_list = []
        for task in self._tasks:
            websocket_list = task['socket']
            for type_num in websocket_list:
                for websocket in websocket_list[type_num]:
                    stop = threading.Thread(target=websocket_list[type_num][websocket]["socket"].stop)
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
        for line in Lines:
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

            else:
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

        crawl_mode_list = {"early": "0", "today": "1", "live": "2"}
        crawl_sport_list = {"soccer": "11", "basketball": "12", "baseball": "13", "tennis": "14", "hockey": "15", "volleyball": "16",
                            "badminton": "17", "eSport": "18", "football": "19", "billiardball": "20", "PP": "21", "UCL": "26", "wsc": "27", "coming soon": "100"}

        self._send_mq_timer = Timer(10, self.send_to_mq)
        self._send_mq_timer.start()

        while self._config['_running']:
            for task in self._tasks:
                if str(task['game_type']) in crawl_sport_list and str(task['game_mode']) in crawl_mode_list:

                    if task['filter']:
                        if not crawl_sport_list[task['game_type']] in self._filter_list:
                            self._filter_list[crawl_sport_list[task['game_type']]] = {}

                        if not crawl_mode_list[task['game_mode']] in self._filter_list[crawl_sport_list[task['game_type']]]:
                            self._filter_list[crawl_sport_list[task['game_type']]][crawl_mode_list[task['game_mode']]] = task['filter']

                    websocket_list = task['socket']
                    need_connect = False
                    sport_type = 1
                    # ?????????????????????menu?????????????????????????????????????????????("??????"???"??????"???"??????")???
                    # ???????????????????????????webcoket(type = 1)??????????????????
                    receive_data = Action.get_now_data()
                    menu_key = "menu" + crawl_mode_list[task['game_mode']]

                    if menu_key in receive_data:
                        menu_list = receive_data[menu_key]

                        for menu_item in menu_list:
                            if "type" in menu_item and "count" in menu_item and str(menu_item["type"]) == crawl_sport_list[task['game_type']]:
                                count_list = menu_item["count"]
                                for index, count_num in enumerate(count_list):
                                    if count_num == 0 or index == 0 or index == 1:
                                        continue

                                    check_key = str(task['game_type']) + "_" + str(task['game_mode']) + "_" + str(index)
                                    if check_key not in websocket_list:
                                        sport_type = index
                                        break

                                break

                    else:
                        sport_type = 1

                    type_key = str(task['game_type']) + "_" + str(task['game_mode']) + "_" + str(sport_type)

                    if type_key not in websocket_list:
                        websocket_list[type_key] = {}
                        need_connect = True
                    else:
                        for type_index in websocket_list:
                            url_list = websocket_list[type_index]
                            for url in url_list:
                                if url_list[url]['socket'].is_close() or time.time() - url_list[url]['socket'].get_last_update_time() > 120:
                                    type_key = type_index
                                    sport_type = int(type_index[-1])
                                    need_connect = True
                                else:
                                    need_connect = False
                                    break

                            if need_connect:
                                break

                    if need_connect:
                        for index, url in enumerate(self._url):
                            if url not in websocket_list[type_key] or need_connect:

                                socket = KuWebsocket(url, self._url_search, self._protocol, on_open=self.on_open, on_message=self.on_message, on_keep_live=self.on_keep_live, crawl_index=crawl_sport_list[task['game_type']], crawl_mode=crawl_mode_list[task['game_mode']], crawl_type=str(sport_type))
                                start_thread = threading.Thread(target=socket.connect)
                                type_item = websocket_list[type_key]
                                type_item[url] = {
                                    'socket': socket
                                }
                                start_thread.start()

                else:
                    self._logger.debug(f'Not support sport[{task["game_type"]}] mode[{task["game_mode"]}]')

                time.sleep(0.1)

            if time.time() - self._last_send_mq_time > 60:
                if self._send_mq_timer is not None:
                    self._send_mq_timer.cancel()

                self.send_to_mq()

            time.sleep(1)

        run_time = time.perf_counter() - _start_run_time

        self._logger.info(f'KUCrawler Exist.\n Run : {str(datetime.timedelta(seconds=run_time))}')

    def send_to_mq(self, fromFile=False):
        self._logger.info("Send data to MQ.")

        self._last_send_mq_time = time.time()

        push_data = Action.get_now_data()

        if self._config['debug']:
            self._upload_status = False
        else:
            try:
                if self.connection is None or self.channel is None:
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

            # Clear file
            with open(f'{self.name}.bin', mode='wb') as f:
                f.write(b'')

            # Clear file
            with open(f'{self.name}.txt', mode='w') as f:
                f.write('')

        for sport in push_data:
            if "menu" in sport:
                continue

            protobuf_data, sport_type = Action.transform_to_protobuf(push_data[sport], self._filter_list)
            if protobuf_data is not None and protobuf_data:
                try:
                    if self._config['dump'] and protobuf_data:
                        with open(f'{self.name}.bin', mode='ab') as f:
                            f.write(protobuf_data.SerializeToString())

                        with open(f'{self.name}.txt', mode='a') as f:
                            f.write(text_format.MessageToString(protobuf_data))

                    if not fromFile and self._config['_running'] is False:
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

            else:
                self._logger.info("Data is empty.")

        if self._config['_running'] is True:
            push_interval = 30
            if self._config['push_interval']:
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
            # ?????????????????????????????????server?????????????????????????????????(??????????????????action???????????????"????????????")
            # {
            #   "action":"ckg",                 ?????????????????? (cm:???????????????cs:???????????????ckg:????????????)????????????
            #   "mode": {??????},                  ??????README 0: ?????????1:?????????2:??????
            #   "sport":{??????},                  ??????README
            #   "type":{??????},                   ??????README ???????????????
            #   "dc":{???????????????}                 ?????????????????????+1??????1??????
            # }
            command = '{"action":"ckg","sport":' + sport + ',"mode":' + mode + ',"type":' + sport_type + ',"dc":' + str(ws.get_message_index()) + '}'
            self._logger.info(f'[{sport}][{mode}][{str(sport_type)}]Send change.[{command}]')
            if ws.send_command(command) is False:
                self._logger.error(f'[{sport}][{mode}][{str(sport_type)}] Send command fail, stop thread.')
                return

            if ws.is_close():
                self._logger.error(f'[{sport}][{mode}][{str(sport_type)}] Weosocket is closed, stop thread.')
                return

            if self._config['_running'] is True:
                ws.other_timer = Timer(sleep_time, self.game_refresh, (ws, sport, sport_type, mode, sleep_time,))
                ws.other_timer.start()

        except Exception:
            traceback.print_exc()
            self._logger.error(f'[{sport}][{mode}][{str(sport_type)}] Change thread stop.')

    def on_keep_live(self, ws, sport):
        # heartbeat ????????????
        ws.send_command('{"action":"checkTime"}')

    def on_open(self, ws, sport, mode, type):
        self._logger.debug(f'[{sport}][{mode}] Opened connection')
        # websocket ???????????????????????????????????????
        # {
        #   "action":"first",               ???????????? "first"
        #   "module":0,                     ???????????????0(????????????websocket?????????)
        #   "device":0,                     ???????????????0(????????????websocket?????????)
        #   "mode": {??????},                  ??????README 0: ?????????1:?????????2:??????
        #   "sport":{??????},                  ??????README
        #   "deposit":0,                    ???????????????0(????????????websocket?????????)
        #   "modeId":11,                    ???????????????11(????????????websocket?????????)
        #   "verify":{??????webosocket key},   ??????webosocket ?????????Key???????????????????????????
        #   "dc":{???????????????}                 ?????????????????????+1??????1??????
        # }
        # ????????????
        # {
        #   "action":"cst",                 ???????????? "cst"
        #   "module":0,                     ???????????????0(????????????websocket?????????)
        #   "device":0,                     ???????????????0(????????????websocket?????????)
        #   "mode": {??????},                  ??????README 0: ?????????1:?????????2:??????
        #   "sport":{??????},                  ??????README
        #   "type":{??????},                   ??????README ???????????????
        #   "deposit":0,                    ???????????????0(????????????websocket?????????)
        #   "modeId":11,                    ???????????????11(????????????websocket?????????)
        #   "verify":{??????webosocket key},   ??????webosocket ?????????Key???????????????????????????
        #   "dc":{???????????????},                ?????????????????????+1??????1??????
        #   "stick":1                       ???????????????1(????????????websocket?????????)
        # }
        send_command = '{"action":"first","module":0,"device":0,"mode":' + mode + ',"sport":' + sport + ',"deposit":0,"modeId":11,"verify":"' + self._verify_key + '","dc":' + str(ws.get_message_index()) + '}'
        ws.send_command(send_command)

        send_command = '{"action":"cst","module":0,"device":0,"mode":' + mode + ',"sport":' + sport + ',"deposit":0,"modeId":11,"verify":"' + self._verify_key + '","dc":' + str(ws.get_message_index()) + ',"type":' + str(type) + ',"stick":1}'
        ws.send_command(send_command)

        crawl_interval = 20
        if self._config['crawl_interval']:
            crawl_interval = self._config['crawl_interval']

        ws.other_timer = Timer(crawl_interval, self.game_refresh, (ws, sport, str(type), mode, crawl_interval,))
        ws.other_timer.start()
