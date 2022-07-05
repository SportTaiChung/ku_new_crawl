import websocket
from enum import Enum
from threading import Timer
import logger
import traceback
import time


class KuWebsocket():
    class Status(Enum):
        NONE = 0
        INITED = 1
        OPEN = 2
        CONNECTING = 3
        CONNECTED = 4
        CLOSE = 5

    def __init__(self, url, url_search, protocol, on_open=None, on_message=None, on_error=None, on_close=None, on_keep_live=None, crawl_index="11", crawl_mode="1", crawl_type="1"):
        self.url = "wss://" + url + "/" + url_search
        self.protocol = protocol
        self.ku_websocket = websocket.WebSocketApp(
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
        self._keep_live_time = 25
        self._status = self.Status.NONE
        self._message_index = 1
        self.crawl_index = crawl_index
        self._log_prefix = f'[{url}][{crawl_index}][{crawl_mode}][{crawl_type}]'
        self.crawl_mode = crawl_mode
        self.crawl_type = crawl_type
        self.ku_websocket.on_open = self.on_open
        self.ku_websocket.on_message = self.on_message
        self.ku_websocket.on_error = self.on_error
        self.ku_websocket.on_close = self.on_close
        self._on_open = on_open
        self._on_message = on_message
        self._on_error = on_error
        self._on_close = on_close
        self._on_keep_live = on_keep_live
        self._keep_live_timer = None
        self._status = self.Status.INITED
        self.other_timer = None
        self._last_update_time = time.time()

    def get_name(self):
        return self.crawl_index + "_" + self.crawl_mode + "_" + self.crawl_type

    def on_close(self, ws, close_status_code, close_msg):
        self._status = self.Status.CLOSE
        logger.get_logger().info(f'[{self._log_prefix}] Closed : {str(close_msg)}')
        if self._on_close is not None:
            self._on_close(close_msg)

    def on_error(self, ws, error):
        logger.get_logger().info(f'[{self._log_prefix}] error : {str(error)}')

        if self._on_error is not None:
            self._on_error(error)

    def on_message(self, ws, message):
        logger.get_logger().debug(f'[{self._log_prefix}] Recv : {str(message)}')
        self._last_update_time = time.time()

        if self._on_message is not None:
            self._on_message(self.get_name(), message)

    def on_open(self, ws):
        self._status = self.Status.CONNECTED
        logger.get_logger().info(f'[{self._log_prefix}] Opened connected.')

        if self._on_open is not None:
            self._on_open(self, self.crawl_index, self.crawl_mode, self.crawl_type)

        self._keep_live_timer = Timer(self._keep_live_time, self.keep_live)
        self._keep_live_timer.start()

    def keep_live(self):
        try:
            if not self._status == self.Status.CLOSE:
                self._last_update_time = time.time()
                logger.get_logger().info(f'[{self._log_prefix}] keepLive.')
                if self._on_keep_live is not None:
                    self._on_keep_live(self, self.crawl_index)

                self._keep_live_timer = Timer(self._keep_live_time, self.keep_live)
                self._keep_live_timer.start()
        except Exception:
            logger.get_logger().error(f'[{self._log_prefix}] keepLive Stop.')
            self._status = self.Status.CLOSE
            traceback.print_exc()

    def send_command(self, message):
        try:
            if self._status == self.Status.CONNECTED and len(message) > 0:
                self._last_update_time = time.time()
                logger.get_logger().debug(f'[{self._log_prefix}] Send : {message}')
                self.ku_websocket.send(message)
                self._message_index += 1
                return True

            else:
                logger.get_logger().debug(f'[{self._log_prefix}] WebSocket Status : {str(self._status)}')
                self.ku_websocket.close()
                self._status = self.Status.CLOSE
                return False

        except Exception:
            logger.get_logger().error(f'[{self._log_prefix}] Send message fail.[{message}]')
            traceback.print_exc()
            self._status = self.Status.CLOSE
            return False

    def get_message_index(self):
        return self._message_index

    def get_last_update_time(self):
        return self._last_update_time

    def is_close(self):
        return True if self._status == self.Status.CLOSE else False

    def connect(self):
        logger.get_logger().info(f'[{self._log_prefix}] Start Connect.')
        self._status = self.Status.OPEN
        self.ku_websocket.keep_running = True
        self.ku_websocket.run_forever(origin="https://dsp.nbb21f.net")

    def stop(self):
        if self._keep_live_timer is not None:
            self._keep_live_timer.cancel()

        if self.other_timer is not None:
            self.other_timer.cancel()

        if not self._status == self.Status.CLOSE:
            self._status = self.Status.CLOSE
            self.ku_websocket.keep_running = False
            self.ku_websocket.close()
            self.ku_websocket = None

        logger.get_logger().info(f'{self._log_prefix} is Stop.')
