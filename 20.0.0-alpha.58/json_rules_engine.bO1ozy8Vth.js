import { a as gt } from "@nf-internal/chunk-EOHDPEXE";
import { a as Ie } from "@nf-internal/chunk-5Y7CQCTF";
import { c as yt, e as A } from "@nf-internal/chunk-2AVGQ2MQ";
var Ge = A((X, Le) => { (function (e, t) { typeof X == "object" && typeof Le < "u" ? t(X) : typeof define == "function" && define.amd ? define(["exports"], t) : (e = e || self, t(e.curriable = {})); })(X, function (e) {
    "use strict";
    var t = typeof Symbol == "function" ? Symbol("curriable placeholder") : 60881;
    function n(a, l) { function v(h) { return function () { var o = h.length, c = arguments, g = c.length, s = [], p = 0, m = l, O; if (o)
        for (var b = -1; ++b < o;)
            s[b] = O = h[b] === t && p < g ? c[p++] : h[b], O !== t && --m; if (p < g)
        for (; p < g;)
            s[s.length] = O = c[p], O !== t && p < l && --m, ++p; return m > 0 ? v(s) : a.apply(this, s); }; } return v([]); }
    function r(a, l) { var v = typeof l == "number" ? l : a.length, h = n(a, v); return h.arity = v, h.fn = a, h; }
    r.__ = t;
    function u(a) { return a === t; }
    r.isPlaceholder = u;
    function i(a) { return a.fn; }
    r.uncurry = i, e.__ = t, e.curry = r, e.default = r, e.isPlaceholder = u, e.uncurry = i, Object.defineProperty(e, "__esModule", { value: !0 });
}); });
var Ue = A(_ => {
    "use strict";
    _.__esModule = !0;
    _.UNPARSEABLE_TAGS = _.TYPEDARRAY_TAGS = _.TOSTRING_TAGS = _.SELF_TAGS = _.PRIMITIVE_TAGS = _.ITERABLE_TAGS = _.OBJECT_CLASS_TYPE_MAP = _.OBJECT_CLASS_MAP = _.SVG_ELEMENT_REGEXP = _.HTML_ELEMENT_REGEXP = _.HAS_UINT16ARRAY_SUPPORT = _.HAS_BUFFER_FROM_SUPPORT = void 0;
    var W, $, P, k, pt = typeof Buffer < "u" && typeof Buffer.from == "function";
    _.HAS_BUFFER_FROM_SUPPORT = pt;
    var Et = typeof Uint16Array == "function";
    _.HAS_UINT16ARRAY_SUPPORT = Et;
    var At = /\[object (HTML(.*)Element)\]/;
    _.HTML_ELEMENT_REGEXP = At;
    var mt = /\[object (SVG(.*)Element)\]/;
    _.SVG_ELEMENT_REGEXP = mt;
    var St = ["Arguments", "Array", "ArrayBuffer", "Boolean", "DataView", "Date", "DocumentFragment", "Error", "Event", "Float32Array", "Float64Array", "Function", "Generator", "GeneratorFunction", "HTMLElement", "Int8Array", "Int16Array", "Int32Array", "Map", "Null", "Number", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "Undefined", "WeakMap", "WeakSet", "Window"], le = St.reduce(function (e, t) { return e["[object " + t + "]"] = t, e; }, {});
    _.OBJECT_CLASS_MAP = le;
    var S = Object.keys(le).reduce(function (e, t) { return e[le[t].toUpperCase()] = t, e; }, {});
    _.OBJECT_CLASS_TYPE_MAP = S;
    var Ot = { "[object Map]": !0, "[object Set]": !0 };
    _.ITERABLE_TAGS = Ot;
    var bt = { boolean: !0, function: !0, number: !0, string: !0, undefined: !0 };
    _.PRIMITIVE_TAGS = bt;
    var Rt = (W = {}, W[S.ARGUMENTS] = !0, W[S.ARRAY] = !0, W);
    _.SELF_TAGS = Rt;
    var Tt = ($ = {}, $[S.REGEXP] = !0, $[S.SYMBOL] = !0, $);
    _.TOSTRING_TAGS = Tt;
    var wt = (P = {}, P[S.FLOAT32ARRAY] = !0, P[S.FLOAT64ARRAY] = !0, P[S.INT8ARRAY] = !0, P[S.INT16ARRAY] = !0, P[S.INT32ARRAY] = !0, P[S.UINT8ARRAY] = !0, P[S.UINT8CLAMPEDARRAY] = !0, P[S.UINT16ARRAY] = !0, P[S.UINT32ARRAY] = !0, P);
    _.TYPEDARRAY_TAGS = wt;
    var Pt = (k = {}, k[S.GENERATOR] = !0, k[S.PROMISE] = !0, k[S.WEAKMAP] = !0, k[S.WEAKSET] = !0, k);
    _.UNPARSEABLE_TAGS = Pt;
});
var We = A(E => {
    "use strict";
    E.__esModule = !0;
    E.getFunctionName = qe;
    E.getIntegerHashValue = Nt;
    E.getSortedEvent = De;
    E.shouldSort = ve;
    E.shouldSortPair = Ye;
    E.sort = Z;
    E.getSortedIterable = Je;
    E.getSortedObject = Ve;
    E.getStringifiedArrayBufferFallback = He;
    E.getStringifiedArrayBufferModern = ze;
    E.getStringifiedArrayBufferNoSupport = xe;
    E.getStringifiedDocumentFragment = Ke;
    E.getCutoffIndex = ce;
    E.getNormalizedValue = V;
    E.createReplacer = Xe;
    E.stringify = Q;
    E.getStringifiedArrayBuffer = void 0;
    var d = Ue(), Mt = /^\s*function\s*([^(]*)/i, ke = Object.prototype.toString, Ct = Object.keys;
    function qe(e) { return e.name || (e.toString().match(Mt) || [])[1] || "anonymous"; }
    function Nt(e) { for (var t = e.length, n = 5381, r = 52711, u; t--;)
        u = e.charCodeAt(t), n = n * 33 ^ u, r = r * 33 ^ u; return (n >>> 0) * 4096 + (r >>> 0); }
    function De(e) { return { bubbles: e.bubbles, cancelBubble: e.cancelBubble, cancelable: e.cancelable, composed: e.composed, currentTarget: e.currentTarget, defaultPrevented: e.defaultPrevented, eventPhase: e.eventPhase, isTrusted: e.isTrusted, returnValue: e.returnValue, target: e.target, type: e.type }; }
    function ve(e, t) { return e > t; }
    function Ye(e, t) { return e[0] > t[0]; }
    function Z(e, t) { for (var n, r, u = 0; u < e.length; ++u) {
        for (r = e[u], n = u - 1; ~n && t(e[n], r); --n)
            e[n + 1] = e[n];
        e[n + 1] = r;
    } return e; }
    function Je(e, t, n) { var r = typeof e.get == "function", u = []; r ? (e.forEach(function (h, o) { u.push([Q(o, t, n), Q(h, t, n)]); }), Z(u, Ye)) : (e.forEach(function (h) { u.push(Q(h, t, n)); }), Z(u, ve)); for (var i = qe(e.constructor) + "|[", a = 0, l = u.length, v; a < l; ++a)
        v = u[a], i += (a ? "," : "") + (r ? "[" + v[0] + "," + v[1] + "]" : v); return i + "]"; }
    function Ve(e) { for (var t = Z(Ct(e), ve), n = {}, r, u = 0; u < t.length; ++u)
        r = t[u], n[r] = e[r]; return n; }
    function He(e) { return String.fromCharCode.apply(null, new Uint16Array(e)); }
    function ze(e) { return Buffer.from(e).toString("utf8"); }
    function xe() { return ""; }
    var se = (function () { return d.HAS_BUFFER_FROM_SUPPORT ? ze : d.HAS_UINT16ARRAY_SUPPORT ? He : xe; })();
    E.getStringifiedArrayBuffer = se;
    function Ke(e) { for (var t = e.children, n = "", r = 0; r < t.length; ++r)
        n += t[r].outerHTML; return n; }
    function ce(e, t) { for (var n = 0; n < e.length; ++n)
        if (e[n] === t)
            return n + 1; return 0; }
    function V(e, t, n, r) { if (r === void 0) {
        var u = typeof e;
        if (u === "string" || d.PRIMITIVE_TAGS[u])
            return u + "|" + e;
        if (e === null)
            return "null|" + e;
    } var i = r || ke.call(e); return d.SELF_TAGS[i] ? e : i === d.OBJECT_CLASS_TYPE_MAP.OBJECT ? Ve(e) : d.TOSTRING_TAGS[i] ? d.OBJECT_CLASS_MAP[i] + "|" + e.toString() : d.ITERABLE_TAGS[i] ? Je(e, t, n) : i === d.OBJECT_CLASS_TYPE_MAP.DATE ? d.OBJECT_CLASS_MAP[i] + "|" + e.getTime() : i === d.OBJECT_CLASS_TYPE_MAP.ERROR ? d.OBJECT_CLASS_MAP[i] + "|" + e.stack : i === d.OBJECT_CLASS_TYPE_MAP.EVENT ? De(e) : d.UNPARSEABLE_TAGS[i] ? d.OBJECT_CLASS_MAP[i] + "|NOT_ENUMERABLE" : d.HTML_ELEMENT_REGEXP.test(i) || d.SVG_ELEMENT_REGEXP.test(i) ? i.slice(8, -1) + "|" + e.outerHTML : i === d.OBJECT_CLASS_TYPE_MAP.DOCUMENTFRAGMENT ? d.OBJECT_CLASS_MAP[i] + "|" + Ke(e) : d.TYPEDARRAY_TAGS[i] ? d.OBJECT_CLASS_MAP[i] + "|" + e.join(",") : i === d.OBJECT_CLASS_TYPE_MAP.ARRAYBUFFER ? d.OBJECT_CLASS_MAP[i] + "|" + se(e) : i === d.OBJECT_CLASS_TYPE_MAP.DATAVIEW ? d.OBJECT_CLASS_MAP[i] + "|" + se(e.buffer) : e; }
    function Xe(e, t) { return e === void 0 && (e = []), t === void 0 && (t = []), function (n, r) { if (typeof r == "object")
        if (e.length) {
            var u = ce(e, this);
            u === 0 ? e.push(this) : (e.splice(u), t.splice(u)), t.push(n);
            var i = ce(e, r);
            if (i !== 0)
                return "[~" + (t.slice(0, i).join(".") || ".") + "]";
            e.push(r);
        }
        else
            e[0] = r, t[0] = n; return n && this[n] instanceof Date ? V(this[n], e, t, d.OBJECT_CLASS_TYPE_MAP.DATE, e, t) : V(r, e, t); }; }
    function Q(e, t, n) { if (!e || typeof e != "object")
        return V(e, t, n); var r = ke.call(e); return r === d.OBJECT_CLASS_TYPE_MAP.DATE || r === d.OBJECT_CLASS_TYPE_MAP.REGEXP ? V(e, t, n, r) : JSON.stringify(e, Xe(t, n)); }
});
var Qe = A(H => {
    "use strict";
    H.__esModule = !0;
    H.hash = T;
    H.default = void 0;
    var ee = Ge(), $e = We();
    function T(e) { return (0, $e.getIntegerHashValue)((0, $e.stringify)(e)); }
    T.is = (0, ee.curry)(function (e, t) { return T(e) === T(t); });
    T.is.all = (0, ee.curry)(function (e) { for (var t = T.is(e), n = 1; n < arguments.length; ++n)
        if (!t(arguments[n]))
            return !1; return !0; }, 2);
    T.is.any = (0, ee.curry)(function (e) { for (var t = T.is(e), n = 1; n < arguments.length; n++)
        if (t(arguments[n]))
            return !0; return !1; }, 2);
    T.is.not = (0, ee.curry)(function (e, t) { return T(e) !== T(t); });
    var Ft = T;
    H.default = Ft;
});
var te = A(he => {
    "use strict";
    Object.defineProperty(he, "__esModule", { value: !0 });
    var jt = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var u = n[r];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(t, u.key, u);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })(), Bt = Qe(), It = Lt(Bt);
    function Lt(e) { return e && e.__esModule ? e : { default: e }; }
    function Gt(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    var de = (function () { function e(t, n, r) { Gt(this, e), this.id = t; var u = { cache: !0 }; if (typeof r > "u" && (r = u), typeof n != "function" ? (this.value = n, this.type = this.constructor.CONSTANT) : (this.calculationMethod = n, this.type = this.constructor.DYNAMIC), !this.id)
        throw new Error("factId required"); return this.priority = parseInt(r.priority || 1, 10), this.options = Object.assign({}, u, r), this.cacheKeyMethod = this.defaultCacheKeys, this; } return jt(e, [{ key: "isConstant", value: function () { return this.type === this.constructor.CONSTANT; } }, { key: "isDynamic", value: function () { return this.type === this.constructor.DYNAMIC; } }, { key: "calculate", value: function (n, r) { return Object.prototype.hasOwnProperty.call(this, "value") ? this.value : this.calculationMethod(n, r); } }, { key: "defaultCacheKeys", value: function (n, r) { return { params: r, id: n }; } }, { key: "getCacheKey", value: function (n) { if (this.options.cache === !0) {
                var r = this.cacheKeyMethod(this.id, n), u = e.hashFromObject(r);
                return u;
            } } }], [{ key: "hashFromObject", value: function (n) { return (0, It.default)(n); } }]), e; })();
    de.CONSTANT = "CONSTANT";
    de.DYNAMIC = "DYNAMIC";
    he.default = de;
});
var z = A(_e => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    _e.default = Ut;
    function Ut(e) { try {
        (typeof process < "u" && process.env && process.env.DEBUG && process.env.DEBUG.match(/json-rules-engine/) || typeof window < "u" && window.localStorage && window.localStorage.debug && window.localStorage.debug.match(/json-rules-engine/)) && console.log(e);
    }
    catch { } }
});
var ye = A((rn, Ze) => { function kt(e) { return !!e && typeof e == "object"; } Ze.exports = kt; });
var tt = A(ge => {
    "use strict";
    Object.defineProperty(ge, "__esModule", { value: !0 });
    var qt = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var u = n[r];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(t, u.key, u);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })(), Dt = z(), Yt = et(Dt), Jt = ye(), Vt = et(Jt);
    function et(e) { return e && e.__esModule ? e : { default: e }; }
    function Ht(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    var zt = (function () { function e(t) { if (Ht(this, e), !t)
        throw new Error("Condition: constructor options required"); var n = e.booleanOperator(t); if (Object.assign(this, t), n) {
        var r = t[n];
        if (!Array.isArray(r))
            throw new Error('"' + n + '" must be an array');
        this.operator = n, this.priority = parseInt(t.priority, 10) || 1, this[n] = r.map(function (u) { return new e(u); });
    }
    else {
        if (!Object.prototype.hasOwnProperty.call(t, "fact"))
            throw new Error('Condition: constructor "fact" property required');
        if (!Object.prototype.hasOwnProperty.call(t, "operator"))
            throw new Error('Condition: constructor "operator" property required');
        if (!Object.prototype.hasOwnProperty.call(t, "value"))
            throw new Error('Condition: constructor "value" property required');
        Object.prototype.hasOwnProperty.call(t, "priority") && (t.priority = parseInt(t.priority, 10));
    } } return qt(e, [{ key: "toJSON", value: function () { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, r = {}; this.priority && (r.priority = this.priority); var u = e.booleanOperator(this); return u ? r[u] = this[u].map(function (i) { return i.toJSON(n); }) : (r.operator = this.operator, r.value = this.value, r.fact = this.fact, this.factResult !== void 0 && (r.factResult = this.factResult), this.result !== void 0 && (r.result = this.result), this.params && (r.params = this.params), this.path && (r.path = this.path)), n ? JSON.stringify(r) : r; } }, { key: "_getValue", value: function (n) { var r = this.value; return (0, Vt.default)(r) && Object.prototype.hasOwnProperty.call(r, "fact") ? n.factValue(r.fact, r.params, r.path) : Promise.resolve(r); } }, { key: "evaluate", value: function (n, r) { var u = this; if (!n)
                return Promise.reject(new Error("almanac required")); if (!r)
                return Promise.reject(new Error("operatorMap required")); if (this.isBooleanOperator())
                return Promise.reject(new Error("Cannot evaluate() a boolean condition")); var i = r.get(this.operator); return i ? this._getValue(n).then(function (a) { return n.factValue(u.fact, u.params, u.path).then(function (l) { var v = i.evaluate(l, a); return (0, Yt.default)("condition::evaluate <" + l + " " + u.operator + " " + a + "?> (" + v + ")"), { result: v, leftHandSideValue: l, rightHandSideValue: a, operator: u.operator }; }); }) : Promise.reject(new Error("Unknown operator: " + this.operator)); } }, { key: "booleanOperator", value: function () { return e.booleanOperator(this); } }, { key: "isBooleanOperator", value: function () { return e.booleanOperator(this) !== void 0; } }], [{ key: "booleanOperator", value: function (n) { if (Object.prototype.hasOwnProperty.call(n, "any"))
                return "any"; if (Object.prototype.hasOwnProperty.call(n, "all"))
                return "all"; } }]), e; })();
    ge.default = zt;
});
var rt = A((un, re) => { var xt = (function () {
    "use strict";
    function e(o, c) { return c != null && o instanceof c; }
    var t;
    try {
        t = Map;
    }
    catch {
        t = function () { };
    }
    var n;
    try {
        n = Set;
    }
    catch {
        n = function () { };
    }
    var r;
    try {
        r = Promise;
    }
    catch {
        r = function () { };
    }
    function u(o, c, g, s, p) { typeof c == "object" && (g = c.depth, s = c.prototype, p = c.includeNonEnumerable, c = c.circular); var m = [], O = [], b = typeof Buffer < "u"; typeof c > "u" && (c = !0), typeof g > "u" && (g = 1 / 0); function w(f, N) { if (f === null)
        return null; if (N === 0)
        return f; var y, I; if (typeof f != "object")
        return f; if (e(f, t))
        y = new t;
    else if (e(f, n))
        y = new n;
    else if (e(f, r))
        y = new r(function (D, Y) { f.then(function (J) { D(w(J, N - 1)); }, function (J) { Y(w(J, N - 1)); }); });
    else if (u.__isArray(f))
        y = [];
    else if (u.__isRegExp(f))
        y = new RegExp(f.source, h(f)), f.lastIndex && (y.lastIndex = f.lastIndex);
    else if (u.__isDate(f))
        y = new Date(f.getTime());
    else {
        if (b && Buffer.isBuffer(f))
            return Buffer.allocUnsafe ? y = Buffer.allocUnsafe(f.length) : y = new Buffer(f.length), f.copy(y), y;
        e(f, Error) ? y = Object.create(f) : typeof s > "u" ? (I = Object.getPrototypeOf(f), y = Object.create(I)) : (y = Object.create(s), I = s);
    } if (c) {
        var L = m.indexOf(f);
        if (L != -1)
            return O[L];
        m.push(f), O.push(y);
    } e(f, t) && f.forEach(function (D, Y) { var J = w(Y, N - 1), _t = w(D, N - 1); y.set(J, _t); }), e(f, n) && f.forEach(function (D) { var Y = w(D, N - 1); y.add(Y); }); for (var R in f) {
        var fe;
        I && (fe = Object.getOwnPropertyDescriptor(I, R)), !(fe && fe.set == null) && (y[R] = w(f[R], N - 1));
    } if (Object.getOwnPropertySymbols)
        for (var je = Object.getOwnPropertySymbols(f), R = 0; R < je.length; R++) {
            var x = je[R], U = Object.getOwnPropertyDescriptor(f, x);
            U && !U.enumerable && !p || (y[x] = w(f[x], N - 1), U.enumerable || Object.defineProperty(y, x, { enumerable: !1 }));
        } if (p)
        for (var Be = Object.getOwnPropertyNames(f), R = 0; R < Be.length; R++) {
            var K = Be[R], U = Object.getOwnPropertyDescriptor(f, K);
            U && U.enumerable || (y[K] = w(f[K], N - 1), Object.defineProperty(y, K, { enumerable: !1 }));
        } return y; } return w(o, g); }
    u.clonePrototype = function (c) { if (c === null)
        return null; var g = function () { }; return g.prototype = c, new g; };
    function i(o) { return Object.prototype.toString.call(o); }
    u.__objToStr = i;
    function a(o) { return typeof o == "object" && i(o) === "[object Date]"; }
    u.__isDate = a;
    function l(o) { return typeof o == "object" && i(o) === "[object Array]"; }
    u.__isArray = l;
    function v(o) { return typeof o == "object" && i(o) === "[object RegExp]"; }
    u.__isRegExp = v;
    function h(o) { var c = ""; return o.global && (c += "g"), o.ignoreCase && (c += "i"), o.multiline && (c += "m"), c; }
    return u.__getRegExpFlags = h, u;
})(); typeof re == "object" && re.exports && (re.exports = xt); });
var nt = A(pe => {
    "use strict";
    Object.defineProperty(pe, "__esModule", { value: !0 });
    var Kt = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var u = n[r];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(t, u.key, u);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })(), Xt = rt(), ne = Wt(Xt);
    function Wt(e) { return e && e.__esModule ? e : { default: e }; }
    function $t(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    var Qt = (function () { function e(t, n, r, u) { $t(this, e), this.conditions = (0, ne.default)(t), this.event = (0, ne.default)(n), this.priority = (0, ne.default)(r), this.name = (0, ne.default)(u), this.result = null; } return Kt(e, [{ key: "setResult", value: function (n) { this.result = n; } }, { key: "toJSON", value: function () { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, r = { conditions: this.conditions.toJSON(!1), event: this.event, priority: this.priority, name: this.name, result: this.result }; return n ? JSON.stringify(r) : r; } }]), e; })();
    pe.default = Qt;
});
var Se = A(me => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    var Zt = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var u = n[r];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(t, u.key, u);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })(), er = tt(), tr = Ae(er), rr = nt(), nr = Ae(rr), ur = Ie(), ir = z(), Ee = Ae(ir);
    function Ae(e) { return e && e.__esModule ? e : { default: e }; }
    function ar(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    function or(e, t) { if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t && (typeof t == "object" || typeof t == "function") ? t : e; }
    function fr(e, t) { if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }
    var lr = (function (e) { fr(t, e); function t(n) { ar(this, t); var r = or(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); typeof n == "string" && (n = JSON.parse(n)), n && n.conditions && r.setConditions(n.conditions), n && n.onSuccess && r.on("success", n.onSuccess), n && n.onFailure && r.on("failure", n.onFailure), n && (n.name || n.name === 0) && r.setName(n.name); var u = n && n.priority || 1; r.setPriority(u); var i = n && n.event || { type: "unknown" }; return r.setEvent(i), r; } return Zt(t, [{ key: "setPriority", value: function (r) { if (r = parseInt(r, 10), r <= 0)
                throw new Error("Priority must be greater than zero"); return this.priority = r, this; } }, { key: "setName", value: function (r) { if (!r && r !== 0)
                throw new Error('Rule "name" must be defined'); return this.name = r, this; } }, { key: "setConditions", value: function (r) { if (!Object.prototype.hasOwnProperty.call(r, "all") && !Object.prototype.hasOwnProperty.call(r, "any"))
                throw new Error('"conditions" root must contain a single instance of "all" or "any"'); return this.conditions = new tr.default(r), this; } }, { key: "setEvent", value: function (r) { if (!r)
                throw new Error("Rule: setEvent() requires event object"); if (!Object.prototype.hasOwnProperty.call(r, "type"))
                throw new Error('Rule: setEvent() requires event object with "type" property'); return this.event = { type: r.type }, r.params && (this.event.params = r.params), this; } }, { key: "setEngine", value: function (r) { return this.engine = r, this; } }, { key: "toJSON", value: function () { var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, u = { conditions: this.conditions.toJSON(!1), priority: this.priority, event: this.event, name: this.name }; return r ? JSON.stringify(u) : u; } }, { key: "prioritizeConditions", value: function (r) { var u = this, i = r.reduce(function (a, l) { var v = l.priority; if (!v) {
                var h = u.engine.getFact(l.fact);
                v = h && h.priority || 1;
            } return a[v] || (a[v] = []), a[v].push(l), a; }, {}); return Object.keys(i).sort(function (a, l) { return Number(a) > Number(l) ? -1 : 1; }).map(function (a) { return i[a]; }); } }, { key: "evaluate", value: function (r) { var u = this, i = new nr.default(this.conditions, this.event, this.priority, this.name), a = function (s) { if (s.isBooleanOperator()) {
                var p = s[s.operator], m = void 0;
                return s.operator === "all" ? m = o(p) : m = h(p), m.then(function (O) { var b = O === !0; return s.result = b, b; });
            }
            else
                return s.evaluate(r, u.engine.operators).then(function (O) { var b = O.result; return s.factResult = O.leftHandSideValue, s.result = b, b; }); }, l = function (s, p) { return Array.isArray(s) || (s = [s]), Promise.all(s.map(function (m) { return a(m); })).then(function (m) { return (0, Ee.default)("rule::evaluateConditions results", m), p.call(m, function (O) { return O === !0; }); }); }, v = function (s, p) { if (s.length === 0)
                return Promise.resolve(!0); var m = Array.prototype.some; p === "all" && (m = Array.prototype.every); for (var O = u.prioritizeConditions(s), b = Promise.resolve(), w = function (y) { var I = O[y], L = !1; b = b.then(function (R) { return p === "any" && R === !0 || L ? ((0, Ee.default)("prioritizeAndRun::detected truthy result; skipping remaining conditions"), L = !0, !0) : p === "all" && R === !1 || L ? ((0, Ee.default)("prioritizeAndRun::detected falsey result; skipping remaining conditions"), L = !0, !1) : l(I, m); }); }, f = 0; f < O.length; f++)
                w(f); return b; }, h = function (s) { return v(s, "any"); }, o = function (s) { return v(s, "all"); }, c = function (s) { return i.setResult(s), s ? u.emit("success", i.event, r, i) : u.emit("failure", i.event, r, i), i; }; return i.conditions.any ? h(i.conditions.any).then(function (g) { return c(g); }) : o(i.conditions.all).then(function (g) { return c(g); }); } }]), t; })(ur.EventEmitter);
    me.default = lr;
});
var ue = A(Oe => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    var sr = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var u = n[r];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(t, u.key, u);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })();
    function cr(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    var vr = (function () { function e(t, n, r) { if (cr(this, e), this.name = String(t), !t)
        throw new Error("Missing operator name"); if (typeof n != "function")
        throw new Error("Missing operator callback"); this.cb = n, this.factValueValidator = r, this.factValueValidator || (this.factValueValidator = function () { return !0; }); } return sr(e, [{ key: "evaluate", value: function (n, r) { return this.factValueValidator(n) && this.cb(n, r); } }]), e; })();
    Oe.default = vr;
});
var ut = A(be => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    function dr(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    function hr(e, t) { if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t && (typeof t == "object" || typeof t == "function") ? t : e; }
    function _r(e, t) { if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }
    var ln = be.UndefinedFactError = (function (e) { _r(t, e); function t() { var n; dr(this, t); for (var r = arguments.length, u = Array(r), i = 0; i < r; i++)
        u[i] = arguments[i]; var a = hr(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(u))); return a.code = "UNDEFINED_FACT", a; } return t; })(Error);
});
var at = A(Pe => {
    "use strict";
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    var Re = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, yr = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var u = n[r];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(t, u.key, u);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })(), gr = te(), Te = we(gr), pr = ut(), Er = z(), j = we(Er), Ar = gt(), mr = ye(), it = we(mr);
    function we(e) { return e && e.__esModule ? e : { default: e }; }
    function Sr(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    var Or = (function () { function e(t) { var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; Sr(this, e), this.factMap = new Map(t), this.factResultsCache = new Map, this.allowUndefinedFacts = !!r.allowUndefinedFacts; for (var u in n) {
        var i = void 0;
        n[u] instanceof Te.default ? i = n[u] : i = new Te.default(u, n[u]), this._addConstantFact(i), (0, j.default)("almanac::constructor initialized runtime fact:" + i.id + " with " + i.value + "<" + Re(i.value) + ">");
    } } return yr(e, [{ key: "_getFact", value: function (n) { return this.factMap.get(n); } }, { key: "_addConstantFact", value: function (n) { this.factMap.set(n.id, n), this._setFactValue(n, {}, n.value); } }, { key: "_setFactValue", value: function (n, r, u) { var i = n.getCacheKey(r), a = Promise.resolve(u); return i && this.factResultsCache.set(i, a), a; } }, { key: "addRuntimeFact", value: function (n, r) { (0, j.default)("almanac::addRuntimeFact id:" + n); var u = new Te.default(n, r); return this._addConstantFact(u); } }, { key: "factValue", value: function (n) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", i = void 0, a = this._getFact(n); if (a === void 0)
                return this.allowUndefinedFacts ? Promise.resolve(void 0) : Promise.reject(new pr.UndefinedFactError("Undefined fact: " + n)); if (a.isConstant())
                i = Promise.resolve(a.calculate(r, this));
            else {
                var l = a.getCacheKey(r), v = l && this.factResultsCache.get(l);
                v ? (i = Promise.resolve(v), (0, j.default)("almanac::factValue cache hit for fact:" + n)) : ((0, j.default)("almanac::factValue cache miss for fact:" + n + "; calculating"), i = this._setFactValue(a, r, a.calculate(r, this)));
            } if (u) {
                if (typeof u == "string" && u.startsWith("$"))
                    return (0, j.default)("condition::evaluate extracting object property " + u), i.then(function (o) { if ((0, it.default)(o)) {
                        var c = (0, Ar.JSONPath)({ path: u, json: o, wrap: !1 });
                        return (0, j.default)("condition::evaluate extracting object property " + u + ", received: " + c), c;
                    }
                    else
                        return (0, j.default)("condition::evaluate could not compute object path(" + u + ") of non-object: " + o + " <" + (typeof o > "u" ? "undefined" : Re(o)) + ">; continuing with " + o), o; });
                var h = void 0;
                try {
                    h = yt("selectn");
                }
                catch {
                    throw console.error(`Oops! Looks like you're trying to use the deprecated syntax for the ".path" property.`), console.error('Please convert your "path" properties to JsonPath syntax (ensure your path starts with "$")'), console.error('Alternatively, if you wish to continue using old syntax (provided by selectn), you may "npm install selectn" as a direct dependency.'), console.error("See https://github.com/CacheControl/json-rules-engine/blob/master/CHANGELOG.md#500--2019-10-27 for more information."), new Error('json-rules-engine: Unmet peer dependency "selectn" required for use of deprecated ".path" syntax. please "npm install selectn" or convert to json-path syntax');
                }
                return i.then(function (o) { if ((0, it.default)(o)) {
                    var c = h(u)(o);
                    return (0, j.default)("condition::evaluate extracting object property " + u + ", received: " + c), c;
                }
                else
                    return (0, j.default)("condition::evaluate could not compute object path(" + u + ") of non-object: " + o + " <" + (typeof o > "u" ? "undefined" : Re(o)) + ">; continuing with " + o), o; });
            } return i; } }]), e; })();
    Pe.default = Or;
});
var ot = A(Me => {
    "use strict";
    Object.defineProperty(Me, "__esModule", { value: !0 });
    var br = function () { var t = []; return function () { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return n.event && t.push(n.event), t; }; };
    Me.SuccessEventFact = br;
});
var ft = A(Ce => {
    "use strict";
    Object.defineProperty(Ce, "__esModule", { value: !0 });
    var Rr = ue(), F = Tr(Rr);
    function Tr(e) { return e && e.__esModule ? e : { default: e }; }
    var M = [];
    M.push(new F.default("equal", function (e, t) { return e === t; }));
    M.push(new F.default("notEqual", function (e, t) { return e !== t; }));
    M.push(new F.default("in", function (e, t) { return t.indexOf(e) > -1; }));
    M.push(new F.default("notIn", function (e, t) { return t.indexOf(e) === -1; }));
    M.push(new F.default("contains", function (e, t) { return e.indexOf(t) > -1; }, Array.isArray));
    M.push(new F.default("doesNotContain", function (e, t) { return e.indexOf(t) === -1; }, Array.isArray));
    function ie(e) { return Number.parseFloat(e).toString() !== "NaN"; }
    M.push(new F.default("lessThan", function (e, t) { return e < t; }, ie));
    M.push(new F.default("lessThanInclusive", function (e, t) { return e <= t; }, ie));
    M.push(new F.default("greaterThan", function (e, t) { return e > t; }, ie));
    M.push(new F.default("greaterThanInclusive", function (e, t) { return e >= t; }, ie));
    Ce.default = M;
});
var ct = A(B => {
    "use strict";
    Object.defineProperty(B, "__esModule", { value: !0 });
    B.FINISHED = B.RUNNING = B.READY = void 0;
    var wr = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var u = n[r];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(t, u.key, u);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })(), Pr = te(), ae = q(Pr), Mr = Se(), Ne = q(Mr), Cr = ue(), Fe = q(Cr), Nr = at(), Fr = q(Nr), jr = Ie(), Br = ot(), Ir = ft(), Lr = q(Ir), Gr = z(), G = q(Gr);
    function q(e) { return e && e.__esModule ? e : { default: e }; }
    function Ur(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    function kr(e, t) { if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t && (typeof t == "object" || typeof t == "function") ? t : e; }
    function qr(e, t) { if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }
    var Dr = B.READY = "READY", lt = B.RUNNING = "RUNNING", st = B.FINISHED = "FINISHED", Yr = (function (e) { qr(t, e); function t() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; Ur(this, t); var u = kr(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return u.rules = [], u.allowUndefinedFacts = r.allowUndefinedFacts || !1, u.operators = new Map, u.facts = new Map, u.status = Dr, n.map(function (i) { return u.addRule(i); }), Lr.default.map(function (i) { return u.addOperator(i); }), u; } return wr(t, [{ key: "addRule", value: function (r) { if (!r)
                throw new Error("Engine: addRule() requires options"); if (!Object.prototype.hasOwnProperty.call(r, "conditions"))
                throw new Error('Engine: addRule() argument requires "conditions" property'); if (!Object.prototype.hasOwnProperty.call(r, "event"))
                throw new Error('Engine: addRule() argument requires "event" property'); var u = void 0; return r instanceof Ne.default ? u = r : u = new Ne.default(r), u.setEngine(this), this.rules.push(u), this.prioritizedRules = null, this; } }, { key: "removeRule", value: function (r) { if (!(r instanceof Ne.default))
                throw new Error("Engine: removeRule() rule must be a instance of Rule"); var u = this.rules.indexOf(r); return u === -1 ? !1 : (this.prioritizedRules = null, !!this.rules.splice(u, 1).length); } }, { key: "addOperator", value: function (r, u) { var i = void 0; r instanceof Fe.default ? i = r : i = new Fe.default(r, u), (0, G.default)("engine::addOperator name:" + i.name), this.operators.set(i.name, i); } }, { key: "removeOperator", value: function (r) { var u = void 0; return r instanceof Fe.default ? u = r.name : u = r, this.operators.delete(u); } }, { key: "addFact", value: function (r, u, i) { var a = r, l = void 0; return r instanceof ae.default ? (a = r.id, l = r) : l = new ae.default(r, u, i), (0, G.default)("engine::addFact id:" + a), this.facts.set(a, l), this; } }, { key: "removeFact", value: function (r) { var u = void 0; return r instanceof ae.default ? u = r.id : u = r, this.facts.delete(u); } }, { key: "prioritizeRules", value: function () { if (!this.prioritizedRules) {
                var r = this.rules.reduce(function (u, i) { var a = i.priority; return u[a] || (u[a] = []), u[a].push(i), u; }, {});
                this.prioritizedRules = Object.keys(r).sort(function (u, i) { return Number(u) > Number(i) ? -1 : 1; }).map(function (u) { return r[u]; });
            } return this.prioritizedRules; } }, { key: "stop", value: function () { return this.status = st, this; } }, { key: "getFact", value: function (r) { return this.facts.get(r); } }, { key: "evaluateRules", value: function (r, u) { var i = this; return Promise.all(r.map(function (a) { if (i.status !== lt) {
                (0, G.default)("engine::run status:" + i.status + "; skipping remaining rules");
                return;
            } return a.evaluate(u).then(function (l) { (0, G.default)("engine::run ruleResult:" + l.result), l.result ? (i.emit("success", a.event, u, l), i.emit(a.event.type, a.event.params, u, l), u.factValue("success-events", { event: a.event })) : i.emit("failure", a.event, u, l); }); })); } }, { key: "run", value: function () { var r = this, u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; (0, G.default)("engine::run started"), (0, G.default)("engine::run runtimeFacts:", u), u["success-events"] = new ae.default("success-events", (0, Br.SuccessEventFact)(), { cache: !1 }), this.status = lt; var i = new Fr.default(this.facts, u, { allowUndefinedFacts: this.allowUndefinedFacts }), a = this.prioritizeRules(), l = Promise.resolve(); return new Promise(function (v, h) { a.map(function (o) { return l = l.then(function () { return r.evaluateRules(o, i); }).catch(h), l; }), l.then(function () { return r.status = st, (0, G.default)("engine::run completed"), i.factValue("success-events"); }).then(function (o) { v({ events: o, almanac: i }); }).catch(h); }); } }]), t; })(jr.EventEmitter);
    B.default = Yr;
});
var dt = A(C => {
    "use strict";
    Object.defineProperty(C, "__esModule", { value: !0 });
    C.Engine = C.Operator = C.Rule = C.Fact = void 0;
    C.default = function (e, t) { return new vt.default(e, t); };
    var Jr = ct(), vt = oe(Jr), Vr = te(), Hr = oe(Vr), zr = Se(), xr = oe(zr), Kr = ue(), Xr = oe(Kr);
    function oe(e) { return e && e.__esModule ? e : { default: e }; }
    C.Fact = Hr.default;
    C.Rule = xr.default;
    C.Operator = Xr.default;
    C.Engine = vt.default;
});
var Wr = A((yn, ht) => { ht.exports = dt(); });
export default Wr();
