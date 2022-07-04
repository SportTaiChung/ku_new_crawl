from utils import searchItemfromArray
from upload import protobufUtils
from constants import Mapping

def hockeyParser(eventBuf, oddItem):
    soccerDefault = 15000
    oddsType = oddItem[Mapping.oddsData.oddType]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[Mapping.oddsData.oddGroup]

    eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
    oddsKey += "_0"

    #15001 全場-讓球
    if searchItemfromArray(["15001"], oddsType) >= 0:
        eventBuf = protobufUtils.set_spread(eventBuf, oddItem) 

    #15002 全場-大小
    elif searchItemfromArray(["15002"], oddsType) >= 0:
        eventBuf = protobufUtils.set_total(eventBuf, oddItem) 

    #獨贏
    elif searchItemfromArray([], oddsType) >= 0:
        eventBuf = protobufUtils.set_monney_line(eventBuf, oddItem, True)

    #15004 全場-單雙
    elif searchItemfromArray(["15004"], oddsType) >= 0:
        eventBuf = protobufUtils.set_parity(eventBuf, oddItem)          
 
    return eventBuf, oddsKey