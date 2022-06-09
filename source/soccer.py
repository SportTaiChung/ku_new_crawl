
from utils import TransformNumToPk, searchItemfromArray

def soccerParser(eventBuf, oddItem):
    soccerDefault = 11000
    oddsType = oddItem[0]

    lineStr = TransformNumToPk(oddsType, oddItem[8])
    lineAt = oddItem[9] # 1: 主讓 , 0: 客讓

    gameClass = int(oddsType) - soccerDefault

    if gameClass < 100:
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 全場"

    elif gameClass > 200  :
        eventBuf.game_type = "full"
        gameClassSlice = gameClass - 200
        if gameClassSlice < 10 :
            eventBuf.information.league += " - 00:00 - 14:59"

        elif gameClassSlice < 20 :    
            eventBuf.information.league += " - 15:00 - 29:59"

        elif gameClassSlice < 30 :     
            eventBuf.information.league += " - 30:00 - 半場"

        elif gameClassSlice < 40 :   
            eventBuf.information.league += " - 45:01 - 59:59"

        elif gameClassSlice < 50 :
            eventBuf.information.league += " - 60:00 - 74:59"

        elif gameClassSlice < 60 :
            eventBuf.information.league += " - 74:00 - 全場"

    elif gameClass > 100  :    
        eventBuf.game_type = "1st half"
        eventBuf.information.league += " - 上半場"

    zfArray = ["11001", "11011", "11021", "11066", "11070", "11071", "11101", "11111", "11121", "11167", "11201", "11211", "11221", "11231", "11241", "11251"]
    dsArray = ["11002", "11012", "11022", "11064", "11065", "11102", "11112", "11122", "11164", "11165", "11202", "11212", "11222", "11232", "11242", "11252"]
    deArray = ["11003", "11013", "11023", "11103", "11113", "11123", "11203", "11213", "11223", "11233", "11243", "11253"]
    #11001 - 全場-讓球
    #11011 - 全場-角球數-讓球
    #11021 - 全場-罰牌數-讓球
    #11066 - 全場-其他玩法-兩隊是否都進球 
    #11070 - 全場-其他玩法-最多進球的半場-雙項
    #11071 - 全場-其他玩法-最多進球的半場-三項
    #11101 - 上半場-讓球
    #11111 - 上半場-角球數-讓球
    #11121 - 上半場-罰牌數-讓球
    #11167 - 上半場-其他玩法-兩隊是否都進球
    #11201 - 00:00 - 14:59 -讓球
    #11211 - 15:00 - 29:59 -讓球
    #11221 - 30:00 - 半場 -讓球
    #11231 - 45:01 - 59:59 -讓球
    #11241 - 60:00 - 74:59 -讓球
    #11251 - 74:00 - 全場 -讓球
    if searchItemfromArray(zfArray, oddsType) >= 0 :

        eventBuf.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
        eventBuf.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
        if oddsType == "11001" or oddsType == "11101" or oddsType == "11201" or oddsType == "11211" or oddsType == "11221" or oddsType == "11231" or oddsType == "11241" or oddsType == "11251":
            eventBuf.information.league += " - 讓球"

        elif oddsType == "11011" or oddsType == "11111":
            eventBuf.information.league += " - 角球數 - 讓球"

        elif oddsType == "11021" or oddsType == "11121":
            eventBuf.information.league += " - 罰牌數 - 讓球"

        elif oddsType == "11066" or oddsType == "11167":
            eventBuf.information.league += "  - 其他玩法 - 兩隊是否都進球"
            eventBuf.twZF.homeZF.line = "是"
            eventBuf.twZF.awayZF.line = "否"

        elif oddsType == "11070":
            eventBuf.information.league += " - 其他玩法 - 最多進球的半場 - 雙項"
            eventBuf.twZF.homeZF.line = "上半場"
            eventBuf.twZF.awayZF.line = "下半場"

        elif oddsType == "11071":
            eventBuf.information.league += " - 其他玩法 - 最多進球的半場 - 三項"
            eventBuf.twZF.homeZF.line = "上半場"
            eventBuf.twZF.awayZF.line = "下半場"

        eventBuf.twZF.homeZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twZF.awayZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

    #11002 - 全場-大小 
    #11012 - 全場-角球數-大小
    #11022 - 全場-罰牌數-大小
    #11064 - 全場-單隊總得分-主隊大小
    #11065 - 全場-單隊總得分-客隊大小
    #11102 - 上半場-大小
    #11112 - 上半場-角球數-大小
    #11122 - 上半場-罰牌數-大小
    #11164 - 上半場-單隊總得分-主隊大小
    #11165 - 上半場-單隊總得分-客隊大小
    #11202 - 00:00 - 14:59 -大小
    #11212 - 15:00 - 29:59 -大小
    #11222 - 30:00 - 半場 -大小
    #11232 - 45:01 - 59:59 -大小
    #11242 - 60:00 - 74:59 -大小
    #11252 - 74:00 - 全場 -大小
    elif searchItemfromArray(dsArray, oddsType) >= 0 : 
        if oddsType == "11002" or oddsType == "11102" or oddsType == "11202" or oddsType == "11212" or oddsType == "11222" or oddsType == "11232" or oddsType == "11242" or oddsType == "11252":
            eventBuf.information.league += " - 大小"

        elif oddsType == "11012" or oddsType == "11112":
            eventBuf.information.league += " - 角球數 - 大小" 

        elif oddsType == "11022" or oddsType == "11122":
            eventBuf.information.league += " - 罰牌數 - 大小"      

        elif oddsType == "11064" or oddsType == "11164":
            eventBuf.information.league += " - 單隊總得分 - 主隊大小"

        elif oddsType == "11065" or oddsType == "11165":
            eventBuf.information.league += " - 單隊總得分 - 客隊大小"

        eventBuf.twDS.line = lineStr
        eventBuf.twDS.over = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twDS.under = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

    #11003 - 全場-獨贏
    #11013 - 全場-角球數-獨贏
    #11023 - 全場-罰牌數-獨贏
    #11103 - 上半場-獨贏
    #11113 - 上半場-角球數-獨贏
    #11123 - 上半場-罰牌數-獨贏
    #11203 - 00:00 - 14:59 -獨贏
    #11213 - 15:00 - 29:59 -獨贏
    #11223 - 30:00 - 半場 -獨贏
    #11233 - 45:01 - 59:59 -獨贏
    #11243 - 60:00 - 74:59 -獨贏
    #11253 - 74:00 - 全場  -獨贏
    elif searchItemfromArray(deArray, oddsType) >= 0 :
        if oddsType == "11003" or oddsType == "11103" or oddsType == "11203" or oddsType == "11213" or oddsType == "11223" or oddsType == "11233" or oddsType == "11243" or oddsType == "11253":
            eventBuf.information.league += " - 獨贏" 

        elif oddsType == "11013" or oddsType == "11113":    
            eventBuf.information.league += " - 角球數 - 獨贏"

        elif oddsType == "11023" or oddsType == "11123":    
            eventBuf.information.league += " - 罰牌數 - 獨贏"  

        homeOdd = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        awayOdd = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'       
        eventBuf.de.home = homeOdd
        eventBuf.de.away = awayOdd   

    #11004 - 全場-單雙
    #11014 - 全場-角球數-單雙
    #11024 - 全場-罰牌數-單雙
    #11104 - 上半場-單雙
    #11114 - 上半場-角球數-單雙
    #11124 - 上半場-罰牌數-單雙
    elif oddsType == "11004" or oddsType == "11014" or oddsType == "11024" or oddsType == "11104" or oddsType == "11114" or oddsType == "11124": 
        if oddsType == "11004" or oddsType == "11104":
            eventBuf.information.league += " - 單雙"
        elif oddsType == "11014" or oddsType == "11114":
            eventBuf.information.league += " - 角球數 - 單雙"
        elif oddsType == "11024" or oddsType == "11124":
            eventBuf.information.league += " - 罰牌數 - 單雙"    

        eventBuf.sd.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.sd.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

    #11061 - 波膽-全場
    #11161 - 波膽-上半場
    elif oddsType == "11061" or oddsType == "11161":  
        eventBuf.game_type = "pd " + eventBuf.game_type
        eventBuf.information.league += " - 波膽"

        eventBuf.multi = "{"
        for oddItemIndex in range(12, (len(oddItem) - 1), 2):
            key = oddItem[oddItemIndex]
            odd = oddItem[oddItemIndex + 1]
            if key == "99":
                eventBuf.multi += "\"other\": " + str(odd)
            else :    
                eventBuf.multi += "\"" + key[0:1] + "-" + key[1:2] + "\": " + str(odd) + ","
        eventBuf.multi += "}"

    #11062 - 入球數-全場
    #11162 - 入球數-上半場
    elif oddsType == "11062" or oddsType == "11162":
        eventBuf.game_type = "tg " + eventBuf.game_type
        eventBuf.information.league += " - 入球數"     

        eventBuf.multi = "{\"0-1\": \"" + str(oddItem[13]) + "\", \"2-3\": \"" + str(oddItem[15]) + "\", \"4-6\": \"" + str(oddItem[17]) + "\", \"7+\": \"" + str(oddItem[17]) + "\"}"

    #11063 - 半全場
    elif oddsType == "11063":
        eventBuf.game_type = "hf " + eventBuf.game_type
        eventBuf.information.league += " - 半全場" 

        ## 11 : HH, 12 : HA, 13: HD, 21 : AH, 22 : AA, 23 : AD, 31 : DH, 32 : DA, 33 : DD
        ## HH : 13, HA : 15, HD : 17, AH : 19, AA : 21, AD : 23, DH : 25, DA : 27, DD : 29
        eventBuf.multi = "{\"HH\": " + str(oddItem[13]) + ", \"HD\": " + str(oddItem[17]) + ", \"HA\": " + str(oddItem[15]) + ", \"DH\": " + str(oddItem[25]) + ", \"DD\": " + str(oddItem[29]) + ", \"DA\": " + str(oddItem[27]) + ", \"AH\": " + str(oddItem[19]) + ", \"AD\": " + str(oddItem[23]) + ", \"AA\": " + str(oddItem[21]) + "}"    


    return eventBuf        