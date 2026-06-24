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
                Z([3, 'timeline'])
                Z([3, 'timeline-line'])
                Z([
                    [7],
                    [3, 'notices']
                ])
                Z([3, 'id'])
                Z([3, 'timeline-item'])
                Z([3, 'timeline-dot'])
                Z([3, 'timeline-card'])
                Z([3, 'card-date'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'date']
                ]])
                Z([3, 'card-title'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'title']
                ]])
                Z([3, 'card-content'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'content']
                ]])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'index']
                    ],
                    [1, 0]
                ])
                Z([3, 'onWatchAd'])
                Z([3, 'ad-float-btn'])
                Z([3, 'ad-btn-icon'])
                Z([3, 'aspectFit'])
                Z([3, '/images/write-toolbar/我获得积分奖励.png'])
                Z([3, 'ad-btn-text'])
                Z([3, '看广告支持我们'])
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
                Z([3, 'empty-state'])
                Z([3, 'empty-emoji'])
                Z([3, '📢'])
                Z([3, 'empty-text'])
                Z([3, '暂无公告'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_3 = true;
        var x = ['./pages/notice/notice.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_3_1()
            var oLN = _n('view')
            _rz(z, oLN, 'class', 0, e, s, gg)
            var cNN = _n('view')
            _rz(z, cNN, 'class', 1, e, s, gg)
            var hON = _n('view')
            _rz(z, hON, 'class', 2, e, s, gg)
            _(cNN, hON)
            var oPN = _v()
            _(cNN, oPN)
            var cQN = function(lSN, oRN, aTN, gg) {
                var eVN = _n('view')
                _rz(z, eVN, 'class', 5, lSN, oRN, gg)
                var bWN = _n('view')
                _rz(z, bWN, 'class', 6, lSN, oRN, gg)
                _(eVN, bWN)
                var oXN = _n('view')
                _rz(z, oXN, 'class', 7, lSN, oRN, gg)
                var oZN = _n('text')
                _rz(z, oZN, 'class', 8, lSN, oRN, gg)
                var f1N = _oz(z, 9, lSN, oRN, gg)
                _(oZN, f1N)
                _(oXN, oZN)
                var c2N = _n('text')
                _rz(z, c2N, 'class', 10, lSN, oRN, gg)
                var h3N = _oz(z, 11, lSN, oRN, gg)
                _(c2N, h3N)
                _(oXN, c2N)
                var o4N = _n('text')
                _rz(z, o4N, 'class', 12, lSN, oRN, gg)
                var c5N = _oz(z, 13, lSN, oRN, gg)
                _(o4N, c5N)
                _(oXN, o4N)
                var xYN = _v()
                _(oXN, xYN)
                if (_oz(z, 14, lSN, oRN, gg)) {
                    xYN.wxVkey = 1
                    var o6N = _mz(z, 'view', ['bindtap', 15, 'class', 1], [], lSN, oRN, gg)
                    var l7N = _mz(z, 'image', ['class', 17, 'mode', 1, 'src', 2], [], lSN, oRN, gg)
                    _(o6N, l7N)
                    var a8N = _n('text')
                    _rz(z, a8N, 'class', 20, lSN, oRN, gg)
                    var t9N = _oz(z, 21, lSN, oRN, gg)
                    _(a8N, t9N)
                    _(o6N, a8N)
                    _(xYN, o6N)
                }
                xYN.wxXCkey = 1
                _(eVN, oXN)
                _(aTN, eVN)
                return aTN
            }
            oPN.wxXCkey = 2
            _2z(z, 3, cQN, e, s, gg, oPN, 'item', 'index', 'id')
            _(oLN, cNN)
            var fMN = _v()
            _(oLN, fMN)
            if (_oz(z, 22, e, s, gg)) {
                fMN.wxVkey = 1
                var e0N = _n('view')
                _rz(z, e0N, 'class', 23, e, s, gg)
                var bAO = _n('text')
                _rz(z, bAO, 'class', 24, e, s, gg)
                var oBO = _oz(z, 25, e, s, gg)
                _(bAO, oBO)
                _(e0N, bAO)
                var xCO = _n('text')
                _rz(z, xCO, 'class', 26, e, s, gg)
                var oDO = _oz(z, 27, e, s, gg)
                _(xCO, oDO)
                _(e0N, xCO)
                _(fMN, e0N)
            }
            fMN.wxXCkey = 1
            _(r, oLN)
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
                g = "$gwx_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/notice/notice.wxml'] = [$gwx_XC_3, './pages/notice/notice.wxml'];
else __wxAppCode__['pages/notice/notice.wxml'] = $gwx_XC_3('./pages/notice/notice.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/notice/notice.wxss'] = setCssToHead(["body{background:#f7f8fa}\n.", [1], "page{min-height:100vh;padding:", [0, 30], " ", [0, 24], "}\n.", [1], "timeline{padding-left:", [0, 36], ";position:relative}\n.", [1], "timeline-line{background:linear-gradient(180deg,#ffb84d,#ff9500,#e08600);border-radius:", [0, 2], ";bottom:0;left:", [0, 14], ";position:absolute;top:0;width:", [0, 4], "}\n.", [1], "timeline-item{margin-bottom:", [0, 32], ";position:relative}\n.", [1], "timeline-item:last-child{margin-bottom:0}\n.", [1], "timeline-dot{background:#fff;border:", [0, 5], " solid #ff9500;border-radius:50%;box-shadow:0 ", [0, 2], " ", [0, 8], " rgba(255,149,0,.3);height:", [0, 20], ";left:", [0, -30], ";position:absolute;top:", [0, 28], ";width:", [0, 20], ";z-index:1}\n.", [1], "timeline-card{background:#fff;border:", [0, 1], " solid rgba(255,149,0,.06);border-radius:", [0, 18], ";box-shadow:0 ", [0, 4], " ", [0, 16], " rgba(255,149,0,.08);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 14], ";padding:", [0, 26], " ", [0, 28], ";position:relative}\n.", [1], "card-date{color:#ff9500;font-size:", [0, 22], ";font-weight:500;letter-spacing:", [0, 1], "}\n.", [1], "card-title{color:#1a1a1a;font-size:", [0, 30], ";font-weight:600;line-height:1.5}\n.", [1], "card-content{color:#5a5f6c;font-size:", [0, 26], ";line-height:1.85;white-space:pre-wrap;word-break:break-all}\n.", [1], "empty-state{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding-top:", [0, 200], "}\n.", [1], "empty-emoji{font-size:", [0, 80], ";margin-bottom:", [0, 20], "}\n.", [1], "empty-text{color:#a0a0a5;font-size:", [0, 26], "}\n.", [1], "ad-float-btn{-webkit-align-items:center;align-items:center;background:linear-gradient(135deg,#fff5eb,#ffe8d6);border:", [0, 1.5], " solid rgba(255,149,0,.2);border-radius:", [0, 24], ";bottom:", [0, 16], ";box-shadow:0 ", [0, 2], " ", [0, 10], " rgba(255,149,0,.12);display:-webkit-flex;display:flex;gap:", [0, 8], ";padding:", [0, 12], " ", [0, 22], ";position:absolute;right:", [0, 16], "}\n.", [1], "ad-float-btn:active{-webkit-transform:scale(.94);transform:scale(.94);transition:-webkit-transform .15s ease;transition:transform .15s ease;transition:transform .15s ease,-webkit-transform .15s ease}\n.", [1], "ad-btn-icon{height:", [0, 32], ";width:", [0, 32], "}\n.", [1], "ad-btn-text{color:#e08600;font-size:", [0, 22], ";font-weight:600;letter-spacing:", [0, 1], "}\n.", [1], "points-section{-webkit-flex-direction:column;flex-direction:column;gap:", [0, 28], ";margin-top:", [0, 48], "}\n.", [1], "points-header,.", [1], "points-section{display:-webkit-flex;display:flex}\n.", [1], "points-header{-webkit-align-items:center;align-items:center;gap:", [0, 14], "}\n.", [1], "points-icon{height:", [0, 40], ";width:", [0, 40], "}\n.", [1], "points-emoji{font-size:", [0, 38], "}\n.", [1], "points-title{color:#1a1a1a;font-size:", [0, 32], ";font-weight:700;letter-spacing:", [0, 2], "}\n.", [1], "points-table-wrap{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 12], "}\n.", [1], "table-label{font-size:", [0, 26], ";font-weight:600;padding-left:", [0, 8], "}\n.", [1], "label-earn{color:#07c160}\n.", [1], "label-cost{color:#fa5151}\n.", [1], "points-table{background:#fff;border:", [0, 1], " solid rgba(0,0,0,.04);border-radius:", [0, 16], ";box-shadow:0 ", [0, 4], " ", [0, 16], " rgba(0,0,0,.05);overflow:hidden}\n.", [1], "table-row{-webkit-align-items:center;align-items:center;border-bottom:", [0, 1], " solid #f3f4f6;display:-webkit-flex;display:flex;padding:", [0, 22], " ", [0, 20], "}\n.", [1], "table-row:last-child{border-bottom:none}\n.", [1], "table-head{background:#f7f8fa}\n.", [1], "table-head wx-text{color:#888!important;font-size:", [0, 24], "!important;font-weight:600!important}\n.", [1], "col-op{color:#333;font-weight:500;width:30%}\n.", [1], "col-op,.", [1], "col-pts{-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 26], "}\n.", [1], "col-pts{font-weight:700;text-align:center;width:24%}\n.", [1], "col-desc{color:#888;font-size:", [0, 23], ";line-height:1.5;width:46%}\n.", [1], "pts-add{color:#07c160}\n.", [1], "pts-deduct{color:#fa5151}\n.", [1], "points-tip{color:#aaa;display:block;font-size:", [0, 24], ";padding:", [0, 8], " 0 ", [0, 16], ";text-align:center}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/notice/notice.wxss:1:2939)", {
        path: "./pages/notice/notice.wxss"
    });
}