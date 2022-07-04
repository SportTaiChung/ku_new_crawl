from upload import protobufUtils
from constants import Mapping

def pingpong_parser(event_buf, odd_item):
    soccer_default = 21000
    odds_type = odd_item[Mapping.oddsData.oddType]

    odds_key = event_buf.raw_event_id + "_" + odd_item[Mapping.oddsData.oddGroup]

    game_class = int(odds_type) - soccer_default

    if game_class < 10:
        event_buf.game_type = "live full" if event_buf.live == "true" else "full"
        event_buf.information.league += " - 局數"
        odds_key += "_0"

    elif game_class < 100:
        event_buf.game_type = "live full" if event_buf.live == "true" else "full"
        event_buf.information.league += " - 總分"
        odds_key += "_1"

    elif game_class < 200:
        event_buf.game_type = "1q"
        event_buf.information.league += " - 第一局"
        odds_key += "_2"

    elif game_class < 300:
        event_buf.game_type = "2q"
        event_buf.information.league += " - 第二局"
        odds_key += "_3"

    elif game_class < 400:
        event_buf.game_type = "3q"
        event_buf.information.league += " - 第三局"
        odds_key += "_4"                   

    elif game_class < 500:
        event_buf.game_type = "4set"
        event_buf.information.league += " - 第四局"
        odds_key += "_5"   

    elif game_class < 600:
        event_buf.game_type = "5set"
        event_buf.information.league += " - 第五局"
        odds_key += "_6"   

    elif game_class < 700:
        event_buf.game_type = "6set"
        event_buf.information.league += " - 第六局"
        odds_key += "_7"   

    elif game_class < 800:
        event_buf.game_type = "7set"
        event_buf.information.league += " - 第七局"
        odds_key += "_8"                 

    #21001 局數-讓球
    #21101 第一局-讓球
    #21201 第二局-讓球
    #21301 第三局-讓球
    #21401 第四局-讓球
    #21501 第五局-讓球
    #21601 第六局-讓球
    #21701 第七局-讓球
    if odds_type in ["21001", "21101", "21201", "21301", "21401", "21501", "21601", "21701"]:
        event_buf = protobufUtils.set_spread(event_buf, odd_item) 

    #21012 總分-大小
    #21102 第一局-大小
    #21202 第二局-大小
    #21302 第三局-大小
    #21402 第四局-大小
    #21502 第五局-大小
    #21602 第六局-大小
    #21702 第七局-大小    
    elif odds_type in ["21012", "21102", "21202", "21302", "21402", "21502", "21602", "21702"]:
        event_buf = protobufUtils.set_total(event_buf, odd_item) 

    #21003 局數-獨贏
    #21103 第一局-獨贏
    elif odds_type in ["21003"]:
        event_buf = protobufUtils.set_monney_line(event_buf, odd_item, True)

    #21014 總分-單雙
    #21104 第一局-單雙
    #21204 第二局-單雙
    #21304 第三局-單雙
    #21404 第四局-單雙
    #21504 第五局-單雙
    #21604 第六局-單雙
    #21704 第七局-單雙      
    elif odds_type in ["21014", "21104", "21204", "21304", "21404", "21504", "21604", "21704"]:
        event_buf = protobufUtils.set_parity(event_buf, odd_item)
 
    return event_buf, odds_key    
