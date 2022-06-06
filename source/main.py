
import threading
import datetime
import json
from threading import Timer
import calendar
import time

import action as Action
from upload import init_session, upload_data
from loginManager import LoginManager
from kuWebSocket import KuWebSocket

WR_index = 1
BB_index = 1

BB_Last = {}

def on_BB_message(message):
    global connection, channel, _upload_status, mq_url
    protobufData, sportId = Action.onNext(Action.pako_inflate(message))
    datetime.datetime(2009, 1, 6, 15, 8, 24, 789)
    if not protobufData == None :
        print("[" + str(datetime.datetime.now()) + "]" + protobufData)
    #     try:
    #         if connection.is_closed or channel.is_closed or not _upload_status:
    #             if connection.is_open:
    #                 connection.close()
           
    #             connection, channel = init_session(mq_url)
    #         print(protobufData)  
    #         _upload_status = upload_data(channel, protobufData, sportId)
    #         print(_upload_status)  
    #     except:
    #         print("Can't connect to MQ.")
    #     else:
    #         print("Send MQ status : " + _upload_status)


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
    
    ws.sendCommand(sendCommand)
    BB_index += 1

    sendCommand = '{"action":"cst","module":0,"device":0,"mode":1,"sport":11,"deposit":0,"modeId":11,"verify":"' + VERIFY + '","dc":' + str(BB_index) + ',"type":1,"stick":1}'
    BB_index += 1

    ws.sendCommand(sendCommand)

    # time.sleep(keepLive_time)
    # BBKeepLive(ws)

def openSocket(SourceType, urlArray, urlSearch, protocol):
    socketList = []

    for index, url in enumerate(urlArray):
        socket = KuWebSocket(url, urlSearch, protocol, on_open=on_BB_open, on_message=on_BB_message)
        a = threading.Thread(target = socket.connect)
        a.start()
        socketList.append(a)

    for socket in socketList:
        socket.join()

    print(SourceType + " is closed")

#userName = "hnbg123456"
#pwd = "aaq13ss"

userName = "78gg787"
pwd = "878bb87"

VERIFY = ''

mq_url = 'amqp://test:qwerasdf@211.75.222.147:5672/%2F?heartbeat=60&connection_attempts=3&retry_delay=3&socket_timeout=3'

# try:
#     print("Start connect to MQ, pls change network to VPN.")
#     connection, channel = init_session(mq_url)
#     print("MQ connect Success, pls change network to normal.(10)")
#     time.sleep(10)
# except:
#     print("MQ can't connect")


_upload_status = True

if __name__ == '__main__':
    loginManager = LoginManager(userName, pwd)
    loginResponse = loginManager.run()
    print(loginResponse)
    print("Ready Connect to Websocket(10), pls change network to VPN")
    # time.sleep(10)
    ts = 0.0

    BBUrl = loginResponse["BBWSUrl"]
    BBUrlSearch = loginResponse["BBUrlSearch"]
    BBProtocol = loginResponse["BBProtocol"]
    VERIFY = loginResponse["verify"]

    

    while True:
        if (time.time() - ts) < 5 :
            break;

        openSocket("BBRS", BBUrl, BBUrlSearch, BBProtocol)
        # # time.sleep(1)
        # # requestOpenSocket(SessionId, "WRRS", WRUrl, WRUrlSearch)
        # # requestOpenSocket(SessionId, "BBRS", BBUrl, BBUrlSearch)

        # ts = time.time()       
        print("Wait Sleep")
        time.sleep(5)

