from utils import TransformNumToPk, searchItemfromArray

def basketballParser(eventBuf, oddItem):
    soccerDefault = 12000
    oddsType = oddItem[0]

    lineStr = TransformNumToPk(oddsType, oddItem[8])
    lineAt = oddItem[9] # 1: 主讓 , 0: 客讓

    gameClass = int(oddsType) - soccerDefault
 
    #籃球 主客對調
    tmpHome = eventBuf.information.home.team_name

    tmpAway = eventBuf.information.away.team_name

    eventBuf.information.home.team_name = tmpHome

    eventBuf.information.away.team_name = tmpAway

    if gameClass < 100:
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 全場"

    elif gameClass > 700  :
        eventBuf.game_type += "full"
        eventBuf.information.league += " - 三分球總數"

    elif gameClass > 600  :
        eventBuf.game_type += "4q"
        eventBuf.information.league += " - 第四節"    

    elif gameClass > 500  :
        eventBuf.game_type += "3q"
        eventBuf.information.league += " - 第三節"

    elif gameClass > 400  :
        eventBuf.game_type += "2q"  
        eventBuf.information.league += " - 第二節"

    elif gameClass > 300  : 
        eventBuf.game_type += "1q"
        eventBuf.information.league += " - 第一節"   

    elif gameClass > 200  :
        eventBuf.game_type += "2nd half"    
        eventBuf.information.league += " - 下半場"  

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
        eventBuf.twZF.homeZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
        eventBuf.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
        eventBuf.twZF.awayZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0' 

    #12002 全場-大小
    #12102 上半場-大小
    #12202 下半場-大小 
    #12302 第一節-大小
    #12402 第二節-大小
    #12502 第三節-大小
    #12602 第四節-大小
    #12005 全場-單隊總得分-客隊大小
    #12007 全場-單隊總得分-主隊大小
    #12105 上半場-單隊總得分-客隊大小
    #12107 上半場-單隊總得分-主隊大小 
    #12305 第一節-單隊總得分-客隊大小
    #12307 第一節-單隊總得分-主隊大小    
    elif searchItemfromArray(["12002", "12102", "12202", "12302", "12402", "12502", "12602", "12005", "12007", "12105", "12107", "12305", "12307"], oddsType) >= 0:
        if oddsType == "12005" or oddsType == "12105" or oddsType == "12305":
            eventBuf.information.league += " - 單隊總得分 - 客隊大小"
        elif oddsType == "12007" or oddsType == "12107" or oddsType == "12307":
            eventBuf.information.league += " - 單隊總得分 - 主隊大小"    
        else:    
            eventBuf.information.league += " - 大小"

        eventBuf.twDS.line = lineStr    
        eventBuf.twDS.over = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
        eventBuf.twDS.under = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'     

    #12003 全場-獨贏
    #12103 上半場-獨贏
    #12203 下半場-獨贏
    #12303 第一節-獨贏
    #12403 第二節-獨贏
    #12503 第三節-獨贏
    #12603 第四節-獨贏
    #12010 全場-特別玩法-第一個三分球
    #12021 全場-首分
    #12022 全場-尾分
    #12023 全場-單節最高分
    elif searchItemfromArray(["12003", "12103", "12203", "12303", "12403", "12503", "12603", "12010", "12021", "12022", "12023"], oddsType) >= 0:
        if oddsType == "12010":
            eventBuf.information.league += " - 特別玩法 - 第一個三分球"

        elif oddsType == "12021":
            eventBuf.information.league += " - 首分"

        elif oddsType == "12022":
            eventBuf.information.league += " - 尾分"

        elif oddsType == "12023":
            eventBuf.information.league += " - 單節最高分"            

        else :    
            eventBuf.information.league += " - 獨贏"

        eventBuf.de.home = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
        eventBuf.de.away = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'  

    #12004 全場-單雙
    #12104 上半場-單雙
    #12204 下半場-單雙
    #12304 第一節-單雙
    #12404 第二節-單雙
    #12504 第三節-單雙
    #12604 第四節-單雙
    #12006 全場-單隊總得分-客隊單雙
    #12008 全場-單隊總得分-主隊單雙
    #12106 上半場-單隊總得分-客隊單雙
    #12108 上半場-單隊總得分-主隊單雙
    #12306 第一節-單隊總得分-客隊單雙
    #12308 第一節-單隊總得分-主隊單雙 
    elif searchItemfromArray(["12004", "12104", "12204", "12304", "12404", "12504", "12604", "12006", "12008", "12106", "12108", "12306", "12308"], oddsType) >= 0:
        if oddsType == "12006" or oddsType == "12106" or oddsType == "12306":
            eventBuf.information.league += " - 單隊總得分 - 客隊單雙" 
        elif oddsType == "12008" or oddsType == "12108" or oddsType == "12108":
            eventBuf.information.league += " - 單隊總得分 - 主隊單雙"             
        else:    
            eventBuf.information.league += " - 單雙"  

        eventBuf.sd.home = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
        eventBuf.sd.away = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'

    return eventBuf