$gwx_XC_9 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];

        function gz$gwx_XC_9_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'unlock-page'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'showForgot']
                    ]
                ])
                Z([
                    [7],
                    [3, 'isLocked']
                ])
                Z([3, 'modal-card'])
                Z([1, 6])
                Z([3, '*this'])
                Z([
                    [2, '<'],
                    [
                        [7],
                        [3, 'index']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'password']
                        ],
                        [3, 'length']
                    ]
                ])
                Z([
                    [7],
                    [3, 'errorMsg']
                ])
                Z([
                    [7],
                    [3, 'showForgot']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_9 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_9 = true;
        var x = ['./pages/unlock/unlock.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_9_1()
            var cGC = _n('view')
            _rz(z, cGC, 'class', 0, e, s, gg)
            var oHC = _v()
            _(cGC, oHC)
            if (_oz(z, 1, e, s, gg)) {
                oHC.wxVkey = 1
                var aJC = _v()
                _(oHC, aJC)
                if (_oz(z, 2, e, s, gg)) {
                    aJC.wxVkey = 1
                } else {
                    aJC.wxVkey = 2
                    var tKC = _n('view')
                    _rz(z, tKC, 'class', 3, e, s, gg)
                    var bMC = _v()
                    _(tKC, bMC)
                    var oNC = function(oPC, xOC, fQC, gg) {
                        var hSC = _v()
                        _(fQC, hSC)
                        if (_oz(z, 6, oPC, xOC, gg)) {
                            hSC.wxVkey = 1
                        }
                        hSC.wxXCkey = 1
                        return fQC
                    }
                    bMC.wxXCkey = 2
                    _2z(z, 4, oNC, e, s, gg, bMC, 'item', 'index', '*this')
                    var eLC = _v()
                    _(tKC, eLC)
                    if (_oz(z, 7, e, s, gg)) {
                        eLC.wxVkey = 1
                    }
                    eLC.wxXCkey = 1
                    _(aJC, tKC)
                }
                aJC.wxXCkey = 1
            }
            var lIC = _v()
            _(cGC, lIC)
            if (_oz(z, 8, e, s, gg)) {
                lIC.wxVkey = 1
            }
            oHC.wxXCkey = 1
            lIC.wxXCkey = 1
            _(r, cGC)
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
                g = "$gwx_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_9();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/unlock/unlock.wxml'] = [$gwx_XC_9, './pages/unlock/unlock.wxml'];
else __wxAppCode__['pages/unlock/unlock.wxml'] = $gwx_XC_9('./pages/unlock/unlock.wxml');;
__wxRoute = "pages/unlock/unlock";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/unlock/unlock.js";
define("pages/unlock/unlock.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = getApp();
    Page({
        data: {
            password: "",
            errorMsg: "",
            showForgot: !1,
            question: "",
            answer: "",
            correctAnswer: "",
            errorCount: 0,
            lockedUntil: 0,
            isLocked: !1,
            countdown: 0,
            countdownText: ""
        },
        onLoad: function() {
            var t = wx.getStorageSync("appLockQuestion");
            t && this.setData({
                question: t.question,
                correctAnswer: t.answer
            }), this.checkLockStatus()
        },
        onShow: function() {
            this.checkLockStatus()
        },
        checkLockStatus: function() {
            var t = wx.getStorageSync("appLockLockedUntil") || 0;
            t > Date.now() ? (this.setData({
                isLocked: !0,
                lockedUntil: t
            }), this.startCountdown()) : (this.setData({
                isLocked: !1,
                errorCount: 0
            }), wx.removeStorageSync("appLockLockedUntil"))
        },
        startCountdown: function() {
            var t = this;
            this.updateCountdown(), this.countdownTimer = setInterval((function() {
                t.updateCountdown()
            }), 1e3)
        },
        updateCountdown: function() {
            var t = this.data.lockedUntil,
                o = Date.now(),
                e = Math.max(0, Math.floor((t - o) / 1e3));
            if (e <= 0) return clearInterval(this.countdownTimer), this.setData({
                isLocked: !1,
                errorCount: 0,
                countdown: 0,
                countdownText: ""
            }), void wx.removeStorageSync("appLockLockedUntil");
            var a = Math.floor(e / 60),
                r = e % 60,
                n = "".concat(a, "分").concat(r.toString().padStart(2, "0"), "秒");
            this.setData({
                countdown: e,
                countdownText: n
            })
        },
        onUnload: function() {
            this.countdownTimer && clearInterval(this.countdownTimer)
        },
        onKeyPress: function(t) {
            var o = this;
            if (!this.data.isLocked) {
                var e = t.currentTarget.dataset.key,
                    a = this.data.password;
                if (a.length < 6) {
                    var r = a + e;
                    this.setData({
                        password: r,
                        errorMsg: ""
                    }), 6 === r.length && setTimeout((function() {
                        o.verifyPassword()
                    }), 100)
                }
            }
        },
        onDelete: function() {
            if (!this.data.isLocked) {
                var t = this.data.password;
                t.length > 0 && this.setData({
                    password: t.slice(0, -1),
                    errorMsg: ""
                })
            }
        },
        verifyPassword: function() {
            var o = this.data,
                e = o.password;
            if (!o.isLocked)
                if (e === wx.getStorageSync("appLockPassword")) wx.removeStorageSync("appLockErrorCount"), wx.removeStorageSync("appLockLockedUntil"), t.setUnlocked(), wx.switchTab({
                    url: "/pages/index/index"
                });
                else {
                    var a = (wx.getStorageSync("appLockErrorCount") || 0) + 1;
                    wx.setStorageSync("appLockErrorCount", a), a >= 2 ? this.verifyPasswordFromCloud(e) : this.handlePasswordError(!1)
                }
        },
        verifyPasswordFromCloud: function(o) {
            var e = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getAppLock"
                }
            }).then((function(a) {
                if (a.result && a.result.success && a.result.data) {
                    var r = a.result.data.password;
                    o === r ? (wx.setStorageSync("appLockPassword", r), a.result.data.question && wx.setStorageSync("appLockQuestion", {
                        question: a.result.data.question,
                        answer: a.result.data.answer
                    }), wx.setStorageSync("appLockEnabled", a.result.data.enabled), wx.removeStorageSync("appLockErrorCount"), wx.removeStorageSync("appLockLockedUntil"), t.setUnlocked(), wx.switchTab({
                        url: "/pages/index/index"
                    })) : e.handlePasswordError()
                } else e.handlePasswordError()
            })).catch((function(t) {
                e.handlePasswordError()
            }))
        },
        handlePasswordError: function(t) {
            var o = t ? wx.getStorageSync("appLockErrorCount") || 0 : this.data.errorCount + 1;
            if (this.setData({
                    errorCount: o,
                    password: ""
                }), t || wx.setStorageSync("appLockErrorCount", o), o >= 5) {
                var e = Date.now() + 36e5;
                wx.setStorageSync("appLockLockedUntil", e), this.setData({
                    isLocked: !0,
                    lockedUntil: e,
                    errorMsg: ""
                }), wx.showToast({
                    title: "错误次数过多，请1小时后再试",
                    icon: "none",
                    duration: 3e3
                }), this.startCountdown()
            } else this.setData({
                errorMsg: "密码错误，还剩 ".concat(5 - o, " 次机会")
            })
        },
        onForgotPassword: function() {
            this.data.isLocked ? wx.showToast({
                title: "已被锁定，请稍后再试",
                icon: "none"
            }) : this.data.question ? this.setData({
                showForgot: !0,
                answer: ""
            }) : wx.showModal({
                title: "忘记密码",
                content: "您未设置安全问题，无法通过验证重置密码。\n\n如需重置，请清除小程序数据后重新打开。",
                showCancel: !1,
                confirmText: "我知道了"
            })
        },
        onInputAnswer: function(t) {
            this.setData({
                answer: t.detail.value
            })
        },
        onVerifyAnswer: function() {
            var t = this.data,
                o = t.answer,
                e = t.correctAnswer;
            o && 0 !== o.trim().length ? o.trim() === e ? (wx.removeStorageSync("appLockErrorCount"), wx.removeStorageSync("appLockLockedUntil"), wx.removeStorageSync("appLockPassword"), wx.showToast({
                title: "验证成功，请设置新密码",
                icon: "success"
            }), setTimeout((function() {
                wx.redirectTo({
                    url: "/pages/lock-setting/lock-setting?reset=1"
                })
            }), 1e3)) : (wx.showToast({
                title: "答案错误",
                icon: "none"
            }), this.setData({
                answer: ""
            })) : wx.showToast({
                title: "请输入答案",
                icon: "none"
            })
        },
        onBackToPassword: function() {
            this.setData({
                showForgot: !1,
                answer: ""
            })
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/unlock/unlock.js'
});
require("pages/unlock/unlock.js");