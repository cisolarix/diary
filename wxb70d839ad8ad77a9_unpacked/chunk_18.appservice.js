$gwx_XC_10 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];

        function gz$gwx_XC_10_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isImageBg']
                    ],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'background-image:url('],
                            [
                                [7],
                                [3, 'selectedBg']
                            ]
                        ],
                        [1, ');background-size:cover;background-position:center;']
                    ],
                    [1, '']
                ])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'content']
                    ]
                ])
                Z([3, 'panel-content'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'template']
                ])
                Z([
                    [7],
                    [3, 'showAddTemplate']
                ])
                Z([3, 'panel-scroll'])
                Z([
                    [7],
                    [3, 'templates']
                ])
                Z([3, 'id'])
                Z([
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'isGlobal']
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'templates']
                        ],
                        [3, 'length']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'bg']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'location']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'image']
                ])
                Z([
                    [2, '<'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'imagePaths']
                        ],
                        [3, 'length']
                    ],
                    [1, 4]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'font']
                ])
                Z([
                    [7],
                    [3, 'fontColors']
                ])
                Z([3, 'value'])
                Z([3, 'onChooseFontColor'])
                Z([a, [3, 'font-color-dot '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'textColor']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'value']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'value']
                ])
                Z([a, [3, 'background:'], z[20],
                    [3, ';']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'textColor']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'value']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_10 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_10 = true;
        var x = ['./pages/write/write.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_10_1()
            var cUC = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var oVC = _v()
            _(cUC, oVC)
            if (_oz(z, 2, e, s, gg)) {
                oVC.wxVkey = 1
            }
            var lWC = _n('view')
            _rz(z, lWC, 'class', 3, e, s, gg)
            var aXC = _v()
            _(lWC, aXC)
            if (_oz(z, 4, e, s, gg)) {
                aXC.wxVkey = 1
                var x3C = _v()
                _(aXC, x3C)
                if (_oz(z, 5, e, s, gg)) {
                    x3C.wxVkey = 1
                } else {
                    x3C.wxVkey = 2
                    var o4C = _mz(z, 'scroll-view', ['scrollY', -1, 'class', 6], [], e, s, gg)
                    var c6C = _v()
                    _(o4C, c6C)
                    var h7C = function(c9C, o8C, o0C, gg) {
                        var aBD = _v()
                        _(o0C, aBD)
                        if (_oz(z, 9, c9C, o8C, gg)) {
                            aBD.wxVkey = 1
                        }
                        aBD.wxXCkey = 1
                        return o0C
                    }
                    c6C.wxXCkey = 2
                    _2z(z, 7, h7C, e, s, gg, c6C, 'item', 'index', 'id')
                    var f5C = _v()
                    _(o4C, f5C)
                    if (_oz(z, 10, e, s, gg)) {
                        f5C.wxVkey = 1
                    }
                    f5C.wxXCkey = 1
                    _(x3C, o4C)
                }
                x3C.wxXCkey = 1
            }
            var tYC = _v()
            _(lWC, tYC)
            if (_oz(z, 11, e, s, gg)) {
                tYC.wxVkey = 1
            }
            var eZC = _v()
            _(lWC, eZC)
            if (_oz(z, 12, e, s, gg)) {
                eZC.wxVkey = 1
            }
            var b1C = _v()
            _(lWC, b1C)
            if (_oz(z, 13, e, s, gg)) {
                b1C.wxVkey = 1
                var tCD = _v()
                _(b1C, tCD)
                if (_oz(z, 14, e, s, gg)) {
                    tCD.wxVkey = 1
                }
                tCD.wxXCkey = 1
            }
            var o2C = _v()
            _(lWC, o2C)
            if (_oz(z, 15, e, s, gg)) {
                o2C.wxVkey = 1
                var eDD = _v()
                _(o2C, eDD)
                var bED = function(xGD, oFD, oHD, gg) {
                    var cJD = _mz(z, 'view', ['bindtap', 18, 'class', 1, 'data-color', 2, 'style', 3], [], xGD, oFD, gg)
                    var hKD = _v()
                    _(cJD, hKD)
                    if (_oz(z, 22, xGD, oFD, gg)) {
                        hKD.wxVkey = 1
                    }
                    hKD.wxXCkey = 1
                    _(oHD, cJD)
                    return oHD
                }
                eDD.wxXCkey = 2
                _2z(z, 16, bED, e, s, gg, eDD, 'item', 'index', 'value')
            }
            aXC.wxXCkey = 1
            tYC.wxXCkey = 1
            eZC.wxXCkey = 1
            b1C.wxXCkey = 1
            o2C.wxXCkey = 1
            _(cUC, lWC)
            oVC.wxXCkey = 1
            _(r, cUC)
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
                g = "$gwx_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_10();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/write/write.wxml'] = [$gwx_XC_10, './pages/write/write.wxml'];
else __wxAppCode__['pages/write/write.wxml'] = $gwx_XC_10('./pages/write/write.wxml');;
__wxRoute = "pages/write/write";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/write/write.js";
define("pages/write/write.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
        e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        a = require("../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../@babel/runtime/helpers/defineProperty"),
        i = require("../../@babel/runtime/helpers/toConsumableArray"),
        s = require("../../@babel/runtime/helpers/objectSpread2"),
        o = require("../../utils/cloud").requirePoints,
        r = ["今天吃什么呀~", "写点什么呢🤔", "今天有什么想记录的吗？", "记得多喝水哦💧", "天气真好呀☀️", "又在写日记啦", "今天也要加油鸭！", "要不要加个表情？", "字写得真好看✨", "发呆中...", "在想什么好事呢", "周末去哪玩~", "好想睡觉😴", "肚子饿了...", "你是最棒的！", "不要点我🙅", "别戳我啦~", "小手收一收✋", "再点哭给你看😭"];
    Page({
        data: {
            statusBarHeight: 0,
            navBarHeight: 38,
            dateStr: "",
            dateNum: "",
            year: "",
            month: "",
            weekdayStr: "",
            currentTime: "",
            fullDateStr: "",
            content: "",
            displayContent: "",
            location: "",
            latitude: null,
            longitude: null,
            canSave: !1,
            isSaving: !1,
            hasChanges: !1,
            showDeleteModal: !1,
            showExitModal: !1,
            showDraftTip: !1,
            templates: [],
            showAddTemplateModal: !1,
            newTemplateTitle: "",
            newTemplateContent: "",
            canSaveTemplate: !1,
            selectedBg: "",
            fontSize: 16,
            textColor: "#333333",
            fontWeight: 400,
            fontWeightLabel: "常规",
            pendingTemplate: null,
            showOverwriteModal: !1,
            editorFocus: !1,
            editorPlaceholder: "今天的开心、烦恼和小确幸，都可以写在这里～\n文字、图片都可以用",
            showSaveToast: !1,
            saveToastText: "保存成功",
            contentLength: 0,
            imagePaths: [],
            showThought: !1,
            thoughtText: "",
            keyboardHeight: 0,
            activePanel: null,
            panelHeight: 0,
            isImageBg: !1,
            bgImages: ["https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164706_406_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164707_407_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164708_408_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164709_409_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164710_410_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164710_411_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164711_412_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164704_403_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164705_404_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164705_405_38.jpg"],
            bgScrollLeft: 0,
            fontColors: [{
                value: "#333333",
                name: "默认黑"
            }, {
                value: "#1A1A1A",
                name: "纯黑"
            }, {
                value: "#666666",
                name: "深灰"
            }, {
                value: "#999999",
                name: "灰色"
            }, {
                value: "#EE5A52",
                name: "红色"
            }, {
                value: "#FF8C42",
                name: "橙色"
            }, {
                value: "#F5A623",
                name: "黄色"
            }, {
                value: "#FF6B8A",
                name: "粉色"
            }, {
                value: "#8B5E3C",
                name: "棕色"
            }, {
                value: "#5B9BD5",
                name: "蓝色"
            }, {
                value: "#4CD964",
                name: "绿色"
            }, {
                value: "#AF52DE",
                name: "紫色"
            }, {
                value: "#00BCD4",
                name: "青色"
            }, {
                value: "#2ECC71",
                name: "草绿"
            }, {
                value: "#E8A87C",
                name: "珊瑚"
            }, {
                value: "#95A5A6",
                name: "银灰"
            }, {
                value: "#5D4E37",
                name: "咖啡"
            }, {
                value: "#C0392B",
                name: "酒红"
            }]
        },
        originalContent: "",
        originalLocation: "",
        originalImages: [],
        onLoad: function(t) {
            var e = this;
            this._saving = !1, this._unloadGuardActive = !1, this._loadTextSettings();
            var a = wx.getStorageSync("points");
            void 0 !== a && "" !== a && parseInt(a) > 0 ? this.setData({
                points: parseInt(a) || 0
            }) : getApp().globalData.initPromise.then((function() {
                var t = wx.getStorageSync("points") || 0;
                e.setData({
                    points: parseInt(t) || 0
                })
            }));
            var n = wx.getSystemInfoSync();
            this._isIOS = /iOS/i.test(n.system || ""), this._safeAreaBottom = n.safeArea ? n.screenHeight - n.safeArea.bottom : 0, this._fixedPanelHeight = Math.min(Math.max(320, Math.round(.4 * n.screenHeight)), 400);
            var i = new Date,
                s = i.getFullYear(),
                o = String(i.getMonth() + 1).padStart(2, "0"),
                r = String(i.getDate()).padStart(2, "0"),
                l = t.date || "".concat(s, "-").concat(o, "-").concat(r),
                c = l === "".concat(s, "-").concat(o, "-").concat(r),
                h = this.parseDate(l),
                d = h.getFullYear(),
                u = String(parseInt(l.split("-")[2])),
                g = String(parseInt(l.split("-")[1])),
                m = this.formatTime(i);
            this._pendingBaseData = {
                statusBarHeight: n.statusBarHeight || 20,
                dateStr: l,
                isToday: c,
                dateNum: u,
                year: String(d),
                month: g,
                weekdayStr: this.getWeekday(h),
                currentTime: m,
                fullDateStr: "".concat(d, "年").concat(g, "月").concat(u, "日")
            }, this.loadDiary(l), this.loadTemplates(), this._fromDraftReminder = "1" === t.fromDraft, this.startRobotThought(), t.pointsCost && wx.showToast({
                title: "已消耗" + t.pointsCost + "积分",
                icon: "none",
                duration: 1500
            })
        },
        parseDate: function(t) {
            var e = t.split("-");
            return 3 === e.length ? new Date(parseInt(e[0]), parseInt(e[1]) - 1, parseInt(e[2])) : new Date
        },
        getWeekday: function(t) {
            return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][t.getDay()]
        },
        formatTime: function(t) {
            return "".concat(String(t.getHours()).padStart(2, "0"), ":").concat(String(t.getMinutes()).padStart(2, "0"))
        },
        loadDiary: function(t) {
            var e, a, n, o, r, l, c = this,
                h = (wx.getStorageSync("diaries") || {})[t || this.data.dateStr],
                d = wx.getStorageSync("userBgSetting");
            h ? (a = h.content || "", n = h.location || "", o = h.latitude || null, r = h.longitude || null, e = d || h.background || "", l = h.imagePaths || []) : (a = "", n = "", o = null, r = null, e = d || "", l = []), d || this._fetchUserBgFromCloud(), this.setData(s(s({}, this._pendingBaseData), {}, {
                content: a,
                displayContent: a,
                location: n,
                latitude: o,
                longitude: r,
                canSave: a.length > 0 || l && l.length > 0,
                selectedBg: e,
                isImageBg: !(!e || !e.startsWith("http")),
                contentLength: a.length,
                imagePaths: l
            })), this._pendingBaseData = null, this._contentDraft = a, this._lastContent = a, this._lastCanSave = a.length > 0 || l && l.length > 0, this._lastHasChanges = !1, this._imagesDirty = !1, this.originalContent = a, this.originalLocation = n, this.originalImages = l ? i(l) : [], h && !0 === h.isDraft && a && !this._fromDraftReminder && (this.setData({
                showDraftTip: !0
            }), setTimeout((function() {
                return c.setData({
                    showDraftTip: !1
                })
            }), 3e3)), e && e.startsWith("http") && wx.getImageInfo({
                src: e
            }).catch((function() {}));
            var u = h && h.imagePaths && h.imagePaths.length > 0,
                g = h && !0 === h.isDraft;
            u || g || this._fetchDiaryFromCloud(t || this.data.dateStr)
        },
        _fetchUserBgFromCloud: function() {
            var t = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getUserBg"
                }
            }).then((function(e) {
                if (e.result && e.result.success && e.result.bgUrl) {
                    var a = e.result.bgUrl;
                    wx.setStorageSync("userBgSetting", a), wx.getImageInfo({
                        src: a
                    }).catch((function() {})), t.setData({
                        selectedBg: a,
                        isImageBg: !0
                    })
                }
            })).catch((function() {}))
        },
        _fetchDiaryFromCloud: function(t) {
            var e = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getDiary",
                    date: t
                }
            }).then((function(a) {
                if (a.result && a.result.success && a.result.found) {
                    var n = a.result.data;
                    if (n && (n.content || n.imagePaths && n.imagePaths.length > 0)) {
                        var s = wx.getStorageSync("diaries") || {},
                            o = (s[t] || {}).imagePaths || [],
                            r = n.imagePaths || [],
                            l = new Set([].concat(i(o), i(r))),
                            c = i(l);
                        s[t] = {
                            content: n.content || "",
                            location: n.location || "",
                            latitude: n.latitude || null,
                            longitude: n.longitude || null,
                            background: n.background || "plain",
                            imagePaths: c,
                            updateTime: n.updateTime ? new Date(n.updateTime).getTime() : Date.now()
                        }, wx.setStorageSync("diaries", s);
                        var h = wx.getStorageSync("userBgSetting") || "" || n.background || "";
                        e._isRestoring = !0, e._contentDraft = n.content || "", e._lastContent = n.content || "";
                        var d = c;
                        e.setData({
                            content: n.content || "",
                            displayContent: n.content || "",
                            location: n.location || "",
                            latitude: n.latitude || null,
                            longitude: n.longitude || null,
                            selectedBg: h,
                            isImageBg: !(!h || !h.startsWith("http")),
                            contentLength: (n.content || "").length,
                            imagePaths: d,
                            canSave: !!(n.content && n.content.length > 0) || d.length > 0 || n.imagePaths && n.imagePaths.length > 0
                        }), h && h.startsWith("http") && wx.getImageInfo({
                            src: h
                        }).catch((function() {})), e._pendingBaseData = null, e._lastCanSave = !!(n.content && n.content.length > 0) || d.length > 0, e._lastHasChanges = d.length > 0, e.originalContent = n.content || "", e.originalLocation = n.location || "", e.originalImages = d.slice(0), setTimeout((function() {
                            e._isRestoring = !1
                        }), 300)
                    }
                }
            })).catch((function(t) {}))
        },
        onEditorFocus: function(t) {},
        onEditorBlur: function() {
            null != this._contentDraft && this._contentDraft !== this.data.displayContent && this.setData({
                displayContent: this._contentDraft
            })
        },
        onCollapseKeyboard: function() {
            this.setData({
                editorFocus: !1
            }), wx.hideKeyboard()
        },
        onSwitchToKeyboard: function() {
            this._pendingPanelMeasure = !1, this.setData({
                activePanel: null,
                panelHeight: 0,
                showAddTemplate: !1,
                editorFocus: !0
            })
        },
        _lastCanSave: !1,
        _lastHasChanges: !1,
        _lastContent: "",
        onInput: function(t) {
            var e = this;
            if (!this._isRestoring) {
                var a, n = t.detail.value,
                    i = n.length;
                this._contentDraft = n, n === this._lastContent ? a = this._lastHasChanges : (a = n !== this.originalContent || this.data.location !== this.originalLocation, this._lastContent = n);
                var s = i > 0 || this.data.imagePaths && this.data.imagePaths.length > 0,
                    o = {
                        content: n,
                        contentLength: i
                    };
                s !== this._lastCanSave && (o.canSave = s, this._lastCanSave = s), a !== this._lastHasChanges && (o.hasChanges = a, this._lastHasChanges = a, a && !this._unloadGuardActive && (wx.enableAlertBeforeUnload({
                    message: "有未保存的内容，离开后数据将丢失"
                }), this._unloadGuardActive = !0)), this.setData(o), i > 50 && !this._scrollTimer && (this._scrollTimer = setTimeout((function() {
                    e._scrollTimer = null, wx.createSelectorQuery().select(".editor-fixed").boundingClientRect((function(t) {
                        t && wx.pageScrollTo({
                            scrollTop: t.top + t.height - 200,
                            duration: 150
                        })
                    })).exec()
                }), 200))
            }
        },
        openPanel: function(t) {
            var e = this;
            if (this.data.activePanel !== t) {
                if ("bg" === t && this.data.selectedBg) {
                    var a = this.data.bgImages.indexOf(this.data.selectedBg);
                    if (a >= 0) {
                        var n = Math.max(0, 110 * a - 187.5 + 50);
                        this.setData({
                            bgScrollLeft: -1
                        }), wx.nextTick((function() {
                            e.setData({
                                bgScrollLeft: n
                            })
                        }))
                    }
                }
                wx.hideKeyboard(), this.data.keyboardHeight > 0 ? (this._pendingPanelMeasure = !0, this.setData({
                    activePanel: t,
                    showAddTemplate: !1,
                    editorFocus: !1,
                    panelHeight: 0
                })) : this.setData({
                    activePanel: t,
                    showAddTemplate: !1,
                    editorFocus: !1,
                    panelHeight: this._fixedPanelHeight
                })
            } else this.setData({
                activePanel: null,
                panelHeight: 0,
                showAddTemplate: !1
            })
        },
        onKeyboardHeightChange: function(t) {
            var e = t.detail.height || 0;
            this.setData({
                keyboardHeight: e
            }), 0 === e && this._pendingPanelMeasure && (this._pendingPanelMeasure = !1, this.setData({
                panelHeight: this._fixedPanelHeight
            }))
        },
        closePanel: function() {
            this._pendingPanelMeasure = !1, this.setData({
                activePanel: null,
                panelHeight: 0,
                showAddTemplate: !1
            })
        },
        loadTemplates: function() {
            var t = this,
                e = (wx.getStorageSync("diaryTemplates") || []).filter((function(t) {
                    return !t.isGlobal
                })),
                a = wx.getStorageSync("globalTemplateCache");
            if (a && a.data && Date.now() - a.time < 6e5) {
                var n = [].concat(i(e), i(a.data));
                return this.setData({
                    templates: n
                }), void this.syncUserTemplatesFromCloud()
            }
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getGlobalTemplates"
                }
            }).then((function(e) {
                var a = (wx.getStorageSync("diaryTemplates") || []).filter((function(t) {
                    return !t.isGlobal
                }));
                if (e.result && e.result.success) {
                    var n = e.result.templates || [];
                    wx.setStorageSync("globalTemplateCache", {
                        data: n,
                        time: Date.now()
                    });
                    var s = [].concat(i(a), i(n));
                    t.setData({
                        templates: s
                    })
                } else t.setData({
                    templates: a
                });
                t.syncUserTemplatesFromCloud()
            })).catch((function() {
                var e = (wx.getStorageSync("diaryTemplates") || []).filter((function(t) {
                    return !t.isGlobal
                }));
                t.setData({
                    templates: e
                }), t.syncUserTemplatesFromCloud()
            }))
        },
        syncUserTemplatesFromCloud: function() {
            var t = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getUserTemplates"
                }
            }).then((function(e) {
                if (e.result && e.result.success) {
                    var a = e.result.templates || [];
                    if (0 !== a.length) {
                        var n = (wx.getStorageSync("diaryTemplates") || []).filter((function(t) {
                                return !t.isGlobal
                            })),
                            s = new Set(a.map((function(t) {
                                return t.id
                            }))),
                            o = n.filter((function(t) {
                                return !s.has(t.id)
                            })),
                            r = [].concat(i(a), i(o));
                        if (r.length !== n.length || JSON.stringify(r.map((function(t) {
                                return t.id
                            })).sort()) !== JSON.stringify(n.map((function(t) {
                                return t.id
                            })).sort())) {
                            wx.setStorageSync("diaryTemplates", r);
                            var l = t.data.templates.filter((function(t) {
                                return t.isGlobal
                            }));
                            t.setData({
                                templates: [].concat(i(r), i(l))
                            })
                        }
                    }
                }
            })).catch((function() {}))
        },
        onTplTouchStart: function(t) {
            var e = t.currentTarget.dataset.index,
                a = t.currentTarget.dataset.id,
                n = this.data.templates[e];
            this._tplTouchStartTime = Date.now(), this._tplCurrentIndex = e, this._tplTapId = a, this._tplHasMoved = !1, n && n.isGlobal || (this._tplTouchStartX = t.touches[0].clientX, this._tplTouchStartY = t.touches[0].clientY, this._tplStartTranslateX = n && n.translateX || 0, this.resetTplSwipes(e))
        },
        resetTplSwipes: function(t) {
            var e = this.data.templates;
            if (e && e.length) {
                var a = {},
                    n = !1;
                e.forEach((function(e, i) {
                    i !== t && e.translateX && 0 !== e.translateX && (a["templates[".concat(i, "].translateX")] = 0, n = !0)
                })), n && this.setData(a)
            }
        },
        resetAllTplSwipes: function() {
            var t = this.data.templates;
            if (t && t.length) {
                var e = {},
                    a = !1;
                t.forEach((function(t, n) {
                    t.translateX && 0 !== t.translateX && (e["templates[".concat(n, "].translateX")] = 0, a = !0)
                })), a && this.setData(e)
            }
        },
        onTplTouchMove: function(t) {
            var e = this;
            if (void 0 !== this._tplCurrentIndex) {
                var a = this.data.templates[this._tplCurrentIndex];
                if (!a || !a.isGlobal) {
                    var i = t.touches[0].clientX - this._tplTouchStartX,
                        s = t.touches[0].clientY - this._tplTouchStartY;
                    if (Math.abs(s) > Math.abs(i)) Math.abs(s) > 3 && (this._tplHasMoved = !0);
                    else {
                        Math.abs(i) > 3 && (this._tplHasMoved = !0);
                        var o = this._tplStartTranslateX + i;
                        o < -140 && (o = -140), o > 0 && (o = 0), this._tplTranslateX = o, this._tplRafId || (this._tplRafId = function() {
                            e.setData(n({}, "templates[".concat(e._tplCurrentIndex, "].translateX"), e._tplTranslateX)), e._tplRafId = null
                        }, setTimeout((function() {
                            e._tplRafId && "function" == typeof e._tplRafId && e._tplRafId()
                        }), 33))
                    }
                }
            }
        },
        onTplTouchEnd: function(t) {
            if (void 0 !== this._tplCurrentIndex) {
                this._tplRafId = null;
                var e = this._tplCurrentIndex,
                    a = this.data.templates[e],
                    i = void 0 !== this._tplTranslateX ? this._tplTranslateX : a && a.translateX || 0,
                    s = Date.now() - this._tplTouchStartTime;
                if (!this._tplHasMoved && s < 200) {
                    var o = a;
                    o && o.content && this.onUseTemplateDirect(o)
                } else {
                    var r = 0;
                    i < -30 && (r = -140), this.setData(n({}, "templates[".concat(e, "].translateX"), r))
                }
                this._tplTranslateX = void 0, this._tplCurrentIndex = void 0, this._tplHasMoved = !1
            }
        },
        onUseTemplateDirect: function(t) {
            if (t && t.content) return this.data.content.trim().length > 0 ? (wx.hideKeyboard(), void this.setData({
                pendingTemplate: t,
                showOverwriteModal: !0,
                editorFocus: !1,
                activePanel: null,
                panelHeight: 0
            })) : void this.applyTemplate(t)
        },
        onEditTemplate: function(t) {
            var e = t.currentTarget.dataset.index,
                a = this.data.templates[e];
            a && (this.resetAllTplSwipes(), this.setData({
                showAddTemplate: !0,
                editingTemplateIndex: e,
                editingTemplateId: a.id,
                newTemplateTitle: a.title || "",
                newTemplateContent: a.content || "",
                canSaveTemplate: !!(a.title && a.title.trim() && a.content && a.content.trim())
            }))
        },
        onDeleteTemplate: function(t) {
            var e = t.currentTarget.dataset.index,
                a = this.data.templates;
            this.resetAllTplSwipes();
            var n = i(a);
            n.splice(e, 1);
            var s = n.filter((function(t) {
                return !t.isGlobal
            }));
            wx.setStorageSync("diaryTemplates", s), wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "saveUserTemplates",
                    templates: s
                }
            }).catch((function() {})), this.setData({
                templates: n
            }), wx.showToast({
                title: "已删除",
                icon: "success",
                duration: 1500
            })
        },
        onUseTemplate: function(t) {
            var e = t.currentTarget.dataset.template;
            if (e && e.content) return this.data.content.trim().length > 0 ? (wx.hideKeyboard(), void this.setData({
                pendingTemplate: e,
                showOverwriteModal: !0,
                editorFocus: !1,
                activePanel: null,
                panelHeight: 0
            })) : void this.applyTemplate(e)
        },
        onCancelOverwrite: function() {
            this.setData({
                showOverwriteModal: !1,
                pendingTemplate: null
            })
        },
        onConfirmOverwrite: function() {
            var t = this.data.pendingTemplate;
            this.setData({
                showOverwriteModal: !1,
                pendingTemplate: null
            }), t && this.applyTemplate(t)
        },
        applyTemplate: function(t) {
            this._lastCanSave = t.content.length > 0, this._lastHasChanges = !0, this._contentDraft = t.content, this.setData({
                content: t.content,
                displayContent: t.content,
                canSave: this._lastCanSave,
                hasChanges: !0,
                activePanel: null,
                panelHeight: 0
            }), this._unloadGuardActive || (wx.enableAlertBeforeUnload({
                message: "有未保存的内容，离开后数据将丢失"
            }), this._unloadGuardActive = !0)
        },
        onAddTemplate: function() {
            this.data.templates.filter((function(t) {
                return !t.isGlobal
            })).length >= 7 ? wx.showToast({
                title: "最多创建7个自定义模板",
                icon: "none",
                duration: 2e3
            }) : this.setData({
                showAddTemplate: !0,
                editingTemplateIndex: null,
                editingTemplateId: null,
                newTemplateTitle: "",
                newTemplateContent: "",
                canSaveTemplate: !1
            })
        },
        onCloseAddTemplate: function() {
            this.setData({
                showAddTemplate: !1,
                editingTemplateIndex: null,
                editingTemplateId: null
            })
        },
        onTemplateTitleInput: function(t) {
            var e = t.detail.value,
                a = e.trim().length > 0 && this.data.newTemplateContent.trim().length > 0;
            this.setData({
                newTemplateTitle: e,
                canSaveTemplate: a
            })
        },
        onTemplateContentInput: function(t) {
            var e = t.detail.value,
                a = this.data.newTemplateTitle.trim().length > 0 && e.trim().length > 0;
            this.setData({
                newTemplateContent: e,
                canSaveTemplate: a
            })
        },
        onSaveTemplate: function() {
            var t = this;
            return a(e().mark((function a() {
                var n, r, l, c, h, d, u, g, m, p, f, S, w;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (t.data.canSaveTemplate) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (n = t.data.editingTemplateIndex, r = null != n && "" !== n) {
                                e.next = 11;
                                break
                            }
                            return e.next = 7, o(20, "save_template", "保存自定义模板");
                        case 7:
                            if ((l = e.sent).ok) {
                                e.next = 10;
                                break
                            }
                            return e.abrupt("return");
                        case 10:
                            t.setData({
                                points: l.newTotal
                            });
                        case 11:
                            c = t.data, h = c.newTemplateTitle, d = c.newTemplateContent, u = c.templates, g = c.editingTemplateId, r && g ? (m = u.map((function(t, e) {
                                return e === n ? s(s({}, t), {}, {
                                    title: h.trim(),
                                    content: d.trim()
                                }) : t
                            })), p = m.filter((function(t) {
                                return !t.isGlobal
                            })), wx.setStorageSync("diaryTemplates", p), wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "saveUserTemplates",
                                    templates: p
                                }
                            }).catch((function() {})), t.setData({
                                templates: m,
                                showAddTemplate: !1,
                                editingTemplateIndex: null,
                                editingTemplateId: null,
                                newTemplateTitle: "",
                                newTemplateContent: "",
                                canSaveTemplate: !1
                            }), wx.showToast({
                                title: "模板已更新",
                                icon: "success",
                                duration: 1500
                            })) : (f = {
                                id: Date.now().toString(),
                                title: h.trim(),
                                content: d.trim(),
                                createTime: Date.now()
                            }, S = [f].concat(i(u)), w = S.filter((function(t) {
                                return !t.isGlobal
                            })), wx.setStorageSync("diaryTemplates", w), wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "saveUserTemplates",
                                    templates: w
                                }
                            }).catch((function() {})), t.setData({
                                templates: S,
                                showAddTemplate: !1,
                                newTemplateTitle: "",
                                newTemplateContent: "",
                                canSaveTemplate: !1
                            }), wx.showToast({
                                title: "模板保存成功，消耗20积分",
                                icon: "none",
                                duration: 2e3
                            }));
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), a)
            })))()
        },
        onOpenLocationPanel: function() {
            this.openPanel("location")
        },
        onClearLocation: function() {
            if (!!this.data.location) {
                var t = this.data.content !== this.originalContent;
                this._lastHasChanges = t, this.setData({
                    location: "",
                    latitude: null,
                    longitude: null,
                    hasChanges: t
                }), t || this._disableUnloadGuard()
            }
        },
        onChooseLocation: function() {
            var t = this,
                e = getApp();
            !!this.data.activePanel && (this._pendingReopenPanel = this.data.activePanel, this.setData({
                activePanel: null,
                panelHeight: 0
            })), wx.chooseLocation({
                success: function(e) {
                    var a = e.name || e.address,
                        n = t.data.content !== t.originalContent || a !== t.originalLocation;
                    t._lastHasChanges = n, t.setData({
                        location: a,
                        latitude: e.latitude,
                        longitude: e.longitude,
                        hasChanges: n
                    }), n && !t._unloadGuardActive && (wx.enableAlertBeforeUnload({
                        message: "有未保存的内容，离开后数据将丢失"
                    }), t._unloadGuardActive = !0), t._pendingReopenPanel && setTimeout((function() {
                        t.openPanel(t._pendingReopenPanel), t._pendingReopenPanel = null
                    }), 300)
                },
                fail: function(e) {
                    -1 !== e.errMsg.indexOf("auth deny") && wx.showModal({
                        title: "提示",
                        content: "需要授权位置信息才能选择位置",
                        success: function(t) {
                            t.confirm && wx.openSetting()
                        }
                    }), t._pendingReopenPanel && setTimeout((function() {
                        t.openPanel(t._pendingReopenPanel), t._pendingReopenPanel = null
                    }), 300)
                },
                complete: function() {
                    e.globalData.skipLock = !0
                }
            })
        },
        onSave: function(t) {
            if (this._lastCanSave && !this._saving) {
                if (this._saving = !0, !(this.data.content.trim().length > 0 || this.data.imagePaths && this.data.imagePaths.length > 0)) return wx.showToast({
                    title: "请输入内容后再保存",
                    icon: "none",
                    duration: 1500
                }), void(this._saving = !1);
                if (this.data.content.length > 2e3) return wx.showToast({
                    title: "内容长度限制2000",
                    icon: "none",
                    duration: 2e3
                }), this._saving = !1, void this.setData({
                    isSaving: !1
                });
                if (!this._checkHasRealChanges()) return this.setData({
                    isSaving: !0
                }), void this.saveDraftOnly();
                this.setData({
                    isSaving: !0
                }), this.saveAndBack()
            }
        },
        _checkHasRealChanges: function() {
            if (this._imagesDirty) return !0;
            var t = this.data,
                e = t.content,
                a = t.location,
                n = (t.imagePaths || []).join(","),
                i = (this.originalImages || []).join(",");
            return e !== this.originalContent || a !== this.originalLocation || n !== i
        },
        saveDraftOnly: function() {
            var t = this.data,
                e = t.dateStr,
                a = t.content,
                n = t.location,
                i = t.latitude,
                o = t.longitude,
                r = t.selectedBg,
                l = t.imagePaths,
                c = wx.getStorageSync("diaries") || {},
                h = c[e];
            c[e] = s(s({
                content: a,
                location: n,
                latitude: i,
                longitude: o,
                background: r,
                imagePaths: l || []
            }, h && h._synced ? {
                _synced: !0
            } : {}), {}, {
                updateTime: Date.now()
            }), wx.setStorageSync("diaries", c), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), this._addDiaryChange(e, "update"), this._lastHasChanges = !1, this._imagesDirty = !1, this.setData({
                hasChanges: !1,
                isSaving: !1
            }), this._saving = !1, this._disableUnloadGuard(), this._justSaved = !0, wx.hideLoading(), this.showSaveToast("已保存"), setTimeout((function() {
                wx.navigateBack()
            }), 600)
        },
        saveAndBack: function() {
            var t = this;
            return a(e().mark((function a() {
                var n, s, o, r, l, c, h, d, u, g, m, p;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.data, s = n.dateStr, o = n.content, r = n.location, l = n.latitude, c = n.longitude, h = n.selectedBg, d = n.imagePaths, 500, 2e3, !(o && o.trim() && o.length <= 500)) {
                                e.next = 19;
                                break
                            }
                            return e.prev = 4, u = wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "msgSecCheck",
                                    content: o
                                }
                            }), g = new Promise((function(t, e) {
                                return setTimeout((function() {
                                    return e(new Error("timeout"))
                                }), 2e3)
                            })), e.next = 9, Promise.race([u, g]);
                        case 9:
                            if (!(m = e.sent).result || m.result.pass) {
                                e.next = 15;
                                break
                            }
                            return wx.showToast({
                                title: m.result.reason || "内容包含敏感信息",
                                icon: "none",
                                duration: 2e3
                            }), t._saving = !1, t.setData({
                                isSaving: !1
                            }), e.abrupt("return");
                        case 15:
                            e.next = 19;
                            break;
                        case 17:
                            e.prev = 17, e.t0 = e.catch(4);
                        case 19:
                            (p = wx.getStorageSync("diaries") || {})[s] = {
                                content: o,
                                location: r,
                                latitude: l,
                                longitude: c,
                                background: h,
                                imagePaths: d || [],
                                updateTime: Date.now()
                            }, wx.setStorageSync("diaries", p), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), t._addDiaryChange(s, "update"), t._lastHasChanges = !1, t.setData({
                                hasChanges: !1
                            }), t.originalContent = o, t.originalLocation = r, t.originalImages = d ? i(d) : [], t._imagesDirty = !1, t._finishSave("保存成功"), t._syncToCloud(s, p[s]);
                        case 32:
                        case "end":
                            return e.stop()
                    }
                }), a, null, [
                    [4, 17]
                ])
            })))()
        },
        _syncToCloud: function(t, e) {
            var a = this,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                i = 2;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "saveDiary",
                    date: t,
                    diary: e
                }
            }).then((function(e) {
                if (e.result && e.result.success) {
                    var a = wx.getStorageSync("diaries") || {};
                    a[t] && (a[t]._synced = !0, delete a[t].isDraft, wx.setStorageSync("diaries", a))
                }
            })).catch((function(s) {
                if (console.error("云端同步失败:", s), n < i) setTimeout((function() {
                    a._syncToCloud(t, e, n + 1)
                }), 2e3 * (n + 1));
                else {
                    var o = wx.getStorageSync("diaries") || {};
                    o[t] && (o[t]._pendingSync = !0, wx.setStorageSync("diaries", o))
                }
            }))
        },
        _finishSave: function(t) {
            wx.hideLoading(), this.setData({
                isSaving: !1
            }), this._saving = !1, this._disableUnloadGuard(), this._justSaved = !0, this.showSaveToast(t), setTimeout((function() {
                wx.navigateBack()
            }), 1400)
        },
        confirmDelete: function() {
            this.setData({
                showDeleteModal: !0
            })
        },
        onCancelDelete: function() {
            this.setData({
                showDeleteModal: !1
            })
        },
        onConfirmDelete: function() {
            var t = this,
                e = this.data,
                a = e.dateStr,
                n = e.imagePaths;
            this.setData({
                showDeleteModal: !1
            }), wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "deleteDiary",
                    date: a
                }
            }).then((function() {
                var e = wx.getStorageSync("diaries") || {};
                delete e[a], wx.setStorageSync("diaries", e), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), t._addDiaryChange(a, "delete");
                var i = (n || []).filter((function(t) {
                    return t && t.startsWith("cloud://")
                }));
                i.length > 0 && wx.cloud.deleteFile({
                    fileList: i
                }).catch((function() {})), wx.showToast({
                    title: "删除成功",
                    icon: "success"
                }), setTimeout((function() {
                    wx.navigateBack()
                }), 1e3)
            })).catch((function(t) {
                wx.showToast({
                    title: "删除失败，请检查网络",
                    icon: "none",
                    duration: 2e3
                })
            }))
        },
        _loadTextSettings: function() {
            var t = wx.getStorageSync("writeFontSize") || 16,
                e = wx.getStorageSync("writeTextColor") || "#333333",
                a = wx.getStorageSync("writeFontWeight") || 400,
                n = this._getFontWeightLabel(a);
            this.setData({
                fontSize: t,
                textColor: e,
                fontWeight: a,
                fontWeightLabel: n
            })
        },
        onFontSizeChanging: function(t) {
            this.setData({
                fontSize: t.detail.value
            })
        },
        onFontSizeChange: function(t) {
            var e = t.detail.value;
            wx.setStorageSync("writeFontSize", e), this.setData({
                fontSize: e
            })
        },
        onChooseFontColor: function(t) {
            var e = t.currentTarget.dataset.color;
            wx.setStorageSync("writeTextColor", e), this.setData({
                textColor: e
            })
        },
        _getFontWeightLabel: function(t) {
            return {
                100: "极细",
                200: "细体",
                300: "轻体",
                400: "常规",
                500: "中粗",
                600: "半粗",
                700: "粗体",
                800: "特粗",
                900: "极粗"
            }[t] || "常规"
        },
        onFontWeightChanging: function(t) {
            var e = t.detail.value;
            this.setData({
                fontWeight: e,
                fontWeightLabel: this._getFontWeightLabel(e)
            })
        },
        onFontWeightChange: function(t) {
            var e = t.detail.value;
            wx.setStorageSync("writeFontWeight", e), this.setData({
                fontWeight: e,
                fontWeightLabel: this._getFontWeightLabel(e)
            })
        },
        preventBubble: function() {},
        onNavigateBack: function() {
            this.data.hasChanges ? this.setData({
                showExitModal: !0
            }) : wx.navigateBack()
        },
        onCancelExit: function() {
            this.setData({
                showExitModal: !1
            })
        },
        onConfirmNoSave: function() {
            this.setData({
                showExitModal: !1
            }), this._disableUnloadGuard(), wx.navigateBack()
        },
        onConfirmSave: function() {
            this.setData({
                showExitModal: !1
            }), this.onSave()
        },
        _disableUnloadGuard: function() {
            if (this._unloadGuardActive) {
                try {
                    wx.disableAlertBeforeUnload()
                } catch (t) {}
                this._unloadGuardActive = !1
            }
        },
        _addDiaryChange: function(t, e) {
            if (t) {
                var a = (wx.getStorageSync("_diary_changes") || []).filter((function(a) {
                    return !(a.date === t && a.action === e)
                }));
                a.push({
                    date: t,
                    action: e,
                    time: Date.now()
                }), wx.setStorageSync("_diary_changes", a)
            }
        },
        onUnload: function() {
            clearTimeout(this.thoughtTimer), clearTimeout(this.hideTimer), clearTimeout(this._scrollTimer), this._disableUnloadGuard(), this._saveDraftToStorage()
        },
        onHide: function() {
            this._saveDraftToStorage()
        },
        _saveDraftToStorage: function() {
            if (!this._saving && !this._justSaved) {
                var t = this.data,
                    e = t.dateStr,
                    a = t.content,
                    n = t.location,
                    i = t.latitude,
                    o = t.longitude,
                    r = t.selectedBg,
                    l = t.imagePaths;
                if (a && a.trim()) {
                    var c = wx.getStorageSync("diaries") || {},
                        h = c[e];
                    if (h) {
                        var d = a === this.originalContent,
                            u = n === (this.originalLocation || ""),
                            g = (l || []).join(",") === (this.originalImages || []).join(",");
                        if (d && u && g) return
                    }
                    c[e] = s(s({
                        content: a,
                        location: n,
                        latitude: i,
                        longitude: o,
                        background: r,
                        imagePaths: l || []
                    }, h && h._synced ? {
                        _synced: !0
                    } : {}), {}, {
                        isDraft: !0,
                        updateTime: Date.now()
                    }), wx.setStorageSync("diaries", c), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), this._addDiaryChange(e, "update");
                    var m = wx.getStorageSync("draftDismissed") || {};
                    m[e] && (delete m[e], wx.setStorageSync("draftDismissed", m))
                }
            }
        },
        onSelectTemplate: function() {
            this.openPanel("template")
        },
        onSelectBackground: function() {
            this.openPanel("bg")
        },
        onOpenImagePanel: function() {
            this.openPanel("image")
        },
        onOpenFontSettings: function() {
            this.openPanel("font")
        },
        onChooseBg: function(t) {
            var e = t.currentTarget.dataset.bg;
            if (e) {
                if (e === this.data.selectedBg) return this.setData({
                    selectedBg: "",
                    isImageBg: !1
                }), wx.removeStorageSync("userBgSetting"), void wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "saveUserBg",
                        bgUrl: ""
                    }
                }).catch((function() {}));
                this.setData({
                    selectedBg: e,
                    isImageBg: !0
                }), wx.setStorageSync("userBgSetting", e), e && e.startsWith("http") && wx.getImageInfo({
                    src: e
                }).catch((function() {})), wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "saveUserBg",
                        bgUrl: e
                    }
                }).catch((function() {}))
            }
        },
        showSaveToast: function(t) {
            var e = this;
            this.setData({
                showSaveToast: !0,
                saveToastText: t || "保存成功"
            }), setTimeout((function() {
                e.setData({
                    showSaveToast: !1
                })
            }), 1200)
        },
        onChooseImage: function() {
            var n, s = this,
                r = 4 - this.data.imagePaths.length;
            r <= 0 ? wx.showToast({
                title: "最多添加4张图片",
                icon: "none"
            }) : (getApp().skipNextLockCheck(), wx.chooseMedia({
                count: r,
                mediaType: ["image"],
                sourceType: ["album", "camera"],
                sizeType: ["compressed"],
                success: (n = a(e().mark((function n(r) {
                    var l, c, h, d, u, g, m, p, f, S, w, v, _, T, x;
                    return e().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (!((l = r.tempFiles.filter((function(t) {
                                        return t.size > 5242880
                                    }))).length > 0)) {
                                    n.next = 6;
                                    break
                                }
                                return c = (l[0].size / 1048576).toFixed(1), wx.showToast({
                                    title: "图片".concat(c, "MB，限5M内"),
                                    icon: "none",
                                    duration: 2e3
                                }), n.abrupt("return");
                            case 6:
                                return h = r.tempFiles.length, d = 5 * h, n.next = 10, o(d, "check_only", "图片上传预检");
                            case 10:
                                if (n.sent.ok) {
                                    n.next = 13;
                                    break
                                }
                                return n.abrupt("return");
                            case 13:
                                return u = r.tempFiles.map(function() {
                                    var t = a(e().mark((function t(a, n) {
                                        var i, o;
                                        return e().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0, i = "diary-images/".concat(Date.now(), "-").concat(n, "-").concat(Math.random().toString(36).substring(2, 10)).concat(".jpg"), t.next = 5, wx.cloud.uploadFile({
                                                        filePath: a.tempFilePath,
                                                        cloudPath: i
                                                    });
                                                case 5:
                                                    return o = t.sent, s._asyncImgSecCheck(o.fileID, n), t.abrupt("return", {
                                                        success: !0,
                                                        fileID: o.fileID
                                                    });
                                                case 10:
                                                    return t.prev = 10, t.t0 = t.catch(0), t.abrupt("return", {
                                                        success: !1,
                                                        reason: "上传失败"
                                                    });
                                                case 13:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [0, 10]
                                        ])
                                    })));
                                    return function(e, a) {
                                        return t.apply(this, arguments)
                                    }
                                }()), n.next = 16, Promise.all(u);
                            case 16:
                                g = n.sent, m = 0, p = [], f = t(g);
                                try {
                                    for (f.s(); !(S = f.n()).done;)(w = S.value).success && (p.push(w.fileID), m++)
                                } catch (t) {
                                    f.e(t)
                                } finally {
                                    f.f()
                                }
                                return v = 5 * m, n.next = 24, o(v, "upload_image", "上传图片");
                            case 24:
                                if ((_ = n.sent).ok || wx.showToast({
                                        title: "积分扣除异常，图片已保留",
                                        icon: "none",
                                        duration: 2e3
                                    }), s.setData({
                                        points: _.newTotal
                                    }), m > 0) {
                                    T = [].concat(i(s.data.imagePaths), p), s.setData({
                                        imagePaths: T,
                                        canSave: !0,
                                        hasChanges: !0
                                    }), s._lastCanSave = !0, s._lastHasChanges = !0, s._imagesDirty = !0, s._unloadGuardActive || (wx.enableAlertBeforeUnload({
                                        message: "有未保存的内容，离开后数据将丢失"
                                    }), s._unloadGuardActive = !0);
                                    try {
                                        (x = wx.getStorageSync("diaries") || {})[s.data.dateStr] || (x[s.data.dateStr] = {
                                            content: "",
                                            location: "",
                                            background: "",
                                            imagePaths: [],
                                            isDraft: !0,
                                            updateTime: Date.now()
                                        }), x[s.data.dateStr].imagePaths = T, x[s.data.dateStr].updateTime = Date.now(), wx.setStorageSync("diaries", x), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), s._addDiaryChange(s.data.dateStr, "update"), s._syncToCloud(s.data.dateStr, x[s.data.dateStr])
                                    } catch (t) {}
                                    wx.showToast({
                                        title: "添加成功，消耗".concat(v, "积分"),
                                        icon: "none",
                                        duration: 1500
                                    })
                                } else wx.showToast({
                                    title: "上传失败",
                                    icon: "none",
                                    duration: 1500
                                });
                            case 28:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                }))), function(t) {
                    return n.apply(this, arguments)
                })
            }))
        },
        _asyncImgSecCheck: function(t, n) {
            var i = this;
            return a(e().mark((function a() {
                var n, s, o, r;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "imgSecCheck",
                                    fileID: t
                                }
                            });
                        case 3:
                            if ((n = e.sent).result && n.result.pass) {
                                e.next = 14;
                                break
                            }
                            return e.next = 7, wx.cloud.deleteFile({
                                fileList: [t]
                            }).catch((function() {}));
                        case 7:
                            s = i.data.imagePaths, o = s.filter((function(e) {
                                return e !== t
                            })), i.setData({
                                imagePaths: o,
                                canSave: o.length > 0 || i.data.content && i.data.content.trim().length > 0
                            }), i._imagesDirty = !0, i.originalImages = o.slice(0);
                            try {
                                r = wx.getStorageSync("diaries") || {}, i.data.dateStr && r[i.data.dateStr] && (0 !== o.length || (r[i.data.dateStr].content || "").trim() ? (r[i.data.dateStr].imagePaths = o, r[i.data.dateStr].updateTime = Date.now()) : delete r[i.data.dateStr], wx.setStorageSync("diaries", r), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), i._addDiaryChange(i.data.dateStr, "update"), r[i.data.dateStr] && i._syncToCloud(i.data.dateStr, r[i.data.dateStr]))
                            } catch (t) {}
                            wx.showToast({
                                title: "检测到违规图片，已自动移除",
                                icon: "none",
                                duration: 2e3
                            });
                        case 14:
                            e.next = 19;
                            break;
                        case 16:
                            e.prev = 16, e.t0 = e.catch(0), console.error("图片安审失败:", e.t0);
                        case 19:
                        case "end":
                            return e.stop()
                    }
                }), a, null, [
                    [0, 16]
                ])
            })))()
        },
        onDeleteImage: function(t) {
            var e = t.currentTarget.dataset.index,
                a = this.data.imagePaths,
                n = a[e],
                i = a.filter((function(t, a) {
                    return a !== e
                })),
                s = i.length > 0 || this.data.content && this.data.content.trim().length > 0;
            this.setData({
                imagePaths: i,
                canSave: s,
                hasChanges: !0
            }), this._lastCanSave = s, this._lastHasChanges = !0, this._imagesDirty = !0, this._unloadGuardActive || (wx.enableAlertBeforeUnload({
                message: "有未保存的内容，离开后数据将丢失"
            }), this._unloadGuardActive = !0);
            var o = !1,
                r = null;
            if (this.data.dateStr) {
                try {
                    var l = wx.getStorageSync("diaries") || {};
                    0 !== i.length || l[this.data.dateStr] && (l[this.data.dateStr].content || "").trim() ? (l[this.data.dateStr] || (l[this.data.dateStr] = {
                        content: "",
                        location: "",
                        background: "",
                        imagePaths: [],
                        isDraft: !0,
                        updateTime: Date.now()
                    }), l[this.data.dateStr].imagePaths = i, l[this.data.dateStr].updateTime = Date.now(), r = l[this.data.dateStr]) : (delete l[this.data.dateStr], o = !0), wx.setStorageSync("diaries", l), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), this._addDiaryChange(this.data.dateStr, "update")
                } catch (t) {}
                o ? n && wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "deleteDiary",
                        date: this.data.dateStr
                    }
                }).then((function() {
                    n && wx.cloud.deleteFile({
                        fileList: [n]
                    }).catch((function() {}))
                })).catch((function() {})) : r && wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "saveDiary",
                        date: this.data.dateStr,
                        diary: r
                    }
                }).then((function() {
                    n && wx.cloud.deleteFile({
                        fileList: [n]
                    }).catch((function() {}))
                })).catch((function() {}))
            }
        },
        thoughtTimer: null,
        hideTimer: null,
        _lastThought: "",
        startRobotThought: function() {
            this.scheduleNextThought(2e3 + 2e3 * Math.random())
        },
        scheduleNextThought: function(t) {
            var e = this,
                a = t || 3e3 + 5e3 * Math.random();
            clearTimeout(this.thoughtTimer), this.thoughtTimer = setTimeout((function() {
                e.showRandomThought()
            }), a)
        },
        showRandomThought: function() {
            var t = this,
                e = r[Math.floor(Math.random() * r.length)];
            e === this._lastThought && r.length > 1 && (e = r[Math.floor(Math.random() * r.length)]), this._lastThought = e, this.setData({
                showThought: !0,
                thoughtText: e
            }), clearTimeout(this.hideTimer), this.hideTimer = setTimeout((function() {
                t.setData({
                    showThought: !1
                }), t.scheduleNextThought(5e3 + 5e3 * Math.random())
            }), 2500)
        },
        onDiscardDraft: function() {
            var t = this.data.dateStr,
                e = wx.getStorageSync("diaries") || {};
            e[t] && (e[t]._synced ? e[t] = {
                _synced: !0,
                updateTime: Date.now()
            } : delete e[t], wx.setStorageSync("diaries", e), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), this._addDiaryChange(t, "delete"));
            this.setData({
                showDraftTip: !1,
                content: "",
                displayContent: "",
                contentLength: 0,
                hasChanges: !1,
                canSave: !1,
                imagePaths: [],
                isImageBg: !1
            }), this._contentDraft = "", this._lastContent = "", this.originalContent = "", this.originalImages = [], this._lastHasChanges = !1, this._imagesDirty = !1, this._disableUnloadGuard()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/write/write.js'
});
require("pages/write/write.js");