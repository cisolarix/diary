$gwx_XC_15 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_15 || [];

        function gz$gwx_XC_15_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([
                    [7],
                    [3, 'heatmapDays']
                ])
                Z([3, 'date'])
                Z([3, 'onDayTap'])
                Z([a, [3, 'heatmap-cell '],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'level']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'isToday']
                        ],
                        [1, 'today'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'isFuture']
                        ],
                        [1, 'future'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'date']
                ])
                Z([3, 'cell-hover'])
                Z([3, '80'])
                Z([
                    [2, '&&'],
                    [
                        [2, '&&'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'hasDiary']
                        ],
                        [
                            [2, '!'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'isFuture']
                            ]
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'isToday']
                        ]
                    ]
                ])
                Z([3, 'onCloseDayModal'])
                Z([a, [3, 'day-modal-mask '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showDayModal']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, 'preventBubble'])
                Z([3, 'day-modal'])
                Z([3, 'day-modal-body'])
                Z([
                    [7],
                    [3, 'selectedDayData']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'selectedDayData']
                    ],
                    [3, 'content']
                ])
                Z(z[14])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_15 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_15 = true;
        var x = ['./pages/holiday/holiday.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_15_1()
            var oDE = _n('view')
            _rz(z, oDE, 'class', 0, e, s, gg)
            var cEE = _v()
            _(oDE, cEE)
            var oFE = function(aHE, lGE, tIE, gg) {
                var bKE = _mz(z, 'view', ['bindtap', 3, 'class', 1, 'data-date', 2, 'hoverClass', 3, 'hoverStayTime', 4], [], aHE, lGE, gg)
                var oLE = _v()
                _(bKE, oLE)
                if (_oz(z, 8, aHE, lGE, gg)) {
                    oLE.wxVkey = 1
                }
                oLE.wxXCkey = 1
                _(tIE, bKE)
                return tIE
            }
            cEE.wxXCkey = 2
            _2z(z, 1, oFE, e, s, gg, cEE, 'item', 'index', 'date')
            var xME = _mz(z, 'view', ['bindtap', 9, 'class', 1], [], e, s, gg)
            var oNE = _mz(z, 'view', ['catchtap', 11, 'class', 1], [], e, s, gg)
            var cPE = _n('view')
            _rz(z, cPE, 'class', 13, e, s, gg)
            var hQE = _v()
            _(cPE, hQE)
            if (_oz(z, 14, e, s, gg)) {
                hQE.wxVkey = 1
                var oRE = _v()
                _(hQE, oRE)
                if (_oz(z, 15, e, s, gg)) {
                    oRE.wxVkey = 1
                }
                oRE.wxXCkey = 1
            } else {
                hQE.wxVkey = 2
            }
            hQE.wxXCkey = 1
            _(oNE, cPE)
            var fOE = _v()
            _(oNE, fOE)
            if (_oz(z, 16, e, s, gg)) {
                fOE.wxVkey = 1
            }
            fOE.wxXCkey = 1
            _(xME, oNE)
            _(oDE, xME)
            _(r, oDE)
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
                g = "$gwx_XC_15";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_15();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/holiday/holiday.wxml'] = [$gwx_XC_15, './pages/holiday/holiday.wxml'];
else __wxAppCode__['pages/holiday/holiday.wxml'] = $gwx_XC_15('./pages/holiday/holiday.wxml');;
__wxRoute = "pages/holiday/holiday";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/holiday/holiday.js";
define("pages/holiday/holiday.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        a = require("../../@babel/runtime/helpers/toConsumableArray"),
        e = require("../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../@babel/runtime/helpers/objectSpread2"),
        r = require("../../utils/cloud.js"),
        o = require("../../utils/cloud").requirePoints;
    Page({
        data: {
            statusBarHeight: 20,
            currentYear: 0,
            currentMonth: 0,
            isCurrentMonth: !0,
            weekdays: ["日", "一", "二", "三", "四", "五", "六"],
            startBlank: [],
            heatmapDays: [],
            monthWriteDays: 0,
            totalDaysInMonth: 31,
            completionRate: 0,
            continuousDays: 0,
            maxContinuousDays: 0,
            timeSlots: [],
            showDayModal: !1,
            selectedDate: "",
            selectedDateDisplay: "",
            selectedDayData: null,
            heatmapData: {},
            loading: !1,
            _dataVersion: 0
        },
        onLoad: function() {
            var t = wx.getSystemInfoSync(),
                a = new Date;
            this.setData({
                statusBarHeight: t.statusBarHeight || 20,
                currentYear: a.getFullYear(),
                currentMonth: a.getMonth() + 1
            })
        },
        onShow: function() {
            "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
                selected: 2
            });
            var t = this.data,
                a = t.currentYear,
                e = t.currentMonth;
            if (a && e) {
                var r = wx.getStorageSync("_diary_gen") || 0,
                    o = this.data._dataVersion,
                    s = "".concat("heatmap_cache_").concat(a, "_").concat(e),
                    i = wx.getStorageSync(s);
                i && i.heatmapDays && i.heatmapDays.length > 0 && r === o ? this.setData(n(n({}, i), {}, {
                    isCurrentMonth: this._checkIsCurrentMonth(a, e),
                    heatmapDays: this._refreshDayFlags(i.heatmapDays, a, e)
                })) : this.loadHeatmapData()
            }
        },
        _refreshDayFlags: function(t, a, e) {
            var r = new Date,
                o = a === r.getFullYear() && e === r.getMonth() + 1,
                s = r.getDate();
            return t.map((function(t) {
                return n(n({}, t), {}, {
                    isToday: o && t.day === s,
                    isFuture: o && t.day > s
                })
            }))
        },
        _checkIsCurrentMonth: function(t, a) {
            var e = new Date;
            return t === e.getFullYear() && a === e.getMonth() + 1
        },
        loadHeatmapData: function() {
            var n = this;
            return e(t().mark((function e() {
                var o, s, i, c, u, h, l, D, d, p, y, g, m, f, w, M, _, v, S, x, b, F, C, k, Y, T;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (o = n.data, s = o.currentYear, i = o.currentMonth, s && i) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return n.setData({
                                loading: !0
                            }), t.prev = 4, t.next = 7, r.callAction("getHeatmapData", {
                                year: s,
                                month: i
                            });
                        case 7:
                            if ((c = t.sent).result && c.result.success) {
                                for (u = c.result.data, h = u.heatmapData, l = u.stats, D = u.timeSlots, d = new Date(s, i - 1, 1).getDay(), p = new Array(d).fill(0), y = new Date, g = s === y.getFullYear() && i === y.getMonth() + 1, m = y.getDate(), f = l.totalDays || new Date(s, i, 0).getDate(), w = [], M = 1; M <= f; M++) _ = h[M], v = g && M > m, S = g && M === m, w.push({
                                    day: M,
                                    date: "".concat(s, "-").concat(String(i).padStart(2, "0"), "-").concat(String(M).padStart(2, "0")),
                                    hasDiary: !!_ && _.hasDiary,
                                    level: _ ? _.level : "",
                                    isToday: S,
                                    isFuture: v
                                });
                                x = f > 0 ? Math.round(l.writeDays / f * 100) : 0, 10, b = Math.max.apply(Math, a(D.map((function(t) {
                                    return t.count
                                }))).concat([10])), F = D.map((function(t) {
                                    return {
                                        label: t.label,
                                        count: t.count,
                                        percent: Math.round(t.count / b * 100)
                                    }
                                })), C = wx.getStorageSync("_diary_gen") || 0, k = {
                                    startBlank: p,
                                    heatmapDays: w,
                                    heatmapData: h,
                                    monthWriteDays: l.writeDays,
                                    totalDaysInMonth: f,
                                    completionRate: x,
                                    continuousDays: l.continuousDays,
                                    maxContinuousDays: l.maxContinuousDays,
                                    timeSlots: F,
                                    isCurrentMonth: g,
                                    loading: !1,
                                    _dataVersion: C
                                }, n.setData(k), Y = "".concat("heatmap_cache_").concat(s, "_").concat(i), wx.setStorageSync(Y, k)
                            } else console.error("获取热力图数据失败:", null === (T = c.result) || void 0 === T ? void 0 : T.error), n.setData({
                                loading: !1
                            }), n._initEmptyData();
                            t.next = 16;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(4), console.error("获取热力图数据异常:", t.t0), n.setData({
                                loading: !1
                            }), n._loadFromCacheOrEmpty();
                        case 16:
                        case "end":
                            return t.stop()
                    }
                }), e, null, [
                    [4, 11]
                ])
            })))()
        },
        _loadFromCacheOrEmpty: function() {
            var t = this.data,
                a = t.currentYear,
                e = t.currentMonth,
                r = "".concat("heatmap_cache_").concat(a, "_").concat(e),
                o = wx.getStorageSync(r);
            o && o.heatmapDays && o.heatmapDays.length > 0 ? this.setData(n(n({}, o), {}, {
                isCurrentMonth: this._checkIsCurrentMonth(a, e),
                heatmapDays: this._refreshDayFlags(o.heatmapDays, a, e)
            })) : this._initEmptyData()
        },
        _initEmptyData: function() {
            for (var t = this.data, a = t.currentYear, e = t.currentMonth, n = new Date, r = a === n.getFullYear() && e === n.getMonth() + 1, o = n.getDate(), s = new Date(a, e, 0).getDate(), i = new Date(a, e - 1, 1).getDay(), c = new Array(i).fill(0), u = [], h = 1; h <= s; h++) u.push({
                day: h,
                date: "".concat(a, "-").concat(String(e).padStart(2, "0"), "-").concat(String(h).padStart(2, "0")),
                hasDiary: !1,
                level: "",
                isToday: r && h === o,
                isFuture: r && h > o
            });
            this.setData({
                startBlank: c,
                heatmapDays: u,
                heatmapData: {},
                monthWriteDays: 0,
                totalDaysInMonth: s,
                completionRate: 0,
                continuousDays: 0,
                maxContinuousDays: 0,
                timeSlots: [],
                isCurrentMonth: r,
                _dataVersion: 0
            })
        },
        onPrevMonth: function() {
            var t = this.data,
                a = t.currentYear,
                e = t.currentMonth;
            --e < 1 && (e = 12, a--), this.setData({
                currentYear: a,
                currentMonth: e,
                _dataVersion: 0
            }), this._loadMonthData(a, e)
        },
        onNextMonth: function() {
            var t = new Date;
            if (this.data.currentYear !== t.getFullYear() || this.data.currentMonth !== t.getMonth() + 1) {
                var a = this.data,
                    e = a.currentYear,
                    n = a.currentMonth;
                ++n > 12 && (n = 1, e++), this.setData({
                    currentYear: e,
                    currentMonth: n,
                    _dataVersion: 0
                }), this._loadMonthData(e, n)
            }
        },
        _loadMonthData: function(t, a) {
            var e = "".concat("heatmap_cache_").concat(t, "_").concat(a),
                r = wx.getStorageSync(e);
            r && r.heatmapDays && r.heatmapDays.length > 0 ? this.setData(n(n({}, r), {}, {
                isCurrentMonth: this._checkIsCurrentMonth(t, a),
                heatmapDays: this._refreshDayFlags(r.heatmapDays, t, a)
            })) : this.loadHeatmapData()
        },
        onDayTap: function(t) {
            var a = t.currentTarget.dataset.date,
                e = parseInt(a.split("-")[2]),
                n = this.data.heatmapData[e],
                r = a.split("-"),
                o = "".concat(parseInt(r[1]), "月").concat(parseInt(r[2]), "日");
            if (n && n.hasDiary) this.setData({
                showDayModal: !0,
                selectedDate: a,
                selectedDateDisplay: o,
                selectedDayData: {
                    words: n.words,
                    images: n.images,
                    content: n.content
                }
            });
            else {
                if (this._isFutureDate(a)) return void wx.showToast({
                    title: "不能补写未来日记",
                    icon: "none"
                });
                this._isToday(a) ? wx.navigateTo({
                    url: "/pages/write/write?date=".concat(a)
                }) : this._handleMakeupWrite(a, o)
            }
        },
        _isFutureDate: function(t) {
            var a = new Date;
            return t > "".concat(a.getFullYear(), "-").concat(String(a.getMonth() + 1).padStart(2, "0"), "-").concat(String(a.getDate()).padStart(2, "0"))
        },
        _isToday: function(t) {
            var a = new Date;
            return t === "".concat(a.getFullYear(), "-").concat(String(a.getMonth() + 1).padStart(2, "0"), "-").concat(String(a.getDate()).padStart(2, "0"))
        },
        _handleMakeupWrite: function(a, n) {
            return e(t().mark((function r() {
                return t().wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            wx.showModal({
                                title: "补写日记",
                                content: "补写 ".concat(n, " 的日记需要消耗15积分，是否继续？"),
                                confirmText: "继续",
                                confirmColor: "#FF9500",
                                success: function() {
                                    var n = e(t().mark((function e(n) {
                                        var r;
                                        return t().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    if (n.confirm) {
                                                        t.next = 2;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 2:
                                                    return t.next = 4, o(15, "makeup_diary", "补写日记");
                                                case 4:
                                                    if ((r = t.sent) && r.ok) {
                                                        t.next = 7;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 7:
                                                    wx.navigateTo({
                                                        url: "/pages/write/write?date=".concat(a, "&pointsCost=15")
                                                    });
                                                case 8:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return n.apply(this, arguments)
                                    }
                                }()
                            });
                        case 1:
                        case "end":
                            return r.stop()
                    }
                }), r)
            })))()
        },
        onCloseDayModal: function() {
            this.setData({
                showDayModal: !1
            })
        },
        preventBubble: function() {},
        onGoToDiary: function() {
            var t = this.data.selectedDate;
            this.setData({
                showDayModal: !1
            }), wx.navigateTo({
                url: "/pages/diary-detail/diary-detail?date=".concat(t)
            })
        },
        onPullDownRefresh: function() {
            this.setData({
                _dataVersion: 0
            }), this.loadHeatmapData().finally((function() {
                wx.stopPullDownRefresh()
            }))
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/holiday/holiday.js'
});
require("pages/holiday/holiday.js");