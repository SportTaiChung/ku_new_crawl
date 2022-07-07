# coding: utf-8
import traceback
import pika
from utils import transform_num_to_pk
from constants import Mapping


def get_exchange_name(sport_type_id):
    sport_type_id_exchange_mapping = {
        '11': 'KU_SC',
        '51': 'KU_SC',
        '52': 'KU_SC',
        '53': 'KU_SC',
        '12': 'KU_BK',
        '13': 'KU_BS',
        '14': 'KU_TN',
        '15': 'KU_HC',
        '16': 'KU_BK',
        '17': 'KU_BK',
        '18': 'KU_ES',
        '19': 'KU_FB',
        '20': 'KU_BK',
        '21': 'KU_BK',
        '22': 'KU_BK',
        '23': 'KU_BK'
    }
    return sport_type_id_exchange_mapping.get(sport_type_id, 'KU_BK')


def init_session(url):
    parameters = pika.URLParameters(url)
    connection = pika.BlockingConnection(parameters)
    channel = connection.channel()
    return connection, channel


def upload_data(channel, data, sport_type_id):
    try:
        exchange = get_exchange_name(str(sport_type_id))
        channel.basic_publish(exchange='test', routing_key=exchange, body=memoryview(data.SerializeToString()))
    except Exception:
        traceback.print_exc()
        return False
    return True


class protobufUtils:
    @classmethod
    def get_odds(self, odds):
        return (str(odds) if len(str(odds)) > 0 else '0')

    # 讓分
    @classmethod
    def set_spread(self, event_buf, odds_item, reverse=False):
        line_str = transform_num_to_pk(odds_item[Mapping.oddsData.oddType], odds_item[Mapping.oddsData.oddLine])
        line_at = odds_item[Mapping.oddsData.whichTeam]  # 1: 主讓 , 0: 客讓

        if reverse:
            away_line = ("-" if line_at == 1 else "+") + line_str
            away_odds = self.get_odds(odds_item[Mapping.oddsData.homeOdd])
            home_line = ("+" if line_at == 1 else "-") + line_str
            home_odds = self.get_odds(odds_item[Mapping.oddsData.awayOdd])
        else:
            home_line = ("-" if line_at == 1 else "+") + line_str
            home_odds = self.get_odds(odds_item[Mapping.oddsData.homeOdd])
            away_line = ("+" if line_at == 1 else "-") + line_str
            away_odds = self.get_odds(odds_item[Mapping.oddsData.awayOdd])

        event_buf.twZF.homeZF.line = home_line
        event_buf.twZF.homeZF.odds = home_odds
        event_buf.twZF.awayZF.line = away_line
        event_buf.twZF.awayZF.odds = away_odds
        return event_buf

    # 大小
    @classmethod
    def set_total(self, event_buf, odds_item):
        line_str = transform_num_to_pk(odds_item[Mapping.oddsData.oddType], odds_item[Mapping.oddsData.oddLine])
        over_odds = self.get_odds(odds_item[Mapping.oddsData.homeOdd])
        under_odds = self.get_odds(odds_item[Mapping.oddsData.awayOdd])

        event_buf.twDS.line = line_str
        event_buf.twDS.over = over_odds
        event_buf.twDS.under = under_odds
        return event_buf

    # 獨贏
    @classmethod
    def set_monney_line(self, event_buf, odds_item, reverse=False):
        if reverse:
            home_odds = self.get_odds(odds_item[Mapping.oddsData.homeOdd])
            away_odds = self.get_odds(odds_item[Mapping.oddsData.awayOdd])
        else:
            home_odds = self.get_odds(odds_item[Mapping.oddsData.awayOdd])
            away_odds = self.get_odds(odds_item[Mapping.oddsData.homeOdd])

        draw_odds = self.get_odds(odds_item[Mapping.oddsData.drawOdd]) if len(odds_item) >= 17 else '0'

        event_buf.de.home = home_odds
        event_buf.de.away = away_odds
        event_buf.draw = draw_odds
        return event_buf

    # 一輸二贏
    @classmethod
    def set_spread_1_5(self, event_buf,  odds_item, reverse=False):
        line_at = odds_item[Mapping.oddsData.whichTeam]  # 1: 主讓 , 0: 客讓
        let = (1 if line_at == 1 else 2)
        if reverse:
            home_odds = self.get_odds(odds_item[Mapping.oddsData.homeOdd])
            away_odds = self.get_odds(odds_item[Mapping.oddsData.awayOdd])
        else:
            home_odds = self.get_odds(odds_item[Mapping.oddsData.awayOdd])
            away_odds = self.get_odds(odds_item[Mapping.oddsData.homeOdd])

        event_buf.esre.let = let
        event_buf.esre.home = home_odds
        event_buf.esre.away = away_odds
        return event_buf

    # 單雙
    @classmethod
    def set_parity(self, event_buf, odds_item, reverse=False):
        if reverse:
            home_odds = self.get_odds(odds_item[Mapping.oddsData.homeOdd])
            away_odds = self.get_odds(odds_item[Mapping.oddsData.awayOdd])
        else:
            home_odds = self.get_odds(odds_item[Mapping.oddsData.awayOdd])
            away_odds = self.get_odds(odds_item[Mapping.oddsData.homeOdd])

        event_buf.sd.home = home_odds
        event_buf.sd.away = away_odds
        return event_buf

    # 總得分
    @classmethod
    def set_team_total(event_buf):
        return event_buf

    # 波膽
    @classmethod
    def set_correct_score(self, event_buf, odds_item):
        event_buf.multi = "{"
        for odd_item_index in range(12, (len(odds_item) - 1), 2):
            key = odds_item[odd_item_index]
            odd = self.get_odds(odds_item[odd_item_index + 1])
            if key == "99":
                event_buf.multi += "\"other\": " + str(odd)
            else:
                event_buf.multi += "\"" + key[0:1] + "-" + key[1:2] + "\": \"" + odd + "\","
        event_buf.multi += "}"
        return event_buf

    # 半全場
    @classmethod
    def set_full_half_outcome(self, event_buf, odds_item):
        hf_HH = self.get_odds(odds_item[Mapping.oddsData.hf_HH])
        hf_HD = self.get_odds(odds_item[Mapping.oddsData.hf_HD])
        hf_HA = self.get_odds(odds_item[Mapping.oddsData.hf_HA])
        hf_DH = self.get_odds(odds_item[Mapping.oddsData.hf_DH])
        hf_DD = self.get_odds(odds_item[Mapping.oddsData.hf_DD])
        hf_DA = self.get_odds(odds_item[Mapping.oddsData.hf_DA])
        hf_AH = self.get_odds(odds_item[Mapping.oddsData.hf_AH])
        hf_AD = self.get_odds(odds_item[Mapping.oddsData.hf_AD])
        hf_AA = self.get_odds(odds_item[Mapping.oddsData.hf_AA])

        event_buf.multi = "{\"HH\": " + hf_HH + ", \"HD\": " + hf_HD + ", \"HA\": " + hf_HA + ", \"DH\": " + hf_DH + ", \"DD\": " + hf_DD + ", \"DA\": " + hf_DA + ", \"AH\": " + hf_AH + ", \"AD\": " + hf_AD + ", \"AA\": " + hf_AA + "}"

        return event_buf

    # 入球數
    @classmethod
    def set_total_goal(self, event_buf, odds_item):
        tg_0_1 = self.get_odds(odds_item[Mapping.oddsData.tg_0_1])
        tg_2_3 = self.get_odds(odds_item[Mapping.oddsData.tg_2_3])
        tg_4_6 = self.get_odds(odds_item[Mapping.oddsData.tg_4_6])
        tg_7 = self.get_odds(odds_item[Mapping.oddsData.tg_7])
        event_buf.multi = "{\"0-1\": \"" + tg_0_1 + "\", \"2-3\": \"" + tg_2_3 + "\", \"4-6\": \"" + tg_4_6 + "\", \"7+\": \"" + tg_7 + "\"}"

        return event_buf
