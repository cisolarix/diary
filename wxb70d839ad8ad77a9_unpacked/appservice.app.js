var __wxAppData = __wxAppData || {};
var __wxRoute = __wxRoute || "";
var __wxRouteBegin = __wxRouteBegin || "";
var __wxAppCode__ = __wxAppCode__ || {};
var global = global || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};
var __wxAppCurrentFile__ = __wxAppCurrentFile__ || "";
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var __vd_version_info__ = __vd_version_info__ || {};
var __GWX_GLOBAL__ = __GWX_GLOBAL__ || {};
/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
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
                g = "$gwx";
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
if (__vd_version_info__.delayedGwx || true) $gwx();
if (__vd_version_info__.delayedGwx) __wxAppCode__['custom-tab-bar/index.wxml'] = [$gwx, './custom-tab-bar/index.wxml'];
else __wxAppCode__['custom-tab-bar/index.wxml'] = $gwx('./custom-tab-bar/index.wxml');;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/Arrayincludes.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(r, e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                n = t.length >>> 0;
            if (0 == n) return !1;
            for (var i, o, a = 0 | e, u = Math.max(0 <= a ? a : n - Math.abs(a), 0); u < n;) {
                if ((i = t[u]) === (o = r) || "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o)) return !0;
                u++
            }
            return !1
        }
    });
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/Arrayincludes.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/Objectentries.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    Object.entries || (Object.entries = function(e) {
        for (var r = Object.keys(e), t = r.length, n = new Array(t); t--;) n[t] = [r[t], e[r[t]]];
        return n
    });
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/Objectentries.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/Objectvalues.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    Object.values || (Object.values = function(e) {
        if (e !== Object(e)) throw new TypeError("Object.values called on a non-object");
        var t, r = [];
        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && r.push(e[t]);
        return r
    });
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/Objectvalues.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/arrayLikeToArray.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = new Array(a); e < a; e++) n[e] = r[e];
        return n
    }
    module.exports = _arrayLikeToArray;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/arrayLikeToArray.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/arrayWithHoles.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r
    }
    module.exports = _arrayWithHoles;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/arrayWithHoles.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/arrayWithoutHoles.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var arrayLikeToArray = require("./arrayLikeToArray");

    function _arrayWithoutHoles(r) {
        if (Array.isArray(r)) return arrayLikeToArray(r)
    }
    module.exports = _arrayWithoutHoles;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/arrayWithoutHoles.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/asyncToGenerator.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function asyncGeneratorStep(n, e, r, t, o, a, c) {
        try {
            var i = n[a](c),
                u = i.value
        } catch (n) {
            return void r(n)
        }
        i.done ? e(u) : Promise.resolve(u).then(t, o)
    }

    function _asyncToGenerator(n) {
        return function() {
            var e = this,
                r = arguments;
            return new Promise((function(t, o) {
                var a = n.apply(e, r);

                function c(n) {
                    asyncGeneratorStep(a, t, o, c, i, "next", n)
                }

                function i(n) {
                    asyncGeneratorStep(a, t, o, c, i, "throw", n)
                }
                c(void 0)
            }))
        }
    }
    module.exports = _asyncToGenerator;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/asyncToGenerator.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/createForOfIteratorHelper.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var unsupportedIterableToArray = require("./unsupportedIterableToArray");

    function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
            if (Array.isArray(r) || (t = unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
                t && (r = t);
                var n = 0,
                    o = function() {};
                return {
                    s: o,
                    n: function() {
                        return n >= r.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: r[n++]
                        }
                    },
                    e: function(r) {
                        throw r
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, u = !0,
            i = !1;
        return {
            s: function() {
                t = t.call(r)
            },
            n: function() {
                var r = t.next();
                return u = r.done, r
            },
            e: function(r) {
                i = !0, a = r
            },
            f: function() {
                try {
                    u || null == t.return || t.return()
                } finally {
                    if (i) throw a
                }
            }
        }
    }
    module.exports = _createForOfIteratorHelper;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/createForOfIteratorHelper.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/defineProperty.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var toPropertyKey = require("./toPropertyKey");

    function _defineProperty(e, r, t) {
        return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e
    }
    module.exports = _defineProperty;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/defineProperty.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/iterableToArray.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _iterableToArray(r) {
        if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r)
    }
    module.exports = _iterableToArray;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/iterableToArray.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/iterableToArrayLimit.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _iterableToArrayLimit(r, e) {
        var l = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != l) {
            var t, n, i, a, u = [],
                o = !0,
                f = !1;
            try {
                if (i = (l = l.call(r)).next, 0 === e) {
                    if (Object(l) !== l) return;
                    o = !1
                } else
                    for (; !(o = (t = i.call(l)).done) && (u.push(t.value), u.length !== e); o = !0);
            } catch (r) {
                f = !0, n = r
            } finally {
                try {
                    if (!o && null != l.return && (a = l.return(), Object(a) !== a)) return
                } finally {
                    if (f) throw n
                }
            }
            return u
        }
    }
    module.exports = _iterableToArrayLimit;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/iterableToArrayLimit.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/nonIterableRest.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    module.exports = _nonIterableRest;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/nonIterableRest.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/nonIterableSpread.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    module.exports = _nonIterableSpread;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/nonIterableSpread.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/objectSpread2.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var defineProperty = require("./defineProperty");

    function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter((function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            }))), t.push.apply(t, o)
        }
        return t
    }

    function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), !0).forEach((function(r) {
                defineProperty(e, r, t[r])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            }))
        }
        return e
    }
    module.exports = _objectSpread2;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/objectSpread2.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/regeneratorRuntime.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var t = require("./typeof");

    function r() {
        module.exports = r = function() {
            return e
        }, module.exports.__esModule = !0, module.exports.default = module.exports;
        var e = {},
            n = Object.prototype,
            o = n.hasOwnProperty,
            i = Object.defineProperty || function(t, r, e) {
                t[r] = e.value
            },
            a = "function" == typeof Symbol ? Symbol : {},
            c = a.iterator || "@@iterator",
            u = a.asyncIterator || "@@asyncIterator",
            l = a.toStringTag || "@@toStringTag";

        function h(t, r, e) {
            return Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[r]
        }
        try {
            h({}, "")
        } catch (t) {
            h = function(t, r, e) {
                return t[r] = e
            }
        }

        function f(t, r, e, n) {
            var o = r && r.prototype instanceof d ? r : d,
                a = Object.create(o.prototype),
                c = new k(n || []);
            return i(a, "_invoke", {
                value: E(t, e, c)
            }), a
        }

        function s(t, r, e) {
            try {
                return {
                    type: "normal",
                    arg: t.call(r, e)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        e.wrap = f;
        var p = {};

        function d() {}

        function v() {}

        function y() {}
        var g = {};
        h(g, c, (function() {
            return this
        }));
        var m = Object.getPrototypeOf,
            w = m && m(m(G([])));
        w && w !== n && o.call(w, c) && (g = w);
        var x = y.prototype = d.prototype = Object.create(g);

        function L(t) {
            ["next", "throw", "return"].forEach((function(r) {
                h(t, r, (function(t) {
                    return this._invoke(r, t)
                }))
            }))
        }

        function b(r, e) {
            function n(i, a, c, u) {
                var l = s(r[i], r, a);
                if ("throw" !== l.type) {
                    var h = l.arg,
                        f = h.value;
                    return f && "object" == t(f) && o.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                        n("next", t, c, u)
                    }), (function(t) {
                        n("throw", t, c, u)
                    })) : e.resolve(f).then((function(t) {
                        h.value = t, c(h)
                    }), (function(t) {
                        return n("throw", t, c, u)
                    }))
                }
                u(l.arg)
            }
            var a;
            i(this, "_invoke", {
                value: function(t, r) {
                    function o() {
                        return new e((function(e, o) {
                            n(t, r, e, o)
                        }))
                    }
                    return a = a ? a.then(o, o) : o()
                }
            })
        }

        function E(t, r, e) {
            var n = "suspendedStart";
            return function(o, i) {
                if ("executing" === n) throw new Error("Generator is already running");
                if ("completed" === n) {
                    if ("throw" === o) throw i;
                    return N()
                }
                for (e.method = o, e.arg = i;;) {
                    var a = e.delegate;
                    if (a) {
                        var c = _(a, e);
                        if (c) {
                            if (c === p) continue;
                            return c
                        }
                    }
                    if ("next" === e.method) e.sent = e._sent = e.arg;
                    else if ("throw" === e.method) {
                        if ("suspendedStart" === n) throw n = "completed", e.arg;
                        e.dispatchException(e.arg)
                    } else "return" === e.method && e.abrupt("return", e.arg);
                    n = "executing";
                    var u = s(t, r, e);
                    if ("normal" === u.type) {
                        if (n = e.done ? "completed" : "suspendedYield", u.arg === p) continue;
                        return {
                            value: u.arg,
                            done: e.done
                        }
                    }
                    "throw" === u.type && (n = "completed", e.method = "throw", e.arg = u.arg)
                }
            }
        }

        function _(t, r) {
            var e = r.method,
                n = t.iterator[e];
            if (void 0 === n) return r.delegate = null, "throw" === e && t.iterator.return && (r.method = "return", r.arg = void 0, _(t, r), "throw" === r.method) || "return" !== e && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + e + "' method")), p;
            var o = s(n, t.iterator, r.arg);
            if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, p;
            var i = o.arg;
            return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, p) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, p)
        }

        function O(t) {
            var r = {
                tryLoc: t[0]
            };
            1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
        }

        function j(t) {
            var r = t.completion || {};
            r.type = "normal", delete r.arg, t.completion = r
        }

        function k(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(O, this), this.reset(!0)
        }

        function G(t) {
            if (t) {
                var r = t[c];
                if (r) return r.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var e = -1,
                        n = function r() {
                            for (; ++e < t.length;)
                                if (o.call(t, e)) return r.value = t[e], r.done = !1, r;
                            return r.value = void 0, r.done = !0, r
                        };
                    return n.next = n
                }
            }
            return {
                next: N
            }
        }

        function N() {
            return {
                value: void 0,
                done: !0
            }
        }
        return v.prototype = y, i(x, "constructor", {
            value: y,
            configurable: !0
        }), i(y, "constructor", {
            value: v,
            configurable: !0
        }), v.displayName = h(y, l, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name))
        }, e.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, h(t, l, "GeneratorFunction")), t.prototype = Object.create(x), t
        }, e.awrap = function(t) {
            return {
                __await: t
            }
        }, L(b.prototype), h(b.prototype, u, (function() {
            return this
        })), e.AsyncIterator = b, e.async = function(t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(f(t, r, n, o), i);
            return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, L(x), h(x, l, "Generator"), h(x, c, (function() {
            return this
        })), h(x, "toString", (function() {
            return "[object Generator]"
        })), e.keys = function(t) {
            var r = Object(t),
                e = [];
            for (var n in r) e.push(n);
            return e.reverse(),
                function t() {
                    for (; e.length;) {
                        var n = e.pop();
                        if (n in r) return t.value = n, t.done = !1, t
                    }
                    return t.done = !0, t
                }
        }, e.values = G, k.prototype = {
            constructor: k,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(j), !t)
                    for (var r in this) "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var r = this;

                function e(e, n) {
                    return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), !!n
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var i = this.tryEntries[n],
                        a = i.completion;
                    if ("root" === i.tryLoc) return e("end");
                    if (i.tryLoc <= this.prev) {
                        var c = o.call(i, "catchLoc"),
                            u = o.call(i, "finallyLoc");
                        if (c && u) {
                            if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                        } else if (c) {
                            if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var i = n;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(a)
            },
            complete: function(t, r) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), p
            },
            finish: function(t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), p
                }
            },
            catch: function(t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.tryLoc === t) {
                        var n = e.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            j(e)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, r, e) {
                return this.delegate = {
                    iterator: G(t),
                    resultName: r,
                    nextLoc: e
                }, "next" === this.method && (this.arg = void 0), p
            }
        }, e
    }
    module.exports = r, module.exports.__esModule = !0, module.exports.default = module.exports;

}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/regeneratorRuntime.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/slicedToArray.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var arrayWithHoles = require("./arrayWithHoles"),
        iterableToArrayLimit = require("./iterableToArrayLimit"),
        unsupportedIterableToArray = require("./unsupportedIterableToArray"),
        nonIterableRest = require("./nonIterableRest");

    function _slicedToArray(r, e) {
        return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest()
    }
    module.exports = _slicedToArray;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/slicedToArray.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/toConsumableArray.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var arrayWithoutHoles = require("./arrayWithoutHoles"),
        iterableToArray = require("./iterableToArray"),
        unsupportedIterableToArray = require("./unsupportedIterableToArray"),
        nonIterableSpread = require("./nonIterableSpread");

    function _toConsumableArray(r) {
        return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread()
    }
    module.exports = _toConsumableArray;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/toConsumableArray.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/toPrimitive.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var _typeof = require("./typeof");

    function _toPrimitive(r, t) {
        if ("object" !== _typeof(r) || null === r) return r;
        var e = r[Symbol.toPrimitive];
        if (void 0 !== e) {
            var i = e.call(r, t || "default");
            if ("object" !== _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(r)
    }
    module.exports = _toPrimitive;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/toPrimitive.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/toPropertyKey.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var _typeof = require("./typeof"),
        toPrimitive = require("./toPrimitive");

    function _toPropertyKey(r) {
        var t = toPrimitive(r, "string");
        return "symbol" === _typeof(t) ? t : String(t)
    }
    module.exports = _toPropertyKey;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/toPropertyKey.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _typeof(o) {
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
        }, _typeof(o)
    }
    module.exports = _typeof;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/typeof.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/unsupportedIterableToArray.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var arrayLikeToArray = require("./arrayLikeToArray");

    function _unsupportedIterableToArray(r, e) {
        if (r) {
            if ("string" == typeof r) return arrayLikeToArray(r, e);
            var t = Object.prototype.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, e) : void 0
        }
    }
    module.exports = _unsupportedIterableToArray;
}, {
    isPage: false,
    isComponent: false,
    currentFile: '@babel/runtime/helpers/unsupportedIterableToArray.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("pages/calendar/calendar-simple.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Arrayincludes");
    var t = require("../../@babel/runtime/helpers/defineProperty"),
        e = require("../../@babel/runtime/helpers/toConsumableArray"),
        a = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
        r = require("../../@babel/runtime/helpers/asyncToGenerator");
    Page({
        data: {
            topBarStyle: "",
            friendList: [],
            expandedTexts: {},
            imageErrors: {},
            friendRefreshing: !1,
            searchKeyword: "",
            showFilterPanel: !1,
            filterStartDate: "",
            filterEndDate: "",
            filterSortDesc: !0,
            scrollTop: 0,
            showBackToTop: !1
        },
        onLoad: function() {
            this._initCapsulePosition(), this.loadTimeline()
        },
        onShow: function() {
            var t = this;
            "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
                selected: 1
            }), setTimeout((function() {
                return t.loadTimeline()
            }), 100)
        },
        loadTimeline: function() {
            var t = this;
            return r(a().mark((function e() {
                var r, i, o, s, c, l, u, d;
                return a().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            r = wx.getStorageSync("diaries") || {}, i = Object.keys(r).filter((function(t) {
                                var e = r[t];
                                return e && (e.content && e.content.trim() || e.imagePaths && e.imagePaths.length > 0)
                            })).sort((function(t, e) {
                                return e.localeCompare(t)
                            })), o = [], s = n(i), e.prev = 4, s.s();
                        case 6:
                            if ((c = s.n()).done) {
                                e.next = 20;
                                break
                            }
                            if (l = c.value, u = r[l], !((d = t._buildItem(l, u)).images.length > 0)) {
                                e.next = 16;
                                break
                            }
                            return e.next = 13, t._convertImages(d.images);
                        case 13:
                            d.displayImages = e.sent, e.next = 17;
                            break;
                        case 16:
                            d.displayImages = [];
                        case 17:
                            o.push(d);
                        case 18:
                            e.next = 6;
                            break;
                        case 20:
                            e.next = 25;
                            break;
                        case 22:
                            e.prev = 22, e.t0 = e.catch(4), s.e(e.t0);
                        case 25:
                            return e.prev = 25, s.f(), e.finish(25);
                        case 28:
                            t.setData({
                                friendList: o
                            });
                        case 29:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [4, 22, 25, 28]
                ])
            })))()
        },
        _buildItem: function(t, a) {
            var n = a.content || "",
                r = a.imagePaths || [],
                i = r.length,
                o = "";
            return 1 === i ? o = "single" : 2 === i ? o = "row2" : 3 === i ? o = "row3" : 4 === i ? o = "grid22" : i >= 5 && (o = "gridN"), {
                dateStr: t,
                content: n,
                images: e(r),
                displayImages: [],
                location: a.location || "",
                imgCount: i,
                gridType: o,
                dateLabel: this._formatDate(t),
                timeLabel: this._formatTime(a.updateTime)
            }
        },
        _convertImages: function(t) {
            return r(a().mark((function e() {
                var n, r, i;
                return a().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (0 !== (n = t.filter((function(t) {
                                    return t && t.startsWith("cloud://")
                                }))).length) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", t);
                        case 3:
                            return e.prev = 3, e.next = 6, wx.cloud.getTempFileURL({
                                fileList: n
                            });
                        case 6:
                            return r = e.sent, i = {}, (r.fileList || []).forEach((function(t) {
                                t.fileID && t.tempFileURL && (i[t.fileID] = t.tempFileURL)
                            })), e.abrupt("return", t.map((function(t) {
                                return i[t] || t
                            })));
                        case 12:
                            return e.prev = 12, e.t0 = e.catch(3), console.error("图片转换失败:", e.t0), e.abrupt("return", t);
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [3, 12]
                ])
            })))()
        },
        _formatDate: function(t) {
            var e = t.split("-");
            return "".concat(parseInt(e[1]), "月").concat(parseInt(e[2]), "日")
        },
        _formatTime: function(t) {
            if (!t) return "";
            var e = new Date(t);
            if (isNaN(e.getTime())) return "";
            var a = String(e.getHours()).padStart(2, "0"),
                n = String(e.getMinutes()).padStart(2, "0");
            return "".concat(a, ":").concat(n)
        },
        onPullDownRefresh: function() {
            var t = this;
            return r(a().mark((function e() {
                return a().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t.setData({
                                friendRefreshing: !0
                            }), e.next = 3, t.loadTimeline();
                        case 3:
                            t.setData({
                                friendRefreshing: !1
                            }), wx.stopPullDownRefresh();
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))()
        },
        _initCapsulePosition: function() {
            var t = wx.getSystemInfoSync(),
                e = wx.getMenuButtonBoundingClientRect(),
                a = 2 * (e.top - t.statusBarHeight) + e.height,
                n = "height:".concat(a, "px;padding-top:").concat(t.statusBarHeight, "px");
            this.setData({
                topBarStyle: n
            })
        },
        onToggleText: function(e) {
            var a = e.currentTarget.dataset.date,
                n = this.data.expandedTexts[a];
            this.setData(t({}, "expandedTexts.".concat(a), !n))
        },
        onPreviewFriendImage: function(t) {
            var e = t.currentTarget.dataset,
                a = e.idx,
                n = e.date,
                r = this.data.friendList.find((function(t) {
                    return t.dateStr === n
                }));
            r && wx.previewImage({
                current: r.displayImages[a],
                urls: r.displayImages
            })
        },
        onImageError: function(t) {
            console.error("图片加载失败:", t)
        },
        onFriendScroll: function(t) {
            var e = t.detail.scrollTop;
            this.setData({
                showBackToTop: e > 600
            })
        },
        onBackToTop: function() {
            this.setData({
                scrollTop: 0
            })
        },
        onSearchInput: function(t) {
            var e = t.detail.value.trim().toLowerCase();
            this.setData({
                searchKeyword: e
            }), this._applyFilter()
        },
        clearSearch: function() {
            this.setData({
                searchKeyword: ""
            }), this._applyFilter()
        },
        _applyFilter: function() {
            var t = this.data.searchKeyword;
            if (t) {
                var e, a = wx.getStorageSync("diaries") || {},
                    r = Object.keys(a).filter((function(e) {
                        var n = a[e];
                        return n && (n.content && n.content.toLowerCase().includes(t) || e.includes(t))
                    })).sort((function(t, e) {
                        return e.localeCompare(t)
                    })),
                    i = [],
                    o = n(r);
                try {
                    for (o.s(); !(e = o.n()).done;) {
                        var s = e.value,
                            c = a[s],
                            l = this._buildItem(s, c);
                        l.images.length > 0 && (l.displayImages = l.images), i.push(l)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                this.setData({
                    friendList: i
                })
            } else this.loadTimeline()
        },
        onToggleFilter: function() {
            this.setData({
                showFilterPanel: !this.data.showFilterPanel
            })
        },
        onFilterStart: function(t) {
            this.setData({
                filterStartDate: t.detail.value
            })
        },
        onFilterEnd: function(t) {
            this.setData({
                filterEndDate: t.detail.value
            })
        },
        onToggleSort: function() {
            this.setData({
                filterSortDesc: !this.data.filterSortDesc
            }), this.loadTimeline()
        },
        applyFilter: function() {
            this.setData({
                showFilterPanel: !1
            }), this.loadTimeline()
        },
        resetFilter: function() {
            this.setData({
                filterStartDate: "",
                filterEndDate: "",
                showFilterPanel: !1
            }), this.loadTimeline()
        },
        onMomentMore: function(t) {
            var e = t.currentTarget.dataset.date;
            this.setData({
                showMomentAction: !0,
                momentActionDate: e
            })
        },
        onCloseMomentAction: function() {
            this.setData({
                showMomentAction: !1
            })
        },
        onEditMoment: function() {
            var t = this.data.momentActionDate;
            this.setData({
                showMomentAction: !1
            }), wx.navigateTo({
                url: "/pages/write/write?date=".concat(t, "&mode=edit")
            })
        },
        onDeleteMoment: function() {
            var t = this,
                e = this.data.momentActionDate;
            this.setData({
                showMomentAction: !1
            }), wx.showModal({
                title: "确认删除",
                content: "删除后无法恢复，确定删除这条日记吗？",
                confirmColor: "#FF6B6B",
                success: function(a) {
                    if (a.confirm) {
                        var n = wx.getStorageSync("diaries") || {};
                        delete n[e], wx.setStorageSync("diaries", n), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), t.loadTimeline()
                    }
                }
            })
        },
        onShareMoment: function() {
            this.setData({
                showMomentAction: !1
            }), wx.showToast({
                title: "分享功能开发中",
                icon: "none"
            })
        },
        onWriteDiary: function() {
            var t = new Date,
                e = "".concat(t.getFullYear(), "-").concat(String(t.getMonth() + 1).padStart(2, "0"), "-").concat(String(t.getDate()).padStart(2, "0"));
            wx.navigateTo({
                url: "/pages/write/write?date=".concat(e)
            })
        },
        onTapMoment: function(t) {
            var e = t.currentTarget.dataset.date;
            wx.navigateTo({
                url: "/pages/diary-detail/diary-detail?date=".concat(e)
            })
        }
    });
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'pages/calendar/calendar-simple.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/app-lock.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    module.exports = {
        syncFromCloud: function() {
            return wx.getStorageSync("appLockPassword") ? Promise.resolve() : wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getAppLock"
                }
            }).then((function(e) {
                if (e.result && e.result.success && e.result.data && e.result.data.password) {
                    var o = e.result.data;
                    wx.setStorageSync("appLockPassword", o.password), o.question && wx.setStorageSync("appLockQuestion", {
                        question: o.question,
                        answer: o.answer
                    }), wx.setStorageSync("appLockEnabled", o.enabled)
                }
            })).catch((function(e) {}))
        },
        checkLock: function(e) {
            var o = wx.getStorageSync("appLockEnabled"),
                t = wx.getStorageSync("appLockPassword");
            o && t && !e.isUnlocked && wx.redirectTo({
                url: "/pages/unlock/unlock"
            })
        }
    };
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'utils/app-lock.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/cloud-images.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = "cloud://cloud1-0g3jtuimd88a4af5.636c-cloud1-0g3jtuimd88a4af5-1413231909";
    module.exports = {
        shareImage: "".concat(t, "/voice/fengmiantu 20.27.41.jpg"),
        get: function(t) {
            return this[t] || []
        },
        series4: ["".concat(t, "/toutu/1/微信图片_20260406144316_114_38.jpg"), "".concat(t, "/toutu/1/微信图片_20260406144317_115_38.jpg"), "".concat(t, "/toutu/1/微信图片_20260406144318_116_38.jpg"), "".concat(t, "/toutu/1/微信图片_20260406144319_117_38.jpg"), "".concat(t, "/toutu/1/微信图片_20260406144320_118_38.jpg"), "".concat(t, "/toutu/1/微信图片_20260406144352_120_38.png"), "".concat(t, "/toutu/1/微信图片_20260406144315_113_38.png")],
        series1: ["".concat(t, "/toutu/2/fengjing1.jpg"), "".concat(t, "/toutu/2/fengjing2.jpg"), "".concat(t, "/toutu/2/fengjing3.jpg"), "".concat(t, "/toutu/2/fengjing4.jpg"), "".concat(t, "/toutu/2/fengjing5.jpg"), "".concat(t, "/toutu/2/fengjing6.jpg"), "".concat(t, "/toutu/2/fengjing7.jpg")],
        series3: ["".concat(t, "/toutu/3/wenli1.jpg"), "".concat(t, "/toutu/3/wenli2.jpg"), "".concat(t, "/toutu/3/wenli3.jpg"), "".concat(t, "/toutu/3/wenli4.jpg"), "".concat(t, "/toutu/3/wenli5.jpg"), "".concat(t, "/toutu/3/wenli6.jpg"), "".concat(t, "/toutu/3/wenli7.jpg")]
    };
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'utils/cloud-images.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/cloud.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../@babel/runtime/helpers/objectSpread2");

    function t(t, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = o.timeout,
            c = void 0 === a ? 8e3 : a,
            i = o.showLoading,
            r = void 0 !== i && i;
        return r && wx.showLoading({
            title: "加载中...",
            mask: !0
        }), new Promise((function(o, a) {
            var i = setTimeout((function() {
                r && wx.hideLoading(), a(new Error("请求超时 (".concat(c, "ms): ").concat(t)))
            }), c);
            wx.cloud.callFunction({
                name: "diary",
                data: e({
                    action: t
                }, n)
            }).then((function(e) {
                clearTimeout(i), r && wx.hideLoading(), o(e)
            })).catch((function(e) {
                clearTimeout(i), r && wx.hideLoading(), a(e)
            }))
        }))
    }

    function n(e, n) {
        var o = Math.max(1, parseInt(e) || 0);
        return t("addPoints", {
            points: -o,
            reason: n || "deduct"
        }, {
            timeout: 5e3
        }).then((function(e) {
            var t = e.result || {};
            return t.success ? (wx.removeStorageSync("checkin_cache_date"), wx.removeStorageSync("checkin_cache_data"), wx.setStorageSync("points", t.totalPoints), {
                success: !0,
                message: "",
                deducted: o,
                newTotal: t.totalPoints
            }) : {
                success: !1,
                message: t.error || "积分操作失败",
                deducted: 0,
                newTotal: 0
            }
        })).catch((function(e) {
            return {
                success: !1,
                message: "网络异常",
                deducted: 0,
                newTotal: 0
            }
        }))
    }

    function o(e, t, n) {
        wx.hideLoading(), wx.hideToast(), setTimeout((function() {
            wx.showModal({
                title: "🌟 积分不太够哦",
                content: "「" + e + "」需要 " + t + " 积分\n你现在有 " + n + " 积分，还差一点点～",
                showCancel: !1,
                confirmText: "我知道了",
                confirmColor: "#FF8C42"
            })
        }), 300)
    }
    module.exports = {
        callAction: t,
        deductPoints: n,
        requirePoints: function(e, t, a) {
            var c = Math.max(1, parseInt(e) || 0),
                i = a || "此操作",
                r = parseInt(wx.getStorageSync("points")) || 0;
            return r < c ? (o(i, c, r), Promise.resolve({
                ok: !1,
                newTotal: r
            })) : n(c, t).then((function(e) {
                if (!e.success) {
                    wx.hideLoading();
                    var t = e.newTotal || 0;
                    return o(i, c, t), {
                        ok: !1,
                        newTotal: t
                    }
                }
                return {
                    ok: !0,
                    newTotal: e.newTotal
                }
            }))
        }
    };
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'utils/cloud.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/util.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    module.exports = {
        formatDate: function(t) {
            var a = t.getFullYear(),
                r = String(t.getMonth() + 1).padStart(2, "0"),
                e = String(t.getDate()).padStart(2, "0");
            return "".concat(a, "-").concat(r, "-").concat(e)
        }
    };
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'utils/util.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("app.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("@babel/runtime/helpers/objectSpread2");
    App({
        onLaunch: function(e) {
            var t = this;
            wx.cloud && wx.cloud.init({
                env: "cloud1-0g3jtuimd88a4af5",
                traceUser: !1
            }), wx.onNeedPrivacyAuthorization && wx.onNeedPrivacyAuthorization((function(e) {
                t._privacyResolve = e, t.globalData.needPrivacyAuth = !0
            })), this._handleInviteFromLaunch(e), setTimeout((function() {
                t.checkForUpdate()
            }), 3e3), this.globalData.isUnlocked = !1, this.globalData.unlockTime = 0;
            var a = this.syncAppLockFromCloud().then((function() {
                return t.checkAppLock()
            })).catch((function() {
                return t.checkAppLock()
            }));
            return this.globalData.initPromise = this._initAppData(), Promise.all([a, this.globalData.initPromise])
        },
        onShow: function(e) {
            (e && e.query && this._handleInviteFromLaunch(e), this.globalData.skipLock) ? this.globalData.skipLock = !1: this.globalData.lastHideTime > 0 ? (this.globalData.lastHideTime = 0, this.globalData.isUnlocked = !1, this.globalData.unlockTime = 0, this.checkAppLock()) : this.checkAppLock()
        },
        onHide: function() {
            this.globalData.lastHideTime = Date.now()
        },
        syncAppLockFromCloud: function() {
            return wx.getStorageSync("appLockPassword") ? Promise.resolve() : wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getAppLock"
                }
            }).then((function(e) {
                if (e.result && e.result.success && e.result.data && e.result.data.password) {
                    var t = e.result.data;
                    wx.setStorageSync("appLockPassword", t.password), t.question && wx.setStorageSync("appLockQuestion", {
                        question: t.question,
                        answer: t.answer
                    }), wx.setStorageSync("appLockEnabled", t.enabled)
                }
            })).catch((function(e) {}))
        },
        syncUserProfileFromCloud: function() {
            var t = wx.getStorageSync("userInfo") || {};
            return t.nickName && t.avatarUrl ? Promise.resolve() : wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getClientInfo"
                }
            }).then((function(a) {
                if (a.result && a.result.success && a.result.data) {
                    var n = a.result.data;
                    if (n.nickName || n.avatarUrl) {
                        var i = e(e({}, t), {}, {
                            nickName: n.nickName || "",
                            avatarUrl: n.avatarUrl || ""
                        });
                        wx.setStorageSync("userInfo", i)
                    }
                }
            })).catch((function(e) {}))
        },
        _initAppData: function() {
            var e = this;
            return Promise.all([this._syncDiariesIfNeeded(), this.syncUserProfileFromCloud(), this._syncCheckinIfNeeded(), this._syncUserBgIfNeeded()]).then((function() {
                e.globalData.dataReady = !0
            }))
        },
        _syncDiariesIfNeeded: function() {
            var e = this,
                t = wx.getStorageSync("diaries") || {};
            return Object.keys(t).length > 0 ? (this.syncDiariesFromCloud(), Promise.resolve()) : wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getDiaries",
                    lastSyncTime: 0
                }
            }).then((function(t) {
                if (t.result && t.result.success) {
                    var a = t.result.data || {},
                        n = Object.keys(a);
                    if (0 !== n.length) {
                        var i = {};
                        n.forEach((function(e) {
                            var t = a[e];
                            t && (t.content || t.imagePaths && t.imagePaths.length > 0) && (i[e] = t)
                        })), wx.setStorageSync("diaries", i), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), t.result.serverTime && wx.setStorageSync("lastDiaryServerTime", t.result.serverTime), e.globalData.lastDiarySyncTime = Date.now()
                    }
                }
            })).catch((function() {}))
        },
        _syncCheckinIfNeeded: function() {
            var e = this,
                t = wx.getStorageSync("points");
            return void 0 !== t && "" !== t && parseInt(t) > 0 ? Promise.resolve() : wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getCheckinStatus"
                }
            }).then((function(t) {
                if (t.result && t.result.success && t.result.data) {
                    var a = t.result.data;
                    wx.setStorageSync("points", a.totalPoints || 0);
                    var n = e.formatDate(new Date);
                    wx.setStorageSync("checkin_cache_date", n), wx.setStorageSync("checkin_cache_data", a)
                }
            })).catch((function() {}))
        },
        _syncUserBgIfNeeded: function() {
            return wx.getStorageSync("userBgSetting") ? Promise.resolve() : wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getUserBg"
                }
            }).then((function(e) {
                if (e.result && e.result.success) {
                    var t = e.result.bgUrl || "";
                    t && wx.setStorageSync("userBgSetting", t)
                }
            })).catch((function() {}))
        },
        checkAppLock: function() {
            var e = wx.getStorageSync("appLockEnabled"),
                t = wx.getStorageSync("appLockPassword");
            e && t && !this.globalData.isUnlocked && wx.redirectTo({
                url: "/pages/unlock/unlock"
            })
        },
        setUnlocked: function() {
            this.globalData.isUnlocked = !0, this.globalData.unlockTime = Date.now()
        },
        skipNextLockCheck: function() {
            this.globalData.skipLock = !0
        },
        resetUnlockStatus: function() {
            this.globalData.isUnlocked = !1
        },
        syncDiariesFromCloud: function() {
            var t = this;
            if (!(this.globalData.lastDiarySyncTime && Date.now() - this.globalData.lastDiarySyncTime < 3e5)) {
                var a = wx.getStorageSync("lastDiaryServerTime") || 0;
                wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "getDiaries",
                        lastSyncTime: a
                    }
                }).then((function(a) {
                    if (a.result && a.result.success) {
                        var n = a.result.data || {},
                            i = Object.keys(n);
                        if (a.result.isIncremental && 0 === i.length) t.globalData.lastDiarySyncTime = Date.now();
                        else if (0 !== i.length) {
                            var c = wx.getStorageSync("diaries") || {},
                                o = Object.assign({}, c);
                            i.forEach((function(t) {
                                var a = n[t];
                                a && (a.content || a.imagePaths && a.imagePaths.length > 0) && (o[t] = e(e({}, o[t]), a))
                            })), wx.setStorageSync("diaries", o), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), a.result.serverTime && wx.setStorageSync("lastDiaryServerTime", a.result.serverTime), t.globalData.lastDiarySyncTime = Date.now()
                        }
                    }
                })).catch((function() {}))
            }
        },
        formatDate: function(e) {
            var t = e.getFullYear(),
                a = String(e.getMonth() + 1).padStart(2, "0"),
                n = String(e.getDate()).padStart(2, "0");
            return "".concat(t, "-").concat(a, "-").concat(n)
        },
        checkForUpdate: function() {
            var e = wx.getStorageSync("_force_update_shown_"),
                t = wx.getUpdateManager();
            t.onCheckForUpdate((function(t) {
                t.hasUpdate || e && wx.removeStorageSync("_force_update_shown_")
            })), t.onUpdateReady((function() {
                wx.getStorageSync("_force_update_shown_");
                wx.showModal({
                    showCancel: !1,
                    confirmText: "立即重启更新",
                    confirmColor: "#FF8C42",
                    title: "🔄 发现重要更新",
                    content: "检测到新版本已就绪，为了确保功能正常使用，请点击下方按钮完成更新。",
                    success: function() {
                        wx.setStorageSync("_force_update_shown_", !0), t.applyUpdate()
                    }
                })
            })), t.onUpdateFailed((function() {}))
        },
        _handleInviteFromLaunch: function(e) {
            var t = this;
            if (!this.globalData._inviteProcessing) {
                var a = "";
                if (e && e.query && e.query.inviterOpenId) a = e.query.inviterOpenId;
                else if ("function" == typeof wx.getEnterOptionsSync) try {
                    var n = wx.getEnterOptionsSync();
                    n.query && n.query.inviterOpenId && (a = n.query.inviterOpenId)
                } catch (e) {}
                if (a) wx.getStorageSync("processed_invite_" + a) || (wx.setStorageSync("processed_invite_" + a, !0), this.globalData._inviteProcessing = !0, wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "handleNewInvitee",
                        inviterOpenId: a
                    }
                }).then((function(e) {
                    t.globalData._inviteCloudResult = e.result || null, e.result.success && !e.result.alreadyInvited && e.result.isNewUser && (wx.removeStorageSync("checkin_cache_date"), wx.removeStorageSync("checkin_cache_data"), wx.removeStorageSync("integralData"), setTimeout((function() {
                        wx.showToast({
                            title: e.result.msg,
                            icon: "none",
                            duration: 3e3
                        })
                    }), 1500))
                })).catch((function(e) {})).finally((function() {
                    t.globalData._inviteProcessing = !1
                })))
            }
        },
        checkHasDiary: function() {
            var e = wx.getStorageSync("diaries") || {};
            return Object.keys(e).length > 0
        },
        globalData: {
            selectedDate: null,
            isUnlocked: !1,
            unlockTime: 0,
            lastHideTime: 0,
            skipLock: !1,
            lastDiarySyncTime: 0,
            needPrivacyAuth: !1,
            dataReady: !1
        }
    });
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'app.js'
});
require("app.js");;
__wxRoute = "custom-tab-bar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "custom-tab-bar/index.js";
define("custom-tab-bar/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Component({
        data: {
            selected: 0
        },
        lifetimes: {
            attached: function() {
                var e = getCurrentPages(),
                    t = e[e.length - 1];
                if (t) {
                    var a = {
                        "pages/index/index": 0,
                        "pages/calendar/calendar": 1,
                        "pages/holiday/holiday": 2,
                        "pages/profile/profile": 3
                    }[t.route];
                    void 0 !== a && this.setData({
                        selected: a
                    })
                }
            }
        },
        methods: {
            switchTab: function(e) {
                var t = e.currentTarget.dataset,
                    a = t.index,
                    s = t.path;
                this.setData({
                    selected: Number(a)
                }), wx.switchTab({
                    url: s
                })
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'custom-tab-bar/index.js'
});
require("custom-tab-bar/index.js");