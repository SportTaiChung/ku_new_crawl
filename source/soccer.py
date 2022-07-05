from upload import protobufUtils
from constants import Mapping


def soccer_parser(event_buf, odd_item):
    soccer_default = 11000
    odds_type = odd_item[Mapping.oddsData.oddType]

    odds_key = event_buf.raw_event_id + "_" + odd_item[Mapping.oddsData.oddGroup]

    game_class = int(odds_type) - soccer_default

    if game_class < 100:
        event_buf.game_type = "live full" if event_buf.live == "true" else "full"
        odds_key += "_0"

    elif game_class > 200:
        event_buf.game_type = "live full" if event_buf.live == "true" else "full"
        game_classSlice = game_class - 200

        if game_classSlice < 10:
            event_buf.information.league += " - 00:00 - 14:59"
            odds_key += "_2"

        elif game_classSlice < 20:
            event_buf.information.league += " - 15:00 - 29:59"
            odds_key += "_3"

        elif game_classSlice < 30:
            event_buf.information.league += " - 30:00 - 半場"
            odds_key += "_4"

        elif game_classSlice < 40:
            event_buf.information.league += " - 45:01 - 59:59"
            odds_key += "_5"

        elif game_classSlice < 50:
            event_buf.information.league += " - 60:00 - 74:59"
            odds_key += "_6"

        elif game_classSlice < 60:
            event_buf.information.league += " - 74:00 - 全場"
            odds_key += "_7"

    elif game_class > 100:
        event_buf.game_type = "live 1st half" if event_buf.live == "true" else "1st half"
        odds_key += "_1"

    if odds_type in ["11011", "11111", "11012", "11112", "11013", "11113", "11014", "11114"]:
        event_buf.information.league += " - 角球數"
        odds_key += "_1"

    elif odds_type in ["11021", "11121", "11022", "11122", "11023", "11123", "11024", "11124"]:
        event_buf.information.league += " - 罰牌數"
        odds_key += "_2"

    elif odds_type == "11064" or odds_type == "11164":
        event_buf.information.league += " - 單隊總得分 - 主隊大小"
        odds_key += "_6"

    elif odds_type == "11065" or odds_type == "11165":
        event_buf.information.league += " - 單隊總得分 - 客隊大小"
        odds_key += "_7"

    elif odds_type == "11506":
        event_buf.information.league += " - 第一個角球"
        odds_key += "_8"

    elif odds_type == "11531":
        event_buf.information.league += " - 第一個進球"
        odds_key += "_9"

    # 11001 - 全場-讓球
    # 11011 - 全場-角球數-讓球
    # 11021 - 全場-罰牌數-讓球
    # 11066 - 全場-其他玩法-兩隊是否都進球
    # 11070 - 全場-其他玩法-最多進球的半場-雙項
    # 11071 - 全場-其他玩法-最多進球的半場-三項
    # 11101 - 上半場-讓球
    # 11111 - 上半場-角球數-讓球
    # 11121 - 上半場-罰牌數-讓球
    # 11167 - 上半場-其他玩法-兩隊是否都進球
    # 11201 - 00:00 - 14:59 -讓球
    # 11211 - 15:00 - 29:59 -讓球
    # 11221 - 30:00 - 半場 -讓球
    # 11231 - 45:01 - 59:59 -讓球
    # 11241 - 60:00 - 74:59 -讓球
    # 11251 - 74:00 - 全場 -讓球
    if odds_type in ["11001", "11011", "11021", "11066", "11070", "11071", "11101", "11111", "11121", "11167", "11201", "11211", "11221", "11231", "11241", "11251"]:

        event_buf = protobufUtils.set_spread(event_buf, odd_item)

        if odds_type == "11066" or odds_type == "11167":
            event_buf.information.league += "  - 其他玩法 - 兩隊是否都進球"
            event_buf.twZF.homeZF.line = "是"
            event_buf.twZF.awayZF.line = "否"
            odds_key += "_3"

        elif odds_type == "11070":
            event_buf.information.league += " - 其他玩法 - 最多進球的半場 - 雙項"
            event_buf.twZF.homeZF.line = "上半場"
            event_buf.twZF.awayZF.line = "下半場"
            odds_key += "_4"

        elif odds_type == "11071":
            event_buf.information.league += " - 其他玩法 - 最多進球的半場 - 三項"
            event_buf.twZF.homeZF.line = "上半場"
            event_buf.twZF.awayZF.line = "下半場"
            odds_key += "_5"

    # 11002 - 全場-大小
    # 11012 - 全場-角球數-大小
    # 11022 - 全場-罰牌數-大小
    # 11064 - 全場-單隊總得分-主隊大小
    # 11065 - 全場-單隊總得分-客隊大小
    # 11102 - 上半場-大小
    # 11112 - 上半場-角球數-大小
    # 11122 - 上半場-罰牌數-大小
    # 11164 - 上半場-單隊總得分-主隊大小
    # 11165 - 上半場-單隊總得分-客隊大小
    # 11202 - 00:00 - 14:59 -大小
    # 11212 - 15:00 - 29:59 -大小
    # 11222 - 30:00 - 半場 -大小
    # 11232 - 45:01 - 59:59 -大小
    # 11242 - 60:00 - 74:59 -大小
    # 11252 - 74:00 - 全場 -大小
    elif odds_type in ["11002", "11012", "11022", "11064", "11065", "11102", "11112", "11122", "11164", "11165", "11202", "11212", "11222", "11232", "11242", "11252"]:
        event_buf = protobufUtils.set_total(event_buf, odd_item)

    # 11003 - 全場-獨贏
    # 11013 - 全場-角球數-獨贏
    # 11023 - 全場-罰牌數-獨贏
    # 11103 - 上半場-獨贏
    # 11113 - 上半場-角球數-獨贏
    # 11123 - 上半場-罰牌數-獨贏
    # 11203 - 00:00 - 14:59 -獨贏
    # 11213 - 15:00 - 29:59 -獨贏
    # 11223 - 30:00 - 半場 -獨贏
    # 11233 - 45:01 - 59:59 -獨贏
    # 11243 - 60:00 - 74:59 -獨贏
    # 11253 - 74:00 - 全場  -獨贏
    # 11506 - 全場-第一個角球
    # 11531 - 全場-第一個進球
    elif odds_type in ["11003", "11013", "11023", "11103", "11113", "11123", "11203", "11213", "11223", "11233", "11243", "11253", "11506", "11531"]:
        event_buf = protobufUtils.set_monney_line(event_buf, odd_item, True)

    # 11004 - 全場-單雙
    # 11014 - 全場-角球數-單雙
    # 11024 - 全場-罰牌數-單雙
    # 11104 - 上半場-單雙
    # 11114 - 上半場-角球數-單雙
    # 11124 - 上半場-罰牌數-單雙
    elif odds_type == "11004" or odds_type == "11014" or odds_type == "11024" or odds_type == "11104" or odds_type == "11114" or odds_type == "11124":
        event_buf = protobufUtils.set_parity(event_buf, odd_item)

    # 11061 - 波膽-全場
    # 11161 - 波膽-上半場
    elif odds_type == "11061" or odds_type == "11161":
        event_buf.game_type = "pd " + event_buf.game_type
        odds_key += "_7"

        event_buf = protobufUtils.set_correct_score(event_buf, odd_item)

    # 11062 - 入球數-全場
    # 11162 - 入球數-上半場
    elif odds_type == "11062" or odds_type == "11162":
        event_buf.game_type = "tg " + event_buf.game_type
        odds_key += "_8"

        event_buf = protobufUtils.set_total_goal(event_buf, odd_item)

    # 11063 - 半全場
    elif odds_type == "11063":
        event_buf.game_type = "hf " + event_buf.game_type
        odds_key += "_9"

        event_buf = protobufUtils.set_full_half_outcome(event_buf, odd_item)

    return event_buf, odds_key
