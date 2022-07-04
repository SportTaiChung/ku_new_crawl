from constants import GameType, langFont
import numpy as np
import traceback
import time

def get_query_string(url_str, key):
    str_list = url_str.split('?')[1]
    item_list = str_list.split('&')
    for item in item_list:
        value = item.split('=')
        if value[0] == key:
            return value[1]

def get_random_machine_id(used_default):
    if used_default :
        return "c1000b11349e8d89dbb53f19b17ee805"
    result_str = ''
    chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
    length = len(chars) - 1
    random = Random()

    for i in range(32):
        result_str+=chars[random.randint(0,length)]

    return result_str.lower()

def get_body_str(start_key, end_key, body_text):    
    start_index = body_text.find(start_key)
    end_index = body_text[start_index:].find(end_key) + start_index
    return body_text[start_index:end_index]

def add_zero(n, t):
    return "0" + str(n) if len(str(n)) < t else str(n)

#ht: 19 st: 11, gd: 9, rt: transform_runtime
def transform_live_time(game_type, game_mode, st, gd, crawl_time, start_time, ht):
    s = transform_status(game_type, st)
    rt = transform_runtime(game_type, start_time, crawl_time)
    if int(game_mode) == 2 and len(start_time) > 0:
        if is_SC(game_type):
            if st in [2, 4, 60] :
                server_time = int(time.mktime(time.strptime(crawl_time, "%Y/%m/%d %H:%M:%S")))
                game_start_time = int(time.mktime(time.strptime(start_time, "%Y/%m/%d %H:%M:%S")))
                rt = int(np.round((server_time - int(game_start_time)) / 60))
                if rt > int(ht) :
                    rt = ht + "+" 
                else :
                    rt = str(rt) + "'"
            else : 
                rt = ""
        elif game_type == 18 or game_type == "es" or game_type == 13 or game_type == "bb":
            s = langFont.Font_RollBall

        return  s + " " + rt
    else: 
        return "0"

def transform_num_to_pk(game_type, line_str):
    if line_str == "":
        return "0" 

    if -1 == lineline_strStr:
        return "0"

    check_array = ["11001", "11002", "11011", "11012", "11021", "11022", "11064", "11065", "11101", "11102", "11111", "11112", "11121", "11122", "11164", "11165", "11201", "11202", "11211", "11212", "11221", "11222", "11231", "11232", "11241", "11242", "11251", "11252", "11301", "11302", "11311", "11312", "11321", "11322", "11331", "11332", "11341", "11342", "11351", "11352", "11401", "11402", "11411", "11412", "11421", "11422", "11431", "11432", "11441", "11442", "11451", "11452", "11701", "11702", "11015", "11016", "11115", "11116", "26001", "26002", "26011", "26012", "26021", "26022", "26064", "26065", "26101", "26102", "26111", "26112", "26121", "26122", "26164", "26165", "26201", "26202", "26211", "26212", "26221", "26222", "26231", "26232", "26241", "26242", "26251", "26252", "26301", "26302", "26311", "26312", "26321", "26322", "26331", "26332", "26341", "26342", "26351", "26352", "26401", "26402", "26411", "26412", "26421", "26422", "26431", "26432", "26441", "26442", "26451", "26452", "26701", "26702", "26015", "26016", "26115", "26116", "27001", "27002", "27011", "27012", "27021", "27022", "27064", "27065", "27101", "27102", "27111", "27112", "27121", "27122", "27164", "27165", "27201", "27202", "27211", "27212", "27221", "27222", "27231", "27232", "27241", "27242", "27251", "27252", "27301", "27302", "27311", "27312", "27321", "27322", "27331", "27332", "27341", "27342", "27351", "27352", "27401", "27402", "27411", "27412", "27421", "27422", "27431", "27432", "27441", "27442", "27451", "27452", "27701", "27702", "27015", "27016", "27115", "27116"]

    try:
        check_array.index(game_type)
        t = abs(int(line_str))
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
        t = round(abs(int(line_str)) / 1e3 * 200);
        r = int(t / 200);
        a = t % 200
        if 100 < a : 
            a = 200 - a
            r += 1
            return str(r) + "+" + add_zero(a, 2) 
        elif 0 == a : 
            return str(r) + "" 
        elif 100 == a : 
            return str(r) + ".5" 
        else : 
            return str(r) + "-" + add_zero(a, 2)  

def is_SC(game_type):
    try:
        return True if 0 <= ["sc", "eu", "wd", "ch", "fi", "11", "26", "27", "51", "52"].index(str(game_type)) else False
    except ValueError:
        return False

def transform_status(game_type, time_option):
    lang_list = {
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
        "19" : {
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
        "23" : {
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
    }
    game_type = "11" if is_SC(game_type) else str(game_type) 
    time_option = int(time_option)
    try :
        return lang_list[game_type][time_option] if lang_list[game_type] and time_option in lang_list[game_type] else ""
    except KeyError:
        traceback.print_exc()
        return ""

def ally_name_process(id, name):
    return name + " - 加時賽" if id.endswith("3") else name

def transform_game_type(type_id, game_display_name):
    game_name = None
    if type_id.isdigit():
        game_type = int(type_id)
    else :
        game_type = type_id

    if game_type == 100 or game_type == "cs" :  #"即將開賽"
        game_name = GameType.other
    elif game_type == 11 or game_type == "sc" : #足球
        game_name = GameType.soccer
    elif game_type == 26 or game_type == "eu" : #歐洲冠軍聯賽
        game_name = GameType.UCL
    elif game_type == 27 or game_type == "wd" : #世界杯
        game_name = GameType.wsc
    elif game_type == 51 or game_type == "ch" : #"冠軍聯賽"
        game_name = GameType.UCL
    elif game_type == 52 or game_type == "fi" : #"五大聯賽"
        game_name = GameType.UCL
    elif game_type == 12 or game_type == "bk" : #"籃球"
        if "NBA" in game_display_name:
            game_name = GameType.basketball
        else :    
            game_name = GameType.otherbasketball
    elif game_type == 13 or game_type == "bb" :  #"棒球"
        if '美國職棒' in game_display_name or 'MLB' in game_display_name:
            game_name = GameType.mlb
        elif '日本職業棒球' in game_display_name or 'NPB' in game_display_name:
            game_name = GameType.npb
        elif 'CPBL' in game_display_name:
            game_name = GameType.cpbl
        else:    
            game_name = GameType.kbo
    elif game_type == 14 or game_type == "tn" :  #"網球"
        game_name = GameType.tennis
    elif game_type == 15 or game_type == "ih" :  #"冰球"
        game_name = GameType.hockey
    elif game_type == 16 or game_type == "vl" :  #"排球"
        game_name = GameType.volleyball
    elif game_type == 17 or game_type == "bm" :  #"羽毛球"
        game_name = GameType.other
    elif game_type == 18 or game_type == "es" :  #"電子競技"
        game_name = GameType.eSport
    elif game_type == 19 or game_type == "af" :  #"美足"
        game_name = GameType.football
    elif game_type == 20 or game_type == "pb" :  #"撞球"
        game_name = GameType.other
    elif game_type == 21 or game_type == "tt" :  #"乒乓球"
        game_name = GameType.pingpong
    elif game_type == 22 or game_type == "hb" :  #"手球"
        game_name = GameType.other
    elif game_type == 23 or game_type == "wp" :  #"水球"
        game_name = GameType.other
    elif game_type == 99 or game_type == "fv" :  #"收藏夾"
        game_name = GameType.other
    elif game_type == 53 or game_type == "op" :  #"冬季奧運會"
        game_name = GameType.other
    elif game_type == 24 or game_type == "ot" :  #"其它"
        game_name = GameType.other
    elif game_type == 28 or game_type == "bx" :  #"拳擊""
        game_name = GameType.other
    elif game_type == 54 or game_type == "tv" :  #"轉播賽事"
        game_name = GameType.other
    elif game_type == 10 or game_type == "pass" :  #"過關"
        game_name = GameType.other
    else :
        game_name = GameType.other

    return game_name.value

def transform_runtime(game_type, time_str, crawl_time):
    if "-60" == timeStr :
        return transform_status(game_type, 60) 

    elif len(time_str) > 0 and len(crawl_time) > 0:
        try:
            if is_SC(game_type):
                run_time = time.strptime(time_str, "%Y/%m/%d %H:%M:%S")
                now_time = time.strptime(crawl_time, "%Y/%m/%d %H:%M:%S")
                diff_time = int(time.mktime(now_time)) - int(time.mktime(run_time))
                return str(int(diff_time / 60))
            else :
                run_time = time.strptime(time_str, "%Y/%m/%d %H:%M:%S")
                return time.strftime('%M:%S', run_time)

        except ValueError:
            traceback.print_exc()

    return time_str if len(time_str) > 0 else '0'    
