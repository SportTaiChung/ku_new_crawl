from utils import searchItemfromArray
from upload import protobufUtils
from constants import Mapping

def tennisParser(eventBuf, oddItem):
    soccerDefault = 14000
    oddsType = oddItem[Mapping.oddsData.oddType]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[Mapping.oddsData.oddGroup]

    gameClass = int(oddsType) - soccerDefault
    
    if gameClass < 10:
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
        eventBuf.information.league += " - 局數"
        oddsKey += "_0"

    elif gameClass < 100:
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
        eventBuf.information.league += " - 盤數"
        oddsKey += "_1"

    elif gameClass < 200:
        eventBuf.game_type = "1q"
        eventBuf.information.league += " - 第一盤"
        oddsKey += "_2"

    elif gameClass < 300:
        eventBuf.game_type = "2q"
        eventBuf.information.league += " - 第二盤"
        oddsKey += "_3"

    elif gameClass < 400:
        eventBuf.game_type = "3q"
        eventBuf.information.league += " - 第三盤"
        oddsKey += "_4"

    elif gameClass < 500:
        eventBuf.game_type = "4set"
        eventBuf.information.league += " - 第四盤"
        oddsKey += "_5"

    elif gameClass < 600:
        eventBuf.game_type = "5set"
        eventBuf.information.league += " - 第五盤"
        oddsKey += "_6"                
    
    #14001 局數-讓球
    if searchItemfromArray(["14001", "14101", "14201", "14301" ,"14401" ,"14501"], oddsType) >= 0:
        eventBuf = protobufUtils.setSpread(eventBuf, oddItem, True) 

    #14002 局數-大小
    elif searchItemfromArray(["14002"], oddsType) >= 0:
        eventBuf = protobufUtils.setTotal(eventBuf, oddItem) 

    #14013 盤數-獨贏
    #14103 第一盤-獨贏
    elif searchItemfromArray(["14013", "14103"], oddsType) >= 0:
        eventBuf = protobufUtils.setMonneyLine(eventBuf, oddItem, True)

    #14004 局數-單雙
    elif searchItemfromArray(["14004"], oddsType) >= 0:
        eventBuf = protobufUtils.setParity(eventBuf, oddItem)

    return eventBuf, oddsKey