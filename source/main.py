
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

BB_Last = {}

def sendToMQ():
    global connection, channel, _upload_status, mq_url
    datetime.datetime(2009, 1, 6, 15, 8, 24, 789)
    print("[" + str(datetime.datetime.now()) + "]Start Send To MQ." )
    pushData = Action.getNowData()
    for game in pushData:
        if game == "menu":
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
            except:
                print("Can't connect to MQ.")
            else:
                print("Send MQ status : " + str(_upload_status))
        else :
            print("[" + str(datetime.datetime.now()) + "] Data is empty." )        

    print("[" + str(datetime.datetime.now()) + "]End Send To MQ." )
    repeat = Timer(60, sendToMQ)
    repeat.start()            

def on_BB_message(message):
    
    decodeStr = Action.pako_inflate(message)

    debug.write(decodeStr + b'\n')
    debug.flush()

    Action.onNext(decodeStr)

    datetime.datetime(2009, 1, 6, 15, 8, 24, 789)
    print("[" + str(datetime.datetime.now()) + "]" + str(decodeStr))


def on_WR_open(ws):
    print("Opened connection")
    ws.send('{"action":"orderR","date":"","ball":0,"dc":' + str(ws.getMessageIndex()) + ',"stick":1}')
    time.sleep(keepLive_time)

def BB_change(ws, sport, gameType):
    
    try:
        gameType = Action.getNextGameType(sport, gameType)
        if gameType > 0:
            command = '{"action":"ckg","sport":' + sport + ',"mode":1,"type":' + str(gameType + 1) + ',"dc":' + str(ws.getMessageIndex()) + '}'
            print("Send BB change. " + command)
            ws.sendCommand(command)
        else:
            print("Not found game.[" + sport + "][" + str(gameType + 1) + "]")

        repeat = Timer(30, BB_change, (ws, sport, gameType,))
        repeat.start()    
    except:
        print("[" + sport + "] Change stop.")

def on_keepLive(ws, sport):
    ws.sendCommand('{"action":"checkTime"}')

def on_BB_open(ws, sport):
    print("[" + sport + "] Opened connection")
    global BB_Last, VERIFY
    sendCommand = ""
    if bool(BB_Last) == False :
        sendCommand = '{"action":"first","module":0,"device":0,"mode":1,"sport":' + sport + ',"deposit":0,"modeId":11,"verify":"' + VERIFY + '","dc":' + str(ws.getMessageIndex()) + '}'
        ws.sendCommand(sendCommand)
  
    sendCommand = '{"action":"cst","module":0,"device":0,"mode":1,"sport":' + sport + ',"deposit":0,"modeId":11,"verify":"' + VERIFY + '","dc":' + str(ws.getMessageIndex()) + ',"type":1,"stick":1}'
    ws.sendCommand(sendCommand)

    BB_Last = sendCommand 

    repeat = Timer(30, BB_change, (ws, sport, 0,))
    repeat.start()

def openSocket(SourceType, urlArray, urlSearch, protocol, crawlIndex):
    socketList = []
    ts = 0.0

    while True:
        if (time.time() - ts) < 5 :
            break

        ts = time.time()

        for index, url in enumerate(urlArray):
            socket = KuWebSocket(url, urlSearch, protocol, on_open=on_BB_open, on_message=on_BB_message, on_keepLive=on_keepLive, crawlIndex=crawlIndex)
            a = threading.Thread(target = socket.connect)
            a.start()
            socketList.append(a)

        for socket in socketList:
            socket.join()

    print(SourceType + "[" + crawlIndex + "] is closed.")

#userName = "hnbg123456"
#pwd = "aaq13ss"

userName = "78gg787"
pwd = "878bb87"

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

datetime_dt = datetime.datetime.today()
datetime_dt = datetime_dt + datetime.timedelta(hours=8)
datetime_str = datetime_dt.strftime("%m_%d_%H_%M_%S") 
fileName = "debug_" + datetime_str

if __name__ == '__main__':

    debug = open(fileName + ".log", "ab")

    loginManager = LoginManager(userName, pwd)
    loginResponse = loginManager.run()

    print(loginResponse)
    print("Ready Connect to Websocket(10), pls change network to VPN")
    time.sleep(10)

    BBUrl = loginResponse["BBWSUrl"]
    BBUrlSearch = loginResponse["BBUrlSearch"]
    BBProtocol = loginResponse["BBProtocol"]
    VERIFY = loginResponse["verify"]

    crawlList = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "26", "27"]
    threadList = []

    for crawlIndex in crawlList:
        thread = threading.Thread(target = openSocket, args = ("BBRS", BBUrl, BBUrlSearch, BBProtocol, crawlIndex,))
        thread.start()
        threadList.append(thread)

    sendToMQ()

    for thread in threadList:
        thread.join()

    debug.close()    

