from upload import protobufUtils
from constants import Mapping

def football_parser(event_buf, odd_item):
    soccer_default = 19000
    odds_type = odd_item[Mapping.oddsData.oddType]

    odds_key = event_buf.raw_event_id + "_" + odd_item[Mapping.oddsData.oddGroup]

    game_class = int(odds_type) - soccer_default

    if game_class < 100 :
        event_buf.game_type = "live full" if event_buf.live == "true" else "full"
        event_buf.information.league += " - 全場"
        odds_key += "_0"

    elif game_class < 200 :
        event_buf.game_type = "live 1st half" if event_buf.live == "true" else "1st half"
        event_buf.information.league += " - 上半場"
        odds_key += "_1"

    #19001 全場-讓球
    #19101 上半場-讓球
    if odds_type in ["19001", "19101"]:
        event_buf = protobufUtils.set_spread(event_buf, odd_item) 

    #19002 全場-大小
    #19102 上半場-大小
    elif odds_type in ["19002", "19102"]:
        event_buf = protobufUtils.set_total(event_buf, odd_item) 

    #19003 全場-獨贏
    #19103 上半場-獨贏
    elif odds_type in ["19003", "19103"]: 
        event_buf = protobufUtils.set_monney_line(event_buf, odd_item, True)

    #19004 全場-單雙
    #19104 上半場-單雙
    elif odds_type in ["19004", "19104"]:
        event_buf = protobufUtils.set_parity(event_buf, odd_item)         
 
    return event_buf, odds_key
