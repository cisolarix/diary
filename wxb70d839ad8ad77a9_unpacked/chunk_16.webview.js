$gwx_XC_8 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];

        function gz$gwx_XC_8_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'container'])
                Z([3, 'header-deco'])
                Z([3, 'deco-flower f1'])
                Z([3, 'deco-flower f2'])
                Z([3, 'deco-leaf l1'])
                Z([3, 'deco-leaf l2'])
                Z([3, 'top-tip'])
                Z([3, 'tip-text'])
                Z([3, '切换后首页日记头图将自动更新'])
                Z([3, 'theme-list'])
                Z([
                    [7],
                    [3, 'isLoadingPreview']
                ])
                Z([1, 4])
                Z([3, '*this'])
                Z([3, 'theme-item skeleton-item'])
                Z([3, 'skeleton-preview'])
                Z([1, 7])
                Z([3, 'index'])
                Z([3, 'skeleton-img'])
                Z([3, 'skeleton-info'])
                Z([3, 'skeleton-line skeleton-line-name'])
                Z([3, 'skeleton-line skeleton-line-desc'])
                Z([
                    [7],
                    [3, 'seriesList']
                ])
                Z([3, 'id'])
                Z([3, 'onSelectSeries'])
                Z([a, [3, 'theme-item '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currentSeries']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'id']
                            ]
                        ],
                        [1, 'selected'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'id']
                ])
                Z([3, 'theme-preview'])
                Z([3, 'img'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'images']
                ])
                Z(z[16])
                Z([a, [3, 'preview-img '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'img']
                        ],
                        [1, ''],
                        [1, 'placeholder']
                    ]
                ])
                Z([
                    [7],
                    [3, 'img']
                ])
                Z([3, 'preview-img-inner'])
                Z([3, 'aspectFill'])
                Z(z[31])
                Z([3, 'placeholder-icon'])
                Z([3, 'icon-text'])
                Z([3, '📷'])
                Z([3, 'theme-info'])
                Z([3, 'theme-name-row'])
                Z([3, 'theme-name'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'name']
                ]])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'pointsCost']
                    ],
                    [1, 0]
                ])
                Z([3, 'points-cost-tag'])
                Z([a, [3, '消耗'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'pointsCost']
                    ],
                    [3, '积分']
                ])
                Z([3, 'theme-desc'])
                Z([3, '7种风景，每周不重样'])
                Z([3, 'theme-check'])
                Z([3, 'check-circle'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_8 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_8 = true;
        var x = ['./pages/theme-select/theme-select.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_8_1()
            var oRZ = _n('view')
            _rz(z, oRZ, 'class', 0, e, s, gg)
            var cSZ = _n('view')
            _rz(z, cSZ, 'class', 1, e, s, gg)
            var oTZ = _n('view')
            _rz(z, oTZ, 'class', 2, e, s, gg)
            _(cSZ, oTZ)
            var lUZ = _n('view')
            _rz(z, lUZ, 'class', 3, e, s, gg)
            _(cSZ, lUZ)
            var aVZ = _n('view')
            _rz(z, aVZ, 'class', 4, e, s, gg)
            _(cSZ, aVZ)
            var tWZ = _n('view')
            _rz(z, tWZ, 'class', 5, e, s, gg)
            _(cSZ, tWZ)
            _(oRZ, cSZ)
            var eXZ = _n('view')
            _rz(z, eXZ, 'class', 6, e, s, gg)
            var bYZ = _n('text')
            _rz(z, bYZ, 'class', 7, e, s, gg)
            var oZZ = _oz(z, 8, e, s, gg)
            _(bYZ, oZZ)
            _(eXZ, bYZ)
            _(oRZ, eXZ)
            var x1Z = _n('view')
            _rz(z, x1Z, 'class', 9, e, s, gg)
            var o2Z = _v()
            _(x1Z, o2Z)
            if (_oz(z, 10, e, s, gg)) {
                o2Z.wxVkey = 1
                var f3Z = _v()
                _(o2Z, f3Z)
                var c4Z = function(o6Z, h5Z, c7Z, gg) {
                    var l9Z = _n('view')
                    _rz(z, l9Z, 'class', 13, o6Z, h5Z, gg)
                    var a0Z = _n('view')
                    _rz(z, a0Z, 'class', 14, o6Z, h5Z, gg)
                    var tA1 = _v()
                    _(a0Z, tA1)
                    var eB1 = function(oD1, bC1, xE1, gg) {
                        var fG1 = _n('view')
                        _rz(z, fG1, 'class', 17, oD1, bC1, gg)
                        _(xE1, fG1)
                        return xE1
                    }
                    tA1.wxXCkey = 2
                    _2z(z, 15, eB1, o6Z, h5Z, gg, tA1, 'item', 'index', 'index')
                    _(l9Z, a0Z)
                    var cH1 = _n('view')
                    _rz(z, cH1, 'class', 18, o6Z, h5Z, gg)
                    var hI1 = _n('view')
                    _rz(z, hI1, 'class', 19, o6Z, h5Z, gg)
                    _(cH1, hI1)
                    var oJ1 = _n('view')
                    _rz(z, oJ1, 'class', 20, o6Z, h5Z, gg)
                    _(cH1, oJ1)
                    _(l9Z, cH1)
                    _(c7Z, l9Z)
                    return c7Z
                }
                f3Z.wxXCkey = 2
                _2z(z, 11, c4Z, e, s, gg, f3Z, 'item', 'index', '*this')
            } else {
                o2Z.wxVkey = 2
                var cK1 = _v()
                _(o2Z, cK1)
                var oL1 = function(aN1, lM1, tO1, gg) {
                    var bQ1 = _mz(z, 'view', ['bindtap', 23, 'class', 1, 'data-series', 2], [], aN1, lM1, gg)
                    var oR1 = _n('view')
                    _rz(z, oR1, 'class', 26, aN1, lM1, gg)
                    var xS1 = _v()
                    _(oR1, xS1)
                    var oT1 = function(cV1, fU1, hW1, gg) {
                        var cY1 = _n('view')
                        _rz(z, cY1, 'class', 30, cV1, fU1, gg)
                        var oZ1 = _v()
                        _(cY1, oZ1)
                        if (_oz(z, 31, cV1, fU1, gg)) {
                            oZ1.wxVkey = 1
                            var l11 = _mz(z, 'image', ['lazyLoad', -1, 'class', 32, 'mode', 1, 'src', 2], [], cV1, fU1, gg)
                            _(oZ1, l11)
                        } else {
                            oZ1.wxVkey = 2
                            var a21 = _n('view')
                            _rz(z, a21, 'class', 35, cV1, fU1, gg)
                            var t31 = _n('text')
                            _rz(z, t31, 'class', 36, cV1, fU1, gg)
                            var e41 = _oz(z, 37, cV1, fU1, gg)
                            _(t31, e41)
                            _(a21, t31)
                            _(oZ1, a21)
                        }
                        oZ1.wxXCkey = 1
                        _(hW1, cY1)
                        return hW1
                    }
                    xS1.wxXCkey = 2
                    _2z(z, 28, oT1, aN1, lM1, gg, xS1, 'img', 'index', 'index')
                    _(bQ1, oR1)
                    var b51 = _n('view')
                    _rz(z, b51, 'class', 38, aN1, lM1, gg)
                    var o61 = _n('view')
                    _rz(z, o61, 'class', 39, aN1, lM1, gg)
                    var o81 = _n('text')
                    _rz(z, o81, 'class', 40, aN1, lM1, gg)
                    var f91 = _oz(z, 41, aN1, lM1, gg)
                    _(o81, f91)
                    _(o61, o81)
                    var x71 = _v()
                    _(o61, x71)
                    if (_oz(z, 42, aN1, lM1, gg)) {
                        x71.wxVkey = 1
                        var c01 = _n('text')
                        _rz(z, c01, 'class', 43, aN1, lM1, gg)
                        var hA2 = _oz(z, 44, aN1, lM1, gg)
                        _(c01, hA2)
                        _(x71, c01)
                    }
                    x71.wxXCkey = 1
                    _(b51, o61)
                    var oB2 = _n('text')
                    _rz(z, oB2, 'class', 45, aN1, lM1, gg)
                    var cC2 = _oz(z, 46, aN1, lM1, gg)
                    _(oB2, cC2)
                    _(b51, oB2)
                    _(bQ1, b51)
                    var oD2 = _n('view')
                    _rz(z, oD2, 'class', 47, aN1, lM1, gg)
                    var lE2 = _n('view')
                    _rz(z, lE2, 'class', 48, aN1, lM1, gg)
                    _(oD2, lE2)
                    _(bQ1, oD2)
                    _(tO1, bQ1)
                    return tO1
                }
                cK1.wxXCkey = 2
                _2z(z, 21, oL1, e, s, gg, cK1, 'item', 'index', 'id')
            }
            o2Z.wxXCkey = 1
            _(oRZ, x1Z)
            _(r, oRZ)
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
                g = "$gwx_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/theme-select/theme-select.wxml'] = [$gwx_XC_8, './pages/theme-select/theme-select.wxml'];
else __wxAppCode__['pages/theme-select/theme-select.wxml'] = $gwx_XC_8('./pages/theme-select/theme-select.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/theme-select/theme-select.wxss'] = setCssToHead(["body{background:linear-gradient(180deg,#fff8f0,#fff5f0);min-height:100vh}\n.", [1], "container{padding:", [0, 30], " ", [0, 30], " ", [0, 120], "}\n.", [1], "header-deco{height:", [0, 20], ";position:relative}\n.", [1], "deco-flower{background:linear-gradient(135deg,#ffb6c1,pink);border-radius:50%;height:", [0, 30], ";position:absolute;width:", [0, 30], "}\n.", [1], "deco-flower.", [1], "f1{left:", [0, 20], ";top:", [0, 10], "}\n.", [1], "deco-flower.", [1], "f2{height:", [0, 20], ";right:", [0, 30], ";top:", [0, 30], ";width:", [0, 20], "}\n.", [1], "deco-leaf{background:linear-gradient(135deg,#98d982,#7cb342);border-radius:50% 0 50% 0;height:", [0, 15], ";position:absolute;width:", [0, 25], "}\n.", [1], "deco-leaf.", [1], "l1{left:", [0, 60], ";top:", [0, 40], ";-webkit-transform:rotate(-30deg);transform:rotate(-30deg)}\n.", [1], "deco-leaf.", [1], "l2{right:", [0, 80], ";top:", [0, 20], ";-webkit-transform:rotate(30deg);transform:rotate(30deg)}\n.", [1], "page-title{margin:", [0, 40], " 0 ", [0, 50], ";text-align:center}\n.", [1], "title-text{color:#333;display:block;font-size:", [0, 40], ";font-weight:600;margin-bottom:", [0, 16], "}\n.", [1], "title-sub{color:#999;display:block;font-size:", [0, 26], "}\n.", [1], "theme-list{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 30], ";margin-top:", [0, 20], "}\n.", [1], "theme-item{background:#fff;border-radius:", [0, 24], ";box-shadow:0 ", [0, 4], " ", [0, 20], " rgba(0,0,0,.05);padding:", [0, 30], ";position:relative;transition:all .3s ease}\n.", [1], "theme-item.", [1], "selected{border:", [0, 4], " solid #667eea}\n.", [1], "theme-item.", [1], "selected .", [1], "check-circle{background:#667eea;border-color:#667eea}\n.", [1], "theme-item.", [1], "selected .", [1], "check-circle::after{opacity:1}\n.", [1], "theme-preview{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 10], ";margin-bottom:", [0, 24], "}\n.", [1], "preview-img{background:#f0f0f0;border-radius:", [0, 12], ";-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 80], ";overflow:hidden;position:relative;width:", [0, 80], "}\n.", [1], "preview-img-inner{height:100%;width:100%}\n.", [1], "preview-img.", [1], "empty,.", [1], "preview-img.", [1], "placeholder{-webkit-align-items:center;align-items:center;background:linear-gradient(135deg,#f5f5f5,#e8e8e8);display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "preview-img.", [1], "empty{border:", [0, 2], " dashed #ddd;position:relative}\n.", [1], "placeholder-icon{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "icon-text{font-size:", [0, 32], ";opacity:.5}\n.", [1], "theme-info{margin-bottom:", [0, 20], "}\n.", [1], "theme-name{color:#333;font-size:", [0, 32], ";font-weight:600}\n.", [1], "theme-desc{color:#999;display:block;font-size:", [0, 24], "}\n.", [1], "theme-check{position:absolute;right:", [0, 30], ";top:", [0, 30], "}\n.", [1], "check-circle{border:", [0, 3], " solid #ddd;border-radius:50%;height:", [0, 36], ";position:relative;transition:all .3s ease;width:", [0, 36], "}\n.", [1], "check-circle::after{border-bottom:", [0, 3], " solid #fff;border-right:", [0, 3], " solid #fff;content:\x22\x22;height:", [0, 16], ";left:50%;opacity:0;position:absolute;top:50%;-webkit-transform:translate(-50%,-60%) rotate(45deg);transform:translate(-50%,-60%) rotate(45deg);transition:opacity .3s ease;width:", [0, 10], "}\n.", [1], "top-tip{margin-bottom:", [0, 20], ";margin-top:", [0, 10], ";text-align:center}\n.", [1], "top-tip .", [1], "tip-text{color:#888;font-size:", [0, 24], "}\n.", [1], "custom-section{background:#fff;border-radius:", [0, 24], ";box-shadow:0 ", [0, 4], " ", [0, 20], " rgba(0,0,0,.05);margin-top:", [0, 20], ";padding:", [0, 30], ";position:relative}\n.", [1], "custom-check{position:absolute;right:", [0, 30], ";top:", [0, 30], "}\n.", [1], "custom-check .", [1], "check-circle.", [1], "selected{background:#667eea;border-color:#667eea}\n.", [1], "custom-check .", [1], "check-circle.", [1], "selected::after{border-bottom:", [0, 3], " solid #fff;border-right:", [0, 3], " solid #fff;content:\x22\x22;height:", [0, 16], ";left:50%;opacity:1;position:absolute;top:50%;-webkit-transform:translate(-50%,-60%) rotate(45deg);transform:translate(-50%,-60%) rotate(45deg);width:", [0, 10], "}\n.", [1], "custom-preview{-webkit-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:", [0, 30], ";overflow-x:visible}\n.", [1], "img-delete{-webkit-align-items:center;align-items:center;background:#ff6b6b;border-radius:50%;color:#fff;font-size:", [0, 28], ";font-weight:700;height:", [0, 36], ";-webkit-justify-content:center;justify-content:center;position:absolute;right:", [0, -10], ";top:", [0, -10], ";width:", [0, 36], "}\n.", [1], "img-delete,.", [1], "section-header{display:-webkit-flex;display:flex}\n.", [1], "section-header{-webkit-align-items:baseline;align-items:baseline;-webkit-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 10], ";margin-bottom:", [0, 30], "}\n.", [1], "section-title{color:#333;font-size:", [0, 32], ";font-weight:600}\n.", [1], "section-hint{color:#aaa;font-size:", [0, 22], ";line-height:1.4}\n.", [1], "section-desc{color:#999;display:block;font-size:", [0, 24], "}\n.", [1], "custom-images{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 20], ";margin-bottom:", [0, 30], "}\n.", [1], "custom-img-item{border-radius:", [0, 12], ";height:", [0, 120], ";overflow:hidden;position:relative;width:", [0, 180], "}\n.", [1], "custom-img{height:100%;width:100%}\n.", [1], "custom-img-actions{background:rgba(0,0,0,.5);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;left:0;padding:", [0, 8], " 0;position:absolute;right:0}\n.", [1], "action-btn{border-radius:", [0, 8], ";color:#fff;font-size:", [0, 20], ";padding:", [0, 4], " ", [0, 12], "}\n.", [1], "action-btn.", [1], "delete{background:#ff6b6b}\n.", [1], "action-btn.", [1], "move-down,.", [1], "action-btn.", [1], "move-up{background:#667eea}\n.", [1], "add-custom-btn{-webkit-align-items:center;align-items:center;border:", [0, 2], " dashed #ddd;border-radius:", [0, 16], ";display:-webkit-flex;display:flex;gap:", [0, 16], ";height:", [0, 100], ";-webkit-justify-content:center;justify-content:center;margin-bottom:", [0, 20], ";width:100%}\n.", [1], "add-icon{color:#667eea;font-size:", [0, 48], "}\n.", [1], "add-text{color:#667eea;font-size:", [0, 28], "}\n.", [1], "custom-tip{margin-bottom:", [0, 20], ";text-align:center}\n.", [1], "use-custom-btn{-webkit-align-items:center;align-items:center;background:#f5f5f5;border-radius:", [0, 16], ";color:#666;display:-webkit-flex;display:flex;font-size:", [0, 28], ";height:", [0, 88], ";-webkit-justify-content:center;justify-content:center;width:100%}\n.", [1], "use-custom-btn.", [1], "active,.", [1], "use-custom-btn.", [1], "ready{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}\n.", [1], "use-custom-btn.", [1], "ready{opacity:.8}\n.", [1], "use-custom-btn.", [1], "disabled{background:#e0e0e0;color:#999}\n.", [1], "skeleton-item{background:#fff;border-radius:", [0, 24], ";box-shadow:0 ", [0, 4], " ", [0, 20], " rgba(0,0,0,.05);padding:", [0, 30], "}\n.", [1], "skeleton-preview{display:-webkit-flex;display:flex;gap:", [0, 10], ";margin-bottom:", [0, 24], "}\n.", [1], "skeleton-img{-webkit-animation:skeleton-shimmer 1.5s ease-in-out infinite;animation:skeleton-shimmer 1.5s ease-in-out infinite;background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%);background-size:200% 100%;border-radius:", [0, 12], ";-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 80], ";width:", [0, 80], "}\n.", [1], "skeleton-info{margin-bottom:", [0, 20], "}\n.", [1], "skeleton-line{-webkit-animation:skeleton-shimmer 1.5s ease-in-out infinite;animation:skeleton-shimmer 1.5s ease-in-out infinite;background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%);background-size:200% 100%;border-radius:", [0, 8], ";height:", [0, 28], "}\n.", [1], "skeleton-line-name{height:", [0, 32], ";margin-bottom:", [0, 16], ";width:", [0, 160], "}\n.", [1], "skeleton-line-desc{height:", [0, 24], ";width:", [0, 280], "}\n@-webkit-keyframes skeleton-shimmer{0%{background-position:200% 0}\n100%{background-position:-200% 0}\n}@keyframes skeleton-shimmer{0%{background-position:200% 0}\n100%{background-position:-200% 0}\n}.", [1], "theme-name-row{-webkit-align-items:baseline;align-items:baseline;display:-webkit-flex;display:flex;gap:", [0, 8], ";margin-bottom:", [0, 8], "}\n.", [1], "points-cost-tag{background:#fff0f0;border-radius:", [0, 8], ";color:#ff6b6b;-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 20], ";font-weight:500;padding:", [0, 2], " ", [0, 12], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/theme-select/theme-select.wxss:1:1)", {
        path: "./pages/theme-select/theme-select.wxss"
    });
}