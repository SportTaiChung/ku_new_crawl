from utils import TransformNumToPk, searchItemfromArray

def footballParser(eventBuf, oddItem):
    soccerDefault = 19000
    oddsType = oddItem[0]

    lineStr = TransformNumToPk(oddsType, oddItem[8])
    lineAt = oddItem[9] # 1: 主讓 , 0: 客讓
    
    gameClass = int(oddsType) - soccerDefault

    if gameClass < 100 :
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 全場"

    elif gameClass < 200 :
        eventBuf.game_type = "1st half"
        eventBuf.information.league += " - 上半場"

    #19001 全場-讓球
    #19101 上半場-讓球
    if searchItemfromArray(["19001", "19101"], oddsType) >= 0:
        eventBuf.information.league += " - 讓球"

        eventBuf.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
        eventBuf.twZF.homeZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
        eventBuf.twZF.awayZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0' 

    #19002 全場-大小
    #19102 上半場-大小
    elif searchItemfromArray(["19002", "19102"], oddsType) >= 0:
        eventBuf.information.league += " - 大小"

        eventBuf.twDS.line = lineStr    
        eventBuf.twDS.over = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twDS.under = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'   

    #19003 全場-獨贏
    #19103 上半場-獨贏
    elif searchItemfromArray(["19003", "19103"], oddsType) >= 0:
        eventBuf.information.league += " - 獨贏" 

        eventBuf.de.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.de.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

    #19004 全場-單雙
    #19104 上半場-單雙
    elif searchItemfromArray(["19004", "19104"], oddsType) >= 0:
        eventBuf.information.league += " - 單雙"  

        eventBuf.sd.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.sd.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'            
 
    return eventBuf    