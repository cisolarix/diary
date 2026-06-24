var __globalThis = (typeof __vd_version_info__ !== 'undefined' && typeof __vd_version_info__.globalThis !== 'undefined') ? __vd_version_info__.globalThis : window;
var __mainPageFrameReady__ = __globalThis.__mainPageFrameReady__ || function() {};
var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = __wxAppCode__ || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};
var __GWX_GLOBAL__ = __GWX_GLOBAL__ || {};; /*v0.5vv_20211229_syb_scopedata*/
__globalThis.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
__globalThis.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
var outerGlobal = typeof __globalThis === 'undefined' ? window : __globalThis;
$gwx = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx || [];

        function gz$gwx_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_1) return __WXML_GLOBAL__.ops_cached.$gwx_1
            __WXML_GLOBAL__.ops_cached.$gwx_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'tab-bar'])
                Z([3, 'tab-bar-bg'])
                Z([3, 'tab-bar-content'])
                Z([3, 'switchTab'])
                Z([a, [3, 'tab-item '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'selected']
                            ],
                            [1, 0]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([3, '0'])
                Z([3, '/pages/index/index'])
                Z([3, 'icon-wrap'])
                Z([3, 'cloud-icon'])
                Z([3, 'cloud-sun'])
                Z([3, 'cloud-body'])
                Z([3, 'cloud-bump b1'])
                Z([3, 'cloud-bump b2'])
                Z([3, 'cloud-bump b3'])
                Z([3, 'tab-text'])
                Z([3, '写日记'])
                Z(z[3])
                Z([a, z[4][1],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'selected']
                            ],
                            [1, 1]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([3, '1'])
                Z([3, '/pages/calendar/calendar'])
                Z(z[7])
                Z([3, 'kite-icon'])
                Z([3, 'kite-body'])
                Z([3, 'kite-tl'])
                Z([3, 'kite-tr'])
                Z([3, 'kite-bl'])
                Z([3, 'kite-br'])
                Z([3, 'kite-spine'])
                Z([3, 'kite-spar'])
                Z([3, 'kite-string'])
                Z(z[14])
                Z([3, '时光线'])
                Z(z[3])
                Z([a, z[4][1],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'selected']
                            ],
                            [1, 2]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([3, '2'])
                Z([3, '/pages/holiday/holiday'])
                Z(z[7])
                Z([3, 'grid-icon'])
                Z([3, 'grid-cell g1'])
                Z([3, 'grid-cell g2'])
                Z([3, 'grid-cell g3'])
                Z([3, 'grid-cell g4'])
                Z(z[14])
                Z([3, '热力图'])
                Z([3, 'tab-divider'])
                Z(z[3])
                Z([a, z[4][1],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'selected']
                            ],
                            [1, 3]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([3, '3'])
                Z([3, '/pages/profile/profile'])
                Z(z[7])
                Z([3, 'doll-icon'])
                Z([3, 'doll-head'])
                Z([3, 'doll-eye le'])
                Z([3, 'doll-eye re'])
                Z([3, 'doll-smile'])
                Z(z[14])
                Z([3, '我的'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_1
        }
        __WXML_GLOBAL__.ops_set.$gwx = z;
        __WXML_GLOBAL__.ops_init.$gwx = true;
        var nv_require = function() {
            var nnm = {
                "m_./pages/write/write.wxml:tpl": np_0,
            };
            var nom = {};
            return function(n) {
                if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
                return function() {
                    if (!nnm[n]) return undefined;
                    try {
                        if (!nom[n]) nom[n] = nnm[n]();
                        return nom[n];
                    } catch (e) {
                        e.message = e.message.replace(/nv_/g, '');
                        var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                        e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                        e.stack = e.stack.replace(/\snv_/g, ' ');
                        e.stack = $gstack(e.stack);
                        e.stack += '\n    at ' + n.substring(2);
                        console.error(e);
                    }
                }
            }
        }()
        f_['./pages/write/write.wxml'] = {};
        f_['./pages/write/write.wxml']['tpl'] = nv_require("m_./pages/write/write.wxml:tpl");

        function np_0() {
            var nv_module = {
                nv_exports: {}
            };
            nv_module.nv_exports = ({
                nv_short: (function(nv_title) {
                    return (nv_title ? nv_title.nv_slice(0, 2) : '模板')
                }),
            });
            return nv_module.nv_exports;
        }

        var x = ['./custom-tab-bar/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_1()
            var oB = _n('view')
            _rz(z, oB, 'class', 0, e, s, gg)
            var xC = _n('view')
            _rz(z, xC, 'class', 1, e, s, gg)
            _(oB, xC)
            var oD = _n('view')
            _rz(z, oD, 'class', 2, e, s, gg)
            var fE = _mz(z, 'view', ['bindtap', 3, 'class', 1, 'data-index', 2, 'data-path', 3], [], e, s, gg)
            var cF = _n('view')
            _rz(z, cF, 'class', 7, e, s, gg)
            var hG = _n('view')
            _rz(z, hG, 'class', 8, e, s, gg)
            var oH = _n('view')
            _rz(z, oH, 'class', 9, e, s, gg)
            _(hG, oH)
            var cI = _n('view')
            _rz(z, cI, 'class', 10, e, s, gg)
            _(hG, cI)
            var oJ = _n('view')
            _rz(z, oJ, 'class', 11, e, s, gg)
            _(hG, oJ)
            var lK = _n('view')
            _rz(z, lK, 'class', 12, e, s, gg)
            _(hG, lK)
            var aL = _n('view')
            _rz(z, aL, 'class', 13, e, s, gg)
            _(hG, aL)
            _(cF, hG)
            _(fE, cF)
            var tM = _n('text')
            _rz(z, tM, 'class', 14, e, s, gg)
            var eN = _oz(z, 15, e, s, gg)
            _(tM, eN)
            _(fE, tM)
            _(oD, fE)
            var bO = _mz(z, 'view', ['bindtap', 16, 'class', 1, 'data-index', 2, 'data-path', 3], [], e, s, gg)
            var oP = _n('view')
            _rz(z, oP, 'class', 20, e, s, gg)
            var xQ = _n('view')
            _rz(z, xQ, 'class', 21, e, s, gg)
            var oR = _n('view')
            _rz(z, oR, 'class', 22, e, s, gg)
            var fS = _n('view')
            _rz(z, fS, 'class', 23, e, s, gg)
            _(oR, fS)
            var cT = _n('view')
            _rz(z, cT, 'class', 24, e, s, gg)
            _(oR, cT)
            var hU = _n('view')
            _rz(z, hU, 'class', 25, e, s, gg)
            _(oR, hU)
            var oV = _n('view')
            _rz(z, oV, 'class', 26, e, s, gg)
            _(oR, oV)
            _(xQ, oR)
            var cW = _n('view')
            _rz(z, cW, 'class', 27, e, s, gg)
            _(xQ, cW)
            var oX = _n('view')
            _rz(z, oX, 'class', 28, e, s, gg)
            _(xQ, oX)
            var lY = _n('view')
            _rz(z, lY, 'class', 29, e, s, gg)
            _(xQ, lY)
            _(oP, xQ)
            _(bO, oP)
            var aZ = _n('text')
            _rz(z, aZ, 'class', 30, e, s, gg)
            var t1 = _oz(z, 31, e, s, gg)
            _(aZ, t1)
            _(bO, aZ)
            _(oD, bO)
            var e2 = _mz(z, 'view', ['bindtap', 32, 'class', 1, 'data-index', 2, 'data-path', 3], [], e, s, gg)
            var b3 = _n('view')
            _rz(z, b3, 'class', 36, e, s, gg)
            var o4 = _n('view')
            _rz(z, o4, 'class', 37, e, s, gg)
            var x5 = _n('view')
            _rz(z, x5, 'class', 38, e, s, gg)
            _(o4, x5)
            var o6 = _n('view')
            _rz(z, o6, 'class', 39, e, s, gg)
            _(o4, o6)
            var f7 = _n('view')
            _rz(z, f7, 'class', 40, e, s, gg)
            _(o4, f7)
            var c8 = _n('view')
            _rz(z, c8, 'class', 41, e, s, gg)
            _(o4, c8)
            _(b3, o4)
            _(e2, b3)
            var h9 = _n('text')
            _rz(z, h9, 'class', 42, e, s, gg)
            var o0 = _oz(z, 43, e, s, gg)
            _(h9, o0)
            _(e2, h9)
            _(oD, e2)
            var cAB = _n('view')
            _rz(z, cAB, 'class', 44, e, s, gg)
            _(oD, cAB)
            var oBB = _mz(z, 'view', ['bindtap', 45, 'class', 1, 'data-index', 2, 'data-path', 3], [], e, s, gg)
            var lCB = _n('view')
            _rz(z, lCB, 'class', 49, e, s, gg)
            var aDB = _n('view')
            _rz(z, aDB, 'class', 50, e, s, gg)
            var tEB = _n('view')
            _rz(z, tEB, 'class', 51, e, s, gg)
            _(aDB, tEB)
            var eFB = _n('view')
            _rz(z, eFB, 'class', 52, e, s, gg)
            _(aDB, eFB)
            var bGB = _n('view')
            _rz(z, bGB, 'class', 53, e, s, gg)
            _(aDB, bGB)
            var oHB = _n('view')
            _rz(z, oHB, 'class', 54, e, s, gg)
            _(aDB, oHB)
            _(lCB, aDB)
            _(oBB, lCB)
            var xIB = _n('text')
            _rz(z, xIB, 'class', 55, e, s, gg)
            var oJB = _oz(z, 56, e, s, gg)
            _(xIB, oJB)
            _(oBB, xIB)
            _(oD, oBB)
            _(oB, oD)
            _(r, oB)
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
                g = "$gwx";
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
if (__vd_version_info__.delayedGwx || true) $gwx();
if (__vd_version_info__.delayedGwx) __wxAppCode__['custom-tab-bar/index.wxml'] = [$gwx, './custom-tab-bar/index.wxml'];
else __wxAppCode__['custom-tab-bar/index.wxml'] = $gwx('./custom-tab-bar/index.wxml');;
var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    var BASE_DEVICE_WIDTH = 750;
    var isIOS = navigator.userAgent.match("iPhone");
    var deviceWidth = window.screen.width || 375;
    var deviceDPR = window.devicePixelRatio || 2;
    var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
        var newDeviceWidth = window.screen.width || 375
        var newDeviceDPR = window.devicePixelRatio || 2
        var newDeviceHeight = window.screen.height || 375
        if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
        if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
            deviceWidth = newDeviceWidth
            deviceDPR = newDeviceDPR
        }
    }
    checkDeviceWidth()
    var eps = 1e-4;
    var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
        if (number === 0) return 0;
        number = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
        number = Math.floor(number + eps);
        if (number === 0) {
            if (deviceDPR === 1 || !isIOS) {
                return 1;
            } else {
                return 0.5;
            }
        }
        return number;
    }
    window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
    var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__ || {}

    var setCssToHead = function(file, _xcInvalid, info) {
        var Ca = {};
        var css_id;
        var info = info || {};
        var _C = __COMMON_STYLESHEETS__

        function makeup(file, opt) {
            var _n = typeof(file) === "string";
            if (_n && Ca.hasOwnProperty(file)) return "";
            if (_n) Ca[file] = 1;
            var ex = _n ? _C[file] : file;
            var res = "";
            for (var i = ex.length - 1; i >= 0; i--) {
                var content = ex[i];
                if (typeof(content) === "object") {
                    var op = content[0];
                    if (op == 0)
                        res = transformRPX(content[1], opt.deviceWidth) + (window.__convertRpxToVw__ ? "vw" : "px") + res;
                    else if (op == 1)
                        res = opt.suffix + res;
                    else if (op == 2)
                        res = makeup(content[1], opt) + res;
                } else
                    res = content + res
            }
            return res;
        }
        var styleSheetManager = window.__styleSheetManager2__
        var rewritor = function(suffix, opt, style) {
            opt = opt || {};
            suffix = suffix || "";
            opt.suffix = suffix;
            if (opt.allowIllegalSelector != undefined && _xcInvalid != undefined) {
                if (opt.allowIllegalSelector)
                    console.warn("For developer:" + _xcInvalid);
                else {
                    console.error(_xcInvalid);
                }
            }
            Ca = {};
            css = makeup(file, opt);
            if (styleSheetManager) {
                var key = (info.path || Math.random()) + ':' + suffix
                if (!style) {
                    styleSheetManager.addItem(key, info.path);
                    window.__rpxRecalculatingFuncs__.push(function(size) {
                        opt.deviceWidth = size.width;
                        rewritor(suffix, opt, true);
                    });
                }
                styleSheetManager.setCss(key, css);
                return;
            }
            if (!style) {
                var head = document.head || document.getElementsByTagName('head')[0];
                style = document.createElement('style');
                style.type = 'text/css';
                style.setAttribute("wxss:path", info.path);
                head.appendChild(style);
                window.__rpxRecalculatingFuncs__.push(function(size) {
                    opt.deviceWidth = size.width;
                    rewritor(suffix, opt, style);
                });
            }
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                if (style.childNodes.length == 0)
                    style.appendChild(document.createTextNode(css));
                else
                    style.childNodes[0].nodeValue = css;
            }
        }
        return rewritor;
    }
    setCssToHead([])();
    setCssToHead([], undefined, {
        path: "./app.wxss"
    })();;
    __wxAppCode__['custom-tab-bar/index.wxss'] = setCssToHead([".", [1], "tab-bar{bottom:0;height:calc(", [0, 80], " + env(safe-area-inset-bottom));left:0;padding-bottom:env(safe-area-inset-bottom);position:fixed;right:0;z-index:990}\n.", [1], "tab-bar-bg{background:#fff;box-shadow:0 ", [0, -1], " 0 rgba(0,0,0,.05);inset:0;position:absolute}\n.", [1], "tab-bar-content{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:", [0, 80], ";position:relative}\n.", [1], "tab-item{-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 6], ";height:100%}\n.", [1], "icon-wrap,.", [1], "tab-item{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "icon-wrap{height:", [0, 44], ";transition:-webkit-transform .3s cubic-bezier(.34,1.56,.64,1);transition:transform .3s cubic-bezier(.34,1.56,.64,1);transition:transform .3s cubic-bezier(.34,1.56,.64,1),-webkit-transform .3s cubic-bezier(.34,1.56,.64,1);width:", [0, 44], "}\n.", [1], "tab-item.", [1], "active .", [1], "icon-wrap{-webkit-transform:scale(1.18) translateY(", [0, -3], ");transform:scale(1.18) translateY(", [0, -3], ")}\n.", [1], "tab-text{color:#ddd9d3;font-size:", [0, 22], ";letter-spacing:", [0, .5], ";transition:color .3s ease}\n.", [1], "tab-item.", [1], "active .", [1], "tab-text{color:#e86a35;font-weight:500}\n.", [1], "tab-divider{background:#e8ded6;-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 24], ";width:", [0, 1], "}\n.", [1], "cloud-icon{height:", [0, 34], ";position:relative;width:", [0, 44], "}\n.", [1], "cloud-sun{background:#ddd9d3;border-radius:50%;height:", [0, 14], ";position:absolute;right:", [0, 2], ";top:", [0, -3], ";transition:background .3s;width:", [0, 14], ";z-index:0}\n.", [1], "cloud-body{border-radius:0 0 ", [0, 12], " ", [0, 12], ";bottom:0;height:", [0, 20], ";left:0;right:0}\n.", [1], "cloud-body,.", [1], "cloud-bump{background:#ddd9d3;position:absolute;transition:background .3s;z-index:1}\n.", [1], "cloud-bump{border-radius:50%}\n.", [1], "cloud-bump.", [1], "b1{bottom:", [0, 9], ";height:", [0, 18], ";left:", [0, 3], ";width:", [0, 18], "}\n.", [1], "cloud-bump.", [1], "b2{bottom:", [0, 9], ";height:", [0, 24], ";left:", [0, 10], ";width:", [0, 24], "}\n.", [1], "cloud-bump.", [1], "b3{bottom:", [0, 9], ";height:", [0, 16], ";right:", [0, 5], ";width:", [0, 16], "}\n.", [1], "tab-item.", [1], "active .", [1], "cloud-sun{background:#ffd166}\n.", [1], "tab-item.", [1], "active .", [1], "cloud-body,.", [1], "tab-item.", [1], "active .", [1], "cloud-bump{background:#e86a35}\n.", [1], "kite-icon{height:", [0, 46], ";position:relative;width:", [0, 40], "}\n.", [1], "kite-body{-webkit-clip-path:polygon(50% 0,96% 35%,50% 100%,4% 35%);clip-path:polygon(50% 0,96% 35%,50% 100%,4% 35%);display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;height:", [0, 38], ";left:", [0, 2], ";overflow:hidden;position:absolute;top:0;-webkit-transform:rotate(-12deg);transform:rotate(-12deg);width:", [0, 36], "}\n.", [1], "kite-bl,.", [1], "kite-br,.", [1], "kite-tl,.", [1], "kite-tr{background:#ddd9d3;transition:background .3s}\n.", [1], "kite-spine{height:", [0, 32], ";left:", [0, 20], ";top:", [0, 4], ";width:", [0, 2], "}\n.", [1], "kite-spar,.", [1], "kite-spine{background:hsla(0,0%,100%,.65);border-radius:", [0, 1], ";position:absolute;-webkit-transform:rotate(-12deg);transform:rotate(-12deg);z-index:2}\n.", [1], "kite-spar{height:", [0, 2], ";left:", [0, 8], ";top:", [0, 17], ";width:", [0, 24], "}\n.", [1], "kite-string{background:transparent;border-bottom-right-radius:", [0, 4], ";border-right:", [0, 2], " solid #ddd9d3;bottom:0;height:", [0, 8], ";left:", [0, 20], ";position:absolute;transition:border-color .3s;width:", [0, 2], "}\n.", [1], "tab-item.", [1], "active .", [1], "kite-tl{background:#66bb6a}\n.", [1], "tab-item.", [1], "active .", [1], "kite-tr{background:#ffa726}\n.", [1], "tab-item.", [1], "active .", [1], "kite-bl{background:#ef5350}\n.", [1], "tab-item.", [1], "active .", [1], "kite-br{background:#42a5f5}\n.", [1], "tab-item.", [1], "active .", [1], "kite-spar,.", [1], "tab-item.", [1], "active .", [1], "kite-spine{background:hsla(0,0%,100%,.85)}\n.", [1], "tab-item.", [1], "active .", [1], "kite-string{border-right-color:#e86a35}\n.", [1], "doll-icon{height:", [0, 42], ";position:relative;width:", [0, 42], "}\n.", [1], "doll-head{background:#eee4dd;height:", [0, 30], ";left:50%;top:", [0, 6], ";-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:background .3s;width:", [0, 32], "}\n.", [1], "doll-eye,.", [1], "doll-head{border-radius:50%;position:absolute}\n.", [1], "doll-eye{background:#888780;height:", [0, 6], ";top:", [0, 16], ";width:", [0, 5], "}\n.", [1], "doll-eye.", [1], "le{left:", [0, 12], "}\n.", [1], "doll-eye.", [1], "re{right:", [0, 12], "}\n.", [1], "doll-smile{border-bottom:", [0, 2], " solid #b4b2a9;border-radius:0 0 ", [0, 10], " ", [0, 10], ";height:", [0, 5], ";left:50%;position:absolute;top:", [0, 24], ";-webkit-transform:translateX(-50%);transform:translateX(-50%);width:", [0, 10], "}\n.", [1], "tab-item.", [1], "active .", [1], "doll-head{background:#f5b8a0}\n.", [1], "tab-item.", [1], "active .", [1], "doll-eye{background:#e86a35}\n.", [1], "grid-icon{display:grid;gap:", [0, 3], ";grid-template-columns:1fr 1fr;height:", [0, 36], ";position:relative;width:", [0, 36], "}\n.", [1], "grid-cell{background:#ddd9d3;border-radius:", [0, 5], ";transition:background .3s ease}\n.", [1], "tab-item.", [1], "active .", [1], "grid-cell.", [1], "g1{background:#ffd4b8}\n.", [1], "tab-item.", [1], "active .", [1], "grid-cell.", [1], "g2{background:#ffb085}\n.", [1], "tab-item.", [1], "active .", [1], "grid-cell.", [1], "g3{background:#ff9055}\n.", [1], "tab-item.", [1], "active .", [1], "grid-cell.", [1], "g4{background:#e86a35}\n", ], undefined, {
        path: "./custom-tab-bar/index.wxss"
    });;
}
__mainPageFrameReady__();
var __pageFrameEndTime__ = Date.now();