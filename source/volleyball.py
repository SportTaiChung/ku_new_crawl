from utils import TransformNumToPk, searchItemfromArray

def volleyballParser(eventBuf, oddItem):
    soccerDefault = 16000
    oddsType = oddItem[0]

    lineStr = TransformNumToPk(oddsType, oddItem[8])
    lineAt = oddItem[9] # 1: 主讓 , 0: 客讓
    
    gameClass = int(oddsType) - soccerDefault

    if gameClass < 10:
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 局數"

    elif gameClass < 100:
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 總分"

    elif gameClass < 200:
        eventBuf.game_type = "1q"
        eventBuf.information.league += " - 第一局"

    #16001 局數-讓球
    #16011 總分-讓球
    #16101 第一局-讓球
    if searchItemfromArray(["16001", "16101", "16011"], oddsType) >= 0:

        eventBuf.information.league += " - 讓球"

        eventBuf.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
        eventBuf.twZF.homeZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
        eventBuf.twZF.awayZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0' 

    #16012 總分-大小
    #16102 第一局-大小
    elif searchItemfromArray(["16012", "16102"], oddsType) >= 0:
        eventBuf.information.league += " - 大小"

        eventBuf.twDS.line = lineStr    
        eventBuf.twDS.over = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twDS.under = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'   

    #16103 第一局-獨贏
    elif searchItemfromArray(["16103"], oddsType) >= 0:
        eventBuf.information.league += " - 獨贏" 

        eventBuf.de.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.de.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

    #16014 總分-單雙
    #16104 上半場-單雙
    elif searchItemfromArray(["16004", "16104"], oddsType) >= 0:
        eventBuf.information.league += " - 單雙"  

        eventBuf.sd.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.sd.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'            
 
    return eventBuf    