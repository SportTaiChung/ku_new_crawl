# coding: utf-8
import platform
import os
import signal
from ku import KUCrawler

class CrawlerRunner:

    def __init__(self, config, tasks, daemon=False):
        self._daemon = daemon
        self._config = config
        self._tasks = tasks
        self._crawler = None
        self._config['_running'] = True
        self._closing = False

    def run(self):
        self._crawler = KUCrawler(self._tasks, self._config)

        if self._config['read_from_file']:
            self._crawler.runFromFile(self._config['read_from_file'])
        else:
            if platform.system().lower() == 'linux' :
                if self._daemon:
                    pid = os.fork()
                    if pid > 0:
                        os._exit(0)

            self._crawler.run()

    def gracefully_stop(self, signum, frame):
        if not self._closing:
            self._closing = True
            self._crawler.stop()
