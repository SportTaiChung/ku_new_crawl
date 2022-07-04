from utils import searchItemfromArray
from upload import protobufUtils
from constants import Mapping

def pingpongParser(eventBuf, oddItem):
    soccerDefault = 21000
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

    #21001 局數-讓球
    #21101 第一局-讓球
    #21201 第二局-讓球
    #21301 第三局-讓球
    #21401 第四局-讓球
    #21501 第五局-讓球
    #21601 第六局-讓球
    #21701 第七局-讓球
    if searchItemfromArray(["21001", "21101", "21201", "21301", "21401", "21501", "21601", "21701"], oddsType) >= 0:
        eventBuf = protobufUtils.set_spread(eventBuf, oddItem) 

    #21012 總分-大小
    #21102 第一局-大小
    #21202 第二局-大小
    #21302 第三局-大小
    #21402 第四局-大小
    #21502 第五局-大小
    #21602 第六局-大小
    #21702 第七局-大小    
    elif searchItemfromArray(["21012", "21102", "21202", "21302", "21402", "21502", "21602", "21702"], oddsType) >= 0:
        eventBuf = protobufUtils.set_total(eventBuf, oddItem) 

    #21003 局數-獨贏
    #21103 第一局-獨贏
    elif searchItemfromArray(["21003"], oddsType) >= 0:
        eventBuf = protobufUtils.set_monney_line(eventBuf, oddItem, True)

    #21014 總分-單雙
    #21104 第一局-單雙
    #21204 第二局-單雙
    #21304 第三局-單雙
    #21404 第四局-單雙
    #21504 第五局-單雙
    #21604 第六局-單雙
    #21704 第七局-單雙      
    elif searchItemfromArray(["21014", "21104", "21204", "21304", "21404", "21504", "21604", "21704"], oddsType) >= 0:
        eventBuf = protobufUtils.set_parity(eventBuf, oddItem)
 
    return eventBuf, oddsKey    