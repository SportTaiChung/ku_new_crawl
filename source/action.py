import time
import zlib
import json
import datetime
import APHDC_pb2 as protobuf_spec

GAME_TYPE = {}
GAME_LIST = {}

datetime_dt = datetime.datetime.today()
datetime_dt = datetime_dt + datetime.timedelta(hours=14)
datetime_str = datetime_dt.strftime("%m_%d_%H_%M_%S") 
fileName = "debug_" + datetime_str
FP = open(fileName + ".log", "a")

def pako_inflate(data):

    decompress = zlib.decompressobj(15)

    decompressed_data = decompress.decompress(data)

    decompressed_data += decompress.flush()

    return decompressed_data

class langFont:
    Font_SCStatus = ["未開賽", "上半場", "中場", "下半場", "LIVE", "結束"]
    Font_BKStatus = ["未開賽", "第1節", "第2節", "第3節", "第4節", "LIVE", "中場", "暫停", "上半場", "下半場", "加時", "結束", "中斷"]
    Font_BBStatus = ["未開賽", "1上", "1下", "2上", "2下", "3上", "3下", "4上", "4下", "5上", "5下", "6上", "6下", "7上", "7下", "8上", "8下", "9上", "9下", "LIVE", "OT上", "OT下", "結束", "10上", "10下", "11上", "11下", "12上", "12下", "13>上", "13下", "14上", "14下", "15上", "15下", "16上", "16下", "17上", "17下", "18上", "18下", "19上", "19下", "20上", "20下", "21上", "21下", "22上", "22下", "23上", "23下", "24上", "24下", "25上", "25下", "26上", "26下", "27上", "27下", "28上", "28下", "29上", "29下", "30上", "30下", "31上", "31下", "32上", "32下", "33上", "33下", "34上", "34下", "35上", "35下", "36上", "36下", "37上", "37下", "38上", "38下", "39上", "39下", "40上", "40下", "41上", "41下", "42上", "42下", "43上", "43下", "44上", "44下", "45上", "45下", "46上", "46下", "47上", "47下", "48上", "48下", "49上", "49下", "50上", "50下"]
    Font_TNStatus = ["未開賽", "第1盤", "第2盤", "第3盤", "第4盤", "第5盤", "LIVE", "結束", "中斷"]
    Font_IHStatus = ["未開賽", "第1節", "第2節", "第3節", "加時", "LIVE", "中場", "結束", "中斷"]
    Font_VLStatus = ["未開賽", "第1局", "第2局", "第3局", "第4局", "第5局", "第6>局", "第7局", "LIVE", "結束", "中斷"]
    Font_BMStatus = ["未開賽", "第1局", "第2局", "第3局", "第4局", "第5局", "LIVE", "結束", "中斷"]
    Font_ESStatus = ["未開賽", "第1局", "第2局", "第3局", "第4局", "第5局", "第6>局", "第7局", "LIVE", "結束", "中斷"]
    Font_AFStatus = ["未開賽", "第1節", "第2節", "第3節", "第4節", "中場", "暫停", "上半", "下半", "加時", "LIVE", "結束", "中斷"]
    Font_PBStatus = ["未開賽", "LIVE"]
    Font_TTStatus = ["未開賽", "第1局", "第2局", "第3局", "第4局", "第5局", "第6>局", "第7局", "LIVE", "結束", "中斷"]
    Font_HBStatus = ["未開賽", "上半場", "中場", "下半場", "加時", "LIVE", "結束", "中斷"]
    Font_WPStatus = ["未開賽", "第1節", "第2節", "第3節", "第4節", "暫停", "上半", "中場", "下半", "加時", "LIVE", "結束", "中斷"]
    Font_OPStatus = ["未開賽", "LIVE"]
    Font_BXStatus = ["未開賽"]


#Test
def IsSC(type):
    try:
        return True if 0 <= ["sc", "eu", "wd", "ch", "fi", "11", "26", "27", "51", "52"].index(type) else False
    except ValueError:
        return False

#Test
def AllyNameProcess(id, name):
    return name + " - 加時賽" if id.endswith("3") else name

def TransformGameType(typeId):
    gameName = ""
    if typeId.isdigit():
        gameType = int(typeId)
    else :
        gameType = typeId

    if gameType == 100 or gameType == "cs" :
        gameName = "即將開賽"
    elif gameType == 11 or gameType == "sc" : #足球
        gameName = "soccer"
    elif gameType == 26 or gameType == "eu" : #歐洲冠軍聯賽
        gameName = "UCL"
    elif gameType == 27 or gameType == "wd" : #世界杯
        gameName = "wsc"
    elif gameType == 51 or gameType == "ch" :
        gameName = "冠軍聯賽"
    elif gameType == 52 or gameType == "fi" :
        gameName = "五大聯賽"
    elif gameType == 12 or gameType == "bk" :
        gameName = "籃球"
    elif gameType == 13 or gameType == "bb" :
        gameName = "棒球"
    elif gameType == 14 or gameType == "tn" :
        gameName = "網球"
    elif gameType == 15 or gameType == "ih" :
        gameName = "冰球"
    elif gameType == 16 or gameType == "vl" :
        gameName = "排球"
    elif gameType == 17 or gameType == "bm" :
        gameName = "羽毛球"
    elif gameType == 18 or gameType == "es" :
        gameName = "電子競技"
    elif gameType == 19 or gameType == "as" :
        gameName = "美足"
    elif gameType == 20 or gameType == "pb" :
        gameName = "撞球"
    elif gameType == 21 or gameType == "tt" :
        gameName = "乒乓球"
    elif gameType == 22 or gameType == "hb" :
        gameName = "手球"
    elif gameType == 23 or gameType == "wp" :
        gameName = "水球"
    elif gameType == 99 or gameType == "fv" :
        gameName = "收藏夾"
    elif gameType == 53 or gameType == "op" :
        gameName = "冬季奧運會"
    elif gameType == 24 or gameType == "ot" :
        gameName = "其它"
    elif gameType == 28 or gameType == "bx" :
        gameName = "拳擊"
    elif gameType == 54 or gameType == "tv" :
        gameName = "轉播賽事"
    elif gameType == 10 or gameType == "pass" :
        gameName = "過關"
    else :
        gameName = ""

    return gameName

#Test
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
            return timeStr

def addZero(n, t):
    return "0" + str(n) if len(str(n)) < t else str(n)

def TransformNumToPk(gameType, lineStr):
    if lineStr == "":
        return "0" 

    if -1 == lineStr:
        return "0"

    checkArray = ["11001", "11002", "11011", "11012", "11021", "11022", "11064", "11065", "11101", "11102", "11111", "11112", "11121", "11122", "11164", "11165", "11201", "11202", "11211", "11212", "11221", "11222", "11231", "11232", "11241", "11242", "11251", "11252", "11301", "11302", "11311", "11312", "11321", "11322", "11331", "11332", "11341", "11342", "11351", "11352", "11401", "11402", "11411", "11412", "11421", "11422", "11431", "11432", "11441", "11442", "11451", "11452", "11701", "11702", "11015", "11016", "11115", "11116", "26001", "26002", "26011", "26012", "26021", "26022", "26064", "26065", "26101", "26102", "26111", "26112", "26121", "26122", "26164", "26165", "26201", "26202", "26211", "26212", "26221", "26222", "26231", "26232", "26241", "26242", "26251", "26252", "26301", "26302", "26311", "26312", "26321", "26322", "26331", "26332", "26341", "26342", "26351", "26352", "26401", "26402", "26411", "26412", "26421", "26422", "26431", "26432", "26441", "26442", "26451", "26452", "26701", "26702", "26015", "26016", "26115", "26116", "27001", "27002", "27011", "27012", "27021", "27022", "27064", "27065", "27101", "27102", "27111", "27112", "27121", "27122", "27164", "27165", "27201", "27202", "27211", "27212", "27221", "27222", "27231", "27232", "27241", "27242", "27251", "27252", "27301", "27302", "27311", "27312", "27321", "27322", "27331", "27332", "27341", "27342", "27351", "27352", "27401", "27402", "27411", "27412", "27421", "27422", "27431", "27432", "27441", "27442", "27451", "27452", "27701", "27702", "27015", "27016", "27115", "27116"]

    try:
        checkArray.index(gameType)
        r = int(int(lineStr) / 1e3)
        a = int(lineStr) % 1e3
        if 0 == a or 500 == a : 
            return str(int(lineStr) / 1e3) + "" 
        elif 250 == a : 
            return str(r) + "/" + str(r + .5) 
        elif 750 == a : 
            return str(r + .5) + "/" + str(r + 1) 
        else:
            return "0"

    except ValueError:
        t = round(abs(int(lineStr)) / 1e3 * 200);
        r = int(lineStr) / 200;
        a = int(lineStr) % 200
        if 100 < a : 
            a = 200 - a
            r += 1
            return str(r) + "+" + addZero(a, 2) 
        elif 0 == a : 
            return str(r) + "" 
        elif 100 == a : 
            return str(r) + ".5" 
        else : 
            return str(r) + "-" + addZero(a, 2)

def ActionFirst(jsonData):
    global datetime_str

    menuList = jsonData["menu"]["list"]

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

        for index in range(1, len(odds)):
            oddItem = odds[index]
            oddType = oddItem[0][len(gameType):]
            oddClass = oddType[0:1]
            oddType = int(oddType[1:len(oddType)])
            event = protobuf_spec.ApHdc()        
            event.source = "KU"
            event.game_class = TransformGameType(gameType) 
            event.raw_event_id = gameRoundId
            event.game_id = gameRoundId
            event.ip = "192.168.1.1"
            event.status = '0'

            event.event_time = gameRound[9]

            #event.event_time = datetime_dt.strftime("%Y-%m-%d %H:%M:%S")

            event.source_updatetime = jsonData["date"]
            
            event.live = 'true' if jsonData["mode"] == 2 else 'false'
            event.live_time = TransformRunTime(gameType, gameRound[10], jsonData["date"])


            event.information.league = GAME_TYPE[gameRound[1]]["name"] 

            event.information.home.team_name = gameRound[2][0]

            event.information.away.team_name = gameRound[3][0]
        
            score = gameScoreList[gameRoundId]

            if IsSC(gameType) :
                event.redcard.home = score[2] if len(score[2]) > 0 else '0'
                event.redcard.away = score[3] if len(score[3]) > 0 else '0'
                event.yellowcard.home = '0'
                event.yellowcard.away = '0'
            
                if jsonData["type"] == 2: #是否為"角球"
                    event.conner.home = '0'
                    event.conner.away = '0'

            event.score.home = score[0]
            event.score.away = score[1]

            if oddClass == "0": #全場
                event.game_type = "full"
            if oddClass == "1": #上半場
                event.game_type = "1st half"

            lineStr = TransformNumToPk(oddItem[0], oddItem[8])

            #讓分
            if oddType == 1:
                lineAt = oddItem[9] # 1: 主讓 , 2: 客讓
                event.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
                event.twZF.homeZF.odds = str(oddItem[13])
                event.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
                event.twZF.awayZF.odds = str(oddItem[15])

            #大小
            elif oddType == 2:
                event.twDS.line = lineStr
                event.twDS.over = str(oddItem[13])
                event.twDS.under = str(oddItem[15])

            #獨贏
            elif oddType == 3:
                event.de.home = str(oddItem[13])
                event.de.away = str(oddItem[15])

            #單雙
            elif oddType == 4:
                event.sd.home = str(oddItem[13])
                event.sd.away = str(oddItem[15])
            
            event_proto_list.append(event)

    dataList.aphdc.extend(event_proto_list)
    return dataList

'''
def ActionAdd(jsonData){
    global GAME_LIST

}

def ActionDel(jsonData){
    global GAME_LIST

}

def ActionUpdate(jsonData){
    global GAME_LIST

}
'''

def onNext(messageZip):
    global FP

    messageUnzip = pako_inflate(messageZip)
    messageDecode = messageUnzip.decode("utf-8")
    messageJson = json.loads(messageDecode)
    FP.write(str(messageDecode) + "\n")
    FP.flush()

    if messageJson["action"] == "first" or messageJson["action"] == "cm" : 
        ActionFirst(messageJson)
    elif messageJson["action"] == "add" : 
        print(messageJson)
    elif messageJson["action"] == "del" : 
        print(messageJson)
    elif messageJson["action"] == "update" : 
        print(messageJson)
    else :
        print("Unknown Action : " + messageJson["action"] + "\n" + json.dumps(messageJson))

