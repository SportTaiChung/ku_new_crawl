import json
import unittest
import action as Action
import datetime
import time
from upload import init_session, upload_data
from utils import TransformNumToPk, addZero

class TestActionMethods(unittest.TestCase):

    def test_IsSC(self):
        self.assertTrue(Action.IsSC('sc'))
        self.assertTrue(Action.IsSC('eu'))
        self.assertTrue(Action.IsSC('wd'))
        self.assertTrue(Action.IsSC('ch'))
        self.assertTrue(Action.IsSC('fi'))
        self.assertFalse(Action.IsSC('cs'))
        self.assertFalse(Action.IsSC('bx'))
        self.assertFalse(Action.IsSC('bb'))
        self.assertFalse(Action.IsSC('tt'))
        self.assertFalse(Action.IsSC('tn'))

    def test_AllyNameProcess(self):
        self.assertEqual(Action.AllyNameProcess("12_2423_0_2", "測試"), "測試")
        self.assertEqual(Action.AllyNameProcess("12_2423_0_1", "測試"), "測試")
        self.assertEqual(Action.AllyNameProcess("12_2423_0_3", "測試"), "測試 - 加時賽")

    def test_TransformStatus(self):
        self.assertEqual(Action.TransformStatus("sc", 60), "結束")
        self.assertEqual(Action.TransformStatus("sc", 1), "上半場")
        self.assertEqual(Action.TransformStatus("bb", 151), "50下")

    def test_addZero(self):
        self.assertEqual(addZero(5, 2), "05")
        self.assertEqual(addZero(11, 2), "11")

    def test_TransformNumToPk(self):
        self.assertEqual(TransformNumToPk("12001", "5000"), "5")
        self.assertEqual(TransformNumToPk("12301", "1500"), "1.5")
        self.assertEqual(TransformNumToPk("12302", "45500"), "45.5")
        self.assertEqual(TransformNumToPk("12304", "0"), "0")
        self.assertEqual(TransformNumToPk("12102", "89500"), "89.5")
        self.assertEqual(TransformNumToPk("13002", "6750"), "7+50")
        self.assertEqual(TransformNumToPk("13051", "200"), "0-40")
        self.assertEqual(TransformNumToPk("14002", "22500"), "22.5")

    def test_onNext(self):
        self._upload_status = True
        mq_url = 'amqp://test:qwerasdf@211.75.222.147:5672/%2F?heartbeat=60&connection_attempts=3&retry_delay=3&socket_timeout=3'
        self.connection, self.channel = init_session(mq_url)

        f = open("raw.log", "rb")
        Lines = f.readlines()
        for line in Lines :
            obj = json.loads(line)
            datetime_dt = datetime.datetime.today()
            datetime_dt = datetime_dt + datetime.timedelta(hours=8)
            datetime_str = datetime_dt.strftime("%Y/%m/%d %H:%M:%S")
            obj["date"] = datetime_str
            line = json.dumps(obj)
            Action.onNext(line.encode("utf-8"))
            
        f.close()
            
        pushData = Action.getNowData()
        for game in pushData:
            if "menu" in game:
                continue
                    
            gameOddsList, sportType = Action.transformToProtobuf(pushData[game])
            if not gameOddsList == None and gameOddsList:
                if self.connection.is_closed or self.channel.is_closed or not self._upload_status:
                    if self.connection.is_open:
                            elf.connection.close()
                    self.connection, self.channel = init_session(mq_url)

                self._upload_status = upload_data(self.channel, gameOddsList, sportType)
                print(self._upload_status)         

        #print(json.dumps(Action.getNowData()))
             

    def test_getNextGameType(self):
        f = open("raw.log", "rb")
        Lines = f.readlines()
        index = 5
        for line in Lines :
            obj = json.loads(line)
            datetime_dt = datetime.datetime.today()
            datetime_dt = datetime_dt + datetime.timedelta(hours=8)
            datetime_str = datetime_dt.strftime("%Y/%m/%d %H:%M:%S")
            obj["date"] = datetime_str
            line = json.dumps(obj)
            Action.onNext(line.encode("utf-8"))  
        f.close()

        # self.assertEqual(Action.getNextGameType(11, 0), "0", 1)
        # self.assertEqual(Action.getNextGameType(11, 1), "1", 2)
        # self.assertEqual(Action.getNextGameType(11, 2), "2", 3)
        # self.assertEqual(Action.getNextGameType(11, 3), "0", 4)
        # self.assertEqual(Action.getNextGameType(11, 4), "0", 5)
          

if __name__ == '__main__':
    unittest.main()
'''
    def test_TransformRunTime(self):
        self.assertEqual(Action.TransformRunTime("sc", "-60"), "結束")
        self.assertEqual(Action.TransformRunTime("sc", "2022/05/30 00:09:08"), "09:00")
        self.assertEqual(Action.TransformRunTime("sc", ""), "")
        self.assertEqual(Action.TransformRunTime("tt", "-60"), "結束")
        self.assertEqual(Action.TransformRunTime("tn", "-60"), "結束")
        self.assertEqual(Action.TransformRunTime("bb", "-60"), "結束")
        self.assertEqual(Action.TransformRunTime("tn", "2022/05/30 00:09:08"), "09:08")
        self.assertEqual(Action.TransformRunTime("wp", "2022/05/30 00:09:08"), "09:08")
'''

