$gwx_XC_8 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];

        function gz$gwx_XC_8_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'theme-list'])
                Z([
                    [7],
                    [3, 'isLoadingPreview']
                ])
                Z([
                    [7],
                    [3, 'seriesList']
                ])
                Z([3, 'id'])
                Z([3, 'onSelectSeries'])
                Z([a, [3, 'theme-item '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currentSeries']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'id']
                            ]
                        ],
                        [1, 'selected'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'id']
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'pointsCost']
                    ],
                    [1, 0]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_8 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_8 = true;
        var x = ['./pages/theme-select/theme-select.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_8_1()
            var a6B = _n('view')
            _rz(z, a6B, 'class', 0, e, s, gg)
            var t7B = _v()
            _(a6B, t7B)
            if (_oz(z, 1, e, s, gg)) {
                t7B.wxVkey = 1
            } else {
                t7B.wxVkey = 2
                var e8B = _v()
                _(t7B, e8B)
                var b9B = function(xAC, o0B, oBC, gg) {
                    var cDC = _mz(z, 'view', ['bindtap', 4, 'class', 1, 'data-series', 2], [], xAC, o0B, gg)
                    var hEC = _v()
                    _(cDC, hEC)
                    if (_oz(z, 7, xAC, o0B, gg)) {
                        hEC.wxVkey = 1
                    }
                    hEC.wxXCkey = 1
                    _(oBC, cDC)
                    return oBC
                }
                e8B.wxXCkey = 2
                _2z(z, 2, b9B, e, s, gg, e8B, 'item', 'index', 'id')
            }
            t7B.wxXCkey = 1
            _(r, a6B)
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
                g = "$gwx_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/theme-select/theme-select.wxml'] = [$gwx_XC_8, './pages/theme-select/theme-select.wxml'];
else __wxAppCode__['pages/theme-select/theme-select.wxml'] = $gwx_XC_8('./pages/theme-select/theme-select.wxml');;
__wxRoute = "pages/theme-select/theme-select";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/theme-select/theme-select.js";
define("pages/theme-select/theme-select.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../@babel/runtime/helpers/typeof"),
        a = require("../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../@babel/runtime/helpers/objectSpread2"),
        i = require("../../utils/cloud-images"),
        s = require("../../utils/cloud").requirePoints,
        r = [{
            id: "series4",
            name: "手绘插画",
            pointsCost: 10,
            images: i.series4
        }, {
            id: "series1",
            name: "温柔治愈",
            pointsCost: 10,
            images: i.series1
        }, {
            id: "series3",
            name: "简约高级",
            pointsCost: 10,
            images: i.series3
        }],
        c = null;
    Page({
        data: {
            currentSeries: "series4",
            isDownloading: !1,
            customCovers: [],
            isLoadingPreview: !1,
            seriesList: r
        },
        onLoad: function() {
            for (var e = wx.getStorageSync("selectedPhotoSeries") || "series4", t = wx.getStorageSync("customCovers") || []; t.length < 7;) t.push("");
            var a = t.filter((function(e) {
                return e && e.length > 0
            })).length;
            this.setData({
                currentSeries: e,
                customCovers: t,
                imageCount: a
            }), this.loadHeadImageSeriesFromCloud(), this.initAd()
        },
        onUnload: function() {
            this._replaceTimer && (clearTimeout(this._replaceTimer), this._replaceTimer = null), this._pendingReplacements = null
        },
        loadHeadImageSeriesFromCloud: function() {
            var e = this,
                t = wx.getStorageSync("headImageSeriesCache");
            if (t && t.data && t.data.length > 0 && Date.now() - t.time < 72e5) {
                var a = t.data.map((function(e) {
                    return n(n({}, e), {}, {
                        pointsCost: e.pointsCost || 10
                    })
                }));
                this.warmUpImageCache(a)
            } else wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getHeadImageSeries"
                }
            }).then((function(t) {
                if (t.result && t.result.success) {
                    var a = t.result.series;
                    if (a && a.length > 0) {
                        var i = a.map((function(e) {
                            return n(n({}, e), {}, {
                                pointsCost: e.pointsCost || 10
                            })
                        }));
                        wx.setStorageSync("headImageSeriesCache", {
                            data: i,
                            time: Date.now()
                        }), e.warmUpImageCache(i)
                    }
                }
            })).catch((function() {}))
        },
        warmUpImageCache: function(e) {
            var t = this;
            if (e && wx.getFileSystemManager) {
                var a = wx.getFileSystemManager();
                try {
                    a.accessSync("".concat(wx.env.USER_DATA_PATH, "/").concat("head_img_cache"))
                } catch (e) {
                    try {
                        a.mkdirSync("".concat(wx.env.USER_DATA_PATH, "/").concat("head_img_cache"), !0)
                    } catch (e) {}
                }
                var i = e.map((function(e) {
                    return n(n({}, e), {}, {
                        images: (e.images || []).map((function(e) {
                            if (!e || !e.startsWith("http")) return e;
                            var n = t._hashUrl(e),
                                i = "".concat(wx.env.USER_DATA_PATH, "/").concat("head_img_cache", "/").concat(n);
                            try {
                                return a.accessSync(i), i
                            } catch (t) {
                                return e
                            }
                        }))
                    })
                }));
                this.setData({
                    seriesList: i
                });
                var s = wx.getStorageSync("selectedPhotoSeries") || "series4",
                    r = i.find((function(e) {
                        return e.id === s
                    }));
                if (r && r.images && r.images.length > 0) {
                    var c = r.images.filter((function(e) {
                        return e && (e.startsWith("http") || e.startsWith("wxfile://"))
                    }));
                    7 === c.length && (wx.setStorageSync("selectedSeriesImages", c), wx.setStorageSync("selectedSeriesImagesId", s))
                }
                var o = [];
                i.forEach((function(e) {
                    (e.images || []).forEach((function(e) {
                        e && e.startsWith("http") && o.push(e)
                    }))
                })), 0 !== o.length && this._batchDownloadWithLimit(o, 5)
            }
        },
        _replaceUrlWithLocal: function(e) {
            var t = this,
                a = this._hashUrl(e),
                n = "".concat(wx.env.USER_DATA_PATH, "/").concat("head_img_cache", "/").concat(a);
            this._pendingReplacements || (this._pendingReplacements = new Map), this._pendingReplacements.set(e, n), this._replaceTimer || (this._replaceTimer = setTimeout((function() {
                t._flushPendingReplacements(), t._replaceTimer = null
            }), 300))
        },
        _flushPendingReplacements: function() {
            if (this._pendingReplacements && 0 !== this._pendingReplacements.size) {
                var e = this._pendingReplacements;
                this._pendingReplacements = null;
                var t = this.data.seriesList,
                    a = !1,
                    i = t.map((function(t) {
                        if (!t.images) return t;
                        var i = t.images.map((function(t) {
                            return e.has(t) ? (a = !0, e.get(t)) : t
                        }));
                        return n(n({}, t), {}, {
                            images: i
                        })
                    }));
                a && this.setData({
                    seriesList: i
                })
            }
        },
        _batchDownloadWithLimit: function(e, t) {
            var a = this,
                n = wx.getFileSystemManager(),
                i = new Set,
                s = 0;
            ! function r() {
                for (var c = function() {
                        var t = e[s++],
                            c = a._hashUrl(t),
                            o = "".concat(wx.env.USER_DATA_PATH, "/").concat("head_img_cache", "/").concat(c);
                        try {
                            return n.accessSync(o), a._replaceUrlWithLocal(t), "continue"
                        } catch (e) {}
                        i.add(t), wx.downloadFile({
                            url: t,
                            success: function(e) {
                                if (200 === e.statusCode && e.tempFilePath) try {
                                    n.saveFileSync(e.tempFilePath, o), a._replaceUrlWithLocal(t)
                                } catch (e) {}
                            },
                            fail: function() {},
                            complete: function() {
                                i.delete(t), r()
                            }
                        })
                    }; s < e.length && i.size < t;) c()
            }()
        },
        _hashUrl: function(e) {
            for (var t = 0, a = 0; a < e.length; a++) {
                t = (t << 5) - t + e.charCodeAt(a), t |= 0
            }
            return "img_" + Math.abs(t).toString(36) + ".jpg"
        },
        initAd: function() {
            var e = this;
            c || ((c = wx.createRewardedVideoAd({
                adUnitId: "adunit-e5b27bf9d0558ed0"
            })).onLoad((function() {})), c.onError((function(t) {
                e.adLoadFailed = !0
            })), c.onClose((function(t) {
                t.isEnded ? e.activateCustomCover() : wx.showToast({
                    title: "看完广告才能生效哦",
                    icon: "none"
                })
            }))), this.ad = c
        },
        activateCustomCover: function() {
            wx.setStorageSync("selectedPhotoSeries", "custom"), this.setData({
                currentSeries: "custom"
            }), wx.showToast({
                title: "已生效",
                icon: "success"
            })
        },
        loadPreviewImages: function() {},
        onSelectSeries: function(n) {
            var i = this;
            return a(e().mark((function a() {
                var r, c, o, u, h, l;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = n.currentTarget.dataset.series, (c = "string" == typeof r ? r : r.id) !== i.data.currentSeries) {
                                e.next = 5;
                                break
                            }
                            return wx.navigateBack(), e.abrupt("return");
                        case 5:
                            if ("custom" !== c) {
                                e.next = 11;
                                break
                            }
                            return wx.setStorageSync("selectedPhotoSeries", "custom"), i.setData({
                                currentSeries: "custom"
                            }), wx.showToast({
                                title: "已切换",
                                icon: "success",
                                duration: 1e3
                            }), setTimeout((function() {
                                return wx.navigateBack()
                            }), 1e3), e.abrupt("return");
                        case 11:
                            if (o = "object" === t(r) ? r : i.data.seriesList.find((function(e) {
                                    return e.id === c
                                })), !((u = o && o.pointsCost || 0) > 0)) {
                                e.next = 19;
                                break
                            }
                            return e.next = 16, s(u, "switch_head_image", "切换头图");
                        case 16:
                            if ((h = e.sent) && h.ok) {
                                e.next = 19;
                                break
                            }
                            return e.abrupt("return");
                        case 19:
                            wx.setStorageSync("selectedPhotoSeries", c), i.setData({
                                currentSeries: c
                            }), o && o.images && o.images.length > 0 && 7 === (l = o.images.filter((function(e) {
                                return e && (e.startsWith("http") || e.startsWith("wxfile://"))
                            }))).length && (wx.setStorageSync("selectedSeriesImages", l), wx.setStorageSync("selectedSeriesImagesId", c)), wx.showToast({
                                title: u > 0 ? "已消耗".concat(u, "积分") : "已切换",
                                icon: u > 0 ? "none" : "success",
                                duration: 1500
                            }), setTimeout((function() {
                                return wx.navigateBack()
                            }), 1e3);
                        case 24:
                        case "end":
                            return e.stop()
                    }
                }), a)
            })))()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/theme-select/theme-select.js'
});
require("pages/theme-select/theme-select.js");