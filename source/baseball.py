from upload import protobufUtils
from constants import Mapping

def baseballParser(eventBuf, oddItem):
    soccerDefault = 13000
    oddsType = oddItem[Mapping.oddsData.oddType]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[Mapping.oddsData.oddGroup]

    # #棒球 主客對調
    tmpHome = eventBuf.information.home.team_name

    tmpAway = eventBuf.information.away.team_name

    eventBuf.information.home.team_name = tmpAway

    eventBuf.information.away.team_name = tmpHome

    gameClass = int(oddsType) - soccerDefault

    if gameClass < 30:
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
        eventBuf.information.league += " - 全場"
        oddsKey += "_0"

    elif gameClass < 50  :
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
        eventBuf.information.league += " - 1~3局"
        oddsKey += "_1"

    elif gameClass < 70  :
        eventBuf.game_type = "live 1st half" if eventBuf.live == "true" else "1st half"
        eventBuf.information.league += " - 上半場" 
        oddsKey += "_2"   

    elif gameClass < 100  :
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
        eventBuf.information.league += " - 1~7局"
        oddsKey += "_3"

    elif gameClass < 120  :
        eventBuf.game_type = "1q"  
        eventBuf.information.league += " - 第一局 - 得分"
        oddsKey += "_4_1"

    elif gameClass < 130  :
        eventBuf.game_type = "2q"  
        eventBuf.information.league += " - 第二局 - 得分"
        oddsKey += "_4_2"

    elif gameClass < 140  :
        eventBuf.game_type = "3q"  
        eventBuf.information.league += " - 第三局 - 得分"
        oddsKey += "_4_3"

    elif gameClass < 150  :
        eventBuf.game_type = "4set"  
        eventBuf.information.league += " - 第四局 - 得分"
        oddsKey += "_4_4"

    elif gameClass < 160  :
        eventBuf.game_type = "5set"  
        eventBuf.information.league += " - 第五局 - 得分"
        oddsKey += "_4_5"

    elif gameClass < 170  :
        eventBuf.game_type = "6set"  
        eventBuf.information.league += " - 第六局 - 得分"
        oddsKey += "_4_6"

    elif gameClass < 180  :
        eventBuf.game_type = "7set"  
        eventBuf.information.league += " - 第七局 - 得分"
        oddsKey += "_4_7"

    elif gameClass < 190  :
        eventBuf.game_type = "8set"  
        eventBuf.information.league += " - 第八局 - 得分"
        oddsKey += "_4_8"

    elif gameClass < 200  :
        eventBuf.game_type = "9set"  
        eventBuf.information.league += " - 第九局 - 得分"
        oddsKey += "_4_9"

    elif gameClass < 300  :
        eventBuf.game_type = "1q"  
        eventBuf.information.league += " - 第一局 - 安打"
        oddsKey += "_5"    

    elif gameClass < 400  : 
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
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
    #13121 第二局-得分-讓球
    #13131 第三局-得分-讓球
    #13141 第四局-得分-讓球
    #13151 第五局-得分-讓球
    #13161 第六局-得分-讓球
    #13171 第七局-得分-讓球
    #13181 第八局-得分-讓球
    #13191 第九局-得分-讓球
    if oddsType in ["13001", "13032", "13051", "13071", "13111", "13211", "13121", "13131", "13141", "13151", "13161", "13171", "13181", "13191"]:
        eventBuf = protobufUtils.set_spread(eventBuf, oddItem, True)

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
    #13122 第二局-得分-大小
    #13132 第三局-得分-大小
    #13142 第四局-得分-大小
    #13152 第五局-得分-大小
    #13162 第六局-得分-大小
    #13172 第七局-得分-大小
    #13182 第八局-得分-大小
    #13192 第九局-得分-大小
    elif oddsType in ["13002", "13006", "13007", "13012", "13032", "13052", "13072", "13112", "13212", "13321", "13122", "13132", "13142", "13152", "13162", "13172", "13182", "13192"]:
        eventBuf = protobufUtils.set_total(eventBuf, oddItem)

    #13003 全場-獨贏
    #13053 上半場-獨贏
    #13113 第一局-得分-獨贏
    #13213 第一局-安打-獨贏
    #13301 全場-首分
    #13302 全場-尾分
    elif oddsType in ["13003", "13053", "13113", "13213", "13301", "13302"]:
        eventBuf = protobufUtils.set_monney_line(eventBuf, oddItem)

    #13004 全場-單雙
    #13034 1~3局-單雙
    #13054 上半場-單雙
    #13074 1~7局-單雙
    elif oddsType in ["13004", "13034", "13054", "13074"]:
        eventBuf = protobufUtils.set_parity(eventBuf, oddItem)         

    #13005 全場-一輸二贏
    elif oddsType in ["13005"]:
        eventBuf = protobufUtils.set_spread_1_5(eventBuf, oddItem, True)           

    return eventBuf, oddsKey   