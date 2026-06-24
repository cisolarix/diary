$gwx_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];

        function gz$gwx_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_1 = true;
        var x = ['./pages/checkin/checkin.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_1_1()
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
                g = "$gwx_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/checkin.wxml'] = [$gwx_XC_1, './pages/checkin/checkin.wxml'];
else __wxAppCode__['pages/checkin/checkin.wxml'] = $gwx_XC_1('./pages/checkin/checkin.wxml');;
__wxRoute = "pages/checkin/checkin";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/checkin/checkin.js";
define("pages/checkin/checkin.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        a = require("../../@babel/runtime/helpers/asyncToGenerator"),
        e = require("../../@babel/runtime/helpers/objectSpread2"),
        n = ["第一天", "第二天", "第三天", "第四天", "第五天", "第六天"];

    function o(t) {
        var a = 15 + 5 * t;
        return Math.min(a, 40)
    }
    Page({
        data: {
            points: 0,
            continuousDays: 0,
            statusBarHeight: 20,
            dayList: n.map((function(t, a) {
                return {
                    name: t,
                    reward: o(a),
                    status: "pending",
                    statusText: "待领取",
                    isToday: 0 === a
                }
            })),
            day7: {
                name: "第七天",
                reward: o(6),
                status: "pending",
                statusText: "待领取",
                isToday: !1
            },
            loading: !1,
            claiming: !1,
            claimRewarding: !1,
            inviteCount: 0,
            inviteLevels: [],
            inviteProgressWidth: 0,
            showRules: !1,
            adMaxCount: 3,
            adRewardPoints: 5,
            adRemainCount: 3,
            adLoading: !1,
            showDoubleModal: !1,
            doublePendingPoints: 0,
            doubleAdBtnText: "看广告 +0积分",
            doubleAdLoading: !1
        },
        onLoad: function(t) {
            var a = wx.getSystemInfoSync();
            this.setData({
                statusBarHeight: a.statusBarHeight
            }), this._ensureOpenId(), this._initAd()
        },
        _ensureOpenId: function() {
            wx.getStorageSync("myOpenId") || wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getMyOpenId"
                }
            }).then((function(t) {
                t.result && t.result.openId && wx.setStorageSync("myOpenId", t.result.openId)
            })).catch((function() {}))
        },
        onShow: function() {
            this.loadCheckinData(), this.loadInviteData(), this._updateAdRemainCount()
        },
        goBack: function() {
            wx.navigateBack({
                fail: function() {
                    return wx.switchTab({
                        url: "/pages/profile/profile"
                    })
                }
            })
        },
        loadCheckinData: function() {
            var t = this;
            if (!this.data.loading) {
                var a = this._getCache();
                a && a.dayList && a.dayList.length > 0 ? this.setData(e(e({}, a), {}, {
                    loading: !1
                })) : this.setData({
                    loading: !0
                }), wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "getCheckinStatus"
                    }
                }).then((function(a) {
                    if (!a.result || !a.result.success) {
                        console.error("获取签到数据失败:", a.result);
                        var i = wx.getStorageSync("checkin_cache_data");
                        return i ? t.setData(e(e({}, i), {}, {
                            loading: !1
                        })) : t.setData({
                            loading: !1
                        }), void wx.showToast({
                            title: "数据加载失败",
                            icon: "none"
                        })
                    }
                    var s = a.result.data;
                    wx.setStorageSync("points", s.totalPoints);
                    var d = n.map((function(a, e) {
                            return {
                                name: a,
                                reward: o(e),
                                status: t._calcStatus(s.weekRecord, e, s.todayChecked, s.todayIndex),
                                statusText: t._calcStatusText(s.weekRecord, e, s.todayChecked, s.todayIndex),
                                isToday: s.todayIndex === e && !s.todayChecked
                            }
                        })),
                        c = {
                            name: "第七天",
                            reward: o(6),
                            status: t._calcStatus(s.weekRecord, 6, s.todayChecked, s.todayIndex),
                            statusText: t._calcStatusText(s.weekRecord, 6, s.todayChecked, s.todayIndex),
                            isToday: 6 === s.todayIndex && !s.todayChecked
                        },
                        r = {
                            points: s.totalPoints,
                            continuousDays: s.continuousDays,
                            dayList: d,
                            day7: c,
                            loading: !1,
                            todayChecked: s.todayChecked
                        };
                    t.setData(r), t._setCache(r)
                })).catch((function(a) {
                    console.error("获取签到数据失败:", a);
                    var n = wx.getStorageSync("points") || 0,
                        o = wx.getStorageSync("checkin_cache_data");
                    o ? (t.setData(e(e({}, o), {}, {
                        loading: !1
                    })), wx.showToast({
                        title: "使用缓存数据",
                        icon: "none"
                    })) : (t.setData({
                        points: n,
                        loading: !1
                    }), wx.showToast({
                        title: "数据加载失败",
                        icon: "none"
                    }))
                }))
            }
        },
        _todayStr: function() {
            var t = new Date,
                a = t.getFullYear(),
                e = String(t.getMonth() + 1).padStart(2, "0"),
                n = String(t.getDate()).padStart(2, "0");
            return "".concat(a, "-").concat(e, "-").concat(n)
        },
        _getCache: function() {
            return wx.getStorageSync("checkin_cache_data") || null
        },
        _setCache: function(t) {
            wx.setStorageSync("checkin_cache_date", this._todayStr()), wx.setStorageSync("checkin_cache_data", t)
        },
        _getInviteCache: function() {
            return wx.getStorageSync("invite_cache_date") !== this._todayStr() ? null : wx.getStorageSync("invite_cache_data") || null
        },
        _setInviteCache: function(t) {
            wx.setStorageSync("invite_cache_date", this._todayStr()), wx.setStorageSync("invite_cache_data", t)
        },
        _calcStatus: function(t, a, e, n) {
            return t && 7 === t.length ? 1 === t[a] ? "claimed" : n !== a || e ? "pending" : "available" : "pending"
        },
        _calcStatusText: function(t, a, e, n) {
            return t && 7 === t.length ? 1 === t[a] ? "已领取" : n !== a || e ? "待领取" : "领取" : "待领取"
        },
        onClaimDay: function(t) {
            if (!this.data.claiming) {
                var a = t.currentTarget.dataset.idx,
                    e = this.data.dayList[a];
                e && "available" === e.status && this._doCheckin()
            }
        },
        onClaimDay7: function() {
            if (!this.data.claiming) {
                var t = this.data.day7;
                t && "available" === t.status && this._doCheckin()
            }
        },
        _doCheckin: function() {
            var t = this;
            this.setData({
                claiming: !0
            }), wx.showLoading({
                title: "签到中...",
                mask: !0
            }), wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "doCheckin"
                }
            }).then((function(a) {
                if (wx.hideLoading(), a.result.success) {
                    var n = a.result,
                        o = n.dayInWeek || 0;
                    wx.setStorageSync("points", n.totalPoints), wx.setStorageSync("lastCheckinDate", t._todayStr()), wx.removeStorageSync("checkin_cache_date"), wx.removeStorageSync("checkin_cache_data");
                    var i = t.data.dayList.map((function(t, a) {
                            return a === o && a < 6 ? e(e({}, t), {}, {
                                status: "claimed",
                                statusText: "已领取"
                            }) : t
                        })),
                        s = t.data.day7;
                    6 === o && s && (s = e(e({}, s), {}, {
                        status: "claimed",
                        statusText: "已领取"
                    })), t.setData({
                        claiming: !1,
                        points: n.totalPoints,
                        continuousDays: n.continuousDays,
                        dayList: i,
                        day7: s
                    }), t.setData({
                        showDoubleModal: !0,
                        doublePendingPoints: n.points || 0,
                        doubleAdBtnText: "看广告 +".concat(n.points || 0, "积分")
                    }), setTimeout((function() {
                        t.loadCheckinData(), t.loadInviteData(!0)
                    }), 1600)
                } else {
                    if ("ALREADY_CHECKED" === a.result.code) {
                        wx.showToast({
                            title: "今日已签到",
                            icon: "none"
                        });
                        var d = t.data.dayList.map((function(t) {
                                return "available" === t.status ? e(e({}, t), {}, {
                                    status: "claimed",
                                    statusText: "已领取"
                                }) : t
                            })),
                            c = t.data.day7;
                        t.data.day7 && "available" === t.data.day7.status && (c = e(e({}, t.data.day7), {}, {
                            status: "claimed",
                            statusText: "已领取"
                        })), wx.removeStorageSync("checkin_cache_date"), wx.removeStorageSync("checkin_cache_data"), t.setData({
                            claiming: !1,
                            todayChecked: !0,
                            dayList: d,
                            day7: c || t.data.day7
                        })
                    } else wx.showToast({
                        title: a.result.error || "签到失败",
                        icon: "none"
                    }), t.setData({
                        claiming: !1
                    })
                }
            })).catch((function(a) {
                wx.hideLoading(), wx.showToast({
                    title: "网络异常，请重试",
                    icon: "none"
                }), t.setData({
                    claiming: !1
                })
            }))
        },
        onShowRules: function() {
            this.setData({
                showRules: !0
            })
        },
        onCloseRules: function() {
            this.setData({
                showRules: !1
            })
        },
        onSkipDouble: function() {
            this.setData({
                showDoubleModal: !1,
                doublePendingPoints: 0,
                doubleAdBtnText: "看广告 +0积分"
            })
        },
        onWatchDoubleAd: function() {
            var t = this;
            this.data.doubleAdLoading || (this._rewardedAd ? (this.setData({
                doubleAdLoading: !0
            }), this._isDoubling = !0, this._rewardedAd.show().catch((function() {
                t._rewardedAd.load().then((function() {
                    return t._rewardedAd.show()
                })).catch((function(a) {
                    t.setData({
                        doubleAdLoading: !1
                    }), wx.showToast({
                        title: "广告加载失败",
                        icon: "none"
                    })
                }))
            }))) : wx.showToast({
                title: "广告暂不可用",
                icon: "none"
            }))
        },
        _onDoubleReward: function() {
            var t = this,
                a = this.data.doublePendingPoints || 0;
            a <= 0 || (wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "addPoints",
                    points: a,
                    reason: "checkin_double"
                }
            }).then((function(e) {
                wx.removeStorageSync("checkin_cache_date"), wx.removeStorageSync("checkin_cache_data"), e.result && e.result.success ? (t.setData({
                    points: e.result.totalPoints,
                    showDoubleModal: !1,
                    doublePendingPoints: 0,
                    doubleAdBtnText: "看广告 +0积分",
                    doubleAdLoading: !1
                }), wx.setStorageSync("points", e.result.totalPoints), wx.showToast({
                    title: "翻倍成功！积分+".concat(a),
                    icon: "none",
                    duration: 1500
                }), setTimeout((function() {
                    return t.loadCheckinData()
                }), 1600)) : t.setData({
                    showDoubleModal: !1,
                    doublePendingPoints: 0,
                    doubleAdBtnText: "看广告 +0积分",
                    doubleAdLoading: !1
                })
            })).catch((function() {
                var e = (t.data.points || 0) + a;
                t.setData({
                    points: e,
                    showDoubleModal: !1,
                    doublePendingPoints: 0,
                    doubleAdBtnText: "看广告 +0积分",
                    doubleAdLoading: !1
                }), wx.setStorageSync("points", e), wx.showToast({
                    title: "翻倍成功！积分+".concat(a),
                    icon: "none",
                    duration: 1500
                })
            })), this._isDoubling = !1)
        },
        loadInviteData: function(t) {
            var a = this;
            if (!t) {
                var e = wx.getStorageSync("integralData");
                e && this.setData(e)
            }
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getInviteStats"
                }
            }).then((function(t) {
                if (t.result.success) {
                    var e = t.result.data,
                        n = e.inviteCount || 0,
                        o = e.levels || [],
                        i = e.claimedLevels || [],
                        s = o.map((function(t, a) {
                            var e, s, d = n >= t.count,
                                c = -1 !== i.indexOf(t.count);
                            return c || !d && a > 0 && n < o[a - 1].count ? (e = c ? "done" : "locked", s = c ? "已领取" : "待领取") : d ? (e = "avail", s = "领取") : (e = "wait", s = "待领取"), {
                                count: t.count,
                                reward: "+" + (t.reward || 0),
                                status: e,
                                statusText: s
                            }
                        })),
                        d = 0;
                    if (s.length >= 2) {
                        var c = s[s.length - 1].count,
                            r = s[0].count;
                        (d = Math.min(100, Math.round((n - r) / (c - r) * 100))) < 0 && (d = 0)
                    } else 1 === s.length && (d = n >= s[0].count ? 100 : Math.round(n / s[0].count * 100));
                    a.setData({
                        inviteCount: n,
                        inviteLevels: s,
                        inviteProgressWidth: d
                    }), wx.setStorageSync("integralData", {
                        inviteCount: n,
                        inviteLevels: s,
                        inviteProgressWidth: d
                    })
                }
            })).catch((function(t) {}))
        },
        onInviteFriend: function() {},
        onShareAppMessage: function() {
            return a(t().mark((function a() {
                var e, n;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (getApp().skipNextLockCheck(), e = wx.getStorageSync("myOpenId")) {
                                t.next = 13;
                                break
                            }
                            return t.prev = 4, t.next = 7, wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "getMyOpenId"
                                }
                            });
                        case 7:
                            (n = t.sent).result && n.result.openId && (e = n.result.openId, wx.setStorageSync("myOpenId", e)), t.next = 13;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(4);
                        case 13:
                            return t.abrupt("return", {
                                title: "我在用向心日记签到领积分，快来一起吧！",
                                path: "/pages/index/index?inviterOpenId=" + (e || ""),
                                imageUrl: "cloud://cloud1-0g3jtuimd88a4af5.636c-cloud1-0g3jtuimd88a4af5-1413231909/voice/fengmiantu 20.27.41.jpg"
                            });
                        case 14:
                        case "end":
                            return t.stop()
                    }
                }), a, null, [
                    [4, 11]
                ])
            })))()
        },
        onClaimReward: function(t) {
            if (!this.data.claimRewarding) {
                var a = t.currentTarget.dataset.index,
                    e = this.data.inviteLevels[a];
                if (e && "avail" === e.status) {
                    var n = t.currentTarget.dataset.level;
                    this._doClaimReward(n)
                }
            }
        },
        _doClaimReward: function(t) {
            var a = this;
            this.setData({
                claimRewarding: !0
            }), wx.showLoading({
                title: "领取中...",
                mask: !0
            }), wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "claimInviteReward",
                    levelCount: t
                }
            }).then((function(n) {
                if (wx.hideLoading(), !n.result.success) return wx.showToast({
                    title: n.result.error || "领取失败",
                    icon: "none"
                }), void a.setData({
                    claimRewarding: !1
                });
                var o = n.result.totalPoints || (a.data.points || 0) + (n.result.points || 0);
                wx.setStorageSync("points", o), wx.removeStorageSync("checkin_cache_date"), wx.removeStorageSync("checkin_cache_data"), wx.removeStorageSync("invite_cache_date"), wx.removeStorageSync("invite_cache_data");
                var i = a.data.inviteLevels.map((function(a) {
                    return a.count === t && "avail" === a.status ? e(e({}, a), {}, {
                        status: "done",
                        statusText: "已领取"
                    }) : a
                }));
                wx.showToast({
                    title: n.result.msg || "领取成功！积分+".concat(n.result.points),
                    icon: "none",
                    duration: 1500
                }), a.setData({
                    claimRewarding: !1,
                    points: o,
                    inviteLevels: i
                }), setTimeout((function() {
                    a.loadInviteData(!0), a.loadCheckinData()
                }), 1600)
            })).catch((function(t) {
                wx.hideLoading(), wx.showToast({
                    title: "网络异常，请重试",
                    icon: "none"
                }), a.setData({
                    claimRewarding: !1
                })
            }))
        },
        _initAd: function() {
            var t = this;
            this._updateAdRemainCount(), wx.createRewardedVideoAd && (this._rewardedAd = wx.createRewardedVideoAd({
                adUnitId: "adunit-49c58216a29968e4"
            }), this._rewardedAd.onClose((function(a) {
                t.setData({
                    adLoading: !1,
                    doubleAdLoading: !1
                }), a && a.isEnded ? t._isDoubling ? t._onDoubleReward() : t._onAdReward() : (t._isDoubling = !1, wx.showToast({
                    title: "未完成观看，无奖励",
                    icon: "none"
                }))
            })), this._rewardedAd.onError((function(a) {
                t.setData({
                    adLoading: !1
                }), wx.showToast({
                    title: "广告暂不可用",
                    icon: "none"
                })
            })))
        },
        _updateAdRemainCount: function() {
            var t = this._todayStr(),
                a = wx.getStorageSync("ad_watch_date") === t && wx.getStorageSync("ad_watch_count") || 0,
                e = Math.max(0, 3 - a);
            this.setData({
                adRemainCount: e
            })
        },
        onWatchAd: function() {
            var t = this;
            this.data.adLoading || this.data.adRemainCount <= 0 || (this._rewardedAd ? (this.setData({
                adLoading: !0
            }), this._rewardedAd.show().catch((function() {
                t._rewardedAd.load().then((function() {
                    return t._rewardedAd.show()
                })).catch((function(a) {
                    t.setData({
                        adLoading: !1
                    }), wx.showToast({
                        title: "广告加载失败",
                        icon: "none"
                    })
                }))
            }))) : wx.showToast({
                title: "广告功能暂未开放",
                icon: "none"
            }))
        },
        _onAdReward: function() {
            var t = this,
                a = this._todayStr(),
                e = (wx.getStorageSync("ad_watch_date") === a && wx.getStorageSync("ad_watch_count") || 0) + 1;
            wx.setStorageSync("ad_watch_date", a), wx.setStorageSync("ad_watch_count", e);
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "addPoints",
                    points: 5,
                    reason: "ad_reward"
                }
            }).then((function(a) {
                wx.removeStorageSync("checkin_cache_date"), wx.removeStorageSync("checkin_cache_data"), a.result && a.result.success && (t.setData({
                    points: a.result.totalPoints,
                    adRemainCount: Math.max(0, 3 - e)
                }), wx.setStorageSync("points", a.result.totalPoints))
            })).catch((function() {
                var a = (t.data.points || 0) + 5;
                t.setData({
                    points: a
                }), wx.setStorageSync("points", a)
            })), wx.showToast({
                title: "观看成功！积分+".concat(5),
                icon: "none",
                duration: 1500
            })
        },
        onViewRecords: function() {
            wx.navigateTo({
                url: "/pages/invite-records/invite-records"
            })
        },
        onUnload: function() {
            this._rewardedAd && (this._rewardedAd.offClose(), this._rewardedAd.offError())
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/checkin/checkin.js'
});
require("pages/checkin/checkin.js");