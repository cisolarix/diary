$gwx_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];

        function gz$gwx_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([
                    [7],
                    [3, 'notices']
                ])
                Z([3, 'id'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'index']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'notices']
                        ],
                        [3, 'length']
                    ],
                    [1, 0]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_3 = true;
        var x = ['./pages/notice/notice.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_3_1()
            var lCB = _n('view')
            _rz(z, lCB, 'class', 0, e, s, gg)
            var tEB = _v()
            _(lCB, tEB)
            var eFB = function(oHB, bGB, xIB, gg) {
                var fKB = _v()
                _(xIB, fKB)
                if (_oz(z, 3, oHB, bGB, gg)) {
                    fKB.wxVkey = 1
                }
                fKB.wxXCkey = 1
                return xIB
            }
            tEB.wxXCkey = 2
            _2z(z, 1, eFB, e, s, gg, tEB, 'item', 'index', 'id')
            var aDB = _v()
            _(lCB, aDB)
            if (_oz(z, 4, e, s, gg)) {
                aDB.wxVkey = 1
            }
            aDB.wxXCkey = 1
            _(r, lCB)
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
                g = "$gwx_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/notice/notice.wxml'] = [$gwx_XC_3, './pages/notice/notice.wxml'];
else __wxAppCode__['pages/notice/notice.wxml'] = $gwx_XC_3('./pages/notice/notice.wxml');;
__wxRoute = "pages/notice/notice";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/notice/notice.js";
define("pages/notice/notice.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Page({
        data: {
            notices: []
        },
        onLoad: function() {
            this.setData({
                notices: this.getDefaultNotices()
            }), this.initAd()
        },
        initAd: function() {
            var t = this;
            if (wx.createRewardedVideoAd) try {
                this._ad = wx.createRewardedVideoAd({
                    adUnitId: "adunit-e5b27bf9d0558ed0"
                }), this._ad.onLoad((function() {
                    t._adLoadFailed = !1
                })), this._ad.onError((function(n) {
                    t._adLoadFailed = !0
                })), this._ad.onClose((function(t) {
                    t.isEnded && wx.showToast({
                        title: "感谢你的支持！❤️",
                        icon: "none",
                        duration: 2e3
                    })
                }))
            } catch (t) {
                this._adLoadFailed = !0
            }
        },
        onWatchAd: function() {
            this._ad && !this._adLoadFailed ? this._ad.show().catch((function() {})) : wx.showToast({
                title: "暂无可用的广告",
                icon: "none"
            })
        },
        getDefaultNotices: function() {
            return [{
                id: 6,
                title: "向心日记 v1.2.8 更新日志",
                content: "1. 优化时光页面阅读体验\n2. 移除纪念日页面\n3. 新增热力图页面",
                date: "2026-05-24"
            }, {
                id: 5,
                title: "向心日记 v1.2.7 更新日志",
                content: "1. 新增字体调节功能，支持调整大小、粗细、颜色\n2. 上线多款精美输入框背景图，随心切换\n3. 全面优化日记输入交互，书写体验更流畅顺滑",
                date: "2026-05-10"
            }, {
                id: 4,
                title: "向心日记 v1.2.6 更新日志",
                content: "1. 日历板块新增「时光记忆」专属页面\n2. 日历页现已支持补写过往日记\n3. 个人中心优化，新增功能开关状态展示\n4. 上线多款精美首页头图，随心切换",
                date: "2026-05-04"
            }, {
                id: 3,
                title: "向心日记 v1.2.5 更新日志",
                content: "1. 纪念日功能优化：支持点击查看、支持右滑编辑删除、保存和分享\n2. 新增「给未来写封信」：可以写下内容，封存给未来的自己，支持右滑删除",
                date: "2026-04-26"
            }, {
                id: 1,
                title: "向心日记 v1.2.4 更新日志",
                content: "本次更新重点：\n\n1. 导出功能 — 支持完整导出日记，数据更安全\n2. 图片上传 — 可插入图片记录，记录更生动\n3. 体验优化 — 编辑页与日历页全面打磨，更流畅\n4. 积分福利 — 新增签到、邀好友任务，积分可兑换专属权益\n\n感谢支持，开始记录吧！",
                date: "2026-04-19"
            }]
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/notice/notice.js'
});
require("pages/notice/notice.js");