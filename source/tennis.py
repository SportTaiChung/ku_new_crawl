from upload import protobufUtils
from constants import Mapping

def tennisParser(event_buf, odd_item):
    soccer_default = 14000
    odds_type = odd_item[Mapping.oddsData.oddType]

    odds_key = event_buf.raw_event_id + "_" + odd_item[Mapping.oddsData.oddGroup]

    game_class = int(odds_type) - soccer_default
    
    if game_class < 10:
        event_buf.game_type = "live full" if event_buf.live == "true" else "full"
        event_buf.information.league += " - 局數"
        odds_key += "_0"

    elif game_class < 100:
        event_buf.game_type = "live full" if event_buf.live == "true" else "full"
        event_buf.information.league += " - 盤數"
        odds_key += "_1"

    elif game_class < 200:
        event_buf.game_type = "1q"
        event_buf.information.league += " - 第一盤"
        odds_key += "_2"

    elif game_class < 300:
        event_buf.game_type = "2q"
        event_buf.information.league += " - 第二盤"
        odds_key += "_3"

    elif game_class < 400:
        event_buf.game_type = "3q"
        event_buf.information.league += " - 第三盤"
        odds_key += "_4"

    elif game_class < 500:
        event_buf.game_type = "4set"
        event_buf.information.league += " - 第四盤"
        odds_key += "_5"

    elif game_class < 600:
        event_buf.game_type = "5set"
        event_buf.information.league += " - 第五盤"
        odds_key += "_6"                
    
    #14001 局數-讓球
    if odds_type in ["14001", "14101", "14201", "14301" ,"14401" ,"14501"]:
        event_buf = protobufUtils.set_spread(event_buf, odd_item) 

    #14002 局數-大小
    elif odds_type in ["14002"]:
        event_buf = protobufUtils.set_total(event_buf, odd_item) 

    #14013 盤數-獨贏
    #14103 第一盤-獨贏
    elif odds_type in ["14013", "14103"]:
        event_buf = protobufUtils.set_monney_line(event_buf, odd_item, True)

    #14004 局數-單雙
    elif odds_type in ["14004"]:
        event_buf = protobufUtils.set_parity(event_buf, odd_item)

    return event_buf, odds_key
