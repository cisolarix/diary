$gwx_XC_11 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];

        function gz$gwx_XC_11_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([
                    [7],
                    [3, 'diary']
                ])
                Z([3, 'diary-content'])
                Z([3, 'diary-date-section'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'diary']
                    ],
                    [3, 'displayTime']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'diary']
                    ],
                    [3, 'location']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'diary']
                    ],
                    [3, 'content']
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'displayImages']
                        ],
                        [3, 'length']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'loading']
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'diary']
                        ]
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'loading']
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'diary']
                        ]
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_11 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_11 = true;
        var x = ['./pages/diary-detail/diary-detail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_11_1()
            var cMD = _n('view')
            _rz(z, cMD, 'class', 0, e, s, gg)
            var oND = _v()
            _(cMD, oND)
            if (_oz(z, 1, e, s, gg)) {
                oND.wxVkey = 1
                var tQD = _n('view')
                _rz(z, tQD, 'class', 2, e, s, gg)
                var oTD = _n('view')
                _rz(z, oTD, 'class', 3, e, s, gg)
                var xUD = _v()
                _(oTD, xUD)
                if (_oz(z, 4, e, s, gg)) {
                    xUD.wxVkey = 1
                }
                var oVD = _v()
                _(oTD, oVD)
                if (_oz(z, 5, e, s, gg)) {
                    oVD.wxVkey = 1
                }
                xUD.wxXCkey = 1
                oVD.wxXCkey = 1
                _(tQD, oTD)
                var eRD = _v()
                _(tQD, eRD)
                if (_oz(z, 6, e, s, gg)) {
                    eRD.wxVkey = 1
                }
                var bSD = _v()
                _(tQD, bSD)
                if (_oz(z, 7, e, s, gg)) {
                    bSD.wxVkey = 1
                }
                eRD.wxXCkey = 1
                bSD.wxXCkey = 1
                _(oND, tQD)
            }
            var lOD = _v()
            _(cMD, lOD)
            if (_oz(z, 8, e, s, gg)) {
                lOD.wxVkey = 1
            }
            var aPD = _v()
            _(cMD, aPD)
            if (_oz(z, 9, e, s, gg)) {
                aPD.wxVkey = 1
            }
            oND.wxXCkey = 1
            lOD.wxXCkey = 1
            aPD.wxXCkey = 1
            _(r, cMD)
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
                g = "$gwx_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_11();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/diary-detail/diary-detail.wxml'] = [$gwx_XC_11, './pages/diary-detail/diary-detail.wxml'];
else __wxAppCode__['pages/diary-detail/diary-detail.wxml'] = $gwx_XC_11('./pages/diary-detail/diary-detail.wxml');;
__wxRoute = "pages/diary-detail/diary-detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/diary-detail/diary-detail.js";
define("pages/diary-detail/diary-detail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Page({
        data: {
            statusBarHeight: 20,
            dateStr: "",
            diary: null,
            displayImages: [],
            loading: !1
        },
        onLoad: function(a) {
            var t = a.date;
            if (t) {
                var e = wx.getSystemInfoSync();
                this.setData({
                    dateStr: t,
                    statusBarHeight: e.statusBarHeight || 20,
                    loading: !0
                }), this.loadDiary(t)
            } else wx.showToast({
                title: "参数错误",
                icon: "none"
            })
        },
        loadDiary: function(a) {
            var t = (wx.getStorageSync("diaries") || {})[a];
            t ? this.processDiary(t) : this.fetchFromCloud(a)
        },
        fetchFromCloud: function(a) {
            var t = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getDiary",
                    date: a
                }
            }).then((function(a) {
                a.result && a.result.success && a.result.found ? t.processDiary(a.result.data) : t.setData({
                    loading: !1
                })
            })).catch((function() {
                t.setData({
                    loading: !1
                }), wx.showToast({
                    title: "加载失败",
                    icon: "none"
                })
            }))
        },
        processDiary: function(a) {
            var t = this;
            if (a) {
                var e = this.data.dateStr,
                    i = this._formatDateLabel(e, a.updateTime),
                    s = i.displayDate,
                    n = i.displayTime,
                    r = [],
                    o = a.imagePaths || [];
                if (a.displayDate = s, a.displayTime = n, Array.isArray(o) && o.length > 0) {
                    var l = o.filter((function(a) {
                        return a && a.startsWith("cloud://")
                    }));
                    l.length > 0 ? (a.images = [], this.setData({
                        diary: a,
                        displayImages: [],
                        loading: !1
                    }), wx.cloud.getTempFileURL({
                        fileList: l
                    }).then((function(e) {
                        var i = {};
                        (e.fileList || []).forEach((function(a) {
                            a.fileID && a.tempFileURL && (i[a.fileID] = a.tempFileURL)
                        })), r = o.map((function(a) {
                            return i[a] || a
                        })), a.images = r, t.setData({
                            diary: a,
                            displayImages: r
                        })
                    })).catch((function() {
                        r = o, a.images = r, t.setData({
                            diary: a,
                            displayImages: r
                        })
                    }))) : (r = o, a.images = r, this.setData({
                        diary: a,
                        displayImages: r,
                        loading: !1
                    }))
                } else a.images = [], this.setData({
                    diary: a,
                    displayImages: [],
                    loading: !1
                })
            }
        },
        _formatDateLabel: function(a, t) {
            var e = a.split("-"),
                i = parseInt(e[1]),
                s = parseInt(e[2]),
                n = "".concat(i, "月").concat(s, "日"),
                r = "";
            if (t) {
                var o = new Date(t);
                if (!isNaN(o.getTime())) {
                    var l = String(o.getHours()).padStart(2, "0"),
                        c = String(o.getMinutes()).padStart(2, "0");
                    r = "".concat(l, ":").concat(c)
                }
            }
            return {
                displayDate: n,
                displayTime: r
            }
        },
        previewImage: function(a) {
            var t = a.currentTarget.dataset.index,
                e = this.data.displayImages;
            e && 0 !== e.length && (getApp().skipNextLockCheck(), wx.previewImage({
                current: e[t],
                urls: e
            }))
        },
        goBack: function() {
            wx.navigateBack()
        },
        preventBubble: function() {}
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/diary-detail/diary-detail.js'
});
require("pages/diary-detail/diary-detail.js");