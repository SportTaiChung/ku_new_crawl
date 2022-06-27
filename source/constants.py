from enum import Enum

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
    Font_RollBall = "LIVE"

class GameType(Enum):
    # baseball not used in protobuf game class
    baseball = 'baseball'
    mlb = 'mlb'    # 美棒
    npb = 'npb'    # 日棒
    cpbl = 'cpbl'  # 台棒
    kbo = 'kbo'    # 韓棒和其他
    basketball = 'basketball'  # NBA
    otherbasketball = 'otherbasketball'  # 其他非NBA籃球
    tennis = 'tennis'
    hockey = 'hockey'
    football = 'football'
    eSport = 'eSport'
    soccer = 'soccer'
    UCL = 'UCL'  # 歐洲冠軍足球
    wsc = "wsc"
    pingpong = 'PP'
    volleyball = 'VL'
    other = 'other'


class Mapping:

    # 足球 ["11_2264_0_1","愛爾蘭超級聯賽",4009000,11,11]
    # 籃球 ["12_8189_0_2","籃球超級聯賽",10813000,12,12]
    class allyData:
        leagueId = 0            # 聯盟編號
        leagueName = 1          # 聯盟名稱
        leagueUUID = 2          # 未使用 - 意義不明
        sportId = 3             # 運動編號
        typeId = 4              # 運動類型

    # 足球 "112611148":["3","1","","",[],[],0,0,["0","0","0","0","0","0"],["0","0","0","0","0","0"],0,16,"3","1"]
    # 籃球 "142127890": ["0", "0", "", "", ["3", "", "", "", ""], ["1", "", "", "", ""], "40", "15", [], [], 2, 3, "0", "0"]
    class scoreData:
        homeScore = 0           # 主隊比分
        awayScore = 1           # 客隊比分
        homeConner = 2          # 主隊角球
        awayConner = 3          # 客隊角球
        # homeRoundScore = 4    # 主隊各局數分數 
        # awayRoundScore = 5    # 客隊各局數分數 
        homeRedcard = 6         # 主隊紅牌
        awayRedcard = 7         # 客隊紅牌
        # homeRoundScore = 8    # 主隊各局數分數
        # awayRoundScore = 9    # 客隊各局數分數
        # None = 10             # 未使用 - 意義不明
        # None = 11             # 未使用 - 意義不明
        # homeScore = 12        # 主隊比分 - 與 '0' 相同，實際使用'0'
        # awayScore = 13        # 客隊比分 - 與 '1' 相同，實際使用'1'
