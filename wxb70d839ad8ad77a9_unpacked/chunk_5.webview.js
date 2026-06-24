$gwx_XC_14 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_14 || [];

        function gz$gwx_XC_14_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([a, [3, 'padding-top:'],
                    [
                        [7],
                        [3, 'navTop']
                    ],
                    [3, 'px;']
                ])
                Z([3, 'nav-area'])
                Z([a, [3, 'height:'],
                    [
                        [7],
                        [3, 'navHeight']
                    ],
                    [3, 'px;display:flex;align-items:center;']
                ])
                Z([3, 'onBack'])
                Z([3, 'nav-back'])
                Z([3, 'back-arrow'])
                Z([3, 'back-text'])
                Z([3, '返回'])
                Z([3, 'container'])
                Z([3, 'faq-list'])
                Z([
                    [7],
                    [3, 'faqs']
                ])
                Z([3, 'index'])
                Z([3, 'onToggle'])
                Z([3, 'faq-item'])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([3, 'faq-question'])
                Z([3, 'q-text'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'q']
                ]])
                Z([a, [3, 'arrow '],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'open']
                        ],
                        [1, 'open'],
                        [1, '']
                    ]
                ])
                Z([a, [3, 'faq-answer '],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'open']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, 'a-text'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'a']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_14 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_14 = true;
        var x = ['./pages/faq/faq.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_14_1()
            var cCFB = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var oDFB = _mz(z, 'view', ['class', 2, 'style', 1], [], e, s, gg)
            var lEFB = _mz(z, 'view', ['bindtap', 4, 'class', 1], [], e, s, gg)
            var aFFB = _n('view')
            _rz(z, aFFB, 'class', 6, e, s, gg)
            _(lEFB, aFFB)
            var tGFB = _n('text')
            _rz(z, tGFB, 'class', 7, e, s, gg)
            var eHFB = _oz(z, 8, e, s, gg)
            _(tGFB, eHFB)
            _(lEFB, tGFB)
            _(oDFB, lEFB)
            _(cCFB, oDFB)
            var bIFB = _n('view')
            _rz(z, bIFB, 'class', 9, e, s, gg)
            var oJFB = _n('view')
            _rz(z, oJFB, 'class', 10, e, s, gg)
            var xKFB = _v()
            _(oJFB, xKFB)
            var oLFB = function(cNFB, fMFB, hOFB, gg) {
                var cQFB = _mz(z, 'view', ['bindtap', 13, 'class', 1, 'data-index', 2], [], cNFB, fMFB, gg)
                var oRFB = _n('view')
                _rz(z, oRFB, 'class', 16, cNFB, fMFB, gg)
                var lSFB = _n('text')
                _rz(z, lSFB, 'class', 17, cNFB, fMFB, gg)
                var aTFB = _oz(z, 18, cNFB, fMFB, gg)
                _(lSFB, aTFB)
                _(oRFB, lSFB)
                var tUFB = _n('view')
                _rz(z, tUFB, 'class', 19, cNFB, fMFB, gg)
                _(oRFB, tUFB)
                _(cQFB, oRFB)
                var eVFB = _n('view')
                _rz(z, eVFB, 'class', 20, cNFB, fMFB, gg)
                var bWFB = _n('text')
                _rz(z, bWFB, 'class', 21, cNFB, fMFB, gg)
                var oXFB = _oz(z, 22, cNFB, fMFB, gg)
                _(bWFB, oXFB)
                _(eVFB, bWFB)
                _(cQFB, eVFB)
                _(hOFB, cQFB)
                return hOFB
            }
            xKFB.wxXCkey = 2
            _2z(z, 11, oLFB, e, s, gg, xKFB, 'item', 'index', 'index')
            _(bIFB, oJFB)
            _(cCFB, bIFB)
            _(r, cCFB)
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
                g = "$gwx_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_14();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/faq/faq.wxml'] = [$gwx_XC_14, './pages/faq/faq.wxml'];
else __wxAppCode__['pages/faq/faq.wxml'] = $gwx_XC_14('./pages/faq/faq.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/faq/faq.wxss'] = setCssToHead(["body{background:#f5f5f5}\n.", [1], "page{min-height:100vh;padding:", [0, 24], " ", [0, 20], "}\n.", [1], "nav-back{-webkit-align-items:center;align-items:center;background:#fff;border:", [0, 1], " solid rgba(255,149,0,.08);border-radius:", [0, 32], ";box-shadow:0 ", [0, 3], " ", [0, 12], " hsla(30,48%,59%,.15);display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;height:-webkit-fit-content;height:fit-content;-webkit-justify-content:center;justify-content:center;padding:", [0, 14], " ", [0, 28], ";width:-webkit-fit-content;width:fit-content}\n.", [1], "back-arrow{border-bottom:", [0, 3.5], " solid #ff9500;border-left:", [0, 3.5], " solid #ff9500;height:", [0, 18], ";margin-right:", [0, 10], ";-webkit-transform:rotate(45deg);transform:rotate(45deg);width:", [0, 18], "}\n.", [1], "back-text{color:#ff9500;font-size:", [0, 28], ";font-weight:500}\n.", [1], "faq-list{background:#fff;border-radius:", [0, 16], ";overflow:hidden}\n.", [1], "faq-item{border-bottom:", [0, 1], " solid #eee}\n.", [1], "faq-item:last-child{border-bottom:none}\n.", [1], "faq-question{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 32], " ", [0, 28], "}\n.", [1], "q-text{color:#333;-webkit-flex:1;flex:1;font-size:", [0, 28], ";font-weight:500;line-height:1.5}\n.", [1], "arrow{border-bottom:", [0, 3], " solid #999;border-right:", [0, 3], " solid #999;-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 16], ";margin-left:", [0, 16], ";-webkit-transform:rotate(-45deg);transform:rotate(-45deg);transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease;width:", [0, 16], "}\n.", [1], "arrow.", [1], "open{-webkit-transform:rotate(45deg);transform:rotate(45deg)}\n.", [1], "faq-answer{max-height:0;overflow:hidden;transition:max-height .3s ease}\n.", [1], "faq-answer.", [1], "show{max-height:", [0, 400], "}\n.", [1], "a-text{color:#666;display:block;font-size:", [0, 26], ";line-height:1.7;padding:0 ", [0, 28], " ", [0, 28], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/faq/faq.wxss:1:1)", {
        path: "./pages/faq/faq.wxss"
    });
}