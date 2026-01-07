import { a as be } from "@nf-internal/chunk-5Y7CQCTF";
import { a as ge } from "@nf-internal/chunk-3GO544QL";
import { c as Fr, d as Ir } from "@nf-internal/chunk-K25EXYVF";
import { a as v, b as L, e as b, g as z, i as U, j as O, k as q, l as re } from "@nf-internal/chunk-2AVGQ2MQ";
var Pr = b(_e => {
    "use strict";
    _e.byteLength = li;
    _e.toByteArray = hi;
    _e.fromByteArray = pi;
    var C = [], R = [], fi = typeof Uint8Array < "u" ? Uint8Array : Array, je = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (K = 0, Lr = je.length; K < Lr; ++K)
        C[K] = je[K], R[je.charCodeAt(K)] = K;
    var K, Lr;
    R[45] = 62;
    R[95] = 63;
    function Ur(r) { var e = r.length; if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4"); var t = r.indexOf("="); t === -1 && (t = e); var i = t === e ? 0 : 4 - t % 4; return [t, i]; }
    function li(r) { var e = Ur(r), t = e[0], i = e[1]; return (t + i) * 3 / 4 - i; }
    function si(r, e, t) { return (e + t) * 3 / 4 - t; }
    function hi(r) { var e, t = Ur(r), i = t[0], n = t[1], a = new fi(si(r, i, n)), o = 0, u = n > 0 ? i - 4 : i, l; for (l = 0; l < u; l += 4)
        e = R[r.charCodeAt(l)] << 18 | R[r.charCodeAt(l + 1)] << 12 | R[r.charCodeAt(l + 2)] << 6 | R[r.charCodeAt(l + 3)], a[o++] = e >> 16 & 255, a[o++] = e >> 8 & 255, a[o++] = e & 255; return n === 2 && (e = R[r.charCodeAt(l)] << 2 | R[r.charCodeAt(l + 1)] >> 4, a[o++] = e & 255), n === 1 && (e = R[r.charCodeAt(l)] << 10 | R[r.charCodeAt(l + 1)] << 4 | R[r.charCodeAt(l + 2)] >> 2, a[o++] = e >> 8 & 255, a[o++] = e & 255), a; }
    function ci(r) { return C[r >> 18 & 63] + C[r >> 12 & 63] + C[r >> 6 & 63] + C[r & 63]; }
    function di(r, e, t) { for (var i, n = [], a = e; a < t; a += 3)
        i = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (r[a + 2] & 255), n.push(ci(i)); return n.join(""); }
    function pi(r) { for (var e, t = r.length, i = t % 3, n = [], a = 16383, o = 0, u = t - i; o < u; o += a)
        n.push(di(r, o, o + a > u ? u : o + a)); return i === 1 ? (e = r[t - 1], n.push(C[e >> 2] + C[e << 4 & 63] + "==")) : i === 2 && (e = (r[t - 2] << 8) + r[t - 1], n.push(C[e >> 10] + C[e >> 4 & 63] + C[e << 2 & 63] + "=")), n.join(""); }
});
var Nr = b(We => { We.read = function (r, e, t, i, n) { var a, o, u = n * 8 - i - 1, l = (1 << u) - 1, h = l >> 1, s = -7, c = t ? n - 1 : 0, w = t ? -1 : 1, p = r[e + c]; for (c += w, a = p & (1 << -s) - 1, p >>= -s, s += u; s > 0; a = a * 256 + r[e + c], c += w, s -= 8)
    ; for (o = a & (1 << -s) - 1, a >>= -s, s += i; s > 0; o = o * 256 + r[e + c], c += w, s -= 8)
    ; if (a === 0)
    a = 1 - h;
else {
    if (a === l)
        return o ? NaN : (p ? -1 : 1) * (1 / 0);
    o = o + Math.pow(2, i), a = a - h;
} return (p ? -1 : 1) * o * Math.pow(2, a - i); }; We.write = function (r, e, t, i, n, a) { var o, u, l, h = a * 8 - n - 1, s = (1 << h) - 1, c = s >> 1, w = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = i ? 0 : a - 1, g = i ? 1 : -1, _ = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0; for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, o = s) : (o = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), o + c >= 1 ? e += w / l : e += w * Math.pow(2, 1 - c), e * l >= 2 && (o++, l /= 2), o + c >= s ? (u = 0, o = s) : o + c >= 1 ? (u = (e * l - 1) * Math.pow(2, n), o = o + c) : (u = e * Math.pow(2, c - 1) * Math.pow(2, n), o = 0)); n >= 8; r[t + p] = u & 255, p += g, u /= 256, n -= 8)
    ; for (o = o << n | u, h += n; h > 0; r[t + p] = o & 255, p += g, o /= 256, h -= 8)
    ; r[t + p - g] |= _ * 128; }; });
var M = b(ie => {
    "use strict";
    var He = Pr(), te = Nr(), kr = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    ie.Buffer = f;
    ie.SlowBuffer = mi;
    ie.INSPECT_MAX_BYTES = 50;
    var ve = 2147483647;
    ie.kMaxLength = ve;
    f.TYPED_ARRAY_SUPPORT = yi();
    !f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function yi() { try {
        var r = new Uint8Array(1), e = { foo: function () { return 42; } };
        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(r, e), r.foo() === 42;
    }
    catch {
        return !1;
    } }
    Object.defineProperty(f.prototype, "parent", { enumerable: !0, get: function () { if (f.isBuffer(this))
            return this.buffer; } });
    Object.defineProperty(f.prototype, "offset", { enumerable: !0, get: function () { if (f.isBuffer(this))
            return this.byteOffset; } });
    function P(r) { if (r > ve)
        throw new RangeError('The value "' + r + '" is invalid for option "size"'); var e = new Uint8Array(r); return Object.setPrototypeOf(e, f.prototype), e; }
    function f(r, e, t) { if (typeof r == "number") {
        if (typeof e == "string")
            throw new TypeError('The "string" argument must be of type string. Received type number');
        return Ke(r);
    } return jr(r, e, t); }
    f.poolSize = 8192;
    function jr(r, e, t) { if (typeof r == "string")
        return gi(r, e); if (ArrayBuffer.isView(r))
        return $e(r); if (r == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r); if (N(r, ArrayBuffer) || r && N(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (N(r, SharedArrayBuffer) || r && N(r.buffer, SharedArrayBuffer)))
        return Dr(r, e, t); if (typeof r == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number'); var i = r.valueOf && r.valueOf(); if (i != null && i !== r)
        return f.from(i, e, t); var n = bi(r); if (n)
        return n; if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function")
        return f.from(r[Symbol.toPrimitive]("string"), e, t); throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r); }
    f.from = function (r, e, t) { return jr(r, e, t); };
    Object.setPrototypeOf(f.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(f, Uint8Array);
    function Wr(r) { if (typeof r != "number")
        throw new TypeError('"size" argument must be of type number'); if (r < 0)
        throw new RangeError('The value "' + r + '" is invalid for option "size"'); }
    function wi(r, e, t) { return Wr(r), r <= 0 ? P(r) : e !== void 0 ? typeof t == "string" ? P(r).fill(e, t) : P(r).fill(e) : P(r); }
    f.alloc = function (r, e, t) { return wi(r, e, t); };
    function Ke(r) { return Wr(r), P(r < 0 ? 0 : Ve(r) | 0); }
    f.allocUnsafe = function (r) { return Ke(r); };
    f.allocUnsafeSlow = function (r) { return Ke(r); };
    function gi(r, e) { if ((typeof e != "string" || e === "") && (e = "utf8"), !f.isEncoding(e))
        throw new TypeError("Unknown encoding: " + e); var t = Hr(r, e) | 0, i = P(t), n = i.write(r, e); return n !== t && (i = i.slice(0, n)), i; }
    function $e(r) { for (var e = r.length < 0 ? 0 : Ve(r.length) | 0, t = P(e), i = 0; i < e; i += 1)
        t[i] = r[i] & 255; return t; }
    function Dr(r, e, t) { if (e < 0 || r.byteLength < e)
        throw new RangeError('"offset" is outside of buffer bounds'); if (r.byteLength < e + (t || 0))
        throw new RangeError('"length" is outside of buffer bounds'); var i; return e === void 0 && t === void 0 ? i = new Uint8Array(r) : t === void 0 ? i = new Uint8Array(r, e) : i = new Uint8Array(r, e, t), Object.setPrototypeOf(i, f.prototype), i; }
    function bi(r) { if (f.isBuffer(r)) {
        var e = Ve(r.length) | 0, t = P(e);
        return t.length === 0 || r.copy(t, 0, 0, e), t;
    } if (r.length !== void 0)
        return typeof r.length != "number" || Ge(r.length) ? P(0) : $e(r); if (r.type === "Buffer" && Array.isArray(r.data))
        return $e(r.data); }
    function Ve(r) { if (r >= ve)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ve.toString(16) + " bytes"); return r | 0; }
    function mi(r) { return +r != r && (r = 0), f.alloc(+r); }
    f.isBuffer = function (e) { return e != null && e._isBuffer === !0 && e !== f.prototype; };
    f.compare = function (e, t) { if (N(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), N(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(e) || !f.isBuffer(t))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'); if (e === t)
        return 0; for (var i = e.length, n = t.length, a = 0, o = Math.min(i, n); a < o; ++a)
        if (e[a] !== t[a]) {
            i = e[a], n = t[a];
            break;
        } return i < n ? -1 : n < i ? 1 : 0; };
    f.isEncoding = function (e) { switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return !0;
        default: return !1;
    } };
    f.concat = function (e, t) { if (!Array.isArray(e))
        throw new TypeError('"list" argument must be an Array of Buffers'); if (e.length === 0)
        return f.alloc(0); var i; if (t === void 0)
        for (t = 0, i = 0; i < e.length; ++i)
            t += e[i].length; var n = f.allocUnsafe(t), a = 0; for (i = 0; i < e.length; ++i) {
        var o = e[i];
        if (N(o, Uint8Array) && (o = f.from(o)), !f.isBuffer(o))
            throw new TypeError('"list" argument must be an Array of Buffers');
        o.copy(n, a), a += o.length;
    } return n; };
    function Hr(r, e) { if (f.isBuffer(r))
        return r.length; if (ArrayBuffer.isView(r) || N(r, ArrayBuffer))
        return r.byteLength; if (typeof r != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r); var t = r.length, i = arguments.length > 2 && arguments[2] === !0; if (!i && t === 0)
        return 0; for (var n = !1;;)
        switch (e) {
            case "ascii":
            case "latin1":
            case "binary": return t;
            case "utf8":
            case "utf-8": return ze(r).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le": return t * 2;
            case "hex": return t >>> 1;
            case "base64": return Xr(r).length;
            default:
                if (n)
                    return i ? -1 : ze(r).length;
                e = ("" + e).toLowerCase(), n = !0;
        } }
    f.byteLength = Hr;
    function Ei(r, e, t) { var i = !1; if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e))
        return ""; for (r || (r = "utf8");;)
        switch (r) {
            case "hex": return Bi(this, e, t);
            case "utf8":
            case "utf-8": return Kr(this, e, t);
            case "ascii": return Ci(this, e, t);
            case "latin1":
            case "binary": return Mi(this, e, t);
            case "base64": return Ti(this, e, t);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le": return Fi(this, e, t);
            default:
                if (i)
                    throw new TypeError("Unknown encoding: " + r);
                r = (r + "").toLowerCase(), i = !0;
        } }
    f.prototype._isBuffer = !0;
    function V(r, e, t) { var i = r[e]; r[e] = r[t], r[t] = i; }
    f.prototype.swap16 = function () { var e = this.length; if (e % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2)
        V(this, t, t + 1); return this; };
    f.prototype.swap32 = function () { var e = this.length; if (e % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4)
        V(this, t, t + 3), V(this, t + 1, t + 2); return this; };
    f.prototype.swap64 = function () { var e = this.length; if (e % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8)
        V(this, t, t + 7), V(this, t + 1, t + 6), V(this, t + 2, t + 5), V(this, t + 3, t + 4); return this; };
    f.prototype.toString = function () { var e = this.length; return e === 0 ? "" : arguments.length === 0 ? Kr(this, 0, e) : Ei.apply(this, arguments); };
    f.prototype.toLocaleString = f.prototype.toString;
    f.prototype.equals = function (e) { if (!f.isBuffer(e))
        throw new TypeError("Argument must be a Buffer"); return this === e ? !0 : f.compare(this, e) === 0; };
    f.prototype.inspect = function () { var e = "", t = ie.INSPECT_MAX_BYTES; return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"; };
    kr && (f.prototype[kr] = f.prototype.inspect);
    f.prototype.compare = function (e, t, i, n, a) { if (N(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(e))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e); if (t === void 0 && (t = 0), i === void 0 && (i = e ? e.length : 0), n === void 0 && (n = 0), a === void 0 && (a = this.length), t < 0 || i > e.length || n < 0 || a > this.length)
        throw new RangeError("out of range index"); if (n >= a && t >= i)
        return 0; if (n >= a)
        return -1; if (t >= i)
        return 1; if (t >>>= 0, i >>>= 0, n >>>= 0, a >>>= 0, this === e)
        return 0; for (var o = a - n, u = i - t, l = Math.min(o, u), h = this.slice(n, a), s = e.slice(t, i), c = 0; c < l; ++c)
        if (h[c] !== s[c]) {
            o = h[c], u = s[c];
            break;
        } return o < u ? -1 : u < o ? 1 : 0; };
    function $r(r, e, t, i, n) { if (r.length === 0)
        return -1; if (typeof t == "string" ? (i = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, Ge(t) && (t = n ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
        if (n)
            return -1;
        t = r.length - 1;
    }
    else if (t < 0)
        if (n)
            t = 0;
        else
            return -1; if (typeof e == "string" && (e = f.from(e, i)), f.isBuffer(e))
        return e.length === 0 ? -1 : Or(r, e, t, i, n); if (typeof e == "number")
        return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? n ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : Or(r, [e], t, i, n); throw new TypeError("val must be string, number or Buffer"); }
    function Or(r, e, t, i, n) { var a = 1, o = r.length, u = e.length; if (i !== void 0 && (i = String(i).toLowerCase(), i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
        if (r.length < 2 || e.length < 2)
            return -1;
        a = 2, o /= 2, u /= 2, t /= 2;
    } function l(p, g) { return a === 1 ? p[g] : p.readUInt16BE(g * a); } var h; if (n) {
        var s = -1;
        for (h = t; h < o; h++)
            if (l(r, h) === l(e, s === -1 ? 0 : h - s)) {
                if (s === -1 && (s = h), h - s + 1 === u)
                    return s * a;
            }
            else
                s !== -1 && (h -= h - s), s = -1;
    }
    else
        for (t + u > o && (t = o - u), h = t; h >= 0; h--) {
            for (var c = !0, w = 0; w < u; w++)
                if (l(r, h + w) !== l(e, w)) {
                    c = !1;
                    break;
                }
            if (c)
                return h;
        } return -1; }
    f.prototype.includes = function (e, t, i) { return this.indexOf(e, t, i) !== -1; };
    f.prototype.indexOf = function (e, t, i) { return $r(this, e, t, i, !0); };
    f.prototype.lastIndexOf = function (e, t, i) { return $r(this, e, t, i, !1); };
    function _i(r, e, t, i) { t = Number(t) || 0; var n = r.length - t; i ? (i = Number(i), i > n && (i = n)) : i = n; var a = e.length; i > a / 2 && (i = a / 2); for (var o = 0; o < i; ++o) {
        var u = parseInt(e.substr(o * 2, 2), 16);
        if (Ge(u))
            return o;
        r[t + o] = u;
    } return o; }
    function vi(r, e, t, i) { return Se(ze(e, r.length - t), r, t, i); }
    function zr(r, e, t, i) { return Se(Ui(e), r, t, i); }
    function Si(r, e, t, i) { return zr(r, e, t, i); }
    function Ri(r, e, t, i) { return Se(Xr(e), r, t, i); }
    function xi(r, e, t, i) { return Se(Pi(e, r.length - t), r, t, i); }
    f.prototype.write = function (e, t, i, n) { if (t === void 0)
        n = "utf8", i = this.length, t = 0;
    else if (i === void 0 && typeof t == "string")
        n = t, i = this.length, t = 0;
    else if (isFinite(t))
        t = t >>> 0, isFinite(i) ? (i = i >>> 0, n === void 0 && (n = "utf8")) : (n = i, i = void 0);
    else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported"); var a = this.length - t; if ((i === void 0 || i > a) && (i = a), e.length > 0 && (i < 0 || t < 0) || t > this.length)
        throw new RangeError("Attempt to write outside buffer bounds"); n || (n = "utf8"); for (var o = !1;;)
        switch (n) {
            case "hex": return _i(this, e, t, i);
            case "utf8":
            case "utf-8": return vi(this, e, t, i);
            case "ascii": return zr(this, e, t, i);
            case "latin1":
            case "binary": return Si(this, e, t, i);
            case "base64": return Ri(this, e, t, i);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le": return xi(this, e, t, i);
            default:
                if (o)
                    throw new TypeError("Unknown encoding: " + n);
                n = ("" + n).toLowerCase(), o = !0;
        } };
    f.prototype.toJSON = function () { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }; };
    function Ti(r, e, t) { return e === 0 && t === r.length ? He.fromByteArray(r) : He.fromByteArray(r.slice(e, t)); }
    function Kr(r, e, t) { t = Math.min(r.length, t); for (var i = [], n = e; n < t;) {
        var a = r[n], o = null, u = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
        if (n + u <= t) {
            var l, h, s, c;
            switch (u) {
                case 1:
                    a < 128 && (o = a);
                    break;
                case 2:
                    l = r[n + 1], (l & 192) === 128 && (c = (a & 31) << 6 | l & 63, c > 127 && (o = c));
                    break;
                case 3:
                    l = r[n + 1], h = r[n + 2], (l & 192) === 128 && (h & 192) === 128 && (c = (a & 15) << 12 | (l & 63) << 6 | h & 63, c > 2047 && (c < 55296 || c > 57343) && (o = c));
                    break;
                case 4: l = r[n + 1], h = r[n + 2], s = r[n + 3], (l & 192) === 128 && (h & 192) === 128 && (s & 192) === 128 && (c = (a & 15) << 18 | (l & 63) << 12 | (h & 63) << 6 | s & 63, c > 65535 && c < 1114112 && (o = c));
            }
        }
        o === null ? (o = 65533, u = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), i.push(o), n += u;
    } return Ai(i); }
    var qr = 4096;
    function Ai(r) { var e = r.length; if (e <= qr)
        return String.fromCharCode.apply(String, r); for (var t = "", i = 0; i < e;)
        t += String.fromCharCode.apply(String, r.slice(i, i += qr)); return t; }
    function Ci(r, e, t) { var i = ""; t = Math.min(r.length, t); for (var n = e; n < t; ++n)
        i += String.fromCharCode(r[n] & 127); return i; }
    function Mi(r, e, t) { var i = ""; t = Math.min(r.length, t); for (var n = e; n < t; ++n)
        i += String.fromCharCode(r[n]); return i; }
    function Bi(r, e, t) { var i = r.length; (!e || e < 0) && (e = 0), (!t || t < 0 || t > i) && (t = i); for (var n = "", a = e; a < t; ++a)
        n += Ni[r[a]]; return n; }
    function Fi(r, e, t) { for (var i = r.slice(e, t), n = "", a = 0; a < i.length; a += 2)
        n += String.fromCharCode(i[a] + i[a + 1] * 256); return n; }
    f.prototype.slice = function (e, t) { var i = this.length; e = ~~e, t = t === void 0 ? i : ~~t, e < 0 ? (e += i, e < 0 && (e = 0)) : e > i && (e = i), t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), t < e && (t = e); var n = this.subarray(e, t); return Object.setPrototypeOf(n, f.prototype), n; };
    function E(r, e, t) { if (r % 1 !== 0 || r < 0)
        throw new RangeError("offset is not uint"); if (r + e > t)
        throw new RangeError("Trying to access beyond buffer length"); }
    f.prototype.readUIntLE = function (e, t, i) { e = e >>> 0, t = t >>> 0, i || E(e, t, this.length); for (var n = this[e], a = 1, o = 0; ++o < t && (a *= 256);)
        n += this[e + o] * a; return n; };
    f.prototype.readUIntBE = function (e, t, i) { e = e >>> 0, t = t >>> 0, i || E(e, t, this.length); for (var n = this[e + --t], a = 1; t > 0 && (a *= 256);)
        n += this[e + --t] * a; return n; };
    f.prototype.readUInt8 = function (e, t) { return e = e >>> 0, t || E(e, 1, this.length), this[e]; };
    f.prototype.readUInt16LE = function (e, t) { return e = e >>> 0, t || E(e, 2, this.length), this[e] | this[e + 1] << 8; };
    f.prototype.readUInt16BE = function (e, t) { return e = e >>> 0, t || E(e, 2, this.length), this[e] << 8 | this[e + 1]; };
    f.prototype.readUInt32LE = function (e, t) { return e = e >>> 0, t || E(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216; };
    f.prototype.readUInt32BE = function (e, t) { return e = e >>> 0, t || E(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]); };
    f.prototype.readIntLE = function (e, t, i) { e = e >>> 0, t = t >>> 0, i || E(e, t, this.length); for (var n = this[e], a = 1, o = 0; ++o < t && (a *= 256);)
        n += this[e + o] * a; return a *= 128, n >= a && (n -= Math.pow(2, 8 * t)), n; };
    f.prototype.readIntBE = function (e, t, i) { e = e >>> 0, t = t >>> 0, i || E(e, t, this.length); for (var n = t, a = 1, o = this[e + --n]; n > 0 && (a *= 256);)
        o += this[e + --n] * a; return a *= 128, o >= a && (o -= Math.pow(2, 8 * t)), o; };
    f.prototype.readInt8 = function (e, t) { return e = e >>> 0, t || E(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]; };
    f.prototype.readInt16LE = function (e, t) { e = e >>> 0, t || E(e, 2, this.length); var i = this[e] | this[e + 1] << 8; return i & 32768 ? i | 4294901760 : i; };
    f.prototype.readInt16BE = function (e, t) { e = e >>> 0, t || E(e, 2, this.length); var i = this[e + 1] | this[e] << 8; return i & 32768 ? i | 4294901760 : i; };
    f.prototype.readInt32LE = function (e, t) { return e = e >>> 0, t || E(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24; };
    f.prototype.readInt32BE = function (e, t) { return e = e >>> 0, t || E(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]; };
    f.prototype.readFloatLE = function (e, t) { return e = e >>> 0, t || E(e, 4, this.length), te.read(this, e, !0, 23, 4); };
    f.prototype.readFloatBE = function (e, t) { return e = e >>> 0, t || E(e, 4, this.length), te.read(this, e, !1, 23, 4); };
    f.prototype.readDoubleLE = function (e, t) { return e = e >>> 0, t || E(e, 8, this.length), te.read(this, e, !0, 52, 8); };
    f.prototype.readDoubleBE = function (e, t) { return e = e >>> 0, t || E(e, 8, this.length), te.read(this, e, !1, 52, 8); };
    function S(r, e, t, i, n, a) { if (!f.isBuffer(r))
        throw new TypeError('"buffer" argument must be a Buffer instance'); if (e > n || e < a)
        throw new RangeError('"value" argument is out of bounds'); if (t + i > r.length)
        throw new RangeError("Index out of range"); }
    f.prototype.writeUIntLE = function (e, t, i, n) { if (e = +e, t = t >>> 0, i = i >>> 0, !n) {
        var a = Math.pow(2, 8 * i) - 1;
        S(this, e, t, i, a, 0);
    } var o = 1, u = 0; for (this[t] = e & 255; ++u < i && (o *= 256);)
        this[t + u] = e / o & 255; return t + i; };
    f.prototype.writeUIntBE = function (e, t, i, n) { if (e = +e, t = t >>> 0, i = i >>> 0, !n) {
        var a = Math.pow(2, 8 * i) - 1;
        S(this, e, t, i, a, 0);
    } var o = i - 1, u = 1; for (this[t + o] = e & 255; --o >= 0 && (u *= 256);)
        this[t + o] = e / u & 255; return t + i; };
    f.prototype.writeUInt8 = function (e, t, i) { return e = +e, t = t >>> 0, i || S(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1; };
    f.prototype.writeUInt16LE = function (e, t, i) { return e = +e, t = t >>> 0, i || S(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2; };
    f.prototype.writeUInt16BE = function (e, t, i) { return e = +e, t = t >>> 0, i || S(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2; };
    f.prototype.writeUInt32LE = function (e, t, i) { return e = +e, t = t >>> 0, i || S(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4; };
    f.prototype.writeUInt32BE = function (e, t, i) { return e = +e, t = t >>> 0, i || S(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4; };
    f.prototype.writeIntLE = function (e, t, i, n) { if (e = +e, t = t >>> 0, !n) {
        var a = Math.pow(2, 8 * i - 1);
        S(this, e, t, i, a - 1, -a);
    } var o = 0, u = 1, l = 0; for (this[t] = e & 255; ++o < i && (u *= 256);)
        e < 0 && l === 0 && this[t + o - 1] !== 0 && (l = 1), this[t + o] = (e / u >> 0) - l & 255; return t + i; };
    f.prototype.writeIntBE = function (e, t, i, n) { if (e = +e, t = t >>> 0, !n) {
        var a = Math.pow(2, 8 * i - 1);
        S(this, e, t, i, a - 1, -a);
    } var o = i - 1, u = 1, l = 0; for (this[t + o] = e & 255; --o >= 0 && (u *= 256);)
        e < 0 && l === 0 && this[t + o + 1] !== 0 && (l = 1), this[t + o] = (e / u >> 0) - l & 255; return t + i; };
    f.prototype.writeInt8 = function (e, t, i) { return e = +e, t = t >>> 0, i || S(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1; };
    f.prototype.writeInt16LE = function (e, t, i) { return e = +e, t = t >>> 0, i || S(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2; };
    f.prototype.writeInt16BE = function (e, t, i) { return e = +e, t = t >>> 0, i || S(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2; };
    f.prototype.writeInt32LE = function (e, t, i) { return e = +e, t = t >>> 0, i || S(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4; };
    f.prototype.writeInt32BE = function (e, t, i) { return e = +e, t = t >>> 0, i || S(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4; };
    function Vr(r, e, t, i, n, a) { if (t + i > r.length)
        throw new RangeError("Index out of range"); if (t < 0)
        throw new RangeError("Index out of range"); }
    function Gr(r, e, t, i, n) { return e = +e, t = t >>> 0, n || Vr(r, e, t, 4, 34028234663852886e22, -34028234663852886e22), te.write(r, e, t, i, 23, 4), t + 4; }
    f.prototype.writeFloatLE = function (e, t, i) { return Gr(this, e, t, !0, i); };
    f.prototype.writeFloatBE = function (e, t, i) { return Gr(this, e, t, !1, i); };
    function Yr(r, e, t, i, n) { return e = +e, t = t >>> 0, n || Vr(r, e, t, 8, 17976931348623157e292, -17976931348623157e292), te.write(r, e, t, i, 52, 8), t + 8; }
    f.prototype.writeDoubleLE = function (e, t, i) { return Yr(this, e, t, !0, i); };
    f.prototype.writeDoubleBE = function (e, t, i) { return Yr(this, e, t, !1, i); };
    f.prototype.copy = function (e, t, i, n) { if (!f.isBuffer(e))
        throw new TypeError("argument should be a Buffer"); if (i || (i = 0), !n && n !== 0 && (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < i && (n = i), n === i || e.length === 0 || this.length === 0)
        return 0; if (t < 0)
        throw new RangeError("targetStart out of bounds"); if (i < 0 || i >= this.length)
        throw new RangeError("Index out of range"); if (n < 0)
        throw new RangeError("sourceEnd out of bounds"); n > this.length && (n = this.length), e.length - t < n - i && (n = e.length - t + i); var a = n - i; if (this === e && typeof Uint8Array.prototype.copyWithin == "function")
        this.copyWithin(t, i, n);
    else if (this === e && i < t && t < n)
        for (var o = a - 1; o >= 0; --o)
            e[o + t] = this[o + i];
    else
        Uint8Array.prototype.set.call(e, this.subarray(i, n), t); return a; };
    f.prototype.fill = function (e, t, i, n) { if (typeof e == "string") {
        if (typeof t == "string" ? (n = t, t = 0, i = this.length) : typeof i == "string" && (n = i, i = this.length), n !== void 0 && typeof n != "string")
            throw new TypeError("encoding must be a string");
        if (typeof n == "string" && !f.isEncoding(n))
            throw new TypeError("Unknown encoding: " + n);
        if (e.length === 1) {
            var a = e.charCodeAt(0);
            (n === "utf8" && a < 128 || n === "latin1") && (e = a);
        }
    }
    else
        typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e)); if (t < 0 || this.length < t || this.length < i)
        throw new RangeError("Out of range index"); if (i <= t)
        return this; t = t >>> 0, i = i === void 0 ? this.length : i >>> 0, e || (e = 0); var o; if (typeof e == "number")
        for (o = t; o < i; ++o)
            this[o] = e;
    else {
        var u = f.isBuffer(e) ? e : f.from(e, n), l = u.length;
        if (l === 0)
            throw new TypeError('The value "' + e + '" is invalid for argument "value"');
        for (o = 0; o < i - t; ++o)
            this[o + t] = u[o % l];
    } return this; };
    var Ii = /[^+/0-9A-Za-z-_]/g;
    function Li(r) { if (r = r.split("=")[0], r = r.trim().replace(Ii, ""), r.length < 2)
        return ""; for (; r.length % 4 !== 0;)
        r = r + "="; return r; }
    function ze(r, e) { e = e || 1 / 0; for (var t, i = r.length, n = null, a = [], o = 0; o < i; ++o) {
        if (t = r.charCodeAt(o), t > 55295 && t < 57344) {
            if (!n) {
                if (t > 56319) {
                    (e -= 3) > -1 && a.push(239, 191, 189);
                    continue;
                }
                else if (o + 1 === i) {
                    (e -= 3) > -1 && a.push(239, 191, 189);
                    continue;
                }
                n = t;
                continue;
            }
            if (t < 56320) {
                (e -= 3) > -1 && a.push(239, 191, 189), n = t;
                continue;
            }
            t = (n - 55296 << 10 | t - 56320) + 65536;
        }
        else
            n && (e -= 3) > -1 && a.push(239, 191, 189);
        if (n = null, t < 128) {
            if ((e -= 1) < 0)
                break;
            a.push(t);
        }
        else if (t < 2048) {
            if ((e -= 2) < 0)
                break;
            a.push(t >> 6 | 192, t & 63 | 128);
        }
        else if (t < 65536) {
            if ((e -= 3) < 0)
                break;
            a.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
        }
        else if (t < 1114112) {
            if ((e -= 4) < 0)
                break;
            a.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
        }
        else
            throw new Error("Invalid code point");
    } return a; }
    function Ui(r) { for (var e = [], t = 0; t < r.length; ++t)
        e.push(r.charCodeAt(t) & 255); return e; }
    function Pi(r, e) { for (var t, i, n, a = [], o = 0; o < r.length && !((e -= 2) < 0); ++o)
        t = r.charCodeAt(o), i = t >> 8, n = t % 256, a.push(n), a.push(i); return a; }
    function Xr(r) { return He.toByteArray(Li(r)); }
    function Se(r, e, t, i) { for (var n = 0; n < i && !(n + t >= e.length || n >= r.length); ++n)
        e[n + t] = r[n]; return n; }
    function N(r, e) { return r instanceof e || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === e.name; }
    function Ge(r) { return r !== r; }
    var Ni = (function () { for (var r = "0123456789abcdef", e = new Array(256), t = 0; t < 16; ++t)
        for (var i = t * 16, n = 0; n < 16; ++n)
            e[i + n] = r[t] + r[n]; return e; })();
});
var G = b((uo, Ye) => { typeof Object.create == "function" ? Ye.exports = function (e, t) { t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })); } : Ye.exports = function (e, t) { if (t) {
    e.super_ = t;
    var i = function () { };
    i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e;
} }; });
var Xe = b((fo, et) => { et.exports = be().EventEmitter; });
var Ze = b(() => { });
var ot = b((ho, at) => {
    "use strict";
    function rt(r, e) { var t = Object.keys(r); if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(r);
        e && (i = i.filter(function (n) { return Object.getOwnPropertyDescriptor(r, n).enumerable; })), t.push.apply(t, i);
    } return t; }
    function tt(r) { for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e] != null ? arguments[e] : {};
        e % 2 ? rt(Object(t), !0).forEach(function (i) { ki(r, i, t[i]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : rt(Object(t)).forEach(function (i) { Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i)); });
    } return r; }
    function ki(r, e, t) { return e = nt(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r; }
    function Di(r, e) { if (!(r instanceof e))
        throw new TypeError("Cannot call a class as a function"); }
    function it(r, e) { for (var t = 0; t < e.length; t++) {
        var i = e[t];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, nt(i.key), i);
    } }
    function Oi(r, e, t) { return e && it(r.prototype, e), t && it(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r; }
    function nt(r) { var e = qi(r, "string"); return typeof e == "symbol" ? e : String(e); }
    function qi(r, e) { if (typeof r != "object" || r === null)
        return r; var t = r[Symbol.toPrimitive]; if (t !== void 0) {
        var i = t.call(r, e || "default");
        if (typeof i != "object")
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    } return (e === "string" ? String : Number)(r); }
    var ji = M(), Re = ji.Buffer, Wi = Ze(), Je = Wi.inspect, Hi = Je && Je.custom || "inspect";
    function $i(r, e, t) { Re.prototype.copy.call(r, e, t); }
    at.exports = (function () { function r() { Di(this, r), this.head = null, this.tail = null, this.length = 0; } return Oi(r, [{ key: "push", value: function (t) { var i = { data: t, next: null }; this.length > 0 ? this.tail.next = i : this.head = i, this.tail = i, ++this.length; } }, { key: "unshift", value: function (t) { var i = { data: t, next: this.head }; this.length === 0 && (this.tail = i), this.head = i, ++this.length; } }, { key: "shift", value: function () { if (this.length !== 0) {
                var t = this.head.data;
                return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
            } } }, { key: "clear", value: function () { this.head = this.tail = null, this.length = 0; } }, { key: "join", value: function (t) { if (this.length === 0)
                return ""; for (var i = this.head, n = "" + i.data; i = i.next;)
                n += t + i.data; return n; } }, { key: "concat", value: function (t) { if (this.length === 0)
                return Re.alloc(0); for (var i = Re.allocUnsafe(t >>> 0), n = this.head, a = 0; n;)
                $i(n.data, i, a), a += n.data.length, n = n.next; return i; } }, { key: "consume", value: function (t, i) { var n; return t < this.head.data.length ? (n = this.head.data.slice(0, t), this.head.data = this.head.data.slice(t)) : t === this.head.data.length ? n = this.shift() : n = i ? this._getString(t) : this._getBuffer(t), n; } }, { key: "first", value: function () { return this.head.data; } }, { key: "_getString", value: function (t) { var i = this.head, n = 1, a = i.data; for (t -= a.length; i = i.next;) {
                var o = i.data, u = t > o.length ? o.length : t;
                if (u === o.length ? a += o : a += o.slice(0, t), t -= u, t === 0) {
                    u === o.length ? (++n, i.next ? this.head = i.next : this.head = this.tail = null) : (this.head = i, i.data = o.slice(u));
                    break;
                }
                ++n;
            } return this.length -= n, a; } }, { key: "_getBuffer", value: function (t) { var i = Re.allocUnsafe(t), n = this.head, a = 1; for (n.data.copy(i), t -= n.data.length; n = n.next;) {
                var o = n.data, u = t > o.length ? o.length : t;
                if (o.copy(i, i.length - t, 0, u), t -= u, t === 0) {
                    u === o.length ? (++a, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = o.slice(u));
                    break;
                }
                ++a;
            } return this.length -= a, i; } }, { key: Hi, value: function (t, i) { return Je(this, tt(tt({}, i), {}, { depth: 0, customInspect: !1 })); } }]), r; })();
});
var er = b((co, ft) => {
    "use strict";
    function zi(r, e) { var t = this, i = this._readableState && this._readableState.destroyed, n = this._writableState && this._writableState.destroyed; return i || n ? (e ? e(r) : r && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(Qe, this, r)) : process.nextTick(Qe, this, r)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(r || null, function (a) { !e && a ? t._writableState ? t._writableState.errorEmitted ? process.nextTick(xe, t) : (t._writableState.errorEmitted = !0, process.nextTick(ut, t, a)) : process.nextTick(ut, t, a) : e ? (process.nextTick(xe, t), e(a)) : process.nextTick(xe, t); }), this); }
    function ut(r, e) { Qe(r, e), xe(r); }
    function xe(r) { r._writableState && !r._writableState.emitClose || r._readableState && !r._readableState.emitClose || r.emit("close"); }
    function Ki() { this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1); }
    function Qe(r, e) { r.emit("error", e); }
    function Vi(r, e) { var t = r._readableState, i = r._writableState; t && t.autoDestroy || i && i.autoDestroy ? r.destroy(e) : r.emit("error", e); }
    ft.exports = { destroy: zi, undestroy: Ki, errorOrDestroy: Vi };
});
var Y = b((po, ht) => {
    "use strict";
    function Gi(r, e) { r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e; }
    var st = {};
    function x(r, e, t) { t || (t = Error); function i(a, o, u) { return typeof e == "string" ? e : e(a, o, u); } var n = (function (a) { Gi(o, a); function o(u, l, h) { return a.call(this, i(u, l, h)) || this; } return o; })(t); n.prototype.name = t.name, n.prototype.code = r, st[r] = n; }
    function lt(r, e) { if (Array.isArray(r)) {
        var t = r.length;
        return r = r.map(function (i) { return String(i); }), t > 2 ? "one of ".concat(e, " ").concat(r.slice(0, t - 1).join(", "), ", or ") + r[t - 1] : t === 2 ? "one of ".concat(e, " ").concat(r[0], " or ").concat(r[1]) : "of ".concat(e, " ").concat(r[0]);
    }
    else
        return "of ".concat(e, " ").concat(String(r)); }
    function Yi(r, e, t) { return r.substr(!t || t < 0 ? 0 : +t, e.length) === e; }
    function Xi(r, e, t) { return (t === void 0 || t > r.length) && (t = r.length), r.substring(t - e.length, t) === e; }
    function Zi(r, e, t) { return typeof t != "number" && (t = 0), t + e.length > r.length ? !1 : r.indexOf(e, t) !== -1; }
    x("ERR_INVALID_OPT_VALUE", function (r, e) { return 'The value "' + e + '" is invalid for option "' + r + '"'; }, TypeError);
    x("ERR_INVALID_ARG_TYPE", function (r, e, t) { var i; typeof e == "string" && Yi(e, "not ") ? (i = "must not be", e = e.replace(/^not /, "")) : i = "must be"; var n; if (Xi(r, " argument"))
        n = "The ".concat(r, " ").concat(i, " ").concat(lt(e, "type"));
    else {
        var a = Zi(r, ".") ? "property" : "argument";
        n = 'The "'.concat(r, '" ').concat(a, " ").concat(i, " ").concat(lt(e, "type"));
    } return n += ". Received type ".concat(typeof t), n; }, TypeError);
    x("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    x("ERR_METHOD_NOT_IMPLEMENTED", function (r) { return "The " + r + " method is not implemented"; });
    x("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    x("ERR_STREAM_DESTROYED", function (r) { return "Cannot call " + r + " after a stream was destroyed"; });
    x("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    x("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    x("ERR_STREAM_WRITE_AFTER_END", "write after end");
    x("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    x("ERR_UNKNOWN_ENCODING", function (r) { return "Unknown encoding: " + r; }, TypeError);
    x("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    ht.exports.codes = st;
});
var rr = b((yo, ct) => {
    "use strict";
    var Ji = Y().codes.ERR_INVALID_OPT_VALUE;
    function Qi(r, e, t) { return r.highWaterMark != null ? r.highWaterMark : e ? r[t] : null; }
    function en(r, e, t, i) { var n = Qi(e, i, t); if (n != null) {
        if (!(isFinite(n) && Math.floor(n) === n) || n < 0) {
            var a = i ? t : "highWaterMark";
            throw new Ji(a, n);
        }
        return Math.floor(n);
    } return r.objectMode ? 16 : 16 * 1024; }
    ct.exports = { getHighWaterMark: en };
});
var pt = b((wo, dt) => { dt.exports = rn; function rn(r, e) { if (tr("noDeprecation"))
    return r; var t = !1; function i() { if (!t) {
    if (tr("throwDeprecation"))
        throw new Error(e);
    tr("traceDeprecation") ? console.trace(e) : console.warn(e), t = !0;
} return r.apply(this, arguments); } return i; } function tr(r) { try {
    if (!global.localStorage)
        return !1;
}
catch {
    return !1;
} var e = global.localStorage[r]; return e == null ? !1 : String(e).toLowerCase() === "true"; } });
var ar = b((go, Et) => {
    "use strict";
    Et.exports = m;
    function wt(r) { var e = this; this.next = null, this.entry = null, this.finish = function () { Mn(e, r); }; }
    var ae;
    m.WritableState = he;
    var tn = { deprecate: pt() }, gt = Xe(), Ae = M().Buffer, nn = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function () { };
    function an(r) { return Ae.from(r); }
    function on(r) { return Ae.isBuffer(r) || r instanceof nn; }
    var nr = er(), un = rr(), fn = un.getHighWaterMark, j = Y().codes, ln = j.ERR_INVALID_ARG_TYPE, sn = j.ERR_METHOD_NOT_IMPLEMENTED, hn = j.ERR_MULTIPLE_CALLBACK, cn = j.ERR_STREAM_CANNOT_PIPE, dn = j.ERR_STREAM_DESTROYED, pn = j.ERR_STREAM_NULL_VALUES, yn = j.ERR_STREAM_WRITE_AFTER_END, wn = j.ERR_UNKNOWN_ENCODING, oe = nr.errorOrDestroy;
    G()(m, gt);
    function gn() { }
    function he(r, e, t) { ae = ae || X(), r = r || {}, typeof t != "boolean" && (t = e instanceof ae), this.objectMode = !!r.objectMode, t && (this.objectMode = this.objectMode || !!r.writableObjectMode), this.highWaterMark = fn(this, r, "writableHighWaterMark", t), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1; var i = r.decodeStrings === !1; this.decodeStrings = !i, this.defaultEncoding = r.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (n) { Rn(e, n); }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = r.emitClose !== !1, this.autoDestroy = !!r.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new wt(this); }
    he.prototype.getBuffer = function () { for (var e = this.bufferedRequest, t = []; e;)
        t.push(e), e = e.next; return t; };
    (function () { try {
        Object.defineProperty(he.prototype, "buffer", { get: tn.deprecate(function () { return this.getBuffer(); }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
    }
    catch { } })();
    var Te;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (Te = Function.prototype[Symbol.hasInstance], Object.defineProperty(m, Symbol.hasInstance, { value: function (e) { return Te.call(this, e) ? !0 : this !== m ? !1 : e && e._writableState instanceof he; } })) : Te = function (e) { return e instanceof this; };
    function m(r) { ae = ae || X(); var e = this instanceof ae; if (!e && !Te.call(m, this))
        return new m(r); this._writableState = new he(r, this, e), this.writable = !0, r && (typeof r.write == "function" && (this._write = r.write), typeof r.writev == "function" && (this._writev = r.writev), typeof r.destroy == "function" && (this._destroy = r.destroy), typeof r.final == "function" && (this._final = r.final)), gt.call(this); }
    m.prototype.pipe = function () { oe(this, new cn); };
    function bn(r, e) { var t = new yn; oe(r, t), process.nextTick(e, t); }
    function mn(r, e, t, i) { var n; return t === null ? n = new pn : typeof t != "string" && !e.objectMode && (n = new ln("chunk", ["string", "Buffer"], t)), n ? (oe(r, n), process.nextTick(i, n), !1) : !0; }
    m.prototype.write = function (r, e, t) { var i = this._writableState, n = !1, a = !i.objectMode && on(r); return a && !Ae.isBuffer(r) && (r = an(r)), typeof e == "function" && (t = e, e = null), a ? e = "buffer" : e || (e = i.defaultEncoding), typeof t != "function" && (t = gn), i.ending ? bn(this, t) : (a || mn(this, i, r, t)) && (i.pendingcb++, n = _n(this, i, a, r, e, t)), n; };
    m.prototype.cork = function () { this._writableState.corked++; };
    m.prototype.uncork = function () { var r = this._writableState; r.corked && (r.corked--, !r.writing && !r.corked && !r.bufferProcessing && r.bufferedRequest && bt(this, r)); };
    m.prototype.setDefaultEncoding = function (e) { if (typeof e == "string" && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
        throw new wn(e); return this._writableState.defaultEncoding = e, this; };
    Object.defineProperty(m.prototype, "writableBuffer", { enumerable: !1, get: function () { return this._writableState && this._writableState.getBuffer(); } });
    function En(r, e, t) { return !r.objectMode && r.decodeStrings !== !1 && typeof e == "string" && (e = Ae.from(e, t)), e; }
    Object.defineProperty(m.prototype, "writableHighWaterMark", { enumerable: !1, get: function () { return this._writableState.highWaterMark; } });
    function _n(r, e, t, i, n, a) { if (!t) {
        var o = En(e, i, n);
        i !== o && (t = !0, n = "buffer", i = o);
    } var u = e.objectMode ? 1 : i.length; e.length += u; var l = e.length < e.highWaterMark; if (l || (e.needDrain = !0), e.writing || e.corked) {
        var h = e.lastBufferedRequest;
        e.lastBufferedRequest = { chunk: i, encoding: n, isBuf: t, callback: a, next: null }, h ? h.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
    }
    else
        ir(r, e, !1, u, i, n, a); return l; }
    function ir(r, e, t, i, n, a, o) { e.writelen = i, e.writecb = o, e.writing = !0, e.sync = !0, e.destroyed ? e.onwrite(new dn("write")) : t ? r._writev(n, e.onwrite) : r._write(n, a, e.onwrite), e.sync = !1; }
    function vn(r, e, t, i, n) { --e.pendingcb, t ? (process.nextTick(n, i), process.nextTick(se, r, e), r._writableState.errorEmitted = !0, oe(r, i)) : (n(i), r._writableState.errorEmitted = !0, oe(r, i), se(r, e)); }
    function Sn(r) { r.writing = !1, r.writecb = null, r.length -= r.writelen, r.writelen = 0; }
    function Rn(r, e) { var t = r._writableState, i = t.sync, n = t.writecb; if (typeof n != "function")
        throw new hn; if (Sn(t), e)
        vn(r, t, i, e, n);
    else {
        var a = mt(t) || r.destroyed;
        !a && !t.corked && !t.bufferProcessing && t.bufferedRequest && bt(r, t), i ? process.nextTick(yt, r, t, a, n) : yt(r, t, a, n);
    } }
    function yt(r, e, t, i) { t || xn(r, e), e.pendingcb--, i(), se(r, e); }
    function xn(r, e) { e.length === 0 && e.needDrain && (e.needDrain = !1, r.emit("drain")); }
    function bt(r, e) { e.bufferProcessing = !0; var t = e.bufferedRequest; if (r._writev && t && t.next) {
        var i = e.bufferedRequestCount, n = new Array(i), a = e.corkedRequestsFree;
        a.entry = t;
        for (var o = 0, u = !0; t;)
            n[o] = t, t.isBuf || (u = !1), t = t.next, o += 1;
        n.allBuffers = u, ir(r, e, !0, e.length, n, "", a.finish), e.pendingcb++, e.lastBufferedRequest = null, a.next ? (e.corkedRequestsFree = a.next, a.next = null) : e.corkedRequestsFree = new wt(e), e.bufferedRequestCount = 0;
    }
    else {
        for (; t;) {
            var l = t.chunk, h = t.encoding, s = t.callback, c = e.objectMode ? 1 : l.length;
            if (ir(r, e, !1, c, l, h, s), t = t.next, e.bufferedRequestCount--, e.writing)
                break;
        }
        t === null && (e.lastBufferedRequest = null);
    } e.bufferedRequest = t, e.bufferProcessing = !1; }
    m.prototype._write = function (r, e, t) { t(new sn("_write()")); };
    m.prototype._writev = null;
    m.prototype.end = function (r, e, t) { var i = this._writableState; return typeof r == "function" ? (t = r, r = null, e = null) : typeof e == "function" && (t = e, e = null), r != null && this.write(r, e), i.corked && (i.corked = 1, this.uncork()), i.ending || Cn(this, i, t), this; };
    Object.defineProperty(m.prototype, "writableLength", { enumerable: !1, get: function () { return this._writableState.length; } });
    function mt(r) { return r.ending && r.length === 0 && r.bufferedRequest === null && !r.finished && !r.writing; }
    function Tn(r, e) { r._final(function (t) { e.pendingcb--, t && oe(r, t), e.prefinished = !0, r.emit("prefinish"), se(r, e); }); }
    function An(r, e) { !e.prefinished && !e.finalCalled && (typeof r._final == "function" && !e.destroyed ? (e.pendingcb++, e.finalCalled = !0, process.nextTick(Tn, r, e)) : (e.prefinished = !0, r.emit("prefinish"))); }
    function se(r, e) { var t = mt(e); if (t && (An(r, e), e.pendingcb === 0 && (e.finished = !0, r.emit("finish"), e.autoDestroy))) {
        var i = r._readableState;
        (!i || i.autoDestroy && i.endEmitted) && r.destroy();
    } return t; }
    function Cn(r, e, t) { e.ending = !0, se(r, e), t && (e.finished ? process.nextTick(t) : r.once("finish", t)), e.ended = !0, r.writable = !1; }
    function Mn(r, e, t) { var i = r.entry; for (r.entry = null; i;) {
        var n = i.callback;
        e.pendingcb--, n(t), i = i.next;
    } e.corkedRequestsFree.next = r; }
    Object.defineProperty(m.prototype, "destroyed", { enumerable: !1, get: function () { return this._writableState === void 0 ? !1 : this._writableState.destroyed; }, set: function (e) { this._writableState && (this._writableState.destroyed = e); } });
    m.prototype.destroy = nr.destroy;
    m.prototype._undestroy = nr.undestroy;
    m.prototype._destroy = function (r, e) { e(r); };
});
var X = b((bo, vt) => {
    "use strict";
    var Bn = Object.keys || function (r) { var e = []; for (var t in r)
        e.push(t); return e; };
    vt.exports = B;
    var _t = fr(), ur = ar();
    G()(B, _t);
    for (or = Bn(ur.prototype), Ce = 0; Ce < or.length; Ce++)
        Me = or[Ce], B.prototype[Me] || (B.prototype[Me] = ur.prototype[Me]);
    var or, Me, Ce;
    function B(r) { if (!(this instanceof B))
        return new B(r); _t.call(this, r), ur.call(this, r), this.allowHalfOpen = !0, r && (r.readable === !1 && (this.readable = !1), r.writable === !1 && (this.writable = !1), r.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", Fn))); }
    Object.defineProperty(B.prototype, "writableHighWaterMark", { enumerable: !1, get: function () { return this._writableState.highWaterMark; } });
    Object.defineProperty(B.prototype, "writableBuffer", { enumerable: !1, get: function () { return this._writableState && this._writableState.getBuffer(); } });
    Object.defineProperty(B.prototype, "writableLength", { enumerable: !1, get: function () { return this._writableState.length; } });
    function Fn() { this._writableState.ended || process.nextTick(In, this); }
    function In(r) { r.end(); }
    Object.defineProperty(B.prototype, "destroyed", { enumerable: !1, get: function () { return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed; }, set: function (e) { this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = e, this._writableState.destroyed = e); } });
});
var xt = b((lr, Rt) => { var Be = M(), F = Be.Buffer; function St(r, e) { for (var t in r)
    e[t] = r[t]; } F.from && F.alloc && F.allocUnsafe && F.allocUnsafeSlow ? Rt.exports = Be : (St(Be, lr), lr.Buffer = Z); function Z(r, e, t) { return F(r, e, t); } Z.prototype = Object.create(F.prototype); St(F, Z); Z.from = function (r, e, t) { if (typeof r == "number")
    throw new TypeError("Argument must not be a number"); return F(r, e, t); }; Z.alloc = function (r, e, t) { if (typeof r != "number")
    throw new TypeError("Argument must be a number"); var i = F(r); return e !== void 0 ? typeof t == "string" ? i.fill(e, t) : i.fill(e) : i.fill(0), i; }; Z.allocUnsafe = function (r) { if (typeof r != "number")
    throw new TypeError("Argument must be a number"); return F(r); }; Z.allocUnsafeSlow = function (r) { if (typeof r != "number")
    throw new TypeError("Argument must be a number"); return Be.SlowBuffer(r); }; });
var cr = b(At => {
    "use strict";
    var hr = xt().Buffer, Tt = hr.isEncoding || function (r) { switch (r = "" + r, r && r.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw": return !0;
        default: return !1;
    } };
    function Ln(r) { if (!r)
        return "utf8"; for (var e;;)
        switch (r) {
            case "utf8":
            case "utf-8": return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le": return "utf16le";
            case "latin1":
            case "binary": return "latin1";
            case "base64":
            case "ascii":
            case "hex": return r;
            default:
                if (e)
                    return;
                r = ("" + r).toLowerCase(), e = !0;
        } }
    function Un(r) { var e = Ln(r); if (typeof e != "string" && (hr.isEncoding === Tt || !Tt(r)))
        throw new Error("Unknown encoding: " + r); return e || r; }
    At.StringDecoder = ce;
    function ce(r) { this.encoding = Un(r); var e; switch (this.encoding) {
        case "utf16le":
            this.text = qn, this.end = jn, e = 4;
            break;
        case "utf8":
            this.fillLast = kn, e = 4;
            break;
        case "base64":
            this.text = Wn, this.end = Hn, e = 3;
            break;
        default:
            this.write = $n, this.end = zn;
            return;
    } this.lastNeed = 0, this.lastTotal = 0, this.lastChar = hr.allocUnsafe(e); }
    ce.prototype.write = function (r) { if (r.length === 0)
        return ""; var e, t; if (this.lastNeed) {
        if (e = this.fillLast(r), e === void 0)
            return "";
        t = this.lastNeed, this.lastNeed = 0;
    }
    else
        t = 0; return t < r.length ? e ? e + this.text(r, t) : this.text(r, t) : e || ""; };
    ce.prototype.end = On;
    ce.prototype.text = Dn;
    ce.prototype.fillLast = function (r) { if (this.lastNeed <= r.length)
        return r.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal); r.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, r.length), this.lastNeed -= r.length; };
    function sr(r) { return r <= 127 ? 0 : r >> 5 === 6 ? 2 : r >> 4 === 14 ? 3 : r >> 3 === 30 ? 4 : r >> 6 === 2 ? -1 : -2; }
    function Pn(r, e, t) { var i = e.length - 1; if (i < t)
        return 0; var n = sr(e[i]); return n >= 0 ? (n > 0 && (r.lastNeed = n - 1), n) : --i < t || n === -2 ? 0 : (n = sr(e[i]), n >= 0 ? (n > 0 && (r.lastNeed = n - 2), n) : --i < t || n === -2 ? 0 : (n = sr(e[i]), n >= 0 ? (n > 0 && (n === 2 ? n = 0 : r.lastNeed = n - 3), n) : 0)); }
    function Nn(r, e, t) { if ((e[0] & 192) !== 128)
        return r.lastNeed = 0, "\uFFFD"; if (r.lastNeed > 1 && e.length > 1) {
        if ((e[1] & 192) !== 128)
            return r.lastNeed = 1, "\uFFFD";
        if (r.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128)
            return r.lastNeed = 2, "\uFFFD";
    } }
    function kn(r) { var e = this.lastTotal - this.lastNeed, t = Nn(this, r, e); if (t !== void 0)
        return t; if (this.lastNeed <= r.length)
        return r.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal); r.copy(this.lastChar, e, 0, r.length), this.lastNeed -= r.length; }
    function Dn(r, e) { var t = Pn(this, r, e); if (!this.lastNeed)
        return r.toString("utf8", e); this.lastTotal = t; var i = r.length - (t - this.lastNeed); return r.copy(this.lastChar, 0, i), r.toString("utf8", e, i); }
    function On(r) { var e = r && r.length ? this.write(r) : ""; return this.lastNeed ? e + "\uFFFD" : e; }
    function qn(r, e) { if ((r.length - e) % 2 === 0) {
        var t = r.toString("utf16le", e);
        if (t) {
            var i = t.charCodeAt(t.length - 1);
            if (i >= 55296 && i <= 56319)
                return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = r[r.length - 2], this.lastChar[1] = r[r.length - 1], t.slice(0, -1);
        }
        return t;
    } return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = r[r.length - 1], r.toString("utf16le", e, r.length - 1); }
    function jn(r) { var e = r && r.length ? this.write(r) : ""; if (this.lastNeed) {
        var t = this.lastTotal - this.lastNeed;
        return e + this.lastChar.toString("utf16le", 0, t);
    } return e; }
    function Wn(r, e) { var t = (r.length - e) % 3; return t === 0 ? r.toString("base64", e) : (this.lastNeed = 3 - t, this.lastTotal = 3, t === 1 ? this.lastChar[0] = r[r.length - 1] : (this.lastChar[0] = r[r.length - 2], this.lastChar[1] = r[r.length - 1]), r.toString("base64", e, r.length - t)); }
    function Hn(r) { var e = r && r.length ? this.write(r) : ""; return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e; }
    function $n(r) { return r.toString(this.encoding); }
    function zn(r) { return r && r.length ? this.write(r) : ""; }
});
var Fe = b((Eo, Bt) => {
    "use strict";
    var Ct = Y().codes.ERR_STREAM_PREMATURE_CLOSE;
    function Kn(r) { var e = !1; return function () { if (!e) {
        e = !0;
        for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
            i[n] = arguments[n];
        r.apply(this, i);
    } }; }
    function Vn() { }
    function Gn(r) { return r.setHeader && typeof r.abort == "function"; }
    function Mt(r, e, t) { if (typeof e == "function")
        return Mt(r, null, e); e || (e = {}), t = Kn(t || Vn); var i = e.readable || e.readable !== !1 && r.readable, n = e.writable || e.writable !== !1 && r.writable, a = function () { r.writable || u(); }, o = r._writableState && r._writableState.finished, u = function () { n = !1, o = !0, i || t.call(r); }, l = r._readableState && r._readableState.endEmitted, h = function () { i = !1, l = !0, n || t.call(r); }, s = function (g) { t.call(r, g); }, c = function () { var g; if (i && !l)
        return (!r._readableState || !r._readableState.ended) && (g = new Ct), t.call(r, g); if (n && !o)
        return (!r._writableState || !r._writableState.ended) && (g = new Ct), t.call(r, g); }, w = function () { r.req.on("finish", u); }; return Gn(r) ? (r.on("complete", u), r.on("abort", c), r.req ? w() : r.on("request", w)) : n && !r._writableState && (r.on("end", a), r.on("close", a)), r.on("end", h), r.on("finish", u), e.error !== !1 && r.on("error", s), r.on("close", c), function () { r.removeListener("complete", u), r.removeListener("abort", c), r.removeListener("request", w), r.req && r.req.removeListener("finish", u), r.removeListener("end", a), r.removeListener("close", a), r.removeListener("finish", u), r.removeListener("end", h), r.removeListener("error", s), r.removeListener("close", c); }; }
    Bt.exports = Mt;
});
var It = b((_o, Ft) => {
    "use strict";
    var Ie;
    function W(r, e, t) { return e = Yn(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r; }
    function Yn(r) { var e = Xn(r, "string"); return typeof e == "symbol" ? e : String(e); }
    function Xn(r, e) { if (typeof r != "object" || r === null)
        return r; var t = r[Symbol.toPrimitive]; if (t !== void 0) {
        var i = t.call(r, e || "default");
        if (typeof i != "object")
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    } return (e === "string" ? String : Number)(r); }
    var Zn = Fe(), H = Symbol("lastResolve"), J = Symbol("lastReject"), de = Symbol("error"), Le = Symbol("ended"), Q = Symbol("lastPromise"), dr = Symbol("handlePromise"), ee = Symbol("stream");
    function $(r, e) { return { value: r, done: e }; }
    function Jn(r) { var e = r[H]; if (e !== null) {
        var t = r[ee].read();
        t !== null && (r[Q] = null, r[H] = null, r[J] = null, e($(t, !1)));
    } }
    function Qn(r) { process.nextTick(Jn, r); }
    function ea(r, e) { return function (t, i) { r.then(function () { if (e[Le]) {
        t($(void 0, !0));
        return;
    } e[dr](t, i); }, i); }; }
    var ra = Object.getPrototypeOf(function () { }), ta = Object.setPrototypeOf((Ie = { get stream() { return this[ee]; }, next: function () { var e = this, t = this[de]; if (t !== null)
            return Promise.reject(t); if (this[Le])
            return Promise.resolve($(void 0, !0)); if (this[ee].destroyed)
            return new Promise(function (o, u) { process.nextTick(function () { e[de] ? u(e[de]) : o($(void 0, !0)); }); }); var i = this[Q], n; if (i)
            n = new Promise(ea(i, this));
        else {
            var a = this[ee].read();
            if (a !== null)
                return Promise.resolve($(a, !1));
            n = new Promise(this[dr]);
        } return this[Q] = n, n; } }, W(Ie, Symbol.asyncIterator, function () { return this; }), W(Ie, "return", function () { var e = this; return new Promise(function (t, i) { e[ee].destroy(null, function (n) { if (n) {
        i(n);
        return;
    } t($(void 0, !0)); }); }); }), Ie), ra), ia = function (e) { var t, i = Object.create(ta, (t = {}, W(t, ee, { value: e, writable: !0 }), W(t, H, { value: null, writable: !0 }), W(t, J, { value: null, writable: !0 }), W(t, de, { value: null, writable: !0 }), W(t, Le, { value: e._readableState.endEmitted, writable: !0 }), W(t, dr, { value: function (a, o) { var u = i[ee].read(); u ? (i[Q] = null, i[H] = null, i[J] = null, a($(u, !1))) : (i[H] = a, i[J] = o); }, writable: !0 }), t)); return i[Q] = null, Zn(e, function (n) { if (n && n.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var a = i[J];
        a !== null && (i[Q] = null, i[H] = null, i[J] = null, a(n)), i[de] = n;
        return;
    } var o = i[H]; o !== null && (i[Q] = null, i[H] = null, i[J] = null, o($(void 0, !0))), i[Le] = !0; }), e.on("readable", Qn.bind(null, i)), i; };
    Ft.exports = ia;
});
var Ut = b((vo, Lt) => { Lt.exports = function () { throw new Error("Readable.from is not available in the browser"); }; });
var fr = b((Ro, $t) => {
    "use strict";
    $t.exports = y;
    var ue;
    y.ReadableState = Dt;
    var So = be().EventEmitter, kt = function (e, t) { return e.listeners(t).length; }, ye = Xe(), Ue = M().Buffer, na = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function () { };
    function aa(r) { return Ue.from(r); }
    function oa(r) { return Ue.isBuffer(r) || r instanceof na; }
    var pr = Ze(), d;
    pr && pr.debuglog ? d = pr.debuglog("stream") : d = function () { };
    var ua = ot(), _r = er(), fa = rr(), la = fa.getHighWaterMark, Pe = Y().codes, sa = Pe.ERR_INVALID_ARG_TYPE, ha = Pe.ERR_STREAM_PUSH_AFTER_EOF, ca = Pe.ERR_METHOD_NOT_IMPLEMENTED, da = Pe.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, fe, yr, wr;
    G()(y, ye);
    var pe = _r.errorOrDestroy, gr = ["error", "close", "destroy", "pause", "resume"];
    function pa(r, e, t) { if (typeof r.prependListener == "function")
        return r.prependListener(e, t); !r._events || !r._events[e] ? r.on(e, t) : Array.isArray(r._events[e]) ? r._events[e].unshift(t) : r._events[e] = [t, r._events[e]]; }
    function Dt(r, e, t) { ue = ue || X(), r = r || {}, typeof t != "boolean" && (t = e instanceof ue), this.objectMode = !!r.objectMode, t && (this.objectMode = this.objectMode || !!r.readableObjectMode), this.highWaterMark = la(this, r, "readableHighWaterMark", t), this.buffer = new ua, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = r.emitClose !== !1, this.autoDestroy = !!r.autoDestroy, this.destroyed = !1, this.defaultEncoding = r.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, r.encoding && (fe || (fe = cr().StringDecoder), this.decoder = new fe(r.encoding), this.encoding = r.encoding); }
    function y(r) { if (ue = ue || X(), !(this instanceof y))
        return new y(r); var e = this instanceof ue; this._readableState = new Dt(r, this, e), this.readable = !0, r && (typeof r.read == "function" && (this._read = r.read), typeof r.destroy == "function" && (this._destroy = r.destroy)), ye.call(this); }
    Object.defineProperty(y.prototype, "destroyed", { enumerable: !1, get: function () { return this._readableState === void 0 ? !1 : this._readableState.destroyed; }, set: function (e) { this._readableState && (this._readableState.destroyed = e); } });
    y.prototype.destroy = _r.destroy;
    y.prototype._undestroy = _r.undestroy;
    y.prototype._destroy = function (r, e) { e(r); };
    y.prototype.push = function (r, e) { var t = this._readableState, i; return t.objectMode ? i = !0 : typeof r == "string" && (e = e || t.defaultEncoding, e !== t.encoding && (r = Ue.from(r, e), e = ""), i = !0), Ot(this, r, e, !1, i); };
    y.prototype.unshift = function (r) { return Ot(this, r, null, !0, !1); };
    function Ot(r, e, t, i, n) { d("readableAddChunk", e); var a = r._readableState; if (e === null)
        a.reading = !1, ga(r, a);
    else {
        var o;
        if (n || (o = ya(a, e)), o)
            pe(r, o);
        else if (a.objectMode || e && e.length > 0)
            if (typeof e != "string" && !a.objectMode && Object.getPrototypeOf(e) !== Ue.prototype && (e = aa(e)), i)
                a.endEmitted ? pe(r, new da) : br(r, a, e, !0);
            else if (a.ended)
                pe(r, new ha);
            else {
                if (a.destroyed)
                    return !1;
                a.reading = !1, a.decoder && !t ? (e = a.decoder.write(e), a.objectMode || e.length !== 0 ? br(r, a, e, !1) : Er(r, a)) : br(r, a, e, !1);
            }
        else
            i || (a.reading = !1, Er(r, a));
    } return !a.ended && (a.length < a.highWaterMark || a.length === 0); }
    function br(r, e, t, i) { e.flowing && e.length === 0 && !e.sync ? (e.awaitDrain = 0, r.emit("data", t)) : (e.length += e.objectMode ? 1 : t.length, i ? e.buffer.unshift(t) : e.buffer.push(t), e.needReadable && Ne(r)), Er(r, e); }
    function ya(r, e) { var t; return !oa(e) && typeof e != "string" && e !== void 0 && !r.objectMode && (t = new sa("chunk", ["string", "Buffer", "Uint8Array"], e)), t; }
    y.prototype.isPaused = function () { return this._readableState.flowing === !1; };
    y.prototype.setEncoding = function (r) { fe || (fe = cr().StringDecoder); var e = new fe(r); this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding; for (var t = this._readableState.buffer.head, i = ""; t !== null;)
        i += e.write(t.data), t = t.next; return this._readableState.buffer.clear(), i !== "" && this._readableState.buffer.push(i), this._readableState.length = i.length, this; };
    var Pt = 1073741824;
    function wa(r) { return r >= Pt ? r = Pt : (r--, r |= r >>> 1, r |= r >>> 2, r |= r >>> 4, r |= r >>> 8, r |= r >>> 16, r++), r; }
    function Nt(r, e) { return r <= 0 || e.length === 0 && e.ended ? 0 : e.objectMode ? 1 : r !== r ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (r > e.highWaterMark && (e.highWaterMark = wa(r)), r <= e.length ? r : e.ended ? e.length : (e.needReadable = !0, 0)); }
    y.prototype.read = function (r) { d("read", r), r = parseInt(r, 10); var e = this._readableState, t = r; if (r !== 0 && (e.emittedReadable = !1), r === 0 && e.needReadable && ((e.highWaterMark !== 0 ? e.length >= e.highWaterMark : e.length > 0) || e.ended))
        return d("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? mr(this) : Ne(this), null; if (r = Nt(r, e), r === 0 && e.ended)
        return e.length === 0 && mr(this), null; var i = e.needReadable; d("need readable", i), (e.length === 0 || e.length - r < e.highWaterMark) && (i = !0, d("length less than watermark", i)), e.ended || e.reading ? (i = !1, d("reading or ended", i)) : i && (d("do read"), e.reading = !0, e.sync = !0, e.length === 0 && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (r = Nt(t, e))); var n; return r > 0 ? n = Wt(r, e) : n = null, n === null ? (e.needReadable = e.length <= e.highWaterMark, r = 0) : (e.length -= r, e.awaitDrain = 0), e.length === 0 && (e.ended || (e.needReadable = !0), t !== r && e.ended && mr(this)), n !== null && this.emit("data", n), n; };
    function ga(r, e) { if (d("onEofChunk"), !e.ended) {
        if (e.decoder) {
            var t = e.decoder.end();
            t && t.length && (e.buffer.push(t), e.length += e.objectMode ? 1 : t.length);
        }
        e.ended = !0, e.sync ? Ne(r) : (e.needReadable = !1, e.emittedReadable || (e.emittedReadable = !0, qt(r)));
    } }
    function Ne(r) { var e = r._readableState; d("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = !1, e.emittedReadable || (d("emitReadable", e.flowing), e.emittedReadable = !0, process.nextTick(qt, r)); }
    function qt(r) { var e = r._readableState; d("emitReadable_", e.destroyed, e.length, e.ended), !e.destroyed && (e.length || e.ended) && (r.emit("readable"), e.emittedReadable = !1), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, vr(r); }
    function Er(r, e) { e.readingMore || (e.readingMore = !0, process.nextTick(ba, r, e)); }
    function ba(r, e) { for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && e.length === 0);) {
        var t = e.length;
        if (d("maybeReadMore read 0"), r.read(0), t === e.length)
            break;
    } e.readingMore = !1; }
    y.prototype._read = function (r) { pe(this, new ca("_read()")); };
    y.prototype.pipe = function (r, e) { var t = this, i = this._readableState; switch (i.pipesCount) {
        case 0:
            i.pipes = r;
            break;
        case 1:
            i.pipes = [i.pipes, r];
            break;
        default:
            i.pipes.push(r);
            break;
    } i.pipesCount += 1, d("pipe count=%d opts=%j", i.pipesCount, e); var n = (!e || e.end !== !1) && r !== process.stdout && r !== process.stderr, a = n ? u : _; i.endEmitted ? process.nextTick(a) : t.once("end", a), r.on("unpipe", o); function o(I, A) { d("onunpipe"), I === t && A && A.hasUnpiped === !1 && (A.hasUnpiped = !0, s()); } function u() { d("onend"), r.end(); } var l = ma(t); r.on("drain", l); var h = !1; function s() { d("cleanup"), r.removeListener("close", p), r.removeListener("finish", g), r.removeListener("drain", l), r.removeListener("error", w), r.removeListener("unpipe", o), t.removeListener("end", u), t.removeListener("end", _), t.removeListener("data", c), h = !0, i.awaitDrain && (!r._writableState || r._writableState.needDrain) && l(); } t.on("data", c); function c(I) { d("ondata"); var A = r.write(I); d("dest.write", A), A === !1 && ((i.pipesCount === 1 && i.pipes === r || i.pipesCount > 1 && Ht(i.pipes, r) !== -1) && !h && (d("false write response, pause", i.awaitDrain), i.awaitDrain++), t.pause()); } function w(I) { d("onerror", I), _(), r.removeListener("error", w), kt(r, "error") === 0 && pe(r, I); } pa(r, "error", w); function p() { r.removeListener("finish", g), _(); } r.once("close", p); function g() { d("onfinish"), r.removeListener("close", p), _(); } r.once("finish", g); function _() { d("unpipe"), t.unpipe(r); } return r.emit("pipe", t), i.flowing || (d("pipe resume"), t.resume()), r; };
    function ma(r) { return function () { var t = r._readableState; d("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, t.awaitDrain === 0 && kt(r, "data") && (t.flowing = !0, vr(r)); }; }
    y.prototype.unpipe = function (r) { var e = this._readableState, t = { hasUnpiped: !1 }; if (e.pipesCount === 0)
        return this; if (e.pipesCount === 1)
        return r && r !== e.pipes ? this : (r || (r = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, r && r.emit("unpipe", this, t), this); if (!r) {
        var i = e.pipes, n = e.pipesCount;
        e.pipes = null, e.pipesCount = 0, e.flowing = !1;
        for (var a = 0; a < n; a++)
            i[a].emit("unpipe", this, { hasUnpiped: !1 });
        return this;
    } var o = Ht(e.pipes, r); return o === -1 ? this : (e.pipes.splice(o, 1), e.pipesCount -= 1, e.pipesCount === 1 && (e.pipes = e.pipes[0]), r.emit("unpipe", this, t), this); };
    y.prototype.on = function (r, e) { var t = ye.prototype.on.call(this, r, e), i = this._readableState; return r === "data" ? (i.readableListening = this.listenerCount("readable") > 0, i.flowing !== !1 && this.resume()) : r === "readable" && !i.endEmitted && !i.readableListening && (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, d("on readable", i.length, i.reading), i.length ? Ne(this) : i.reading || process.nextTick(Ea, this)), t; };
    y.prototype.addListener = y.prototype.on;
    y.prototype.removeListener = function (r, e) { var t = ye.prototype.removeListener.call(this, r, e); return r === "readable" && process.nextTick(jt, this), t; };
    y.prototype.removeAllListeners = function (r) { var e = ye.prototype.removeAllListeners.apply(this, arguments); return (r === "readable" || r === void 0) && process.nextTick(jt, this), e; };
    function jt(r) { var e = r._readableState; e.readableListening = r.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = !0 : r.listenerCount("data") > 0 && r.resume(); }
    function Ea(r) { d("readable nexttick read 0"), r.read(0); }
    y.prototype.resume = function () { var r = this._readableState; return r.flowing || (d("resume"), r.flowing = !r.readableListening, _a(this, r)), r.paused = !1, this; };
    function _a(r, e) { e.resumeScheduled || (e.resumeScheduled = !0, process.nextTick(va, r, e)); }
    function va(r, e) { d("resume", e.reading), e.reading || r.read(0), e.resumeScheduled = !1, r.emit("resume"), vr(r), e.flowing && !e.reading && r.read(0); }
    y.prototype.pause = function () { return d("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (d("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this; };
    function vr(r) { var e = r._readableState; for (d("flow", e.flowing); e.flowing && r.read() !== null;)
        ; }
    y.prototype.wrap = function (r) { var e = this, t = this._readableState, i = !1; r.on("end", function () { if (d("wrapped end"), t.decoder && !t.ended) {
        var o = t.decoder.end();
        o && o.length && e.push(o);
    } e.push(null); }), r.on("data", function (o) { if (d("wrapped data"), t.decoder && (o = t.decoder.write(o)), !(t.objectMode && o == null) && !(!t.objectMode && (!o || !o.length))) {
        var u = e.push(o);
        u || (i = !0, r.pause());
    } }); for (var n in r)
        this[n] === void 0 && typeof r[n] == "function" && (this[n] = (function (u) { return function () { return r[u].apply(r, arguments); }; })(n)); for (var a = 0; a < gr.length; a++)
        r.on(gr[a], this.emit.bind(this, gr[a])); return this._read = function (o) { d("wrapped _read", o), i && (i = !1, r.resume()); }, this; };
    typeof Symbol == "function" && (y.prototype[Symbol.asyncIterator] = function () { return yr === void 0 && (yr = It()), yr(this); });
    Object.defineProperty(y.prototype, "readableHighWaterMark", { enumerable: !1, get: function () { return this._readableState.highWaterMark; } });
    Object.defineProperty(y.prototype, "readableBuffer", { enumerable: !1, get: function () { return this._readableState && this._readableState.buffer; } });
    Object.defineProperty(y.prototype, "readableFlowing", { enumerable: !1, get: function () { return this._readableState.flowing; }, set: function (e) { this._readableState && (this._readableState.flowing = e); } });
    y._fromList = Wt;
    Object.defineProperty(y.prototype, "readableLength", { enumerable: !1, get: function () { return this._readableState.length; } });
    function Wt(r, e) { if (e.length === 0)
        return null; var t; return e.objectMode ? t = e.buffer.shift() : !r || r >= e.length ? (e.decoder ? t = e.buffer.join("") : e.buffer.length === 1 ? t = e.buffer.first() : t = e.buffer.concat(e.length), e.buffer.clear()) : t = e.buffer.consume(r, e.decoder), t; }
    function mr(r) { var e = r._readableState; d("endReadable", e.endEmitted), e.endEmitted || (e.ended = !0, process.nextTick(Sa, e, r)); }
    function Sa(r, e) { if (d("endReadableNT", r.endEmitted, r.length), !r.endEmitted && r.length === 0 && (r.endEmitted = !0, e.readable = !1, e.emit("end"), r.autoDestroy)) {
        var t = e._writableState;
        (!t || t.autoDestroy && t.finished) && e.destroy();
    } }
    typeof Symbol == "function" && (y.from = function (r, e) { return wr === void 0 && (wr = Ut()), wr(y, r, e); });
    function Ht(r, e) { for (var t = 0, i = r.length; t < i; t++)
        if (r[t] === e)
            return t; return -1; }
});
var Sr = b((xo, Kt) => {
    "use strict";
    Kt.exports = D;
    var ke = Y().codes, Ra = ke.ERR_METHOD_NOT_IMPLEMENTED, xa = ke.ERR_MULTIPLE_CALLBACK, Ta = ke.ERR_TRANSFORM_ALREADY_TRANSFORMING, Aa = ke.ERR_TRANSFORM_WITH_LENGTH_0, De = X();
    G()(D, De);
    function Ca(r, e) { var t = this._transformState; t.transforming = !1; var i = t.writecb; if (i === null)
        return this.emit("error", new xa); t.writechunk = null, t.writecb = null, e != null && this.push(e), i(r); var n = this._readableState; n.reading = !1, (n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark); }
    function D(r) { if (!(this instanceof D))
        return new D(r); De.call(this, r), this._transformState = { afterTransform: Ca.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = !0, this._readableState.sync = !1, r && (typeof r.transform == "function" && (this._transform = r.transform), typeof r.flush == "function" && (this._flush = r.flush)), this.on("prefinish", Ma); }
    function Ma() { var r = this; typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function (e, t) { zt(r, e, t); }) : zt(this, null, null); }
    D.prototype.push = function (r, e) { return this._transformState.needTransform = !1, De.prototype.push.call(this, r, e); };
    D.prototype._transform = function (r, e, t) { t(new Ra("_transform()")); };
    D.prototype._write = function (r, e, t) { var i = this._transformState; if (i.writecb = t, i.writechunk = r, i.writeencoding = e, !i.transforming) {
        var n = this._readableState;
        (i.needTransform || n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark);
    } };
    D.prototype._read = function (r) { var e = this._transformState; e.writechunk !== null && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0; };
    D.prototype._destroy = function (r, e) { De.prototype._destroy.call(this, r, function (t) { e(t); }); };
    function zt(r, e, t) { if (e)
        return r.emit("error", e); if (t != null && r.push(t), r._writableState.length)
        throw new Aa; if (r._transformState.transforming)
        throw new Ta; return r.push(null); }
});
var Yt = b((To, Gt) => {
    "use strict";
    Gt.exports = we;
    var Vt = Sr();
    G()(we, Vt);
    function we(r) { if (!(this instanceof we))
        return new we(r); Vt.call(this, r); }
    we.prototype._transform = function (r, e, t) { t(null, r); };
});
var ei = b((Ao, Qt) => {
    "use strict";
    var Rr;
    function Ba(r) { var e = !1; return function () { e || (e = !0, r.apply(void 0, arguments)); }; }
    var Jt = Y().codes, Fa = Jt.ERR_MISSING_ARGS, Ia = Jt.ERR_STREAM_DESTROYED;
    function Xt(r) { if (r)
        throw r; }
    function La(r) { return r.setHeader && typeof r.abort == "function"; }
    function Ua(r, e, t, i) { i = Ba(i); var n = !1; r.on("close", function () { n = !0; }), Rr === void 0 && (Rr = Fe()), Rr(r, { readable: e, writable: t }, function (o) { if (o)
        return i(o); n = !0, i(); }); var a = !1; return function (o) { if (!n && !a) {
        if (a = !0, La(r))
            return r.abort();
        if (typeof r.destroy == "function")
            return r.destroy();
        i(o || new Ia("pipe"));
    } }; }
    function Zt(r) { r(); }
    function Pa(r, e) { return r.pipe(e); }
    function Na(r) { return !r.length || typeof r[r.length - 1] != "function" ? Xt : r.pop(); }
    function ka() { for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
        e[t] = arguments[t]; var i = Na(e); if (Array.isArray(e[0]) && (e = e[0]), e.length < 2)
        throw new Fa("streams"); var n, a = e.map(function (o, u) { var l = u < e.length - 1, h = u > 0; return Ua(o, l, h, function (s) { n || (n = s), s && a.forEach(Zt), !l && (a.forEach(Zt), i(n)); }); }); return e.reduce(Pa); }
    Qt.exports = ka;
});
var ti = b((Co, ri) => { ri.exports = T; var xr = be().EventEmitter, Da = G(); Da(T, xr); T.Readable = fr(); T.Writable = ar(); T.Duplex = X(); T.Transform = Sr(); T.PassThrough = Yt(); T.finished = Fe(); T.pipeline = ei(); T.Stream = T; function T() { xr.call(this); } T.prototype.pipe = function (r, e) { var t = this; function i(s) { r.writable && r.write(s) === !1 && t.pause && t.pause(); } t.on("data", i); function n() { t.readable && t.resume && t.resume(); } r.on("drain", n), !r._isStdio && (!e || e.end !== !1) && (t.on("end", o), t.on("close", u)); var a = !1; function o() { a || (a = !0, r.end()); } function u() { a || (a = !0, typeof r.destroy == "function" && r.destroy()); } function l(s) { if (h(), xr.listenerCount(this, "error") === 0)
    throw s; } t.on("error", l), r.on("error", l); function h() { t.removeListener("data", i), r.removeListener("drain", n), t.removeListener("end", o), t.removeListener("close", u), t.removeListener("error", l), r.removeListener("error", l), t.removeListener("end", h), t.removeListener("close", h), r.removeListener("close", h); } return t.on("end", h), t.on("close", h), r.on("close", h), r.emit("pipe", t), r; }; });
import { AbortMultipartUploadCommand as Oa, ChecksumAlgorithm as qa, CompleteMultipartUploadCommand as ja, CreateMultipartUploadCommand as Wa, PutObjectCommand as ui, PutObjectTaggingCommand as Ha, UploadPartCommand as $a } from "@aws-sdk/client-s3";
var me = class {
    onabort = null;
    _aborted = !1;
    constructor() { Object.defineProperty(this, "_aborted", { value: !1, writable: !0 }); }
    get aborted() { return this._aborted; }
    abort() { this._aborted = !0, this.onabort && (this.onabort(this), this.onabort = null); }
};
var Ee = class {
    signal = new me;
    abort() { this.signal.abort(); }
};
var qe = z(be());
var Jr = z(M());
var Zr = { lstatSync: () => { }, isFileReadStream(r) { return !1; } };
var ne = L(v({}, Zr), { runtime: "browser" });
var le = r => { if (r == null)
    return 0; if (typeof r == "string")
    return Jr.Buffer.byteLength(r); if (typeof r.byteLength == "number")
    return r.byteLength; if (typeof r.length == "number")
    return r.length; if (typeof r.size == "number")
    return r.size; if (typeof r.start == "number" && typeof r.end == "number")
    return r.end + 1 - r.start; if (ne.isFileReadStream(r))
    try {
        return ne.lstatSync(r.path).size;
    }
    catch {
        return;
    } };
var k = (function (r) { return r.EMPTY_INPUT = "a null or undefined Body", r.CONTENT_LENGTH = "the ContentLength property of the params set by the caller", r.STRING_LENGTH = "the encoded byte length of the Body string", r.TYPED_ARRAY = "the byteLength of a typed byte array such as Uint8Array", r.LENGTH = "the value of Body.length", r.SIZE = "the value of Body.size", r.START_END_DIFF = "the numeric difference between Body.start and Body.end", r.LSTAT = "the size of the file given by Body.path on disk as reported by lstatSync", r; })(k || {}), Qr = (r, e) => { if (e != null)
    return k.CONTENT_LENGTH; if (r == null)
    return k.EMPTY_INPUT; if (typeof r == "string")
    return k.STRING_LENGTH; if (typeof r.byteLength == "number")
    return k.TYPED_ARRAY; if (typeof r.length == "number")
    return k.LENGTH; if (typeof r.size == "number")
    return k.SIZE; if (typeof r.start == "number" && typeof r.end == "number")
    return k.START_END_DIFF; if (ne.isFileReadStream(r))
    try {
        return ne.lstatSync(r.path).size, k.LSTAT;
    }
    catch {
        return;
    } };
var ni = z(M()), ai = z(ti());
var Tr = z(M());
function Oe(r, e, t) { return q(this, null, function* () { let i = 1, n = { chunks: [], length: 0 }; try {
    for (var a = re(t(r)), o, u, l; o = !(u = yield new O(a.next())).done; o = !1) {
        let h = u.value;
        for (n.chunks.push(h), n.length += h.byteLength; n.length > e;) {
            let s = n.chunks.length > 1 ? Tr.Buffer.concat(n.chunks) : n.chunks[0];
            yield { partNumber: i, data: s.subarray(0, e) }, n.chunks = [s.subarray(e)], n.length = n.chunks[0].byteLength, i += 1;
        }
    }
}
catch {
    l = [u];
}
finally {
    try {
        o && (u = a.return) && (yield new O(u.call(a)));
    }
    finally {
        if (l)
            throw l[0];
    }
} yield { partNumber: i, data: n.chunks.length !== 1 ? Tr.Buffer.concat(n.chunks) : n.chunks[0], lastPart: !0 }; }); }
function Ar(r, e) { return q(this, null, function* () { let t = 1, i = 0, n = e; for (; n < r.byteLength;)
    yield { partNumber: t, data: r.subarray(i, n) }, t += 1, i = n, n = i + e; yield { partNumber: t, data: r.subarray(i), lastPart: !0 }; }); }
var Cr = z(M());
function ii(r) { return q(this, null, function* () { try {
    for (var e = re(r), t, i, n; t = !(i = yield new O(e.next())).done; t = !1) {
        let a = i.value;
        Cr.Buffer.isBuffer(a) || a instanceof Uint8Array ? yield a : yield Cr.Buffer.from(a);
    }
}
catch {
    n = [i];
}
finally {
    try {
        t && (i = e.return) && (yield new O(i.call(e)));
    }
    finally {
        if (n)
            throw n[0];
    }
} }); }
var Mr = z(M());
function Br(r) { return q(this, null, function* () { let e = r.getReader(); try {
    for (;;) {
        let { done: t, value: i } = yield new O(e.read());
        if (t)
            return;
        Mr.Buffer.isBuffer(i) || i instanceof Uint8Array ? yield i : yield Mr.Buffer.from(i);
    }
}
catch (t) {
    throw t;
}
finally {
    e.releaseLock();
} }); }
var oi = (r, e) => { if (r instanceof Uint8Array)
    return Ar(r, e); if (r instanceof ai.Readable)
    return Oe(r, e, ii); if (r instanceof String || typeof r == "string")
    return Ar(ni.Buffer.from(r), e); if (typeof r.stream == "function")
    return Oe(r.stream(), e, Br); if (r instanceof ReadableStream)
    return Oe(r, e, Br); throw new Error("Body Data is unsupported format, expected data to be one of: string | Uint8Array | Buffer | Readable | ReadableStream | Blob;."); };
var Yo = (() => {
    class r extends qe.EventEmitter {
        static MIN_PART_SIZE = 1024 * 1024 * 5;
        MAX_PARTS = 1e4;
        queueSize = 4;
        partSize;
        leavePartsOnError = !1;
        tags = [];
        client;
        params;
        totalBytes;
        totalBytesSource;
        bytesUploadedSoFar;
        abortController;
        concurrentUploaders = [];
        createMultiPartPromise;
        abortMultipartUploadCommand = null;
        uploadedParts = [];
        uploadEnqueuedPartsCount = 0;
        expectedPartsCount;
        uploadId;
        uploadEvent;
        isMultiPart = !0;
        singleUploadResult;
        sent = !1;
        constructor(t) { if (super(), this.queueSize = t.queueSize || this.queueSize, this.leavePartsOnError = t.leavePartsOnError || this.leavePartsOnError, this.tags = t.tags || this.tags, this.client = t.client, this.params = t.params, !this.params)
            throw new Error("InputError: Upload requires params to be passed to upload."); this.totalBytes = this.params.ContentLength ?? le(this.params.Body), this.totalBytesSource = Qr(this.params.Body, this.params.ContentLength), this.bytesUploadedSoFar = 0, this.abortController = t.abortController ?? new Ee, this.partSize = t.partSize || Math.max(r.MIN_PART_SIZE, Math.floor((this.totalBytes || 0) / this.MAX_PARTS)), this.totalBytes !== void 0 && (this.expectedPartsCount = Math.ceil(this.totalBytes / this.partSize)), this.__validateInput(); }
        abort() { return U(this, null, function* () { this.abortController.abort(); }); }
        done() { return U(this, null, function* () { if (this.sent)
            throw new Error("@aws-sdk/lib-storage: this instance of Upload has already executed .done(). Create a new instance."); return this.sent = !0, yield Promise.race([this.__doMultipartUpload(), this.__abortTimeout(this.abortController.signal)]); }); }
        on(t, i) { return this.uploadEvent = t, super.on(t, i); }
        __uploadUsingPut(t) { return U(this, null, function* () { this.isMultiPart = !1; let i = L(v({}, this.params), { Body: t.data }), n = this.client.config, a = n.requestHandler, o = a instanceof qe.EventEmitter ? a : null, u = _ => { this.bytesUploadedSoFar = _.loaded, this.totalBytes = _.total, this.__notifyProgress({ loaded: this.bytesUploadedSoFar, total: this.totalBytes, part: t.partNumber, Key: this.params.Key, Bucket: this.params.Bucket }); }; o !== null && o.on("xhr.upload.progress", u); let l = yield Promise.all([this.client.send(new ui(i)), n?.endpoint?.()]), h = l[0], s = l[1]; if (s || (s = Fr(yield Ir(i, ui, v({}, n)))), !s)
            throw new Error('Could not resolve endpoint from S3 "client.config.endpoint()" nor EndpointsV2.'); o !== null && o.off("xhr.upload.progress", u); let c = this.params.Key.split("/").map(_ => ge(_)).join("/"), w = ge(this.params.Bucket), p = (() => { let _ = s.hostname.startsWith(`${w}.`), I = this.client.config.forcePathStyle, A = s.port ? `:${s.port}` : ""; return I ? `${s.protocol}//${s.hostname}${A}/${w}/${c}` : _ ? `${s.protocol}//${s.hostname}${A}/${c}` : `${s.protocol}//${w}.${s.hostname}${A}/${c}`; })(); this.singleUploadResult = L(v({}, h), { Bucket: this.params.Bucket, Key: this.params.Key, Location: p }); let g = le(t.data); this.__notifyProgress({ loaded: g, total: g, part: 1, Key: this.params.Key, Bucket: this.params.Bucket }); }); }
        __createMultipartUpload() { return U(this, null, function* () { let t = yield this.client.config.requestChecksumCalculation(); if (!this.createMultiPartPromise) {
            let i = L(v({}, this.params), { Body: void 0 });
            t === "WHEN_SUPPORTED" && (i.ChecksumAlgorithm = this.params.ChecksumAlgorithm || qa.CRC32), this.createMultiPartPromise = this.client.send(new Wa(i)).then(n => (this.abortMultipartUploadCommand = new Oa({ Bucket: this.params.Bucket, Key: this.params.Key, UploadId: n.UploadId }), n));
        } return this.createMultiPartPromise; }); }
        __doConcurrentUpload(t) { return U(this, null, function* () { try {
            for (var i = re(t), n, a, o; n = !(a = yield i.next()).done; n = !1) {
                let u = a.value;
                if (this.uploadEnqueuedPartsCount > this.MAX_PARTS)
                    throw new Error(`Exceeded ${this.MAX_PARTS} parts in multipart upload to Bucket: ${this.params.Bucket} Key: ${this.params.Key}.`);
                if (this.abortController.signal.aborted)
                    return;
                if (u.partNumber === 1 && u.lastPart)
                    return yield this.__uploadUsingPut(u);
                if (!this.uploadId) {
                    let { UploadId: g } = yield this.__createMultipartUpload();
                    if (this.uploadId = g, this.abortController.signal.aborted)
                        return;
                }
                let l = le(u.data) || 0, h = this.client.config.requestHandler, s = h instanceof qe.EventEmitter ? h : null, c = 0, w = (g, _) => { (Number(_.query.partNumber) || -1) === u.partNumber && (g.total && l && (this.bytesUploadedSoFar += g.loaded - c, c = g.loaded), this.__notifyProgress({ loaded: this.bytesUploadedSoFar, total: this.totalBytes, part: u.partNumber, Key: this.params.Key, Bucket: this.params.Bucket })); };
                s !== null && s.on("xhr.upload.progress", w), this.uploadEnqueuedPartsCount += 1, this.__validateUploadPart(u);
                let p = yield this.client.send(new $a(L(v({}, this.params), { ContentLength: void 0, UploadId: this.uploadId, Body: u.data, PartNumber: u.partNumber })));
                if (s !== null && s.off("xhr.upload.progress", w), this.abortController.signal.aborted)
                    return;
                if (!p.ETag)
                    throw new Error(`Part ${u.partNumber} is missing ETag in UploadPart response. Missing Bucket CORS configuration for ETag header?`);
                this.uploadedParts.push(v(v(v(v({ PartNumber: u.partNumber, ETag: p.ETag }, p.ChecksumCRC32 && { ChecksumCRC32: p.ChecksumCRC32 }), p.ChecksumCRC32C && { ChecksumCRC32C: p.ChecksumCRC32C }), p.ChecksumSHA1 && { ChecksumSHA1: p.ChecksumSHA1 }), p.ChecksumSHA256 && { ChecksumSHA256: p.ChecksumSHA256 })), s === null && (this.bytesUploadedSoFar += l), this.__notifyProgress({ loaded: this.bytesUploadedSoFar, total: this.totalBytes, part: u.partNumber, Key: this.params.Key, Bucket: this.params.Bucket });
            }
        }
        catch {
            o = [a];
        }
        finally {
            try {
                n && (a = i.return) && (yield a.call(i));
            }
            finally {
                if (o)
                    throw o[0];
            }
        } }); }
        __doMultipartUpload() {
            return U(this, null, function* () {
                let t = oi(this.params.Body, this.partSize), i = [];
                for (let a = 0; a < this.queueSize; a++) {
                    let o = this.__doConcurrentUpload(t).catch(u => { i.push(u); });
                    this.concurrentUploaders.push(o);
                }
                if (yield Promise.all(this.concurrentUploaders), i.length >= 1)
                    throw yield this.markUploadAsAborted(), i[0];
                if (this.abortController.signal.aborted)
                    throw yield this.markUploadAsAborted(), Object.assign(new Error("Upload aborted."), { name: "AbortError" });
                let n;
                if (this.isMultiPart) {
                    let { expectedPartsCount: a, uploadedParts: o, totalBytes: u, totalBytesSource: l } = this;
                    if (u !== void 0 && a !== void 0 && o.length !== a)
                        throw new Error(`Expected ${a} part(s) but uploaded ${o.length} part(s).
The expected part count is based on the byte-count of the input.params.Body,
which was read from ${l} and is ${u}.
If this is not correct, provide an override value by setting a number
to input.params.ContentLength in bytes.
`);
                    this.uploadedParts.sort((s, c) => s.PartNumber - c.PartNumber);
                    let h = L(v({}, this.params), { Body: void 0, UploadId: this.uploadId, MultipartUpload: { Parts: this.uploadedParts } });
                    n = yield this.client.send(new ja(h)), typeof n?.Location == "string" && n.Location.includes("%2F") && (n.Location = n.Location.replace(/%2F/g, "/"));
                }
                else
                    n = this.singleUploadResult;
                return this.abortMultipartUploadCommand = null, this.tags.length && (yield this.client.send(new Ha(L(v({}, this.params), { Tagging: { TagSet: this.tags } })))), n;
            });
        }
        markUploadAsAborted() { return U(this, null, function* () { this.uploadId && !this.leavePartsOnError && this.abortMultipartUploadCommand !== null && (yield this.client.send(this.abortMultipartUploadCommand), this.abortMultipartUploadCommand = null); }); }
        __notifyProgress(t) { this.uploadEvent && this.emit(this.uploadEvent, t); }
        __abortTimeout(t) { return U(this, null, function* () { return new Promise((i, n) => { t.onabort = () => { let a = new Error("Upload aborted."); a.name = "AbortError", n(a); }; }); }); }
        __validateUploadPart(t) { let i = le(t.data); if (i === void 0)
            throw new Error(`A dataPart was generated without a measurable data chunk size for part number ${t.partNumber}`); if (!(t.partNumber === 1 && t.lastPart) && !t.lastPart && i !== this.partSize)
            throw new Error(`The byte size for part number ${t.partNumber}, size ${i} does not match expected size ${this.partSize}`); }
        __validateInput() { if (!this.client)
            throw new Error("InputError: Upload requires a AWS client to do uploads with."); if (this.partSize < r.MIN_PART_SIZE)
            throw new Error(`EntityTooSmall: Your proposed upload part size [${this.partSize}] is smaller than the minimum allowed size [${r.MIN_PART_SIZE}] (5MB)`); if (this.queueSize < 1)
            throw new Error("Queue size: Must have at least one uploading queue."); }
    }
    return r;
})();
export { Yo as Upload };
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
