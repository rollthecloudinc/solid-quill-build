import { i as a } from "@nf-internal/chunk-2AVGQ2MQ";
function l(t) { let n = {}; if (t = t.replace(/^\?/, ""), t)
    for (let e of t.split("&")) {
        let [o, i = null] = e.split("=");
        o = decodeURIComponent(o), i && (i = decodeURIComponent(i)), o in n ? Array.isArray(n[o]) ? n[o].push(i) : n[o] = [n[o], i] : n[o] = i;
    } return n; }
var c = t => { if (typeof t == "string")
    return c(new URL(t)); let { hostname: n, pathname: e, port: o, protocol: i, search: r } = t, s; return r && (s = l(r)), { hostname: n, port: o ? parseInt(o) : void 0, protocol: i, path: e, query: s }; };
var d = t => typeof t == "object" ? "url" in t ? c(t.url) : t : c(t);
var f = t => a(null, null, function* () { let n = t?.Bucket || ""; if (typeof t.Bucket == "string" && (t.Bucket = n.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), E(n)) {
    if (t.ForcePathStyle === !0)
        throw new Error("Path-style addressing cannot be used with ARN buckets");
}
else
    (!x(n) || n.indexOf(".") !== -1 && !String(t.Endpoint).startsWith("http:") || n.toLowerCase() !== n || n.length < 3) && (t.ForcePathStyle = !0); return t.DisableMultiRegionAccessPoints && (t.disableMultiRegionAccessPoints = !0, t.DisableMRAP = !0), t; }), A = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/, P = /(\d+\.){3}\d+/, v = /\.\./;
var x = t => A.test(t) && !P.test(t) && !v.test(t), E = t => { let [n, e, o, , , i] = t.split(":"), r = n === "arn" && t.split(":").length >= 6, s = !!(r && e && o && i); if (r && !s)
    throw new Error(`Invalid ARN: ${t} was an invalid ARN.`); return s; };
var m = (t, n, e, o = !1) => { let i = () => a(null, null, function* () { let r; return o ? r = e.clientContextParams?.[t] ?? e[t] ?? e[n] : r = e[t] ?? e[n], typeof r == "function" ? r() : r; }); return t === "credentialScope" || n === "CredentialScope" ? () => a(null, null, function* () { let r = typeof e.credentials == "function" ? yield e.credentials() : e.credentials; return r?.credentialScope ?? r?.CredentialScope; }) : t === "accountId" || n === "AccountId" ? () => a(null, null, function* () { let r = typeof e.credentials == "function" ? yield e.credentials() : e.credentials; return r?.accountId ?? r?.AccountId; }) : t === "endpoint" || n === "endpoint" ? () => a(null, null, function* () { if (e.isCustomEndpoint === !1)
    return; let r = yield i(); if (r && typeof r == "object") {
    if ("url" in r)
        return r.url.href;
    if ("hostname" in r) {
        let { protocol: s, hostname: u, port: p, path: w } = r;
        return `${s}//${u}${p ? ":" + p : ""}${w}`;
    }
} return r; }) : i; };
var h = t => a(null, null, function* () { });
var B = (t, n, e, o) => a(null, null, function* () { if (!e.isCustomEndpoint) {
    let s;
    e.serviceConfiguredEndpoint ? s = yield e.serviceConfiguredEndpoint() : s = yield h(e.serviceId), s && (e.endpoint = () => Promise.resolve(d(s)), e.isCustomEndpoint = !0);
} let i = yield y(t, n, e); if (typeof e.endpointProvider != "function")
    throw new Error("config.endpointProvider is not set."); return e.endpointProvider(i, o); }), y = (t, n, e) => a(null, null, function* () { let o = {}, i = n?.getEndpointParameterInstructions?.() || {}; for (let [r, s] of Object.entries(i))
    switch (s.type) {
        case "staticContextParams":
            o[r] = s.value;
            break;
        case "contextParams":
            o[r] = t[s.name];
            break;
        case "clientContextParams":
        case "builtInParams":
            o[r] = yield m(s.name, r, e, s.type !== "builtInParams")();
            break;
        case "operationContextParams":
            o[r] = s.get(t);
            break;
        default: throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(s));
    } return Object.keys(i).length === 0 && Object.assign(o, e), String(e.serviceId).toLowerCase() === "s3" && (yield f(o)), o; });
export { c as a, h as b, d as c, B as d, y as e };
