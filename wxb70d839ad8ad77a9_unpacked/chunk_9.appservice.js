$gwx_XC_18 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_18 || [];

        function gz$gwx_XC_18_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'isResetFlow']
                    ]
                ])
                Z([3, 'container'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'step']
                    ],
                    [1, 'menu']
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'hasPassword']
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'appLockEnabled']
                        ]
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'step']
                    ],
                    [1, 'set']
                ])
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
                Z(z[1])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'step']
                    ],
                    [1, 'confirm']
                ])
                Z(z[6])
                Z(z[7])
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
                            [3, 'confirmPassword']
                        ],
                        [3, 'length']
                    ]
                ])
                Z(z[1])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'step']
                    ],
                    [1, 'question']
                ])
                Z(z[1])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'step']
                    ],
                    [1, 'verify']
                ])
                Z(z[6])
                Z(z[7])
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
                            [3, 'oldPassword']
                        ],
                        [3, 'length']
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'step']
                    ],
                    [1, 'change']
                ])
                Z(z[6])
                Z(z[7])
                Z(z[8])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_18 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_18 = true;
        var x = ['./pages/lock-setting/lock-setting.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_18_1()
            var l9E = _n('view')
            _rz(z, l9E, 'class', 0, e, s, gg)
            var a0E = _v()
            _(l9E, a0E)
            if (_oz(z, 1, e, s, gg)) {
                a0E.wxVkey = 1
            }
            var tAF = _n('view')
            _rz(z, tAF, 'class', 2, e, s, gg)
            var eBF = _v()
            _(tAF, eBF)
            if (_oz(z, 3, e, s, gg)) {
                eBF.wxVkey = 1
                var cHF = _v()
                _(eBF, cHF)
                if (_oz(z, 4, e, s, gg)) {
                    cHF.wxVkey = 1
                }
                cHF.wxXCkey = 1
            }
            var bCF = _v()
            _(tAF, bCF)
            if (_oz(z, 5, e, s, gg)) {
                bCF.wxVkey = 1
                var oJF = _v()
                _(bCF, oJF)
                var cKF = function(lMF, oLF, aNF, gg) {
                    var ePF = _v()
                    _(aNF, ePF)
                    if (_oz(z, 8, lMF, oLF, gg)) {
                        ePF.wxVkey = 1
                    }
                    ePF.wxXCkey = 1
                    return aNF
                }
                oJF.wxXCkey = 2
                _2z(z, 6, cKF, e, s, gg, oJF, 'item', 'index', '*this')
                var hIF = _v()
                _(bCF, hIF)
                if (_oz(z, 9, e, s, gg)) {
                    hIF.wxVkey = 1
                }
                hIF.wxXCkey = 1
            }
            var oDF = _v()
            _(tAF, oDF)
            if (_oz(z, 10, e, s, gg)) {
                oDF.wxVkey = 1
                var oRF = _v()
                _(oDF, oRF)
                var xSF = function(fUF, oTF, cVF, gg) {
                    var oXF = _v()
                    _(cVF, oXF)
                    if (_oz(z, 13, fUF, oTF, gg)) {
                        oXF.wxVkey = 1
                    }
                    oXF.wxXCkey = 1
                    return cVF
                }
                oRF.wxXCkey = 2
                _2z(z, 11, xSF, e, s, gg, oRF, 'item', 'index', '*this')
                var bQF = _v()
                _(oDF, bQF)
                if (_oz(z, 14, e, s, gg)) {
                    bQF.wxVkey = 1
                }
                bQF.wxXCkey = 1
            }
            var xEF = _v()
            _(tAF, xEF)
            if (_oz(z, 15, e, s, gg)) {
                xEF.wxVkey = 1
                var cYF = _v()
                _(xEF, cYF)
                if (_oz(z, 16, e, s, gg)) {
                    cYF.wxVkey = 1
                }
                cYF.wxXCkey = 1
            }
            var oFF = _v()
            _(tAF, oFF)
            if (_oz(z, 17, e, s, gg)) {
                oFF.wxVkey = 1
                var oZF = _v()
                _(oFF, oZF)
                var l1F = function(t3F, a2F, e4F, gg) {
                    var o6F = _v()
                    _(e4F, o6F)
                    if (_oz(z, 20, t3F, a2F, gg)) {
                        o6F.wxVkey = 1
                    }
                    o6F.wxXCkey = 1
                    return e4F
                }
                oZF.wxXCkey = 2
                _2z(z, 18, l1F, e, s, gg, oZF, 'item', 'index', '*this')
            }
            var fGF = _v()
            _(tAF, fGF)
            if (_oz(z, 21, e, s, gg)) {
                fGF.wxVkey = 1
                var x7F = _v()
                _(fGF, x7F)
                var o8F = function(c0F, f9F, hAG, gg) {
                    var cCG = _v()
                    _(hAG, cCG)
                    if (_oz(z, 24, c0F, f9F, gg)) {
                        cCG.wxVkey = 1
                    }
                    cCG.wxXCkey = 1
                    return hAG
                }
                x7F.wxXCkey = 2
                _2z(z, 22, o8F, e, s, gg, x7F, 'item', 'index', '*this')
            }
            eBF.wxXCkey = 1
            bCF.wxXCkey = 1
            oDF.wxXCkey = 1
            xEF.wxXCkey = 1
            oFF.wxXCkey = 1
            fGF.wxXCkey = 1
            _(l9E, tAF)
            a0E.wxXCkey = 1
            _(r, l9E)
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
                g = "$gwx_XC_18";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_18();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/lock-setting/lock-setting.wxml'] = [$gwx_XC_18, './pages/lock-setting/lock-setting.wxml'];
else __wxAppCode__['pages/lock-setting/lock-setting.wxml'] = $gwx_XC_18('./pages/lock-setting/lock-setting.wxml');;
__wxRoute = "pages/lock-setting/lock-setting";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/lock-setting/lock-setting.js";
define("pages/lock-setting/lock-setting.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    getApp();
    Page({
        data: {
            statusBarHeight: 0,
            navBarHeight: 44,
            hasPassword: !1,
            appLockEnabled: !1,
            step: "menu",
            password: "",
            confirmPassword: "",
            oldPassword: "",
            isResetFlow: !1,
            questions: ["您的初中同桌是？", "您小时候最好的朋友是？", "你第一次做饭做的是什么菜？", "你童年最喜欢的卡通角色全名？", "你童年最喜欢的一个玩具具体名称？"],
            selectedQuestion: "",
            answer: "",
            tempPassword: ""
        },
        onLoad: function(t) {
            var s = wx.getSystemInfoSync();
            this.setData({
                statusBarHeight: s.statusBarHeight || 20
            }), "1" === t.reset ? this.setData({
                step: "set",
                password: "",
                confirmPassword: "",
                answer: "",
                selectedQuestion: "",
                hasPassword: !1,
                appLockEnabled: !1,
                isResetFlow: !0
            }) : this.loadLockStatus(), this.initAd()
        },
        initAd: function() {
            var t = this;
            this.ad = wx.createRewardedVideoAd({
                adUnitId: "adunit-e5b27bf9d0558ed0"
            }), this.ad.onLoad((function() {})), this.ad.onError((function(s) {
                t.adLoadFailed = !0
            })), this.ad.onClose((function(s) {
                s.isEnded ? t.doEnableLock() : wx.showToast({
                    title: "看完广告才能开启哦",
                    icon: "none"
                })
            }))
        },
        doEnableLock: function() {
            wx.setStorageSync("appLockEnabled", !0), this.setData({
                appLockEnabled: !0
            }), this.syncAppLockToCloud(), wx.showToast({
                title: "应用锁已开启",
                icon: "success"
            })
        },
        onShow: function() {
            this.loadLockStatus()
        },
        loadLockStatus: function() {
            var t = wx.getStorageSync("appLockPassword"),
                s = wx.getStorageSync("appLockEnabled");
            if (this.setData({
                    hasPassword: !!t,
                    appLockEnabled: !!s
                }), !t) {
                var a = Date.now();
                (!this._lastCloudSync || a - this._lastCloudSync > 3e4) && (this._lastCloudSync = a, this.syncAppLockFromCloud())
            }
        },
        onSwitchChange: function(t) {
            var s = this,
                a = t.detail.value,
                o = this.data.hasPassword;
            !a || o ? a ? (this.setData({
                appLockEnabled: !1
            }), this.ad && !this.adLoadFailed ? this.ad.show().catch((function() {
                s.doEnableLock()
            })) : this.doEnableLock()) : (wx.setStorageSync("appLockEnabled", !1), this.setData({
                appLockEnabled: !1
            }), this.syncAppLockToCloud(), wx.showToast({
                title: "应用锁已关闭",
                icon: "none"
            })) : this.setData({
                step: "set"
            })
        },
        onSetPassword: function() {
            this.setData({
                step: "set",
                password: "",
                confirmPassword: "",
                answer: "",
                selectedQuestion: ""
            })
        },
        onChangePassword: function() {
            this.setData({
                step: "verify",
                oldPassword: "",
                password: "",
                confirmPassword: ""
            })
        },
        onInputPassword: function(t) {
            this.setData({
                password: t.detail.value
            }), 6 === t.detail.value.length && this.onPasswordComplete()
        },
        onInputConfirm: function(t) {
            this.setData({
                confirmPassword: t.detail.value
            }), 6 === t.detail.value.length && this.onConfirmComplete()
        },
        onInputOldPassword: function(t) {
            this.setData({
                oldPassword: t.detail.value
            }), 6 === t.detail.value.length && this.onOldPasswordComplete()
        },
        onKeyPress: function(t) {
            var s = this,
                a = t.currentTarget.dataset.key,
                o = this.data,
                e = o.step,
                n = o.password,
                i = o.confirmPassword,
                c = o.oldPassword;
            if ("set" === e || "change" === e) {
                if (n.length < 6) {
                    var d = n + a;
                    this.setData({
                        password: d
                    }), 6 === d.length && setTimeout((function() {
                        return s.onPasswordComplete()
                    }), 100)
                }
            } else if ("confirm" === e) {
                if (i.length < 6) {
                    var r = i + a;
                    this.setData({
                        confirmPassword: r
                    }), 6 === r.length && setTimeout((function() {
                        return s.onConfirmComplete()
                    }), 100)
                }
            } else if ("verify" === e && c.length < 6) {
                var l = c + a;
                this.setData({
                    oldPassword: l
                }), 6 === l.length && setTimeout((function() {
                    return s.onOldPasswordComplete()
                }), 100)
            }
        },
        onDelete: function() {
            var t = this.data,
                s = t.step,
                a = t.password,
                o = t.confirmPassword,
                e = t.oldPassword;
            "set" === s || "change" === s ? a.length > 0 && this.setData({
                password: a.slice(0, -1)
            }) : "confirm" === s ? o.length > 0 && this.setData({
                confirmPassword: o.slice(0, -1)
            }) : "verify" === s && e.length > 0 && this.setData({
                oldPassword: e.slice(0, -1)
            })
        },
        onPasswordComplete: function() {
            var t = this.data,
                s = t.password,
                a = t.step;
            6 === s.length && ("set" === a || "change" === a) && this.setData({
                step: "confirm"
            })
        },
        onConfirmComplete: function() {
            var t = this.data,
                s = t.password,
                a = t.confirmPassword,
                o = (t.step, t.oldPassword);
            if (6 === a.length) return s !== a ? (wx.showToast({
                title: "两次密码不一致",
                icon: "none"
            }), this.setData({
                confirmPassword: "",
                password: ""
            }), void(o ? this.setData({
                step: "change"
            }) : this.setData({
                step: "set"
            }))) : void this.setData({
                tempPassword: s,
                step: "question",
                selectedQuestion: "",
                answer: ""
            })
        },
        onOldPasswordComplete: function() {
            if (this.data.oldPassword !== wx.getStorageSync("appLockPassword")) return wx.showToast({
                title: "密码错误",
                icon: "none"
            }), void this.setData({
                oldPassword: ""
            });
            this.setData({
                step: "change",
                password: "",
                confirmPassword: ""
            })
        },
        onQuestionChange: function(t) {
            var s = t.detail.value;
            this.setData({
                selectedQuestion: this.data.questions[s]
            })
        },
        onInputAnswer: function(t) {
            this.setData({
                answer: t.detail.value
            })
        },
        onSaveQuestion: function() {
            var t = this,
                s = this.data,
                a = s.tempPassword,
                o = s.selectedQuestion,
                e = s.answer;
            o ? e && 0 !== e.trim().length ? (wx.setStorageSync("appLockPassword", a), wx.setStorageSync("appLockQuestion", {
                question: o,
                answer: e.trim()
            }), wx.setStorageSync("appLockEnabled", !0), this.syncAppLockToCloud(), wx.showToast({
                title: "设置成功",
                icon: "success"
            }), setTimeout((function() {
                t.setData({
                    hasPassword: !0,
                    appLockEnabled: !0,
                    step: "menu",
                    password: "",
                    confirmPassword: "",
                    oldPassword: "",
                    tempPassword: "",
                    selectedQuestion: "",
                    answer: ""
                })
            }), 1e3)) : wx.showToast({
                title: "请输入安全问题答案",
                icon: "none"
            }) : wx.showToast({
                title: "请选择安全问题",
                icon: "none"
            })
        },
        syncAppLockToCloud: function() {
            var t = wx.getStorageSync("appLockPassword"),
                s = wx.getStorageSync("appLockQuestion"),
                a = wx.getStorageSync("appLockEnabled");
            t && wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "saveAppLock",
                    appLock: {
                        password: t,
                        question: s ? s.question : "",
                        answer: s ? s.answer : "",
                        enabled: a
                    }
                }
            }).then((function(t) {
                t.result && t.result.success
            })).catch((function(t) {}))
        },
        syncAppLockFromCloud: function() {
            var t = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getAppLock"
                }
            }).then((function(s) {
                if (s.result && s.result.success && s.result.data) {
                    var a = s.result.data,
                        o = wx.getStorageSync("appLockPassword");
                    a.password && !o && (wx.setStorageSync("appLockPassword", a.password), a.question && wx.setStorageSync("appLockQuestion", {
                        question: a.question,
                        answer: a.answer
                    }), wx.setStorageSync("appLockEnabled", a.enabled), t.loadLockStatus())
                }
            })).catch((function(t) {}))
        },
        onBack: function() {
            var t = this.data.step;
            if (("set" === t || "confirm" === t || "question" === t) && (!wx.getStorageSync("appLockPassword") && "set" === t)) return void wx.showModal({
                title: "提示",
                content: "您必须完成新密码设置才能继续使用",
                showCancel: !1,
                confirmText: "继续设置"
            });
            this.setData({
                step: "menu",
                password: "",
                confirmPassword: "",
                oldPassword: "",
                tempPassword: "",
                selectedQuestion: "",
                answer: ""
            })
        },
        onNavigateBack: function() {
            "menu" !== this.data.step ? this.onBack() : wx.navigateBack()
        },
        onCloseLock: function() {
            var t = this;
            wx.showModal({
                title: "关闭密码锁",
                content: "关闭后密码将被清除，确定要关闭吗？",
                success: function(s) {
                    s.confirm && (wx.removeStorageSync("appLockPassword"), wx.removeStorageSync("appLockEnabled"), wx.removeStorageSync("appLockQuestion"), wx.cloud.callFunction({
                        name: "diary",
                        data: {
                            action: "deleteAppLock"
                        }
                    }).catch((function(t) {})), t.setData({
                        hasPassword: !1,
                        appLockEnabled: !1,
                        step: "menu"
                    }), wx.showToast({
                        title: "已关闭密码锁",
                        icon: "none"
                    }))
                }
            })
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/lock-setting/lock-setting.js'
});
require("pages/lock-setting/lock-setting.js");