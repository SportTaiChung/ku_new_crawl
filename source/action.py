import time
import zlib
import json
import datetime
import APHDC_pb2 as protobuf_spec
from constants import GameType, langFont
from soccer import soccerParser
from baseball import baseballParser

GAME_LIST = {}
GAME_TYPE = {}

def pako_inflate(data):

    decompress = zlib.decompressobj(15)

    decompressed_data = decompress.decompress(data)

    decompressed_data += decompress.flush()

    return decompressed_data

#Test
def IsSC(type):
    try:
        return True if 0 <= ["sc", "eu", "wd", "ch", "fi", "11", "26", "27", "51", "52"].index(type) else False
    except ValueError:
        return False

def TransformStatus(gameType, timeOption):
    global langFont
    o = {
        "sc" : {
            0: langFont.Font_SCStatus[0],
            1: langFont.Font_SCStatus[1],
            2: langFont.Font_SCStatus[2],
            3: langFont.Font_SCStatus[3],
            4: langFont.Font_SCStatus[4],
            60: langFont.Font_SCStatus[5]
        },
        "bk" : {
            0: langFont.Font_BKStatus[0],
            1: langFont.Font_BKStatus[1],
            2: langFont.Font_BKStatus[2],
            3: langFont.Font_BKStatus[3],
            4: langFont.Font_BKStatus[4],
            5: langFont.Font_BKStatus[5],
            6: langFont.Font_BKStatus[6],
            7: langFont.Font_BKStatus[7],
            11: langFont.Font_BKStatus[8],
            12: langFont.Font_BKStatus[9],
            13: langFont.Font_BKStatus[10],
            60: langFont.Font_BKStatus[11],
            61: langFont.Font_BKStatus[12]
        },
        "bb" : {
            0: langFont.Font_BBStatus[0],
            1: langFont.Font_BBStatus[1],
            2: langFont.Font_BBStatus[2],
            3: langFont.Font_BBStatus[3],
            4: langFont.Font_BBStatus[4],
            5: langFont.Font_BBStatus[5],
            6: langFont.Font_BBStatus[6],
            7: langFont.Font_BBStatus[7],
            8: langFont.Font_BBStatus[8],
            9: langFont.Font_BBStatus[9],
            10: langFont.Font_BBStatus[10],
            11: langFont.Font_BBStatus[11],
            12: langFont.Font_BBStatus[12],
            13: langFont.Font_BBStatus[13],
            14: langFont.Font_BBStatus[14],
            15: langFont.Font_BBStatus[15],
            16: langFont.Font_BBStatus[16],
            17: langFont.Font_BBStatus[17],
            18: langFont.Font_BBStatus[18],
            20: langFont.Font_BBStatus[19],
            31: langFont.Font_BBStatus[20],
            32: langFont.Font_BBStatus[21],
            60: langFont.Font_BBStatus[22],
            70: langFont.Font_BBStatus[23],
            71: langFont.Font_BBStatus[24],
            72: langFont.Font_BBStatus[25],
            73: langFont.Font_BBStatus[26],
            74: langFont.Font_BBStatus[27],
            75: langFont.Font_BBStatus[28],
            76: langFont.Font_BBStatus[29],
            77: langFont.Font_BBStatus[30],
            78: langFont.Font_BBStatus[31],
            79: langFont.Font_BBStatus[32],
            80: langFont.Font_BBStatus[33],
            81: langFont.Font_BBStatus[34],
            82: langFont.Font_BBStatus[35],
            83: langFont.Font_BBStatus[36],
            84: langFont.Font_BBStatus[37],
            85: langFont.Font_BBStatus[38],
            86: langFont.Font_BBStatus[39],
            87: langFont.Font_BBStatus[40],
            88: langFont.Font_BBStatus[41],
            89: langFont.Font_BBStatus[42],
            90: langFont.Font_BBStatus[43],
            91: langFont.Font_BBStatus[44],
            92: langFont.Font_BBStatus[45],
            93: langFont.Font_BBStatus[46],
            94: langFont.Font_BBStatus[47],
            95: langFont.Font_BBStatus[48],
            96: langFont.Font_BBStatus[49],
            97: langFont.Font_BBStatus[50],
            98: langFont.Font_BBStatus[51],
            99: langFont.Font_BBStatus[52],
            100: langFont.Font_BBStatus[53],
            101: langFont.Font_BBStatus[54],
            102: langFont.Font_BBStatus[55],
            103: langFont.Font_BBStatus[56],
            104: langFont.Font_BBStatus[57],
            105: langFont.Font_BBStatus[58],
            106: langFont.Font_BBStatus[59],
            107: langFont.Font_BBStatus[60],
            108: langFont.Font_BBStatus[61],
            109: langFont.Font_BBStatus[62],
            110: langFont.Font_BBStatus[63],
            111: langFont.Font_BBStatus[64],
            112: langFont.Font_BBStatus[65],
            113: langFont.Font_BBStatus[66],
            114: langFont.Font_BBStatus[67],
            115: langFont.Font_BBStatus[68],
            116: langFont.Font_BBStatus[69],
            117: langFont.Font_BBStatus[70],
            118: langFont.Font_BBStatus[71],
            119: langFont.Font_BBStatus[72],
            120: langFont.Font_BBStatus[73],
            121: langFont.Font_BBStatus[74],
            122: langFont.Font_BBStatus[75],
            123: langFont.Font_BBStatus[76],
            124: langFont.Font_BBStatus[77],
            125: langFont.Font_BBStatus[78],
            126: langFont.Font_BBStatus[79],
            127: langFont.Font_BBStatus[80],
            128: langFont.Font_BBStatus[81],
            129: langFont.Font_BBStatus[82],
            130: langFont.Font_BBStatus[83],
            131: langFont.Font_BBStatus[84],
            132: langFont.Font_BBStatus[85],
            133: langFont.Font_BBStatus[86],
            134: langFont.Font_BBStatus[87],
            135: langFont.Font_BBStatus[88],
            136: langFont.Font_BBStatus[89],
            137: langFont.Font_BBStatus[90],
            138: langFont.Font_BBStatus[91],
            139: langFont.Font_BBStatus[92],
            140: langFont.Font_BBStatus[93],
            141: langFont.Font_BBStatus[94],
            142: langFont.Font_BBStatus[95],
            143: langFont.Font_BBStatus[96],
            144: langFont.Font_BBStatus[97],
            145: langFont.Font_BBStatus[98],
            146: langFont.Font_BBStatus[99],
            147: langFont.Font_BBStatus[100],
            148: langFont.Font_BBStatus[101],
            149: langFont.Font_BBStatus[102],
            150: langFont.Font_BBStatus[103],
            151: langFont.Font_BBStatus[104]
        },
        "tn" : {
            0: langFont.Font_TNStatus[0],
            1: langFont.Font_TNStatus[1],
            2: langFont.Font_TNStatus[2],
            3: langFont.Font_TNStatus[3],
            4: langFont.Font_TNStatus[4],
            5: langFont.Font_TNStatus[5],
            20: langFont.Font_TNStatus[6],
            60: langFont.Font_TNStatus[7],
            61: langFont.Font_TNStatus[8]
        },
        "ih" : {
            0: langFont.Font_IHStatus[0],
            1: langFont.Font_IHStatus[1],
            2: langFont.Font_IHStatus[2],
            3: langFont.Font_IHStatus[3],
            4: langFont.Font_IHStatus[4],
            5: langFont.Font_IHStatus[5],
            6: langFont.Font_IHStatus[6],
            60: langFont.Font_IHStatus[7],
            61: langFont.Font_IHStatus[8]
        },
        "vl" : {
            0: langFont.Font_VLStatus[0],
            1: langFont.Font_VLStatus[1],
            2: langFont.Font_VLStatus[2],
            3: langFont.Font_VLStatus[3],
            4: langFont.Font_VLStatus[4],
            5: langFont.Font_VLStatus[5],
            6: langFont.Font_VLStatus[6],
            7: langFont.Font_VLStatus[7],
            20: langFont.Font_VLStatus[8],
            60: langFont.Font_VLStatus[9],
            61: langFont.Font_VLStatus[10]
        },
        "bm" : {
            0: langFont.Font_BMStatus[0],
            1: langFont.Font_BMStatus[1],
            2: langFont.Font_BMStatus[2],
            3: langFont.Font_BMStatus[3],
            4: langFont.Font_BMStatus[4],
            5: langFont.Font_BMStatus[5],
            20: langFont.Font_BMStatus[6],
            60: langFont.Font_BMStatus[7],
            61: langFont.Font_BMStatus[8]
        },
        "es" : {
            0: langFont.Font_ESStatus[0],
            1: langFont.Font_ESStatus[1],
            2: langFont.Font_ESStatus[2],
            3: langFont.Font_ESStatus[3],
            4: langFont.Font_ESStatus[4],
            5: langFont.Font_ESStatus[5],
            6: langFont.Font_ESStatus[6],
            7: langFont.Font_ESStatus[7],
            20: langFont.Font_ESStatus[8],
            60: langFont.Font_ESStatus[9],
            61: langFont.Font_ESStatus[10]
        },
        "af" : {
            0: langFont.Font_AFStatus[0],
            1: langFont.Font_AFStatus[1],
            2: langFont.Font_AFStatus[2],
            3: langFont.Font_AFStatus[3],
            4: langFont.Font_AFStatus[4],
            6: langFont.Font_AFStatus[5],
            7: langFont.Font_AFStatus[6],
            11: langFont.Font_AFStatus[7],
            12: langFont.Font_AFStatus[8],
            13: langFont.Font_AFStatus[9],
            20: langFont.Font_AFStatus[10],
            60: langFont.Font_AFStatus[11],
            61: langFont.Font_AFStatus[12]
        },
        "pb" : {
            0: langFont.Font_PBStatus[0],
            20: langFont.Font_PBStatus[1]
        },
        "tt" : {
            0: langFont.Font_TTStatus[0],
            1: langFont.Font_TTStatus[1],
            2: langFont.Font_TTStatus[2],
            3: langFont.Font_TTStatus[3],
            4: langFont.Font_TTStatus[4],
            5: langFont.Font_TTStatus[5],
            6: langFont.Font_TTStatus[6],
            7: langFont.Font_TTStatus[7],
            20: langFont.Font_TTStatus[8],
            60: langFont.Font_TTStatus[9],
            61: langFont.Font_TTStatus[10]
        },
        "hb" : {
            0: langFont.Font_HBStatus[0],
            11: langFont.Font_HBStatus[1],
            12: langFont.Font_HBStatus[2],
            13: langFont.Font_HBStatus[3],
            14: langFont.Font_HBStatus[4],
            20: langFont.Font_HBStatus[5],
            60: langFont.Font_HBStatus[6],
            61: langFont.Font_HBStatus[7]
        },
        "wp" : {
            0: langFont.Font_WPStatus[0],
            1: langFont.Font_WPStatus[1],
            2: langFont.Font_WPStatus[2],
            3: langFont.Font_WPStatus[3],
            4: langFont.Font_WPStatus[4],
            10: langFont.Font_WPStatus[5],
            11: langFont.Font_WPStatus[6],
            12: langFont.Font_WPStatus[7],
            13: langFont.Font_WPStatus[8],
            14: langFont.Font_WPStatus[9],
            20: langFont.Font_WPStatus[10],
            60: langFont.Font_WPStatus[11],
            61: langFont.Font_WPStatus[12]
        },
        "op" : {
            0: langFont.Font_OPStatus[0],
            20: langFont.Font_OPStatus[1]
        },
        "ot ": {
            0: langFont.Font_OPStatus[0],
            20: langFont.Font_OPStatus[1]
        },
        "bx" : {
            0: langFont.Font_BXStatus[0]
        }
    };
    gameType = "sc" if IsSC(gameType) else gameType 
    return o[gameType][timeOption] if o[gameType] and o[gameType][timeOption] else ""

#Test
def AllyNameProcess(id, name):
    return name + " - 加時賽" if id.endswith("3") else name

def TransformGameType(typeId, gameDisplayName):
    gameName = None
    if typeId.isdigit():
        gameType = int(typeId)
    else :
        gameType = typeId

    if gameType == 100 or gameType == "cs" :  #"即將開賽"
        gameName = GameType.other
    elif gameType == 11 or gameType == "sc" : #足球
        gameName = GameType.soccer
    elif gameType == 26 or gameType == "eu" : #歐洲冠軍聯賽
        gameName = GameType.UCL
    elif gameType == 27 or gameType == "wd" : #世界杯
        gameName = GameType.wsc
    elif gameType == 51 or gameType == "ch" : #"冠軍聯賽"
        gameName = GameType.UCL
    elif gameType == 52 or gameType == "fi" : #"五大聯賽"
        gameName = GameType.UCL
    elif gameType == 12 or gameType == "bk" : #"籃球"
        if "NBA" in gameDisplayName:
            gameName = GameType.basketball
        else :    
            gameName = GameType.otherbasketball
    elif gameType == 13 or gameType == "bb" :  #"棒球"
        if '美國職棒' in gameDisplayName or 'MLB' in gameDisplayName:
            gameName = GameType.mlb
        elif '日本職業棒球' in gameDisplayName or 'NPB' in gameDisplayName:
            gameName = GameType.npb
        elif 'CPBL' in gameDisplayName:
            gameName = GameType.cpbl
        else:    
            gameName = GameType.kbo
    elif gameType == 14 or gameType == "tn" :  #"網球"
        gameName = GameType.tennis
    elif gameType == 15 or gameType == "ih" :  #"冰球"
        gameName = GameType.hockey
    elif gameType == 16 or gameType == "vl" :  #"排球"
        gameName = GameType.volleyball
    elif gameType == 17 or gameType == "bm" :  #"羽毛球"
        gameName = GameType.other
    elif gameType == 18 or gameType == "es" :  #"電子競技"
        gameName = GameType.eSport
    elif gameType == 19 or gameType == "as" :  #"美足"
        gameName = GameType.football
    elif gameType == 20 or gameType == "pb" :  #"撞球"
        gameName = GameType.other
    elif gameType == 21 or gameType == "tt" :  #"乒乓球"
        gameName = GameType.pingpong
    elif gameType == 22 or gameType == "hb" :  #"手球"
        gameName = GameType.other
    elif gameType == 23 or gameType == "wp" :  #"水球"
        gameName = GameType.other
    elif gameType == 99 or gameType == "fv" :  #"收藏夾"
        gameName = GameType.other
    elif gameType == 53 or gameType == "op" :  #"冬季奧運會"
        gameName = GameType.other
    elif gameType == 24 or gameType == "ot" :  #"其它"
        gameName = GameType.other
    elif gameType == 28 or gameType == "bx" :  #"拳擊""
        gameName = GameType.other
    elif gameType == 54 or gameType == "tv" :  #"轉播賽事"
        gameName = GameType.other
    elif gameType == 10 or gameType == "pass" :  #"過關"
        gameName = GameType.other
    else :
        gameName = GameType.other

    return gameName.value

def TransformRunTime(gameType, timeStr, crawlTime):
    if "-60" == timeStr :
        return TransformStatus(gameType, 60) 
    else :
        try:
            runTime = time.strptime(timeStr, "%Y/%m/%d %H:%M:%S")
            nowTime = time.strptime(crawlTime, "%Y/%m/%d %H:%M:%S")
            diffTime = int(time.mktime(nowTime)) - int(time.mktime(runTime))
            return str(int(diffTime / 60))
        except ValueError:
            return timeStr if len(timeStr) > 0 else '0'

def transformToProtobuf(jsonData):
    global datetime_str, GAME_TYPE

    for gameType in jsonData["ally"]:
        gameId = gameType[0]
        gameName = AllyNameProcess(gameId, gameType[1])
        GAME_TYPE[gameId] = {
            "aId" : gameId,
            "name" : gameName,
            "ssid" : gameType[2],
            "type" : gameType[3],
            "sport" : gameType[4],
        }

    gameScoreList = jsonData["score"]

    gameOddsList = jsonData["odds"]

    gameRoundList = jsonData["game"]

    event_proto_list = []

    dataList = protobuf_spec.ApHdcArr()

    for odds in gameOddsList : 

        gameRoundId = odds[0]
        
        gameRound = list(filter(lambda x: x[0] == gameRoundId, gameRoundList))[0]

        gameType = str(GAME_TYPE[gameRound[1]]["type"])
        gameDisplayName = GAME_TYPE[gameRound[1]]["name"]

        for index in range(1, len(odds)):
            oddItem = odds[index]
            event = protobuf_spec.ApHdc()        
            event.source = "KU"
            event.game_type = ""
            event.game_class = TransformGameType(gameType, gameDisplayName) 
            event.raw_event_id = gameRoundId
            event.game_id = gameRoundId + oddItem[0]
            event.ip = "192.168.1.1"
            event.status = '0'

            #event.event_time = gameRound[9].replace('/', '-') + ":00"

            #For debug
            datetime_dt = datetime.datetime.today()
            datetime_dt = datetime_dt + datetime.timedelta(hours=14)
            datetime_str = datetime_dt.strftime("%m_%d_%H_%M_%S") 
            event.event_time = datetime_dt.strftime("%Y-%m-%d %H:%M:%S")

            event.source_updatetime = jsonData["date"].replace('/', '-') + ".000"
            
            event.live = 'true' if jsonData["mode"] == 2 else 'false'
            event.live_time = TransformRunTime(gameType, gameRound[10], jsonData["date"])

            event.information.league = GAME_TYPE[gameRound[1]]["name"] 

            event.information.home.team_name = gameRound[2][0]

            event.information.away.team_name = gameRound[3][0]
        
            score = gameScoreList[gameRoundId]

            event.score.home = score[0] if len(score[0]) > 0 else '0'
            event.score.away = score[1] if len(score[1]) > 0 else '0'

            #足球
            if IsSC(gameType) :
                event.redcard.home = score[2] if len(score[2]) > 0 else '0'
                event.redcard.away = score[3] if len(score[3]) > 0 else '0'
                event.yellowcard.home = '0'
                event.yellowcard.away = '0'
                event = soccerParser(event, oddItem)

            #籃球    
            elif gameType == 12:
                pass
                #event = basketballParser(event, oddItem)

            #棒球
            elif gameType == "13":
                event = baseballParser(event, oddItem)

            #網球
            elif gameType == 14:
                pass    

            if event.live == "true":
                event.game_type += "live "

            #棒球以外
            # if not gameType == "13":
            
            
            # #讓分
            # if oddType == 1 or oddType == 11 :
            #     #棒球
            #     if gameType == 13:
            #         event.game_type += "full"
            #         if oddClass == 3:
            #             event.information.league += " - 全場 - 首分"
            #             event.de.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #             event.de.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
            #         else:    
            #             if oddClass == 0:  
            #                 event.information.league += " - 全場"
            #             elif oddClass == 1:
            #                 event.information.league += " - 第一局"

            #             event.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
            #             event.twZF.homeZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #             event.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
            #             event.twZF.awayZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'                            

            #     else:
            #         event.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
            #         event.twZF.homeZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #         event.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
            #         event.twZF.awayZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'        
                        

            # #大小
            # elif oddType == 2 or oddType == 12 or oddType == 5 or oddType == 7:
            #     #棒球
            #     if gameType == 13:
            #         event.game_type += "full"
            #         if oddClass == 3:
            #             event.information.league += " - 全場 - 尾分"
            #             event.de.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #             event.de.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
            #         else :    
            #             if oddClass == 0:  
            #                 event.information.league += " - 全場"
            #             elif oddClass == 1:
            #                 event.information.league += " - 第一局"   
                        
            #             #一輸二贏
            #             if oddType == 5 :
            #                 event.information.league += " - " + lineStr
            #                 event.esre.let = (1 if lineAt == 1 else 2)
            #                 event.esre.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #                 event.esre.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'   
            #             else :
            #                 if oddType == 7 :
            #                     event.information.league += " - 主隊大小"
            #                 event.twDS.line = lineStr    
            #                 event.twDS.over = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #                 event.twDS.under = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
            #     else :
            #         event.twDS.line = lineStr
            #         event.twDS.over = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #         event.twDS.under = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
            #         #客隊大小
            #         if oddType == 5 :
            #             event.information.league += " - 客隊大小"
            #         #主隊大小    
            #         if oddType == 7 :
            #             event.information.league += " - 主隊大小"

            # #獨贏
            # elif oddType == 3 or oddType == 13:
            #     event.de.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #     event.de.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
            #     #棒球
            #     if gameType == 13:
            #         event.game_type += "full"
            #         event.information.league += " - 全場"

            # #單雙
            # elif oddType == 4 or oddType == 14 or oddType == 6 or oddType == 8:
            #     event.sd.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #     event.sd.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'
            #     #棒球
            #     if gameType == 13:
            #         event.game_type += "full"
            #         event.information.league += " - 全場"
            #         if oddType == 6 :
            #             event.information.league += " - 單隊總得分 - 客隊大小"
            #             event.twDS.line = lineStr
            #             event.twDS.over = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #             event.twDS.under = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

            #     else:    
            #         #客隊單雙    
            #         if oddType == 6 :
            #             event.information.league += " - 客隊單雙"

            #         #主隊單雙    
            #         if oddType == 8 :
            #             event.information.league += " - 主隊單雙"  

            # #棒球上半場-讓球
            # elif oddType == 51 :
            #     event.game_type += "1st half"
            #     event.information.league += " - 上半場"
            #     event.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
            #     event.twZF.homeZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #     event.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
            #     event.twZF.awayZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

            # #棒球上半場-大小
            # elif oddType == 52 :
            #     event.game_type += "1st half"
            #     event.information.league += " - 上半場"
            #     event.twDS.line = lineStr
            #     event.twDS.over = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #     event.twDS.under = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

            # #棒球上半場-獨贏
            # elif oddType == 53 :
            #     event.game_type += "1st half"
            #     event.information.league += " - 上半場"
            #     event.de.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #     event.de.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

            # #棒球上半場-單雙
            # elif oddType == 54 :
            #     event.game_type += "1st half"
            #     event.information.league += " - 上半場"
            #     event.sd.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
            #     event.sd.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

            # #第一個三分球
            # elif oddType == 10 :
            #     pass
            # #首分
            # elif oddType == 21 :
            #     pass
            # #尾分
            # elif oddType == 22 :   
            #     pass 
            # #單節最高分
            # elif oddType == 23 :
            #     pass
            event_proto_list.append(event)

    dataList.aphdc.extend(event_proto_list)
    return dataList, jsonData["sport"]

def getNowData():
    global GAME_LIST
    return GAME_LIST

def getNextGameType(gameType, gameMode, nowIndex):
    global GAME_LIST
    if not "menu" in GAME_LIST:
        return 1
    menuList = GAME_LIST["menu"]
    for menu in menuList:
        if menu["type"] == gameType:
            gameCount = len(menu["count"])
            if gameCount > (nowIndex + 1) and menu["count"][(nowIndex + 1)] > 0:
                return (nowIndex + 1)
            elif gameCount < (nowIndex + 1):
                return 1
            else :
                return getNextGameType(gameType, gameMode, (nowIndex + 1))

def onNext(messageUnzip):
    global GAME_LIST
    
    messageDecode = messageUnzip.decode("utf-8")
    messageJson = json.loads(messageDecode)
    
    sport = str(messageJson["sport"]) if "sport" in messageJson else '-1'
    mode = str(messageJson["mode"]) if "mode" in messageJson else '-1'
    gameType = str(messageJson["type"]) if "type" in messageJson else '-1'
    searchKey = sport + "_" + mode + "_" + gameType

    if messageJson["action"] == "first" or messageJson["action"] == "cm" or messageJson["action"] == "cst" or messageJson["action"] == "ckg": 
        GAME_LIST[searchKey] = messageJson
        GAME_LIST["menu"] = messageJson["menu"]["list"]
    elif messageJson["action"] == "add" : 
        if searchKey in GAME_LIST:
            gameAllList = GAME_LIST[searchKey]
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
            if searchKey in GAME_LIST:
                oddsAllList = GAME_LIST[searchKey]["odds"]
                deleteList = messageJson["val"]  
                for deleteItem in deleteList:
                    for index, oddsList in enumerate(oddsAllList):
                        if deleteItem[0] == oddsList[0]:
                            for oddIndex in range(1, len(oddsList)):
                                oddItme = oddsList[oddIndex]
                                if deleteItem[1] == oddItme[3] and deleteItem[2] == oddItme[0]:
                                    print("Find " + str(oddItme) + " and deleted")
                                    del GAME_LIST[searchKey]["odds"][index][oddIndex]
                                    break
                            break                               

    elif messageJson["action"] == "update" : 
        if "odds" in messageJson: #更新賠率
            if searchKey in GAME_LIST:
                oddsAllList = GAME_LIST[searchKey]["odds"]
                updateList = messageJson["odds"]
                for updateItem in updateList:
                    if "path" in updateItem :
                        pathList = updateItem["path"]
                        for oddsList in oddsAllList:
                            if pathList[0] == oddsList[0]:
                                for oddIndex in range(1, len(oddsList)):
                                    oddItme = oddsList[oddIndex]
                                    if pathList[1] == oddItme[3] and pathList[2] == oddItme[0]:
                                        if "o" in updateItem:
                                            odd = updateItem["o"]
                                            if odd[0] == "1" :
                                                oddItme[13] = odd[1]
                                            elif odd[0] == "2" :
                                                oddItme[15] = odd[1]
                                            elif odd[0] == "3" :
                                                oddItme[17] = odd[1]

                                        if "l" in updateItem:
                                            line = updateItem["l"]
                                            oddItme[8] = line
                                        print("Find " + str(pathList) + " and Update " + str(oddItme))
                                        break 
                                break                            
                    else :
                        print("Can't find key[path] in " + updateItem)                    
            else:
                print("Can't find key : " + searchKey)     
        elif "menu" in messageJson:
            GAME_LIST["menu"] = messageJson["menu"]["list"]
        elif "score" in messageJson:
            pass
    elif messageJson["action"] in ["checkTime", "sf_over", "note", "gift", "smmt_over"]: 
        pass
    else :
        print("Unknown Action : " + messageJson["action"] + "\n" + json.dumps(messageJson))

