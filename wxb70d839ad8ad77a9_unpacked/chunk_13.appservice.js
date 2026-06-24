$gwx_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];

        function gz$gwx_XC_5_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'enabled']
                ])
                Z([3, 'onRenew'])
                Z([a, [3, 'claim-btn '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'renewing']
                        ],
                        [1, 'disabled'],
                        [1, '']
                    ]
                ])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'renewing']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_5 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_5 = true;
        var x = ['./pages/reminder/reminder.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_5_1()
            var bUB = _v()
            _(r, bUB)
            if (_oz(z, 0, e, s, gg)) {
                bUB.wxVkey = 1
                var oVB = _mz(z, 'view', ['bindtap', 1, 'class', 1], [], e, s, gg)
                var xWB = _v()
                _(oVB, xWB)
                if (_oz(z, 3, e, s, gg)) {
                    xWB.wxVkey = 1
                }
                xWB.wxXCkey = 1
                _(bUB, oVB)
            }
            bUB.wxXCkey = 1
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
                g = "$gwx_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/reminder/reminder.wxml'] = [$gwx_XC_5, './pages/reminder/reminder.wxml'];
else __wxAppCode__['pages/reminder/reminder.wxml'] = $gwx_XC_5('./pages/reminder/reminder.wxml');;
__wxRoute = "pages/reminder/reminder";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/reminder/reminder.js";
define("pages/reminder/reminder.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Page({
        data: {
            enabled: !1,
            time: "21:00",
            renewCount: 0,
            renewing: !1,
            loadingCloud: !0
        },
        onLoad: function() {
            var e = wx.getStorageSync("reminderSettings");
            e && this.setData({
                enabled: e.enabled || !1,
                time: e.time || "21:00",
                loadingCloud: !0
            });
            var t = wx.getStorageSync("reminderRenewCount") || 0;
            this.setData({
                renewCount: t
            }), this._syncFromCloud()
        },
        _syncFromCloud: function() {
            var e = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getReminderSettings"
                }
            }).then((function(t) {
                if (e.setData({
                        loadingCloud: !1
                    }), t.result && t.result.success && t.result.settings) {
                    var n = t.result.settings;
                    e.setData({
                        enabled: n.enabled || !1,
                        time: n.time || "21:00",
                        renewCount: n.renewCount || 0
                    }), wx.setStorageSync("reminderSettings", {
                        enabled: n.enabled || !1,
                        time: n.time || "21:00"
                    }), wx.setStorageSync("reminderRenewCount", n.renewCount || 0)
                }
            })).catch((function() {
                e.setData({
                    loadingCloud: !1
                })
            }))
        },
        onToggle: function(e) {
            var t = e.detail.value;
            this._userActed = !0, this.setData({
                enabled: t
            }), this._debounceSaveSettings(), t ? this.requestPermission() : wx.showToast({
                title: "已关闭提醒",
                icon: "none"
            })
        },
        onTimeChange: function(e) {
            this._userActed = !0, this.setData({
                time: e.detail.value
            }), this._debounceSaveSettings(), wx.showToast({
                title: "提醒时间已生效 ✓",
                icon: "none",
                duration: 1500
            })
        },
        onSelectTime: function() {
            var e = this,
                t = ["07:00", "08:00", "12:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
            wx.showActionSheet({
                itemList: t,
                success: function(n) {
                    e._userActed = !0, e.setData({
                        time: t[n.tapIndex]
                    }), e._debounceSaveSettings()
                }
            })
        },
        _debounceSaveSettings: function() {
            var e = this,
                t = this.data,
                n = t.enabled,
                a = t.time;
            wx.setStorageSync("reminderSettings", {
                enabled: n,
                time: a
            }), this._saveTimer && clearTimeout(this._saveTimer), this._saveTimer = setTimeout((function() {
                e._doSaveToCloud()
            }), 1500)
        },
        _doSaveToCloud: function() {
            var e = this.data,
                t = e.enabled,
                n = e.time;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "saveReminderSettings",
                    settings: {
                        enabled: t,
                        time: n
                    }
                }
            }).catch((function() {}))
        },
        onRenew: function() {
            var e = this;
            if (!this.data.renewing) {
                this._userActed = !0, this.setData({
                    renewing: !0
                });
                var t = "vdrDS4o76rrw74UeThDICtk6HDo8sVNI6TaIJHHErEY";
                wx.requestSubscribeMessage({
                    tmplIds: [t],
                    success: function(n) {
                        if ("accept" === n[t]) {
                            var a = (e.data.renewCount || 0) + 1;
                            e.setData({
                                renewCount: a
                            }), wx.setStorageSync("reminderRenewCount", a), wx.showToast({
                                title: "已获得 1 次推送，共 ".concat(a, " 次"),
                                icon: "none",
                                duration: 2e3
                            }), wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "addRenewCount"
                                }
                            }).then((function(t) {
                                if (t.result && t.result.success) {
                                    var n = t.result.renewCount || a;
                                    e.setData({
                                        renewCount: n
                                    }), wx.setStorageSync("reminderRenewCount", n)
                                }
                            })).catch((function() {}))
                        } else wx.showToast({
                            title: "请点允许才能续订",
                            icon: "none"
                        })
                    },
                    fail: function() {
                        wx.showToast({
                            title: "续订失败，请重试",
                            icon: "none"
                        })
                    },
                    complete: function() {
                        e.setData({
                            renewing: !1
                        })
                    }
                })
            }
        },
        requestPermission: function() {
            var e = this,
                t = "vdrDS4o76rrw74UeThDICtk6HDo8sVNI6TaIJHHErEY";
            wx.requestSubscribeMessage({
                tmplIds: [t],
                success: function(n) {
                    if ("accept" === n[t]) {
                        wx.showToast({
                            title: "提醒已开启 🌙",
                            icon: "none"
                        });
                        var a = (e.data.renewCount || 0) + 1;
                        e.setData({
                            renewCount: a
                        }), wx.setStorageSync("reminderRenewCount", a), wx.cloud.callFunction({
                            name: "diary",
                            data: {
                                action: "addRenewCount"
                            }
                        }).then((function(t) {
                            if (t.result && t.result.success) {
                                var n = t.result.renewCount || a;
                                e.setData({
                                    renewCount: n
                                }), wx.setStorageSync("reminderRenewCount", n)
                            }
                        })).catch((function() {}))
                    } else wx.showToast({
                        title: "请允许通知才能收到提醒",
                        icon: "none"
                    }), e._saveTimer && (clearTimeout(e._saveTimer), e._saveTimer = null), e.setData({
                        enabled: !1
                    }), e._debounceSaveSettings()
                },
                fail: function() {
                    wx.showToast({
                        title: "授权失败，请重试",
                        icon: "none"
                    }), e._saveTimer && (clearTimeout(e._saveTimer), e._saveTimer = null), e.setData({
                        enabled: !1
                    }), e._debounceSaveSettings()
                }
            })
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/reminder/reminder.js'
});
require("pages/reminder/reminder.js");