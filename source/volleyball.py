from upload import protobufUtils
from constants import Mapping


def volleyball_parser(event_buf, odd_item):
    soccer_default = 16000
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
        odds_key += "_2"

    elif game_class < 300:
        event_buf.game_type = "2q"
        odds_key += "_3"

    elif game_class < 400:
        event_buf.game_type = "3q"
        odds_key += "_4"

    elif game_class < 500:
        event_buf.game_type = "4set"
        odds_key += "_5"

    elif game_class < 600:
        event_buf.game_type = "5set"
        odds_key += "_6"

    elif game_class < 700:
        event_buf.game_type = "6set"
        odds_key += "_7"

    elif game_class < 800:
        event_buf.game_type = "7set"
        odds_key += "_8"

    # 16001 局數-讓球
    # 16011 總分-讓球
    # 16101 第一局-讓球
    # 16201 第二局-讓球
    # 16301 第三局-讓球
    # 16401 第四局-讓球
    # 16501 第五局-讓球
    # 16601 第六局-讓球
    # 16701 第七局-讓球
    if odds_type in ["16001", "16101", "16011", "16201", "16301", "16401", "16501", "16601", "16701"]:
        event_buf = protobufUtils.set_spread(event_buf, odd_item)

    # 16012 總分-大小
    # 16102 第一局-大小
    # 16202 第二局-大小
    # 16302 第三局-大小
    # 16402 第四局-大小
    # 16502 第五局-大小
    # 16602 第六局-大小
    # 16702 第七局-大小
    elif odds_type in ["16012", "16102", "16202", "16302", "16402", "16502", "16602", "16702"]:
        event_buf = protobufUtils.set_total(event_buf, odd_item)

    # 16103 第一局-獨贏
    elif odds_type in ["16103"]:
        event_buf = protobufUtils.set_monney_line(event_buf, odd_item, True)

    # 16014 總分-單雙
    # 16104 第一局-單雙
    # 16204 第二局-單雙
    # 16304 第三局-單雙
    # 16404 第四局-單雙
    # 16504 第五局-單雙
    # 16604 第六局-單雙
    # 16704 第七局-單雙
    elif odds_type in ["16004", "16104", "16204", "16304", "16404", "16504", "16604", "16704"]:
        event_buf = protobufUtils.set_parity(event_buf, odd_item)
    return event_buf, odds_key
