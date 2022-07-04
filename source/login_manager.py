import calendar
import time
import js2py
import numpy
import json
import requests
import datetime
from utils import get_query_string, get_random_machine_id, get_body_str
import logger

class LoginManager:

    def __init__(self, user_name, password, config):
        self.user_name = user_name
        self.password = password
        self.eval_res, self.pwd_manager = js2py.run_file("account.js")
        self.session_requests = requests.session()
        self.platform_url = config['platform_url']
        self.game_url = config['game_url'],
        self.api_path = config['api_path'],
        self.login_headers = config['login_headers']

    def run(self):
        mem_cookie_url = self.login_platform(self.platform_url, self.api_path[0]['login'])
        if len(mem_cookie_url) <= 0:
            logger.get_logger().error("Get mem_cookie_url Fail.")
            return {}

        if self.get_cookie(mem_cookie_url):
            logger.get_logger().debug(self.headers)
        else:
            logger.get_logger().error("Get cookie Fail.")
            return {}

        lobby_path = self.ku_login(self.platform_url, self.api_path[0]['game_login'], self.game_url[0][0])
        if len(lobby_path) <= 0:
            logger.get_logger().error("Get ku_login Fail.")
            return {}    

        return self.go_to_lobby(self.game_url[0][0] + "/" + lobby_path)        
        
    def login_platform(self, url_list, path):
        self.headers = self.login_headers.copy()
        body_data = {'txtUser': self.user_name,'txtPassword': self.pwd_manager.SetHMACMD5(self.password),'screenSize':''}
        for url in url_list: 
            request_url = url + '/' + path
            
            response = self.session_requests.post(request_url, body_data, headers = self.headers)
            if response.status_code == 200:
                logger.get_logger().debug(response.text)
                response_body = json.loads(response.text)

                self.headers["cookie"] = response.headers["Set-Cookie"]
                return response_body["SData"].split("#")
            else:
                logger.get_logger().error(response)

        return []

    def get_cookie(self, url_arary):
        machine_id = get_random_machine_id(True)

        timestamp = str(calendar.timegm(time.gmtime()))
        url = url_arary[2] + url_arary[0] + "&brsVal=" + machine_id + "&jsoncallback=success_jsonpCallback&_=" + timestamp

        response = self.session_requests.get(url)
        if response.status_code == 200:
            response_body = response.text.replace('success_jsonpCallback', '').replace('(', '').replace(")", "").replace(";", "")
            cookie_json = json.loads(response_body)
            self.headers["cookie"] += " xxx=" + cookie_json["x"] + ";" + " yyy=" + cookie_json["y"] + ";"
            self.headers["cookie"] += "  icwN2=0; bdnotice=0;"
            user_key = "Tm_" + get_query_string(url, "a") + "_" + get_query_string(url, "c")
            self.headers[user_key] = "1"
            return True
        else: 
            logger.get_logger().error(response)
            return False

    def ku_login(self, url_list, path, game_url):
        header = self.login_headers.copy()
        header["accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9" 
        header["accept-encoding"] = "gzip, deflate, br"
        header["accept-language"] = "zh-TW,zh;q=0.9"
        header["sec-ch-ua"] = '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"'
        header["sec-ch-ua-mobile"] = "?0" 
        header["sec-ch-ua-platform"] = "macOS"
        header["sec-fetch-dest"] = "document"
        header["sec-fetch-mode"] = "navigate"
        header["sec-fetch-site"] = "none"
        header["sec-fetch-user"] = "?1"
        header["upgrade-insecure-requests"] = "1"
        header["cookie"] = self.headers["cookie"].replace("path=/; HttpOnly, ", "")

        for url in url_list:
            header["authority"] = url.replace("http://", "").replace("https://", "")
            request_url = url + "/" + path + game_url
            response = self.session_requests.get(request_url, headers = header)
            if response.status_code == 200:
                return get_body_str("bbView/Login.aspx", '");', response.text)
            else:
                logger.get_logger().error(response)
                
        return ""
             
    def go_to_lobby(self, lobby_url):
        header = self.login_headers.copy()
        header['user-agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1'
        header['authority'] = 'dsp.nbb21f.net'
        header['accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
        header['accept-encoding'] = 'gzip, deflate, br'
        header['accept-language'] = 'zh-TW,zh;q=0.9'
        header['referer'] = 'https://www.wa777.net/'
    
        response = self.session_requests.get(lobby_url, headers = header)
        if response.status_code == 200:
            response_raw_data = get_body_str("window.connStr = ", ';', response.text)[len("window.connStr = "):]
            data_json = json.loads(response_raw_data)

            return {
                "verify" : data_json["Verify"],
                "BBWS_url" : data_json["BBWSUrl"],
                "BB_url_search": data_json["BBUrlSearch"],
                "BB_protocol" : data_json["BBProtocol"],
                "WRWS_url" : data_json["WRWSUrl"],
                "WR_url_search" : data_json["WRUrlSearch"],
                "WR_protocol" : data_json["WRProtocol"],
                "token" : data_json["Account"] + "_" + data_json["SessionID"]
            }
        else :
            logger.get_logger().error(response)
            return {}
            