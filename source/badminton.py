from utils import searchItemfromArray
from upload import protobufUtils

def badmintonParser(eventBuf, oddItem):
    soccerDefault = 17000
    oddsType = oddItem[0]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[3]

    gameClass = int(oddsType) - soccerDefault

    if gameClass < 10:
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 局數"
        oddsKey += "_0"

    elif gameClass < 100:
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 總分"
        oddsKey += "_1"

    elif gameClass < 200:
        eventBuf.game_type = "1q"
        eventBuf.information.league += " - 第一局"
        oddsKey += "_2"

    #17001 局數-讓球
    #17011 總分-讓球
    #17101 第一局-讓球
    if searchItemfromArray(["17001", "17101", "17011"], oddsType) >= 0:
        eventBuf = protobufUtils.setSpread(eventBuf, oddItem)

    #17012 總分-大小
    #17102 第一局-大小
    elif searchItemfromArray(["17012", "17102"], oddsType) >= 0:
        eventBuf = protobufUtils.setTotal(eventBuf, oddItem) 

    #17103 第一局-獨贏
    elif searchItemfromArray(["17103"], oddsType) >= 0:
        eventBuf = protobufUtils.setMonneyLine(eventBuf, oddItem)

    #17014 總分-單雙
    #17104 上半場-單雙
    elif searchItemfromArray(["17004", "17104"], oddsType) >= 0: 
        eventBuf = protobufUtils.serParity(eventBuf, oddItem)           
 
    return eventBuf, oddsKey