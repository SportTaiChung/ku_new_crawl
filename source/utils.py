from constants import GameType, langFont
import numpy as np
import traceback
import time

def getQueryString(urlStr, key):
    strList = urlStr.split('?')[1]
    itemList = strList.split('&')
    for item in itemList:
        value = item.split('=')
        if value[0] == key:
            return value[1]

def getRandomMachineId(usedDefault):
    if usedDefault :
        return "c1000b11349e8d89dbb53f19b17ee805"
    resultStr = ''
    chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
    length = len(chars) - 1
    random = Random()

    for i in range(32):
        resultStr+=chars[random.randint(0,length)]

    return resultStr.lower()

def getBodyStr(startKey, endKey, bodyText):    
    startIndex = bodyText.find(startKey)
    endIndex = bodyText[startIndex:].find(endKey) + startIndex
    return bodyText[startIndex:endIndex]

def addZero(n, t):
    return "0" + str(n) if len(str(n)) < t else str(n)

#ht: 19 st: 11, gd: 9, rt: TransformRunTime
def TransformGdOrSt(gameType, gameMode, st, gd, crawlTime, startTime, ht):
    s = TransformStatus(gameType, st)
    rt = TransformRunTime(gameType, crawlTime, startTime)
    if int(gameMode) == 2:
        if IsSC(gameType):
            if searchItemfromArray([2, 4, 60], st) < 0 :
                serverTime = int(time.mktime(time.strptime(crawlTime, "%Y/%m/%d %H:%M:%S")))
                rt = np.round((serverTime - int(rt))/ 1e3 / 60, 1)
                if rt > int(ht) :
                    rt = ht + "+" 
                else :
                    rt += "'"
            else : 
                rt = ""
        elif gameType == 18 or gameType == "es" or gameType == 13 or gameType == "bb":
            s = langFont.Font_RollBall

        return  s + " " + rt
    else: 
        return "0"

def TransformNumToPk(gameType, lineStr):
    if lineStr == "":
        return "0" 

    if -1 == lineStr:
        return "0"

    checkArray = ["11001", "11002", "11011", "11012", "11021", "11022", "11064", "11065", "11101", "11102", "11111", "11112", "11121", "11122", "11164", "11165", "11201", "11202", "11211", "11212", "11221", "11222", "11231", "11232", "11241", "11242", "11251", "11252", "11301", "11302", "11311", "11312", "11321", "11322", "11331", "11332", "11341", "11342", "11351", "11352", "11401", "11402", "11411", "11412", "11421", "11422", "11431", "11432", "11441", "11442", "11451", "11452", "11701", "11702", "11015", "11016", "11115", "11116", "26001", "26002", "26011", "26012", "26021", "26022", "26064", "26065", "26101", "26102", "26111", "26112", "26121", "26122", "26164", "26165", "26201", "26202", "26211", "26212", "26221", "26222", "26231", "26232", "26241", "26242", "26251", "26252", "26301", "26302", "26311", "26312", "26321", "26322", "26331", "26332", "26341", "26342", "26351", "26352", "26401", "26402", "26411", "26412", "26421", "26422", "26431", "26432", "26441", "26442", "26451", "26452", "26701", "26702", "26015", "26016", "26115", "26116", "27001", "27002", "27011", "27012", "27021", "27022", "27064", "27065", "27101", "27102", "27111", "27112", "27121", "27122", "27164", "27165", "27201", "27202", "27211", "27212", "27221", "27222", "27231", "27232", "27241", "27242", "27251", "27252", "27301", "27302", "27311", "27312", "27321", "27322", "27331", "27332", "27341", "27342", "27351", "27352", "27401", "27402", "27411", "27412", "27421", "27422", "27431", "27432", "27441", "27442", "27451", "27452", "27701", "27702", "27015", "27016", "27115", "27116"]

    try:
        checkArray.index(gameType)
        t = abs(int(lineStr))
        r = int(t / 1e3)
        a = t % 1e3
        if 0 == a or 500 == a : 
            return str(t / 1e3) + "" 
        elif 250 == a : 
            return str(r) + "/" + str(r + .5) 
        elif 750 == a : 
            return str(r + .5) + "/" + str(r + 1) 
        else:
            return "0"

    except ValueError:
        t = round(abs(int(lineStr)) / 1e3 * 200);
        r = int(t / 200);
        a = t % 200
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

def searchItemfromArray(array, key):
    try:
        ndx = array.index(key)
    except:
        ndx = -1
    return ndx    

def IsSC(gameType):
    try:
        return True if 0 <= ["sc", "eu", "wd", "ch", "fi", "11", "26", "27", "51", "52"].index(str(gameType)) else False
    except ValueError:
        return False

def TransformStatus(gameType, timeOption):
    o = {
        "11" : {
            0: langFont.Font_SCStatus[0],
            1: langFont.Font_SCStatus[1],
            2: langFont.Font_SCStatus[2],
            3: langFont.Font_SCStatus[3],
            4: langFont.Font_SCStatus[4],
            60: langFont.Font_SCStatus[5]
        },
        "12" : {
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
        "13" : {
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
        "14" : {
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
        "15" : {
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
        "16" : {
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
        "17" : {
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
        "18" : {
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
        "20" : {
            0: langFont.Font_PBStatus[0],
            20: langFont.Font_PBStatus[1]
        },
        "21" : {
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
        "22" : {
            0: langFont.Font_HBStatus[0],
            11: langFont.Font_HBStatus[1],
            12: langFont.Font_HBStatus[2],
            13: langFont.Font_HBStatus[3],
            14: langFont.Font_HBStatus[4],
            20: langFont.Font_HBStatus[5],
            60: langFont.Font_HBStatus[6],
            61: langFont.Font_HBStatus[7]
        },
        "53" : {
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
        "24 ": {
            0: langFont.Font_OPStatus[0],
            20: langFont.Font_OPStatus[1]
        },
        "28" : {
            0: langFont.Font_BXStatus[0]
        }
    };
    gameType = "11" if IsSC(gameType) else str(gameType) 
    timeOption = int(timeOption)
    try :
        return o[gameType][timeOption] if o[gameType] and o[gameType][timeOption] else ""
    except KeyError:
        traceback.print_exc()
        return ""

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

    elif len(timeStr) > 0 and len(crawlTime) > 0:
        try:
            if IsSC(gameType):
                runTime = time.strptime(timeStr, "%Y/%m/%d %H:%M:%S")
                nowTime = time.strptime(crawlTime, "%Y/%m/%d %H:%M:%S")
                diffTime = int(time.mktime(nowTime)) - int(time.mktime(runTime))
                return str(int(diffTime / 60))
            else :
                runTime = time.strptime(timeStr, "%Y/%m/%d %H:%M:%S")
                return time.strftime('%M:%S', runTime)

        except ValueError:
            traceback.print_exc()

    return timeStr if len(timeStr) > 0 else '0'    
