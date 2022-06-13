from utils import searchItemfromArray
from upload import protobufUtils

def volleyballParser(eventBuf, oddItem):
    soccerDefault = 16000
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

    #16001 局數-讓球
    #16011 總分-讓球
    #16101 第一局-讓球
    if searchItemfromArray(["16001", "16101", "16011"], oddsType) >= 0:
        eventBuf = protobufUtils.setSpread(eventBuf, oddItem) 

    #16012 總分-大小
    #16102 第一局-大小
    elif searchItemfromArray(["16012", "16102"], oddsType) >= 0:
        eventBuf = protobufUtils.setTotal(eventBuf, oddItem) 

    #16103 第一局-獨贏
    elif searchItemfromArray(["16103"], oddsType) >= 0:
        eventBuf = protobufUtils.setMonneyLine(eventBuf, oddItem)

    #16014 總分-單雙
    #16104 上半場-單雙
    elif searchItemfromArray(["16004", "16104"], oddsType) >= 0:
        eventBuf = protobufUtils.serParity(eventBuf, oddItem)         
 
    return eventBuf, oddsKey