$gwx_XC_12 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];

        function gz$gwx_XC_12_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_12 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_12 = true;
        var x = ['./pages/edit-profile/edit-profile.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_12_1()
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
                g = "$gwx_XC_12";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_12();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/edit-profile/edit-profile.wxml'] = [$gwx_XC_12, './pages/edit-profile/edit-profile.wxml'];
else __wxAppCode__['pages/edit-profile/edit-profile.wxml'] = $gwx_XC_12('./pages/edit-profile/edit-profile.wxml');;
__wxRoute = "pages/edit-profile/edit-profile";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/edit-profile/edit-profile.js";
define("pages/edit-profile/edit-profile.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../utils/cloud").callAction;
    Page({
        data: {
            nickName: "",
            avatarUrl: "",
            remainEdits: 0,
            maxEdits: 2
        },
        onLoad: function() {
            this.loadProfile(), this._updateRemainDisplay()
        },
        onShow: function() {
            this.loadProfile()
        },
        loadProfile: function() {
            var e = wx.getStorageSync("userInfo") || {};
            this.setData({
                nickName: e.nickName || "",
                avatarUrl: e.avatarUrl || ""
            })
        },
        onChooseAvatar: function(n) {
            var a = this;
            return t(e().mark((function t() {
                var r, i, o, c, s, u, l, d, h, m, w;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = getApp(), i = n.detail.avatarUrl) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return");
                        case 4:
                            if (o = a._checkCanEdit(), c = o.canEdit, o.remain, s = o.reason, c) {
                                e.next = 8;
                                break
                            }
                            return wx.showModal({
                                title: "⏰ 修改次数已用完",
                                content: s,
                                showCancel: !1,
                                confirmText: "知道了"
                            }), e.abrupt("return");
                        case 8:
                            return wx.showLoading({
                                title: "检测中..."
                            }), e.prev = 9, u = i.includes(".png") ? ".png" : ".jpg", l = "avatars/".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 8)).concat(u), e.next = 14, wx.cloud.uploadFile({
                                filePath: i,
                                cloudPath: l
                            });
                        case 14:
                            return d = e.sent, e.next = 17, wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "imgSecCheck",
                                    fileID: d.fileID
                                }
                            });
                        case 17:
                            if ((h = e.sent).result && h.result.pass) {
                                e.next = 24;
                                break
                            }
                            return e.next = 21, wx.cloud.deleteFile({
                                fileList: [d.fileID]
                            });
                        case 21:
                            return wx.hideLoading(), wx.showToast({
                                title: (null === (m = h.result) || void 0 === m ? void 0 : m.reason) || "图片违规，无法使用",
                                icon: "none"
                            }), e.abrupt("return");
                        case 24:
                            a.setData({
                                avatarUrl: d.fileID
                            }), (w = wx.getStorageSync("userInfo") || {}).avatarUrl = d.fileID, wx.setStorageSync("userInfo", w), r.globalData.skipLock = !0, a._consumeOneEdit(), wx.hideLoading(), wx.showToast({
                                title: "头像已更新",
                                icon: "none",
                                duration: 1200
                            }), e.next = 38;
                            break;
                        case 34:
                            e.prev = 34, e.t0 = e.catch(9), wx.hideLoading(), wx.showToast({
                                title: "头像上传失败",
                                icon: "none"
                            });
                        case 38:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [9, 34]
                ])
            })))()
        },
        onInputNickName: function(e) {
            var t = this,
                n = e.detail.value;
            this._pendingNickName = n, this._nickInputTimer && clearTimeout(this._nickInputTimer), this._nickInputTimer = setTimeout((function() {
                t.setData({
                    nickName: t._pendingNickName || ""
                })
            }), 300)
        },
        onSave: function() {
            var a = this;
            return t(e().mark((function t() {
                var r, i, o, c, s, u, l, d, h, m;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = a._pendingNickName || a.data.nickName || "", i = a.data.avatarUrl, r.trim()) {
                                e.next = 5;
                                break
                            }
                            return wx.showToast({
                                title: "请输入昵称",
                                icon: "none"
                            }), e.abrupt("return");
                        case 5:
                            if (o = a._checkCanEdit(), c = o.canEdit, o.remain, s = o.reason, c) {
                                e.next = 9;
                                break
                            }
                            return wx.showModal({
                                title: "⏰ 修改次数已用完",
                                content: s,
                                showCancel: !1,
                                confirmText: "知道了"
                            }), e.abrupt("return");
                        case 9:
                            if (u = wx.getStorageSync("userInfo") || {}, l = i !== u.avatarUrl, d = r.trim() !== (u.nickName || ""), l || d) {
                                e.next = 15;
                                break
                            }
                            return wx.showToast({
                                title: "未做任何修改",
                                icon: "none"
                            }), e.abrupt("return");
                        case 15:
                            return wx.showLoading({
                                title: "保存中..."
                            }), e.prev = 16, e.next = 19, wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "msgSecCheck",
                                    content: r
                                }
                            });
                        case 19:
                            if ((h = e.sent).result && h.result.pass) {
                                e.next = 24;
                                break
                            }
                            return wx.hideLoading(), wx.showToast({
                                title: "昵称内容违规，请修改",
                                icon: "none"
                            }), e.abrupt("return");
                        case 24:
                            return m = {
                                nickName: r,
                                avatarUrl: i || ""
                            }, wx.setStorageSync("userInfo", m), a._consumeOneEdit(), e.prev = 27, e.next = 30, n("saveUserInfo", {
                                nickName: r,
                                avatarUrl: i
                            });
                        case 30:
                            e.next = 34;
                            break;
                        case 32:
                            e.prev = 32, e.t0 = e.catch(27);
                        case 34:
                            wx.hideLoading(), wx.showToast({
                                title: "已保存",
                                icon: "none",
                                duration: 800
                            }), setTimeout((function() {
                                wx.navigateBack()
                            }), 600), e.next = 43;
                            break;
                        case 39:
                            e.prev = 39, e.t1 = e.catch(16), wx.hideLoading(), wx.showToast({
                                title: "保存失败，请重试",
                                icon: "none"
                            });
                        case 43:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [16, 39],
                    [27, 32]
                ])
            })))()
        },
        _getEditRecord: function() {
            var e = wx.getStorageSync("profile_edit_limit") || null;
            if (!e) return null;
            var t = new Date;
            return e.year !== t.getFullYear() || e.month !== t.getMonth() + 1 ? null : e
        },
        _checkCanEdit: function() {
            var e = this._getEditRecord();
            return e ? e.count >= 2 ? {
                canEdit: !1,
                remain: 0,
                reason: "本月修改次数已用完，下月初重置"
            } : {
                canEdit: !0,
                remain: 2 - e.count
            } : {
                canEdit: !0,
                remain: 2
            }
        },
        _consumeOneEdit: function() {
            var e = new Date,
                t = this._getEditRecord();
            if (!t) return wx.setStorageSync("profile_edit_limit", {
                year: e.getFullYear(),
                month: e.getMonth() + 1,
                count: 1,
                lastEditTime: Date.now()
            }), void this._updateRemainDisplay(1);
            t.count += 1, t.lastEditTime = Date.now(), wx.setStorageSync("profile_edit_limit", t), this._updateRemainDisplay(t.count)
        },
        _updateRemainDisplay: function(e) {
            var t = e;
            if (void 0 === t) {
                var n = this._getEditRecord();
                t = n ? n.count : 0
            }
            this.setData({
                remainEdits: Math.max(0, 2 - t)
            })
        },
        onBack: function() {
            wx.navigateBack()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/edit-profile/edit-profile.js'
});
require("pages/edit-profile/edit-profile.js");