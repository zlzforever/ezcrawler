//if (!document.getElementById('_______ezcrawler__plugin')) {
//    chrome.runtime.sendMessage(JSON.stringify({
//        command: 'getExtensionId',
//    }), function (response) {
//        var input = document.createElement('input');
//        input.style.display = 'none';
//        input.id = "_______ezcrawler__plugin";
//        input.type="text";
//        input.name = response;
//        input.value = response;
//        document.body.appendChild(input);
//    });
//}

(function (d) {
    function f() {
        this._callbacks = []
    }
    f.prototype.then = function (j, l) {
        var k;
        if (this._isdone) {
            k = j.apply(l, this.result)
        } else {
            k = new f();
            this._callbacks.push(function () {
                var m = j.apply(l, arguments);
                if (m && typeof m.then === "function") {
                    m.then(k.done, k)
                }
            })
        }
        return k
    };
    f.prototype.done = function () {
        this.result = arguments;
        this._isdone = true;
        for (var j = 0; j < this._callbacks.length; j++) {
            this._callbacks[j].apply(null, arguments)
        }
        this._callbacks = []
    };

    function c(j) {
        var n = new f();
        var p = [];
        if (!j || !j.length) {
            n.done(p);
            return n
        }
        var k = 0;
        var m = j.length;

        function l(q) {
            return function () {
                k += 1;
                p[q] = Array.prototype.slice.call(arguments);
                if (k === m) {
                    n.done(p)
                }
            }
        }
        for (var o = 0; o < m; o++) {
            j[o].then(l(o))
        }
        return n
    }

    function b(l, j) {
        var k = new f();
        if (l.length === 0) {
            k.done.apply(k, j)
        } else {
            l[0].apply(null, j).then(function () {
                l.splice(0, 1);
                b(l, arguments).then(function () {
                    k.done.apply(k, arguments)
                })
            })
        }
        return k
    }

    function a(j) {
        var l = "";
        if (typeof j === "string") {
            l = j
        } else {
            var k = encodeURIComponent;
            var m = [];
            for (var n in j) {
                if (j.hasOwnProperty(n)) {
                    m.push(k(n) + "=" + k(j[n]))
                }
            }
            l = m.join("&")
        }
        return l
    }

    function e() {
        var k;
        if (window.XMLHttpRequest) {
            k = new XMLHttpRequest()
        } else {
            if (window.ActiveXObject) {
                try {
                    k = new ActiveXObject("Msxml2.XMLHTTP")
                } catch (j) {
                    k = new ActiveXObject("Microsoft.XMLHTTP")
                }
            }
        }
        return k
    }

    function h(l, m, r, o) {
        var n = new f();
        var k, v;
        r = r || {};
        o = o || {};
        try {
            k = e()
        } catch (j) {
            n.done(i.ENOXHR, "");
            return n
        }
        v = a(r);
        if (l === "GET" && v) {
            m += "?" + v;
            v = null
        }
        k.open(l, m);
        var u = "application/x-www-form-urlencoded";
        for (var t in o) {
            if (o.hasOwnProperty(t)) {
                if (t.toLowerCase() === "content-type") {
                    u = o[t]
                } else {
                    k.setRequestHeader(t, o[t])
                }
            }
        }
        k.setRequestHeader("Content-type", u);

        function s() {
            k.abort();
            n.done(i.ETIMEOUT, "", k)
        }
        var q = i.ajaxTimeout;
        if (q) {
            var p = setTimeout(s, q)
        }
        k.onreadystatechange = function () {
            if (q) {
                clearTimeout(p)
            }
            if (k.readyState === 4) {
                var w = (!k.status || (k.status < 200 || k.status >= 300) && k.status !== 304);
                n.done(w, k.responseText, k)
            }
        };
        k.send(v);
        return n
    }

    function g(j) {
        return function (l, m, k) {
            return h(j, l, m, k)
        }
    }
    var i = {
        Promise: f,
        join: c,
        chain: b,
        ajax: h,
        get: g("GET"),
        post: g("POST"),
        put: g("PUT"),
        del: g("DELETE"),
        ENOXHR: 1,
        ETIMEOUT: 2,
        ajaxTimeout: 0
    };
    if (typeof define === "function" && define.amd) {
        define(function () {
            return i
        })
    } else {
        d.promise = i
    }
})(this);

function __ActionHelper(a, b) {
    var c = this;
    c._actions = a;
    c._pager = b;
    c._evaluator = new XPathEvaluator();
    c._actionFunctions = {
        scroll: function (j) {
            var d = new promise.Promise();
            var h = 200;
            var k = null;
            var l = 0,
                i = 0,
                f = 0;
            if (j.selector) {
                var g = c.__findElement(j);
                if (g) {
                    k = $(g);
                    l = g.scrollHeight - k.height()
                }
            } else {
                k = $(document);
                l = k.height() - $(window).height()
            } if (k.length) {
                i = k.scrollTop();
                l -= i;
                f = parseInt(l / h, 10) + (l % h == 0 ? 0 : 1);
                e()
            } else {
                d.done()
            }

            function e() {
                var m = 100;
                i += h;
                k.scrollTop(i);
                if (--f > 0) {
                    c.__wait(m).then(function () {
                        e()
                    })
                } else {
                    c.__wait(j.delay).then(function () {
                        d.done()
                    })
                }
            }
            return d
        }, click: function (g) {
            var d = g.delay;
            var e = c.__findElement(g);
            if (!e) {
                g._missClick = true;
                console.log("can not find element,miss click...")
            } else {
                var f = $(e);
                if (!f.hasClass("disabled") && !f.hasClass("disable") && !f.attr("disabled")) {
                    e.click();
                    g._missClick = false
                } else {
                    g._missClick = true;
                    console.log("element disabled,miss click..")
                }
            }
            return c.__wait(d)
        }
    };
    c._actionValidators = {
        scroll: function (d) {
            if (d.repeat <= 0) {
                return
            }
            var e = d.selector ? d._element : document.body;
            if (e.scrollHeight != d._lastHeight) {
                d._lastHeight = e.scrollHeight;
                d._missCount = 0
            } else {
                if (++d._missCount >= 3) {
                    d.repeat = 0
                }
            }
        }, click: function (d) {
            if (d._missClick) {
                d.repeat = 0
            }
        }
    };
    c.__doAction = function (k) {
        var g = new promise.Promise();
        var l = document;
        var i = k.repeat == 0;
        var h = k.delay <= 0 ? 800 : (k.delay < 100 ? k.delay * 1000 : k.delay);
        var j = 0;
        var e = 0;
        var f = {
            name: k.name,
            repeat: isNaN(k.repeat) ? 1 : k.repeat,
            delay: h,
            selector: k.selector
        };
        if (c._actionFunctions[f.name]) {
            d(f)
        } else {
            g.done()
        }

        function d(m) {
            c._actionFunctions[m.name](m).then(function () {
                m.repeat--;
                c._actionValidators[m.name](m);
                if (m.repeat <= 0) {
                    if (m._element) {
                        delete m._element
                    }
                    g.done(m)
                } else {
                    d(m)
                }
            })
        }
        return g
    };
    c.__findElement = function (g) {
        var h = g._element;
        if (!h || !$.contains(document.body, h)) {
            var e = c.__getElements(g.selector);
            if (e.length > 0) {
                h = e[0];
                g._element = h
            } else {
                h = null
            }
        }
        if (!h) {
            g._missClick = true
        } else {
            var f = $(h);
            var d = f.offset();
            window.scroll(d.left, d.top)
        }
        return h
    };
    c.__execteScript = function (e) {
        var d = new promise.Promise();
        var h = [];
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            h.push(function (i) {
                var j = i;
                return function () {
                    return c.__doAction(j)
                }
            }(g))
        }
        if (h.length > 0) {
            promise.chain(h).then(function () {
                d.done(null, true)
            })
        } else {
            d.done(null, true)
        }
        return d
    };
    c.__getElements = function (g) {
        var f = [];
        try {
            var d = c._evaluator.evaluate(g, document.documentElement, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
            if (d) {
                var h;
                while (h = d.iterateNext()) {
                    f.push(h)
                }
            }
        } catch (e) {
            console.error(e);
            console.warn("xpath:" + g + ",get no elements!")
        }
        return f
    };
    c.__wait = function (e) {
        e = e || 50;
        var d = new promise.Promise();
        setTimeout(function () {
            d.done()
        }, e);
        return d
    };
    c.__sendMessage = function (d) {
        chrome.runtime.sendMessage(JSON.stringify({
            command: "setHtml",
            data: {
                link: __ezcrawler_Name,
                html: d
            }
        }))
    };
    c.__sendHeartBeats = function () {
        chrome.runtime.sendMessage(JSON.stringify({
            command: "downloaderHeartBeats",
            data: {
                link: __ezcrawler_Name,
                source: c._target
            }
        }))
    };
    c.__showBox = function () {
        var d = $(window).height();
        if (d > window.screen.availHeight) {
            d = document.body.clientHeight
        }
        c._shader.css("width", $(document).width());
        c._shader.css("height", $(document).height());
        c._infoBox.css("left", ($(window).width() / 2 - 100) + "px");
        c._infoBox.css("top", (d / 2 - 125) + "px")
    };
    c.__download = function () {
        if (c._interval) {
            clearInterval(c._interval)
        }
        if (c._msgInterval) {
            clearInterval(c._msgInterval)
        }
        c._msgInterval = setInterval(c.__sendHeartBeats, 5000);
        c._interval = setInterval(c.__showBox, 400);
        setTimeout(c.__downloadInner, __ezcrawler_Delay)
    };
    c.__downloadInner = function () {
        try {
            c.__showRunning();
            c.__execteScript(c._actions).then(function () {
                if (c._shader) {
                    c._shader.remove()
                }
                if (c._infoBox) {
                    c._infoBox.remove()
                }
                var e = document.documentElement.outerHTML;
                c.__showRunning();
                c.__sendMessage(encodeURIComponent(e))
            })
        } catch (d) {
            console.error(d);
            c.__sendMessage("")
        }
    };
    c.pg = function () {
        if (c._interval) {
            clearInterval(c._interval)
        }
        if (c._msgInterval) {
            clearInterval(c._msgInterval)
        }
        if (c._pager) {
            c.__doAction(c._pager).then(function (d) {
                if (d && d._missClick) {
                    c.__sendMessage("")
                } else {
                    chrome.runtime.sendMessage(JSON.stringify({
                        command: "pageOK",
                        data: {}
                    }))
                }
            })
        }
    };
    c.__showRunning = function () {
        try {
            c._shader = $("#__ezcrawler_shader");
            c._infoBox = $("#__ezcrawler_infobox");
            if (!c._shader.length) {
                var h = $(window).height();
                if (h > window.screen.availHeight) {
                    h = document.body.clientHeight
                }
                c._shader = $("<div id=\'__ezcrawler_shader\' style=\'z-index:10000000; display: block; left: 0px; top: 0px; position: absolute; background: rgba(244, 244, 244, 0.64)!important; \'></div>");
                c._infoBox = $("<div id=\'__ezcrawler_infobox\' style=\'padding: 20px !important; z - index:10000001; display: block; position: fixed; \'></div>");
                $(document.body).append(c._infoBox);
                var e = $("<img/>");
                e.attr("src", chrome.extension.getURL("css/Running.gif"));
                c._infoBox.append(e);
                var f = $("<div style=\'text-align:center !important;line-height:50px !important;font-family:Arial !important;font-weight:bold !important;font-size:50px !important;\'>易智采集器</div>");
                c._infoBox.append(f);
                c._shader.css("width", $(document).width());
                c._shader.css("height", $(document).height());
                c._infoBox.css("left", ($(window).width() / 2 - 100) + "px");
                c._infoBox.css("top", (h / 2 - 125) + "px");
                $(document.body).append(c._shader)
            }
        } catch (d) {}
    };
    c.removeMessage = function () {
        chrome.extension.onMessage.removeListener(c.onMessage)
    };
    c.onMessage = function (h, g, f) {
        try {
            var e = JSON.parse(h);
            if (!e || !e.command) {
                return
            }
            console.log("receive command:" + e.command);
            if (e.command == "page") {
                c.pg()
            } else {
                if (e.command == "download") {
                    c.__download()
                } else {
                    if (e.command == "exit") {
                        c.__download = function () {}
                    }
                }
            }
        } catch (d) {}
        f("ok")
    };
    chrome.extension.onMessage.addListener(c.onMessage);
    c.__showRunning();
    if (c._msgInterval) {
        clearInterval(c._msgInterval)
    }
    if (c._interval) {
        clearInterval(c._interval)
    }
};