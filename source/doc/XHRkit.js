! function() {
    XMLHttpRequest.prototype.cancel = function() {
        var e = this.onload;
        this.onload = function() {
            this.abort(), e()
        }
    }, this.BBXhr = function(e) {
        if ("object" == typeof e) {
            var t, o = new XMLHttpRequest,
                a = "",
                n = !0,
                r = "",
                s = "GET",
                i = "",
                c = "TEXT",
                p = 3e3,
                f = function() {},
                u = function() {},
                d = function() {},
                y = function() {};
            for (t in e) 0 != e.hasOwnProperty(t) && ("async" == t.toLowerCase() && "boolean" == typeof e[t] && (n = e[t]), "url" == t.toLowerCase() && "string" == typeof e[t] && e[t] && (r = e[t]), "type" == t.toLowerCase() && "string" == typeof e[t] && ("post" == e[t].toLowerCase() ? s = "POST" : "put" == e[t].toLowerCase() ? s = "PUT" : "head" == e[t].toLowerCase() ? s = "HEAD" : "delete" == e[t].toLowerCase() ? s = "DELETE" : "connect" == e[t].toLowerCase() ? s = "CONNECT" : "options" == e[t].toLowerCase() ? s = "OPTIONS" : "trace" == e[t].toLowerCase() && (s = "TRACE")), "datatype" == t.toLowerCase() && "string" == typeof e[t] && "text" != e[t].toLowerCase() && (c = "JSON"), "timeout" == t.toLowerCase() && "number" == typeof e[t] && 0 < e[t] && (p = e[t]), "beforesend" == t.toLowerCase() && "function" == typeof e[t] && (f = e[t]), "success" == t.toLowerCase() && "function" == typeof e[t] && (u = e[t]), "complete" == t.toLowerCase() && "function" == typeof e[t] && (d = e[t]), "error" == t.toLowerCase() && "function" == typeof e[t] && (y = e[t]), 0 <= ["id", "data", "contenttype", "cache", "authorization"].indexOf(t.toLowerCase()) && (e[t.toLowerCase()] = e[t], t.toLowerCase() != t && delete e[t]));
            if (a = e.id || Date.now() + function(e) {
                    for (var t = "", o = 0; o < e; o++) t += String.fromCharCode(65 + Math.ceil(25 * Math.random()));
                    return t
                }(4), o.open(s, r, n), o.setRequestHeader("Accept", "application/json, text/javascript, text/plain, */*; q=0.01"), e.contenttype && "string" == typeof e.contenttype ? o.setRequestHeader("Content-type", e.contenttype) : o.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8"), e.cache && "boolean" == typeof e.cache && (o.setRequestHeader("Cache-Control", "no-cache, must-revalidate, post-check=0, pre-check=0"), o.setRequestHeader("Cache-Control", "max-age=0"), o.setRequestHeader("expires", "0"), o.setRequestHeader("expires", "Tue, 01 Jan 1980 1:00:00 GMT"), o.setRequestHeader("pragma", "no-cache"), o.setRequestHeader("If-Modified-Since", "0")), e.authorization && "string" == typeof e.authorization && o.setRequestHeader("Authorization", e.authorization), e.data)
                if ("string" == typeof e.data) i = e.data;
                else if ("object" == typeof e.data)
                if (e.contenttype && 0 <= e.contenttype.indexOf("application/json; charset=UTF-8")) i = JSON.stringify(e.data);
                else {
                    for (var C in e.data) 0 < i.length && (i += "&"), i += C + "=" + e.data[C];
                    "GET" == s && (r += "?" + i)
                } return n && (o.timeout = p), o.onerror = function(e) {
                y({
                    id: a,
                    target: o,
                    event: e
                })
            }, o.onload = function(e) {
                if (0 == o.status) d({
                    id: a,
                    target: o,
                    event: e
                });
                else if (200 == o.status) {
                    var t = o.responseText;
                    if ("JSON" == c) try {
                        t = JSON.parse(o.responseText)
                    } catch (e) {}
                    u({
                        id: a,
                        target: o,
                        event: e,
                        data: t
                    }), d({
                        id: a,
                        target: o,
                        event: e
                    })
                } else y({
                    id: a,
                    target: o,
                    event: e
                })
            }, o.ontimeout = function(e) {
                y({
                    id: a,
                    target: o,
                    event: e
                })
            }, f(), setTimeout(function() {
                1 == o.readyState && 0 == o.status && o.send(i)
            }, 50), o
        }
    }
}();
