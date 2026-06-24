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
                Z([3, 'container'])
                Z([3, 'onBack'])
                Z([3, 'nav-back'])
                Z([3, 'back-arrow'])
                Z([3, 'back-text'])
                Z([3, '返回'])
                Z([3, 'avatar-section'])
                Z([3, 'avatar-wrapper'])
                Z([3, 'avatar-ring'])
                Z([3, 'avatar-ring-inner'])
                Z([3, 'avatar-container'])
                Z([3, 'onChooseAvatar'])
                Z([3, 'avatar-btn'])
                Z([3, 'chooseAvatar'])
                Z([3, 'avatar-img'])
                Z([3, 'aspectFill'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'avatarUrl']
                    ],
                    [1, '/images/profile/default-avatar.jpg']
                ])
                Z([3, 'avatar-mask'])
                Z([3, 'camera-icon-wrapper'])
                Z([3, 'camera-icon'])
                Z([3, 'camera-body'])
                Z([3, 'camera-lens'])
                Z([3, 'input-section'])
                Z([3, 'input-card'])
                Z([3, 'input-item'])
                Z([3, 'input-label'])
                Z([3, 'label-icon'])
                Z([3, 'leaf-icon'])
                Z([3, 'leaf-body'])
                Z([3, 'label-text'])
                Z([3, '昵称'])
                Z([3, 'onInputNickName'])
                Z([3, 'nickname-input'])
                Z([3, '20'])
                Z([3, '给自己起个可爱的名字~'])
                Z([3, 'placeholder'])
                Z([3, 'nickname'])
                Z([
                    [7],
                    [3, 'nickName']
                ])
                Z([
                    [2, '>'],
                    [
                        [7],
                        [3, 'remainEdits']
                    ],
                    [1, 0]
                ])
                Z([3, 'edit-limit-hint'])
                Z([3, 'limit-icon'])
                Z([3, '✎'])
                Z([3, 'limit-text'])
                Z([a, [3, '本月还可修改 '],
                    [
                        [7],
                        [3, 'remainEdits']
                    ],
                    [3, '/'],
                    [
                        [7],
                        [3, 'maxEdits']
                    ],
                    [3, ' 次']
                ])
                Z([3, 'edit-limit-exhausted'])
                Z([3, 'exhausted-text'])
                Z([3, '⏰ 本月修改次数已用完'])
                Z([3, 'onSave'])
                Z([3, 'save-btn'])
                Z([3, 'save-text'])
                Z([3, '保存'])
                Z([3, 'footer-decoration'])
                Z([3, 'deco-flower f1'])
                Z([3, 'deco-flower f2'])
                Z([3, 'deco-butterfly b1'])
                Z([3, 'deco-butterfly b2'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_12 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_12 = true;
        var x = ['./pages/edit-profile/edit-profile.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_12_1()
            var oFCB = _n('view')
            _rz(z, oFCB, 'class', 0, e, s, gg)
            var xGCB = _mz(z, 'view', ['bindtap', 1, 'class', 1], [], e, s, gg)
            var oHCB = _n('view')
            _rz(z, oHCB, 'class', 3, e, s, gg)
            _(xGCB, oHCB)
            var fICB = _n('text')
            _rz(z, fICB, 'class', 4, e, s, gg)
            var cJCB = _oz(z, 5, e, s, gg)
            _(fICB, cJCB)
            _(xGCB, fICB)
            _(oFCB, xGCB)
            var hKCB = _n('view')
            _rz(z, hKCB, 'class', 6, e, s, gg)
            var oLCB = _n('view')
            _rz(z, oLCB, 'class', 7, e, s, gg)
            var cMCB = _n('view')
            _rz(z, cMCB, 'class', 8, e, s, gg)
            var oNCB = _n('view')
            _rz(z, oNCB, 'class', 9, e, s, gg)
            _(cMCB, oNCB)
            _(oLCB, cMCB)
            var lOCB = _n('view')
            _rz(z, lOCB, 'class', 10, e, s, gg)
            var aPCB = _mz(z, 'button', ['bind:chooseavatar', 11, 'class', 1, 'openType', 2], [], e, s, gg)
            var tQCB = _mz(z, 'image', ['class', 14, 'mode', 1, 'src', 2], [], e, s, gg)
            _(aPCB, tQCB)
            var eRCB = _n('view')
            _rz(z, eRCB, 'class', 17, e, s, gg)
            var bSCB = _n('view')
            _rz(z, bSCB, 'class', 18, e, s, gg)
            var oTCB = _n('view')
            _rz(z, oTCB, 'class', 19, e, s, gg)
            var xUCB = _n('view')
            _rz(z, xUCB, 'class', 20, e, s, gg)
            _(oTCB, xUCB)
            var oVCB = _n('view')
            _rz(z, oVCB, 'class', 21, e, s, gg)
            _(oTCB, oVCB)
            _(bSCB, oTCB)
            _(eRCB, bSCB)
            _(aPCB, eRCB)
            _(lOCB, aPCB)
            _(oLCB, lOCB)
            _(hKCB, oLCB)
            _(oFCB, hKCB)
            var fWCB = _n('view')
            _rz(z, fWCB, 'class', 22, e, s, gg)
            var cXCB = _n('view')
            _rz(z, cXCB, 'class', 23, e, s, gg)
            var oZCB = _n('view')
            _rz(z, oZCB, 'class', 24, e, s, gg)
            var c1CB = _n('view')
            _rz(z, c1CB, 'class', 25, e, s, gg)
            var o2CB = _n('view')
            _rz(z, o2CB, 'class', 26, e, s, gg)
            var l3CB = _n('view')
            _rz(z, l3CB, 'class', 27, e, s, gg)
            var a4CB = _n('view')
            _rz(z, a4CB, 'class', 28, e, s, gg)
            _(l3CB, a4CB)
            _(o2CB, l3CB)
            _(c1CB, o2CB)
            var t5CB = _n('text')
            _rz(z, t5CB, 'class', 29, e, s, gg)
            var e6CB = _oz(z, 30, e, s, gg)
            _(t5CB, e6CB)
            _(c1CB, t5CB)
            _(oZCB, c1CB)
            var b7CB = _mz(z, 'input', ['bindinput', 31, 'class', 1, 'maxlength', 2, 'placeholder', 3, 'placeholderClass', 4, 'type', 5, 'value', 6], [], e, s, gg)
            _(oZCB, b7CB)
            _(cXCB, oZCB)
            var hYCB = _v()
            _(cXCB, hYCB)
            if (_oz(z, 38, e, s, gg)) {
                hYCB.wxVkey = 1
                var o8CB = _n('view')
                _rz(z, o8CB, 'class', 39, e, s, gg)
                var x9CB = _n('text')
                _rz(z, x9CB, 'class', 40, e, s, gg)
                var o0CB = _oz(z, 41, e, s, gg)
                _(x9CB, o0CB)
                _(o8CB, x9CB)
                var fADB = _n('text')
                _rz(z, fADB, 'class', 42, e, s, gg)
                var cBDB = _oz(z, 43, e, s, gg)
                _(fADB, cBDB)
                _(o8CB, fADB)
                _(hYCB, o8CB)
            } else {
                hYCB.wxVkey = 2
                var hCDB = _n('view')
                _rz(z, hCDB, 'class', 44, e, s, gg)
                var oDDB = _n('text')
                _rz(z, oDDB, 'class', 45, e, s, gg)
                var cEDB = _oz(z, 46, e, s, gg)
                _(oDDB, cEDB)
                _(hCDB, oDDB)
                _(hYCB, hCDB)
            }
            var oFDB = _mz(z, 'view', ['bindtap', 47, 'class', 1], [], e, s, gg)
            var lGDB = _n('text')
            _rz(z, lGDB, 'class', 49, e, s, gg)
            var aHDB = _oz(z, 50, e, s, gg)
            _(lGDB, aHDB)
            _(oFDB, lGDB)
            _(cXCB, oFDB)
            hYCB.wxXCkey = 1
            _(fWCB, cXCB)
            _(oFCB, fWCB)
            var tIDB = _n('view')
            _rz(z, tIDB, 'class', 51, e, s, gg)
            var eJDB = _n('view')
            _rz(z, eJDB, 'class', 52, e, s, gg)
            _(tIDB, eJDB)
            var bKDB = _n('view')
            _rz(z, bKDB, 'class', 53, e, s, gg)
            _(tIDB, bKDB)
            var oLDB = _n('view')
            _rz(z, oLDB, 'class', 54, e, s, gg)
            _(tIDB, oLDB)
            var xMDB = _n('view')
            _rz(z, xMDB, 'class', 55, e, s, gg)
            _(tIDB, xMDB)
            _(oFCB, tIDB)
            _(r, oFCB)
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
                g = "$gwx_XC_12";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_12();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/edit-profile/edit-profile.wxml'] = [$gwx_XC_12, './pages/edit-profile/edit-profile.wxml'];
else __wxAppCode__['pages/edit-profile/edit-profile.wxml'] = $gwx_XC_12('./pages/edit-profile/edit-profile.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/edit-profile/edit-profile.wxss'] = setCssToHead([".", [1], "container{background:#fff9e6;min-height:100vh;padding-top:calc(30px + ", [0, 115], ");position:relative}\n.", [1], "nav-back{-webkit-align-items:center;align-items:center;background:hsla(0,0%,100%,.85);border-radius:", [0, 36], ";box-shadow:0 ", [0, 4], " ", [0, 16], " rgba(255,200,150,.2);display:-webkit-flex;display:flex;margin-bottom:", [0, 10], ";padding:", [0, 12], " ", [0, 28], ";width:-webkit-fit-content;width:fit-content}\n.", [1], "back-arrow{border-bottom:", [0, 4], " solid #ff9500;border-left:", [0, 4], " solid #ff9500;height:", [0, 18], ";margin-right:", [0, 10], ";-webkit-transform:rotate(45deg);transform:rotate(45deg);width:", [0, 18], "}\n.", [1], "back-text{color:#ff9500}\n.", [1], "header{height:", [0, 200], ";position:relative}\n.", [1], "header-bg{background:linear-gradient(180deg,#ffe4c9,#fff9e6);border-radius:0 0 ", [0, 40], " ", [0, 40], ";height:", [0, 180], ";left:0;position:absolute;right:0;top:0}\n.", [1], "header-content{-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 60], " ", [0, 30], " ", [0, 20], ";position:relative}\n.", [1], "back-btn,.", [1], "header-content{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "back-btn{background:hsla(0,0%,100%,.8);border-radius:", [0, 30], ";box-shadow:0 ", [0, 4], " ", [0, 12], " rgba(255,200,150,.2);padding:", [0, 10], " ", [0, 20], "}\n.", [1], "back-icon{height:", [0, 32], ";margin-right:", [0, 6], ";position:relative;width:", [0, 32], "}\n.", [1], "back-icon .", [1], "arrow{border-bottom:", [0, 4], " solid #ffb74d;border-left:", [0, 4], " solid #ffb74d;height:", [0, 16], ";left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);width:", [0, 16], "}\n.", [1], "back-text{color:#ffb74d;font-size:", [0, 28], ";font-weight:500}\n.", [1], "title{color:#333;font-size:", [0, 34], ";font-weight:700;left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n.", [1], "save-btn{background:linear-gradient(145deg,#ff9500,#e08600);border-radius:", [0, 43], ";height:", [0, 86], ";line-height:", [0, 86], ";margin-top:", [0, 28], ";text-align:center}\n.", [1], "save-text{color:#fff;font-size:", [0, 30], ";font-weight:500}\n.", [1], "avatar-section{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:", [0, 40], " 0 ", [0, 30], "}\n.", [1], "avatar-wrapper{position:relative}\n.", [1], "avatar-ring{-webkit-animation:ring-glow 3s ease-in-out infinite;animation:ring-glow 3s ease-in-out infinite;background:linear-gradient(135deg,#ffe082,#ffcc80,#ffb74d);bottom:", [0, -10], ";left:", [0, -10], ";right:", [0, -10], ";top:", [0, -10], "}\n.", [1], "avatar-ring,.", [1], "avatar-ring-inner{border-radius:50%;position:absolute}\n.", [1], "avatar-ring-inner{background:#fff9e6;bottom:0;left:0;right:0;top:0}\n@-webkit-keyframes ring-glow{0%,100%{box-shadow:0 0 ", [0, 20], " rgba(255,213,79,.4)}\n50%{box-shadow:0 0 ", [0, 40], " rgba(255,213,79,.7)}\n}@keyframes ring-glow{0%,100%{box-shadow:0 0 ", [0, 20], " rgba(255,213,79,.4)}\n50%{box-shadow:0 0 ", [0, 40], " rgba(255,213,79,.7)}\n}.", [1], "avatar-container{background:#ffe082;border-radius:50%;height:", [0, 180], ";overflow:hidden;position:relative;width:", [0, 180], "}\n.", [1], "avatar-btn{background:none!important;border:none!important;border-radius:50%;height:", [0, 180], ";left:0;line-height:normal;margin:0;padding:0;position:absolute;top:0;width:", [0, 180], "}\n.", [1], "avatar-btn::after{display:none}\n.", [1], "avatar-img{border-radius:50%;height:", [0, 180], ";width:", [0, 180], "}\n.", [1], "avatar.", [1], "hide{opacity:0}\n.", [1], "avatar{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:100%;-webkit-justify-content:center;justify-content:center;position:relative;transition:opacity .3s ease;width:100%}\n.", [1], "avatar-sun{-webkit-animation:sun-breathe 3s ease-in-out infinite;animation:sun-breathe 3s ease-in-out infinite;background:linear-gradient(145deg,#ffe082,#ffd54f);border-radius:50%;box-shadow:0 ", [0, 4], " ", [0, 20], " rgba(255,213,79,.4);height:", [0, 120], ";position:relative;width:", [0, 120], "}\n.", [1], "avatar-ray{-webkit-animation:ray-pulse 2s ease-in-out infinite;animation:ray-pulse 2s ease-in-out infinite;background:linear-gradient(90deg,#ffd54f,#ffe082);border-radius:", [0, 2], ";position:absolute}\n.", [1], "avatar-ray.", [1], "r1{top:", [0, -8], "}\n.", [1], "avatar-ray.", [1], "r1,.", [1], "avatar-ray.", [1], "r2{height:", [0, 16], ";left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:", [0, 4], "}\n.", [1], "avatar-ray.", [1], "r2{bottom:", [0, -8], "}\n.", [1], "avatar-ray.", [1], "r3{left:", [0, -8], "}\n.", [1], "avatar-ray.", [1], "r3,.", [1], "avatar-ray.", [1], "r4{height:", [0, 4], ";top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:", [0, 16], "}\n.", [1], "avatar-ray.", [1], "r4{right:", [0, -8], "}\n@-webkit-keyframes sun-breathe{0%,100%{-webkit-transform:scale(1);transform:scale(1)}\n50%{-webkit-transform:scale(1.05);transform:scale(1.05)}\n}@keyframes sun-breathe{0%,100%{-webkit-transform:scale(1);transform:scale(1)}\n50%{-webkit-transform:scale(1.05);transform:scale(1.05)}\n}@-webkit-keyframes ray-pulse{0%,100%{opacity:.6}\n50%{opacity:1}\n}@keyframes ray-pulse{0%,100%{opacity:.6}\n50%{opacity:1}\n}.", [1], "avatar-face{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;-webkit-justify-content:center;justify-content:center;position:absolute;width:100%}\n.", [1], "avatar-eye{-webkit-animation:eye-blink 4s ease-in-out infinite;animation:eye-blink 4s ease-in-out infinite;background:#8b6914;border-radius:50%;height:", [0, 10], ";position:absolute;top:", [0, 38], ";width:", [0, 10], "}\n.", [1], "avatar-eye.", [1], "le{left:", [0, 28], "}\n.", [1], "avatar-eye.", [1], "re{right:", [0, 28], "}\n.", [1], "avatar-blush{background:hsla(0,100%,79%,.4);border-radius:50%;height:", [0, 10], ";position:absolute;top:", [0, 60], ";width:", [0, 16], "}\n.", [1], "avatar-blush.", [1], "lb{left:", [0, 14], "}\n.", [1], "avatar-blush.", [1], "rb{right:", [0, 14], "}\n.", [1], "avatar-smile{border:", [0, 4], " solid #8b6914;border-radius:0 0 ", [0, 24], " ", [0, 24], ";border-top:none;bottom:", [0, 32], ";height:", [0, 12], ";left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:", [0, 24], "}\n@-webkit-keyframes eye-blink{0%,100%,90%{-webkit-transform:scaleY(1);transform:scaleY(1)}\n95%{-webkit-transform:scaleY(.1);transform:scaleY(.1)}\n}@keyframes eye-blink{0%,100%,90%{-webkit-transform:scaleY(1);transform:scaleY(1)}\n95%{-webkit-transform:scaleY(.1);transform:scaleY(.1)}\n}.", [1], "avatar-mask{background:linear-gradient(transparent,rgba(255,213,79,.8));bottom:0;height:", [0, 50], ";left:0;position:absolute;right:0}\n.", [1], "avatar-mask,.", [1], "camera-icon-wrapper{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "camera-icon-wrapper{background:hsla(0,0%,100%,.9);border-radius:50%;box-shadow:0 ", [0, 2], " ", [0, 8], " rgba(0,0,0,.1);height:", [0, 44], ";width:", [0, 44], "}\n.", [1], "camera-icon{height:", [0, 20], ";position:relative;width:", [0, 24], "}\n.", [1], "camera-body{background:#ffb74d;border-radius:", [0, 4], ";bottom:0;height:", [0, 14], ";width:", [0, 20], "}\n.", [1], "camera-body,.", [1], "camera-lens{left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n.", [1], "camera-lens{background:#fff;border:", [0, 2], " solid #ffb74d;border-radius:50%;box-sizing:border-box;height:", [0, 10], ";top:", [0, 2], ";width:", [0, 10], "}\n.", [1], "avatar-hint{color:#999;font-size:", [0, 24], ";margin-top:", [0, 20], "}\n.", [1], "input-section{padding:0 ", [0, 30], "}\n.", [1], "input-card{background:#fff;border-radius:", [0, 24], ";box-shadow:0 ", [0, 8], " ", [0, 32], " rgba(255,200,150,.15);padding:", [0, 30], "}\n.", [1], "input-item{-webkit-flex-direction:column;flex-direction:column}\n.", [1], "input-item,.", [1], "input-label{display:-webkit-flex;display:flex}\n.", [1], "input-label{-webkit-align-items:center;align-items:center;margin-bottom:", [0, 16], "}\n.", [1], "label-icon{height:", [0, 36], ";margin-right:", [0, 12], ";width:", [0, 36], "}\n.", [1], "leaf-icon{height:", [0, 32], ";position:relative;width:", [0, 28], "}\n.", [1], "leaf-body{background:linear-gradient(145deg,#81c784,#66bb6a);border-radius:0 50% 50% 50%;height:", [0, 28], ";-webkit-transform:rotate(-45deg);transform:rotate(-45deg);width:", [0, 28], "}\n.", [1], "star-icon{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "star-shape{background:linear-gradient(145deg,#ffe082,#ffd54f);border-radius:", [0, 6], ";height:", [0, 28], ";position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:", [0, 28], "}\n.", [1], "star-shape::before{background:#fff;border-radius:50%;content:\x22\x22;height:", [0, 8], ";left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg);width:", [0, 8], "}\n.", [1], "label-text{color:#333;font-size:", [0, 28], ";font-weight:500}\n.", [1], "nickname-input{background:#fff9e6;border:", [0, 2], " solid transparent;border-radius:", [0, 16], ";color:#333;font-size:", [0, 30], ";height:", [0, 80], ";padding:0 ", [0, 24], ";transition:all .3s}\n.", [1], "nickname-input:focus{background:#fff;border-color:#ffe082}\n.", [1], "placeholder{color:#ccc}\n.", [1], "edit-limit-hint{-webkit-align-items:center;align-items:center;background:#fff8eb;border-radius:", [0, 10], ";display:-webkit-flex;display:flex;gap:", [0, 6], ";-webkit-justify-content:center;justify-content:center;margin-top:", [0, 20], ";padding:", [0, 12], " ", [0, 20], "}\n.", [1], "limit-icon{font-size:", [0, 24], "}\n.", [1], "limit-text{color:#b8860b;font-size:", [0, 22], ";font-weight:400}\n.", [1], "edit-limit-exhausted{-webkit-align-items:center;align-items:center;background:#fff0f0;border-radius:", [0, 10], ";display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;margin-top:", [0, 20], ";padding:", [0, 12], " ", [0, 20], "}\n.", [1], "exhausted-text{color:#c0392b;font-size:", [0, 22], "}\n.", [1], "intro-input{background:#fff9e6;border:", [0, 2], " solid transparent;border-radius:", [0, 16], ";box-sizing:border-box;color:#333;font-size:", [0, 28], ";height:", [0, 160], ";padding:", [0, 20], " ", [0, 24], ";resize:none;transition:all .3s;width:100%}\n.", [1], "intro-input:focus{background:#fff;border-color:#ffe082}\n.", [1], "word-count{color:#ccc;font-size:", [0, 22], ";margin-top:", [0, 10], ";text-align:right}\n.", [1], "divider{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;padding:", [0, 24], " 0}\n.", [1], "divider-line{background:linear-gradient(90deg,transparent,#ffe082,transparent);-webkit-flex:1;flex:1;height:", [0, 1], "}\n.", [1], "divider-dot{-webkit-animation:dot-pulse 2s ease-in-out infinite;animation:dot-pulse 2s ease-in-out infinite;background:#ffe082;border-radius:50%;height:", [0, 8], ";margin:0 ", [0, 16], ";width:", [0, 8], "}\n@-webkit-keyframes dot-pulse{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}\n50%{opacity:.7;-webkit-transform:scale(1.3);transform:scale(1.3)}\n}@keyframes dot-pulse{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}\n50%{opacity:.7;-webkit-transform:scale(1.3);transform:scale(1.3)}\n}.", [1], "footer-decoration{bottom:", [0, 200], ";left:0;pointer-events:none;position:fixed;right:0}\n.", [1], "deco-flower{-webkit-animation:float 4s ease-in-out infinite;animation:float 4s ease-in-out infinite;border-radius:50% 50% 50% 50%/70% 70% 30% 30%;height:", [0, 24], ";opacity:.6;position:absolute;width:", [0, 24], "}\n.", [1], "deco-flower.", [1], "f1{-webkit-animation-delay:0s;animation-delay:0s;background:linear-gradient(135deg,#ffab91,#ff8a65);bottom:0;left:", [0, 60], "}\n.", [1], "deco-flower.", [1], "f2{-webkit-animation-delay:1s;animation-delay:1s;background:linear-gradient(135deg,#ce93d8,#ab47bc);bottom:", [0, 40], ";right:", [0, 80], ";-webkit-transform:rotate(30deg);transform:rotate(30deg)}\n.", [1], "deco-butterfly{-webkit-animation:flutter 2s ease-in-out infinite;animation:flutter 2s ease-in-out infinite;border-radius:50% 50% 0 50%;height:", [0, 24], ";opacity:.5;position:absolute;width:", [0, 20], "}\n.", [1], "deco-butterfly.", [1], "b1{-webkit-animation-delay:.5s;animation-delay:.5s;background:linear-gradient(135deg,#81d4fa,#4fc3f7);bottom:", [0, 60], ";left:", [0, 120], "}\n.", [1], "deco-butterfly.", [1], "b2{-webkit-animation-delay:1.5s;animation-delay:1.5s;background:linear-gradient(135deg,#f48fb1,#ec407a);bottom:0;right:", [0, 40], "}\n@-webkit-keyframes float{0%,100%{-webkit-transform:translateY(0) rotate(0deg);transform:translateY(0) rotate(0deg)}\n50%{-webkit-transform:translateY(", [0, -10], ") rotate(5deg);transform:translateY(", [0, -10], ") rotate(5deg)}\n}@keyframes float{0%,100%{-webkit-transform:translateY(0) rotate(0deg);transform:translateY(0) rotate(0deg)}\n50%{-webkit-transform:translateY(", [0, -10], ") rotate(5deg);transform:translateY(", [0, -10], ") rotate(5deg)}\n}@-webkit-keyframes flutter{0%,100%{-webkit-transform:translateY(0) rotate(-5deg);transform:translateY(0) rotate(-5deg)}\n50%{-webkit-transform:translateY(", [0, -6], ") rotate(5deg);transform:translateY(", [0, -6], ") rotate(5deg)}\n}@keyframes flutter{0%,100%{-webkit-transform:translateY(0) rotate(-5deg);transform:translateY(0) rotate(-5deg)}\n50%{-webkit-transform:translateY(", [0, -6], ") rotate(5deg);transform:translateY(", [0, -6], ") rotate(5deg)}\n}", ], undefined, {
        path: "./pages/edit-profile/edit-profile.wxss"
    });
}