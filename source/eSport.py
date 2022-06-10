from utils import TransformNumToPk, searchItemfromArray

def eSportParser(eventBuf, oddItem):
    soccerDefault = 180000
    oddsType = oddItem[0]

    lineStr = TransformNumToPk(oddsType, oddItem[8])
    lineAt = oddItem[9] # 1: 主讓 , 0: 客讓

    gameClass = int(oddsType) - soccerDefault

    if gameClass < 100:
        eventBuf.game_type = "full"
        eventBuf.information.league += " - 局數"

    elif gameClass < 200:
         eventBuf.game_type = "1q"
         eventBuf.information.league += " - 第一局"

    elif gameClass < 300:
        eventBuf.game_type = "2q"
        eventBuf.information.league += " - 第二局"

    else :    
        eventBuf.game_type = "3q"
        eventBuf.information.league += " - 第三局"

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
    if searchItemfromArray(["180001", "180149", "180249", "180349", \
                            "180105", "180109", "180121", "180125", \
                            "180205", "180209", "180221", "180225", \
                            "180305", "180309", "180321", "180325" \
                            ], oddsType) >= 0:
        if oddsType == "180105" or oddsType == "180205" or oddsType == "180305":
            eventBuf.information.league += " - 擊殺英雄總數"

        elif oddsType == "180109" or oddsType == "180209" or oddsType == "180309":
            eventBuf.information.league += " - 摧毀防禦塔總數"    

        elif oddsType == "180121" or oddsType == "180221" or oddsType == "180321":
            eventBuf.information.league += " - 殺死小龍總數"

        elif oddsType == "180125" or oddsType == "180225" or oddsType == "180325":
            eventBuf.information.league += " - 殺死大龍總數"

        elif oddsType == "180149" or oddsType == "180249" or oddsType == "180349":
            eventBuf.information.league += " - 回合總數"
    

        eventBuf.information.league += " - 讓球"

        eventBuf.twZF.homeZF.line = ("-" if lineAt == 1 else "+") + lineStr
        eventBuf.twZF.homeZF.odds = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twZF.awayZF.line = ("+" if lineAt == 1 else "-") + lineStr
        eventBuf.twZF.awayZF.odds = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0' 

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
    elif searchItemfromArray(["180002", "180150", "180250", "180350",\
                              "180106", "180110", "180122", "180126", "180191", \
                              "180206", "180210", "180222", "180226", "180291", \
                              "180306", "180310", "180322", "180326", "180391" \
                            ], oddsType) >= 0:
        if oddsType == "180106" or oddsType == "180206" or oddsType == "180306":
            eventBuf.information.league += " - 擊殺英雄總數"

        elif oddsType == "180110" or oddsType == "180210" or oddsType == "180310":
            eventBuf.information.league += " - 摧毀防禦塔總數" 

        elif oddsType == "180122" or oddsType == "180222" or oddsType == "180322":
            eventBuf.information.league += " - 殺死小龍總數" 

        elif oddsType == "180126" or oddsType == "180226" or oddsType == "180326":
            eventBuf.information.league += " - 殺死大龍總數"

        elif oddsType == "180191" or oddsType == "180291" or oddsType == "180391":
            eventBuf.information.league += " - 戰時間(分鐘)"

        elif oddsType == "180150" or oddsType == "180250" or oddsType == "180350":
            eventBuf.information.league += " - 回合總數"                                

        eventBuf.information.league += " - 大小"

        eventBuf.twDS.line = lineStr    
        eventBuf.twDS.over = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.twDS.under = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'   

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
    elif searchItemfromArray(["180003", \
                              "180101", "180171", "180172", "180178", "180180", "180181", \
                              "180201", "180271", "180272", "180278", "180280", "180281", \
                              "180301", "180371", "180372", "180378", "180380", "180381" \
                            ], oddsType) >= 0:
        if oddsType == "180101" or oddsType == "180201" or oddsType == "180301":
            pass 

        elif oddsType == "180171" or oddsType == "180271" or oddsType == "180371":
            eventBuf.information.league += " - 殺死首條小龍"

        elif oddsType == "180172" or oddsType == "180272" or oddsType == "180372":
            eventBuf.information.league += " - 殺死首條大龍"

        elif oddsType == "180178" or oddsType == "180278" or oddsType == "180378":
            eventBuf.information.league += " - 摧毀首個水晶"  

        elif oddsType == "180180" or oddsType == "180280" or oddsType == "180380":
            eventBuf.information.league += " - 摧毀首個防禦塔"         

        elif oddsType == "180181" or oddsType == "180281" or oddsType == "180381":
            eventBuf.information.league += " - 第一滴血"      

        else :    
            eventBuf.information.league += " - 獨贏" 

        eventBuf.de.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.de.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'

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
    elif searchItemfromArray(["180108", "180112", "180124", "180128", \
                              "180208", "180212", "180224", "180228", \
                              "180308", "180312", "180324", "180328", \
                              "180152", "180252", "180352" \
                              ], oddsType) >= 0:
        if oddsType == "180108" or oddsType == "180208" or oddsType == "180308":
            eventBuf.information.league += " - 擊殺英雄總數"

        elif oddsType == "180112" or oddsType == "180212" or oddsType == "180312":
            eventBuf.information.league += " - 摧毀防禦塔總數"    

        elif oddsType == "180124" or oddsType == "180224" or oddsType == "180324":
            eventBuf.information.league += " - 殺死小龍總數" 

        elif oddsType == "180128" or oddsType == "180228" or oddsType == "180328":
            eventBuf.information.league += " - 殺死大龍總數"  

        elif oddsType == "180152" or oddsType == "180252" or oddsType == "180352":
            eventBuf.information.league += " - 回合總數"    

        eventBuf.information.league += " - 單雙"  

        eventBuf.sd.home = str(oddItem[13]) if len(str(oddItem[13])) > 0 else '0'
        eventBuf.sd.away = str(oddItem[15]) if len(str(oddItem[15])) > 0 else '0'            
 
    return eventBuf     