var __wxAppData = __wxAppData || {};
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
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var __vd_version_info__ = __vd_version_info__ || {};
var __GWX_GLOBAL__ = __GWX_GLOBAL__ || {};
if (this && this.__g === undefined) Object.defineProperty(this, "__g", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: function() {
        function D(e, t) {
            if (typeof t != "undefined") e.children.push(t)
        }

        function S(e) {
            if (typeof e != "undefined") return {
                tag: "virtual",
                wxKey: e,
                children: []
            };
            return {
                tag: "virtual",
                children: []
            }
        }

        function v(e) {
            return {
                tag: "wx-" + e,
                attr: {},
                children: [],
                n: [],
                raw: {},
                generics: {}
            }
        }

        function e(e, t) {
            t && e.properities.push(t)
        }

        function t(e, t, r) {
            return typeof e[r] != "undefined" ? e[r] : t[r]
        }

        function u(e) {
            console.warn("WXMLRT_" + g + ":" + e)
        }

        function r(e, t) {
            u(t + ":-1:-1:-1: Template `" + e + "` is being called recursively, will be stop.")
        }
        var s = console.warn;
        var n = console.log;

        function o() {
            function e() {}
            e.prototype = {
                hn: function(e, t) {
                    if (typeof e == "object") {
                        var r = 0;
                        var n = false,
                            o = false;
                        for (var a in e) {
                            n = n | a === "__value__";
                            o = o | a === "__wxspec__";
                            r++;
                            if (r > 2) break
                        }
                        return r == 2 && n && o && (t || e.__wxspec__ !== "m" || this.hn(e.__value__) === "h") ? "h" : "n"
                    }
                    return "n"
                },
                nh: function(e, t) {
                    return {
                        __value__: e,
                        __wxspec__: t ? t : true
                    }
                },
                rv: function(e) {
                    return this.hn(e, true) === "n" ? e : this.rv(e.__value__)
                },
                hm: function(e) {
                    if (typeof e == "object") {
                        var t = 0;
                        var r = false,
                            n = false;
                        for (var o in e) {
                            r = r | o === "__value__";
                            n = n | o === "__wxspec__";
                            t++;
                            if (t > 2) break
                        }
                        return t == 2 && r && n && (e.__wxspec__ === "m" || this.hm(e.__value__))
                    }
                    return false
                }
            };
            return new e
        }
        var A = o();

        function T(e) {
            var t = e.split("\n " + " " + " " + " ");
            for (var r = 0; r < t.length; ++r) {
                if (0 == r) continue;
                if (")" === t[r][t[r].length - 1]) t[r] = t[r].replace(/\s\(.*\)$/, "");
                else t[r] = "at anonymous function"
            }
            return t.join("\n " + " " + " " + " ")
        }

        function a(M) {
            function m(e, t, r, n, o) {
                var a = false;
                var i = e[0][1];
                var p, u, l, f, v, c;
                switch (i) {
                    case "?:":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? x(e[2], t, r, n, o, a) : x(e[3], t, r, n, o, a);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "&&":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? x(e[2], t, r, n, o, a) : A.rv(p);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "||":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? A.rv(p) : x(e[2], t, r, n, o, a);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "+":
                    case "*":
                    case "/":
                    case "%":
                    case "|":
                    case "^":
                    case "&":
                    case "===":
                    case "==":
                    case "!=":
                    case "!==":
                    case ">=":
                    case "<=":
                    case ">":
                    case "<":
                    case "<<":
                    case ">>":
                        p = x(e[1], t, r, n, o, a);
                        u = x(e[2], t, r, n, o, a);
                        l = M && (A.hn(p) === "h" || A.hn(u) === "h");
                        switch (i) {
                            case "+":
                                f = A.rv(p) + A.rv(u);
                                break;
                            case "*":
                                f = A.rv(p) * A.rv(u);
                                break;
                            case "/":
                                f = A.rv(p) / A.rv(u);
                                break;
                            case "%":
                                f = A.rv(p) % A.rv(u);
                                break;
                            case "|":
                                f = A.rv(p) | A.rv(u);
                                break;
                            case "^":
                                f = A.rv(p) ^ A.rv(u);
                                break;
                            case "&":
                                f = A.rv(p) & A.rv(u);
                                break;
                            case "===":
                                f = A.rv(p) === A.rv(u);
                                break;
                            case "==":
                                f = A.rv(p) == A.rv(u);
                                break;
                            case "!=":
                                f = A.rv(p) != A.rv(u);
                                break;
                            case "!==":
                                f = A.rv(p) !== A.rv(u);
                                break;
                            case ">=":
                                f = A.rv(p) >= A.rv(u);
                                break;
                            case "<=":
                                f = A.rv(p) <= A.rv(u);
                                break;
                            case ">":
                                f = A.rv(p) > A.rv(u);
                                break;
                            case "<":
                                f = A.rv(p) < A.rv(u);
                                break;
                            case "<<":
                                f = A.rv(p) << A.rv(u);
                                break;
                            case ">>":
                                f = A.rv(p) >> A.rv(u);
                                break;
                            default:
                                break
                        }
                        return l ? A.nh(f, "c") : f;
                        break;
                    case "-":
                        p = e.length === 3 ? x(e[1], t, r, n, o, a) : 0;
                        u = e.length === 3 ? x(e[2], t, r, n, o, a) : x(e[1], t, r, n, o, a);
                        l = M && (A.hn(p) === "h" || A.hn(u) === "h");
                        f = l ? A.rv(p) - A.rv(u) : p - u;
                        return l ? A.nh(f, "c") : f;
                        break;
                    case "!":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) == "h";
                        f = !A.rv(p);
                        return l ? A.nh(f, "c") : f;
                    case "~":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) == "h";
                        f = ~A.rv(p);
                        return l ? A.nh(f, "c") : f;
                    default:
                        s("unrecognized op" + i)
                }
            }

            function x(e, t, r, n, o, a) {
                var i = e[0];
                var p = false;
                if (typeof a !== "undefined") o.ap = a;
                if (typeof i === "object") {
                    var u = i[0];
                    var l, f, v, c, s, y, b, d, h, _, g;
                    switch (u) {
                        case 2:
                            return m(e, t, r, n, o);
                            break;
                        case 4:
                            return x(e[1], t, r, n, o, p);
                            break;
                        case 5:
                            switch (e.length) {
                                case 2:
                                    l = x(e[1], t, r, n, o, p);
                                    return M ? [l] : [A.rv(l)];
                                    return [l];
                                    break;
                                case 1:
                                    return [];
                                    break;
                                default:
                                    l = x(e[1], t, r, n, o, p);
                                    v = x(e[2], t, r, n, o, p);
                                    l.push(M ? v : A.rv(v));
                                    return l;
                                    break
                            }
                            break;
                        case 6:
                            l = x(e[1], t, r, n, o);
                            var w = o.ap;
                            h = A.hn(l) === "h";
                            f = h ? A.rv(l) : l;
                            o.is_affected |= h;
                            if (M) {
                                if (f === null || typeof f === "undefined") {
                                    return h ? A.nh(undefined, "e") : undefined
                                }
                                v = x(e[2], t, r, n, o, p);
                                _ = A.hn(v) === "h";
                                c = _ ? A.rv(v) : v;
                                o.ap = w;
                                o.is_affected |= _;
                                if (c === null || typeof c === "undefined" || c === "__proto__" || c === "prototype" || c === "caller") {
                                    return h || _ ? A.nh(undefined, "e") : undefined
                                }
                                y = f[c];
                                if (typeof y === "function" && !w) y = undefined;
                                g = A.hn(y) === "h";
                                o.is_affected |= g;
                                return h || _ ? g ? y : A.nh(y, "e") : y
                            } else {
                                if (f === null || typeof f === "undefined") {
                                    return undefined
                                }
                                v = x(e[2], t, r, n, o, p);
                                _ = A.hn(v) === "h";
                                c = _ ? A.rv(v) : v;
                                o.ap = w;
                                o.is_affected |= _;
                                if (c === null || typeof c === "undefined" || c === "__proto__" || c === "prototype" || c === "caller") {
                                    return undefined
                                }
                                y = f[c];
                                if (typeof y === "function" && !w) y = undefined;
                                g = A.hn(y) === "h";
                                o.is_affected |= g;
                                return g ? A.rv(y) : y
                            }
                        case 7:
                            switch (e[1][0]) {
                                case 11:
                                    o.is_affected |= A.hn(n) === "h";
                                    return n;
                                case 3:
                                    b = A.rv(r);
                                    d = A.rv(t);
                                    v = e[1][1];
                                    if (n && n.f && n.f.hasOwnProperty(v)) {
                                        l = n.f;
                                        o.ap = true
                                    } else {
                                        l = b && b.hasOwnProperty(v) ? r : d && d.hasOwnProperty(v) ? t : undefined
                                    }
                                    if (M) {
                                        if (l) {
                                            h = A.hn(l) === "h";
                                            f = h ? A.rv(l) : l;
                                            y = f[v];
                                            g = A.hn(y) === "h";
                                            o.is_affected |= h || g;
                                            y = h && !g ? A.nh(y, "e") : y;
                                            return y
                                        }
                                    } else {
                                        if (l) {
                                            h = A.hn(l) === "h";
                                            f = h ? A.rv(l) : l;
                                            y = f[v];
                                            g = A.hn(y) === "h";
                                            o.is_affected |= h || g;
                                            return A.rv(y)
                                        }
                                    }
                                    return undefined
                            }
                            break;
                        case 8:
                            l = {};
                            l[e[1]] = x(e[2], t, r, n, o, p);
                            return l;
                            break;
                        case 9:
                            l = x(e[1], t, r, n, o, p);
                            v = x(e[2], t, r, n, o, p);

                            function O(e, t, r) {
                                var n, o;
                                h = A.hn(e) === "h";
                                _ = A.hn(t) === "h";
                                f = A.rv(e);
                                c = A.rv(t);
                                for (var a in c) {
                                    if (r || !f.hasOwnProperty(a)) {
                                        f[a] = M ? _ ? A.nh(c[a], "e") : c[a] : A.rv(c[a])
                                    }
                                }
                                return e
                            }
                            var s = l;
                            var j = true;
                            if (typeof e[1][0] === "object" && e[1][0][0] === 10) {
                                l = v;
                                v = s;
                                j = false
                            }
                            if (typeof e[1][0] === "object" && e[1][0][0] === 10) {
                                var P = {};
                                return O(O(P, l, j), v, j)
                            } else return O(l, v, j);
                            break;
                        case 10:
                            l = x(e[1], t, r, n, o, p);
                            l = M ? l : A.rv(l);
                            return l;
                            break;
                        case 12:
                            var P;
                            l = x(e[1], t, r, n, o);
                            if (!o.ap) {
                                return M && A.hn(l) === "h" ? A.nh(P, "f") : P
                            }
                            var w = o.ap;
                            v = x(e[2], t, r, n, o, p);
                            o.ap = w;
                            h = A.hn(l) === "h";
                            _ = N(v);
                            f = A.rv(l);
                            c = A.rv(v);
                            snap_bb = K(c, "nv_");
                            try {
                                P = typeof f === "function" ? K(f.apply(null, snap_bb)) : undefined
                            } catch (t) {
                                t.message = t.message.replace(/nv_/g, "");
                                t.stack = t.stack.substring(0, t.stack.indexOf("\n", t.stack.lastIndexOf("at nv_")));
                                t.stack = t.stack.replace(/\snv_/g, " ");
                                t.stack = T(t.stack);
                                if (n.debugInfo) {
                                    t.stack += "\n " + " " + " " + " at " + n.debugInfo[0] + ":" + n.debugInfo[1] + ":" + n.debugInfo[2];
                                    console.error(t)
                                }
                                P = undefined
                            }
                            return M && (_ || h) ? A.nh(P, "f") : P
                    }
                } else {
                    if (i === 3 || i === 1) return e[1];
                    else if (i === 11) {
                        var l = "";
                        for (var D = 1; D < e.length; D++) {
                            var S = A.rv(x(e[D], t, r, n, o, p));
                            l += typeof S === "undefined" ? "" : S
                        }
                        return l
                    }
                }
            }

            function e(e, t, r, n, o, a) {
                if (e[0] == "11182016") {
                    n.debugInfo = e[2];
                    return x(e[1], t, r, n, o, a)
                } else {
                    n.debugInfo = null;
                    return x(e, t, r, n, o, a)
                }
            }
            return e
        }
        var f = a(true);
        var c = a(false);

        function i(e, t, r, n, o, a, i, p) {
            {
                var u = {
                    is_affected: false
                };
                var l = f(t, r, n, o, u);
                if (JSON.stringify(l) != JSON.stringify(a) || u.is_affected != p) {
                    console.warn("A. " + e + " get result " + JSON.stringify(l) + ", " + u.is_affected + ", but " + JSON.stringify(a) + ", " + p + " is expected")
                }
            } {
                var u = {
                    is_affected: false
                };
                var l = c(t, r, n, o, u);
                if (JSON.stringify(l) != JSON.stringify(i) || u.is_affected != p) {
                    console.warn("B. " + e + " get result " + JSON.stringify(l) + ", " + u.is_affected + ", but " + JSON.stringify(i) + ", " + p + " is expected")
                }
            }
        }

        function y(e, t, r, n, o, a, i, p, u) {
            var l = A.hn(e) === "n";
            var f = A.rv(n);
            var v = f.hasOwnProperty(i);
            var c = f.hasOwnProperty(p);
            var s = f[i];
            var y = f[p];
            var b = Object.prototype.toString.call(A.rv(e));
            var d = b[8];
            if (d === "N" && b[10] === "l") d = "X";
            var h;
            if (l) {
                if (d === "A") {
                    var _;
                    for (var g = 0; g < e.length; g++) {
                        f[i] = e[g];
                        f[p] = l ? g : A.nh(g, "h");
                        _ = A.rv(e[g]);
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "O") {
                    var g = 0;
                    var _;
                    for (var O in e) {
                        f[i] = e[O];
                        f[p] = l ? O : A.nh(O, "h");
                        _ = A.rv(e[O]);
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o);
                        g++
                    }
                } else if (d === "S") {
                    for (var g = 0; g < e.length; g++) {
                        f[i] = e[g];
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(e[g] + g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "N") {
                    for (var g = 0; g < e; g++) {
                        f[i] = g;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else {}
            } else {
                var j = A.rv(e);
                var _, P;
                if (d === "A") {
                    for (var g = 0; g < j.length; g++) {
                        P = j[g];
                        P = A.hn(P) === "n" ? A.nh(P, "h") : P;
                        _ = A.rv(P);
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "O") {
                    var g = 0;
                    for (var O in j) {
                        P = j[O];
                        P = A.hn(P) === "n" ? A.nh(P, "h") : P;
                        _ = A.rv(P);
                        f[i] = P;
                        f[p] = l ? O : A.nh(O, "h");
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o);
                        g++
                    }
                } else if (d === "S") {
                    for (var g = 0; g < j.length; g++) {
                        P = A.nh(j[g], "h");
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(e[g] + g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "N") {
                    for (var g = 0; g < j; g++) {
                        P = A.nh(g, "h");
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else {}
            }
            if (v) {
                f[i] = s
            } else {
                delete f[i]
            }
            if (c) {
                f[p] = y
            } else {
                delete f[p]
            }
        }

        function N(e) {
            if (A.hn(e) == "h") return true;
            if (typeof e !== "object") return false;
            for (var t in e) {
                if (e.hasOwnProperty(t)) {
                    if (N(e[t])) return true
                }
            }
            return false
        }

        function b(e, t, r, n, o) {
            var a = false;
            var i = K(n, "", 2);
            if (o.ap && i && i.constructor === Function) {
                t = "$wxs:" + t;
                e.attr["$gdc"] = K
            }
            if (o.is_affected || N(n)) {
                e.n.push(t);
                e.raw[t] = n
            }
            e.attr[t] = i
        }

        function d(e, t, r, n, o, a) {
            a.opindex = r;
            var i = {},
                p;
            var u = c(z[r], n, o, a, i);
            b(e, t, r, u, i)
        }

        function h(e, t, r, n, o, a, i) {
            i.opindex = n;
            var p = {},
                u;
            var l = c(e[n], o, a, i, p);
            b(t, r, n, l, p)
        }

        function p(e, t, r, n) {
            n.opindex = e;
            var o = {};
            var a = c(z[e], t, r, n, o);
            return a && a.constructor === Function ? undefined : a
        }

        function l(e, t, r, n, o) {
            o.opindex = t;
            var a = {};
            var i = c(e[t], r, n, o, a);
            return i && i.constructor === Function ? undefined : i
        }

        function _(e, t, r, n, o) {
            var o = o || {};
            n.opindex = e;
            return f(z[e], t, r, n, o)
        }

        function w(e, t, r, n, o, a) {
            var a = a || {};
            o.opindex = t;
            return f(e[t], r, n, o, a)
        }

        function O(e, t, r, n, o, a, i, p, u) {
            var l = {};
            var f = _(e, r, n, o);
            y(f, t, r, n, o, a, i, p, u)
        }

        function j(e, t, r, n, o, a, i, p, u, l) {
            var f = {};
            var v = w(e, t, n, o, a);
            y(v, r, n, o, a, i, p, u, l)
        }

        function P(e, t, r, n, o, a) {
            var i = v(e);
            var p = 0;
            for (var u = 0; u < t.length; u += 2) {
                if (p + t[u + 1] < 0) {
                    i.attr[t[u]] = true
                } else {
                    d(i, t[u], p + t[u + 1], n, o, a);
                    if (p === 0) p = t[u + 1]
                }
            }
            for (var u = 0; u < r.length; u += 2) {
                if (p + r[u + 1] < 0) {
                    i.generics[r[u]] = ""
                } else {
                    var l = c(z[p + r[u + 1]], n, o, a);
                    if (l != "") l = "wx-" + l;
                    i.generics[r[u]] = l;
                    if (p === 0) p = r[u + 1]
                }
            }
            return i
        }

        function M(e, t, r, n, o, a, i) {
            var p = v(t);
            var u = 0;
            for (var l = 0; l < r.length; l += 2) {
                if (u + r[l + 1] < 0) {
                    p.attr[r[l]] = true
                } else {
                    h(e, p, r[l], u + r[l + 1], o, a, i);
                    if (u === 0) u = r[l + 1]
                }
            }
            for (var l = 0; l < n.length; l += 2) {
                if (u + n[l + 1] < 0) {
                    p.generics[n[l]] = ""
                } else {
                    var f = c(e[u + n[l + 1]], o, a, i);
                    if (f != "") f = "wx-" + f;
                    p.generics[n[l]] = f;
                    if (u === 0) u = n[l + 1]
                }
            }
            return p
        }
        var m = function() {
            if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
                x();
                C();
                k();
                U();
                I();
                L();
                E();
                R();
                F()
            }
            if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true
        };
        var x = function() {
            Object.defineProperty(Object.prototype, "nv_constructor", {
                writable: true,
                value: "Object"
            });
            Object.defineProperty(Object.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[object Object]"
                }
            })
        };
        var C = function() {
            Object.defineProperty(Function.prototype, "nv_constructor", {
                writable: true,
                value: "Function"
            });
            Object.defineProperty(Function.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function() {}
            });
            Object.defineProperty(Function.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[function Function]"
                }
            })
        };
        var k = function() {
            Object.defineProperty(Array.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return this.nv_join()
                }
            });
            Object.defineProperty(Array.prototype, "nv_join", {
                writable: true,
                value: function(e) {
                    e = undefined == e ? "," : e;
                    var t = "";
                    for (var r = 0; r < this.length; ++r) {
                        if (0 != r) t += e;
                        if (null == this[r] || undefined == this[r]) t += "";
                        else if (typeof this[r] == "function") t += this[r].nv_toString();
                        else if (typeof this[r] == "object" && this[r].nv_constructor === "Array") t += this[r].nv_join();
                        else t += this[r].toString()
                    }
                    return t
                }
            });
            Object.defineProperty(Array.prototype, "nv_constructor", {
                writable: true,
                value: "Array"
            });
            Object.defineProperty(Array.prototype, "nv_concat", {
                writable: true,
                value: Array.prototype.concat
            });
            Object.defineProperty(Array.prototype, "nv_pop", {
                writable: true,
                value: Array.prototype.pop
            });
            Object.defineProperty(Array.prototype, "nv_push", {
                writable: true,
                value: Array.prototype.push
            });
            Object.defineProperty(Array.prototype, "nv_reverse", {
                writable: true,
                value: Array.prototype.reverse
            });
            Object.defineProperty(Array.prototype, "nv_shift", {
                writable: true,
                value: Array.prototype.shift
            });
            Object.defineProperty(Array.prototype, "nv_slice", {
                writable: true,
                value: Array.prototype.slice
            });
            Object.defineProperty(Array.prototype, "nv_sort", {
                writable: true,
                value: Array.prototype.sort
            });
            Object.defineProperty(Array.prototype, "nv_splice", {
                writable: true,
                value: Array.prototype.splice
            });
            Object.defineProperty(Array.prototype, "nv_unshift", {
                writable: true,
                value: Array.prototype.unshift
            });
            Object.defineProperty(Array.prototype, "nv_indexOf", {
                writable: true,
                value: Array.prototype.indexOf
            });
            Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
                writable: true,
                value: Array.prototype.lastIndexOf
            });
            Object.defineProperty(Array.prototype, "nv_every", {
                writable: true,
                value: Array.prototype.every
            });
            Object.defineProperty(Array.prototype, "nv_some", {
                writable: true,
                value: Array.prototype.some
            });
            Object.defineProperty(Array.prototype, "nv_forEach", {
                writable: true,
                value: Array.prototype.forEach
            });
            Object.defineProperty(Array.prototype, "nv_map", {
                writable: true,
                value: Array.prototype.map
            });
            Object.defineProperty(Array.prototype, "nv_filter", {
                writable: true,
                value: Array.prototype.filter
            });
            Object.defineProperty(Array.prototype, "nv_reduce", {
                writable: true,
                value: Array.prototype.reduce
            });
            Object.defineProperty(Array.prototype, "nv_reduceRight", {
                writable: true,
                value: Array.prototype.reduceRight
            });
            Object.defineProperty(Array.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function(e) {
                    this.length = e
                }
            })
        };
        var U = function() {
            Object.defineProperty(String.prototype, "nv_constructor", {
                writable: true,
                value: "String"
            });
            Object.defineProperty(String.prototype, "nv_toString", {
                writable: true,
                value: String.prototype.toString
            });
            Object.defineProperty(String.prototype, "nv_valueOf", {
                writable: true,
                value: String.prototype.valueOf
            });
            Object.defineProperty(String.prototype, "nv_charAt", {
                writable: true,
                value: String.prototype.charAt
            });
            Object.defineProperty(String.prototype, "nv_charCodeAt", {
                writable: true,
                value: String.prototype.charCodeAt
            });
            Object.defineProperty(String.prototype, "nv_concat", {
                writable: true,
                value: String.prototype.concat
            });
            Object.defineProperty(String.prototype, "nv_indexOf", {
                writable: true,
                value: String.prototype.indexOf
            });
            Object.defineProperty(String.prototype, "nv_lastIndexOf", {
                writable: true,
                value: String.prototype.lastIndexOf
            });
            Object.defineProperty(String.prototype, "nv_localeCompare", {
                writable: true,
                value: String.prototype.localeCompare
            });
            Object.defineProperty(String.prototype, "nv_match", {
                writable: true,
                value: String.prototype.match
            });
            Object.defineProperty(String.prototype, "nv_replace", {
                writable: true,
                value: String.prototype.replace
            });
            Object.defineProperty(String.prototype, "nv_search", {
                writable: true,
                value: String.prototype.search
            });
            Object.defineProperty(String.prototype, "nv_slice", {
                writable: true,
                value: String.prototype.slice
            });
            Object.defineProperty(String.prototype, "nv_split", {
                writable: true,
                value: String.prototype.split
            });
            Object.defineProperty(String.prototype, "nv_substring", {
                writable: true,
                value: String.prototype.substring
            });
            Object.defineProperty(String.prototype, "nv_toLowerCase", {
                writable: true,
                value: String.prototype.toLowerCase
            });
            Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
                writable: true,
                value: String.prototype.toLocaleLowerCase
            });
            Object.defineProperty(String.prototype, "nv_toUpperCase", {
                writable: true,
                value: String.prototype.toUpperCase
            });
            Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
                writable: true,
                value: String.prototype.toLocaleUpperCase
            });
            Object.defineProperty(String.prototype, "nv_trim", {
                writable: true,
                value: String.prototype.trim
            });
            Object.defineProperty(String.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function(e) {
                    this.length = e
                }
            })
        };
        var I = function() {
            Object.defineProperty(Boolean.prototype, "nv_constructor", {
                writable: true,
                value: "Boolean"
            });
            Object.defineProperty(Boolean.prototype, "nv_toString", {
                writable: true,
                value: Boolean.prototype.toString
            });
            Object.defineProperty(Boolean.prototype, "nv_valueOf", {
                writable: true,
                value: Boolean.prototype.valueOf
            })
        };
        var L = function() {
            Object.defineProperty(Number, "nv_MAX_VALUE", {
                writable: false,
                value: Number.MAX_VALUE
            });
            Object.defineProperty(Number, "nv_MIN_VALUE", {
                writable: false,
                value: Number.MIN_VALUE
            });
            Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
                writable: false,
                value: Number.NEGATIVE_INFINITY
            });
            Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
                writable: false,
                value: Number.POSITIVE_INFINITY
            });
            Object.defineProperty(Number.prototype, "nv_constructor", {
                writable: true,
                value: "Number"
            });
            Object.defineProperty(Number.prototype, "nv_toString", {
                writable: true,
                value: Number.prototype.toString
            });
            Object.defineProperty(Number.prototype, "nv_toLocaleString", {
                writable: true,
                value: Number.prototype.toLocaleString
            });
            Object.defineProperty(Number.prototype, "nv_valueOf", {
                writable: true,
                value: Number.prototype.valueOf
            });
            Object.defineProperty(Number.prototype, "nv_toFixed", {
                writable: true,
                value: Number.prototype.toFixed
            });
            Object.defineProperty(Number.prototype, "nv_toExponential", {
                writable: true,
                value: Number.prototype.toExponential
            });
            Object.defineProperty(Number.prototype, "nv_toPrecision", {
                writable: true,
                value: Number.prototype.toPrecision
            })
        };
        var E = function() {
            Object.defineProperty(Math, "nv_E", {
                writable: false,
                value: Math.E
            });
            Object.defineProperty(Math, "nv_LN10", {
                writable: false,
                value: Math.LN10
            });
            Object.defineProperty(Math, "nv_LN2", {
                writable: false,
                value: Math.LN2
            });
            Object.defineProperty(Math, "nv_LOG2E", {
                writable: false,
                value: Math.LOG2E
            });
            Object.defineProperty(Math, "nv_LOG10E", {
                writable: false,
                value: Math.LOG10E
            });
            Object.defineProperty(Math, "nv_PI", {
                writable: false,
                value: Math.PI
            });
            Object.defineProperty(Math, "nv_SQRT1_2", {
                writable: false,
                value: Math.SQRT1_2
            });
            Object.defineProperty(Math, "nv_SQRT2", {
                writable: false,
                value: Math.SQRT2
            });
            Object.defineProperty(Math, "nv_abs", {
                writable: false,
                value: Math.abs
            });
            Object.defineProperty(Math, "nv_acos", {
                writable: false,
                value: Math.acos
            });
            Object.defineProperty(Math, "nv_asin", {
                writable: false,
                value: Math.asin
            });
            Object.defineProperty(Math, "nv_atan", {
                writable: false,
                value: Math.atan
            });
            Object.defineProperty(Math, "nv_atan2", {
                writable: false,
                value: Math.atan2
            });
            Object.defineProperty(Math, "nv_ceil", {
                writable: false,
                value: Math.ceil
            });
            Object.defineProperty(Math, "nv_cos", {
                writable: false,
                value: Math.cos
            });
            Object.defineProperty(Math, "nv_exp", {
                writable: false,
                value: Math.exp
            });
            Object.defineProperty(Math, "nv_floor", {
                writable: false,
                value: Math.floor
            });
            Object.defineProperty(Math, "nv_log", {
                writable: false,
                value: Math.log
            });
            Object.defineProperty(Math, "nv_max", {
                writable: false,
                value: Math.max
            });
            Object.defineProperty(Math, "nv_min", {
                writable: false,
                value: Math.min
            });
            Object.defineProperty(Math, "nv_pow", {
                writable: false,
                value: Math.pow
            });
            Object.defineProperty(Math, "nv_random", {
                writable: false,
                value: Math.random
            });
            Object.defineProperty(Math, "nv_round", {
                writable: false,
                value: Math.round
            });
            Object.defineProperty(Math, "nv_sin", {
                writable: false,
                value: Math.sin
            });
            Object.defineProperty(Math, "nv_sqrt", {
                writable: false,
                value: Math.sqrt
            });
            Object.defineProperty(Math, "nv_tan", {
                writable: false,
                value: Math.tan
            })
        };
        var R = function() {
            Object.defineProperty(Date.prototype, "nv_constructor", {
                writable: true,
                value: "Date"
            });
            Object.defineProperty(Date, "nv_parse", {
                writable: true,
                value: Date.parse
            });
            Object.defineProperty(Date, "nv_UTC", {
                writable: true,
                value: Date.UTC
            });
            Object.defineProperty(Date, "nv_now", {
                writable: true,
                value: Date.now
            });
            Object.defineProperty(Date.prototype, "nv_toString", {
                writable: true,
                value: Date.prototype.toString
            });
            Object.defineProperty(Date.prototype, "nv_toDateString", {
                writable: true,
                value: Date.prototype.toDateString
            });
            Object.defineProperty(Date.prototype, "nv_toTimeString", {
                writable: true,
                value: Date.prototype.toTimeString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleString", {
                writable: true,
                value: Date.prototype.toLocaleString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
                writable: true,
                value: Date.prototype.toLocaleDateString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
                writable: true,
                value: Date.prototype.toLocaleTimeString
            });
            Object.defineProperty(Date.prototype, "nv_valueOf", {
                writable: true,
                value: Date.prototype.valueOf
            });
            Object.defineProperty(Date.prototype, "nv_getTime", {
                writable: true,
                value: Date.prototype.getTime
            });
            Object.defineProperty(Date.prototype, "nv_getFullYear", {
                writable: true,
                value: Date.prototype.getFullYear
            });
            Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
                writable: true,
                value: Date.prototype.getUTCFullYear
            });
            Object.defineProperty(Date.prototype, "nv_getMonth", {
                writable: true,
                value: Date.prototype.getMonth
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
                writable: true,
                value: Date.prototype.getUTCMonth
            });
            Object.defineProperty(Date.prototype, "nv_getDate", {
                writable: true,
                value: Date.prototype.getDate
            });
            Object.defineProperty(Date.prototype, "nv_getUTCDate", {
                writable: true,
                value: Date.prototype.getUTCDate
            });
            Object.defineProperty(Date.prototype, "nv_getDay", {
                writable: true,
                value: Date.prototype.getDay
            });
            Object.defineProperty(Date.prototype, "nv_getUTCDay", {
                writable: true,
                value: Date.prototype.getUTCDay
            });
            Object.defineProperty(Date.prototype, "nv_getHours", {
                writable: true,
                value: Date.prototype.getHours
            });
            Object.defineProperty(Date.prototype, "nv_getUTCHours", {
                writable: true,
                value: Date.prototype.getUTCHours
            });
            Object.defineProperty(Date.prototype, "nv_getMinutes", {
                writable: true,
                value: Date.prototype.getMinutes
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
                writable: true,
                value: Date.prototype.getUTCMinutes
            });
            Object.defineProperty(Date.prototype, "nv_getSeconds", {
                writable: true,
                value: Date.prototype.getSeconds
            });
            Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
                writable: true,
                value: Date.prototype.getUTCSeconds
            });
            Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
                writable: true,
                value: Date.prototype.getMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
                writable: true,
                value: Date.prototype.getUTCMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
                writable: true,
                value: Date.prototype.getTimezoneOffset
            });
            Object.defineProperty(Date.prototype, "nv_setTime", {
                writable: true,
                value: Date.prototype.setTime
            });
            Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
                writable: true,
                value: Date.prototype.setMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
                writable: true,
                value: Date.prototype.setUTCMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_setSeconds", {
                writable: true,
                value: Date.prototype.setSeconds
            });
            Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
                writable: true,
                value: Date.prototype.setUTCSeconds
            });
            Object.defineProperty(Date.prototype, "nv_setMinutes", {
                writable: true,
                value: Date.prototype.setMinutes
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
                writable: true,
                value: Date.prototype.setUTCMinutes
            });
            Object.defineProperty(Date.prototype, "nv_setHours", {
                writable: true,
                value: Date.prototype.setHours
            });
            Object.defineProperty(Date.prototype, "nv_setUTCHours", {
                writable: true,
                value: Date.prototype.setUTCHours
            });
            Object.defineProperty(Date.prototype, "nv_setDate", {
                writable: true,
                value: Date.prototype.setDate
            });
            Object.defineProperty(Date.prototype, "nv_setUTCDate", {
                writable: true,
                value: Date.prototype.setUTCDate
            });
            Object.defineProperty(Date.prototype, "nv_setMonth", {
                writable: true,
                value: Date.prototype.setMonth
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
                writable: true,
                value: Date.prototype.setUTCMonth
            });
            Object.defineProperty(Date.prototype, "nv_setFullYear", {
                writable: true,
                value: Date.prototype.setFullYear
            });
            Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
                writable: true,
                value: Date.prototype.setUTCFullYear
            });
            Object.defineProperty(Date.prototype, "nv_toUTCString", {
                writable: true,
                value: Date.prototype.toUTCString
            });
            Object.defineProperty(Date.prototype, "nv_toISOString", {
                writable: true,
                value: Date.prototype.toISOString
            });
            Object.defineProperty(Date.prototype, "nv_toJSON", {
                writable: true,
                value: Date.prototype.toJSON
            })
        };
        var F = function() {
            Object.defineProperty(RegExp.prototype, "nv_constructor", {
                writable: true,
                value: "RegExp"
            });
            Object.defineProperty(RegExp.prototype, "nv_exec", {
                writable: true,
                value: RegExp.prototype.exec
            });
            Object.defineProperty(RegExp.prototype, "nv_test", {
                writable: true,
                value: RegExp.prototype.test
            });
            Object.defineProperty(RegExp.prototype, "nv_toString", {
                writable: true,
                value: RegExp.prototype.toString
            });
            Object.defineProperty(RegExp.prototype, "nv_source", {get: function() {
                    return this.source
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_global", {get: function() {
                    return this.global
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {get: function() {
                    return this.ignoreCase
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_multiline", {get: function() {
                    return this.multiline
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_lastIndex", {get: function() {
                    return this.lastIndex
                },
                set: function(e) {
                    this.lastIndex = e
                }
            })
        };
        m();
        var J = function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(Date);
            return new(Function.prototype.bind.apply(Date, e))
        };
        var B = function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(RegExp);
            return new(Function.prototype.bind.apply(RegExp, e))
        };
        var Y = {};
        Y.nv_log = function() {
            var e = "WXSRT:";
            for (var t = 0; t < arguments.length; ++t) e += arguments[t] + " ";
            console.log(e)
        };
        var G = parseInt,
            X = parseFloat,
            H = isNaN,
            V = isFinite,
            $ = decodeURI,
            W = decodeURIComponent,
            Q = encodeURI,
            q = encodeURIComponent;

        function K(e, t, r) {
            e = A.rv(e);
            if (e === null || e === undefined) return e;
            if (typeof e === "string" || typeof e === "boolean" || typeof e === "number") return e;
            if (e.constructor === Object) {
                var n = {};
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o))
                        if (undefined === t) n[o.substring(3)] = K(e[o], t, r);
                        else n[t + o] = K(e[o], t, r);
                return n
            }
            if (e.constructor === Array) {
                var n = [];
                for (var a = 0; a < e.length; a++) n.push(K(e[a], t, r));
                return n
            }
            if (e.constructor === Date) {
                var n = new Date;
                n.setTime(e.getTime());
                return n
            }
            if (e.constructor === RegExp) {
                var i = "";
                if (e.global) i += "g";
                if (e.ignoreCase) i += "i";
                if (e.multiline) i += "m";
                return new RegExp(e.source, i)
            }
            if (r && typeof e === "function") {
                if (r == 1) return K(e(), undefined, 2);
                if (r == 2) return e
            }
            return null
        }
        var Z = {};
        Z.nv_stringify = function(e) {
            JSON.stringify(e);
            return JSON.stringify(K(e))
        };
        Z.nv_parse = function(e) {
            if (e === undefined) return undefined;
            var t = JSON.parse(e);
            return K(t, "nv_")
        };

        function ee(e, t, r, n) {
            e.extraAttr = {
                t_action: t,
                t_rawid: r
            };
            if (typeof n != "undefined") e.extraAttr.t_cid = n
        }

        function te() {
            if (typeof __globalThis.__webview_engine_version__ == "undefined") return 0;
            return __globalThis.__webview_engine_version__
        }

        function re(e, t, r, n, o, a) {
            var i = ne(t, r, n);
            if (i) e.push(i);
            else {
                e.push("");
                u(n + ":import:" + o + ":" + a + ": Path `" + t + "` not found from `" + n + "`.")
            }
        }

        function ne(e, t, r) {
            if (e[0] != "/") {
                var n = r.split("/");
                n.pop();
                var o = e.split("/");
                for (var a = 0; a < o.length; a++) {
                    if (o[a] == "..") n.pop();
                    else if (!o[a] || o[a] == ".") continue;
                    else n.push(o[a])
                }
                e = n.join("/")
            }
            if (r[0] == "." && e[0] == "/") e = "." + e;
            if (t[e]) return e;
            if (t[e + ".wxml"]) return e + ".wxml"
        }

        function oe(e, t, r, n) {
            if (!t) return;
            if (n[e][t]) return n[e][t];
            for (var o = r[e].i.length - 1; o >= 0; o--) {
                if (r[e].i[o] && n[r[e].i[o]][t]) return n[r[e].i[o]][t]
            }
            for (var o = r[e].ti.length - 1; o >= 0; o--) {
                var a = ne(r[e].ti[o], r, e);
                if (a && n[a][t]) return n[a][t]
            }
            var i = ae(r, e);
            for (var o = 0; o < i.length; o++) {
                if (i[o] && n[i[o]][t]) return n[i[o]][t]
            }
            for (var p = r[e].j.length - 1; p >= 0; p--)
                if (r[e].j[p]) {
                    for (var a = r[r[e].j[p]].ti.length - 1; a >= 0; a--) {
                        var u = ne(r[r[e].j[p]].ti[a], r, e);
                        if (u && n[u][t]) {
                            return n[u][t]
                        }
                    }
                }
        }

        function ae(e, t) {
            if (!t) return [];
            if ($gaic[t]) {
                return $gaic[t]
            }
            var r = [],
                n = [],
                o = 0,
                a = 0,
                i = {},
                p = {};
            n.push(t);
            p[t] = true;
            a++;
            while (o < a) {
                var u = n[o++];
                for (var l = 0; l < e[u].ic.length; l++) {
                    var f = e[u].ic[l];
                    var v = ne(f, e, u);
                    if (v && !p[v]) {
                        p[v] = true;
                        n.push(v);
                        a++
                    }
                }
                for (var l = 0; u != t && l < e[u].ti.length; l++) {
                    var c = e[u].ti[l];
                    var s = ne(c, e, u);
                    if (s && !i[s]) {
                        i[s] = true;
                        r.push(s)
                    }
                }
            }
            $gaic[t] = r;
            return r
        }
        var ie = {};

        function pe(e, t, r, n, o, a, i) {
            var p = ne(e, t, r);
            t[r].j.push(p);
            if (p) {
                if (ie[p]) {
                    u("-1:include:-1:-1: `" + e + "` is being included in a loop, will be stop.");
                    return
                }
                ie[p] = true;
                try {
                    t[p].f(n, o, a, i)
                } catch (n) {}
                ie[p] = false
            } else {
                u(r + ":include:-1:-1: Included path `" + e + "` not found from `" + r + "`.")
            }
        }

        function ue(e, t, r, n) {
            u(t + ":template:" + r + ":" + n + ": Template `" + e + "` not found.")
        }

        function le(e) {
            var t = false;
            delete e.properities;
            delete e.n;
            if (e.children) {
                do {
                    t = false;
                    var r = [];
                    for (var n = 0; n < e.children.length; n++) {
                        var o = e.children[n];
                        if (o.tag == "virtual") {
                            t = true;
                            for (var a = 0; o.children && a < o.children.length; a++) {
                                r.push(o.children[a])
                            }
                        } else {
                            r.push(o)
                        }
                    }
                    e.children = r
                } while (t);
                for (var n = 0; n < e.children.length; n++) {
                    le(e.children[n])
                }
            }
            return e
        }

        function fe(e) {
            if (e.tag == "wx-wx-scope") {
                e.tag = "virtual";
                e.wxCkey = "11";
                e["wxScopeData"] = e.attr["wx:scope-data"];
                delete e.n;
                delete e.raw;
                delete e.generics;
                delete e.attr
            }
            for (var t = 0; e.children && t < e.children.length; t++) {
                fe(e.children[t])
            }
            return e
        }
        return {
            a: D,
            b: S,
            c: v,
            d: e,
            e: t,
            f: u,
            g: r,
            h: s,
            i: n,
            j: o,
            k: A,
            l: T,
            m: a,
            n: f,
            o: c,
            p: i,
            q: y,
            r: N,
            s: b,
            t: d,
            u: h,
            v: p,
            w: l,
            x: _,
            y: w,
            z: O,
            A: j,
            B: P,
            C: M,
            D: J,
            E: B,
            F: Y,
            G: G,
            H: X,
            I: H,
            J: V,
            K: $,
            L: W,
            M: Q,
            N: q,
            O: K,
            P: Z,
            Q: ee,
            R: te,
            S: re,
            T: ne,
            U: oe,
            V: ae,
            W: ie,
            X: pe,
            Y: ue,
            Z: le,
            aa: fe
        }
    }()
});
Object.freeze(__g);
g = "";
__wxAppCode__['custom-tab-bar/index.json'] = {
    "component": true,
    "usingComponents": {}
};
__wxAppCode__['pages/calendar/calendar.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {},
    "navigationBarTitleText": "时光线 · 向心日记"
};
__wxAppCode__['pages/checkin/checkin.json'] = {
    "navigationStyle": "custom",
    "navigationBarTitleText": "每日签到 · 向心日记",
    "usingComponents": {}
};
__wxAppCode__['pages/diary-detail/diary-detail.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {}
};
__wxAppCode__['pages/edit-profile/edit-profile.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {}
};
__wxAppCode__['pages/export-diary/export-diary.json'] = {
    "navigationBarTitleText": "导出日记",
    "navigationBarBackgroundColor": "#FFFFFF",
    "navigationBarTextStyle": "black",
    "backgroundColor": "#F7F8FA",
    "usingComponents": {}
};
__wxAppCode__['pages/faq/faq.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {}
};
__wxAppCode__['pages/holiday/holiday.json'] = {
    "navigationStyle": "custom",
    "enablePullDownRefresh": true,
    "backgroundTextStyle": "dark",
    "usingComponents": {}
};
__wxAppCode__['pages/index/index.json'] = {
    "navigationBarTitleText": "向心日记 · 记录每一天",
    "navigationStyle": "custom",
    "usingComponents": {}
};
__wxAppCode__['pages/invite-records/invite-records.json'] = {
    "navigationBarTitleText": "",
    "navigationStyle": "custom",
    "usingComponents": {}
};
__wxAppCode__['pages/lock-setting/lock-setting.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {}
};
__wxAppCode__['pages/more-settings/more-settings.json'] = {
    "usingComponents": {},
    "navigationBarTitleText": "更多设置"
};
__wxAppCode__['pages/notice/notice.json'] = {
    "navigationBarTitleText": "公告",
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "usingComponents": {}
};
__wxAppCode__['pages/profile/profile.json'] = {
    "usingComponents": {},
    "navigationStyle": "custom",
    "navigationBarTitleText": "我的 · 向心日记"
};
__wxAppCode__['pages/reminder/reminder.json'] = {
    "navigationBarTitleText": "每日提醒",
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "usingComponents": {}
};
__wxAppCode__['pages/search/search.json'] = {
    "navigationBarTitleText": "搜索日记 · 向心日记",
    "navigationStyle": "custom",
    "usingComponents": {}
};
__wxAppCode__['pages/stats/stats.json'] = {
    "navigationBarTitleText": "数据统计 · 向心日记",
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "usingComponents": {}
};
__wxAppCode__['pages/theme-select/theme-select.json'] = {
    "navigationBarTitleText": "日记头图",
    "navigationBarBackgroundColor": "#FFF9E6",
    "navigationBarTextStyle": "black",
    "usingComponents": {}
};
__wxAppCode__['pages/unlock/unlock.json'] = {
    "navigationStyle": "custom",
    "navigationBarTitleText": "解锁",
    "backgroundColor": "#000000",
    "usingComponents": {}
};
__wxAppCode__['pages/write/write.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {},
    "navigationBarTitleText": "写日记 · 向心日记"
};;
var __WXML_DEP__ = __WXML_DEP__ || {};;
var __LAZY_CODE_LOADING_CHUNK_MAP__ = __LAZY_CODE_LOADING_CHUNK_MAP__ || {};
[
    ['__COMMON__', ['custom-tab-bar/index', ]],
    ['chunk_0', ['pages/calendar/calendar', ]],
    ['chunk_1', ['pages/checkin/checkin', ]],
    ['chunk_10', ['pages/more-settings/more-settings', ]],
    ['chunk_11', ['pages/notice/notice', ]],
    ['chunk_12', ['pages/profile/profile', ]],
    ['chunk_13', ['pages/reminder/reminder', ]],
    ['chunk_14', ['pages/search/search', ]],
    ['chunk_15', ['pages/stats/stats', ]],
    ['chunk_16', ['pages/theme-select/theme-select', ]],
    ['chunk_17', ['pages/unlock/unlock', ]],
    ['chunk_18', ['pages/write/write', ]],
    ['chunk_2', ['pages/diary-detail/diary-detail', ]],
    ['chunk_3', ['pages/edit-profile/edit-profile', ]],
    ['chunk_4', ['pages/export-diary/export-diary', ]],
    ['chunk_5', ['pages/faq/faq', ]],
    ['chunk_6', ['pages/holiday/holiday', ]],
    ['chunk_7', ['pages/index/index', ]],
    ['chunk_8', ['pages/invite-records/invite-records', ]],
    ['chunk_9', ['pages/lock-setting/lock-setting', ]],
].forEach(function(a) {
    (a[1] || []).forEach(function(b) {
        __LAZY_CODE_LOADING_CHUNK_MAP__[b] = __LAZY_CODE_LOADING_CHUNK_MAP__[b] || a[0] || ''
    });
});
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
$gwx_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];

        function gz$gwx_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([
                    [7],
                    [3, 'searchKeyword']
                ])
                Z([
                    [7],
                    [3, 'showFilterPanel']
                ])
                Z([3, 'onPullDownRefresh'])
                Z([3, 'onFriendScroll'])
                Z([3, 'onLoadMoreFriends'])
                Z([3, 'sec sec-friend'])
                Z([3, '120'])
                Z([
                    [7],
                    [3, 'friendRefreshing']
                ])
                Z([
                    [7],
                    [3, 'scrollTop']
                ])
                Z([1, false])
                Z([
                    [7],
                    [3, 'friendLoading']
                ])
                Z([
                    [2, '||'],
                    [
                        [2, '||'],
                        [
                            [2, '||'],
                            [
                                [7],
                                [3, 'searchKeyword']
                            ],
                            [
                                [7],
                                [3, 'filterStartDate']
                            ]
                        ],
                        [
                            [7],
                            [3, 'filterEndDate']
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'filterSortDesc']
                        ]
                    ]
                ])
                Z([3, 'filter-badges'])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'friendList']
                        ],
                        [3, 'length']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'filterStartDate']
                    ],
                    [
                        [7],
                        [3, 'filterEndDate']
                    ]
                ])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'filterSortDesc']
                    ]
                ])
                Z(z[1])
                Z([3, 'moments-list'])
                Z([
                    [7],
                    [3, 'friendList']
                ])
                Z([3, 'dateStr'])
                Z([
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'isSeparator']
                    ]
                ])
                Z([3, 'onTapDiary'])
                Z([3, 'moment-card capsule-card'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'dateStr']
                ])
                Z([a, [3, 'moment-'], z[24]])
                Z([a, [3, '--card-index:'],
                    [
                        [7],
                        [3, 'index']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'location']
                ])
                Z([
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'content']
                    ],
                    [
                        [2, '>'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'imgCount']
                        ],
                        [1, 0]
                    ]
                ])
                Z([3, 'capsule-stats'])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'wordCount']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '>'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'wordCount']
                        ],
                        [1, 0]
                    ],
                    [
                        [2, '>'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'imgCount']
                        ],
                        [1, 0]
                    ]
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'imgCount']
                    ],
                    [1, 0]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'content']
                ])
                Z([
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'expandedTexts']
                        ],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'dateStr']
                        ]
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [2, '%'],
                        [
                            [7],
                            [3, 'index']
                        ],
                        [1, 5]
                    ],
                    [1, 4]
                ])
                Z([
                    [7],
                    [3, 'friendLoadingMore']
                ])
                Z([
                    [7],
                    [3, 'friendNoMore']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '&&'],
                        [
                            [2, '==='],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'friendList']
                                ],
                                [3, 'length']
                            ],
                            [1, 0]
                        ],
                        [
                            [2, '!'],
                            [
                                [7],
                                [3, 'friendLoading']
                            ]
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'friendLoadingMore']
                        ]
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_0 = true;
        var x = ['./pages/calendar/calendar.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_0_1()
            var xC = _n('view')
            _rz(z, xC, 'class', 0, e, s, gg)
            var oD = _v()
            _(xC, oD)
            if (_oz(z, 1, e, s, gg)) {
                oD.wxVkey = 1
            }
            var fE = _v()
            _(xC, fE)
            if (_oz(z, 2, e, s, gg)) {
                fE.wxVkey = 1
            }
            var cF = _mz(z, 'scroll-view', ['enhanced', -1, 'refresherEnabled', -1, 'scrollY', -1, 'bindrefresherrefresh', 3, 'bindscroll', 1, 'bindscrolltolower', 2, 'class', 3, 'lowerThreshold', 4, 'refresherTriggered', 5, 'scrollTop', 6, 'showScrollbar', 7], [], e, s, gg)
            var hG = _v()
            _(cF, hG)
            if (_oz(z, 11, e, s, gg)) {
                hG.wxVkey = 1
            }
            var oH = _v()
            _(cF, oH)
            if (_oz(z, 12, e, s, gg)) {
                oH.wxVkey = 1
                var cI = _n('view')
                _rz(z, cI, 'class', 13, e, s, gg)
                var oJ = _v()
                _(cI, oJ)
                if (_oz(z, 14, e, s, gg)) {
                    oJ.wxVkey = 1
                }
                var lK = _v()
                _(cI, lK)
                if (_oz(z, 15, e, s, gg)) {
                    lK.wxVkey = 1
                }
                var aL = _v()
                _(cI, aL)
                if (_oz(z, 16, e, s, gg)) {
                    aL.wxVkey = 1
                }
                var tM = _v()
                _(cI, tM)
                if (_oz(z, 17, e, s, gg)) {
                    tM.wxVkey = 1
                }
                oJ.wxXCkey = 1
                lK.wxXCkey = 1
                aL.wxXCkey = 1
                tM.wxXCkey = 1
                _(oH, cI)
            }
            var eN = _n('view')
            _rz(z, eN, 'class', 18, e, s, gg)
            var oR = _v()
            _(eN, oR)
            var fS = function(hU, cT, oV, gg) {
                var oX = _v()
                _(oV, oX)
                if (_oz(z, 21, hU, cT, gg)) {
                    oX.wxVkey = 1
                    var aZ = _mz(z, 'view', ['bindtap', 22, 'class', 1, 'data-date', 2, 'id', 3, 'style', 4], [], hU, cT, gg)
                    var t1 = _v()
                    _(aZ, t1)
                    if (_oz(z, 27, hU, cT, gg)) {
                        t1.wxVkey = 1
                    }
                    var e2 = _v()
                    _(aZ, e2)
                    if (_oz(z, 28, hU, cT, gg)) {
                        e2.wxVkey = 1
                        var o4 = _n('view')
                        _rz(z, o4, 'class', 29, hU, cT, gg)
                        var x5 = _v()
                        _(o4, x5)
                        if (_oz(z, 30, hU, cT, gg)) {
                            x5.wxVkey = 1
                        }
                        var o6 = _v()
                        _(o4, o6)
                        if (_oz(z, 31, hU, cT, gg)) {
                            o6.wxVkey = 1
                        }
                        var f7 = _v()
                        _(o4, f7)
                        if (_oz(z, 32, hU, cT, gg)) {
                            f7.wxVkey = 1
                        }
                        x5.wxXCkey = 1
                        o6.wxXCkey = 1
                        f7.wxXCkey = 1
                        _(e2, o4)
                    }
                    var b3 = _v()
                    _(aZ, b3)
                    if (_oz(z, 33, hU, cT, gg)) {
                        b3.wxVkey = 1
                        var c8 = _v()
                        _(b3, c8)
                        if (_oz(z, 34, hU, cT, gg)) {
                            c8.wxVkey = 1
                        }
                        c8.wxXCkey = 1
                    }
                    t1.wxXCkey = 1
                    e2.wxXCkey = 1
                    b3.wxXCkey = 1
                    _(oX, aZ)
                }
                var lY = _v()
                _(oV, lY)
                if (_oz(z, 35, hU, cT, gg)) {
                    lY.wxVkey = 1
                }
                oX.wxXCkey = 1
                lY.wxXCkey = 1
                return oV
            }
            oR.wxXCkey = 2
            _2z(z, 19, fS, e, s, gg, oR, 'item', 'index', 'dateStr')
            var bO = _v()
            _(eN, bO)
            if (_oz(z, 36, e, s, gg)) {
                bO.wxVkey = 1
            }
            var oP = _v()
            _(eN, oP)
            if (_oz(z, 37, e, s, gg)) {
                oP.wxVkey = 1
            }
            var xQ = _v()
            _(eN, xQ)
            if (_oz(z, 38, e, s, gg)) {
                xQ.wxVkey = 1
            }
            bO.wxXCkey = 1
            oP.wxXCkey = 1
            xQ.wxXCkey = 1
            _(cF, eN)
            hG.wxXCkey = 1
            oH.wxXCkey = 1
            _(xC, cF)
            oD.wxXCkey = 1
            fE.wxXCkey = 1
            _(r, xC)
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
                g = "$gwx_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/calendar/calendar.wxml'] = [$gwx_XC_0, './pages/calendar/calendar.wxml'];
else __wxAppCode__['pages/calendar/calendar.wxml'] = $gwx_XC_0('./pages/calendar/calendar.wxml');;
__wxRoute = "pages/calendar/calendar";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/calendar/calendar.js";
define("pages/calendar/calendar.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Arrayincludes");
    var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
        e = require("../../@babel/runtime/helpers/defineProperty"),
        i = require("../../@babel/runtime/helpers/slicedToArray"),
        a = require("../../@babel/runtime/helpers/objectSpread2"),
        n = require("../../@babel/runtime/helpers/toConsumableArray");
    Page({
        data: {
            topBarStyle: "",
            friendList: [],
            expandedTexts: {},
            imageErrors: {},
            _loadingFriend: !1,
            _friendLoadGen: null,
            _friendAllDates: [],
            _friendHasMore: !0,
            _loadingMore: !1,
            friendLoadingMore: !1,
            friendNoMore: !1,
            friendRefreshing: !1,
            _calGen: null,
            showMomentAction: !1,
            momentActionDate: "",
            searchKeyword: "",
            _originalFriendList: [],
            showFilterPanel: !1,
            filterStartDate: "",
            filterEndDate: "",
            filterSortDesc: !0,
            scrollTop: 0,
            showBackToTop: !1,
            _diaryCount: 0
        },
        onLoad: function() {
            var t = this;
            this._initCapsulePosition(), getApp().globalData.initPromise.then((function() {
                t._loadFriendFeed()
            }))
        },
        onShow: function() {
            wx.setEnableSmartBanner && wx.setEnableSmartBanner({
                enable: !1
            }), "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
                selected: 1
            });
            var t = wx.getStorageSync("_diary_gen") || 0,
                e = this.data._calGen !== t;
            if (e && this.setData({
                    _calGen: t
                }), e) {
                var i = wx.getStorageSync("_diary_changes");
                i && i.length > 0 ? (this._applyIncrementalChanges(i), wx.removeStorageSync("_diary_changes")) : this._loadFriendFeed()
            }
        },
        _initCapsulePosition: function() {
            try {
                var t = wx.getSystemInfoSync(),
                    e = wx.getMenuButtonBoundingClientRect(),
                    i = (t.statusBarHeight, e.height),
                    a = 750 / t.windowWidth,
                    n = Math.round(i * a),
                    r = t.windowWidth - e.left + 12;
                this.setData({
                    topBarStyle: "position:fixed; top:".concat(e.top, "px; height:").concat(i, "px; left:32rpx; right:").concat(r, "px; z-index:99;"),
                    topBarHeight: n,
                    filterPanelStyle: "position:fixed; top:".concat(e.top + i + 8, "px; left:32rpx; right:").concat(r, "px; z-index:100;")
                })
            } catch (t) {}
        },
        onToggleFilter: function() {
            this.setData({
                showFilterPanel: !0
            })
        },
        closeFilterPanel: function() {
            this.setData({
                showFilterPanel: !1
            })
        },
        onSelectStartDate: function(t) {
            var e = t.detail.value || "",
                i = this.data.filterEndDate;
            i && e > i && (i = ""), this.setData({
                filterStartDate: e,
                filterEndDate: i
            }), this._applyFilters()
        },
        onSelectEndDate: function(t) {
            var e = t.detail.value || "",
                i = this.data.filterStartDate;
            i && e < i && (i = ""), this.setData({
                filterEndDate: e,
                filterStartDate: i
            }), this._applyFilters()
        },
        onToggleSort: function() {
            var t = !this.data.filterSortDesc;
            this.setData({
                filterSortDesc: t
            }), this._applyFilters()
        },
        resetFilter: function() {
            this.setData({
                filterStartDate: "",
                filterEndDate: "",
                filterSortDesc: !0
            }), this._applyFilters()
        },
        clearAllFilters: function() {
            this.setData({
                searchKeyword: "",
                filterStartDate: "",
                filterEndDate: "",
                filterSortDesc: !0
            }), this._applyFilters()
        },
        removeDateFilter: function() {
            this.setData({
                filterStartDate: "",
                filterEndDate: ""
            }), this._applyFilters()
        },
        removeSortFilter: function() {
            this.setData({
                filterSortDesc: !0
            }), this._applyFilters()
        },
        _applyFilters: function() {
            var t = wx.getStorageSync("diaries") || {},
                e = this.data,
                i = e.filterStartDate,
                a = e.filterEndDate,
                r = e.filterSortDesc,
                o = e.searchKeyword,
                s = i || a || !r,
                d = (o || "").toLowerCase();
            if (s || d) {
                for (var l = [], c = 0, f = Object.keys(t); c < f.length; c++) {
                    var h = f[c],
                        u = t[h];
                    if (u && !(i && h < i || a && h > a)) {
                        if (d)
                            if (!(u.content || "").toLowerCase().includes(d)) continue;
                        l.push(this._buildFriendItem(h, u, o || null))
                    }
                }
                l.sort((function(t, e) {
                    return r ? e.dateStr.localeCompare(t.dateStr) : t.dateStr.localeCompare(e.dateStr)
                })), this._setFriendList(this._buildGroupedList(l), {}, !0)
            } else this._setFriendList(n(this.data._originalFriendList))
        },
        onSearchInput: function(t) {
            var e = t.detail.value.trim();
            this.setData({
                searchKeyword: e
            }), this._applyFilters()
        },
        clearSearch: function() {
            this.setData({
                searchKeyword: ""
            }), this._applyFilters()
        },
        _buildFriendItem: function(t, e, i) {
            var a = e.content || "",
                r = e.imagePaths,
                o = Array.isArray(r) && r.length > 0,
                s = o ? r : [],
                d = e.location || "",
                l = null;
            i && (l = this._highlightText(a, i));
            var c = a.length,
                f = "none";
            c >= 140 ? f = "heavy" : c >= 100 && (f = "light");
            var h = s.length,
                u = "";
            1 === h ? u = "single" : 2 === h ? u = "row2" : 3 === h ? u = "row3" : 4 === h ? u = "grid22" : h >= 5 && (u = "gridN");
            var g = c,
                p = new Date(t.slice(0, 4), 0, 1),
                m = Math.floor((new Date(t) - p) / 864e5) + 1;
            return {
                dateStr: t,
                content: a,
                textSegments: l,
                images: n(s),
                displayImages: n(s),
                location: d,
                charCount: c,
                foldType: f,
                gridType: u,
                imgCount: h,
                wordCount: g,
                dayOfYear: m,
                dateLabel: this._formatFriendDate(t, e),
                timeLabel: this._formatFriendTime(e),
                isLiked: !1,
                likeCount: 0,
                _needsFetch: !o
            }
        },
        _buildGroupedList: function(t) {
            return t || []
        },
        _highlightText: function(t, e) {
            if (!e || !t) return null;
            for (var i = t.toLowerCase(), a = e.toLowerCase(), n = [], r = 0, o = i.indexOf(a, r); - 1 !== o;) o > r && n.push({
                text: t.slice(r, o),
                isHighlight: !1
            }), n.push({
                text: t.slice(o, o + e.length),
                isHighlight: !0
            }), r = o + e.length, o = i.indexOf(a, r);
            return r < t.length && n.push({
                text: t.slice(r),
                isHighlight: !1
            }), n
        },
        onPullDownRefresh: function() {
            this.setData({
                friendRefreshing: !0,
                searchKeyword: "",
                filterStartDate: "",
                filterEndDate: "",
                filterSortDesc: !0,
                showFilterPanel: !1
            }), this.data._friendLoadGen = -1, this._loadFriendFeed()
        },
        _loadFriendFeed: function(t) {
            var e = this;
            if (!(this.data._loadingFriend || t && this.data._loadingMore)) {
                if (!t && this.data.friendList.length > 0) {
                    var i = wx.getStorageSync("_diary_gen") || 0;
                    if (this.data._friendLoadGen === i) return
                }
                var a, r = wx.getStorageSync("diaries") || {};
                if (0 !== (a = t && this.data._friendAllDates.length > 0 ? this.data._friendAllDates : Object.keys(r).filter((function(t) {
                        var e = r[t];
                        return e && (e.content && e.content.trim() || e.imagePaths && e.imagePaths.length > 0 || !!e.isDraft)
                    })).sort((function(t, e) {
                        return e.localeCompare(t)
                    }))).length) {
                    t ? this.setData({
                        _loadingMore: !0,
                        friendLoadingMore: !0
                    }) : this.setData({
                        _loadingFriend: !0,
                        _friendLoadGen: wx.getStorageSync("_diary_gen") || 0,
                        _friendAllDates: a
                    });
                    var o = this.data.friendList.length,
                        s = t ? o : 0,
                        d = a.slice(s, s + 5);
                    if (0 !== d.length) {
                        var l = d.map((function(t) {
                                var i = r[t] || {};
                                return e._buildFriendItem(t, i)
                            })),
                            c = this._buildGroupedList(l),
                            f = l.filter((function(t) {
                                return t._needsFetch
                            })).map((function(t) {
                                return t.dateStr
                            })),
                            h = s + d.length < a.length;
                        if (0 === f.length) {
                            var u = t ? [].concat(n(this.data.friendList), n(l)) : c;
                            return this._setFriendList(u, {
                                _friendHasMore: h,
                                _loadingFriend: !1,
                                friendRefreshing: !1,
                                _loadingMore: !1,
                                friendLoadingMore: !1
                            }), void this._prefetchAllImages(l).then((function() {
                                var i, a = e.data.friendList;
                                if (t) {
                                    var r = a.length - l.length;
                                    i = [].concat(n(a.slice(0, r)), n(l))
                                } else i = n(c);
                                e._setFriendList(i)
                            })).catch((function() {}))
                        }
                        t || this.data.friendRefreshing || this.setData({
                            friendLoading: !0
                        }), this._fetchMissingDiaries(f, l).then((function() {
                            return e._prefetchAllImages(l)
                        })).then((function() {
                            var i = t ? [].concat(n(e.data.friendList), n(l)) : c;
                            e._setFriendList(i, {
                                _friendHasMore: h,
                                friendLoading: !1,
                                _loadingFriend: !1,
                                friendRefreshing: !1,
                                _loadingMore: !1,
                                friendLoadingMore: !1
                            })
                        })).catch((function() {
                            var i = t ? [].concat(n(e.data.friendList), n(l)) : c;
                            e._setFriendList(i, {
                                _friendHasMore: h,
                                friendLoading: !1,
                                _loadingFriend: !1,
                                friendRefreshing: !1,
                                _loadingMore: !1,
                                friendLoadingMore: !1
                            })
                        }))
                    } else t && this.setData({
                        _loadingMore: !1,
                        friendLoadingMore: !1,
                        _friendHasMore: !1,
                        friendNoMore: !0
                    })
                } else t || this._setFriendList([], {
                    _friendAllDates: [],
                    _friendHasMore: !1,
                    _loadingFriend: !1,
                    friendRefreshing: !1,
                    _friendLoadGen: wx.getStorageSync("_diary_gen") || 0
                })
            }
        },
        onLoadMoreFriends: function() {
            this.data._loadingMore || this.data._loadingFriend || 0 !== this.data.friendList.length && (this.data.searchKeyword || (this.data._friendHasMore ? this._loadFriendFeed(!0) : this.setData({
                friendNoMore: !0
            })))
        },
        onFriendScroll: function(t) {
            var e = t.detail.scrollTop;
            e > 600 && !this.data.showBackToTop ? this.setData({
                showBackToTop: !0
            }) : e <= 600 && this.data.showBackToTop && this.setData({
                showBackToTop: !1
            })
        },
        onBackToTop: function() {
            this.setData({
                scrollTop: 0
            })
        },
        _fetchMissingDiaries: function(t, e) {
            var i = t.map((function(t) {
                return wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "getDiary",
                        date: t
                    }
                }).then((function(i) {
                    if (i.result && i.result.success && i.result.found) {
                        var r = i.result.data;
                        if (r) {
                            var o = r.imagePaths;
                            if (Array.isArray(o) && 0 !== o.length) {
                                var s = wx.getStorageSync("diaries") || {},
                                    d = s[t] || {};
                                s[t] = a(a({}, d), {}, {
                                    imagePaths: r.imagePaths,
                                    updateTime: r.updateTime ? new Date(r.updateTime).getTime() : Date.now()
                                }), wx.setStorageSync("diaries", s);
                                var l = e.findIndex((function(e) {
                                    return e.dateStr === t
                                }));
                                if (l >= 0) {
                                    var c = r.imagePaths.length,
                                        f = "";
                                    1 === c ? f = "single" : 2 === c ? f = "row2" : 3 === c ? f = "row3" : 4 === c ? f = "grid22" : c >= 5 && (f = "gridN"), e[l] = a(a({}, e[l]), {}, {
                                        images: n(r.imagePaths),
                                        displayImages: n(r.imagePaths),
                                        imgCount: c,
                                        gridType: f,
                                        _needsFetch: !1
                                    })
                                }
                            }
                        }
                    }
                })).catch((function() {}))
            }));
            return Promise.all(i)
        },
        _prefetchAllImages: function(t) {
            var e = {},
                i = !1;
            if (t.forEach((function(t) {
                    t.images.forEach((function(a, n) {
                        a && a.startsWith("cloud://") && (i = !0, e[a] || (e[a] = []), e[a].push({
                            dateStr: t.dateStr,
                            idx: n
                        }))
                    }))
                })), !i) return Promise.resolve();
            var r = Object.keys(e);
            return wx.cloud.getTempFileURL({
                fileList: r
            }).then((function(i) {
                (i.fileList || []).forEach((function(i) {
                    i.tempFileURL && i.fileID && (e[i.fileID] || []).forEach((function(e) {
                        var r = t.findIndex((function(t) {
                            return t.dateStr === e.dateStr
                        }));
                        if (r >= 0) {
                            var o = n(t[r].displayImages);
                            o[e.idx] = i.tempFileURL, t[r] = a(a({}, t[r]), {}, {
                                displayImages: o
                            })
                        }
                    }))
                }))
            })).catch((function() {}))
        },
        _formatFriendDate: function(t, e) {
            var a = t.split("-"),
                n = i(a, 3),
                r = (n[0], n[1]),
                o = n[2],
                s = e && e.updateTime ? new Date(e.updateTime) : new Date,
                d = String(s.getHours()).padStart(2, "0"),
                l = String(s.getMinutes()).padStart(2, "0");
            return "".concat(r, "月").concat(o, "日 ").concat(d, ":").concat(l)
        },
        _formatFriendTime: function(t) {
            var e = t.updateTime || Date.now(),
                i = new Date(e),
                a = i.getFullYear(),
                n = String(i.getMonth() + 1).padStart(2, "0"),
                r = String(i.getDate()).padStart(2, "0"),
                o = String(i.getHours()).padStart(2, "0"),
                s = String(i.getMinutes()).padStart(2, "0");
            return "".concat(a, "年").concat(n, "月").concat(r, "日 ").concat(o, ":").concat(s)
        },
        onViewFullText: function(t) {
            var e = t.currentTarget.dataset.date;
            wx.navigateTo({
                url: "/pages/diary-detail/diary-detail?date=".concat(e)
            })
        },
        onLongPressCopy: function(t) {
            var e = t.currentTarget.dataset.content || "";
            e && wx.setClipboardData({
                data: e,
                success: function() {
                    wx.showToast({
                        title: "复制成功",
                        icon: "success"
                    })
                }
            })
        },
        onImageError: function(t) {
            var i = t.currentTarget.dataset,
                a = i.date,
                r = i.idx,
                o = this.data.imageErrors[a] || []; - 1 === o.indexOf(r) && this.setData(e({}, "imageErrors.".concat(a), [].concat(n(o), [r])))
        },
        onReloadImage: function(t) {
            var i = this,
                a = t.currentTarget.dataset,
                r = a.date,
                o = a.idx;
            wx.showLoading({
                title: "重新加载中...",
                mask: !0
            }), wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getDiary",
                    date: r
                }
            }).then((function(t) {
                if (wx.hideLoading(), t.result && t.result.success && t.result.found) {
                    var e = t.result.data;
                    if (e && Array.isArray(e.imagePaths) && 0 !== e.imagePaths.length) {
                        var i = e.imagePaths,
                            a = i.filter((function(t) {
                                return t && t.startsWith("cloud://")
                            }));
                        return a.length > 0 ? wx.cloud.getTempFileURL({
                            fileList: a
                        }).then((function(t) {
                            var e = {};
                            return (t.fileList || []).forEach((function(t) {
                                t.fileID && t.tempFileURL && (e[t.fileID] = t.tempFileURL)
                            })), i.map((function(t) {
                                return e[t] || t
                            }))
                        })) : Promise.resolve(i)
                    }
                }
            })).then((function(t) {
                var a;
                if (t) {
                    var s = i.data.friendList.findIndex((function(t) {
                        return t.dateStr === r
                    }));
                    if (!(s < 0)) {
                        var d = i.data.friendList[s],
                            l = n(d.displayImages);
                        l[o] = t[o] || t[0] || d.displayImages[o];
                        var c = (i.data.imageErrors[r] || []).filter((function(t) {
                            return t !== o
                        }));
                        i.setData((e(a = {}, "friendList[".concat(s, "].displayImages"), l), e(a, "imageErrors.".concat(r), c), a))
                    }
                }
            })).catch((function() {
                wx.hideLoading(), wx.showToast({
                    title: "重新加载失败",
                    icon: "none"
                })
            }))
        },
        onPreviewFriendImage: function(t) {
            var e = t.currentTarget.dataset,
                i = e.idx,
                a = e.date,
                n = this.data.friendList.find((function(t) {
                    return t.dateStr === a
                }));
            if (n && n.displayImages.length) {
                var r = n.displayImages,
                    o = r[i];
                if (o)
                    if (o.startsWith("cloud://")) wx.showLoading({
                        mask: !0
                    }), wx.cloud.getTempFileURL({
                        fileList: r
                    }).then((function(t) {
                        wx.hideLoading();
                        var e = (t.fileList || []).map((function(t) {
                            return t.tempFileURL
                        })).filter(Boolean);
                        getApp().skipNextLockCheck(), wx.previewImage({
                            current: e[i] || e[0],
                            urls: e
                        })
                    })).catch((function() {
                        wx.hideLoading()
                    }));
                    else getApp().skipNextLockCheck(), wx.previewImage({
                        current: o,
                        urls: r
                    })
            }
        },
        onTapMomentUser: function() {},
        onTapDiary: function(t) {
            var e = t.currentTarget.dataset.date;
            e && wx.navigateTo({
                url: "/pages/diary-detail/diary-detail?date=".concat(e)
            })
        },
        onMomentMore: function(t) {
            var e = t.currentTarget.dataset.date;
            this.setData({
                showMomentAction: !0,
                momentActionDate: e
            })
        },
        closeMomentAction: function() {
            this.setData({
                showMomentAction: !1,
                momentActionDate: ""
            })
        },
        onMomentEditDiary: function(t) {
            var e = t.currentTarget.dataset.date || this.data.momentActionDate;
            e && (this.closeMomentAction(), getApp().skipNextLockCheck(), wx.navigateTo({
                url: "/pages/write/write?date=".concat(e)
            }))
        },
        onMomentDeleteDiary: function(t) {
            var e = this,
                i = t.currentTarget.dataset.date || this.data.momentActionDate;
            i && (this.closeMomentAction(), wx.showModal({
                title: "确认删除",
                content: "确定要删除这篇日记吗？删除后不可恢复。",
                confirmColor: "#FF4D4D",
                success: function(t) {
                    t.confirm && e.doDeleteFriendDiary(i)
                }
            }))
        },
        doDeleteFriendDiary: function(t) {
            var e = wx.getStorageSync("diaries") || {},
                i = ((e[t] || {}).imagePaths || []).filter((function(t) {
                    return t && t.startsWith("cloud://")
                }));
            delete e[t], wx.setStorageSync("diaries", e), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1);
            var a = (this.data._friendAllDates || []).filter((function(e) {
                return e !== t
            }));
            this.setData({
                _friendAllDates: a
            });
            var n = this.data.friendList.filter((function(e) {
                    return e.dateStr !== t
                })),
                r = this._buildGroupedList(n);
            this._setFriendList(r), wx.cloud.database().collection("diaries").where({
                date: t
            }).remove().then((function() {
                wx.showToast({
                    title: "已删除",
                    icon: "success"
                }), i.length > 0 && wx.cloud.deleteFile({
                    fileList: i
                }).catch((function() {}))
            })).catch((function() {
                wx.showToast({
                    title: "本地已清除",
                    icon: "none"
                })
            }))
        },
        onGoHomeWrite: function() {
            "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
                selected: 0
            }), wx.switchTab({
                url: "/pages/index/index"
            })
        },
        preventBubble: function() {},
        _applyIncrementalChanges: function(e) {
            var i, a = this,
                r = wx.getStorageSync("diaries") || {},
                o = n(this.data.friendList),
                s = this.data._friendAllDates ? n(this.data._friendAllDates) : [],
                d = t(e);
            try {
                var l = function() {
                    var t = i.value;
                    if ("delete" === t.action) o = o.filter((function(e) {
                        return e.dateStr !== t.date
                    })), s = s.filter((function(e) {
                        return e !== t.date
                    }));
                    else if ("update" === t.action) {
                        var e = r[t.date];
                        if (!(e && (e.content && e.content.trim() || e.imagePaths && e.imagePaths.length > 0 || !!e.isDraft))) return o = o.filter((function(e) {
                            return e.dateStr !== t.date
                        })), s = s.filter((function(e) {
                            return e !== t.date
                        })), "continue";
                        var n = o.findIndex((function(e) {
                                return e.dateStr === t.date
                            })),
                            d = a._buildFriendItem(t.date, e);
                        n >= 0 ? o[n] = d : (o.push(d), o.sort((function(t, e) {
                            return e.dateStr.localeCompare(t.dateStr)
                        })), s.includes(t.date) || (s.push(t.date), s.sort((function(t, e) {
                            return e.localeCompare(t)
                        }))))
                    }
                };
                for (d.s(); !(i = d.n()).done;) l()
            } catch (t) {
                d.e(t)
            } finally {
                d.f()
            }
            var c = this.data._friendHasMore || o.length > 0 && s.length > o.length;
            this._setFriendList(o, {
                _friendAllDates: s,
                _friendHasMore: c,
                _loadingFriend: !1,
                friendRefreshing: !1,
                _loadingMore: !1,
                friendLoadingMore: !1
            })
        },
        _setFriendList: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this.setData(a(a({
                friendList: t
            }, i ? {} : {
                _originalFriendList: t
            }), {}, {
                _diaryCount: t.length
            }, e))
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/calendar/calendar.js'
});
require("pages/calendar/calendar.js");
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
$gwx_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];

        function gz$gwx_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'showDesktopGuide']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_2 = true;
        var x = ['./pages/more-settings/more-settings.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_2_1()
            var cAB = _v()
            _(r, cAB)
            if (_oz(z, 0, e, s, gg)) {
                cAB.wxVkey = 1
            }
            cAB.wxXCkey = 1
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
                g = "$gwx_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/more-settings/more-settings.wxml'] = [$gwx_XC_2, './pages/more-settings/more-settings.wxml'];
else __wxAppCode__['pages/more-settings/more-settings.wxml'] = $gwx_XC_2('./pages/more-settings/more-settings.wxml');;
__wxRoute = "pages/more-settings/more-settings";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/more-settings/more-settings.js";
define("pages/more-settings/more-settings.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Page({
        data: {
            showShareModal: !1,
            showDesktopGuide: !1
        },
        onContactTap: function() {
            getApp().skipNextLockCheck()
        },
        onFaq: function() {
            wx.navigateTo({
                url: "/pages/faq/faq"
            })
        },
        onAddToDesktop: function() {
            this.setData({
                showDesktopGuide: !0
            })
        },
        onCloseDesktopGuide: function() {
            this.setData({
                showDesktopGuide: !1
            })
        },
        onShareApp: function() {
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
        onShareAppMessage: function() {
            return getApp().skipNextLockCheck(), {
                title: "我在用向心日记记录生活，推荐给你！",
                path: "/pages/index/index",
                imageUrl: "cloud://cloud1-0g3jtuimd88a4af5.636c-cloud1-0g3jtuimd88a4af5-1413231909/voice/fengmiantu 20.27.41.jpg"
            }
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/more-settings/more-settings.js'
});
require("pages/more-settings/more-settings.js");
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
                Z([
                    [7],
                    [3, 'notices']
                ])
                Z([3, 'id'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'index']
                    ],
                    [1, 0]
                ])
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_3 = true;
        var x = ['./pages/notice/notice.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_3_1()
            var lCB = _n('view')
            _rz(z, lCB, 'class', 0, e, s, gg)
            var tEB = _v()
            _(lCB, tEB)
            var eFB = function(oHB, bGB, xIB, gg) {
                var fKB = _v()
                _(xIB, fKB)
                if (_oz(z, 3, oHB, bGB, gg)) {
                    fKB.wxVkey = 1
                }
                fKB.wxXCkey = 1
                return xIB
            }
            tEB.wxXCkey = 2
            _2z(z, 1, eFB, e, s, gg, tEB, 'item', 'index', 'id')
            var aDB = _v()
            _(lCB, aDB)
            if (_oz(z, 4, e, s, gg)) {
                aDB.wxVkey = 1
            }
            aDB.wxXCkey = 1
            _(r, lCB)
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
                g = "$gwx_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/notice/notice.wxml'] = [$gwx_XC_3, './pages/notice/notice.wxml'];
else __wxAppCode__['pages/notice/notice.wxml'] = $gwx_XC_3('./pages/notice/notice.wxml');;
__wxRoute = "pages/notice/notice";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/notice/notice.js";
define("pages/notice/notice.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Page({
        data: {
            notices: []
        },
        onLoad: function() {
            this.setData({
                notices: this.getDefaultNotices()
            }), this.initAd()
        },
        initAd: function() {
            var t = this;
            if (wx.createRewardedVideoAd) try {
                this._ad = wx.createRewardedVideoAd({
                    adUnitId: "adunit-e5b27bf9d0558ed0"
                }), this._ad.onLoad((function() {
                    t._adLoadFailed = !1
                })), this._ad.onError((function(n) {
                    t._adLoadFailed = !0
                })), this._ad.onClose((function(t) {
                    t.isEnded && wx.showToast({
                        title: "感谢你的支持！❤️",
                        icon: "none",
                        duration: 2e3
                    })
                }))
            } catch (t) {
                this._adLoadFailed = !0
            }
        },
        onWatchAd: function() {
            this._ad && !this._adLoadFailed ? this._ad.show().catch((function() {})) : wx.showToast({
                title: "暂无可用的广告",
                icon: "none"
            })
        },
        getDefaultNotices: function() {
            return [{
                id: 6,
                title: "向心日记 v1.2.8 更新日志",
                content: "1. 优化时光页面阅读体验\n2. 移除纪念日页面\n3. 新增热力图页面",
                date: "2026-05-24"
            }, {
                id: 5,
                title: "向心日记 v1.2.7 更新日志",
                content: "1. 新增字体调节功能，支持调整大小、粗细、颜色\n2. 上线多款精美输入框背景图，随心切换\n3. 全面优化日记输入交互，书写体验更流畅顺滑",
                date: "2026-05-10"
            }, {
                id: 4,
                title: "向心日记 v1.2.6 更新日志",
                content: "1. 日历板块新增「时光记忆」专属页面\n2. 日历页现已支持补写过往日记\n3. 个人中心优化，新增功能开关状态展示\n4. 上线多款精美首页头图，随心切换",
                date: "2026-05-04"
            }, {
                id: 3,
                title: "向心日记 v1.2.5 更新日志",
                content: "1. 纪念日功能优化：支持点击查看、支持右滑编辑删除、保存和分享\n2. 新增「给未来写封信」：可以写下内容，封存给未来的自己，支持右滑删除",
                date: "2026-04-26"
            }, {
                id: 1,
                title: "向心日记 v1.2.4 更新日志",
                content: "本次更新重点：\n\n1. 导出功能 — 支持完整导出日记，数据更安全\n2. 图片上传 — 可插入图片记录，记录更生动\n3. 体验优化 — 编辑页与日历页全面打磨，更流畅\n4. 积分福利 — 新增签到、邀好友任务，积分可兑换专属权益\n\n感谢支持，开始记录吧！",
                date: "2026-04-19"
            }]
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/notice/notice.js'
});
require("pages/notice/notice.js");
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
                Z([
                    [7],
                    [3, 'enabled']
                ])
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
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'renewing']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_5 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_5 = true;
        var x = ['./pages/reminder/reminder.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_5_1()
            var bUB = _v()
            _(r, bUB)
            if (_oz(z, 0, e, s, gg)) {
                bUB.wxVkey = 1
                var oVB = _mz(z, 'view', ['bindtap', 1, 'class', 1], [], e, s, gg)
                var xWB = _v()
                _(oVB, xWB)
                if (_oz(z, 3, e, s, gg)) {
                    xWB.wxVkey = 1
                }
                xWB.wxXCkey = 1
                _(bUB, oVB)
            }
            bUB.wxXCkey = 1
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
                g = "$gwx_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/reminder/reminder.wxml'] = [$gwx_XC_5, './pages/reminder/reminder.wxml'];
else __wxAppCode__['pages/reminder/reminder.wxml'] = $gwx_XC_5('./pages/reminder/reminder.wxml');;
__wxRoute = "pages/reminder/reminder";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/reminder/reminder.js";
define("pages/reminder/reminder.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Page({
        data: {
            enabled: !1,
            time: "21:00",
            renewCount: 0,
            renewing: !1,
            loadingCloud: !0
        },
        onLoad: function() {
            var e = wx.getStorageSync("reminderSettings");
            e && this.setData({
                enabled: e.enabled || !1,
                time: e.time || "21:00",
                loadingCloud: !0
            });
            var t = wx.getStorageSync("reminderRenewCount") || 0;
            this.setData({
                renewCount: t
            }), this._syncFromCloud()
        },
        _syncFromCloud: function() {
            var e = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getReminderSettings"
                }
            }).then((function(t) {
                if (e.setData({
                        loadingCloud: !1
                    }), t.result && t.result.success && t.result.settings) {
                    var n = t.result.settings;
                    e.setData({
                        enabled: n.enabled || !1,
                        time: n.time || "21:00",
                        renewCount: n.renewCount || 0
                    }), wx.setStorageSync("reminderSettings", {
                        enabled: n.enabled || !1,
                        time: n.time || "21:00"
                    }), wx.setStorageSync("reminderRenewCount", n.renewCount || 0)
                }
            })).catch((function() {
                e.setData({
                    loadingCloud: !1
                })
            }))
        },
        onToggle: function(e) {
            var t = e.detail.value;
            this._userActed = !0, this.setData({
                enabled: t
            }), this._debounceSaveSettings(), t ? this.requestPermission() : wx.showToast({
                title: "已关闭提醒",
                icon: "none"
            })
        },
        onTimeChange: function(e) {
            this._userActed = !0, this.setData({
                time: e.detail.value
            }), this._debounceSaveSettings(), wx.showToast({
                title: "提醒时间已生效 ✓",
                icon: "none",
                duration: 1500
            })
        },
        onSelectTime: function() {
            var e = this,
                t = ["07:00", "08:00", "12:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
            wx.showActionSheet({
                itemList: t,
                success: function(n) {
                    e._userActed = !0, e.setData({
                        time: t[n.tapIndex]
                    }), e._debounceSaveSettings()
                }
            })
        },
        _debounceSaveSettings: function() {
            var e = this,
                t = this.data,
                n = t.enabled,
                a = t.time;
            wx.setStorageSync("reminderSettings", {
                enabled: n,
                time: a
            }), this._saveTimer && clearTimeout(this._saveTimer), this._saveTimer = setTimeout((function() {
                e._doSaveToCloud()
            }), 1500)
        },
        _doSaveToCloud: function() {
            var e = this.data,
                t = e.enabled,
                n = e.time;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "saveReminderSettings",
                    settings: {
                        enabled: t,
                        time: n
                    }
                }
            }).catch((function() {}))
        },
        onRenew: function() {
            var e = this;
            if (!this.data.renewing) {
                this._userActed = !0, this.setData({
                    renewing: !0
                });
                var t = "vdrDS4o76rrw74UeThDICtk6HDo8sVNI6TaIJHHErEY";
                wx.requestSubscribeMessage({
                    tmplIds: [t],
                    success: function(n) {
                        if ("accept" === n[t]) {
                            var a = (e.data.renewCount || 0) + 1;
                            e.setData({
                                renewCount: a
                            }), wx.setStorageSync("reminderRenewCount", a), wx.showToast({
                                title: "已获得 1 次推送，共 ".concat(a, " 次"),
                                icon: "none",
                                duration: 2e3
                            }), wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "addRenewCount"
                                }
                            }).then((function(t) {
                                if (t.result && t.result.success) {
                                    var n = t.result.renewCount || a;
                                    e.setData({
                                        renewCount: n
                                    }), wx.setStorageSync("reminderRenewCount", n)
                                }
                            })).catch((function() {}))
                        } else wx.showToast({
                            title: "请点允许才能续订",
                            icon: "none"
                        })
                    },
                    fail: function() {
                        wx.showToast({
                            title: "续订失败，请重试",
                            icon: "none"
                        })
                    },
                    complete: function() {
                        e.setData({
                            renewing: !1
                        })
                    }
                })
            }
        },
        requestPermission: function() {
            var e = this,
                t = "vdrDS4o76rrw74UeThDICtk6HDo8sVNI6TaIJHHErEY";
            wx.requestSubscribeMessage({
                tmplIds: [t],
                success: function(n) {
                    if ("accept" === n[t]) {
                        wx.showToast({
                            title: "提醒已开启 🌙",
                            icon: "none"
                        });
                        var a = (e.data.renewCount || 0) + 1;
                        e.setData({
                            renewCount: a
                        }), wx.setStorageSync("reminderRenewCount", a), wx.cloud.callFunction({
                            name: "diary",
                            data: {
                                action: "addRenewCount"
                            }
                        }).then((function(t) {
                            if (t.result && t.result.success) {
                                var n = t.result.renewCount || a;
                                e.setData({
                                    renewCount: n
                                }), wx.setStorageSync("reminderRenewCount", n)
                            }
                        })).catch((function() {}))
                    } else wx.showToast({
                        title: "请允许通知才能收到提醒",
                        icon: "none"
                    }), e._saveTimer && (clearTimeout(e._saveTimer), e._saveTimer = null), e.setData({
                        enabled: !1
                    }), e._debounceSaveSettings()
                },
                fail: function() {
                    wx.showToast({
                        title: "授权失败，请重试",
                        icon: "none"
                    }), e._saveTimer && (clearTimeout(e._saveTimer), e._saveTimer = null), e.setData({
                        enabled: !1
                    }), e._debounceSaveSettings()
                }
            })
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/reminder/reminder.js'
});
require("pages/reminder/reminder.js");
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
                Z([
                    [7],
                    [3, 'keyword']
                ])
                Z([3, 'search-results'])
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
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'keyword']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_6 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_6 = true;
        var x = ['./pages/search/search.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_6_1()
            var fYB = _n('view')
            _rz(z, fYB, 'class', 0, e, s, gg)
            var cZB = _v()
            _(fYB, cZB)
            if (_oz(z, 1, e, s, gg)) {
                cZB.wxVkey = 1
            }
            var h1B = _n('view')
            _rz(z, h1B, 'class', 2, e, s, gg)
            var o2B = _v()
            _(h1B, o2B)
            if (_oz(z, 3, e, s, gg)) {
                o2B.wxVkey = 1
            }
            var c3B = _v()
            _(h1B, c3B)
            if (_oz(z, 4, e, s, gg)) {
                c3B.wxVkey = 1
            }
            o2B.wxXCkey = 1
            c3B.wxXCkey = 1
            _(fYB, h1B)
            cZB.wxXCkey = 1
            _(r, fYB)
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
                g = "$gwx_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/search.wxml'] = [$gwx_XC_6, './pages/search/search.wxml'];
else __wxAppCode__['pages/search/search.wxml'] = $gwx_XC_6('./pages/search/search.wxml');;
__wxRoute = "pages/search/search";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/search/search.js";
define("pages/search/search.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Page({
        data: {
            keyword: "",
            searchResults: []
        },
        onLoad: function() {
            this.loadDiaries()
        },
        loadDiaries: function() {
            var t = wx.getStorageSync("diaries") || {};
            this._allDiaries = Object.keys(t).map((function(e) {
                return {
                    date: e,
                    content: t[e].content || ""
                }
            })).sort((function(t, e) {
                return new Date(e.date) - new Date(t.date)
            }))
        },
        onSearch: function(t) {
            var e = t.detail.value.trim();
            if (this.setData({
                    keyword: e
                }), e) {
                var a = (this._allDiaries || []).filter((function(t) {
                    return t.content && t.content.includes(e)
                }));
                this.setData({
                    searchResults: a
                })
            } else this.setData({
                searchResults: []
            })
        },
        clearSearch: function() {
            this.setData({
                keyword: "",
                searchResults: []
            })
        },
        goToEdit: function(t) {
            var e = t.currentTarget.dataset.date;
            wx.navigateTo({
                url: "/pages/diary-detail/diary-detail?date=".concat(e)
            })
        },
        goBack: function() {
            wx.navigateBack()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/search/search.js'
});
require("pages/search/search.js");
$gwx_XC_7 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];

        function gz$gwx_XC_7_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_7 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_7 = true;
        var x = ['./pages/stats/stats.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_7_1()
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
                g = "$gwx_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_7();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/stats/stats.wxml'] = [$gwx_XC_7, './pages/stats/stats.wxml'];
else __wxAppCode__['pages/stats/stats.wxml'] = $gwx_XC_7('./pages/stats/stats.wxml');;
__wxRoute = "pages/stats/stats";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/stats/stats.js";
define("pages/stats/stats.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Objectentries"), require("../../@babel/runtime/helpers/Objectvalues");
    var t = require("../../@babel/runtime/helpers/toConsumableArray"),
        a = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
        e = require("../../@babel/runtime/helpers/slicedToArray"),
        r = require("../../utils/util");
    Page({
        data: {
            totalDays: 0,
            totalWords: 0,
            totalImages: 0,
            moodStats: [],
            weatherStats: [],
            tagStats: [],
            heatmapData: [],
            heatmapYear: (new Date).getFullYear(),
            monthStats: []
        },
        onLoad: function() {
            this.loadStats()
        },
        onShow: function() {
            var t = wx.getStorageSync("_diary_gen") || 0;
            if (t !== this._cachedGen) {
                this._cachedGen = t;
                var a = this.data.heatmapData;
                if (a && 0 !== a.length) {
                    var e = wx.getStorageSync("_diary_changes");
                    e && e.length > 0 ? (this._applyIncrementalChanges(e), wx.removeStorageSync("_diary_changes")) : this.loadStats()
                } else this.loadStats()
            }
        },
        loadStats: function() {
            var t = wx.getStorageSync("diaries") || {},
                a = Object.entries(t),
                r = 0,
                n = 0,
                o = {},
                l = {},
                c = {},
                s = {};
            a.forEach((function(t) {
                var a = e(t, 2),
                    i = a[0],
                    h = a[1];
                h.content && (r += h.content.length), h.imagePaths && (n += h.imagePaths.length), h.mood && (o[h.mood] = (o[h.mood] || 0) + 1), h.weather && (l[h.weather] = (l[h.weather] || 0) + 1), h.tags && h.tags.forEach((function(t) {
                    c[t] = (c[t] || 0) + 1
                }));
                var u = i.substring(0, 7);
                s[u] = (s[u] || 0) + 1
            }));
            var i = this._calcMoodStats(o),
                h = this._calcWeatherStats(l),
                u = this._calcTagStats(c),
                m = this._calcHeatmap(t),
                v = m.heatmapData,
                g = m.heatmapYear,
                d = this._calcMonthStats(s);
            this.setData({
                totalDays: a.length,
                totalWords: r,
                totalImages: n,
                moodStats: i,
                weatherStats: h,
                tagStats: u,
                heatmapData: v,
                heatmapYear: g,
                monthStats: d
            }), this._cachedGen = wx.getStorageSync("_diary_gen") || 0
        },
        _applyIncrementalChanges: function(t) {
            var e, r = wx.getStorageSync("diaries") || {},
                n = this.data.heatmapData,
                o = this.data.heatmapYear,
                l = new Date(o, 0, 1),
                c = {},
                s = !1,
                i = a(t);
            try {
                for (i.s(); !(e = i.n()).done;) {
                    var h = e.value,
                        u = h.date.split("-");
                    if (parseInt(u[0]) === o) {
                        var m = new Date(h.date),
                            v = Math.floor((m - l) / 864e5);
                        if (!(v < 0 || v >= n.length)) {
                            var g = "level-0";
                            if ("update" === h.action) {
                                var d = r[h.date];
                                if (d) {
                                    var p, S = (null === (p = d.content) || void 0 === p ? void 0 : p.length) || 0;
                                    g = 0 === S ? "level-0" : S < 50 ? "level-1" : S < 100 ? "level-2" : S < 200 ? "level-3" : "level-4"
                                }
                            }
                            n[v].level !== g && (c["heatmapData[" + v + "].level"] = g, s = !0)
                        }
                    }
                }
            } catch (t) {
                i.e(t)
            } finally {
                i.f()
            }
            s && this.setData(c), this._recomputeStats(r)
        },
        _recomputeStats: function(t) {
            var a = Object.entries(t),
                r = 0,
                n = 0,
                o = {},
                l = {},
                c = {},
                s = {};
            a.forEach((function(t) {
                var a = e(t, 2),
                    i = a[0],
                    h = a[1];
                h.content && (r += h.content.length), h.imagePaths && (n += h.imagePaths.length), h.mood && (o[h.mood] = (o[h.mood] || 0) + 1), h.weather && (l[h.weather] = (l[h.weather] || 0) + 1), h.tags && h.tags.forEach((function(t) {
                    c[t] = (c[t] || 0) + 1
                }));
                var u = i.substring(0, 7);
                s[u] = (s[u] || 0) + 1
            })), this.setData({
                totalDays: a.length,
                totalWords: r,
                totalImages: n,
                moodStats: this._calcMoodStats(o),
                weatherStats: this._calcWeatherStats(l),
                tagStats: this._calcTagStats(c),
                monthStats: this._calcMonthStats(s)
            })
        },
        _calcMoodStats: function(t) {
            var a = {
                    "😊": {
                        label: "开心",
                        color: "#FFD93D"
                    },
                    "😢": {
                        label: "难过",
                        color: "#6C757D"
                    },
                    "😠": {
                        label: "生气",
                        color: "#FF6B6B"
                    },
                    "😴": {
                        label: "困倦",
                        color: "#95A5A6"
                    },
                    "🤔": {
                        label: "思考",
                        color: "#3498DB"
                    },
                    "😰": {
                        label: "焦虑",
                        color: "#E74C3C"
                    },
                    "🥰": {
                        label: "幸福",
                        color: "#FF69B4"
                    },
                    "😌": {
                        label: "平静",
                        color: "#2ECC71"
                    },
                    "🤗": {
                        label: "感动",
                        color: "#F39C12"
                    },
                    "😎": {
                        label: "酷",
                        color: "#9B59B6"
                    },
                    "🥺": {
                        label: "期待",
                        color: "#1ABC9C"
                    },
                    "😣": {
                        label: "纠结",
                        color: "#E67E22"
                    }
                },
                r = Object.values(t).reduce((function(t, a) {
                    return t + a
                }), 0);
            return Object.entries(t).map((function(t) {
                var n, o = e(t, 2),
                    l = o[0],
                    c = o[1];
                return {
                    emoji: l,
                    count: c,
                    percent: r > 0 ? c / r * 100 : 0,
                    color: (null === (n = a[l]) || void 0 === n ? void 0 : n.color) || "#999"
                }
            })).sort((function(t, a) {
                return a.count - t.count
            }))
        },
        _calcWeatherStats: function(a) {
            var r = Object.values(a).reduce((function(t, a) {
                return t + a
            }), 0);
            return Object.entries(a).map((function(n) {
                var o = e(n, 2),
                    l = o[0],
                    c = o[1];
                return {
                    emoji: l,
                    count: c,
                    size: 40 + c / Math.max.apply(Math, t(Object.values(a))) * 40,
                    opacity: .5 + c / r * .5
                }
            })).sort((function(t, a) {
                return a.count - t.count
            }))
        },
        _calcTagStats: function(a) {
            var r = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98D8C8", "#F7DC6F"],
                n = Math.max.apply(Math, t(Object.values(a)).concat([1]));
            return Object.entries(a).map((function(t, a) {
                var o = e(t, 2),
                    l = o[0],
                    c = o[1];
                return {
                    name: l,
                    count: c,
                    size: 24 + c / n * 20,
                    color: r[a % r.length]
                }
            })).sort((function(t, a) {
                return a.count - t.count
            })).slice(0, 20)
        },
        _calcHeatmap: function(t) {
            for (var a = (new Date).getFullYear(), e = new Date(a, 0, 1), n = new Date(a, 11, 31), o = [], l = new Date(e); l <= n; l.setDate(l.getDate() + 1)) {
                var c, s, i = r.formatDate(new Date(l)),
                    h = !!t[i],
                    u = (null === (c = t[i]) || void 0 === c || null === (s = c.content) || void 0 === s ? void 0 : s.length) || 0,
                    m = "level-0";
                h && (m = u < 50 ? "level-1" : u < 100 ? "level-2" : u < 200 ? "level-3" : "level-4"), o.push({
                    date: i,
                    level: m
                })
            }
            return {
                heatmapData: o,
                heatmapYear: a
            }
        },
        _calcMonthStats: function(a) {
            var r = Math.max.apply(Math, t(Object.values(a)).concat([1]));
            return Object.entries(a).map((function(t) {
                var a = e(t, 2),
                    n = a[0],
                    o = a[1];
                return {
                    month: n.replace("-", "年") + "月",
                    count: o,
                    percent: o / r * 100
                }
            })).sort((function(t, a) {
                return a.month.localeCompare(t.month)
            }))
        },
        onHeatmapTap: function(t) {
            var a = t.currentTarget.dataset.date;
            getApp().globalData.selectedDate = a, wx.navigateBack()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/stats/stats.js'
});
require("pages/stats/stats.js");
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
                Z([3, 'theme-list'])
                Z([
                    [7],
                    [3, 'isLoadingPreview']
                ])
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_8 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_8 = true;
        var x = ['./pages/theme-select/theme-select.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_8_1()
            var a6B = _n('view')
            _rz(z, a6B, 'class', 0, e, s, gg)
            var t7B = _v()
            _(a6B, t7B)
            if (_oz(z, 1, e, s, gg)) {
                t7B.wxVkey = 1
            } else {
                t7B.wxVkey = 2
                var e8B = _v()
                _(t7B, e8B)
                var b9B = function(xAC, o0B, oBC, gg) {
                    var cDC = _mz(z, 'view', ['bindtap', 4, 'class', 1, 'data-series', 2], [], xAC, o0B, gg)
                    var hEC = _v()
                    _(cDC, hEC)
                    if (_oz(z, 7, xAC, o0B, gg)) {
                        hEC.wxVkey = 1
                    }
                    hEC.wxXCkey = 1
                    _(oBC, cDC)
                    return oBC
                }
                e8B.wxXCkey = 2
                _2z(z, 2, b9B, e, s, gg, e8B, 'item', 'index', 'id')
            }
            t7B.wxXCkey = 1
            _(r, a6B)
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
                g = "$gwx_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/theme-select/theme-select.wxml'] = [$gwx_XC_8, './pages/theme-select/theme-select.wxml'];
else __wxAppCode__['pages/theme-select/theme-select.wxml'] = $gwx_XC_8('./pages/theme-select/theme-select.wxml');;
__wxRoute = "pages/theme-select/theme-select";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/theme-select/theme-select.js";
define("pages/theme-select/theme-select.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../@babel/runtime/helpers/typeof"),
        a = require("../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../@babel/runtime/helpers/objectSpread2"),
        i = require("../../utils/cloud-images"),
        s = require("../../utils/cloud").requirePoints,
        r = [{
            id: "series4",
            name: "手绘插画",
            pointsCost: 10,
            images: i.series4
        }, {
            id: "series1",
            name: "温柔治愈",
            pointsCost: 10,
            images: i.series1
        }, {
            id: "series3",
            name: "简约高级",
            pointsCost: 10,
            images: i.series3
        }],
        c = null;
    Page({
        data: {
            currentSeries: "series4",
            isDownloading: !1,
            customCovers: [],
            isLoadingPreview: !1,
            seriesList: r
        },
        onLoad: function() {
            for (var e = wx.getStorageSync("selectedPhotoSeries") || "series4", t = wx.getStorageSync("customCovers") || []; t.length < 7;) t.push("");
            var a = t.filter((function(e) {
                return e && e.length > 0
            })).length;
            this.setData({
                currentSeries: e,
                customCovers: t,
                imageCount: a
            }), this.loadHeadImageSeriesFromCloud(), this.initAd()
        },
        onUnload: function() {
            this._replaceTimer && (clearTimeout(this._replaceTimer), this._replaceTimer = null), this._pendingReplacements = null
        },
        loadHeadImageSeriesFromCloud: function() {
            var e = this,
                t = wx.getStorageSync("headImageSeriesCache");
            if (t && t.data && t.data.length > 0 && Date.now() - t.time < 72e5) {
                var a = t.data.map((function(e) {
                    return n(n({}, e), {}, {
                        pointsCost: e.pointsCost || 10
                    })
                }));
                this.warmUpImageCache(a)
            } else wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getHeadImageSeries"
                }
            }).then((function(t) {
                if (t.result && t.result.success) {
                    var a = t.result.series;
                    if (a && a.length > 0) {
                        var i = a.map((function(e) {
                            return n(n({}, e), {}, {
                                pointsCost: e.pointsCost || 10
                            })
                        }));
                        wx.setStorageSync("headImageSeriesCache", {
                            data: i,
                            time: Date.now()
                        }), e.warmUpImageCache(i)
                    }
                }
            })).catch((function() {}))
        },
        warmUpImageCache: function(e) {
            var t = this;
            if (e && wx.getFileSystemManager) {
                var a = wx.getFileSystemManager();
                try {
                    a.accessSync("".concat(wx.env.USER_DATA_PATH, "/").concat("head_img_cache"))
                } catch (e) {
                    try {
                        a.mkdirSync("".concat(wx.env.USER_DATA_PATH, "/").concat("head_img_cache"), !0)
                    } catch (e) {}
                }
                var i = e.map((function(e) {
                    return n(n({}, e), {}, {
                        images: (e.images || []).map((function(e) {
                            if (!e || !e.startsWith("http")) return e;
                            var n = t._hashUrl(e),
                                i = "".concat(wx.env.USER_DATA_PATH, "/").concat("head_img_cache", "/").concat(n);
                            try {
                                return a.accessSync(i), i
                            } catch (t) {
                                return e
                            }
                        }))
                    })
                }));
                this.setData({
                    seriesList: i
                });
                var s = wx.getStorageSync("selectedPhotoSeries") || "series4",
                    r = i.find((function(e) {
                        return e.id === s
                    }));
                if (r && r.images && r.images.length > 0) {
                    var c = r.images.filter((function(e) {
                        return e && (e.startsWith("http") || e.startsWith("wxfile://"))
                    }));
                    7 === c.length && (wx.setStorageSync("selectedSeriesImages", c), wx.setStorageSync("selectedSeriesImagesId", s))
                }
                var o = [];
                i.forEach((function(e) {
                    (e.images || []).forEach((function(e) {
                        e && e.startsWith("http") && o.push(e)
                    }))
                })), 0 !== o.length && this._batchDownloadWithLimit(o, 5)
            }
        },
        _replaceUrlWithLocal: function(e) {
            var t = this,
                a = this._hashUrl(e),
                n = "".concat(wx.env.USER_DATA_PATH, "/").concat("head_img_cache", "/").concat(a);
            this._pendingReplacements || (this._pendingReplacements = new Map), this._pendingReplacements.set(e, n), this._replaceTimer || (this._replaceTimer = setTimeout((function() {
                t._flushPendingReplacements(), t._replaceTimer = null
            }), 300))
        },
        _flushPendingReplacements: function() {
            if (this._pendingReplacements && 0 !== this._pendingReplacements.size) {
                var e = this._pendingReplacements;
                this._pendingReplacements = null;
                var t = this.data.seriesList,
                    a = !1,
                    i = t.map((function(t) {
                        if (!t.images) return t;
                        var i = t.images.map((function(t) {
                            return e.has(t) ? (a = !0, e.get(t)) : t
                        }));
                        return n(n({}, t), {}, {
                            images: i
                        })
                    }));
                a && this.setData({
                    seriesList: i
                })
            }
        },
        _batchDownloadWithLimit: function(e, t) {
            var a = this,
                n = wx.getFileSystemManager(),
                i = new Set,
                s = 0;
            ! function r() {
                for (var c = function() {
                        var t = e[s++],
                            c = a._hashUrl(t),
                            o = "".concat(wx.env.USER_DATA_PATH, "/").concat("head_img_cache", "/").concat(c);
                        try {
                            return n.accessSync(o), a._replaceUrlWithLocal(t), "continue"
                        } catch (e) {}
                        i.add(t), wx.downloadFile({
                            url: t,
                            success: function(e) {
                                if (200 === e.statusCode && e.tempFilePath) try {
                                    n.saveFileSync(e.tempFilePath, o), a._replaceUrlWithLocal(t)
                                } catch (e) {}
                            },
                            fail: function() {},
                            complete: function() {
                                i.delete(t), r()
                            }
                        })
                    }; s < e.length && i.size < t;) c()
            }()
        },
        _hashUrl: function(e) {
            for (var t = 0, a = 0; a < e.length; a++) {
                t = (t << 5) - t + e.charCodeAt(a), t |= 0
            }
            return "img_" + Math.abs(t).toString(36) + ".jpg"
        },
        initAd: function() {
            var e = this;
            c || ((c = wx.createRewardedVideoAd({
                adUnitId: "adunit-e5b27bf9d0558ed0"
            })).onLoad((function() {})), c.onError((function(t) {
                e.adLoadFailed = !0
            })), c.onClose((function(t) {
                t.isEnded ? e.activateCustomCover() : wx.showToast({
                    title: "看完广告才能生效哦",
                    icon: "none"
                })
            }))), this.ad = c
        },
        activateCustomCover: function() {
            wx.setStorageSync("selectedPhotoSeries", "custom"), this.setData({
                currentSeries: "custom"
            }), wx.showToast({
                title: "已生效",
                icon: "success"
            })
        },
        loadPreviewImages: function() {},
        onSelectSeries: function(n) {
            var i = this;
            return a(e().mark((function a() {
                var r, c, o, u, h, l;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = n.currentTarget.dataset.series, (c = "string" == typeof r ? r : r.id) !== i.data.currentSeries) {
                                e.next = 5;
                                break
                            }
                            return wx.navigateBack(), e.abrupt("return");
                        case 5:
                            if ("custom" !== c) {
                                e.next = 11;
                                break
                            }
                            return wx.setStorageSync("selectedPhotoSeries", "custom"), i.setData({
                                currentSeries: "custom"
                            }), wx.showToast({
                                title: "已切换",
                                icon: "success",
                                duration: 1e3
                            }), setTimeout((function() {
                                return wx.navigateBack()
                            }), 1e3), e.abrupt("return");
                        case 11:
                            if (o = "object" === t(r) ? r : i.data.seriesList.find((function(e) {
                                    return e.id === c
                                })), !((u = o && o.pointsCost || 0) > 0)) {
                                e.next = 19;
                                break
                            }
                            return e.next = 16, s(u, "switch_head_image", "切换头图");
                        case 16:
                            if ((h = e.sent) && h.ok) {
                                e.next = 19;
                                break
                            }
                            return e.abrupt("return");
                        case 19:
                            wx.setStorageSync("selectedPhotoSeries", c), i.setData({
                                currentSeries: c
                            }), o && o.images && o.images.length > 0 && 7 === (l = o.images.filter((function(e) {
                                return e && (e.startsWith("http") || e.startsWith("wxfile://"))
                            }))).length && (wx.setStorageSync("selectedSeriesImages", l), wx.setStorageSync("selectedSeriesImagesId", c)), wx.showToast({
                                title: u > 0 ? "已消耗".concat(u, "积分") : "已切换",
                                icon: u > 0 ? "none" : "success",
                                duration: 1500
                            }), setTimeout((function() {
                                return wx.navigateBack()
                            }), 1e3);
                        case 24:
                        case "end":
                            return e.stop()
                    }
                }), a)
            })))()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/theme-select/theme-select.js'
});
require("pages/theme-select/theme-select.js");
$gwx_XC_9 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];

        function gz$gwx_XC_9_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'unlock-page'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'showForgot']
                    ]
                ])
                Z([
                    [7],
                    [3, 'isLocked']
                ])
                Z([3, 'modal-card'])
                Z([1, 6])
                Z([3, '*this'])
                Z([
                    [2, '<'],
                    [
                        [7],
                        [3, 'index']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'password']
                        ],
                        [3, 'length']
                    ]
                ])
                Z([
                    [7],
                    [3, 'errorMsg']
                ])
                Z([
                    [7],
                    [3, 'showForgot']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_9 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_9 = true;
        var x = ['./pages/unlock/unlock.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_9_1()
            var cGC = _n('view')
            _rz(z, cGC, 'class', 0, e, s, gg)
            var oHC = _v()
            _(cGC, oHC)
            if (_oz(z, 1, e, s, gg)) {
                oHC.wxVkey = 1
                var aJC = _v()
                _(oHC, aJC)
                if (_oz(z, 2, e, s, gg)) {
                    aJC.wxVkey = 1
                } else {
                    aJC.wxVkey = 2
                    var tKC = _n('view')
                    _rz(z, tKC, 'class', 3, e, s, gg)
                    var bMC = _v()
                    _(tKC, bMC)
                    var oNC = function(oPC, xOC, fQC, gg) {
                        var hSC = _v()
                        _(fQC, hSC)
                        if (_oz(z, 6, oPC, xOC, gg)) {
                            hSC.wxVkey = 1
                        }
                        hSC.wxXCkey = 1
                        return fQC
                    }
                    bMC.wxXCkey = 2
                    _2z(z, 4, oNC, e, s, gg, bMC, 'item', 'index', '*this')
                    var eLC = _v()
                    _(tKC, eLC)
                    if (_oz(z, 7, e, s, gg)) {
                        eLC.wxVkey = 1
                    }
                    eLC.wxXCkey = 1
                    _(aJC, tKC)
                }
                aJC.wxXCkey = 1
            }
            var lIC = _v()
            _(cGC, lIC)
            if (_oz(z, 8, e, s, gg)) {
                lIC.wxVkey = 1
            }
            oHC.wxXCkey = 1
            lIC.wxXCkey = 1
            _(r, cGC)
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
                g = "$gwx_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_9();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/unlock/unlock.wxml'] = [$gwx_XC_9, './pages/unlock/unlock.wxml'];
else __wxAppCode__['pages/unlock/unlock.wxml'] = $gwx_XC_9('./pages/unlock/unlock.wxml');;
__wxRoute = "pages/unlock/unlock";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/unlock/unlock.js";
define("pages/unlock/unlock.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = getApp();
    Page({
        data: {
            password: "",
            errorMsg: "",
            showForgot: !1,
            question: "",
            answer: "",
            correctAnswer: "",
            errorCount: 0,
            lockedUntil: 0,
            isLocked: !1,
            countdown: 0,
            countdownText: ""
        },
        onLoad: function() {
            var t = wx.getStorageSync("appLockQuestion");
            t && this.setData({
                question: t.question,
                correctAnswer: t.answer
            }), this.checkLockStatus()
        },
        onShow: function() {
            this.checkLockStatus()
        },
        checkLockStatus: function() {
            var t = wx.getStorageSync("appLockLockedUntil") || 0;
            t > Date.now() ? (this.setData({
                isLocked: !0,
                lockedUntil: t
            }), this.startCountdown()) : (this.setData({
                isLocked: !1,
                errorCount: 0
            }), wx.removeStorageSync("appLockLockedUntil"))
        },
        startCountdown: function() {
            var t = this;
            this.updateCountdown(), this.countdownTimer = setInterval((function() {
                t.updateCountdown()
            }), 1e3)
        },
        updateCountdown: function() {
            var t = this.data.lockedUntil,
                o = Date.now(),
                e = Math.max(0, Math.floor((t - o) / 1e3));
            if (e <= 0) return clearInterval(this.countdownTimer), this.setData({
                isLocked: !1,
                errorCount: 0,
                countdown: 0,
                countdownText: ""
            }), void wx.removeStorageSync("appLockLockedUntil");
            var a = Math.floor(e / 60),
                r = e % 60,
                n = "".concat(a, "分").concat(r.toString().padStart(2, "0"), "秒");
            this.setData({
                countdown: e,
                countdownText: n
            })
        },
        onUnload: function() {
            this.countdownTimer && clearInterval(this.countdownTimer)
        },
        onKeyPress: function(t) {
            var o = this;
            if (!this.data.isLocked) {
                var e = t.currentTarget.dataset.key,
                    a = this.data.password;
                if (a.length < 6) {
                    var r = a + e;
                    this.setData({
                        password: r,
                        errorMsg: ""
                    }), 6 === r.length && setTimeout((function() {
                        o.verifyPassword()
                    }), 100)
                }
            }
        },
        onDelete: function() {
            if (!this.data.isLocked) {
                var t = this.data.password;
                t.length > 0 && this.setData({
                    password: t.slice(0, -1),
                    errorMsg: ""
                })
            }
        },
        verifyPassword: function() {
            var o = this.data,
                e = o.password;
            if (!o.isLocked)
                if (e === wx.getStorageSync("appLockPassword")) wx.removeStorageSync("appLockErrorCount"), wx.removeStorageSync("appLockLockedUntil"), t.setUnlocked(), wx.switchTab({
                    url: "/pages/index/index"
                });
                else {
                    var a = (wx.getStorageSync("appLockErrorCount") || 0) + 1;
                    wx.setStorageSync("appLockErrorCount", a), a >= 2 ? this.verifyPasswordFromCloud(e) : this.handlePasswordError(!1)
                }
        },
        verifyPasswordFromCloud: function(o) {
            var e = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getAppLock"
                }
            }).then((function(a) {
                if (a.result && a.result.success && a.result.data) {
                    var r = a.result.data.password;
                    o === r ? (wx.setStorageSync("appLockPassword", r), a.result.data.question && wx.setStorageSync("appLockQuestion", {
                        question: a.result.data.question,
                        answer: a.result.data.answer
                    }), wx.setStorageSync("appLockEnabled", a.result.data.enabled), wx.removeStorageSync("appLockErrorCount"), wx.removeStorageSync("appLockLockedUntil"), t.setUnlocked(), wx.switchTab({
                        url: "/pages/index/index"
                    })) : e.handlePasswordError()
                } else e.handlePasswordError()
            })).catch((function(t) {
                e.handlePasswordError()
            }))
        },
        handlePasswordError: function(t) {
            var o = t ? wx.getStorageSync("appLockErrorCount") || 0 : this.data.errorCount + 1;
            if (this.setData({
                    errorCount: o,
                    password: ""
                }), t || wx.setStorageSync("appLockErrorCount", o), o >= 5) {
                var e = Date.now() + 36e5;
                wx.setStorageSync("appLockLockedUntil", e), this.setData({
                    isLocked: !0,
                    lockedUntil: e,
                    errorMsg: ""
                }), wx.showToast({
                    title: "错误次数过多，请1小时后再试",
                    icon: "none",
                    duration: 3e3
                }), this.startCountdown()
            } else this.setData({
                errorMsg: "密码错误，还剩 ".concat(5 - o, " 次机会")
            })
        },
        onForgotPassword: function() {
            this.data.isLocked ? wx.showToast({
                title: "已被锁定，请稍后再试",
                icon: "none"
            }) : this.data.question ? this.setData({
                showForgot: !0,
                answer: ""
            }) : wx.showModal({
                title: "忘记密码",
                content: "您未设置安全问题，无法通过验证重置密码。\n\n如需重置，请清除小程序数据后重新打开。",
                showCancel: !1,
                confirmText: "我知道了"
            })
        },
        onInputAnswer: function(t) {
            this.setData({
                answer: t.detail.value
            })
        },
        onVerifyAnswer: function() {
            var t = this.data,
                o = t.answer,
                e = t.correctAnswer;
            o && 0 !== o.trim().length ? o.trim() === e ? (wx.removeStorageSync("appLockErrorCount"), wx.removeStorageSync("appLockLockedUntil"), wx.removeStorageSync("appLockPassword"), wx.showToast({
                title: "验证成功，请设置新密码",
                icon: "success"
            }), setTimeout((function() {
                wx.redirectTo({
                    url: "/pages/lock-setting/lock-setting?reset=1"
                })
            }), 1e3)) : (wx.showToast({
                title: "答案错误",
                icon: "none"
            }), this.setData({
                answer: ""
            })) : wx.showToast({
                title: "请输入答案",
                icon: "none"
            })
        },
        onBackToPassword: function() {
            this.setData({
                showForgot: !1,
                answer: ""
            })
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/unlock/unlock.js'
});
require("pages/unlock/unlock.js");
$gwx_XC_10 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];

        function gz$gwx_XC_10_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isImageBg']
                    ],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'background-image:url('],
                            [
                                [7],
                                [3, 'selectedBg']
                            ]
                        ],
                        [1, ');background-size:cover;background-position:center;']
                    ],
                    [1, '']
                ])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'content']
                    ]
                ])
                Z([3, 'panel-content'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'template']
                ])
                Z([
                    [7],
                    [3, 'showAddTemplate']
                ])
                Z([3, 'panel-scroll'])
                Z([
                    [7],
                    [3, 'templates']
                ])
                Z([3, 'id'])
                Z([
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'isGlobal']
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'templates']
                        ],
                        [3, 'length']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'bg']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'location']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'image']
                ])
                Z([
                    [2, '<'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'imagePaths']
                        ],
                        [3, 'length']
                    ],
                    [1, 4]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'font']
                ])
                Z([
                    [7],
                    [3, 'fontColors']
                ])
                Z([3, 'value'])
                Z([3, 'onChooseFontColor'])
                Z([a, [3, 'font-color-dot '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'textColor']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'value']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'value']
                ])
                Z([a, [3, 'background:'], z[20],
                    [3, ';']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'textColor']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'value']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_10 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_10 = true;
        var x = ['./pages/write/write.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_10_1()
            var cUC = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var oVC = _v()
            _(cUC, oVC)
            if (_oz(z, 2, e, s, gg)) {
                oVC.wxVkey = 1
            }
            var lWC = _n('view')
            _rz(z, lWC, 'class', 3, e, s, gg)
            var aXC = _v()
            _(lWC, aXC)
            if (_oz(z, 4, e, s, gg)) {
                aXC.wxVkey = 1
                var x3C = _v()
                _(aXC, x3C)
                if (_oz(z, 5, e, s, gg)) {
                    x3C.wxVkey = 1
                } else {
                    x3C.wxVkey = 2
                    var o4C = _mz(z, 'scroll-view', ['scrollY', -1, 'class', 6], [], e, s, gg)
                    var c6C = _v()
                    _(o4C, c6C)
                    var h7C = function(c9C, o8C, o0C, gg) {
                        var aBD = _v()
                        _(o0C, aBD)
                        if (_oz(z, 9, c9C, o8C, gg)) {
                            aBD.wxVkey = 1
                        }
                        aBD.wxXCkey = 1
                        return o0C
                    }
                    c6C.wxXCkey = 2
                    _2z(z, 7, h7C, e, s, gg, c6C, 'item', 'index', 'id')
                    var f5C = _v()
                    _(o4C, f5C)
                    if (_oz(z, 10, e, s, gg)) {
                        f5C.wxVkey = 1
                    }
                    f5C.wxXCkey = 1
                    _(x3C, o4C)
                }
                x3C.wxXCkey = 1
            }
            var tYC = _v()
            _(lWC, tYC)
            if (_oz(z, 11, e, s, gg)) {
                tYC.wxVkey = 1
            }
            var eZC = _v()
            _(lWC, eZC)
            if (_oz(z, 12, e, s, gg)) {
                eZC.wxVkey = 1
            }
            var b1C = _v()
            _(lWC, b1C)
            if (_oz(z, 13, e, s, gg)) {
                b1C.wxVkey = 1
                var tCD = _v()
                _(b1C, tCD)
                if (_oz(z, 14, e, s, gg)) {
                    tCD.wxVkey = 1
                }
                tCD.wxXCkey = 1
            }
            var o2C = _v()
            _(lWC, o2C)
            if (_oz(z, 15, e, s, gg)) {
                o2C.wxVkey = 1
                var eDD = _v()
                _(o2C, eDD)
                var bED = function(xGD, oFD, oHD, gg) {
                    var cJD = _mz(z, 'view', ['bindtap', 18, 'class', 1, 'data-color', 2, 'style', 3], [], xGD, oFD, gg)
                    var hKD = _v()
                    _(cJD, hKD)
                    if (_oz(z, 22, xGD, oFD, gg)) {
                        hKD.wxVkey = 1
                    }
                    hKD.wxXCkey = 1
                    _(oHD, cJD)
                    return oHD
                }
                eDD.wxXCkey = 2
                _2z(z, 16, bED, e, s, gg, eDD, 'item', 'index', 'value')
            }
            aXC.wxXCkey = 1
            tYC.wxXCkey = 1
            eZC.wxXCkey = 1
            b1C.wxXCkey = 1
            o2C.wxXCkey = 1
            _(cUC, lWC)
            oVC.wxXCkey = 1
            _(r, cUC)
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
                g = "$gwx_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_10();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/write/write.wxml'] = [$gwx_XC_10, './pages/write/write.wxml'];
else __wxAppCode__['pages/write/write.wxml'] = $gwx_XC_10('./pages/write/write.wxml');;
__wxRoute = "pages/write/write";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/write/write.js";
define("pages/write/write.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
        e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        a = require("../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../@babel/runtime/helpers/defineProperty"),
        i = require("../../@babel/runtime/helpers/toConsumableArray"),
        s = require("../../@babel/runtime/helpers/objectSpread2"),
        o = require("../../utils/cloud").requirePoints,
        r = ["今天吃什么呀~", "写点什么呢🤔", "今天有什么想记录的吗？", "记得多喝水哦💧", "天气真好呀☀️", "又在写日记啦", "今天也要加油鸭！", "要不要加个表情？", "字写得真好看✨", "发呆中...", "在想什么好事呢", "周末去哪玩~", "好想睡觉😴", "肚子饿了...", "你是最棒的！", "不要点我🙅", "别戳我啦~", "小手收一收✋", "再点哭给你看😭"];
    Page({
        data: {
            statusBarHeight: 0,
            navBarHeight: 38,
            dateStr: "",
            dateNum: "",
            year: "",
            month: "",
            weekdayStr: "",
            currentTime: "",
            fullDateStr: "",
            content: "",
            displayContent: "",
            location: "",
            latitude: null,
            longitude: null,
            canSave: !1,
            isSaving: !1,
            hasChanges: !1,
            showDeleteModal: !1,
            showExitModal: !1,
            showDraftTip: !1,
            templates: [],
            showAddTemplateModal: !1,
            newTemplateTitle: "",
            newTemplateContent: "",
            canSaveTemplate: !1,
            selectedBg: "",
            fontSize: 16,
            textColor: "#333333",
            fontWeight: 400,
            fontWeightLabel: "常规",
            pendingTemplate: null,
            showOverwriteModal: !1,
            editorFocus: !1,
            editorPlaceholder: "今天的开心、烦恼和小确幸，都可以写在这里～\n文字、图片都可以用",
            showSaveToast: !1,
            saveToastText: "保存成功",
            contentLength: 0,
            imagePaths: [],
            showThought: !1,
            thoughtText: "",
            keyboardHeight: 0,
            activePanel: null,
            panelHeight: 0,
            isImageBg: !1,
            bgImages: ["https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164706_406_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164707_407_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164708_408_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164709_409_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164710_410_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164710_411_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164711_412_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164704_403_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164705_404_38.jpg", "https://gitee.com/liuxinb/xiangxinriji/raw/master/%E7%BA%B8/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260510164705_405_38.jpg"],
            bgScrollLeft: 0,
            fontColors: [{
                value: "#333333",
                name: "默认黑"
            }, {
                value: "#1A1A1A",
                name: "纯黑"
            }, {
                value: "#666666",
                name: "深灰"
            }, {
                value: "#999999",
                name: "灰色"
            }, {
                value: "#EE5A52",
                name: "红色"
            }, {
                value: "#FF8C42",
                name: "橙色"
            }, {
                value: "#F5A623",
                name: "黄色"
            }, {
                value: "#FF6B8A",
                name: "粉色"
            }, {
                value: "#8B5E3C",
                name: "棕色"
            }, {
                value: "#5B9BD5",
                name: "蓝色"
            }, {
                value: "#4CD964",
                name: "绿色"
            }, {
                value: "#AF52DE",
                name: "紫色"
            }, {
                value: "#00BCD4",
                name: "青色"
            }, {
                value: "#2ECC71",
                name: "草绿"
            }, {
                value: "#E8A87C",
                name: "珊瑚"
            }, {
                value: "#95A5A6",
                name: "银灰"
            }, {
                value: "#5D4E37",
                name: "咖啡"
            }, {
                value: "#C0392B",
                name: "酒红"
            }]
        },
        originalContent: "",
        originalLocation: "",
        originalImages: [],
        onLoad: function(t) {
            var e = this;
            this._saving = !1, this._unloadGuardActive = !1, this._loadTextSettings();
            var a = wx.getStorageSync("points");
            void 0 !== a && "" !== a && parseInt(a) > 0 ? this.setData({
                points: parseInt(a) || 0
            }) : getApp().globalData.initPromise.then((function() {
                var t = wx.getStorageSync("points") || 0;
                e.setData({
                    points: parseInt(t) || 0
                })
            }));
            var n = wx.getSystemInfoSync();
            this._isIOS = /iOS/i.test(n.system || ""), this._safeAreaBottom = n.safeArea ? n.screenHeight - n.safeArea.bottom : 0, this._fixedPanelHeight = Math.min(Math.max(320, Math.round(.4 * n.screenHeight)), 400);
            var i = new Date,
                s = i.getFullYear(),
                o = String(i.getMonth() + 1).padStart(2, "0"),
                r = String(i.getDate()).padStart(2, "0"),
                l = t.date || "".concat(s, "-").concat(o, "-").concat(r),
                c = l === "".concat(s, "-").concat(o, "-").concat(r),
                h = this.parseDate(l),
                d = h.getFullYear(),
                u = String(parseInt(l.split("-")[2])),
                g = String(parseInt(l.split("-")[1])),
                m = this.formatTime(i);
            this._pendingBaseData = {
                statusBarHeight: n.statusBarHeight || 20,
                dateStr: l,
                isToday: c,
                dateNum: u,
                year: String(d),
                month: g,
                weekdayStr: this.getWeekday(h),
                currentTime: m,
                fullDateStr: "".concat(d, "年").concat(g, "月").concat(u, "日")
            }, this.loadDiary(l), this.loadTemplates(), this._fromDraftReminder = "1" === t.fromDraft, this.startRobotThought(), t.pointsCost && wx.showToast({
                title: "已消耗" + t.pointsCost + "积分",
                icon: "none",
                duration: 1500
            })
        },
        parseDate: function(t) {
            var e = t.split("-");
            return 3 === e.length ? new Date(parseInt(e[0]), parseInt(e[1]) - 1, parseInt(e[2])) : new Date
        },
        getWeekday: function(t) {
            return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][t.getDay()]
        },
        formatTime: function(t) {
            return "".concat(String(t.getHours()).padStart(2, "0"), ":").concat(String(t.getMinutes()).padStart(2, "0"))
        },
        loadDiary: function(t) {
            var e, a, n, o, r, l, c = this,
                h = (wx.getStorageSync("diaries") || {})[t || this.data.dateStr],
                d = wx.getStorageSync("userBgSetting");
            h ? (a = h.content || "", n = h.location || "", o = h.latitude || null, r = h.longitude || null, e = d || h.background || "", l = h.imagePaths || []) : (a = "", n = "", o = null, r = null, e = d || "", l = []), d || this._fetchUserBgFromCloud(), this.setData(s(s({}, this._pendingBaseData), {}, {
                content: a,
                displayContent: a,
                location: n,
                latitude: o,
                longitude: r,
                canSave: a.length > 0 || l && l.length > 0,
                selectedBg: e,
                isImageBg: !(!e || !e.startsWith("http")),
                contentLength: a.length,
                imagePaths: l
            })), this._pendingBaseData = null, this._contentDraft = a, this._lastContent = a, this._lastCanSave = a.length > 0 || l && l.length > 0, this._lastHasChanges = !1, this._imagesDirty = !1, this.originalContent = a, this.originalLocation = n, this.originalImages = l ? i(l) : [], h && !0 === h.isDraft && a && !this._fromDraftReminder && (this.setData({
                showDraftTip: !0
            }), setTimeout((function() {
                return c.setData({
                    showDraftTip: !1
                })
            }), 3e3)), e && e.startsWith("http") && wx.getImageInfo({
                src: e
            }).catch((function() {}));
            var u = h && h.imagePaths && h.imagePaths.length > 0,
                g = h && !0 === h.isDraft;
            u || g || this._fetchDiaryFromCloud(t || this.data.dateStr)
        },
        _fetchUserBgFromCloud: function() {
            var t = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getUserBg"
                }
            }).then((function(e) {
                if (e.result && e.result.success && e.result.bgUrl) {
                    var a = e.result.bgUrl;
                    wx.setStorageSync("userBgSetting", a), wx.getImageInfo({
                        src: a
                    }).catch((function() {})), t.setData({
                        selectedBg: a,
                        isImageBg: !0
                    })
                }
            })).catch((function() {}))
        },
        _fetchDiaryFromCloud: function(t) {
            var e = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getDiary",
                    date: t
                }
            }).then((function(a) {
                if (a.result && a.result.success && a.result.found) {
                    var n = a.result.data;
                    if (n && (n.content || n.imagePaths && n.imagePaths.length > 0)) {
                        var s = wx.getStorageSync("diaries") || {},
                            o = (s[t] || {}).imagePaths || [],
                            r = n.imagePaths || [],
                            l = new Set([].concat(i(o), i(r))),
                            c = i(l);
                        s[t] = {
                            content: n.content || "",
                            location: n.location || "",
                            latitude: n.latitude || null,
                            longitude: n.longitude || null,
                            background: n.background || "plain",
                            imagePaths: c,
                            updateTime: n.updateTime ? new Date(n.updateTime).getTime() : Date.now()
                        }, wx.setStorageSync("diaries", s);
                        var h = wx.getStorageSync("userBgSetting") || "" || n.background || "";
                        e._isRestoring = !0, e._contentDraft = n.content || "", e._lastContent = n.content || "";
                        var d = c;
                        e.setData({
                            content: n.content || "",
                            displayContent: n.content || "",
                            location: n.location || "",
                            latitude: n.latitude || null,
                            longitude: n.longitude || null,
                            selectedBg: h,
                            isImageBg: !(!h || !h.startsWith("http")),
                            contentLength: (n.content || "").length,
                            imagePaths: d,
                            canSave: !!(n.content && n.content.length > 0) || d.length > 0 || n.imagePaths && n.imagePaths.length > 0
                        }), h && h.startsWith("http") && wx.getImageInfo({
                            src: h
                        }).catch((function() {})), e._pendingBaseData = null, e._lastCanSave = !!(n.content && n.content.length > 0) || d.length > 0, e._lastHasChanges = d.length > 0, e.originalContent = n.content || "", e.originalLocation = n.location || "", e.originalImages = d.slice(0), setTimeout((function() {
                            e._isRestoring = !1
                        }), 300)
                    }
                }
            })).catch((function(t) {}))
        },
        onEditorFocus: function(t) {},
        onEditorBlur: function() {
            null != this._contentDraft && this._contentDraft !== this.data.displayContent && this.setData({
                displayContent: this._contentDraft
            })
        },
        onCollapseKeyboard: function() {
            this.setData({
                editorFocus: !1
            }), wx.hideKeyboard()
        },
        onSwitchToKeyboard: function() {
            this._pendingPanelMeasure = !1, this.setData({
                activePanel: null,
                panelHeight: 0,
                showAddTemplate: !1,
                editorFocus: !0
            })
        },
        _lastCanSave: !1,
        _lastHasChanges: !1,
        _lastContent: "",
        onInput: function(t) {
            var e = this;
            if (!this._isRestoring) {
                var a, n = t.detail.value,
                    i = n.length;
                this._contentDraft = n, n === this._lastContent ? a = this._lastHasChanges : (a = n !== this.originalContent || this.data.location !== this.originalLocation, this._lastContent = n);
                var s = i > 0 || this.data.imagePaths && this.data.imagePaths.length > 0,
                    o = {
                        content: n,
                        contentLength: i
                    };
                s !== this._lastCanSave && (o.canSave = s, this._lastCanSave = s), a !== this._lastHasChanges && (o.hasChanges = a, this._lastHasChanges = a, a && !this._unloadGuardActive && (wx.enableAlertBeforeUnload({
                    message: "有未保存的内容，离开后数据将丢失"
                }), this._unloadGuardActive = !0)), this.setData(o), i > 50 && !this._scrollTimer && (this._scrollTimer = setTimeout((function() {
                    e._scrollTimer = null, wx.createSelectorQuery().select(".editor-fixed").boundingClientRect((function(t) {
                        t && wx.pageScrollTo({
                            scrollTop: t.top + t.height - 200,
                            duration: 150
                        })
                    })).exec()
                }), 200))
            }
        },
        openPanel: function(t) {
            var e = this;
            if (this.data.activePanel !== t) {
                if ("bg" === t && this.data.selectedBg) {
                    var a = this.data.bgImages.indexOf(this.data.selectedBg);
                    if (a >= 0) {
                        var n = Math.max(0, 110 * a - 187.5 + 50);
                        this.setData({
                            bgScrollLeft: -1
                        }), wx.nextTick((function() {
                            e.setData({
                                bgScrollLeft: n
                            })
                        }))
                    }
                }
                wx.hideKeyboard(), this.data.keyboardHeight > 0 ? (this._pendingPanelMeasure = !0, this.setData({
                    activePanel: t,
                    showAddTemplate: !1,
                    editorFocus: !1,
                    panelHeight: 0
                })) : this.setData({
                    activePanel: t,
                    showAddTemplate: !1,
                    editorFocus: !1,
                    panelHeight: this._fixedPanelHeight
                })
            } else this.setData({
                activePanel: null,
                panelHeight: 0,
                showAddTemplate: !1
            })
        },
        onKeyboardHeightChange: function(t) {
            var e = t.detail.height || 0;
            this.setData({
                keyboardHeight: e
            }), 0 === e && this._pendingPanelMeasure && (this._pendingPanelMeasure = !1, this.setData({
                panelHeight: this._fixedPanelHeight
            }))
        },
        closePanel: function() {
            this._pendingPanelMeasure = !1, this.setData({
                activePanel: null,
                panelHeight: 0,
                showAddTemplate: !1
            })
        },
        loadTemplates: function() {
            var t = this,
                e = (wx.getStorageSync("diaryTemplates") || []).filter((function(t) {
                    return !t.isGlobal
                })),
                a = wx.getStorageSync("globalTemplateCache");
            if (a && a.data && Date.now() - a.time < 6e5) {
                var n = [].concat(i(e), i(a.data));
                return this.setData({
                    templates: n
                }), void this.syncUserTemplatesFromCloud()
            }
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getGlobalTemplates"
                }
            }).then((function(e) {
                var a = (wx.getStorageSync("diaryTemplates") || []).filter((function(t) {
                    return !t.isGlobal
                }));
                if (e.result && e.result.success) {
                    var n = e.result.templates || [];
                    wx.setStorageSync("globalTemplateCache", {
                        data: n,
                        time: Date.now()
                    });
                    var s = [].concat(i(a), i(n));
                    t.setData({
                        templates: s
                    })
                } else t.setData({
                    templates: a
                });
                t.syncUserTemplatesFromCloud()
            })).catch((function() {
                var e = (wx.getStorageSync("diaryTemplates") || []).filter((function(t) {
                    return !t.isGlobal
                }));
                t.setData({
                    templates: e
                }), t.syncUserTemplatesFromCloud()
            }))
        },
        syncUserTemplatesFromCloud: function() {
            var t = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getUserTemplates"
                }
            }).then((function(e) {
                if (e.result && e.result.success) {
                    var a = e.result.templates || [];
                    if (0 !== a.length) {
                        var n = (wx.getStorageSync("diaryTemplates") || []).filter((function(t) {
                                return !t.isGlobal
                            })),
                            s = new Set(a.map((function(t) {
                                return t.id
                            }))),
                            o = n.filter((function(t) {
                                return !s.has(t.id)
                            })),
                            r = [].concat(i(a), i(o));
                        if (r.length !== n.length || JSON.stringify(r.map((function(t) {
                                return t.id
                            })).sort()) !== JSON.stringify(n.map((function(t) {
                                return t.id
                            })).sort())) {
                            wx.setStorageSync("diaryTemplates", r);
                            var l = t.data.templates.filter((function(t) {
                                return t.isGlobal
                            }));
                            t.setData({
                                templates: [].concat(i(r), i(l))
                            })
                        }
                    }
                }
            })).catch((function() {}))
        },
        onTplTouchStart: function(t) {
            var e = t.currentTarget.dataset.index,
                a = t.currentTarget.dataset.id,
                n = this.data.templates[e];
            this._tplTouchStartTime = Date.now(), this._tplCurrentIndex = e, this._tplTapId = a, this._tplHasMoved = !1, n && n.isGlobal || (this._tplTouchStartX = t.touches[0].clientX, this._tplTouchStartY = t.touches[0].clientY, this._tplStartTranslateX = n && n.translateX || 0, this.resetTplSwipes(e))
        },
        resetTplSwipes: function(t) {
            var e = this.data.templates;
            if (e && e.length) {
                var a = {},
                    n = !1;
                e.forEach((function(e, i) {
                    i !== t && e.translateX && 0 !== e.translateX && (a["templates[".concat(i, "].translateX")] = 0, n = !0)
                })), n && this.setData(a)
            }
        },
        resetAllTplSwipes: function() {
            var t = this.data.templates;
            if (t && t.length) {
                var e = {},
                    a = !1;
                t.forEach((function(t, n) {
                    t.translateX && 0 !== t.translateX && (e["templates[".concat(n, "].translateX")] = 0, a = !0)
                })), a && this.setData(e)
            }
        },
        onTplTouchMove: function(t) {
            var e = this;
            if (void 0 !== this._tplCurrentIndex) {
                var a = this.data.templates[this._tplCurrentIndex];
                if (!a || !a.isGlobal) {
                    var i = t.touches[0].clientX - this._tplTouchStartX,
                        s = t.touches[0].clientY - this._tplTouchStartY;
                    if (Math.abs(s) > Math.abs(i)) Math.abs(s) > 3 && (this._tplHasMoved = !0);
                    else {
                        Math.abs(i) > 3 && (this._tplHasMoved = !0);
                        var o = this._tplStartTranslateX + i;
                        o < -140 && (o = -140), o > 0 && (o = 0), this._tplTranslateX = o, this._tplRafId || (this._tplRafId = function() {
                            e.setData(n({}, "templates[".concat(e._tplCurrentIndex, "].translateX"), e._tplTranslateX)), e._tplRafId = null
                        }, setTimeout((function() {
                            e._tplRafId && "function" == typeof e._tplRafId && e._tplRafId()
                        }), 33))
                    }
                }
            }
        },
        onTplTouchEnd: function(t) {
            if (void 0 !== this._tplCurrentIndex) {
                this._tplRafId = null;
                var e = this._tplCurrentIndex,
                    a = this.data.templates[e],
                    i = void 0 !== this._tplTranslateX ? this._tplTranslateX : a && a.translateX || 0,
                    s = Date.now() - this._tplTouchStartTime;
                if (!this._tplHasMoved && s < 200) {
                    var o = a;
                    o && o.content && this.onUseTemplateDirect(o)
                } else {
                    var r = 0;
                    i < -30 && (r = -140), this.setData(n({}, "templates[".concat(e, "].translateX"), r))
                }
                this._tplTranslateX = void 0, this._tplCurrentIndex = void 0, this._tplHasMoved = !1
            }
        },
        onUseTemplateDirect: function(t) {
            if (t && t.content) return this.data.content.trim().length > 0 ? (wx.hideKeyboard(), void this.setData({
                pendingTemplate: t,
                showOverwriteModal: !0,
                editorFocus: !1,
                activePanel: null,
                panelHeight: 0
            })) : void this.applyTemplate(t)
        },
        onEditTemplate: function(t) {
            var e = t.currentTarget.dataset.index,
                a = this.data.templates[e];
            a && (this.resetAllTplSwipes(), this.setData({
                showAddTemplate: !0,
                editingTemplateIndex: e,
                editingTemplateId: a.id,
                newTemplateTitle: a.title || "",
                newTemplateContent: a.content || "",
                canSaveTemplate: !!(a.title && a.title.trim() && a.content && a.content.trim())
            }))
        },
        onDeleteTemplate: function(t) {
            var e = t.currentTarget.dataset.index,
                a = this.data.templates;
            this.resetAllTplSwipes();
            var n = i(a);
            n.splice(e, 1);
            var s = n.filter((function(t) {
                return !t.isGlobal
            }));
            wx.setStorageSync("diaryTemplates", s), wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "saveUserTemplates",
                    templates: s
                }
            }).catch((function() {})), this.setData({
                templates: n
            }), wx.showToast({
                title: "已删除",
                icon: "success",
                duration: 1500
            })
        },
        onUseTemplate: function(t) {
            var e = t.currentTarget.dataset.template;
            if (e && e.content) return this.data.content.trim().length > 0 ? (wx.hideKeyboard(), void this.setData({
                pendingTemplate: e,
                showOverwriteModal: !0,
                editorFocus: !1,
                activePanel: null,
                panelHeight: 0
            })) : void this.applyTemplate(e)
        },
        onCancelOverwrite: function() {
            this.setData({
                showOverwriteModal: !1,
                pendingTemplate: null
            })
        },
        onConfirmOverwrite: function() {
            var t = this.data.pendingTemplate;
            this.setData({
                showOverwriteModal: !1,
                pendingTemplate: null
            }), t && this.applyTemplate(t)
        },
        applyTemplate: function(t) {
            this._lastCanSave = t.content.length > 0, this._lastHasChanges = !0, this._contentDraft = t.content, this.setData({
                content: t.content,
                displayContent: t.content,
                canSave: this._lastCanSave,
                hasChanges: !0,
                activePanel: null,
                panelHeight: 0
            }), this._unloadGuardActive || (wx.enableAlertBeforeUnload({
                message: "有未保存的内容，离开后数据将丢失"
            }), this._unloadGuardActive = !0)
        },
        onAddTemplate: function() {
            this.data.templates.filter((function(t) {
                return !t.isGlobal
            })).length >= 7 ? wx.showToast({
                title: "最多创建7个自定义模板",
                icon: "none",
                duration: 2e3
            }) : this.setData({
                showAddTemplate: !0,
                editingTemplateIndex: null,
                editingTemplateId: null,
                newTemplateTitle: "",
                newTemplateContent: "",
                canSaveTemplate: !1
            })
        },
        onCloseAddTemplate: function() {
            this.setData({
                showAddTemplate: !1,
                editingTemplateIndex: null,
                editingTemplateId: null
            })
        },
        onTemplateTitleInput: function(t) {
            var e = t.detail.value,
                a = e.trim().length > 0 && this.data.newTemplateContent.trim().length > 0;
            this.setData({
                newTemplateTitle: e,
                canSaveTemplate: a
            })
        },
        onTemplateContentInput: function(t) {
            var e = t.detail.value,
                a = this.data.newTemplateTitle.trim().length > 0 && e.trim().length > 0;
            this.setData({
                newTemplateContent: e,
                canSaveTemplate: a
            })
        },
        onSaveTemplate: function() {
            var t = this;
            return a(e().mark((function a() {
                var n, r, l, c, h, d, u, g, m, p, f, S, w;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (t.data.canSaveTemplate) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (n = t.data.editingTemplateIndex, r = null != n && "" !== n) {
                                e.next = 11;
                                break
                            }
                            return e.next = 7, o(20, "save_template", "保存自定义模板");
                        case 7:
                            if ((l = e.sent).ok) {
                                e.next = 10;
                                break
                            }
                            return e.abrupt("return");
                        case 10:
                            t.setData({
                                points: l.newTotal
                            });
                        case 11:
                            c = t.data, h = c.newTemplateTitle, d = c.newTemplateContent, u = c.templates, g = c.editingTemplateId, r && g ? (m = u.map((function(t, e) {
                                return e === n ? s(s({}, t), {}, {
                                    title: h.trim(),
                                    content: d.trim()
                                }) : t
                            })), p = m.filter((function(t) {
                                return !t.isGlobal
                            })), wx.setStorageSync("diaryTemplates", p), wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "saveUserTemplates",
                                    templates: p
                                }
                            }).catch((function() {})), t.setData({
                                templates: m,
                                showAddTemplate: !1,
                                editingTemplateIndex: null,
                                editingTemplateId: null,
                                newTemplateTitle: "",
                                newTemplateContent: "",
                                canSaveTemplate: !1
                            }), wx.showToast({
                                title: "模板已更新",
                                icon: "success",
                                duration: 1500
                            })) : (f = {
                                id: Date.now().toString(),
                                title: h.trim(),
                                content: d.trim(),
                                createTime: Date.now()
                            }, S = [f].concat(i(u)), w = S.filter((function(t) {
                                return !t.isGlobal
                            })), wx.setStorageSync("diaryTemplates", w), wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "saveUserTemplates",
                                    templates: w
                                }
                            }).catch((function() {})), t.setData({
                                templates: S,
                                showAddTemplate: !1,
                                newTemplateTitle: "",
                                newTemplateContent: "",
                                canSaveTemplate: !1
                            }), wx.showToast({
                                title: "模板保存成功，消耗20积分",
                                icon: "none",
                                duration: 2e3
                            }));
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), a)
            })))()
        },
        onOpenLocationPanel: function() {
            this.openPanel("location")
        },
        onClearLocation: function() {
            if (!!this.data.location) {
                var t = this.data.content !== this.originalContent;
                this._lastHasChanges = t, this.setData({
                    location: "",
                    latitude: null,
                    longitude: null,
                    hasChanges: t
                }), t || this._disableUnloadGuard()
            }
        },
        onChooseLocation: function() {
            var t = this,
                e = getApp();
            !!this.data.activePanel && (this._pendingReopenPanel = this.data.activePanel, this.setData({
                activePanel: null,
                panelHeight: 0
            })), wx.chooseLocation({
                success: function(e) {
                    var a = e.name || e.address,
                        n = t.data.content !== t.originalContent || a !== t.originalLocation;
                    t._lastHasChanges = n, t.setData({
                        location: a,
                        latitude: e.latitude,
                        longitude: e.longitude,
                        hasChanges: n
                    }), n && !t._unloadGuardActive && (wx.enableAlertBeforeUnload({
                        message: "有未保存的内容，离开后数据将丢失"
                    }), t._unloadGuardActive = !0), t._pendingReopenPanel && setTimeout((function() {
                        t.openPanel(t._pendingReopenPanel), t._pendingReopenPanel = null
                    }), 300)
                },
                fail: function(e) {
                    -1 !== e.errMsg.indexOf("auth deny") && wx.showModal({
                        title: "提示",
                        content: "需要授权位置信息才能选择位置",
                        success: function(t) {
                            t.confirm && wx.openSetting()
                        }
                    }), t._pendingReopenPanel && setTimeout((function() {
                        t.openPanel(t._pendingReopenPanel), t._pendingReopenPanel = null
                    }), 300)
                },
                complete: function() {
                    e.globalData.skipLock = !0
                }
            })
        },
        onSave: function(t) {
            if (this._lastCanSave && !this._saving) {
                if (this._saving = !0, !(this.data.content.trim().length > 0 || this.data.imagePaths && this.data.imagePaths.length > 0)) return wx.showToast({
                    title: "请输入内容后再保存",
                    icon: "none",
                    duration: 1500
                }), void(this._saving = !1);
                if (this.data.content.length > 2e3) return wx.showToast({
                    title: "内容长度限制2000",
                    icon: "none",
                    duration: 2e3
                }), this._saving = !1, void this.setData({
                    isSaving: !1
                });
                if (!this._checkHasRealChanges()) return this.setData({
                    isSaving: !0
                }), void this.saveDraftOnly();
                this.setData({
                    isSaving: !0
                }), this.saveAndBack()
            }
        },
        _checkHasRealChanges: function() {
            if (this._imagesDirty) return !0;
            var t = this.data,
                e = t.content,
                a = t.location,
                n = (t.imagePaths || []).join(","),
                i = (this.originalImages || []).join(",");
            return e !== this.originalContent || a !== this.originalLocation || n !== i
        },
        saveDraftOnly: function() {
            var t = this.data,
                e = t.dateStr,
                a = t.content,
                n = t.location,
                i = t.latitude,
                o = t.longitude,
                r = t.selectedBg,
                l = t.imagePaths,
                c = wx.getStorageSync("diaries") || {},
                h = c[e];
            c[e] = s(s({
                content: a,
                location: n,
                latitude: i,
                longitude: o,
                background: r,
                imagePaths: l || []
            }, h && h._synced ? {
                _synced: !0
            } : {}), {}, {
                updateTime: Date.now()
            }), wx.setStorageSync("diaries", c), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), this._addDiaryChange(e, "update"), this._lastHasChanges = !1, this._imagesDirty = !1, this.setData({
                hasChanges: !1,
                isSaving: !1
            }), this._saving = !1, this._disableUnloadGuard(), this._justSaved = !0, wx.hideLoading(), this.showSaveToast("已保存"), setTimeout((function() {
                wx.navigateBack()
            }), 600)
        },
        saveAndBack: function() {
            var t = this;
            return a(e().mark((function a() {
                var n, s, o, r, l, c, h, d, u, g, m, p;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.data, s = n.dateStr, o = n.content, r = n.location, l = n.latitude, c = n.longitude, h = n.selectedBg, d = n.imagePaths, 500, 2e3, !(o && o.trim() && o.length <= 500)) {
                                e.next = 19;
                                break
                            }
                            return e.prev = 4, u = wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "msgSecCheck",
                                    content: o
                                }
                            }), g = new Promise((function(t, e) {
                                return setTimeout((function() {
                                    return e(new Error("timeout"))
                                }), 2e3)
                            })), e.next = 9, Promise.race([u, g]);
                        case 9:
                            if (!(m = e.sent).result || m.result.pass) {
                                e.next = 15;
                                break
                            }
                            return wx.showToast({
                                title: m.result.reason || "内容包含敏感信息",
                                icon: "none",
                                duration: 2e3
                            }), t._saving = !1, t.setData({
                                isSaving: !1
                            }), e.abrupt("return");
                        case 15:
                            e.next = 19;
                            break;
                        case 17:
                            e.prev = 17, e.t0 = e.catch(4);
                        case 19:
                            (p = wx.getStorageSync("diaries") || {})[s] = {
                                content: o,
                                location: r,
                                latitude: l,
                                longitude: c,
                                background: h,
                                imagePaths: d || [],
                                updateTime: Date.now()
                            }, wx.setStorageSync("diaries", p), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), t._addDiaryChange(s, "update"), t._lastHasChanges = !1, t.setData({
                                hasChanges: !1
                            }), t.originalContent = o, t.originalLocation = r, t.originalImages = d ? i(d) : [], t._imagesDirty = !1, t._finishSave("保存成功"), t._syncToCloud(s, p[s]);
                        case 32:
                        case "end":
                            return e.stop()
                    }
                }), a, null, [
                    [4, 17]
                ])
            })))()
        },
        _syncToCloud: function(t, e) {
            var a = this,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                i = 2;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "saveDiary",
                    date: t,
                    diary: e
                }
            }).then((function(e) {
                if (e.result && e.result.success) {
                    var a = wx.getStorageSync("diaries") || {};
                    a[t] && (a[t]._synced = !0, delete a[t].isDraft, wx.setStorageSync("diaries", a))
                }
            })).catch((function(s) {
                if (console.error("云端同步失败:", s), n < i) setTimeout((function() {
                    a._syncToCloud(t, e, n + 1)
                }), 2e3 * (n + 1));
                else {
                    var o = wx.getStorageSync("diaries") || {};
                    o[t] && (o[t]._pendingSync = !0, wx.setStorageSync("diaries", o))
                }
            }))
        },
        _finishSave: function(t) {
            wx.hideLoading(), this.setData({
                isSaving: !1
            }), this._saving = !1, this._disableUnloadGuard(), this._justSaved = !0, this.showSaveToast(t), setTimeout((function() {
                wx.navigateBack()
            }), 1400)
        },
        confirmDelete: function() {
            this.setData({
                showDeleteModal: !0
            })
        },
        onCancelDelete: function() {
            this.setData({
                showDeleteModal: !1
            })
        },
        onConfirmDelete: function() {
            var t = this,
                e = this.data,
                a = e.dateStr,
                n = e.imagePaths;
            this.setData({
                showDeleteModal: !1
            }), wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "deleteDiary",
                    date: a
                }
            }).then((function() {
                var e = wx.getStorageSync("diaries") || {};
                delete e[a], wx.setStorageSync("diaries", e), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), t._addDiaryChange(a, "delete");
                var i = (n || []).filter((function(t) {
                    return t && t.startsWith("cloud://")
                }));
                i.length > 0 && wx.cloud.deleteFile({
                    fileList: i
                }).catch((function() {})), wx.showToast({
                    title: "删除成功",
                    icon: "success"
                }), setTimeout((function() {
                    wx.navigateBack()
                }), 1e3)
            })).catch((function(t) {
                wx.showToast({
                    title: "删除失败，请检查网络",
                    icon: "none",
                    duration: 2e3
                })
            }))
        },
        _loadTextSettings: function() {
            var t = wx.getStorageSync("writeFontSize") || 16,
                e = wx.getStorageSync("writeTextColor") || "#333333",
                a = wx.getStorageSync("writeFontWeight") || 400,
                n = this._getFontWeightLabel(a);
            this.setData({
                fontSize: t,
                textColor: e,
                fontWeight: a,
                fontWeightLabel: n
            })
        },
        onFontSizeChanging: function(t) {
            this.setData({
                fontSize: t.detail.value
            })
        },
        onFontSizeChange: function(t) {
            var e = t.detail.value;
            wx.setStorageSync("writeFontSize", e), this.setData({
                fontSize: e
            })
        },
        onChooseFontColor: function(t) {
            var e = t.currentTarget.dataset.color;
            wx.setStorageSync("writeTextColor", e), this.setData({
                textColor: e
            })
        },
        _getFontWeightLabel: function(t) {
            return {
                100: "极细",
                200: "细体",
                300: "轻体",
                400: "常规",
                500: "中粗",
                600: "半粗",
                700: "粗体",
                800: "特粗",
                900: "极粗"
            }[t] || "常规"
        },
        onFontWeightChanging: function(t) {
            var e = t.detail.value;
            this.setData({
                fontWeight: e,
                fontWeightLabel: this._getFontWeightLabel(e)
            })
        },
        onFontWeightChange: function(t) {
            var e = t.detail.value;
            wx.setStorageSync("writeFontWeight", e), this.setData({
                fontWeight: e,
                fontWeightLabel: this._getFontWeightLabel(e)
            })
        },
        preventBubble: function() {},
        onNavigateBack: function() {
            this.data.hasChanges ? this.setData({
                showExitModal: !0
            }) : wx.navigateBack()
        },
        onCancelExit: function() {
            this.setData({
                showExitModal: !1
            })
        },
        onConfirmNoSave: function() {
            this.setData({
                showExitModal: !1
            }), this._disableUnloadGuard(), wx.navigateBack()
        },
        onConfirmSave: function() {
            this.setData({
                showExitModal: !1
            }), this.onSave()
        },
        _disableUnloadGuard: function() {
            if (this._unloadGuardActive) {
                try {
                    wx.disableAlertBeforeUnload()
                } catch (t) {}
                this._unloadGuardActive = !1
            }
        },
        _addDiaryChange: function(t, e) {
            if (t) {
                var a = (wx.getStorageSync("_diary_changes") || []).filter((function(a) {
                    return !(a.date === t && a.action === e)
                }));
                a.push({
                    date: t,
                    action: e,
                    time: Date.now()
                }), wx.setStorageSync("_diary_changes", a)
            }
        },
        onUnload: function() {
            clearTimeout(this.thoughtTimer), clearTimeout(this.hideTimer), clearTimeout(this._scrollTimer), this._disableUnloadGuard(), this._saveDraftToStorage()
        },
        onHide: function() {
            this._saveDraftToStorage()
        },
        _saveDraftToStorage: function() {
            if (!this._saving && !this._justSaved) {
                var t = this.data,
                    e = t.dateStr,
                    a = t.content,
                    n = t.location,
                    i = t.latitude,
                    o = t.longitude,
                    r = t.selectedBg,
                    l = t.imagePaths;
                if (a && a.trim()) {
                    var c = wx.getStorageSync("diaries") || {},
                        h = c[e];
                    if (h) {
                        var d = a === this.originalContent,
                            u = n === (this.originalLocation || ""),
                            g = (l || []).join(",") === (this.originalImages || []).join(",");
                        if (d && u && g) return
                    }
                    c[e] = s(s({
                        content: a,
                        location: n,
                        latitude: i,
                        longitude: o,
                        background: r,
                        imagePaths: l || []
                    }, h && h._synced ? {
                        _synced: !0
                    } : {}), {}, {
                        isDraft: !0,
                        updateTime: Date.now()
                    }), wx.setStorageSync("diaries", c), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), this._addDiaryChange(e, "update");
                    var m = wx.getStorageSync("draftDismissed") || {};
                    m[e] && (delete m[e], wx.setStorageSync("draftDismissed", m))
                }
            }
        },
        onSelectTemplate: function() {
            this.openPanel("template")
        },
        onSelectBackground: function() {
            this.openPanel("bg")
        },
        onOpenImagePanel: function() {
            this.openPanel("image")
        },
        onOpenFontSettings: function() {
            this.openPanel("font")
        },
        onChooseBg: function(t) {
            var e = t.currentTarget.dataset.bg;
            if (e) {
                if (e === this.data.selectedBg) return this.setData({
                    selectedBg: "",
                    isImageBg: !1
                }), wx.removeStorageSync("userBgSetting"), void wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "saveUserBg",
                        bgUrl: ""
                    }
                }).catch((function() {}));
                this.setData({
                    selectedBg: e,
                    isImageBg: !0
                }), wx.setStorageSync("userBgSetting", e), e && e.startsWith("http") && wx.getImageInfo({
                    src: e
                }).catch((function() {})), wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "saveUserBg",
                        bgUrl: e
                    }
                }).catch((function() {}))
            }
        },
        showSaveToast: function(t) {
            var e = this;
            this.setData({
                showSaveToast: !0,
                saveToastText: t || "保存成功"
            }), setTimeout((function() {
                e.setData({
                    showSaveToast: !1
                })
            }), 1200)
        },
        onChooseImage: function() {
            var n, s = this,
                r = 4 - this.data.imagePaths.length;
            r <= 0 ? wx.showToast({
                title: "最多添加4张图片",
                icon: "none"
            }) : (getApp().skipNextLockCheck(), wx.chooseMedia({
                count: r,
                mediaType: ["image"],
                sourceType: ["album", "camera"],
                sizeType: ["compressed"],
                success: (n = a(e().mark((function n(r) {
                    var l, c, h, d, u, g, m, p, f, S, w, v, _, T, x;
                    return e().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (!((l = r.tempFiles.filter((function(t) {
                                        return t.size > 5242880
                                    }))).length > 0)) {
                                    n.next = 6;
                                    break
                                }
                                return c = (l[0].size / 1048576).toFixed(1), wx.showToast({
                                    title: "图片".concat(c, "MB，限5M内"),
                                    icon: "none",
                                    duration: 2e3
                                }), n.abrupt("return");
                            case 6:
                                return h = r.tempFiles.length, d = 5 * h, n.next = 10, o(d, "check_only", "图片上传预检");
                            case 10:
                                if (n.sent.ok) {
                                    n.next = 13;
                                    break
                                }
                                return n.abrupt("return");
                            case 13:
                                return u = r.tempFiles.map(function() {
                                    var t = a(e().mark((function t(a, n) {
                                        var i, o;
                                        return e().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0, i = "diary-images/".concat(Date.now(), "-").concat(n, "-").concat(Math.random().toString(36).substring(2, 10)).concat(".jpg"), t.next = 5, wx.cloud.uploadFile({
                                                        filePath: a.tempFilePath,
                                                        cloudPath: i
                                                    });
                                                case 5:
                                                    return o = t.sent, s._asyncImgSecCheck(o.fileID, n), t.abrupt("return", {
                                                        success: !0,
                                                        fileID: o.fileID
                                                    });
                                                case 10:
                                                    return t.prev = 10, t.t0 = t.catch(0), t.abrupt("return", {
                                                        success: !1,
                                                        reason: "上传失败"
                                                    });
                                                case 13:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [0, 10]
                                        ])
                                    })));
                                    return function(e, a) {
                                        return t.apply(this, arguments)
                                    }
                                }()), n.next = 16, Promise.all(u);
                            case 16:
                                g = n.sent, m = 0, p = [], f = t(g);
                                try {
                                    for (f.s(); !(S = f.n()).done;)(w = S.value).success && (p.push(w.fileID), m++)
                                } catch (t) {
                                    f.e(t)
                                } finally {
                                    f.f()
                                }
                                return v = 5 * m, n.next = 24, o(v, "upload_image", "上传图片");
                            case 24:
                                if ((_ = n.sent).ok || wx.showToast({
                                        title: "积分扣除异常，图片已保留",
                                        icon: "none",
                                        duration: 2e3
                                    }), s.setData({
                                        points: _.newTotal
                                    }), m > 0) {
                                    T = [].concat(i(s.data.imagePaths), p), s.setData({
                                        imagePaths: T,
                                        canSave: !0,
                                        hasChanges: !0
                                    }), s._lastCanSave = !0, s._lastHasChanges = !0, s._imagesDirty = !0, s._unloadGuardActive || (wx.enableAlertBeforeUnload({
                                        message: "有未保存的内容，离开后数据将丢失"
                                    }), s._unloadGuardActive = !0);
                                    try {
                                        (x = wx.getStorageSync("diaries") || {})[s.data.dateStr] || (x[s.data.dateStr] = {
                                            content: "",
                                            location: "",
                                            background: "",
                                            imagePaths: [],
                                            isDraft: !0,
                                            updateTime: Date.now()
                                        }), x[s.data.dateStr].imagePaths = T, x[s.data.dateStr].updateTime = Date.now(), wx.setStorageSync("diaries", x), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), s._addDiaryChange(s.data.dateStr, "update"), s._syncToCloud(s.data.dateStr, x[s.data.dateStr])
                                    } catch (t) {}
                                    wx.showToast({
                                        title: "添加成功，消耗".concat(v, "积分"),
                                        icon: "none",
                                        duration: 1500
                                    })
                                } else wx.showToast({
                                    title: "上传失败",
                                    icon: "none",
                                    duration: 1500
                                });
                            case 28:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                }))), function(t) {
                    return n.apply(this, arguments)
                })
            }))
        },
        _asyncImgSecCheck: function(t, n) {
            var i = this;
            return a(e().mark((function a() {
                var n, s, o, r;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "imgSecCheck",
                                    fileID: t
                                }
                            });
                        case 3:
                            if ((n = e.sent).result && n.result.pass) {
                                e.next = 14;
                                break
                            }
                            return e.next = 7, wx.cloud.deleteFile({
                                fileList: [t]
                            }).catch((function() {}));
                        case 7:
                            s = i.data.imagePaths, o = s.filter((function(e) {
                                return e !== t
                            })), i.setData({
                                imagePaths: o,
                                canSave: o.length > 0 || i.data.content && i.data.content.trim().length > 0
                            }), i._imagesDirty = !0, i.originalImages = o.slice(0);
                            try {
                                r = wx.getStorageSync("diaries") || {}, i.data.dateStr && r[i.data.dateStr] && (0 !== o.length || (r[i.data.dateStr].content || "").trim() ? (r[i.data.dateStr].imagePaths = o, r[i.data.dateStr].updateTime = Date.now()) : delete r[i.data.dateStr], wx.setStorageSync("diaries", r), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), i._addDiaryChange(i.data.dateStr, "update"), r[i.data.dateStr] && i._syncToCloud(i.data.dateStr, r[i.data.dateStr]))
                            } catch (t) {}
                            wx.showToast({
                                title: "检测到违规图片，已自动移除",
                                icon: "none",
                                duration: 2e3
                            });
                        case 14:
                            e.next = 19;
                            break;
                        case 16:
                            e.prev = 16, e.t0 = e.catch(0), console.error("图片安审失败:", e.t0);
                        case 19:
                        case "end":
                            return e.stop()
                    }
                }), a, null, [
                    [0, 16]
                ])
            })))()
        },
        onDeleteImage: function(t) {
            var e = t.currentTarget.dataset.index,
                a = this.data.imagePaths,
                n = a[e],
                i = a.filter((function(t, a) {
                    return a !== e
                })),
                s = i.length > 0 || this.data.content && this.data.content.trim().length > 0;
            this.setData({
                imagePaths: i,
                canSave: s,
                hasChanges: !0
            }), this._lastCanSave = s, this._lastHasChanges = !0, this._imagesDirty = !0, this._unloadGuardActive || (wx.enableAlertBeforeUnload({
                message: "有未保存的内容，离开后数据将丢失"
            }), this._unloadGuardActive = !0);
            var o = !1,
                r = null;
            if (this.data.dateStr) {
                try {
                    var l = wx.getStorageSync("diaries") || {};
                    0 !== i.length || l[this.data.dateStr] && (l[this.data.dateStr].content || "").trim() ? (l[this.data.dateStr] || (l[this.data.dateStr] = {
                        content: "",
                        location: "",
                        background: "",
                        imagePaths: [],
                        isDraft: !0,
                        updateTime: Date.now()
                    }), l[this.data.dateStr].imagePaths = i, l[this.data.dateStr].updateTime = Date.now(), r = l[this.data.dateStr]) : (delete l[this.data.dateStr], o = !0), wx.setStorageSync("diaries", l), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), this._addDiaryChange(this.data.dateStr, "update")
                } catch (t) {}
                o ? n && wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "deleteDiary",
                        date: this.data.dateStr
                    }
                }).then((function() {
                    n && wx.cloud.deleteFile({
                        fileList: [n]
                    }).catch((function() {}))
                })).catch((function() {})) : r && wx.cloud.callFunction({
                    name: "diary",
                    data: {
                        action: "saveDiary",
                        date: this.data.dateStr,
                        diary: r
                    }
                }).then((function() {
                    n && wx.cloud.deleteFile({
                        fileList: [n]
                    }).catch((function() {}))
                })).catch((function() {}))
            }
        },
        thoughtTimer: null,
        hideTimer: null,
        _lastThought: "",
        startRobotThought: function() {
            this.scheduleNextThought(2e3 + 2e3 * Math.random())
        },
        scheduleNextThought: function(t) {
            var e = this,
                a = t || 3e3 + 5e3 * Math.random();
            clearTimeout(this.thoughtTimer), this.thoughtTimer = setTimeout((function() {
                e.showRandomThought()
            }), a)
        },
        showRandomThought: function() {
            var t = this,
                e = r[Math.floor(Math.random() * r.length)];
            e === this._lastThought && r.length > 1 && (e = r[Math.floor(Math.random() * r.length)]), this._lastThought = e, this.setData({
                showThought: !0,
                thoughtText: e
            }), clearTimeout(this.hideTimer), this.hideTimer = setTimeout((function() {
                t.setData({
                    showThought: !1
                }), t.scheduleNextThought(5e3 + 5e3 * Math.random())
            }), 2500)
        },
        onDiscardDraft: function() {
            var t = this.data.dateStr,
                e = wx.getStorageSync("diaries") || {};
            e[t] && (e[t]._synced ? e[t] = {
                _synced: !0,
                updateTime: Date.now()
            } : delete e[t], wx.setStorageSync("diaries", e), wx.setStorageSync("_diary_gen", (wx.getStorageSync("_diary_gen") || 0) + 1), this._addDiaryChange(t, "delete"));
            this.setData({
                showDraftTip: !1,
                content: "",
                displayContent: "",
                contentLength: 0,
                hasChanges: !1,
                canSave: !1,
                imagePaths: [],
                isImageBg: !1
            }), this._contentDraft = "", this._lastContent = "", this.originalContent = "", this.originalImages = [], this._lastHasChanges = !1, this._imagesDirty = !1, this._disableUnloadGuard()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/write/write.js'
});
require("pages/write/write.js");
$gwx_XC_11 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];

        function gz$gwx_XC_11_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([
                    [7],
                    [3, 'diary']
                ])
                Z([3, 'diary-content'])
                Z([3, 'diary-date-section'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'diary']
                    ],
                    [3, 'displayTime']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'diary']
                    ],
                    [3, 'location']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'diary']
                    ],
                    [3, 'content']
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'displayImages']
                        ],
                        [3, 'length']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'loading']
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'diary']
                        ]
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'loading']
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'diary']
                        ]
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_11 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_11 = true;
        var x = ['./pages/diary-detail/diary-detail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_11_1()
            var cMD = _n('view')
            _rz(z, cMD, 'class', 0, e, s, gg)
            var oND = _v()
            _(cMD, oND)
            if (_oz(z, 1, e, s, gg)) {
                oND.wxVkey = 1
                var tQD = _n('view')
                _rz(z, tQD, 'class', 2, e, s, gg)
                var oTD = _n('view')
                _rz(z, oTD, 'class', 3, e, s, gg)
                var xUD = _v()
                _(oTD, xUD)
                if (_oz(z, 4, e, s, gg)) {
                    xUD.wxVkey = 1
                }
                var oVD = _v()
                _(oTD, oVD)
                if (_oz(z, 5, e, s, gg)) {
                    oVD.wxVkey = 1
                }
                xUD.wxXCkey = 1
                oVD.wxXCkey = 1
                _(tQD, oTD)
                var eRD = _v()
                _(tQD, eRD)
                if (_oz(z, 6, e, s, gg)) {
                    eRD.wxVkey = 1
                }
                var bSD = _v()
                _(tQD, bSD)
                if (_oz(z, 7, e, s, gg)) {
                    bSD.wxVkey = 1
                }
                eRD.wxXCkey = 1
                bSD.wxXCkey = 1
                _(oND, tQD)
            }
            var lOD = _v()
            _(cMD, lOD)
            if (_oz(z, 8, e, s, gg)) {
                lOD.wxVkey = 1
            }
            var aPD = _v()
            _(cMD, aPD)
            if (_oz(z, 9, e, s, gg)) {
                aPD.wxVkey = 1
            }
            oND.wxXCkey = 1
            lOD.wxXCkey = 1
            aPD.wxXCkey = 1
            _(r, cMD)
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
                g = "$gwx_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_11();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/diary-detail/diary-detail.wxml'] = [$gwx_XC_11, './pages/diary-detail/diary-detail.wxml'];
else __wxAppCode__['pages/diary-detail/diary-detail.wxml'] = $gwx_XC_11('./pages/diary-detail/diary-detail.wxml');;
__wxRoute = "pages/diary-detail/diary-detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/diary-detail/diary-detail.js";
define("pages/diary-detail/diary-detail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Page({
        data: {
            statusBarHeight: 20,
            dateStr: "",
            diary: null,
            displayImages: [],
            loading: !1
        },
        onLoad: function(a) {
            var t = a.date;
            if (t) {
                var e = wx.getSystemInfoSync();
                this.setData({
                    dateStr: t,
                    statusBarHeight: e.statusBarHeight || 20,
                    loading: !0
                }), this.loadDiary(t)
            } else wx.showToast({
                title: "参数错误",
                icon: "none"
            })
        },
        loadDiary: function(a) {
            var t = (wx.getStorageSync("diaries") || {})[a];
            t ? this.processDiary(t) : this.fetchFromCloud(a)
        },
        fetchFromCloud: function(a) {
            var t = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getDiary",
                    date: a
                }
            }).then((function(a) {
                a.result && a.result.success && a.result.found ? t.processDiary(a.result.data) : t.setData({
                    loading: !1
                })
            })).catch((function() {
                t.setData({
                    loading: !1
                }), wx.showToast({
                    title: "加载失败",
                    icon: "none"
                })
            }))
        },
        processDiary: function(a) {
            var t = this;
            if (a) {
                var e = this.data.dateStr,
                    i = this._formatDateLabel(e, a.updateTime),
                    s = i.displayDate,
                    n = i.displayTime,
                    r = [],
                    o = a.imagePaths || [];
                if (a.displayDate = s, a.displayTime = n, Array.isArray(o) && o.length > 0) {
                    var l = o.filter((function(a) {
                        return a && a.startsWith("cloud://")
                    }));
                    l.length > 0 ? (a.images = [], this.setData({
                        diary: a,
                        displayImages: [],
                        loading: !1
                    }), wx.cloud.getTempFileURL({
                        fileList: l
                    }).then((function(e) {
                        var i = {};
                        (e.fileList || []).forEach((function(a) {
                            a.fileID && a.tempFileURL && (i[a.fileID] = a.tempFileURL)
                        })), r = o.map((function(a) {
                            return i[a] || a
                        })), a.images = r, t.setData({
                            diary: a,
                            displayImages: r
                        })
                    })).catch((function() {
                        r = o, a.images = r, t.setData({
                            diary: a,
                            displayImages: r
                        })
                    }))) : (r = o, a.images = r, this.setData({
                        diary: a,
                        displayImages: r,
                        loading: !1
                    }))
                } else a.images = [], this.setData({
                    diary: a,
                    displayImages: [],
                    loading: !1
                })
            }
        },
        _formatDateLabel: function(a, t) {
            var e = a.split("-"),
                i = parseInt(e[1]),
                s = parseInt(e[2]),
                n = "".concat(i, "月").concat(s, "日"),
                r = "";
            if (t) {
                var o = new Date(t);
                if (!isNaN(o.getTime())) {
                    var l = String(o.getHours()).padStart(2, "0"),
                        c = String(o.getMinutes()).padStart(2, "0");
                    r = "".concat(l, ":").concat(c)
                }
            }
            return {
                displayDate: n,
                displayTime: r
            }
        },
        previewImage: function(a) {
            var t = a.currentTarget.dataset.index,
                e = this.data.displayImages;
            e && 0 !== e.length && (getApp().skipNextLockCheck(), wx.previewImage({
                current: e[t],
                urls: e
            }))
        },
        goBack: function() {
            wx.navigateBack()
        },
        preventBubble: function() {}
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/diary-detail/diary-detail.js'
});
require("pages/diary-detail/diary-detail.js");
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_12 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_12 = true;
        var x = ['./pages/edit-profile/edit-profile.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_12_1()
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
                g = "$gwx_XC_12";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_12();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/edit-profile/edit-profile.wxml'] = [$gwx_XC_12, './pages/edit-profile/edit-profile.wxml'];
else __wxAppCode__['pages/edit-profile/edit-profile.wxml'] = $gwx_XC_12('./pages/edit-profile/edit-profile.wxml');;
__wxRoute = "pages/edit-profile/edit-profile";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/edit-profile/edit-profile.js";
define("pages/edit-profile/edit-profile.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../utils/cloud").callAction;
    Page({
        data: {
            nickName: "",
            avatarUrl: "",
            remainEdits: 0,
            maxEdits: 2
        },
        onLoad: function() {
            this.loadProfile(), this._updateRemainDisplay()
        },
        onShow: function() {
            this.loadProfile()
        },
        loadProfile: function() {
            var e = wx.getStorageSync("userInfo") || {};
            this.setData({
                nickName: e.nickName || "",
                avatarUrl: e.avatarUrl || ""
            })
        },
        onChooseAvatar: function(n) {
            var a = this;
            return t(e().mark((function t() {
                var r, i, o, c, s, u, l, d, h, m, w;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = getApp(), i = n.detail.avatarUrl) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return");
                        case 4:
                            if (o = a._checkCanEdit(), c = o.canEdit, o.remain, s = o.reason, c) {
                                e.next = 8;
                                break
                            }
                            return wx.showModal({
                                title: "⏰ 修改次数已用完",
                                content: s,
                                showCancel: !1,
                                confirmText: "知道了"
                            }), e.abrupt("return");
                        case 8:
                            return wx.showLoading({
                                title: "检测中..."
                            }), e.prev = 9, u = i.includes(".png") ? ".png" : ".jpg", l = "avatars/".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 8)).concat(u), e.next = 14, wx.cloud.uploadFile({
                                filePath: i,
                                cloudPath: l
                            });
                        case 14:
                            return d = e.sent, e.next = 17, wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "imgSecCheck",
                                    fileID: d.fileID
                                }
                            });
                        case 17:
                            if ((h = e.sent).result && h.result.pass) {
                                e.next = 24;
                                break
                            }
                            return e.next = 21, wx.cloud.deleteFile({
                                fileList: [d.fileID]
                            });
                        case 21:
                            return wx.hideLoading(), wx.showToast({
                                title: (null === (m = h.result) || void 0 === m ? void 0 : m.reason) || "图片违规，无法使用",
                                icon: "none"
                            }), e.abrupt("return");
                        case 24:
                            a.setData({
                                avatarUrl: d.fileID
                            }), (w = wx.getStorageSync("userInfo") || {}).avatarUrl = d.fileID, wx.setStorageSync("userInfo", w), r.globalData.skipLock = !0, a._consumeOneEdit(), wx.hideLoading(), wx.showToast({
                                title: "头像已更新",
                                icon: "none",
                                duration: 1200
                            }), e.next = 38;
                            break;
                        case 34:
                            e.prev = 34, e.t0 = e.catch(9), wx.hideLoading(), wx.showToast({
                                title: "头像上传失败",
                                icon: "none"
                            });
                        case 38:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [9, 34]
                ])
            })))()
        },
        onInputNickName: function(e) {
            var t = this,
                n = e.detail.value;
            this._pendingNickName = n, this._nickInputTimer && clearTimeout(this._nickInputTimer), this._nickInputTimer = setTimeout((function() {
                t.setData({
                    nickName: t._pendingNickName || ""
                })
            }), 300)
        },
        onSave: function() {
            var a = this;
            return t(e().mark((function t() {
                var r, i, o, c, s, u, l, d, h, m;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = a._pendingNickName || a.data.nickName || "", i = a.data.avatarUrl, r.trim()) {
                                e.next = 5;
                                break
                            }
                            return wx.showToast({
                                title: "请输入昵称",
                                icon: "none"
                            }), e.abrupt("return");
                        case 5:
                            if (o = a._checkCanEdit(), c = o.canEdit, o.remain, s = o.reason, c) {
                                e.next = 9;
                                break
                            }
                            return wx.showModal({
                                title: "⏰ 修改次数已用完",
                                content: s,
                                showCancel: !1,
                                confirmText: "知道了"
                            }), e.abrupt("return");
                        case 9:
                            if (u = wx.getStorageSync("userInfo") || {}, l = i !== u.avatarUrl, d = r.trim() !== (u.nickName || ""), l || d) {
                                e.next = 15;
                                break
                            }
                            return wx.showToast({
                                title: "未做任何修改",
                                icon: "none"
                            }), e.abrupt("return");
                        case 15:
                            return wx.showLoading({
                                title: "保存中..."
                            }), e.prev = 16, e.next = 19, wx.cloud.callFunction({
                                name: "diary",
                                data: {
                                    action: "msgSecCheck",
                                    content: r
                                }
                            });
                        case 19:
                            if ((h = e.sent).result && h.result.pass) {
                                e.next = 24;
                                break
                            }
                            return wx.hideLoading(), wx.showToast({
                                title: "昵称内容违规，请修改",
                                icon: "none"
                            }), e.abrupt("return");
                        case 24:
                            return m = {
                                nickName: r,
                                avatarUrl: i || ""
                            }, wx.setStorageSync("userInfo", m), a._consumeOneEdit(), e.prev = 27, e.next = 30, n("saveUserInfo", {
                                nickName: r,
                                avatarUrl: i
                            });
                        case 30:
                            e.next = 34;
                            break;
                        case 32:
                            e.prev = 32, e.t0 = e.catch(27);
                        case 34:
                            wx.hideLoading(), wx.showToast({
                                title: "已保存",
                                icon: "none",
                                duration: 800
                            }), setTimeout((function() {
                                wx.navigateBack()
                            }), 600), e.next = 43;
                            break;
                        case 39:
                            e.prev = 39, e.t1 = e.catch(16), wx.hideLoading(), wx.showToast({
                                title: "保存失败，请重试",
                                icon: "none"
                            });
                        case 43:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [16, 39],
                    [27, 32]
                ])
            })))()
        },
        _getEditRecord: function() {
            var e = wx.getStorageSync("profile_edit_limit") || null;
            if (!e) return null;
            var t = new Date;
            return e.year !== t.getFullYear() || e.month !== t.getMonth() + 1 ? null : e
        },
        _checkCanEdit: function() {
            var e = this._getEditRecord();
            return e ? e.count >= 2 ? {
                canEdit: !1,
                remain: 0,
                reason: "本月修改次数已用完，下月初重置"
            } : {
                canEdit: !0,
                remain: 2 - e.count
            } : {
                canEdit: !0,
                remain: 2
            }
        },
        _consumeOneEdit: function() {
            var e = new Date,
                t = this._getEditRecord();
            if (!t) return wx.setStorageSync("profile_edit_limit", {
                year: e.getFullYear(),
                month: e.getMonth() + 1,
                count: 1,
                lastEditTime: Date.now()
            }), void this._updateRemainDisplay(1);
            t.count += 1, t.lastEditTime = Date.now(), wx.setStorageSync("profile_edit_limit", t), this._updateRemainDisplay(t.count)
        },
        _updateRemainDisplay: function(e) {
            var t = e;
            if (void 0 === t) {
                var n = this._getEditRecord();
                t = n ? n.count : 0
            }
            this.setData({
                remainEdits: Math.max(0, 2 - t)
            })
        },
        onBack: function() {
            wx.navigateBack()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/edit-profile/edit-profile.js'
});
require("pages/edit-profile/edit-profile.js");
$gwx_XC_13 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_13 || [];

        function gz$gwx_XC_13_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([3, 'onExport'])
                Z([a, [3, 'btn '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'exporting']
                        ],
                        [1, 'dis'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'exporting']
                ])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'exporting']
                    ]
                ])
                Z([3, 'onClosePicker'])
                Z([a, [3, 'mask '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showPicker']
                        ],
                        [1, 'show'],
                        [1, '']
                    ],
                    [3, ' sheet-mask']
                ])
                Z([3, 'preventBubble'])
                Z([3, 'sheet'])
                Z([
                    [7],
                    [3, 'rangeOptions']
                ])
                Z([3, 'key'])
                Z([3, 'onSelectRange'])
                Z([a, [3, 'sheet-item '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'range']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'key']
                            ]
                        ],
                        [1, 'on'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'key']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'range']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'key']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_13 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_13 = true;
        var x = ['./pages/export-diary/export-diary.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_13_1()
            var hYD = _n('view')
            _rz(z, hYD, 'class', 0, e, s, gg)
            var oZD = _mz(z, 'button', ['catchtap', 1, 'class', 1, 'disabled', 2], [], e, s, gg)
            var c1D = _v()
            _(oZD, c1D)
            if (_oz(z, 4, e, s, gg)) {
                c1D.wxVkey = 1
            }
            c1D.wxXCkey = 1
            _(hYD, oZD)
            var o2D = _mz(z, 'view', ['bindtap', 5, 'class', 1], [], e, s, gg)
            var l3D = _mz(z, 'view', ['catchtap', 7, 'class', 1], [], e, s, gg)
            var a4D = _v()
            _(l3D, a4D)
            var t5D = function(b7D, e6D, o8D, gg) {
                var o0D = _mz(z, 'view', ['bindtap', 11, 'class', 1, 'data-key', 2], [], b7D, e6D, gg)
                var fAE = _v()
                _(o0D, fAE)
                if (_oz(z, 14, b7D, e6D, gg)) {
                    fAE.wxVkey = 1
                }
                fAE.wxXCkey = 1
                _(o8D, o0D)
                return o8D
            }
            a4D.wxXCkey = 2
            _2z(z, 9, t5D, e, s, gg, a4D, 'item', 'index', 'key')
            _(o2D, l3D)
            _(hYD, o2D)
            _(r, hYD)
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
                g = "$gwx_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_13();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/export-diary/export-diary.wxml'] = [$gwx_XC_13, './pages/export-diary/export-diary.wxml'];
else __wxAppCode__['pages/export-diary/export-diary.wxml'] = $gwx_XC_13('./pages/export-diary/export-diary.wxml');;
__wxRoute = "pages/export-diary/export-diary";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/export-diary/export-diary.js";
define("pages/export-diary/export-diary.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        e = require("../../@babel/runtime/helpers/asyncToGenerator"),
        a = (getApp(), require("../../utils/cloud").requirePoints);

    function n(t) {
        var e = String(t.getMonth() + 1).padStart(2, "0"),
            a = String(t.getDate()).padStart(2, "0");
        return "".concat(t.getFullYear(), "-").concat(e, "-").concat(a)
    }
    Page({
        data: {
            statusBarHeight: 20,
            diaryCount: 0,
            totalCount: 0,
            rangeText: "全部",
            startDate: "",
            endDate: "",
            maxDate: "",
            sortDesc: !0,
            range: "all",
            showPicker: !1,
            rangeOptions: [{
                key: "all",
                name: "全部日记"
            }, {
                key: "recent",
                name: "近30天"
            }, {
                key: "year",
                name: "今年"
            }, {
                key: "month",
                name: "本月"
            }],
            exporting: !1,
            showSuccess: !1,
            copiedCount: 0
        },
        onLoad: function() {
            var t = wx.getSystemInfoSync();
            this.setData({
                statusBarHeight: t.statusBarHeight
            });
            var e = n(new Date);
            this.setData({
                startDate: e,
                endDate: e,
                maxDate: e
            });
            try {
                var a = wx.getStorageSync("diaries") || {},
                    r = Object.keys(a).length;
                this.setData({
                    diaryCount: r,
                    totalCount: r
                })
            } catch (t) {
                this.setData({
                    totalCount: 0
                })
            }
        },
        goBack: function() {
            wx.navigateBack()
        },
        preventBubble: function() {},
        onPickRange: function() {
            this.setData({
                showPicker: !0
            })
        },
        onClosePicker: function() {
            this.setData({
                showPicker: !1
            })
        },
        onSelectRange: function(t) {
            this.setData({
                range: t.currentTarget.dataset.key
            })
        },
        onConfirmRange: function() {
            this.onClosePicker();
            var t = this.data.range;
            "custom" !== t && this._applyQuickRange(t), this._updateCountAndText()
        },
        _applyQuickRange: function(t) {
            var e, a, r = new Date;
            switch (t) {
                case "all":
                    try {
                        var o = wx.getStorageSync("diaries") || {},
                            i = Object.keys(o).sort();
                        e = i[0] || n(r), a = i[i.length - 1] || n(r)
                    } catch (t) {
                        e = a = n(r)
                    }
                    break;
                case "recent":
                    e = n(new Date(r.getTime() - 2592e6)), a = n(r);
                    break;
                case "year":
                    e = r.getFullYear() + "-01-01", a = n(r);
                    break;
                case "month":
                    e = r.getFullYear() + "-" + String(r.getMonth() + 1).padStart(2, "0") + "-01", a = n(r);
                    break;
                default:
                    e = a = n(r)
            }
            this.setData({
                startDate: e,
                endDate: a
            })
        },
        _updateCountAndText: function() {
            var t = this.data;
            try {
                var e = wx.getStorageSync("diaries") || {},
                    a = 0;
                if ("all" === t.range) a = Object.keys(e).length;
                else a = Object.keys(e).filter((function(e) {
                    return e >= t.startDate && e <= t.endDate
                })).length;
                this.setData({
                    totalCount: a,
                    rangeText: {
                        all: "全部",
                        recent: "近30天",
                        year: "今年",
                        month: "本月"
                    }[t.range] || "全部"
                })
            } catch (t) {}
        },
        onToggleSort: function() {
            this.setData({
                sortDesc: !this.data.sortDesc
            })
        },
        onExport: function() {
            var r = this;
            return e(t().mark((function e() {
                var o, i;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!(o = r).data.exporting) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return o.setData({
                                exporting: !0
                            }), t.next = 6, a(100, "export_diary", "导出日记");
                        case 6:
                            if (t.sent.ok) {
                                t.next = 10;
                                break
                            }
                            return o.setData({
                                exporting: !1
                            }), t.abrupt("return");
                        case 10:
                            return wx.showToast({
                                title: "已消耗100积分",
                                icon: "none",
                                duration: 1500
                            }), t.next = 13, new Promise((function(t) {
                                return setTimeout(t, 1400)
                            }));
                        case 13:
                            wx.showLoading({
                                title: "正在导出..."
                            }), i = {
                                action: "exportDiary",
                                sortDesc: o.data.sortDesc
                            }, "all" !== o.data.range && (i.startDate = o.data.startDate, i.endDate = o.data.endDate), wx.cloud.callFunction({
                                name: "diary",
                                data: i
                            }).then((function(t) {
                                var e = t.result;
                                return e.success || "EMPTY" !== e.code ? e.success && e.fileID ? void wx.cloud.downloadFile({
                                    fileID: e.fileID
                                }).then((function(t) {
                                    wx.hideLoading();
                                    var e = wx.getFileSystemManager(),
                                        a = Date.now(),
                                        r = "我的日记_" + (o.data.endDate ? o.data.endDate.replace(/\//g, "-") : n(new Date).replace(/\//g, "-")) + "_" + a + ".txt",
                                        i = wx.env.USER_DATA_PATH + "/" + r;
                                    try {
                                        e.unlinkSync(i)
                                    } catch (t) {}
                                    e.copyFile({
                                        srcPath: t.tempFilePath,
                                        destPath: i,
                                        success: function() {
                                            wx.hideLoading(), wx.openDocument({
                                                filePath: i,
                                                showMenu: !0,
                                                success: function() {
                                                    o.setData({
                                                        exporting: !1
                                                    })
                                                },
                                                fail: function(t) {
                                                    e.readFile({
                                                        filePath: i,
                                                        encoding: "utf-8",
                                                        success: function(t) {
                                                            wx.setClipboardData({
                                                                data: t.data || ""
                                                            }), o.setData({
                                                                exporting: !1
                                                            })
                                                        },
                                                        fail: function() {
                                                            wx.showToast({
                                                                title: "导出失败",
                                                                icon: "none"
                                                            }), o.setData({
                                                                exporting: !1
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        },
                                        fail: function(t) {
                                            wx.hideLoading(), wx.showToast({
                                                title: "保存失败: " + (t.errMsg || ""),
                                                icon: "none"
                                            }), o.setData({
                                                exporting: !1
                                            })
                                        }
                                    })
                                })).catch((function(t) {
                                    wx.hideLoading(), wx.showToast({
                                        title: "下载文件失败",
                                        icon: "none"
                                    }), o.setData({
                                        exporting: !1
                                    })
                                })) : (wx.hideLoading(), wx.showToast({
                                    title: (e.error || "") + "导出失败",
                                    icon: "none"
                                }), void o.setData({
                                    exporting: !1
                                })) : (wx.hideLoading(), wx.showToast({
                                    title: "该范围内没有日记",
                                    icon: "none"
                                }), void o.setData({
                                    exporting: !1
                                }))
                            })).catch((function(t) {
                                wx.hideLoading(), wx.showToast({
                                    title: "导出失败，请重试",
                                    icon: "none"
                                }), o.setData({
                                    exporting: !1
                                })
                            }));
                        case 17:
                        case "end":
                            return t.stop()
                    }
                }), e)
            })))()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/export-diary/export-diary.js'
});
require("pages/export-diary/export-diary.js");
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_14 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_14 = true;
        var x = ['./pages/faq/faq.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_14_1()
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
                g = "$gwx_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_14();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/faq/faq.wxml'] = [$gwx_XC_14, './pages/faq/faq.wxml'];
else __wxAppCode__['pages/faq/faq.wxml'] = $gwx_XC_14('./pages/faq/faq.wxml');;
__wxRoute = "pages/faq/faq";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/faq/faq.js";
define("pages/faq/faq.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Page({
        data: {
            navTop: 0,
            navHeight: 44,
            faqs: [{
                q: "日记数据保存在哪里？",
                a: "日记数据保存在云端（与微信账号绑定），换手机也能同步数据，不会丢失。写完日记后记得点保存按钮，否则可能导致数据未同步到云端哦。",
                open: !0
            }, {
                q: "日记内容安全吗？",
                a: "日记内容采用行业标准加密算法保存在手机本地，同时以加密方式上传至服务器。我们严格保护您的隐私，除非您主动分享，任何人（包括开发者）都无法看到您的日记内容。",
                open: !0
            }, {
                q: "如何设置每日写日记提醒？",
                a: '进入"我的"页面，点击"日记提醒"，开启提醒开关并设置提醒时间，系统会在每天指定时间提醒您记录心情。',
                open: !0
            }, {
                q: "日记密码忘了怎么办？",
                a: '如果忘记日记密码，只能通过密保问题找回。在密码锁设置页面点击"忘记密码"，回答正确的密保问题即可重置密码。请务必牢记您设置的密保问题答案。',
                open: !0
            }, {
                q: "更换手机后数据还在吗？",
                a: "在的。只要使用同一个微信账号登录，云端数据会自动同步到新设备，所有日记都不会丢失。",
                open: !0
            }]
        },
        onLoad: function() {
            try {
                var t = wx.getMenuButtonBoundingClientRect(),
                    a = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
                this.setData({
                    navTop: t.top - (t.top - a.statusBarHeight),
                    navHeight: t.bottom + 4 - a.statusBarHeight,
                    capsuleBottom: t.bottom
                })
            } catch (t) {
                wx.getSystemInfoSync();
                this.setData({
                    navTop: 0,
                    navHeight: 44
                })
            }
        },
        onBack: function() {
            wx.navigateBack()
        },
        onToggle: function(t) {
            var a = t.currentTarget.dataset.index,
                n = this.data.faqs;
            n[a].open = !n[a].open, this.setData({
                faqs: n
            })
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/faq/faq.js'
});
require("pages/faq/faq.js");
$gwx_XC_15 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_15 || [];

        function gz$gwx_XC_15_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([
                    [7],
                    [3, 'heatmapDays']
                ])
                Z([3, 'date'])
                Z([3, 'onDayTap'])
                Z([a, [3, 'heatmap-cell '],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'level']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'isToday']
                        ],
                        [1, 'today'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'isFuture']
                        ],
                        [1, 'future'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'date']
                ])
                Z([3, 'cell-hover'])
                Z([3, '80'])
                Z([
                    [2, '&&'],
                    [
                        [2, '&&'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'hasDiary']
                        ],
                        [
                            [2, '!'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'isFuture']
                            ]
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'isToday']
                        ]
                    ]
                ])
                Z([3, 'onCloseDayModal'])
                Z([a, [3, 'day-modal-mask '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showDayModal']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, 'preventBubble'])
                Z([3, 'day-modal'])
                Z([3, 'day-modal-body'])
                Z([
                    [7],
                    [3, 'selectedDayData']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'selectedDayData']
                    ],
                    [3, 'content']
                ])
                Z(z[14])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_15 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_15 = true;
        var x = ['./pages/holiday/holiday.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_15_1()
            var oDE = _n('view')
            _rz(z, oDE, 'class', 0, e, s, gg)
            var cEE = _v()
            _(oDE, cEE)
            var oFE = function(aHE, lGE, tIE, gg) {
                var bKE = _mz(z, 'view', ['bindtap', 3, 'class', 1, 'data-date', 2, 'hoverClass', 3, 'hoverStayTime', 4], [], aHE, lGE, gg)
                var oLE = _v()
                _(bKE, oLE)
                if (_oz(z, 8, aHE, lGE, gg)) {
                    oLE.wxVkey = 1
                }
                oLE.wxXCkey = 1
                _(tIE, bKE)
                return tIE
            }
            cEE.wxXCkey = 2
            _2z(z, 1, oFE, e, s, gg, cEE, 'item', 'index', 'date')
            var xME = _mz(z, 'view', ['bindtap', 9, 'class', 1], [], e, s, gg)
            var oNE = _mz(z, 'view', ['catchtap', 11, 'class', 1], [], e, s, gg)
            var cPE = _n('view')
            _rz(z, cPE, 'class', 13, e, s, gg)
            var hQE = _v()
            _(cPE, hQE)
            if (_oz(z, 14, e, s, gg)) {
                hQE.wxVkey = 1
                var oRE = _v()
                _(hQE, oRE)
                if (_oz(z, 15, e, s, gg)) {
                    oRE.wxVkey = 1
                }
                oRE.wxXCkey = 1
            } else {
                hQE.wxVkey = 2
            }
            hQE.wxXCkey = 1
            _(oNE, cPE)
            var fOE = _v()
            _(oNE, fOE)
            if (_oz(z, 16, e, s, gg)) {
                fOE.wxVkey = 1
            }
            fOE.wxXCkey = 1
            _(xME, oNE)
            _(oDE, xME)
            _(r, oDE)
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
                g = "$gwx_XC_15";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_15();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/holiday/holiday.wxml'] = [$gwx_XC_15, './pages/holiday/holiday.wxml'];
else __wxAppCode__['pages/holiday/holiday.wxml'] = $gwx_XC_15('./pages/holiday/holiday.wxml');;
__wxRoute = "pages/holiday/holiday";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/holiday/holiday.js";
define("pages/holiday/holiday.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        a = require("../../@babel/runtime/helpers/toConsumableArray"),
        e = require("../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../@babel/runtime/helpers/objectSpread2"),
        r = require("../../utils/cloud.js"),
        o = require("../../utils/cloud").requirePoints;
    Page({
        data: {
            statusBarHeight: 20,
            currentYear: 0,
            currentMonth: 0,
            isCurrentMonth: !0,
            weekdays: ["日", "一", "二", "三", "四", "五", "六"],
            startBlank: [],
            heatmapDays: [],
            monthWriteDays: 0,
            totalDaysInMonth: 31,
            completionRate: 0,
            continuousDays: 0,
            maxContinuousDays: 0,
            timeSlots: [],
            showDayModal: !1,
            selectedDate: "",
            selectedDateDisplay: "",
            selectedDayData: null,
            heatmapData: {},
            loading: !1,
            _dataVersion: 0
        },
        onLoad: function() {
            var t = wx.getSystemInfoSync(),
                a = new Date;
            this.setData({
                statusBarHeight: t.statusBarHeight || 20,
                currentYear: a.getFullYear(),
                currentMonth: a.getMonth() + 1
            })
        },
        onShow: function() {
            "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
                selected: 2
            });
            var t = this.data,
                a = t.currentYear,
                e = t.currentMonth;
            if (a && e) {
                var r = wx.getStorageSync("_diary_gen") || 0,
                    o = this.data._dataVersion,
                    s = "".concat("heatmap_cache_").concat(a, "_").concat(e),
                    i = wx.getStorageSync(s);
                i && i.heatmapDays && i.heatmapDays.length > 0 && r === o ? this.setData(n(n({}, i), {}, {
                    isCurrentMonth: this._checkIsCurrentMonth(a, e),
                    heatmapDays: this._refreshDayFlags(i.heatmapDays, a, e)
                })) : this.loadHeatmapData()
            }
        },
        _refreshDayFlags: function(t, a, e) {
            var r = new Date,
                o = a === r.getFullYear() && e === r.getMonth() + 1,
                s = r.getDate();
            return t.map((function(t) {
                return n(n({}, t), {}, {
                    isToday: o && t.day === s,
                    isFuture: o && t.day > s
                })
            }))
        },
        _checkIsCurrentMonth: function(t, a) {
            var e = new Date;
            return t === e.getFullYear() && a === e.getMonth() + 1
        },
        loadHeatmapData: function() {
            var n = this;
            return e(t().mark((function e() {
                var o, s, i, c, u, h, l, D, d, p, y, g, m, f, w, M, _, v, S, x, b, F, C, k, Y, T;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (o = n.data, s = o.currentYear, i = o.currentMonth, s && i) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return n.setData({
                                loading: !0
                            }), t.prev = 4, t.next = 7, r.callAction("getHeatmapData", {
                                year: s,
                                month: i
                            });
                        case 7:
                            if ((c = t.sent).result && c.result.success) {
                                for (u = c.result.data, h = u.heatmapData, l = u.stats, D = u.timeSlots, d = new Date(s, i - 1, 1).getDay(), p = new Array(d).fill(0), y = new Date, g = s === y.getFullYear() && i === y.getMonth() + 1, m = y.getDate(), f = l.totalDays || new Date(s, i, 0).getDate(), w = [], M = 1; M <= f; M++) _ = h[M], v = g && M > m, S = g && M === m, w.push({
                                    day: M,
                                    date: "".concat(s, "-").concat(String(i).padStart(2, "0"), "-").concat(String(M).padStart(2, "0")),
                                    hasDiary: !!_ && _.hasDiary,
                                    level: _ ? _.level : "",
                                    isToday: S,
                                    isFuture: v
                                });
                                x = f > 0 ? Math.round(l.writeDays / f * 100) : 0, 10, b = Math.max.apply(Math, a(D.map((function(t) {
                                    return t.count
                                }))).concat([10])), F = D.map((function(t) {
                                    return {
                                        label: t.label,
                                        count: t.count,
                                        percent: Math.round(t.count / b * 100)
                                    }
                                })), C = wx.getStorageSync("_diary_gen") || 0, k = {
                                    startBlank: p,
                                    heatmapDays: w,
                                    heatmapData: h,
                                    monthWriteDays: l.writeDays,
                                    totalDaysInMonth: f,
                                    completionRate: x,
                                    continuousDays: l.continuousDays,
                                    maxContinuousDays: l.maxContinuousDays,
                                    timeSlots: F,
                                    isCurrentMonth: g,
                                    loading: !1,
                                    _dataVersion: C
                                }, n.setData(k), Y = "".concat("heatmap_cache_").concat(s, "_").concat(i), wx.setStorageSync(Y, k)
                            } else console.error("获取热力图数据失败:", null === (T = c.result) || void 0 === T ? void 0 : T.error), n.setData({
                                loading: !1
                            }), n._initEmptyData();
                            t.next = 16;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(4), console.error("获取热力图数据异常:", t.t0), n.setData({
                                loading: !1
                            }), n._loadFromCacheOrEmpty();
                        case 16:
                        case "end":
                            return t.stop()
                    }
                }), e, null, [
                    [4, 11]
                ])
            })))()
        },
        _loadFromCacheOrEmpty: function() {
            var t = this.data,
                a = t.currentYear,
                e = t.currentMonth,
                r = "".concat("heatmap_cache_").concat(a, "_").concat(e),
                o = wx.getStorageSync(r);
            o && o.heatmapDays && o.heatmapDays.length > 0 ? this.setData(n(n({}, o), {}, {
                isCurrentMonth: this._checkIsCurrentMonth(a, e),
                heatmapDays: this._refreshDayFlags(o.heatmapDays, a, e)
            })) : this._initEmptyData()
        },
        _initEmptyData: function() {
            for (var t = this.data, a = t.currentYear, e = t.currentMonth, n = new Date, r = a === n.getFullYear() && e === n.getMonth() + 1, o = n.getDate(), s = new Date(a, e, 0).getDate(), i = new Date(a, e - 1, 1).getDay(), c = new Array(i).fill(0), u = [], h = 1; h <= s; h++) u.push({
                day: h,
                date: "".concat(a, "-").concat(String(e).padStart(2, "0"), "-").concat(String(h).padStart(2, "0")),
                hasDiary: !1,
                level: "",
                isToday: r && h === o,
                isFuture: r && h > o
            });
            this.setData({
                startBlank: c,
                heatmapDays: u,
                heatmapData: {},
                monthWriteDays: 0,
                totalDaysInMonth: s,
                completionRate: 0,
                continuousDays: 0,
                maxContinuousDays: 0,
                timeSlots: [],
                isCurrentMonth: r,
                _dataVersion: 0
            })
        },
        onPrevMonth: function() {
            var t = this.data,
                a = t.currentYear,
                e = t.currentMonth;
            --e < 1 && (e = 12, a--), this.setData({
                currentYear: a,
                currentMonth: e,
                _dataVersion: 0
            }), this._loadMonthData(a, e)
        },
        onNextMonth: function() {
            var t = new Date;
            if (this.data.currentYear !== t.getFullYear() || this.data.currentMonth !== t.getMonth() + 1) {
                var a = this.data,
                    e = a.currentYear,
                    n = a.currentMonth;
                ++n > 12 && (n = 1, e++), this.setData({
                    currentYear: e,
                    currentMonth: n,
                    _dataVersion: 0
                }), this._loadMonthData(e, n)
            }
        },
        _loadMonthData: function(t, a) {
            var e = "".concat("heatmap_cache_").concat(t, "_").concat(a),
                r = wx.getStorageSync(e);
            r && r.heatmapDays && r.heatmapDays.length > 0 ? this.setData(n(n({}, r), {}, {
                isCurrentMonth: this._checkIsCurrentMonth(t, a),
                heatmapDays: this._refreshDayFlags(r.heatmapDays, t, a)
            })) : this.loadHeatmapData()
        },
        onDayTap: function(t) {
            var a = t.currentTarget.dataset.date,
                e = parseInt(a.split("-")[2]),
                n = this.data.heatmapData[e],
                r = a.split("-"),
                o = "".concat(parseInt(r[1]), "月").concat(parseInt(r[2]), "日");
            if (n && n.hasDiary) this.setData({
                showDayModal: !0,
                selectedDate: a,
                selectedDateDisplay: o,
                selectedDayData: {
                    words: n.words,
                    images: n.images,
                    content: n.content
                }
            });
            else {
                if (this._isFutureDate(a)) return void wx.showToast({
                    title: "不能补写未来日记",
                    icon: "none"
                });
                this._isToday(a) ? wx.navigateTo({
                    url: "/pages/write/write?date=".concat(a)
                }) : this._handleMakeupWrite(a, o)
            }
        },
        _isFutureDate: function(t) {
            var a = new Date;
            return t > "".concat(a.getFullYear(), "-").concat(String(a.getMonth() + 1).padStart(2, "0"), "-").concat(String(a.getDate()).padStart(2, "0"))
        },
        _isToday: function(t) {
            var a = new Date;
            return t === "".concat(a.getFullYear(), "-").concat(String(a.getMonth() + 1).padStart(2, "0"), "-").concat(String(a.getDate()).padStart(2, "0"))
        },
        _handleMakeupWrite: function(a, n) {
            return e(t().mark((function r() {
                return t().wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            wx.showModal({
                                title: "补写日记",
                                content: "补写 ".concat(n, " 的日记需要消耗15积分，是否继续？"),
                                confirmText: "继续",
                                confirmColor: "#FF9500",
                                success: function() {
                                    var n = e(t().mark((function e(n) {
                                        var r;
                                        return t().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    if (n.confirm) {
                                                        t.next = 2;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 2:
                                                    return t.next = 4, o(15, "makeup_diary", "补写日记");
                                                case 4:
                                                    if ((r = t.sent) && r.ok) {
                                                        t.next = 7;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 7:
                                                    wx.navigateTo({
                                                        url: "/pages/write/write?date=".concat(a, "&pointsCost=15")
                                                    });
                                                case 8:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return n.apply(this, arguments)
                                    }
                                }()
                            });
                        case 1:
                        case "end":
                            return r.stop()
                    }
                }), r)
            })))()
        },
        onCloseDayModal: function() {
            this.setData({
                showDayModal: !1
            })
        },
        preventBubble: function() {},
        onGoToDiary: function() {
            var t = this.data.selectedDate;
            this.setData({
                showDayModal: !1
            }), wx.navigateTo({
                url: "/pages/diary-detail/diary-detail?date=".concat(t)
            })
        },
        onPullDownRefresh: function() {
            this.setData({
                _dataVersion: 0
            }), this.loadHeatmapData().finally((function() {
                wx.stopPullDownRefresh()
            }))
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/holiday/holiday.js'
});
require("pages/holiday/holiday.js");
$gwx_XC_16 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];

        function gz$gwx_XC_16_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'handleTouchEnd'])
                Z([3, 'handleTouchMove'])
                Z([3, 'handleTouchStart'])
                Z([3, 'paper-stack'])
                Z([
                    [7],
                    [3, 'paperCount']
                ])
                Z([3, '*this'])
                Z([3, 'handleTap'])
                Z([a, [3, 'paper '],
                    [
                        [2, '?:'],
                        [
                            [2, '<'],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentIndex']
                            ]
                        ],
                        [1, 'swiped'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentIndex']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([a, [3, 'transform:'],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentIndex']
                            ]
                        ],
                        [
                            [2, '||'],
                            [
                                [7],
                                [3, 'slideTarget']
                            ],
                            [
                                [7],
                                [3, 'activeTransform']
                            ]
                        ],
                        [1, '']
                    ],
                    [3, ';']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'paperDates']
                        ],
                        [
                            [7],
                            [3, 'index']
                        ]
                    ],
                    [3, 'dayLabel']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'paperDates']
                        ],
                        [
                            [7],
                            [3, 'index']
                        ]
                    ],
                    [3, 'location']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_16 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_16 = true;
        var x = ['./pages/index/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_16_1()
            var oTE = _mz(z, 'view', ['bindtouchend', 0, 'bindtouchmove', 1, 'bindtouchstart', 1, 'class', 2], [], e, s, gg)
            var lUE = _v()
            _(oTE, lUE)
            var aVE = function(eXE, tWE, bYE, gg) {
                var x1E = _mz(z, 'view', ['catchtap', 6, 'class', 1, 'data-index', 2, 'style', 3], [], eXE, tWE, gg)
                var o2E = _v()
                _(x1E, o2E)
                if (_oz(z, 10, eXE, tWE, gg)) {
                    o2E.wxVkey = 1
                }
                var f3E = _v()
                _(x1E, f3E)
                if (_oz(z, 11, eXE, tWE, gg)) {
                    f3E.wxVkey = 1
                }
                o2E.wxXCkey = 1
                f3E.wxXCkey = 1
                _(bYE, x1E)
                return bYE
            }
            lUE.wxXCkey = 2
            _2z(z, 4, aVE, e, s, gg, lUE, 'item', 'index', '*this')
            _(r, oTE)
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
                g = "$gwx_XC_16";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_16();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx_XC_16, './pages/index/index.wxml'];
else __wxAppCode__['pages/index/index.wxml'] = $gwx_XC_16('./pages/index/index.wxml');;
__wxRoute = "pages/index/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/index/index.js";
define("pages/index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/slicedToArray");
    require("../../@babel/runtime/helpers/Objectentries");
    var e = require("../../utils/cloud-images");
    Page({
        data: {
            isAnimating: !1,
            currentIndex: 0,
            paperCount: 7,
            colors: ["#FFE5E5", "#E5F5FF", "#E5FFE5", "#FFF5E5", "#F5E5FF", "#FFFFE5", "#E5FFFF"],
            activeTransform: "",
            slideDirection: "",
            slideTarget: "",
            clickDirectionIndex: 0,
            isClickSliding: !1,
            showResetBtn: !1,
            paperDates: [],
            isAllSwiped: !1,
            isLoading: !0,
            hideSearchBtn: !1,
            showUpdateModal: !1,
            showDraftBar: !1,
            draftDateStr: "",
            draftDisplayDate: "",
            draftBarTop: 0,
            draftBarRight: 0
        },
        onLoad: function() {
            var t = this,
                e = (new Date).getDay(),
                a = 0 === e ? 7 : e,
                i = wx.getSystemInfoSync(),
                s = (i.statusBarHeight, i.windowWidth),
                r = wx.getMenuButtonBoundingClientRect(),
                n = r.top,
                o = s - r.left + 16;
            this.setData({
                paperCount: a,
                isLoading: !0,
                draftBarTop: n,
                draftBarRight: o
            }), this.lastSeries = wx.getStorageSync("selectedPhotoSeries") || "series4", this._firstLoadDone = !1, getApp().globalData.initPromise.then((function() {
                t._firstLoadDone = !0, t.preloadImages()
            })), this.preloadImages()
        },
        _URL_CACHE_MAX_AGE: 54e5,
        preloadImages: function() {
            var t = wx.getStorageSync("selectedPhotoSeries") || "series4";
            if ("custom" === t) {
                var a = (wx.getStorageSync("customCovers") || []).filter((function(t) {
                    return t && t.length > 0 && !t.startsWith("http://tmp/")
                }));
                if (a.length > 0) return this.localImages = a, void this.loadPaperDates();
                console.warn("[index] custom covers invalid, fallback to series4"), wx.setStorageSync("selectedPhotoSeries", "series4"), this.lastSeries = "series4"
            }
            var i = wx.getStorageSync("selectedSeriesImages"),
                s = wx.getStorageSync("selectedSeriesImagesId") || "";
            if (i && 7 === i.length && s === t && i[0] && (i[0].startsWith("http") || i[0].startsWith("wxfile://"))) return this.localImages = i, void this.loadPaperDates();
            var r = wx.getStorageSync("headImageSeriesCache");
            if (r && r.data) {
                var n = r.data.find((function(e) {
                    return e.id === t
                }));
                if (n && n.images && 7 === n.images.length) {
                    var o = n.images.filter((function(t) {
                        return t && (t.startsWith("http") || t.startsWith("wxfile://"))
                    }));
                    if (7 === o.length) return this.localImages = o, void this.loadPaperDates()
                }
            }
            var l = (wx.getStorageSync("urlCache") || {})[t];
            if (l && l.urls && 7 === l.urls.length) {
                if (Date.now() - l.time < this._URL_CACHE_MAX_AGE) return this.localImages = l.urls, void this.loadPaperDates();
                console.log("[index] urlCache expired, refetching:", t)
            }
            var c = e.get(t);
            c && 0 !== c.length ? (this.localImages = null, this._refreshUrlsFromCloud(t, c, 0)) : console.error("[index] no cloud IDs for series:", t)
        },
        _refreshUrlsFromCloud: function(t, e, a) {
            var i = this;
            wx.cloud.getTempFileURL({
                fileList: e,
                success: function(a) {
                    var s = a.fileList.map((function(t, a) {
                        return t.tempFileURL ? t.tempFileURL : (console.warn("[index] cloudID[".concat(a, "] getTempFileURL returned no URL, fallback to cloudID")), e[a])
                    }));
                    i.localImages = s;
                    var r = wx.getStorageSync("urlCache") || {};
                    r[t] = {
                        urls: s,
                        time: Date.now()
                    }, wx.setStorageSync("urlCache", r), i.loadPaperDates()
                },
                fail: function(s) {
                    console.error("[index] getTempFileURL failed (retry ".concat(a, ")"), s), a < 2 ? setTimeout((function() {
                        i._refreshUrlsFromCloud(t, e, a + 1)
                    }), 1e3 * (a + 1)) : (console.warn("[index] all retries exhausted, fallback to series4"), "series4" !== t ? (wx.setStorageSync("selectedPhotoSeries", "series4"), i.lastSeries = "series4", i.preloadImages()) : (i.localImages = e, i.loadPaperDates()))
                }
            })
        },
        loadPaperDates: function() {
            for (var t = wx.getStorageSync("diaries") || {}, e = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], a = ["今天", "昨天", "前天"], i = [], s = 0; s < 7; s++) {
                var r, n, o = new Date;
                o.setDate(o.getDate() - s);
                var l = o.getFullYear(),
                    c = String(o.getMonth() + 1).padStart(2, "0"),
                    h = String(o.getDate()).padStart(2, "0"),
                    d = e[o.getDay()],
                    u = o.getDay(),
                    g = "".concat(l, "-").concat(c, "-").concat(h),
                    f = s < 3 ? a[s] : "";
                i.push({
                    year: String(l),
                    monthDay: "".concat(c, ".").concat(h),
                    day: h,
                    week: d,
                    dayLabel: f,
                    content: (null === (r = t[g]) || void 0 === r ? void 0 : r.content) || "",
                    location: (null === (n = t[g]) || void 0 === n ? void 0 : n.location) || "",
                    image: this.localImages ? this.localImages[u] : "",
                    _dateStr: g
                })
            }
            this.setData({
                paperDates: i,
                isLoading: !1
            })
        },
        onShow: function() {
            if ("function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
                    selected: 0
                }), this.setData({
                    hideSearchBtn: !1
                }), this._firstLoadDone) {
                var e = wx.getStorageSync("selectedPhotoSeries") || "series4";
                if (e !== this.lastSeries ? (this.lastSeries = e, this.localImages = [], this.preloadImages()) : (this.loadPaperDates(), this.localImages && 0 !== this.localImages.length || this.preloadImages()), this._firstLoadDone) {
                    for (var a = wx.getStorageSync("draftDismissed") || {}, i = wx.getStorageSync("diaries") || {}, s = null, r = "", n = 0, o = 0, l = Object.entries(i); o < l.length; o++) {
                        var c = t(l[o], 2),
                            h = c[0],
                            d = c[1];
                        if (d && !0 === d.isDraft && !a[h]) {
                            var u = d.updateTime || 0;
                            if (u > n) {
                                n = u, s = h;
                                var g = h.split("-");
                                3 === g.length && (r = "".concat(parseInt(g[1]), "月").concat(parseInt(g[2]), "日"))
                            }
                        }
                    }
                    s ? this.setData({
                        showDraftBar: !0,
                        draftDateStr: s,
                        draftDisplayDate: r
                    }) : this.data.showDraftBar && this.setData({
                        showDraftBar: !1
                    })
                }
            }
        },
        onHide: function() {
            this.setData({
                hideSearchBtn: !0
            })
        },
        onTapDraftBar: function() {
            var t = this.data.draftDateStr;
            this.setData({
                showDraftBar: !1
            }), wx.navigateTo({
                url: "/pages/write/write?date=".concat(t, "&fromDraft=1")
            })
        },
        onDiscardDraftReminder: function() {
            var t = this.data.draftDateStr,
                e = wx.getStorageSync("draftDismissed") || {};
            e[t] = !0, wx.setStorageSync("draftDismissed", e), this.setData({
                showDraftBar: !1,
                draftDateStr: "",
                draftDisplayDate: ""
            })
        },
        showUpdateModal: function() {
            this.setData({
                showUpdateModal: !0
            })
        },
        doUpdate: function() {
            wx.getUpdateManager().applyUpdate()
        },
        handleTouchStart: function(t) {
            if (!(this.data.currentIndex >= this.data.paperCount)) {
                var e = t.touches[0].clientY,
                    a = t.touches[0].clientX,
                    i = Date.now();
                this.data.isAnimating && this.completeAnimation(), this._touchStartY = e, this._touchStartX = a, this._lastY = e, this._lastX = a, this._lastMoveTime_prev = i, this._velocityY = 0, this._velocityX = 0, this.setData({
                    activeTransform: "",
                    slideDirection: ""
                })
            }
        },
        handleTouchMove: function(t) {
            if (!(this.data.isAnimating || this.data.currentIndex >= this.data.paperCount)) {
                var e = Date.now();
                if (!(this._lastMoveTime && e - this._lastMoveTime < 33)) {
                    this._lastMoveTime = e, this._lastY = this._lastY || t.touches[0].clientY, this._lastX = this._lastX || t.touches[0].clientX, this._touchStartY = this._touchStartY || this._touchStartY, this._touchStartX = this._touchStartX || this._touchStartX;
                    var a = t.touches[0].clientY,
                        i = t.touches[0].clientX,
                        s = this._touchStartY - a,
                        r = i - this._touchStartX,
                        n = a - this._lastY,
                        o = i - this._lastX,
                        l = e - (this._lastMoveTime_prev || e) || 1;
                    this._lastMoveTime_prev = e;
                    var c = Math.abs(s),
                        h = Math.abs(r);
                    if (c > h && c > 1) {
                        var d = -n / l * 16;
                        this._velocityY = d, this.setData({
                            activeTransform: "translateY(".concat(-s, "px)"),
                            slideDirection: s > 0 ? "up" : "down"
                        }), this._lastY = a, this._lastX = i
                    } else if (h > c && h > 1) {
                        var u = o / l * 16;
                        this._velocityX = u, this.setData({
                            activeTransform: "translateX(".concat(r, "px)"),
                            slideDirection: r > 0 ? "right" : "left"
                        }), this._lastY = a, this._lastX = i
                    }
                }
            }
        },
        handleTouchEnd: function(t) {
            if (!(this.data.isAnimating || this.data.currentIndex >= this.data.paperCount)) {
                var e = t.changedTouches[0].clientY,
                    a = t.changedTouches[0].clientX,
                    i = (this._touchStartY || 0) - e,
                    s = a - (this._touchStartX || 0),
                    r = Math.abs(i),
                    n = Math.abs(s),
                    o = wx.getWindowInfo(),
                    l = o.windowHeight,
                    c = o.windowWidth,
                    h = r > n ? .05 * l : .05 * c,
                    d = r > n && Math.abs(this._velocityY || 0) > 2 || n > r && Math.abs(this._velocityX || 0) > 2;
                r > h || n > h || d ? this.slideAway(l, c) : (this.setData({
                    activeTransform: "",
                    slideDirection: ""
                }), this._lastY = null, this._lastX = null, this._touchStartY = null, this._touchStartX = null, this._velocityY = 0, this._velocityX = 0, this._lastMoveTime = null, this._lastMoveTime_prev = null)
            }
        },
        slideAway: function(t, e) {
            var a = this;
            this.setData({
                isAnimating: !0
            });
            var i = Math.max(Math.abs(this._velocityY || 0), Math.abs(this._velocityX || 0)),
                s = Math.min(800, Math.max(400, 800 - 50 * i)),
                r = "";
            r = "up" === this.data.slideDirection ? "translateY(".concat(-t, "px)") : "down" === this.data.slideDirection ? "translateY(".concat(t, "px)") : "left" === this.data.slideDirection ? "translateX(".concat(-e, "px)") : "right" === this.data.slideDirection ? "translateX(".concat(e, "px)") : "translateY(".concat(-t, "px)"), this.setData({
                slideTarget: r
            }), this.animationTimer = setTimeout((function() {
                a.completeAnimation()
            }), s)
        },
        completeAnimation: function() {
            this.animationTimer && (clearTimeout(this.animationTimer), this.animationTimer = null);
            var t = this.data.currentIndex + 1;
            this.setData({
                currentIndex: t,
                activeTransform: "",
                slideDirection: "",
                slideTarget: "",
                isAnimating: !1,
                showResetBtn: !0
            }), t >= this.data.paperCount && this.setData({
                isAllSwiped: !0
            })
        },
        handleReset: function() {
            var t = this;
            if (!this.data.isAnimating) {
                var e = this.data.currentIndex;
                if (!(e <= 0)) {
                    this.setData({
                        isAnimating: !0
                    });
                    wx.createAnimation({
                        duration: 100 * e,
                        timingFunction: "ease-out"
                    });
                    setTimeout((function() {
                        t.setData({
                            currentIndex: 0,
                            showResetBtn: !1,
                            isAnimating: !1
                        })
                    }), 100 * e + 300)
                }
            }
        },
        handleTap: function(t) {
            var e = t.currentTarget.dataset.index,
                a = new Date,
                i = new Date(a);
            i.setDate(i.getDate() - e);
            var s = i.getFullYear(),
                r = String(i.getMonth() + 1).padStart(2, "0"),
                n = String(i.getDate()).padStart(2, "0"),
                o = "".concat(s, "-").concat(r, "-").concat(n);
            wx.navigateTo({
                url: "/pages/write/write?date=".concat(o)
            })
        },
        handleSeeMore: function(t) {
            var e = t.currentTarget.dataset.date;
            wx.navigateTo({
                url: "/pages/write/write?date=".concat(e)
            })
        },
        goToSearch: function() {
            wx.navigateTo({
                url: "/pages/search/search"
            })
        },
        confirmDelete: function(t) {
            var e = t.currentTarget.dataset.index;
            this._deleteTargetIndex = e, this.setData({
                showDeleteModal: !0
            })
        },
        onCancelDelete: function() {
            this._deleteTargetIndex = null, this.setData({
                showDeleteModal: !1
            })
        },
        onConfirmDelete: function() {
            var t = this,
                e = this._deleteTargetIndex;
            this.setData({
                showDeleteModal: !1
            });
            var a = new Date,
                i = new Date(a);
            i.setDate(i.getDate() - e);
            var s = i.getFullYear(),
                r = String(i.getMonth() + 1).padStart(2, "0"),
                n = String(i.getDate()).padStart(2, "0"),
                o = "".concat(s, "-").concat(r, "-").concat(n),
                l = wx.getStorageSync("diaries") || {};
            delete l[o], wx.setStorageSync("diaries", l), wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "deleteDiary",
                    date: o
                }
            }).then((function() {
                t.loadPaperDates()
            })).catch((function(t) {
                console.error("delete failed", t)
            }))
        },
        onShareAppMessage: function() {
            return {
                title: "向心日记 - 记录每一天的美好",
                path: "/pages/index/index",
                imageUrl: "cloud://cloud1-0g3jtuimd88a4af5.636c-cloud1-0g3jtuimd88a4af5-1413231909/fengmian/fengmiantu.jpg"
            }
        },
        preventBubble: function() {}
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/index/index.js'
});
require("pages/index/index.js");
$gwx_XC_17 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_17 || [];

        function gz$gwx_XC_17_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'list-section'])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'recordList']
                        ],
                        [3, 'length']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'loading']
                        ]
                    ],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [7],
                                [3, 'recordList']
                            ],
                            [3, 'length']
                        ],
                        [1, 0]
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_17 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_17 = true;
        var x = ['./pages/invite-records/invite-records.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_17_1()
            var h5E = _n('view')
            _rz(z, h5E, 'class', 0, e, s, gg)
            var o6E = _v()
            _(h5E, o6E)
            if (_oz(z, 1, e, s, gg)) {
                o6E.wxVkey = 1
            }
            var c7E = _v()
            _(h5E, c7E)
            if (_oz(z, 2, e, s, gg)) {
                c7E.wxVkey = 1
            }
            o6E.wxXCkey = 1
            c7E.wxXCkey = 1
            _(r, h5E)
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
                g = "$gwx_XC_17";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_17();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/invite-records/invite-records.wxml'] = [$gwx_XC_17, './pages/invite-records/invite-records.wxml'];
else __wxAppCode__['pages/invite-records/invite-records.wxml'] = $gwx_XC_17('./pages/invite-records/invite-records.wxml');;
__wxRoute = "pages/invite-records/invite-records";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/invite-records/invite-records.js";
define("pages/invite-records/invite-records.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Page({
        data: {
            statusBarHeight: 20,
            inviteCount: 0,
            recordList: [],
            loading: !0
        },
        onLoad: function() {
            var t = wx.getSystemInfoSync();
            this.setData({
                statusBarHeight: t.statusBarHeight
            })
        },
        onShow: function() {
            this.loadRecords()
        },
        goBack: function() {
            wx.navigateBack({
                fail: function() {
                    return wx.navigateBack()
                }
            })
        },
        loadRecords: function() {
            var t = this;
            this.setData({
                loading: !0
            }), wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getInviteRecords"
                }
            }).then((function(a) {
                if (a.result.success) {
                    var n = a.result.data;
                    t.setData({
                        inviteCount: n.inviteCount || 0,
                        recordList: (n.records || []).slice(0, 15),
                        loading: !1
                    })
                } else t.setData({
                    loading: !1
                })
            })).catch((function(a) {
                t.setData({
                    loading: !1
                })
            }))
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/invite-records/invite-records.js'
});
require("pages/invite-records/invite-records.js");
$gwx_XC_18 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_18 || [];

        function gz$gwx_XC_18_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'isResetFlow']
                    ]
                ])
                Z([3, 'container'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'step']
                    ],
                    [1, 'menu']
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'hasPassword']
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'appLockEnabled']
                        ]
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'step']
                    ],
                    [1, 'set']
                ])
                Z([1, 6])
                Z([3, '*this'])
                Z([
                    [2, '<'],
                    [
                        [7],
                        [3, 'index']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'password']
                        ],
                        [3, 'length']
                    ]
                ])
                Z(z[1])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'step']
                    ],
                    [1, 'confirm']
                ])
                Z(z[6])
                Z(z[7])
                Z([
                    [2, '<'],
                    [
                        [7],
                        [3, 'index']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'confirmPassword']
                        ],
                        [3, 'length']
                    ]
                ])
                Z(z[1])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'step']
                    ],
                    [1, 'question']
                ])
                Z(z[1])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'step']
                    ],
                    [1, 'verify']
                ])
                Z(z[6])
                Z(z[7])
                Z([
                    [2, '<'],
                    [
                        [7],
                        [3, 'index']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'oldPassword']
                        ],
                        [3, 'length']
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'step']
                    ],
                    [1, 'change']
                ])
                Z(z[6])
                Z(z[7])
                Z(z[8])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_18 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_18 = true;
        var x = ['./pages/lock-setting/lock-setting.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_18_1()
            var l9E = _n('view')
            _rz(z, l9E, 'class', 0, e, s, gg)
            var a0E = _v()
            _(l9E, a0E)
            if (_oz(z, 1, e, s, gg)) {
                a0E.wxVkey = 1
            }
            var tAF = _n('view')
            _rz(z, tAF, 'class', 2, e, s, gg)
            var eBF = _v()
            _(tAF, eBF)
            if (_oz(z, 3, e, s, gg)) {
                eBF.wxVkey = 1
                var cHF = _v()
                _(eBF, cHF)
                if (_oz(z, 4, e, s, gg)) {
                    cHF.wxVkey = 1
                }
                cHF.wxXCkey = 1
            }
            var bCF = _v()
            _(tAF, bCF)
            if (_oz(z, 5, e, s, gg)) {
                bCF.wxVkey = 1
                var oJF = _v()
                _(bCF, oJF)
                var cKF = function(lMF, oLF, aNF, gg) {
                    var ePF = _v()
                    _(aNF, ePF)
                    if (_oz(z, 8, lMF, oLF, gg)) {
                        ePF.wxVkey = 1
                    }
                    ePF.wxXCkey = 1
                    return aNF
                }
                oJF.wxXCkey = 2
                _2z(z, 6, cKF, e, s, gg, oJF, 'item', 'index', '*this')
                var hIF = _v()
                _(bCF, hIF)
                if (_oz(z, 9, e, s, gg)) {
                    hIF.wxVkey = 1
                }
                hIF.wxXCkey = 1
            }
            var oDF = _v()
            _(tAF, oDF)
            if (_oz(z, 10, e, s, gg)) {
                oDF.wxVkey = 1
                var oRF = _v()
                _(oDF, oRF)
                var xSF = function(fUF, oTF, cVF, gg) {
                    var oXF = _v()
                    _(cVF, oXF)
                    if (_oz(z, 13, fUF, oTF, gg)) {
                        oXF.wxVkey = 1
                    }
                    oXF.wxXCkey = 1
                    return cVF
                }
                oRF.wxXCkey = 2
                _2z(z, 11, xSF, e, s, gg, oRF, 'item', 'index', '*this')
                var bQF = _v()
                _(oDF, bQF)
                if (_oz(z, 14, e, s, gg)) {
                    bQF.wxVkey = 1
                }
                bQF.wxXCkey = 1
            }
            var xEF = _v()
            _(tAF, xEF)
            if (_oz(z, 15, e, s, gg)) {
                xEF.wxVkey = 1
                var cYF = _v()
                _(xEF, cYF)
                if (_oz(z, 16, e, s, gg)) {
                    cYF.wxVkey = 1
                }
                cYF.wxXCkey = 1
            }
            var oFF = _v()
            _(tAF, oFF)
            if (_oz(z, 17, e, s, gg)) {
                oFF.wxVkey = 1
                var oZF = _v()
                _(oFF, oZF)
                var l1F = function(t3F, a2F, e4F, gg) {
                    var o6F = _v()
                    _(e4F, o6F)
                    if (_oz(z, 20, t3F, a2F, gg)) {
                        o6F.wxVkey = 1
                    }
                    o6F.wxXCkey = 1
                    return e4F
                }
                oZF.wxXCkey = 2
                _2z(z, 18, l1F, e, s, gg, oZF, 'item', 'index', '*this')
            }
            var fGF = _v()
            _(tAF, fGF)
            if (_oz(z, 21, e, s, gg)) {
                fGF.wxVkey = 1
                var x7F = _v()
                _(fGF, x7F)
                var o8F = function(c0F, f9F, hAG, gg) {
                    var cCG = _v()
                    _(hAG, cCG)
                    if (_oz(z, 24, c0F, f9F, gg)) {
                        cCG.wxVkey = 1
                    }
                    cCG.wxXCkey = 1
                    return hAG
                }
                x7F.wxXCkey = 2
                _2z(z, 22, o8F, e, s, gg, x7F, 'item', 'index', '*this')
            }
            eBF.wxXCkey = 1
            bCF.wxXCkey = 1
            oDF.wxXCkey = 1
            xEF.wxXCkey = 1
            oFF.wxXCkey = 1
            fGF.wxXCkey = 1
            _(l9E, tAF)
            a0E.wxXCkey = 1
            _(r, l9E)
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
                g = "$gwx_XC_18";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_18();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/lock-setting/lock-setting.wxml'] = [$gwx_XC_18, './pages/lock-setting/lock-setting.wxml'];
else __wxAppCode__['pages/lock-setting/lock-setting.wxml'] = $gwx_XC_18('./pages/lock-setting/lock-setting.wxml');;
__wxRoute = "pages/lock-setting/lock-setting";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/lock-setting/lock-setting.js";
define("pages/lock-setting/lock-setting.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    getApp();
    Page({
        data: {
            statusBarHeight: 0,
            navBarHeight: 44,
            hasPassword: !1,
            appLockEnabled: !1,
            step: "menu",
            password: "",
            confirmPassword: "",
            oldPassword: "",
            isResetFlow: !1,
            questions: ["您的初中同桌是？", "您小时候最好的朋友是？", "你第一次做饭做的是什么菜？", "你童年最喜欢的卡通角色全名？", "你童年最喜欢的一个玩具具体名称？"],
            selectedQuestion: "",
            answer: "",
            tempPassword: ""
        },
        onLoad: function(t) {
            var s = wx.getSystemInfoSync();
            this.setData({
                statusBarHeight: s.statusBarHeight || 20
            }), "1" === t.reset ? this.setData({
                step: "set",
                password: "",
                confirmPassword: "",
                answer: "",
                selectedQuestion: "",
                hasPassword: !1,
                appLockEnabled: !1,
                isResetFlow: !0
            }) : this.loadLockStatus(), this.initAd()
        },
        initAd: function() {
            var t = this;
            this.ad = wx.createRewardedVideoAd({
                adUnitId: "adunit-e5b27bf9d0558ed0"
            }), this.ad.onLoad((function() {})), this.ad.onError((function(s) {
                t.adLoadFailed = !0
            })), this.ad.onClose((function(s) {
                s.isEnded ? t.doEnableLock() : wx.showToast({
                    title: "看完广告才能开启哦",
                    icon: "none"
                })
            }))
        },
        doEnableLock: function() {
            wx.setStorageSync("appLockEnabled", !0), this.setData({
                appLockEnabled: !0
            }), this.syncAppLockToCloud(), wx.showToast({
                title: "应用锁已开启",
                icon: "success"
            })
        },
        onShow: function() {
            this.loadLockStatus()
        },
        loadLockStatus: function() {
            var t = wx.getStorageSync("appLockPassword"),
                s = wx.getStorageSync("appLockEnabled");
            if (this.setData({
                    hasPassword: !!t,
                    appLockEnabled: !!s
                }), !t) {
                var a = Date.now();
                (!this._lastCloudSync || a - this._lastCloudSync > 3e4) && (this._lastCloudSync = a, this.syncAppLockFromCloud())
            }
        },
        onSwitchChange: function(t) {
            var s = this,
                a = t.detail.value,
                o = this.data.hasPassword;
            !a || o ? a ? (this.setData({
                appLockEnabled: !1
            }), this.ad && !this.adLoadFailed ? this.ad.show().catch((function() {
                s.doEnableLock()
            })) : this.doEnableLock()) : (wx.setStorageSync("appLockEnabled", !1), this.setData({
                appLockEnabled: !1
            }), this.syncAppLockToCloud(), wx.showToast({
                title: "应用锁已关闭",
                icon: "none"
            })) : this.setData({
                step: "set"
            })
        },
        onSetPassword: function() {
            this.setData({
                step: "set",
                password: "",
                confirmPassword: "",
                answer: "",
                selectedQuestion: ""
            })
        },
        onChangePassword: function() {
            this.setData({
                step: "verify",
                oldPassword: "",
                password: "",
                confirmPassword: ""
            })
        },
        onInputPassword: function(t) {
            this.setData({
                password: t.detail.value
            }), 6 === t.detail.value.length && this.onPasswordComplete()
        },
        onInputConfirm: function(t) {
            this.setData({
                confirmPassword: t.detail.value
            }), 6 === t.detail.value.length && this.onConfirmComplete()
        },
        onInputOldPassword: function(t) {
            this.setData({
                oldPassword: t.detail.value
            }), 6 === t.detail.value.length && this.onOldPasswordComplete()
        },
        onKeyPress: function(t) {
            var s = this,
                a = t.currentTarget.dataset.key,
                o = this.data,
                e = o.step,
                n = o.password,
                i = o.confirmPassword,
                c = o.oldPassword;
            if ("set" === e || "change" === e) {
                if (n.length < 6) {
                    var d = n + a;
                    this.setData({
                        password: d
                    }), 6 === d.length && setTimeout((function() {
                        return s.onPasswordComplete()
                    }), 100)
                }
            } else if ("confirm" === e) {
                if (i.length < 6) {
                    var r = i + a;
                    this.setData({
                        confirmPassword: r
                    }), 6 === r.length && setTimeout((function() {
                        return s.onConfirmComplete()
                    }), 100)
                }
            } else if ("verify" === e && c.length < 6) {
                var l = c + a;
                this.setData({
                    oldPassword: l
                }), 6 === l.length && setTimeout((function() {
                    return s.onOldPasswordComplete()
                }), 100)
            }
        },
        onDelete: function() {
            var t = this.data,
                s = t.step,
                a = t.password,
                o = t.confirmPassword,
                e = t.oldPassword;
            "set" === s || "change" === s ? a.length > 0 && this.setData({
                password: a.slice(0, -1)
            }) : "confirm" === s ? o.length > 0 && this.setData({
                confirmPassword: o.slice(0, -1)
            }) : "verify" === s && e.length > 0 && this.setData({
                oldPassword: e.slice(0, -1)
            })
        },
        onPasswordComplete: function() {
            var t = this.data,
                s = t.password,
                a = t.step;
            6 === s.length && ("set" === a || "change" === a) && this.setData({
                step: "confirm"
            })
        },
        onConfirmComplete: function() {
            var t = this.data,
                s = t.password,
                a = t.confirmPassword,
                o = (t.step, t.oldPassword);
            if (6 === a.length) return s !== a ? (wx.showToast({
                title: "两次密码不一致",
                icon: "none"
            }), this.setData({
                confirmPassword: "",
                password: ""
            }), void(o ? this.setData({
                step: "change"
            }) : this.setData({
                step: "set"
            }))) : void this.setData({
                tempPassword: s,
                step: "question",
                selectedQuestion: "",
                answer: ""
            })
        },
        onOldPasswordComplete: function() {
            if (this.data.oldPassword !== wx.getStorageSync("appLockPassword")) return wx.showToast({
                title: "密码错误",
                icon: "none"
            }), void this.setData({
                oldPassword: ""
            });
            this.setData({
                step: "change",
                password: "",
                confirmPassword: ""
            })
        },
        onQuestionChange: function(t) {
            var s = t.detail.value;
            this.setData({
                selectedQuestion: this.data.questions[s]
            })
        },
        onInputAnswer: function(t) {
            this.setData({
                answer: t.detail.value
            })
        },
        onSaveQuestion: function() {
            var t = this,
                s = this.data,
                a = s.tempPassword,
                o = s.selectedQuestion,
                e = s.answer;
            o ? e && 0 !== e.trim().length ? (wx.setStorageSync("appLockPassword", a), wx.setStorageSync("appLockQuestion", {
                question: o,
                answer: e.trim()
            }), wx.setStorageSync("appLockEnabled", !0), this.syncAppLockToCloud(), wx.showToast({
                title: "设置成功",
                icon: "success"
            }), setTimeout((function() {
                t.setData({
                    hasPassword: !0,
                    appLockEnabled: !0,
                    step: "menu",
                    password: "",
                    confirmPassword: "",
                    oldPassword: "",
                    tempPassword: "",
                    selectedQuestion: "",
                    answer: ""
                })
            }), 1e3)) : wx.showToast({
                title: "请输入安全问题答案",
                icon: "none"
            }) : wx.showToast({
                title: "请选择安全问题",
                icon: "none"
            })
        },
        syncAppLockToCloud: function() {
            var t = wx.getStorageSync("appLockPassword"),
                s = wx.getStorageSync("appLockQuestion"),
                a = wx.getStorageSync("appLockEnabled");
            t && wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "saveAppLock",
                    appLock: {
                        password: t,
                        question: s ? s.question : "",
                        answer: s ? s.answer : "",
                        enabled: a
                    }
                }
            }).then((function(t) {
                t.result && t.result.success
            })).catch((function(t) {}))
        },
        syncAppLockFromCloud: function() {
            var t = this;
            wx.cloud.callFunction({
                name: "diary",
                data: {
                    action: "getAppLock"
                }
            }).then((function(s) {
                if (s.result && s.result.success && s.result.data) {
                    var a = s.result.data,
                        o = wx.getStorageSync("appLockPassword");
                    a.password && !o && (wx.setStorageSync("appLockPassword", a.password), a.question && wx.setStorageSync("appLockQuestion", {
                        question: a.question,
                        answer: a.answer
                    }), wx.setStorageSync("appLockEnabled", a.enabled), t.loadLockStatus())
                }
            })).catch((function(t) {}))
        },
        onBack: function() {
            var t = this.data.step;
            if (("set" === t || "confirm" === t || "question" === t) && (!wx.getStorageSync("appLockPassword") && "set" === t)) return void wx.showModal({
                title: "提示",
                content: "您必须完成新密码设置才能继续使用",
                showCancel: !1,
                confirmText: "继续设置"
            });
            this.setData({
                step: "menu",
                password: "",
                confirmPassword: "",
                oldPassword: "",
                tempPassword: "",
                selectedQuestion: "",
                answer: ""
            })
        },
        onNavigateBack: function() {
            "menu" !== this.data.step ? this.onBack() : wx.navigateBack()
        },
        onCloseLock: function() {
            var t = this;
            wx.showModal({
                title: "关闭密码锁",
                content: "关闭后密码将被清除，确定要关闭吗？",
                success: function(s) {
                    s.confirm && (wx.removeStorageSync("appLockPassword"), wx.removeStorageSync("appLockEnabled"), wx.removeStorageSync("appLockQuestion"), wx.cloud.callFunction({
                        name: "diary",
                        data: {
                            action: "deleteAppLock"
                        }
                    }).catch((function(t) {})), t.setData({
                        hasPassword: !1,
                        appLockEnabled: !1,
                        step: "menu"
                    }), wx.showToast({
                        title: "已关闭密码锁",
                        icon: "none"
                    }))
                }
            })
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/lock-setting/lock-setting.js'
});
require("pages/lock-setting/lock-setting.js");