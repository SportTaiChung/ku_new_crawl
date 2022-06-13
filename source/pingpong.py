from utils import searchItemfromArray
from upload import protobufUtils

def pingpongParser(eventBuf, oddItem):
    soccerDefault = 21000
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

    elif gameClass < 300:
        eventBuf.game_type = "2q"
        eventBuf.information.league += " - 第二局"
        oddsKey += "_3"

    elif gameClass < 400:
        eventBuf.game_type = "3q"
        eventBuf.information.league += " - 第三局"
        oddsKey += "_4"                   

    #21001 局數-讓球
    #21101 第一局-讓球
    #21201 第二局-讓球
    #21301 第三局-讓球
    if searchItemfromArray(["21001", "21101", "21201", "21301"], oddsType) >= 0:
        eventBuf = protobufUtils.setSpread(eventBuf, oddItem) 

    #21012 總分-大小
    #21102 第一局-大小
    #21202 第二局-大小
    #21302 第三局-大小
    elif searchItemfromArray(["21012", "21102", "21202", "21302"], oddsType) >= 0:
        eventBuf = protobufUtils.setTotal(eventBuf, oddItem) 

    #21003 局數-獨贏
    #21103 第一局-獨贏
    elif searchItemfromArray(["21003"], oddsType) >= 0:
        eventBuf = protobufUtils.setMonneyLine(eventBuf, oddItem)

    #21014 總分-單雙
    #21104 第一局-單雙
    #21204 第二局-單雙
    #21304 第三局-單雙
    elif searchItemfromArray(["21014", "21104", "21204", "21304"], oddsType) >= 0:
        eventBuf = protobufUtils.serParity(eventBuf, oddItem)
 
    return eventBuf, oddsKey    