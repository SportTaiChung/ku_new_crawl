from utils import TransformNumToPk, searchItemfromArray

def basketballParser(eventBuf, oddItem):
    soccerDefault = 12000
    oddsType = oddItem[0]

    lineStr = TransformNumToPk(oddsType, oddItem[8])
    lineAt = oddItem[9] # 1: 主讓 , 0: 客讓

    gameClass = int(oddsType) - soccerDefault

    if gameClass < 100:
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 全場"

    elif gameClass > 700  :
        event.game_type += "full"
        event.information.league += " - 三分球總數"

    elif gameClass > 600  :
        event.game_type += "4q"
        event.information.league += " - 第四節"    

    elif gameClass > 500  :
        event.game_type += "3q"
        event.information.league += " - 第三節"

    elif gameClass > 400  :
        event.game_type += "2q"  
        event.information.league += " - 第二節"

    elif gameClass > 300  : 
        event.game_type += "1q"
        event.information.league += " - 第一節"   

    elif gameClass > 200  :
        event.game_type += "2nd half"    
        event.information.league += " - 下半場"  

    elif gameClass > 100  :    
        eventBuf.game_type = "1st half"
        eventBuf.information.league += " - 上半場"    
    
    #12001 全場-讓球"
    #12101 上半場-讓球
    #12201 下半場-讓球
    #12301 第一節-讓球
    #12401 第二節-讓球
    #12501 第三節-讓球
    #12601 第四節-讓球
    if searchItemfromArray(["12001", "12101", "12201", "12301", "12401", "12501", "12601"], oddsType) >= 0:
        eventBuf.information.league += " - 讓球"

        eventBuf.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
        eventBuf.twZF.homeZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
        eventBuf.twZF.awayZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0' 

    #12002 全場-大小
    #12102 上半場-大小
    #12202 下半場-大小 
    #12302 第一節-大小
    #12402 第二節-大小
    #12502 第三節-大小
    #12602 第四節-大小
    elif searchItemfromArray(["12002", "12102", "12202", "12302", "12402", "12502", "12602"], oddsType) >= 0:
        eventBuf.information.league += " - 大小"

        eventBuf.twDS.line = lineStr    
        eventBuf.twDS.over = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twDS.under = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'     

    #12003 全場-獨贏
    #12103 上半場-獨贏
    #12203 下半場-獨贏
    #12303 第一節-獨贏
    #12403 第二節-獨贏
    #12503 第三節-獨贏
    #12603 第四節-獨贏
    elif searchItemfromArray(["12003", "12103", "12203", "12303", "12403", "12503", "12603"], oddsType) >= 0:
        eventBuf.information.league += " - 獨贏"

        eventBuf.de.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.de.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'  

    #12004 全場-單雙
    #12104 上半場-單雙
    #12204 下半場-單雙
    #12304 第一節-單雙
    #12404 第二節-單雙
    #12504 第三節-單雙
    #12604 第四節-單雙
    elif searchItemfromArray(["12004", "12104", "12204", "12304", "12404", "12504", "12604"], oddsType) >= 0:
        eventBuf.information.league += " - 單雙"  

        eventBuf.sd.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.sd.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

    return eventBuf