import { d as w, f as T, g as y, h as g } from "@nf-internal/chunk-FYX6O4YR";
import { b as O, f as S, z as C } from "@nf-internal/chunk-STIBVO4O";
import { i as D } from "@nf-internal/chunk-2AVGQ2MQ";
import { defaultModules as V, QUILL_CONFIG_TOKEN as R } from "ngx-quill/config";
export * from "ngx-quill/config";
import * as n from "@angular/core";
import { inject as u, input as r, EventEmitter as m, signal as M, ElementRef as F, ChangeDetectorRef as Z, PLATFORM_ID as k, Renderer2 as P, NgZone as H, DestroyRef as I, SecurityContext as j, forwardRef as z } from "@angular/core";
import { isPlatformServer as A } from "@angular/common";
import { DomSanitizer as q } from "@angular/platform-browser";
import { takeUntilDestroyed as p } from "@angular/core/rxjs-interop";
import { shareReplay as K, map as L, tap as W, mergeMap as _, debounceTime as x } from "rxjs/operators";
import { NG_VALUE_ACCESSOR as X, NG_VALIDATORS as Y } from "@angular/forms";
var Q = [[["", "above-quill-editor-toolbar", ""]], [["", "quill-editor-toolbar", ""]], [["", "below-quill-editor-toolbar", ""]]], $ = ["[above-quill-editor-toolbar]", "[quill-editor-toolbar]", "[below-quill-editor-toolbar]"];
function J(o, v) { o & 1 && n.\u0275\u0275domElement(0, "div", 0); }
function U(o, v) { o & 1 && n.\u0275\u0275domElement(0, "div", 0); }
var E = (o, v) => o || v || "html", B = () => new S(o => { let v = requestAnimationFrame(() => { o.next(), o.complete(); }); return () => cancelAnimationFrame(v); }), N = (() => { class o {
    constructor() { this.config = u(R) || { modules: V }, this.quill$ = T(() => D(this, null, function* () { if (!this.Quill) {
        let e = document.addEventListener;
        document.addEventListener = document.__zone_symbol__addEventListener || document.addEventListener;
        let { Quill: t } = yield import("@nf-internal/ngx-quill-quill-CUw8Q_m0-2PZS3G33");
        document.addEventListener = e, this.Quill = t;
    } return this.config.customOptions?.forEach(e => { let t = this.Quill.import(e.import); t.whitelist = e.whitelist, this.Quill.register(t, !0, this.config.suppressGlobalRegisterWarning); }), new Promise(e => { this.registerCustomModules(this.Quill, this.config.customModules, this.config.suppressGlobalRegisterWarning).subscribe(e); }); })).pipe(K({ bufferSize: 1, refCount: !1 })), this.registeredModules = new Set; }
    getQuill() { return this.quill$; }
    beforeRender(e, t, i = this.config.beforeRender) { let s = [this.registerCustomModules(e, t)]; return i && s.push(i()), y(s).pipe(L(() => e)); }
    registerCustomModules(e, t, i) { if (!Array.isArray(t))
        return C(e); let s = []; for (let l of t) {
        let { path: d, implementation: a } = l;
        this.registeredModules.has(d) || (this.registeredModules.add(d), w(a) ? s.push(a.pipe(W(h => { e.register(d, h, i); }))) : e.register(d, a, i));
    } return s.length > 0 ? y(s).pipe(L(() => e)) : C(e); }
    static { this.\u0275fac = function (t) { return new (t || o); }; }
    static { this.\u0275prov = n.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" }); }
} return o; })(), ee = (() => {
    class o {
        constructor() { this.format = r(void 0), this.theme = r(void 0), this.modules = r(void 0), this.debug = r(!1), this.readOnly = r(!1), this.placeholder = r(void 0), this.maxLength = r(void 0), this.minLength = r(void 0), this.required = r(!1), this.formats = r(void 0), this.customToolbarPosition = r("top"), this.sanitize = r(void 0), this.beforeRender = r(void 0), this.styles = r(null), this.registry = r(void 0), this.bounds = r(void 0), this.customOptions = r([]), this.customModules = r([]), this.trackChanges = r(void 0), this.classes = r(void 0), this.trimOnValidation = r(!1), this.linkPlaceholder = r(void 0), this.compareValues = r(!1), this.filterNull = r(!1), this.debounceTime = r(void 0), this.defaultEmptyValue = r(null), this.onEditorCreated = new m, this.onEditorChanged = new m, this.onContentChanged = new m, this.onSelectionChanged = new m, this.onFocus = new m, this.onBlur = new m, this.onNativeFocus = new m, this.onNativeBlur = new m, this.disabled = !1, this.toolbarPosition = M("top"), this.eventsSubscription = null, this.quillSubscription = null, this.elementRef = u(F), this.cd = u(Z), this.domSanitizer = u(q), this.platformId = u(k), this.renderer = u(P), this.zone = u(H), this.service = u(N), this.destroyRef = u(I), this.valueGetter = r(e => { let t = e.getSemanticHTML(); this.isEmptyValue(t) && (t = this.defaultEmptyValue()); let i = t, s = E(this.format(), this.service.config.format); if (s === "text")
            i = e.getText();
        else if (s === "object")
            i = e.getContents();
        else if (s === "json")
            try {
                i = JSON.stringify(e.getContents());
            }
            catch {
                i = e.getText();
            } return i; }), this.valueSetter = r((e, t) => { let i = E(this.format(), this.service.config.format); if (i === "html")
            return ([!0, !1].includes(this.sanitize()) ? this.sanitize() : this.service.config.sanitize || !1) && (t = this.domSanitizer.sanitize(j.HTML, t)), e.clipboard.convert({ html: t }); if (i === "json")
            try {
                return JSON.parse(t);
            }
            catch {
                return [{ insert: t }];
            } return t; }), this.selectionChangeHandler = (e, t, i) => { let s = this.trackChanges() || this.service.config.trackChanges, l = !e && !!this.onModelTouched && (i === "user" || s && s === "all"); !this.onBlur.observed && !this.onFocus.observed && !this.onSelectionChanged.observed && !l || this.zone.run(() => { e === null ? this.onBlur.emit({ editor: this.quillEditor, source: i }) : t === null && this.onFocus.emit({ editor: this.quillEditor, source: i }), this.onSelectionChanged.emit({ editor: this.quillEditor, oldRange: t, range: e, source: i }), l && this.onModelTouched(), this.cd.markForCheck(); }); }, this.textChangeHandler = (e, t, i) => { let s = this.quillEditor.getText(), l = this.quillEditor.getContents(), d = this.quillEditor.getSemanticHTML(); this.isEmptyValue(d) && (d = this.defaultEmptyValue()); let a = this.trackChanges() || this.service.config.trackChanges, h = (i === "user" || a && a === "all") && !!this.onModelChange; !this.onContentChanged.observed && !h || this.zone.run(() => { if (h) {
            let b = this.valueGetter();
            this.onModelChange(b(this.quillEditor));
        } this.onContentChanged.emit({ content: l, delta: e, editor: this.quillEditor, html: d, oldDelta: t, source: i, text: s }), this.cd.markForCheck(); }); }, this.editorChangeHandler = (e, t, i, s) => { if (this.onEditorChanged.observed)
            if (e === "text-change") {
                let l = this.quillEditor.getText(), d = this.quillEditor.getContents(), a = this.quillEditor.getSemanticHTML();
                this.isEmptyValue(a) && (a = this.defaultEmptyValue()), this.zone.run(() => { this.onEditorChanged.emit({ content: d, delta: t, editor: this.quillEditor, event: e, html: a, oldDelta: i, source: s, text: l }), this.cd.markForCheck(); });
            }
            else
                this.zone.run(() => { this.onEditorChanged.emit({ editor: this.quillEditor, event: e, oldRange: i, range: t, source: s }), this.cd.markForCheck(); }); }, this.destroyRef.onDestroy(() => { this.dispose(), this.quillSubscription?.unsubscribe(), this.quillSubscription = null; }); }
        static normalizeClassNames(e) { return e.trim().split(" ").reduce((i, s) => { let l = s.trim(); return l && i.push(l), i; }, []); }
        ngOnInit() { this.toolbarPosition.set(this.customToolbarPosition()); }
        ngAfterViewInit() { A(this.platformId) || (this.quillSubscription = this.service.getQuill().pipe(_(e => this.service.beforeRender(e, this.customModules(), this.beforeRender()))).subscribe(e => { this.editorElem = this.elementRef.nativeElement.querySelector("[quill-editor-element]"); let t = this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"), i = Object.assign({}, this.modules() || this.service.config.modules); t ? i.toolbar = t : i.toolbar === void 0 && (i.toolbar = V.toolbar); let s = this.placeholder() !== void 0 ? this.placeholder() : this.service.config.placeholder; s === void 0 && (s = "Insert text here ..."); let l = this.styles(); l && Object.keys(l).forEach(c => { this.renderer.setStyle(this.editorElem, c, l[c]); }), this.classes() && this.addClasses(this.classes()), this.customOptions().forEach(c => { let f = e.import(c.import); f.whitelist = c.whitelist, e.register(f, !0); }); let d = this.bounds() && this.bounds() === "self" ? this.editorElem : this.bounds(); d || (d = this.service.config.bounds ? this.service.config.bounds : document.body); let a = this.debug(); !a && a !== !1 && this.service.config.debug && (a = this.service.config.debug); let h = this.readOnly(); !h && this.readOnly() !== !1 && (h = this.service.config.readOnly !== void 0 ? this.service.config.readOnly : !1); let b = this.formats(); if (!b && b === void 0 && (b = this.service.config.formats ? [...this.service.config.formats] : this.service.config.formats === null ? null : void 0), this.zone.runOutsideAngular(() => { if (this.quillEditor = new e(this.editorElem, { bounds: d, debug: a, formats: b, modules: i, placeholder: s, readOnly: h, registry: this.registry(), theme: this.theme() || (this.service.config.theme ? this.service.config.theme : "snow") }), this.onNativeBlur.observed) {
            g(this.quillEditor.scroll.domNode, "blur").pipe(p(this.destroyRef)).subscribe(() => this.onNativeBlur.next({ editor: this.quillEditor, source: "dom" }));
            let c = this.quillEditor.getModule("toolbar");
            c.container && g(c.container, "mousedown").pipe(p(this.destroyRef)).subscribe(f => f.preventDefault());
        } if (this.onNativeFocus.observed && g(this.quillEditor.scroll.domNode, "focus").pipe(p(this.destroyRef)).subscribe(() => this.onNativeFocus.next({ editor: this.quillEditor, source: "dom" })), this.linkPlaceholder()) {
            let f = this.quillEditor?.theme?.tooltip?.root?.querySelector("input[data-link]");
            f?.dataset && (f.dataset.link = this.linkPlaceholder());
        } }), this.content) {
            if (E(this.format(), this.service.config.format) === "text")
                this.quillEditor.setText(this.content, "silent");
            else {
                let G = this.valueSetter()(this.quillEditor, this.content);
                this.quillEditor.setContents(G, "silent");
            }
            this.quillEditor.getModule("history").clear();
        } this.setDisabledState(), this.addQuillEventListeners(), !(!this.onEditorCreated.observed && !this.onValidatorChanged) && B().pipe(p(this.destroyRef)).subscribe(() => { this.onValidatorChanged && this.onValidatorChanged(), this.onEditorCreated.emit(this.quillEditor); }); })); }
        ngOnChanges(e) { if (this.quillEditor) {
            if (e.readOnly && this.quillEditor.enable(!e.readOnly.currentValue), e.placeholder && (this.quillEditor.root.dataset.placeholder = e.placeholder.currentValue), e.styles) {
                let t = e.styles.currentValue, i = e.styles.previousValue;
                i && Object.keys(i).forEach(s => { this.renderer.removeStyle(this.editorElem, s); }), t && Object.keys(t).forEach(s => { this.renderer.setStyle(this.editorElem, s, this.styles()[s]); });
            }
            if (e.classes) {
                let t = e.classes.currentValue, i = e.classes.previousValue;
                i && this.removeClasses(i), t && this.addClasses(t);
            }
            e.debounceTime && this.addQuillEventListeners();
        } }
        addClasses(e) { o.normalizeClassNames(e).forEach(t => { this.renderer.addClass(this.editorElem, t); }); }
        removeClasses(e) { o.normalizeClassNames(e).forEach(t => { this.renderer.removeClass(this.editorElem, t); }); }
        writeValue(e) { if (this.filterNull() && e === null || (this.content = e, !this.quillEditor))
            return; let t = E(this.format(), this.service.config.format), s = this.valueSetter()(this.quillEditor, e); if (this.compareValues()) {
            let l = this.quillEditor.getContents();
            if (JSON.stringify(l) === JSON.stringify(s))
                return;
        } if (e) {
            t === "text" ? this.quillEditor.setText(e) : this.quillEditor.setContents(s);
            return;
        } this.quillEditor.setText(""); }
        setDisabledState(e = this.disabled) { this.disabled = e, this.quillEditor && (e ? (this.quillEditor.disable(), this.renderer.setAttribute(this.elementRef.nativeElement, "disabled", "disabled")) : (this.readOnly() || this.quillEditor.enable(), this.renderer.removeAttribute(this.elementRef.nativeElement, "disabled"))); }
        registerOnChange(e) { this.onModelChange = e; }
        registerOnTouched(e) { this.onModelTouched = e; }
        registerOnValidatorChange(e) { this.onValidatorChanged = e; }
        validate() {
            if (!this.quillEditor)
                return null;
            let e = {}, t = !0, i = this.quillEditor.getText(), s = this.trimOnValidation() ? i.trim().length : i.length === 1 && i.trim().length === 0 ? 0 : i.length - 1, l = this.quillEditor.getContents().ops, d = !!l && l.length === 1 && [`
`, ""].includes(l[0].insert?.toString());
            return this.minLength() && s && s < this.minLength() && (e.minLengthError = { given: s, minLength: this.minLength() }, t = !1), this.maxLength() && s > this.maxLength() && (e.maxLengthError = { given: s, maxLength: this.maxLength() }, t = !1), this.required() && !s && d && (e.requiredError = { empty: !0 }, t = !1), t ? null : e;
        }
        addQuillEventListeners() { this.dispose(), this.zone.runOutsideAngular(() => { this.eventsSubscription = new O, this.eventsSubscription.add(g(this.quillEditor, "selection-change").subscribe(([i, s, l]) => { this.selectionChangeHandler(i, s, l); })); let e = g(this.quillEditor, "text-change"), t = g(this.quillEditor, "editor-change"); typeof this.debounceTime() == "number" && (e = e.pipe(x(this.debounceTime())), t = t.pipe(x(this.debounceTime()))), this.eventsSubscription.add(e.subscribe(([i, s, l]) => { this.textChangeHandler(i, s, l); })), this.eventsSubscription.add(t.subscribe(([i, s, l, d]) => { this.editorChangeHandler(i, s, l, d); })); }); }
        dispose() { this.eventsSubscription?.unsubscribe(), this.eventsSubscription = null; }
        isEmptyValue(e) { return e === "<p></p>" || e === "<div></div>" || e === "<p><br></p>" || e === "<div><br></div>"; }
        static { this.\u0275fac = function (t) { return new (t || o); }; }
        static { this.\u0275dir = n.\u0275\u0275defineDirective({ type: o, inputs: { format: [1, "format"], theme: [1, "theme"], modules: [1, "modules"], debug: [1, "debug"], readOnly: [1, "readOnly"], placeholder: [1, "placeholder"], maxLength: [1, "maxLength"], minLength: [1, "minLength"], required: [1, "required"], formats: [1, "formats"], customToolbarPosition: [1, "customToolbarPosition"], sanitize: [1, "sanitize"], beforeRender: [1, "beforeRender"], styles: [1, "styles"], registry: [1, "registry"], bounds: [1, "bounds"], customOptions: [1, "customOptions"], customModules: [1, "customModules"], trackChanges: [1, "trackChanges"], classes: [1, "classes"], trimOnValidation: [1, "trimOnValidation"], linkPlaceholder: [1, "linkPlaceholder"], compareValues: [1, "compareValues"], filterNull: [1, "filterNull"], debounceTime: [1, "debounceTime"], defaultEmptyValue: [1, "defaultEmptyValue"], valueGetter: [1, "valueGetter"], valueSetter: [1, "valueSetter"] }, outputs: { onEditorCreated: "onEditorCreated", onEditorChanged: "onEditorChanged", onContentChanged: "onContentChanged", onSelectionChanged: "onSelectionChanged", onFocus: "onFocus", onBlur: "onBlur", onNativeFocus: "onNativeFocus", onNativeBlur: "onNativeBlur" }, features: [n.\u0275\u0275NgOnChangesFeature] }); }
    }
    return o;
})(), be = (() => { class o extends ee {
    static { this.\u0275fac = (() => { let e; return function (i) { return (e || (e = n.\u0275\u0275getInheritedFactory(o)))(i || o); }; })(); }
    static { this.\u0275cmp = n.\u0275\u0275defineComponent({ type: o, selectors: [["quill-editor"]], features: [n.\u0275\u0275ProvidersFeature([{ multi: !0, provide: X, useExisting: z(() => o) }, { multi: !0, provide: Y, useExisting: z(() => o) }]), n.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: $, decls: 5, vars: 2, consts: [["quill-editor-element", ""]], template: function (t, i) { t & 1 && (n.\u0275\u0275projectionDef(Q), n.\u0275\u0275conditionalCreate(0, J, 1, 0, "div", 0), n.\u0275\u0275projection(1), n.\u0275\u0275projection(2, 1), n.\u0275\u0275projection(3, 2), n.\u0275\u0275conditionalCreate(4, U, 1, 0, "div", 0)), t & 2 && (n.\u0275\u0275conditional(i.toolbarPosition() !== "top" ? 0 : -1), n.\u0275\u0275advance(4), n.\u0275\u0275conditional(i.toolbarPosition() === "top" ? 4 : -1)); }, styles: ["[_nghost-%COMP%]{display:inline-block}"] }); }
} return o; })(), ve = (() => {
    class o {
        constructor() { this.content = r(""), this.theme = r(void 0), this.sanitize = r(void 0), this.innerHTML = M(""), this.themeClass = M("ql-snow"), this.sanitizer = u(q), this.service = u(N); }
        ngOnChanges(e) { if (e.theme) {
            let t = e.theme.currentValue || (this.service.config.theme ? this.service.config.theme : "snow");
            this.themeClass.set(`ql-${t} ngx-quill-view-html`);
        }
        else if (!this.theme()) {
            let t = this.service.config.theme ? this.service.config.theme : "snow";
            this.themeClass.set(`ql-${t} ngx-quill-view-html`);
        } if (e.content) {
            let t = e.content.currentValue, s = ([!0, !1].includes(this.sanitize()) ? this.sanitize() : this.service.config.sanitize || !1) ? t : this.sanitizer.bypassSecurityTrustHtml(t);
            this.innerHTML.set(s);
        } }
        static { this.\u0275fac = function (t) { return new (t || o); }; }
        static {
            this.\u0275cmp = n.\u0275\u0275defineComponent({ type: o, selectors: [["quill-view-html"]], inputs: { content: [1, "content"], theme: [1, "theme"], sanitize: [1, "sanitize"] }, features: [n.\u0275\u0275NgOnChangesFeature], decls: 2, vars: 3, consts: [[1, "ql-container"], [1, "ql-editor", 3, "innerHTML"]], template: function (t, i) { t & 1 && (n.\u0275\u0275domElementStart(0, "div", 0), n.\u0275\u0275domElement(1, "div", 1), n.\u0275\u0275domElementEnd()), t & 2 && (n.\u0275\u0275classMap(i.themeClass()), n.\u0275\u0275advance(), n.\u0275\u0275domProperty("innerHTML", i.innerHTML(), n.\u0275\u0275sanitizeHtml)); }, styles: [`.ql-container.ngx-quill-view-html{border:0}
`], encapsulation: 2 });
        }
    }
    return o;
})(), pe = (() => {
    class o {
        constructor() { this.format = r(void 0), this.theme = r(void 0), this.modules = r(void 0), this.debug = r(!1), this.formats = r(void 0), this.sanitize = r(void 0), this.beforeRender = r(), this.strict = r(!0), this.content = r(), this.customModules = r([]), this.customOptions = r([]), this.onEditorCreated = new m, this.elementRef = u(F), this.renderer = u(P), this.ngZone = u(H), this.service = u(N), this.sanitizer = u(q), this.platformId = u(k), this.destroyRef = u(I), this.valueSetter = (e, t) => { let i = E(this.format(), this.service.config.format), s = t; if (i === "text")
            e.setText(s);
        else {
            if (i === "html")
                ([!0, !1].includes(this.sanitize()) ? this.sanitize() : this.service.config.sanitize || !1) && (t = this.sanitizer.sanitize(j.HTML, t)), s = e.clipboard.convert({ html: t });
            else if (i === "json")
                try {
                    s = JSON.parse(t);
                }
                catch {
                    s = [{ insert: t }];
                }
            e.setContents(s);
        } }; }
        ngOnChanges(e) { this.quillEditor && e.content && this.valueSetter(this.quillEditor, e.content.currentValue); }
        ngAfterViewInit() { if (A(this.platformId))
            return; let e = this.service.getQuill().pipe(_(t => this.service.beforeRender(t, this.customModules(), this.beforeRender()))).subscribe(t => { let i = Object.assign({}, this.modules() || this.service.config.modules); i.toolbar = !1, this.customOptions().forEach(a => { let h = t.import(a.import); h.whitelist = a.whitelist, t.register(h, !0); }); let s = this.debug(); !s && s !== !1 && this.service.config.debug && (s = this.service.config.debug); let l = this.formats(); l === void 0 && (l = this.service.config.formats ? [...this.service.config.formats] : this.service.config.formats === null ? null : void 0); let d = this.theme() || (this.service.config.theme ? this.service.config.theme : "snow"); this.editorElem = this.elementRef.nativeElement.querySelector("[quill-view-element]"), this.ngZone.runOutsideAngular(() => { this.quillEditor = new t(this.editorElem, { debug: s, formats: l, modules: i, readOnly: !0, strict: this.strict(), theme: d }); }), this.renderer.addClass(this.editorElem, "ngx-quill-view"), this.content() && this.valueSetter(this.quillEditor, this.content()), this.onEditorCreated.observed && B().pipe(p(this.destroyRef)).subscribe(() => { this.onEditorCreated.emit(this.quillEditor); }); }); this.destroyRef.onDestroy(() => e.unsubscribe()); }
        static { this.\u0275fac = function (t) { return new (t || o); }; }
        static {
            this.\u0275cmp = n.\u0275\u0275defineComponent({ type: o, selectors: [["quill-view"]], inputs: { format: [1, "format"], theme: [1, "theme"], modules: [1, "modules"], debug: [1, "debug"], formats: [1, "formats"], sanitize: [1, "sanitize"], beforeRender: [1, "beforeRender"], strict: [1, "strict"], content: [1, "content"], customModules: [1, "customModules"], customOptions: [1, "customOptions"] }, outputs: { onEditorCreated: "onEditorCreated" }, features: [n.\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [["quill-view-element", ""]], template: function (t, i) { t & 1 && n.\u0275\u0275domElement(0, "div", 0); }, styles: [`.ql-container.ngx-quill-view{border:0}
`], encapsulation: 2 });
        }
    }
    return o;
})(), Ee = (() => { class o {
    static forRoot(e) { return { ngModule: o, providers: [{ provide: R, useValue: e }] }; }
    static { this.\u0275fac = function (t) { return new (t || o); }; }
    static { this.\u0275mod = n.\u0275\u0275defineNgModule({ type: o }); }
    static { this.\u0275inj = n.\u0275\u0275defineInjector({}); }
} return o; })();
export { ee as QuillEditorBase, be as QuillEditorComponent, Ee as QuillModule, N as QuillService, pe as QuillViewComponent, ve as QuillViewHTMLComponent };
