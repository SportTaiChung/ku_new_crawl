from utils import searchItemfromArray
from upload import protobufUtils
from constants import Mapping

def footballParser(eventBuf, oddItem):
    soccerDefault = 19000
    oddsType = oddItem[Mapping.oddsData.oddType]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[Mapping.oddsData.oddGroup]

    gameClass = int(oddsType) - soccerDefault

    if gameClass < 100 :
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
        eventBuf.information.league += " - 全場"
        oddsKey += "_0"

    elif gameClass < 200 :
        eventBuf.game_type = "live 1st half" if eventBuf.live == "true" else "1st half"
        eventBuf.information.league += " - 上半場"
        oddsKey += "_1"

    #19001 全場-讓球
    #19101 上半場-讓球
    if searchItemfromArray(["19001", "19101"], oddsType) >= 0:
        eventBuf = protobufUtils.setSpread(eventBuf, oddItem) 

    #19002 全場-大小
    #19102 上半場-大小
    elif searchItemfromArray(["19002", "19102"], oddsType) >= 0:
        eventBuf = protobufUtils.setTotal(eventBuf, oddItem) 

    #19003 全場-獨贏
    #19103 上半場-獨贏
    elif searchItemfromArray(["19003", "19103"], oddsType) >= 0: 
        eventBuf = protobufUtils.setMonneyLine(eventBuf, oddItem)

    #19004 全場-單雙
    #19104 上半場-單雙
    elif searchItemfromArray(["19004", "19104"], oddsType) >= 0:
        eventBuf = protobufUtils.setParity(eventBuf, oddItem)         
 
    return eventBuf, oddsKey