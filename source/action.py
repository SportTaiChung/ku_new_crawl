import time
import zlib
import json
import datetime
import APHDC_pb2 as protobuf_spec
import utils
from soccer import soccerParser
from basketball import basketballParser
from baseball import baseballParser
from tennis import tennisParser
from hockey import hockeyParser
from football import footballParser
from volleyball import volleyballParser
from badminton import badmintonParser
from eSport import eSportParser
from pingpong import pingpongParser
import logger

_gameList = {}

def pako_inflate(data):

    decompress = zlib.decompressobj(15)

    decompressed_data = decompress.decompress(data)

    decompressed_data += decompress.flush()

    return decompressed_data

def transformToProtobuf(jsonData):
    global datetime_str
    gameTypeList = {}
    logger.getLogger().debug(f'Transfer to protobuf [{json.dumps(jsonData)}]')
    for gameType in jsonData["ally"]:
        gameId = gameType[0]
        gameName = utils.AllyNameProcess(gameId, gameType[1])
        gameTypeList[gameId] = {
            "aId" : gameId,
            "name" : gameName,
            "ssid" : gameType[2],
            "type" : gameType[3],
            "sport" : gameType[4],
        }

    gameScoreList = jsonData["score"]

    gameOddsList = jsonData["odds"]

    gameRoundList = jsonData["game"]

    event_proto_list = {}

    dataList = protobuf_spec.ApHdcArr()

    for odds in gameOddsList : 

        gameRoundId = odds[0]
        
        gameRound = list(filter(lambda x: x[0] == gameRoundId, gameRoundList))[0]

        gameType = str(gameTypeList[gameRound[1]]["type"])
        gameDisplayName = gameTypeList[gameRound[1]]["name"]

        for index in range(1, len(odds)):
            oddItem = odds[index]
            oddsKey = None
            event = protobuf_spec.ApHdc()        
            event.source = "KU"
            event.game_type = ""
            event.game_class = utils.TransformGameType(gameType, gameDisplayName) 
            event.raw_event_id = gameRoundId
            event.ip = "192.168.1.1"
            event.status = '0'

            event.event_time = gameRound[9].replace('/', '-') + ":00"

            #For debug
            # datetime_dt = datetime.datetime.today()
            # datetime_dt = datetime_dt + datetime.timedelta(hours=14)
            # datetime_str = datetime_dt.strftime("%m_%d_%H_%M_%S") 
            # event.event_time = datetime_dt.strftime("%Y-%m-%d %H:%M:%S")

            event.source_updatetime = jsonData["date"].replace('/', '-') + ".000"
            
            event.live = 'true' if jsonData["mode"] == 2 else 'false'
            event.live_time = utils.TransformGdOrSt(gameType, jsonData["mode"], gameRound[11], gameRound[9], jsonData["date"], gameRound[10], gameRound[19])

            event.information.league = gameTypeList[gameRound[1]]["name"] 

            event.information.home.team_name = gameRound[2][0]

            event.information.away.team_name = gameRound[3][0]
        
            score = gameScoreList[gameRoundId]

            event.score.home = score[0] if len(score[0]) > 0 else '0'
            event.score.away = score[1] if len(score[1]) > 0 else '0'

            #足球(11)
            if utils.IsSC(gameType) : 
                event.redcard.home = score[2] if len(score[2]) > 0 else '0'
                event.redcard.away = score[3] if len(score[3]) > 0 else '0'
                event.yellowcard.home = '0'
                event.yellowcard.away = '0'
                event, oddsKey = soccerParser(event, oddItem)

            #籃球    
            elif gameType == "12":
                pass
                event, oddsKey = basketballParser(event, oddItem)

            #棒球
            elif gameType == "13":
                event, oddsKey = baseballParser(event, oddItem)

            #網球
            elif gameType == "14":
                event, oddsKey = tennisParser(event, oddItem)

            #冰球
            elif gameType == "15":
                event, oddsKey = hockeyParser(event, oddItem)

            #排球
            elif gameType == "16":
                event, oddsKey = volleyballParser(event, oddItem)

            #羽毛球
            elif gameType == "17":
                event, oddsKey = badmintonParser(event, oddItem)

            #電子競技
            elif gameType == "18":
                event, oddsKey = eSportParser(event, oddItem)

            #美足
            elif gameType == "19":
                event, oddsKey = footballParser(event, oddItem) 

            #乒乓球
            elif gameType == "21":
                event, oddsKey = pingpongParser(event, oddItem)

            if oddsKey == None :
                event.game_id = gameRoundId
            else:
                event.game_id = oddsKey

            if oddsKey in event_proto_list:
                event_proto_list[oddsKey].MergeFrom(event)
            else :
                event_proto_list[oddsKey] = event

    for eventItem in event_proto_list:
        dataList.aphdc.append(event_proto_list[eventItem])

    return dataList, jsonData["sport"]

def getNowData():
    global _gameList
    return _gameList.copy()

def getNextGameType(gameType, nowIndex, gameMode):
    allData = getNowData()
    menuKey = "menu" + str(gameMode)
    if not menuKey in allData:
        return 0

    menuList = allData[menuKey]
    for menu in menuList:
        if str(menu["type"]) == str(gameType):
            gameCount = len(menu["count"])
            if gameCount > (nowIndex + 1) and menu["count"][(nowIndex + 1)] > 0:
                return (nowIndex + 1)
            elif gameCount < (nowIndex + 1):
                return 0
            else :
                return getNextGameType(gameType, (nowIndex + 1), gameMode)

    return -1   

def onNext(messageUnzip):
    global _gameList
    
    messageDecode = messageUnzip.decode("utf-8")
    messageJson = json.loads(messageDecode)
    
    sport = str(messageJson["sport"]) if "sport" in messageJson else '-1'
    mode = str(messageJson["mode"]) if "mode" in messageJson else '-1'
    gameType = str(messageJson["type"]) if "type" in messageJson else '-1'
    searchKey = sport + "_" + mode + "_" + gameType

    if messageJson["action"] == "first" or messageJson["action"] == "cm" or messageJson["action"] == "cst" or messageJson["action"] == "ckg": 
        _gameList[searchKey] = messageJson
        _gameList["menu" + mode]= messageJson["menu"]["list"]

    elif messageJson["action"] == "add" : 
        if searchKey in _gameList:
            gameAllList = _gameList[searchKey]
            if "game" in messageJson:
                for newItem in messageJson["game"]:
                    gameAllList["game"].append(newItem)

            if "ally" in messageJson:
                for newItem in messageJson["ally"]:
                    gameAllList["ally"].append(newItem) 

            if "score" in messageJson:
                for newItem in messageJson["score"]:
                    gameAllList["score"][newItem] = messageJson["score"][newItem]

            if "odds" in messageJson:
                for newItem in messageJson["odds"]:
                    gameAllList["odds"].append(newItem)                 

    elif messageJson["action"] == "del" : 
        if "val" in messageJson:
            deleteList = messageJson["val"] 
            if searchKey in _gameList:
                oddsAllList = _gameList[searchKey]["odds"]
                for deleteItem in deleteList:
                    for index, oddsList in enumerate(oddsAllList):
                        if deleteItem[0] == oddsList[0]:
                            for oddIndex in range(1, len(oddsList)):
                                oddItme = oddsList[oddIndex]
                                if deleteItem[1] == oddItme[3] and deleteItem[2] == oddItme[0]:
                                    logger.getLogger().debug("Find " + str(oddItme) + " and deleted")
                                    del _gameList[searchKey]["odds"][index][oddIndex]
                                    break
                            break                               

    elif messageJson["action"] == "update" : 
        if "odds" in messageJson: #更新賠率
            updateList = messageJson["odds"]
            if searchKey in _gameList:
                oddsAllList = _gameList[searchKey]["odds"]
                for updateItem in updateList:
                    if "path" in updateItem :
                        pathList = updateItem["path"]
                        for oddsList in oddsAllList:
                            if pathList[0] == oddsList[0]:
                                for oddIndex in range(1, len(oddsList)):
                                    oddItme = oddsList[oddIndex]
                                    if pathList[1] == oddItme[3] and pathList[2] == oddItme[0]:
                                        if "o" in updateItem:
                                            oddItemList = updateItem["o"]
                                            for oddIndex in range(0, len(oddItemList), 2):
                                                oddValue = oddItemList[oddIndex + 1]
                                                try:
                                                    oddItemOffset = 13 + int(oddIndex)
                                                except ValueError:
                                                    continue

                                                oddItme[oddItemOffset] = oddValue

                                        if "l" in updateItem:
                                            line = updateItem["l"]
                                            oddItme[8] = line
                                        logger.getLogger().debug("Find " + str(pathList) + " and Update " + str(oddItme))
                                        break 
                                break                            
                    else :
                        logger.getLogger().debug("Can't find key[path] in " + updateItem)
            else:
                logger.getLogger().debug("Can't find key : " + searchKey)

        if "menu" in messageJson:
            _gameList["menu" + mode] = messageJson["menu"]["list"]

        if "score" in messageJson and "score" in _gameList[searchKey]: #更新比分
            scoreKeyList = { "ra" : 0, "rb" : 1, "rcna" : 2, "rcnb" : 3, "sa" : 4, "sb" : 5, "na" : 6, "nb" : 7, "runsA" : 8, "runsB" : 9, "pr" : 10, "tc" : 11, "fra" : 12, "frb" : 13}
            updateScoreList = messageJson["score"]
            if searchKey in _gameList:
                cacheScoreList = _gameList[searchKey]["score"]
                for updateScore in updateScoreList:
                    scoreKey = updateScore["gId"]
                    if scoreKey in cacheScoreList :
                        for scoreItem in updateScore :
                            if not scoreItem == "gId" and scoreItem in scoreKeyList:
                                index = scoreKeyList[scoreItem]
                                logger.getLogger().debug(f'Update Scrore {scoreItem}[{index}] from {_gameList[searchKey]["score"][scoreKey]} to {updateScore[scoreItem]}' )
                                _gameList[searchKey]["score"][scoreKey][index] = updateScore[scoreItem]

    elif messageJson["action"] in ["checkTime", "sf_over", "note", "gift", "smmt_over", "ban"]: 
        pass
        
    else :
        logger.getLogger().error("Unknown Action : " + messageJson["action"] + "\n" + json.dumps(messageJson))

