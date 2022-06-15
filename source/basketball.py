from utils import searchItemfromArray
from upload import protobufUtils

def basketballParser(eventBuf, oddItem):
    soccerDefault = 12000
    oddsType = oddItem[0]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[3]

    gameClass = int(oddsType) - soccerDefault
 
    #籃球 主客對調
    tmpHome = eventBuf.information.home.team_name

    tmpAway = eventBuf.information.away.team_name

    eventBuf.information.home.team_name = tmpHome

    eventBuf.information.away.team_name = tmpAway

    if gameClass < 100:
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
        eventBuf.information.league += " - 全場"
        oddsKey += "_0"

    elif gameClass > 700  :
        eventBuf.game_type += "live full" if eventBuf.live == "true" else "full"
        eventBuf.information.league += " - 三分球總數"
        oddsKey += "_1"

    elif gameClass > 600  :
        eventBuf.game_type += "4q"
        eventBuf.information.league += " - 第四節"
        oddsKey += "_2"

    elif gameClass > 500  :
        eventBuf.game_type += "3q"
        eventBuf.information.league += " - 第三節"
        oddsKey += "_3"

    elif gameClass > 400  :
        eventBuf.game_type += "2q"  
        eventBuf.information.league += " - 第二節"
        oddsKey += "_4"

    elif gameClass > 300  : 
        eventBuf.game_type += "1q"
        eventBuf.information.league += " - 第一節" 
        oddsKey += "_5"  

    elif gameClass > 200  :
        eventBuf.game_type += "live 2nd half" if eventBuf.live == "true" else "2nd half"
        eventBuf.information.league += " - 下半場" 
        oddsKey += "_6" 

    elif gameClass > 100  :    
        eventBuf.game_type = "live 1st half" if eventBuf.live == "true" else "1st half"
        eventBuf.information.league += " - 上半場"
        oddsKey += "_7"


    if oddsType == "12005" or oddsType == "12105" or oddsType == "12305" or oddsType == "12006" or oddsType == "12106" or oddsType == "12306":
        eventBuf.information.league += " - 單隊總得分 - 客隊"
        oddsKey += "_1"

    elif oddsType == "12007" or oddsType == "12107" or oddsType == "12307" or oddsType == "12008" or oddsType == "12108" or oddsType == "12108":
        eventBuf.information.league += " - 單隊總得分 - 主隊"
        oddsKey += "_2"

    elif oddsType == "12010":
        eventBuf.information.league += " - 特別玩法 - 第一個三分球"
        oddsKey += "_3"

    elif oddsType == "12021":
        eventBuf.information.league += " - 首分"
        oddsKey += "_4"

    elif oddsType == "12022":
        eventBuf.information.league += " - 尾分"
        oddsKey += "_5"

    elif oddsType == "12023":
        eventBuf.information.league += " - 單節最高分"
        oddsKey += "_6"
    
    #12001 全場-讓球"
    #12101 上半場-讓球
    #12201 下半場-讓球
    #12301 第一節-讓球
    #12401 第二節-讓球
    #12501 第三節-讓球
    #12601 第四節-讓球
    if searchItemfromArray(["12001", "12101", "12201", "12301", "12401", "12501", "12601"], oddsType) >= 0:
        eventBuf = protobufUtils.setSpread(eventBuf, oddItem, True)

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
        eventBuf = protobufUtils.setTotal(eventBuf, oddItem)

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
        eventBuf = protobufUtils.setMonneyLine(eventBuf, oddItem, True)

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
        eventBuf = protobufUtils.serParity(eventBuf, oddItem)         

    return eventBuf, oddsKey