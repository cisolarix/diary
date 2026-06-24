$gwx_XC_16 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];

        function gz$gwx_XC_16_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'handleTouchEnd'])
                Z([3, 'handleTouchMove'])
                Z([3, 'handleTouchStart'])
                Z([3, 'paper-stack'])
                Z([
                    [7],
                    [3, 'paperCount']
                ])
                Z([3, '*this'])
                Z([3, 'handleTap'])
                Z([a, [3, 'paper '],
                    [
                        [2, '?:'],
                        [
                            [2, '<'],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentIndex']
                            ]
                        ],
                        [1, 'swiped'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentIndex']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([a, [3, 'transform:'],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentIndex']
                            ]
                        ],
                        [
                            [2, '||'],
                            [
                                [7],
                                [3, 'slideTarget']
                            ],
                            [
                                [7],
                                [3, 'activeTransform']
                            ]
                        ],
                        [1, '']
                    ],
                    [3, ';']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'paperDates']
                        ],
                        [
                            [7],
                            [3, 'index']
                        ]
                    ],
                    [3, 'dayLabel']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'paperDates']
                        ],
                        [
                            [7],
                            [3, 'index']
                        ]
                    ],
                    [3, 'location']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_16 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_16 = true;
        var x = ['./pages/index/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_16_1()
            var oTE = _mz(z, 'view', ['bindtouchend', 0, 'bindtouchmove', 1, 'bindtouchstart', 1, 'class', 2], [], e, s, gg)
            var lUE = _v()
            _(oTE, lUE)
            var aVE = function(eXE, tWE, bYE, gg) {
                var x1E = _mz(z, 'view', ['catchtap', 6, 'class', 1, 'data-index', 2, 'style', 3], [], eXE, tWE, gg)
                var o2E = _v()
                _(x1E, o2E)
                if (_oz(z, 10, eXE, tWE, gg)) {
                    o2E.wxVkey = 1
                }
                var f3E = _v()
                _(x1E, f3E)
                if (_oz(z, 11, eXE, tWE, gg)) {
                    f3E.wxVkey = 1
                }
                o2E.wxXCkey = 1
                f3E.wxXCkey = 1
                _(bYE, x1E)
                return bYE
            }
            lUE.wxXCkey = 2
            _2z(z, 4, aVE, e, s, gg, lUE, 'item', 'index', '*this')
            _(r, oTE)
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
                g = "$gwx_XC_16";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_16();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx_XC_16, './pages/index/index.wxml'];
else __wxAppCode__['pages/index/index.wxml'] = $gwx_XC_16('./pages/index/index.wxml');;
__wxRoute = "pages/index/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/index/index.js";
define("pages/index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/slicedToArray");
    require("../../@babel/runtime/helpers/Objectentries");
    var e = require("../../utils/cloud-images");
    Page({
        data: {
            isAnimating: !1,
            currentIndex: 0,
            paperCount: 7,
            colors: ["#FFE5E5", "#E5F5FF", "#E5FFE5", "#FFF5E5", "#F5E5FF", "#FFFFE5", "#E5FFFF"],
            activeTransform: "",
            slideDirection: "",
            slideTarget: "",
            clickDirectionIndex: 0,
            isClickSliding: !1,
            showResetBtn: !1,
            paperDates: [],
            isAllSwiped: !1,
            isLoading: !0,
            hideSearchBtn: !1,
            showUpdateModal: !1,
            showDraftBar: !1,
            draftDateStr: "",
            draftDisplayDate: "",
            draftBarTop: 0,
            draftBarRight: 0
        },
        onLoad: function() {
            var t = this,
                e = (new Date).getDay(),
                a = 0 === e ? 7 : e,
                i = wx.getSystemInfoSync(),
                s = (i.statusBarHeight, i.windowWidth),
                r = wx.getMenuButtonBoundingClientRect(),
                n = r.top,
                o = s - r.left + 16;
            this.setData({
                paperCount: a,
                isLoading: !0,
                draftBarTop: n,
                draftBarRight: o
            }), this.lastSeries = wx.getStorageSync("selectedPhotoSeries") || "series4", this._firstLoadDone = !1, getApp().globalData.initPromise.then((function() {
                t._firstLoadDone = !0, t.preloadImages()
            })), this.preloadImages()
        },
        _URL_CACHE_MAX_AGE: 54e5,
        preloadImages: function() {
            var t = wx.getStorageSync("selectedPhotoSeries") || "series4";
            if ("custom" === t) {
                var a = (wx.getStorageSync("customCovers") || []).filter((function(t) {
                    return t && t.length > 0 && !t.startsWith("http://tmp/")
                }));
                if (a.length > 0) return this.localImages = a, void this.loadPaperDates();
                console.warn("[index] custom covers invalid, fallback to series4"), wx.setStorageSync("selectedPhotoSeries", "series4"), this.lastSeries = "series4"
            }
            var i = wx.getStorageSync("selectedSeriesImages"),
                s = wx.getStorageSync("selectedSeriesImagesId") || "";
            if (i && 7 === i.length && s === t && i[0] && (i[0].startsWith("http") || i[0].startsWith("wxfile://"))) return this.localImages = i, void this.loadPaperDates();
            var r = wx.getStorageSync("headImageSeriesCache");
            if (r && r.data) {
                var n = r.data.find((function(e) {
                    return e.id === t
                }));
                if (n && n.images && 7 === n.images.length) {
                    var o = n.images.filter((function(t) {
                        return t && (t.startsWith("http") || t.startsWith("wxfile://"))
                    }));
                    if (7 === o.length) return this.localImages = o, void this.loadPaperDates()
                }
            }
            var l = (wx.getStorageSync("urlCache") || {})[t];
            if (l && l.urls && 7 === l.urls.length) {
                if (Date.now() - l.time < this._URL_CACHE_MAX_AGE) return this.localImages = l.urls, void this.loadPaperDates();
                console.log("[index] urlCache expired, refetching:", t)
            }
            var c = e.get(t);
            c && 0 !== c.length ? (this.localImages = null, this._refreshUrlsFromCloud(t, c, 0)) : console.error("[index] no cloud IDs for series:", t)
        },
        _refreshUrlsFromCloud: function(t, e, a) {
            var i = this;
            wx.cloud.getTempFileURL({
                fileList: e,
                success: function(a) {
                    var s = a.fileList.map((function(t, a) {
                        return t.tempFileURL ? t.tempFileURL : (console.warn("[index] cloudID[".concat(a, "] getTempFileURL returned no URL, fallback to cloudID")), e[a])
                    }));
                    i.localImages = s;
                    var r = wx.getStorageSync("urlCache") || {};
                    r[t] = {
                        urls: s,
                        time: Date.now()
                    }, wx.setStorageSync("urlCache", r), i.loadPaperDates()
                },
                fail: function(s) {
                    console.error("[index] getTempFileURL failed (retry ".concat(a, ")"), s), a < 2 ? setTimeout((function() {
                        i._refreshUrlsFromCloud(t, e, a + 1)
                    }), 1e3 * (a + 1)) : (console.warn("[index] all retries exhausted, fallback to series4"), "series4" !== t ? (wx.setStorageSync("selectedPhotoSeries", "series4"), i.lastSeries = "series4", i.preloadImages()) : (i.localImages = e, i.loadPaperDates()))
                }
            })
        },
        loadPaperDates: function() {
            for (var t = wx.getStorageSync("diaries") || {}, e = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], a = ["今天", "昨天", "前天"], i = [], s = 0; s < 7; s++) {
                var r, n, o = new Date;
                o.setDate(o.getDate() - s);
                var l = o.getFullYear(),
                    c = String(o.getMonth() + 1).padStart(2, "0"),
                    h = String(o.getDate()).padStart(2, "0"),
                    d = e[o.getDay()],
                    u = o.getDay(),
                    g = "".concat(l, "-").concat(c, "-").concat(h),
                    f = s < 3 ? a[s] : "";
                i.push({
                    year: String(l),
                    monthDay: "".concat(c, ".").concat(h),
                    day: h,
                    week: d,
                    dayLabel: f,
                    content: (null === (r = t[g]) || void 0 === r ? void 0 : r.content) || "",
                    location: (null === (n = t[g]) || void 0 === n ? void 0 : n.location) || "",
                    image: this.localImages ? this.localImages[u] : "",
                    _dateStr: g
                })
            }
            this.setData({
                paperDates: i,
                isLoading: !1
            })
        },
        onShow: function() {
            if ("function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
                    selected: 0
                }), this.setData({
                    hideSearchBtn: !1
                }), this._firstLoadDone) {
                var e = wx.getStorageSync("selectedPhotoSeries") || "series4";
                if (e !== this.lastSeries ? (this.lastSeries = e, this.localImages = [], this.preloadImages()) : (this.loadPaperDates(), this.localImages && 0 !== this.localImages.length || this.preloadImages()), this._firstLoadDone) {
                    for (var a = wx.getStorageSync("draftDismissed") || {}, i = wx.getStorageSync("diaries") || {}, s = null, r = "", n = 0, o = 0, l = Object.entries(i); o < l.length; o++) {
                        var c = t(l[o], 2),
                            h = c[0],
                            d = c[1];
                        if (d && !0 === d.isDraft && !a[h]) {
                            var u = d.updateTime || 0;
                            if (u > n) {
                                n = u, s = h;
                                var g = h.split("-");
                                3 === g.length && (r = "".concat(parseInt(g[1]), "月").concat(parseInt(g[2]), "日"))
                            }
                        }
                    }
                    s ? this.setData({
                        showDraftBar: !0,
                        draftDateStr: s,
                        draftDisplayDate: r
                    }) : this.data.showDraftBar && this.setData({
                        showDraftBar: !1
                    })
                }
            }
        },
        onHide: function() {
            this.setData({
                hideSearchBtn: !0
            })
        },
        onTapDraftBar: function() {
            var t = this.data.draftDateStr;
            this.setData({
                showDraftBar: !1
            }), wx.navigateTo({
                url: "/pages/write/write?date=".concat(t, "&fromDraft=1")
            })
        },
        onDiscardDraftReminder: function() {
            var t = this.data.draftDateStr,
                e = wx.getStorageSync("draftDismissed") || {};
            e[t] = !0, wx.setStorageSync("draftDismissed", e), this.setData({
                showDraftBar: !1,
                draftDateStr: "",
                draftDisplayDate: ""
            })
        },
        showUpdateModal: function() {
            this.setData({
                showUpdateModal: !0
            })
        },
        doUpdate: function() {
            wx.getUpdateManager().applyUpdate()
        },
        handleTouchStart: function(t) {
            if (!(this.data.currentIndex >= this.data.paperCount)) {
                var e = t.touches[0].clientY,
                    a = t.touches[0].clientX,
                    i = Date.now();
                this.data.isAnimating && this.completeAnimation(), this._touchStartY = e, this._touchStartX = a, this._lastY = e, this._lastX = a, this._lastMoveTime_prev = i, this._velocityY = 0, this._velocityX = 0, this.setData({
                    activeTransform: "",
                    slideDirection: ""
                })
            }
        },
        handleTouchMove: function(t) {
            if (!(this.data.isAnimating || this.data.currentIndex >= this.data.paperCount)) {
                var e = Date.now();
                if (!(this._lastMoveTime && e - this._lastMoveTime < 33)) {
                    this._lastMoveTime = e, this._lastY = this._lastY || t.touches[0].clientY, this._lastX = this._lastX || t.touches[0].clientX, this._touchStartY = this._touchStartY || this._touchStartY, this._touchStartX = this._touchStartX || this._touchStartX;
                    var a = t.touches[0].clientY,
                        i = t.touches[0].clientX,
                        s = this._touchStartY - a,
                        r = i - this._touchStartX,
                        n = a - this._lastY,
                        o = i - this._lastX,
                        l = e - (this._lastMoveTime_prev || e) || 1;
                    this._lastMoveTime_prev = e;
                    var c = Math.abs(s),
                        h = Math.abs(r);
                    if (c > h && c > 1) {
                        var d = -n / l * 16;
                        this._velocityY = d, this.setData({
                            activeTransform: "translateY(".concat(-s, "px)"),
                            slideDirection: s > 0 ? "up" : "down"
                        }), this._lastY = a, this._lastX = i
                    } else if (h > c && h > 1) {
                        var u = o / l * 16;
                        this._velocityX = u, this.setData({
                            activeTransform: "translateX(".concat(r, "px)"),
                            slideDirection: r > 0 ? "right" : "left"
                        }), this._lastY = a, this._lastX = i
                    }
                }
            }
        },
        handleTouchEnd: function(t) {
            if (!(this.data.isAnimating || this.data.currentIndex >= this.data.paperCount)) {
                var e = t.changedTouches[0].clientY,
                    a = t.changedTouches[0].clientX,
                    i = (this._touchStartY || 0) - e,
                    s = a - (this._touchStartX || 0),
                    r = Math.abs(i),
                    n = Math.abs(s),
                    o = wx.getWindowInfo(),
                    l = o.windowHeight,
                    c = o.windowWidth,
                    h = r > n ? .05 * l : .05 * c,
                    d = r > n && Math.abs(this._velocityY || 0) > 2 || n > r && Math.abs(this._velocityX || 0) > 2;
                r > h || n > h || d ? this.slideAway(l, c) : (this.setData({
                    activeTransform: "",
                    slideDirection: ""
                }), this._lastY = null, this._lastX = null, this._touchStartY = null, this._touchStartX = null, this._velocityY = 0, this._velocityX = 0, this._lastMoveTime = null, this._lastMoveTime_prev = null)
            }
        },
        slideAway: function(t, e) {
            var a = this;
            this.setData({
                isAnimating: !0
            });
            var i = Math.max(Math.abs(this._velocityY || 0), Math.abs(this._velocityX || 0)),
                s = Math.min(800, Math.max(400, 800 - 50 * i)),
                r = "";
            r = "up" === this.data.slideDirection ? "translateY(".concat(-t, "px)") : "down" === this.data.slideDirection ? "translateY(".concat(t, "px)") : "left" === this.data.slideDirection ? "translateX(".concat(-e, "px)") : "right" === this.data.slideDirection ? "translateX(".concat(e, "px)") : "translateY(".concat(-t, "px)"), this.setData({
                slideTarget: r
            }), this.animationTimer = setTimeout((function() {
                a.completeAnimation()
            }), s)
        },
        completeAnimation: function() {
            this.animationTimer && (clearTimeout(this.animationTimer), this.animationTimer = null);
            var t = this.data.currentIndex + 1;
            this.setData({
                currentIndex: t,
                activeTransform: "",
                slideDirection: "",
                slideTarget: "",
                isAnimating: !1,
                showResetBtn: !0
            }), t >= this.data.paperCount && this.setData({
                isAllSwiped: !0
            })
        },
        handleReset: function() {
            var t = this;
            if (!this.data.isAnimating) {
                var e = this.data.currentIndex;
                if (!(e <= 0)) {
                    this.setData({
                        isAnimating: !0
                    });
                    wx.createAnimation({
                        duration: 100 * e,
                        timingFunction: "ease-out"
                    });
                    setTimeout((function() {
                        t.setData({
                            currentIndex: 0,
                            showResetBtn: !1,
                            isAnimating: !1
                        })
                    }), 100 * e + 300)
                }
            }
        },
        handleTap: function(t) {
            var e = t.currentTarget.dataset.index,
                a = new Date,
                i = new Date(a);
            i.setDate(i.getDate() - e);
            var s = i.getFullYear(),
                r = String(i.getMonth() + 1).padStart(2, "0"),
                n = String(i.getDate()).padStart(2, "0"),
                o = "".concat(s, "-").concat(r, "-").concat(n);
            wx.navigateTo({
                url: "/pages/write/write?date=".concat(o)
            })
        },
        handleSeeMore: function(t) {
            var e = t.currentTarget.dataset.date;
            wx.navigateTo({
                url: "/pages/write/write?date=".concat(e)
            })
        },
        goToSearch: function() {
            wx.navigateTo({
                url: "/pages/search/search"
            })
        },
        confirmDelete: function(t) {
            var e = t.currentTarget.dataset.index;
            this._deleteTargetIndex = e, this.setData({
                showDeleteModal: !0
            })
        },
        onCancelDelete: function() {
            this._deleteTargetIndex = null, this.setData({
                showDeleteModal: !1
            })
        },
        onConfirmDelete: function() {
            var t = this,
                e = this._deleteTargetIndex;
            this.setData({
                showDeleteModal: !1
            });
            var a = new Date,
                i = new Date(a);
            i.setDate(i.getDate() - e);
            var s = i.getFullYear(),
                r = String(i.getMonth() + 1).padStart(2, "0"),
                n = String(i.getDate()).padStart(2, "0"),
                o = "".concat(s, "-").concat(r, "-").concat(n),
                l = wx.getStorageSync("diaries") || {};
            delete l[o], wx.setStorageSync("diaries", l), wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "deleteDiary",
                    date: o
                }
            }).then((function() {
                t.loadPaperDates()
            })).catch((function(t) {
                console.error("delete failed", t)
            }))
        },
        onShareAppMessage: function() {
            return {
                title: "向心日记 - 记录每一天的美好",
                path: "/pages/index/index",
                imageUrl: "cloud://cloud1-0g3jtuimd88a4af5.636c-cloud1-0g3jtuimd88a4af5-1413231909/fengmian/fengmiantu.jpg"
            }
        },
        preventBubble: function() {}
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/index/index.js'
});
require("pages/index/index.js");