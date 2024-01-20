(function(t) {
    function e(e) {
        for (var i, r, s = e[0], c = e[1], l = e[2], u = 0, h = []; u < s.length; u++) r = s[u], Object.prototype.hasOwnProperty.call(a, r) && a[r] && h.push(a[r][0]), a[r] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        p && p(e);
        while (h.length) h.shift()();
        return o.push.apply(o, l || []), n()
    }

    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], i = !0, r = 1; r < n.length; r++) {
                var s = n[r];
                0 !== a[s] && (i = !1)
            }
            i && (o.splice(e--, 1), t = c(c.s = n[0]))
        }
        return t
    }
    var i = {},
        r = {
            app: 0
        },
        a = {
            app: 0
        },
        o = [];

    function s(t) {
        return c.p + "js/" + ({
            "Multichain-index": "Multichain-index"
        }[t] || t) + "." + {
            "Multichain-index": "0cdbf964"
        }[t] + ".js"
    }

    function c(e) {
        if (i[e]) return i[e].exports;
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }
    c.e = function(t) {
        var e = [],
            n = {
                "Multichain-index": 1
            };
        r[t] ? e.push(r[t]) : 0 !== r[t] && n[t] && e.push(r[t] = new Promise((function(e, n) {
            for (var i = "css/" + ({
                    "Multichain-index": "Multichain-index"
                }[t] || t) + "." + {
                    "Multichain-index": "1bb7491d"
                }[t] + ".css", a = c.p + i, o = document.getElementsByTagName("link"), s = 0; s < o.length; s++) {
                var l = o[s],
                    u = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (u === i || u === a)) return e()
            }
            var h = document.getElementsByTagName("style");
            for (s = 0; s < h.length; s++) {
                l = h[s], u = l.getAttribute("data-href");
                if (u === i || u === a) return e()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet", p.type = "text/css", p.onload = e, p.onerror = function(e) {
                var i = e && e.target && e.target.src || a,
                    o = new Error("Loading CSS chunk " + t + " failed.\n(" + i + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = i, delete r[t], p.parentNode.removeChild(p), n(o)
            }, p.href = a;
            var d = document.getElementsByTagName("head")[0];
            d.appendChild(p)
        })).then((function() {
            r[t] = 0
        })));
        var i = a[t];
        if (0 !== i)
            if (i) e.push(i[2]);
            else {
                var o = new Promise((function(e, n) {
                    i = a[t] = [e, n]
                }));
                e.push(i[2] = o);
                var l, u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, c.nc && u.setAttribute("nonce", c.nc), u.src = s(t);
                var h = new Error;
                l = function(e) {
                    u.onerror = u.onload = null, clearTimeout(p);
                    var n = a[t];
                    if (0 !== n) {
                        if (n) {
                            var i = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src;
                            h.message = "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")", h.name = "ChunkLoadError", h.type = i, h.request = r, n[1](h)
                        }
                        a[t] = void 0
                    }
                };
                var p = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: u
                    })
                }), 12e4);
                u.onerror = u.onload = l, document.head.appendChild(u)
            }
        return Promise.all(e)
    }, c.m = t, c.c = i, c.d = function(t, e, n) {
        c.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, c.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, c.t = function(t, e) {
        if (1 & e && (t = c(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) c.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, c.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return c.d(e, "a", e), e
    }, c.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, c.p = "/", c.oe = function(t) {
        throw t
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = l.push.bind(l);
    l.push = e, l = l.slice();
    for (var h = 0; h < l.length; h++) e(l[h]);
    var p = u;
    o.push([0, "chunk-vendors"]), n()
})({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "0959": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAABTCAYAAACh8UiXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3RUNDMThEMzk1OTExRUQ4Qzg2Q0Q0MTNERkVCMDdGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3RUNDMThFMzk1OTExRUQ4Qzg2Q0Q0MTNERkVCMDdGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDdFQ0MxOEIzOTU5MTFFRDhDODZDRDQxM0RGRUIwN0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDdFQ0MxOEMzOTU5MTFFRDhDODZDRDQxM0RGRUIwN0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz61foLoAAACJElEQVR42uycQZLDMAgEg4r/f5mtPewtTuKsJc3gnrPtAkaNRDlxVNVDVEeBxc1jeas0MPHZdSESVymanAYmOknC5LEp8TJZECWQqyypJdgNdrXwcDa1DCjavdDCxdSOe+Vsgy81d1DXfhpQajXOLTcVQ0XqR/ul/UKpA60DQ/sZS/ul/UKpA62QCqlQ6kArpEIqlDrQCqmQCqUOtEIqpEKpA62QCqmom6m0XpMWDKk3JhVKjWiFVA5KqIuptF6zFgyptF/UwVRar2ELhtSGSuHYQrBrhEMXS8HWG2IFDVGDDz+TMMTp/O913eKxO/3G5Ovd47EzNRbf5xYPcypz6v5DUmy+Xz2e0/MqpN6IVBdKXWZs9tSNRQxIRZiK9pnq+Gbmzm+TSo3Uaro4So1UxJ7arvUWplJEuXyGeSHqJvHYtt8SK2A5Gqq4p5ZYAcvN0F8p/kbp1YeNi3g8Te0+wzLSIExFmIqpCFMRpiJMRZiKqQhTEaai7qZ2/jH3ttxSpAB/KnMjHwq55EFwq99XhqnBCq/j4lNSY3GAz95Zqhocb3LYvnXlBzeuDPbohfTO1hYfxixzFskTD1AwdyYt8WWMcgfLPPlA9T8jx+L4SrEW44uHdx1DnA5jU+bU2eZG14KvqHFelBTfMBRaKGP3qjKm9Op4L6vhmJBg3MjQK+K+fCvLyUnSljcs4FwYeDWl9MyIsyTH3LQyq5mhr4xdntuPAAMANTZyv4OPirIAAAAASUVORK5CYII="
    },
    "119b": function(t, e, n) {
        t.exports = n.p + "img/coingecko-white.7f8e81e6.png"
    },
    "139c": function(t, e, n) {
        t.exports = n.p + "img/github-white.66fb82f8.png"
    },
    "309f": function(t, e, n) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("e623"), n("e379"), n("5dc8"), n("37e1");
        var i = n("2b0e"),
            r = n("bc3a"),
            a = n.n(r),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t.isRefresh ? n("router-view") : t._e()], 1)
            },
            s = [],
            c = n("5530"),
            l = (n("a9e3"), n("2f62")),
            u = {
                name: "App",
                data: function() {
                    return {
                        isRefresh: !0
                    }
                },
                computed: {
                    isDark: function() {
                        return this.$store.state.isDark
                    }
                },
                watch: {
                    isDark: function() {
                        this.refersh(), this.toggleTheme(this.isDark)
                    }
                },
                created: function() {
                    this.toggleTheme(this.isDark)
                },
                mounted: function() {
                    this.getBridgeData()
                },
                methods: Object(c["a"])(Object(c["a"])({}, Object(l["b"])(["getBridgeData"])), {}, {
                    toggleTheme: function(t) {
                        window.document.documentElement.setAttribute("data-theme", Number(t) ? "dark" : "light")
                    },
                    refersh: function() {
                        var t = this;
                        this.isRefresh = !1, this.$nextTick((function() {
                            t.isRefresh = !0
                        }))
                    }
                })
            },
            h = u,
            p = (n("5c0b"), n("2877")),
            d = Object(p["a"])(h, o, s, !1, null, null, null),
            m = d.exports,
            g = n("8c4f"),
            f = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "contentBg"
                }, [n("HeaderWrapper"), n("router-view"), n("FooterWrapper")], 1)
            },
            A = [],
            b = n("d276"),
            v = n("f21d"),
            E = {
                name: "Main",
                components: {
                    HeaderWrapper: b["a"],
                    FooterWrapper: v["a"]
                },
                data: function() {
                    return {}
                }
            },
            w = E,
            y = Object(p["a"])(w, f, A, !1, null, null, null),
            C = (y.exports, g["a"].prototype.push);
        g["a"].prototype.push = function(t) {
            return C.call(this, t).catch((function(t) {
                return t
            }))
        }, i["default"].use(g["a"]);
        var D = [{
                path: "/",
                component: function(t) {
                    return n.e("Multichain-index").then(function() {
                        return t(n("16c0"))
                    }.bind(null, n)).catch(n.oe)
                }
            }],
            N = new g["a"]({
                mode: "history",
                base: "/",
                routes: D
            }),
            M = N;

        function R(t, e, n) {
            var i = "",
                r = "";
            return i = t ? localStorage : sessionStorage, r = i.getItem(e) ? i.getItem(e) : n, r
        }

        function x(t, e, n) {
            var i = "";
            i = t ? localStorage : sessionStorage, i.setItem(e, n)
        }
        n("d3b7");
        var U = {
            bridgeApi: "https://scanapi.multichain.org",
            netapi: "https://netapi.anyswap.net",
            enterApp: "https://app.multichain.org",
            explorerUrl: "https://scan.multichain.org",
            docUrl: "https://docs.multichain.org/",
            github: "https://github.com/anyswap",
            telegram: "https://t.me/anyswap",
            medium: "https://medium.com/multichainorg",
            twitter: "https://twitter.com/MultichainOrg",
            coinmarketcap: "https://coinmarketcap.com/currencies/multichain/",
            coingecko: "https://www.coingecko.com/en/coins/multichain",
            multidao: "https://discord.gg/sxqcWn7std",
            anyCall: "https://anycall.multichain.org/"
        };

        function I() {
            return new Promise((function(t) {
                a.a.all([a.a.get(U.bridgeApi + "/data/stats"), a.a.get(U.bridgeApi + "/data/stats/stable"), a.a.get(U.bridgeApi + "/data/bridgeChainInfo"), a.a.get(U.netapi + "/bridge/v2/info")]).then((function(e) {
                    t(e)
                }))
            }))
        }
        i["default"].use(l["a"]);
        var k = "ISDARK",
            S = new l["a"].Store({
                state: {
                    isDark: R(1, k, 1),
                    bridgeData: ""
                },
                mutations: {
                    setIsDark: function(t, e) {
                        t.isDark = e, x(1, k, e)
                    },
                    setBridgeData: function(t, e) {
                        t.bridgeData = e
                    }
                },
                actions: {
                    getBridgeData: function(t) {
                        var e = t.commit;
                        I().then((function(t) {
                            e("setBridgeData", {
                                stats: t[0],
                                stable: t[1],
                                chainlist: t[2],
                                tokenlist: t[3]
                            })
                        }))
                    }
                },
                modules: {}
            }),
            Q = n("3835"),
            B = (n("b680"), n("25f0"), n("ac1f"), n("1276"), n("5319"), n("99af"), n("466d"), n("4d90"), n("843c"), n("38cf"), n("e7ea")),
            G = Object(c["a"])(Object(c["a"])({}, U), {}, {
                smallToBigSort: function(t) {
                    var e = t.length;
                    return function(n, i) {
                        var r = 0,
                            a = function a() {
                                var o = t[r];
                                r++;
                                var s = n[o],
                                    c = i[o];
                                return s < c ? -1 : s > c ? 1 : s === c ? r === e ? 0 : a() : void 0
                            };
                        return a()
                    }
                },
                bigToSmallSort: function(t) {
                    var e = t.length;
                    return function(n, i) {
                        var r = 0,
                            a = function a() {
                                var o = t[r];
                                r++;
                                var s = n[o],
                                    c = i[o];
                                return s < c ? 1 : s > c ? -1 : s === c ? r === e ? 0 : a() : void 0
                            };
                        return a()
                    }
                },
                thousandBit: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    if (!Number(t)) return "0.00";
                    if (Number(t) < 1e-8) return "<0.00000001";
                    if (Number(t) < .01) return Number(t).toFixed(6);
                    if (Number(t) < 1) return Number(t).toFixed(4);
                    if (Number(t) < 1e3) return isNaN(e) ? t : Number(t).toFixed(e);
                    var n = t = Number(t);
                    if (isNaN(t)) t = 0, t = t.toFixed(e);
                    else if (isNaN(e))
                        if (-1 === t.toString().indexOf(".")) t = Number(t).toLocaleString();
                        else {
                            var i = t.toString().split(".");
                            i[1] = i[1].length > 9 ? i[1].substr(0, 8) : i[1], t = Number(i[0]).toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toLocaleString(), t = t.toString().split(".")[0] + "." + i[1]
                        }
                    else t = t.toFixed(e).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toLocaleString();
                    return n < 0 && t.toString().indexOf("-") < 0 && (t = "-" + t), t
                },
                toMillion: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    return t = Number(t), t >= 1e3 && t < 1e6 ? (t /= Math.pow(10, 3), t = this.thousandBit(t, e), t += " K") : t >= 1e6 && t < 1e9 ? (t /= Math.pow(10, 6), t = this.thousandBit(t, e), t += " M") : t >= 1e9 ? (t /= Math.pow(10, 9), t = this.thousandBit(t, e), t += " B") : t = this.thousandBit(t, e), t
                },
                fromWei: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
                        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    if (!t) return "0";
                    if (t = B["ethers"].utils.bigNumberify(t.toString()), n = Math.min(n, e), e > 18 || n > 18 || n > e) throw Error("Invalid combination of baseDecimals '".concat(e, "' and displayDecimals '").concat(n, "."));
                    if (t) {
                        if (t.isZero()) return "0";
                        var r = B["ethers"].utils.bigNumberify(10).pow(B["ethers"].utils.bigNumberify(e)),
                            a = r.div(B["ethers"].utils.bigNumberify(10).pow(B["ethers"].utils.bigNumberify(n)));
                        if (t.lt(a)) return i ? "<".concat(B["ethers"].utils.formatUnits(a, e)) : "".concat(B["ethers"].utils.formatUnits(t, e));
                        var o = B["ethers"].utils.formatUnits(t, e);
                        if (o.match(/\./)) {
                            var s = o.split("."),
                                c = Object(Q["a"])(s, 2),
                                l = c[0],
                                u = c[1],
                                h = B["ethers"].utils.bigNumberify(u.padEnd(e, "0")).toString().padStart(e, "0").substring(0, n);
                            return h === "0".repeat(n) ? l : "".concat(l, ".").concat(h.toString().replace(/0*$/, ""))
                        }
                        return o
                    }
                }
            }),
            T = (n("0fae"), n("e05f"), n("7340"), n("5c96")),
            O = n.n(T);
        i["default"].use(O.a), i["default"].config.productionTip = !1, i["default"].prototype.$axios = a.a, i["default"].prototype.$$ = G, i["default"].prototype.toUrl = function(t, e) {
            this.$router.push({
                path: t,
                query: e
            })
        }, i["default"].prototype.msgError = function(t) {
            t && t.error && (t = t.error), this.$message({
                showClose: !0,
                message: t,
                type: "error",
                customClass: "mzindex"
            })
        }, i["default"].prototype.msgSuccess = function(t) {
            this.$message({
                showClose: !0,
                message: t,
                type: "success",
                customClass: "mzindex"
            })
        }, i["default"].prototype.msgWarning = function(t) {
            this.$message({
                showClose: !0,
                message: t,
                type: "warning",
                customClass: "mzindex"
            })
        }, new i["default"]({
            router: M,
            store: S,
            render: function(t) {
                return t(m)
            }
        }).$mount("#app")
    },
    "5c0b": function(t, e, n) {
        "use strict";
        n("9c0c")
    },
    7340: function(t, e, n) {},
    "7a90": function(t, e, n) {
        "use strict";
        n("a07c")
    },
    "9c0c": function(t, e, n) {},
    a07c: function(t, e, n) {},
    b6fa: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACrCAYAAAD2KgcnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhEMDRFQ0I4MEFENTExRUJBRjA4RTE1NEM2RDQ1Nzc4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhEMDRFQ0I5MEFENTExRUJBRjA4RTE1NEM2RDQ1Nzc4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEQwNEVDQjYwQUQ1MTFFQkFGMDhFMTU0QzZENDU3NzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEQwNEVDQjcwQUQ1MTFFQkFGMDhFMTU0QzZENDU3NzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Z+NtzAAAFT0lEQVR42uyd0ZIqMQhEhcr//zL7uvfWajk6CTScft1aDXBoknEcLSIe6KlOJsdI93MtUpAC5bvvD7yA+gjBNRqgAqZaDAaowAm0gAqgQDsbVC5f/JsHA1QABVhABVCA7QEqgA4EdgEowCrIgXQ0sAGoA5PJXn8mqACKIZQGFRfFHMqDCqAYRelTvxqgNiDWqHRlYAHpNiCvvmYAa11QYwCYn753AGsNUGM4mFfWVuXbBzYJ1ABOWWjT3NUHQWqPHncSZceRUsM1ANKud79nuuxxZ/XGkNpjzveKMmKNbqAGgLadHtEF1ADQ9u4a6qAGgI4BNlRBPQkpqpGjUAQVF52Zr1ACNQ4kHdXNXSiACqS4a3lHBVLcdRsLLgAp+1FgLX+YAlBgvQ3UAFJg3c2HAylSyLkDKTqQ+8gEFUiB9RisntUhQMo2YDeoQAqsx13V6V6kUBs/1REIWL9hyOlYpACr7+4EIEVZhykgxVWPu6rveFEErB0cFTdFlw1w3flijSANGu5l3McnrNPUHzfm5Cdj2+l8+01F6+Cmn4LH/r2RoypAmvn/uOoXoE5JPo4oYEDeKRiAnzf6cdMesZ048NmJWiyRIFQgzXzefVz42+jv9aNc58xs0u2u6huDmOamanHwo73sS0fGYYqg8nm+DqShEJsPO+1Hg/cI0bww+nHS/uPflRY7fG8ag/ITr0DtfvGb9Qu7qissknGPnEIjhVw5iWf9CrE7CQFShX2qV14cboQm7VFxU0Cl0Kz9zIR1IEUKtfSK3UNh0F+OGhQasUdFNBmgcoCacqByIEVTHJWDFE3G6KfQmEYHUNUf106TvZkjTv00GY5KoRn5gMrI5zDFAYpJAKgUmrUz+hn5gMrIx00BdcTI5xdUGP00GY5KoRn5BWo30VEZ+TgqhcZNZ4LKAQpjGDf6jSbDUXEjRv7W2H0IpIx88To6RcFNGf3s7TLWbh3r2P0whRs1mZJOgmiywnW036BaU0hx05x6bDEbLwrZdEhVzWMbBy7evYz8/aBHUg2tGqiMfO1twJFfqV7UgJGvMPU8ORDclH36W2v3RgU28QLTZEUPUxyg9kNqXXLhTSDFjZo3rBcHcAKkRn6ujf5TATHymQSXc+GHQWTk0xAfrY/v9ecV1oD1/XX5wWBw0/y1m2oeXATKCY43DdZL6zg1+jlA1QLF1N7fNwYRDUa+NYRUcvuhdpgy4fe0ovk0hffaDSq/Pa+x37XqzbBevDh37X+fExNtxqhWK+5H/awA0QjQd9afHu+62UE6n5Q7gSgXr5MkpCAHEtQBVNwUyYAKLAhHpUHQnaBySxrCURG6E9STnwkjVNpRgRTdAiogofGOShOgW0EFKCTjqDtg5esq6Kmq3eYXOHapWpSZpt/sUe1ggtA5OF89mDey6vPtYQpYeztomfrcceoH1lmQptRn2s+gI9Ec3wXq7kcBAWxNSEMN1BMnQmAdnM+7Rz+w6pzsH5NBBVZcdIuWeML5cGBIc+869fOYdSCVAPU0rADbPC+7r6MahWntotYF1Ix95GRg28bu3TpvKLAZsR6t6TocWCQVseMVgswmPJ5L7x5gQ4eNaZCedtT/A43EQldoHBX3LGE0KznoKAaAAWfJaZj+yVS1R7Bnglt1W1KieVeRRFQtUmwontI+ucyEWcUSolLECZe9Su3feaQP+qsG5ergJAopGAUP8kUS5uAkEEgVFukkExdV0BLsfG7lG9j0SzjRADtoKq0GiQfYAdum1agQANt4X7+aFiYAtJdW82IFcAIqLgucgHqgsAGcgAq4gAmoB6EIoKyhHwEGANhZPK4QhHS9AAAAAElFTkSuQmCC"
    },
    ba83a: function(t, e, n) {
        t.exports = n.p + "img/twitter-white.465e6ec8.svg"
    },
    c44a: function(t, e, n) {
        "use strict";
        n("f4c6")
    },
    ca79: function(t, e, n) {
        "use strict";
        n("309f")
    },
    ce83: function(t, e, n) {
        t.exports = n.p + "img/medium-white.44739b39.svg"
    },
    d276: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "header-box"
                }, [i("div", {
                    staticClass: "container-md HH100 flex-bc"
                }, [i("div", {
                    staticClass: "header-nav flex-sc"
                }, [i("div", {
                    staticClass: "logo cursorP",
                    on: {
                        click: function(e) {
                            return t.toUrl("/")
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: n("d939")
                    }
                })])]), i("div", {
                    staticClass: "header-right flex-ec"
                }, [i("el-menu", {
                    staticClass: "nav-box hidden-sm-and-down",
                    attrs: {
                        "default-active": t.activeIndex,
                        mode: "horizontal"
                    },
                    on: {
                        select: t.handleSelect
                    }
                }, t._l(t.navList, (function(e, n) {
                    return i("el-menu-item", {
                        key: n,
                        attrs: {
                            index: n.toString()
                        }
                    }, [t._v(t._s(e.name))])
                })), 1), i("div", {
                    staticClass: "is-dark",
                    on: {
                        click: t.changeTheme
                    }
                }, [t.isDark ? i("img", {
                    attrs: {
                        src: n("dbd8")
                    }
                }) : i("img", {
                    attrs: {
                        src: n("ff7b")
                    }
                })]), i("el-button", {
                    staticClass: "btn-radius10 IH35 font16 plr15 pt-0 pb-0 btn-default",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function(e) {
                            return t.openUrl(t.appUrl)
                        }
                    }
                }, [t._v("Enter App")]), i("div", {
                    staticClass: "nav-menu flex-c hidden-md-and-up"
                }, [i("el-dropdown", {
                    attrs: {
                        trigger: "click"
                    },
                    on: {
                        command: t.handleCommand
                    }
                }, [i("span", {
                    staticClass: "el-dropdown-link flex-c"
                }, [i("i", {
                    staticClass: "line"
                }), i("i", {
                    staticClass: "line"
                }), i("i", {
                    staticClass: "line"
                })]), i("el-dropdown-menu", {
                    staticClass: "nav-list",
                    attrs: {
                        slot: "dropdown"
                    },
                    slot: "dropdown"
                }, t._l(t.navList, (function(e, n) {
                    return i("el-dropdown-item", {
                        key: n,
                        attrs: {
                            command: n
                        }
                    }, [t._v(t._s(e.name))])
                })), 1)], 1)], 1)], 1)])])
            },
            r = [],
            a = (n("a9e3"), n("d3b7"), n("25f0"), function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "top-tip-box",
                    class: t.isOpenChangeBrand ? "" : "block"
                }, [t._m(0), n("i", {
                    staticClass: "icon el-icon-close",
                    on: {
                        click: function(e) {
                            return t.closeTopTip()
                        }
                    }
                })])
            }),
            o = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "top-tip-content container"
                }, [t._v(" [Warning] Please visit link ("), n("a", {
                    attrs: {
                        href: "https://app.multichain.org/#/approvals",
                        target: "_blank"
                    }
                }, [t._v("https://app.multichain.org/#/approvals")]), t._v(") to confirm approvals asap. Details: "), n("a", {
                    attrs: {
                        href: "https://app.multichain.org/#/approvals",
                        target: "_blank"
                    }
                }, [t._v("medium")]), t._v(". ")])
            }],
            s = "CHANGE_BRAND_TIP",
            c = {
                name: "Main",
                data: function() {
                    return {
                        isOpenChangeBrand: !1
                    }
                },
                mounted: function() {
                    this.isOpenChangeBrand = localStorage.getItem(s)
                },
                methods: {
                    closeTopTip: function() {
                        this.isOpenChangeBrand = !0, localStorage.setItem(s, !0)
                    }
                }
            },
            l = c,
            u = (n("ca79"), n("2877")),
            h = Object(u["a"])(l, a, o, !1, null, null, null),
            p = h.exports,
            d = {
                name: "Headers",
                data: function() {
                    return {
                        activeIndex: "0",
                        navList: [{
                            name: "anyCall",
                            url: this.$$.anyCall,
                            type: "outlink"
                        }, {
                            name: "veMULTI",
                            url: this.$$.enterApp + "/#/vest",
                            type: "outlink"
                        }, {
                            name: "Explorer",
                            url: this.$$.explorerUrl,
                            type: "outlink"
                        }, {
                            name: "Docs",
                            url: this.$$.docUrl,
                            type: "outlink"
                        }, {
                            name: "Github",
                            url: this.$$.github,
                            type: "outlink"
                        }],
                        appUrl: this.$$.enterApp,
                        langProp: ""
                    }
                },
                components: {
                    TopTip: p
                },
                computed: {
                    isDark: function() {
                        return Number(this.$store.state.isDark)
                    },
                    account: function() {
                        return this.$store.state.account
                    }
                },
                watch: {
                    account: function() {
                        this.changeNavList()
                    }
                },
                mounted: function() {
                    this.changeNavList()
                },
                methods: {
                    openUrl: function(t) {
                        window.open(t)
                    },
                    changeNavList: function() {},
                    changeTheme: function() {
                        var t = this.isDark ? 0 : 1;
                        this.$store.commit("setIsDark", t)
                    },
                    changeNav: function(t) {
                        routes;
                        for (var e = 0, n = this.navList.length; e < n; e++) {
                            if (this.navList[e].path === t) {
                                this.activeIndex = e.toString();
                                break
                            }
                            if (-1 !== t.indexOf(this.navList[e].path) && "/" !== this.navList[e].path) {
                                this.activeIndex = e.toString();
                                break
                            }
                        }
                    },
                    handleSelect: function(t) {
                        "link" === this.navList[t].type ? this.$router.push({
                            path: this.navList[t].url
                        }) : window.open(this.navList[t].url)
                    },
                    handleCommand: function(t) {
                        "en-US" === t || "zh-CN" === t ? this.langProp = t : this.handleSelect(t)
                    }
                }
            },
            m = d,
            g = (n("7a90"), Object(u["a"])(m, i, r, !1, null, null, null));
        e["a"] = g.exports
    },
    d939: function(t, e, n) {
        t.exports = n.p + "img/logo-white.a20903bf.png"
    },
    dbd8: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAAHeEJUAAAAACXBIWXMAAAsSAAALEgHS3X78AAABMUlEQVQ4jY1UbXHDMAy1e/u/QQiEQPAQLGVQCIUwBoUwCBuDjEHLoBAK4e3Uk7tnWWqsu15c+enp6SNJnQFA4+scrfcp3r30CSNr0ABmQzfXw6rUV/m/U8Bks09ueFgnI0xhUwemy0YMW64sOefspYz8lfkaMTOoBJrnZ0FHACfr3zmRHykl7krbQ088gFvYX/xb4btsgE20tOmhUeNXy6CBBcCXAMYZDck7nfdeEVHVrR/AQmfRu7JOeb6olh8iuhidv52EyGgV1+Gg1A/mYO6KEi/Gf6AYf9kIdDb+SYntO3r2RGwpvyG2bkk4+LNOpgJV2YjNJKBynGSZXinHm3luWcXFHxxTQdlQugzQPAYlfbSDkgT3n/F/K94f1MZKyZ303n7geaXiwQUJx5c/pfQHR1MTK11hAfMAAAAASUVORK5CYII="
    },
    f21d: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "footer-box"
                }, [i("div", {
                    staticClass: "container-md"
                }, [i("el-row", {
                    attrs: {
                        gutter: 10
                    }
                }, [i("el-col", {
                    attrs: {
                        xs: 24,
                        sm: 24,
                        md: 9,
                        lg: 9,
                        xl: 9
                    }
                }, [i("div", {
                    staticClass: "footer-item-info"
                }, [i("div", {
                    staticClass: "logo"
                }, [i("img", {
                    attrs: {
                        src: n("d939"),
                        alt: "logo"
                    }
                })]), i("div", {
                    staticClass: "content"
                }, [t._v(" © " + t._s((new Date).getFullYear()) + " Multichain. All rights reserved. ")]), i("ul", {
                    staticClass: "list flex-sc"
                }, t._l(t.network, (function(t, e) {
                    return i("li", {
                        key: e,
                        staticClass: "item"
                    }, [i("a", {
                        attrs: {
                            href: t.url,
                            target: "__blank"
                        }
                    }, [i("img", {
                        attrs: {
                            src: t.logo,
                            alt: ""
                        }
                    })])])
                })), 0)])]), t._l(t.footerList, (function(e, n) {
                    return i("el-col", {
                        key: n,
                        attrs: {
                            xs: 24,
                            sm: 24,
                            md: 5,
                            lg: 5,
                            xl: 5
                        }
                    }, [i("div", {
                        staticClass: "support-box"
                    }, [i("h3", {
                        staticClass: "h3"
                    }, [t._v(" " + t._s(e.title) + " "), i("i", {
                        staticClass: "icon"
                    })]), i("ul", {
                        staticClass: "list"
                    }, t._l(e.list, (function(e, n) {
                        return i("li", {
                            key: n,
                            staticClass: "item"
                        }, [i("a", {
                            attrs: {
                                href: e.url,
                                target: "__blank"
                            }
                        }, [t._v(t._s(e.name))])])
                    })), 0)])])
                }))], 2)], 1)])
            },
            r = [],
            a = {
                name: "Header",
                data: function() {
                    return {
                        network: [{
                            name: "",
                            url: this.$$.telegram,
                            logo: n("f36c")
                        }, {
                            name: "",
                            url: this.$$.medium,
                            logo: n("ce83")
                        }, {
                            name: "",
                            url: this.$$.twitter,
                            logo: n("ba83a")
                        }, {
                            name: "",
                            url: this.$$.github,
                            logo: n("139c")
                        }, {
                            name: "",
                            url: this.$$.coinmarketcap,
                            logo: n("b6fa")
                        }, {
                            name: "",
                            url: this.$$.coingecko,
                            logo: n("119b")
                        }, {
                            name: "",
                            url: this.$$.multidao,
                            logo: n("0959")
                        }],
                        footerList: [{
                            title: "About",
                            list: [{
                                name: "Docs",
                                url: this.$$.docUrl
                            }, {
                                name: "FAQ",
                                url: "https://docs.multichain.org/faq"
                            }, {
                                name: "Brand Assets",
                                url: "https://github.com/anyswap/Brand-assets/tree/master/multichain"
                            }, {
                                name: "Multichain Report 2022",
                                url: "https://drive.google.com/file/d/1OudU8hOl24aFpcbefPbpv7r0s6zjMUqh/view?usp=sharing"
                            }, {
                                name: "Multichain Report Q2 2022",
                                url: "https://drive.google.com/file/d/1AcAwdIeI3-ALD4KBRc9EQCXW9GnNfHZV/view"
                            }, {
                                name: "Multichain Report Q1 2022",
                                url: "https://drive.google.com/file/d/1tIjUsdncA2Hq-5DHeXXEfDjaee1usYnC/view"
                            }, {
                                name: "Multichain Report 2021",
                                url: "https://drive.google.com/file/d/1gdkpldTjBXKV6H7Duu4_m3XmLTQGcHmg/view"
                            }, {
                                name: "Careers",
                                url: "https://docs.multichain.org/careers"
                            }, {
                                name: "anyCall Whitepaper",
                                url: "https://drive.google.com/file/d/1NFFFecAjStbGMyvJVDez3xmsGSHYvNYv/view?usp=sharing"
                            }, {
                                name: "zkRouter Whitepaper",
                                url: "https://drive.google.com/file/d/1ibuHChcYcYCN6JelRAQPnM4rkaB9EgAM/view?usp=sharing"
                            }]
                        }, {
                            title: "Developers",
                            list: [{
                                name: "Listing",
                                url: "https://dard6erxu8t.typeform.com/to/C7RwF08A"
                            }, {
                                name: "Support",
                                url: "https://multichain.zendesk.com/hc/en-us"
                            }, {
                                name: "Dev docs",
                                url: "https://docs.multichain.org/developer-guide"
                            }, {
                                name: "Audit",
                                url: "https://github.com/anyswap/Anyswap-Audit"
                            }, {
                                name: "Bug bounty",
                                url: "https://docs.multichain.org/security/bug-bounty"
                            }, {
                                name: "Contact",
                                url: "mailto:contact@multichain.org"
                            }]
                        }, {
                            title: "Product",
                            list: [{
                                name: "Router",
                                url: this.$$.enterApp
                            }, {
                                name: "anyCall",
                                url: "https://docs.multichain.org/developer-guide/anycall-v6"
                            }, {
                                name: "fastMPC",
                                url: "https://multichainorg.medium.com/fastmpc-mainnet-goes-live-running-in-a-decentralized-way-99f9fe2956b8"
                            }, {
                                name: "Explorer",
                                url: this.$$.explorerUrl
                            }, {
                                name: "Network",
                                url: this.$$.explorerUrl + "/#/network"
                            }, {
                                name: "Dashboard",
                                url: this.$$.explorerUrl + "/#/dashboard"
                            }, {
                                name: "Tools",
                                url: this.$$.explorerUrl + "/#/tools"
                            }, {
                                name: "Governance",
                                url: "https://snapshot.org/#/multichaindao.eth/"
                            }]
                        }]
                    }
                }
            },
            o = a,
            s = (n("c44a"), n("2877")),
            c = Object(s["a"])(o, i, r, !1, null, "0f7413bb", null);
        e["a"] = c.exports
    },
    f36c: function(t, e, n) {
        t.exports = n.p + "img/telegram-white.d12a4612.svg"
    },
    f4c6: function(t, e, n) {},
    ff7b: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAAE1Jy4DAAAACXBIWXMAAAsSAAALEgHS3X78AAABG0lEQVQ4jZ1UbRHCMAxNpmA4QAIOmIRJmIRJwAE4mAYUDAfDATgYDsKFa++yfJTe3o9tXZOX9CUpMIjoAhqYdsjsbP42xszzabxN7TW4eejIo+GnhCjgkt4nfnTZ2ngR0UxER819TYZzlJRRChExMm44BxVhrWYu4CYZB31KTyPp0JuTB4YxSz6gyvldNOaCivWzKnxCKJtnzGiLOSusTqGW/BHqG3XWP4ygQq2Bgz8gXD3eTD08ukaOE5f9JdiHKscC4eSk3FW4hoRtoEU4jf+Qa80EYUPszdbcLgr79OW7q6KHllKLaz4Q1wtLUVukBwDcxaQy0RkA+rT+IOJBRpLttRfcAPZ2qp3DAFONTjxVXk9r8NT9NN0AAL5WhJIynuwEIgAAAABJRU5ErkJggg=="
    }
});