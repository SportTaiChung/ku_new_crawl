from utils import searchItemfromArray
from upload import protobufUtils

def hockeyParser(eventBuf, oddItem):
    soccerDefault = 15000
    oddsType = oddItem[0]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[3]

    eventBuf.game_type = "full"
    oddsKey += "_0"

    #15001 全場-讓球
    if searchItemfromArray(["15001"], oddsType) >= 0:
        eventBuf = protobufUtils.setSpread(eventBuf, oddItem) 

    #15002 全場-大小
    elif searchItemfromArray(["15002"], oddsType) >= 0:
        eventBuf = protobufUtils.setTotal(eventBuf, oddItem) 

    #獨贏
    elif searchItemfromArray([], oddsType) >= 0:
        eventBuf = protobufUtils.setMonneyLine(eventBuf, oddItem)

    #15004 全場-單雙
    elif searchItemfromArray(["15004"], oddsType) >= 0:
        eventBuf = protobufUtils.serParity(eventBuf, oddItem)          
 
    return eventBuf, oddsKey