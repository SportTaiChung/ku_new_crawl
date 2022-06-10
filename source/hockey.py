from utils import TransformNumToPk, searchItemfromArray

def hockeyParser(eventBuf, oddItem):
    soccerDefault = 15000
    oddsType = oddItem[0]

    eventBuf.game_type = "full"

    #15001 全場-讓球
    if searchItemfromArray(["15001"], oddsType) >= 0:
        eventBuf.information.league += " - 全場 - 讓球"

        eventBuf.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
        eventBuf.twZF.homeZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
        eventBuf.twZF.awayZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0' 

    #15002 全場-大小
    elif searchItemfromArray(["15002"], oddsType) >= 0:
        eventBuf.information.league += " - 全場 - 大小"

        eventBuf.twDS.line = lineStr    
        eventBuf.twDS.over = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twDS.under = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'   

    #獨贏
    elif searchItemfromArray([], oddsType) >= 0:
        eventBuf.de.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.de.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

    #15004 全場-單雙
    elif searchItemfromArray(["15004"], oddsType) >= 0:
        eventBuf.information.league += " - 全場 - 單雙"  

        eventBuf.sd.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.sd.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'            
 
    return eventBuf    