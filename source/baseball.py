from utils import TransformNumToPk, searchItemfromArray

def baseballParser(eventBuf, oddItem):
    soccerDefault = 13000
    oddsType = oddItem[0]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[3]

    lineStr = TransformNumToPk(oddsType, oddItem[8])
    lineAt = oddItem[9] # 1: 主讓 , 0: 客讓

    #棒球 主客對調
    tmpHome = eventBuf.information.home.team_name

    tmpAway = eventBuf.information.away.team_name

    eventBuf.information.home.team_name = tmpHome

    eventBuf.information.away.team_name = tmpAway

    gameClass = int(oddsType) - soccerDefault

    if gameClass < 30:
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 全場"
        oddsKey += "_0"

    elif gameClass < 50  :
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 1~3局"
        oddsKey += "_1"

    elif gameClass < 70  :
        eventBuf.game_type = "1st half"
        eventBuf.information.league += " - 上半場" 
        oddsKey += "_2"   

    elif gameClass < 100  :
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 1~7局"
        oddsKey += "_3"

    elif gameClass < 200  :
        eventBuf.game_type = "1q"  
        eventBuf.information.league += " - 第一局 - 得分"
        oddsKey += "_4"

    elif gameClass < 300  :
        eventBuf.game_type = "1q"  
        eventBuf.information.league += " - 第一局 - 安打"
        oddsKey += "_5"    

    elif gameClass < 400  : 
        eventBuf.game_type = "full"
        oddsKey += "_6"


    if oddsType == "13006":
        eventBuf.information.league += " - 單隊總得分 - 客隊"
        oddsKey += "_1"

    elif oddsType == "13007":    
        eventBuf.information.league += " - 單隊總得分 - 主隊"
        oddsKey += "_2"

    elif oddsType == "13012":
        eventBuf.information.league += " - 安打總數"
        oddsKey += "_3"

    elif oddsType == "13321":
        eventBuf.information.league += " - (得分+安打+失誤)總和"
        oddsKey += "_4"

    elif oddsType == "13301":
        eventBuf.information.league += " - 首分"
        oddsKey += "_5"
        
    elif oddsType == "13302":
        eventBuf.information.league += " - 尾分" 
        oddsKey += "_6" 

    elif oddsType == "13005":
        eventBuf.information.league += " - 一輸二贏 " + lineStr 
        oddsKey += "_7"


    #13001 全場-讓球
    #13031 1~3局-讓球
    #13051 上半場-讓球
    #13071 1~7局-讓球
    #13111 第一局-得分-讓球
    #13211 第一局-安打-讓球
    if searchItemfromArray(["13001", "13032", "13051", "13071", "13111", "13211"], oddsType) >= 0:

        eventBuf.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
        eventBuf.twZF.homeZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
        eventBuf.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
        eventBuf.twZF.awayZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0' 

    #13002 全場-大小
    #13006 全場-單隊總得分-客隊大小
    #13007 全場-單隊總得分-主隊大小
    #13012 全場-安打總數
    #13032 1~3局-大小
    #13052 上半場-大小
    #13072 1~7局-大小
    #13112 第一局-得分-大小
    #13212 第一局-安打-大小
    #13321 全場-(得分+安打+失誤)總和
    elif searchItemfromArray(["13002", "13006", "13007", "13012", "13032", "13052", "13072", "13112", "13212", "13321"], oddsType) >= 0:

        eventBuf.twDS.line = lineStr    
        eventBuf.twDS.over = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
        eventBuf.twDS.under = str(oddItem[13]) if len(str(oddItem[14])) > 0 else '0'

    #13003 全場-獨贏
    #13053 上半場-獨贏
    #13113 第一局-得分-獨贏
    #13213 第一局-安打-獨贏
    #13301 全場-首分
    #13302 全場-尾分
    elif searchItemfromArray(["13003", "13053", "13113", "13213", "13301", "13302"], oddsType) >= 0:

        eventBuf.de.home = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
        eventBuf.de.away = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'

        if len(oddItem) >= 17:
            eventBuf.draw = str(oddItem[17]) if len(str(oddItem[17])) > 0 else '0' 

    #13004 全場-單雙
    #13034 1~3局-單雙
    #13054 上半場-單雙
    #13074 1~7局-單雙
    elif searchItemfromArray(["13004", "13034", "13054", "13074"], oddsType) >= 0:

        eventBuf.sd.home = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
        eventBuf.sd.away = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'

    #13005 全場-一輸二贏
    elif searchItemfromArray(["13005"], oddsType) >= 0:

        eventBuf.esre.let = (1 if lineAt == 1 else 2)
        eventBuf.esre.home = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
        eventBuf.esre.away = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'             


    return eventBuf, oddsKey   