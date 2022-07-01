from utils import searchItemfromArray
from upload import protobufUtils
from constants import Mapping

def volleyballParser(eventBuf, oddItem):
    soccerDefault = 16000
    oddsType = oddItem[Mapping.oddsData.oddType]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[Mapping.oddsData.oddGroup]

    gameClass = int(oddsType) - soccerDefault

    if gameClass < 10:
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
        eventBuf.information.league += " - 局數"
        oddsKey += "_0"

    elif gameClass < 100:
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
        eventBuf.information.league += " - 總分"
        oddsKey += "_1"

    elif gameClass < 200:
        eventBuf.game_type = "1q"
        eventBuf.information.league += " - 第一局"
        oddsKey += "_2"

    elif gameClass < 300:
        eventBuf.game_type = "2q"
        eventBuf.information.league += " - 第二局"
        oddsKey += "_3"

    elif gameClass < 400:
        eventBuf.game_type = "3q"
        eventBuf.information.league += " - 第三局"
        oddsKey += "_4"

    elif gameClass < 500:
        eventBuf.game_type = "4set"
        eventBuf.information.league += " - 第四局"
        oddsKey += "_5"

    elif gameClass < 600:
        eventBuf.game_type = "5set"
        eventBuf.information.league += " - 第五局"
        oddsKey += "_6"

    elif gameClass < 700:
        eventBuf.game_type = "6set"
        eventBuf.information.league += " - 第六局"
        oddsKey += "_7"

    elif gameClass < 800:
        eventBuf.game_type = "7set"
        eventBuf.information.league += " - 第七局"
        oddsKey += "_8"

    #16001 局數-讓球
    #16011 總分-讓球
    #16101 第一局-讓球
    #16201 第二局-讓球
    #16301 第三局-讓球
    #16401 第四局-讓球
    #16501 第五局-讓球
    #16601 第六局-讓球
    #16701 第七局-讓球
    if searchItemfromArray(["16001", "16101", "16011", "16201", "16301", "16401", "16501", "16601", "16701" ], oddsType) >= 0:
        eventBuf = protobufUtils.setSpread(eventBuf, oddItem) 

    #16012 總分-大小
    #16102 第一局-大小
    #16202 第二局-大小
    #16302 第三局-大小
    #16402 第四局-大小
    #16502 第五局-大小
    #16602 第六局-大小
    #16702 第七局-大小
    elif searchItemfromArray(["16012", "16102", "16202", "16302", "16402", "16502", "16602", "16702"], oddsType) >= 0:
        eventBuf = protobufUtils.setTotal(eventBuf, oddItem) 

    #16103 第一局-獨贏
    elif searchItemfromArray(["16103"], oddsType) >= 0:
        eventBuf = protobufUtils.setMonneyLine(eventBuf, oddItem, True)

    #16014 總分-單雙
    #16104 第一局-單雙
    #16204 第二局-單雙
    #16304 第三局-單雙
    #16404 第四局-單雙
    #16504 第五局-單雙
    #16604 第六局-單雙
    #16704 第七局-單雙
    elif searchItemfromArray(["16004", "16104", "16204", "16304", "16404", "16504", "16604", "16704"], oddsType) >= 0:
        eventBuf = protobufUtils.setParity(eventBuf, oddItem)         
 
    return eventBuf, oddsKey