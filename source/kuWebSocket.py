import websocket
from enum import Enum

class KuWebSocket():
    class Status(Enum):
        NONE = 0
        INITED = 1
        OPEN = 2
        CONNECTING = 3
        CONNECTED = 4
        CLOSE = 5

    keepLiveTime = 25
    _status = Status.NONE
    keepLiveMessage = ""

    def __init__(self, url, urlSearch, protocol, on_open=None, on_message=None, on_error=None, on_close=None):
        self.url = "wss://" + url + "/" + urlSearch
        self.protocol = protocol
        self.KuWebSocket = websocket.WebSocketApp(
            self.url,
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
        self.KuWebSocket.on_open =  self.on_open
        self.KuWebSocket.on_message = self.on_message
        self.KuWebSocket.on_error = self.on_error
        self.KuWebSocket.on_close = self.on_close
        self._on_open = on_open
        self._on_message = on_message
        self._on_error = on_error
        self._on_close = on_close
        self._status = self.Status.INITED

    def on_close(self, ws, close_status_code, close_msg):
        self._status = self.Status.CLOSE
        print("[" + str(self.url) + "] Closed : ")
        print(close_msg)
        if not self._on_close == None :
            self._on_close(close_msg)
        
    def on_error(self, ws, error):
        print("[" + str(self.url) + "] error : ")
        print(error)
        if not self._on_error == None :
            self._on_error(error)

    def on_message(self, ws, message):
        print("[" + str(self.url) + "] Recv : ")
        print(message)
        if not self._on_message == None :
            self._on_message(message)

    def on_open(self, ws):
        self._status = self.Status.CONNECTED
        print("[" + str(self.url) + "] Opened connected.")
        if not self._on_open == None :
            self._on_open(self)

    def sendCommand(self, message):
        try :
            if self._status == self.Status.CONNECTED and len(message) > 0 :
                print("[" + str(self.url) + "] Send : " + message)
                self.KuWebSocket.send(message)
                return True
            else :
                print("[" + str(self.url) + "] WebSocket Status : " + self._status)
                return False
        except :
            print("[" + str(self.url) + "] Send message file.[" + message + "]")
            self._status = self.Status.CLOSE
            return False

    def getStatus(self):
        return self.status

    def connect(self):
        print("[" + str(self.url) + "] Start Connect.")
        self._status = self.Status.OPEN
        self.KuWebSocket.run_forever(origin="https://dsp.nbb21f.net")