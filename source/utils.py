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