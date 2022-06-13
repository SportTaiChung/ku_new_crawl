from utils import TransformNumToPk, searchItemfromArray

def hockeyParser(eventBuf, oddItem):
    soccerDefault = 15000
    oddsType = oddItem[0]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[3]

    lineStr = TransformNumToPk(oddsType, oddItem[8])
    lineAt = oddItem[9] # 1: 主讓 , 0: 客讓
    eventBuf.game_type = "full"
    oddsKey += "_0"

    #15001 全場-讓球
    if searchItemfromArray(["15001"], oddsType) >= 0:

        eventBuf.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
        eventBuf.twZF.homeZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
        eventBuf.twZF.awayZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0' 

    #15002 全場-大小
    elif searchItemfromArray(["15002"], oddsType) >= 0:

        eventBuf.twDS.line = lineStr    
        eventBuf.twDS.over = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twDS.under = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'   

    #獨贏
    elif searchItemfromArray([], oddsType) >= 0:
        eventBuf.de.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.de.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
        
        if len(oddItem) >= 17:
            eventBuf.draw = str(oddItem[17]) if len(str(oddItem[17])) > 0 else '0'    

    #15004 全場-單雙
    elif searchItemfromArray(["15004"], oddsType) >= 0:

        eventBuf.sd.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.sd.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'            
 
    return eventBuf, oddsKey