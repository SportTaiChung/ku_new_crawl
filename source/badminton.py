from upload import protobufUtils
from constants import Mapping

def badmintonParser(eventBuf, oddItem):
    soccerDefault = 17000
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

    #17001 局數-讓球
    #17011 總分-讓球
    #17101 第一局-讓球
    #17201 第二局-讓球
    #17301 第三局-讓球
    #17401 第四局-讓球
    #17501 第五局-讓球
    if oddsType in ["17001", "17101", "17011", "17201", "17301", "17401", "17501"]:
        eventBuf = protobufUtils.set_spread(eventBuf, oddItem)

    #17012 總分-大小
    #17102 第一局-大小
    #17202 第二局-大小
    #17302 第三局-大小
    #17402 第四局-大小  
    #17502 第五局-大小  
    elif oddsType in ["17012", "17102", "17202", "17302", "17402", "17502"]:
        eventBuf = protobufUtils.set_total(eventBuf, oddItem) 

    #17103 第一局-獨贏
    elif oddsType in ["17103"]:
        eventBuf = protobufUtils.set_monney_line(eventBuf, oddItem, True)

    #17014 總分-單雙
    #17104 第一局-單雙
    #17204 第二局-單雙
    #17304 第三局-單雙
    #17404 第四局-單雙  
    #17504 第五局-單雙    
    elif oddsType in ["17004", "17104", "17204", "17304", "17404", "17504"]: 
        eventBuf = protobufUtils.set_parity(eventBuf, oddItem)           
 
    return eventBuf, oddsKey