from upload import protobufUtils
from constants import Mapping

def eSportParser(eventBuf, oddItem):
    soccerDefault = 180000
    oddsType = oddItem[Mapping.oddsData.oddType]

    oddsKey = eventBuf.raw_event_id + "_" + oddItem[Mapping.oddsData.oddGroup]

    gameClass = int(oddsType) - soccerDefault

    if gameClass < 100:
        eventBuf.game_type = "live full" if eventBuf.live == "true" else "full"
        eventBuf.information.league += " - 局數"
        oddsKey += "_0"

    elif gameClass < 200:
         eventBuf.game_type = "1q"
         eventBuf.information.league += " - 第一局"
         oddsKey += "_1"

    elif gameClass < 300:
        eventBuf.game_type = "2q"
        eventBuf.information.league += " - 第二局"
        oddsKey += "_3"

    else :    
        eventBuf.game_type = "3q"
        eventBuf.information.league += " - 第三局"
        oddsKey += "_4"


    if oddsType in ["180105", "180205", "180305", "180106", "180206", "180306", "180108", "180208", "180308"]:
        eventBuf.information.league += " - 擊殺英雄總數"
        oddsKey += "_1"

    elif oddsType in ["180109", "180209", "180309", "180110", "180210", "180310", "180112", "180212", "180312"]:
        eventBuf.information.league += " - 摧毀防禦塔總數"
        oddsKey += "_2"

    elif oddsType in ["180121", "180221", "180321", "180122", "180222", "180322", "180124", "180224", "180324"]:
        eventBuf.information.league += " - 殺死小龍總數"
        oddsKey += "_3"

    elif oddsType in ["180125", "180225", "180325", "180126", "180226", "180326", "180128", "180228", "180328"]:
        eventBuf.information.league += " - 殺死大龍總數"
        oddsKey += "_4"

    elif oddsType in ["180149", "180249", "180349", "180150", "180250", "180350", "180152", "180252", "180352"]:
        eventBuf.information.league += " - 回合總數"
        oddsKey += "_5"

    elif oddsType in ["180191", "180291", "180391"]:
        eventBuf.information.league += " - 戰時間(分鐘)"
        oddsKey += "_6"

    elif oddsType in ["180171", "180271", "180371"]:
        eventBuf.information.league += " - 殺死首條小龍"
        oddsKey += "_7"

    elif oddsType in ["180172", "180272", "180372"]:
        eventBuf.information.league += " - 殺死首條大龍"
        oddsKey += "_8"

    elif oddsType in ["180178", "180278", "180378"]:
        eventBuf.information.league += " - 摧毀首個水晶"  
        oddsKey += "_9"

    elif oddsType in ["180180", "180280", "180380"]:
        eventBuf.information.league += " - 摧毀首個防禦塔"
        oddsKey += "_10"

    elif oddsType in ["180181", "180281", "180381"]:
        eventBuf.information.league += " - 第一滴血"
        oddsKey += "_11"

    #180001 局數-讓球

    #180105 第一局-擊殺英雄總數-讓球
    #180109 第一局-摧毀防禦塔總數-讓球
    #180121 第一局-殺死小龍總數-讓球
    #180125 第一局-殺死大龍總數-讓球
    #180149 第一局-回合總數

    #180205 第二局-擊殺英雄總數-讓球
    #180209 第二局-摧毀防禦塔總數-讓球
    #180221 第二局-殺死小龍總數-讓球
    #180225 第二局-殺死大龍總數-讓球
    #180249 第二局-回合總數

    #180305 第三局-擊殺英雄總數-讓球
    #180309 第三局-摧毀防禦塔總數-讓球
    #180321 第三局-殺死小龍總數-讓球
    #180325 第三局-殺死大龍總數-讓球
    #180349 第三局-回合總數
    if oddsType in ["180001", "180149", "180249", "180349", \
                            "180105", "180109", "180121", "180125", \
                            "180205", "180209", "180221", "180225", \
                            "180305", "180309", "180321", "180325" \
                            ]:
        eventBuf = protobufUtils.set_spread(eventBuf, oddItem) 

    #180002 局數-大小

    #180106 第一局-擊殺英雄總數-大小
    #180110 第一局-摧毀防禦塔總數-大小
    #180122 第一局-殺死小龍總數-大小
    #180126 第一局-殺死大龍總數-大小
    #180191 第一局-對戰時間(分鐘)
    #180150 第一局-回合總數-大小

    #180206 第二局-擊殺英雄總數-大小
    #180210 第二局-摧毀防禦塔總數-大小
    #180222 第二局-殺死小龍總數-大小
    #180226 第二局-殺死大龍總數-大小
    #180291 第二局-對戰時間(分鐘)
    #180250 第二局-回合總數-大小

    #180306 第三局-擊殺英雄總數-大小
    #180310 第三局-摧毀防禦塔總數-大小
    #180322 第三局-殺死小龍總數-大小
    #180326 第三局-殺死大龍總數-大小
    #180391 第三局-對戰時間(分鐘)    
    #180350 第三局-回合總數-大小
    elif oddsType in ["180002", "180150", "180250", "180350",\
                              "180106", "180110", "180122", "180126", "180191", \
                              "180206", "180210", "180222", "180226", "180291", \
                              "180306", "180310", "180322", "180326", "180391" \
                            ]:
        eventBuf = protobufUtils.set_total(eventBuf, oddItem) 

    #180003 局數-獨贏

    #180101 第一局-第一局
    #180171 第一局-殺死首條小龍
    #180172 第一局-殺死首條大龍
    #180178 第一局-摧毀首個水晶
    #180180 第一局-摧毀首個防禦塔
    #180181 第一局-第一滴血
    
    #180201 第二局-第二局
    #180271 第二局-殺死首條小龍
    #180272 第二局-殺死首條大龍
    #180278 第二局-摧毀首個水晶
    #180280 第二局-摧毀首個防禦塔
    #180281 第二局-第一滴血

    #180301 第三局-第三局
    #180371 第三局-殺死首條小龍
    #180372 第三局-殺死首條大龍
    #180378 第三局-摧毀首個水晶
    #180380 第三局-摧毀首個防禦塔
    #180381 第三局-第一滴血   
    elif oddsType in ["180003", \
                              "180101", "180171", "180172", "180178", "180180", "180181", \
                              "180201", "180271", "180272", "180278", "180280", "180281", \
                              "180301", "180371", "180372", "180378", "180380", "180381" \
                            ]:
        eventBuf = protobufUtils.set_monney_line(eventBuf, oddItem, True)        

    #180108 第一局-擊殺英雄總數-單雙
    #180112 第一局-摧毀防禦塔總數-單雙
    #180124 第一局-殺死小龍總數-單雙
    #180128 第一局-殺死大龍總數-單雙
    #180152 第一局-回合總數-單雙

    #180208 第二局-擊殺英雄總數-單雙
    #180212 第二局-摧毀防禦塔總數-單雙
    #180224 第二局-殺死小龍總數-單雙
    #180228 第二局-殺死大龍總數-單雙
    #180252 第二局-回合總數-單雙

    #180308 第三局-擊殺英雄總數-單雙
    #180312 第三局-摧毀防禦塔總數-單雙
    #180324 第三局-殺死小龍總數-單雙
    #180328 第三局-殺死大龍總數-單雙  
    #180352 第三局-回合總數-單雙       
    elif oddsType in ["180108", "180112", "180124", "180128", \
                              "180208", "180212", "180224", "180228", \
                              "180308", "180312", "180324", "180328", \
                              "180152", "180252", "180352" \
                              ]:
        eventBuf = protobufUtils.set_parity(eventBuf, oddItem)           
 
    return eventBuf, oddsKey