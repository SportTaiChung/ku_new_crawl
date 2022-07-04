from upload import protobufUtils
from constants import Mapping

def basketball_parser(event_buf, odd_item):
    soccer_default = 12000
    odds_type = odd_item[Mapping.oddsData.oddType]

    odds_key = event_buf.raw_event_id + "_" + odd_item[Mapping.oddsData.oddGroup]

    game_class = int(odds_type) - soccer_default
 
    #籃球 主客對調
    tmp_home = event_buf.information.home.team_name

    tmp_away = event_buf.information.away.team_name

    event_buf.information.home.team_name = tmp_home

    event_buf.information.away.team_name = tmp_away

    if game_class < 100:
        event_buf.game_type = "live full" if event_buf.live == "true" else "full"
        event_buf.information.league += " - 全場"
        odds_key += "_0"

    elif game_class > 700  :
        event_buf.game_type += "live full" if event_buf.live == "true" else "full"
        event_buf.information.league += " - 三分球總數"
        odds_key += "_1"

    elif game_class > 600  :
        event_buf.game_type += "4q"
        event_buf.information.league += " - 第四節"
        odds_key += "_2"

    elif game_class > 500  :
        event_buf.game_type += "3q"
        event_buf.information.league += " - 第三節"
        odds_key += "_3"

    elif game_class > 400  :
        event_buf.game_type += "2q"  
        event_buf.information.league += " - 第二節"
        odds_key += "_4"

    elif game_class > 300  : 
        event_buf.game_type += "1q"
        event_buf.information.league += " - 第一節" 
        odds_key += "_5"  

    elif game_class > 200  :
        event_buf.game_type += "live 2nd half" if event_buf.live == "true" else "2nd half"
        event_buf.information.league += " - 下半場" 
        odds_key += "_6" 

    elif game_class > 100  :    
        event_buf.game_type = "live 1st half" if event_buf.live == "true" else "1st half"
        event_buf.information.league += " - 上半場"
        odds_key += "_7"


    if odds_type == "12005" or odds_type == "12105" or odds_type == "12305" or odds_type == "12006" or odds_type == "12106" or odds_type == "12306":
        event_buf.information.league += " - 單隊總得分 - 客隊"
        odds_key += "_1"

    elif odds_type == "12007" or odds_type == "12107" or odds_type == "12307" or odds_type == "12008" or odds_type == "12108" or odds_type == "12108":
        event_buf.information.league += " - 單隊總得分 - 主隊"
        odds_key += "_2"

    elif odds_type == "12010":
        event_buf.information.league += " - 特別玩法 - 第一個三分球"
        odds_key += "_3"

    elif odds_type == "12021":
        event_buf.information.league += " - 首分"
        odds_key += "_4"

    elif odds_type == "12022":
        event_buf.information.league += " - 尾分"
        odds_key += "_5"

    elif odds_type == "12023":
        event_buf.information.league += " - 單節最高分"
        odds_key += "_6"
    
    #12001 全場-讓球"
    #12101 上半場-讓球
    #12201 下半場-讓球
    #12301 第一節-讓球
    #12401 第二節-讓球
    #12501 第三節-讓球
    #12601 第四節-讓球
    if odds_type in ["12001", "12101", "12201", "12301", "12401", "12501", "12601"]:
        event_buf = protobufUtils.set_spread(event_buf, odd_item, True)

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
    elif odds_type in ["12002", "12102", "12202", "12302", "12402", "12502", "12602", "12005", "12007", "12105", "12107", "12305", "12307"]:
        event_buf = protobufUtils.set_total(event_buf, odd_item)

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
    elif odds_type in ["12003", "12103", "12203", "12303", "12403", "12503", "12603", "12010", "12021", "12022", "12023"]:
        event_buf = protobufUtils.set_monney_line(event_buf, odd_item, True)

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
    elif odds_type in ["12004", "12104", "12204", "12304", "12404", "12504", "12604", "12006", "12008", "12106", "12108", "12306", "12308"]:
        event_buf = protobufUtils.set_parity(event_buf, odd_item)         

    return event_buf, odds_key
