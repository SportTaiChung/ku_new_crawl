import requests
import threading
import datetime
import json
from threading import Timer
import calendar;
import time;
import js2py
import numpy

from random import Random
import websocket

default_headers = {'user-agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1'}

session_requests = requests.session()

keepLive_time = 25

VERIFY = ""

WR_index = 1
BB_index = 1

eval_res, jsfile = js2py.run_file("pako.js")
eval_res, password = js2py.run_file("account.js")

BB_Last = {}

defaultMachineId = "c1000b11349e8d89dbb53f19b17ee805"

def randomMachineId():
    str = ''
    chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
    length = len(chars) - 1
    random = Random()
    for i in range(32):
        str+=chars[random.randint(0,length)]
    return str.lower()

def WRKeepLive(ws):
    if ws :
        print("Send WR keeplive.")
        ws.send('{"action":"checkSN"}')
        r = Timer(keepLive_time, WRKeepLive, (ws,))
        r.start()
    else:
        print("WR keeplive stop.")

def BBKeepLive(ws):
    if ws :
        print("Send BB keeplive.")
        ws.send('{"action":"checkTime"}')
        r = Timer(keepLive_time, BBKeepLive, (ws,))
        r.start()
    else:
        print("BB keeplive stop.")

def on_WR_message(ws, message):
    cc = jsfile.pako.inflate(message, {'to':"string"})
    print("WR : " + cc)

def on_BB_message(ws, message):
    global BB_Last
    cc = jsfile.pako.inflate(message, {'to':"string"})
    BB_Last = cc
    print("BB : "  + cc)

def on_WR_error(ws, error):
    print("WR error : ")
    print(error)

def on_BB_error(ws, error):
    print("BB error : ")
    print(error)

def on_WR_close(ws, close_status_code, close_msg):
    print("### WR closed ###")
    print(close_msg)

def on_BB_close(ws, close_status_code, close_msg):
    print("### BB closed ### ")
    print(close_msg)

def on_WR_open(ws):
    print("WR Opened connection")
    global WR_index
    ws.send('{"action":"orderR","date":"","ball":0,"dc":' + str(WR_index) + ',"stick":1}')
    WR_index += 1
    time.sleep(keepLive_time)
    BBKeepLive(ws)

def on_BB_open(ws):
    print("BB Opened connection")
    global BB_index, BB_Last, VERIFY
    sendCommand = ""
    if bool(BB_Last) == False :
        sendCommand = '{"action":"first","module":0,"device":0,"mode":-1,"sport":-1,"deposit":0,"modeId":11,"verify":"' + VERIFY + '","dc":' + str(BB_index) + '}'
    else:
        sendCommand = '{"action":"cst","module":0,"device":0,"mode":1,"sport":12,"deposit":0,"modeId":11,"verify":"' + VERIFY + '","dc":' + str(BB_index) + ',"type":1,"stick":1}'
    
    print("BB Send : " + sendCommand)
    ws.send(sendCommand)
    BB_index += 1
    time.sleep(keepLive_time)
    WRKeepLive(ws)

def openWebSocket(url, option, protocol, type):
    print("Open WebSocket : " + url + option)

    #websocket.enableTrace(True)

    if type == "BB" :
        on_open = on_BB_open
        on_message = on_BB_message
        on_error = on_BB_error
        on_close = on_BB_close
    else:
        on_open = on_WR_open
        on_message = on_WR_message
        on_error = on_WR_error
        on_close = on_WR_close

    ws = websocket.WebSocketApp(
        url + option,
        header=[
            "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
            "Accept-Encoding: gzip, deflate, br",
            "Accept-Language: zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cache-Control: no-cache",
            "Pragma: no-cache",
            "Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits",
            "Sec-WebSocket-Protocol: " + protocol
        ],
        on_open=on_open,
        on_message=on_message,
        on_error=on_error,
        on_close=on_close
    )
    #ws.run_forever()
    ws.run_forever(origin="https://dsp.nbb21f.net")

def MemCookie(urlArary):
    #machineId = randomMachineId()
    machineId = defaultMachineId

    ts = calendar.timegm(time.gmtime())
    url = urlArary[2] + urlArary[0] + "&brsVal=" + machineId + "&jsoncallback=success_jsonpCallback&_=" + str(ts)

    r = session_requests.get(url)
    if r.status_code == 200:
        response = r.text
        response = response.replace('success_jsonpCallback', '').replace('(', '').replace(")", "").replace(";", "")
        replaceJson = json.loads(response)
        default_headers["cookie"] += " xxx=" + replaceJson["x"] + ";" + " yyy=" + replaceJson["y"] + ";"
        default_headers["cookie"] += "  icwN2=0; bdnotice=0;"
        userKey = "Tm_" + getqueryString(url, "a") + "_" + getqueryString(url, "c")
        default_headers[userKey] = "1"
        goToGameLogin()


def getqueryString(url, key):
    str = url.split('?')[1]
    itemList = str.split('&')
    for item in itemList:
        value = item.split('=')
        if value[0] == key:
            return value[1]

def openSocket(SourceType, urlArray, urlSearch, protocol):
    if SourceType == "BBRS":
        type = "BB" 
    else:
        type = "WR"
    for url in urlArray:
        a = threading.Thread(target = openWebSocket, args = ("wss://" + url + "/", urlSearch, protocol, type,))
        a.start()

def requestOpenSocket(token, SourceType, urlArray, urlSearch):
    
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

    r = session_requests.post(url, headers = header, data= payload )
    if r.status_code == 200:
        response = json.loads(r.text)
        print("requestOpenSocket : " + r.text)

def goToLoby(lobyUrl):
    print("Go To Loby : " + lobyUrl)
    global VERIFY
    header = {}
    header['user-agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1'
    header['authority'] = 'dsp.nbb21f.net'
    header['accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
    header['accept-encoding'] = 'gzip, deflate, br'
    header['accept-language'] = 'zh-TW,zh;q=0.9'
    header['referer'] = 'https://www.wa777.net/'
    
    r = session_requests.get(lobyUrl, headers = header)
    if r.status_code == 200:
        print("KU Loby headers : ")
        print(r.headers)
        rawBody = r.text
        startKey = "window.connStr = "
        endKey = ";"
        startIndex = rawBody.find(startKey) + len(startKey)
        endIndex = rawBody[startIndex:].find(endKey) + startIndex
        data = rawBody[startIndex:endIndex]
        dataJson = json.loads(data)

        VERIFY = dataJson["Verify"];
        print("Verify : " + VERIFY)
        print("BBWSUrl : ")
        print(dataJson["BBWSUrl"])
        print("BBUrlSearch : " + dataJson["BBUrlSearch"])
        print("BBProtocol : " + dataJson["BBProtocol"])

        print("WRWSUrl : ")
        print(dataJson["WRWSUrl"])
        print("WRUrlSearch : " + dataJson["WRUrlSearch"])
        print("WRProtocol : " + dataJson["WRProtocol"])

        sessionId = dataJson["Account"] + "_" + dataJson["SessionID"];
        print("sessionId : " + sessionId)

        
        time.sleep(5)
        b = threading.Thread(target = openSocket, args = ("WRRS", dataJson["WRWSUrl"], dataJson["WRUrlSearch"], dataJson["WRProtocol"],))
        b.start()

        a = threading.Thread(target = openSocket, args = ("BBRS", dataJson["BBWSUrl"], dataJson["BBUrlSearch"], dataJson["BBProtocol"],))
        a.start()

        time.sleep(1)
        requestOpenSocket(sessionId, "WRRS", dataJson["WRWSUrl"], dataJson["WRUrlSearch"])
        requestOpenSocket(sessionId, "BBRS", dataJson["BBWSUrl"], dataJson["BBUrlSearch"])

        a.join()
        b.join()
        while True:
            time.sleep(1)
    else :
        print("Status : " + r.status_code)
        print("header : " + r.headers)
        print("body_text : " + r.text)


def goToGameLogin():
    header = default_headers
    header["authority"] = "www.wa777.net"
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
    header["cookie"] = header["cookie"].replace("path=/; HttpOnly, ", "")

    r = session_requests.get("https://www.wa777.net/Game/NBBIndex.aspx?nbbUrl=https://dcf.nbb21cf.net/", headers = header)
    if r.status_code == 200:
        body = r.text
        startKey = "bbView/Login.aspx"
        endKey = '");'
        startIndex = body.find(startKey)
        endIndex = body[startIndex:].find(endKey) + startIndex
        goToLoby("https://dcf.nbb21cf.net/" + body[startIndex:endIndex])


#userName = "78gg787"
#pwd = "878bb87"
userName = "hnbg123456"
pwd = "aaq13ss"

r = session_requests.post('https://www.wa777.net/LoadData/Pd.ashx', data = {'txtUser': userName,'txtPassword': password.SetHMACMD5(pwd),'screenSize':''}, headers = default_headers)
if r.status_code == 200:
    response = json.loads(r.text)
    headers = r.headers

    memCookie = response["SData"].split("#")
    default_headers["cookie"] = headers["Set-Cookie"]
    MemCookie(memCookie)


else: 
    print("Login Fail")
