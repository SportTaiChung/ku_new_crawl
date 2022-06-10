from utils import TransformNumToPk, searchItemfromArray

def tennisParser(eventBuf, oddItem):
    soccerDefault = 14000
    oddsType = oddItem[0]

    eventBuf.game_type = "full"

    #14001 全場-讓球
    if searchItemfromArray(["14001"], oddsType) >= 0:
        eventBuf.information.league += " - 局數 - 讓球"

        eventBuf.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
        eventBuf.twZF.homeZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
        eventBuf.twZF.awayZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0' 

    #14002 全場-大小
    elif searchItemfromArray(["14002"], oddsType) >= 0:
        eventBuf.information.league += " - 局數 - 大小"

        eventBuf.twDS.line = lineStr    
        eventBuf.twDS.over = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twDS.under = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'   

    #14013 盤數-獨贏
    #14103 第一盤-獨贏
    elif searchItemfromArray(["14013", "14103"], oddsType) >= 0:
        if oddsType == "14103":
            eventBuf.game_type = "1q"
            eventBuf.information.league += " - 第一盤 - 獨贏"

        else :
            eventBuf.information.league += " - 盤數 - 獨贏"    

        eventBuf.de.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.de.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

    #14004 全場-單雙
    elif searchItemfromArray(["14004"], oddsType) >= 0:
        eventBuf.information.league += " - 局數 - 單雙"  

        eventBuf.sd.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.sd.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'            
 
    return eventBuf