import { e as c } from "@nf-internal/chunk-2AVGQ2MQ";
var h = c(r => { Object.defineProperty(r, "__esModule", { value: !0 }); r.default = r.nthElement = r.parentElements = void 0; var l = function (e) { for (var n = []; e;) {
    var t = e.nodeName.toLowerCase(), o = e.id ? "#".concat(e.id) : "", i = "";
    e.className && typeof e.className == "string" && (i = ".".concat(e.className.replace(/\s+/g, ".").replace(/[:*+?^${}()|[\]\\]/gi, "\\$&"))), n.unshift({ element: e, selector: t + o + i }), e = e.parentNode !== document ? e.parentNode : !1;
} return n; }; r.parentElements = l; var u = function (e) { for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t = e, o = 1; t.previousElementSibling !== null;)
    (!n || t.previousElementSibling.nodeName === e.nodeName) && o++, t = t.previousElementSibling; return o; }; r.nthElement = u; var s = function (e, n) { var t = n === "" ? e : "".concat(n, " > ").concat(e); return document.querySelectorAll(t).length > 1; }, d = function (e) { var n = []; return e.forEach(function (t) { s(t.selector, n.join(" > ")) && (t.selector += ":nth-of-type(".concat(u(t.element), ")")), n.push(t.selector); }), n.join(" > "); }, f = function (e) { if (!(e instanceof HTMLElement))
    throw new Error("element must be of type `HTMLElement`."); return d(l(e)); }, m = f; r.default = m; });
export default h();
