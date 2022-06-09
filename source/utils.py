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
