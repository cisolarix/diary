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
                Z([3, 'container'])
                Z([3, 'hero'])
                Z([3, 'moon'])
                Z([3, 'star s1'])
                Z([3, 'star s2'])
                Z([3, 'star s3'])
                Z([3, 'star s4'])
                Z([3, 'hero-title'])
                Z([3, '每日提醒'])
                Z([3, 'hero-sub'])
                Z([3, '养成记录的好习惯 🌙'])
                Z([3, 'card'])
                Z([3, 'row'])
                Z([3, 'row-left'])
                Z([3, 'dot'])
                Z([3, 'row-label'])
                Z([3, '开启每日提醒'])
                Z([3, 'onToggle'])
                Z([
                    [7],
                    [3, 'enabled']
                ])
                Z([3, '#FF6B6B'])
                Z(z[18])
                Z(z[11])
                Z([3, 'onTimeChange'])
                Z([3, 'time'])
                Z([
                    [7],
                    [3, 'time']
                ])
                Z(z[12])
                Z(z[13])
                Z(z[14])
                Z(z[15])
                Z([3, '提醒时间'])
                Z([3, 'row-right'])
                Z([3, 'row-value'])
                Z([a, [
                    [7],
                    [3, 'time']
                ]])
                Z([3, 'chevron'])
                Z([3, 'renew-wrap'])
                Z([3, 'renew-card'])
                Z([3, 'renew-header'])
                Z([3, 'renew-title'])
                Z([3, '推送次数'])
                Z([3, 'count-badge'])
                Z([a, [3, '还剩下 '],
                    [
                        [7],
                        [3, 'renewCount']
                    ],
                    [3, ' 次提醒']
                ])
                Z([
                    [2, '>'],
                    [
                        [7],
                        [3, 'renewCount']
                    ],
                    [1, 0]
                ])
                Z([3, 'count-status'])
                Z([3, '每天自动消耗 1 次来提醒你写日记'])
                Z([3, 'count-status count-empty'])
                Z([3, '还没有推送机会哦~'])
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
                Z([3, 'claim-text'])
                Z([a, [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'renewing']
                    ],
                    [1, '正在领取...'],
                    [1, '+ 领取 1 次']
                ]])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'renewing']
                    ]
                ])
                Z([3, 'claim-hint'])
                Z([3, '建议多领几次，省得每天回来点~'])
                Z([3, 'tip-row'])
                Z([3, 'tip-text'])
                Z([3, '提醒功能需要授权小程序发送通知'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_5 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_5 = true;
        var x = ['./pages/reminder/reminder.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_5_1()
            var e4T = _n('view')
            _rz(z, e4T, 'class', 0, e, s, gg)
            var o6T = _n('view')
            _rz(z, o6T, 'class', 1, e, s, gg)
            var x7T = _n('view')
            _rz(z, x7T, 'class', 2, e, s, gg)
            _(o6T, x7T)
            var o8T = _n('view')
            _rz(z, o8T, 'class', 3, e, s, gg)
            _(o6T, o8T)
            var f9T = _n('view')
            _rz(z, f9T, 'class', 4, e, s, gg)
            _(o6T, f9T)
            var c0T = _n('view')
            _rz(z, c0T, 'class', 5, e, s, gg)
            _(o6T, c0T)
            var hAU = _n('view')
            _rz(z, hAU, 'class', 6, e, s, gg)
            _(o6T, hAU)
            var oBU = _n('view')
            _rz(z, oBU, 'class', 7, e, s, gg)
            var cCU = _oz(z, 8, e, s, gg)
            _(oBU, cCU)
            _(o6T, oBU)
            var oDU = _n('view')
            _rz(z, oDU, 'class', 9, e, s, gg)
            var lEU = _oz(z, 10, e, s, gg)
            _(oDU, lEU)
            _(o6T, oDU)
            _(e4T, o6T)
            var aFU = _n('view')
            _rz(z, aFU, 'class', 11, e, s, gg)
            var tGU = _n('view')
            _rz(z, tGU, 'class', 12, e, s, gg)
            var eHU = _n('view')
            _rz(z, eHU, 'class', 13, e, s, gg)
            var bIU = _n('view')
            _rz(z, bIU, 'class', 14, e, s, gg)
            _(eHU, bIU)
            var oJU = _n('text')
            _rz(z, oJU, 'class', 15, e, s, gg)
            var xKU = _oz(z, 16, e, s, gg)
            _(oJU, xKU)
            _(eHU, oJU)
            _(tGU, eHU)
            var oLU = _mz(z, 'switch', ['bindchange', 17, 'checked', 1, 'color', 2], [], e, s, gg)
            _(tGU, oLU)
            _(aFU, tGU)
            _(e4T, aFU)
            var b5T = _v()
            _(e4T, b5T)
            if (_oz(z, 20, e, s, gg)) {
                b5T.wxVkey = 1
                var fMU = _n('view')
                _rz(z, fMU, 'class', 21, e, s, gg)
                var cNU = _mz(z, 'picker', ['bindchange', 22, 'mode', 1, 'value', 2], [], e, s, gg)
                var hOU = _n('view')
                _rz(z, hOU, 'class', 25, e, s, gg)
                var oPU = _n('view')
                _rz(z, oPU, 'class', 26, e, s, gg)
                var cQU = _n('view')
                _rz(z, cQU, 'class', 27, e, s, gg)
                _(oPU, cQU)
                var oRU = _n('text')
                _rz(z, oRU, 'class', 28, e, s, gg)
                var lSU = _oz(z, 29, e, s, gg)
                _(oRU, lSU)
                _(oPU, oRU)
                _(hOU, oPU)
                var aTU = _n('view')
                _rz(z, aTU, 'class', 30, e, s, gg)
                var tUU = _n('text')
                _rz(z, tUU, 'class', 31, e, s, gg)
                var eVU = _oz(z, 32, e, s, gg)
                _(tUU, eVU)
                _(aTU, tUU)
                var bWU = _n('view')
                _rz(z, bWU, 'class', 33, e, s, gg)
                _(aTU, bWU)
                _(hOU, aTU)
                _(cNU, hOU)
                _(fMU, cNU)
                _(b5T, fMU)
                var oXU = _n('view')
                _rz(z, oXU, 'class', 34, e, s, gg)
                var xYU = _n('view')
                _rz(z, xYU, 'class', 35, e, s, gg)
                var f1U = _n('view')
                _rz(z, f1U, 'class', 36, e, s, gg)
                var c2U = _n('text')
                _rz(z, c2U, 'class', 37, e, s, gg)
                var h3U = _oz(z, 38, e, s, gg)
                _(c2U, h3U)
                _(f1U, c2U)
                var o4U = _n('text')
                _rz(z, o4U, 'class', 39, e, s, gg)
                var c5U = _oz(z, 40, e, s, gg)
                _(o4U, c5U)
                _(f1U, o4U)
                _(xYU, f1U)
                var oZU = _v()
                _(xYU, oZU)
                if (_oz(z, 41, e, s, gg)) {
                    oZU.wxVkey = 1
                    var o6U = _n('text')
                    _rz(z, o6U, 'class', 42, e, s, gg)
                    var l7U = _oz(z, 43, e, s, gg)
                    _(o6U, l7U)
                    _(oZU, o6U)
                } else {
                    oZU.wxVkey = 2
                    var a8U = _n('text')
                    _rz(z, a8U, 'class', 44, e, s, gg)
                    var t9U = _oz(z, 45, e, s, gg)
                    _(a8U, t9U)
                    _(oZU, a8U)
                }
                var e0U = _mz(z, 'view', ['bindtap', 46, 'class', 1], [], e, s, gg)
                var oBV = _n('text')
                _rz(z, oBV, 'class', 48, e, s, gg)
                var xCV = _oz(z, 49, e, s, gg)
                _(oBV, xCV)
                _(e0U, oBV)
                var bAV = _v()
                _(e0U, bAV)
                if (_oz(z, 50, e, s, gg)) {
                    bAV.wxVkey = 1
                    var oDV = _n('text')
                    _rz(z, oDV, 'class', 51, e, s, gg)
                    var fEV = _oz(z, 52, e, s, gg)
                    _(oDV, fEV)
                    _(bAV, oDV)
                }
                bAV.wxXCkey = 1
                _(xYU, e0U)
                oZU.wxXCkey = 1
                _(oXU, xYU)
                _(b5T, oXU)
            }
            var cFV = _n('view')
            _rz(z, cFV, 'class', 53, e, s, gg)
            var hGV = _n('text')
            _rz(z, hGV, 'class', 54, e, s, gg)
            var oHV = _oz(z, 55, e, s, gg)
            _(hGV, oHV)
            _(cFV, hGV)
            _(e4T, cFV)
            b5T.wxXCkey = 1
            _(r, e4T)
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
            outerGlobal.__wxml_comp_version__ = 0.02
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
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
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
else __wxAppCode__['pages/reminder/reminder.wxml'] = $gwx_XC_5('./pages/reminder/reminder.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/reminder/reminder.wxss'] = setCssToHead(["body{background:#f7f8fa}\n.", [1], "container{padding:0 0 ", [0, 60], "}\n.", [1], "hero{-webkit-align-items:center;align-items:center;background:linear-gradient(160deg,#fff5f5,#fff0e6);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;padding:", [0, 60], " ", [0, 40], " ", [0, 50], "}\n.", [1], "hero,.", [1], "moon{position:relative}\n.", [1], "moon{background:linear-gradient(135deg,#ffd54f,#ffab40);border-radius:50%;box-shadow:0 ", [0, 8], " ", [0, 24], " rgba(255,171,64,.35);height:", [0, 80], ";margin-bottom:", [0, 24], ";width:", [0, 80], "}\n.", [1], "moon::after{background:#ffe0b2;content:\x22\x22;height:", [0, 28], ";opacity:.5;right:", [0, 10], ";top:", [0, 10], ";width:", [0, 28], "}\n.", [1], "moon::after,.", [1], "star{border-radius:50%;position:absolute}\n.", [1], "star{background:#ffcc80}\n.", [1], "star.", [1], "s1{height:", [0, 10], ";left:", [0, 60], ";opacity:.8;top:", [0, 40], ";width:", [0, 10], "}\n.", [1], "star.", [1], "s2{height:", [0, 6], ";opacity:.6;right:", [0, 80], ";top:", [0, 70], ";width:", [0, 6], "}\n.", [1], "star.", [1], "s3{height:", [0, 8], ";left:", [0, 100], ";opacity:.5;top:", [0, 110], ";width:", [0, 8], "}\n.", [1], "star.", [1], "s4{height:", [0, 6], ";opacity:.7;right:", [0, 140], ";top:", [0, 50], ";width:", [0, 6], "}\n.", [1], "hero-title{color:#333;font-size:", [0, 36], ";font-weight:600;margin-bottom:", [0, 10], "}\n.", [1], "hero-sub{color:#999;font-size:", [0, 26], "}\n.", [1], "card{background:#fff;border-radius:", [0, 16], ";margin:", [0, 20], " ", [0, 24], " 0;overflow:hidden;padding:0 ", [0, 28], "}\n.", [1], "row{-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 32], " 0}\n.", [1], "row,.", [1], "row-left{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "row-left{gap:", [0, 16], "}\n.", [1], "dot{background:#ff6b6b;border-radius:50%;height:", [0, 10], ";width:", [0, 10], "}\n.", [1], "row-label{color:#333;font-size:", [0, 30], "}\n.", [1], "row-right{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;gap:", [0, 12], "}\n.", [1], "row-value{color:#ff6b6b;font-size:", [0, 30], ";font-weight:500}\n.", [1], "chevron{border-bottom:", [0, 3], " solid #ccc;border-right:", [0, 3], " solid #ccc;height:", [0, 14], ";-webkit-transform:rotate(-45deg);transform:rotate(-45deg);width:", [0, 14], "}\n.", [1], "tip-row{padding:", [0, 24], " ", [0, 40], " 0;text-align:center}\n.", [1], "tip-text{color:#ccc;font-size:", [0, 24], "}\n.", [1], "renew-wrap{margin:", [0, 24], " ", [0, 24], " 0}\n.", [1], "renew-card{background:#fff;border-radius:", [0, 20], ";-webkit-flex-direction:column;flex-direction:column;padding:", [0, 32], " ", [0, 28], "}\n.", [1], "renew-card,.", [1], "renew-header{display:-webkit-flex;display:flex}\n.", [1], "renew-header{-webkit-align-items:center;align-items:center;gap:", [0, 10], ";margin-bottom:", [0, 12], "}\n.", [1], "renew-icon{font-size:", [0, 34], "}\n.", [1], "renew-title{color:#333;-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 30], ";font-weight:500}\n.", [1], "count-badge{background:linear-gradient(135deg,#ff6b6b,#ff8e53);border-radius:", [0, 24], ";color:#fff;font-size:", [0, 26], ";font-weight:600;margin-left:auto;padding:", [0, 6], " ", [0, 22], "}\n.", [1], "count-status{color:#999;font-size:", [0, 25], ";margin-bottom:", [0, 24], ";padding-left:", [0, 4], "}\n.", [1], "count-empty{color:#ccc}\n.", [1], "claim-btn{-webkit-align-items:center;align-items:center;background:linear-gradient(135deg,#ff6b6b,#ff8e53);border-radius:", [0, 16], ";box-shadow:0 ", [0, 6], " ", [0, 20], " hsla(0,100%,71%,.3);display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 22], " ", [0, 28], "}\n.", [1], "claim-btn.", [1], "disabled{box-shadow:none;-webkit-justify-content:center;justify-content:center;opacity:.55}\n.", [1], "claim-text{color:#fff;font-size:", [0, 30], ";font-weight:600;letter-spacing:", [0, 2], "}\n.", [1], "claim-hint{color:hsla(0,0%,100%,.75);font-size:", [0, 22], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/reminder/reminder.wxss:1:1)", {
        path: "./pages/reminder/reminder.wxss"
    });
}