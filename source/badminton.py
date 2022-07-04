from upload import protobufUtils
from constants import Mapping

def badmintonParser(event_buf, odd_item):
    soccer_default = 17000
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

    #17001 局數-讓球
    #17011 總分-讓球
    #17101 第一局-讓球
    #17201 第二局-讓球
    #17301 第三局-讓球
    #17401 第四局-讓球
    #17501 第五局-讓球
    if odds_type in ["17001", "17101", "17011", "17201", "17301", "17401", "17501"]:
        event_buf = protobufUtils.set_spread(event_buf, odd_item)

    #17012 總分-大小
    #17102 第一局-大小
    #17202 第二局-大小
    #17302 第三局-大小
    #17402 第四局-大小  
    #17502 第五局-大小  
    elif odds_type in ["17012", "17102", "17202", "17302", "17402", "17502"]:
        event_buf = protobufUtils.set_total(event_buf, odd_item) 

    #17103 第一局-獨贏
    elif odds_type in ["17103"]:
        event_buf = protobufUtils.set_monney_line(event_buf, odd_item, True)

    #17014 總分-單雙
    #17104 第一局-單雙
    #17204 第二局-單雙
    #17304 第三局-單雙
    #17404 第四局-單雙  
    #17504 第五局-單雙    
    elif odds_type in ["17004", "17104", "17204", "17304", "17404", "17504"]: 
        event_buf = protobufUtils.set_parity(event_buf, odd_item)           
 
    return event_buf, odds_key
