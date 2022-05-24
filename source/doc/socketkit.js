! function() {
    this.BBSocket = function(t) {
        var e, o = {
            urlArray: [],
            urlSearch: "",
            ssl: !1,
            timeout: 5e3,
            failLimit: 5,
            keepCount: 1,
            lastUrlUpdateTime: 0,
            protocol: [],
            onConnect: function(t, e) {},
            onReceive: function(t, e, o) {},
            onError: function(t, e, o) {},
            onClose: function(t, e, o) {},
            onReconnect: function(t, e) {},
            onAllSocketDown: function() {},
            onUrlRefresh: function() {}
        };
        for (e in this.finalOpt = {}, o) o.hasOwnProperty(e) && (this.finalOpt[e] = o[e]);
        for (e in t) t.hasOwnProperty(e) && (this.finalOpt[e] = t[e]);
        this.finalOpt.keepCount > this.finalOpt.urlArray.length && (this.finalOpt.keepCount = this.finalOpt.urlArray.length)
    }, BBSocket.prototype = {
        socketArray: [],
        aliveCount: 0,
        primarySocket: {},
        isAllDown: !0,
        TestDownTimer: null,
        TestAllDown: function() {
            var t = this;
            clearTimeout(t.TestDownTimer);
            var e, o = 0,
                i = {
                    id: [],
                    url: []
                };
            for (e in t.primarySocket) t.primarySocket.hasOwnProperty(e) && (i.id.push(e), i.url.push(t.primarySocket[e].url), 1 == t.primarySocket[e].socket.readyState ? o++ : (t.primarySocket[e].socket.close(), delete t.primarySocket[e]));
            t.aliveCount = o, t.isAllDown = !(0 < o), t.isAllDown && "function" == typeof t.finalOpt.onAllSocketDown ? t.finalOpt.onAllSocketDown({
                id: i.id.join(", "),
                url: i.url.join(", ")
            }) : t.TestDownTimer = setTimeout(function() {
                t.TestAllDown()
            }, 1e3)
        },
        SetTestSpeed: function() {
            this.socketArray = [];
            for (var t = 0; t < this.finalOpt.urlArray.length; t++) {
                var e = {
                    index: Date.now() + this.GetRanStr(4),
                    failCount: 0,
                    socket: null,
                    timer: null,
                    url: this.finalOpt.urlArray[t],
                    search: this.finalOpt.urlSearch,
                    reconnect: !1
                };
                if (this.socketArray.push(e), this.TestSpeed(e)) break
            }
        },
        ReconnectProcess: function() {
            this.ReconnectTestSpeed()
        },
        ReconnectTestSpeed: function() {
            for (var t = 0; t < this.socketArray.length; t++) {
                var e = this.socketArray[t];
                if (null == e.timer) {
                    if (e.socket && 1 != e.socket.readyState) e.socket.close();
                    else if (e.socket) continue;
                    this.primarySocket.hasOwnProperty(e.index) && (delete this.primarySocket[e.index], this.aliveCount--);
                    e = {
                        index: Date.now() + this.GetRanStr(4),
                        failCount: 0,
                        socket: null,
                        timer: null,
                        url: this.socketArray[t].url,
                        search: this.finalOpt.urlSearch,
                        reconnect: !0
                    };
                    if (this.socketArray[t] = e, this.TestSpeed(e)) break
                }
            }
        },
        TestSpeed: function(e) {
            var o = this;
            return "function" == typeof this.finalOpt.onUrlRefresh && 0 < this.finalOpt.lastUrlUpdateTime && Date.now() > this.finalOpt.lastUrlUpdateTime ? (this.finalOpt.onUrlRefresh(), !0) : (o.finalOpt.ssl ? e.socket = new WebSocket("wss://" + e.url + e.search, o.finalOpt.protocol) : e.socket = new WebSocket("ws://" + e.url + e.search, o.finalOpt.protocol), e.socket.binaryType = "arraybuffer", clearTimeout(e.timer), e.timer = setTimeout(function() {
                e.failCount++, e.socket.close(), o.aliveCount < o.finalOpt.keepCount && 1 != e.socket.readyState && (e.failCount < o.finalOpt.failLimit || -1 == o.finalOpt.failLimit) ? (e.search = o.finalOpt.urlSearch, o.TestSpeed(e)) : e.timer = null
            }, o.finalOpt.timeout), e.socket.onopen = function() {
                o.aliveCount < o.finalOpt.keepCount ? (clearTimeout(e.timer), e.timer = null, o.primarySocket[e.index] = e, o.aliveCount++, o.isAllDown = !1, o.aliveCount >= o.finalOpt.keepCount && o.StopTest(), (1 < o.aliveCount || 1 == e.reconnect) && "function" == typeof o.finalOpt.onReconnect ? o.finalOpt.onReconnect(e.index, e.socket.url) : "function" == typeof o.finalOpt.onConnect && o.finalOpt.onConnect(e.index, e.socket.url)) : e.socket.close(), o.TestAllDown()
            }, e.socket.onmessage = function(t) {
                o.primarySocket[e.index] && "function" == typeof o.finalOpt.onReceive && o.finalOpt.onReceive(t, e.index, e.socket.url)
            }, e.socket.onerror = function(t) {
                o.primarySocket[e.index] && "function" == typeof o.finalOpt.onError && o.finalOpt.onError(t, e.index, e.socket.url)
            }, !(e.socket.onclose = function(t) {
                o.primarySocket[e.index] && "function" == typeof o.finalOpt.onClose && o.finalOpt.onClose(t, e.index, e.socket.url), o.TestAllDown()
            }))
        },
        StopTest: function() {
            for (var t = 0; t < this.socketArray.length; t++) this.socketArray[t].socket && 1 != this.socketArray[t].socket.readyState && (clearTimeout(this.socketArray[t].timer), this.socketArray[t].socket.close())
        },
        Send: function(t) {
            for (var e in this.primarySocket)
                if (this.primarySocket.hasOwnProperty(e) && this.primarySocket[e] && 1 == this.primarySocket[e].socket.readyState) try {
                    this.primarySocket[e].socket.send(t)
                } catch (t) {
                    this.primarySocket[e].socket.close(), delete this.primarySocket[e]
                }
            this.aliveCount != this.finalOpt.keepCount && this.ReconnectProcess()
        },
        Close: function() {
            for (var t in this.primarySocket) this.primarySocket.hasOwnProperty(t) && this.primarySocket[t] && 1 == this.primarySocket[t].socket.readyState && (this.primarySocket[t].socket.close(), delete this.primarySocket[t]);
            this.aliveCount = 0, this.isAllDown = !0
        },
        SocketSync: function(e, t) {
            if (this.primarySocket[e] && 1 == this.primarySocket[e].socket.readyState) try {
                for (var o = 0; o < t.length; o++) this.primarySocket[e].socket.send(t[o])
            } catch (t) {
                this.primarySocket[e].socket.close(), delete this.primarySocket[e]
            }
        },
        GetRanStr: function(t) {
            for (var e = "", o = 0; o < t; o++) e += String.fromCharCode(65 + Math.ceil(25 * Math.random()));
            return e
        }
    }
}();
