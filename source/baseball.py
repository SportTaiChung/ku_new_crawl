from upload import protobufUtils
from constants import Mapping

def baseball_parser(event_buf, odd_item):
    soccer_default = 13000
    odds_type = odd_item[Mapping.oddsData.oddType]

    odds_key = event_buf.raw_event_id + "_" + odd_item[Mapping.oddsData.oddGroup]

    # #棒球 主客對調
    tmp_home = event_buf.information.home.team_name

    tmp_away = event_buf.information.away.team_name

    event_buf.information.home.team_name = tmp_away

    event_buf.information.away.team_name = tmp_home

    game_class = int(odds_type) - soccer_default

    if game_class < 30:
        event_buf.game_type = "live full" if event_buf.live == "true" else "full"
        event_buf.information.league += " - 全場"
        odds_key += "_0"

    elif game_class < 50  :
        event_buf.game_type = "live full" if event_buf.live == "true" else "full"
        event_buf.information.league += " - 1~3局"
        odds_key += "_1"

    elif game_class < 70  :
        event_buf.game_type = "live 1st half" if event_buf.live == "true" else "1st half"
        event_buf.information.league += " - 上半場" 
        odds_key += "_2"   

    elif game_class < 100  :
        event_buf.game_type = "live full" if event_buf.live == "true" else "full"
        event_buf.information.league += " - 1~7局"
        odds_key += "_3"

    elif game_class < 120  :
        event_buf.game_type = "1q"  
        event_buf.information.league += " - 第一局 - 得分"
        odds_key += "_4_1"

    elif game_class < 130  :
        event_buf.game_type = "2q"  
        event_buf.information.league += " - 第二局 - 得分"
        odds_key += "_4_2"

    elif game_class < 140  :
        event_buf.game_type = "3q"  
        event_buf.information.league += " - 第三局 - 得分"
        odds_key += "_4_3"

    elif game_class < 150  :
        event_buf.game_type = "4set"  
        event_buf.information.league += " - 第四局 - 得分"
        odds_key += "_4_4"

    elif game_class < 160  :
        event_buf.game_type = "5set"  
        event_buf.information.league += " - 第五局 - 得分"
        odds_key += "_4_5"

    elif game_class < 170  :
        event_buf.game_type = "6set"  
        event_buf.information.league += " - 第六局 - 得分"
        odds_key += "_4_6"

    elif game_class < 180  :
        event_buf.game_type = "7set"  
        event_buf.information.league += " - 第七局 - 得分"
        odds_key += "_4_7"

    elif game_class < 190  :
        event_buf.game_type = "8set"  
        event_buf.information.league += " - 第八局 - 得分"
        odds_key += "_4_8"

    elif game_class < 200  :
        event_buf.game_type = "9set"  
        event_buf.information.league += " - 第九局 - 得分"
        odds_key += "_4_9"

    elif game_class < 300  :
        event_buf.game_type = "1q"  
        event_buf.information.league += " - 第一局 - 安打"
        odds_key += "_5"    

    elif game_class < 400  : 
        event_buf.game_type = "live full" if event_buf.live == "true" else "full"
        odds_key += "_6"


    if odds_type == "13006":
        event_buf.information.league += " - 單隊總得分 - 客隊"
        odds_key += "_1"

    elif odds_type == "13007":    
        event_buf.information.league += " - 單隊總得分 - 主隊"
        odds_key += "_2"

    elif odds_type == "13012":
        event_buf.information.league += " - 安打總數"
        odds_key += "_3"

    elif odds_type == "13321":
        event_buf.information.league += " - (得分+安打+失誤)總和"
        odds_key += "_4"

    elif odds_type == "13301":
        event_buf.information.league += " - 首分"
        odds_key += "_5"
        
    elif odds_type == "13302":
        event_buf.information.league += " - 尾分" 
        odds_key += "_6" 

    elif odds_type == "13005":
        event_buf.information.league += " - 一輸二贏 " + lineStr 
        odds_key += "_7"


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
    if odds_type in ["13001", "13032", "13051", "13071", "13111", "13211", "13121", "13131", "13141", "13151", "13161", "13171", "13181", "13191"]:
        event_buf = protobufUtils.set_spread(event_buf, odd_item, True)

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
    elif odds_type in ["13002", "13006", "13007", "13012", "13032", "13052", "13072", "13112", "13212", "13321", "13122", "13132", "13142", "13152", "13162", "13172", "13182", "13192"]:
        event_buf = protobufUtils.set_total(event_buf, odd_item)

    #13003 全場-獨贏
    #13053 上半場-獨贏
    #13113 第一局-得分-獨贏
    #13213 第一局-安打-獨贏
    #13301 全場-首分
    #13302 全場-尾分
    elif odds_type in ["13003", "13053", "13113", "13213", "13301", "13302"]:
        event_buf = protobufUtils.set_monney_line(event_buf, odd_item)

    #13004 全場-單雙
    #13034 1~3局-單雙
    #13054 上半場-單雙
    #13074 1~7局-單雙
    elif odds_type in ["13004", "13034", "13054", "13074"]:
        event_buf = protobufUtils.set_parity(event_buf, odd_item)         

    #13005 全場-一輸二贏
    elif odds_type in ["13005"]:
        event_buf = protobufUtils.set_spread_1_5(event_buf, odd_item, True)           

    return event_buf, odds_key   
