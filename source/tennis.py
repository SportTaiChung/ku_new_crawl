from utils import searchItemfromArray
from upload import protobufUtils

def tennisParser(eventBuf, oddItem):
    soccerDefault = 14000
    oddsType = oddItem[0]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[3]

    gameClass = int(oddsType) - soccerDefault
    
    if gameClass < 10:
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 局數"
        oddsKey += "_0"

    elif gameClass < 100:
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 盤數"
        oddsKey += "_1"

    elif gameClass < 200:
        eventBuf.game_type = "1q"
        eventBuf.information.league += " - 第一局"
        oddsKey += "_2"
    
    #14001 局數-讓球
    if searchItemfromArray(["14001"], oddsType) >= 0:
        eventBuf = protobufUtils.setSpread(eventBuf, oddItem) 

    #14002 局數-大小
    elif searchItemfromArray(["14002"], oddsType) >= 0:
        eventBuf = protobufUtils.setTotal(eventBuf, oddItem) 

    #14013 盤數-獨贏
    #14103 第一盤-獨贏
    elif searchItemfromArray(["14013", "14103"], oddsType) >= 0:
        eventBuf = protobufUtils.setMonneyLine(eventBuf, oddItem)

    #14004 局數-單雙
    elif searchItemfromArray(["14004"], oddsType) >= 0:
        eventBuf = protobufUtils.serParity(eventBuf, oddItem)

    return eventBuf, oddsKey