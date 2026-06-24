$gwx_XC_6 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];

        function gz$gwx_XC_6_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'search-page'])
                Z([3, 'search-header'])
                Z([3, 'goBack'])
                Z([3, 'back-btn'])
                Z([3, '←'])
                Z([3, 'search-title'])
                Z([3, '搜索日记'])
                Z([3, 'search-box'])
                Z([3, 'search-icon-view'])
                Z([3, 'mini-search-circle'])
                Z([3, 'mini-search-handle'])
                Z([3, 'onSearch'])
                Z([3, 'search-input'])
                Z([3, '搜索日记内容...'])
                Z([3, 'placeholder'])
                Z([
                    [7],
                    [3, 'keyword']
                ])
                Z(z[15])
                Z([3, 'clearSearch'])
                Z([3, 'clear-btn'])
                Z([3, '×'])
                Z([3, 'search-results'])
                Z([
                    [7],
                    [3, 'searchResults']
                ])
                Z([3, 'date'])
                Z([3, 'goToEdit'])
                Z([3, 'result-item'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'date']
                ])
                Z([3, 'result-date'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'date']
                ]])
                Z([3, 'result-content'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'content']
                ]])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'keyword']
                    ],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [7],
                                [3, 'searchResults']
                            ],
                            [3, 'length']
                        ],
                        [1, 0]
                    ]
                ])
                Z([3, 'no-result'])
                Z([3, '没有找到相关日记'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'keyword']
                    ]
                ])
                Z([3, 'search-tip'])
                Z([3, '输入关键词搜索日记'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_6 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_6 = true;
        var x = ['./pages/search/search.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_6_1()
            var oJV = _n('view')
            _rz(z, oJV, 'class', 0, e, s, gg)
            var lKV = _n('view')
            _rz(z, lKV, 'class', 1, e, s, gg)
            var aLV = _mz(z, 'view', ['bindtap', 2, 'class', 1], [], e, s, gg)
            var tMV = _n('text')
            var eNV = _oz(z, 4, e, s, gg)
            _(tMV, eNV)
            _(aLV, tMV)
            _(lKV, aLV)
            var bOV = _n('view')
            _rz(z, bOV, 'class', 5, e, s, gg)
            var oPV = _oz(z, 6, e, s, gg)
            _(bOV, oPV)
            _(lKV, bOV)
            _(oJV, lKV)
            var xQV = _n('view')
            _rz(z, xQV, 'class', 7, e, s, gg)
            var fSV = _n('view')
            _rz(z, fSV, 'class', 8, e, s, gg)
            var cTV = _n('view')
            _rz(z, cTV, 'class', 9, e, s, gg)
            _(fSV, cTV)
            var hUV = _n('view')
            _rz(z, hUV, 'class', 10, e, s, gg)
            _(fSV, hUV)
            _(xQV, fSV)
            var oVV = _mz(z, 'input', ['bindinput', 11, 'class', 1, 'placeholder', 2, 'placeholderClass', 3, 'value', 4], [], e, s, gg)
            _(xQV, oVV)
            var oRV = _v()
            _(xQV, oRV)
            if (_oz(z, 16, e, s, gg)) {
                oRV.wxVkey = 1
                var cWV = _mz(z, 'view', ['bindtap', 17, 'class', 1], [], e, s, gg)
                var oXV = _n('text')
                var lYV = _oz(z, 19, e, s, gg)
                _(oXV, lYV)
                _(cWV, oXV)
                _(oRV, cWV)
            }
            oRV.wxXCkey = 1
            _(oJV, xQV)
            var aZV = _n('view')
            _rz(z, aZV, 'class', 20, e, s, gg)
            var b3V = _v()
            _(aZV, b3V)
            var o4V = function(o6V, x5V, f7V, gg) {
                var h9V = _mz(z, 'view', ['bindtap', 23, 'class', 1, 'data-date', 2], [], o6V, x5V, gg)
                var o0V = _n('view')
                _rz(z, o0V, 'class', 26, o6V, x5V, gg)
                var cAW = _oz(z, 27, o6V, x5V, gg)
                _(o0V, cAW)
                _(h9V, o0V)
                var oBW = _n('view')
                _rz(z, oBW, 'class', 28, o6V, x5V, gg)
                var lCW = _oz(z, 29, o6V, x5V, gg)
                _(oBW, lCW)
                _(h9V, oBW)
                _(f7V, h9V)
                return f7V
            }
            b3V.wxXCkey = 2
            _2z(z, 21, o4V, e, s, gg, b3V, 'item', 'index', 'date')
            var t1V = _v()
            _(aZV, t1V)
            if (_oz(z, 30, e, s, gg)) {
                t1V.wxVkey = 1
                var aDW = _n('view')
                _rz(z, aDW, 'class', 31, e, s, gg)
                var tEW = _n('text')
                var eFW = _oz(z, 32, e, s, gg)
                _(tEW, eFW)
                _(aDW, tEW)
                _(t1V, aDW)
            }
            var e2V = _v()
            _(aZV, e2V)
            if (_oz(z, 33, e, s, gg)) {
                e2V.wxVkey = 1
                var bGW = _n('view')
                _rz(z, bGW, 'class', 34, e, s, gg)
                var oHW = _n('text')
                var xIW = _oz(z, 35, e, s, gg)
                _(oHW, xIW)
                _(bGW, oHW)
                _(e2V, bGW)
            }
            t1V.wxXCkey = 1
            e2V.wxXCkey = 1
            _(oJV, aZV)
            _(r, oJV)
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
                g = "$gwx_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/search.wxml'] = [$gwx_XC_6, './pages/search/search.wxml'];
else __wxAppCode__['pages/search/search.wxml'] = $gwx_XC_6('./pages/search/search.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/search/search.wxss'] = setCssToHead(["body{background:#f7f8fa;min-height:100vh}\n.", [1], "search-page{min-height:100vh;padding-bottom:", [0, 40], "}\n.", [1], "search-header{background:linear-gradient(180deg,#f8fafc,#f7f8fa);padding:", [0, 120], " ", [0, 30], " ", [0, 30], "}\n.", [1], "back-btn,.", [1], "search-header{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "back-btn{background:hsla(0,0%,100%,.9);border-radius:50%;box-shadow:0 ", [0, 4], " ", [0, 16], " rgba(0,0,0,.06);height:", [0, 72], ";-webkit-justify-content:center;justify-content:center;margin-right:", [0, 24], ";width:", [0, 72], "}\n.", [1], "back-btn wx-text{color:#a8c0d6;font-size:", [0, 36], "}\n.", [1], "search-title{color:#5a6c7d;font-size:", [0, 34], ";font-weight:500}\n.", [1], "search-box{-webkit-align-items:center;align-items:center;background:hsla(0,0%,100%,.95);border-radius:", [0, 32], ";box-shadow:0 ", [0, 8], " ", [0, 32], " rgba(168,192,214,.15);display:-webkit-flex;display:flex;margin:", [0, 40], " ", [0, 30], ";padding:", [0, 28], " ", [0, 32], "}\n.", [1], "search-icon-view{height:", [0, 32], ";margin-right:", [0, 20], ";opacity:.6;position:relative;width:", [0, 32], "}\n.", [1], "mini-search-circle{border:", [0, 3], " solid #a8c0d6;border-radius:50%;height:", [0, 22], ";left:0;position:absolute;top:0;width:", [0, 22], "}\n.", [1], "mini-search-handle{background:#a8c0d6;border-radius:", [0, 2], ";bottom:0;height:", [0, 10], ";position:absolute;right:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:bottom left;transform-origin:bottom left;width:", [0, 3], "}\n.", [1], "search-input{color:#5a6c7d;-webkit-flex:1;flex:1;font-size:", [0, 30], "}\n.", [1], "placeholder{color:#a0b4c8}\n.", [1], "clear-btn{-webkit-align-items:center;align-items:center;background:#f0f5f8;border-radius:50%;display:-webkit-flex;display:flex;height:", [0, 44], ";-webkit-justify-content:center;justify-content:center;margin-left:", [0, 20], ";width:", [0, 44], "}\n.", [1], "clear-btn wx-text{color:#a0b4c8;font-size:", [0, 36], ";line-height:1}\n.", [1], "search-results{padding:0 ", [0, 30], "}\n.", [1], "result-item{background:hsla(0,0%,100%,.95);border-radius:", [0, 28], ";box-shadow:0 ", [0, 8], " ", [0, 32], " rgba(168,192,214,.12);margin-bottom:", [0, 24], ";padding:", [0, 36], ";position:relative}\n.", [1], "result-item::after{color:#c0d0e0;content:\x22›\x22;font-size:", [0, 40], ";position:absolute;right:", [0, 30], ";top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}\n.", [1], "result-date{color:#a0b4c8;font-size:", [0, 24], ";font-weight:500;margin-bottom:", [0, 16], "}\n.", [1], "result-content{-webkit-line-clamp:3;-webkit-box-orient:vertical;color:#5a6c7d;display:-webkit-box;font-size:", [0, 28], ";line-height:1.8;overflow:hidden}\n.", [1], "no-result{padding:", [0, 120], " 0;text-align:center}\n.", [1], "no-result wx-text{color:#a0b4c8;font-size:", [0, 28], "}\n.", [1], "search-tip{padding:", [0, 120], " 0;text-align:center}\n.", [1], "search-tip wx-text{color:#a0b4c8;font-size:", [0, 28], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/search/search.wxss:1:2383)", {
        path: "./pages/search/search.wxss"
    });
}