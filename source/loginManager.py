import calendar
import time
import js2py
import numpy
import json
import requests
import datetime
from utils import getQueryString, getRandomMachineId, getBodyStr

class LoginManager:

    def __init__(self, userName, password, config):
        self.userName = userName
        self.password = password
        self.eval_res, self.pwdManager = js2py.run_file("account.js")
        self.session_requests = requests.session()
        self.platformUrl = config['platformUrl']
        self.gameUrl = config['gameUrl'],
        self.apiPath = config['apiPath'],
        self.loginHeaders = config['loginHeaders']

    def run(self):
        memCookieUrl = self.loginPlatform(self.platformUrl, self.apiPath[0]['login'])
        if len(memCookieUrl) <= 0:
            print("Get memCookieUrl Fail.")
            return {}

        if self.getCookie(memCookieUrl):
            print(self.headers)
        else:
            print("Get cookie Fail.")
            return {}

        lobyPath = self.kuLogin(self.platformUrl, self.apiPath[0]['gameLogin'], self.gameUrl[0][0])
        if len(lobyPath) <= 0:
            print("Get kuLogin Fail.")
            return {}    

        return self.goToLoby(self.gameUrl[0][0] + "/" + lobyPath)        
        
    def loginPlatform(self, urlList, path):
        self.headers = self.loginHeaders.copy()
        bodyData = {'txtUser': self.userName,'txtPassword': self.pwdManager.SetHMACMD5(self.password),'screenSize':''}
        for url in urlList: 
            requestUrl = url + '/' + path
            
            response = self.session_requests.post(requestUrl, bodyData, headers = self.headers)
            if response.status_code == 200:
                #print(response.text)
                responseBody = json.loads(response.text)

                self.headers["cookie"] = response.headers["Set-Cookie"]
                return responseBody["SData"].split("#")
            else:
                print("Url[" + url + "] fail")
                print("Status : " + response.status_code)
                print("header : " + response.headers)
                print("body_text : " + response.text)
        return []

    def getCookie(self, urlArary):
        machineId = getRandomMachineId(True)

        timestamp = str(calendar.timegm(time.gmtime()))
        url = urlArary[2] + urlArary[0] + "&brsVal=" + machineId + "&jsoncallback=success_jsonpCallback&_=" + timestamp

        response = self.session_requests.get(url)
        if response.status_code == 200:
            responseBody = response.text.replace('success_jsonpCallback', '').replace('(', '').replace(")", "").replace(";", "")
            cookieJson = json.loads(responseBody)
            self.headers["cookie"] += " xxx=" + cookieJson["x"] + ";" + " yyy=" + cookieJson["y"] + ";"
            self.headers["cookie"] += "  icwN2=0; bdnotice=0;"
            userKey = "Tm_" + getQueryString(url, "a") + "_" + getQueryString(url, "c")
            self.headers[userKey] = "1"
            return True
        else: 
            print("Url[" + url + "] fail")
            print("Status : " + response.status_code)
            print("header : " + response.headers)
            print("body_text : " + response.text) 
            return False

    def kuLogin(self, urlList, path, gameUrl):
        header = self.loginHeaders.copy()
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

        for url in urlList:
            header["authority"] = url.replace("http://", "").replace("https://", "")
            requestUrl = url + "/" + path + gameUrl
            response = self.session_requests.get(requestUrl, headers = header)
            if response.status_code == 200:
                return getBodyStr("bbView/Login.aspx", '");', response.text)
            else:
                print("Url[" + url + "] fail")
                print("Status : " + response.status_code)
                print("header : " + response.headers)
                print("body_text : " + response.text) 
                
        return ""
             
    def goToLoby(self, lobyUrl):
        header = self.loginHeaders.copy()
        header['user-agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1'
        header['authority'] = 'dsp.nbb21f.net'
        header['accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
        header['accept-encoding'] = 'gzip, deflate, br'
        header['accept-language'] = 'zh-TW,zh;q=0.9'
        header['referer'] = 'https://www.wa777.net/'
    
        response = self.session_requests.get(lobyUrl, headers = header)
        if response.status_code == 200:
            rawData = getBodyStr("window.connStr = ", ';', response.text)[len("window.connStr = "):]
            dataJson = json.loads(rawData)

            return {
                "verify" : dataJson["Verify"],
                "BBWSUrl" : dataJson["BBWSUrl"],
                "BBUrlSearch": dataJson["BBUrlSearch"],
                "BBProtocol" : dataJson["BBProtocol"],
                "WRWSUrl" : dataJson["WRWSUrl"],
                "WRUrlSearch" : dataJson["WRUrlSearch"],
                "WRProtocol" : dataJson["WRProtocol"],
                "token" : dataJson["Account"] + "_" + dataJson["SessionID"]
            }
        else :
            print("Status : " + response.status_code)
            print("header : " + response.headers)
            print("body_text : " + response.text)
            return {}  
            
    #Not Use
    def requestOpenSocket(self, token, SourceType, urlArray, urlSearch):
        header = {}
        header['user-agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1'
        header["Content-type"] = "application/json;charset=UTF-8"
        header["Accept"] = "application/json, text/javascript, text/plain, */*; q=0.01"
        header["Referer"] = "https://dcf.nbb21cf.net/js/v4084/min/XHRWorker.js"

        datetime.datetime(2009, 1, 6, 15, 8, 24, 789)
        payload = "發送時間: " + str(datetime.datetime.now()) + "\r\ntoken: " + token + "\r\nsource: " + SourceType + "\r\n\r\nWS Connect Start!!!\r\nurlArray: "
        payload += json.dumps(urlArray) + "\r\nUrlSearch:" + urlSearch + "\r\nLastUrlUpdateTime:0"
    
        payload = str(payload.encode("utf-8"))
        url = "https://dcf.nbb21cf.net/ajax/AjaxLog.aspx?method=CircuitLog&mode=" + SourceType + "&isCompress=0"

        response = self.session_requests.post(url, headers = header, data= payload )
        if response.status_code == 200:
            print("requestOpenSocket : " + response.text) 