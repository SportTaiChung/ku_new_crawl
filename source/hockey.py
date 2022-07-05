from upload import protobufUtils
from constants import Mapping


def hockey_parser(event_buf, odd_item):
    soccer_default = 15000
    odds_type = odd_item[Mapping.oddsData.oddType]

    odds_key = event_buf.raw_event_id + "_" + odd_item[Mapping.oddsData.oddGroup]

    event_buf.game_type = "live full" if event_buf.live == "true" else "full"
    odds_key += "_0"

    # 15001 全場-讓球
    if odds_type in ["15001"]:
        event_buf = protobufUtils.set_spread(event_buf, odd_item)

    # 15002 全場-大小
    elif odds_type in ["15002"]:
        event_buf = protobufUtils.set_total(event_buf, odd_item)

    # 獨贏
    elif odds_type in []:
        event_buf = protobufUtils.set_monney_line(event_buf, odd_item, True)

    # 15004 全場-單雙
    elif odds_type in ["15004"]:
        event_buf = protobufUtils.set_parity(event_buf, odd_item)

    return event_buf, odds_key
