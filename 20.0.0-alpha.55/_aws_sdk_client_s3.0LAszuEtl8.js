import { $ as fp, A as wo, Aa as Mp, Ba as $p, C as Jm, E as _n, F as An, G as Rn, H as Or, I as Qm, J as Tr, K as Ym, M as tp, N as ep, O as rp, P as op, Q as np, R as xe, S as ip, T as ap, U as cp, V as up, W as mp, X as pp, Y as lp, Z as dp, _ as d, a as Um, aa as gp, b as Nm, ba as xp, c as ie, ca as hp, d as Bn, da as Cp, e as Gm, ea as vn, f as jm, fa as yp, g as zm, ga as Dr, h as Ro, ha as Ep, i as vr, j as qm, ja as Sp, k as Hm, l as Fm, la as bp, m as rr, ma as kp, n as fr, na as Bp, o as Vm, oa as Pp, p as Te, pa as _p, q as Km, qa as f, r as Pn, ra as Rp, s as Wm, sa as vp, t as Ne, ta as wp, u as vo, ua as Op, va as Tp, w as Zm, wa as Be, x as Xm, xa as Dp, y as bt, ya as Ip, z as Mt, za as Lp } from "@nf-internal/chunk-EPGOIPNE";
import { a as wr, b as Ue } from "@nf-internal/chunk-A2Y7EL3B";
import "@nf-internal/chunk-SC2LNWXG";
import { a as cc } from "@nf-internal/chunk-3GO544QL";
import { a as sp, e as Ap } from "@nf-internal/chunk-K25EXYVF";
import { a as u, b as p, d as $m, h as ac, i as P, j as Lt, k as ge, l as Ke } from "@nf-internal/chunk-2AVGQ2MQ";
function Ny(r) { return t => o => P(null, null, function* () { let { request: e } = o; if (r.expectContinueHeader !== !1 && ie.isInstance(e) && e.body && r.runtime === "node" && r.requestHandler?.constructor?.name !== "FetchHttpHandler") {
    let s = !0;
    if (typeof r.expectContinueHeader == "number")
        try {
            s = (Number(e.headers?.["content-length"]) ?? r.bodyLengthChecker?.(e.body) ?? 1 / 0) >= r.expectContinueHeader;
        }
        catch { }
    else
        s = !!r.expectContinueHeader;
    s && (e.headers.Expect = "100-continue");
} return t(p(u({}, o), { request: e })); }); }
var Gy = { step: "build", tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"], name: "addExpectContinueMiddleware", override: !0 }, Up = r => ({ applyToStack: t => { t.add(Ny(r), Gy); } });
var We = { WHEN_SUPPORTED: "WHEN_SUPPORTED", WHEN_REQUIRED: "WHEN_REQUIRED" }, Np = We.WHEN_SUPPORTED, wn = { WHEN_SUPPORTED: "WHEN_SUPPORTED", WHEN_REQUIRED: "WHEN_REQUIRED" }, Gp = We.WHEN_SUPPORTED, ot = (function (r) { return r.MD5 = "MD5", r.CRC32 = "CRC32", r.CRC32C = "CRC32C", r.CRC64NVME = "CRC64NVME", r.SHA1 = "SHA1", r.SHA256 = "SHA256", r; })(ot || {});
var Oo = ot.CRC32;
var jy = typeof ReadableStream == "function" ? ReadableStream : function () { }, On = class extends jy {
};
var To = r => typeof ReadableStream == "function" && (r?.constructor?.name === ReadableStream.name || r instanceof ReadableStream);
var jp = ({ expectedChecksum: r, checksum: t, source: o, checksumSourceLocation: e, base64Encoder: s }) => { if (!To(o))
    throw new Error(`@smithy/util-stream: unsupported source type ${o?.constructor?.name ?? o} in ChecksumStream.`); let a = s ?? Te; if (typeof TransformStream != "function")
    throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream."); let c = new TransformStream({ start() { }, transform(k, w) { return P(this, null, function* () { t.update(k), w.enqueue(k); }); }, flush(k) { return P(this, null, function* () { let w = yield t.digest(), B = a(w); if (r !== B) {
        let D = new Error(`Checksum mismatch: expected "${r}" but received "${B}" in response header "${e}".`);
        k.error(D);
    }
    else
        k.terminate(); }); } }); o.pipeThrough(c); let x = c.readable; return Object.setPrototypeOf(x, On.prototype), x; };
var Tn = class {
    allocByteArray;
    byteLength = 0;
    byteArrays = [];
    constructor(t) { this.allocByteArray = t; }
    push(t) { this.byteArrays.push(t), this.byteLength += t.byteLength; }
    flush() { if (this.byteArrays.length === 1) {
        let e = this.byteArrays[0];
        return this.reset(), e;
    } let t = this.allocByteArray(this.byteLength), o = 0; for (let e = 0; e < this.byteArrays.length; ++e) {
        let s = this.byteArrays[e];
        t.set(s, o), o += s.byteLength;
    } return this.reset(), t; }
    reset() { this.byteArrays = [], this.byteLength = 0; }
};
function zy(r, t, o) { let e = r.getReader(), s = !1, a = 0, c = ["", new Tn(k => new Uint8Array(k))], x = -1, h = k => P(null, null, function* () { let { value: w, done: B } = yield e.read(), D = w; if (B) {
    if (x !== -1) {
        let R = uc(c, x);
        Do(R) > 0 && k.enqueue(R);
    }
    k.close();
}
else {
    let R = Hy(D, !1);
    if (x !== R && (x >= 0 && k.enqueue(uc(c, x)), x = R), x === -1) {
        k.enqueue(D);
        return;
    }
    let $ = Do(D);
    a += $;
    let G = Do(c[x]);
    if ($ >= t && G === 0)
        k.enqueue(D);
    else {
        let q = qy(c, x, D);
        !s && a > t * 2 && (s = !0, o?.warn(`@smithy/util-stream - stream chunk size ${$} is below threshold of ${t}, automatically buffering.`)), q >= t ? k.enqueue(uc(c, x)) : yield h(k);
    }
} }); return new ReadableStream({ pull: h }); }
var zp = zy;
function qy(r, t, o) { switch (t) {
    case 0: return r[0] += o, Do(r[0]);
    case 1:
    case 2: return r[t].push(o), Do(r[t]);
} }
function uc(r, t) { switch (t) {
    case 0:
        let o = r[0];
        return r[0] = "", o;
    case 1:
    case 2: return r[t].flush();
} throw new Error(`@smithy/util-stream - invalid index ${t} given to flush()`); }
function Do(r) { return r?.byteLength ?? r?.length ?? 0; }
function Hy(r, t = !0) { return t && typeof Buffer < "u" && r instanceof Buffer ? 2 : r instanceof Uint8Array ? 1 : typeof r == "string" ? 0 : -1; }
var qp = (r, t) => {
    let { base64Encoder: o, bodyLengthChecker: e, checksumAlgorithmFn: s, checksumLocationName: a, streamHasher: c } = t, x = o !== void 0 && e !== void 0 && s !== void 0 && a !== void 0 && c !== void 0, h = x ? c(s, r) : void 0, k = r.getReader();
    return new ReadableStream({ pull(B) {
            return P(this, null, function* () {
                let { value: D, done: R } = yield k.read();
                if (R) {
                    if (B.enqueue(`0\r
`), x) {
                        let $ = o(yield h);
                        B.enqueue(`${a}:${$}\r
`), B.enqueue(`\r
`);
                    }
                    B.close();
                }
                else
                    B.enqueue(`${(e(D) || 0).toString(16)}\r
${D}\r
`);
            });
        } });
};
function Hp(r, t) { return P(this, null, function* () { let o = 0, e = [], s = r.getReader(), a = !1; for (; !a;) {
    let { done: h, value: k } = yield s.read();
    if (k && (e.push(k), o += k?.byteLength ?? 0), o >= t)
        break;
    a = h;
} s.releaseLock(); let c = new Uint8Array(Math.min(t, o)), x = 0; for (let h of e) {
    if (h.byteLength > c.byteLength - x) {
        c.set(h.subarray(0, c.byteLength - x), x);
        break;
    }
    else
        c.set(h, x);
    x += h.length;
} return c; }); }
var Fp = "The stream has already been transformed.", Dn = r => {
    if (!Vp(r) && !To(r)) {
        let s = r?.__proto__?.constructor?.name || r;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${s}`);
    }
    let t = !1, o = () => P(null, null, function* () { if (t)
        throw new Error(Fp); return t = !0, yield Pn(r); }), e = s => {
        if (typeof s.stream != "function")
            throw new Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`);
        return s.stream();
    };
    return Object.assign(r, { transformToByteArray: o, transformToString: s => P(null, null, function* () { let a = yield o(); if (s === "base64")
            return Te(a); if (s === "hex")
            return Ne(a); if (s === void 0 || s === "utf8" || s === "utf-8")
            return Ue(a); if (typeof TextDecoder == "function")
            return new TextDecoder(s).decode(a); throw new Error("TextDecoder is not available, please make sure polyfill is provided."); }), transformToWebStream: () => { if (t)
            throw new Error(Fp); if (t = !0, Vp(r))
            return e(r); if (To(r))
            return r; throw new Error(`Cannot transform payload to web stream, got ${r}`); } });
}, Vp = r => typeof Blob == "function" && r instanceof Blob;
function Kp(r) { return P(this, null, function* () { return typeof r.stream == "function" && (r = r.stream()), r.tee(); }); }
function Wp(r) { return (r.includes(",") || r.includes('"')) && (r = `"${r.replace(/"/g, '\\"')}"`), r; }
var mc = "(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?", pc = "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)", lc = "(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?", Zp = "(\\d?\\d)", Xp = "(\\d{4})", Fy = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/), Vy = new RegExp(`^${mc}, ${Zp} ${pc} ${Xp} ${lc} GMT$`), Ky = new RegExp(`^${mc}, ${Zp}-${pc}-(\\d\\d) ${lc} GMT$`), Wy = new RegExp(`^${mc} ${pc} ( [1-9]|\\d\\d) ${lc} ${Xp}$`), Zy = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], Jp = r => { if (r == null)
    return; let t = NaN; if (typeof r == "number")
    t = r;
else if (typeof r == "string") {
    if (!/^-?\d*\.?\d+$/.test(r))
        throw new TypeError("parseEpochTimestamp - numeric string invalid.");
    t = Number.parseFloat(r);
}
else
    typeof r == "object" && r.tag === 1 && (t = r.value); if (isNaN(t) || Math.abs(t) === 1 / 0)
    throw new TypeError("Epoch timestamps must be valid finite numbers."); return new Date(Math.round(t * 1e3)); }, Qp = r => { if (r == null)
    return; if (typeof r != "string")
    throw new TypeError("RFC3339 timestamps must be strings"); let t = Fy.exec(r); if (!t)
    throw new TypeError(`Invalid RFC3339 timestamp format ${r}`); let [, o, e, s, a, c, x, , h, k] = t; Ze(e, 1, 12), Ze(s, 1, 31), Ze(a, 0, 23), Ze(c, 0, 59), Ze(x, 0, 60); let w = new Date(Date.UTC(Number(o), Number(e) - 1, Number(s), Number(a), Number(c), Number(x), Number(h) ? Math.round(parseFloat(`0.${h}`) * 1e3) : 0)); if (w.setUTCFullYear(Number(o)), k.toUpperCase() != "Z") {
    let [, B, D, R] = /([+-])(\d\d):(\d\d)/.exec(k) || [void 0, "+", 0, 0], $ = B === "-" ? 1 : -1;
    w.setTime(w.getTime() + $ * (Number(D) * 60 * 60 * 1e3 + Number(R) * 60 * 1e3));
} return w; }, Yp = r => { if (r == null)
    return; if (typeof r != "string")
    throw new TypeError("RFC7231 timestamps must be strings."); let t, o, e, s, a, c, x, h; if ((h = Vy.exec(r)) ? [, t, o, e, s, a, c, x] = h : (h = Ky.exec(r)) ? ([, t, o, e, s, a, c, x] = h, e = (Number(e) + 1900).toString()) : (h = Wy.exec(r)) && ([, o, t, s, a, c, x, e] = h), e && c) {
    let k = Date.UTC(Number(e), Zy.indexOf(o), Number(t), Number(s), Number(a), Number(c), x ? Math.round(parseFloat(`0.${x}`) * 1e3) : 0);
    Ze(t, 1, 31), Ze(s, 0, 23), Ze(a, 0, 59), Ze(c, 0, 60);
    let w = new Date(k);
    return w.setUTCFullYear(Number(e)), w;
} throw new TypeError(`Invalid RFC7231 date-time value ${r}.`); };
function Ze(r, t, o) { let e = Number(r); if (e < t || e > o)
    throw new Error(`Value ${e} out of range [${t}, ${o}]`); }
function tl(r, t, o) { if (o <= 0 || !Number.isInteger(o))
    throw new Error("Invalid number of delimiters (" + o + ") for splitEvery."); let e = r.split(t); if (o === 1)
    return e; let s = [], a = ""; for (let c = 0; c < e.length; c++)
    a === "" ? a = e[c] : a += t + e[c], (c + 1) % o === 0 && (s.push(a), a = ""); return a !== "" && s.push(a), s; }
var In = r => { let t = r.length, o = [], e = !1, s, a = 0; for (let c = 0; c < t; ++c) {
    let x = r[c];
    switch (x) {
        case '"':
            s !== "\\" && (e = !e);
            break;
        case ",":
            e || (o.push(r.slice(a, c)), a = c + 1);
            break;
        default:
    }
    s = x;
} return o.push(r.slice(a)), o.map(c => { c = c.trim(); let x = c.length; return x < 2 ? c : (c[0] === '"' && c[x - 1] === '"' && (c = c.slice(1, x - 1)), c.replace(/\\"/g, '"')); }); };
var Ln = class extends Qm {
    serializeRequest(t, o, e) { return P(this, null, function* () { let s = u({}, o ?? {}), a = this.serializer, c = {}, x = {}, h = yield e.endpoint(), k = bt.of(t?.input), w = k.getSchema(), B = !1, D, R = new ie({ protocol: "", hostname: "", port: void 0, path: "", fragment: void 0, query: c, headers: x, body: void 0 }); if (h) {
        this.updateServiceEndpoint(R, h), this.setHostPrefix(R, t, s);
        let $ = Xm(t.traits);
        if ($.http) {
            R.method = $.http[0];
            let [G, q] = $.http[1].split("?");
            R.path == "/" ? R.path = G : R.path += G;
            let et = new URLSearchParams(q ?? "");
            Object.assign(c, Object.fromEntries(et));
        }
    } for (let [$, G] of k.structIterator()) {
        let q = G.getMergedTraits() ?? {}, et = s[$];
        if (!(et == null && !G.isIdempotencyToken()))
            if (q.httpPayload)
                G.isStreaming() ? G.isStructSchema() ? s[$] && (D = yield this.serializeEventStream({ eventStream: s[$], requestSchema: k })) : D = et : (a.write(G, et), D = a.flush()), delete s[$];
            else if (q.httpLabel) {
                a.write(G, et);
                let ct = a.flush();
                R.path.includes(`{${$}+}`) ? R.path = R.path.replace(`{${$}+}`, ct.split("/").map(cc).join("/")) : R.path.includes(`{${$}}`) && (R.path = R.path.replace(`{${$}}`, cc(ct))), delete s[$];
            }
            else if (q.httpHeader)
                a.write(G, et), x[q.httpHeader.toLowerCase()] = String(a.flush()), delete s[$];
            else if (typeof q.httpPrefixHeaders == "string") {
                for (let [ct, rt] of Object.entries(et)) {
                    let yt = q.httpPrefixHeaders + ct;
                    a.write([G.getValueSchema(), { httpHeader: yt }], rt), x[yt.toLowerCase()] = a.flush();
                }
                delete s[$];
            }
            else
                q.httpQuery || q.httpQueryParams ? (this.serializeQuery(G, et, c), delete s[$]) : B = !0;
    } return B && s && (a.write(w, s), D = a.flush()), R.headers = x, R.query = c, R.body = D, R; }); }
    serializeQuery(t, o, e) { let s = this.serializer, a = t.getMergedTraits(); if (a.httpQueryParams) {
        for (let [c, x] of Object.entries(o))
            if (!(c in e)) {
                let h = t.getValueSchema();
                Object.assign(h.getMergedTraits(), p(u({}, a), { httpQuery: c, httpQueryParams: void 0 })), this.serializeQuery(h, x, e);
            }
        return;
    } if (t.isListSchema()) {
        let c = !!t.getMergedTraits().sparse, x = [];
        for (let h of o) {
            s.write([t.getValueSchema(), a], h);
            let k = s.flush();
            (c || k !== void 0) && x.push(k);
        }
        e[a.httpQuery] = x;
    }
    else
        s.write([t, a], o), e[a.httpQuery] = s.flush(); }
    deserializeResponse(t, o, e) { return P(this, null, function* () { let s = this.deserializer, a = bt.of(t.output), c = {}; if (e.statusCode >= 300) {
        let h = yield vo(e.body, o);
        throw h.byteLength > 0 && Object.assign(c, yield s.read(15, h)), yield this.handleError(t, o, e, c, this.deserializeMetadata(e)), new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
    } for (let h in e.headers) {
        let k = e.headers[h];
        delete e.headers[h], e.headers[h.toLowerCase()] = k;
    } let x = yield this.deserializeHttpMessage(a, o, e, c); if (x.length) {
        let h = yield vo(e.body, o);
        if (h.byteLength > 0) {
            let k = yield s.read(a, h);
            for (let w of x)
                c[w] = k[w];
        }
    }
    else
        x.discardResponseBody && (yield vo(e.body, o)); return c.$metadata = this.deserializeMetadata(e), c; }); }
    deserializeHttpMessage(t, o, e, s, a) { return P(this, null, function* () { let c; s instanceof Set ? c = a : c = s; let x = !0, h = this.deserializer, k = bt.of(t), w = []; for (let [B, D] of k.structIterator()) {
        let R = D.getMemberTraits();
        if (R.httpPayload) {
            if (x = !1, D.isStreaming())
                D.isStructSchema() ? c[B] = yield this.deserializeEventStream({ response: e, responseSchema: k }) : c[B] = Dn(e.body);
            else if (e.body) {
                let G = yield vo(e.body, o);
                G.byteLength > 0 && (c[B] = yield h.read(D, G));
            }
        }
        else if (R.httpHeader) {
            let $ = String(R.httpHeader).toLowerCase(), G = e.headers[$];
            if (G != null)
                if (D.isListSchema()) {
                    let q = D.getValueSchema();
                    q.getMergedTraits().httpHeader = $;
                    let et;
                    q.isTimestampSchema() && q.getSchema() === 4 ? et = tl(G, ",", 2) : et = In(G);
                    let ct = [];
                    for (let rt of et)
                        ct.push(yield h.read(q, rt.trim()));
                    c[B] = ct;
                }
                else
                    c[B] = yield h.read(D, G);
        }
        else if (R.httpPrefixHeaders !== void 0) {
            c[B] = {};
            for (let [$, G] of Object.entries(e.headers))
                if ($.startsWith(R.httpPrefixHeaders)) {
                    let q = D.getValueSchema();
                    q.getMergedTraits().httpHeader = $, c[B][$.slice(R.httpPrefixHeaders.length)] = yield h.read(q, G);
                }
        }
        else
            R.httpResponseCode ? c[B] = e.statusCode : w.push(B);
    } return w.discardResponseBody = x, w; }); }
};
var Ir = class extends Or {
    settings;
    constructor(t) { super(), this.settings = t; }
    read(t, o) { let e = bt.of(t); if (e.isListSchema())
        return In(o).map(s => this.read(e.getValueSchema(), s)); if (e.isBlobSchema())
        return (this.serdeContext?.base64Decoder ?? fr)(o); if (e.isTimestampSchema())
        switch (Tr(e, this.settings)) {
            case 5: return Qp(o);
            case 6: return Yp(o);
            case 7: return Jp(o);
            default: return console.warn("Missing timestamp format, parsing value with Date constructor:", o), new Date(o);
        } if (e.isStringSchema()) {
        let s = e.getMergedTraits().mediaType, a = o;
        if (s)
            return e.getMergedTraits().httpHeader && (a = this.base64ToUtf8(a)), (s === "application/json" || s.endsWith("+json")) && (a = An.from(a)), a;
    } return e.isNumericSchema() ? Number(o) : e.isBigIntegerSchema() ? BigInt(o) : e.isBigDecimalSchema() ? new Rn(o, "bigDecimal") : e.isBooleanSchema() ? String(o).toLowerCase() === "true" : o; }
    base64ToUtf8(t) { return (this.serdeContext?.utf8Encoder ?? Ue)((this.serdeContext?.base64Decoder ?? fr)(t)); }
};
var Mn = class extends Or {
    codecDeserializer;
    stringDeserializer;
    constructor(t, o) { super(), this.codecDeserializer = t, this.stringDeserializer = new Ir(o); }
    setSerdeContext(t) { this.stringDeserializer.setSerdeContext(t), this.codecDeserializer.setSerdeContext(t), this.serdeContext = t; }
    read(t, o) { let e = bt.of(t), s = e.getMergedTraits(), a = this.serdeContext?.utf8Encoder ?? Ue; if (s.httpHeader || s.httpResponseCode)
        return this.stringDeserializer.read(e, a(o)); if (s.httpPayload) {
        if (e.isBlobSchema()) {
            let c = this.serdeContext?.utf8Decoder ?? wr;
            return typeof o == "string" ? c(o) : o;
        }
        else if (e.isStringSchema())
            return "byteLength" in o ? a(o) : o;
    } return this.codecDeserializer.read(e, o); }
};
var $n = class extends Or {
    settings;
    stringBuffer = "";
    constructor(t) { super(), this.settings = t; }
    write(t, o) { let e = bt.of(t); switch (typeof o) {
        case "object":
            if (o === null) {
                this.stringBuffer = "null";
                return;
            }
            if (e.isTimestampSchema()) {
                if (!(o instanceof Date))
                    throw new Error(`@smithy/core/protocols - received non-Date value ${o} when schema expected Date in ${e.getName(!0)}`);
                switch (Tr(e, this.settings)) {
                    case 5:
                        this.stringBuffer = o.toISOString().replace(".000Z", "Z");
                        break;
                    case 6:
                        this.stringBuffer = wo(o);
                        break;
                    case 7:
                        this.stringBuffer = String(o.getTime() / 1e3);
                        break;
                    default: console.warn("Missing timestamp format, using epoch seconds", o), this.stringBuffer = String(o.getTime() / 1e3);
                }
                return;
            }
            if (e.isBlobSchema() && "byteLength" in o) {
                this.stringBuffer = (this.serdeContext?.base64Encoder ?? Te)(o);
                return;
            }
            if (e.isListSchema() && Array.isArray(o)) {
                let c = "";
                for (let x of o) {
                    this.write([e.getValueSchema(), e.getMergedTraits()], x);
                    let h = this.flush(), k = e.getValueSchema().isTimestampSchema() ? h : Wp(h);
                    c !== "" && (c += ", "), c += k;
                }
                this.stringBuffer = c;
                return;
            }
            this.stringBuffer = JSON.stringify(o, null, 2);
            break;
        case "string":
            let s = e.getMergedTraits().mediaType, a = o;
            if (s && ((s === "application/json" || s.endsWith("+json")) && (a = An.from(a)), e.getMergedTraits().httpHeader)) {
                this.stringBuffer = (this.serdeContext?.base64Encoder ?? Te)(a.toString());
                return;
            }
            this.stringBuffer = o;
            break;
        default: e.isIdempotencyToken() ? this.stringBuffer = _n() : this.stringBuffer = String(o);
    } }
    flush() { let t = this.stringBuffer; return this.stringBuffer = "", t; }
};
var Un = class {
    codecSerializer;
    stringSerializer;
    buffer;
    constructor(t, o, e = new $n(o)) { this.codecSerializer = t, this.stringSerializer = e; }
    setSerdeContext(t) { this.codecSerializer.setSerdeContext(t), this.stringSerializer.setSerdeContext(t); }
    write(t, o) { let e = bt.of(t), s = e.getMergedTraits(); if (s.httpHeader || s.httpLabel || s.httpQuery) {
        this.stringSerializer.write(e, o), this.buffer = this.stringSerializer.flush();
        return;
    } return this.codecSerializer.write(e, o); }
    flush() { if (this.buffer !== void 0) {
        let t = this.buffer;
        return this.buffer = void 0, t;
    } return this.codecSerializer.flush(); }
};
var dc = { SignatureV4a: null };
var fc = r => { let t = "#text"; for (let o in r)
    r.hasOwnProperty(o) && r[o][t] !== void 0 ? r[o] = r[o][t] : typeof r[o] == "object" && r[o] !== null && (r[o] = fc(r[o])); return r; };
function el(r) { return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function rl(r) { return r.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;"); }
var gr = class {
    value;
    constructor(t) { this.value = t; }
    toString() { return rl("" + this.value); }
};
var ae = class r {
    name;
    children;
    attributes = {};
    static of(t, o, e) { let s = new r(t); return o !== void 0 && s.addChildNode(new gr(o)), e !== void 0 && s.withName(e), s; }
    constructor(t, o = []) { this.name = t, this.children = o; }
    withName(t) { return this.name = t, this; }
    addAttribute(t, o) { return this.attributes[t] = o, this; }
    addChildNode(t) { return this.children.push(t), this; }
    removeAttribute(t) { return delete this.attributes[t], this; }
    n(t) { return this.name = t, this; }
    c(t) { return this.children.push(t), this; }
    a(t, o) { return o != null && (this.attributes[t] = o), this; }
    cc(t, o, e = o) { if (t[o] != null) {
        let s = r.of(o, t[o]).withName(e);
        this.c(s);
    } }
    l(t, o, e, s) { t[o] != null && s().map(c => { c.withName(e), this.c(c); }); }
    lc(t, o, e, s) { if (t[o] != null) {
        let a = s(), c = new r(e);
        a.map(x => { c.c(x); }), this.c(c);
    } }
    toString() { let t = !!this.children.length, o = `<${this.name}`, e = this.attributes; for (let s of Object.keys(e)) {
        let a = e[s];
        a != null && (o += ` ${s}="${el("" + a)}"`);
    } return o += t ? `>${this.children.map(s => s.toString()).join("")}</${this.name}>` : "/>"; }
};
var gc;
function xc(r) { gc || (gc = new DOMParser); let t = gc.parseFromString(r, "application/xml"); if (t.getElementsByTagName("parsererror").length > 0)
    throw new Error("DOMParser XML parsing error."); let o = e => { if (e.nodeType === Node.TEXT_NODE && e.textContent?.trim())
    return e.textContent; if (e.nodeType === Node.ELEMENT_NODE) {
    let s = e;
    if (s.attributes.length === 0 && s.childNodes.length === 0)
        return "";
    let a = {}, c = Array.from(s.attributes);
    for (let h of c)
        a[`${h.name}`] = h.value;
    let x = Array.from(s.childNodes);
    for (let h of x) {
        let k = o(h);
        if (k != null) {
            let w = h.nodeName;
            if (x.length === 1 && c.length === 0 && w === "#text")
                return k;
            a[w] ? Array.isArray(a[w]) ? a[w].push(k) : a[w] = [a[w], k] : a[w] = k;
        }
        else if (x.length === 1 && c.length === 0)
            return s.textContent;
    }
    return a;
} return null; }; return { [t.documentElement.nodeName]: o(t.documentElement) }; }
var Nn = class extends Dr {
    settings;
    stringDeserializer;
    constructor(t) { super(), this.settings = t, this.stringDeserializer = new Ir(t); }
    setSerdeContext(t) { this.serdeContext = t, this.stringDeserializer.setSerdeContext(t); }
    read(t, o, e) { let s = bt.of(t), a = s.getMemberSchemas(); if (s.isStructSchema() && s.isMemberSchema() && !!Object.values(a).find(k => !!k.getMemberTraits().eventPayload)) {
        let k = {}, w = Object.keys(a)[0];
        return a[w].isBlobSchema() ? k[w] = o : k[w] = this.read(a[w], o), k;
    } let x = (this.serdeContext?.utf8Encoder ?? Ue)(o), h = this.parseXml(x); return this.readSchema(t, e ? h[e] : h); }
    readSchema(t, o) { let e = bt.of(t); if (e.isUnitSchema())
        return; let s = e.getMergedTraits(); if (e.isListSchema() && !Array.isArray(o))
        return this.readSchema(e, [o]); if (o == null)
        return o; if (typeof o == "object") {
        let a = !!s.sparse, c = !!s.xmlFlattened;
        if (e.isListSchema()) {
            let h = e.getValueSchema(), k = [], w = h.getMergedTraits().xmlName ?? "member", B = c ? o : (o[0] ?? o)[w], D = Array.isArray(B) ? B : [B];
            for (let R of D)
                (R != null || a) && k.push(this.readSchema(h, R));
            return k;
        }
        let x = {};
        if (e.isMapSchema()) {
            let h = e.getKeySchema(), k = e.getValueSchema(), w;
            c ? w = Array.isArray(o) ? o : [o] : w = Array.isArray(o.entry) ? o.entry : [o.entry];
            let B = h.getMergedTraits().xmlName ?? "key", D = k.getMergedTraits().xmlName ?? "value";
            for (let R of w) {
                let $ = R[B], G = R[D];
                (G != null || a) && (x[$] = this.readSchema(k, G));
            }
            return x;
        }
        if (e.isStructSchema()) {
            let h = e.isUnionSchema(), k;
            h && (k = new Sp(o, x));
            for (let [w, B] of e.structIterator()) {
                let D = B.getMergedTraits(), R = D.httpPayload ? D.xmlName ?? B.getName() : B.getMemberTraits().xmlName ?? w;
                h && k.mark(R), o[R] != null && (x[w] = this.readSchema(B, o[R]));
            }
            return h && k.writeUnknown(), x;
        }
        if (e.isDocumentSchema())
            return o;
        throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${e.getName(!0)}`);
    } return e.isListSchema() ? [] : e.isMapSchema() || e.isStructSchema() ? {} : this.stringDeserializer.read(e, o); }
    parseXml(t) { if (t.length) {
        let o;
        try {
            o = xc(t);
        }
        catch (c) {
            throw c && typeof c == "object" && Object.defineProperty(c, "$responseBodyText", { value: t }), c;
        }
        let e = "#text", s = Object.keys(o)[0], a = o[s];
        return a[e] && (a[s] = a[e], delete a[e]), fc(a);
    } return {}; }
};
var ol = (r, t) => { if (t?.Error?.Code !== void 0)
    return t.Error.Code; if (t?.Code !== void 0)
    return t.Code; if (r.statusCode == 404)
    return "NotFound"; };
var Gn = class extends Dr {
    settings;
    stringBuffer;
    byteBuffer;
    buffer;
    constructor(t) { super(), this.settings = t; }
    write(t, o) { let e = bt.of(t); if (e.isStringSchema() && typeof o == "string")
        this.stringBuffer = o;
    else if (e.isBlobSchema())
        this.byteBuffer = "byteLength" in o ? o : (this.serdeContext?.base64Decoder ?? fr)(o);
    else {
        this.buffer = this.writeStruct(e, o, void 0);
        let s = e.getMergedTraits();
        s.httpPayload && !s.xmlName && this.buffer.withName(e.getName());
    } }
    flush() { if (this.byteBuffer !== void 0) {
        let o = this.byteBuffer;
        return delete this.byteBuffer, o;
    } if (this.stringBuffer !== void 0) {
        let o = this.stringBuffer;
        return delete this.stringBuffer, o;
    } let t = this.buffer; return this.settings.xmlNamespace && (t?.attributes?.xmlns || t.addAttribute("xmlns", this.settings.xmlNamespace)), delete this.buffer, t.toString(); }
    writeStruct(t, o, e) { let s = t.getMergedTraits(), a = t.isMemberSchema() && !s.httpPayload ? t.getMemberTraits().xmlName ?? t.getMemberName() : s.xmlName ?? t.getName(); if (!a || !t.isStructSchema())
        throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${t.getName(!0)}.`); let c = ae.of(a), [x, h] = this.getXmlnsAttribute(t, e); for (let [w, B] of Ep(t, o)) {
        let D = o[w];
        if (D != null || B.isIdempotencyToken()) {
            if (B.getMergedTraits().xmlAttribute) {
                c.addAttribute(B.getMergedTraits().xmlName ?? w, this.writeSimple(B, D));
                continue;
            }
            if (B.isListSchema())
                this.writeList(B, D, c, h);
            else if (B.isMapSchema())
                this.writeMap(B, D, c, h);
            else if (B.isStructSchema())
                c.addChildNode(this.writeStruct(B, D, h));
            else {
                let R = ae.of(B.getMergedTraits().xmlName ?? B.getMemberName());
                this.writeSimpleInto(B, D, R, h), c.addChildNode(R);
            }
        }
    } let { $unknown: k } = o; if (k && t.isUnionSchema() && Array.isArray(k) && Object.keys(o).length === 1) {
        let [w, B] = k, D = ae.of(w);
        if (typeof B != "string")
            if (o instanceof ae || o instanceof gr)
                c.addChildNode(o);
            else
                throw new Error("@aws-sdk - $unknown union member in XML requires value of type string, @aws-sdk/xml-builder::XmlNode or XmlText.");
        this.writeSimpleInto(0, B, D, h), c.addChildNode(D);
    } return h && c.addAttribute(x, h), c; }
    writeList(t, o, e, s) { if (!t.isMemberSchema())
        throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${t.getName(!0)}`); let a = t.getMergedTraits(), c = t.getValueSchema(), x = c.getMergedTraits(), h = !!x.sparse, k = !!a.xmlFlattened, [w, B] = this.getXmlnsAttribute(t, s), D = (R, $) => { if (c.isListSchema())
        this.writeList(c, Array.isArray($) ? $ : [$], R, B);
    else if (c.isMapSchema())
        this.writeMap(c, $, R, B);
    else if (c.isStructSchema()) {
        let G = this.writeStruct(c, $, B);
        R.addChildNode(G.withName(k ? a.xmlName ?? t.getMemberName() : x.xmlName ?? "member"));
    }
    else {
        let G = ae.of(k ? a.xmlName ?? t.getMemberName() : x.xmlName ?? "member");
        this.writeSimpleInto(c, $, G, B), R.addChildNode(G);
    } }; if (k)
        for (let R of o)
            (h || R != null) && D(e, R);
    else {
        let R = ae.of(a.xmlName ?? t.getMemberName());
        B && R.addAttribute(w, B);
        for (let $ of o)
            (h || $ != null) && D(R, $);
        e.addChildNode(R);
    } }
    writeMap(t, o, e, s, a = !1) { if (!t.isMemberSchema())
        throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${t.getName(!0)}`); let c = t.getMergedTraits(), x = t.getKeySchema(), k = x.getMergedTraits().xmlName ?? "key", w = t.getValueSchema(), B = w.getMergedTraits(), D = B.xmlName ?? "value", R = !!B.sparse, $ = !!c.xmlFlattened, [G, q] = this.getXmlnsAttribute(t, s), et = (ct, rt, yt) => { let Ve = ae.of(k, rt), [ic, Mm] = this.getXmlnsAttribute(x, q); Mm && Ve.addAttribute(ic, Mm), ct.addChildNode(Ve); let Ao = ae.of(D); w.isListSchema() ? this.writeList(w, yt, Ao, q) : w.isMapSchema() ? this.writeMap(w, yt, Ao, q, !0) : w.isStructSchema() ? Ao = this.writeStruct(w, yt, q) : this.writeSimpleInto(w, yt, Ao, q), ct.addChildNode(Ao); }; if ($) {
        for (let [ct, rt] of Object.entries(o))
            if (R || rt != null) {
                let yt = ae.of(c.xmlName ?? t.getMemberName());
                et(yt, ct, rt), e.addChildNode(yt);
            }
    }
    else {
        let ct;
        a || (ct = ae.of(c.xmlName ?? t.getMemberName()), q && ct.addAttribute(G, q), e.addChildNode(ct));
        for (let [rt, yt] of Object.entries(o))
            if (R || yt != null) {
                let Ve = ae.of("entry");
                et(Ve, rt, yt), (a ? e : ct).addChildNode(Ve);
            }
    } }
    writeSimple(t, o) { if (o === null)
        throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value."); let e = bt.of(t), s = null; if (o && typeof o == "object")
        if (e.isBlobSchema())
            s = (this.serdeContext?.base64Encoder ?? Te)(o);
        else if (e.isTimestampSchema() && o instanceof Date)
            switch (Tr(e, this.settings)) {
                case 5:
                    s = o.toISOString().replace(".000Z", "Z");
                    break;
                case 6:
                    s = wo(o);
                    break;
                case 7:
                    s = String(o.getTime() / 1e3);
                    break;
                default:
                    console.warn("Missing timestamp format, using http date", o), s = wo(o);
                    break;
            }
        else {
            if (e.isBigDecimalSchema() && o)
                return o instanceof Rn ? o.string : String(o);
            throw e.isMapSchema() || e.isListSchema() ? new Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.") : new Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${e.getName(!0)}`);
        } if ((e.isBooleanSchema() || e.isNumericSchema() || e.isBigIntegerSchema() || e.isBigDecimalSchema()) && (s = String(o)), e.isStringSchema() && (o === void 0 && e.isIdempotencyToken() ? s = _n() : s = String(o)), s === null)
        throw new Error(`Unhandled schema-value pair ${e.getName(!0)}=${o}`); return s; }
    writeSimpleInto(t, o, e, s) { let a = this.writeSimple(t, o), c = bt.of(t), x = new gr(a), [h, k] = this.getXmlnsAttribute(c, s); k && e.addAttribute(h, k), e.addChildNode(x); }
    getXmlnsAttribute(t, o) { let e = t.getMergedTraits(), [s, a] = e.xmlNamespace ?? []; return a && a !== o ? [s ? `xmlns:${s}` : "xmlns", a] : [void 0, void 0]; }
};
var jn = class extends Dr {
    settings;
    constructor(t) { super(), this.settings = t; }
    createSerializer() { let t = new Gn(this.settings); return t.setSerdeContext(this.serdeContext), t; }
    createDeserializer() { let t = new Nn(this.settings); return t.setSerdeContext(this.serdeContext), t; }
};
var zn = class r extends Ln {
    codec;
    serializer;
    deserializer;
    mixin = new yp;
    constructor(t) { super(t); let o = { timestampFormat: { useTrait: !0, default: 5 }, httpBindings: !0, xmlNamespace: t.xmlNamespace, serviceNamespace: t.defaultNamespace }; this.codec = new jn(o), this.serializer = new Un(this.codec.createSerializer(), o), this.deserializer = new Mn(this.codec.createDeserializer(), o); }
    getPayloadCodec() { return this.codec; }
    getShapeId() { return "aws.protocols#restXml"; }
    serializeRequest(t, o, e) { return P(this, null, function* () { let s = yield ac(r.prototype, this, "serializeRequest").call(this, t, o, e), a = bt.of(t.input); if (!s.headers["content-type"]) {
        let c = this.mixin.resolveRestContentType(this.getDefaultContentType(), a);
        c && (s.headers["content-type"] = c);
    } return typeof s.body == "string" && s.headers["content-type"] === this.getDefaultContentType() && !s.body.startsWith("<?xml ") && !this.hasUnstructuredPayloadBinding(a) && (s.body = '<?xml version="1.0" encoding="UTF-8"?>' + s.body), s; }); }
    deserializeResponse(t, o, e) { return P(this, null, function* () { return ac(r.prototype, this, "deserializeResponse").call(this, t, o, e); }); }
    handleError(t, o, e, s, a) { return P(this, null, function* () { let c = ol(e, s) ?? "Unknown", { errorSchema: x, errorMetadata: h } = yield this.mixin.getErrorSchemaOrThrowBaseException(c, this.options.defaultNamespace, e, s, a), k = bt.of(x), w = s.Error?.message ?? s.Error?.Message ?? s.message ?? s.Message ?? "Unknown", B = Mt.for(x[1]).getErrorCtor(x) ?? Error, D = new B(w); yield this.deserializeHttpMessage(x, o, e, s); let R = {}; for (let [$, G] of k.structIterator()) {
        let q = G.getMergedTraits().xmlName ?? $, et = s.Error?.[q] ?? s[q];
        R[$] = this.codec.createDeserializer().readSchema(G, et);
    } throw this.mixin.decorateServiceException(Object.assign(D, h, { $fault: k.getMergedTraits().error, message: w }, R), s); }); }
    getDefaultContentType() { return "application/xml"; }
    hasUnstructuredPayloadBinding(t) { for (let [, o] of t.structIterator())
        if (o.getMergedTraits().httpPayload)
            return !(o.isStructSchema() || o.isMapSchema() || o.isListSchema()); return !1; }
};
var Io = [ot.CRC32, ot.CRC32C, ot.CRC64NVME, ot.SHA1, ot.SHA256], nl = [ot.SHA256, ot.SHA1, ot.CRC32, ot.CRC32C, ot.CRC64NVME];
var sl = (r, { requestChecksumRequired: t, requestAlgorithmMember: o, requestChecksumCalculation: e }) => { if (!o)
    return e === We.WHEN_SUPPORTED || t ? Oo : void 0; if (!r[o])
    return; let s = r[o]; if (!Io.includes(s))
    throw new Error(`The checksum algorithm "${s}" is not supported by the client. Select one of ${Io}.`); return s; };
var Lr = r => r === ot.MD5 ? "content-md5" : `x-amz-checksum-${r.toLowerCase()}`;
var il = (r, t) => { let o = r.toLowerCase(); for (let e of Object.keys(t))
    if (o === e.toLowerCase())
        return !0; return !1; };
var al = (r, t) => { let o = r.toLowerCase(); for (let e of Object.keys(t))
    if (e.toLowerCase().startsWith(o))
        return !0; return !1; };
var qn = r => r !== void 0 && typeof r != "string" && !ArrayBuffer.isView(r) && !up(r);
import { __values as Yy } from "tslib";
var hc = r => new TextEncoder().encode(r);
var Xy = typeof Buffer < "u" && Buffer.from ? function (r) { return Buffer.from(r, "utf8"); } : hc;
function Cc(r) { return r instanceof Uint8Array ? r : typeof r == "string" ? Xy(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r); }
function yc(r) { return typeof r == "string" ? r.length === 0 : r.byteLength === 0; }
function Ec(r) { return new Uint8Array([(r & 4278190080) >> 24, (r & 16711680) >> 16, (r & 65280) >> 8, r & 255]); }
function Sc(r) { if (!Uint32Array.from) {
    for (var t = new Uint32Array(r.length), o = 0; o < r.length;)
        t[o] = r[o], o += 1;
    return t;
} return Uint32Array.from(r); }
import { __awaiter as Jy, __generator as Qy } from "tslib";
var kc = (function () { function r() { this.crc32c = new bc; } return r.prototype.update = function (t) { yc(t) || this.crc32c.update(Cc(t)); }, r.prototype.digest = function () { return Jy(this, void 0, void 0, function () { return Qy(this, function (t) { return [2, Ec(this.crc32c.digest())]; }); }); }, r.prototype.reset = function () { this.crc32c = new bc; }, r; })();
var bc = (function () { function r() { this.checksum = 4294967295; } return r.prototype.update = function (t) { var o, e; try {
    for (var s = Yy(t), a = s.next(); !a.done; a = s.next()) {
        var c = a.value;
        this.checksum = this.checksum >>> 8 ^ eE[(this.checksum ^ c) & 255];
    }
}
catch (x) {
    o = { error: x };
}
finally {
    try {
        a && !a.done && (e = s.return) && e.call(s);
    }
    finally {
        if (o)
            throw o.error;
    }
} return this; }, r.prototype.digest = function () { return (this.checksum ^ 4294967295) >>> 0; }, r; })();
var tE = [0, 4067132163, 3778769143, 324072436, 3348797215, 904991772, 648144872, 3570033899, 2329499855, 2024987596, 1809983544, 2575936315, 1296289744, 3207089363, 2893594407, 1578318884, 274646895, 3795141740, 4049975192, 51262619, 3619967088, 632279923, 922689671, 3298075524, 2592579488, 1760304291, 2075979607, 2312596564, 1562183871, 2943781820, 3156637768, 1313733451, 549293790, 3537243613, 3246849577, 871202090, 3878099393, 357341890, 102525238, 4101499445, 2858735121, 1477399826, 1264559846, 3107202533, 1845379342, 2677391885, 2361733625, 2125378298, 820201905, 3263744690, 3520608582, 598981189, 4151959214, 85089709, 373468761, 3827903834, 3124367742, 1213305469, 1526817161, 2842354314, 2107672161, 2412447074, 2627466902, 1861252501, 1098587580, 3004210879, 2688576843, 1378610760, 2262928035, 1955203488, 1742404180, 2511436119, 3416409459, 969524848, 714683780, 3639785095, 205050476, 4266873199, 3976438427, 526918040, 1361435347, 2739821008, 2954799652, 1114974503, 2529119692, 1691668175, 2005155131, 2247081528, 3690758684, 697762079, 986182379, 3366744552, 476452099, 3993867776, 4250756596, 255256311, 1640403810, 2477592673, 2164122517, 1922457750, 2791048317, 1412925310, 1197962378, 3037525897, 3944729517, 427051182, 170179418, 4165941337, 746937522, 3740196785, 3451792453, 1070968646, 1905808397, 2213795598, 2426610938, 1657317369, 3053634322, 1147748369, 1463399397, 2773627110, 4215344322, 153784257, 444234805, 3893493558, 1021025245, 3467647198, 3722505002, 797665321, 2197175160, 1889384571, 1674398607, 2443626636, 1164749927, 3070701412, 2757221520, 1446797203, 137323447, 4198817972, 3910406976, 461344835, 3484808360, 1037989803, 781091935, 3705997148, 2460548119, 1623424788, 1939049696, 2180517859, 1429367560, 2807687179, 3020495871, 1180866812, 410100952, 3927582683, 4182430767, 186734380, 3756733383, 763408580, 1053836080, 3434856499, 2722870694, 1344288421, 1131464017, 2971354706, 1708204729, 2545590714, 2229949006, 1988219213, 680717673, 3673779818, 3383336350, 1002577565, 4010310262, 493091189, 238226049, 4233660802, 2987750089, 1082061258, 1395524158, 2705686845, 1972364758, 2279892693, 2494862625, 1725896226, 952904198, 3399985413, 3656866545, 731699698, 4283874585, 222117402, 510512622, 3959836397, 3280807620, 837199303, 582374963, 3504198960, 68661723, 4135334616, 3844915500, 390545967, 1230274059, 3141532936, 2825850620, 1510247935, 2395924756, 2091215383, 1878366691, 2644384480, 3553878443, 565732008, 854102364, 3229815391, 340358836, 3861050807, 4117890627, 119113024, 1493875044, 2875275879, 3090270611, 1247431312, 2660249211, 1828433272, 2141937292, 2378227087, 3811616794, 291187481, 34330861, 4032846830, 615137029, 3603020806, 3314634738, 939183345, 1776939221, 2609017814, 2295496738, 2058945313, 2926798794, 1545135305, 1330124605, 3173225534, 4084100981, 17165430, 307568514, 3762199681, 888469610, 3332340585, 3587147933, 665062302, 2042050490, 2346497209, 2559330125, 1793573966, 3190661285, 1279665062, 1595330642, 2910671697], eE = Sc(tE);
var rE = () => { let t = new Array(8); for (let o = 0; o < 8; o++) {
    let e = new Array(512);
    for (let s = 0; s < 256; s++) {
        let a = BigInt(s);
        for (let c = 0; c < 8 * (o + 1); c++)
            a & 1n ? a = a >> 1n ^ 0x9a6c9329ac4bc9b5n : a = a >> 1n;
        e[s * 2] = Number(a >> 32n & 0xffffffffn), e[s * 2 + 1] = Number(a & 0xffffffffn);
    }
    t[o] = new Uint32Array(e);
} return t; }, Bc, Lo, Pc, _c, Ac, Rc, vc, wc, Oc, oE = () => { Bc || (Bc = rE(), [Lo, Pc, _c, Ac, Rc, vc, wc, Oc] = Bc); }, Hn = class {
    c1 = 0;
    c2 = 0;
    constructor() { oE(), this.reset(); }
    update(t) { let o = t.length, e = 0, s = this.c1, a = this.c2; for (; e + 8 <= o;) {
        let c = ((a ^ t[e++]) & 255) << 1, x = ((a >>> 8 ^ t[e++]) & 255) << 1, h = ((a >>> 16 ^ t[e++]) & 255) << 1, k = ((a >>> 24 ^ t[e++]) & 255) << 1, w = ((s ^ t[e++]) & 255) << 1, B = ((s >>> 8 ^ t[e++]) & 255) << 1, D = ((s >>> 16 ^ t[e++]) & 255) << 1, R = ((s >>> 24 ^ t[e++]) & 255) << 1;
        s = Oc[c] ^ wc[x] ^ vc[h] ^ Rc[k] ^ Ac[w] ^ _c[B] ^ Pc[D] ^ Lo[R], a = Oc[c + 1] ^ wc[x + 1] ^ vc[h + 1] ^ Rc[k + 1] ^ Ac[w + 1] ^ _c[B + 1] ^ Pc[D + 1] ^ Lo[R + 1];
    } for (; e < o;) {
        let c = ((a ^ t[e]) & 255) << 1;
        a = (a >>> 8 | (s & 255) << 24) >>> 0, s = s >>> 8 ^ Lo[c], a ^= Lo[c + 1], e++;
    } this.c1 = s, this.c2 = a; }
    digest() { return P(this, null, function* () { let t = this.c1 ^ 4294967295, o = this.c2 ^ 4294967295; return new Uint8Array([t >>> 24, t >>> 16 & 255, t >>> 8 & 255, t & 255, o >>> 24, o >>> 16 & 255, o >>> 8 & 255, o & 255]); }); }
    reset() { this.c1 = 4294967295, this.c2 = 4294967295; }
};
var Tc = { CrtCrc64Nvme: null };
import { AwsCrc32 as nE } from "@aws-crypto/crc32";
var cl = () => nE;
var Fn = (r, t) => { switch (r) {
    case ot.MD5: return t.md5;
    case ot.CRC32: return cl();
    case ot.CRC32C: return kc;
    case ot.CRC64NVME: return typeof Tc.CrtCrc64Nvme != "function" ? Hn : Tc.CrtCrc64Nvme;
    case ot.SHA1: return t.sha1;
    case ot.SHA256: return t.sha256;
    default: throw new Error(`Unsupported checksum algorithm: ${r}`);
} };
var Vn = (r, t) => { let o = new r; return o.update(Vm(t || "")), o.digest(); };
var ul = { name: "flexibleChecksumsMiddleware", step: "build", tags: ["BODY_CHECKSUM"], override: !0 }, ml = (r, t) => (o, e) => s => P(null, null, function* () { if (!ie.isInstance(s.request) || al("x-amz-checksum-", s.request.headers))
    return o(s); let { request: a, input: c } = s, { body: x, headers: h } = a, { base64Encoder: k, streamHasher: w } = r, { requestChecksumRequired: B, requestAlgorithmMember: D } = t, R = yield r.requestChecksumCalculation(), $ = D?.name, G = D?.httpHeader; $ && !c[$] && (R === We.WHEN_SUPPORTED || B) && (c[$] = Oo, G && (h[G] = Oo)); let q = sl(c, { requestChecksumRequired: B, requestAlgorithmMember: D?.name, requestChecksumCalculation: R }), et = x, ct = h; if (q) {
    switch (q) {
        case ot.CRC32:
            xe(e, "FLEXIBLE_CHECKSUMS_REQ_CRC32", "U");
            break;
        case ot.CRC32C:
            xe(e, "FLEXIBLE_CHECKSUMS_REQ_CRC32C", "V");
            break;
        case ot.CRC64NVME:
            xe(e, "FLEXIBLE_CHECKSUMS_REQ_CRC64", "W");
            break;
        case ot.SHA1:
            xe(e, "FLEXIBLE_CHECKSUMS_REQ_SHA1", "X");
            break;
        case ot.SHA256:
            xe(e, "FLEXIBLE_CHECKSUMS_REQ_SHA256", "Y");
            break;
    }
    let rt = Lr(q), yt = Fn(q, r);
    if (qn(x)) {
        let { getAwsChunkedEncodingStream: Ve, bodyLengthChecker: ic } = r;
        et = Ve(typeof r.requestStreamBufferSize == "number" && r.requestStreamBufferSize >= 8 * 1024 ? zp(x, r.requestStreamBufferSize, e.logger) : x, { base64Encoder: k, bodyLengthChecker: ic, checksumLocationName: rt, checksumAlgorithmFn: yt, streamHasher: w }), ct = p(u({}, h), { "content-encoding": h["content-encoding"] ? `${h["content-encoding"]},aws-chunked` : "aws-chunked", "transfer-encoding": "chunked", "x-amz-decoded-content-length": h["content-length"], "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER", "x-amz-trailer": rt }), delete ct["content-length"];
    }
    else if (!il(rt, h)) {
        let Ve = yield Vn(yt, x);
        ct = p(u({}, h), { [rt]: k(Ve) });
    }
} try {
    return yield o(p(u({}, s), { request: p(u({}, a), { headers: ct, body: et }) }));
}
catch (rt) {
    if (rt instanceof Error && rt.name === "InvalidChunkSizeError")
        try {
            rt.message.endsWith(".") || (rt.message += "."), rt.message += " Set [requestStreamBufferSize=number e.g. 65_536] in client constructor to instruct AWS SDK to buffer your input stream.";
        }
        catch { }
    throw rt;
} });
var pl = { name: "flexibleChecksumsInputMiddleware", toMiddleware: "serializerMiddleware", relation: "before", tags: ["BODY_CHECKSUM"], override: !0 }, ll = (r, t) => (o, e) => s => P(null, null, function* () { let a = s.input, { requestValidationModeMember: c } = t, x = yield r.requestChecksumCalculation(), h = yield r.responseChecksumValidation(); switch (x) {
    case We.WHEN_REQUIRED:
        xe(e, "FLEXIBLE_CHECKSUMS_REQ_WHEN_REQUIRED", "a");
        break;
    case We.WHEN_SUPPORTED:
        xe(e, "FLEXIBLE_CHECKSUMS_REQ_WHEN_SUPPORTED", "Z");
        break;
} switch (h) {
    case wn.WHEN_REQUIRED:
        xe(e, "FLEXIBLE_CHECKSUMS_RES_WHEN_REQUIRED", "c");
        break;
    case wn.WHEN_SUPPORTED:
        xe(e, "FLEXIBLE_CHECKSUMS_RES_WHEN_SUPPORTED", "b");
        break;
} return c && !a[c] && h === wn.WHEN_SUPPORTED && (a[c] = "ENABLED"), o(s); });
var Kn = (r = []) => { let t = []; for (let o of nl)
    !r.includes(o) || !Io.includes(o) || t.push(o); return t; };
var dl = r => { let t = r.lastIndexOf("-"); if (t !== -1) {
    let o = r.slice(t + 1);
    if (!o.startsWith("0")) {
        let e = parseInt(o, 10);
        if (!isNaN(e) && e >= 1 && e <= 1e4)
            return !0;
    }
} return !1; };
var fl = (e, s) => P(null, [e, s], function* (r, { checksumAlgorithmFn: t, base64Encoder: o }) { return o(yield Vn(t, r)); });
var gl = (s, a) => P(null, [s, a], function* (r, { config: t, responseAlgorithms: o, logger: e }) { let c = Kn(o), { body: x, headers: h } = r; for (let k of c) {
    let w = Lr(k), B = h[w];
    if (B) {
        let D;
        try {
            D = Fn(k, t);
        }
        catch (G) {
            if (k === ot.CRC64NVME) {
                e?.warn(`Skipping ${ot.CRC64NVME} checksum validation: ${G.message}`);
                continue;
            }
            throw G;
        }
        let { base64Encoder: R } = t;
        if (qn(x)) {
            r.body = jp({ expectedChecksum: B, checksumSourceLocation: w, checksum: new D, source: x, base64Encoder: R });
            return;
        }
        let $ = yield fl(x, { checksumAlgorithmFn: D, base64Encoder: R });
        if ($ === B)
            break;
        throw new Error(`Checksum mismatch: expected "${$}" but received "${B}" in response header "${w}".`);
    }
} });
var xl = { name: "flexibleChecksumsResponseMiddleware", toMiddleware: "deserializerMiddleware", relation: "after", tags: ["BODY_CHECKSUM"], override: !0 }, hl = (r, t) => (o, e) => s => P(null, null, function* () { if (!ie.isInstance(s.request))
    return o(s); let a = s.input, c = yield o(s), x = c.response, { requestValidationModeMember: h, responseAlgorithms: k } = t; if (h && a[h] === "ENABLED") {
    let { clientName: w, commandName: B } = e;
    if (w === "S3Client" && B === "GetObjectCommand" && Kn(k).every(R => { let $ = Lr(R), G = x.headers[$]; return !G || dl(G); }))
        return c;
    yield gl(x, { config: r, responseAlgorithms: k, logger: e.logger });
} return c; });
var N = (r, t) => ({ applyToStack: o => { o.add(ml(r, t), ul), o.addRelativeTo(ll(r, t), pl), o.addRelativeTo(hl(r, t), xl); } });
var Cl = r => { let { requestChecksumCalculation: t, responseChecksumValidation: o, requestStreamBufferSize: e } = r; return Object.assign(r, { requestChecksumCalculation: vr(t ?? Np), responseChecksumValidation: vr(o ?? Gp), requestStreamBufferSize: Number(e ?? 0) }); };
var sE = "content-length", iE = "x-amz-decoded-content-length";
function aE() { return (r, t) => o => P(null, null, function* () { let { request: e } = o; if (ie.isInstance(e) && !(sE in e.headers) && !(iE in e.headers)) {
    let s = "Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.";
    typeof t?.logger?.warn == "function" && !(t.logger instanceof vn) ? t.logger.warn(s) : console.warn(s);
} return r(u({}, o)); }); }
var cE = { step: "finalizeRequest", tags: ["CHECK_CONTENT_LENGTH_HEADER"], name: "getCheckContentLengthHeaderPlugin", override: !0 }, yl = r => ({ applyToStack: t => { t.add(aE(), cE); } });
var El = r => (t, o) => e => P(null, null, function* () { let s = yield r.region(), a = r.region, c = () => { }; o.__s3RegionRedirect && (Object.defineProperty(r, "region", { writable: !1, value: () => P(null, null, function* () { return o.__s3RegionRedirect; }) }), c = () => Object.defineProperty(r, "region", { writable: !0, value: a })); try {
    let x = yield t(e);
    if (o.__s3RegionRedirect) {
        c();
        let h = yield r.region();
        if (s !== h)
            throw new Error("Region was not restored following S3 region redirect.");
    }
    return x;
}
catch (x) {
    throw c(), x;
} }), Sl = { tags: ["REGION_REDIRECT", "S3"], name: "regionRedirectEndpointMiddleware", override: !0, relation: "before", toMiddleware: "endpointV2Middleware" };
function uE(r) { return (t, o) => e => P(null, null, function* () { try {
    return yield t(e);
}
catch (s) {
    if (r.followRegionRedirects) {
        let a = s?.$metadata?.httpStatusCode, c = o.commandName === "HeadBucketCommand", x = s?.$response?.headers?.["x-amz-bucket-region"];
        if (x && (a === 301 || a === 400 && (s?.name === "IllegalLocationConstraintException" || c))) {
            try {
                let h = x;
                o.logger?.debug(`Redirecting from ${yield r.region()} to ${h}`), o.__s3RegionRedirect = h;
            }
            catch (h) {
                throw new Error("Region redirect failed: " + h);
            }
            return t(e);
        }
    }
    throw s;
} }); }
var mE = { step: "initialize", tags: ["REGION_REDIRECT", "S3"], name: "regionRedirectMiddleware", override: !0 }, bl = r => ({ applyToStack: t => { t.add(uE(r), mE), t.addRelativeTo(El(r), Sl); } });
var pE = r => (t, o) => e => P(null, null, function* () { let s = yield t(e), { response: a } = s; if (Bn.isInstance(a) && a.headers.expires) {
    a.headers.expiresstring = a.headers.expires;
    try {
        Jm(a.headers.expires);
    }
    catch (c) {
        o.logger?.warn(`AWS SDK Warning for ${o.clientName}::${o.commandName} response parsing (${a.headers.expires}): ${c}`), delete a.headers.expires;
    }
} return s; }), lE = { tags: ["S3"], name: "s3ExpiresMiddleware", override: !0, relation: "after", toMiddleware: "deserializerMiddleware" }, Wn = r => ({ applyToStack: t => { t.addRelativeTo(pE(r), lE); } });
var kl = (() => { class r {
    data;
    lastPurgeTime = Date.now();
    static EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;
    constructor(o = {}) { this.data = o; }
    get(o) { let e = this.data[o]; if (e)
        return e; }
    set(o, e) { return this.data[o] = e, e; }
    delete(o) { delete this.data[o]; }
    purgeExpired() { return P(this, null, function* () { let o = Date.now(); if (!(this.lastPurgeTime + r.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > o))
        for (let e in this.data) {
            let s = this.data[e];
            if (!s.isRefreshing) {
                let a = yield s.identity;
                a.expiration && a.expiration.getTime() < o && delete this.data[e];
            }
        } }); }
} return r; })();
var Mr = class {
    _identity;
    isRefreshing;
    accessed;
    constructor(t, o = !1, e = Date.now()) { this._identity = t, this.isRefreshing = o, this.accessed = e; }
    get identity() { return this.accessed = Date.now(), this._identity; }
};
var Dc = (() => {
    class r {
        createSessionFn;
        cache;
        static REFRESH_WINDOW_MS = 6e4;
        constructor(o, e = new kl) { this.createSessionFn = o, this.cache = e; }
        getS3ExpressIdentity(o, e) { return P(this, null, function* () { let s = e.Bucket, { cache: a } = this, c = a.get(s); return c ? c.identity.then(x => (x.expiration?.getTime() ?? 0) < Date.now() ? a.set(s, new Mr(this.getIdentity(s))).identity : ((x.expiration?.getTime() ?? 0) < Date.now() + r.REFRESH_WINDOW_MS && !c.isRefreshing && (c.isRefreshing = !0, this.getIdentity(s).then(w => { a.set(s, new Mr(Promise.resolve(w))); })), x)) : a.set(s, new Mr(this.getIdentity(s))).identity; }); }
        getIdentity(o) {
            return P(this, null, function* () {
                yield this.cache.purgeExpired().catch(a => {
                    console.warn(`Error while clearing expired entries in S3ExpressIdentityCache: 
` + a);
                });
                let e = yield this.createSessionFn(o);
                if (!e.Credentials?.AccessKeyId || !e.Credentials?.SecretAccessKey)
                    throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
                return { accessKeyId: e.Credentials.AccessKeyId, secretAccessKey: e.Credentials.SecretAccessKey, sessionToken: e.Credentials.SessionToken, expiration: e.Credentials.Expiration ? new Date(e.Credentials.Expiration) : void 0 };
            });
        }
    }
    return r;
})();
var Bl = "Directory", Pl = "S3Express", _l = "sigv4-s3express", Zn = "X-Amz-S3session-Token", Mo = Zn.toLowerCase();
var $o = class extends mp {
    signWithCredentials(t, o, e) { return P(this, null, function* () { let s = Al(o); t.headers[Mo] = o.sessionToken; let a = this; return Rl(a, s), a.signRequest(t, e ?? {}); }); }
    presignWithCredentials(t, o, e) { return P(this, null, function* () { let s = Al(o); return delete t.headers[Mo], t.headers[Zn] = o.sessionToken, t.query = t.query ?? {}, t.query[Zn] = o.sessionToken, Rl(this, s), this.presign(t, e); }); }
};
function Al(r) { return { accessKeyId: r.accessKeyId, secretAccessKey: r.secretAccessKey, expiration: r.expiration }; }
function Rl(r, t) { let o = setTimeout(() => { throw new Error("SignatureV4S3Express credential override was created but not called."); }, 10), e = r.credentialProvider, s = () => (clearTimeout(o), r.credentialProvider = e, Promise.resolve(t)); r.credentialProvider = s; }
var vl = r => (t, o) => e => P(null, null, function* () { if (o.endpointV2) {
    let s = o.endpointV2, a = s.properties?.authSchemes?.[0]?.name === _l;
    if ((s.properties?.backend === Pl || s.properties?.bucketType === Bl) && (xe(o, "S3_EXPRESS_BUCKET", "J"), o.isS3ExpressBucket = !0), a) {
        let x = e.input.Bucket;
        if (x) {
            let h = yield r.s3ExpressIdentityProvider.getS3ExpressIdentity(yield r.credentials(), { Bucket: x });
            o.s3ExpressIdentity = h, ie.isInstance(e.request) && h.sessionToken && (e.request.headers[Mo] = h.sessionToken);
        }
    }
} return t(e); }), wl = { name: "s3ExpressMiddleware", step: "build", tags: ["S3", "S3_EXPRESS"], override: !0 }, Ic = r => ({ applyToStack: t => { t.add(vl(r), wl); } });
var Ol = (r, t, o, e) => P(null, null, function* () { let s = yield e.signWithCredentials(o, r, {}); if (s.headers["X-Amz-Security-Token"] || s.headers["x-amz-security-token"])
    throw new Error("X-Amz-Security-Token must not be set for s3-express requests."); return s; });
var dE = r => t => { throw t; }, fE = (r, t) => { };
var Tl = r => (t, o) => e => P(null, null, function* () { if (!ie.isInstance(e.request))
    return t(e); let a = Ro(o).selectedHttpAuthScheme; if (!a)
    throw new Error("No HttpAuthScheme was selected: unable to sign request"); let { httpAuthOption: { signingProperties: c = {} }, identity: x, signer: h } = a, k; o.s3ExpressIdentity ? k = yield Ol(o.s3ExpressIdentity, c, e.request, yield r.signer()) : k = yield h.sign(e.request, x, c); let w = yield t(p(u({}, e), { request: k })).catch((h.errorHandler || dE)(c)); return (h.successHandler || fE)(w.response, c), w; }), Lc = r => ({ applyToStack: t => { t.addRelativeTo(Tl(r), Hm); } });
var Dl = (r, { session: t }) => { let [o, e] = t, { forcePathStyle: s, useAccelerateEndpoint: a, disableMultiregionAccessPoints: c, followRegionRedirects: x, s3ExpressIdentityProvider: h, bucketEndpoint: k, expectContinueHeader: w } = r; return Object.assign(r, { forcePathStyle: s ?? !1, useAccelerateEndpoint: a ?? !1, disableMultiregionAccessPoints: c ?? !1, followRegionRedirects: x ?? !1, s3ExpressIdentityProvider: h ?? new Dc(B => P(null, null, function* () { return o().send(new e({ Bucket: B })); })), bucketEndpoint: k ?? !1, expectContinueHeader: w ?? 2097152 }); };
var gE = { CopyObjectCommand: !0, UploadPartCopyCommand: !0, CompleteMultipartUploadCommand: !0 }, xE = 3e3, hE = r => (t, o) => e => P(null, null, function* () { let s = yield t(e), { response: a } = s; if (!Bn.isInstance(a))
    return s; let { statusCode: c, body: x } = a; if (c < 200 || c >= 300 || !(typeof x?.stream == "function" || typeof x?.pipe == "function" || typeof x?.tee == "function"))
    return s; let k = x, w = x; x && typeof x == "object" && !(x instanceof Uint8Array) && ([k, w] = yield Kp(x)), a.body = w; let B = yield CE(k, { streamCollector: R => P(null, null, function* () { return Hp(R, xE); }) }); typeof k?.destroy == "function" && k.destroy(); let D = r.utf8Encoder(B.subarray(B.length - 16)); if (B.length === 0 && gE[o.commandName]) {
    let R = new Error("S3 aborted request");
    throw R.name = "InternalError", R;
} return D && D.endsWith("</Error>") && (a.statusCode = 400), s; }), CE = (r = new Uint8Array, t) => r instanceof Uint8Array ? Promise.resolve(r) : t.streamCollector(r) || Promise.resolve(new Uint8Array), yE = { relation: "after", toMiddleware: "deserializerMiddleware", tags: ["THROW_200_EXCEPTIONS", "S3"], name: "throw200ExceptionsMiddleware", override: !0 }, E = r => ({ applyToStack: t => { t.addRelativeTo(hE(r), yE); } });
var Il = r => typeof r == "string" && r.indexOf("arn:") === 0 && r.split(":").length >= 6;
function Ll(r) { return (t, o) => e => P(null, null, function* () { if (r.bucketEndpoint) {
    let s = o.endpointV2;
    if (s) {
        let a = e.input.Bucket;
        if (typeof a == "string")
            try {
                let c = new URL(a);
                o.endpointV2 = p(u({}, s), { url: c });
            }
            catch (c) {
                let x = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${a} could not be parsed as URL.`;
                throw o.logger?.constructor?.name === "NoOpLogger" ? console.warn(x) : o.logger?.warn?.(x), c;
            }
    }
} return t(e); }); }
var Ml = { name: "bucketEndpointMiddleware", override: !0, relation: "after", toMiddleware: "endpointV2Middleware" };
function EE({ bucketEndpoint: r }) { return t => o => P(null, null, function* () { let { input: { Bucket: e } } = o; if (!r && typeof e == "string" && !Il(e) && e.indexOf("/") >= 0) {
    let s = new Error(`Bucket name shouldn't contain '/', received '${e}'`);
    throw s.name = "InvalidBucketName", s;
} return t(u({}, o)); }); }
var SE = { step: "initialize", tags: ["VALIDATE_BUCKET_NAME"], name: "validateBucketNameMiddleware", override: !0 }, $l = r => ({ applyToStack: t => { t.add(EE(r), SE), t.addRelativeTo(Ll(r), Ml); } });
var Ul = r => Object.assign(r, { eventStreamMarshaller: r.eventStreamSerdeProvider(r) });
var Uo = { CrtSignerV4: null };
var $r = class {
    sigv4aSigner;
    sigv4Signer;
    signerOptions;
    static sigv4aDependency() { return typeof Uo.CrtSignerV4 == "function" ? "crt" : typeof dc.SignatureV4a == "function" ? "js" : "none"; }
    constructor(t) { this.sigv4Signer = new $o(t), this.signerOptions = t; }
    sign(e) { return P(this, arguments, function* (t, o = {}) { return o.signingRegion === "*" ? this.getSigv4aSigner().sign(t, o) : this.sigv4Signer.sign(t, o); }); }
    signWithCredentials(s, a) { return P(this, arguments, function* (t, o, e = {}) { if (e.signingRegion === "*") {
        let c = this.getSigv4aSigner(), x = Uo.CrtSignerV4;
        if (x && c instanceof x)
            return c.signWithCredentials(t, o, e);
        throw new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
    } return this.sigv4Signer.signWithCredentials(t, o, e); }); }
    presign(e) { return P(this, arguments, function* (t, o = {}) { if (o.signingRegion === "*") {
        let s = this.getSigv4aSigner(), a = Uo.CrtSignerV4;
        if (a && s instanceof a)
            return s.presign(t, o);
        throw new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
    } return this.sigv4Signer.presign(t, o); }); }
    presignWithCredentials(s, a) { return P(this, arguments, function* (t, o, e = {}) { if (e.signingRegion === "*")
        throw new Error("Method presignWithCredentials is not supported for [signingRegion=*]."); return this.sigv4Signer.presignWithCredentials(t, o, e); }); }
    getSigv4aSigner() { if (!this.sigv4aSigner) {
        let t = Uo.CrtSignerV4, o = dc.SignatureV4a;
        if (this.signerOptions.runtime === "node") {
            if (!t && !o)
                throw new Error("Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
            if (t && typeof t == "function")
                this.sigv4aSigner = new t(p(u({}, this.signerOptions), { signingAlgorithm: 1 }));
            else if (o && typeof o == "function")
                this.sigv4aSigner = new o(u({}, this.signerOptions));
            else
                throw new Error("Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
        }
        else {
            if (!o || typeof o != "function")
                throw new Error("JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
            this.sigv4aSigner = new o(u({}, this.signerOptions));
        }
    } return this.sigv4aSigner; }
};
var iu = "required", m = "type", S = "rules", l = "conditions";
var C = "argv";
var F = "assign";
var L = "properties", Xe = "backend", Gt = "authSchemes", At = "disableDoubleEncoding", Rt = "signingName", Ht = "signingRegion", M = "headers", au = "signingRegionSet";
var Ce = "isSet", Pt = "booleanEquals", U = "error", es = "aws.partition", Y = "stringEquals", Et = "getAttr", St = "name", pt = "substring", Nl = "bucketSuffix", cu = "parseURL", _ = "endpoint", b = "tree", rs = "aws.isVirtualHostableS3Bucket", os = "{url#scheme}://{Bucket}.{url#authority}{url#path}";
var Gl = "accessPointSuffix", ts = "{url#scheme}://{url#authority}{url#path}", Zd = "hardwareType", Xd = "regionPrefix", jl = "bucketAliasSuffix", nu = "outpostId", xr = "isValidHostLabel", uu = "sigv4a", Fo = "s3-outposts";
var Jd = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}", Qd = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}", zl = "https://{Bucket}.s3.{partitionResult#dnsSuffix}", Yd = "aws.parseArn", tf = "bucketArn", ef = "arnType";
var mu = "s3-object-lambda", rf = "accesspoint", pu = "accessPointName", ql = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}", Hl = "mrapPartition", Fl = "outpostType", Vl = "arnPrefix", of = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}", Kl = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", Wl = "https://s3.{partitionResult#dnsSuffix}", Ur = { [iu]: !1, [m]: "string" }, Nr = { [iu]: !0, default: !1, [m]: "boolean" }, No = { [iu]: !1, [m]: "boolean" }, _e = { fn: Pt, [C]: [{ ref: "Accelerate" }, !0] }, dt = { fn: Pt, [C]: [{ ref: "UseFIPS" }, !0] }, ut = { fn: Pt, [C]: [{ ref: "UseDualStack" }, !0] }, Bt = { fn: Ce, [C]: [{ ref: "Endpoint" }] }, nf = { fn: es, [C]: [{ ref: "Region" }], [F]: "partitionResult" }, Zl = { fn: Y, [C]: [{ fn: Et, [C]: [{ ref: "partitionResult" }, St] }, "aws-cn"] }, jo = { fn: Ce, [C]: [{ ref: "Bucket" }] }, J = { ref: "Bucket" }, Xl = { [l]: [_e], [U]: "S3Express does not support S3 Accelerate.", [m]: U }, Jl = { [l]: [Bt, { fn: cu, [C]: [{ ref: "Endpoint" }], [F]: "url" }], [S]: [{ [l]: [{ fn: Ce, [C]: [{ ref: "DisableS3ExpressSessionAuth" }] }, { fn: Pt, [C]: [{ ref: "DisableS3ExpressSessionAuth" }, !0] }], [S]: [{ [l]: [{ fn: Pt, [C]: [{ fn: Et, [C]: [{ ref: "url" }, "isIp"] }, !0] }], [S]: [{ [l]: [{ fn: "uriEncode", [C]: [J], [F]: "uri_encoded_bucket" }], [S]: [{ [_]: { url: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}", [L]: { [Xe]: "S3Express", [Gt]: [{ [At]: !0, [St]: "sigv4", [Rt]: "s3express", [Ht]: "{Region}" }] }, [M]: {} }, [m]: _ }], [m]: b }], [m]: b }, { [l]: [{ fn: rs, [C]: [J, !1] }], [S]: [{ [_]: { url: os, [L]: { [Xe]: "S3Express", [Gt]: [{ [At]: !0, [St]: "sigv4", [Rt]: "s3express", [Ht]: "{Region}" }] }, [M]: {} }, [m]: _ }], [m]: b }, { [U]: "S3Express bucket name is not a valid virtual hostable name.", [m]: U }], [m]: b }, { [l]: [{ fn: Pt, [C]: [{ fn: Et, [C]: [{ ref: "url" }, "isIp"] }, !0] }], [S]: [{ [l]: [{ fn: "uriEncode", [C]: [J], [F]: "uri_encoded_bucket" }], [S]: [{ [_]: { url: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}", [L]: { [Xe]: "S3Express", [Gt]: [{ [At]: !0, [St]: "sigv4-s3express", [Rt]: "s3express", [Ht]: "{Region}" }] }, [M]: {} }, [m]: _ }], [m]: b }], [m]: b }, { [l]: [{ fn: rs, [C]: [J, !1] }], [S]: [{ [_]: { url: os, [L]: { [Xe]: "S3Express", [Gt]: [{ [At]: !0, [St]: "sigv4-s3express", [Rt]: "s3express", [Ht]: "{Region}" }] }, [M]: {} }, [m]: _ }], [m]: b }, { [U]: "S3Express bucket name is not a valid virtual hostable name.", [m]: U }], [m]: b }, Qt = { fn: cu, [C]: [{ ref: "Endpoint" }], [F]: "url" }, Mc = { fn: Pt, [C]: [{ fn: Et, [C]: [{ ref: "url" }, "isIp"] }, !0] }, sf = { ref: "url" }, af = { fn: "uriEncode", [C]: [J], [F]: "uri_encoded_bucket" }, he = { [Xe]: "S3Express", [Gt]: [{ [At]: !0, [St]: "sigv4", [Rt]: "s3express", [Ht]: "{Region}" }] }, j = {}, cf = { fn: rs, [C]: [J, !1] }, Ql = { [U]: "S3Express bucket name is not a valid virtual hostable name.", [m]: U }, Yl = { fn: Ce, [C]: [{ ref: "UseS3ExpressControlEndpoint" }] }, td = { fn: Pt, [C]: [{ ref: "UseS3ExpressControlEndpoint" }, !0] }, H = { fn: "not", [C]: [Bt] }, Z = { fn: Pt, [C]: [{ ref: "UseDualStack" }, !1] }, V = { fn: Pt, [C]: [{ ref: "UseFIPS" }, !1] }, Xn = { [U]: "Unrecognized S3Express bucket name format.", [m]: U }, ed = { fn: "not", [C]: [jo] }, rd = { ref: Zd }, od = { [l]: [H], [U]: "Expected a endpoint to be specified but no endpoint was found", [m]: U }, Jn = { [Gt]: [{ [At]: !0, [St]: uu, [Rt]: Fo, [au]: ["*"] }, { [At]: !0, [St]: "sigv4", [Rt]: Fo, [Ht]: "{Region}" }] }, $c = { fn: Pt, [C]: [{ ref: "ForcePathStyle" }, !1] }, bE = { ref: "ForcePathStyle" }, _t = { fn: Pt, [C]: [{ ref: "Accelerate" }, !1] }, Ot = { fn: Y, [C]: [{ ref: "Region" }, "aws-global"] }, $t = { [Gt]: [{ [At]: !0, [St]: "sigv4", [Rt]: "s3", [Ht]: "us-east-1" }] }, X = { fn: "not", [C]: [Ot] }, Ut = { fn: Pt, [C]: [{ ref: "UseGlobalEndpoint" }, !0] }, nd = { url: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: { [Gt]: [{ [At]: !0, [St]: "sigv4", [Rt]: "s3", [Ht]: "{Region}" }] }, [M]: {} }, vt = { [Gt]: [{ [At]: !0, [St]: "sigv4", [Rt]: "s3", [Ht]: "{Region}" }] }, Nt = { fn: Pt, [C]: [{ ref: "UseGlobalEndpoint" }, !1] }, sd = { url: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}", [L]: vt, [M]: {} }, id = { url: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}", [L]: vt, [M]: {} }, ad = { url: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: vt, [M]: {} }, Uc = { fn: Pt, [C]: [{ fn: Et, [C]: [sf, "isIp"] }, !1] }, Nc = { url: Jd, [L]: vt, [M]: {} }, su = { url: os, [L]: vt, [M]: {} }, cd = { [_]: su, [m]: _ }, Gc = { url: Qd, [L]: vt, [M]: {} }, ud = { url: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}", [L]: vt, [M]: {} }, Qn = { [U]: "Invalid region: region was not a valid DNS name.", [m]: U }, ce = { ref: tf }, uf = { ref: ef }, jc = { fn: Et, [C]: [ce, "service"] }, lu = { ref: pu }, md = { [l]: [ut], [U]: "S3 Object Lambda does not support Dual-stack", [m]: U }, pd = { [l]: [_e], [U]: "S3 Object Lambda does not support S3 Accelerate", [m]: U }, ld = { [l]: [{ fn: Ce, [C]: [{ ref: "DisableAccessPoints" }] }, { fn: Pt, [C]: [{ ref: "DisableAccessPoints" }, !0] }], [U]: "Access points are not supported for this operation", [m]: U }, zc = { [l]: [{ fn: Ce, [C]: [{ ref: "UseArnRegion" }] }, { fn: Pt, [C]: [{ ref: "UseArnRegion" }, !1] }, { fn: "not", [C]: [{ fn: Y, [C]: [{ fn: Et, [C]: [ce, "region"] }, "{Region}"] }] }], [U]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`", [m]: U }, mf = { fn: Et, [C]: [{ ref: "bucketPartition" }, St] }, pf = { fn: Et, [C]: [ce, "accountId"] }, qc = { [Gt]: [{ [At]: !0, [St]: "sigv4", [Rt]: mu, [Ht]: "{bucketArn#region}" }] }, dd = { [U]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`", [m]: U }, Hc = { [U]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`", [m]: U }, Fc = { [U]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)", [m]: U }, Vc = { [U]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`", [m]: U }, fd = { [U]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.", [m]: U }, gd = { [U]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided", [m]: U }, Go = { [Gt]: [{ [At]: !0, [St]: "sigv4", [Rt]: "s3", [Ht]: "{bucketArn#region}" }] }, xd = { [Gt]: [{ [At]: !0, [St]: uu, [Rt]: Fo, [au]: ["*"] }, { [At]: !0, [St]: "sigv4", [Rt]: Fo, [Ht]: "{bucketArn#region}" }] }, hd = { fn: Yd, [C]: [J] }, Cd = { url: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: vt, [M]: {} }, yd = { url: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: vt, [M]: {} }, Ed = { url: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: vt, [M]: {} }, Kc = { url: of, [L]: vt, [M]: {} }, Sd = { url: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: vt, [M]: {} }, bd = { ref: "UseObjectLambdaEndpoint" }, Wc = { [Gt]: [{ [At]: !0, [St]: "sigv4", [Rt]: mu, [Ht]: "{Region}" }] }, kd = { url: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: vt, [M]: {} }, Bd = { url: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}", [L]: vt, [M]: {} }, Pd = { url: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: vt, [M]: {} }, Zc = { url: ts, [L]: vt, [M]: {} }, _d = { url: "https://s3.{Region}.{partitionResult#dnsSuffix}", [L]: vt, [M]: {} }, Xc = [{ ref: "Region" }], kE = [{ ref: "Endpoint" }], BE = [J], Jc = [_e], Gr = [Bt, Qt], Ad = [{ fn: Ce, [C]: [{ ref: "DisableS3ExpressSessionAuth" }] }, { fn: Pt, [C]: [{ ref: "DisableS3ExpressSessionAuth" }, !0] }], PE = [af], Rd = [cf], Pe = [nf], Qc = [dt, ut], zo = [dt, Z], qo = [V, ut], Ho = [V, Z], vd = [{ fn: pt, [C]: [J, 6, 14, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: pt, [C]: [J, 14, 16, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Ge = [{ [l]: [dt, ut], [_]: { url: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: he, [M]: {} }, [m]: _ }, { [l]: zo, [_]: { url: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [L]: he, [M]: {} }, [m]: _ }, { [l]: qo, [_]: { url: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: he, [M]: {} }, [m]: _ }, { [l]: Ho, [_]: { url: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [L]: he, [M]: {} }, [m]: _ }], wd = [{ fn: pt, [C]: [J, 6, 15, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: pt, [C]: [J, 15, 17, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Od = [{ fn: pt, [C]: [J, 6, 19, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: pt, [C]: [J, 19, 21, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Td = [{ fn: pt, [C]: [J, 6, 20, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: pt, [C]: [J, 20, 22, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Dd = [{ fn: pt, [C]: [J, 6, 26, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: pt, [C]: [J, 26, 28, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], je = [{ [l]: [dt, ut], [_]: { url: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: { [Xe]: "S3Express", [Gt]: [{ [At]: !0, [St]: "sigv4-s3express", [Rt]: "s3express", [Ht]: "{Region}" }] }, [M]: {} }, [m]: _ }, { [l]: zo, [_]: { url: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [L]: { [Xe]: "S3Express", [Gt]: [{ [At]: !0, [St]: "sigv4-s3express", [Rt]: "s3express", [Ht]: "{Region}" }] }, [M]: {} }, [m]: _ }, { [l]: qo, [_]: { url: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: { [Xe]: "S3Express", [Gt]: [{ [At]: !0, [St]: "sigv4-s3express", [Rt]: "s3express", [Ht]: "{Region}" }] }, [M]: {} }, [m]: _ }, { [l]: Ho, [_]: { url: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [L]: { [Xe]: "S3Express", [Gt]: [{ [At]: !0, [St]: "sigv4-s3express", [Rt]: "s3express", [Ht]: "{Region}" }] }, [M]: {} }, [m]: _ }], Id = [J, 0, 7, !0], Ld = [{ fn: pt, [C]: [J, 7, 15, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: pt, [C]: [J, 15, 17, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Md = [{ fn: pt, [C]: [J, 7, 16, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: pt, [C]: [J, 16, 18, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], $d = [{ fn: pt, [C]: [J, 7, 20, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: pt, [C]: [J, 20, 22, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Ud = [{ fn: pt, [C]: [J, 7, 21, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: pt, [C]: [J, 21, 23, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Nd = [{ fn: pt, [C]: [J, 7, 27, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: pt, [C]: [J, 27, 29, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], _E = [jo], Gd = [{ fn: xr, [C]: [{ ref: nu }, !1] }], jd = [{ fn: Y, [C]: [{ ref: Xd }, "beta"] }], AE = ["*"], zd = [{ fn: xr, [C]: [{ ref: "Region" }, !1] }], or = [{ fn: Y, [C]: [{ ref: "Region" }, "us-east-1"] }], Yc = [{ fn: Y, [C]: [uf, rf] }], qd = [{ fn: Et, [C]: [ce, "resourceId[1]"], [F]: pu }, { fn: "not", [C]: [{ fn: Y, [C]: [lu, ""] }] }], RE = [ce, "resourceId[1]"], Hd = [ut], tu = [{ fn: "not", [C]: [{ fn: Y, [C]: [{ fn: Et, [C]: [ce, "region"] }, ""] }] }], Fd = [{ fn: "not", [C]: [{ fn: Ce, [C]: [{ fn: Et, [C]: [ce, "resourceId[2]"] }] }] }], vE = [ce, "resourceId[2]"], eu = [{ fn: es, [C]: [{ fn: Et, [C]: [ce, "region"] }], [F]: "bucketPartition" }], Vd = [{ fn: Y, [C]: [mf, { fn: Et, [C]: [{ ref: "partitionResult" }, St] }] }], ru = [{ fn: xr, [C]: [{ fn: Et, [C]: [ce, "region"] }, !0] }], ou = [{ fn: xr, [C]: [pf, !1] }], Kd = [{ fn: xr, [C]: [lu, !1] }], Yn = [dt], Wd = [{ fn: xr, [C]: [{ ref: "Region" }, !0] }], wE = { version: "1.0", parameters: { Bucket: Ur, Region: Ur, UseFIPS: Nr, UseDualStack: Nr, Endpoint: Ur, ForcePathStyle: Nr, Accelerate: Nr, UseGlobalEndpoint: Nr, UseObjectLambdaEndpoint: No, Key: Ur, Prefix: Ur, CopySource: Ur, DisableAccessPoints: No, DisableMultiRegionAccessPoints: Nr, UseArnRegion: No, UseS3ExpressControlEndpoint: No, DisableS3ExpressSessionAuth: No }, [S]: [{ [l]: [{ fn: Ce, [C]: Xc }], [S]: [{ [l]: [_e, dt], error: "Accelerate cannot be used with FIPS", [m]: U }, { [l]: [ut, Bt], error: "Cannot set dual-stack in combination with a custom endpoint.", [m]: U }, { [l]: [Bt, dt], error: "A custom endpoint cannot be combined with FIPS", [m]: U }, { [l]: [Bt, _e], error: "A custom endpoint cannot be combined with S3 Accelerate", [m]: U }, { [l]: [dt, nf, Zl], error: "Partition does not support FIPS", [m]: U }, { [l]: [jo, { fn: pt, [C]: [J, 0, 6, !0], [F]: Nl }, { fn: Y, [C]: [{ ref: Nl }, "--x-s3"] }], [S]: [Xl, Jl, { [l]: [Yl, td], [S]: [{ [l]: Pe, [S]: [{ [l]: [af, H], [S]: [{ [l]: Qc, endpoint: { url: "https://s3express-control-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: he, [M]: j }, [m]: _ }, { [l]: zo, endpoint: { url: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: he, [M]: j }, [m]: _ }, { [l]: qo, endpoint: { url: "https://s3express-control.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: he, [M]: j }, [m]: _ }, { [l]: Ho, endpoint: { url: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: he, [M]: j }, [m]: _ }], [m]: b }], [m]: b }], [m]: b }, { [l]: Rd, [S]: [{ [l]: Pe, [S]: [{ [l]: Ad, [S]: [{ [l]: vd, [S]: Ge, [m]: b }, { [l]: wd, [S]: Ge, [m]: b }, { [l]: Od, [S]: Ge, [m]: b }, { [l]: Td, [S]: Ge, [m]: b }, { [l]: Dd, [S]: Ge, [m]: b }, Xn], [m]: b }, { [l]: vd, [S]: je, [m]: b }, { [l]: wd, [S]: je, [m]: b }, { [l]: Od, [S]: je, [m]: b }, { [l]: Td, [S]: je, [m]: b }, { [l]: Dd, [S]: je, [m]: b }, Xn], [m]: b }], [m]: b }, Ql], [m]: b }, { [l]: [jo, { fn: pt, [C]: Id, [F]: Gl }, { fn: Y, [C]: [{ ref: Gl }, "--xa-s3"] }], [S]: [Xl, Jl, { [l]: Rd, [S]: [{ [l]: Pe, [S]: [{ [l]: Ad, [S]: [{ [l]: Ld, [S]: Ge, [m]: b }, { [l]: Md, [S]: Ge, [m]: b }, { [l]: $d, [S]: Ge, [m]: b }, { [l]: Ud, [S]: Ge, [m]: b }, { [l]: Nd, [S]: Ge, [m]: b }, Xn], [m]: b }, { [l]: Ld, [S]: je, [m]: b }, { [l]: Md, [S]: je, [m]: b }, { [l]: $d, [S]: je, [m]: b }, { [l]: Ud, [S]: je, [m]: b }, { [l]: Nd, [S]: je, [m]: b }, Xn], [m]: b }], [m]: b }, Ql], [m]: b }, { [l]: [ed, Yl, td], [S]: [{ [l]: Pe, [S]: [{ [l]: Gr, endpoint: { url: ts, [L]: he, [M]: j }, [m]: _ }, { [l]: Qc, endpoint: { url: "https://s3express-control-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: he, [M]: j }, [m]: _ }, { [l]: zo, endpoint: { url: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}", [L]: he, [M]: j }, [m]: _ }, { [l]: qo, endpoint: { url: "https://s3express-control.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: he, [M]: j }, [m]: _ }, { [l]: Ho, endpoint: { url: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}", [L]: he, [M]: j }, [m]: _ }], [m]: b }], [m]: b }, { [l]: [jo, { fn: pt, [C]: [J, 49, 50, !0], [F]: Zd }, { fn: pt, [C]: [J, 8, 12, !0], [F]: Xd }, { fn: pt, [C]: Id, [F]: jl }, { fn: pt, [C]: [J, 32, 49, !0], [F]: nu }, { fn: es, [C]: Xc, [F]: "regionPartition" }, { fn: Y, [C]: [{ ref: jl }, "--op-s3"] }], [S]: [{ [l]: Gd, [S]: [{ [l]: [{ fn: Y, [C]: [rd, "e"] }], [S]: [{ [l]: jd, [S]: [od, { [l]: Gr, endpoint: { url: "https://{Bucket}.ec2.{url#authority}", [L]: Jn, [M]: j }, [m]: _ }], [m]: b }, { endpoint: { url: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [L]: Jn, [M]: j }, [m]: _ }], [m]: b }, { [l]: [{ fn: Y, [C]: [rd, "o"] }], [S]: [{ [l]: jd, [S]: [od, { [l]: Gr, endpoint: { url: "https://{Bucket}.op-{outpostId}.{url#authority}", [L]: Jn, [M]: j }, [m]: _ }], [m]: b }, { endpoint: { url: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [L]: Jn, [M]: j }, [m]: _ }], [m]: b }, { error: 'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"', [m]: U }], [m]: b }, { error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.", [m]: U }], [m]: b }, { [l]: _E, [S]: [{ [l]: [Bt, { fn: "not", [C]: [{ fn: Ce, [C]: [{ fn: cu, [C]: kE }] }] }], error: "Custom endpoint `{Endpoint}` was not a valid URI", [m]: U }, { [l]: [$c, cf], [S]: [{ [l]: Pe, [S]: [{ [l]: zd, [S]: [{ [l]: [_e, Zl], error: "S3 Accelerate cannot be used in this region", [m]: U }, { [l]: [ut, dt, _t, H, Ot], endpoint: { url: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [L]: $t, [M]: j }, [m]: _ }, { [l]: [ut, dt, _t, H, X, Ut], [S]: [{ endpoint: nd, [m]: _ }], [m]: b }, { [l]: [ut, dt, _t, H, X, Nt], endpoint: nd, [m]: _ }, { [l]: [Z, dt, _t, H, Ot], endpoint: { url: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}", [L]: $t, [M]: j }, [m]: _ }, { [l]: [Z, dt, _t, H, X, Ut], [S]: [{ endpoint: sd, [m]: _ }], [m]: b }, { [l]: [Z, dt, _t, H, X, Nt], endpoint: sd, [m]: _ }, { [l]: [ut, V, _e, H, Ot], endpoint: { url: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}", [L]: $t, [M]: j }, [m]: _ }, { [l]: [ut, V, _e, H, X, Ut], [S]: [{ endpoint: id, [m]: _ }], [m]: b }, { [l]: [ut, V, _e, H, X, Nt], endpoint: id, [m]: _ }, { [l]: [ut, V, _t, H, Ot], endpoint: { url: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [L]: $t, [M]: j }, [m]: _ }, { [l]: [ut, V, _t, H, X, Ut], [S]: [{ endpoint: ad, [m]: _ }], [m]: b }, { [l]: [ut, V, _t, H, X, Nt], endpoint: ad, [m]: _ }, { [l]: [Z, V, _t, Bt, Qt, Mc, Ot], endpoint: { url: Jd, [L]: $t, [M]: j }, [m]: _ }, { [l]: [Z, V, _t, Bt, Qt, Uc, Ot], endpoint: { url: os, [L]: $t, [M]: j }, [m]: _ }, { [l]: [Z, V, _t, Bt, Qt, Mc, X, Ut], [S]: [{ [l]: or, endpoint: Nc, [m]: _ }, { endpoint: Nc, [m]: _ }], [m]: b }, { [l]: [Z, V, _t, Bt, Qt, Uc, X, Ut], [S]: [{ [l]: or, endpoint: su, [m]: _ }, cd], [m]: b }, { [l]: [Z, V, _t, Bt, Qt, Mc, X, Nt], endpoint: Nc, [m]: _ }, { [l]: [Z, V, _t, Bt, Qt, Uc, X, Nt], endpoint: su, [m]: _ }, { [l]: [Z, V, _e, H, Ot], endpoint: { url: Qd, [L]: $t, [M]: j }, [m]: _ }, { [l]: [Z, V, _e, H, X, Ut], [S]: [{ [l]: or, endpoint: Gc, [m]: _ }, { endpoint: Gc, [m]: _ }], [m]: b }, { [l]: [Z, V, _e, H, X, Nt], endpoint: Gc, [m]: _ }, { [l]: [Z, V, _t, H, Ot], endpoint: { url: zl, [L]: $t, [M]: j }, [m]: _ }, { [l]: [Z, V, _t, H, X, Ut], [S]: [{ [l]: or, endpoint: { url: zl, [L]: vt, [M]: j }, [m]: _ }, { endpoint: ud, [m]: _ }], [m]: b }, { [l]: [Z, V, _t, H, X, Nt], endpoint: ud, [m]: _ }], [m]: b }, Qn], [m]: b }], [m]: b }, { [l]: [Bt, Qt, { fn: Y, [C]: [{ fn: Et, [C]: [sf, "scheme"] }, "http"] }, { fn: rs, [C]: [J, !0] }, $c, V, Z, _t], [S]: [{ [l]: Pe, [S]: [{ [l]: zd, [S]: [cd], [m]: b }, Qn], [m]: b }], [m]: b }, { [l]: [$c, { fn: Yd, [C]: BE, [F]: tf }], [S]: [{ [l]: [{ fn: Et, [C]: [ce, "resourceId[0]"], [F]: ef }, { fn: "not", [C]: [{ fn: Y, [C]: [uf, ""] }] }], [S]: [{ [l]: [{ fn: Y, [C]: [jc, mu] }], [S]: [{ [l]: Yc, [S]: [{ [l]: qd, [S]: [md, pd, { [l]: tu, [S]: [ld, { [l]: Fd, [S]: [zc, { [l]: eu, [S]: [{ [l]: Pe, [S]: [{ [l]: Vd, [S]: [{ [l]: ru, [S]: [{ [l]: [{ fn: Y, [C]: [pf, ""] }], error: "Invalid ARN: Missing account id", [m]: U }, { [l]: ou, [S]: [{ [l]: Kd, [S]: [{ [l]: Gr, endpoint: { url: ql, [L]: qc, [M]: j }, [m]: _ }, { [l]: Yn, endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: qc, [M]: j }, [m]: _ }, { endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: qc, [M]: j }, [m]: _ }], [m]: b }, dd], [m]: b }, Hc], [m]: b }, Fc], [m]: b }, Vc], [m]: b }], [m]: b }], [m]: b }, fd], [m]: b }, { error: "Invalid ARN: bucket ARN is missing a region", [m]: U }], [m]: b }, gd], [m]: b }, { error: "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`", [m]: U }], [m]: b }, { [l]: Yc, [S]: [{ [l]: qd, [S]: [{ [l]: tu, [S]: [{ [l]: Yc, [S]: [{ [l]: tu, [S]: [ld, { [l]: Fd, [S]: [zc, { [l]: eu, [S]: [{ [l]: Pe, [S]: [{ [l]: [{ fn: Y, [C]: [mf, "{partitionResult#name}"] }], [S]: [{ [l]: ru, [S]: [{ [l]: [{ fn: Y, [C]: [jc, "s3"] }], [S]: [{ [l]: ou, [S]: [{ [l]: Kd, [S]: [{ [l]: Jc, error: "Access Points do not support S3 Accelerate", [m]: U }, { [l]: Qc, endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: Go, [M]: j }, [m]: _ }, { [l]: zo, endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: Go, [M]: j }, [m]: _ }, { [l]: qo, endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: Go, [M]: j }, [m]: _ }, { [l]: [V, Z, Bt, Qt], endpoint: { url: ql, [L]: Go, [M]: j }, [m]: _ }, { [l]: Ho, endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: Go, [M]: j }, [m]: _ }], [m]: b }, dd], [m]: b }, Hc], [m]: b }, { error: "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}", [m]: U }], [m]: b }, Fc], [m]: b }, Vc], [m]: b }], [m]: b }], [m]: b }, fd], [m]: b }], [m]: b }], [m]: b }, { [l]: [{ fn: xr, [C]: [lu, !0] }], [S]: [{ [l]: Hd, error: "S3 MRAP does not support dual-stack", [m]: U }, { [l]: Yn, error: "S3 MRAP does not support FIPS", [m]: U }, { [l]: Jc, error: "S3 MRAP does not support S3 Accelerate", [m]: U }, { [l]: [{ fn: Pt, [C]: [{ ref: "DisableMultiRegionAccessPoints" }, !0] }], error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.", [m]: U }, { [l]: [{ fn: es, [C]: Xc, [F]: Hl }], [S]: [{ [l]: [{ fn: Y, [C]: [{ fn: Et, [C]: [{ ref: Hl }, St] }, { fn: Et, [C]: [ce, "partition"] }] }], [S]: [{ endpoint: { url: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}", [L]: { [Gt]: [{ [At]: !0, name: uu, [Rt]: "s3", [au]: AE }] }, [M]: j }, [m]: _ }], [m]: b }, { error: "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`", [m]: U }], [m]: b }], [m]: b }, { error: "Invalid Access Point Name", [m]: U }], [m]: b }, gd], [m]: b }, { [l]: [{ fn: Y, [C]: [jc, Fo] }], [S]: [{ [l]: Hd, error: "S3 Outposts does not support Dual-stack", [m]: U }, { [l]: Yn, error: "S3 Outposts does not support FIPS", [m]: U }, { [l]: Jc, error: "S3 Outposts does not support S3 Accelerate", [m]: U }, { [l]: [{ fn: Ce, [C]: [{ fn: Et, [C]: [ce, "resourceId[4]"] }] }], error: "Invalid Arn: Outpost Access Point ARN contains sub resources", [m]: U }, { [l]: [{ fn: Et, [C]: RE, [F]: nu }], [S]: [{ [l]: Gd, [S]: [zc, { [l]: eu, [S]: [{ [l]: Pe, [S]: [{ [l]: Vd, [S]: [{ [l]: ru, [S]: [{ [l]: ou, [S]: [{ [l]: [{ fn: Et, [C]: vE, [F]: Fl }], [S]: [{ [l]: [{ fn: Et, [C]: [ce, "resourceId[3]"], [F]: pu }], [S]: [{ [l]: [{ fn: Y, [C]: [{ ref: Fl }, rf] }], [S]: [{ [l]: Gr, endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}", [L]: xd, [M]: j }, [m]: _ }, { endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: xd, [M]: j }, [m]: _ }], [m]: b }, { error: "Expected an outpost type `accesspoint`, found {outpostType}", [m]: U }], [m]: b }, { error: "Invalid ARN: expected an access point name", [m]: U }], [m]: b }, { error: "Invalid ARN: Expected a 4-component resource", [m]: U }], [m]: b }, Hc], [m]: b }, Fc], [m]: b }, Vc], [m]: b }], [m]: b }], [m]: b }, { error: "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`", [m]: U }], [m]: b }, { error: "Invalid ARN: The Outpost Id was not set", [m]: U }], [m]: b }, { error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})", [m]: U }], [m]: b }, { error: "Invalid ARN: No ARN type specified", [m]: U }], [m]: b }, { [l]: [{ fn: pt, [C]: [J, 0, 4, !1], [F]: Vl }, { fn: Y, [C]: [{ ref: Vl }, "arn:"] }, { fn: "not", [C]: [{ fn: Ce, [C]: [hd] }] }], error: "Invalid ARN: `{Bucket}` was not a valid ARN", [m]: U }, { [l]: [{ fn: Pt, [C]: [bE, !0] }, hd], error: "Path-style addressing cannot be used with ARN buckets", [m]: U }, { [l]: PE, [S]: [{ [l]: Pe, [S]: [{ [l]: [_t], [S]: [{ [l]: [ut, H, dt, Ot], endpoint: { url: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: $t, [M]: j }, [m]: _ }, { [l]: [ut, H, dt, X, Ut], [S]: [{ endpoint: Cd, [m]: _ }], [m]: b }, { [l]: [ut, H, dt, X, Nt], endpoint: Cd, [m]: _ }, { [l]: [Z, H, dt, Ot], endpoint: { url: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: $t, [M]: j }, [m]: _ }, { [l]: [Z, H, dt, X, Ut], [S]: [{ endpoint: yd, [m]: _ }], [m]: b }, { [l]: [Z, H, dt, X, Nt], endpoint: yd, [m]: _ }, { [l]: [ut, H, V, Ot], endpoint: { url: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: $t, [M]: j }, [m]: _ }, { [l]: [ut, H, V, X, Ut], [S]: [{ endpoint: Ed, [m]: _ }], [m]: b }, { [l]: [ut, H, V, X, Nt], endpoint: Ed, [m]: _ }, { [l]: [Z, Bt, Qt, V, Ot], endpoint: { url: of, [L]: $t, [M]: j }, [m]: _ }, { [l]: [Z, Bt, Qt, V, X, Ut], [S]: [{ [l]: or, endpoint: Kc, [m]: _ }, { endpoint: Kc, [m]: _ }], [m]: b }, { [l]: [Z, Bt, Qt, V, X, Nt], endpoint: Kc, [m]: _ }, { [l]: [Z, H, V, Ot], endpoint: { url: Kl, [L]: $t, [M]: j }, [m]: _ }, { [l]: [Z, H, V, X, Ut], [S]: [{ [l]: or, endpoint: { url: Kl, [L]: vt, [M]: j }, [m]: _ }, { endpoint: Sd, [m]: _ }], [m]: b }, { [l]: [Z, H, V, X, Nt], endpoint: Sd, [m]: _ }], [m]: b }, { error: "Path-style addressing cannot be used with S3 Accelerate", [m]: U }], [m]: b }], [m]: b }], [m]: b }, { [l]: [{ fn: Ce, [C]: [bd] }, { fn: Pt, [C]: [bd, !0] }], [S]: [{ [l]: Pe, [S]: [{ [l]: Wd, [S]: [md, pd, { [l]: Gr, endpoint: { url: ts, [L]: Wc, [M]: j }, [m]: _ }, { [l]: Yn, endpoint: { url: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}", [L]: Wc, [M]: j }, [m]: _ }, { endpoint: { url: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}", [L]: Wc, [M]: j }, [m]: _ }], [m]: b }, Qn], [m]: b }], [m]: b }, { [l]: [ed], [S]: [{ [l]: Pe, [S]: [{ [l]: Wd, [S]: [{ [l]: [dt, ut, H, Ot], endpoint: { url: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [L]: $t, [M]: j }, [m]: _ }, { [l]: [dt, ut, H, X, Ut], [S]: [{ endpoint: kd, [m]: _ }], [m]: b }, { [l]: [dt, ut, H, X, Nt], endpoint: kd, [m]: _ }, { [l]: [dt, Z, H, Ot], endpoint: { url: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}", [L]: $t, [M]: j }, [m]: _ }, { [l]: [dt, Z, H, X, Ut], [S]: [{ endpoint: Bd, [m]: _ }], [m]: b }, { [l]: [dt, Z, H, X, Nt], endpoint: Bd, [m]: _ }, { [l]: [V, ut, H, Ot], endpoint: { url: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [L]: $t, [M]: j }, [m]: _ }, { [l]: [V, ut, H, X, Ut], [S]: [{ endpoint: Pd, [m]: _ }], [m]: b }, { [l]: [V, ut, H, X, Nt], endpoint: Pd, [m]: _ }, { [l]: [V, Z, Bt, Qt, Ot], endpoint: { url: ts, [L]: $t, [M]: j }, [m]: _ }, { [l]: [V, Z, Bt, Qt, X, Ut], [S]: [{ [l]: or, endpoint: Zc, [m]: _ }, { endpoint: Zc, [m]: _ }], [m]: b }, { [l]: [V, Z, Bt, Qt, X, Nt], endpoint: Zc, [m]: _ }, { [l]: [V, Z, H, Ot], endpoint: { url: Wl, [L]: $t, [M]: j }, [m]: _ }, { [l]: [V, Z, H, X, Ut], [S]: [{ [l]: or, endpoint: { url: Wl, [L]: vt, [M]: j }, [m]: _ }, { endpoint: _d, [m]: _ }], [m]: b }, { [l]: [V, Z, H, X, Nt], endpoint: _d, [m]: _ }], [m]: b }, Qn], [m]: b }], [m]: b }], [m]: b }, { error: "A region must be set when sending requests to S3.", [m]: U }] }, lf = wE;
var OE = new ep({ size: 50, params: ["Accelerate", "Bucket", "DisableAccessPoints", "DisableMultiRegionAccessPoints", "DisableS3ExpressSessionAuth", "Endpoint", "ForcePathStyle", "Region", "UseArnRegion", "UseDualStack", "UseFIPS", "UseGlobalEndpoint", "UseObjectLambdaEndpoint", "UseS3ExpressControlEndpoint"] }), ns = (r, t = {}) => OE.get(r, () => op(lf, { endpointParams: r, logger: t.logger }));
rp.aws = np;
var TE = r => (t, o, e) => P(null, null, function* () { if (!e)
    throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`"); let s = yield r(t, o, e), a = Ro(o)?.commandInstance?.constructor?.getEndpointParameterInstructions; if (!a)
    throw new Error(`getEndpointParameterInstructions() is not defined on \`${o.commandName}\``); let c = yield Ap(e, { getEndpointParameterInstructions: a }, t); return Object.assign(s, c); }), DE = (r, t, o) => P(null, null, function* () { return { operation: Ro(t).operation, region: (yield vr(r.region)()) || (() => { throw new Error("expected `region` to be configured for `aws.auth#sigv4`"); })() }; }), df = TE(DE);
function ff(r) { return { schemeId: "aws.auth#sigv4", signingProperties: { name: "s3", region: r.region }, propertiesExtractor: (t, o) => ({ signingProperties: { config: t, context: o } }) }; }
function gf(r) { return { schemeId: "aws.auth#sigv4a", signingProperties: { name: "s3", region: r.region }, propertiesExtractor: (t, o) => ({ signingProperties: { config: t, context: o } }) }; }
var IE = (r, t, o) => s => { let c = r(s).properties?.authSchemes; if (!c)
    return t(s); let x = []; for (let k of c) {
    let h = k, { name: w, properties: B = {} } = h, D = $m(h, ["name", "properties"]), R = w.toLowerCase();
    w !== R && console.warn(`HttpAuthScheme has been normalized with lowercasing: \`${w}\` to \`${R}\``);
    let $;
    if (R === "sigv4a") {
        $ = "aws.auth#sigv4a";
        let et = c.find(ct => { let rt = ct.name.toLowerCase(); return rt !== "sigv4a" && rt.startsWith("sigv4"); });
        if ($r.sigv4aDependency() === "none" && et)
            continue;
    }
    else if (R.startsWith("sigv4"))
        $ = "aws.auth#sigv4";
    else
        throw new Error(`Unknown HttpAuthScheme found in \`@smithy.rules#endpointRuleSet\`: \`${R}\``);
    let G = o[$];
    if (!G)
        throw new Error(`Could not find HttpAuthOption create function for \`${$}\``);
    let q = G(s);
    q.schemeId = $, q.signingProperties = u(u(u({}, q.signingProperties || {}), D), B), x.push(q);
} return x; }, LE = r => { let t = []; switch (r.operation) {
    default: t.push(ff(r)), t.push(gf(r));
} return t; }, xf = IE(ns, LE, { "aws.auth#sigv4": ff, "aws.auth#sigv4a": gf }), hf = r => { let t = pp(r), o = cp(t); return Object.assign(o, { authSchemePreference: vr(r.authSchemePreference ?? []) }); };
var Cf = r => Object.assign(r, { useFipsEndpoint: r.useFipsEndpoint ?? !1, useDualstackEndpoint: r.useDualstackEndpoint ?? !1, forcePathStyle: r.forcePathStyle ?? !1, useAccelerateEndpoint: r.useAccelerateEndpoint ?? !1, useGlobalEndpoint: r.useGlobalEndpoint ?? !1, disableMultiregionAccessPoints: r.disableMultiregionAccessPoints ?? !1, defaultSigningName: "s3", clientContextParams: r.clientContextParams ?? {} }), g = { ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" }, UseArnRegion: { type: "clientContextParams", name: "useArnRegion" }, DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" }, Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" }, DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" }, UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
var wt = class r extends gp {
    constructor(t) { super(t), Object.setPrototypeOf(this, r.prototype); }
};
var ss = class r extends wt {
    name = "NoSuchUpload";
    $fault = "client";
    constructor(t) { super(u({ name: "NoSuchUpload", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, is = class r extends wt {
    name = "ObjectNotInActiveTierError";
    $fault = "client";
    constructor(t) { super(u({ name: "ObjectNotInActiveTierError", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, as = class r extends wt {
    name = "BucketAlreadyExists";
    $fault = "client";
    constructor(t) { super(u({ name: "BucketAlreadyExists", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, cs = class r extends wt {
    name = "BucketAlreadyOwnedByYou";
    $fault = "client";
    constructor(t) { super(u({ name: "BucketAlreadyOwnedByYou", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, us = class r extends wt {
    name = "NoSuchBucket";
    $fault = "client";
    constructor(t) { super(u({ name: "NoSuchBucket", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, ms = class r extends wt {
    name = "InvalidObjectState";
    $fault = "client";
    StorageClass;
    AccessTier;
    constructor(t) { super(u({ name: "InvalidObjectState", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype), this.StorageClass = t.StorageClass, this.AccessTier = t.AccessTier; }
}, ps = class r extends wt {
    name = "NoSuchKey";
    $fault = "client";
    constructor(t) { super(u({ name: "NoSuchKey", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, ls = class r extends wt {
    name = "NotFound";
    $fault = "client";
    constructor(t) { super(u({ name: "NotFound", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, ds = class r extends wt {
    name = "EncryptionTypeMismatch";
    $fault = "client";
    constructor(t) { super(u({ name: "EncryptionTypeMismatch", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, fs = class r extends wt {
    name = "InvalidRequest";
    $fault = "client";
    constructor(t) { super(u({ name: "InvalidRequest", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, gs = class r extends wt {
    name = "InvalidWriteOffset";
    $fault = "client";
    constructor(t) { super(u({ name: "InvalidWriteOffset", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, xs = class r extends wt {
    name = "TooManyParts";
    $fault = "client";
    constructor(t) { super(u({ name: "TooManyParts", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, hs = class r extends wt {
    name = "IdempotencyParameterMismatch";
    $fault = "client";
    constructor(t) { super(u({ name: "IdempotencyParameterMismatch", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, Cs = class r extends wt {
    name = "ObjectAlreadyInActiveTierError";
    $fault = "client";
    constructor(t) { super(u({ name: "ObjectAlreadyInActiveTierError", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
};
var ME = "Account", $E = "AnalyticsAndOperator", ys = "AccelerateConfiguration", Gs = "AccessControlList", jr = "ACL", vf = "AnalyticsConfigurationList", hr = "AccessControlPolicy", wf = "AccessControlTranslation", Vo = "AnalyticsConfiguration", Of = "AbortDate", UE = "AnalyticsExportDestination", NE = "AnalyticsFilter", GE = "AllowedHeaders", jE = "AllowedHeader", zE = "AccountId", Tf = "AbortIncompleteMultipartUpload", yf = "AccessKeyId", qE = "AllowedMethods", HE = "AbortMultipartUpload", FE = "AbortMultipartUploadOutput", VE = "AbortMultipartUploadRequest", KE = "AllowedMethod", WE = "AllowedOrigins", ZE = "AllowedOrigin", XE = "AccessPointAlias", Df = "AccessPointArn", JE = "AllowQuotedRecordDelimiter", Su = "AcceptRanges", If = "AbortRuleId", Es = "AbacStatus", QE = "AnalyticsS3BucketDestination", YE = "ApplyServerSideEncryptionByDefault", tS = "ArchiveStatus", Lf = "AccessTier", Xo = "And", A = "Bucket", bu = "BucketArn", eS = "BucketAlreadyExists", rS = "BucketAccountId", oS = "BucketAlreadyOwnedByYou", Mf = "BlockedEncryptionTypes", ku = "BypassGovernanceRetention", nS = "BucketInfo", Yt = "BucketKeyEnabled", sS = "BucketLifecycleConfiguration", iS = "BucketLocationName", Ss = "BucketLoggingStatus", aS = "BucketLocationType", cS = "BucketName", $f = "BytesProcessed", Ef = "BlockPublicAcls", Sf = "BlockPublicPolicy", Bu = "BucketRegion", Uf = "BytesReturned", Nf = "BytesScanned", Jo = "Body", Pu = "Buckets", Gf = "Checksum", Q = "ChecksumAlgorithm", uS = "CannedACL", mS = "CreateBucket", du = "CreateBucketConfiguration", pS = "CreateBucketMetadataConfiguration", lS = "CreateBucketMetadataConfigurationRequest", dS = "CreateBucketMetadataTableConfiguration", fS = "CreateBucketMetadataTableConfigurationRequest", gS = "CreateBucketOutput", xS = "CreateBucketRequest", zr = "CacheControl", te = "ChecksumCRC32", ee = "ChecksumCRC32C", re = "ChecksumCRC64NVME", Qo = "Cache-Control", hS = "CreationDate", Yo = "Content-Disposition", qr = "ContentDisposition", CS = "ContinuationEvent", tn = "Content-Encoding", Hr = "ContentEncoding", yS = "CloudFunction", ES = "CloudFunctionConfiguration", Fr = "ContentLanguage", en = "Content-Language", rn = "Content-Length", on = "ContentLength", ht = "Content-MD5", Ct = "ContentMD5", SS = "CompletedMultipartUpload", bS = "CompleteMultipartUploadOutput", kS = "CreateMultipartUploadOutput", BS = "CompleteMultipartUploadResult", PS = "CompleteMultipartUploadRequest", _S = "CreateMultipartUploadRequest", jf = "CompleteMultipartUpload", AS = "CreateMultipartUpload", zf = "ChecksumMode", RS = "CopyObject", vS = "CopyObjectOutput", qf = "CopyObjectResult", bs = "CORSConfiguration", _u = "CORSRules", Au = "CORSRule", wS = "CopyObjectRequest", OS = "CommonPrefix", TS = "CommonPrefixList", DS = "CompletedPartList", Hf = "CopyPartResult", IS = "CompletedPart", js = "CommonPrefixes", Ru = "ContentRange", LS = "ConfirmRemoveSelfBucketAccess", Ff = "Content-Range", Vf = "CopySource", oe = "ChecksumSHA1", ne = "ChecksumSHA256", Kf = "CopySourceIfMatch", Wf = "CopySourceIfModifiedSince", Zf = "CopySourceIfNoneMatch", Xf = "CopySourceIfUnmodifiedSince", MS = "CreateSessionOutput", $S = "CreateSessionResult", US = "CopySourceRange", NS = "CreateSessionRequest", Jf = "CopySourceSSECustomerAlgorithm", vu = "CopySourceSSECustomerKey", Qf = "CopySourceSSECustomerKeyMD5", Yf = "CSV", tg = "CopySourceVersionId", GS = "CSVInput", jS = "CSVOutput", wu = "ConfigurationState", zS = "CreateSession", ye = "ChecksumType", nn = "Content-Type", qS = "ClientToken", Vr = "ContentType", HS = "CompressionType", ue = "ContinuationToken", eg = "Condition", FS = "Code", VS = "Comments", rg = "Contents", KS = "Cont", bf = "Credentials", Kr = "Days", WS = "DaysAfterInitiation", ZS = "DeleteBucket", XS = "DeleteBucketAnalyticsConfiguration", JS = "DeleteBucketAnalyticsConfigurationRequest", QS = "DeleteBucketCors", YS = "DeleteBucketCorsRequest", tb = "DeleteBucketEncryption", eb = "DeleteBucketEncryptionRequest", rb = "DeleteBucketInventoryConfiguration", ob = "DeleteBucketInventoryConfigurationRequest", nb = "DeleteBucketIntelligentTieringConfiguration", sb = "DeleteBucketIntelligentTieringConfigurationRequest", ib = "DeleteBucketLifecycle", ab = "DeleteBucketLifecycleRequest", cb = "DeleteBucketMetadataConfiguration", ub = "DeleteBucketMetadataConfigurationRequest", mb = "DeleteBucketMetricsConfigurationRequest", pb = "DeleteBucketMetricsConfiguration", lb = "DeleteBucketMetadataTableConfiguration", db = "DeleteBucketMetadataTableConfigurationRequest", fb = "DeleteBucketOwnershipControls", gb = "DeleteBucketOwnershipControlsRequest", xb = "DeleteBucketPolicy", hb = "DeleteBucketPolicyRequest", Cb = "DeleteBucketRequest", yb = "DeleteBucketReplicationRequest", Eb = "DeleteBucketReplication", Sb = "DeleteBucketTagging", bb = "DeleteBucketTaggingRequest", kb = "DeleteBucketWebsite", Bb = "DeleteBucketWebsiteRequest", Pb = "DataExport", _b = "DestinationIfMatch", Ab = "DestinationIfModifiedSince", Rb = "DestinationIfNoneMatch", vb = "DestinationIfUnmodifiedSince", Cr = "DeleteMarker", wb = "DeleteMarkerEntry", og = "DeleteMarkerReplication", Ob = "DeleteMarkerVersionId", ng = "DeleteMarkers", Ou = "DisplayName", Tb = "DeletedObject", Db = "DeleteObjectOutput", Ib = "DeleteObjectsOutput", Lb = "DeleteObjectRequest", Mb = "DeleteObjectsRequest", $b = "DeleteObjectTagging", Ub = "DeleteObjectTaggingOutput", Nb = "DeleteObjectTaggingRequest", Gb = "DeletedObjects", jb = "DeleteObject", zb = "DeleteObjects", qb = "DeletePublicAccessBlock", Hb = "DeletePublicAccessBlockRequest", Fb = "DataRedundancy", sg = "DefaultRetention", Vb = "DeleteResult", ig = "DestinationResult", ag = "Date", fu = "Delete", Kb = "Deleted", nr = "Delimiter", zs = "Destination", Wb = "Description", cg = "Details", ze = "Expiration", Zb = "EmailAddress", ug = "EventBridgeConfiguration", O = "ExpectedBucketOwner", sn = "EncryptionConfiguration", mg = "ErrorCode", Xb = "ErrorDetails", Tu = "ErrorDocument", Jb = "EndEvent", Qb = "ExposeHeaders", Yb = "ExposeHeader", pg = "ErrorMessage", tk = "ExpiredObjectDeleteMarker", lg = "ExistingObjectReplication", ks = "ExpiresString", dg = "ExpectedSourceBucketOwner", Du = "EncryptionType", ek = "EncryptionTypeList", rk = "EncryptionTypeMismatch", jt = "ETag", sr = "EncodingType", ok = "EventThreshold", fg = "ExpressionType", Iu = "Encryption", nk = "Enabled", gg = "End", xg = "Errors", an = "Error", Lu = "Events", Mu = "Event", De = "Expires", hg = "Expression", Je = "Filter", Cg = "FieldDelimiter", sk = "FileHeaderInfo", ik = "FetchOwner", yg = "FilterRule", ak = "FilterRuleList", ck = "FilterRules", uk = "Field", Eg = "Format", mk = "Frequency", qs = "Grants", pk = "GetBucketAbac", lk = "GetBucketAccelerateConfiguration", dk = "GetBucketAccelerateConfigurationOutput", fk = "GetBucketAnalyticsConfigurationOutput", gk = "GetBucketAccelerateConfigurationRequest", xk = "GetBucketAnalyticsConfigurationRequest", hk = "GetBucketAnalyticsConfiguration", Ck = "GetBucketAbacOutput", yk = "GetBucketAclOutput", Ek = "GetBucketAbacRequest", Sk = "GetBucketAclRequest", bk = "GetBucketAcl", kk = "GetBucketCors", Bk = "GetBucketCorsOutput", Pk = "GetBucketCorsRequest", _k = "GetBucketEncryption", Ak = "GetBucketEncryptionOutput", Rk = "GetBucketEncryptionRequest", vk = "GetBucketInventoryConfiguration", wk = "GetBucketInventoryConfigurationOutput", Ok = "GetBucketInventoryConfigurationRequest", Tk = "GetBucketIntelligentTieringConfiguration", Dk = "GetBucketIntelligentTieringConfigurationOutput", Ik = "GetBucketIntelligentTieringConfigurationRequest", Lk = "GetBucketLocation", Mk = "GetBucketLifecycleConfiguration", $k = "GetBucketLifecycleConfigurationOutput", Uk = "GetBucketLifecycleConfigurationRequest", Nk = "GetBucketLocationOutput", Gk = "GetBucketLoggingOutput", jk = "GetBucketLocationRequest", zk = "GetBucketLoggingRequest", qk = "GetBucketLogging", Hk = "GetBucketMetadataConfiguration", Fk = "GetBucketMetadataConfigurationOutput", Vk = "GetBucketMetricsConfigurationOutput", Sg = "GetBucketMetadataConfigurationResult", Kk = "GetBucketMetadataConfigurationRequest", Wk = "GetBucketMetricsConfigurationRequest", Zk = "GetBucketMetricsConfiguration", Xk = "GetBucketMetadataTableConfiguration", Jk = "GetBucketMetadataTableConfigurationOutput", bg = "GetBucketMetadataTableConfigurationResult", Qk = "GetBucketMetadataTableConfigurationRequest", Yk = "GetBucketNotificationConfiguration", tB = "GetBucketNotificationConfigurationRequest", eB = "GetBucketOwnershipControls", rB = "GetBucketOwnershipControlsOutput", oB = "GetBucketOwnershipControlsRequest", nB = "GetBucketPolicy", sB = "GetBucketPolicyOutput", iB = "GetBucketPolicyRequest", aB = "GetBucketPolicyStatus", cB = "GetBucketPolicyStatusOutput", uB = "GetBucketPolicyStatusRequest", mB = "GetBucketReplication", pB = "GetBucketReplicationOutput", lB = "GetBucketRequestPayment", dB = "GetBucketRequestPaymentOutput", fB = "GetBucketRequestPaymentRequest", gB = "GetBucketReplicationRequest", xB = "GetBucketTagging", hB = "GetBucketTaggingOutput", CB = "GetBucketTaggingRequest", yB = "GetBucketVersioning", EB = "GetBucketVersioningOutput", SB = "GetBucketVersioningRequest", bB = "GetBucketWebsite", kB = "GetBucketWebsiteOutput", BB = "GetBucketWebsiteRequest", Wr = "GrantFullControl", kg = "GlacierJobParameters", PB = "GetObject", _B = "GetObjectAcl", AB = "GetObjectAclOutput", RB = "GetObjectAttributesOutput", vB = "GetObjectAttributesParts", wB = "GetObjectAclRequest", OB = "GetObjectAttributesResponse", TB = "GetObjectAttributesRequest", DB = "GetObjectAttributes", IB = "GetObjectLockConfiguration", LB = "GetObjectLockConfigurationOutput", MB = "GetObjectLockConfigurationRequest", $B = "GetObjectLegalHold", UB = "GetObjectLegalHoldOutput", NB = "GetObjectLegalHoldRequest", GB = "GetObjectOutput", jB = "GetObjectRequest", zB = "GetObjectRetentionOutput", qB = "GetObjectRetentionRequest", HB = "GetObjectRetention", FB = "GetObjectTagging", VB = "GetObjectTaggingOutput", KB = "GetObjectTorrentOutput", WB = "GetObjectTaggingRequest", ZB = "GetObjectTorrentRequest", XB = "GetObjectTorrent", JB = "GetPublicAccessBlock", QB = "GetPublicAccessBlockOutput", YB = "GetPublicAccessBlockRequest", Zr = "GrantRead", Xr = "GrantReadACP", $u = "GrantWrite", Jr = "GrantWriteACP", Uu = "Grant", Nu = "Grantee", tP = "HeadBucket", eP = "HeadBucketOutput", rP = "HeadBucketRequest", oP = "HttpErrorCodeReturnedEquals", Bg = "HostName", nP = "HeadObject", sP = "HeadObjectOutput", iP = "HeadObjectRequest", aP = "HttpRedirectCode", Tt = "Id", Ko = "InventoryConfiguration", Pg = "InventoryConfigurationList", Qr = "ID", Gu = "IndexDocument", cP = "InventoryDestination", uP = "IsEnabled", mP = "InventoryEncryption", pP = "InventoryFilter", _g = "IsLatest", Yr = "IfMatch", lP = "IfMatchInitiatedTime", dP = "IfMatchLastModifiedTime", fP = "IfMatchSize", ju = "If-Modified-Since", Ag = "IfModifiedSince", gP = "InitiateMultipartUploadResult", yr = "If-Match", cn = "IfNoneMatch", to = "If-None-Match", xP = "InventoryOptionalFields", hP = "InvalidObjectState", CP = "IncludedObjectVersions", kf = "IsPublic", Bf = "IgnorePublicAcls", yP = "IdempotencyParameterMismatch", EP = "InvalidRequest", SP = "IsRestoreInProgress", zu = "InputSerialization", bP = "InventoryS3BucketDestination", kP = "InventorySchedule", qe = "IsTruncated", BP = "IntelligentTieringAndOperator", Wo = "IntelligentTieringConfiguration", Rg = "IntelligentTieringConfigurationList", vg = "InventoryTableConfigurationResult", PP = "InventoryTableConfigurationUpdates", Bs = "InventoryTableConfiguration", _P = "IntelligentTieringFilter", wg = "IfUnmodifiedSince", qu = "If-Unmodified-Since", AP = "InvalidWriteOffset", Hu = "Initiator", RP = "Initiated", Og = "JSON", vP = "JSONInput", wP = "JSONOutput", Ps = "JournalTableConfiguration", Tg = "JournalTableConfigurationResult", OP = "JournalTableConfigurationUpdates", W = "Key", TP = "KeyCount", DP = "KeyId", IP = "KmsKeyArn", Hs = "KeyMarker", LP = "KMSContext", MP = "KMSKeyId", $P = "KMSMasterKeyID", UP = "KeyPrefixEquals", _s = "Location", NP = "ListAllMyBucketsResult", GP = "ListAllMyDirectoryBucketsResult", jP = "ListBuckets", zP = "ListBucketAnalyticsConfigurations", qP = "ListBucketAnalyticsConfigurationsOutput", HP = "ListBucketAnalyticsConfigurationResult", FP = "ListBucketAnalyticsConfigurationsRequest", VP = "ListBucketInventoryConfigurations", KP = "ListBucketInventoryConfigurationsOutput", WP = "ListBucketInventoryConfigurationsRequest", ZP = "ListBucketIntelligentTieringConfigurations", XP = "ListBucketIntelligentTieringConfigurationsOutput", JP = "ListBucketIntelligentTieringConfigurationsRequest", QP = "ListBucketMetricsConfigurations", YP = "ListBucketMetricsConfigurationsOutput", t_ = "ListBucketMetricsConfigurationsRequest", e_ = "ListBucketsOutput", r_ = "ListBucketsRequest", Dg = "ListBucketResult", gu = "LocationConstraint", xu = "LifecycleConfiguration", o_ = "ListDirectoryBuckets", n_ = "ListDirectoryBucketsOutput", s_ = "ListDirectoryBucketsRequest", Fu = "LoggingEnabled", i_ = "LifecycleExpiration", a_ = "LambdaFunctionArn", c_ = "LambdaFunctionConfiguration", u_ = "LambdaFunctionConfigurationList", m_ = "LambdaFunctionConfigurations", As = "LegalHold", p_ = "LocationInfo", l_ = "ListInventoryConfigurationsResult", He = "LastModified", d_ = "ListMetricsConfigurationsResult", f_ = "LastModifiedTime", g_ = "ListMultipartUploads", x_ = "ListMultipartUploadsOutput", h_ = "ListMultipartUploadsResult", C_ = "ListMultipartUploadsRequest", Vu = "Last-Modified", y_ = "ListObjects", E_ = "ListObjectsOutput", S_ = "ListObjectsRequest", b_ = "ListObjectsV2", k_ = "ListObjectsV2Output", B_ = "ListObjectVersionsOutput", P_ = "ListObjectsV2Request", __ = "ListObjectVersionsRequest", A_ = "ListObjectVersions", R_ = "ListParts", v_ = "ListPartsOutput", w_ = "ListPartsResult", O_ = "ListPartsRequest", T_ = "LifecycleRule", D_ = "LifecycleRuleAndOperator", I_ = "LifecycleRuleFilter", L_ = "LifecycleRules", M_ = "ListVersionsResult", eo = "Metadata", $_ = "MetricsAndOperator", U_ = "MaxAgeSeconds", N_ = "MaxBuckets", hu = "MetadataConfiguration", Ig = "MetricsConfigurationList", Lg = "MetadataConfigurationResult", Zo = "MetricsConfiguration", G_ = "MetadataDirective", j_ = "MaxDirectoryBuckets", Mg = "MfaDelete", $g = "MetadataEntry", z_ = "MetricsFilter", Ku = "MFA", Ug = "MFADelete", ro = "MaxKeys", Wu = "MissingMeta", q_ = "MpuObjectSize", Fs = "MaxParts", Cu = "MetadataTableConfiguration", Ng = "MetadataTableConfigurationResult", H_ = "MetadataTableEncryptionConfiguration", Gg = "MultipartUpload", F_ = "MultipartUploadList", jg = "MaxUploads", zg = "Marker", qg = "Metrics", V_ = "Message", K_ = "Minutes", Hg = "Mode", Er = "Name", yu = "NotificationConfiguration", W_ = "NotificationConfigurationFilter", un = "NextContinuationToken", Fg = "NoncurrentDays", Z_ = "NotFound", Vg = "NextKeyMarker", X_ = "NextMarker", Kg = "NewerNoncurrentVersions", Wg = "NextPartNumberMarker", J_ = "NoSuchBucket", Q_ = "NoSuchKey", Y_ = "NoSuchUpload", tA = "NextUploadIdMarker", Zg = "NoncurrentVersionExpiration", eA = "NextVersionIdMarker", rA = "NoncurrentVersionTransitions", oA = "NoncurrentVersionTransitionList", Xg = "NoncurrentVersionTransition", Le = "Owner", nA = "ObjectAttributes", sA = "ObjectAlreadyInActiveTierError", Rs = "OwnershipControls", iA = "OwnershipControlsRule", aA = "OwnershipControlsRules", cA = "OptionalFields", uA = "ObjectIdentifier", mA = "ObjectIdentifierList", Jg = "OutputLocation", vs = "ObjectLockConfiguration", pA = "ObjectLockEnabled", lA = "ObjectLockEnabledForBucket", dA = "ObjectLockLegalHold", oo = "ObjectLockLegalHoldStatus", no = "ObjectLockMode", fA = "ObjectLockRetention", so = "ObjectLockRetainUntilDate", gA = "ObjectLockRule", xA = "ObjectList", hA = "ObjectNotInActiveTierError", Qg = "ObjectOwnership", Zu = "OptionalObjectAttributes", CA = "ObjectParts", yA = "ObjectPart", EA = "ObjectSize", Yg = "ObjectSizeGreaterThan", tx = "ObjectSizeLessThan", SA = "OutputSchemaVersion", Xu = "OutputSerialization", bA = "ObjectVersion", kA = "ObjectVersionList", BA = "Objects", ex = "Object", lt = "Prefix", ws = "PublicAccessBlockConfiguration", PA = "PutBucketAbac", _A = "PutBucketAccelerateConfiguration", AA = "PutBucketAccelerateConfigurationRequest", RA = "PutBucketAnalyticsConfigurationRequest", vA = "PutBucketAnalyticsConfiguration", wA = "PutBucketAbacRequest", OA = "PutBucketAclRequest", TA = "PutBucketAcl", DA = "PutBucketCors", IA = "PutBucketCorsRequest", LA = "PutBucketEncryption", MA = "PutBucketEncryptionRequest", $A = "PutBucketInventoryConfiguration", UA = "PutBucketInventoryConfigurationRequest", NA = "PutBucketIntelligentTieringConfiguration", GA = "PutBucketIntelligentTieringConfigurationRequest", jA = "PutBucketLogging", zA = "PutBucketLifecycleConfiguration", qA = "PutBucketLifecycleConfigurationOutput", HA = "PutBucketLifecycleConfigurationRequest", FA = "PutBucketLoggingRequest", VA = "PutBucketMetricsConfiguration", KA = "PutBucketMetricsConfigurationRequest", WA = "PutBucketNotificationConfiguration", ZA = "PutBucketNotificationConfigurationRequest", XA = "PutBucketOwnershipControls", JA = "PutBucketOwnershipControlsRequest", QA = "PutBucketPolicy", YA = "PutBucketPolicyRequest", tR = "PutBucketReplication", eR = "PutBucketRequestPayment", rR = "PutBucketRequestPaymentRequest", oR = "PutBucketReplicationRequest", nR = "PutBucketTagging", sR = "PutBucketTaggingRequest", iR = "PutBucketVersioning", aR = "PutBucketVersioningRequest", cR = "PutBucketWebsite", uR = "PutBucketWebsiteRequest", Vs = "PartsCount", mR = "PartitionDateSource", pR = "ProgressEvent", lR = "ParquetInput", dR = "PartsList", Sr = "PartNumber", Ks = "PartNumberMarker", fR = "PutObject", gR = "PutObjectAcl", xR = "PutObjectAclOutput", hR = "PutObjectAclRequest", CR = "PutObjectLockConfiguration", yR = "PutObjectLockConfigurationOutput", ER = "PutObjectLockConfigurationRequest", SR = "PutObjectLegalHold", bR = "PutObjectLegalHoldOutput", kR = "PutObjectLegalHoldRequest", BR = "PutObjectOutput", PR = "PutObjectRequest", _R = "PutObjectRetentionOutput", AR = "PutObjectRetentionRequest", RR = "PutObjectRetention", vR = "PutObjectTagging", wR = "PutObjectTaggingOutput", OR = "PutObjectTaggingRequest", Os = "PartitionedPrefix", TR = "PutPublicAccessBlock", DR = "PutPublicAccessBlockRequest", rx = "PolicyStatus", Ws = "Parts", Zs = "Part", IR = "Parquet", ox = "Payer", nx = "Payload", sx = "Permission", ix = "Policy", ax = "Progress", LR = "Priority", cx = "Protocol", MR = "Quiet", $R = "QueueArn", ux = "QuoteCharacter", UR = "QueueConfigurationList", NR = "QueueConfigurations", mx = "QueueConfiguration", px = "QuoteEscapeCharacter", GR = "QuoteFields", jR = "Queue", mn = "Rules", Ju = "RedirectAllRequestsTo", ft = "RequestCharged", lx = "ResponseCacheControl", dx = "ResponseContentDisposition", fx = "ResponseContentEncoding", gx = "ResponseContentLanguage", xx = "ResponseContentType", Ts = "ReplicationConfiguration", Qu = "RecordDelimiter", hx = "ResponseExpires", zR = "RestoreExpiryDate", Xs = "RecordExpiration", qR = "RecordsEvent", HR = "ReplicaKmsKeyID", FR = "ReplaceKeyPrefixWith", VR = "ReplaceKeyWith", Cx = "ReplicaModifications", KR = "RenameObject", WR = "RenameObjectOutput", ZR = "RestoreObjectOutput", XR = "RestoreOutputPath", JR = "RenameObjectRequest", QR = "RestoreObjectRequest", YR = "RestoreObject", st = "RequestPayer", Pf = "RestrictPublicBuckets", Ds = "RequestPaymentConfiguration", yx = "RequestProgress", Yu = "RoutingRules", t3 = "ReplicationRuleAndOperator", e3 = "ReplicationRuleFilter", r3 = "ReplicationRule", o3 = "ReplicationRules", n3 = "RequestRoute", Eu = "RestoreRequest", Ex = "RoutingRule", tm = "ReplicationStatus", em = "RestoreStatus", s3 = "RenameSource", Sx = "ReplicationTime", i3 = "ReplicationTimeValue", a3 = "RequestToken", c3 = "RetainUntilDate", Is = "Range", rm = "Restore", u3 = "Records", bx = "Redirect", Ls = "Retention", m3 = "Role", io = "Rule", Vt = "Status", kx = "StartAfter", _f = "SecretAccessKey", p3 = "SseAlgorithm", l3 = "StreamingBlob", Bx = "S3BucketDestination", Kt = "StorageClass", Px = "StorageClassAnalysis", d3 = "StorageClassAnalysisDataExport", f3 = "SessionCredentialValue", g3 = "SessionCredentials", x3 = "StatusCode", h3 = "SkipDestinationValidation", C3 = "StatsEvent", y3 = "SourceIfMatch", E3 = "SourceIfModifiedSince", S3 = "SourceIfNoneMatch", b3 = "SourceIfUnmodifiedSince", _x = "SSE-KMS", Ax = "SseKmsEncryptedObjects", k3 = "S3KeyFilter", B3 = "S3Key", P3 = "S3Location", _3 = "SessionMode", A3 = "SelectObjectContent", R3 = "SelectObjectContentEventStream", v3 = "SelectObjectContentOutput", w3 = "SelectObjectContentRequest", Rx = "SelectParameters", Ms = "SimplePrefix", vx = "ScanRange", wx = "SSE-S3", Ox = "SourceSelectionCriteria", me = "ServerSideEncryption", O3 = "SSEAlgorithm", T3 = "ServerSideEncryptionByDefault", $s = "ServerSideEncryptionConfiguration", Dt = "SSECustomerAlgorithm", Ae = "SSECustomerKey", It = "SSECustomerKeyMD5", Tx = "SSEKMS", Qe = "SSEKMSEncryptionContext", se = "SSEKMSKeyId", D3 = "ServerSideEncryptionRule", I3 = "ServerSideEncryptionRules", Dx = "SSES3", Af = "SessionToken", Ix = "S3TablesDestination", Lx = "S3TablesDestinationResult", L3 = "S3", M3 = "Schedule", ao = "Size", $3 = "Start", Mx = "Stats", U3 = "Suffix", co = "Tags", om = "TableArn", N3 = "TopicArn", G3 = "TargetBucket", nm = "TableBucketArn", j3 = "TableBucketType", sm = "TagCount", z3 = "TopicConfigurationList", q3 = "TopicConfigurations", $x = "TopicConfiguration", H3 = "TaggingDirective", im = "TransitionDefaultMinimumObjectSize", Ux = "TargetGrants", F3 = "TargetGrant", V3 = "TieringList", K3 = "TransitionList", W3 = "TooManyParts", Nx = "TableNamespace", Js = "TableName", Gx = "TargetObjectKeyFormat", Z3 = "TargetPrefix", X3 = "TotalPartsCount", Qs = "TagSet", jx = "TableStatus", Re = "Tag", Ie = "Tagging", zx = "Tier", J3 = "Tierings", qx = "Tiering", Q3 = "Time", Hx = "Token", Y3 = "Topic", tv = "Transitions", Fx = "Transition", pn = "Type", ev = "Uploads", rv = "UpdateBucketMetadataInventoryTableConfiguration", ov = "UpdateBucketMetadataInventoryTableConfigurationRequest", nv = "UpdateBucketMetadataJournalTableConfiguration", sv = "UpdateBucketMetadataJournalTableConfigurationRequest", ir = "UploadId", Vx = "UploadIdMarker", Kx = "UserMetadata", iv = "UploadPart", av = "UploadPartCopy", cv = "UploadPartCopyOutput", uv = "UploadPartCopyRequest", mv = "UploadPartOutput", pv = "UploadPartRequest", lv = "URI", dv = "Upload", am = "Value", Us = "VersioningConfiguration", nt = "VersionId", Wx = "VersionIdMarker", fv = "Versions", gv = "Version", Ns = "WebsiteConfiguration", xv = "WriteGetObjectResponse", hv = "WriteGetObjectResponseRequest", Cv = "WriteOffsetBytes", ln = "WebsiteRedirectLocation", yv = "Years", Zx = "accept-ranges", Ev = "bucket-region", pe = "client", br = "continuation-token", Ys = "delimiter", le = "error", cm = "eventPayload", Sv = "endpoint", ti = "encoding-type", bv = "fetch-owner", v = "http", it = "httpChecksum", Ee = "httpError", n = "httpHeader", kv = "hostLabel", tt = "httpPayload", uo = "httpPrefixHeaders", I = "httpQuery", Xx = "http://www.w3.org/2001/XMLSchema-instance", ve = "id", Bv = "idempotencyToken", Jx = "key-marker", Pv = "marker", _v = "max-buckets", Av = "max-directory-buckets", um = "max-keys", Rv = "max-parts", vv = "max-uploads", dn = "prefix", ei = "partNumber", wv = "part-number-marker", Qx = "response-cache-control", Yx = "response-content-disposition", t0 = "response-content-encoding", e0 = "response-content-language", r0 = "response-content-type", o0 = "response-expires", n0 = "streaming", Ov = "start-after", s0 = "smithy.ts.sdk.synthetic.com.amazonaws.s3", fn = "uploadId", Tv = "upload-id-marker", de = "versionId", Dv = "version-id-marker", i0 = "xsi", Iv = "xmlAttribute", z = "xmlFlattened", y = "xmlName", a0 = "xmlNamespace", mo = "x-amz-acl", c0 = "x-amz-abort-date", Lv = "x-amz-access-point-alias", u0 = "x-amz-abort-rule-id", Mv = "x-amz-archive-status", m0 = "x-amz-bucket-arn", mm = "x-amz-bypass-governance-retention", $v = "x-amz-bucket-location-name", Uv = "x-amz-bucket-location-type", Nv = "x-amz-bucket-object-lock-enabled", p0 = "x-amz-bucket-object-lock-token", Gv = "x-amz-bucket-region", pm = "x-amz-checksum-algorithm", kr = "x-amz-checksum-crc32", Br = "x-amz-checksum-crc32c", Pr = "x-amz-checksum-crc64nvme", l0 = "x-amz-checksum-mode", jv = "x-amz-confirm-remove-self-bucket-access", _r = "x-amz-checksum-sha1", Ar = "x-amz-checksum-sha256", d0 = "x-amz-copy-source", f0 = "x-amz-copy-source-if-match", g0 = "x-amz-copy-source-if-modified-since", x0 = "x-amz-copy-source-if-none-match", h0 = "x-amz-copy-source-if-unmodified-since", zv = "x-amz-create-session-mode", qv = "x-amz-copy-source-range", C0 = "x-amz-copy-source-server-side-encryption-customer-algorithm", y0 = "x-amz-copy-source-server-side-encryption-customer-key", E0 = "x-amz-copy-source-server-side-encryption-customer-key-MD5", S0 = "x-amz-copy-source-version-id", po = "x-amz-checksum-type", Hv = "x-amz-client-token", ri = "x-amz-delete-marker", gn = "x-amz-expiration", T = "x-amz-expected-bucket-owner", Fv = "x-amz-fwd-error-code", Vv = "x-amz-fwd-error-message", Kv = "x-amz-fwd-header-Cache-Control", Wv = "x-amz-fwd-header-Content-Disposition", Zv = "x-amz-fwd-header-Content-Encoding", Xv = "x-amz-fwd-header-Content-Language", Jv = "x-amz-fwd-header-Content-Range", Qv = "x-amz-fwd-header-Content-Type", Yv = "x-amz-fwd-header-ETag", tw = "x-amz-fwd-header-Expires", ew = "x-amz-fwd-header-Last-Modified", rw = "x-amz-fwd-header-accept-ranges", ow = "x-amz-fwd-header-x-amz-checksum-crc32", nw = "x-amz-fwd-header-x-amz-checksum-crc32c", sw = "x-amz-fwd-header-x-amz-checksum-crc64nvme", iw = "x-amz-fwd-header-x-amz-checksum-sha1", aw = "x-amz-fwd-header-x-amz-checksum-sha256", cw = "x-amz-fwd-header-x-amz-delete-marker", uw = "x-amz-fwd-header-x-amz-expiration", mw = "x-amz-fwd-header-x-amz-missing-meta", pw = "x-amz-fwd-header-x-amz-mp-parts-count", lw = "x-amz-fwd-header-x-amz-object-lock-legal-hold", dw = "x-amz-fwd-header-x-amz-object-lock-mode", fw = "x-amz-fwd-header-x-amz-object-lock-retain-until-date", gw = "x-amz-fwd-header-x-amz-restore", xw = "x-amz-fwd-header-x-amz-request-charged", hw = "x-amz-fwd-header-x-amz-replication-status", Cw = "x-amz-fwd-header-x-amz-storage-class", yw = "x-amz-fwd-header-x-amz-server-side-encryption", Ew = "x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id", Sw = "x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled", bw = "x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm", kw = "x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5", Bw = "x-amz-fwd-header-x-amz-tagging-count", Pw = "x-amz-fwd-header-x-amz-version-id", _w = "x-amz-fwd-status", lo = "x-amz-grant-full-control", fo = "x-amz-grant-read", go = "x-amz-grant-read-acp", lm = "x-amz-grant-write", xo = "x-amz-grant-write-acp", Aw = "x-amz-if-match-initiated-time", Rw = "x-amz-if-match-last-modified-time", vw = "x-amz-if-match-size", ho = "x-amz-meta-", dm = "x-amz-mfa", ww = "x-amz-metadata-directive", b0 = "x-amz-missing-meta", Ow = "x-amz-mp-object-size", Tw = "x-amz-max-parts", k0 = "x-amz-mp-parts-count", Dw = "x-amz-object-attributes", xn = "x-amz-object-lock-legal-hold", hn = "x-amz-object-lock-mode", Cn = "x-amz-object-lock-retain-until-date", Iw = "x-amz-object-ownership", fm = "x-amz-optional-object-attributes", Lw = "x-amz-object-size", Mw = "x-amz-part-number-marker", B0 = "x-amz-restore", gt = "x-amz-request-charged", $w = "x-amz-restore-output-path", at = "x-amz-request-payer", Uw = "x-amz-request-route", P0 = "x-amz-replication-status", Nw = "x-amz-rename-source", Gw = "x-amz-rename-source-if-match", jw = "x-amz-rename-source-if-modified-since", zw = "x-amz-rename-source-if-none-match", qw = "x-amz-rename-source-if-unmodified-since", Hw = "x-amz-request-token", yn = "x-amz-storage-class", mt = "x-amz-sdk-checksum-algorithm", Fw = "x-amz-skip-destination-validation", _0 = "x-amz-source-expected-bucket-owner", Se = "x-amz-server-side-encryption", be = "x-amz-server-side-encryption-aws-kms-key-id", ke = "x-amz-server-side-encryption-bucket-key-enabled", ar = "x-amz-server-side-encryption-context", zt = "x-amz-server-side-encryption-customer-algorithm", Me = "x-amz-server-side-encryption-customer-key", qt = "x-amz-server-side-encryption-customer-key-MD5", gm = "x-amz-tagging", A0 = "x-amz-tagging-count", Vw = "x-amz-tagging-directive", xm = "x-amz-transition-default-minimum-object-size", Fe = "x-amz-version-id", Kw = "x-amz-write-offset-bytes", En = "x-amz-website-redirect-location", Ww = "xsi:type", i = "com.amazonaws.s3", R0 = [0, i, vu, 8, 0], Rf = [0, i, f3, 8, 0], $e = [0, i, Ae, 8, 0], cr = [0, i, Qe, 8, 0], Ft = [0, i, se, 8, 0], Sn = [0, i, l3, { [n0]: 1 }, 42], v0 = [3, i, Es, 0, [Vt], [0]], Zw = [3, i, Tf, 0, [WS], [1]], Xw = [3, i, FE, 0, [ft], [[0, { [n]: gt }]]], Jw = [3, i, VE, 0, [A, W, ir, st, O, lP], [[0, 1], [0, 1], [0, { [I]: fn }], [0, { [n]: at }], [0, { [n]: T }], [6, { [n]: Aw }]]], Qw = [3, i, ys, 0, [Vt], [0]], w0 = [3, i, hr, 0, [qs, Le], [[() => ni, { [y]: Gs }], () => Ye]], Yw = [3, i, wf, 0, [Le], [0]], tO = [3, i, $E, 0, [lt, co], [0, [() => tr, { [z]: 1, [y]: Re }]]], hm = [3, i, Vo, 0, [Tt, Je, Px], [0, [() => cL, 0], () => hI]], eO = [3, i, UE, 0, [Bx], [() => rO]], rO = [3, i, QE, 0, [Eg, rS, A, lt], [0, 0, 0, 0]], oO = [3, i, Mf, 0, [Du], [[() => NI, { [z]: 1 }]]], nO = [3, i, A, 0, [Er, hS, Bu, bu], [0, 4, 0, 0]], sO = [-3, i, eS, { [le]: pe, [Ee]: 409 }, [], []];
Mt.for(i).registerError(sO, as);
var iO = [-3, i, oS, { [le]: pe, [Ee]: 409 }, [], []];
Mt.for(i).registerError(iO, cs);
var aO = [3, i, nS, 0, [Fb, pn], [0, 0]], cO = [3, i, sS, 0, [mn], [[() => J0, { [z]: 1, [y]: io }]]], uO = [3, i, Ss, 0, [Fu], [[() => M0, 0]]], mO = [3, i, Gf, 0, [te, ee, re, oe, ne, ye], [0, 0, 0, 0, 0, 0]], pO = [3, i, OS, 0, [lt], [0]], lO = [3, i, SS, 0, [Ws], [[() => MI, { [z]: 1, [y]: Zs }]]], dO = [3, i, IS, 0, [jt, te, ee, re, oe, ne, Sr], [0, 0, 0, 0, 0, 0, 1]], fO = [3, i, bS, { [y]: BS }, [_s, A, W, ze, jt, te, ee, re, oe, ne, ye, me, nt, se, Yt, ft], [0, 0, 0, [0, { [n]: gn }], 0, 0, 0, 0, 0, 0, 0, [0, { [n]: Se }], [0, { [n]: Fe }], [() => Ft, { [n]: be }], [2, { [n]: ke }], [0, { [n]: gt }]]], gO = [3, i, PS, 0, [A, W, Gg, ir, te, ee, re, oe, ne, ye, q_, st, O, Yr, cn, Dt, Ae, It], [[0, 1], [0, 1], [() => lO, { [tt]: 1, [y]: jf }], [0, { [I]: fn }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, { [n]: _r }], [0, { [n]: Ar }], [0, { [n]: po }], [1, { [n]: Ow }], [0, { [n]: at }], [0, { [n]: T }], [0, { [n]: yr }], [0, { [n]: to }], [0, { [n]: zt }], [() => $e, { [n]: Me }], [0, { [n]: qt }]]], xO = [3, i, eg, 0, [oP, UP], [0, 0]], hO = [3, i, CS, 0, [], []], CO = [3, i, vS, 0, [qf, ze, tg, nt, me, Dt, It, se, Qe, Yt, ft], [[() => EO, 16], [0, { [n]: gn }], [0, { [n]: S0 }], [0, { [n]: Fe }], [0, { [n]: Se }], [0, { [n]: zt }], [0, { [n]: qt }], [() => Ft, { [n]: be }], [() => cr, { [n]: ar }], [2, { [n]: ke }], [0, { [n]: gt }]]], yO = [3, i, wS, 0, [jr, A, zr, Q, qr, Hr, Fr, Vr, Vf, Kf, Wf, Zf, Xf, De, Wr, Zr, Xr, Jr, Yr, cn, W, eo, G_, H3, me, Kt, ln, Dt, Ae, It, se, Qe, Yt, Jf, vu, Qf, st, Ie, no, so, oo, O, dg], [[0, { [n]: mo }], [0, 1], [0, { [n]: Qo }], [0, { [n]: pm }], [0, { [n]: Yo }], [0, { [n]: tn }], [0, { [n]: en }], [0, { [n]: nn }], [0, { [n]: d0 }], [0, { [n]: f0 }], [4, { [n]: g0 }], [0, { [n]: x0 }], [4, { [n]: h0 }], [4, { [n]: De }], [0, { [n]: lo }], [0, { [n]: fo }], [0, { [n]: go }], [0, { [n]: xo }], [0, { [n]: yr }], [0, { [n]: to }], [0, 1], [128, { [uo]: ho }], [0, { [n]: ww }], [0, { [n]: Vw }], [0, { [n]: Se }], [0, { [n]: yn }], [0, { [n]: En }], [0, { [n]: zt }], [() => $e, { [n]: Me }], [0, { [n]: qt }], [() => Ft, { [n]: be }], [() => cr, { [n]: ar }], [2, { [n]: ke }], [0, { [n]: C0 }], [() => R0, { [n]: y0 }], [0, { [n]: E0 }], [0, { [n]: at }], [0, { [n]: gm }], [0, { [n]: hn }], [5, { [n]: Cn }], [0, { [n]: xn }], [0, { [n]: T }], [0, { [n]: _0 }]]], EO = [3, i, qf, 0, [jt, He, ye, te, ee, re, oe, ne], [0, 4, 0, 0, 0, 0, 0, 0]], SO = [3, i, Hf, 0, [jt, He, te, ee, re, oe, ne], [0, 4, 0, 0, 0, 0, 0]], bO = [3, i, bs, 0, [_u], [[() => X0, { [z]: 1, [y]: Au }]]], kO = [3, i, Au, 0, [Qr, GE, qE, WE, Qb, U_], [0, [64, { [z]: 1, [y]: jE }], [64, { [z]: 1, [y]: KE }], [64, { [z]: 1, [y]: ZE }], [64, { [z]: 1, [y]: Yb }], 1]], BO = [3, i, du, 0, [gu, _s, A, co], [0, () => RD, () => aO, [() => tr, 0]]], PO = [3, i, lS, 0, [A, Ct, Q, hu, O], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [() => vD, { [tt]: 1, [y]: hu }], [0, { [n]: T }]]], _O = [3, i, fS, 0, [A, Ct, Q, Cu, O], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [() => TD, { [tt]: 1, [y]: Cu }], [0, { [n]: T }]]], AO = [3, i, gS, 0, [_s, bu], [[0, { [n]: _s }], [0, { [n]: m0 }]]], RO = [3, i, xS, 0, [jr, A, du, Wr, Zr, Xr, $u, Jr, lA, Qg], [[0, { [n]: mo }], [0, 1], [() => BO, { [tt]: 1, [y]: du }], [0, { [n]: lo }], [0, { [n]: fo }], [0, { [n]: go }], [0, { [n]: lm }], [0, { [n]: xo }], [2, { [n]: Nv }], [0, { [n]: Iw }]]], vO = [3, i, kS, { [y]: gP }, [Of, If, A, W, ir, me, Dt, It, se, Qe, Yt, ft, Q, ye], [[4, { [n]: c0 }], [0, { [n]: u0 }], [0, { [y]: A }], 0, 0, [0, { [n]: Se }], [0, { [n]: zt }], [0, { [n]: qt }], [() => Ft, { [n]: be }], [() => cr, { [n]: ar }], [2, { [n]: ke }], [0, { [n]: gt }], [0, { [n]: pm }], [0, { [n]: po }]]], wO = [3, i, _S, 0, [jr, A, zr, qr, Hr, Fr, Vr, De, Wr, Zr, Xr, Jr, W, eo, me, Kt, ln, Dt, Ae, It, se, Qe, Yt, st, Ie, no, so, oo, O, Q, ye], [[0, { [n]: mo }], [0, 1], [0, { [n]: Qo }], [0, { [n]: Yo }], [0, { [n]: tn }], [0, { [n]: en }], [0, { [n]: nn }], [4, { [n]: De }], [0, { [n]: lo }], [0, { [n]: fo }], [0, { [n]: go }], [0, { [n]: xo }], [0, 1], [128, { [uo]: ho }], [0, { [n]: Se }], [0, { [n]: yn }], [0, { [n]: En }], [0, { [n]: zt }], [() => $e, { [n]: Me }], [0, { [n]: qt }], [() => Ft, { [n]: be }], [() => cr, { [n]: ar }], [2, { [n]: ke }], [0, { [n]: at }], [0, { [n]: gm }], [0, { [n]: hn }], [5, { [n]: Cn }], [0, { [n]: xn }], [0, { [n]: T }], [0, { [n]: pm }], [0, { [n]: po }]]], OO = [3, i, MS, { [y]: $S }, [me, se, Qe, Yt, bf], [[0, { [n]: Se }], [() => Ft, { [n]: be }], [() => cr, { [n]: ar }], [2, { [n]: ke }], [() => uI, { [y]: bf }]]], TO = [3, i, NS, 0, [_3, A, me, se, Qe, Yt], [[0, { [n]: zv }], [0, 1], [0, { [n]: Se }], [() => Ft, { [n]: be }], [() => cr, { [n]: ar }], [2, { [n]: ke }]]], DO = [3, i, GS, 0, [sk, VS, px, Qu, Cg, ux, JE], [0, 0, 0, 0, 0, 0, 2]], IO = [3, i, jS, 0, [GR, px, Qu, Cg, ux], [0, 0, 0, 0, 0]], LO = [3, i, sg, 0, [Hg, Kr, yv], [0, 1, 1]], MO = [3, i, fu, 0, [BA, MR], [[() => ZI, { [z]: 1, [y]: ex }], 2]], $O = [3, i, JS, 0, [A, Tt, O], [[0, 1], [0, { [I]: ve }], [0, { [n]: T }]]], UO = [3, i, YS, 0, [A, O], [[0, 1], [0, { [n]: T }]]], NO = [3, i, eb, 0, [A, O], [[0, 1], [0, { [n]: T }]]], GO = [3, i, sb, 0, [A, Tt, O], [[0, 1], [0, { [I]: ve }], [0, { [n]: T }]]], jO = [3, i, ob, 0, [A, Tt, O], [[0, 1], [0, { [I]: ve }], [0, { [n]: T }]]], zO = [3, i, ab, 0, [A, O], [[0, 1], [0, { [n]: T }]]], qO = [3, i, ub, 0, [A, O], [[0, 1], [0, { [n]: T }]]], HO = [3, i, db, 0, [A, O], [[0, 1], [0, { [n]: T }]]], FO = [3, i, mb, 0, [A, Tt, O], [[0, 1], [0, { [I]: ve }], [0, { [n]: T }]]], VO = [3, i, gb, 0, [A, O], [[0, 1], [0, { [n]: T }]]], KO = [3, i, hb, 0, [A, O], [[0, 1], [0, { [n]: T }]]], WO = [3, i, yb, 0, [A, O], [[0, 1], [0, { [n]: T }]]], ZO = [3, i, Cb, 0, [A, O], [[0, 1], [0, { [n]: T }]]], XO = [3, i, bb, 0, [A, O], [[0, 1], [0, { [n]: T }]]], JO = [3, i, Bb, 0, [A, O], [[0, 1], [0, { [n]: T }]]], QO = [3, i, Tb, 0, [W, nt, Cr, Ob], [0, 0, 2, 0]], YO = [3, i, wb, 0, [Le, W, nt, _g, He], [() => Ye, 0, 0, 2, 4]], tT = [3, i, og, 0, [Vt], [0]], eT = [3, i, Db, 0, [Cr, nt, ft], [[2, { [n]: ri }], [0, { [n]: Fe }], [0, { [n]: gt }]]], rT = [3, i, Lb, 0, [A, W, Ku, nt, st, ku, O, Yr, dP, fP], [[0, 1], [0, 1], [0, { [n]: dm }], [0, { [I]: de }], [0, { [n]: at }], [2, { [n]: mm }], [0, { [n]: T }], [0, { [n]: yr }], [6, { [n]: Rw }], [1, { [n]: vw }]]], oT = [3, i, Ib, { [y]: Vb }, [Kb, ft, xg], [[() => $I, { [z]: 1 }], [0, { [n]: gt }], [() => GI, { [z]: 1, [y]: an }]]], nT = [3, i, Mb, 0, [A, fu, Ku, st, ku, O, Q], [[0, 1], [() => MO, { [tt]: 1, [y]: fu }], [0, { [n]: dm }], [0, { [n]: at }], [2, { [n]: mm }], [0, { [n]: T }], [0, { [n]: mt }]]], sT = [3, i, Ub, 0, [nt], [[0, { [n]: Fe }]]], iT = [3, i, Nb, 0, [A, W, nt, O], [[0, 1], [0, 1], [0, { [I]: de }], [0, { [n]: T }]]], aT = [3, i, Hb, 0, [A, O], [[0, 1], [0, { [n]: T }]]], cT = [3, i, zs, 0, [A, ME, Kt, wf, sn, Sx, qg], [0, 0, 0, () => Yw, () => pT, () => V2, () => ID]], uT = [3, i, ig, 0, [j3, nm, Nx], [0, 0, 0]], mT = [3, i, Iu, 0, [Du, MP, LP], [0, [() => Ft, 0], 0]], pT = [3, i, sn, 0, [HR], [0]], lT = [-3, i, rk, { [le]: pe, [Ee]: 400 }, [], []];
Mt.for(i).registerError(lT, ds);
var dT = [3, i, Jb, 0, [], []], fT = [3, i, an, 0, [W, nt, FS, V_], [0, 0, 0, 0]], Cm = [3, i, Xb, 0, [mg, pg], [0, 0]], O0 = [3, i, Tu, 0, [W], [0]], gT = [3, i, ug, 0, [], []], xT = [3, i, lg, 0, [Vt], [0]], hT = [3, i, yg, 0, [Er, am], [0, 0]], CT = [3, i, Ck, 0, [Es], [[() => v0, 16]]], yT = [3, i, Ek, 0, [A, O], [[0, 1], [0, { [n]: T }]]], ET = [3, i, dk, { [y]: ys }, [Vt, ft], [0, [0, { [n]: gt }]]], ST = [3, i, gk, 0, [A, O, st], [[0, 1], [0, { [n]: T }], [0, { [n]: at }]]], bT = [3, i, yk, { [y]: hr }, [Le, qs], [() => Ye, [() => ni, { [y]: Gs }]]], kT = [3, i, Sk, 0, [A, O], [[0, 1], [0, { [n]: T }]]], BT = [3, i, fk, 0, [Vo], [[() => hm, 16]]], PT = [3, i, xk, 0, [A, Tt, O], [[0, 1], [0, { [I]: ve }], [0, { [n]: T }]]], _T = [3, i, Bk, { [y]: bs }, [_u], [[() => X0, { [z]: 1, [y]: Au }]]], AT = [3, i, Pk, 0, [A, O], [[0, 1], [0, { [n]: T }]]], RT = [3, i, Ak, 0, [$s], [[() => W0, 16]]], vT = [3, i, Rk, 0, [A, O], [[0, 1], [0, { [n]: T }]]], wT = [3, i, Dk, 0, [Wo], [[() => ym, 16]]], OT = [3, i, Ik, 0, [A, Tt, O], [[0, 1], [0, { [I]: ve }], [0, { [n]: T }]]], TT = [3, i, wk, 0, [Ko], [[() => Em, 16]]], DT = [3, i, Ok, 0, [A, Tt, O], [[0, 1], [0, { [I]: ve }], [0, { [n]: T }]]], IT = [3, i, $k, { [y]: xu }, [mn, im], [[() => J0, { [z]: 1, [y]: io }], [0, { [n]: xm }]]], LT = [3, i, Uk, 0, [A, O], [[0, 1], [0, { [n]: T }]]], MT = [3, i, Nk, { [y]: gu }, [gu], [0]], $T = [3, i, jk, 0, [A, O], [[0, 1], [0, { [n]: T }]]], UT = [3, i, Gk, { [y]: Ss }, [Fu], [[() => M0, 0]]], NT = [3, i, zk, 0, [A, O], [[0, 1], [0, { [n]: T }]]], GT = [3, i, Fk, 0, [Sg], [[() => zT, 16]]], jT = [3, i, Kk, 0, [A, O], [[0, 1], [0, { [n]: T }]]], zT = [3, i, Sg, 0, [Lg], [() => wD]], qT = [3, i, Jk, 0, [bg], [[() => FT, 16]]], HT = [3, i, Qk, 0, [A, O], [[0, 1], [0, { [n]: T }]]], FT = [3, i, bg, 0, [Ng, Vt, an], [() => DD, 0, () => Cm]], VT = [3, i, Vk, 0, [Zo], [[() => bm, 16]]], KT = [3, i, Wk, 0, [A, Tt, O], [[0, 1], [0, { [I]: ve }], [0, { [n]: T }]]], WT = [3, i, tB, 0, [A, O], [[0, 1], [0, { [n]: T }]]], ZT = [3, i, rB, 0, [Rs], [[() => z0, 16]]], XT = [3, i, oB, 0, [A, O], [[0, 1], [0, { [n]: T }]]], JT = [3, i, sB, 0, [ix], [[0, 16]]], QT = [3, i, iB, 0, [A, O], [[0, 1], [0, { [n]: T }]]], YT = [3, i, cB, 0, [rx], [[() => e2, 16]]], t1 = [3, i, uB, 0, [A, O], [[0, 1], [0, { [n]: T }]]], e1 = [3, i, pB, 0, [Ts], [[() => F0, 16]]], r1 = [3, i, gB, 0, [A, O], [[0, 1], [0, { [n]: T }]]], o1 = [3, i, dB, { [y]: Ds }, [ox], [0]], n1 = [3, i, fB, 0, [A, O], [[0, 1], [0, { [n]: T }]]], s1 = [3, i, hB, { [y]: Ie }, [Qs], [[() => tr, 0]]], i1 = [3, i, CB, 0, [A, O], [[0, 1], [0, { [n]: T }]]], a1 = [3, i, EB, { [y]: Us }, [Vt, Ug], [0, [0, { [y]: Mg }]]], c1 = [3, i, SB, 0, [A, O], [[0, 1], [0, { [n]: T }]]], u1 = [3, i, kB, { [y]: Ns }, [Ju, Gu, Tu, Yu], [() => H0, () => D0, () => O0, [() => Y0, 0]]], m1 = [3, i, BB, 0, [A, O], [[0, 1], [0, { [n]: T }]]], p1 = [3, i, AB, { [y]: hr }, [Le, qs, ft], [() => Ye, [() => ni, { [y]: Gs }], [0, { [n]: gt }]]], l1 = [3, i, wB, 0, [A, W, nt, st, O], [[0, 1], [0, 1], [0, { [I]: de }], [0, { [n]: at }], [0, { [n]: T }]]], d1 = [3, i, RB, { [y]: OB }, [Cr, He, nt, ft, jt, Gf, CA, Kt, EA], [[2, { [n]: ri }], [4, { [n]: Vu }], [0, { [n]: Fe }], [0, { [n]: gt }], 0, () => mO, [() => f1, 0], 0, 1]], f1 = [3, i, vB, 0, [X3, Ks, Wg, Fs, qe, Ws], [[1, { [y]: Vs }], 0, 0, 1, 2, [() => YI, { [z]: 1, [y]: Zs }]]], g1 = [3, i, TB, 0, [A, W, nt, Fs, Ks, Dt, Ae, It, st, O, nA], [[0, 1], [0, 1], [0, { [I]: de }], [1, { [n]: Tw }], [0, { [n]: Mw }], [0, { [n]: zt }], [() => $e, { [n]: Me }], [0, { [n]: qt }], [0, { [n]: at }], [0, { [n]: T }], [64, { [n]: Dw }]]], x1 = [3, i, UB, 0, [As], [[() => N0, { [tt]: 1, [y]: As }]]], h1 = [3, i, NB, 0, [A, W, nt, st, O], [[0, 1], [0, 1], [0, { [I]: de }], [0, { [n]: at }], [0, { [n]: T }]]], C1 = [3, i, LB, 0, [vs], [[() => U0, 16]]], y1 = [3, i, MB, 0, [A, O], [[0, 1], [0, { [n]: T }]]], E1 = [3, i, GB, 0, [Jo, Cr, Su, ze, rm, He, on, jt, te, ee, re, oe, ne, ye, Wu, nt, zr, qr, Hr, Fr, Ru, Vr, De, ks, ln, me, eo, Dt, It, se, Yt, Kt, ft, tm, Vs, sm, no, so, oo], [[() => Sn, 16], [2, { [n]: ri }], [0, { [n]: Zx }], [0, { [n]: gn }], [0, { [n]: B0 }], [4, { [n]: Vu }], [1, { [n]: rn }], [0, { [n]: jt }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, { [n]: _r }], [0, { [n]: Ar }], [0, { [n]: po }], [1, { [n]: b0 }], [0, { [n]: Fe }], [0, { [n]: Qo }], [0, { [n]: Yo }], [0, { [n]: tn }], [0, { [n]: en }], [0, { [n]: Ff }], [0, { [n]: nn }], [4, { [n]: De }], [0, { [n]: ks }], [0, { [n]: En }], [0, { [n]: Se }], [128, { [uo]: ho }], [0, { [n]: zt }], [0, { [n]: qt }], [() => Ft, { [n]: be }], [2, { [n]: ke }], [0, { [n]: yn }], [0, { [n]: gt }], [0, { [n]: P0 }], [1, { [n]: k0 }], [1, { [n]: A0 }], [0, { [n]: hn }], [5, { [n]: Cn }], [0, { [n]: xn }]]], S1 = [3, i, jB, 0, [A, Yr, Ag, cn, wg, W, Is, lx, dx, fx, gx, xx, hx, nt, Dt, Ae, It, st, Sr, O, zf], [[0, 1], [0, { [n]: yr }], [4, { [n]: ju }], [0, { [n]: to }], [4, { [n]: qu }], [0, 1], [0, { [n]: Is }], [0, { [I]: Qx }], [0, { [I]: Yx }], [0, { [I]: t0 }], [0, { [I]: e0 }], [0, { [I]: r0 }], [6, { [I]: o0 }], [0, { [I]: de }], [0, { [n]: zt }], [() => $e, { [n]: Me }], [0, { [n]: qt }], [0, { [n]: at }], [1, { [I]: ei }], [0, { [n]: T }], [0, { [n]: l0 }]]], b1 = [3, i, zB, 0, [Ls], [[() => G0, { [tt]: 1, [y]: Ls }]]], k1 = [3, i, qB, 0, [A, W, nt, st, O], [[0, 1], [0, 1], [0, { [I]: de }], [0, { [n]: at }], [0, { [n]: T }]]], B1 = [3, i, VB, { [y]: Ie }, [nt, Qs], [[0, { [n]: Fe }], [() => tr, 0]]], P1 = [3, i, WB, 0, [A, W, nt, O, st], [[0, 1], [0, 1], [0, { [I]: de }], [0, { [n]: T }], [0, { [n]: at }]]], _1 = [3, i, KB, 0, [Jo, ft], [[() => Sn, 16], [0, { [n]: gt }]]], A1 = [3, i, ZB, 0, [A, W, st, O], [[0, 1], [0, 1], [0, { [n]: at }], [0, { [n]: T }]]], R1 = [3, i, QB, 0, [ws], [[() => q0, 16]]], v1 = [3, i, YB, 0, [A, O], [[0, 1], [0, { [n]: T }]]], w1 = [3, i, kg, 0, [zx], [0]], O1 = [3, i, Uu, 0, [Nu, sx], [[() => T0, { [a0]: [i0, Xx] }], 0]], T0 = [3, i, Nu, 0, [Ou, Zb, Qr, lv, pn], [0, 0, 0, 0, [0, { [Iv]: 1, [y]: Ww }]]], T1 = [3, i, eP, 0, [bu, aS, iS, Bu, XE], [[0, { [n]: m0 }], [0, { [n]: Uv }], [0, { [n]: $v }], [0, { [n]: Gv }], [2, { [n]: Lv }]]], D1 = [3, i, rP, 0, [A, O], [[0, 1], [0, { [n]: T }]]], I1 = [3, i, sP, 0, [Cr, Su, ze, rm, tS, He, on, te, ee, re, oe, ne, ye, jt, Wu, nt, zr, qr, Hr, Fr, Vr, Ru, De, ks, ln, me, eo, Dt, It, se, Yt, Kt, ft, tm, Vs, sm, no, so, oo], [[2, { [n]: ri }], [0, { [n]: Zx }], [0, { [n]: gn }], [0, { [n]: B0 }], [0, { [n]: Mv }], [4, { [n]: Vu }], [1, { [n]: rn }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, { [n]: _r }], [0, { [n]: Ar }], [0, { [n]: po }], [0, { [n]: jt }], [1, { [n]: b0 }], [0, { [n]: Fe }], [0, { [n]: Qo }], [0, { [n]: Yo }], [0, { [n]: tn }], [0, { [n]: en }], [0, { [n]: nn }], [0, { [n]: Ff }], [4, { [n]: De }], [0, { [n]: ks }], [0, { [n]: En }], [0, { [n]: Se }], [128, { [uo]: ho }], [0, { [n]: zt }], [0, { [n]: qt }], [() => Ft, { [n]: be }], [2, { [n]: ke }], [0, { [n]: yn }], [0, { [n]: gt }], [0, { [n]: P0 }], [1, { [n]: k0 }], [1, { [n]: A0 }], [0, { [n]: hn }], [5, { [n]: Cn }], [0, { [n]: xn }]]], L1 = [3, i, iP, 0, [A, Yr, Ag, cn, wg, W, Is, lx, dx, fx, gx, xx, hx, nt, Dt, Ae, It, st, Sr, O, zf], [[0, 1], [0, { [n]: yr }], [4, { [n]: ju }], [0, { [n]: to }], [4, { [n]: qu }], [0, 1], [0, { [n]: Is }], [0, { [I]: Qx }], [0, { [I]: Yx }], [0, { [I]: t0 }], [0, { [I]: e0 }], [0, { [I]: r0 }], [6, { [I]: o0 }], [0, { [I]: de }], [0, { [n]: zt }], [() => $e, { [n]: Me }], [0, { [n]: qt }], [0, { [n]: at }], [1, { [I]: ei }], [0, { [n]: T }], [0, { [n]: l0 }]]], M1 = [-3, i, yP, { [le]: pe, [Ee]: 400 }, [], []];
Mt.for(i).registerError(M1, hs);
var D0 = [3, i, Gu, 0, [U3], [0]], I0 = [3, i, Hu, 0, [Qr, Ou], [0, 0]], L0 = [3, i, zu, 0, [Yf, HS, Og, IR], [() => DO, 0, () => Y1, () => QD]], $1 = [3, i, BP, 0, [lt, co], [0, [() => tr, { [z]: 1, [y]: Re }]]], ym = [3, i, Wo, 0, [Tt, Je, Vt, J3], [0, [() => U1, 0], 0, [() => nL, { [z]: 1, [y]: qx }]]], U1 = [3, i, _P, 0, [lt, Re, Xo], [0, () => Co, [() => $1, 0]]], N1 = [-3, i, hP, { [le]: pe, [Ee]: 403 }, [Kt, Lf], [0, 0]];
Mt.for(i).registerError(N1, ms);
var G1 = [-3, i, EP, { [le]: pe, [Ee]: 400 }, [], []];
Mt.for(i).registerError(G1, fs);
var j1 = [-3, i, AP, { [le]: pe, [Ee]: 400 }, [], []];
Mt.for(i).registerError(j1, gs);
var Em = [3, i, Ko, 0, [zs, uP, Je, Tt, CP, cA, M3], [[() => z1, 0], 2, () => H1, 0, 0, [() => HI, 0], () => V1]], z1 = [3, i, cP, 0, [Bx], [[() => F1, 0]]], q1 = [3, i, mP, 0, [Dx, Tx], [[() => fI, { [y]: wx }], [() => lI, { [y]: _x }]]], H1 = [3, i, pP, 0, [lt], [0]], F1 = [3, i, bP, 0, [zE, A, Eg, lt, Iu], [0, 0, 0, 0, [() => q1, 0]]], V1 = [3, i, kP, 0, [mk], [0]], K1 = [3, i, Bs, 0, [wu, sn], [0, () => Sm]], W1 = [3, i, vg, 0, [wu, jx, an, Js, om], [0, 0, () => Cm, 0, 0]], Z1 = [3, i, PP, 0, [wu, sn], [0, () => Sm]], X1 = [3, i, Ps, 0, [Xs, sn], [() => Bm, () => Sm]], J1 = [3, i, Tg, 0, [jx, an, Js, om, Xs], [0, () => Cm, 0, 0, () => Bm]], Q1 = [3, i, OP, 0, [Xs], [() => Bm]], Y1 = [3, i, vP, 0, [pn], [0]], tD = [3, i, wP, 0, [Qu], [0]], eD = [3, i, c_, 0, [Tt, a_, Lu, Je], [0, [0, { [y]: yS }], [64, { [z]: 1, [y]: Mu }], [() => km, 0]]], rD = [3, i, i_, 0, [ag, Kr, tk], [5, 1, 2]], oD = [3, i, T_, 0, [ze, Qr, lt, Je, Vt, tv, rA, Zg, Tf], [() => rD, 0, 0, [() => sD, 0], 0, [() => iL, { [z]: 1, [y]: Fx }], [() => WI, { [z]: 1, [y]: Xg }], () => $D, () => Zw]], nD = [3, i, D_, 0, [lt, co, Yg, tx], [0, [() => tr, { [z]: 1, [y]: Re }], 1, 1]], sD = [3, i, I_, 0, [lt, Re, Yg, tx, Xo], [0, () => Co, 1, 1, [() => nD, 0]]], iD = [3, i, qP, { [y]: HP }, [qe, ue, un, vf], [2, 0, 0, [() => LI, { [z]: 1, [y]: Vo }]]], aD = [3, i, FP, 0, [A, ue, O], [[0, 1], [0, { [I]: br }], [0, { [n]: T }]]], cD = [3, i, XP, 0, [qe, ue, un, Rg], [2, 0, 0, [() => zI, { [z]: 1, [y]: Wo }]]], uD = [3, i, JP, 0, [A, ue, O], [[0, 1], [0, { [I]: br }], [0, { [n]: T }]]], mD = [3, i, KP, { [y]: l_ }, [ue, Pg, qe, un], [0, [() => qI, { [z]: 1, [y]: Ko }], 2, 0]], pD = [3, i, WP, 0, [A, ue, O], [[0, 1], [0, { [I]: br }], [0, { [n]: T }]]], lD = [3, i, YP, { [y]: d_ }, [qe, ue, un, Ig], [2, 0, 0, [() => VI, { [z]: 1, [y]: Zo }]]], dD = [3, i, t_, 0, [A, ue, O], [[0, 1], [0, { [I]: br }], [0, { [n]: T }]]], fD = [3, i, e_, { [y]: NP }, [Pu, Le, ue, lt], [[() => Z0, 0], () => Ye, 0, 0]], gD = [3, i, r_, 0, [N_, ue, lt, Bu], [[1, { [I]: _v }], [0, { [I]: br }], [0, { [I]: dn }], [0, { [I]: Ev }]]], xD = [3, i, n_, { [y]: GP }, [Pu, ue], [[() => Z0, 0], 0]], hD = [3, i, s_, 0, [ue, j_], [[0, { [I]: br }], [1, { [I]: Av }]]], CD = [3, i, x_, { [y]: h_ }, [A, Hs, Vx, Vg, lt, nr, tA, jg, qe, ev, js, sr, ft], [0, 0, 0, 0, 0, 0, 0, 1, 2, [() => KI, { [z]: 1, [y]: dv }], [() => oi, { [z]: 1 }], 0, [0, { [n]: gt }]]], yD = [3, i, C_, 0, [A, nr, sr, Hs, jg, lt, Vx, O, st], [[0, 1], [0, { [I]: Ys }], [0, { [I]: ti }], [0, { [I]: Jx }], [1, { [I]: vv }], [0, { [I]: dn }], [0, { [I]: Tv }], [0, { [n]: T }], [0, { [n]: at }]]], ED = [3, i, E_, { [y]: Dg }, [qe, zg, X_, rg, Er, lt, nr, ro, js, sr, ft], [2, 0, 0, [() => Q0, { [z]: 1 }], 0, 0, 0, 1, [() => oi, { [z]: 1 }], 0, [0, { [n]: gt }]]], SD = [3, i, S_, 0, [A, nr, sr, zg, ro, lt, st, O, Zu], [[0, 1], [0, { [I]: Ys }], [0, { [I]: ti }], [0, { [I]: Pv }], [1, { [I]: um }], [0, { [I]: dn }], [0, { [n]: at }], [0, { [n]: T }], [64, { [n]: fm }]]], bD = [3, i, k_, { [y]: Dg }, [qe, rg, Er, lt, nr, ro, js, sr, TP, ue, un, kx, ft], [2, [() => Q0, { [z]: 1 }], 0, 0, 0, 1, [() => oi, { [z]: 1 }], 0, 1, 0, 0, 0, [0, { [n]: gt }]]], kD = [3, i, P_, 0, [A, nr, sr, ro, lt, ue, ik, kx, st, O, Zu], [[0, 1], [0, { [I]: Ys }], [0, { [I]: ti }], [1, { [I]: um }], [0, { [I]: dn }], [0, { [I]: br }], [2, { [I]: bv }], [0, { [I]: Ov }], [0, { [n]: at }], [0, { [n]: T }], [64, { [n]: fm }]]], BD = [3, i, B_, { [y]: M_ }, [qe, Hs, Wx, Vg, eA, fv, ng, Er, lt, nr, ro, js, sr, ft], [2, 0, 0, 0, 0, [() => XI, { [z]: 1, [y]: gv }], [() => UI, { [z]: 1, [y]: Cr }], 0, 0, 0, 1, [() => oi, { [z]: 1 }], 0, [0, { [n]: gt }]]], PD = [3, i, __, 0, [A, nr, sr, Hs, ro, lt, Wx, O, st, Zu], [[0, 1], [0, { [I]: Ys }], [0, { [I]: ti }], [0, { [I]: Jx }], [1, { [I]: um }], [0, { [I]: dn }], [0, { [I]: Dv }], [0, { [n]: T }], [0, { [n]: at }], [64, { [n]: fm }]]], _D = [3, i, v_, { [y]: w_ }, [Of, If, A, W, ir, Ks, Wg, Fs, qe, Ws, Hu, Le, Kt, ft, Q, ye], [[4, { [n]: c0 }], [0, { [n]: u0 }], 0, 0, 0, 0, 0, 1, 2, [() => QI, { [z]: 1, [y]: Zs }], () => I0, () => Ye, 0, [0, { [n]: gt }], 0, 0]], AD = [3, i, O_, 0, [A, W, Fs, Ks, ir, st, O, Dt, Ae, It], [[0, 1], [0, 1], [1, { [I]: Rv }], [0, { [I]: wv }], [0, { [I]: fn }], [0, { [n]: at }], [0, { [n]: T }], [0, { [n]: zt }], [() => $e, { [n]: Me }], [0, { [n]: qt }]]], RD = [3, i, p_, 0, [pn, Er], [0, 0]], M0 = [3, i, Fu, 0, [G3, Ux, Z3, Gx], [0, [() => oL, 0], 0, [() => EI, 0]]], vD = [3, i, hu, 0, [Ps, Bs], [() => X1, () => K1]], wD = [3, i, Lg, 0, [ig, Tg, vg], [() => uT, () => J1, () => W1]], OD = [3, i, $g, 0, [Er, am], [0, 0]], TD = [3, i, Cu, 0, [Ix], [() => eI]], DD = [3, i, Ng, 0, [Lx], [() => rI]], Sm = [3, i, H_, 0, [p3, IP], [0, 0]], ID = [3, i, qg, 0, [Vt, ok], [0, () => V0]], LD = [3, i, $_, 0, [lt, co, Df], [0, [() => tr, { [z]: 1, [y]: Re }], 0]], bm = [3, i, Zo, 0, [Tt, Je], [0, [() => uL, 0]]], MD = [3, i, Gg, 0, [ir, W, RP, Kt, Le, Hu, Q, ye], [0, 0, 4, 0, () => Ye, () => I0, 0, 0]], $D = [3, i, Zg, 0, [Fg, Kg], [1, 1]], UD = [3, i, Xg, 0, [Fg, Kt, Kg], [1, 0, 1]], ND = [-3, i, J_, { [le]: pe, [Ee]: 404 }, [], []];
Mt.for(i).registerError(ND, us);
var GD = [-3, i, Q_, { [le]: pe, [Ee]: 404 }, [], []];
Mt.for(i).registerError(GD, ps);
var jD = [-3, i, Y_, { [le]: pe, [Ee]: 404 }, [], []];
Mt.for(i).registerError(jD, ss);
var zD = [-3, i, Z_, { [le]: pe }, [], []];
Mt.for(i).registerError(zD, ls);
var $0 = [3, i, yu, 0, [q3, NR, m_, ug], [[() => sL, { [z]: 1, [y]: $x }], [() => tL, { [z]: 1, [y]: mx }], [() => FI, { [z]: 1, [y]: ES }], () => gT]], km = [3, i, W_, 0, [W], [[() => Y2, { [y]: B3 }]]], qD = [3, i, ex, 0, [W, He, jt, Q, ye, ao, Kt, Le, em], [0, 4, 0, [64, { [z]: 1 }], 0, 1, 0, () => Ye, () => K0]], HD = [-3, i, sA, { [le]: pe, [Ee]: 403 }, [], []];
Mt.for(i).registerError(HD, Cs);
var FD = [3, i, uA, 0, [W, nt, jt, f_, ao], [0, 0, 0, 6, 1]], U0 = [3, i, vs, 0, [pA, io], [0, () => VD]], N0 = [3, i, dA, 0, [Vt], [0]], G0 = [3, i, fA, 0, [Hg, c3], [0, 5]], VD = [3, i, gA, 0, [sg], [() => LO]], KD = [-3, i, hA, { [le]: pe, [Ee]: 403 }, [], []];
Mt.for(i).registerError(KD, is);
var WD = [3, i, yA, 0, [Sr, ao, te, ee, re, oe, ne], [1, 1, 0, 0, 0, 0, 0]], ZD = [3, i, bA, 0, [jt, Q, ye, ao, Kt, W, nt, _g, He, Le, em], [0, [64, { [z]: 1 }], 0, 1, 0, 0, 0, 2, 4, () => Ye, () => K0]], XD = [3, i, Jg, 0, [L3], [[() => tI, 0]]], j0 = [3, i, Xu, 0, [Yf, Og], [() => IO, () => tD]], Ye = [3, i, Le, 0, [Ou, Qr], [0, 0]], z0 = [3, i, Rs, 0, [mn], [[() => JI, { [z]: 1, [y]: io }]]], JD = [3, i, iA, 0, [Qg], [0]], QD = [3, i, lR, 0, [], []], YD = [3, i, Zs, 0, [Sr, He, jt, ao, te, ee, re, oe, ne], [1, 4, 0, 1, 0, 0, 0, 0, 0]], t2 = [3, i, Os, { [y]: Os }, [mR], [0]], e2 = [3, i, rx, 0, [kf], [[2, { [y]: kf }]]], r2 = [3, i, ax, 0, [Nf, $f, Uf], [1, 1, 1]], o2 = [3, i, pR, 0, [cg], [[() => r2, { [cm]: 1 }]]], q0 = [3, i, ws, 0, [Ef, Bf, Sf, Pf], [[2, { [y]: Ef }], [2, { [y]: Bf }], [2, { [y]: Sf }], [2, { [y]: Pf }]]], n2 = [3, i, wA, 0, [A, Ct, Q, O, Es], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [0, { [n]: T }], [() => v0, { [tt]: 1, [y]: Es }]]], s2 = [3, i, AA, 0, [A, ys, O, Q], [[0, 1], [() => Qw, { [tt]: 1, [y]: ys }], [0, { [n]: T }], [0, { [n]: mt }]]], i2 = [3, i, OA, 0, [jr, hr, A, Ct, Q, Wr, Zr, Xr, $u, Jr, O], [[0, { [n]: mo }], [() => w0, { [tt]: 1, [y]: hr }], [0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [0, { [n]: lo }], [0, { [n]: fo }], [0, { [n]: go }], [0, { [n]: lm }], [0, { [n]: xo }], [0, { [n]: T }]]], a2 = [3, i, RA, 0, [A, Tt, Vo, O], [[0, 1], [0, { [I]: ve }], [() => hm, { [tt]: 1, [y]: Vo }], [0, { [n]: T }]]], c2 = [3, i, IA, 0, [A, bs, Ct, Q, O], [[0, 1], [() => bO, { [tt]: 1, [y]: bs }], [0, { [n]: ht }], [0, { [n]: mt }], [0, { [n]: T }]]], u2 = [3, i, MA, 0, [A, Ct, Q, $s, O], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [() => W0, { [tt]: 1, [y]: $s }], [0, { [n]: T }]]], m2 = [3, i, GA, 0, [A, Tt, O, Wo], [[0, 1], [0, { [I]: ve }], [0, { [n]: T }], [() => ym, { [tt]: 1, [y]: Wo }]]], p2 = [3, i, UA, 0, [A, Tt, Ko, O], [[0, 1], [0, { [I]: ve }], [() => Em, { [tt]: 1, [y]: Ko }], [0, { [n]: T }]]], l2 = [3, i, qA, 0, [im], [[0, { [n]: xm }]]], d2 = [3, i, HA, 0, [A, Q, xu, O, im], [[0, 1], [0, { [n]: mt }], [() => cO, { [tt]: 1, [y]: xu }], [0, { [n]: T }], [0, { [n]: xm }]]], f2 = [3, i, FA, 0, [A, Ss, Ct, Q, O], [[0, 1], [() => uO, { [tt]: 1, [y]: Ss }], [0, { [n]: ht }], [0, { [n]: mt }], [0, { [n]: T }]]], g2 = [3, i, KA, 0, [A, Tt, Zo, O], [[0, 1], [0, { [I]: ve }], [() => bm, { [tt]: 1, [y]: Zo }], [0, { [n]: T }]]], x2 = [3, i, ZA, 0, [A, yu, O, h3], [[0, 1], [() => $0, { [tt]: 1, [y]: yu }], [0, { [n]: T }], [2, { [n]: Fw }]]], h2 = [3, i, JA, 0, [A, Ct, O, Rs, Q], [[0, 1], [0, { [n]: ht }], [0, { [n]: T }], [() => z0, { [tt]: 1, [y]: Rs }], [0, { [n]: mt }]]], C2 = [3, i, YA, 0, [A, Ct, Q, LS, ix, O], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [2, { [n]: jv }], [0, 16], [0, { [n]: T }]]], y2 = [3, i, oR, 0, [A, Ct, Q, Ts, Hx, O], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [() => F0, { [tt]: 1, [y]: Ts }], [0, { [n]: p0 }], [0, { [n]: T }]]], E2 = [3, i, rR, 0, [A, Ct, Q, Ds, O], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [() => K2, { [tt]: 1, [y]: Ds }], [0, { [n]: T }]]], S2 = [3, i, sR, 0, [A, Ct, Q, Ie, O], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [() => Pm, { [tt]: 1, [y]: Ie }], [0, { [n]: T }]]], b2 = [3, i, aR, 0, [A, Ct, Q, Ku, Us, O], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [0, { [n]: dm }], [() => OI, { [tt]: 1, [y]: Us }], [0, { [n]: T }]]], k2 = [3, i, uR, 0, [A, Ct, Q, Ns, O], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [() => TI, { [tt]: 1, [y]: Ns }], [0, { [n]: T }]]], B2 = [3, i, xR, 0, [ft], [[0, { [n]: gt }]]], P2 = [3, i, hR, 0, [jr, hr, A, Ct, Q, Wr, Zr, Xr, $u, Jr, W, st, nt, O], [[0, { [n]: mo }], [() => w0, { [tt]: 1, [y]: hr }], [0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [0, { [n]: lo }], [0, { [n]: fo }], [0, { [n]: go }], [0, { [n]: lm }], [0, { [n]: xo }], [0, 1], [0, { [n]: at }], [0, { [I]: de }], [0, { [n]: T }]]], _2 = [3, i, bR, 0, [ft], [[0, { [n]: gt }]]], A2 = [3, i, kR, 0, [A, W, As, st, nt, Ct, Q, O], [[0, 1], [0, 1], [() => N0, { [tt]: 1, [y]: As }], [0, { [n]: at }], [0, { [I]: de }], [0, { [n]: ht }], [0, { [n]: mt }], [0, { [n]: T }]]], R2 = [3, i, yR, 0, [ft], [[0, { [n]: gt }]]], v2 = [3, i, ER, 0, [A, vs, st, Hx, Ct, Q, O], [[0, 1], [() => U0, { [tt]: 1, [y]: vs }], [0, { [n]: at }], [0, { [n]: p0 }], [0, { [n]: ht }], [0, { [n]: mt }], [0, { [n]: T }]]], w2 = [3, i, BR, 0, [ze, jt, te, ee, re, oe, ne, ye, me, nt, Dt, It, se, Qe, Yt, ao, ft], [[0, { [n]: gn }], [0, { [n]: jt }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, { [n]: _r }], [0, { [n]: Ar }], [0, { [n]: po }], [0, { [n]: Se }], [0, { [n]: Fe }], [0, { [n]: zt }], [0, { [n]: qt }], [() => Ft, { [n]: be }], [() => cr, { [n]: ar }], [2, { [n]: ke }], [1, { [n]: Lw }], [0, { [n]: gt }]]], O2 = [3, i, PR, 0, [jr, Jo, A, zr, qr, Hr, Fr, on, Ct, Vr, Q, te, ee, re, oe, ne, De, Yr, cn, Wr, Zr, Xr, Jr, W, Cv, eo, me, Kt, ln, Dt, Ae, It, se, Qe, Yt, st, Ie, no, so, oo, O], [[0, { [n]: mo }], [() => Sn, 16], [0, 1], [0, { [n]: Qo }], [0, { [n]: Yo }], [0, { [n]: tn }], [0, { [n]: en }], [1, { [n]: rn }], [0, { [n]: ht }], [0, { [n]: nn }], [0, { [n]: mt }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, { [n]: _r }], [0, { [n]: Ar }], [4, { [n]: De }], [0, { [n]: yr }], [0, { [n]: to }], [0, { [n]: lo }], [0, { [n]: fo }], [0, { [n]: go }], [0, { [n]: xo }], [0, 1], [1, { [n]: Kw }], [128, { [uo]: ho }], [0, { [n]: Se }], [0, { [n]: yn }], [0, { [n]: En }], [0, { [n]: zt }], [() => $e, { [n]: Me }], [0, { [n]: qt }], [() => Ft, { [n]: be }], [() => cr, { [n]: ar }], [2, { [n]: ke }], [0, { [n]: at }], [0, { [n]: gm }], [0, { [n]: hn }], [5, { [n]: Cn }], [0, { [n]: xn }], [0, { [n]: T }]]], T2 = [3, i, _R, 0, [ft], [[0, { [n]: gt }]]], D2 = [3, i, AR, 0, [A, W, Ls, st, nt, ku, Ct, Q, O], [[0, 1], [0, 1], [() => G0, { [tt]: 1, [y]: Ls }], [0, { [n]: at }], [0, { [I]: de }], [2, { [n]: mm }], [0, { [n]: ht }], [0, { [n]: mt }], [0, { [n]: T }]]], I2 = [3, i, wR, 0, [nt], [[0, { [n]: Fe }]]], L2 = [3, i, OR, 0, [A, W, nt, Ct, Q, Ie, O, st], [[0, 1], [0, 1], [0, { [I]: de }], [0, { [n]: ht }], [0, { [n]: mt }], [() => Pm, { [tt]: 1, [y]: Ie }], [0, { [n]: T }], [0, { [n]: at }]]], M2 = [3, i, DR, 0, [A, Ct, Q, ws, O], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [() => q0, { [tt]: 1, [y]: ws }], [0, { [n]: T }]]], $2 = [3, i, mx, 0, [Tt, $R, Lu, Je], [0, [0, { [y]: jR }], [64, { [z]: 1, [y]: Mu }], [() => km, 0]]], Bm = [3, i, Xs, 0, [ze, Kr], [0, 1]], U2 = [3, i, qR, 0, [nx], [[21, { [cm]: 1 }]]], N2 = [3, i, bx, 0, [Bg, aP, cx, FR, VR], [0, 0, 0, 0, 0]], H0 = [3, i, Ju, 0, [Bg, cx], [0, 0]], G2 = [3, i, WR, 0, [], []], j2 = [3, i, JR, 0, [A, W, s3, _b, Rb, Ab, vb, y3, S3, E3, b3, qS], [[0, 1], [0, 1], [0, { [n]: Nw }], [0, { [n]: yr }], [0, { [n]: to }], [4, { [n]: ju }], [4, { [n]: qu }], [0, { [n]: Gw }], [0, { [n]: zw }], [6, { [n]: jw }], [6, { [n]: qw }], [0, { [n]: Hv, [Bv]: 1 }]]], z2 = [3, i, Cx, 0, [Vt], [0]], F0 = [3, i, Ts, 0, [m3, mn], [0, [() => eL, { [z]: 1, [y]: io }]]], q2 = [3, i, r3, 0, [Qr, LR, lt, Je, Vt, Ox, lg, zs, og], [0, 1, 0, [() => F2, 0], 0, () => pI, () => xT, () => cT, () => tT]], H2 = [3, i, t3, 0, [lt, co], [0, [() => tr, { [z]: 1, [y]: Re }]]], F2 = [3, i, e3, 0, [lt, Re, Xo], [0, () => Co, [() => H2, 0]]], V2 = [3, i, Sx, 0, [Vt, Q3], [0, () => V0]], V0 = [3, i, i3, 0, [K_], [1]], K2 = [3, i, Ds, 0, [ox], [0]], W2 = [3, i, yx, 0, [nk], [2]], Z2 = [3, i, ZR, 0, [ft, XR], [[0, { [n]: gt }], [0, { [n]: $w }]]], X2 = [3, i, QR, 0, [A, W, nt, Eu, st, Q, O], [[0, 1], [0, 1], [0, { [I]: de }], [() => J2, { [tt]: 1, [y]: Eu }], [0, { [n]: at }], [0, { [n]: mt }], [0, { [n]: T }]]], J2 = [3, i, Eu, 0, [Kr, kg, pn, zx, Wb, Rx, Jg], [1, () => w1, 0, 0, 0, () => iI, [() => XD, 0]]], K0 = [3, i, em, 0, [SP, zR], [2, 4]], Q2 = [3, i, Ex, 0, [eg, bx], [() => xO, () => N2]], Y2 = [3, i, k3, 0, [ck], [[() => jI, { [z]: 1, [y]: yg }]]], tI = [3, i, P3, 0, [cS, lt, Iu, uS, Gs, Ie, Kx, Kt], [0, 0, [() => mT, 0], 0, [() => ni, 0], [() => Pm, 0], [() => aL, 0], 0]], eI = [3, i, Ix, 0, [nm, Js], [0, 0]], rI = [3, i, Lx, 0, [nm, Js, om, Nx], [0, 0, 0, 0]], oI = [3, i, vx, 0, [$3, gg], [1, 1]], nI = [3, i, v3, 0, [nx], [[() => mL, 16]]], sI = [3, i, w3, 0, [A, W, Dt, Ae, It, hg, fg, yx, zu, Xu, vx, O], [[0, 1], [0, 1], [0, { [n]: zt }], [() => $e, { [n]: Me }], [0, { [n]: qt }], 0, 0, () => W2, () => L0, () => j0, () => oI, [0, { [n]: T }]]], iI = [3, i, Rx, 0, [zu, fg, hg, Xu], [() => L0, 0, 0, () => j0]], aI = [3, i, T3, 0, [O3, $P], [0, [() => Ft, 0]]], W0 = [3, i, $s, 0, [mn], [[() => rL, { [z]: 1, [y]: io }]]], cI = [3, i, D3, 0, [YE, Yt, Mf], [[() => aI, 0], 2, [() => oO, 0]]], uI = [3, i, g3, 0, [yf, _f, Af, ze], [[0, { [y]: yf }], [() => Rf, { [y]: _f }], [() => Rf, { [y]: Af }], [4, { [y]: ze }]]], mI = [3, i, Ms, { [y]: Ms }, [], []], pI = [3, i, Ox, 0, [Ax, Cx], [() => dI, () => z2]], lI = [3, i, Tx, { [y]: _x }, [DP], [[() => Ft, 0]]], dI = [3, i, Ax, 0, [Vt], [0]], fI = [3, i, Dx, { [y]: wx }, [], []], gI = [3, i, Mx, 0, [Nf, $f, Uf], [1, 1, 1]], xI = [3, i, C3, 0, [cg], [[() => gI, { [cm]: 1 }]]], hI = [3, i, Px, 0, [Pb], [() => CI]], CI = [3, i, d3, 0, [SA, zs], [0, () => eO]], Co = [3, i, Re, 0, [W, am], [0, 0]], Pm = [3, i, Ie, 0, [Qs], [[() => tr, 0]]], yI = [3, i, F3, 0, [Nu, sx], [[() => T0, { [a0]: [i0, Xx] }], 0]], EI = [3, i, Gx, 0, [Ms, Os], [[() => mI, { [y]: Ms }], [() => t2, { [y]: Os }]]], SI = [3, i, qx, 0, [Kr, Lf], [1, 0]], bI = [-3, i, W3, { [le]: pe, [Ee]: 400 }, [], []];
Mt.for(i).registerError(bI, xs);
var kI = [3, i, $x, 0, [Tt, N3, Lu, Je], [0, [0, { [y]: Y3 }], [64, { [z]: 1, [y]: Mu }], [() => km, 0]]], BI = [3, i, Fx, 0, [ag, Kr, Kt], [5, 1, 0]], PI = [3, i, ov, 0, [A, Ct, Q, Bs, O], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [() => Z1, { [tt]: 1, [y]: Bs }], [0, { [n]: T }]]], _I = [3, i, sv, 0, [A, Ct, Q, Ps, O], [[0, 1], [0, { [n]: ht }], [0, { [n]: mt }], [() => Q1, { [tt]: 1, [y]: Ps }], [0, { [n]: T }]]], AI = [3, i, cv, 0, [tg, Hf, me, Dt, It, se, Yt, ft], [[0, { [n]: S0 }], [() => SO, 16], [0, { [n]: Se }], [0, { [n]: zt }], [0, { [n]: qt }], [() => Ft, { [n]: be }], [2, { [n]: ke }], [0, { [n]: gt }]]], RI = [3, i, uv, 0, [A, Vf, Kf, Wf, Zf, Xf, US, W, Sr, ir, Dt, Ae, It, Jf, vu, Qf, st, O, dg], [[0, 1], [0, { [n]: d0 }], [0, { [n]: f0 }], [4, { [n]: g0 }], [0, { [n]: x0 }], [4, { [n]: h0 }], [0, { [n]: qv }], [0, 1], [1, { [I]: ei }], [0, { [I]: fn }], [0, { [n]: zt }], [() => $e, { [n]: Me }], [0, { [n]: qt }], [0, { [n]: C0 }], [() => R0, { [n]: y0 }], [0, { [n]: E0 }], [0, { [n]: at }], [0, { [n]: T }], [0, { [n]: _0 }]]], vI = [3, i, mv, 0, [me, jt, te, ee, re, oe, ne, Dt, It, se, Yt, ft], [[0, { [n]: Se }], [0, { [n]: jt }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, { [n]: _r }], [0, { [n]: Ar }], [0, { [n]: zt }], [0, { [n]: qt }], [() => Ft, { [n]: be }], [2, { [n]: ke }], [0, { [n]: gt }]]], wI = [3, i, pv, 0, [Jo, A, on, Ct, Q, te, ee, re, oe, ne, W, Sr, ir, Dt, Ae, It, st, O], [[() => Sn, 16], [0, 1], [1, { [n]: rn }], [0, { [n]: ht }], [0, { [n]: mt }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, { [n]: _r }], [0, { [n]: Ar }], [0, 1], [1, { [I]: ei }], [0, { [I]: fn }], [0, { [n]: zt }], [() => $e, { [n]: Me }], [0, { [n]: qt }], [0, { [n]: at }], [0, { [n]: T }]]], OI = [3, i, Us, 0, [Ug, Vt], [[0, { [y]: Mg }], 0]], TI = [3, i, Ns, 0, [Tu, Gu, Ju, Yu], [() => O0, () => D0, () => H0, [() => Y0, 0]]], DI = [3, i, hv, 0, [n3, a3, Jo, x3, mg, pg, Su, zr, qr, Hr, Fr, on, Ru, Vr, te, ee, re, oe, ne, Cr, jt, De, ze, He, Wu, eo, no, oo, so, Vs, tm, ft, rm, me, Dt, se, It, Kt, sm, nt, Yt], [[0, { [kv]: 1, [n]: Uw }], [0, { [n]: Hw }], [() => Sn, 16], [1, { [n]: _w }], [0, { [n]: Fv }], [0, { [n]: Vv }], [0, { [n]: rw }], [0, { [n]: Kv }], [0, { [n]: Wv }], [0, { [n]: Zv }], [0, { [n]: Xv }], [1, { [n]: rn }], [0, { [n]: Jv }], [0, { [n]: Qv }], [0, { [n]: ow }], [0, { [n]: nw }], [0, { [n]: sw }], [0, { [n]: iw }], [0, { [n]: aw }], [2, { [n]: cw }], [0, { [n]: Yv }], [4, { [n]: tw }], [0, { [n]: uw }], [4, { [n]: ew }], [1, { [n]: mw }], [128, { [uo]: ho }], [0, { [n]: dw }], [0, { [n]: lw }], [5, { [n]: fw }], [1, { [n]: pw }], [0, { [n]: hw }], [0, { [n]: xw }], [0, { [n]: gw }], [0, { [n]: yw }], [0, { [n]: bw }], [() => Ft, { [n]: Ew }], [0, { [n]: kw }], [0, { [n]: Cw }], [1, { [n]: Bw }], [0, { [n]: Pw }], [2, { [n]: Sw }]]], K = "unit", II = [-3, s0, "S3ServiceException", 0, [], []];
Mt.for(s0).registerError(II, wt);
var LI = [1, i, vf, 0, [() => hm, 0]], Z0 = [1, i, Pu, 0, [() => nO, { [y]: A }]];
var oi = [1, i, TS, 0, () => pO], MI = [1, i, DS, 0, () => dO], X0 = [1, i, _u, 0, [() => kO, 0]], $I = [1, i, Gb, 0, () => QO], UI = [1, i, ng, 0, () => YO], NI = [1, i, ek, 0, [0, { [y]: Du }]], GI = [1, i, xg, 0, () => fT];
var jI = [1, i, ak, 0, () => hT], ni = [1, i, qs, 0, [() => O1, { [y]: Uu }]], zI = [1, i, Rg, 0, [() => ym, 0]], qI = [1, i, Pg, 0, [() => Em, 0]], HI = [1, i, xP, 0, [0, { [y]: uk }]], FI = [1, i, u_, 0, [() => eD, 0]], J0 = [1, i, L_, 0, [() => oD, 0]], VI = [1, i, Ig, 0, [() => bm, 0]], KI = [1, i, F_, 0, () => MD], WI = [1, i, oA, 0, () => UD];
var ZI = [1, i, mA, 0, () => FD], Q0 = [1, i, xA, 0, [() => qD, 0]], XI = [1, i, kA, 0, [() => ZD, 0]];
var JI = [1, i, aA, 0, () => JD], QI = [1, i, Ws, 0, () => YD], YI = [1, i, dR, 0, () => WD], tL = [1, i, UR, 0, [() => $2, 0]], eL = [1, i, o3, 0, [() => q2, 0]], Y0 = [1, i, Yu, 0, [() => Q2, { [y]: Ex }]], rL = [1, i, I3, 0, [() => cI, 0]], tr = [1, i, Qs, 0, [() => Co, { [y]: Re }]], oL = [1, i, Ux, 0, [() => yI, { [y]: Uu }]], nL = [1, i, V3, 0, () => SI], sL = [1, i, z3, 0, [() => kI, 0]], iL = [1, i, K3, 0, () => BI], aL = [1, i, Kx, 0, [() => OD, { [y]: $g }]];
var cL = [4, i, NE, 0, [lt, Re, Xo], [0, () => Co, [() => tO, 0]]], uL = [4, i, z_, 0, [lt, Re, Df, Xo], [0, () => Co, 0, [() => LD, 0]]], mL = [4, i, R3, { [n0]: 1 }, [u3, Mx, ax, KS, gg], [[() => U2, 0], [() => xI, 0], [() => o2, 0], () => hO, () => dT]], th = [9, i, HE, { [v]: ["DELETE", "/{Key+}?x-id=AbortMultipartUpload", 204] }, () => Jw, () => Xw], eh = [9, i, jf, { [v]: ["POST", "/{Key+}", 200] }, () => gO, () => fO], rh = [9, i, RS, { [v]: ["PUT", "/{Key+}?x-id=CopyObject", 200] }, () => yO, () => CO], oh = [9, i, mS, { [v]: ["PUT", "/", 200] }, () => RO, () => AO], nh = [9, i, pS, { [it]: "-", [v]: ["POST", "/?metadataConfiguration", 200] }, () => PO, () => K], sh = [9, i, dS, { [it]: "-", [v]: ["POST", "/?metadataTable", 200] }, () => _O, () => K], ih = [9, i, AS, { [v]: ["POST", "/{Key+}?uploads", 200] }, () => wO, () => vO], ah = [9, i, zS, { [v]: ["GET", "/?session", 200] }, () => TO, () => OO], ch = [9, i, ZS, { [v]: ["DELETE", "/", 204] }, () => ZO, () => K], uh = [9, i, XS, { [v]: ["DELETE", "/?analytics", 204] }, () => $O, () => K], mh = [9, i, QS, { [v]: ["DELETE", "/?cors", 204] }, () => UO, () => K], ph = [9, i, tb, { [v]: ["DELETE", "/?encryption", 204] }, () => NO, () => K], lh = [9, i, nb, { [v]: ["DELETE", "/?intelligent-tiering", 204] }, () => GO, () => K], dh = [9, i, rb, { [v]: ["DELETE", "/?inventory", 204] }, () => jO, () => K], fh = [9, i, ib, { [v]: ["DELETE", "/?lifecycle", 204] }, () => zO, () => K], gh = [9, i, cb, { [v]: ["DELETE", "/?metadataConfiguration", 204] }, () => qO, () => K], xh = [9, i, lb, { [v]: ["DELETE", "/?metadataTable", 204] }, () => HO, () => K], hh = [9, i, pb, { [v]: ["DELETE", "/?metrics", 204] }, () => FO, () => K], Ch = [9, i, fb, { [v]: ["DELETE", "/?ownershipControls", 204] }, () => VO, () => K], yh = [9, i, xb, { [v]: ["DELETE", "/?policy", 204] }, () => KO, () => K], Eh = [9, i, Eb, { [v]: ["DELETE", "/?replication", 204] }, () => WO, () => K], Sh = [9, i, Sb, { [v]: ["DELETE", "/?tagging", 204] }, () => XO, () => K], bh = [9, i, kb, { [v]: ["DELETE", "/?website", 204] }, () => JO, () => K], kh = [9, i, jb, { [v]: ["DELETE", "/{Key+}?x-id=DeleteObject", 204] }, () => rT, () => eT], Bh = [9, i, zb, { [it]: "-", [v]: ["POST", "/?delete", 200] }, () => nT, () => oT], Ph = [9, i, $b, { [v]: ["DELETE", "/{Key+}?tagging", 204] }, () => iT, () => sT], _h = [9, i, qb, { [v]: ["DELETE", "/?publicAccessBlock", 204] }, () => aT, () => K], Ah = [9, i, pk, { [v]: ["GET", "/?abac", 200] }, () => yT, () => CT], Rh = [9, i, lk, { [v]: ["GET", "/?accelerate", 200] }, () => ST, () => ET], vh = [9, i, bk, { [v]: ["GET", "/?acl", 200] }, () => kT, () => bT], wh = [9, i, hk, { [v]: ["GET", "/?analytics&x-id=GetBucketAnalyticsConfiguration", 200] }, () => PT, () => BT], Oh = [9, i, kk, { [v]: ["GET", "/?cors", 200] }, () => AT, () => _T], Th = [9, i, _k, { [v]: ["GET", "/?encryption", 200] }, () => vT, () => RT], Dh = [9, i, Tk, { [v]: ["GET", "/?intelligent-tiering&x-id=GetBucketIntelligentTieringConfiguration", 200] }, () => OT, () => wT], Ih = [9, i, vk, { [v]: ["GET", "/?inventory&x-id=GetBucketInventoryConfiguration", 200] }, () => DT, () => TT], Lh = [9, i, Mk, { [v]: ["GET", "/?lifecycle", 200] }, () => LT, () => IT], Mh = [9, i, Lk, { [v]: ["GET", "/?location", 200] }, () => $T, () => MT], $h = [9, i, qk, { [v]: ["GET", "/?logging", 200] }, () => NT, () => UT], Uh = [9, i, Hk, { [v]: ["GET", "/?metadataConfiguration", 200] }, () => jT, () => GT], Nh = [9, i, Xk, { [v]: ["GET", "/?metadataTable", 200] }, () => HT, () => qT], Gh = [9, i, Zk, { [v]: ["GET", "/?metrics&x-id=GetBucketMetricsConfiguration", 200] }, () => KT, () => VT], jh = [9, i, Yk, { [v]: ["GET", "/?notification", 200] }, () => WT, () => $0], zh = [9, i, eB, { [v]: ["GET", "/?ownershipControls", 200] }, () => XT, () => ZT], qh = [9, i, nB, { [v]: ["GET", "/?policy", 200] }, () => QT, () => JT], Hh = [9, i, aB, { [v]: ["GET", "/?policyStatus", 200] }, () => t1, () => YT], Fh = [9, i, mB, { [v]: ["GET", "/?replication", 200] }, () => r1, () => e1], Vh = [9, i, lB, { [v]: ["GET", "/?requestPayment", 200] }, () => n1, () => o1], Kh = [9, i, xB, { [v]: ["GET", "/?tagging", 200] }, () => i1, () => s1], Wh = [9, i, yB, { [v]: ["GET", "/?versioning", 200] }, () => c1, () => a1], Zh = [9, i, bB, { [v]: ["GET", "/?website", 200] }, () => m1, () => u1], Xh = [9, i, PB, { [it]: "-", [v]: ["GET", "/{Key+}?x-id=GetObject", 200] }, () => S1, () => E1], Jh = [9, i, _B, { [v]: ["GET", "/{Key+}?acl", 200] }, () => l1, () => p1], Qh = [9, i, DB, { [v]: ["GET", "/{Key+}?attributes", 200] }, () => g1, () => d1], Yh = [9, i, $B, { [v]: ["GET", "/{Key+}?legal-hold", 200] }, () => h1, () => x1], tC = [9, i, IB, { [v]: ["GET", "/?object-lock", 200] }, () => y1, () => C1], eC = [9, i, HB, { [v]: ["GET", "/{Key+}?retention", 200] }, () => k1, () => b1], rC = [9, i, FB, { [v]: ["GET", "/{Key+}?tagging", 200] }, () => P1, () => B1], oC = [9, i, XB, { [v]: ["GET", "/{Key+}?torrent", 200] }, () => A1, () => _1], nC = [9, i, JB, { [v]: ["GET", "/?publicAccessBlock", 200] }, () => v1, () => R1], sC = [9, i, tP, { [v]: ["HEAD", "/", 200] }, () => D1, () => T1], iC = [9, i, nP, { [v]: ["HEAD", "/{Key+}", 200] }, () => L1, () => I1], aC = [9, i, zP, { [v]: ["GET", "/?analytics&x-id=ListBucketAnalyticsConfigurations", 200] }, () => aD, () => iD], cC = [9, i, ZP, { [v]: ["GET", "/?intelligent-tiering&x-id=ListBucketIntelligentTieringConfigurations", 200] }, () => uD, () => cD], uC = [9, i, VP, { [v]: ["GET", "/?inventory&x-id=ListBucketInventoryConfigurations", 200] }, () => pD, () => mD], mC = [9, i, QP, { [v]: ["GET", "/?metrics&x-id=ListBucketMetricsConfigurations", 200] }, () => dD, () => lD], pC = [9, i, jP, { [v]: ["GET", "/?x-id=ListBuckets", 200] }, () => gD, () => fD], lC = [9, i, o_, { [v]: ["GET", "/?x-id=ListDirectoryBuckets", 200] }, () => hD, () => xD], dC = [9, i, g_, { [v]: ["GET", "/?uploads", 200] }, () => yD, () => CD], fC = [9, i, y_, { [v]: ["GET", "/", 200] }, () => SD, () => ED], gC = [9, i, b_, { [v]: ["GET", "/?list-type=2", 200] }, () => kD, () => bD], xC = [9, i, A_, { [v]: ["GET", "/?versions", 200] }, () => PD, () => BD], hC = [9, i, R_, { [v]: ["GET", "/{Key+}?x-id=ListParts", 200] }, () => AD, () => _D], CC = [9, i, PA, { [it]: "-", [v]: ["PUT", "/?abac", 200] }, () => n2, () => K], yC = [9, i, _A, { [it]: "-", [v]: ["PUT", "/?accelerate", 200] }, () => s2, () => K], EC = [9, i, TA, { [it]: "-", [v]: ["PUT", "/?acl", 200] }, () => i2, () => K], SC = [9, i, vA, { [v]: ["PUT", "/?analytics", 200] }, () => a2, () => K], bC = [9, i, DA, { [it]: "-", [v]: ["PUT", "/?cors", 200] }, () => c2, () => K], kC = [9, i, LA, { [it]: "-", [v]: ["PUT", "/?encryption", 200] }, () => u2, () => K], BC = [9, i, NA, { [v]: ["PUT", "/?intelligent-tiering", 200] }, () => m2, () => K], PC = [9, i, $A, { [v]: ["PUT", "/?inventory", 200] }, () => p2, () => K], _C = [9, i, zA, { [it]: "-", [v]: ["PUT", "/?lifecycle", 200] }, () => d2, () => l2], AC = [9, i, jA, { [it]: "-", [v]: ["PUT", "/?logging", 200] }, () => f2, () => K], RC = [9, i, VA, { [v]: ["PUT", "/?metrics", 200] }, () => g2, () => K], vC = [9, i, WA, { [v]: ["PUT", "/?notification", 200] }, () => x2, () => K], wC = [9, i, XA, { [it]: "-", [v]: ["PUT", "/?ownershipControls", 200] }, () => h2, () => K], OC = [9, i, QA, { [it]: "-", [v]: ["PUT", "/?policy", 200] }, () => C2, () => K], TC = [9, i, tR, { [it]: "-", [v]: ["PUT", "/?replication", 200] }, () => y2, () => K], DC = [9, i, eR, { [it]: "-", [v]: ["PUT", "/?requestPayment", 200] }, () => E2, () => K], IC = [9, i, nR, { [it]: "-", [v]: ["PUT", "/?tagging", 200] }, () => S2, () => K], LC = [9, i, iR, { [it]: "-", [v]: ["PUT", "/?versioning", 200] }, () => b2, () => K], MC = [9, i, cR, { [it]: "-", [v]: ["PUT", "/?website", 200] }, () => k2, () => K], $C = [9, i, fR, { [it]: "-", [v]: ["PUT", "/{Key+}?x-id=PutObject", 200] }, () => O2, () => w2], UC = [9, i, gR, { [it]: "-", [v]: ["PUT", "/{Key+}?acl", 200] }, () => P2, () => B2], NC = [9, i, SR, { [it]: "-", [v]: ["PUT", "/{Key+}?legal-hold", 200] }, () => A2, () => _2], GC = [9, i, CR, { [it]: "-", [v]: ["PUT", "/?object-lock", 200] }, () => v2, () => R2], jC = [9, i, RR, { [it]: "-", [v]: ["PUT", "/{Key+}?retention", 200] }, () => D2, () => T2], zC = [9, i, vR, { [it]: "-", [v]: ["PUT", "/{Key+}?tagging", 200] }, () => L2, () => I2], qC = [9, i, TR, { [it]: "-", [v]: ["PUT", "/?publicAccessBlock", 200] }, () => M2, () => K], HC = [9, i, KR, { [v]: ["PUT", "/{Key+}?renameObject", 200] }, () => j2, () => G2], FC = [9, i, YR, { [it]: "-", [v]: ["POST", "/{Key+}?restore", 200] }, () => X2, () => Z2], VC = [9, i, A3, { [v]: ["POST", "/{Key+}?select&select-type=2", 200] }, () => sI, () => nI], KC = [9, i, rv, { [it]: "-", [v]: ["PUT", "/?metadataInventoryTable", 200] }, () => PI, () => K], WC = [9, i, nv, { [it]: "-", [v]: ["PUT", "/?metadataJournalTable", 200] }, () => _I, () => K], ZC = [9, i, iv, { [it]: "-", [v]: ["PUT", "/{Key+}?x-id=UploadPart", 200] }, () => wI, () => vI], XC = [9, i, av, { [v]: ["PUT", "/{Key+}?x-id=UploadPartCopy", 200] }, () => RI, () => AI], JC = [9, i, xv, { [Sv]: ["{RequestRoute}."], [v]: ["POST", "/WriteGetObjectResponse", 200] }, () => DI, () => K];
var yo = class extends d.classBuilder().ep(p(u({}, g), { DisableS3ExpressSessionAuth: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").sc(ah).build() {
};
var QC = { name: "@aws-sdk/client-s3", description: "AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native", version: "3.957.0", scripts: { build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs", "build:cjs": "node ../../scripts/compilation/inline client-s3", "build:es": "tsc -p tsconfig.es.json", "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"', "build:types": "tsc -p tsconfig.types.json", "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4", clean: "rimraf ./dist-* && rimraf *.tsbuildinfo", "extract:docs": "api-extractor run --local", "generate:client": "node ../../scripts/generate-clients/single-service --solo s3", test: "yarn g:vitest run", "test:browser": "node ./test/browser-build/esbuild && yarn g:vitest run -c vitest.config.browser.mts", "test:browser:watch": "node ./test/browser-build/esbuild && yarn g:vitest watch -c vitest.config.browser.mts", "test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts && yarn test:browser", "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts", "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs", "test:integration": "yarn g:vitest run -c vitest.config.integ.mts", "test:integration:watch": "yarn g:vitest watch -c vitest.config.integ.mts", "test:watch": "yarn g:vitest watch" }, main: "./dist-cjs/index.js", types: "./dist-types/index.d.ts", module: "./dist-es/index.js", sideEffects: !1, dependencies: { "@aws-crypto/sha1-browser": "5.2.0", "@aws-crypto/sha256-browser": "5.2.0", "@aws-crypto/sha256-js": "5.2.0", "@aws-sdk/core": "3.957.0", "@aws-sdk/credential-provider-node": "3.957.0", "@aws-sdk/middleware-bucket-endpoint": "3.957.0", "@aws-sdk/middleware-expect-continue": "3.957.0", "@aws-sdk/middleware-flexible-checksums": "3.957.0", "@aws-sdk/middleware-host-header": "3.957.0", "@aws-sdk/middleware-location-constraint": "3.957.0", "@aws-sdk/middleware-logger": "3.957.0", "@aws-sdk/middleware-recursion-detection": "3.957.0", "@aws-sdk/middleware-sdk-s3": "3.957.0", "@aws-sdk/middleware-ssec": "3.957.0", "@aws-sdk/middleware-user-agent": "3.957.0", "@aws-sdk/region-config-resolver": "3.957.0", "@aws-sdk/signature-v4-multi-region": "3.957.0", "@aws-sdk/types": "3.957.0", "@aws-sdk/util-endpoints": "3.957.0", "@aws-sdk/util-user-agent-browser": "3.957.0", "@aws-sdk/util-user-agent-node": "3.957.0", "@smithy/config-resolver": "^4.4.5", "@smithy/core": "^3.20.0", "@smithy/eventstream-serde-browser": "^4.2.7", "@smithy/eventstream-serde-config-resolver": "^4.3.7", "@smithy/eventstream-serde-node": "^4.2.7", "@smithy/fetch-http-handler": "^5.3.8", "@smithy/hash-blob-browser": "^4.2.8", "@smithy/hash-node": "^4.2.7", "@smithy/hash-stream-node": "^4.2.7", "@smithy/invalid-dependency": "^4.2.7", "@smithy/md5-js": "^4.2.7", "@smithy/middleware-content-length": "^4.2.7", "@smithy/middleware-endpoint": "^4.4.1", "@smithy/middleware-retry": "^4.4.17", "@smithy/middleware-serde": "^4.2.8", "@smithy/middleware-stack": "^4.2.7", "@smithy/node-config-provider": "^4.3.7", "@smithy/node-http-handler": "^4.4.7", "@smithy/protocol-http": "^5.3.7", "@smithy/smithy-client": "^4.10.2", "@smithy/types": "^4.11.0", "@smithy/url-parser": "^4.2.7", "@smithy/util-base64": "^4.3.0", "@smithy/util-body-length-browser": "^4.2.0", "@smithy/util-body-length-node": "^4.2.1", "@smithy/util-defaults-mode-browser": "^4.3.16", "@smithy/util-defaults-mode-node": "^4.2.19", "@smithy/util-endpoints": "^3.2.7", "@smithy/util-middleware": "^4.2.7", "@smithy/util-retry": "^4.2.7", "@smithy/util-stream": "^4.5.8", "@smithy/util-utf8": "^4.2.0", "@smithy/util-waiter": "^4.2.7", tslib: "^2.6.2" }, devDependencies: { "@aws-sdk/signature-v4-crt": "3.957.0", "@tsconfig/node18": "18.2.4", "@types/node": "^18.19.69", concurrently: "7.0.0", "downlevel-dts": "0.10.1", rimraf: "3.0.2", typescript: "~5.8.3" }, engines: { node: ">=18.0.0" }, typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } }, files: ["dist-*/**"], author: { name: "AWS SDK for JavaScript Team", url: "https://aws.amazon.com/javascript/" }, license: "Apache-2.0", browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" }, "react-native": { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native" }, homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3", repository: { type: "git", url: "https://github.com/aws/aws-sdk-js-v3.git", directory: "clients/client-s3" } };
var bn = r => new TextEncoder().encode(r);
function _m(r) { return typeof r == "string" ? r.length === 0 : r.byteLength === 0; }
var Am = { name: "SHA-1" }, Rm = { name: "HMAC", hash: Am }, YC = new Uint8Array([218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]);
var vm = (function () { function r(t) { this.toHash = new Uint8Array(0), t !== void 0 && (this.key = new Promise(function (o, e) { Be().crypto.subtle.importKey("raw", ty(t), Rm, !1, ["sign"]).then(o, e); }), this.key.catch(function () { })); } return r.prototype.update = function (t) { if (!_m(t)) {
    var o = ty(t), e = new Uint8Array(this.toHash.byteLength + o.byteLength);
    e.set(this.toHash, 0), e.set(o, this.toHash.byteLength), this.toHash = e;
} }, r.prototype.digest = function () { var t = this; return this.key ? this.key.then(function (o) { return Be().crypto.subtle.sign(Rm, o, t.toHash).then(function (e) { return new Uint8Array(e); }); }) : _m(this.toHash) ? Promise.resolve(YC) : Promise.resolve().then(function () { return Be().crypto.subtle.digest(Am, t.toHash); }).then(function (o) { return Promise.resolve(new Uint8Array(o)); }); }, r.prototype.reset = function () { this.toHash = new Uint8Array(0); }, r; })();
function ty(r) { return typeof r == "string" ? bn(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r); }
import { __awaiter as UG, __generator as NG } from "tslib";
var lL = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
function ey(r) { if (dL(r) && typeof r.crypto.subtle == "object") {
    var t = r.crypto.subtle;
    return fL(t);
} return !1; }
function dL(r) { if (typeof r == "object" && typeof r.crypto == "object") {
    var t = r.crypto.getRandomValues;
    return typeof t == "function";
} return !1; }
function fL(r) { return r && lL.every(function (t) { return typeof r[t] == "function"; }); }
var gL = typeof Buffer < "u" && Buffer.from ? function (r) { return Buffer.from(r, "utf8"); } : bn;
function wm(r) { return r instanceof Uint8Array ? r : typeof r == "string" ? gL(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r); }
var ry = (function () { function r(t) { if (ey(Be()))
    this.hash = new vm(t);
else
    throw new Error("SHA1 not supported"); } return r.prototype.update = function (t, o) { this.hash.update(wm(t)); }, r.prototype.digest = function () { return this.hash.digest(); }, r.prototype.reset = function () { this.hash.reset(); }, r; })();
var Om = r => new TextEncoder().encode(r);
var xL = typeof Buffer < "u" && Buffer.from ? function (r) { return Buffer.from(r, "utf8"); } : Om;
function er(r) { return r instanceof Uint8Array ? r : typeof r == "string" ? xL(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r); }
function Eo(r) { return typeof r == "string" ? r.length === 0 : r.byteLength === 0; }
var Tm = { name: "SHA-256" }, Dm = { name: "HMAC", hash: Tm }, oy = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85]);
var Im = (function () { function r(t) { this.toHash = new Uint8Array(0), this.secret = t, this.reset(); } return r.prototype.update = function (t) { if (!Eo(t)) {
    var o = er(t), e = new Uint8Array(this.toHash.byteLength + o.byteLength);
    e.set(this.toHash, 0), e.set(o, this.toHash.byteLength), this.toHash = e;
} }, r.prototype.digest = function () { var t = this; return this.key ? this.key.then(function (o) { return Be().crypto.subtle.sign(Dm, o, t.toHash).then(function (e) { return new Uint8Array(e); }); }) : Eo(this.toHash) ? Promise.resolve(oy) : Promise.resolve().then(function () { return Be().crypto.subtle.digest(Tm, t.toHash); }).then(function (o) { return Promise.resolve(new Uint8Array(o)); }); }, r.prototype.reset = function () { var t = this; this.toHash = new Uint8Array(0), this.secret && this.secret !== void 0 && (this.key = new Promise(function (o, e) { Be().crypto.subtle.importKey("raw", er(t.secret), Dm, !1, ["sign"]).then(o, e); }), this.key.catch(function () { })); }, r; })();
import { __awaiter as hL, __generator as CL } from "tslib";
var fe = 64, ny = 32, sy = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), iy = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], ay = Math.pow(2, 53) - 1;
var kn = (function () { function r() { this.state = Int32Array.from(iy), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; } return r.prototype.update = function (t) { if (this.finished)
    throw new Error("Attempted to update an already finished hash."); var o = 0, e = t.byteLength; if (this.bytesHashed += e, this.bytesHashed * 8 > ay)
    throw new Error("Cannot hash more than 2^53 - 1 bits"); for (; e > 0;)
    this.buffer[this.bufferLength++] = t[o++], e--, this.bufferLength === fe && (this.hashBuffer(), this.bufferLength = 0); }, r.prototype.digest = function () { if (!this.finished) {
    var t = this.bytesHashed * 8, o = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), e = this.bufferLength;
    if (o.setUint8(this.bufferLength++, 128), e % fe >= fe - 8) {
        for (var s = this.bufferLength; s < fe; s++)
            o.setUint8(s, 0);
        this.hashBuffer(), this.bufferLength = 0;
    }
    for (var s = this.bufferLength; s < fe - 8; s++)
        o.setUint8(s, 0);
    o.setUint32(fe - 8, Math.floor(t / 4294967296), !0), o.setUint32(fe - 4, t), this.hashBuffer(), this.finished = !0;
} for (var a = new Uint8Array(ny), s = 0; s < 8; s++)
    a[s * 4] = this.state[s] >>> 24 & 255, a[s * 4 + 1] = this.state[s] >>> 16 & 255, a[s * 4 + 2] = this.state[s] >>> 8 & 255, a[s * 4 + 3] = this.state[s] >>> 0 & 255; return a; }, r.prototype.hashBuffer = function () { for (var t = this, o = t.buffer, e = t.state, s = e[0], a = e[1], c = e[2], x = e[3], h = e[4], k = e[5], w = e[6], B = e[7], D = 0; D < fe; D++) {
    if (D < 16)
        this.temp[D] = (o[D * 4] & 255) << 24 | (o[D * 4 + 1] & 255) << 16 | (o[D * 4 + 2] & 255) << 8 | o[D * 4 + 3] & 255;
    else {
        var R = this.temp[D - 2], $ = (R >>> 17 | R << 15) ^ (R >>> 19 | R << 13) ^ R >>> 10;
        R = this.temp[D - 15];
        var G = (R >>> 7 | R << 25) ^ (R >>> 18 | R << 14) ^ R >>> 3;
        this.temp[D] = ($ + this.temp[D - 7] | 0) + (G + this.temp[D - 16] | 0);
    }
    var q = (((h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + (h & k ^ ~h & w) | 0) + (B + (sy[D] + this.temp[D] | 0) | 0) | 0, et = ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + (s & a ^ s & c ^ a & c) | 0;
    B = w, w = k, k = h, h = x + q | 0, x = c, c = a, a = s, s = q + et | 0;
} e[0] += s, e[1] += a, e[2] += c, e[3] += x, e[4] += h, e[5] += k, e[6] += w, e[7] += B; }, r; })();
var cy = (function () { function r(t) { this.secret = t, this.hash = new kn, this.reset(); } return r.prototype.update = function (t) { if (!(Eo(t) || this.error))
    try {
        this.hash.update(er(t));
    }
    catch (o) {
        this.error = o;
    } }, r.prototype.digestSync = function () { if (this.error)
    throw this.error; return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest(); }, r.prototype.digest = function () { return hL(this, void 0, void 0, function () { return CL(this, function (t) { return [2, this.digestSync()]; }); }); }, r.prototype.reset = function () { if (this.hash = new kn, this.secret) {
    this.outer = new kn;
    var t = yL(this.secret), o = new Uint8Array(fe);
    o.set(t);
    for (var e = 0; e < fe; e++)
        t[e] ^= 54, o[e] ^= 92;
    this.hash.update(t), this.outer.update(o);
    for (var e = 0; e < t.byteLength; e++)
        t[e] = 0;
} }, r; })();
function yL(r) { var t = er(r); if (t.byteLength > fe) {
    var o = new kn;
    o.update(t), t = o.digest();
} var e = new Uint8Array(fe); return e.set(t), e; }
import { __awaiter as Vj, __generator as Kj } from "tslib";
var EL = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
function uy(r) { if (SL(r) && typeof r.crypto.subtle == "object") {
    var t = r.crypto.subtle;
    return bL(t);
} return !1; }
function SL(r) { if (typeof r == "object" && typeof r.crypto == "object") {
    var t = r.crypto.getRandomValues;
    return typeof t == "function";
} return !1; }
function bL(r) { return r && EL.every(function (t) { return typeof r[t] == "function"; }); }
var my = (function () { function r(t) { uy(Be()) ? this.hash = new Im(t) : this.hash = new cy(t); } return r.prototype.update = function (t, o) { this.hash.update(er(t)); }, r.prototype.digest = function () { return this.hash.digest(); }, r.prototype.reset = function () { this.hash.reset(); }, r; })();
import { Crc32 as IL } from "@aws-crypto/crc32";
var So = class r {
    bytes;
    constructor(t) { if (this.bytes = t, t.byteLength !== 8)
        throw new Error("Int64 buffers must be exactly 8 bytes"); }
    static fromNumber(t) { if (t > 9223372036854776e3 || t < -9223372036854776e3)
        throw new Error(`${t} is too large (or, if negative, too small) to represent as an Int64`); let o = new Uint8Array(8); for (let e = 7, s = Math.abs(Math.round(t)); e > -1 && s > 0; e--, s /= 256)
        o[e] = s; return t < 0 && py(o), new r(o); }
    valueOf() { let t = this.bytes.slice(0), o = t[0] & 128; return o && py(t), parseInt(Ne(t), 16) * (o ? -1 : 1); }
    toString() { return String(this.valueOf()); }
};
function py(r) { for (let t = 0; t < 8; t++)
    r[t] ^= 255; for (let t = 7; t > -1 && (r[t]++, r[t] === 0); t--)
    ; }
var si = class {
    toUtf8;
    fromUtf8;
    constructor(t, o) { this.toUtf8 = t, this.fromUtf8 = o; }
    format(t) { let o = []; for (let a of Object.keys(t)) {
        let c = this.fromUtf8(a);
        o.push(Uint8Array.from([c.byteLength]), c, this.formatHeaderValue(t[a]));
    } let e = new Uint8Array(o.reduce((a, c) => a + c.byteLength, 0)), s = 0; for (let a of o)
        e.set(a, s), s += a.byteLength; return e; }
    formatHeaderValue(t) { switch (t.type) {
        case "boolean": return Uint8Array.from([t.value ? 0 : 1]);
        case "byte": return Uint8Array.from([2, t.value]);
        case "short":
            let o = new DataView(new ArrayBuffer(3));
            return o.setUint8(0, 3), o.setInt16(1, t.value, !1), new Uint8Array(o.buffer);
        case "integer":
            let e = new DataView(new ArrayBuffer(5));
            return e.setUint8(0, 4), e.setInt32(1, t.value, !1), new Uint8Array(e.buffer);
        case "long":
            let s = new Uint8Array(9);
            return s[0] = 5, s.set(t.value.bytes, 1), s;
        case "binary":
            let a = new DataView(new ArrayBuffer(3 + t.value.byteLength));
            a.setUint8(0, 6), a.setUint16(1, t.value.byteLength, !1);
            let c = new Uint8Array(a.buffer);
            return c.set(t.value, 3), c;
        case "string":
            let x = this.fromUtf8(t.value), h = new DataView(new ArrayBuffer(3 + x.byteLength));
            h.setUint8(0, 7), h.setUint16(1, x.byteLength, !1);
            let k = new Uint8Array(h.buffer);
            return k.set(x, 3), k;
        case "timestamp":
            let w = new Uint8Array(9);
            return w[0] = 8, w.set(So.fromNumber(t.value.valueOf()).bytes, 1), w;
        case "uuid":
            if (!OL.test(t.value))
                throw new Error(`Invalid UUID received: ${t.value}`);
            let B = new Uint8Array(17);
            return B[0] = 9, B.set(Wm(t.value.replace(/\-/g, "")), 1), B;
    } }
    parse(t) { let o = {}, e = 0; for (; e < t.byteLength;) {
        let s = t.getUint8(e++), a = this.toUtf8(new Uint8Array(t.buffer, t.byteOffset + e, s));
        switch (e += s, t.getUint8(e++)) {
            case 0:
                o[a] = { type: ly, value: !0 };
                break;
            case 1:
                o[a] = { type: ly, value: !1 };
                break;
            case 2:
                o[a] = { type: kL, value: t.getInt8(e++) };
                break;
            case 3:
                o[a] = { type: BL, value: t.getInt16(e, !1) }, e += 2;
                break;
            case 4:
                o[a] = { type: PL, value: t.getInt32(e, !1) }, e += 4;
                break;
            case 5:
                o[a] = { type: _L, value: new So(new Uint8Array(t.buffer, t.byteOffset + e, 8)) }, e += 8;
                break;
            case 6:
                let c = t.getUint16(e, !1);
                e += 2, o[a] = { type: AL, value: new Uint8Array(t.buffer, t.byteOffset + e, c) }, e += c;
                break;
            case 7:
                let x = t.getUint16(e, !1);
                e += 2, o[a] = { type: RL, value: this.toUtf8(new Uint8Array(t.buffer, t.byteOffset + e, x)) }, e += x;
                break;
            case 8:
                o[a] = { type: vL, value: new Date(new So(new Uint8Array(t.buffer, t.byteOffset + e, 8)).valueOf()) }, e += 8;
                break;
            case 9:
                let h = new Uint8Array(t.buffer, t.byteOffset + e, 16);
                e += 16, o[a] = { type: wL, value: `${Ne(h.subarray(0, 4))}-${Ne(h.subarray(4, 6))}-${Ne(h.subarray(6, 8))}-${Ne(h.subarray(8, 10))}-${Ne(h.subarray(10))}` };
                break;
            default: throw new Error("Unrecognized header type tag");
        }
    } return o; }
};
var ly = "boolean", kL = "byte", BL = "short", PL = "integer", _L = "long", AL = "binary", RL = "string", vL = "timestamp", wL = "uuid", OL = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
import { Crc32 as TL } from "@aws-crypto/crc32";
var dy = 4, ur = dy * 2, Rr = 4, DL = ur + Rr * 2;
function fy({ byteLength: r, byteOffset: t, buffer: o }) { if (r < DL)
    throw new Error("Provided message too short to accommodate event stream message overhead"); let e = new DataView(o, t, r), s = e.getUint32(0, !1); if (r !== s)
    throw new Error("Reported message length does not match received message length"); let a = e.getUint32(dy, !1), c = e.getUint32(ur, !1), x = e.getUint32(r - Rr, !1), h = new TL().update(new Uint8Array(o, t, ur)); if (c !== h.digest())
    throw new Error(`The prelude checksum specified in the message (${c}) does not match the calculated CRC32 checksum (${h.digest()})`); if (h.update(new Uint8Array(o, t + ur, r - (ur + Rr))), x !== h.digest())
    throw new Error(`The message checksum (${h.digest()}) did not match the expected value of ${x}`); return { headers: new DataView(o, t + ur + Rr, a), body: new Uint8Array(o, t + ur + Rr + a, s - a - (ur + Rr + Rr)) }; }
var ii = class {
    headerMarshaller;
    messageBuffer;
    isEndOfStream;
    constructor(t, o) { this.headerMarshaller = new si(t, o), this.messageBuffer = [], this.isEndOfStream = !1; }
    feed(t) { this.messageBuffer.push(this.decode(t)); }
    endOfStream() { this.isEndOfStream = !0; }
    getMessage() { let t = this.messageBuffer.pop(), o = this.isEndOfStream; return { getMessage() { return t; }, isEndOfStream() { return o; } }; }
    getAvailableMessages() { let t = this.messageBuffer; this.messageBuffer = []; let o = this.isEndOfStream; return { getMessages() { return t; }, isEndOfStream() { return o; } }; }
    encode({ headers: t, body: o }) { let e = this.headerMarshaller.format(t), s = e.byteLength + o.byteLength + 16, a = new Uint8Array(s), c = new DataView(a.buffer, a.byteOffset, a.byteLength), x = new IL; return c.setUint32(0, s, !1), c.setUint32(4, e.byteLength, !1), c.setUint32(8, x.update(a.subarray(0, 8)).digest(), !1), a.set(e, 12), a.set(o, e.byteLength + 12), c.setUint32(s - 4, x.update(a.subarray(8, s - 4)).digest(), !1), a; }
    decode(t) { let { headers: o, body: e } = fy(t); return { headers: this.headerMarshaller.parse(o), body: e }; }
    formatHeaders(t) { return this.headerMarshaller.format(t); }
};
var ai = class {
    options;
    constructor(t) { this.options = t; }
    [Symbol.asyncIterator]() { return this.asyncIterator(); }
    asyncIterator() { return ge(this, null, function* () { try {
        for (var t = Ke(this.options.inputStream), o, e, s; o = !(e = yield new Lt(t.next())).done; o = !1) {
            let a = e.value;
            yield this.options.decoder.decode(a);
        }
    }
    catch {
        s = [e];
    }
    finally {
        try {
            o && (e = t.return) && (yield new Lt(e.call(t)));
        }
        finally {
            if (s)
                throw s[0];
        }
    } }); }
};
var ci = class {
    options;
    constructor(t) { this.options = t; }
    [Symbol.asyncIterator]() { return this.asyncIterator(); }
    asyncIterator() { return ge(this, null, function* () { try {
        for (var t = Ke(this.options.messageStream), o, e, s; o = !(e = yield new Lt(t.next())).done; o = !1) {
            let a = e.value;
            yield this.options.encoder.encode(a);
        }
    }
    catch {
        s = [e];
    }
    finally {
        try {
            o && (e = t.return) && (yield new Lt(e.call(t)));
        }
        finally {
            if (s)
                throw s[0];
        }
    } this.options.includeEndFrame && (yield new Uint8Array(0)); }); }
};
var ui = class {
    options;
    constructor(t) { this.options = t; }
    [Symbol.asyncIterator]() { return this.asyncIterator(); }
    asyncIterator() { return ge(this, null, function* () { try {
        for (var t = Ke(this.options.messageStream), o, e, s; o = !(e = yield new Lt(t.next())).done; o = !1) {
            let a = e.value;
            let c = yield new Lt(this.options.deserializer(a));
            c !== void 0 && (yield c);
        }
    }
    catch {
        s = [e];
    }
    finally {
        try {
            o && (e = t.return) && (yield new Lt(e.call(t)));
        }
        finally {
            if (s)
                throw s[0];
        }
    } }); }
};
var mi = class {
    options;
    constructor(t) { this.options = t; }
    [Symbol.asyncIterator]() { return this.asyncIterator(); }
    asyncIterator() { return ge(this, null, function* () { try {
        for (var t = Ke(this.options.inputStream), o, e, s; o = !(e = yield new Lt(t.next())).done; o = !1) {
            let a = e.value;
            yield this.options.serializer(a);
        }
    }
    catch {
        s = [e];
    }
    finally {
        try {
            o && (e = t.return) && (yield new Lt(e.call(t)));
        }
        finally {
            if (s)
                throw s[0];
        }
    } }); }
};
function gy(r) { let t = 0, o = 0, e = null, s = null, a = x => { if (typeof x != "number")
    throw new Error("Attempted to allocate an event message where size was not a number: " + x); t = x, o = 4, e = new Uint8Array(x), new DataView(e.buffer).setUint32(0, x, !1); }, c = function () { return ge(this, null, function* () { let x = r[Symbol.asyncIterator](); for (;;) {
    let { value: h, done: k } = yield new Lt(x.next());
    if (k) {
        if (t)
            if (t === o)
                yield e;
            else
                throw new Error("Truncated event message received.");
        else
            return;
        return;
    }
    let w = h.length, B = 0;
    for (; B < w;) {
        if (!e) {
            let R = w - B;
            s || (s = new Uint8Array(4));
            let $ = Math.min(4 - o, R);
            if (s.set(h.slice(B, B + $), o), o += $, B += $, o < 4)
                break;
            a(new DataView(s.buffer).getUint32(0, !1)), s = null;
        }
        let D = Math.min(t - o, w - B);
        e.set(h.slice(B, B + D), o), o += D, B += D, t && t === o && (yield e, e = null, t = 0, o = 0);
    }
} }); }; return { [Symbol.asyncIterator]: c }; }
function xy(r, t) { return function (o) { return P(this, null, function* () { let { value: e } = o.headers[":message-type"]; if (e === "error") {
    let s = new Error(o.headers[":error-message"].value || "UnknownError");
    throw s.name = o.headers[":error-code"].value, s;
}
else if (e === "exception") {
    let s = o.headers[":exception-type"].value, a = { [s]: o }, c = yield r(a);
    if (c.$unknown) {
        let x = new Error(t(o.body));
        throw x.name = s, x;
    }
    throw c[s];
}
else if (e === "event") {
    let s = { [o.headers[":event-type"].value]: o }, a = yield r(s);
    return a.$unknown ? void 0 : a;
}
else
    throw Error(`Unrecognizable event type: ${o.headers[":event-type"].value}`); }); }; }
var pi = class {
    eventStreamCodec;
    utfEncoder;
    constructor({ utf8Encoder: t, utf8Decoder: o }) { this.eventStreamCodec = new ii(t, o), this.utfEncoder = t; }
    deserialize(t, o) { let e = gy(t); return new ui({ messageStream: new ai({ inputStream: e, decoder: this.eventStreamCodec }), deserializer: xy(o, this.utfEncoder) }); }
    serialize(t, o) { return new ci({ messageStream: new mi({ inputStream: t, serializer: o }), encoder: this.eventStreamCodec, includeEndFrame: !0 }); }
};
var hy = r => ({ [Symbol.asyncIterator]: function () { return ge(this, null, function* () { let t = r.getReader(); try {
        for (;;) {
            let { done: o, value: e } = yield new Lt(t.read());
            if (o)
                return;
            yield e;
        }
    }
    finally {
        t.releaseLock();
    } }); } }), Cy = r => { let t = r[Symbol.asyncIterator](); return new ReadableStream({ pull(e) { return P(this, null, function* () { let { done: s, value: a } = yield t.next(); if (s)
        return e.close(); e.enqueue(a); }); } }); };
var li = class {
    universalMarshaller;
    constructor({ utf8Encoder: t, utf8Decoder: o }) { this.universalMarshaller = new pi({ utf8Decoder: o, utf8Encoder: t }); }
    deserialize(t, o) { let e = LL(t) ? hy(t) : t; return this.universalMarshaller.deserialize(e, o); }
    serialize(t, o) { let e = this.universalMarshaller.serialize(t, o); return typeof ReadableStream == "function" ? Cy(e) : e; }
}, LL = r => typeof ReadableStream == "function" && r instanceof ReadableStream;
var yy = r => new li(r);
function Ey(e, s) { return P(this, arguments, function* (r, t, o = 1024 * 1024) { let a = r.size, c = 0; for (; c < a;) {
    let x = r.slice(c, Math.min(a, c + o));
    t(new Uint8Array(yield x.arrayBuffer())), c += x.size;
} }); }
var Sy = function (t, o) { return P(this, null, function* () { let e = new t; return yield Ey(o, s => { e.update(s); }), e.digest(); }); };
var by = [1732584193, 4023233417, 2562383102, 271733878];
var di = class {
    state;
    buffer;
    bufferLength;
    bytesHashed;
    finished;
    constructor() { this.reset(); }
    update(t) { if ($L(t))
        return; if (this.finished)
        throw new Error("Attempted to update an already finished hash."); let o = UL(t), e = 0, { byteLength: s } = o; for (this.bytesHashed += s; s > 0;)
        this.buffer.setUint8(this.bufferLength++, o[e++]), s--, this.bufferLength === 64 && (this.hashBuffer(), this.bufferLength = 0); }
    digest() { return P(this, null, function* () { if (!this.finished) {
        let { buffer: o, bufferLength: e, bytesHashed: s } = this, a = s * 8;
        if (o.setUint8(this.bufferLength++, 128), e % 64 >= 56) {
            for (let c = this.bufferLength; c < 64; c++)
                o.setUint8(c, 0);
            this.hashBuffer(), this.bufferLength = 0;
        }
        for (let c = this.bufferLength; c < 56; c++)
            o.setUint8(c, 0);
        o.setUint32(56, a >>> 0, !0), o.setUint32(60, Math.floor(a / 4294967296), !0), this.hashBuffer(), this.finished = !0;
    } let t = new DataView(new ArrayBuffer(16)); for (let o = 0; o < 4; o++)
        t.setUint32(o * 4, this.state[o], !0); return new Uint8Array(t.buffer, t.byteOffset, t.byteLength); }); }
    hashBuffer() { let { buffer: t, state: o } = this, e = o[0], s = o[1], a = o[2], c = o[3]; e = Wt(e, s, a, c, t.getUint32(0, !0), 7, 3614090360), c = Wt(c, e, s, a, t.getUint32(4, !0), 12, 3905402710), a = Wt(a, c, e, s, t.getUint32(8, !0), 17, 606105819), s = Wt(s, a, c, e, t.getUint32(12, !0), 22, 3250441966), e = Wt(e, s, a, c, t.getUint32(16, !0), 7, 4118548399), c = Wt(c, e, s, a, t.getUint32(20, !0), 12, 1200080426), a = Wt(a, c, e, s, t.getUint32(24, !0), 17, 2821735955), s = Wt(s, a, c, e, t.getUint32(28, !0), 22, 4249261313), e = Wt(e, s, a, c, t.getUint32(32, !0), 7, 1770035416), c = Wt(c, e, s, a, t.getUint32(36, !0), 12, 2336552879), a = Wt(a, c, e, s, t.getUint32(40, !0), 17, 4294925233), s = Wt(s, a, c, e, t.getUint32(44, !0), 22, 2304563134), e = Wt(e, s, a, c, t.getUint32(48, !0), 7, 1804603682), c = Wt(c, e, s, a, t.getUint32(52, !0), 12, 4254626195), a = Wt(a, c, e, s, t.getUint32(56, !0), 17, 2792965006), s = Wt(s, a, c, e, t.getUint32(60, !0), 22, 1236535329), e = Zt(e, s, a, c, t.getUint32(4, !0), 5, 4129170786), c = Zt(c, e, s, a, t.getUint32(24, !0), 9, 3225465664), a = Zt(a, c, e, s, t.getUint32(44, !0), 14, 643717713), s = Zt(s, a, c, e, t.getUint32(0, !0), 20, 3921069994), e = Zt(e, s, a, c, t.getUint32(20, !0), 5, 3593408605), c = Zt(c, e, s, a, t.getUint32(40, !0), 9, 38016083), a = Zt(a, c, e, s, t.getUint32(60, !0), 14, 3634488961), s = Zt(s, a, c, e, t.getUint32(16, !0), 20, 3889429448), e = Zt(e, s, a, c, t.getUint32(36, !0), 5, 568446438), c = Zt(c, e, s, a, t.getUint32(56, !0), 9, 3275163606), a = Zt(a, c, e, s, t.getUint32(12, !0), 14, 4107603335), s = Zt(s, a, c, e, t.getUint32(32, !0), 20, 1163531501), e = Zt(e, s, a, c, t.getUint32(52, !0), 5, 2850285829), c = Zt(c, e, s, a, t.getUint32(8, !0), 9, 4243563512), a = Zt(a, c, e, s, t.getUint32(28, !0), 14, 1735328473), s = Zt(s, a, c, e, t.getUint32(48, !0), 20, 2368359562), e = Xt(e, s, a, c, t.getUint32(20, !0), 4, 4294588738), c = Xt(c, e, s, a, t.getUint32(32, !0), 11, 2272392833), a = Xt(a, c, e, s, t.getUint32(44, !0), 16, 1839030562), s = Xt(s, a, c, e, t.getUint32(56, !0), 23, 4259657740), e = Xt(e, s, a, c, t.getUint32(4, !0), 4, 2763975236), c = Xt(c, e, s, a, t.getUint32(16, !0), 11, 1272893353), a = Xt(a, c, e, s, t.getUint32(28, !0), 16, 4139469664), s = Xt(s, a, c, e, t.getUint32(40, !0), 23, 3200236656), e = Xt(e, s, a, c, t.getUint32(52, !0), 4, 681279174), c = Xt(c, e, s, a, t.getUint32(0, !0), 11, 3936430074), a = Xt(a, c, e, s, t.getUint32(12, !0), 16, 3572445317), s = Xt(s, a, c, e, t.getUint32(24, !0), 23, 76029189), e = Xt(e, s, a, c, t.getUint32(36, !0), 4, 3654602809), c = Xt(c, e, s, a, t.getUint32(48, !0), 11, 3873151461), a = Xt(a, c, e, s, t.getUint32(60, !0), 16, 530742520), s = Xt(s, a, c, e, t.getUint32(8, !0), 23, 3299628645), e = Jt(e, s, a, c, t.getUint32(0, !0), 6, 4096336452), c = Jt(c, e, s, a, t.getUint32(28, !0), 10, 1126891415), a = Jt(a, c, e, s, t.getUint32(56, !0), 15, 2878612391), s = Jt(s, a, c, e, t.getUint32(20, !0), 21, 4237533241), e = Jt(e, s, a, c, t.getUint32(48, !0), 6, 1700485571), c = Jt(c, e, s, a, t.getUint32(12, !0), 10, 2399980690), a = Jt(a, c, e, s, t.getUint32(40, !0), 15, 4293915773), s = Jt(s, a, c, e, t.getUint32(4, !0), 21, 2240044497), e = Jt(e, s, a, c, t.getUint32(32, !0), 6, 1873313359), c = Jt(c, e, s, a, t.getUint32(60, !0), 10, 4264355552), a = Jt(a, c, e, s, t.getUint32(24, !0), 15, 2734768916), s = Jt(s, a, c, e, t.getUint32(52, !0), 21, 1309151649), e = Jt(e, s, a, c, t.getUint32(16, !0), 6, 4149444226), c = Jt(c, e, s, a, t.getUint32(44, !0), 10, 3174756917), a = Jt(a, c, e, s, t.getUint32(8, !0), 15, 718787259), s = Jt(s, a, c, e, t.getUint32(36, !0), 21, 3951481745), o[0] = e + o[0] & 4294967295, o[1] = s + o[1] & 4294967295, o[2] = a + o[2] & 4294967295, o[3] = c + o[3] & 4294967295; }
    reset() { this.state = Uint32Array.from(by), this.buffer = new DataView(new ArrayBuffer(64)), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; }
};
function fi(r, t, o, e, s, a) { return t = (t + r & 4294967295) + (e + a & 4294967295) & 4294967295, (t << s | t >>> 32 - s) + o & 4294967295; }
function Wt(r, t, o, e, s, a, c) { return fi(t & o | ~t & e, r, t, s, a, c); }
function Zt(r, t, o, e, s, a, c) { return fi(t & e | o & ~e, r, t, s, a, c); }
function Xt(r, t, o, e, s, a, c) { return fi(t ^ o ^ e, r, t, s, a, c); }
function Jt(r, t, o, e, s, a, c) { return fi(o ^ (t | ~e), r, t, s, a, c); }
function $L(r) { return typeof r == "string" ? r.length === 0 : r.byteLength === 0; }
function UL(r) { return typeof r == "string" ? wr(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r); }
var ky = r => ({ apiVersion: "2006-03-01", base64Decoder: r?.base64Decoder ?? fr, base64Encoder: r?.base64Encoder ?? Te, disableHostPrefix: r?.disableHostPrefix ?? !1, endpointProvider: r?.endpointProvider ?? ns, extensions: r?.extensions ?? [], getAwsChunkedEncodingStream: r?.getAwsChunkedEncodingStream ?? qp, httpAuthSchemeProvider: r?.httpAuthSchemeProvider ?? xf, httpAuthSchemes: r?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"), signer: new ip }, { schemeId: "aws.auth#sigv4a", identityProvider: t => t.getIdentityProvider("aws.auth#sigv4a"), signer: new ap }], logger: r?.logger ?? new vn, protocol: r?.protocol ?? zn, protocolSettings: r?.protocolSettings ?? { defaultNamespace: "com.amazonaws.s3", xmlNamespace: "http://s3.amazonaws.com/doc/2006-03-01/", version: "2006-03-01", serviceTarget: "AmazonS3" }, sdkStreamMixin: r?.sdkStreamMixin ?? Dn, serviceId: r?.serviceId ?? "S3", signerConstructor: r?.signerConstructor ?? $r, signingEscapePath: r?.signingEscapePath ?? !1, urlParser: r?.urlParser ?? sp, useArnRegion: r?.useArnRegion ?? void 0, utf8Decoder: r?.utf8Decoder ?? wr, utf8Encoder: r?.utf8Encoder ?? Ue });
var By = r => { let t = Lp(r), o = () => t().then(xp), e = ky(r); return p(u(u({}, e), r), { runtime: "browser", defaultsMode: t, bodyLengthChecker: r?.bodyLengthChecker ?? lp, credentialDefaultProvider: r?.credentialDefaultProvider ?? (s => () => Promise.reject(new Error("Credential is missing"))), defaultUserAgentProvider: r?.defaultUserAgentProvider ?? Dp({ serviceId: e.serviceId, clientVersion: QC.version }), eventStreamSerdeProvider: r?.eventStreamSerdeProvider ?? yy, maxAttempts: r?.maxAttempts ?? vp, md5: r?.md5 ?? di, region: r?.region ?? Ip("Region is missing"), requestHandler: Km.create(r?.requestHandler ?? o), retryMode: r?.retryMode ?? (() => P(null, null, function* () { return (yield o()).retryMode || wp; })), sha1: r?.sha1 ?? ry, sha256: r?.sha256 ?? my, streamCollector: r?.streamCollector ?? Pn, streamHasher: r?.streamHasher ?? Sy, useDualstackEndpoint: r?.useDualstackEndpoint ?? (() => Promise.resolve(kp)), useFipsEndpoint: r?.useFipsEndpoint ?? (() => Promise.resolve(Bp)) }); };
var Py = r => { let t = r.httpAuthSchemes, o = r.httpAuthSchemeProvider, e = r.credentials; return { setHttpAuthScheme(s) { let a = t.findIndex(c => c.schemeId === s.schemeId); a === -1 ? t.push(s) : t.splice(a, 1, s); }, httpAuthSchemes() { return t; }, setHttpAuthSchemeProvider(s) { o = s; }, httpAuthSchemeProvider() { return o; }, setCredentials(s) { e = s; }, credentials() { return e; } }; }, _y = r => ({ httpAuthSchemes: r.httpAuthSchemes(), httpAuthSchemeProvider: r.httpAuthSchemeProvider(), credentials: r.credentials() });
var Ay = (r, t) => { let o = Object.assign(Mp(r), hp(r), Um(r), Py(r)); return t.forEach(e => e.configure(o)), Object.assign(r, $p(o), Cp(o), Nm(o), _y(o)); };
var we = class extends dp {
    config;
    constructor(...[t]) { let o = By(t || {}); super(o), this.initConfig = o; let e = Cf(o), s = tp(e), a = Cl(s), c = Op(a), x = Pp(c), h = x, k = Rp(h), w = Ul(k), B = hf(w), D = Dl(B, { session: [() => this, yo] }), R = Ay(D, t?.extensions || []); this.config = R, this.middlewareStack.use(Zm(this.config)), this.middlewareStack.use(bp(this.config)), this.middlewareStack.use(Tp(this.config)), this.middlewareStack.use(_p(this.config)), this.middlewareStack.use(Gm(this.config)), this.middlewareStack.use(jm(this.config)), this.middlewareStack.use(zm(this.config)), this.middlewareStack.use(qm(this.config, { httpAuthSchemeParametersProvider: df, identityProviderConfigProvider: $ => P(this, null, function* () { return new Ym({ "aws.auth#sigv4": $.credentials, "aws.auth#sigv4a": $.credentials }); }) })), this.middlewareStack.use(Fm(this.config)), this.middlewareStack.use($l(this.config)), this.middlewareStack.use(Up(this.config)), this.middlewareStack.use(bl(this.config)), this.middlewareStack.use(Ic(this.config)), this.middlewareStack.use(Lc(this.config)); }
    destroy() { super.destroy(); }
};
var gi = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "AbortMultipartUpload", {}).n("S3Client", "AbortMultipartUploadCommand").sc(th).build() {
};
function NL(r) { return t => o => P(null, null, function* () { let e = u({}, o.input), s = [{ target: "SSECustomerKey", hash: "SSECustomerKeyMD5" }, { target: "CopySourceSSECustomerKey", hash: "CopySourceSSECustomerKeyMD5" }]; for (let a of s) {
    let c = e[a.target];
    if (c) {
        let x;
        typeof c == "string" ? jL(c, r) ? x = r.base64Decoder(c) : (x = r.utf8Decoder(c), e[a.target] = r.base64Encoder(x)) : (x = ArrayBuffer.isView(c) ? new Uint8Array(c.buffer, c.byteOffset, c.byteLength) : new Uint8Array(c), e[a.target] = r.base64Encoder(x));
        let h = new r.md5;
        h.update(x), e[a.hash] = r.base64Encoder(yield h.digest());
    }
} return t(p(u({}, o), { input: e })); }); }
var GL = { name: "ssecMiddleware", step: "initialize", tags: ["SSE"], override: !0 }, kt = r => ({ applyToStack: t => { t.add(NL(r), GL); } });
function jL(r, t) { if (!/^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r))
    return !1; try {
    return t.base64Decoder(r).length === 32;
}
catch {
    return !1;
} }
var xi = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), kt(e)]; }).s("AmazonS3", "CompleteMultipartUpload", {}).n("S3Client", "CompleteMultipartUploadCommand").sc(eh).build() {
};
var hi = class extends d.classBuilder().ep(p(u({}, g), { DisableS3ExpressSessionAuth: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" }, CopySource: { type: "contextParams", name: "CopySource" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), kt(e)]; }).s("AmazonS3", "CopyObject", {}).n("S3Client", "CopyObjectCommand").sc(rh).build() {
};
function zL(r) { return t => o => P(null, null, function* () { let { CreateBucketConfiguration: e } = o.input, s = yield r.region(); return !e?.LocationConstraint && !e?.Location && s !== "us-east-1" && (o.input.CreateBucketConfiguration = o.input.CreateBucketConfiguration ?? {}, o.input.CreateBucketConfiguration.LocationConstraint = s), t(o); }); }
var qL = { step: "initialize", tags: ["LOCATION_CONSTRAINT", "CREATE_BUCKET_CONFIGURATION"], name: "locationConstraintMiddleware", override: !0 }, Ry = r => ({ applyToStack: t => { t.add(zL(r), qL); } });
var Ci = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, DisableAccessPoints: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), Ry(e)]; }).s("AmazonS3", "CreateBucket", {}).n("S3Client", "CreateBucketCommand").sc(oh).build() {
};
var yi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "CreateBucketMetadataConfiguration", {}).n("S3Client", "CreateBucketMetadataConfigurationCommand").sc(nh).build() {
};
var Ei = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "CreateBucketMetadataTableConfiguration", {}).n("S3Client", "CreateBucketMetadataTableConfigurationCommand").sc(sh).build() {
};
var Si = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), kt(e)]; }).s("AmazonS3", "CreateMultipartUpload", {}).n("S3Client", "CreateMultipartUploadCommand").sc(ih).build() {
};
var bi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketAnalyticsConfiguration", {}).n("S3Client", "DeleteBucketAnalyticsConfigurationCommand").sc(uh).build() {
};
var ki = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucket", {}).n("S3Client", "DeleteBucketCommand").sc(ch).build() {
};
var Bi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketCors", {}).n("S3Client", "DeleteBucketCorsCommand").sc(mh).build() {
};
var Pi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketEncryption", {}).n("S3Client", "DeleteBucketEncryptionCommand").sc(ph).build() {
};
var _i = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketIntelligentTieringConfiguration", {}).n("S3Client", "DeleteBucketIntelligentTieringConfigurationCommand").sc(lh).build() {
};
var Ai = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketInventoryConfiguration", {}).n("S3Client", "DeleteBucketInventoryConfigurationCommand").sc(dh).build() {
};
var Ri = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketLifecycle", {}).n("S3Client", "DeleteBucketLifecycleCommand").sc(fh).build() {
};
var vi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketMetadataConfiguration", {}).n("S3Client", "DeleteBucketMetadataConfigurationCommand").sc(gh).build() {
};
var wi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketMetadataTableConfiguration", {}).n("S3Client", "DeleteBucketMetadataTableConfigurationCommand").sc(xh).build() {
};
var Oi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketMetricsConfiguration", {}).n("S3Client", "DeleteBucketMetricsConfigurationCommand").sc(hh).build() {
};
var Ti = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketOwnershipControls", {}).n("S3Client", "DeleteBucketOwnershipControlsCommand").sc(Ch).build() {
};
var Di = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketPolicy", {}).n("S3Client", "DeleteBucketPolicyCommand").sc(yh).build() {
};
var Ii = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketReplication", {}).n("S3Client", "DeleteBucketReplicationCommand").sc(Eh).build() {
};
var Li = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketTagging", {}).n("S3Client", "DeleteBucketTaggingCommand").sc(Sh).build() {
};
var Mi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketWebsite", {}).n("S3Client", "DeleteBucketWebsiteCommand").sc(bh).build() {
};
var $i = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "DeleteObject", {}).n("S3Client", "DeleteObjectCommand").sc(kh).build() {
};
var Ui = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "DeleteObjects", {}).n("S3Client", "DeleteObjectsCommand").sc(Bh).build() {
};
var Ni = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "DeleteObjectTagging", {}).n("S3Client", "DeleteObjectTaggingCommand").sc(Ph).build() {
};
var Gi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeletePublicAccessBlock", {}).n("S3Client", "DeletePublicAccessBlockCommand").sc(_h).build() {
};
var ji = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketAbac", {}).n("S3Client", "GetBucketAbacCommand").sc(Ah).build() {
};
var zi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketAccelerateConfiguration", {}).n("S3Client", "GetBucketAccelerateConfigurationCommand").sc(Rh).build() {
};
var qi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketAcl", {}).n("S3Client", "GetBucketAclCommand").sc(vh).build() {
};
var Hi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketAnalyticsConfiguration", {}).n("S3Client", "GetBucketAnalyticsConfigurationCommand").sc(wh).build() {
};
var Fi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketCors", {}).n("S3Client", "GetBucketCorsCommand").sc(Oh).build() {
};
var Vi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketEncryption", {}).n("S3Client", "GetBucketEncryptionCommand").sc(Th).build() {
};
var Ki = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketIntelligentTieringConfiguration", {}).n("S3Client", "GetBucketIntelligentTieringConfigurationCommand").sc(Dh).build() {
};
var Wi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketInventoryConfiguration", {}).n("S3Client", "GetBucketInventoryConfigurationCommand").sc(Ih).build() {
};
var Zi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketLifecycleConfiguration", {}).n("S3Client", "GetBucketLifecycleConfigurationCommand").sc(Lh).build() {
};
var Xi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketLocation", {}).n("S3Client", "GetBucketLocationCommand").sc(Mh).build() {
};
var Ji = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketLogging", {}).n("S3Client", "GetBucketLoggingCommand").sc($h).build() {
};
var Qi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketMetadataConfiguration", {}).n("S3Client", "GetBucketMetadataConfigurationCommand").sc(Uh).build() {
};
var Yi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketMetadataTableConfiguration", {}).n("S3Client", "GetBucketMetadataTableConfigurationCommand").sc(Nh).build() {
};
var ta = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketMetricsConfiguration", {}).n("S3Client", "GetBucketMetricsConfigurationCommand").sc(Gh).build() {
};
var ea = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketNotificationConfiguration", {}).n("S3Client", "GetBucketNotificationConfigurationCommand").sc(jh).build() {
};
var ra = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketOwnershipControls", {}).n("S3Client", "GetBucketOwnershipControlsCommand").sc(zh).build() {
};
var oa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketPolicy", {}).n("S3Client", "GetBucketPolicyCommand").sc(qh).build() {
};
var na = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketPolicyStatus", {}).n("S3Client", "GetBucketPolicyStatusCommand").sc(Hh).build() {
};
var sa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketReplication", {}).n("S3Client", "GetBucketReplicationCommand").sc(Fh).build() {
};
var ia = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketRequestPayment", {}).n("S3Client", "GetBucketRequestPaymentCommand").sc(Vh).build() {
};
var aa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketTagging", {}).n("S3Client", "GetBucketTaggingCommand").sc(Kh).build() {
};
var ca = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketVersioning", {}).n("S3Client", "GetBucketVersioningCommand").sc(Wh).build() {
};
var ua = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketWebsite", {}).n("S3Client", "GetBucketWebsiteCommand").sc(Zh).build() {
};
var ma = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetObjectAcl", {}).n("S3Client", "GetObjectAclCommand").sc(Jh).build() {
};
var pa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), kt(e)]; }).s("AmazonS3", "GetObjectAttributes", {}).n("S3Client", "GetObjectAttributesCommand").sc(Qh).build() {
};
var la = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestChecksumRequired: !1, requestValidationModeMember: "ChecksumMode", responseAlgorithms: ["CRC64NVME", "CRC32", "CRC32C", "SHA256", "SHA1"] }), kt(e), Wn(e)]; }).s("AmazonS3", "GetObject", {}).n("S3Client", "GetObjectCommand").sc(Xh).build() {
};
var da = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetObjectLegalHold", {}).n("S3Client", "GetObjectLegalHoldCommand").sc(Yh).build() {
};
var fa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetObjectLockConfiguration", {}).n("S3Client", "GetObjectLockConfigurationCommand").sc(tC).build() {
};
var ga = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetObjectRetention", {}).n("S3Client", "GetObjectRetentionCommand").sc(eC).build() {
};
var xa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetObjectTagging", {}).n("S3Client", "GetObjectTaggingCommand").sc(rC).build() {
};
var ha = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "GetObjectTorrent", {}).n("S3Client", "GetObjectTorrentCommand").sc(oC).build() {
};
var Ca = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetPublicAccessBlock", {}).n("S3Client", "GetPublicAccessBlockCommand").sc(nC).build() {
};
var pr = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "HeadBucket", {}).n("S3Client", "HeadBucketCommand").sc(sC).build() {
};
var lr = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), kt(e), Wn(e)]; }).s("AmazonS3", "HeadObject", {}).n("S3Client", "HeadObjectCommand").sc(iC).build() {
};
var ya = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListBucketAnalyticsConfigurations", {}).n("S3Client", "ListBucketAnalyticsConfigurationsCommand").sc(aC).build() {
};
var Ea = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListBucketIntelligentTieringConfigurations", {}).n("S3Client", "ListBucketIntelligentTieringConfigurationsCommand").sc(cC).build() {
};
var Sa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListBucketInventoryConfigurations", {}).n("S3Client", "ListBucketInventoryConfigurationsCommand").sc(uC).build() {
};
var ba = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListBucketMetricsConfigurations", {}).n("S3Client", "ListBucketMetricsConfigurationsCommand").sc(mC).build() {
};
var bo = class extends d.classBuilder().ep(g).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListBuckets", {}).n("S3Client", "ListBucketsCommand").sc(pC).build() {
};
var ko = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListDirectoryBuckets", {}).n("S3Client", "ListDirectoryBucketsCommand").sc(lC).build() {
};
var ka = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Prefix: { type: "contextParams", name: "Prefix" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListMultipartUploads", {}).n("S3Client", "ListMultipartUploadsCommand").sc(dC).build() {
};
var Ba = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Prefix: { type: "contextParams", name: "Prefix" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListObjects", {}).n("S3Client", "ListObjectsCommand").sc(fC).build() {
};
var Bo = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Prefix: { type: "contextParams", name: "Prefix" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListObjectsV2", {}).n("S3Client", "ListObjectsV2Command").sc(gC).build() {
};
var Pa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Prefix: { type: "contextParams", name: "Prefix" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListObjectVersions", {}).n("S3Client", "ListObjectVersionsCommand").sc(xC).build() {
};
var Po = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), kt(e)]; }).s("AmazonS3", "ListParts", {}).n("S3Client", "ListPartsCommand").sc(hC).build() {
};
var _a = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !1 })]; }).s("AmazonS3", "PutBucketAbac", {}).n("S3Client", "PutBucketAbacCommand").sc(CC).build() {
};
var Aa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !1 })]; }).s("AmazonS3", "PutBucketAccelerateConfiguration", {}).n("S3Client", "PutBucketAccelerateConfigurationCommand").sc(yC).build() {
};
var Ra = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketAcl", {}).n("S3Client", "PutBucketAclCommand").sc(EC).build() {
};
var va = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "PutBucketAnalyticsConfiguration", {}).n("S3Client", "PutBucketAnalyticsConfigurationCommand").sc(SC).build() {
};
var wa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketCors", {}).n("S3Client", "PutBucketCorsCommand").sc(bC).build() {
};
var Oa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketEncryption", {}).n("S3Client", "PutBucketEncryptionCommand").sc(kC).build() {
};
var Ta = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "PutBucketIntelligentTieringConfiguration", {}).n("S3Client", "PutBucketIntelligentTieringConfigurationCommand").sc(BC).build() {
};
var Da = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "PutBucketInventoryConfiguration", {}).n("S3Client", "PutBucketInventoryConfigurationCommand").sc(PC).build() {
};
var Ia = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "PutBucketLifecycleConfiguration", {}).n("S3Client", "PutBucketLifecycleConfigurationCommand").sc(_C).build() {
};
var La = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketLogging", {}).n("S3Client", "PutBucketLoggingCommand").sc(AC).build() {
};
var Ma = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "PutBucketMetricsConfiguration", {}).n("S3Client", "PutBucketMetricsConfigurationCommand").sc(RC).build() {
};
var $a = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "PutBucketNotificationConfiguration", {}).n("S3Client", "PutBucketNotificationConfigurationCommand").sc(vC).build() {
};
var Ua = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketOwnershipControls", {}).n("S3Client", "PutBucketOwnershipControlsCommand").sc(wC).build() {
};
var Na = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketPolicy", {}).n("S3Client", "PutBucketPolicyCommand").sc(OC).build() {
};
var Ga = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketReplication", {}).n("S3Client", "PutBucketReplicationCommand").sc(TC).build() {
};
var ja = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketRequestPayment", {}).n("S3Client", "PutBucketRequestPaymentCommand").sc(DC).build() {
};
var za = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketTagging", {}).n("S3Client", "PutBucketTaggingCommand").sc(IC).build() {
};
var qa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketVersioning", {}).n("S3Client", "PutBucketVersioningCommand").sc(LC).build() {
};
var Ha = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketWebsite", {}).n("S3Client", "PutBucketWebsiteCommand").sc(MC).build() {
};
var Fa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "PutObjectAcl", {}).n("S3Client", "PutObjectAclCommand").sc(UC).build() {
};
var Va = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !1 }), yl(e), E(e), kt(e)]; }).s("AmazonS3", "PutObject", {}).n("S3Client", "PutObjectCommand").sc($C).build() {
};
var Ka = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "PutObjectLegalHold", {}).n("S3Client", "PutObjectLegalHoldCommand").sc(NC).build() {
};
var Wa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "PutObjectLockConfiguration", {}).n("S3Client", "PutObjectLockConfigurationCommand").sc(GC).build() {
};
var Za = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "PutObjectRetention", {}).n("S3Client", "PutObjectRetentionCommand").sc(jC).build() {
};
var Xa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "PutObjectTagging", {}).n("S3Client", "PutObjectTaggingCommand").sc(zC).build() {
};
var Ja = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutPublicAccessBlock", {}).n("S3Client", "PutPublicAccessBlockCommand").sc(qC).build() {
};
var Qa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "RenameObject", {}).n("S3Client", "RenameObjectCommand").sc(HC).build() {
};
var Ya = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !1 }), E(e)]; }).s("AmazonS3", "RestoreObject", {}).n("S3Client", "RestoreObjectCommand").sc(FC).build() {
};
var tc = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), kt(e)]; }).s("AmazonS3", "SelectObjectContent", { eventStream: { output: !0 } }).n("S3Client", "SelectObjectContentCommand").sc(VC).build() {
};
var ec = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "UpdateBucketMetadataInventoryTableConfiguration", {}).n("S3Client", "UpdateBucketMetadataInventoryTableConfigurationCommand").sc(KC).build() {
};
var rc = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "UpdateBucketMetadataJournalTableConfiguration", {}).n("S3Client", "UpdateBucketMetadataJournalTableConfigurationCommand").sc(WC).build() {
};
var oc = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !1 }), E(e), kt(e)]; }).s("AmazonS3", "UploadPart", {}).n("S3Client", "UploadPartCommand").sc(ZC).build() {
};
var nc = class extends d.classBuilder().ep(p(u({}, g), { DisableS3ExpressSessionAuth: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), kt(e)]; }).s("AmazonS3", "UploadPartCopy", {}).n("S3Client", "UploadPartCopyCommand").sc(XC).build() {
};
var sc = class extends d.classBuilder().ep(p(u({}, g), { UseObjectLambdaEndpoint: { type: "staticContextParams", value: !0 } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "WriteGetObjectResponse", {}).n("S3Client", "WriteGetObjectResponseCommand").sc(JC).build() {
};
var HL = { AbortMultipartUploadCommand: gi, CompleteMultipartUploadCommand: xi, CopyObjectCommand: hi, CreateBucketCommand: Ci, CreateBucketMetadataConfigurationCommand: yi, CreateBucketMetadataTableConfigurationCommand: Ei, CreateMultipartUploadCommand: Si, CreateSessionCommand: yo, DeleteBucketCommand: ki, DeleteBucketAnalyticsConfigurationCommand: bi, DeleteBucketCorsCommand: Bi, DeleteBucketEncryptionCommand: Pi, DeleteBucketIntelligentTieringConfigurationCommand: _i, DeleteBucketInventoryConfigurationCommand: Ai, DeleteBucketLifecycleCommand: Ri, DeleteBucketMetadataConfigurationCommand: vi, DeleteBucketMetadataTableConfigurationCommand: wi, DeleteBucketMetricsConfigurationCommand: Oi, DeleteBucketOwnershipControlsCommand: Ti, DeleteBucketPolicyCommand: Di, DeleteBucketReplicationCommand: Ii, DeleteBucketTaggingCommand: Li, DeleteBucketWebsiteCommand: Mi, DeleteObjectCommand: $i, DeleteObjectsCommand: Ui, DeleteObjectTaggingCommand: Ni, DeletePublicAccessBlockCommand: Gi, GetBucketAbacCommand: ji, GetBucketAccelerateConfigurationCommand: zi, GetBucketAclCommand: qi, GetBucketAnalyticsConfigurationCommand: Hi, GetBucketCorsCommand: Fi, GetBucketEncryptionCommand: Vi, GetBucketIntelligentTieringConfigurationCommand: Ki, GetBucketInventoryConfigurationCommand: Wi, GetBucketLifecycleConfigurationCommand: Zi, GetBucketLocationCommand: Xi, GetBucketLoggingCommand: Ji, GetBucketMetadataConfigurationCommand: Qi, GetBucketMetadataTableConfigurationCommand: Yi, GetBucketMetricsConfigurationCommand: ta, GetBucketNotificationConfigurationCommand: ea, GetBucketOwnershipControlsCommand: ra, GetBucketPolicyCommand: oa, GetBucketPolicyStatusCommand: na, GetBucketReplicationCommand: sa, GetBucketRequestPaymentCommand: ia, GetBucketTaggingCommand: aa, GetBucketVersioningCommand: ca, GetBucketWebsiteCommand: ua, GetObjectCommand: la, GetObjectAclCommand: ma, GetObjectAttributesCommand: pa, GetObjectLegalHoldCommand: da, GetObjectLockConfigurationCommand: fa, GetObjectRetentionCommand: ga, GetObjectTaggingCommand: xa, GetObjectTorrentCommand: ha, GetPublicAccessBlockCommand: Ca, HeadBucketCommand: pr, HeadObjectCommand: lr, ListBucketAnalyticsConfigurationsCommand: ya, ListBucketIntelligentTieringConfigurationsCommand: Ea, ListBucketInventoryConfigurationsCommand: Sa, ListBucketMetricsConfigurationsCommand: ba, ListBucketsCommand: bo, ListDirectoryBucketsCommand: ko, ListMultipartUploadsCommand: ka, ListObjectsCommand: Ba, ListObjectsV2Command: Bo, ListObjectVersionsCommand: Pa, ListPartsCommand: Po, PutBucketAbacCommand: _a, PutBucketAccelerateConfigurationCommand: Aa, PutBucketAclCommand: Ra, PutBucketAnalyticsConfigurationCommand: va, PutBucketCorsCommand: wa, PutBucketEncryptionCommand: Oa, PutBucketIntelligentTieringConfigurationCommand: Ta, PutBucketInventoryConfigurationCommand: Da, PutBucketLifecycleConfigurationCommand: Ia, PutBucketLoggingCommand: La, PutBucketMetricsConfigurationCommand: Ma, PutBucketNotificationConfigurationCommand: $a, PutBucketOwnershipControlsCommand: Ua, PutBucketPolicyCommand: Na, PutBucketReplicationCommand: Ga, PutBucketRequestPaymentCommand: ja, PutBucketTaggingCommand: za, PutBucketVersioningCommand: qa, PutBucketWebsiteCommand: Ha, PutObjectCommand: Va, PutObjectAclCommand: Fa, PutObjectLegalHoldCommand: Ka, PutObjectLockConfigurationCommand: Wa, PutObjectRetentionCommand: Za, PutObjectTaggingCommand: Xa, PutPublicAccessBlockCommand: Ja, RenameObjectCommand: Qa, RestoreObjectCommand: Ya, SelectObjectContentCommand: tc, UpdateBucketMetadataInventoryTableConfigurationCommand: ec, UpdateBucketMetadataJournalTableConfigurationCommand: rc, UploadPartCommand: oc, UploadPartCopyCommand: nc, WriteGetObjectResponseCommand: sc }, Lm = class extends we {
};
fp(HL, Lm);
var Ntt = rr(we, bo, "ContinuationToken", "ContinuationToken", "MaxBuckets");
var Htt = rr(we, ko, "ContinuationToken", "ContinuationToken", "MaxDirectoryBuckets");
var Ztt = rr(we, Bo, "ContinuationToken", "NextContinuationToken", "MaxKeys");
var tet = rr(we, Po, "PartNumberMarker", "NextPartNumberMarker", "MaxParts");
var _o = () => { let r = new WeakSet; return (t, o) => { if (typeof o == "object" && o !== null) {
    if (r.has(o))
        return "[Circular]";
    r.add(o);
} return o; }; };
var vy = r => new Promise(t => setTimeout(t, r * 1e3));
var wy = { minDelay: 2, maxDelay: 120 }, xt = (function (r) { return r.ABORTED = "ABORTED", r.FAILURE = "FAILURE", r.SUCCESS = "SUCCESS", r.RETRY = "RETRY", r.TIMEOUT = "TIMEOUT", r; })(xt || {}), dr = r => { if (r.state === xt.ABORTED) {
    let t = new Error(`${JSON.stringify(p(u({}, r), { reason: "Request was aborted" }), _o())}`);
    throw t.name = "AbortError", t;
}
else if (r.state === xt.TIMEOUT) {
    let t = new Error(`${JSON.stringify(p(u({}, r), { reason: "Waiter has timed out" }), _o())}`);
    throw t.name = "TimeoutError", t;
}
else if (r.state !== xt.SUCCESS)
    throw new Error(`${JSON.stringify(r, _o())}`); return r; };
var FL = (r, t, o, e) => { if (e > o)
    return t; let s = r * 2 ** (e - 1); return VL(r, s); }, VL = (r, t) => r + Math.random() * (t - r), Ty = (h, k, w) => P(null, [h, k, w], function* ({ minDelay: r, maxDelay: t, maxWaitTime: o, abortController: e, client: s, abortSignal: a }, c, x) { let B = {}, { state: D, reason: R } = yield x(s, c); if (R) {
    let et = Oy(R);
    B[et] |= 0, B[et] += 1;
} if (D !== xt.RETRY)
    return { state: D, reason: R, observedResponses: B }; let $ = 1, G = Date.now() + o * 1e3, q = Math.log(t / r) / Math.log(2) + 1; for (;;) {
    if (e?.signal?.aborted || a?.aborted) {
        let yt = "AbortController signal aborted.";
        return B[yt] |= 0, B[yt] += 1, { state: xt.ABORTED, observedResponses: B };
    }
    let et = FL(r, t, q, $);
    if (Date.now() + et * 1e3 > G)
        return { state: xt.TIMEOUT, observedResponses: B };
    yield vy(et);
    let { state: ct, reason: rt } = yield x(s, c);
    if (rt) {
        let yt = Oy(rt);
        B[yt] |= 0, B[yt] += 1;
    }
    if (ct !== xt.RETRY)
        return { state: ct, reason: rt, observedResponses: B };
    $ += 1;
} }), Oy = r => r?.$responseBodyText ? `Deserialization error for body: ${r.$responseBodyText}` : r?.$metadata?.httpStatusCode ? r.$response || r.message ? `${r.$response.statusCode ?? r.$metadata.httpStatusCode ?? "Unknown"}: ${r.message}` : `${r.$metadata.httpStatusCode}: OK` : String(r?.message ?? JSON.stringify(r, _o()) ?? "Unknown");
var Dy = r => { if (r.maxWaitTime <= 0)
    throw new Error("WaiterConfiguration.maxWaitTime must be greater than 0"); if (r.minDelay <= 0)
    throw new Error("WaiterConfiguration.minDelay must be greater than 0"); if (r.maxDelay <= 0)
    throw new Error("WaiterConfiguration.maxDelay must be greater than 0"); if (r.maxWaitTime <= r.minDelay)
    throw new Error(`WaiterConfiguration.maxWaitTime [${r.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${r.minDelay}] for this waiter`); if (r.maxDelay < r.minDelay)
    throw new Error(`WaiterConfiguration.maxDelay [${r.maxDelay}] must be greater than WaiterConfiguration.minDelay [${r.minDelay}] for this waiter`); };
var Iy = r => { let t, o = new Promise(e => { t = () => e({ state: xt.ABORTED }), typeof r.addEventListener == "function" ? r.addEventListener("abort", t) : r.onabort = t; }); return { clearListener() { typeof r.removeEventListener == "function" && r.removeEventListener("abort", t); }, aborted: o }; }, Oe = (r, t, o) => P(null, null, function* () { let e = u(u({}, wy), r); Dy(e); let s = [Ty(e, t, o)], a = []; if (r.abortSignal) {
    let { aborted: c, clearListener: x } = Iy(r.abortSignal);
    a.push(x), s.push(c);
} if (r.abortController?.signal) {
    let { aborted: c, clearListener: x } = Iy(r.abortController.signal);
    a.push(x), s.push(c);
} return Promise.race(s).then(c => { for (let x of a)
    x(); return c; }); });
var Ly = (r, t) => P(null, null, function* () { let o; try {
    return o = yield r.send(new pr(t)), { state: xt.SUCCESS, reason: o };
}
catch (e) {
    if (o = e, e.name && e.name == "NotFound")
        return { state: xt.RETRY, reason: o };
} return { state: xt.RETRY, reason: o }; }), bet = (r, t) => P(null, null, function* () { return Oe(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, Ly); }), ket = (r, t) => P(null, null, function* () { let e = yield Oe(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, Ly); return dr(e); });
var My = (r, t) => P(null, null, function* () { let o; try {
    o = yield r.send(new pr(t));
}
catch (e) {
    if (o = e, e.name && e.name == "NotFound")
        return { state: xt.SUCCESS, reason: o };
} return { state: xt.RETRY, reason: o }; }), Ret = (r, t) => P(null, null, function* () { return Oe(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, My); }), vet = (r, t) => P(null, null, function* () { let e = yield Oe(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, My); return dr(e); });
var $y = (r, t) => P(null, null, function* () { let o; try {
    return o = yield r.send(new lr(t)), { state: xt.SUCCESS, reason: o };
}
catch (e) {
    if (o = e, e.name && e.name == "NotFound")
        return { state: xt.RETRY, reason: o };
} return { state: xt.RETRY, reason: o }; }), Iet = (r, t) => P(null, null, function* () { return Oe(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, $y); }), Let = (r, t) => P(null, null, function* () { let e = yield Oe(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, $y); return dr(e); });
var Uy = (r, t) => P(null, null, function* () { let o; try {
    o = yield r.send(new lr(t));
}
catch (e) {
    if (o = e, e.name && e.name == "NotFound")
        return { state: xt.SUCCESS, reason: o };
} return { state: xt.RETRY, reason: o }; }), Get = (r, t) => P(null, null, function* () { return Oe(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, Uy); }), jet = (r, t) => P(null, null, function* () { let e = yield Oe(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, Uy); return dr(e); });
var Het = { Disabled: "Disabled", Enabled: "Enabled" }, Fet = { requester: "requester" }, Vet = { requester: "requester" }, Ket = { Enabled: "Enabled", Suspended: "Suspended" }, Wet = { AmazonCustomerByEmail: "AmazonCustomerByEmail", CanonicalUser: "CanonicalUser", Group: "Group" }, Zet = { FULL_CONTROL: "FULL_CONTROL", READ: "READ", READ_ACP: "READ_ACP", WRITE: "WRITE", WRITE_ACP: "WRITE_ACP" }, Xet = { Destination: "Destination" }, Jet = { COMPOSITE: "COMPOSITE", FULL_OBJECT: "FULL_OBJECT" }, Qet = { AES256: "AES256", aws_fsx: "aws:fsx", aws_kms: "aws:kms", aws_kms_dsse: "aws:kms:dsse" }, Yet = { authenticated_read: "authenticated-read", aws_exec_read: "aws-exec-read", bucket_owner_full_control: "bucket-owner-full-control", bucket_owner_read: "bucket-owner-read", private: "private", public_read: "public-read", public_read_write: "public-read-write" }, trt = { CRC32: "CRC32", CRC32C: "CRC32C", CRC64NVME: "CRC64NVME", SHA1: "SHA1", SHA256: "SHA256" }, ert = { COPY: "COPY", REPLACE: "REPLACE" }, rrt = { OFF: "OFF", ON: "ON" }, ort = { COMPLIANCE: "COMPLIANCE", GOVERNANCE: "GOVERNANCE" }, nrt = { DEEP_ARCHIVE: "DEEP_ARCHIVE", EXPRESS_ONEZONE: "EXPRESS_ONEZONE", FSX_ONTAP: "FSX_ONTAP", FSX_OPENZFS: "FSX_OPENZFS", GLACIER: "GLACIER", GLACIER_IR: "GLACIER_IR", INTELLIGENT_TIERING: "INTELLIGENT_TIERING", ONEZONE_IA: "ONEZONE_IA", OUTPOSTS: "OUTPOSTS", REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY", SNOW: "SNOW", STANDARD: "STANDARD", STANDARD_IA: "STANDARD_IA" }, srt = { COPY: "COPY", REPLACE: "REPLACE" }, irt = { authenticated_read: "authenticated-read", private: "private", public_read: "public-read", public_read_write: "public-read-write" }, art = { SingleAvailabilityZone: "SingleAvailabilityZone", SingleLocalZone: "SingleLocalZone" }, crt = { Directory: "Directory" }, urt = { AvailabilityZone: "AvailabilityZone", LocalZone: "LocalZone" }, mrt = { EU: "EU", af_south_1: "af-south-1", ap_east_1: "ap-east-1", ap_northeast_1: "ap-northeast-1", ap_northeast_2: "ap-northeast-2", ap_northeast_3: "ap-northeast-3", ap_south_1: "ap-south-1", ap_south_2: "ap-south-2", ap_southeast_1: "ap-southeast-1", ap_southeast_2: "ap-southeast-2", ap_southeast_3: "ap-southeast-3", ap_southeast_4: "ap-southeast-4", ap_southeast_5: "ap-southeast-5", ca_central_1: "ca-central-1", cn_north_1: "cn-north-1", cn_northwest_1: "cn-northwest-1", eu_central_1: "eu-central-1", eu_central_2: "eu-central-2", eu_north_1: "eu-north-1", eu_south_1: "eu-south-1", eu_south_2: "eu-south-2", eu_west_1: "eu-west-1", eu_west_2: "eu-west-2", eu_west_3: "eu-west-3", il_central_1: "il-central-1", me_central_1: "me-central-1", me_south_1: "me-south-1", sa_east_1: "sa-east-1", us_east_2: "us-east-2", us_gov_east_1: "us-gov-east-1", us_gov_west_1: "us-gov-west-1", us_west_1: "us-west-1", us_west_2: "us-west-2" }, prt = { BucketOwnerEnforced: "BucketOwnerEnforced", BucketOwnerPreferred: "BucketOwnerPreferred", ObjectWriter: "ObjectWriter" }, lrt = { DISABLED: "DISABLED", ENABLED: "ENABLED" }, drt = { AES256: "AES256", aws_kms: "aws:kms" }, frt = { DISABLED: "DISABLED", ENABLED: "ENABLED" }, grt = { ReadOnly: "ReadOnly", ReadWrite: "ReadWrite" }, xrt = { CSV: "CSV" }, hrt = { V_1: "V_1" }, Crt = { NONE: "NONE", SSE_C: "SSE-C" }, yrt = { Disabled: "Disabled", Enabled: "Enabled" }, Ert = { ARCHIVE_ACCESS: "ARCHIVE_ACCESS", DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS" }, Srt = { CSV: "CSV", ORC: "ORC", Parquet: "Parquet" }, brt = { All: "All", Current: "Current" }, krt = { BucketKeyStatus: "BucketKeyStatus", ChecksumAlgorithm: "ChecksumAlgorithm", ETag: "ETag", EncryptionStatus: "EncryptionStatus", IntelligentTieringAccessTier: "IntelligentTieringAccessTier", IsMultipartUploaded: "IsMultipartUploaded", LastModifiedDate: "LastModifiedDate", LifecycleExpirationDate: "LifecycleExpirationDate", ObjectAccessControlList: "ObjectAccessControlList", ObjectLockLegalHoldStatus: "ObjectLockLegalHoldStatus", ObjectLockMode: "ObjectLockMode", ObjectLockRetainUntilDate: "ObjectLockRetainUntilDate", ObjectOwner: "ObjectOwner", ReplicationStatus: "ReplicationStatus", Size: "Size", StorageClass: "StorageClass" }, Brt = { Daily: "Daily", Weekly: "Weekly" }, Prt = { DEEP_ARCHIVE: "DEEP_ARCHIVE", GLACIER: "GLACIER", GLACIER_IR: "GLACIER_IR", INTELLIGENT_TIERING: "INTELLIGENT_TIERING", ONEZONE_IA: "ONEZONE_IA", STANDARD_IA: "STANDARD_IA" }, _rt = { Disabled: "Disabled", Enabled: "Enabled" }, Art = { all_storage_classes_128K: "all_storage_classes_128K", varies_by_storage_class: "varies_by_storage_class" }, Rrt = { FULL_CONTROL: "FULL_CONTROL", READ: "READ", WRITE: "WRITE" }, vrt = { DeliveryTime: "DeliveryTime", EventTime: "EventTime" }, wrt = { aws: "aws", customer: "customer" }, Ort = { s3_IntelligentTiering: "s3:IntelligentTiering", s3_LifecycleExpiration_: "s3:LifecycleExpiration:*", s3_LifecycleExpiration_Delete: "s3:LifecycleExpiration:Delete", s3_LifecycleExpiration_DeleteMarkerCreated: "s3:LifecycleExpiration:DeleteMarkerCreated", s3_LifecycleTransition: "s3:LifecycleTransition", s3_ObjectAcl_Put: "s3:ObjectAcl:Put", s3_ObjectCreated_: "s3:ObjectCreated:*", s3_ObjectCreated_CompleteMultipartUpload: "s3:ObjectCreated:CompleteMultipartUpload", s3_ObjectCreated_Copy: "s3:ObjectCreated:Copy", s3_ObjectCreated_Post: "s3:ObjectCreated:Post", s3_ObjectCreated_Put: "s3:ObjectCreated:Put", s3_ObjectRemoved_: "s3:ObjectRemoved:*", s3_ObjectRemoved_Delete: "s3:ObjectRemoved:Delete", s3_ObjectRemoved_DeleteMarkerCreated: "s3:ObjectRemoved:DeleteMarkerCreated", s3_ObjectRestore_: "s3:ObjectRestore:*", s3_ObjectRestore_Completed: "s3:ObjectRestore:Completed", s3_ObjectRestore_Delete: "s3:ObjectRestore:Delete", s3_ObjectRestore_Post: "s3:ObjectRestore:Post", s3_ObjectTagging_: "s3:ObjectTagging:*", s3_ObjectTagging_Delete: "s3:ObjectTagging:Delete", s3_ObjectTagging_Put: "s3:ObjectTagging:Put", s3_ReducedRedundancyLostObject: "s3:ReducedRedundancyLostObject", s3_Replication_: "s3:Replication:*", s3_Replication_OperationFailedReplication: "s3:Replication:OperationFailedReplication", s3_Replication_OperationMissedThreshold: "s3:Replication:OperationMissedThreshold", s3_Replication_OperationNotTracked: "s3:Replication:OperationNotTracked", s3_Replication_OperationReplicatedAfterThreshold: "s3:Replication:OperationReplicatedAfterThreshold" }, Trt = { prefix: "prefix", suffix: "suffix" }, Drt = { Disabled: "Disabled", Enabled: "Enabled" }, Irt = { Disabled: "Disabled", Enabled: "Enabled" }, Lrt = { Disabled: "Disabled", Enabled: "Enabled" }, Mrt = { Disabled: "Disabled", Enabled: "Enabled" }, $rt = { Disabled: "Disabled", Enabled: "Enabled" }, Urt = { Disabled: "Disabled", Enabled: "Enabled" }, Nrt = { Disabled: "Disabled", Enabled: "Enabled" }, Grt = { BucketOwner: "BucketOwner", Requester: "Requester" }, jrt = { Disabled: "Disabled", Enabled: "Enabled" }, zrt = { Enabled: "Enabled", Suspended: "Suspended" }, qrt = { http: "http", https: "https" }, Hrt = { COMPLETE: "COMPLETE", COMPLETED: "COMPLETED", FAILED: "FAILED", PENDING: "PENDING", REPLICA: "REPLICA" }, Frt = { ENABLED: "ENABLED" }, Vrt = { CHECKSUM: "Checksum", ETAG: "ETag", OBJECT_PARTS: "ObjectParts", OBJECT_SIZE: "ObjectSize", STORAGE_CLASS: "StorageClass" }, Krt = { Enabled: "Enabled" }, Wrt = { COMPLIANCE: "COMPLIANCE", GOVERNANCE: "GOVERNANCE" }, Zrt = { ARCHIVE_ACCESS: "ARCHIVE_ACCESS", DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS" }, Xrt = { url: "url" }, Jrt = { DEEP_ARCHIVE: "DEEP_ARCHIVE", EXPRESS_ONEZONE: "EXPRESS_ONEZONE", FSX_ONTAP: "FSX_ONTAP", FSX_OPENZFS: "FSX_OPENZFS", GLACIER: "GLACIER", GLACIER_IR: "GLACIER_IR", INTELLIGENT_TIERING: "INTELLIGENT_TIERING", ONEZONE_IA: "ONEZONE_IA", OUTPOSTS: "OUTPOSTS", REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY", SNOW: "SNOW", STANDARD: "STANDARD", STANDARD_IA: "STANDARD_IA" }, Qrt = { RESTORE_STATUS: "RestoreStatus" }, Yrt = { STANDARD: "STANDARD" }, tot = { Disabled: "Disabled", Enabled: "Enabled" }, eot = { Bulk: "Bulk", Expedited: "Expedited", Standard: "Standard" }, rot = { SQL: "SQL" }, oot = { BZIP2: "BZIP2", GZIP: "GZIP", NONE: "NONE" }, not = { IGNORE: "IGNORE", NONE: "NONE", USE: "USE" }, sot = { DOCUMENT: "DOCUMENT", LINES: "LINES" }, iot = { ALWAYS: "ALWAYS", ASNEEDED: "ASNEEDED" }, aot = { SELECT: "SELECT" };
export { d as $Command, v0 as AbacStatus$, Zw as AbortIncompleteMultipartUpload$, th as AbortMultipartUpload$, gi as AbortMultipartUploadCommand, Xw as AbortMultipartUploadOutput$, Jw as AbortMultipartUploadRequest$, Qw as AccelerateConfiguration$, w0 as AccessControlPolicy$, Yw as AccessControlTranslation$, tO as AnalyticsAndOperator$, hm as AnalyticsConfiguration$, eO as AnalyticsExportDestination$, cL as AnalyticsFilter$, rO as AnalyticsS3BucketDestination$, xrt as AnalyticsS3ExportFileFormat, Zrt as ArchiveStatus, oO as BlockedEncryptionTypes$, nO as Bucket$, Het as BucketAbacStatus, Ket as BucketAccelerateStatus, as as BucketAlreadyExists, sO as BucketAlreadyExists$, cs as BucketAlreadyOwnedByYou, iO as BucketAlreadyOwnedByYou$, irt as BucketCannedACL, aO as BucketInfo$, cO as BucketLifecycleConfiguration$, mrt as BucketLocationConstraint, uO as BucketLoggingStatus$, Rrt as BucketLogsPermission, crt as BucketType, zrt as BucketVersioningStatus, bO as CORSConfiguration$, kO as CORSRule$, DO as CSVInput$, IO as CSVOutput$, mO as Checksum$, trt as ChecksumAlgorithm, Frt as ChecksumMode, Jet as ChecksumType, pO as CommonPrefix$, eh as CompleteMultipartUpload$, xi as CompleteMultipartUploadCommand, fO as CompleteMultipartUploadOutput$, gO as CompleteMultipartUploadRequest$, lO as CompletedMultipartUpload$, dO as CompletedPart$, oot as CompressionType, xO as Condition$, hO as ContinuationEvent$, rh as CopyObject$, hi as CopyObjectCommand, CO as CopyObjectOutput$, yO as CopyObjectRequest$, EO as CopyObjectResult$, SO as CopyPartResult$, oh as CreateBucket$, Ci as CreateBucketCommand, BO as CreateBucketConfiguration$, nh as CreateBucketMetadataConfiguration$, yi as CreateBucketMetadataConfigurationCommand, PO as CreateBucketMetadataConfigurationRequest$, sh as CreateBucketMetadataTableConfiguration$, Ei as CreateBucketMetadataTableConfigurationCommand, _O as CreateBucketMetadataTableConfigurationRequest$, AO as CreateBucketOutput$, RO as CreateBucketRequest$, ih as CreateMultipartUpload$, Si as CreateMultipartUploadCommand, vO as CreateMultipartUploadOutput$, wO as CreateMultipartUploadRequest$, ah as CreateSession$, yo as CreateSessionCommand, OO as CreateSessionOutput$, TO as CreateSessionRequest$, art as DataRedundancy, LO as DefaultRetention$, MO as Delete$, ch as DeleteBucket$, uh as DeleteBucketAnalyticsConfiguration$, bi as DeleteBucketAnalyticsConfigurationCommand, $O as DeleteBucketAnalyticsConfigurationRequest$, ki as DeleteBucketCommand, mh as DeleteBucketCors$, Bi as DeleteBucketCorsCommand, UO as DeleteBucketCorsRequest$, ph as DeleteBucketEncryption$, Pi as DeleteBucketEncryptionCommand, NO as DeleteBucketEncryptionRequest$, lh as DeleteBucketIntelligentTieringConfiguration$, _i as DeleteBucketIntelligentTieringConfigurationCommand, GO as DeleteBucketIntelligentTieringConfigurationRequest$, dh as DeleteBucketInventoryConfiguration$, Ai as DeleteBucketInventoryConfigurationCommand, jO as DeleteBucketInventoryConfigurationRequest$, fh as DeleteBucketLifecycle$, Ri as DeleteBucketLifecycleCommand, zO as DeleteBucketLifecycleRequest$, gh as DeleteBucketMetadataConfiguration$, vi as DeleteBucketMetadataConfigurationCommand, qO as DeleteBucketMetadataConfigurationRequest$, xh as DeleteBucketMetadataTableConfiguration$, wi as DeleteBucketMetadataTableConfigurationCommand, HO as DeleteBucketMetadataTableConfigurationRequest$, hh as DeleteBucketMetricsConfiguration$, Oi as DeleteBucketMetricsConfigurationCommand, FO as DeleteBucketMetricsConfigurationRequest$, Ch as DeleteBucketOwnershipControls$, Ti as DeleteBucketOwnershipControlsCommand, VO as DeleteBucketOwnershipControlsRequest$, yh as DeleteBucketPolicy$, Di as DeleteBucketPolicyCommand, KO as DeleteBucketPolicyRequest$, Eh as DeleteBucketReplication$, Ii as DeleteBucketReplicationCommand, WO as DeleteBucketReplicationRequest$, ZO as DeleteBucketRequest$, Sh as DeleteBucketTagging$, Li as DeleteBucketTaggingCommand, XO as DeleteBucketTaggingRequest$, bh as DeleteBucketWebsite$, Mi as DeleteBucketWebsiteCommand, JO as DeleteBucketWebsiteRequest$, YO as DeleteMarkerEntry$, tT as DeleteMarkerReplication$, Drt as DeleteMarkerReplicationStatus, kh as DeleteObject$, $i as DeleteObjectCommand, eT as DeleteObjectOutput$, rT as DeleteObjectRequest$, Ph as DeleteObjectTagging$, Ni as DeleteObjectTaggingCommand, sT as DeleteObjectTaggingOutput$, iT as DeleteObjectTaggingRequest$, Bh as DeleteObjects$, Ui as DeleteObjectsCommand, oT as DeleteObjectsOutput$, nT as DeleteObjectsRequest$, _h as DeletePublicAccessBlock$, Gi as DeletePublicAccessBlockCommand, aT as DeletePublicAccessBlockRequest$, QO as DeletedObject$, cT as Destination$, uT as DestinationResult$, Xrt as EncodingType, mT as Encryption$, pT as EncryptionConfiguration$, Crt as EncryptionType, ds as EncryptionTypeMismatch, lT as EncryptionTypeMismatch$, dT as EndEvent$, Cm as ErrorDetails$, O0 as ErrorDocument$, Ort as Event, gT as EventBridgeConfiguration$, xT as ExistingObjectReplication$, Mrt as ExistingObjectReplicationStatus, frt as ExpirationState, _rt as ExpirationStatus, rot as ExpressionType, not as FileHeaderInfo, hT as FilterRule$, Trt as FilterRuleName, Ah as GetBucketAbac$, ji as GetBucketAbacCommand, CT as GetBucketAbacOutput$, yT as GetBucketAbacRequest$, Rh as GetBucketAccelerateConfiguration$, zi as GetBucketAccelerateConfigurationCommand, ET as GetBucketAccelerateConfigurationOutput$, ST as GetBucketAccelerateConfigurationRequest$, vh as GetBucketAcl$, qi as GetBucketAclCommand, bT as GetBucketAclOutput$, kT as GetBucketAclRequest$, wh as GetBucketAnalyticsConfiguration$, Hi as GetBucketAnalyticsConfigurationCommand, BT as GetBucketAnalyticsConfigurationOutput$, PT as GetBucketAnalyticsConfigurationRequest$, Oh as GetBucketCors$, Fi as GetBucketCorsCommand, _T as GetBucketCorsOutput$, AT as GetBucketCorsRequest$, Th as GetBucketEncryption$, Vi as GetBucketEncryptionCommand, RT as GetBucketEncryptionOutput$, vT as GetBucketEncryptionRequest$, Dh as GetBucketIntelligentTieringConfiguration$, Ki as GetBucketIntelligentTieringConfigurationCommand, wT as GetBucketIntelligentTieringConfigurationOutput$, OT as GetBucketIntelligentTieringConfigurationRequest$, Ih as GetBucketInventoryConfiguration$, Wi as GetBucketInventoryConfigurationCommand, TT as GetBucketInventoryConfigurationOutput$, DT as GetBucketInventoryConfigurationRequest$, Lh as GetBucketLifecycleConfiguration$, Zi as GetBucketLifecycleConfigurationCommand, IT as GetBucketLifecycleConfigurationOutput$, LT as GetBucketLifecycleConfigurationRequest$, Mh as GetBucketLocation$, Xi as GetBucketLocationCommand, MT as GetBucketLocationOutput$, $T as GetBucketLocationRequest$, $h as GetBucketLogging$, Ji as GetBucketLoggingCommand, UT as GetBucketLoggingOutput$, NT as GetBucketLoggingRequest$, Uh as GetBucketMetadataConfiguration$, Qi as GetBucketMetadataConfigurationCommand, GT as GetBucketMetadataConfigurationOutput$, jT as GetBucketMetadataConfigurationRequest$, zT as GetBucketMetadataConfigurationResult$, Nh as GetBucketMetadataTableConfiguration$, Yi as GetBucketMetadataTableConfigurationCommand, qT as GetBucketMetadataTableConfigurationOutput$, HT as GetBucketMetadataTableConfigurationRequest$, FT as GetBucketMetadataTableConfigurationResult$, Gh as GetBucketMetricsConfiguration$, ta as GetBucketMetricsConfigurationCommand, VT as GetBucketMetricsConfigurationOutput$, KT as GetBucketMetricsConfigurationRequest$, jh as GetBucketNotificationConfiguration$, ea as GetBucketNotificationConfigurationCommand, WT as GetBucketNotificationConfigurationRequest$, zh as GetBucketOwnershipControls$, ra as GetBucketOwnershipControlsCommand, ZT as GetBucketOwnershipControlsOutput$, XT as GetBucketOwnershipControlsRequest$, qh as GetBucketPolicy$, oa as GetBucketPolicyCommand, JT as GetBucketPolicyOutput$, QT as GetBucketPolicyRequest$, Hh as GetBucketPolicyStatus$, na as GetBucketPolicyStatusCommand, YT as GetBucketPolicyStatusOutput$, t1 as GetBucketPolicyStatusRequest$, Fh as GetBucketReplication$, sa as GetBucketReplicationCommand, e1 as GetBucketReplicationOutput$, r1 as GetBucketReplicationRequest$, Vh as GetBucketRequestPayment$, ia as GetBucketRequestPaymentCommand, o1 as GetBucketRequestPaymentOutput$, n1 as GetBucketRequestPaymentRequest$, Kh as GetBucketTagging$, aa as GetBucketTaggingCommand, s1 as GetBucketTaggingOutput$, i1 as GetBucketTaggingRequest$, Wh as GetBucketVersioning$, ca as GetBucketVersioningCommand, a1 as GetBucketVersioningOutput$, c1 as GetBucketVersioningRequest$, Zh as GetBucketWebsite$, ua as GetBucketWebsiteCommand, u1 as GetBucketWebsiteOutput$, m1 as GetBucketWebsiteRequest$, Xh as GetObject$, Jh as GetObjectAcl$, ma as GetObjectAclCommand, p1 as GetObjectAclOutput$, l1 as GetObjectAclRequest$, Qh as GetObjectAttributes$, pa as GetObjectAttributesCommand, d1 as GetObjectAttributesOutput$, f1 as GetObjectAttributesParts$, g1 as GetObjectAttributesRequest$, la as GetObjectCommand, Yh as GetObjectLegalHold$, da as GetObjectLegalHoldCommand, x1 as GetObjectLegalHoldOutput$, h1 as GetObjectLegalHoldRequest$, tC as GetObjectLockConfiguration$, fa as GetObjectLockConfigurationCommand, C1 as GetObjectLockConfigurationOutput$, y1 as GetObjectLockConfigurationRequest$, E1 as GetObjectOutput$, S1 as GetObjectRequest$, eC as GetObjectRetention$, ga as GetObjectRetentionCommand, b1 as GetObjectRetentionOutput$, k1 as GetObjectRetentionRequest$, rC as GetObjectTagging$, xa as GetObjectTaggingCommand, B1 as GetObjectTaggingOutput$, P1 as GetObjectTaggingRequest$, oC as GetObjectTorrent$, ha as GetObjectTorrentCommand, _1 as GetObjectTorrentOutput$, A1 as GetObjectTorrentRequest$, nC as GetPublicAccessBlock$, Ca as GetPublicAccessBlockCommand, R1 as GetPublicAccessBlockOutput$, v1 as GetPublicAccessBlockRequest$, w1 as GlacierJobParameters$, O1 as Grant$, T0 as Grantee$, sC as HeadBucket$, pr as HeadBucketCommand, T1 as HeadBucketOutput$, D1 as HeadBucketRequest$, iC as HeadObject$, lr as HeadObjectCommand, I1 as HeadObjectOutput$, L1 as HeadObjectRequest$, hs as IdempotencyParameterMismatch, M1 as IdempotencyParameterMismatch$, D0 as IndexDocument$, I0 as Initiator$, L0 as InputSerialization$, Ert as IntelligentTieringAccessTier, $1 as IntelligentTieringAndOperator$, ym as IntelligentTieringConfiguration$, U1 as IntelligentTieringFilter$, yrt as IntelligentTieringStatus, ms as InvalidObjectState, N1 as InvalidObjectState$, fs as InvalidRequest, G1 as InvalidRequest$, gs as InvalidWriteOffset, j1 as InvalidWriteOffset$, Em as InventoryConfiguration$, lrt as InventoryConfigurationState, z1 as InventoryDestination$, q1 as InventoryEncryption$, H1 as InventoryFilter$, Srt as InventoryFormat, Brt as InventoryFrequency, brt as InventoryIncludedObjectVersions, krt as InventoryOptionalField, F1 as InventoryS3BucketDestination$, V1 as InventorySchedule$, K1 as InventoryTableConfiguration$, W1 as InventoryTableConfigurationResult$, Z1 as InventoryTableConfigurationUpdates$, Y1 as JSONInput$, tD as JSONOutput$, sot as JSONType, X1 as JournalTableConfiguration$, J1 as JournalTableConfigurationResult$, Q1 as JournalTableConfigurationUpdates$, eD as LambdaFunctionConfiguration$, rD as LifecycleExpiration$, oD as LifecycleRule$, nD as LifecycleRuleAndOperator$, sD as LifecycleRuleFilter$, aC as ListBucketAnalyticsConfigurations$, ya as ListBucketAnalyticsConfigurationsCommand, iD as ListBucketAnalyticsConfigurationsOutput$, aD as ListBucketAnalyticsConfigurationsRequest$, cC as ListBucketIntelligentTieringConfigurations$, Ea as ListBucketIntelligentTieringConfigurationsCommand, cD as ListBucketIntelligentTieringConfigurationsOutput$, uD as ListBucketIntelligentTieringConfigurationsRequest$, uC as ListBucketInventoryConfigurations$, Sa as ListBucketInventoryConfigurationsCommand, mD as ListBucketInventoryConfigurationsOutput$, pD as ListBucketInventoryConfigurationsRequest$, mC as ListBucketMetricsConfigurations$, ba as ListBucketMetricsConfigurationsCommand, lD as ListBucketMetricsConfigurationsOutput$, dD as ListBucketMetricsConfigurationsRequest$, pC as ListBuckets$, bo as ListBucketsCommand, fD as ListBucketsOutput$, gD as ListBucketsRequest$, lC as ListDirectoryBuckets$, ko as ListDirectoryBucketsCommand, xD as ListDirectoryBucketsOutput$, hD as ListDirectoryBucketsRequest$, dC as ListMultipartUploads$, ka as ListMultipartUploadsCommand, CD as ListMultipartUploadsOutput$, yD as ListMultipartUploadsRequest$, xC as ListObjectVersions$, Pa as ListObjectVersionsCommand, BD as ListObjectVersionsOutput$, PD as ListObjectVersionsRequest$, fC as ListObjects$, Ba as ListObjectsCommand, ED as ListObjectsOutput$, SD as ListObjectsRequest$, gC as ListObjectsV2$, Bo as ListObjectsV2Command, bD as ListObjectsV2Output$, kD as ListObjectsV2Request$, hC as ListParts$, Po as ListPartsCommand, _D as ListPartsOutput$, AD as ListPartsRequest$, RD as LocationInfo$, urt as LocationType, M0 as LoggingEnabled$, tot as MFADelete, jrt as MFADeleteStatus, vD as MetadataConfiguration$, wD as MetadataConfigurationResult$, ert as MetadataDirective, OD as MetadataEntry$, TD as MetadataTableConfiguration$, DD as MetadataTableConfigurationResult$, Sm as MetadataTableEncryptionConfiguration$, ID as Metrics$, LD as MetricsAndOperator$, bm as MetricsConfiguration$, uL as MetricsFilter$, Irt as MetricsStatus, MD as MultipartUpload$, us as NoSuchBucket, ND as NoSuchBucket$, ps as NoSuchKey, GD as NoSuchKey$, ss as NoSuchUpload, jD as NoSuchUpload$, $D as NoncurrentVersionExpiration$, UD as NoncurrentVersionTransition$, ls as NotFound, zD as NotFound$, $0 as NotificationConfiguration$, km as NotificationConfigurationFilter$, Cs as ObjectAlreadyInActiveTierError, HD as ObjectAlreadyInActiveTierError$, Vrt as ObjectAttributes, Yet as ObjectCannedACL, FD as ObjectIdentifier$, U0 as ObjectLockConfiguration$, Krt as ObjectLockEnabled, N0 as ObjectLockLegalHold$, rrt as ObjectLockLegalHoldStatus, ort as ObjectLockMode, G0 as ObjectLockRetention$, Wrt as ObjectLockRetentionMode, VD as ObjectLockRule$, is as ObjectNotInActiveTierError, KD as ObjectNotInActiveTierError$, prt as ObjectOwnership, WD as ObjectPart$, Jrt as ObjectStorageClass, ZD as ObjectVersion$, Yrt as ObjectVersionStorageClass, Qrt as OptionalObjectAttributes, XD as OutputLocation$, j0 as OutputSerialization$, Ye as Owner$, Xet as OwnerOverride, z0 as OwnershipControls$, JD as OwnershipControlsRule$, QD as ParquetInput$, YD as Part$, vrt as PartitionDateSource, t2 as PartitionedPrefix$, Grt as Payer, Zet as Permission, e2 as PolicyStatus$, r2 as Progress$, o2 as ProgressEvent$, qrt as Protocol, q0 as PublicAccessBlockConfiguration$, CC as PutBucketAbac$, _a as PutBucketAbacCommand, n2 as PutBucketAbacRequest$, yC as PutBucketAccelerateConfiguration$, Aa as PutBucketAccelerateConfigurationCommand, s2 as PutBucketAccelerateConfigurationRequest$, EC as PutBucketAcl$, Ra as PutBucketAclCommand, i2 as PutBucketAclRequest$, SC as PutBucketAnalyticsConfiguration$, va as PutBucketAnalyticsConfigurationCommand, a2 as PutBucketAnalyticsConfigurationRequest$, bC as PutBucketCors$, wa as PutBucketCorsCommand, c2 as PutBucketCorsRequest$, kC as PutBucketEncryption$, Oa as PutBucketEncryptionCommand, u2 as PutBucketEncryptionRequest$, BC as PutBucketIntelligentTieringConfiguration$, Ta as PutBucketIntelligentTieringConfigurationCommand, m2 as PutBucketIntelligentTieringConfigurationRequest$, PC as PutBucketInventoryConfiguration$, Da as PutBucketInventoryConfigurationCommand, p2 as PutBucketInventoryConfigurationRequest$, _C as PutBucketLifecycleConfiguration$, Ia as PutBucketLifecycleConfigurationCommand, l2 as PutBucketLifecycleConfigurationOutput$, d2 as PutBucketLifecycleConfigurationRequest$, AC as PutBucketLogging$, La as PutBucketLoggingCommand, f2 as PutBucketLoggingRequest$, RC as PutBucketMetricsConfiguration$, Ma as PutBucketMetricsConfigurationCommand, g2 as PutBucketMetricsConfigurationRequest$, vC as PutBucketNotificationConfiguration$, $a as PutBucketNotificationConfigurationCommand, x2 as PutBucketNotificationConfigurationRequest$, wC as PutBucketOwnershipControls$, Ua as PutBucketOwnershipControlsCommand, h2 as PutBucketOwnershipControlsRequest$, OC as PutBucketPolicy$, Na as PutBucketPolicyCommand, C2 as PutBucketPolicyRequest$, TC as PutBucketReplication$, Ga as PutBucketReplicationCommand, y2 as PutBucketReplicationRequest$, DC as PutBucketRequestPayment$, ja as PutBucketRequestPaymentCommand, E2 as PutBucketRequestPaymentRequest$, IC as PutBucketTagging$, za as PutBucketTaggingCommand, S2 as PutBucketTaggingRequest$, LC as PutBucketVersioning$, qa as PutBucketVersioningCommand, b2 as PutBucketVersioningRequest$, MC as PutBucketWebsite$, Ha as PutBucketWebsiteCommand, k2 as PutBucketWebsiteRequest$, $C as PutObject$, UC as PutObjectAcl$, Fa as PutObjectAclCommand, B2 as PutObjectAclOutput$, P2 as PutObjectAclRequest$, Va as PutObjectCommand, NC as PutObjectLegalHold$, Ka as PutObjectLegalHoldCommand, _2 as PutObjectLegalHoldOutput$, A2 as PutObjectLegalHoldRequest$, GC as PutObjectLockConfiguration$, Wa as PutObjectLockConfigurationCommand, R2 as PutObjectLockConfigurationOutput$, v2 as PutObjectLockConfigurationRequest$, w2 as PutObjectOutput$, O2 as PutObjectRequest$, jC as PutObjectRetention$, Za as PutObjectRetentionCommand, T2 as PutObjectRetentionOutput$, D2 as PutObjectRetentionRequest$, zC as PutObjectTagging$, Xa as PutObjectTaggingCommand, I2 as PutObjectTaggingOutput$, L2 as PutObjectTaggingRequest$, qC as PutPublicAccessBlock$, Ja as PutPublicAccessBlockCommand, M2 as PutPublicAccessBlockRequest$, $2 as QueueConfiguration$, iot as QuoteFields, Bm as RecordExpiration$, U2 as RecordsEvent$, N2 as Redirect$, H0 as RedirectAllRequestsTo$, HC as RenameObject$, Qa as RenameObjectCommand, G2 as RenameObjectOutput$, j2 as RenameObjectRequest$, z2 as ReplicaModifications$, $rt as ReplicaModificationsStatus, F0 as ReplicationConfiguration$, q2 as ReplicationRule$, H2 as ReplicationRuleAndOperator$, F2 as ReplicationRuleFilter$, Nrt as ReplicationRuleStatus, Hrt as ReplicationStatus, V2 as ReplicationTime$, Lrt as ReplicationTimeStatus, V0 as ReplicationTimeValue$, Fet as RequestCharged, Vet as RequestPayer, K2 as RequestPaymentConfiguration$, W2 as RequestProgress$, FC as RestoreObject$, Ya as RestoreObjectCommand, Z2 as RestoreObjectOutput$, X2 as RestoreObjectRequest$, J2 as RestoreRequest$, aot as RestoreRequestType, K0 as RestoreStatus$, Q2 as RoutingRule$, Lm as S3, we as S3Client, Y2 as S3KeyFilter$, tI as S3Location$, wt as S3ServiceException, II as S3ServiceException$, wrt as S3TablesBucketType, eI as S3TablesDestination$, rI as S3TablesDestinationResult$, lI as SSEKMS$, fI as SSES3$, oI as ScanRange$, VC as SelectObjectContent$, tc as SelectObjectContentCommand, mL as SelectObjectContentEventStream$, nI as SelectObjectContentOutput$, sI as SelectObjectContentRequest$, iI as SelectParameters$, Qet as ServerSideEncryption, aI as ServerSideEncryptionByDefault$, W0 as ServerSideEncryptionConfiguration$, cI as ServerSideEncryptionRule$, uI as SessionCredentials$, grt as SessionMode, mI as SimplePrefix$, pI as SourceSelectionCriteria$, dI as SseKmsEncryptedObjects$, Urt as SseKmsEncryptedObjectsStatus, gI as Stats$, xI as StatsEvent$, nrt as StorageClass, hI as StorageClassAnalysis$, CI as StorageClassAnalysisDataExport$, hrt as StorageClassAnalysisSchemaVersion, drt as TableSseAlgorithm, Co as Tag$, Pm as Tagging$, srt as TaggingDirective, yI as TargetGrant$, EI as TargetObjectKeyFormat$, eot as Tier, SI as Tiering$, xs as TooManyParts, bI as TooManyParts$, kI as TopicConfiguration$, BI as Transition$, Art as TransitionDefaultMinimumObjectSize, Prt as TransitionStorageClass, Wet as Type, KC as UpdateBucketMetadataInventoryTableConfiguration$, ec as UpdateBucketMetadataInventoryTableConfigurationCommand, PI as UpdateBucketMetadataInventoryTableConfigurationRequest$, WC as UpdateBucketMetadataJournalTableConfiguration$, rc as UpdateBucketMetadataJournalTableConfigurationCommand, _I as UpdateBucketMetadataJournalTableConfigurationRequest$, ZC as UploadPart$, oc as UploadPartCommand, XC as UploadPartCopy$, nc as UploadPartCopyCommand, AI as UploadPartCopyOutput$, RI as UploadPartCopyRequest$, vI as UploadPartOutput$, wI as UploadPartRequest$, OI as VersioningConfiguration$, TI as WebsiteConfiguration$, JC as WriteGetObjectResponse$, sc as WriteGetObjectResponseCommand, DI as WriteGetObjectResponseRequest$, fT as _Error$, qD as _Object$, dp as __Client, Ntt as paginateListBuckets, Htt as paginateListDirectoryBuckets, Ztt as paginateListObjectsV2, tet as paginateListParts, bet as waitForBucketExists, Ret as waitForBucketNotExists, Iet as waitForObjectExists, Get as waitForObjectNotExists, ket as waitUntilBucketExists, vet as waitUntilBucketNotExists, Let as waitUntilObjectExists, jet as waitUntilObjectNotExists };
