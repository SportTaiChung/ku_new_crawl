import requests
import threading
import datetime
import json
from threading import Timer
import calendar;
import time
import zlib
from random import Random
import websocket
import action as Action
from upload import init_session, upload_data
from loginManager import LoginManager

session_requests = requests.session()

keepLive_time = 25

WR_index = 1
BB_index = 1

BB_Last = {}



FP = None

def WRKeepLive(ws):
    try :
        print("Send WR keeplive.")
        ws.send('{"action":"checkSN"}')
        r = Timer(keepLive_time, WRKeepLive, (ws,))
        r.start()
    except :
        print("WR keeplive stop.")

def BBKeepLive(ws):
    try :
        print("Send BB keeplive.")
        ws.send('{"action":"checkTime"}')
        r = Timer(keepLive_time, BBKeepLive, (ws,))
        r.start()
    except :
        print("BB keeplive stop.")

def on_WR_message(ws, message):
    data = Action.onNext(Action.pako_inflate(message))

def on_BB_message(ws, message):
    global connection, channel, _upload_status, mq_url
    protobufData, sportId = Action.onNext(Action.pako_inflate(message))
    if not protobufData == None :
        try:
            if connection.is_closed or channel.is_closed or not _upload_status:
                if connection.is_open:
                    connection.close()
           
                connection, channel = init_session(mq_url)
            print(protobufData)  
            _upload_status = upload_data(channel, protobufData, sportId)
            print(_upload_status)  
        except:
            print("Can't connect to MQ.")
        else:
            prnt("Send MQ status : " + _upload_status)

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
    WRKeepLive(ws)

def BB_change(ws):
    global BB_index
    if ws :
        command = '{"action":"cm","sport":11,"mode":2,"type":1,"dc":' + str(BB_index) + '}'
        print("Send BB change. " + command)
        ws.send(command)
        BB_index += 1
    else:
        print("BB keeplive stop.")

def on_BB_open(ws):
    print("BB Opened connection")
    global BB_index, BB_Last, VERIFY
    sendCommand = ""
    if bool(BB_Last) == False :
        sendCommand = '{"action":"first","module":0,"device":0,"mode":-1,"sport":-1,"deposit":0,"modeId":11,"verify":"' + VERIFY + '","dc":' + str(BB_index) + '}'
        BB_Last = sendCommand
    else:
        sendCommand = '{"action":"cst","module":0,"device":0,"mode":1,"sport":11,"deposit":0,"modeId":11,"verify":"' + VERIFY + '","dc":' + str(BB_index) + ',"type":1,"stick":1}'
    
    print("BB Send : " + sendCommand)
    ws.send(sendCommand)
    BB_index += 1

    sendCommand = '{"action":"cst","module":0,"device":0,"mode":1,"sport":11,"deposit":0,"modeId":11,"verify":"' + VERIFY + '","dc":' + str(BB_index) + ',"type":1,"stick":1}'
    BB_index += 1
    ws.send(sendCommand)

    time.sleep(keepLive_time)
    BBKeepLive(ws)


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
        ]
    )
    ws.on_open = on_open
    ws.on_message = on_message
    ws.on_error = on_error
    ws.on_close = on_close
    #ws.run_forever()
    ws.run_forever(origin="https://dsp.nbb21f.net")

def openSocket(SourceType, urlArray, urlSearch, protocol):
    socketList = []
    if SourceType == "BBRS":
        type = "BB" 
    else:
        type = "WR"
    for index, url in enumerate(urlArray):
        a = threading.Thread(target = openWebSocket, args = ("wss://" + url + "/", urlSearch, protocol, type,))
        a.start()
        socketList.append(a)

    for socket in socketList:
        socket.join()

    print(SourceType + " is closed")

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

userName = "hnbg123456"
pwd = "aaq13ss"

#userName = "78gg787"
#pwd = "878bb87"

VERIFY = ''

mq_url = 'amqp://test:qwerasdf@211.75.222.147:5672/%2F?heartbeat=60&connection_attempts=3&retry_delay=3&socket_timeout=3'

try:
    print("Start connect to MQ, pls change network to VPN.")
    connection, channel = init_session(mq_url)
    print("MQ connect Success, pls change network to normal.(10)")
    time.sleep(10)
except:
    print("MQ can't connect")


_upload_status = True

if __name__ == '__main__':
    loginManager = LoginManager(userName, pwd)
    loginResponse = loginManager.run()
    print(loginResponse)
    print("Ready Connect to Websocket(10), pls change network to VPN")
    time.sleep(10)
    ts = 0.0
    BBUrl = loginResponse["BBWSUrl"]
    BBUrlSearch = loginResponse["BBUrlSearch"]
    BBProtocol = loginResponse["BBProtocol"]
    VERIFY = loginResponse["verify"]
    while True:
        if (time.time() - ts) < 5 :
            break;
        # b = threading.Thread(target = openSocket, args = ("WRRS", WRUrl, WRUrlSearch, WRProtocol,))
        # b.start()

        a = threading.Thread(target = openSocket, args = ("BBRS", BBUrl, BBUrlSearch, BBProtocol,))
        a.start()

        # time.sleep(1)
        # requestOpenSocket(SessionId, "WRRS", WRUrl, WRUrlSearch)
        # requestOpenSocket(SessionId, "BBRS", BBUrl, BBUrlSearch)

        ts = time.time()

        a.join()
            
        print("Wait Sleep")
        time.sleep(5)

