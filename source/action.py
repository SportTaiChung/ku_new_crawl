import time
import zlib
import json
import datetime
import APHDC_pb2 as protobuf_spec
import utils
from soccer import soccer_parser
from basketball import basketball_parser
from baseball import baseball_parser
from tennis import tennis_parser
from hockey import hockey_parser
from football import football_parser
from volleyball import volleyball_parser
from badminton import badminton_parser
from eSport import eSport_parser
from pingpong import pingpong_parser
from constants import Mapping
import logger

_game_list = {}

def pako_inflate(data):

    decompress = zlib.decompressobj(15)

    decompressed_data = decompress.decompress(data)

    decompressed_data += decompress.flush()

    return decompressed_data

def transform_to_protobuf(json_data):
    game_type_list = {}
    for game_type in json_data["ally"]:
        game_id = game_type[Mapping.allyData.leagueId]
        game_name = utils.ally_name_process(gameId, game_type[Mapping.allyData.leagueName])
        game_type_list[game_id] = {
            "aId" : game_id,
            "name" : game_name,
            "uuid" : game_type[Mapping.allyData.leagueUUID],
            "sport" : game_type[Mapping.allyData.sportId],
            "type" : game_type[Mapping.allyData.typeId],
        }

    game_score_list = json_data["score"]

    game_odds_list = json_data["odds"]

    game_round_list = json_data["game"]

    event_proto_list = {}

    data_list = protobuf_spec.ApHdcArr()

    for odds in game_odds_list : 

        game_round_id = odds[0]

        try:
            game_round = list(filter(lambda x: x[0] == game_round_id, game_round_list))[0]
        except Exception:
            game_round = []

        if len(game_round) == 0 or not game_round[Mapping.gameData.gameLeagueId] in game_type_list :
            continue

        game_type = str(game_type_list[game_round[Mapping.gameData.gameLeagueId]]["type"])
        game_display_name = game_type_list[game_round[Mapping.gameData.gameLeagueId]]["name"]

        for index in range(1, len(odds)):
            odd_item = odds[index]
            odds_key = None
            event = protobuf_spec.ApHdc()        
            event.source = "KU"
            event.game_type = ""
            event.game_class = utils.transform_game_type(game_type, game_display_name) 
            event.raw_event_id = game_round_id
            event.ip = "192.168.1.1"
            event.status = '0'

            event.event_time = game_round[Mapping.gameData.startTime].replace('/', '-') + ":00"

            datetime_dt = datetime.datetime.today()
            datetime_dt = datetime_dt + datetime.timedelta(hours=8)
            datetime_str = datetime_dt.strftime("%m_%d_%H_%M_%S") 
            event.source_updatetime = datetime_dt.strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]

            event.live = 'true' if json_data["mode"] == 2 else 'false'

            event.live_time = utils.transform_live_time(game_type, json_data["mode"], game_round[Mapping.gameData.runningType], game_round[Mapping.gameData.startTime], datetime_dt.strftime("%Y/%m/%d %H:%M:%S"), game_round[Mapping.gameData.runningTime], game_round[Mapping.gameData.ht])

            event.information.league = game_type_list[game_round[Mapping.gameData.gameLeagueId]]["name"] 

            event.information.home.team_name = game_round[Mapping.gameData.homeName][0]

            event.information.away.team_name = game_round[Mapping.gameData.awayName][0]
        
            score = game_score_list[game_round_id]

            event.score.home = score[Mapping.scoreData.homeScore] if len(score[Mapping.scoreData.homeScore]) > 0 else '0'
            event.score.away = score[Mapping.scoreData.awayScore] if len(score[Mapping.scoreData.awayScore]) > 0 else '0'

            #足球(11)
            if utils.is_SC(game_type) : 
                event.redcard.home = str(score[Mapping.scoreData.homeRedcard])
                event.redcard.away = str(score[Mapping.scoreData.awayRedcard])
                event.conner.home = '0'
                event.conner.away = '0'                
                event.yellowcard.home = '0'
                event.yellowcard.away = '0'
                event, odds_key = soccer_parser(event, odd_item)

            #籃球    
            elif game_type == "12":
                pass
                event, odds_key = basketball_parser(event, odd_item)

            #棒球
            elif game_type == "13":
                event, odds_key = baseball_parser(event, odd_item)

            #網球
            elif game_type == "14":
                event, odds_key = tennis_parser(event, odd_item)

            #冰球
            elif game_type == "15":
                event, odds_key = hockey_parser(event, odd_item)

            #排球
            elif game_type == "16":
                event, odds_key = volleyball_parser(event, odd_item)

            #羽毛球
            elif game_type == "17":
                event, odds_key = badminton_parser(event, odd_item)

            #電子競技
            elif game_type == "18":
                event, odds_key = eSport_parser(event, odd_item)

            #美足
            elif game_type == "19":
                event, odds_key = football_parser(event, odd_item) 

            #乒乓球
            elif game_type == "21":
                event, odds_key = pingpong_parser(event, odd_item)

            if odds_key == None :
                event.game_id = game_round_id
            else:
                event.game_id = odds_key.replace("_", "")

            # 06/25 - [要求]全場上半的後綴要移除，特殊玩法如果有自己的玩法分類也不用標。
            event.information.league = game_type_list[game_round[Mapping.gameData.gameLeagueId]]["name"]

            if odds_key in event_proto_list:
                event_proto_list[odds_key].MergeFrom(event)
            else :
                event_proto_list[odds_key] = event

    for event_item in event_proto_list:
        data_list.aphdc.append(event_proto_list[event_item])

    return data_list, json_data["sport"]

def get_now_data():
    global _game_list
    return _game_list.copy()

def onNext(message_unzip):
    global _game_list
    
    message_decode = message_unzip.decode("utf-8")
    message_json = json.loads(message_decode)

    logger.get_logger().debug(json.dumps(message_json))
    
    sport = str(message_json["sport"]) if "sport" in message_json else '-1'
    mode = str(message_json["mode"]) if "mode" in message_json else '-1'
    game_type = str(message_json["type"]) if "type" in message_json else '-1'
    search_key = sport + "_" + mode + "_" + game_type

    if message_json["action"] == "first" or message_json["action"] == "cm" or message_json["action"] == "cst" or message_json["action"] == "ckg": 
        if "ally" in message_json and "game" in message_json and "score" in message_json and "odds" in message_json:
            _game_list[search_key] = message_json

        if "menu" in message_json:
            if "list" in message_json["menu"]:
                _game_list["menu" + mode]= message_json["menu"]["list"]

    elif message_json["action"] == "add" : 
        if search_key in _game_list:
            game_all_list = _game_list[search_key]
            if "game" in message_json:
                for new_item in message_json["game"]:
                    game_all_list["game"].append(new_item)

            if "ally" in message_json:
                for new_item in message_json["ally"]:
                    game_all_list["ally"].append(new_item) 

            if "score" in message_json:
                for new_item in message_json["score"]:
                    game_all_list["score"][new_item] = message_json["score"][new_item]

            if "odds" in message_json:
                for new_item in message_json["odds"]:
                    game_all_list["odds"].append(new_item)                 

    elif message_json["action"] == "del" : 
        if "val" in message_json:
            delete_list = message_json["val"] 
            if search_key in _game_list:
                odds_all_list = _game_list[search_key]["odds"]
                for delete_item in delete_list:
                    for index, odds_list in enumerate(odds_all_list):
                        if delete_item[0] == odds_list[0]:
                            for odd_index in range(1, len(odds_list)):
                                odd_itme = odds_list[odd_index]
                                if delete_item[1] == odd_itme[3] and delete_item[2] == odd_itme[0]:
                                    logger.get_logger().debug(f'Find [{str(odd_itme)}] and deleted')
                                    del _game_list[search_key]["odds"][index][odd_index]
                                    break
                            break                               

    elif message_json["action"] == "update" : 
        if "odds" in message_json: #更新賠率
            update_list = message_json["odds"]
            if search_key in _game_list:
                odds_all_list = _game_list[search_key]["odds"]
                for update_item in update_list:
                    if "path" in update_item :
                        path_list = update_item["path"]
                        for odds_list in odds_all_list:
                            if path_list[0] == odds_list[0]:
                                for odd_index in range(1, len(odds_list)):
                                    odd_itme = odds_list[odd_index]
                                    if path_list[1] == odd_itme[3] and path_list[2] == odd_itme[0]:
                                        if "o" in update_item:
                                            odd_itemList = update_item["o"]
                                            for odd_index in range(0, len(odd_itemList), 2):
                                                odd_key = odd_itemList[odd_index]
                                                odd_value = odd_itemList[odd_index + 1]

                                                if odd_value == "":
                                                    continue

                                                for odd_itme_index in range(12, len(odd_itme), 2):
                                                    try:
                                                        if odd_itme[odd_itme_index] == odd_key:
                                                            odd_itme[odd_itme_index + 1] = odd_value
                                                    except ValueError:
                                                        continue

                                        if "l" in update_item:
                                            line = update_item["l"]
                                            odd_itme[8] = line
                                        logger.get_logger().debug(f'Find [{str(path_list)}] and Update it [{str(odd_itme)}]')
                                        break 
                                break                            
                    else :
                        logger.get_logger().debug(f'Can\'t find key[{path_list}] in [{update_item}]')
            else:
                logger.get_logger().debug(f'Can\'t find key [{search_key}]')

        if "menu" in message_json:
            if "list" in  message_json["menu"]:
                _game_list["menu" + mode] = message_json["menu"]["list"]

        if "score" in message_json and "score" in _game_list[search_key]: #更新比分
            score_key_list = { "ra" : 0, "rb" : 1, "rcna" : 2, "rcnb" : 3, "sa" : 4, "sb" : 5, "na" : 6, "nb" : 7, "runsA" : 8, "runsB" : 9, "pr" : 10, "tc" : 11, "fra" : 12, "frb" : 13}
            update_score_list = message_json["score"]
            if search_key in _game_list:
                cache_score_list = _game_list[search_key]["score"]
                for update_score in update_score_list:
                    score_key = update_score["gId"]
                    if score_key in cache_score_list :
                        for score_item in update_score :
                            if not score_item == "gId" and score_item in score_key_list:
                                index = score_key_list[score_item]
                                logger.get_logger().debug(f'Update Scrore {score_item}[{index}] from {_game_list[search_key]["score"][score_key]} to {update_score[score_item]}' )
                                _game_list[search_key]["score"][score_key][index] = update_score[score_item]

    elif message_json["action"] == "ban":
        logger.get_logger().error("The account is be ban.")

    elif message_json["action"] in ["checkTime", "sf_over", "note", "gift", "smmt_over"]: 
        pass
        
    else :
        logger.get_logger().debug(f'Unknown Action [{message_json["action"]}]\n {json.dumps(message_json)}')

