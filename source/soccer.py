from utils import searchItemfromArray
from upload import protobufUtils
from constants import Mapping

def soccerParser(eventBuf, oddItem):
    soccerDefault = 11000
    oddsType = oddItem[Mapping.oddsData.oddType]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[Mapping.oddsData.oddGroup]

    gameClass = int(oddsType) - soccerDefault

    if gameClass < 100:
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
        eventBuf.information.league += " - 全場"
        oddsKey += "_0"

    elif gameClass > 200  :
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
        gameClassSlice = gameClass - 200
        
        if gameClassSlice < 10 :
            eventBuf.information.league += " - 00:00 - 14:59"
            oddsKey += "_2"

        elif gameClassSlice < 20 :    
            eventBuf.information.league += " - 15:00 - 29:59"
            oddsKey += "_3"

        elif gameClassSlice < 30 :     
            eventBuf.information.league += " - 30:00 - 半場"
            oddsKey += "_4"

        elif gameClassSlice < 40 :   
            eventBuf.information.league += " - 45:01 - 59:59"
            oddsKey += "_5"

        elif gameClassSlice < 50 :
            eventBuf.information.league += " - 60:00 - 74:59"
            oddsKey += "_6"

        elif gameClassSlice < 60 :
            eventBuf.information.league += " - 74:00 - 全場"
            oddsKey += "_7"

    elif gameClass > 100  :    
        eventBuf.game_type = "live 1st half" if eventBuf.live == "true" else "1st half"
        eventBuf.information.league += " - 上半場"
        oddsKey += "_1"


    if searchItemfromArray(["11011", "11111", "11012", "11112", "11013", "11113", "11014", "11114"], oddsType) >= 0:
        eventBuf.information.league += " - 角球數"
        oddsKey += "_1"

    elif searchItemfromArray(["11021", "11121", "11022", "11122", "11023", "11123", "11024", "11124"], oddsType) >= 0:
        eventBuf.information.league += " - 罰牌數"
        oddsKey += "_2"
     
    elif oddsType == "11064" or oddsType == "11164":
        eventBuf.information.league += " - 單隊總得分 - 主隊大小"
        oddsKey += "_6"

    elif oddsType == "11065" or oddsType == "11165":
        eventBuf.information.league += " - 單隊總得分 - 客隊大小"
        oddsKey += "_7"

    elif oddsType == "11506":
        eventBuf.information.league += " - 第一個角球"
        oddsKey += "_8"

    elif oddsType == "11531":
        eventBuf.information.league += " - 第一個進球"
        oddsKey += "_9"    

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
    if searchItemfromArray(["11001", "11011", "11021", "11066", "11070", "11071", "11101", "11111", "11121", "11167", "11201", "11211", "11221", "11231", "11241", "11251"], oddsType) >= 0 :

        eventBuf = protobufUtils.setSpread(eventBuf, oddItem) 

        if oddsType == "11066" or oddsType == "11167":
            eventBuf.information.league += "  - 其他玩法 - 兩隊是否都進球"
            eventBuf.twZF.homeZF.line = "是"
            eventBuf.twZF.awayZF.line = "否"
            oddsKey += "_3"

        elif oddsType == "11070":
            eventBuf.information.league += " - 其他玩法 - 最多進球的半場 - 雙項"
            eventBuf.twZF.homeZF.line = "上半場"
            eventBuf.twZF.awayZF.line = "下半場"
            oddsKey += "_4"

        elif oddsType == "11071":
            eventBuf.information.league += " - 其他玩法 - 最多進球的半場 - 三項"
            eventBuf.twZF.homeZF.line = "上半場"
            eventBuf.twZF.awayZF.line = "下半場"
            oddsKey += "_5"

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
    elif searchItemfromArray(["11002", "11012", "11022", "11064", "11065", "11102", "11112", "11122", "11164", "11165", "11202", "11212", "11222", "11232", "11242", "11252"], oddsType) >= 0 : 
        eventBuf = protobufUtils.setTotal(eventBuf, oddItem) 

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
    #11506 - 全場-第一個角球
    #11531 - 全場-第一個進球
    elif searchItemfromArray(["11003", "11013", "11023", "11103", "11113", "11123", "11203", "11213", "11223", "11233", "11243", "11253", "11506", "11531"], oddsType) >= 0 :
        eventBuf = protobufUtils.setMonneyLine(eventBuf, oddItem, True)

    #11004 - 全場-單雙
    #11014 - 全場-角球數-單雙
    #11024 - 全場-罰牌數-單雙
    #11104 - 上半場-單雙
    #11114 - 上半場-角球數-單雙
    #11124 - 上半場-罰牌數-單雙
    elif oddsType == "11004" or oddsType == "11014" or oddsType == "11024" or oddsType == "11104" or oddsType == "11114" or oddsType == "11124": 
        eventBuf = protobufUtils.setParity(eventBuf, oddItem)

    #11061 - 波膽-全場
    #11161 - 波膽-上半場
    elif oddsType == "11061" or oddsType == "11161":  
        eventBuf.game_type = "pd " + eventBuf.game_type
        eventBuf.information.league += " - 波膽"
        oddsKey += "_7"
        
        eventBuf = protobufUtils.setCorrectScore(eventBuf, oddItem)


    #11062 - 入球數-全場
    #11162 - 入球數-上半場
    elif oddsType == "11062" or oddsType == "11162":
        eventBuf.game_type = "tg " + eventBuf.game_type
        eventBuf.information.league += " - 入球數"
        oddsKey += "_8"

        eventBuf = protobufUtils.setTotalGoal(eventBuf, oddItem)

    #11063 - 半全場
    elif oddsType == "11063":
        eventBuf.game_type = "hf " + eventBuf.game_type
        eventBuf.information.league += " - 半全場" 
        oddsKey += "_9"

        eventBuf = protobufUtils.setFullHalfOutcome(eventBuf, oddItem)

    return eventBuf, oddsKey        