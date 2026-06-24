$gwx_XC_7 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];

        function gz$gwx_XC_7_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_7 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_7 = true;
        var x = ['./pages/stats/stats.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_7_1()
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_7";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_7();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/stats/stats.wxml'] = [$gwx_XC_7, './pages/stats/stats.wxml'];
else __wxAppCode__['pages/stats/stats.wxml'] = $gwx_XC_7('./pages/stats/stats.wxml');;
__wxRoute = "pages/stats/stats";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/stats/stats.js";
define("pages/stats/stats.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Objectentries"), require("../../@babel/runtime/helpers/Objectvalues");
    var t = require("../../@babel/runtime/helpers/toConsumableArray"),
        a = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
        e = require("../../@babel/runtime/helpers/slicedToArray"),
        r = require("../../utils/util");
    Page({
        data: {
            totalDays: 0,
            totalWords: 0,
            totalImages: 0,
            moodStats: [],
            weatherStats: [],
            tagStats: [],
            heatmapData: [],
            heatmapYear: (new Date).getFullYear(),
            monthStats: []
        },
        onLoad: function() {
            this.loadStats()
        },
        onShow: function() {
            var t = wx.getStorageSync("_diary_gen") || 0;
            if (t !== this._cachedGen) {
                this._cachedGen = t;
                var a = this.data.heatmapData;
                if (a && 0 !== a.length) {
                    var e = wx.getStorageSync("_diary_changes");
                    e && e.length > 0 ? (this._applyIncrementalChanges(e), wx.removeStorageSync("_diary_changes")) : this.loadStats()
                } else this.loadStats()
            }
        },
        loadStats: function() {
            var t = wx.getStorageSync("diaries") || {},
                a = Object.entries(t),
                r = 0,
                n = 0,
                o = {},
                l = {},
                c = {},
                s = {};
            a.forEach((function(t) {
                var a = e(t, 2),
                    i = a[0],
                    h = a[1];
                h.content && (r += h.content.length), h.imagePaths && (n += h.imagePaths.length), h.mood && (o[h.mood] = (o[h.mood] || 0) + 1), h.weather && (l[h.weather] = (l[h.weather] || 0) + 1), h.tags && h.tags.forEach((function(t) {
                    c[t] = (c[t] || 0) + 1
                }));
                var u = i.substring(0, 7);
                s[u] = (s[u] || 0) + 1
            }));
            var i = this._calcMoodStats(o),
                h = this._calcWeatherStats(l),
                u = this._calcTagStats(c),
                m = this._calcHeatmap(t),
                v = m.heatmapData,
                g = m.heatmapYear,
                d = this._calcMonthStats(s);
            this.setData({
                totalDays: a.length,
                totalWords: r,
                totalImages: n,
                moodStats: i,
                weatherStats: h,
                tagStats: u,
                heatmapData: v,
                heatmapYear: g,
                monthStats: d
            }), this._cachedGen = wx.getStorageSync("_diary_gen") || 0
        },
        _applyIncrementalChanges: function(t) {
            var e, r = wx.getStorageSync("diaries") || {},
                n = this.data.heatmapData,
                o = this.data.heatmapYear,
                l = new Date(o, 0, 1),
                c = {},
                s = !1,
                i = a(t);
            try {
                for (i.s(); !(e = i.n()).done;) {
                    var h = e.value,
                        u = h.date.split("-");
                    if (parseInt(u[0]) === o) {
                        var m = new Date(h.date),
                            v = Math.floor((m - l) / 864e5);
                        if (!(v < 0 || v >= n.length)) {
                            var g = "level-0";
                            if ("update" === h.action) {
                                var d = r[h.date];
                                if (d) {
                                    var p, S = (null === (p = d.content) || void 0 === p ? void 0 : p.length) || 0;
                                    g = 0 === S ? "level-0" : S < 50 ? "level-1" : S < 100 ? "level-2" : S < 200 ? "level-3" : "level-4"
                                }
                            }
                            n[v].level !== g && (c["heatmapData[" + v + "].level"] = g, s = !0)
                        }
                    }
                }
            } catch (t) {
                i.e(t)
            } finally {
                i.f()
            }
            s && this.setData(c), this._recomputeStats(r)
        },
        _recomputeStats: function(t) {
            var a = Object.entries(t),
                r = 0,
                n = 0,
                o = {},
                l = {},
                c = {},
                s = {};
            a.forEach((function(t) {
                var a = e(t, 2),
                    i = a[0],
                    h = a[1];
                h.content && (r += h.content.length), h.imagePaths && (n += h.imagePaths.length), h.mood && (o[h.mood] = (o[h.mood] || 0) + 1), h.weather && (l[h.weather] = (l[h.weather] || 0) + 1), h.tags && h.tags.forEach((function(t) {
                    c[t] = (c[t] || 0) + 1
                }));
                var u = i.substring(0, 7);
                s[u] = (s[u] || 0) + 1
            })), this.setData({
                totalDays: a.length,
                totalWords: r,
                totalImages: n,
                moodStats: this._calcMoodStats(o),
                weatherStats: this._calcWeatherStats(l),
                tagStats: this._calcTagStats(c),
                monthStats: this._calcMonthStats(s)
            })
        },
        _calcMoodStats: function(t) {
            var a = {
                    "😊": {
                        label: "开心",
                        color: "#FFD93D"
                    },
                    "😢": {
                        label: "难过",
                        color: "#6C757D"
                    },
                    "😠": {
                        label: "生气",
                        color: "#FF6B6B"
                    },
                    "😴": {
                        label: "困倦",
                        color: "#95A5A6"
                    },
                    "🤔": {
                        label: "思考",
                        color: "#3498DB"
                    },
                    "😰": {
                        label: "焦虑",
                        color: "#E74C3C"
                    },
                    "🥰": {
                        label: "幸福",
                        color: "#FF69B4"
                    },
                    "😌": {
                        label: "平静",
                        color: "#2ECC71"
                    },
                    "🤗": {
                        label: "感动",
                        color: "#F39C12"
                    },
                    "😎": {
                        label: "酷",
                        color: "#9B59B6"
                    },
                    "🥺": {
                        label: "期待",
                        color: "#1ABC9C"
                    },
                    "😣": {
                        label: "纠结",
                        color: "#E67E22"
                    }
                },
                r = Object.values(t).reduce((function(t, a) {
                    return t + a
                }), 0);
            return Object.entries(t).map((function(t) {
                var n, o = e(t, 2),
                    l = o[0],
                    c = o[1];
                return {
                    emoji: l,
                    count: c,
                    percent: r > 0 ? c / r * 100 : 0,
                    color: (null === (n = a[l]) || void 0 === n ? void 0 : n.color) || "#999"
                }
            })).sort((function(t, a) {
                return a.count - t.count
            }))
        },
        _calcWeatherStats: function(a) {
            var r = Object.values(a).reduce((function(t, a) {
                return t + a
            }), 0);
            return Object.entries(a).map((function(n) {
                var o = e(n, 2),
                    l = o[0],
                    c = o[1];
                return {
                    emoji: l,
                    count: c,
                    size: 40 + c / Math.max.apply(Math, t(Object.values(a))) * 40,
                    opacity: .5 + c / r * .5
                }
            })).sort((function(t, a) {
                return a.count - t.count
            }))
        },
        _calcTagStats: function(a) {
            var r = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98D8C8", "#F7DC6F"],
                n = Math.max.apply(Math, t(Object.values(a)).concat([1]));
            return Object.entries(a).map((function(t, a) {
                var o = e(t, 2),
                    l = o[0],
                    c = o[1];
                return {
                    name: l,
                    count: c,
                    size: 24 + c / n * 20,
                    color: r[a % r.length]
                }
            })).sort((function(t, a) {
                return a.count - t.count
            })).slice(0, 20)
        },
        _calcHeatmap: function(t) {
            for (var a = (new Date).getFullYear(), e = new Date(a, 0, 1), n = new Date(a, 11, 31), o = [], l = new Date(e); l <= n; l.setDate(l.getDate() + 1)) {
                var c, s, i = r.formatDate(new Date(l)),
                    h = !!t[i],
                    u = (null === (c = t[i]) || void 0 === c || null === (s = c.content) || void 0 === s ? void 0 : s.length) || 0,
                    m = "level-0";
                h && (m = u < 50 ? "level-1" : u < 100 ? "level-2" : u < 200 ? "level-3" : "level-4"), o.push({
                    date: i,
                    level: m
                })
            }
            return {
                heatmapData: o,
                heatmapYear: a
            }
        },
        _calcMonthStats: function(a) {
            var r = Math.max.apply(Math, t(Object.values(a)).concat([1]));
            return Object.entries(a).map((function(t) {
                var a = e(t, 2),
                    n = a[0],
                    o = a[1];
                return {
                    month: n.replace("-", "年") + "月",
                    count: o,
                    percent: o / r * 100
                }
            })).sort((function(t, a) {
                return a.month.localeCompare(t.month)
            }))
        },
        onHeatmapTap: function(t) {
            var a = t.currentTarget.dataset.date;
            getApp().globalData.selectedDate = a, wx.navigateBack()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/stats/stats.js'
});
require("pages/stats/stats.js");