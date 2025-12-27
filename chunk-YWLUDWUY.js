import { j as V } from "@nf-internal/chunk-M4JCPEPJ";
import { f as ie, k as T, l as se } from "@nf-internal/chunk-STIBVO4O";
import { a as f, b as te } from "@nf-internal/chunk-2AVGQ2MQ";
import * as g from "@angular/core";
import { PLATFORM_ID as nt, SecurityContext as rt } from "@angular/core";
import * as d from "@angular/core";
import { APP_BOOTSTRAP_LISTENER as Oe, PLATFORM_ID as W, InjectionToken as B, inject as ne } from "@angular/core";
import { isPlatformBrowser as R, DOCUMENT as K, isPlatformServer as Be } from "@angular/common";
function H(t) { for (let l in t) {
    let e = t[l] ?? "";
    switch (l) {
        case "display":
            e === "flex" ? t.display = ["-webkit-flex", "flex"] : e === "inline-flex" ? t.display = ["-webkit-inline-flex", "inline-flex"] : t.display = e;
            break;
        case "align-items":
        case "align-self":
        case "align-content":
        case "flex":
        case "flex-basis":
        case "flex-flow":
        case "flex-grow":
        case "flex-shrink":
        case "flex-wrap":
        case "justify-content":
            t["-webkit-" + l] = e;
            break;
        case "flex-direction":
            t["-webkit-flex-direction"] = e, t["flex-direction"] = e;
            break;
        case "order":
            t.order = t["-webkit-" + l] = isNaN(+e) ? "0" : e;
            break;
    }
} return t; }
var P = "inline", $ = ["row", "column", "row-reverse", "column-reverse"];
function O(t) { let [l, e, i] = le(t); return _e(l, e, i); }
function le(t) { t = t?.toLowerCase() ?? ""; let [l, e, i] = t.split(" "); return $.find(s => s === l) || (l = $[0]), e === P && (e = i !== P ? i : "", i = P), [l, Ge(e), !!i]; }
function U(t) { let [l] = le(t); return l.indexOf("row") > -1; }
function Ge(t) { if (t)
    switch (t.toLowerCase()) {
        case "reverse":
        case "wrap-reverse":
        case "reverse-wrap":
            t = "wrap-reverse";
            break;
        case "no":
        case "none":
        case "nowrap":
            t = "nowrap";
            break;
        default:
            t = "wrap";
            break;
    } return t; }
function _e(t, l = null, e = !1) { return { display: e ? "inline-flex" : "flex", "box-sizing": "border-box", "flex-direction": t, "flex-wrap": l || null }; }
function h(t, ...l) { if (t == null)
    throw TypeError("Cannot convert undefined or null to object"); for (let e of l)
    if (e != null)
        for (let i in e)
            e.hasOwnProperty(i) && (t[i] = e[i]); return t; }
import { filter as N, tap as je, debounceTime as Ut, switchMap as Nt, map as Qt, distinctUntilChanged as Wt, takeUntil as Kt, take as Yt } from "rxjs/operators";
function ke(t, l) { return () => { if (R(l)) {
    let e = Array.from(t.querySelectorAll(`[class*=${re}]`)), i = /\bflex-layout-.+?\b/g;
    e.forEach(s => { s.classList.contains(`${re}ssr`) && s.parentNode ? s.parentNode.removeChild(s) : s.className.replace(i, ""); });
} }; }
var Te = { provide: Oe, useFactory: ke, deps: [K, W], multi: !0 }, re = "flex-layout-";
var b = (() => { class t {
} return t.\u0275fac = function (e) { return new (e || t); }, t.\u0275mod = d.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = d.\u0275\u0275defineInjector({ providers: [Te] }), t; })(), w = class t {
    constructor(l = !1, e = "all", i = "", s = "", n = 0) { this.matches = l, this.mediaQuery = e, this.mqAlias = i, this.suffix = s, this.priority = n, this.property = ""; }
    clone() { return new t(this.matches, this.mediaQuery, this.mqAlias, this.suffix); }
};
var Ve = (() => { class t {
    constructor() { this.stylesheet = new Map; }
    addStyleToElement(e, i, s) { let n = this.stylesheet.get(e); n ? n.set(i, s) : this.stylesheet.set(e, new Map([[i, s]])); }
    clearStyles() { this.stylesheet.clear(); }
    getStyleForElement(e, i) { let s = this.stylesheet.get(e), n = ""; if (s) {
        let a = s.get(i);
        (typeof a == "number" || typeof a == "string") && (n = a + "");
    } return n; }
} return t.\u0275fac = function (e) { return new (e || t); }, t.\u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }), t; })();
var j = { addFlexToParent: !0, addOrientationBps: !1, disableDefaultBps: !1, disableVendorPrefixes: !1, serverLoaded: !1, useColumnBasisZero: !0, printWithBreakpoints: [], mediaTriggerAutoRestore: !0, ssrObserveBreakpoints: [], multiplier: void 0, defaultUnit: "px", detectLayoutDisplay: !1 }, m = new B("Flex Layout token, config options for the library", { providedIn: "root", factory: () => j });
var E = new B("FlexLayoutServerLoaded", { providedIn: "root", factory: () => !1 });
var k = new B("Flex Layout token, collect all breakpoints into one provider", { providedIn: "root", factory: () => null });
function he(t, l) { return t = t?.clone() ?? new w, l && (t.mqAlias = l.alias, t.mediaQuery = l.mediaQuery, t.suffix = l.suffix, t.priority = l.priority), t; }
var A = class {
    constructor() { this.shouldCache = !0; }
    sideEffect(l, e, i) { }
};
var F = (() => { class t {
    constructor(e, i, s, n) { this._serverStylesheet = e, this._serverModuleLoaded = i, this._platformId = s, this.layoutConfig = n; }
    applyStyleToElement(e, i, s = null) { let n = {}; typeof i == "string" && (n[i] = s, i = n), n = this.layoutConfig.disableVendorPrefixes ? i : H(i), this._applyMultiValueStyleToElement(n, e); }
    applyStyleToElements(e, i = []) { let s = this.layoutConfig.disableVendorPrefixes ? e : H(e); i.forEach(n => { this._applyMultiValueStyleToElement(s, n); }); }
    getFlowDirection(e) { let i = "flex-direction", s = this.lookupStyle(e, i), n = this.lookupInlineStyle(e, i) || Be(this._platformId) && this._serverModuleLoaded ? s : ""; return [s || "row", n]; }
    hasWrap(e) { return this.lookupStyle(e, "flex-wrap") === "wrap"; }
    lookupAttributeValue(e, i) { return e.getAttribute(i) ?? ""; }
    lookupInlineStyle(e, i) { return R(this._platformId) ? e.style.getPropertyValue(i) : Pe(e, i); }
    lookupStyle(e, i, s = !1) { let n = ""; return e && ((n = this.lookupInlineStyle(e, i)) || (R(this._platformId) ? s || (n = getComputedStyle(e).getPropertyValue(i)) : this._serverModuleLoaded && (n = this._serverStylesheet.getStyleForElement(e, i)))), n ? n.trim() : ""; }
    _applyMultiValueStyleToElement(e, i) { Object.keys(e).sort().forEach(s => { let n = e[s], a = Array.isArray(n) ? n : [n]; a.sort(); for (let r of a)
        r = r ? r + "" : "", R(this._platformId) || !this._serverModuleLoaded ? R(this._platformId) ? i.style.setProperty(s, r) : $e(i, s, r) : this._serverStylesheet.addStyleToElement(i, s, r); }); }
} return t.\u0275fac = function (e) { return new (e || t)(d.\u0275\u0275inject(Ve), d.\u0275\u0275inject(E), d.\u0275\u0275inject(W), d.\u0275\u0275inject(m)); }, t.\u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }), t; })();
function Pe(t, l) { return ye(t)[l] ?? ""; }
function $e(t, l, e) { l = l.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(); let i = ye(t); i[l] = e ?? "", He(t, i); }
function He(t, l) { let e = ""; for (let i in l)
    l[i] && (e += `${i}:${l[i]};`); t.setAttribute("style", e); }
function ye(t) { let l = {}, e = t.getAttribute("style"); if (e) {
    let i = e.split(/;+/g);
    for (let s = 0; s < i.length; s++) {
        let n = i[s].trim();
        if (n.length > 0) {
            let a = n.indexOf(":");
            if (a === -1)
                throw new Error(`Invalid CSS style: ${n}`);
            let r = n.substr(0, a).trim();
            l[r] = n.substr(a + 1).trim();
        }
    }
} return l; }
function _(t, l) { let e = t && t.priority || 0; return (l && l.priority || 0) - e; }
function Ue(t, l) { let e = t.priority || 0, i = l.priority || 0; return e - i; }
var Ne = (() => { class t {
    constructor(e, i, s) { this._zone = e, this._platformId = i, this._document = s, this.source = new se(new w(!0)), this.registry = new Map, this.pendingRemoveListenerFns = [], this._observable$ = this.source.asObservable(); }
    get activations() { let e = []; return this.registry.forEach((i, s) => { i.matches && e.push(s); }), e; }
    isActive(e) { return this.registry.get(e)?.matches ?? this.registerQuery(e).some(s => s.matches); }
    observe(e, i = !1) { if (e && e.length) {
        let s = this._observable$.pipe(N(a => i ? e.indexOf(a.mediaQuery) > -1 : !0)), n = new ie(a => { let r = this.registerQuery(e); if (r.length) {
            let u = r.pop();
            r.forEach(p => { a.next(p); }), this.source.next(u);
        } a.complete(); });
        return V(n, s);
    } return this._observable$; }
    registerQuery(e) { let i = Array.isArray(e) ? e : [e], s = []; return Qe(i, this._document), i.forEach(n => { let a = u => { this._zone.run(() => this.source.next(new w(u.matches, n))); }, r = this.registry.get(n); r || (r = this.buildMQL(n), r.addListener(a), this.pendingRemoveListenerFns.push(() => r.removeListener(a)), this.registry.set(n, r)), r.matches && s.push(new w(!0, n)); }), s; }
    ngOnDestroy() { let e; for (; e = this.pendingRemoveListenerFns.pop();)
        e(); }
    buildMQL(e) { return Ke(e, R(this._platformId)); }
} return t.\u0275fac = function (e) { return new (e || t)(d.\u0275\u0275inject(d.NgZone), d.\u0275\u0275inject(W), d.\u0275\u0275inject(K)); }, t.\u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }), t; })(), ae = {};
function Qe(t, l) {
    let e = t.filter(i => !ae[i]);
    if (e.length > 0) {
        let i = e.join(", ");
        try {
            let s = l.createElement("style");
            if (s.setAttribute("type", "text/css"), !s.styleSheet) {
                let n = `
/*
  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners
  see http://bit.ly/2sd4HMP
*/
@media ${i} {.fx-query-test{ }}
`;
                s.appendChild(l.createTextNode(n));
            }
            l.head.appendChild(s), e.forEach(n => ae[n] = s);
        }
        catch (s) {
            console.error(s);
        }
    }
}
function We(t) { let l = new EventTarget; return l.matches = t === "all" || t === "", l.media = t, l.addListener = () => { }, l.removeListener = () => { }, l.addEventListener = () => { }, l.dispatchEvent = () => !1, l.onchange = null, l; }
function Ke(t, l) { return l && !!window.matchMedia("all").addListener ? window.matchMedia(t) : We(t); }
var Ye = [{ alias: "xs", mediaQuery: "screen and (min-width: 0px) and (max-width: 599.98px)", priority: 1e3 }, { alias: "sm", mediaQuery: "screen and (min-width: 600px) and (max-width: 959.98px)", priority: 900 }, { alias: "md", mediaQuery: "screen and (min-width: 960px) and (max-width: 1279.98px)", priority: 800 }, { alias: "lg", mediaQuery: "screen and (min-width: 1280px) and (max-width: 1919.98px)", priority: 700 }, { alias: "xl", mediaQuery: "screen and (min-width: 1920px) and (max-width: 4999.98px)", priority: 600 }, { alias: "lt-sm", overlapping: !0, mediaQuery: "screen and (max-width: 599.98px)", priority: 950 }, { alias: "lt-md", overlapping: !0, mediaQuery: "screen and (max-width: 959.98px)", priority: 850 }, { alias: "lt-lg", overlapping: !0, mediaQuery: "screen and (max-width: 1279.98px)", priority: 750 }, { alias: "lt-xl", overlapping: !0, priority: 650, mediaQuery: "screen and (max-width: 1919.98px)" }, { alias: "gt-xs", overlapping: !0, mediaQuery: "screen and (min-width: 600px)", priority: -950 }, { alias: "gt-sm", overlapping: !0, mediaQuery: "screen and (min-width: 960px)", priority: -850 }, { alias: "gt-md", overlapping: !0, mediaQuery: "screen and (min-width: 1280px)", priority: -750 }, { alias: "gt-lg", overlapping: !0, mediaQuery: "screen and (min-width: 1920px)", priority: -650 }];
var oe = "(orientation: portrait) and (max-width: 599.98px)", de = "(orientation: landscape) and (max-width: 959.98px)", ge = "(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)", ce = "(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)", ue = "(orientation: portrait) and (min-width: 840px)", fe = "(orientation: landscape) and (min-width: 1280px)", v = { HANDSET: `${oe}, ${de}`, TABLET: `${ge} , ${ce}`, WEB: `${ue}, ${fe} `, HANDSET_PORTRAIT: `${oe}`, TABLET_PORTRAIT: `${ge} `, WEB_PORTRAIT: `${ue}`, HANDSET_LANDSCAPE: `${de}`, TABLET_LANDSCAPE: `${ce}`, WEB_LANDSCAPE: `${fe}` }, ze = [{ alias: "handset", priority: 2e3, mediaQuery: v.HANDSET }, { alias: "handset.landscape", priority: 2e3, mediaQuery: v.HANDSET_LANDSCAPE }, { alias: "handset.portrait", priority: 2e3, mediaQuery: v.HANDSET_PORTRAIT }, { alias: "tablet", priority: 2100, mediaQuery: v.TABLET }, { alias: "tablet.landscape", priority: 2100, mediaQuery: v.TABLET_LANDSCAPE }, { alias: "tablet.portrait", priority: 2100, mediaQuery: v.TABLET_PORTRAIT }, { alias: "web", priority: 2200, mediaQuery: v.WEB, overlapping: !0 }, { alias: "web.landscape", priority: 2200, mediaQuery: v.WEB_LANDSCAPE, overlapping: !0 }, { alias: "web.portrait", priority: 2200, mediaQuery: v.WEB_PORTRAIT, overlapping: !0 }], qe = /(\.|-|_)/g;
function Ze(t) { let l = t.length > 0 ? t.charAt(0) : "", e = t.length > 1 ? t.slice(1) : ""; return l.toUpperCase() + e; }
function Xe(t) { return t.replace(qe, "|").split("|").map(Ze).join(""); }
function Je(t) { return t.forEach(l => { l.suffix || (l.suffix = Xe(l.alias), l.overlapping = !!l.overlapping); }), t; }
function et(t, l = []) { let e = {}; return t.forEach(i => { e[i.alias] = i; }), l.forEach(i => { e[i.alias] ? h(e[i.alias], i) : e[i.alias] = i; }), Je(Object.keys(e).map(i => e[i])); }
var tt = new B("Token (@angular/flex-layout) Breakpoints", { providedIn: "root", factory: () => { let t = ne(k), l = ne(m), e = [].concat.apply([], (t || []).map(s => Array.isArray(s) ? s : [s])), i = (l.disableDefaultBps ? [] : Ye).concat(l.addOrientationBps ? ze : []); return et(i, e); } });
var pe = (() => { class t {
    constructor(e) { this.findByMap = new Map, this.items = [...e].sort(Ue); }
    findByAlias(e) { return e ? this.findWithPredicate(e, i => i.alias === e) : null; }
    findByQuery(e) { return this.findWithPredicate(e, i => i.mediaQuery === e); }
    get overlappings() { return this.items.filter(e => e.overlapping); }
    get aliases() { return this.items.map(e => e.alias); }
    get suffixes() { return this.items.map(e => e?.suffix ?? ""); }
    findWithPredicate(e, i) { let s = this.findByMap.get(e); return s || (s = this.items.find(i) ?? null, this.findByMap.set(e, s)), s ?? null; }
} return t.\u0275fac = function (e) { return new (e || t)(d.\u0275\u0275inject(tt)); }, t.\u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }), t; })();
var L = "print", it = { alias: L, mediaQuery: L, priority: 1e3 }, st = (() => { class t {
    constructor(e, i, s) { this.breakpoints = e, this.layoutConfig = i, this._document = s, this.registeredBeforeAfterPrintHooks = !1, this.isPrintingBeforeAfterEvent = !1, this.beforePrintEventListeners = [], this.afterPrintEventListeners = [], this.formerActivations = null, this.isPrinting = !1, this.queue = new Q, this.deactivations = []; }
    withPrintQuery(e) { return [...e, L]; }
    isPrintEvent(e) { return e.mediaQuery.startsWith(L); }
    get printAlias() { return [...this.layoutConfig.printWithBreakpoints ?? []]; }
    get printBreakPoints() { return this.printAlias.map(e => this.breakpoints.findByAlias(e)).filter(e => e !== null); }
    getEventBreakpoints({ mediaQuery: e }) { let i = this.breakpoints.findByQuery(e); return (i ? [...this.printBreakPoints, i] : this.printBreakPoints).sort(_); }
    updateEvent(e) { let i = this.breakpoints.findByQuery(e.mediaQuery); return this.isPrintEvent(e) && (i = this.getEventBreakpoints(e)[0], e.mediaQuery = i?.mediaQuery ?? ""), he(e, i); }
    registerBeforeAfterPrintHooks(e) { if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks)
        return; this.registeredBeforeAfterPrintHooks = !0; let i = () => { this.isPrinting || (this.isPrintingBeforeAfterEvent = !0, this.startPrinting(e, this.getEventBreakpoints(new w(!0, L))), e.updateStyles()); }, s = () => { this.isPrintingBeforeAfterEvent = !1, this.isPrinting && (this.stopPrinting(e), e.updateStyles()); }; this._document.defaultView.addEventListener("beforeprint", i), this._document.defaultView.addEventListener("afterprint", s), this.beforePrintEventListeners.push(i), this.afterPrintEventListeners.push(s); }
    interceptEvents(e) { return i => { if (this.isPrintEvent(i)) {
        i.matches && !this.isPrinting ? (this.startPrinting(e, this.getEventBreakpoints(i)), e.updateStyles()) : !i.matches && this.isPrinting && !this.isPrintingBeforeAfterEvent && (this.stopPrinting(e), e.updateStyles());
        return;
    } this.collectActivations(e, i); }; }
    blockPropagation() { return e => !(this.isPrinting || this.isPrintEvent(e)); }
    startPrinting(e, i) { this.isPrinting = !0, this.formerActivations = e.activatedBreakpoints, e.activatedBreakpoints = this.queue.addPrintBreakpoints(i); }
    stopPrinting(e) { e.activatedBreakpoints = this.deactivations, this.deactivations = [], this.formerActivations = null, this.queue.clear(), this.isPrinting = !1; }
    collectActivations(e, i) { if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
        if (!this.isPrintingBeforeAfterEvent) {
            this.deactivations = [];
            return;
        }
        if (!i.matches) {
            let s = this.breakpoints.findByQuery(i.mediaQuery);
            if (s) {
                let n = this.formerActivations && this.formerActivations.includes(s), a = !this.formerActivations && e.activatedBreakpoints.includes(s);
                (n || a) && (this.deactivations.push(s), this.deactivations.sort(_));
            }
        }
    } }
    ngOnDestroy() { this._document.defaultView && (this.beforePrintEventListeners.forEach(e => this._document.defaultView.removeEventListener("beforeprint", e)), this.afterPrintEventListeners.forEach(e => this._document.defaultView.removeEventListener("afterprint", e))); }
} return t.\u0275fac = function (e) { return new (e || t)(d.\u0275\u0275inject(pe), d.\u0275\u0275inject(m), d.\u0275\u0275inject(K)); }, t.\u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }), t; })(), Q = class {
    constructor() { this.printBreakpoints = []; }
    addPrintBreakpoints(l) { return l.push(it), l.sort(_), l.forEach(e => this.addBreakpoint(e)), this.printBreakpoints; }
    addBreakpoint(l) { l && this.printBreakpoints.find(i => i.mediaQuery === l.mediaQuery) === void 0 && (this.printBreakpoints = lt(l) ? [l, ...this.printBreakpoints] : [...this.printBreakpoints, l]); }
    clear() { this.printBreakpoints = []; }
};
function lt(t) { return t?.mediaQuery.startsWith(L) ?? !1; }
var D = (() => { class t {
    constructor(e, i, s) { this.matchMedia = e, this.breakpoints = i, this.hook = s, this._useFallbacks = !0, this._activatedBreakpoints = [], this.elementMap = new Map, this.elementKeyMap = new WeakMap, this.watcherMap = new WeakMap, this.updateMap = new WeakMap, this.clearMap = new WeakMap, this.subject = new T, this.observeActivations(); }
    get activatedAlias() { return this.activatedBreakpoints[0]?.alias ?? ""; }
    set activatedBreakpoints(e) { this._activatedBreakpoints = [...e]; }
    get activatedBreakpoints() { return [...this._activatedBreakpoints]; }
    set useFallbacks(e) { this._useFallbacks = e; }
    onMediaChange(e) { let i = this.findByQuery(e.mediaQuery); if (i) {
        e = he(e, i);
        let s = this.activatedBreakpoints.indexOf(i);
        e.matches && s === -1 ? (this._activatedBreakpoints.push(i), this._activatedBreakpoints.sort(_), this.updateStyles()) : !e.matches && s !== -1 && (this._activatedBreakpoints.splice(s, 1), this._activatedBreakpoints.sort(_), this.updateStyles());
    } }
    init(e, i, s, n, a = []) { xe(this.updateMap, e, i, s), xe(this.clearMap, e, i, n), this.buildElementKeyMap(e, i), this.watchExtraTriggers(e, i, a); }
    getValue(e, i, s) { let n = this.elementMap.get(e); if (n) {
        let a = s !== void 0 ? n.get(s) : this.getActivatedValues(n, i);
        if (a)
            return a.get(i);
    } }
    hasValue(e, i) { let s = this.elementMap.get(e); if (s) {
        let n = this.getActivatedValues(s, i);
        if (n)
            return n.get(i) !== void 0 || !1;
    } return !1; }
    setValue(e, i, s, n) { let a = this.elementMap.get(e); if (!a)
        a = new Map().set(n, new Map().set(i, s)), this.elementMap.set(e, a);
    else {
        let u = (a.get(n) ?? new Map).set(i, s);
        a.set(n, u), this.elementMap.set(e, a);
    } let r = this.getValue(e, i); r !== void 0 && this.updateElement(e, i, r); }
    trackValue(e, i) { return this.subject.asObservable().pipe(N(s => s.element === e && s.key === i)); }
    updateStyles() { this.elementMap.forEach((e, i) => { let s = new Set(this.elementKeyMap.get(i)), n = this.getActivatedValues(e); n && n.forEach((a, r) => { this.updateElement(i, r, a), s.delete(r); }), s.forEach(a => { if (n = this.getActivatedValues(e, a), n) {
        let r = n.get(a);
        this.updateElement(i, a, r);
    }
    else
        this.clearElement(i, a); }); }); }
    clearElement(e, i) { let s = this.clearMap.get(e); if (s) {
        let n = s.get(i);
        n && (n(), this.subject.next({ element: e, key: i, value: "" }));
    } }
    updateElement(e, i, s) { let n = this.updateMap.get(e); if (n) {
        let a = n.get(i);
        a && (a(s), this.subject.next({ element: e, key: i, value: s }));
    } }
    releaseElement(e) { let i = this.watcherMap.get(e); i && (i.forEach(n => n.unsubscribe()), this.watcherMap.delete(e)); let s = this.elementMap.get(e); s && (s.forEach((n, a) => s.delete(a)), this.elementMap.delete(e)); }
    triggerUpdate(e, i) { let s = this.elementMap.get(e); if (s) {
        let n = this.getActivatedValues(s, i);
        n && (i ? this.updateElement(e, i, n.get(i)) : n.forEach((a, r) => this.updateElement(e, r, a)));
    } }
    buildElementKeyMap(e, i) { let s = this.elementKeyMap.get(e); s || (s = new Set, this.elementKeyMap.set(e, s)), s.add(i); }
    watchExtraTriggers(e, i, s) { if (s && s.length) {
        let n = this.watcherMap.get(e);
        if (n || (n = new Map, this.watcherMap.set(e, n)), !n.get(i)) {
            let r = V(...s).subscribe(() => { let u = this.getValue(e, i); this.updateElement(e, i, u); });
            n.set(i, r);
        }
    } }
    findByQuery(e) { return this.breakpoints.findByQuery(e); }
    getActivatedValues(e, i) { for (let n = 0; n < this.activatedBreakpoints.length; n++) {
        let a = this.activatedBreakpoints[n], r = e.get(a.alias);
        if (r && (i === void 0 || r.has(i) && r.get(i) != null))
            return r;
    } if (!this._useFallbacks)
        return; let s = e.get(""); return i === void 0 || s && s.has(i) ? s : void 0; }
    observeActivations() { let e = this.breakpoints.items.map(i => i.mediaQuery); this.hook.registerBeforeAfterPrintHooks(this), this.matchMedia.observe(this.hook.withPrintQuery(e)).pipe(je(this.hook.interceptEvents(this)), N(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this)); }
} return t.\u0275fac = function (e) { return new (e || t)(d.\u0275\u0275inject(Ne), d.\u0275\u0275inject(pe), d.\u0275\u0275inject(st)); }, t.\u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }), t; })();
function xe(t, l, e, i) { if (i !== void 0) {
    let s = t.get(l) ?? new Map;
    s.set(e, i), t.set(l, s);
} }
var C = (() => { class t {
    constructor(e, i, s, n) { this.elementRef = e, this.styleBuilder = i, this.styler = s, this.marshal = n, this.DIRECTIVE_KEY = "", this.inputs = [], this.mru = {}, this.destroySubject = new T, this.styleCache = new Map; }
    get parentElement() { return this.elementRef.nativeElement.parentElement; }
    get nativeElement() { return this.elementRef.nativeElement; }
    get activatedValue() { return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY); }
    set activatedValue(e) { this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, e, this.marshal.activatedAlias); }
    ngOnChanges(e) { Object.keys(e).forEach(i => { if (this.inputs.indexOf(i) !== -1) {
        let s = i.split(".").slice(1).join("."), n = e[i].currentValue;
        this.setValue(n, s);
    } }); }
    ngOnDestroy() { this.destroySubject.next(), this.destroySubject.complete(), this.marshal.releaseElement(this.nativeElement); }
    init(e = []) { this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), e); }
    addStyles(e, i) { let s = this.styleBuilder, n = s.shouldCache, a = this.styleCache.get(e); (!a || !n) && (a = s.buildStyles(e, i), n && this.styleCache.set(e, a)), this.mru = f({}, a), this.applyStyleToElement(a), s.sideEffect(e, a, i); }
    clearStyles() { Object.keys(this.mru).forEach(e => { this.mru[e] = ""; }), this.applyStyleToElement(this.mru), this.mru = {}, this.currentValue = void 0; }
    triggerUpdate() { this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY); }
    getFlexFlowDirection(e, i = !1) { if (e) {
        let [s, n] = this.styler.getFlowDirection(e);
        if (!n && i) {
            let a = O(s), r = [e];
            this.styler.applyStyleToElements(a, r);
        }
        return s.trim();
    } return "row"; }
    hasWrap(e) { return this.styler.hasWrap(e); }
    applyStyleToElement(e, i, s = this.nativeElement) { this.styler.applyStyleToElement(s, e, i); }
    setValue(e, i) { this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, e, i); }
    updateWithValue(e) { this.currentValue !== e && (this.addStyles(e), this.currentValue = e); }
} return t.\u0275fac = function (e) { return new (e || t)(d.\u0275\u0275directiveInject(d.ElementRef), d.\u0275\u0275directiveInject(A), d.\u0275\u0275directiveInject(F), d.\u0275\u0275directiveInject(D)); }, t.\u0275dir = d.\u0275\u0275defineDirective({ type: t, standalone: !1, features: [d.\u0275\u0275NgOnChangesFeature] }), t; })();
function Y(t, l = "1", e = "1") { let i = [l, e, t], s = t.indexOf("calc"); if (s > 0) {
    i[2] = me(t.substring(s).trim());
    let n = t.substr(0, s).trim().split(" ");
    n.length == 2 && (i[0] = n[0], i[1] = n[1]);
}
else if (s == 0)
    i[2] = me(t.trim());
else {
    let n = t.split(" ");
    i = n.length === 3 ? n : [l, e, t];
} return i; }
function me(t) { return t.replace(/[\s]/g, "").replace(/[\/\*\+\-]/g, " $& "); }
import * as q from "@angular/common";
import { isPlatformServer as at, NgClass as ri, NgStyle as ot } from "@angular/common";
import { coerceBooleanProperty as oi } from "@angular/cdk/coercion";
import { takeUntil as gi } from "rxjs/operators";
import * as Fe from "@angular/platform-browser";
var z = class {
    constructor(l, e, i = !0) { this.key = l, this.value = e, this.key = i ? l.replace(/['"]/g, "").trim() : l.trim(), this.value = i ? e.replace(/['"]/g, "").trim() : e.trim(), this.value = this.value.replace(/;/, ""); }
};
function De(t) { let l = typeof t; return l === "object" ? t.constructor === Array ? "array" : t.constructor === Set ? "set" : "object" : l; }
function dt(t, l = ";") { return String(t).trim().split(l).map(e => e.trim()).filter(e => e !== ""); }
function gt(t, l) { let e = i => (l && (i.value = l(i.value)), i); return t.map(Ce).filter(i => !!i).map(e).reduce(Se, {}); }
function Ae(t, l) { let e = []; return De(t) === "set" ? t.forEach(i => e.push(i)) : Object.keys(t).forEach(i => { e.push(`${i}:${t[i]}`); }), gt(e, l); }
function Ce(t) { let [l, ...e] = t.split(":"); return new z(l, e.join(":")); }
function Se(t, l) { return l.key && (t[l.key] = l.value), t; }
var ct = (() => { class t extends C {
    constructor(e, i, s, n, a, r, u, p, I) { super(e, null, i, s), this.sanitizer = n, this.ngStyleInstance = u, this.DIRECTIVE_KEY = "ngStyle", this.ngStyleInstance || (this.ngStyleInstance = new ot(e, a, r)), this.init(); let x = this.nativeElement.getAttribute("style") ?? ""; this.fallbackStyles = this.buildStyleMap(x), this.isServer = p && at(I); }
    updateWithValue(e) { let i = this.buildStyleMap(e); this.ngStyleInstance.ngStyle = f(f({}, this.fallbackStyles), i), this.isServer && this.applyStyleToElement(i), this.ngStyleInstance.ngDoCheck(); }
    clearStyles() { this.ngStyleInstance.ngStyle = this.fallbackStyles, this.ngStyleInstance.ngDoCheck(); }
    buildStyleMap(e) { let i = s => this.sanitizer.sanitize(rt.STYLE, s) ?? ""; if (e)
        switch (De(e)) {
            case "string": return we(dt(e), i);
            case "array": return we(e, i);
            case "set": return Ae(e, i);
            default: return Ae(e, i);
        } return {}; }
    ngDoCheck() { this.ngStyleInstance.ngDoCheck(); }
} return t.\u0275fac = function (e) { return new (e || t)(g.\u0275\u0275directiveInject(g.ElementRef), g.\u0275\u0275directiveInject(F), g.\u0275\u0275directiveInject(D), g.\u0275\u0275directiveInject(Fe.DomSanitizer), g.\u0275\u0275directiveInject(g.KeyValueDiffers), g.\u0275\u0275directiveInject(g.Renderer2), g.\u0275\u0275directiveInject(q.NgStyle, 10), g.\u0275\u0275directiveInject(E), g.\u0275\u0275directiveInject(nt)); }, t.\u0275dir = g.\u0275\u0275defineDirective({ type: t, standalone: !1, features: [g.\u0275\u0275InheritDefinitionFeature] }), t; })(), ut = ["ngStyle", "ngStyle.xs", "ngStyle.sm", "ngStyle.md", "ngStyle.lg", "ngStyle.xl", "ngStyle.lt-sm", "ngStyle.lt-md", "ngStyle.lt-lg", "ngStyle.lt-xl", "ngStyle.gt-xs", "ngStyle.gt-sm", "ngStyle.gt-md", "ngStyle.gt-lg"];
var ci = (() => { class t extends ct {
    constructor() { super(...arguments), this.inputs = ut; }
} return t.\u0275fac = (() => { let l; return function (i) { return (l || (l = g.\u0275\u0275getInheritedFactory(t)))(i || t); }; })(), t.\u0275dir = g.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngStyle", ""], ["", "ngStyle.xs", ""], ["", "ngStyle.sm", ""], ["", "ngStyle.md", ""], ["", "ngStyle.lg", ""], ["", "ngStyle.xl", ""], ["", "ngStyle.lt-sm", ""], ["", "ngStyle.lt-md", ""], ["", "ngStyle.lt-lg", ""], ["", "ngStyle.lt-xl", ""], ["", "ngStyle.gt-xs", ""], ["", "ngStyle.gt-sm", ""], ["", "ngStyle.gt-md", ""], ["", "ngStyle.gt-lg", ""]], inputs: { ngStyle: "ngStyle", "ngStyle.xs": "ngStyle.xs", "ngStyle.sm": "ngStyle.sm", "ngStyle.md": "ngStyle.md", "ngStyle.lg": "ngStyle.lg", "ngStyle.xl": "ngStyle.xl", "ngStyle.lt-sm": "ngStyle.lt-sm", "ngStyle.lt-md": "ngStyle.lt-md", "ngStyle.lt-lg": "ngStyle.lt-lg", "ngStyle.lt-xl": "ngStyle.lt-xl", "ngStyle.gt-xs": "ngStyle.gt-xs", "ngStyle.gt-sm": "ngStyle.gt-sm", "ngStyle.gt-md": "ngStyle.gt-md", "ngStyle.gt-lg": "ngStyle.gt-lg" }, standalone: !1, features: [g.\u0275\u0275InheritDefinitionFeature] }), t; })();
function we(t, l) { let e = i => (l && (i.value = l(i.value)), i); return t.map(Ce).filter(i => !!i).map(e).reduce(Se, {}); }
var Z = (() => { class t {
} return t.\u0275fac = function (e) { return new (e || t); }, t.\u0275mod = g.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = g.\u0275\u0275defineInjector({ imports: [b] }), t; })();
import * as o from "@angular/core";
import "@angular/core";
import * as ft from "@angular/cdk/bidi";
import { BidiModule as xt } from "@angular/cdk/bidi";
import { takeUntil as Ie } from "rxjs/operators";
var mt = (() => { class t extends A {
    buildStyles(e, { display: i }) { let s = O(e); return te(f({}, s), { display: i === "none" ? i : s.display }); }
} return t.\u0275fac = (() => { let l; return function (i) { return (l || (l = o.\u0275\u0275getInheritedFactory(t)))(i || t); }; })(), t.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }), t; })(), ht = ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"];
var yt = (() => { class t extends C {
    constructor(e, i, s, n, a) { super(e, s, i, n), this._config = a, this.DIRECTIVE_KEY = "layout", this.init(); }
    updateWithValue(e) { let s = this._config.detectLayoutDisplay ? this.styler.lookupStyle(this.nativeElement, "display") : ""; this.styleCache = Me.get(s) ?? new Map, Me.set(s, this.styleCache), this.currentValue !== e && (this.addStyles(e, { display: s }), this.currentValue = e); }
} return t.\u0275fac = function (e) { return new (e || t)(o.\u0275\u0275directiveInject(o.ElementRef), o.\u0275\u0275directiveInject(F), o.\u0275\u0275directiveInject(mt), o.\u0275\u0275directiveInject(D), o.\u0275\u0275directiveInject(m)); }, t.\u0275dir = o.\u0275\u0275defineDirective({ type: t, standalone: !1, features: [o.\u0275\u0275InheritDefinitionFeature] }), t; })(), Si = (() => { class t extends yt {
    constructor() { super(...arguments), this.inputs = ht; }
} return t.\u0275fac = (() => { let l; return function (i) { return (l || (l = o.\u0275\u0275getInheritedFactory(t)))(i || t); }; })(), t.\u0275dir = o.\u0275\u0275defineDirective({ type: t, selectors: [["", "fxLayout", ""], ["", "fxLayout.xs", ""], ["", "fxLayout.sm", ""], ["", "fxLayout.md", ""], ["", "fxLayout.lg", ""], ["", "fxLayout.xl", ""], ["", "fxLayout.lt-sm", ""], ["", "fxLayout.lt-md", ""], ["", "fxLayout.lt-lg", ""], ["", "fxLayout.lt-xl", ""], ["", "fxLayout.gt-xs", ""], ["", "fxLayout.gt-sm", ""], ["", "fxLayout.gt-md", ""], ["", "fxLayout.gt-lg", ""]], inputs: { fxLayout: "fxLayout", "fxLayout.xs": "fxLayout.xs", "fxLayout.sm": "fxLayout.sm", "fxLayout.md": "fxLayout.md", "fxLayout.lg": "fxLayout.lg", "fxLayout.xl": "fxLayout.xl", "fxLayout.lt-sm": "fxLayout.lt-sm", "fxLayout.lt-md": "fxLayout.lt-md", "fxLayout.lt-lg": "fxLayout.lt-lg", "fxLayout.lt-xl": "fxLayout.lt-xl", "fxLayout.gt-xs": "fxLayout.gt-xs", "fxLayout.gt-sm": "fxLayout.gt-sm", "fxLayout.gt-md": "fxLayout.gt-md", "fxLayout.gt-lg": "fxLayout.gt-lg" }, standalone: !1, features: [o.\u0275\u0275InheritDefinitionFeature] }), t; })(), Me = new Map;
var pt = (() => { class t extends A {
    constructor(e) { super(), this.layoutConfig = e; }
    buildStyles(e, i) { let [s, n, ...a] = e.split(" "), r = a.join(" "), u = i.direction.indexOf("column") > -1 ? "column" : "row", p = U(u) ? "max-width" : "max-height", I = U(u) ? "min-width" : "min-height", x = String(r).indexOf("calc") > -1, Re = x || r === "auto", Le = String(r).indexOf("%") > -1 && !x, be = String(r).indexOf("px") > -1 || String(r).indexOf("rem") > -1 || String(r).indexOf("em") > -1 || String(r).indexOf("vw") > -1 || String(r).indexOf("vh") > -1, G = x || be; s = s == "0" ? 0 : s, n = n == "0" ? 0 : n; let ee = !s && !n, c = {}, M = { "max-width": null, "max-height": null, "min-width": null, "min-height": null }; switch (r || "") {
        case "":
            let Ee = this.layoutConfig.useColumnBasisZero !== !1;
            r = u === "row" ? "0%" : Ee ? "0.000000001px" : "auto";
            break;
        case "initial":
        case "nogrow":
            s = 0, r = "auto";
            break;
        case "grow":
            r = "100%";
            break;
        case "noshrink":
            n = 0, r = "auto";
            break;
        case "auto": break;
        case "none":
            s = 0, n = 0, r = "auto";
            break;
        default:
            !G && !Le && !isNaN(r) && (r = r + "%"), r === "0%" && (G = !0), r === "0px" && (r = "0%"), x ? c = h(M, { "flex-grow": s, "flex-shrink": n, "flex-basis": G ? r : "100%" }) : c = h(M, { flex: `${s} ${n} ${G ? r : "100%"}` });
            break;
    } return c.flex || c["flex-grow"] || (x ? c = h(M, { "flex-grow": s, "flex-shrink": n, "flex-basis": r }) : c = h(M, { flex: `${s} ${n} ${r}` })), r !== "0%" && r !== "0px" && r !== "0.000000001px" && r !== "auto" && (c[I] = ee || G && s ? r : null, c[p] = ee || !Re && n ? r : null), !c[I] && !c[p] ? x ? c = h(M, { "flex-grow": s, "flex-shrink": n, "flex-basis": r }) : c = h(M, { flex: `${s} ${n} ${r}` }) : i.hasWrap && (c[x ? "flex-basis" : "flex"] = c[p] ? x ? c[p] : `${s} ${n} ${c[p]}` : x ? c[I] : `${s} ${n} ${c[I]}`), h(c, { "box-sizing": "border-box" }); }
} return t.\u0275fac = function (e) { return new (e || t)(o.\u0275\u0275inject(m)); }, t.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }), t; })(), vt = ["fxFlex", "fxFlex.xs", "fxFlex.sm", "fxFlex.md", "fxFlex.lg", "fxFlex.xl", "fxFlex.lt-sm", "fxFlex.lt-md", "fxFlex.lt-lg", "fxFlex.lt-xl", "fxFlex.gt-xs", "fxFlex.gt-sm", "fxFlex.gt-md", "fxFlex.gt-lg"];
var At = (() => { class t extends C {
    constructor(e, i, s, n, a) { super(e, n, i, a), this.layoutConfig = s, this.marshal = a, this.DIRECTIVE_KEY = "flex", this.direction = void 0, this.wrap = void 0, this.flexGrow = "1", this.flexShrink = "1", this.init(); }
    get shrink() { return this.flexShrink; }
    set shrink(e) { this.flexShrink = e || "1", this.triggerReflow(); }
    get grow() { return this.flexGrow; }
    set grow(e) { this.flexGrow = e || "1", this.triggerReflow(); }
    ngOnInit() { this.parentElement && (this.marshal.trackValue(this.parentElement, "layout").pipe(Ie(this.destroySubject)).subscribe(this.onLayoutChange.bind(this)), this.marshal.trackValue(this.nativeElement, "layout-align").pipe(Ie(this.destroySubject)).subscribe(this.triggerReflow.bind(this))); }
    onLayoutChange(e) { let s = e.value.split(" "); this.direction = s[0], this.wrap = s[1] !== void 0 && s[1] === "wrap", this.triggerUpdate(); }
    updateWithValue(e) { let i = this.layoutConfig.addFlexToParent !== !1; this.direction === void 0 && (this.direction = this.getFlexFlowDirection(this.parentElement, i)), this.wrap === void 0 && (this.wrap = this.hasWrap(this.parentElement)); let s = this.direction, n = s.startsWith("row"), a = this.wrap; n && a ? this.styleCache = Dt : n && !a ? this.styleCache = wt : !n && a ? this.styleCache = Ct : !n && !a && (this.styleCache = Ft); let r = String(e).replace(";", ""), u = Y(r, this.flexGrow, this.flexShrink); this.addStyles(u.join(" "), { direction: s, hasWrap: a }); }
    triggerReflow() { let e = this.activatedValue; if (e !== void 0) {
        let i = Y(e + "", this.flexGrow, this.flexShrink);
        this.marshal.updateElement(this.nativeElement, this.DIRECTIVE_KEY, i.join(" "));
    } }
} return t.\u0275fac = function (e) { return new (e || t)(o.\u0275\u0275directiveInject(o.ElementRef), o.\u0275\u0275directiveInject(F), o.\u0275\u0275directiveInject(m), o.\u0275\u0275directiveInject(pt), o.\u0275\u0275directiveInject(D)); }, t.\u0275dir = o.\u0275\u0275defineDirective({ type: t, inputs: { shrink: [0, "fxShrink", "shrink"], grow: [0, "fxGrow", "grow"] }, standalone: !1, features: [o.\u0275\u0275InheritDefinitionFeature] }), t; })(), Ii = (() => { class t extends At {
    constructor() { super(...arguments), this.inputs = vt; }
} return t.\u0275fac = (() => { let l; return function (i) { return (l || (l = o.\u0275\u0275getInheritedFactory(t)))(i || t); }; })(), t.\u0275dir = o.\u0275\u0275defineDirective({ type: t, selectors: [["", "fxFlex", ""], ["", "fxFlex.xs", ""], ["", "fxFlex.sm", ""], ["", "fxFlex.md", ""], ["", "fxFlex.lg", ""], ["", "fxFlex.xl", ""], ["", "fxFlex.lt-sm", ""], ["", "fxFlex.lt-md", ""], ["", "fxFlex.lt-lg", ""], ["", "fxFlex.lt-xl", ""], ["", "fxFlex.gt-xs", ""], ["", "fxFlex.gt-sm", ""], ["", "fxFlex.gt-md", ""], ["", "fxFlex.gt-lg", ""]], inputs: { fxFlex: "fxFlex", "fxFlex.xs": "fxFlex.xs", "fxFlex.sm": "fxFlex.sm", "fxFlex.md": "fxFlex.md", "fxFlex.lg": "fxFlex.lg", "fxFlex.xl": "fxFlex.xl", "fxFlex.lt-sm": "fxFlex.lt-sm", "fxFlex.lt-md": "fxFlex.lt-md", "fxFlex.lt-lg": "fxFlex.lt-lg", "fxFlex.lt-xl": "fxFlex.lt-xl", "fxFlex.gt-xs": "fxFlex.gt-xs", "fxFlex.gt-sm": "fxFlex.gt-sm", "fxFlex.gt-md": "fxFlex.gt-md", "fxFlex.gt-lg": "fxFlex.gt-lg" }, standalone: !1, features: [o.\u0275\u0275InheritDefinitionFeature] }), t; })(), wt = new Map, Ft = new Map, Dt = new Map, Ct = new Map;
var St = { margin: 0, width: "100%", height: "100%", "min-width": "100%", "min-height": "100%" }, It = (() => { class t extends A {
    buildStyles(e) { return St; }
} return t.\u0275fac = (() => { let l; return function (i) { return (l || (l = o.\u0275\u0275getInheritedFactory(t)))(i || t); }; })(), t.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }), t; })(), Mi = (() => { class t extends C {
    constructor(e, i, s, n) { super(e, s, i, n), this.styleCache = Mt, this.addStyles(""); }
} return t.\u0275fac = function (e) { return new (e || t)(o.\u0275\u0275directiveInject(o.ElementRef), o.\u0275\u0275directiveInject(F), o.\u0275\u0275directiveInject(It), o.\u0275\u0275directiveInject(D)); }, t.\u0275dir = o.\u0275\u0275defineDirective({ type: t, selectors: [["", "fxFill", ""], ["", "fxFlexFill", ""]], standalone: !1, features: [o.\u0275\u0275InheritDefinitionFeature] }), t; })(), Mt = new Map;
var X = (() => { class t {
} return t.\u0275fac = function (e) { return new (e || t); }, t.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = o.\u0275\u0275defineInjector({ imports: [b, xt] }), t; })();
import * as S from "@angular/core";
import { Version as Pi, PLATFORM_ID as Rt } from "@angular/core";
import * as y from "@angular/core";
import "@angular/core";
import { coerceBooleanProperty as ki } from "@angular/cdk/coercion";
var J = (() => { class t {
} return t.\u0275fac = function (e) { return new (e || t); }, t.\u0275mod = y.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = y.\u0275\u0275defineInjector({ imports: [b] }), t; })();
import { isPlatformServer as Lt } from "@angular/common";
var Yi = (() => { class t {
    constructor(e, i) { Lt(i) && !e && console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule"); }
    static withConfig(e, i = []) { return { ngModule: t, providers: e.serverLoaded ? [{ provide: m, useValue: f(f({}, j), e) }, { provide: k, useValue: i, multi: !0 }, { provide: E, useValue: !0 }] : [{ provide: m, useValue: f(f({}, j), e) }, { provide: k, useValue: i, multi: !0 }] }; }
} return t.\u0275fac = function (e) { return new (e || t)(S.\u0275\u0275inject(E), S.\u0275\u0275inject(Rt)); }, t.\u0275mod = S.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = S.\u0275\u0275defineInjector({ imports: [X, Z, J, X, Z, J] }), t; })();
export { ci as a, Si as b, Ii as c, Mi as d, Yi as e };
/*! Bundled license information:

@angular/flex-layout/fesm2020/angular-flex-layout-_private-utils.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
