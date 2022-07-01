# coding: utf-8
import traceback
import pika
from utils import TransformNumToPk
from constants import Mapping

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

def initSession(url):
    parameters = pika.URLParameters(url)
    connection = pika.BlockingConnection(parameters)
    channel = connection.channel()
    return connection, channel


def uploadData(channel, data, sport_type_id):
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
        lineStr = TransformNumToPk(oddsItem[Mapping.oddsData.oddType], oddsItem[Mapping.oddsData.oddLine])
        lineAt = oddsItem[Mapping.oddsData.whichTeam] # 1: 主讓 , 0: 客讓

        if reverse:
            awayLine = ("-" if lineAt == 1 else "+") + lineStr
            awayOdds = self.getOdds(oddsItem[Mapping.oddsData.homeOdd])
            homeLine = ("+" if lineAt == 1 else "-") + lineStr
            homeOdds = self.getOdds(oddsItem[Mapping.oddsData.awayOdd])     
        else :    
            homeLine = ("-" if lineAt == 1 else "+") + lineStr
            homeOdds = self.getOdds(oddsItem[Mapping.oddsData.homeOdd])
            awayLine = ("+" if lineAt == 1 else "-") + lineStr
            awayOdds = self.getOdds(oddsItem[Mapping.oddsData.awayOdd])

        eventBuf.twZF.homeZF.line = homeLine
        eventBuf.twZF.homeZF.odds = homeOdds
        eventBuf.twZF.awayZF.line = awayLine
        eventBuf.twZF.awayZF.odds = awayOdds
        return eventBuf

    #大小
    @classmethod
    def setTotal(self, eventBuf, oddsItem):
        lineStr = TransformNumToPk(oddsItem[Mapping.oddsData.oddType], oddsItem[Mapping.oddsData.oddLine])
        overOdds = self.getOdds(oddsItem[Mapping.oddsData.homeOdd])
        underOdds = self.getOdds(oddsItem[Mapping.oddsData.awayOdd])

        eventBuf.twDS.line = lineStr    
        eventBuf.twDS.over = overOdds
        eventBuf.twDS.under = underOdds
        return eventBuf

    #獨贏
    @classmethod
    def setMonneyLine(self, eventBuf, oddsItem, reverse=False):
        if reverse:
            homeOdds = self.getOdds(oddsItem[Mapping.oddsData.homeOdd])
            awayOdds = self.getOdds(oddsItem[Mapping.oddsData.awayOdd])
        else :    
            homeOdds = self.getOdds(oddsItem[Mapping.oddsData.awayOdd])
            awayOdds = self.getOdds(oddsItem[Mapping.oddsData.homeOdd])

        drawOdds = self.getOdds(oddsItem[Mapping.oddsData.drawOdd]) if len(oddsItem) >= 17 else '0'

        eventBuf.de.home = homeOdds
        eventBuf.de.away = awayOdds
        eventBuf.draw = drawOdds
        return eventBuf

    #一輸二贏
    @classmethod
    def setSpread_1_5(self, eventBuf,  oddsItem, reverse=False): 
        lineAt = oddsItem[Mapping.oddsData.whichTeam] # 1: 主讓 , 0: 客讓
        let = (1 if lineAt == 1 else 2)
        if reverse:
            homeOdds = self.getOdds(oddsItem[Mapping.oddsData.homeOdd])
            awayOdds = self.getOdds(oddsItem[Mapping.oddsData.awayOdd])
        else :    
            homeOdds = self.getOdds(oddsItem[Mapping.oddsData.awayOdd])
            awayOdds = self.getOdds(oddsItem[Mapping.oddsData.homeOdd])

        eventBuf.esre.let = let
        eventBuf.esre.home = homeOdds
        eventBuf.esre.away = awayOdds
        return eventBuf 

    #單雙
    @classmethod
    def setParity(self, eventBuf, oddsItem, reverse=False):
        if reverse:
            homeOdds = self.getOdds(oddsItem[Mapping.oddsData.homeOdd])
            awayOdds = self.getOdds(oddsItem[Mapping.oddsData.awayOdd])
        else :    
            homeOdds = self.getOdds(oddsItem[Mapping.oddsData.awayOdd])
            awayOdds = self.getOdds(oddsItem[Mapping.oddsData.homeOdd])

        eventBuf.sd.home = homeOdds
        eventBuf.sd.away = awayOdds
        return eventBuf

    #總得分
    def setTeamTotal(eventBuf):
        return eventBuf

    #波膽
    def setCorrectScore(eventBuf, oddsItem): 
        eventBuf.multi = "{"
        for oddItemIndex in range(12, (len(oddsItem) - 1), 2):
            key = oddsItem[oddItemIndex]
            odd = oddsItem[oddItemIndex + 1]
            if key == "99":
                eventBuf.multi += "\"other\": " + str(odd)
            else :    
                odd = "0.0" if len(str(odd)) == 0 else str(odd)
                eventBuf.multi += "\"" + key[0:1] + "-" + key[1:2] + "\": " + odd + ","
        eventBuf.multi += "}"
        
        return eventBuf

    #半全場
    def setFullHalfOutcome(eventBuf, oddsItem):
        eventBuf.multi = "{\"HH\": " + str(oddsItem[Mapping.oddsData.hf_HH]) + ", \"HD\": " + str(oddsItem[Mapping.oddsData.hf_HD]) + ", \"HA\": " + str(oddsItem[Mapping.oddsData.hf_HA]) + ", \"DH\": " + str(oddsItem[Mapping.oddsData.hf_DH]) + ", \"DD\": " + str(oddsItem[Mapping.oddsData.hf_DD]) + ", \"DA\": " + str(oddsItem[Mapping.oddsData.hf_DA]) + ", \"AH\": " + str(oddsItem[Mapping.oddsData.hf_AH]) + ", \"AD\": " + str(oddsItem[Mapping.oddsData.hf_AD]) + ", \"AA\": " + str(oddsItem[Mapping.oddsData.hf_AA]) + "}"    

        return eventBuf

    #入球數
    def setTotalGoal(eventBuf, oddsItem):
        tg_0_1 = "0.0" if len(str(oddsItem[Mapping.oddsData.tg_0_1])) == 0 else str(oddsItem[Mapping.oddsData.tg_0_1])
        tg_2_3 = "0.0" if len(str(oddsItem[Mapping.oddsData.tg_2_3])) == 0 else str(oddsItem[Mapping.oddsData.tg_2_3])
        tg_4_6 = "0.0" if len(str(oddsItem[Mapping.oddsData.tg_4_6])) == 0 else str(oddsItem[Mapping.oddsData.tg_4_6])
        tg_7 = "0.0" if len(str(oddsItem[Mapping.oddsData.tg_7])) == 0 else str(oddsItem[Mapping.oddsData.tg_7])
        eventBuf.multi = "{\"0-1\": \"" + tg_0_1 + "\", \"2-3\": \"" + tg_2_3 + "\", \"4-6\": \"" + tg_4_6 + "\", \"7+\": \"" + tg_7 + "\"}"

        return eventBuf  
