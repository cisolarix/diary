$gwx_XC_13 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_13 || [];

        function gz$gwx_XC_13_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([3, 'onExport'])
                Z([a, [3, 'btn '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'exporting']
                        ],
                        [1, 'dis'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'exporting']
                ])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'exporting']
                    ]
                ])
                Z([3, 'onClosePicker'])
                Z([a, [3, 'mask '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showPicker']
                        ],
                        [1, 'show'],
                        [1, '']
                    ],
                    [3, ' sheet-mask']
                ])
                Z([3, 'preventBubble'])
                Z([3, 'sheet'])
                Z([
                    [7],
                    [3, 'rangeOptions']
                ])
                Z([3, 'key'])
                Z([3, 'onSelectRange'])
                Z([a, [3, 'sheet-item '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'range']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'key']
                            ]
                        ],
                        [1, 'on'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'key']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'range']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'key']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_13 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_13 = true;
        var x = ['./pages/export-diary/export-diary.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_13_1()
            var hYD = _n('view')
            _rz(z, hYD, 'class', 0, e, s, gg)
            var oZD = _mz(z, 'button', ['catchtap', 1, 'class', 1, 'disabled', 2], [], e, s, gg)
            var c1D = _v()
            _(oZD, c1D)
            if (_oz(z, 4, e, s, gg)) {
                c1D.wxVkey = 1
            }
            c1D.wxXCkey = 1
            _(hYD, oZD)
            var o2D = _mz(z, 'view', ['bindtap', 5, 'class', 1], [], e, s, gg)
            var l3D = _mz(z, 'view', ['catchtap', 7, 'class', 1], [], e, s, gg)
            var a4D = _v()
            _(l3D, a4D)
            var t5D = function(b7D, e6D, o8D, gg) {
                var o0D = _mz(z, 'view', ['bindtap', 11, 'class', 1, 'data-key', 2], [], b7D, e6D, gg)
                var fAE = _v()
                _(o0D, fAE)
                if (_oz(z, 14, b7D, e6D, gg)) {
                    fAE.wxVkey = 1
                }
                fAE.wxXCkey = 1
                _(o8D, o0D)
                return o8D
            }
            a4D.wxXCkey = 2
            _2z(z, 9, t5D, e, s, gg, a4D, 'item', 'index', 'key')
            _(o2D, l3D)
            _(hYD, o2D)
            _(r, hYD)
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
                g = "$gwx_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_13();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/export-diary/export-diary.wxml'] = [$gwx_XC_13, './pages/export-diary/export-diary.wxml'];
else __wxAppCode__['pages/export-diary/export-diary.wxml'] = $gwx_XC_13('./pages/export-diary/export-diary.wxml');;
__wxRoute = "pages/export-diary/export-diary";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/export-diary/export-diary.js";
define("pages/export-diary/export-diary.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        e = require("../../@babel/runtime/helpers/asyncToGenerator"),
        a = (getApp(), require("../../utils/cloud").requirePoints);

    function n(t) {
        var e = String(t.getMonth() + 1).padStart(2, "0"),
            a = String(t.getDate()).padStart(2, "0");
        return "".concat(t.getFullYear(), "-").concat(e, "-").concat(a)
    }
    Page({
        data: {
            statusBarHeight: 20,
            diaryCount: 0,
            totalCount: 0,
            rangeText: "全部",
            startDate: "",
            endDate: "",
            maxDate: "",
            sortDesc: !0,
            range: "all",
            showPicker: !1,
            rangeOptions: [{
                key: "all",
                name: "全部日记"
            }, {
                key: "recent",
                name: "近30天"
            }, {
                key: "year",
                name: "今年"
            }, {
                key: "month",
                name: "本月"
            }],
            exporting: !1,
            showSuccess: !1,
            copiedCount: 0
        },
        onLoad: function() {
            var t = wx.getSystemInfoSync();
            this.setData({
                statusBarHeight: t.statusBarHeight
            });
            var e = n(new Date);
            this.setData({
                startDate: e,
                endDate: e,
                maxDate: e
            });
            try {
                var a = wx.getStorageSync("diaries") || {},
                    r = Object.keys(a).length;
                this.setData({
                    diaryCount: r,
                    totalCount: r
                })
            } catch (t) {
                this.setData({
                    totalCount: 0
                })
            }
        },
        goBack: function() {
            wx.navigateBack()
        },
        preventBubble: function() {},
        onPickRange: function() {
            this.setData({
                showPicker: !0
            })
        },
        onClosePicker: function() {
            this.setData({
                showPicker: !1
            })
        },
        onSelectRange: function(t) {
            this.setData({
                range: t.currentTarget.dataset.key
            })
        },
        onConfirmRange: function() {
            this.onClosePicker();
            var t = this.data.range;
            "custom" !== t && this._applyQuickRange(t), this._updateCountAndText()
        },
        _applyQuickRange: function(t) {
            var e, a, r = new Date;
            switch (t) {
                case "all":
                    try {
                        var o = wx.getStorageSync("diaries") || {},
                            i = Object.keys(o).sort();
                        e = i[0] || n(r), a = i[i.length - 1] || n(r)
                    } catch (t) {
                        e = a = n(r)
                    }
                    break;
                case "recent":
                    e = n(new Date(r.getTime() - 2592e6)), a = n(r);
                    break;
                case "year":
                    e = r.getFullYear() + "-01-01", a = n(r);
                    break;
                case "month":
                    e = r.getFullYear() + "-" + String(r.getMonth() + 1).padStart(2, "0") + "-01", a = n(r);
                    break;
                default:
                    e = a = n(r)
            }
            this.setData({
                startDate: e,
                endDate: a
            })
        },
        _updateCountAndText: function() {
            var t = this.data;
            try {
                var e = wx.getStorageSync("diaries") || {},
                    a = 0;
                if ("all" === t.range) a = Object.keys(e).length;
                else a = Object.keys(e).filter((function(e) {
                    return e >= t.startDate && e <= t.endDate
                })).length;
                this.setData({
                    totalCount: a,
                    rangeText: {
                        all: "全部",
                        recent: "近30天",
                        year: "今年",
                        month: "本月"
                    }[t.range] || "全部"
                })
            } catch (t) {}
        },
        onToggleSort: function() {
            this.setData({
                sortDesc: !this.data.sortDesc
            })
        },
        onExport: function() {
            var r = this;
            return e(t().mark((function e() {
                var o, i;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!(o = r).data.exporting) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return o.setData({
                                exporting: !0
                            }), t.next = 6, a(100, "export_diary", "导出日记");
                        case 6:
                            if (t.sent.ok) {
                                t.next = 10;
                                break
                            }
                            return o.setData({
                                exporting: !1
                            }), t.abrupt("return");
                        case 10:
                            return wx.showToast({
                                title: "已消耗100积分",
                                icon: "none",
                                duration: 1500
                            }), t.next = 13, new Promise((function(t) {
                                return setTimeout(t, 1400)
                            }));
                        case 13:
                            wx.showLoading({
                                title: "正在导出..."
                            }), i = {
                                action: "exportDiary",
                                sortDesc: o.data.sortDesc
                            }, "all" !== o.data.range && (i.startDate = o.data.startDate, i.endDate = o.data.endDate), wx.cloud.callFunction({
                                name: "diary",
                                data: i
                            }).then((function(t) {
                                var e = t.result;
                                return e.success || "EMPTY" !== e.code ? e.success && e.fileID ? void wx.cloud.downloadFile({
                                    fileID: e.fileID
                                }).then((function(t) {
                                    wx.hideLoading();
                                    var e = wx.getFileSystemManager(),
                                        a = Date.now(),
                                        r = "我的日记_" + (o.data.endDate ? o.data.endDate.replace(/\//g, "-") : n(new Date).replace(/\//g, "-")) + "_" + a + ".txt",
                                        i = wx.env.USER_DATA_PATH + "/" + r;
                                    try {
                                        e.unlinkSync(i)
                                    } catch (t) {}
                                    e.copyFile({
                                        srcPath: t.tempFilePath,
                                        destPath: i,
                                        success: function() {
                                            wx.hideLoading(), wx.openDocument({
                                                filePath: i,
                                                showMenu: !0,
                                                success: function() {
                                                    o.setData({
                                                        exporting: !1
                                                    })
                                                },
                                                fail: function(t) {
                                                    e.readFile({
                                                        filePath: i,
                                                        encoding: "utf-8",
                                                        success: function(t) {
                                                            wx.setClipboardData({
                                                                data: t.data || ""
                                                            }), o.setData({
                                                                exporting: !1
                                                            })
                                                        },
                                                        fail: function() {
                                                            wx.showToast({
                                                                title: "导出失败",
                                                                icon: "none"
                                                            }), o.setData({
                                                                exporting: !1
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        },
                                        fail: function(t) {
                                            wx.hideLoading(), wx.showToast({
                                                title: "保存失败: " + (t.errMsg || ""),
                                                icon: "none"
                                            }), o.setData({
                                                exporting: !1
                                            })
                                        }
                                    })
                                })).catch((function(t) {
                                    wx.hideLoading(), wx.showToast({
                                        title: "下载文件失败",
                                        icon: "none"
                                    }), o.setData({
                                        exporting: !1
                                    })
                                })) : (wx.hideLoading(), wx.showToast({
                                    title: (e.error || "") + "导出失败",
                                    icon: "none"
                                }), void o.setData({
                                    exporting: !1
                                })) : (wx.hideLoading(), wx.showToast({
                                    title: "该范围内没有日记",
                                    icon: "none"
                                }), void o.setData({
                                    exporting: !1
                                }))
                            })).catch((function(t) {
                                wx.hideLoading(), wx.showToast({
                                    title: "导出失败，请重试",
                                    icon: "none"
                                }), o.setData({
                                    exporting: !1
                                })
                            }));
                        case 17:
                        case "end":
                            return t.stop()
                    }
                }), e)
            })))()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/export-diary/export-diary.js'
});
require("pages/export-diary/export-diary.js");