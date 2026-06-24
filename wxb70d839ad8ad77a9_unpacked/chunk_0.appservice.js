$gwx_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];

        function gz$gwx_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([
                    [7],
                    [3, 'searchKeyword']
                ])
                Z([
                    [7],
                    [3, 'showFilterPanel']
                ])
                Z([3, 'onPullDownRefresh'])
                Z([3, 'onFriendScroll'])
                Z([3, 'onLoadMoreFriends'])
                Z([3, 'sec sec-friend'])
                Z([3, '120'])
                Z([
                    [7],
                    [3, 'friendRefreshing']
                ])
                Z([
                    [7],
                    [3, 'scrollTop']
                ])
                Z([1, false])
                Z([
                    [7],
                    [3, 'friendLoading']
                ])
                Z([
                    [2, '||'],
                    [
                        [2, '||'],
                        [
                            [2, '||'],
                            [
                                [7],
                                [3, 'searchKeyword']
                            ],
                            [
                                [7],
                                [3, 'filterStartDate']
                            ]
                        ],
                        [
                            [7],
                            [3, 'filterEndDate']
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'filterSortDesc']
                        ]
                    ]
                ])
                Z([3, 'filter-badges'])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'friendList']
                        ],
                        [3, 'length']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'filterStartDate']
                    ],
                    [
                        [7],
                        [3, 'filterEndDate']
                    ]
                ])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'filterSortDesc']
                    ]
                ])
                Z(z[1])
                Z([3, 'moments-list'])
                Z([
                    [7],
                    [3, 'friendList']
                ])
                Z([3, 'dateStr'])
                Z([
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'isSeparator']
                    ]
                ])
                Z([3, 'onTapDiary'])
                Z([3, 'moment-card capsule-card'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'dateStr']
                ])
                Z([a, [3, 'moment-'], z[24]])
                Z([a, [3, '--card-index:'],
                    [
                        [7],
                        [3, 'index']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'location']
                ])
                Z([
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'content']
                    ],
                    [
                        [2, '>'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'imgCount']
                        ],
                        [1, 0]
                    ]
                ])
                Z([3, 'capsule-stats'])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'wordCount']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '>'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'wordCount']
                        ],
                        [1, 0]
                    ],
                    [
                        [2, '>'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'imgCount']
                        ],
                        [1, 0]
                    ]
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'imgCount']
                    ],
                    [1, 0]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'content']
                ])
                Z([
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'expandedTexts']
                        ],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'dateStr']
                        ]
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [2, '%'],
                        [
                            [7],
                            [3, 'index']
                        ],
                        [1, 5]
                    ],
                    [1, 4]
                ])
                Z([
                    [7],
                    [3, 'friendLoadingMore']
                ])
                Z([
                    [7],
                    [3, 'friendNoMore']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '&&'],
                        [
                            [2, '==='],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'friendList']
                                ],
                                [3, 'length']
                            ],
                            [1, 0]
                        ],
                        [
                            [2, '!'],
                            [
                                [7],
                                [3, 'friendLoading']
                            ]
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'friendLoadingMore']
                        ]
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_0 = true;
        var x = ['./pages/calendar/calendar.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_0_1()
            var xC = _n('view')
            _rz(z, xC, 'class', 0, e, s, gg)
            var oD = _v()
            _(xC, oD)
            if (_oz(z, 1, e, s, gg)) {
                oD.wxVkey = 1
            }
            var fE = _v()
            _(xC, fE)
            if (_oz(z, 2, e, s, gg)) {
                fE.wxVkey = 1
            }
            var cF = _mz(z, 'scroll-view', ['enhanced', -1, 'refresherEnabled', -1, 'scrollY', -1, 'bindrefresherrefresh', 3, 'bindscroll', 1, 'bindscrolltolower', 2, 'class', 3, 'lowerThreshold', 4, 'refresherTriggered', 5, 'scrollTop', 6, 'showScrollbar', 7], [], e, s, gg)
            var hG = _v()
            _(cF, hG)
            if (_oz(z, 11, e, s, gg)) {
                hG.wxVkey = 1
            }
            var oH = _v()
            _(cF, oH)
            if (_oz(z, 12, e, s, gg)) {
                oH.wxVkey = 1
                var cI = _n('view')
                _rz(z, cI, 'class', 13, e, s, gg)
                var oJ = _v()
                _(cI, oJ)
                if (_oz(z, 14, e, s, gg)) {
                    oJ.wxVkey = 1
                }
                var lK = _v()
                _(cI, lK)
                if (_oz(z, 15, e, s, gg)) {
                    lK.wxVkey = 1
                }
                var aL = _v()
                _(cI, aL)
                if (_oz(z, 16, e, s, gg)) {
                    aL.wxVkey = 1
                }
                var tM = _v()
                _(cI, tM)
                if (_oz(z, 17, e, s, gg)) {
                    tM.wxVkey = 1
                }
                oJ.wxXCkey = 1
                lK.wxXCkey = 1
                aL.wxXCkey = 1
                tM.wxXCkey = 1
                _(oH, cI)
            }
            var eN = _n('view')
            _rz(z, eN, 'class', 18, e, s, gg)
            var oR = _v()
            _(eN, oR)
            var fS = function(hU, cT, oV, gg) {
                var oX = _v()
                _(oV, oX)
                if (_oz(z, 21, hU, cT, gg)) {
                    oX.wxVkey = 1
                    var aZ = _mz(z, 'view', ['bindtap', 22, 'class', 1, 'data-date', 2, 'id', 3, 'style', 4], [], hU, cT, gg)
                    var t1 = _v()
                    _(aZ, t1)
                    if (_oz(z, 27, hU, cT, gg)) {
                        t1.wxVkey = 1
                    }
                    var e2 = _v()
                    _(aZ, e2)
                    if (_oz(z, 28, hU, cT, gg)) {
                        e2.wxVkey = 1
                        var o4 = _n('view')
                        _rz(z, o4, 'class', 29, hU, cT, gg)
                        var x5 = _v()
                        _(o4, x5)
                        if (_oz(z, 30, hU, cT, gg)) {
                            x5.wxVkey = 1
                        }
                        var o6 = _v()
                        _(o4, o6)
                        if (_oz(z, 31, hU, cT, gg)) {
                            o6.wxVkey = 1
                        }
                        var f7 = _v()
                        _(o4, f7)
                        if (_oz(z, 32, hU, cT, gg)) {
                            f7.wxVkey = 1
                        }
                        x5.wxXCkey = 1
                        o6.wxXCkey = 1
                        f7.wxXCkey = 1
                        _(e2, o4)
                    }
                    var b3 = _v()
                    _(aZ, b3)
                    if (_oz(z, 33, hU, cT, gg)) {
                        b3.wxVkey = 1
                        var c8 = _v()
                        _(b3, c8)
                        if (_oz(z, 34, hU, cT, gg)) {
                            c8.wxVkey = 1
                        }
                        c8.wxXCkey = 1
                    }
                    t1.wxXCkey = 1
                    e2.wxXCkey = 1
                    b3.wxXCkey = 1
                    _(oX, aZ)
                }
                var lY = _v()
                _(oV, lY)
                if (_oz(z, 35, hU, cT, gg)) {
                    lY.wxVkey = 1
                }
                oX.wxXCkey = 1
                lY.wxXCkey = 1
                return oV
            }
            oR.wxXCkey = 2
            _2z(z, 19, fS, e, s, gg, oR, 'item', 'index', 'dateStr')
            var bO = _v()
            _(eN, bO)
            if (_oz(z, 36, e, s, gg)) {
                bO.wxVkey = 1
            }
            var oP = _v()
            _(eN, oP)
            if (_oz(z, 37, e, s, gg)) {
                oP.wxVkey = 1
            }
            var xQ = _v()
            _(eN, xQ)
            if (_oz(z, 38, e, s, gg)) {
                xQ.wxVkey = 1
            }
            bO.wxXCkey = 1
            oP.wxXCkey = 1
            xQ.wxXCkey = 1
            _(cF, eN)
            hG.wxXCkey = 1
            oH.wxXCkey = 1
            _(xC, cF)
            oD.wxXCkey = 1
            fE.wxXCkey = 1
            _(r, xC)
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
                g = "$gwx_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/calendar/calendar.wxml'] = [$gwx_XC_0, './pages/calendar/calendar.wxml'];
else __wxAppCode__['pages/calendar/calendar.wxml'] = $gwx_XC_0('./pages/calendar/calendar.wxml');;
__wxRoute = "pages/calendar/calendar";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/calendar/calendar.js";
define("pages/calendar/calendar.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Arrayincludes");
    var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
        e = require("../../@babel/runtime/helpers/defineProperty"),
        i = require("../../@babel/runtime/helpers/slicedToArray"),
        a = require("../../@babel/runtime/helpers/objectSpread2"),
        n = require("../../@babel/runtime/helpers/toConsumableArray");
    Page({
        data: {
            topBarStyle: "",
            friendList: [],
            expandedTexts: {},
            imageErrors: {},
            _loadingFriend: !1,
            _friendLoadGen: null,
            _friendAllDates: [],
            _friendHasMore: !0,
            _loadingMore: !1,
            friendLoadingMore: !1,
            friendNoMore: !1,
            friendRefreshing: !1,
            _calGen: null,
            showMomentAction: !1,
            momentActionDate: "",
            searchKeyword: "",
            _originalFriendList: [],
            showFilterPanel: !1,
            filterStartDate: "",
            filterEndDate: "",
            filterSortDesc: !0,
            scrollTop: 0,
            showBackToTop: !1,
            _diaryCount: 0
        },
        onLoad: function() {
            var t = this;
            this._initCapsulePosition(), getApp().globalData.initPromise.then((function() {
                t._loadFriendFeed()
            }))
        },
        onShow: function() {
            wx.setEnableSmartBanner && wx.setEnableSmartBanner({
                enable: !1
            }), "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
                selected: 1
            });
            var t = wx.getStorageSync("_diary_gen") || 0,
                e = this.data._calGen !== t;
            if (e && this.setData({
                    _calGen: t
                }), e) {
                var i = wx.getStorageSync("_diary_changes");
                i && i.length > 0 ? (this._applyIncrementalChanges(i), wx.removeStorageSync("_diary_changes")) : this._loadFriendFeed()
            }
        },
        _initCapsulePosition: function() {
            try {
                var t = wx.getSystemInfoSync(),
                    e = wx.getMenuButtonBoundingClientRect(),
                    i = (t.statusBarHeight, e.height),
                    a = 750 / t.windowWidth,
                    n = Math.round(i * a),
                    r = t.windowWidth - e.left + 12;
                this.setData({
                    topBarStyle: "position:fixed; top:".concat(e.top, "px; height:").concat(i, "px; left:32rpx; right:").concat(r, "px; z-index:99;"),
                    topBarHeight: n,
                    filterPanelStyle: "position:fixed; top:".concat(e.top + i + 8, "px; left:32rpx; right:").concat(r, "px; z-index:100;")
                })
            } catch (t) {}
        },
        onToggleFilter: function() {
            this.setData({
                showFilterPanel: !0
            })
        },
        closeFilterPanel: function() {
            this.setData({
                showFilterPanel: !1
            })
        },
        onSelectStartDate: function(t) {
            var e = t.detail.value || "",
                i = this.data.filterEndDate;
            i && e > i && (i = ""), this.setData({
                filterStartDate: e,
                filterEndDate: i
            }), this._applyFilters()
        },
        onSelectEndDate: function(t) {
            var e = t.detail.value || "",
                i = this.data.filterStartDate;
            i && e < i && (i = ""), this.setData({
                filterEndDate: e,
                filterStartDate: i
            }), this._applyFilters()
        },
        onToggleSort: function() {
            var t = !this.data.filterSortDesc;
            this.setData({
                filterSortDesc: t
            }), this._applyFilters()
        },
        resetFilter: function() {
            this.setData({
                filterStartDate: "",
                filterEndDate: "",
                filterSortDesc: !0
            }), this._applyFilters()
        },
        clearAllFilters: function() {
            this.setData({
                searchKeyword: "",
                filterStartDate: "",
                filterEndDate: "",
                filterSortDesc: !0
            }), this._applyFilters()
        },
        removeDateFilter: function() {
            this.setData({
                filterStartDate: "",
                filterEndDate: ""
            }), this._applyFilters()
        },
        removeSortFilter: function() {
            this.setData({
                filterSortDesc: !0
            }), this._applyFilters()
        },
        _applyFilters: function() {
            var t = wx.getStorageSync("diaries") || {},
                e = this.data,
                i = e.filterStartDate,
                a = e.filterEndDate,
                r = e.filterSortDesc,
                o = e.searchKeyword,
                s = i || a || !r,
                d = (o || "").toLowerCase();
            if (s || d) {
                for (var l = [], c = 0, f = Object.keys(t); c < f.length; c++) {
                    var h = f[c],
                        u = t[h];
                    if (u && !(i && h < i || a && h > a)) {
                        if (d)
                            if (!(u.content || "").toLowerCase().includes(d)) continue;
                        l.push(this._buildFriendItem(h, u, o || null))
                    }
                }
                l.sort((function(t, e) {
                    return r ? e.dateStr.localeCompare(t.dateStr) : t.dateStr.localeCompare(e.dateStr)
                })), this._setFriendList(this._buildGroupedList(l), {}, !0)
            } else this._setFriendList(n(this.data._originalFriendList))
        },
        onSearchInput: function(t) {
            var e = t.detail.value.trim();
            this.setData({
                searchKeyword: e
            }), this._applyFilters()
        },
        clearSearch: function() {
            this.setData({
                searchKeyword: ""
            }), this._applyFilters()
        },
        _buildFriendItem: function(t, e, i) {
            var a = e.content || "",
                r = e.imagePaths,
                o = Array.isArray(r) && r.length > 0,
                s = o ? r : [],
                d = e.location || "",
                l = null;
            i && (l = this._highlightText(a, i));
            var c = a.length,
                f = "none";
            c >= 140 ? f = "heavy" : c >= 100 && (f = "light");
            var h = s.length,
                u = "";
            1 === h ? u = "single" : 2 === h ? u = "row2" : 3 === h ? u = "row3" : 4 === h ? u = "grid22" : h >= 5 && (u = "gridN");
            var g = c,
                p = new Date(t.slice(0, 4), 0, 1),
                m = Math.floor((new Date(t) - p) / 864e5) + 1;
            return {
                dateStr: t,
                content: a,
                textSegments: l,
                images: n(s),
                displayImages: n(s),
                location: d,
                charCount: c,
                foldType: f,
                gridType: u,
                imgCount: h,
                wordCount: g,
                dayOfYear: m,
                dateLabel: this._formatFriendDate(t, e),
                timeLabel: this._formatFriendTime(e),
                isLiked: !1,
                likeCount: 0,
                _needsFetch: !o
            }
        },
        _buildGroupedList: function(t) {
            return t || []
        },
        _highlightText: function(t, e) {
            if (!e || !t) return null;
            for (var i = t.toLowerCase(), a = e.toLowerCase(), n = [], r = 0, o = i.indexOf(a, r); - 1 !== o;) o > r && n.push({
                text: t.slice(r, o),
                isHighlight: !1
            }), n.push({
                text: t.slice(o, o + e.length),
                isHighlight: !0
            }), r = o + e.length, o = i.indexOf(a, r);
            return r < t.length && n.push({
                text: t.slice(r),
                isHighlight: !1
            }), n
        },
        onPullDownRefresh: function() {
            this.setData({
                friendRefreshing: !0,
                searchKeyword: "",
                filterStartDate: "",
                filterEndDate: "",
                filterSortDesc: !0,
                showFilterPanel: !1
            }), this.data._friendLoadGen = -1, this._loadFriendFeed()
        },
        _loadFriendFeed: function(t) {
            var e = this;
            if (!(this.data._loadingFriend || t && this.data._loadingMore)) {
                if (!t && this.data.friendList.length > 0) {
                    var i = wx.getStorageSync("_diary_gen") || 0;
                    if (this.data._friendLoadGen === i) return
                }
                var a, r = wx.getStorageSync("diaries") || {};
                if (0 !== (a = t && this.data._friendAllDates.length > 0 ? this.data._friendAllDates : Object.keys(r).filter((function(t) {
                        var e = r[t];
                        return e && (e.content && e.content.trim() || e.imagePaths && e.imagePaths.length > 0 || !!e.isDraft)
                    })).sort((function(t, e) {
                        return e.localeCompare(t)
                    }))).length) {
                    t ? this.setData({
                        _loadingMore: !0,
                        friendLoadingMore: !0
                    }) : this.setData({
                        _loadingFriend: !0,
                        _friendLoadGen: wx.getStorageSync("_diary_gen") || 0,
                        _friendAllDates: a
                    });
                    var o = this.data.friendList.length,
                        s = t ? o : 0,
                        d = a.slice(s, s + 5);
                    if (0 !== d.length) {
                        var l = d.map((function(t) {
                                var i = r[t] || {};
                                return e._buildFriendItem(t, i)
                            })),
                            c = this._buildGroupedList(l),
                            f = l.filter((function(t) {
                                return t._needsFetch
                            })).map((function(t) {
                                return t.dateStr
                            })),
                            h = s + d.length < a.length;
                        if (0 === f.length) {
                            var u = t ? [].concat(n(this.data.friendList), n(l)) : c;
                            return this._setFriendList(u, {
                                _friendHasMore: h,
                                _loadingFriend: !1,
                                friendRefreshing: !1,
                                _loadingMore: !1,
                                friendLoadingMore: !1
                            }), void this._prefetchAllImages(l).then((function() {
                                var i, a = e.data.friendList;
                                if (t) {
                                    var r = a.length - l.length;
                                    i = [].concat(n(a.slice(0, r)), n(l))
                                } else i = n(c);
                                e._setFriendList(i)
                            })).catch((function() {}))
                        }
                        t || this.data.friendRefreshing || this.setData({
                            friendLoading: !0
                        }), this._fetchMissingDiaries(f, l).then((function() {
                            return e._prefetchAllImages(l)
                        })).then((function() {
                            var i = t ? [].concat(n(e.data.friendList), n(l)) : c;
                            e._setFriendList(i, {
                                _friendHasMore: h,
                                friendLoading: !1,
                                _loadingFriend: !1,
                                friendRefreshing: !1,
                                _loadingMore: !1,
                                friendLoadingMore: !1
                            })
                        })).catch((function() {
                            var i = t ? [].concat(n(e.data.friendList), n(l)) : c;
                            e._setFriendList(i, {
                                _friendHasMore: h,
                                friendLoading: !1,
                                _loadingFriend: !1,
                                friendRefreshing: !1,
                                _loadingMore: !1,
                                friendLoadingMore: !1
                            })
                        }))
                    } else t && this.setData({
                        _loadingMore: !1,
                        friendLoadingMore: !1,
                        _friendHasMore: !1,
                        friendNoMore: !0
                    })
                } else t || this._setFriendList([], {
                    _friendAllDates: [],
                    _friendHasMore: !1,
                    _loadingFriend: !1,
                    friendRefreshing: !1,
                    _friendLoadGen: wx.getStorageSync("_diary_gen") || 0
                })
            }
        },
        onLoadMoreFriends: function() {
            this.data._loadingMore || this.data._loadingFriend || 0 !== this.data.friendList.length && (this.data.searchKeyword || (this.data._friendHasMore ? this._loadFriendFeed(!0) : this.setData({
                friendNoMore: !0
            })))
        },
        onFriendScroll: function(t) {
            var e = t.detail.scrollTop;
            e > 600 && !this.data.showBackToTop ? this.setData({
                showBackToTop: !0
            }) : e <= 600 && this.data.showBackToTop && this.setData({
                showBackToTop: !1
            })
        },
        onBackToTop: function() {
            this.setData({
                scrollTop: 0
            })
        },
        _fetchMissingDiaries: function(t, e) {
            var i = t.map((function(t) {
                return wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "getDiary",
                        date: t
                    }
                }).then((function(i) {
                    if (i.result && i.result.success && i.result.found) {
                        var r = i.result.data;
                        if (r) {
                            var o = r.imagePaths;
                            if (Array.isArray(o) && 0 !== o.length) {
                                var s = wx.getStorageSync("diaries") || {},
                                    d = s[t] || {};
                                s[t] = a(a({}, d), {}, {
                                    imagePaths: r.imagePaths,
                                    updateTime: r.updateTime ? new Date(r.updateTime).getTime() : Date.now()
                                }), wx.setStorageSync("diaries", s);
                                var l = e.findIndex((function(e) {
                                    return e.dateStr === t
                                }));
                                if (l >= 0) {
                                    var c = r.imagePaths.length,
                                        f = "";
                                    1 === c ? f = "single" : 2 === c ? f = "row2" : 3 === c ? f = "row3" : 4 === c ? f = "grid22" : c >= 5 && (f = "gridN"), e[l] = a(a({}, e[l]), {}, {
                                        images: n(r.imagePaths),
                                        displayImages: n(r.imagePaths),
                                        imgCount: c,
                                        gridType: f,
                                        _needsFetch: !1
                                    })
                                }
                            }
                        }
                    }
                })).catch((function() {}))
            }));
            return Promise.all(i)
        },
        _prefetchAllImages: function(t) {
            var e = {},
                i = !1;
            if (t.forEach((function(t) {
                    t.images.forEach((function(a, n) {
                        a && a.startsWith("cloud://") && (i = !0, e[a] || (e[a] = []), e[a].push({
                            dateStr: t.dateStr,
                            idx: n
                        }))
                    }))
                })), !i) return Promise.resolve();
            var r = Object.keys(e);
            return wx.cloud.getTempFileURL({
                fileList: r
            }).then((function(i) {
                (i.fileList || []).forEach((function(i) {
                    i.tempFileURL && i.fileID && (e[i.fileID] || []).forEach((function(e) {
                        var r = t.findIndex((function(t) {
                            return t.dateStr === e.dateStr
                        }));
                        if (r >= 0) {
                            var o = n(t[r].displayImages);
                            o[e.idx] = i.tempFileURL, t[r] = a(a({}, t[r]), {}, {
                                displayImages: o
                            })
                        }
                    }))
                }))
            })).catch((function() {}))
        },
        _formatFriendDate: function(t, e) {
            var a = t.split("-"),
                n = i(a, 3),
                r = (n[0], n[1]),
                o = n[2],
                s = e && e.updateTime ? new Date(e.updateTime) : new Date,
                d = String(s.getHours()).padStart(2, "0"),
                l = String(s.getMinutes()).padStart(2, "0");
            return "".concat(r, "月").concat(o, "日 ").concat(d, ":").concat(l)
        },
        _formatFriendTime: function(t) {
            var e = t.updateTime || Date.now(),
                i = new Date(e),
                a = i.getFullYear(),
                n = String(i.getMonth() + 1).padStart(2, "0"),
                r = String(i.getDate()).padStart(2, "0"),
                o = String(i.getHours()).padStart(2, "0"),
                s = String(i.getMinutes()).padStart(2, "0");
            return "".concat(a, "年").concat(n, "月").concat(r, "日 ").concat(o, ":").concat(s)
        },
        onViewFullText: function(t) {
            var e = t.currentTarget.dataset.date;
            wx.navigateTo({
                url: "/pages/diary-detail/diary-detail?date=".concat(e)
            })
        },
        onLongPressCopy: function(t) {
            var e = t.currentTarget.dataset.content || "";
            e && wx.setClipboardData({
                data: e,
                success: function() {
                    wx.showToast({
                        title: "复制成功",
                        icon: "success"
                    })
                }
            })
        },
        onImageError: function(t) {
            var i = t.currentTarget.dataset,
                a = i.date,
                r = i.idx,
                o = this.data.imageErrors[a] || []; - 1 === o.indexOf(r) && this.setData(e({}, "imageErrors.".concat(a), [].concat(n(o), [r])))
        },
        onReloadImage: function(t) {
            var i = this,
                a = t.currentTarget.dataset,
                r = a.date,
                o = a.idx;
            wx.showLoading({
                title: "重新加载中...",
                mask: !0
            }), wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getDiary",
                    date: r
                }
            }).then((function(t) {
                if (wx.hideLoading(), t.result && t.result.success && t.result.found) {
                    var e = t.result.data;
                    if (e && Array.isArray(e.imagePaths) && 0 !== e.imagePaths.length) {
                        var i = e.imagePaths,
                            a = i.filter((function(t) {
                                return t && t.startsWith("cloud://")
                            }));
                        return a.length > 0 ? wx.cloud.getTempFileURL({
                            fileList: a
                        }).then((function(t) {
                            var e = {};
                            return (t.fileList || []).forEach((function(t) {
                                t.fileID && t.tempFileURL && (e[t.fileID] = t.tempFileURL)
                            })), i.map((function(t) {
                                return e[t] || t
                            }))
                        })) : Promise.resolve(i)
                    }
                }
            })).then((function(t) {
                var a;
                if (t) {
                    var s = i.data.friendList.findIndex((function(t) {
                        return t.dateStr === r
                    }));
                    if (!(s < 0)) {
                        var d = i.data.friendList[s],
                            l = n(d.displayImages);
                        l[o] = t[o] || t[0] || d.displayImages[o];
                        var c = (i.data.imageErrors[r] || []).filter((function(t) {
                            return t !== o
                        }));
                        i.setData((e(a = {}, "friendList[".concat(s, "].displayImages"), l), e(a, "imageErrors.".concat(r), c), a))
                    }
                }
            })).catch((function() {
                wx.hideLoading(), wx.showToast({
                    title: "重新加载失败",
                    icon: "none"
                })
            }))
        },
        onPreviewFriendImage: function(t) {
            var e = t.currentTarget.dataset,
                i = e.idx,
                a = e.date,
                n = this.data.friendList.find((function(t) {
                    return t.dateStr === a
                }));
            if (n && n.displayImages.length) {
                var r = n.displayImages,
                    o = r[i];
                if (o)
                    if (o.startsWith("cloud://")) wx.showLoading({
                        mask: !0
                    }), wx.cloud.getTempFileURL({
                        fileList: r
                    }).then((function(t) {
                        wx.hideLoading();
                        var e = (t.fileList || []).map((function(t) {
                            return t.tempFileURL
                        })).filter(Boolean);
                        getApp().skipNextLockCheck(), wx.previewImage({
                            current: e[i] || e[0],
                            urls: e
                        })
                    })).catch((function() {
                        wx.hideLoading()
                    }));
                    else getApp().skipNextLockCheck(), wx.previewImage({
                        current: o,
                        urls: r
                    })
            }
        },
        onTapMomentUser: function() {},
        onTapDiary: function(t) {
            var e = t.currentTarget.dataset.date;
            e && wx.navigateTo({
                url: "/pages/diary-detail/diary-detail?date=".concat(e)
            })
        },
        onMomentMore: function(t) {
            var e = t.currentTarget.dataset.date;
            this.setData({
                showMomentAction: !0,
                momentActionDate: e
            })
        },
        closeMomentAction: function() {
            this.setData({
                showMomentAction: !1,
                momentActionDate: ""
            })
        },
        onMomentEditDiary: function(t) {
            var e = t.currentTarget.dataset.date || this.data.momentActionDate;
            e && (this.closeMomentAction(), getApp().skipNextLockCheck(), wx.navigateTo({
                url: "/pages/write/write?date=".concat(e)
            }))
        },
        onMomentDeleteDiary: function(t) {
            var e = this,
                i = t.currentTarget.dataset.date || this.data.momentActionDate;
            i && (this.closeMomentAction(), wx.showModal({
                title: "确认删除",
                content: "确定要删除这篇日记吗？删除后不可恢复。",
                confirmColor: "#FF4D4D",
                success: function(t) {
                    t.confirm && e.doDeleteFriendDiary(i)
                }
            }))
        },
        doDeleteFriendDiary: function(t) {
            var e = wx.getStorageSync("diaries") || {},
                i = ((e[t] || {}).imagePaths || []).filter((function(t) {
                    return t && t.startsWith("cloud://")
                }));
            delete e[t], wx.setStorageSync("diaries", e), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1);
            var a = (this.data._friendAllDates || []).filter((function(e) {
                return e !== t
            }));
            this.setData({
                _friendAllDates: a
            });
            var n = this.data.friendList.filter((function(e) {
                    return e.dateStr !== t
                })),
                r = this._buildGroupedList(n);
            this._setFriendList(r), wx.cloud.database().collection("diaries").where({
                date: t
            }).remove().then((function() {
                wx.showToast({
                    title: "已删除",
                    icon: "success"
                }), i.length > 0 && wx.cloud.deleteFile({
                    fileList: i
                }).catch((function() {}))
            })).catch((function() {
                wx.showToast({
                    title: "本地已清除",
                    icon: "none"
                })
            }))
        },
        onGoHomeWrite: function() {
            "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
                selected: 0
            }), wx.switchTab({
                url: "/pages/index/index"
            })
        },
        preventBubble: function() {},
        _applyIncrementalChanges: function(e) {
            var i, a = this,
                r = wx.getStorageSync("diaries") || {},
                o = n(this.data.friendList),
                s = this.data._friendAllDates ? n(this.data._friendAllDates) : [],
                d = t(e);
            try {
                var l = function() {
                    var t = i.value;
                    if ("delete" === t.action) o = o.filter((function(e) {
                        return e.dateStr !== t.date
                    })), s = s.filter((function(e) {
                        return e !== t.date
                    }));
                    else if ("update" === t.action) {
                        var e = r[t.date];
                        if (!(e && (e.content && e.content.trim() || e.imagePaths && e.imagePaths.length > 0 || !!e.isDraft))) return o = o.filter((function(e) {
                            return e.dateStr !== t.date
                        })), s = s.filter((function(e) {
                            return e !== t.date
                        })), "continue";
                        var n = o.findIndex((function(e) {
                                return e.dateStr === t.date
                            })),
                            d = a._buildFriendItem(t.date, e);
                        n >= 0 ? o[n] = d : (o.push(d), o.sort((function(t, e) {
                            return e.dateStr.localeCompare(t.dateStr)
                        })), s.includes(t.date) || (s.push(t.date), s.sort((function(t, e) {
                            return e.localeCompare(t)
                        }))))
                    }
                };
                for (d.s(); !(i = d.n()).done;) l()
            } catch (t) {
                d.e(t)
            } finally {
                d.f()
            }
            var c = this.data._friendHasMore || o.length > 0 && s.length > o.length;
            this._setFriendList(o, {
                _friendAllDates: s,
                _friendHasMore: c,
                _loadingFriend: !1,
                friendRefreshing: !1,
                _loadingMore: !1,
                friendLoadingMore: !1
            })
        },
        _setFriendList: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this.setData(a(a({
                friendList: t
            }, i ? {} : {
                _originalFriendList: t
            }), {}, {
                _diaryCount: t.length
            }, e))
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/calendar/calendar.js'
});
require("pages/calendar/calendar.js");