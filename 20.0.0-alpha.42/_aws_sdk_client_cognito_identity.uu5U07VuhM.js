import { $ as ze, A as be, Aa as lo, B as Re, Ba as ho, C as _e, D as Ae, E as we, F as tt, G as _, I as Te, J as et, K as De, L as $e, M as Le, N as Ue, O as Me, P as ke, Q as Oe, S as Ge, X as Fe, Y as He, Z as Be, _ as m, a as pe, aa as je, b as me, ba as We, c as de, ca as Ke, da as qe, e as ue, ea as Je, f as fe, fa as Ve, g as le, ga as N, h as he, ha as Qe, i as Jt, ia as Ye, j as ye, ja as Ze, ka as Xe, l as ge, la as to, m as Ie, ma as eo, n as X, na as oo, oa as ro, p as K, pa as no, q as Se, qa as d, r as ve, ra as io, sa as so, ta as ao, u as Vt, ua as co, v as Pe, va as po, w as Ee, wa as G, xa as mo, y as A, ya as uo, z as E, za as fo } from "@nf-internal/chunk-EPGOIPNE";
import { a as xe, b as Ce } from "@nf-internal/chunk-A2Y7EL3B";
import "@nf-internal/chunk-SC2LNWXG";
import { a as Ne } from "@nf-internal/chunk-K25EXYVF";
import { a as C, b as ae, h as ce, i as S } from "@nf-internal/chunk-2AVGQ2MQ";
var ot = class extends Te {
    serializeRequest(t, e, r) { return S(this, null, function* () { let n = this.serializer, a = {}, s = {}, p = yield r.endpoint(), c = A.of(t?.input), f = c.getSchema(), l, y = new de({ protocol: "", hostname: "", port: void 0, path: "/", fragment: void 0, query: a, headers: s, body: void 0 }); p && (this.updateServiceEndpoint(y, p), this.setHostPrefix(y, t, e)); let h = C({}, e); if (e) {
        let g = c.getEventStreamMember();
        if (g) {
            if (h[g]) {
                let k = {};
                for (let [O, Z] of c.structIterator())
                    O !== g && h[O] && (n.write(Z, h[O]), k[O] = n.flush());
                l = yield this.serializeEventStream({ eventStream: h[g], requestSchema: c, initialRequest: k });
            }
        }
        else
            n.write(f, h), l = n.flush();
    } return y.headers = s, y.query = a, y.body = l, y.method = "POST", y; }); }
    deserializeResponse(t, e, r) { return S(this, null, function* () { let n = this.deserializer, a = A.of(t.output), s = {}; if (r.statusCode >= 300) {
        let c = yield Vt(r.body, e);
        throw c.byteLength > 0 && Object.assign(s, yield n.read(15, c)), yield this.handleError(t, e, r, s, this.deserializeMetadata(r)), new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
    } for (let c in r.headers) {
        let f = r.headers[c];
        delete r.headers[c], r.headers[c.toLowerCase()] = f;
    } let p = a.getEventStreamMember(); if (p)
        s[p] = yield this.deserializeEventStream({ response: r, responseSchema: a, initialResponseContainer: s });
    else {
        let c = yield Vt(r.body, e);
        c.byteLength > 0 && Object.assign(s, yield n.read(a, c));
    } return s.$metadata = this.deserializeMetadata(r), s; }); }
};
function yo(o, t, e) { if (e?.source) {
    let r = e.source;
    if (typeof t == "number" && (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER || r !== String(t)))
        return r.includes(".") ? new _(r, "bigDecimal") : BigInt(r);
} return t; }
var go = (o, t) => Xe(o, t).then(e => { if (e.length)
    try {
        return JSON.parse(e);
    }
    catch (r) {
        throw r?.name === "SyntaxError" && Object.defineProperty(r, "$responseBodyText", { value: e }), r;
    } return {}; });
var Io = (o, t) => { let e = (a, s) => Object.keys(a).find(p => p.toLowerCase() === s.toLowerCase()), r = a => { let s = a; return typeof s == "number" && (s = s.toString()), s.indexOf(",") >= 0 && (s = s.split(",")[0]), s.indexOf(":") >= 0 && (s = s.split(":")[0]), s.indexOf("#") >= 0 && (s = s.split("#")[1]), s; }, n = e(o.headers, "x-amzn-errortype"); if (n !== void 0)
    return r(o.headers[n]); if (t && typeof t == "object") {
    let a = e(t, "code");
    if (a && t[a] !== void 0)
        return r(t[a]);
    if (t.__type !== void 0)
        return r(t.__type);
} };
var rt = class extends N {
    settings;
    constructor(t) { super(), this.settings = t; }
    read(t, e) { return S(this, null, function* () { return this._read(t, typeof e == "string" ? JSON.parse(e, yo) : yield go(e, this.serdeContext)); }); }
    readObject(t, e) { return this._read(t, e); }
    _read(t, e) { let r = e !== null && typeof e == "object", n = A.of(t); if (r) {
        if (n.isStructSchema()) {
            let s = n.isUnionSchema(), p = {}, c;
            s && (c = new Ze(e, p));
            for (let [f, l] of Ye(n, e, this.settings.jsonName ? "jsonName" : !1)) {
                let y = this.settings.jsonName ? l.getMergedTraits().jsonName ?? f : f;
                s && c.mark(y), e[y] != null && (p[f] = this._read(l, e[y]));
            }
            return s && c.writeUnknown(), p;
        }
        if (Array.isArray(e) && n.isListSchema()) {
            let s = n.getValueSchema(), p = [], c = !!n.getMergedTraits().sparse;
            for (let f of e)
                (c || f != null) && p.push(this._read(s, f));
            return p;
        }
        if (n.isMapSchema()) {
            let s = n.getValueSchema(), p = {}, c = !!n.getMergedTraits().sparse;
            for (let [f, l] of Object.entries(e))
                (c || l != null) && (p[f] = this._read(s, l));
            return p;
        }
    } if (n.isBlobSchema() && typeof e == "string")
        return X(e); let a = n.getMergedTraits().mediaType; if (n.isStringSchema() && typeof e == "string" && a)
        return a === "application/json" || a.endsWith("+json") ? tt.from(e) : e; if (n.isTimestampSchema() && e != null)
        switch (et(n, this.settings)) {
            case 5: return Re(e);
            case 6: return _e(e);
            case 7: return Ae(e);
            default: return console.warn("Missing timestamp format, parsing value with Date constructor:", e), new Date(e);
        } if (n.isBigIntegerSchema() && (typeof e == "number" || typeof e == "string"))
        return BigInt(e); if (n.isBigDecimalSchema() && e != null) {
        if (e instanceof _)
            return e;
        let s = e;
        return s.type === "bigDecimal" && "string" in s ? new _(s.string, s.type) : new _(String(e), "bigDecimal");
    } if (n.isNumericSchema() && typeof e == "string") {
        switch (e) {
            case "Infinity": return 1 / 0;
            case "-Infinity": return -1 / 0;
            case "NaN": return NaN;
        }
        return e;
    } if (n.isDocumentSchema())
        if (r) {
            let s = Array.isArray(e) ? [] : {};
            for (let [p, c] of Object.entries(e))
                c instanceof _ ? s[p] = c : s[p] = this._read(n, c);
            return s;
        }
        else
            return structuredClone(e); return e; }
};
var xo = "\u039D", nt = class {
    values = new Map;
    counter = 0;
    stage = 0;
    createReplacer() { if (this.stage === 1)
        throw new Error("@aws-sdk/core/protocols - JsonReplacer already created."); if (this.stage === 2)
        throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted."); return this.stage = 1, (t, e) => { if (e instanceof _) {
        let r = `${xo + "nv" + this.counter++}_` + e.string;
        return this.values.set(`"${r}"`, e.string), r;
    } if (typeof e == "bigint") {
        let r = e.toString(), n = `${xo + "b" + this.counter++}_` + r;
        return this.values.set(`"${n}"`, r), n;
    } return e; }; }
    replaceInJson(t) { if (this.stage === 0)
        throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet."); if (this.stage === 2)
        throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted."); if (this.stage = 2, this.counter === 0)
        return t; for (let [e, r] of this.values)
        t = t.replace(e, r); return t; }
};
var it = class extends N {
    settings;
    buffer;
    useReplacer = !1;
    rootSchema;
    constructor(t) { super(), this.settings = t; }
    write(t, e) { this.rootSchema = A.of(t), this.buffer = this._write(this.rootSchema, e); }
    writeDiscriminatedDocument(t, e) { this.write(t, e), typeof this.buffer == "object" && (this.buffer.__type = A.of(t).getName(!0)); }
    flush() { let { rootSchema: t, useReplacer: e } = this; if (this.rootSchema = void 0, this.useReplacer = !1, t?.isStructSchema() || t?.isDocumentSchema()) {
        if (!e)
            return JSON.stringify(this.buffer);
        let r = new nt;
        return r.replaceInJson(JSON.stringify(this.buffer, r.createReplacer(), 0));
    } return this.buffer; }
    _write(t, e, r) { let n = e !== null && typeof e == "object", a = A.of(t); if (n) {
        if (a.isStructSchema()) {
            let s = {};
            for (let [p, c] of Qe(a, e)) {
                let f = this._write(c, e[p], a);
                if (f !== void 0) {
                    let l = c.getMergedTraits().jsonName, y = this.settings.jsonName ? l ?? p : p;
                    s[y] = f;
                }
            }
            if (a.isUnionSchema() && Object.keys(s).length === 0) {
                let { $unknown: p } = e;
                if (Array.isArray(p)) {
                    let [c, f] = p;
                    s[c] = this._write(15, f);
                }
            }
            return s;
        }
        if (Array.isArray(e) && a.isListSchema()) {
            let s = a.getValueSchema(), p = [], c = !!a.getMergedTraits().sparse;
            for (let f of e)
                (c || f != null) && p.push(this._write(s, f));
            return p;
        }
        if (a.isMapSchema()) {
            let s = a.getValueSchema(), p = {}, c = !!a.getMergedTraits().sparse;
            for (let [f, l] of Object.entries(e))
                (c || l != null) && (p[f] = this._write(s, l));
            return p;
        }
        if (e instanceof Uint8Array && (a.isBlobSchema() || a.isDocumentSchema()))
            return a === this.rootSchema ? e : (this.serdeContext?.base64Encoder ?? K)(e);
        if (e instanceof Date && (a.isTimestampSchema() || a.isDocumentSchema()))
            switch (et(a, this.settings)) {
                case 5: return e.toISOString().replace(".000Z", "Z");
                case 6: return be(e);
                case 7: return e.getTime() / 1e3;
                default: return console.warn("Missing timestamp format, using epoch seconds", e), e.getTime() / 1e3;
            }
        e instanceof _ && (this.useReplacer = !0);
    } if (!(e === null && r?.isStructSchema())) {
        if (a.isStringSchema()) {
            if (typeof e > "u" && a.isIdempotencyToken())
                return we();
            let s = a.getMergedTraits().mediaType;
            return e != null && s && (s === "application/json" || s.endsWith("+json")) ? tt.from(e) : e;
        }
        if (typeof e == "number" && a.isNumericSchema())
            return Math.abs(e) === 1 / 0 || isNaN(e) ? String(e) : e;
        if (typeof e == "string" && a.isBlobSchema())
            return a === this.rootSchema ? e : (this.serdeContext?.base64Encoder ?? K)(e);
        if (typeof e == "bigint" && (this.useReplacer = !0), a.isDocumentSchema())
            if (n) {
                let s = Array.isArray(e) ? [] : {};
                for (let [p, c] of Object.entries(e))
                    c instanceof _ ? (this.useReplacer = !0, s[p] = c) : s[p] = this._write(a, c);
                return s;
            }
            else
                return structuredClone(e);
        return e;
    } }
};
var st = class extends N {
    settings;
    constructor(t) { super(), this.settings = t; }
    createSerializer() { let t = new it(this.settings); return t.setSerdeContext(this.serdeContext), t; }
    createDeserializer() { let t = new rt(this.settings); return t.setSerdeContext(this.serdeContext), t; }
};
var at = class o extends ot {
    serializer;
    deserializer;
    serviceTarget;
    codec;
    mixin;
    awsQueryCompatible;
    constructor({ defaultNamespace: t, serviceTarget: e, awsQueryCompatible: r, jsonCodec: n }) { super({ defaultNamespace: t }), this.serviceTarget = e, this.codec = n ?? new st({ timestampFormat: { useTrait: !0, default: 7 }, jsonName: !1 }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer(), this.awsQueryCompatible = !!r, this.mixin = new Ve(this.awsQueryCompatible); }
    serializeRequest(t, e, r) { return S(this, null, function* () { let n = yield ce(o.prototype, this, "serializeRequest").call(this, t, e, r); return n.path.endsWith("/") || (n.path += "/"), Object.assign(n.headers, { "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`, "x-amz-target": `${this.serviceTarget}.${t.name}` }), this.awsQueryCompatible && (n.headers["x-amzn-query-mode"] = "true"), (Pe(t.input) === "unit" || !n.body) && (n.body = "{}"), n; }); }
    getPayloadCodec() { return this.codec; }
    handleError(t, e, r, n, a) { return S(this, null, function* () { this.awsQueryCompatible && this.mixin.setQueryCompatError(n, r); let s = Io(r, n) ?? "Unknown", { errorSchema: p, errorMetadata: c } = yield this.mixin.getErrorSchemaOrThrowBaseException(s, this.options.defaultNamespace, r, n, a, this.awsQueryCompatible ? this.mixin.findQueryCompatibleError : void 0), f = A.of(p), l = n.message ?? n.Message ?? "Unknown", y = E.for(p[1]).getErrorCtor(p) ?? Error, h = new y(l), g = {}; for (let [k, O] of f.structIterator())
        n[k] != null && (g[k] = this.codec.createDeserializer().readObject(O, n[k])); throw this.awsQueryCompatible && this.mixin.queryCompatOutput(n, g), this.mixin.decorateServiceException(Object.assign(h, c, { $fault: f.getMergedTraits().error, message: l }, g), n); }); }
};
var ct = class extends at {
    constructor({ defaultNamespace: t, serviceTarget: e, awsQueryCompatible: r, jsonCodec: n }) { super({ defaultNamespace: t, serviceTarget: e, awsQueryCompatible: r, jsonCodec: n }); }
    getShapeId() { return "aws.protocols#awsJson1_1"; }
    getJsonRpcVersion() { return "1.1"; }
    getDefaultContentType() { return "application/x-amz-json-1.1"; }
};
var Co = (o, t, e) => S(null, null, function* () { return { operation: he(t).operation, region: (yield Jt(o.region)()) || (() => { throw new Error("expected `region` to be configured for `aws.auth#sigv4`"); })() }; });
function Hr(o) { return { schemeId: "aws.auth#sigv4", signingProperties: { name: "cognito-identity", region: o.region }, propertiesExtractor: (t, e) => ({ signingProperties: { config: t, context: e } }) }; }
function pt(o) { return { schemeId: "smithy.api#noAuth" }; }
var So = o => { let t = []; switch (o.operation) {
    case "GetCredentialsForIdentity": {
        t.push(pt(o));
        break;
    }
    case "GetId": {
        t.push(pt(o));
        break;
    }
    case "GetOpenIdToken": {
        t.push(pt(o));
        break;
    }
    case "UnlinkIdentity": {
        t.push(pt(o));
        break;
    }
    default: t.push(Hr(o));
} return t; }, vo = o => { let t = Fe(o); return Object.assign(t, { authSchemePreference: Jt(o.authSchemePreference ?? []) }); };
var Po = o => Object.assign(o, { useDualstackEndpoint: o.useDualstackEndpoint ?? !1, useFipsEndpoint: o.useFipsEndpoint ?? !1, defaultSigningName: "cognito-identity" }), u = { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
var Eo = { name: "@aws-sdk/client-cognito-identity", description: "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native", version: "3.957.0", scripts: { build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs", "build:cjs": "node ../../scripts/compilation/inline client-cognito-identity", "build:es": "tsc -p tsconfig.es.json", "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"', "build:types": "tsc -p tsconfig.types.json", "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4", clean: "rimraf ./dist-* && rimraf *.tsbuildinfo", "extract:docs": "api-extractor run --local", "generate:client": "node ../../scripts/generate-clients/single-service --solo cognito-identity", "test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts --mode development", "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts", "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs" }, main: "./dist-cjs/index.js", types: "./dist-types/index.d.ts", module: "./dist-es/index.js", sideEffects: !1, dependencies: { "@aws-crypto/sha256-browser": "5.2.0", "@aws-crypto/sha256-js": "5.2.0", "@aws-sdk/core": "3.957.0", "@aws-sdk/credential-provider-node": "3.957.0", "@aws-sdk/middleware-host-header": "3.957.0", "@aws-sdk/middleware-logger": "3.957.0", "@aws-sdk/middleware-recursion-detection": "3.957.0", "@aws-sdk/middleware-user-agent": "3.957.0", "@aws-sdk/region-config-resolver": "3.957.0", "@aws-sdk/types": "3.957.0", "@aws-sdk/util-endpoints": "3.957.0", "@aws-sdk/util-user-agent-browser": "3.957.0", "@aws-sdk/util-user-agent-node": "3.957.0", "@smithy/config-resolver": "^4.4.5", "@smithy/core": "^3.20.0", "@smithy/fetch-http-handler": "^5.3.8", "@smithy/hash-node": "^4.2.7", "@smithy/invalid-dependency": "^4.2.7", "@smithy/middleware-content-length": "^4.2.7", "@smithy/middleware-endpoint": "^4.4.1", "@smithy/middleware-retry": "^4.4.17", "@smithy/middleware-serde": "^4.2.8", "@smithy/middleware-stack": "^4.2.7", "@smithy/node-config-provider": "^4.3.7", "@smithy/node-http-handler": "^4.4.7", "@smithy/protocol-http": "^5.3.7", "@smithy/smithy-client": "^4.10.2", "@smithy/types": "^4.11.0", "@smithy/url-parser": "^4.2.7", "@smithy/util-base64": "^4.3.0", "@smithy/util-body-length-browser": "^4.2.0", "@smithy/util-body-length-node": "^4.2.1", "@smithy/util-defaults-mode-browser": "^4.3.16", "@smithy/util-defaults-mode-node": "^4.2.19", "@smithy/util-endpoints": "^3.2.7", "@smithy/util-middleware": "^4.2.7", "@smithy/util-retry": "^4.2.7", "@smithy/util-utf8": "^4.2.0", tslib: "^2.6.2" }, devDependencies: { "@aws-sdk/client-iam": "3.957.0", "@tsconfig/node18": "18.2.4", "@types/chai": "^4.2.11", "@types/node": "^18.19.69", concurrently: "7.0.0", "downlevel-dts": "0.10.1", rimraf: "3.0.2", typescript: "~5.8.3" }, engines: { node: ">=18.0.0" }, typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } }, files: ["dist-*/**"], author: { name: "AWS SDK for JavaScript Team", url: "https://aws.amazon.com/javascript/" }, license: "Apache-2.0", browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" }, "react-native": { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native" }, homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity", repository: { type: "git", url: "https://github.com/aws/aws-sdk-js-v3.git", directory: "clients/client-cognito-identity" } };
var Qt = o => new TextEncoder().encode(o);
var zr = typeof Buffer < "u" && Buffer.from ? function (o) { return Buffer.from(o, "utf8"); } : Qt;
function U(o) { return o instanceof Uint8Array ? o : typeof o == "string" ? zr(o) : ArrayBuffer.isView(o) ? new Uint8Array(o.buffer, o.byteOffset, o.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(o); }
function F(o) { return typeof o == "string" ? o.length === 0 : o.byteLength === 0; }
var Yt = { name: "SHA-256" }, Zt = { name: "HMAC", hash: Yt }, bo = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85]);
var Xt = (function () { function o(t) { this.toHash = new Uint8Array(0), this.secret = t, this.reset(); } return o.prototype.update = function (t) { if (!F(t)) {
    var e = U(t), r = new Uint8Array(this.toHash.byteLength + e.byteLength);
    r.set(this.toHash, 0), r.set(e, this.toHash.byteLength), this.toHash = r;
} }, o.prototype.digest = function () { var t = this; return this.key ? this.key.then(function (e) { return G().crypto.subtle.sign(Zt, e, t.toHash).then(function (r) { return new Uint8Array(r); }); }) : F(this.toHash) ? Promise.resolve(bo) : Promise.resolve().then(function () { return G().crypto.subtle.digest(Yt, t.toHash); }).then(function (e) { return Promise.resolve(new Uint8Array(e)); }); }, o.prototype.reset = function () { var t = this; this.toHash = new Uint8Array(0), this.secret && this.secret !== void 0 && (this.key = new Promise(function (e, r) { G().crypto.subtle.importKey("raw", U(t.secret), Zt, !1, ["sign"]).then(e, r); }), this.key.catch(function () { })); }, o; })();
import { __awaiter as jr, __generator as Wr } from "tslib";
var R = 64, Ro = 32, _o = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), Ao = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], wo = Math.pow(2, 53) - 1;
var q = (function () { function o() { this.state = Int32Array.from(Ao), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; } return o.prototype.update = function (t) { if (this.finished)
    throw new Error("Attempted to update an already finished hash."); var e = 0, r = t.byteLength; if (this.bytesHashed += r, this.bytesHashed * 8 > wo)
    throw new Error("Cannot hash more than 2^53 - 1 bits"); for (; r > 0;)
    this.buffer[this.bufferLength++] = t[e++], r--, this.bufferLength === R && (this.hashBuffer(), this.bufferLength = 0); }, o.prototype.digest = function () { if (!this.finished) {
    var t = this.bytesHashed * 8, e = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), r = this.bufferLength;
    if (e.setUint8(this.bufferLength++, 128), r % R >= R - 8) {
        for (var n = this.bufferLength; n < R; n++)
            e.setUint8(n, 0);
        this.hashBuffer(), this.bufferLength = 0;
    }
    for (var n = this.bufferLength; n < R - 8; n++)
        e.setUint8(n, 0);
    e.setUint32(R - 8, Math.floor(t / 4294967296), !0), e.setUint32(R - 4, t), this.hashBuffer(), this.finished = !0;
} for (var a = new Uint8Array(Ro), n = 0; n < 8; n++)
    a[n * 4] = this.state[n] >>> 24 & 255, a[n * 4 + 1] = this.state[n] >>> 16 & 255, a[n * 4 + 2] = this.state[n] >>> 8 & 255, a[n * 4 + 3] = this.state[n] >>> 0 & 255; return a; }, o.prototype.hashBuffer = function () { for (var t = this, e = t.buffer, r = t.state, n = r[0], a = r[1], s = r[2], p = r[3], c = r[4], f = r[5], l = r[6], y = r[7], h = 0; h < R; h++) {
    if (h < 16)
        this.temp[h] = (e[h * 4] & 255) << 24 | (e[h * 4 + 1] & 255) << 16 | (e[h * 4 + 2] & 255) << 8 | e[h * 4 + 3] & 255;
    else {
        var g = this.temp[h - 2], k = (g >>> 17 | g << 15) ^ (g >>> 19 | g << 13) ^ g >>> 10;
        g = this.temp[h - 15];
        var O = (g >>> 7 | g << 25) ^ (g >>> 18 | g << 14) ^ g >>> 3;
        this.temp[h] = (k + this.temp[h - 7] | 0) + (O + this.temp[h - 16] | 0);
    }
    var Z = (((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) + (c & f ^ ~c & l) | 0) + (y + (_o[h] + this.temp[h] | 0) | 0) | 0, Fr = ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + (n & a ^ n & s ^ a & s) | 0;
    y = l, l = f, f = c, c = p + Z | 0, p = s, s = a, a = n, n = Z + Fr | 0;
} r[0] += n, r[1] += a, r[2] += s, r[3] += p, r[4] += c, r[5] += f, r[6] += l, r[7] += y; }, o; })();
var To = (function () { function o(t) { this.secret = t, this.hash = new q, this.reset(); } return o.prototype.update = function (t) { if (!(F(t) || this.error))
    try {
        this.hash.update(U(t));
    }
    catch (e) {
        this.error = e;
    } }, o.prototype.digestSync = function () { if (this.error)
    throw this.error; return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest(); }, o.prototype.digest = function () { return jr(this, void 0, void 0, function () { return Wr(this, function (t) { return [2, this.digestSync()]; }); }); }, o.prototype.reset = function () { if (this.hash = new q, this.secret) {
    this.outer = new q;
    var t = Kr(this.secret), e = new Uint8Array(R);
    e.set(t);
    for (var r = 0; r < R; r++)
        t[r] ^= 54, e[r] ^= 92;
    this.hash.update(t), this.outer.update(e);
    for (var r = 0; r < t.byteLength; r++)
        t[r] = 0;
} }, o; })();
function Kr(o) { var t = U(o); if (t.byteLength > R) {
    var e = new q;
    e.update(t), t = e.digest();
} var r = new Uint8Array(R); return r.set(t), r; }
import { __awaiter as tp, __generator as ep } from "tslib";
var qr = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
function Do(o) { if (Jr(o) && typeof o.crypto.subtle == "object") {
    var t = o.crypto.subtle;
    return Vr(t);
} return !1; }
function Jr(o) { if (typeof o == "object" && typeof o.crypto == "object") {
    var t = o.crypto.getRandomValues;
    return typeof t == "function";
} return !1; }
function Vr(o) { return o && qr.every(function (t) { return typeof o[t] == "function"; }); }
var $o = (function () { function o(t) { Do(G()) ? this.hash = new Xt(t) : this.hash = new To(t); } return o.prototype.update = function (t, e) { this.hash.update(U(t)); }, o.prototype.digest = function () { return this.hash.digest(); }, o.prototype.reset = function () { this.hash.reset(); }, o; })();
var Bo = "required";
var P = "argv";
var Lo = "isSet", Q = "booleanEquals", H = "error", D = "endpoint", M = "tree", te = "PartitionResult", ee = "getAttr", J = "stringEquals", Uo = { [Bo]: !1, type: "string" }, Mo = { [Bo]: !0, default: !1, type: "boolean" }, ko = { ref: "Endpoint" }, zo = { fn: Q, [P]: [{ ref: "UseFIPS" }, !0] }, jo = { fn: Q, [P]: [{ ref: "UseDualStack" }, !0] }, I = {}, V = { ref: "Region" }, Oo = { fn: ee, [P]: [{ ref: te }, "supportsFIPS"] }, Wo = { ref: te }, No = { fn: Q, [P]: [!0, { fn: ee, [P]: [Wo, "supportsDualStack"] }] }, Go = [zo], Fo = [jo], Ho = [V], Qr = { version: "1.0", parameters: { Region: Uo, UseDualStack: Mo, UseFIPS: Mo, Endpoint: Uo }, rules: [{ conditions: [{ fn: Lo, [P]: [ko] }], rules: [{ conditions: Go, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: H }, { conditions: Fo, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: H }, { endpoint: { url: ko, properties: I, headers: I }, type: D }], type: M }, { conditions: [{ fn: Lo, [P]: Ho }], rules: [{ conditions: [{ fn: "aws.partition", [P]: Ho, assign: te }], rules: [{ conditions: [zo, jo], rules: [{ conditions: [{ fn: Q, [P]: [!0, Oo] }, No], rules: [{ conditions: [{ fn: J, [P]: [V, "us-east-1"] }], endpoint: { url: "https://cognito-identity-fips.us-east-1.amazonaws.com", properties: I, headers: I }, type: D }, { conditions: [{ fn: J, [P]: [V, "us-east-2"] }], endpoint: { url: "https://cognito-identity-fips.us-east-2.amazonaws.com", properties: I, headers: I }, type: D }, { conditions: [{ fn: J, [P]: [V, "us-west-1"] }], endpoint: { url: "https://cognito-identity-fips.us-west-1.amazonaws.com", properties: I, headers: I }, type: D }, { conditions: [{ fn: J, [P]: [V, "us-west-2"] }], endpoint: { url: "https://cognito-identity-fips.us-west-2.amazonaws.com", properties: I, headers: I }, type: D }, { endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: I, headers: I }, type: D }], type: M }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: H }], type: M }, { conditions: Go, rules: [{ conditions: [{ fn: Q, [P]: [Oo, !0] }], rules: [{ endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}", properties: I, headers: I }, type: D }], type: M }, { error: "FIPS is enabled but this partition does not support FIPS", type: H }], type: M }, { conditions: Fo, rules: [{ conditions: [No], rules: [{ conditions: [{ fn: J, [P]: ["aws", { fn: ee, [P]: [Wo, "name"] }] }], endpoint: { url: "https://cognito-identity.{Region}.amazonaws.com", properties: I, headers: I }, type: D }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: I, headers: I }, type: D }], type: M }, { error: "DualStack is enabled but this partition does not support DualStack", type: H }], type: M }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}", properties: I, headers: I }, type: D }], type: M }], type: M }, { error: "Invalid Configuration: Missing Region", type: H }] }, Ko = Qr;
var Yr = new Ue({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] }), qo = (o, t = {}) => Yr.get(o, () => ke(Ko, { endpointParams: o, logger: t.logger }));
Me.aws = Oe;
var Jo = o => ({ apiVersion: "2014-06-30", base64Decoder: o?.base64Decoder ?? X, base64Encoder: o?.base64Encoder ?? K, disableHostPrefix: o?.disableHostPrefix ?? !1, endpointProvider: o?.endpointProvider ?? qo, extensions: o?.extensions ?? [], httpAuthSchemeProvider: o?.httpAuthSchemeProvider ?? So, httpAuthSchemes: o?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"), signer: new Ge }, { schemeId: "smithy.api#noAuth", identityProvider: t => t.getIdentityProvider("smithy.api#noAuth") || (() => S(null, null, function* () { return {}; })), signer: new $e }], logger: o?.logger ?? new Je, protocol: o?.protocol ?? ct, protocolSettings: o?.protocolSettings ?? { defaultNamespace: "com.amazonaws.cognitoidentity", xmlNamespace: "http://cognito-identity.amazonaws.com/doc/2014-06-30/", version: "2014-06-30", serviceTarget: "AWSCognitoIdentityService" }, serviceId: o?.serviceId ?? "Cognito Identity", urlParser: o?.urlParser ?? Ne, utf8Decoder: o?.utf8Decoder ?? xe, utf8Encoder: o?.utf8Encoder ?? Ce });
var Vo = o => { let t = fo(o), e = () => t().then(We), r = Jo(o); return ae(C(C({}, r), o), { runtime: "browser", defaultsMode: t, bodyLengthChecker: o?.bodyLengthChecker ?? He, credentialDefaultProvider: o?.credentialDefaultProvider ?? (n => () => Promise.reject(new Error("Credential is missing"))), defaultUserAgentProvider: o?.defaultUserAgentProvider ?? mo({ serviceId: r.serviceId, clientVersion: Eo.version }), maxAttempts: o?.maxAttempts ?? so, region: o?.region ?? uo("Region is missing"), requestHandler: Se.create(o?.requestHandler ?? e), retryMode: o?.retryMode ?? (() => S(null, null, function* () { return (yield e()).retryMode || ao; })), sha256: o?.sha256 ?? $o, streamCollector: o?.streamCollector ?? ve, useDualstackEndpoint: o?.useDualstackEndpoint ?? (() => Promise.resolve(eo)), useFipsEndpoint: o?.useFipsEndpoint ?? (() => Promise.resolve(oo)) }); };
var Qo = o => { let t = o.httpAuthSchemes, e = o.httpAuthSchemeProvider, r = o.credentials; return { setHttpAuthScheme(n) { let a = t.findIndex(s => s.schemeId === n.schemeId); a === -1 ? t.push(n) : t.splice(a, 1, n); }, httpAuthSchemes() { return t; }, setHttpAuthSchemeProvider(n) { e = n; }, httpAuthSchemeProvider() { return e; }, setCredentials(n) { r = n; }, credentials() { return r; } }; }, Yo = o => ({ httpAuthSchemes: o.httpAuthSchemes(), httpAuthSchemeProvider: o.httpAuthSchemeProvider(), credentials: o.credentials() });
var Zo = (o, t) => { let e = Object.assign(lo(o), Ke(o), pe(o), Qo(o)); return t.forEach(r => r.configure(e)), Object.assign(o, ho(e), qe(e), me(e), Yo(e)); };
var B = class extends Be {
    config;
    constructor(...[t]) { let e = Vo(t || {}); super(e), this.initConfig = e; let r = Po(e), n = Le(r), a = co(n), s = ro(a), p = s, c = io(p), f = vo(c), l = Zo(f, t?.extensions || []); this.config = l, this.middlewareStack.use(Ee(this.config)), this.middlewareStack.use(to(this.config)), this.middlewareStack.use(po(this.config)), this.middlewareStack.use(no(this.config)), this.middlewareStack.use(ue(this.config)), this.middlewareStack.use(fe(this.config)), this.middlewareStack.use(le(this.config)), this.middlewareStack.use(ye(this.config, { httpAuthSchemeParametersProvider: Co, identityProviderConfigProvider: y => S(this, null, function* () { return new De({ "aws.auth#sigv4": y.credentials }); }) })), this.middlewareStack.use(ge(this.config)); }
    destroy() { super.destroy(); }
};
var v = class o extends je {
    constructor(t) { super(t), Object.setPrototypeOf(this, o.prototype); }
};
var mt = class o extends v {
    name = "InternalErrorException";
    $fault = "server";
    constructor(t) { super(C({ name: "InternalErrorException", $fault: "server" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, dt = class o extends v {
    name = "InvalidParameterException";
    $fault = "client";
    constructor(t) { super(C({ name: "InvalidParameterException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, ut = class o extends v {
    name = "LimitExceededException";
    $fault = "client";
    constructor(t) { super(C({ name: "LimitExceededException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, ft = class o extends v {
    name = "NotAuthorizedException";
    $fault = "client";
    constructor(t) { super(C({ name: "NotAuthorizedException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, lt = class o extends v {
    name = "ResourceConflictException";
    $fault = "client";
    constructor(t) { super(C({ name: "ResourceConflictException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, ht = class o extends v {
    name = "TooManyRequestsException";
    $fault = "client";
    constructor(t) { super(C({ name: "TooManyRequestsException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, yt = class o extends v {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(t) { super(C({ name: "ResourceNotFoundException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, gt = class o extends v {
    name = "ExternalServiceException";
    $fault = "client";
    constructor(t) { super(C({ name: "ExternalServiceException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, It = class o extends v {
    name = "InvalidIdentityPoolConfigurationException";
    $fault = "client";
    constructor(t) { super(C({ name: "InvalidIdentityPoolConfigurationException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, xt = class o extends v {
    name = "DeveloperUserAlreadyRegisteredException";
    $fault = "client";
    constructor(t) { super(C({ name: "DeveloperUserAlreadyRegisteredException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, Ct = class o extends v {
    name = "ConcurrentModificationException";
    $fault = "client";
    constructor(t) { super(C({ name: "ConcurrentModificationException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
};
var Xo = "AllowClassicFlow", Zr = "AccountId", Xr = "AccessKeyId", tn = "AmbiguousRoleResolution", tr = "AllowUnauthenticatedIdentities", er = "Credentials", en = "CreationDate", on = "ClientId", rn = "CognitoIdentityProvider", nn = "CreateIdentityPoolInput", sn = "CognitoIdentityProviderList", or = "CognitoIdentityProviders", an = "CreateIdentityPool", cn = "ConcurrentModificationException", pn = "CustomRoleArn", mn = "Claim", dn = "DeleteIdentities", un = "DeleteIdentitiesInput", fn = "DescribeIdentityInput", ln = "DeleteIdentityPool", hn = "DeleteIdentityPoolInput", yn = "DescribeIdentityPoolInput", gn = "DescribeIdentityPool", In = "DeleteIdentitiesResponse", xn = "DescribeIdentity", vt = "DeveloperProviderName", Cn = "DeveloperUserAlreadyRegisteredException", rr = "DeveloperUserIdentifier", Sn = "DeveloperUserIdentifierList", vn = "DestinationUserIdentifier", Pn = "Expiration", En = "ErrorCode", bn = "ExternalServiceException", Rn = "GetCredentialsForIdentity", _n = "GetCredentialsForIdentityInput", An = "GetCredentialsForIdentityResponse", wn = "GetId", Tn = "GetIdInput", Dn = "GetIdentityPoolRoles", $n = "GetIdentityPoolRolesInput", Ln = "GetIdentityPoolRolesResponse", Un = "GetIdResponse", Mn = "GetOpenIdToken", kn = "GetOpenIdTokenForDeveloperIdentity", On = "GetOpenIdTokenForDeveloperIdentityInput", Nn = "GetOpenIdTokenForDeveloperIdentityResponse", Gn = "GetOpenIdTokenInput", Fn = "GetOpenIdTokenResponse", Hn = "GetPrincipalTagAttributeMap", Bn = "GetPrincipalTagAttributeMapInput", zn = "GetPrincipalTagAttributeMapResponse", jn = "HideDisabled", Wn = "Identities", Kn = "IdentityDescription", qn = "InternalErrorException", b = "IdentityId", Jn = "InvalidIdentityPoolConfigurationException", Vn = "IdentityIdsToDelete", Qn = "IdentitiesList", Yn = "IdentityPool", Zn = "InvalidParameterException", x = "IdentityPoolId", Xn = "IdentityPoolsList", oe = "IdentityPoolName", Pt = "IdentityProviderName", ti = "IdentityPoolShortDescription", ei = "IdentityProviderToken", nr = "IdentityPoolTags", oi = "IdentityPools", z = "Logins", ri = "LookupDeveloperIdentity", ni = "LookupDeveloperIdentityInput", ii = "LookupDeveloperIdentityResponse", si = "LimitExceededException", ai = "ListIdentities", ci = "ListIdentitiesInput", pi = "ListIdentityPools", mi = "ListIdentityPoolsInput", di = "ListIdentityPoolsResponse", ui = "ListIdentitiesResponse", fi = "LoginsMap", li = "LastModifiedDate", hi = "ListTagsForResource", yi = "ListTagsForResourceInput", gi = "ListTagsForResourceResponse", Ii = "LoginsToRemove", xi = "MergeDeveloperIdentities", Ci = "MergeDeveloperIdentitiesInput", Si = "MergeDeveloperIdentitiesResponse", re = "MaxResults", vi = "MappingRulesList", Pi = "MappingRule", Ei = "MatchType", bi = "NotAuthorizedException", j = "NextToken", ir = "OpenIdConnectProviderARNs", Ri = "OIDCToken", _i = "ProviderName", Et = "PrincipalTags", sr = "Roles", ne = "ResourceArn", Ai = "RoleARN", wi = "RulesConfiguration", Ti = "ResourceConflictException", Di = "RulesConfigurationType", ar = "RoleMappings", $i = "RoleMappingMap", Li = "RoleMapping", Ui = "ResourceNotFoundException", Mi = "Rules", ki = "SetIdentityPoolRoles", Oi = "SetIdentityPoolRolesInput", Ni = "SecretKey", Gi = "SecretKeyString", cr = "SupportedLoginProviders", pr = "SamlProviderARNs", Fi = "SetPrincipalTagAttributeMap", Hi = "SetPrincipalTagAttributeMapInput", Bi = "SetPrincipalTagAttributeMapResponse", zi = "ServerSideTokenCheck", ji = "SessionToken", Wi = "SourceUserIdentifier", mr = "Token", Ki = "TokenDuration", qi = "TagKeys", Ji = "TooManyRequestsException", Vi = "TagResource", Qi = "TagResourceInput", Yi = "TagResourceResponse", dr = "Tags", Zi = "Type", ie = "UseDefaults", Xi = "UnlinkDeveloperIdentity", ts = "UnlinkDeveloperIdentityInput", es = "UnlinkIdentity", os = "UnprocessedIdentityIds", rs = "UnprocessedIdentityIdList", ns = "UnlinkIdentityInput", is = "UnprocessedIdentityId", ss = "UpdateIdentityPool", as = "UntagResource", cs = "UntagResourceInput", ps = "UntagResourceResponse", ms = "Value", $ = "client", w = "error", L = "httpError", T = "message", ds = "server", ur = "smithy.ts.sdk.synthetic.com.amazonaws.cognitoidentity", i = "com.amazonaws.cognitoidentity", us = [0, i, ei, 8, 0], fr = [0, i, Ri, 8, 0], fs = [0, i, Gi, 8, 0], ls = [3, i, rn, 0, [_i, on, zi], [0, 0, 2]], hs = [-3, i, cn, { [w]: $, [L]: 400 }, [T], [0]];
E.for(i).registerError(hs, Ct);
var ys = [3, i, nn, 0, [oe, tr, Xo, cr, vt, ir, or, pr, nr], [0, 2, 2, 128, 0, 64, () => hr, 64, 128]], gs = [3, i, er, 0, [Xr, Ni, ji, Pn], [0, [() => fs, 0], 0, 4]], Is = [3, i, un, 0, [Vn], [64]], xs = [3, i, In, 0, [os], [() => xa]], Cs = [3, i, hn, 0, [x], [0]], Ss = [3, i, fn, 0, [b], [0]], vs = [3, i, yn, 0, [x], [0]], Ps = [-3, i, Cn, { [w]: $, [L]: 400 }, [T], [0]];
E.for(i).registerError(Ps, xt);
var Es = [-3, i, bn, { [w]: $, [L]: 400 }, [T], [0]];
E.for(i).registerError(Es, gt);
var bs = [3, i, _n, 0, [b, z, pn], [0, [() => Y, 0], 0]], Rs = [3, i, An, 0, [b, er], [0, [() => gs, 0]]], _s = [3, i, $n, 0, [x], [0]], As = [3, i, Ln, 0, [x, sr, ar], [0, 128, () => yr]], ws = [3, i, Tn, 0, [Zr, x, z], [0, 0, [() => Y, 0]]], Ts = [3, i, Un, 0, [b], [0]], Ds = [3, i, On, 0, [x, b, z, Et, Ki], [0, 0, [() => Y, 0], 128, 1]], $s = [3, i, Nn, 0, [b, mr], [0, [() => fr, 0]]], Ls = [3, i, Gn, 0, [b, z], [0, [() => Y, 0]]], Us = [3, i, Fn, 0, [b, mr], [0, [() => fr, 0]]], Ms = [3, i, Bn, 0, [x, Pt], [0, 0]], ks = [3, i, zn, 0, [x, Pt, ie, Et], [0, 0, 2, 128]], lr = [3, i, Kn, 0, [b, z, en, li], [0, 64, 4, 4]], St = [3, i, Yn, 0, [x, oe, tr, Xo, cr, vt, ir, or, pr, nr], [0, 0, 2, 2, 128, 0, 64, () => hr, 64, 128]], Os = [3, i, ti, 0, [x, oe], [0, 0]], Ns = [-3, i, qn, { [w]: ds }, [T], [0]];
E.for(i).registerError(Ns, mt);
var Gs = [-3, i, Jn, { [w]: $, [L]: 400 }, [T], [0]];
E.for(i).registerError(Gs, It);
var Fs = [-3, i, Zn, { [w]: $, [L]: 400 }, [T], [0]];
E.for(i).registerError(Fs, dt);
var Hs = [-3, i, si, { [w]: $, [L]: 400 }, [T], [0]];
E.for(i).registerError(Hs, ut);
var Bs = [3, i, ci, 0, [x, re, j, jn], [0, 1, 0, 2]], zs = [3, i, ui, 0, [x, Wn, j], [0, () => ya, 0]], js = [3, i, mi, 0, [re, j], [1, 0]], Ws = [3, i, di, 0, [oi, j], [() => ga, 0]], Ks = [3, i, yi, 0, [ne], [0]], qs = [3, i, gi, 0, [dr], [128]], Js = [3, i, ni, 0, [x, b, rr, re, j], [0, 0, 0, 1, 0]], Vs = [3, i, ii, 0, [b, Sn, j], [0, 64, 0]], Qs = [3, i, Pi, 0, [mn, Ei, ms, Ai], [0, 0, 0, 0]], Ys = [3, i, Ci, 0, [Wi, vn, vt, x], [0, 0, 0, 0]], Zs = [3, i, Si, 0, [b], [0]], Xs = [-3, i, bi, { [w]: $, [L]: 403 }, [T], [0]];
E.for(i).registerError(Xs, ft);
var ta = [-3, i, Ti, { [w]: $, [L]: 409 }, [T], [0]];
E.for(i).registerError(ta, lt);
var ea = [-3, i, Ui, { [w]: $, [L]: 404 }, [T], [0]];
E.for(i).registerError(ea, yt);
var oa = [3, i, Li, 0, [Zi, tn, wi], [0, 0, () => ra]], ra = [3, i, Di, 0, [Mi], [() => Ia]], na = [3, i, Oi, 0, [x, sr, ar], [0, 128, () => yr]], ia = [3, i, Hi, 0, [x, Pt, ie, Et], [0, 0, 2, 128]], sa = [3, i, Bi, 0, [x, Pt, ie, Et], [0, 0, 2, 128]], aa = [3, i, Qi, 0, [ne, dr], [0, 128]], ca = [3, i, Yi, 0, [], []], pa = [-3, i, Ji, { [w]: $, [L]: 429 }, [T], [0]];
E.for(i).registerError(pa, ht);
var ma = [3, i, ts, 0, [b, x, vt, rr], [0, 0, 0, 0]], da = [3, i, ns, 0, [b, z, Ii], [0, [() => Y, 0], 64]], ua = [3, i, is, 0, [b, En], [0, 0]], fa = [3, i, cs, 0, [ne, qi], [0, 64]], la = [3, i, ps, 0, [], []], bt = "unit", ha = [-3, ur, "CognitoIdentityServiceException", 0, [], []];
E.for(ur).registerError(ha, v);
var hr = [1, i, sn, 0, () => ls];
var ya = [1, i, Qn, 0, () => lr];
var ga = [1, i, Xn, 0, () => Os];
var Ia = [1, i, vi, 0, () => Qs];
var xa = [1, i, rs, 0, () => ua];
var Y = [2, i, fi, 0, [0, 0], [() => us, 0]];
var yr = [2, i, $i, 0, 0, () => oa];
var gr = [9, i, an, 0, () => ys, () => St], Ir = [9, i, dn, 0, () => Is, () => xs], xr = [9, i, ln, 0, () => Cs, () => bt], Cr = [9, i, xn, 0, () => Ss, () => lr], Sr = [9, i, gn, 0, () => vs, () => St], vr = [9, i, Rn, 0, () => bs, () => Rs], Pr = [9, i, wn, 0, () => ws, () => Ts], Er = [9, i, Dn, 0, () => _s, () => As], br = [9, i, Mn, 0, () => Ls, () => Us], Rr = [9, i, kn, 0, () => Ds, () => $s], _r = [9, i, Hn, 0, () => Ms, () => ks], Ar = [9, i, ai, 0, () => Bs, () => zs], wr = [9, i, pi, 0, () => js, () => Ws], Tr = [9, i, hi, 0, () => Ks, () => qs], Dr = [9, i, ri, 0, () => Js, () => Vs], $r = [9, i, xi, 0, () => Ys, () => Zs], Lr = [9, i, ki, 0, () => na, () => bt], Ur = [9, i, Fi, 0, () => ia, () => sa], Mr = [9, i, Vi, 0, () => aa, () => ca], kr = [9, i, Xi, 0, () => ma, () => bt], Or = [9, i, es, 0, () => da, () => bt], Nr = [9, i, as, 0, () => fa, () => la], Gr = [9, i, ss, 0, () => St, () => St];
var Rt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "CreateIdentityPool", {}).n("CognitoIdentityClient", "CreateIdentityPoolCommand").sc(gr).build() {
};
var _t = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DeleteIdentities", {}).n("CognitoIdentityClient", "DeleteIdentitiesCommand").sc(Ir).build() {
};
var At = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DeleteIdentityPool", {}).n("CognitoIdentityClient", "DeleteIdentityPoolCommand").sc(xr).build() {
};
var wt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DescribeIdentity", {}).n("CognitoIdentityClient", "DescribeIdentityCommand").sc(Cr).build() {
};
var Tt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DescribeIdentityPool", {}).n("CognitoIdentityClient", "DescribeIdentityPoolCommand").sc(Sr).build() {
};
var Dt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").sc(vr).build() {
};
var $t = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").sc(Pr).build() {
};
var Lt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetIdentityPoolRoles", {}).n("CognitoIdentityClient", "GetIdentityPoolRolesCommand").sc(Er).build() {
};
var Ut = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetOpenIdToken", {}).n("CognitoIdentityClient", "GetOpenIdTokenCommand").sc(br).build() {
};
var Mt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetOpenIdTokenForDeveloperIdentity", {}).n("CognitoIdentityClient", "GetOpenIdTokenForDeveloperIdentityCommand").sc(Rr).build() {
};
var kt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "GetPrincipalTagAttributeMapCommand").sc(_r).build() {
};
var Ot = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "ListIdentities", {}).n("CognitoIdentityClient", "ListIdentitiesCommand").sc(Ar).build() {
};
var W = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "ListIdentityPools", {}).n("CognitoIdentityClient", "ListIdentityPoolsCommand").sc(wr).build() {
};
var Nt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "ListTagsForResource", {}).n("CognitoIdentityClient", "ListTagsForResourceCommand").sc(Tr).build() {
};
var Gt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "LookupDeveloperIdentity", {}).n("CognitoIdentityClient", "LookupDeveloperIdentityCommand").sc(Dr).build() {
};
var Ft = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "MergeDeveloperIdentities", {}).n("CognitoIdentityClient", "MergeDeveloperIdentitiesCommand").sc($r).build() {
};
var Ht = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "SetIdentityPoolRoles", {}).n("CognitoIdentityClient", "SetIdentityPoolRolesCommand").sc(Lr).build() {
};
var Bt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "SetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "SetPrincipalTagAttributeMapCommand").sc(Ur).build() {
};
var zt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "TagResource", {}).n("CognitoIdentityClient", "TagResourceCommand").sc(Mr).build() {
};
var jt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UnlinkDeveloperIdentity", {}).n("CognitoIdentityClient", "UnlinkDeveloperIdentityCommand").sc(kr).build() {
};
var Wt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UnlinkIdentity", {}).n("CognitoIdentityClient", "UnlinkIdentityCommand").sc(Or).build() {
};
var Kt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UntagResource", {}).n("CognitoIdentityClient", "UntagResourceCommand").sc(Nr).build() {
};
var qt = class extends m.classBuilder().ep(u).m(function (t, e, r, n) { return [d(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UpdateIdentityPool", {}).n("CognitoIdentityClient", "UpdateIdentityPoolCommand").sc(Gr).build() {
};
var Ca = { CreateIdentityPoolCommand: Rt, DeleteIdentitiesCommand: _t, DeleteIdentityPoolCommand: At, DescribeIdentityCommand: wt, DescribeIdentityPoolCommand: Tt, GetCredentialsForIdentityCommand: Dt, GetIdCommand: $t, GetIdentityPoolRolesCommand: Lt, GetOpenIdTokenCommand: Ut, GetOpenIdTokenForDeveloperIdentityCommand: Mt, GetPrincipalTagAttributeMapCommand: kt, ListIdentitiesCommand: Ot, ListIdentityPoolsCommand: W, ListTagsForResourceCommand: Nt, LookupDeveloperIdentityCommand: Gt, MergeDeveloperIdentitiesCommand: Ft, SetIdentityPoolRolesCommand: Ht, SetPrincipalTagAttributeMapCommand: Bt, TagResourceCommand: zt, UnlinkDeveloperIdentityCommand: jt, UnlinkIdentityCommand: Wt, UntagResourceCommand: Kt, UpdateIdentityPoolCommand: qt }, se = class extends B {
};
ze(Ca, se);
var nf = Ie(B, W, "NextToken", "NextToken", "MaxResults");
var af = { AUTHENTICATED_ROLE: "AuthenticatedRole", DENY: "Deny" }, cf = { ACCESS_DENIED: "AccessDenied", INTERNAL_SERVER_ERROR: "InternalServerError" }, pf = { CONTAINS: "Contains", EQUALS: "Equals", NOT_EQUAL: "NotEqual", STARTS_WITH: "StartsWith" }, mf = { RULES: "Rules", TOKEN: "Token" };
export { m as $Command, af as AmbiguousRoleResolutionType, se as CognitoIdentity, B as CognitoIdentityClient, ls as CognitoIdentityProvider$, v as CognitoIdentityServiceException, ha as CognitoIdentityServiceException$, Ct as ConcurrentModificationException, hs as ConcurrentModificationException$, gr as CreateIdentityPool$, Rt as CreateIdentityPoolCommand, ys as CreateIdentityPoolInput$, gs as Credentials$, Ir as DeleteIdentities$, _t as DeleteIdentitiesCommand, Is as DeleteIdentitiesInput$, xs as DeleteIdentitiesResponse$, xr as DeleteIdentityPool$, At as DeleteIdentityPoolCommand, Cs as DeleteIdentityPoolInput$, Cr as DescribeIdentity$, wt as DescribeIdentityCommand, Ss as DescribeIdentityInput$, Sr as DescribeIdentityPool$, Tt as DescribeIdentityPoolCommand, vs as DescribeIdentityPoolInput$, xt as DeveloperUserAlreadyRegisteredException, Ps as DeveloperUserAlreadyRegisteredException$, cf as ErrorCode, gt as ExternalServiceException, Es as ExternalServiceException$, vr as GetCredentialsForIdentity$, Dt as GetCredentialsForIdentityCommand, bs as GetCredentialsForIdentityInput$, Rs as GetCredentialsForIdentityResponse$, Pr as GetId$, $t as GetIdCommand, ws as GetIdInput$, Ts as GetIdResponse$, Er as GetIdentityPoolRoles$, Lt as GetIdentityPoolRolesCommand, _s as GetIdentityPoolRolesInput$, As as GetIdentityPoolRolesResponse$, br as GetOpenIdToken$, Ut as GetOpenIdTokenCommand, Rr as GetOpenIdTokenForDeveloperIdentity$, Mt as GetOpenIdTokenForDeveloperIdentityCommand, Ds as GetOpenIdTokenForDeveloperIdentityInput$, $s as GetOpenIdTokenForDeveloperIdentityResponse$, Ls as GetOpenIdTokenInput$, Us as GetOpenIdTokenResponse$, _r as GetPrincipalTagAttributeMap$, kt as GetPrincipalTagAttributeMapCommand, Ms as GetPrincipalTagAttributeMapInput$, ks as GetPrincipalTagAttributeMapResponse$, lr as IdentityDescription$, St as IdentityPool$, Os as IdentityPoolShortDescription$, mt as InternalErrorException, Ns as InternalErrorException$, It as InvalidIdentityPoolConfigurationException, Gs as InvalidIdentityPoolConfigurationException$, dt as InvalidParameterException, Fs as InvalidParameterException$, ut as LimitExceededException, Hs as LimitExceededException$, Ar as ListIdentities$, Ot as ListIdentitiesCommand, Bs as ListIdentitiesInput$, zs as ListIdentitiesResponse$, wr as ListIdentityPools$, W as ListIdentityPoolsCommand, js as ListIdentityPoolsInput$, Ws as ListIdentityPoolsResponse$, Tr as ListTagsForResource$, Nt as ListTagsForResourceCommand, Ks as ListTagsForResourceInput$, qs as ListTagsForResourceResponse$, Dr as LookupDeveloperIdentity$, Gt as LookupDeveloperIdentityCommand, Js as LookupDeveloperIdentityInput$, Vs as LookupDeveloperIdentityResponse$, Qs as MappingRule$, pf as MappingRuleMatchType, $r as MergeDeveloperIdentities$, Ft as MergeDeveloperIdentitiesCommand, Ys as MergeDeveloperIdentitiesInput$, Zs as MergeDeveloperIdentitiesResponse$, ft as NotAuthorizedException, Xs as NotAuthorizedException$, lt as ResourceConflictException, ta as ResourceConflictException$, yt as ResourceNotFoundException, ea as ResourceNotFoundException$, oa as RoleMapping$, mf as RoleMappingType, ra as RulesConfigurationType$, Lr as SetIdentityPoolRoles$, Ht as SetIdentityPoolRolesCommand, na as SetIdentityPoolRolesInput$, Ur as SetPrincipalTagAttributeMap$, Bt as SetPrincipalTagAttributeMapCommand, ia as SetPrincipalTagAttributeMapInput$, sa as SetPrincipalTagAttributeMapResponse$, Mr as TagResource$, zt as TagResourceCommand, aa as TagResourceInput$, ca as TagResourceResponse$, ht as TooManyRequestsException, pa as TooManyRequestsException$, kr as UnlinkDeveloperIdentity$, jt as UnlinkDeveloperIdentityCommand, ma as UnlinkDeveloperIdentityInput$, Or as UnlinkIdentity$, Wt as UnlinkIdentityCommand, da as UnlinkIdentityInput$, ua as UnprocessedIdentityId$, Nr as UntagResource$, Kt as UntagResourceCommand, fa as UntagResourceInput$, la as UntagResourceResponse$, Gr as UpdateIdentityPool$, qt as UpdateIdentityPoolCommand, Be as __Client, nf as paginateListIdentityPools };
