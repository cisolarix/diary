$gwx_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];

        function gz$gwx_XC_4_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([3, 'onCheckin'])
                Z([3, 'vip-card'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'todayChecked']
                    ]
                ])
                Z([3, 'onThemeSelect'])
                Z([3, 'menu-single-card'])
                Z([
                    [7],
                    [3, 'hasNewHeadImage']
                ])
                Z([
                    [7],
                    [3, 'showDesktopGuide']
                ])
                Z([
                    [7],
                    [3, 'showPrivacyAuthModal']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_4 = true;
        var x = ['./pages/profile/profile.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_4_1()
            var hMB = _n('view')
            _rz(z, hMB, 'class', 0, e, s, gg)
            var oPB = _mz(z, 'view', ['bindtap', 1, 'class', 1], [], e, s, gg)
            var lQB = _v()
            _(oPB, lQB)
            if (_oz(z, 3, e, s, gg)) {
                lQB.wxVkey = 1
            }
            lQB.wxXCkey = 1
            _(hMB, oPB)
            var aRB = _mz(z, 'view', ['bindtap', 4, 'class', 1], [], e, s, gg)
            var tSB = _v()
            _(aRB, tSB)
            if (_oz(z, 6, e, s, gg)) {
                tSB.wxVkey = 1
            }
            tSB.wxXCkey = 1
            _(hMB, aRB)
            var oNB = _v()
            _(hMB, oNB)
            if (_oz(z, 7, e, s, gg)) {
                oNB.wxVkey = 1
            }
            var cOB = _v()
            _(hMB, cOB)
            if (_oz(z, 8, e, s, gg)) {
                cOB.wxVkey = 1
            }
            oNB.wxXCkey = 1
            cOB.wxXCkey = 1
            _(r, hMB)
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
                g = "$gwx_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/profile/profile.wxml'] = [$gwx_XC_4, './pages/profile/profile.wxml'];
else __wxAppCode__['pages/profile/profile.wxml'] = $gwx_XC_4('./pages/profile/profile.wxml');;
__wxRoute = "pages/profile/profile";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/profile/profile.js";
define("pages/profile/profile.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../@babel/runtime/helpers/asyncToGenerator"),
        a = (getApp(), require("../../utils/cloud-images"));
    Page({
        data: {
            nickName: "微信用户",
            avatarUrl: "",
            showShareModal: !1,
            showDesktopGuide: !1,
            showPolicyModal: !1,
            policyType: "",
            showPrivacyAuthModal: !1,
            agreementText: "1. 服务说明\n本小程序为用户提供日记记录、云存储等服务。用户需遵守相关法律法规及平台规则。\n\n2. 账户使用\n用户应妥善保管账户信息，因用户保管不当造成的损失由用户自行承担。\n\n3. 内容规范\n用户发布的日记内容应符合法律法规，不得含有违法违规信息。我们保留对违规内容的处理权利。\n\n4. 知识产权\n本小程序的所有内容、技术及相关知识产权均归开发者所有，未经授权不得复制或传播。\n\n5. 免责声明\n因不可抗力或非我方原因导致的服务中断，我们将尽力恢复但不承担相应责任。\n\n6. 协议更新\n我们有权适时修改本协议，更新后的协议将在小程序内公布。",
            privacyText: "隐私政策\n\n我们非常重视您的个人隐私保护。以下是我们的隐私政策：\n\n1. 信息收集\n我们会收集您主动提供的昵称、头像等基本信息，以及您撰写的日记内容和上传的图片。\n\n2. 信息存储\n您的数据将加密存储于微信云开发服务器中，我们采用业界标准的安全措施保护您的数据安全。\n\n3. 信息使用\n收集的信息仅用于提供和改进日记服务，不会向第三方出售、出租或以其他方式披露您的个人信息。\n\n4. Cookie使用\n本小程序不使用Cookie技术。\n\n5. 用户权利\n您可以随时查看、编辑或删除自己的日记数据。如需注销账户，请联系客服处理。\n\n6. 未成年人保护\n未满18周岁的未成年人应在监护人陪同下阅读并同意本隐私政策。\n\n7. 政策更新\n如有重大变更，我们将通过小程序公告方式通知您。",
            continuousDays: 1,
            totalDays: 0,
            diaryCount: 0,
            totalWords: 0,
            totalDaysText: "0",
            diaryCountText: "0",
            pointsText: "0",
            totalWordsText: "0",
            todayChecked: !1,
            reminderCount: 0,
            reminderEnabled: !1,
            lockEnabled: !1,
            hasNewHeadImage: !1
        },
        onLoad: function() {
            var e = this;
            getApp().globalData.initPromise.then((function() {
                e.loadUserInfo(), e.loadStatistics()
            }))
        },
        onShow: function() {
            if (!this.data.showShareModal) {
                this._refreshLockStatus(), this._checkNewHeadImage(), this.loadUserInfo(), this.loadStatistics();
                var e = wx.getStorageSync("reminderSettings") || {},
                    t = wx.getStorageSync("reminderRenewCount") || 0;
                this.setData({
                    reminderEnabled: !!e.enabled,
                    reminderCount: t
                }), this._syncReminderCount(), "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
                    selected: 3
                }), this._checkPrivacyAuth()
            }
        },
        _refreshLockStatus: function() {
            var e = this,
                t = wx.getStorageSync("appLockEnabled"),
                a = wx.getStorageSync("appLockPassword"),
                n = !(!t || !a);
            wx.nextTick((function() {
                e.setData({
                    lockEnabled: n
                })
            }))
        },
        _checkNewHeadImage: function() {
            var e = wx.getStorageSync("headImageSeriesCache"),
                t = e && e.data && e.data.length || 0,
                a = wx.getStorageSync("headImageLastSeenCount") || 0;
            t > 0 && t > a ? this.setData({
                hasNewHeadImage: !0
            }) : this.setData({
                hasNewHeadImage: !1
            })
        },
        onContactTap: function() {
            getApp().skipNextLockCheck()
        },
        onShareAppMessage: function() {
            return getApp().skipNextLockCheck(), {
                title: "向心日记 - 记录每一天的美好",
                path: "/pages/index/index",
                imageUrl: a.shareImage
            }
        },
        loadUserInfo: function() {
            var a = this;
            return t(e().mark((function t() {
                var n, o, r;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!(n = wx.getStorageSync("userInfo") || {}).nickName || !n.avatarUrl) {
                                e.next = 5;
                                break
                            }
                            return a.setData({
                                nickName: n.nickName,
                                avatarUrl: n.avatarUrl
                            }), n.avatarUrl.startsWith("http") && wx.getImageInfo({
                                src: n.avatarUrl
                            }).catch((function() {})), e.abrupt("return");
                        case 5:
                            return e.prev = 5, e.next = 8, wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "getClientInfo"
                                }
                            });
                        case 8:
                            if (!((o = e.sent).result && o.result.success && o.result.data)) {
                                e.next = 16;
                                break
                            }
                            if (!(r = o.result.data).nickName && !r.avatarUrl) {
                                e.next = 16;
                                break
                            }
                            return wx.setStorageSync("userInfo", {
                                nickName: r.nickName || "",
                                avatarUrl: r.avatarUrl || ""
                            }), r.avatarUrl && wx.getImageInfo({
                                src: r.avatarUrl
                            }).catch((function() {})), a.setData({
                                nickName: r.nickName || "微信用户",
                                avatarUrl: r.avatarUrl || ""
                            }), e.abrupt("return");
                        case 16:
                            e.next = 20;
                            break;
                        case 18:
                            e.prev = 18, e.t0 = e.catch(5);
                        case 20:
                            a.setData({
                                nickName: n.nickName || "微信用户",
                                avatarUrl: n.avatarUrl || ""
                            });
                        case 21:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [5, 18]
                ])
            })))()
        },
        _todayStr: function() {
            var e = new Date,
                t = e.getFullYear(),
                a = String(e.getMonth() + 1).padStart(2, "0"),
                n = String(e.getDate()).padStart(2, "0");
            return "".concat(t, "-").concat(a, "-").concat(n)
        },
        _getCheckinCache: function() {
            var e = wx.getStorageSync("checkin_cache_date"),
                t = this._todayStr();
            if (e !== t) return null;
            var a = wx.getStorageSync("checkin_cache_data") || null;
            a && !a.todayChecked && ((wx.getStorageSync("lastCheckinDate") || "") === t && (a.todayChecked = !0));
            return a
        },
        _getDiaryStatsCache: function() {
            var e = wx.getStorageSync("profile_stats_cache") || null;
            if (!e) return null;
            var t = wx.getStorageSync("_diary_gen") || 0;
            return e.gen !== t ? null : e
        },
        _saveDiaryStatsCache: function(e, t, a) {
            try {
                wx.setStorageSync("profile_stats_cache", {
                    diaryCount: e,
                    totalWords: t,
                    totalImages: a || 0,
                    gen: wx.getStorageSync("_diary_gen") || 0,
                    _ts: Date.now()
                })
            } catch (e) {}
        },
        _formatNum: function(e) {
            if (e < 1e4) return String(e);
            var t = Math.floor(e / 1e4);
            return t >= 10 ? "10W+" : t + "W"
        },
        loadStatistics: function() {
            var a = this;
            return t(e().mark((function t() {
                var n, o, r, i, c, s, u, l, h, g, d, y, w;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, !(n = a._getDiaryStatsCache()) || "number" != typeof n.totalWords) {
                                e.next = 8;
                                break
                            }
                            o = n.diaryCount, r = n.totalWords, n.totalImages || 0, e.next = 26;
                            break;
                        case 8:
                            if (i = wx.getStorageSync("diaries") || {}, c = Object.keys(i), s = (wx.getStorageSync("_diary_gen") || 0) > 0, 0 !== c.length || !s) {
                                e.next = 21;
                                break
                            }
                            return e.prev = 12, e.next = 15, getApp().syncDiariesFromCloud();
                        case 15:
                            e.next = 19;
                            break;
                        case 17:
                            e.prev = 17, e.t0 = e.catch(12);
                        case 19:
                            i = wx.getStorageSync("diaries") || {}, c = Object.keys(i);
                        case 21:
                            o = c.length, r = 0, u = 0, c.forEach((function(e) {
                                var t = i[e];
                                t && t.content && (r += t.content.length), t && t.imagePaths && Array.isArray(t.imagePaths) && (u += t.imagePaths.length)
                            })), a._saveDiaryStatsCache(o, r, u);
                        case 26:
                            if (l = 0, h = 0, g = !1, !(d = a._getCheckinCache())) {
                                e.next = 36;
                                break
                            }
                            l = d.continuousDays || 0, g = !!d.todayChecked, h = wx.getStorageSync("points") || d.points || 0, e.next = 46;
                            break;
                        case 36:
                            return e.prev = 36, e.next = 39, wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "getCheckinStatus"
                                }
                            });
                        case 39:
                            (y = e.sent).result && y.result.success ? (w = y.result.data, l = w.continuousDays || 0, h = w.totalPoints || 0, g = !!w.todayChecked, wx.setStorageSync("points", h)) : h = wx.getStorageSync("points") || 0, e.next = 46;
                            break;
                        case 43:
                            e.prev = 43, e.t1 = e.catch(36), h = wx.getStorageSync("points") || 0;
                        case 46:
                            a.setData({
                                diaryCount: o,
                                totalDays: o,
                                totalWords: r,
                                continuousDays: l,
                                diaryCountText: a._formatNum(o),
                                totalDaysText: a._formatNum(o),
                                totalWordsText: a._formatNum(r || 0),
                                pointsText: String(h),
                                todayChecked: g
                            }), e.next = 51;
                            break;
                        case 49:
                            e.prev = 49, e.t2 = e.catch(0);
                        case 51:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [0, 49],
                    [12, 17],
                    [36, 43]
                ])
            })))()
        },
        _syncReminderCount: function() {
            var e = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getRenewCount"
                }
            }).then((function(t) {
                if (t.result && t.result.success) {
                    var a = t.result.renewCount || 0,
                        n = wx.getStorageSync("reminderSettings") || {};
                    e.setData({
                        reminderEnabled: !!n.enabled,
                        reminderCount: a
                    }), wx.setStorageSync("reminderRenewCount", a)
                }
            })).catch((function() {}))
        },
        onEditProfile: function() {
            wx.navigateTo({
                url: "/pages/edit-profile/edit-profile"
            })
        },
        onVipUpgrade: function() {
            wx.navigateTo({
                url: "/pages/checkin/checkin"
            })
        },
        onLockSetting: function() {
            wx.navigateTo({
                url: "/pages/lock-setting/lock-setting"
            })
        },
        onThemeSelect: function() {
            var e = wx.getStorageSync("headImageSeriesCache"),
                t = e && e.data && e.data.length || 0;
            t > 0 && wx.setStorageSync("headImageLastSeenCount", t), this.setData({
                hasNewHeadImage: !1
            }), wx.navigateTo({
                url: "/pages/theme-select/theme-select"
            })
        },
        onMessage: function() {
            wx.navigateTo({
                url: "/pages/notice/notice"
            })
        },
        onBadge: function() {
            wx.showToast({
                title: "敬请期待",
                icon: "none"
            })
        },
        onCheckin: function() {
            wx.navigateTo({
                url: "/pages/checkin/checkin"
            })
        },
        onInvite: function() {
            wx.navigateTo({
                url: "/pages/invite-records/invite-records"
            })
        },
        onService: function() {
            wx.navigateTo({
                url: "/pages/more-settings/more-settings"
            })
        },
        onFaq: function() {
            wx.navigateTo({
                url: "/pages/faq/faq"
            })
        },
        onReminder: function() {
            wx.navigateTo({
                url: "/pages/reminder/reminder"
            })
        },
        onExportDiary: function() {
            wx.navigateTo({
                url: "/pages/export-diary/export-diary"
            })
        },
        onMyBook: function() {
            wx.showToast({
                title: "敬请期待",
                icon: "none"
            })
        },
        onFamilyDiary: function() {
            wx.showToast({
                title: "敬请期待",
                icon: "none"
            })
        },
        onMoreSettings: function() {
            wx.navigateTo({
                url: "/pages/more-settings/more-settings"
            })
        },
        onSecurityCenter: function() {
            wx.showToast({
                title: "敬请期待",
                icon: "none"
            })
        },
        onHelp: function() {
            this.setData({
                showDesktopGuide: !0
            })
        },
        onFeedback: function() {
            wx.showToast({
                title: "敬请期待",
                icon: "none"
            })
        },
        onRateApp: function() {
            wx.showToast({
                title: "感谢支持！",
                icon: "none"
            })
        },
        onAbout: function() {
            wx.showToast({
                title: "关于向心日记 V1.0.0",
                icon: "none"
            })
        },
        onShowShareModal: function() {
            this.setData({
                showShareModal: !0
            })
        },
        onCloseShareModal: function() {
            this.setData({
                showShareModal: !1
            })
        },
        preventBubble: function() {},
        onShowUserAgreement: function() {
            this.setData({
                showPolicyModal: !0,
                policyType: "agreement"
            })
        },
        onShowPrivacyPolicy: function() {
            this.setData({
                showPolicyModal: !0,
                policyType: "privacy"
            })
        },
        onClosePolicyModal: function() {
            this.setData({
                showPolicyModal: !1
            })
        },
        _checkPrivacyAuth: function() {
            var e = this;
            wx.onNeedPrivacyAuthorization && wx.onNeedPrivacyAuthorization((function(t) {
                e.data.showPrivacyAuthModal || (e.setData({
                    showPrivacyAuthModal: !0
                }), e._privacyResolve = t)
            })), wx.requirePrivacyAuthorize && wx.requirePrivacyAuthorize({
                success: function() {},
                fail: function() {}
            })
        },
        onAgreePrivacyAuth: function() {
            this._privacyResolve && this._privacyResolve({
                buttonId: "agree-btn",
                event: "agree"
            }), this._privacyResolve = null, this.setData({
                showPrivacyAuthModal: !1
            })
        },
        onDisagreePrivacyAuth: function() {
            this._privacyResolve && this._privacyResolve({
                event: "disagree"
            }), this._privacyResolve = null, this.setData({
                showPrivacyAuthModal: !1
            })
        },
        checkDesktopGuide: function() {
            var e = this;
            wx.getStorageSync("desktopGuideShown") || setTimeout((function() {
                e.setData({
                    showDesktopGuide: !0
                })
            }), 800)
        },
        onCloseDesktopGuide: function() {
            this.setData({
                showDesktopGuide: !1
            });
            try {
                wx.setStorageSync("desktopGuideShown", !0)
            } catch (e) {}
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/profile/profile.js'
});
require("pages/profile/profile.js");