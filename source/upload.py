# coding: utf-8
import traceback
import pika
from utils import TransformNumToPk

def get_exchange_name(sport_type_id):
    sport_type_id_exchange_mapping = {
        '11': 'KU_SC',
        '51': 'KU_SC',
        '52': 'KU_SC',
        '53': 'KU_SC',
        '12': 'KU_BK',
        '13': 'KU_BS',
        '14': 'KU_TN',
        '15': 'KU_HC',
        '16': 'KU_BK',
        '17': 'KU_BK',
        '18': 'KU_ES',
        '19': 'KU_FB',
        '20': 'KU_BK',
        '21': 'KU_BK',
        '22': 'KU_BK',
        '23': 'KU_BK'
    }
    return sport_type_id_exchange_mapping.get(sport_type_id, 'KU_BK')

def init_session(url):
    parameters = pika.URLParameters(url)
    connection = pika.BlockingConnection(parameters)
    channel = connection.channel()
    return connection, channel


def upload_data(channel, data, sport_type_id):
    try:
        exchange = get_exchange_name(str(sport_type_id))
        channel.basic_publish(exchange='test', routing_key=exchange, body=memoryview(data.SerializeToString()))
    except Exception:
        traceback.print_exc()
        return False
    return True

class protobufUtils:
    @classmethod
    def getOdds(self, odds): 
        return (str(odds) if len(str(odds)) > 0 else '0')

    #讓分
    @classmethod
    def setSpread(self, eventBuf, oddsItem, reverse=False):
        lineStr = TransformNumToPk(oddsItem[0], oddsItem[8])
        lineAt = oddsItem[9] # 1: 主讓 , 0: 客讓

        if reverse:
            awayLine = ("-" if lineAt == 1 else "+") + lineStr
            awayOdds = self.getOdds(oddsItem[13])
            homeLine = ("+" if lineAt == 1 else "-") + lineStr
            homeOdds = self.getOdds(oddsItem[15])     
        else :    
            homeLine = ("-" if lineAt == 1 else "+") + lineStr
            homeOdds = self.getOdds(oddsItem[13])
            awayLine = ("+" if lineAt == 1 else "-") + lineStr
            awayOdds = self.getOdds(oddsItem[15])

        eventBuf.twZF.homeZF.line = homeLine
        eventBuf.twZF.homeZF.odds = homeOdds
        eventBuf.twZF.awayZF.line = awayLine
        eventBuf.twZF.awayZF.odds = awayOdds
        return eventBuf

    #大小
    @classmethod
    def setTotal(self, eventBuf, oddsItem):
        line = TransformNumToPk(oddsItem[0], oddsItem[8])
        overOdds = self.getOdds(oddsItem[13])
        underOdds = self.getOdds(oddsItem[15])

        eventBuf.twDS.line = line    
        eventBuf.twDS.over = overOdds
        eventBuf.twDS.under = underOdds
        return eventBuf

    #獨贏
    @classmethod
    def setMonneyLine(self, eventBuf, oddsItem, reverse=False):
        if reverse:
            homeOdds = self.getOdds(oddsItem[13])
            awayOdds = self.getOdds(oddsItem[15])
        else :    
            homeOdds = self.getOdds(oddsItem[15])
            awayOdds = self.getOdds(oddsItem[13])

        drawOdds = self.getOdds(oddsItem[17]) if len(oddsItem) >= 17 else '0'

        eventBuf.de.home = homeOdds
        eventBuf.de.away = awayOdds
        eventBuf.draw = drawOdds
        return eventBuf

    #一輸二贏
    @classmethod
    def setSpread_1_5(self, eventBuf,  oddsItem, reverse=False): 
        lineAt = oddsItem[9] # 1: 主讓 , 0: 客讓
        let = (1 if lineAt == 1 else 2)
        if reverse:
            homeOdds = self.getOdds(oddItem[15])
            awayOdds = self.getOdds(oddItem[13])
        else :
            homeOdds = self.getOdds(oddItem[13])
            awayOdds = self.getOdds(oddItem[15])

        eventBuf.esre.let = let
        eventBuf.esre.home = homeOdds
        eventBuf.esre.away = awayOdds
        return eventBuf 

    #單雙
    @classmethod
    def serParity(self, eventBuf, oddsItem, reverse=False):
        if reverse:
            homeOdds = self.getOdds(oddsItem[13])
            awayOdds = self.getOdds(oddsItem[15])
        else :    
            homeOdds = self.getOdds(oddsItem[15])
            awayOdds = self.getOdds(oddsItem[13])

        eventBuf.sd.home = homeOdds
        eventBuf.sd.away = awayOdds
        return eventBuf

    #總得分
    def setTeamTotal(eventBuf):
        return eventBuf

    #波膽
    def setCorrectScore(eventBuf, odds="{}"):  
        eventBuf.multi = odds
        return eventBuf  

    #半全場
    def setFullHalfOutcome(eventBuf, odds="{}"):
        eventBuf.multi = odds
        return eventBuf

    #入球數
    def setTotalGoal(eventBuf, odds="{}"):
        eventBuf.multi = odds
        return eventBuf
