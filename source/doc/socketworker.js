self.UserToken = "", 
self.SourceType = "", 
self.ReconnectTimer = null, 
self.IsReceiveArray = [], 
self.ManualClose = !0, 
self.TerminateTimer = null, 
self.RequestTimer = null, 
self.HeartBeatAction = "", 
self.HeartBeatTimer = null, 
self.HeartBeatCount = 0, 
self.MsgQueue = [], 
self.QueueLock = !1, 
self.LastDequeue = Date.now(), 
self.UrlSearchRefresh = !1, 
self.LastUrlUpdateTime = 0, 
self.UrlFresh = 0, 
self.MustReceive = [], 
self.NeedInflate = !0, 
importScripts("../pako.min.js"), 
importScripts("../base64js.min.js"), 
importScripts("SocketKit.js"), 
importScripts("XHRKit.js"), 
Object.defineProperty(Error.prototype, "toJSON", {
    value: function() {
        var t = {};
        return Object.getOwnPropertyNames(this).forEach(function(e) {
            t[e] = this[e]
        }, this), t
    },
    configurable: !0,
    writable: !0
}), 
Date.prototype.Format = function(e) {
    var t, s = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        F: this.getMilliseconds()
    };
    for (t in /(y+)/i.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), s) new RegExp("(" + t + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? s[t] : ("00" + s[t]).substr(("" + s[t]).length)));
    return e
}, 
self.onerror = function(e, t, s, a, n) {
    return self.postMessage({
        action: "onLog",
        text: "發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + self.UserToken + "\r\nsource: " + self.SourceType + "\r\n" + JSON.stringify({
            message: e,
            source: t,
            lineno: s,
            colno: a,
            error: n
        })
    }), !0
}, 
self.onmessage = function(e) {
    switch (e.data.action) {
        case "initial":
            self.UserToken = e.data.token, self.SourceType = e.data.source, self.MustReceive = e.data.mustReceive, self.NeedInflate = e.data.needInflate, self.HeartBeatAction = e.data.heartBeatAction;
            break;
        case "connect":
            self.ManualClose = !1, self.LastUrlUpdateTime = e.data.lastUrlUpdateTime || self.LastUrlUpdateTime, self.UrlFresh = e.data.urlFresh || 0, self.SocketConnect(e.data.urlArray, e.data.urlSearch, e.data.keepCount, e.data.isSSL, e.data.protocolData || "BBSocket");
            break;
        case "send":
            self.SendMeaasge(e.data.command);
            break;
        case "next":
            self.MsgDequeue();
            break;
        case "close":
            self.ManualClose = !0, self.SocketClose();
            break;
        case "terminate":
            self.ManualClose = !0, self.SocketClose(), self.CheckTerminate();
            break;
        case "socketSync":
            self.mainSocket.SocketSync(e.data.index, e.data.command)
    }
}, 
self.SocketConnect = function(e, t, s, a, n) {
    self.postMessage({
        action: "onCircuitLog",
        text: "發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + self.UserToken + "\r\nsource: " + self.SourceType + "\r\n\r\nWS Connect Start!!!\r\nurlArray: " + JSON.stringify(e) + "\r\nUrlSearch:" + t + "\r\nLastUrlUpdateTime:" + self.LastUrlUpdateTime
    }), 
    self.ManualClose = !0, 
    self.mainSocket = new BBSocket({
        urlArray: e,
        ssl: a,
        timeout: 5e3,
        failLimit: -1,
        keepCount: s,
        urlSearch: t,
        protocol: [n],
        lastUrlUpdateTime: self.LastUrlUpdateTime,
        onConnect: function(e, t) {
            self.ManualClose = !1, self.HeartBeatTimer || self.SocketHeartBeat(), self.postMessage({
                action: "onConnect",
                socketInfo: {
                    id: e,
                    url: t
                }
            })
        },
        onReceive: function(e, t, s) {
            s = {
                data: e.data,
                socketInfo: {
                    id: t,
                    url: s
                }
            };
            self.ProcessReceive(s)
        },
        onError: function(e, t, s) {},
        onClose: function(e, t, s) {
            self.ProcessClose(e.code, {
                id: t,
                socketInfo: {
                    id: t,
                    url: s
                }
            })
        },
        onReconnect: function(e, t) {
            self.HeartBeatTimer || self.SocketHeartBeat(), self.postMessage({
                action: "onReconnect",
                socketInfo: {
                    id: e,
                    url: t
                }
            })
        },
        onAllSocketDown: function(e) {
            0 == self.ManualClose ? (self.postMessage({
                action: "allSocketDown"
            }), self.postMessage({
                action: "onCircuitLog",
                text: "發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + self.UserToken + "\r\nsource: " + self.SourceType + "\r\n\r\nWS AllSocketDown!!!\r\nurl: [" + e.url + "]"
            }), self.SocketReconnect()) : 0 < self.LastUrlUpdateTime && Date.now() > self.LastUrlUpdateTime && self.mainSocket.finalOpt.onUrlRefresh()
        },
        onUrlRefresh: function() {
            self.UrlSearchRefresh || (self.UrlSearchRefresh = !0, BBXhr({
                url: "/ajax/AjaxConn.aspx",
                type: "POST",
                dataType: "text",
                data: {
                    value: self.SourceType
                },
                error: function() {
                    self.UrlSearchRefresh = !1
                },
                success: function(e) {
                    var t, s;
                    self.IsLogOut(e.data) || ("" != (s = atob(e.data)) && (s = pako.inflate(s, {
                        to: "string"
                    }), t = (s = JSON.parse(s)).UrlSearch, e = s.Protocal || "BBSocket", s = (new Date).getTime() + 6e4 * self.UrlFresh, self.LastUrlUpdateTime = s, self.mainSocket.finalOpt.urlSearch = t, self.mainSocket.finalOpt.protocol = [e], self.mainSocket.finalOpt.lastUrlUpdateTime = s, self.mainSocket.ReconnectTestSpeed(), self.postMessage({
                        action: "onUrlRefresh",
                        urlSearch: t,
                        protocol: e,
                        lastUrlUpdateTime: s
                    })), self.UrlSearchRefresh = !1)
                }
            }))
        }
    }), self.mainSocket.SetTestSpeed(), setTimeout(function() {
        1 == self.ManualClose && (self.postMessage({
            action: "allSocketDown"
        }), self.postMessage({
            action: "onCircuitLog",
            text: "發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + self.UserToken + "\r\nsource: " + self.SourceType + "\r\n\r\n3sec Not First Connected!!!\r\n"
        }))
    }, 3e3)
}, self.ProcessReceive = function(e) {
    self.MsgQueue.push(e), (0 == self.QueueLock || 5e3 < Date.now() - self.LastDequeue) && self.MsgDequeue()
}, self.RemoveMark = function(t) {
    var s = {};
    try {
        for (var e = self.NeedInflate ? pako.inflate(t, {
                to: "string"
            }) : t, e = JSON.parse(e), a = ["type", "sport", "mode", "sn", "group", "stick", "dc", "inv", "mtv", "action"], n = Object.keys(e).sort(function(e, t) {
                return -1 == a.indexOf(e) ? 999 : a.indexOf(e) >= a.indexOf(t) ? 1 : -1
            }).reverse(), o = 0; o < n.length; o++) {
            var r = n[o];
            s[r] = e[r]
        }
    } catch (e) {
        self.postMessage({
            action: "onLog",
            text: "發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + self.UserToken + "\r\nsource: " + self.SourceType + "\r\n" + e + "\r\n\r\n" + base64js.fromByteArray(new Uint8Array(t))
        }), s = {
            action: "fail"
        }
    } finally {
        return s
    }
}, self.MsgDequeue = function() {
    var e, t;
    0 < self.MsgQueue.length ? (self.QueueLock = !0, e = self.MsgQueue.splice(0, 1)[0], t = self.RemoveMark(e.data), 0 <= self.IsReceiveArray.indexOf(t.action) && (clearTimeout(self.RequestTimer), self.IsReceiveArray.splice(self.IsReceiveArray.indexOf(t.action), 1)), self.postMessage({
        action: "onNext",
        data: t,
        socketInfo: e.socketInfo
    }), self.LastDequeue = Date.now()) : (self.QueueLock = !1, self.postMessage("none"))
}, self.SendMeaasge = function(e) {
    self.mainSocket && 0 == self.mainSocket.isAllDown && (self.mainSocket.Send(JSON.stringify(e)), 0 <= self.MustReceive.indexOf(e.action) && (self.IsReceiveArray.indexOf(e.action) < 0 && self.IsReceiveArray.push(e.action), clearTimeout(self.RequestTimer), self.RequestTimer = setTimeout(function() {
        0 < self.IsReceiveArray.length && (self.postMessage({
            action: "onCircuitLog",
            text: "發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + self.UserToken + "\r\nsource: " + self.SourceType + "\r\nReceiveArray: " + self.IsReceiveArray + "\r\n\r\n5sec Not Received!!!"
        }), self.SocketClose())
    }, 5e3)))
}, self.ProcessClose = function(e, t) {
    if (0 == self.ManualClose && 1e3 != e) switch (e) {
        case 1001:
            0;
            break;
        case 1002:
            0;
            break;
        case 1003:
            0;
            break;
        case 1005:
            0;
            break;
        case 1006:
            0;
            break;
        case 1007:
            0;
            break;
        case 1008:
            0;
            break;
        case 1009:
            0;
            break;
        case 1010:
            0;
            break;
        case 1011:
            0;
            break;
        case 1012:
            0;
            break;
        case 1013:
            0;
            break;
        case 1015:
            0;
            break;
        case 9999:
            0;
            break;
        default:
            0
    }
}, self.SocketReconnect = function() {
    clearTimeout(self.RequestTimer), clearTimeout(self.HeartBeatTimer), self.HeartBeatTimer = null, self.SocketClose(), self.postMessage({
        action: "onCircuitLog",
        text: "發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + self.UserToken + "\r\nsource: " + self.SourceType + "\r\n\r\nWS Reconnect Start!!!\r\n\r\nurlArray: " + JSON.stringify(self.mainSocket.finalOpt.urlArray)
    }), self.mainSocket.ReconnectTestSpeed(), clearTimeout(self.ReconnectTimer), self.ReconnectTimer = setTimeout(function() {
        1 == self.mainSocket.isAllDown && self.SocketReconnect()
    }, 3e3)
}, self.SocketHeartBeat = function() {
    self.HeartBeatAction && "string" == typeof self.HeartBeatAction && (self.HeartBeatTimer = setTimeout(function() {
        1 != self.mainSocket.isAllDown && (self.HeartBeatCount++, 5 == self.HeartBeatCount && (self.SendMeaasge({
            action: self.HeartBeatAction
        }), self.HeartBeatCount = 0), self.SocketHeartBeat())
    }, 5e3))
}, self.SocketClose = function() {
    clearTimeout(self.HeartBeatTimer), clearTimeout(self.RequestTimer), self.mainSocket.Close()
}, self.CheckTerminate = function() {
    self.TerminateTimer = setTimeout(function() {
        1 == self.mainSocket.isAllDown ? self.postMessage({
            action: "onTerminate"
        }) : self.CheckTerminate()
    }, 100)
}, self.IsLogOut = function(e) {
    var t = !1;
    try {
        var s = "string" == typeof e ? JSON.parse(e) : e,
            s = parseInt(s.st, 10);
        s < 0 && (self.postMessage({
            action: "onLogOut",
            data: '{"st":"' + s + '"}'
        }), t = !0)
    } catch (e) {}
    return t
};
