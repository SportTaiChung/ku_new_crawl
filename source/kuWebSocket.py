import websocket
from enum import Enum
from threading import Timer
import logger
import traceback

class KuWebSocket():
    class Status(Enum):
        NONE = 0
        INITED = 1
        OPEN = 2
        CONNECTING = 3
        CONNECTED = 4
        CLOSE = 5

    def __init__(self, url, urlSearch, protocol, on_open=None, on_message=None, on_error=None, on_close=None, on_keepLive=None, crawlIndex="11", crawlMode="1"):
        self.url = "wss://" + url + "/" + urlSearch
        self.protocol = protocol
        # websocket.enableTrace(True)
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
        self.keepLiveTime = 25
        self._status = self.Status.NONE
        self._messageIndex  = 1
        self.crawlIndex = crawlIndex
        self._logPrefix = "[" + url + "][" + crawlIndex + "][" + crawlMode + "]"
        self.crawlMode = crawlMode
        self.KuWebSocket.on_open =  self.on_open
        self.KuWebSocket.on_message = self.on_message
        self.KuWebSocket.on_error = self.on_error
        self.KuWebSocket.on_close = self.on_close
        self._on_open = on_open
        self._on_message = on_message
        self._on_error = on_error
        self._on_close = on_close
        self._on_keepLive = on_keepLive
        self._keepLiveTimer = None
        self._status = self.Status.INITED
        self.otherTimer = None

    def getName(self):
        return self.crawlIndex + "_" + self.crawlMode

    def on_close(self, ws, close_status_code, close_msg):
        self._status = self.Status.CLOSE
        logger.getLogger().info("[" + str(self._logPrefix) + "] Closed : " + str(close_msg))
        if not self._on_close == None :
            self._on_close(close_msg)
        
    def on_error(self, ws, error):
        logger.getLogger().info("[" + str(self._logPrefix) + "] error : " + str(error))

        if not self._on_error == None :
            self._on_error(error)

    def on_message(self, ws, message):
        logger.getLogger().debug("[" + str(self._logPrefix) + "] Recv : " + str(message))

        if not self._on_message == None :
            self._on_message(self.getName(), message)

    def on_open(self, ws):
        self._status = self.Status.CONNECTED
        logger.getLogger().info("[" + str(self._logPrefix) + "] Opened connected.")
        
        if not self._on_open == None :
            self._on_open(self, self.crawlIndex, self.crawlMode)

        self._keepLiveTimer = Timer(self.keepLiveTime, self.keepLive)
        self._keepLiveTimer.start()

    def keepLive(self):
        try:
            if self._status == self.Status.CONNECTED :
                logger.getLogger().info("[" + str(self._logPrefix) + "] keepLive.")
                if not self._on_keepLive == None :
                     self._on_keepLive(self, self.crawlIndex)

                self._keepLiveTimer = Timer(self.keepLiveTime, self.keepLive)
                self._keepLiveTimer.start()
        except Exception:
            logger.getLogger().error("[" + str(self._logPrefix) + "] keepLive Stop.")
            traceback.print_exc()

    def sendCommand(self, message):
        try :
            if self._status == self.Status.CONNECTED and len(message) > 0 :
                logger.getLogger().debug("[" + str(self._logPrefix) + "] Send : " + message)
                self.KuWebSocket.send(message)
                self._messageIndex += 1
                return True
            else :
                logger.getLogger().debug("[" + str(self._logPrefix) + "] WebSocket Status : " + str(self._status))
                return False
        except Exception:
            logger.getLogger().error("[" + str(self._logPrefix) + "] Send message fail.[" + message + "]")
            traceback.print_exc()
            self._status = self.Status.CLOSE
            return False

    def getMessageIndex(self):
        return self._messageIndex

    def isClose(self):
        return True if self._status == self.Status.CLOSE else False

    def connect(self):
        logger.getLogger().info("[" + str(self._logPrefix) + "] Start Connect.")
        self._status = self.Status.OPEN
        self.KuWebSocket.keep_running = True
        self.KuWebSocket.run_forever(origin="https://dsp.nbb21f.net")

    def stop(self):
        if not self._keepLiveTimer == None:
            self._keepLiveTimer.cancel()

        if not self.otherTimer == None:
            self.otherTimer.cancel()

        if not self._status == self.Status.CLOSE:
            self._status = self.Status.CLOSE
            self.KuWebSocket.keep_running = False
            self.KuWebSocket.close()
            self.KuWebSocket = None

        logger.getLogger().info(f'{self._logPrefix} is Stop.')    