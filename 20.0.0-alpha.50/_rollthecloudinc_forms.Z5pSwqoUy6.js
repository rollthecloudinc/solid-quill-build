import { a as Me } from "@nf-internal/chunk-EOHDPEXE";
import { a as fe } from "@nf-internal/chunk-VJMH5IEE";
import { g as Y, i as pe } from "@nf-internal/chunk-FYX6O4YR";
import { D as X, H as B, I as ce, P as de, k as $, l as F, m as le, ma as me, pb as ue, vb as V, z as C } from "@nf-internal/chunk-STIBVO4O";
import { a as ae, b as se, g as $e } from "@nf-internal/chunk-2AVGQ2MQ";
import * as v from "@angular/common";
import { CommonModule as we } from "@angular/common";
import * as e from "@angular/core";
import "@angular/core";
import * as a from "@angular/forms";
import { UntypedFormControl as R, FormsModule as je, ReactiveFormsModule as De } from "@angular/forms";
import { MaterialModule as ze } from "@rollthecloudinc/material";
import * as ge from "@rollthecloudinc/content";
import { ContentBinding as Oe, ContentPluginEditorOptions as Te, ContentPlugin as w } from "@rollthecloudinc/content";
import * as he from "@rollthecloudinc/datasource";
import { DatasourceOptions as Ae, SelectOption as ke, Dataset as Pe, mockDatasourceOptions as Z, DatasourceModule as Ve } from "@rollthecloudinc/datasource";
import * as g from "@rollthecloudinc/ordain";
import { FormValidation as J, OrdainModule as Ee } from "@rollthecloudinc/ordain";
import { switchMap as M, map as y, tap as A, defaultIfEmpty as ve, take as Ne, takeUntil as ee, debounceTime as Be, distinctUntilChanged as Ge, withLatestFrom as Re } from "rxjs/operators";
var ie = $e(Me(), 1);
import * as h from "@rollthecloudinc/attributes";
import * as b from "@rollthecloudinc/token";
import * as E from "@rollthecloudinc/panels";
import { PanelPageForm as Le, Pane as G, StylePlugin as He } from "@rollthecloudinc/panels";
import * as Ce from "recursive-diff";
import * as u from "@angular/material/input";
import * as k from "@angular/material/autocomplete";
import * as ne from "@angular/material/select";
import * as ye from "@rollthecloudinc/render";
import { RenderModule as Ue } from "@rollthecloudinc/render";
import * as z from "@angular/material/dialog";
import { MAT_DIALOG_DATA as be } from "@angular/material/dialog";
import * as oe from "@angular/material/button";
import * as W from "@angular/material/radio";
import * as K from "@angular/material/slider";
import * as Se from "@angular/material/slide-toggle";
import * as xe from "@angular/material/checkbox";
import * as N from "@angular/material/datepicker";
import { Param as qe, Mapping as Je } from "@rollthecloudinc/dparam";
import * as Fe from "@rollthecloudinc/media";
import { MediaFile as We } from "@rollthecloudinc/media";
import * as O from "ngx-dropzone";
import { NgxDropzoneModule as Ke } from "ngx-dropzone";
function Qe(n, p) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-error"), e.\u0275\u0275element(1, "druid-ordain-default-validation-error", 2), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("validators", t.formSettings$.value == null || t.formSettings$.value.validation == null ? null : t.formSettings$.value.validation.validators)("errors", t.formControl.errors)("resolvedContext", t.resolvedContext$.value);
} }
function Xe(n, p) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 2), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = p.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function Ye(n, p) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 4), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let o = e.\u0275\u0275restoreView(t).index, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.remove$.next(o)); }), e.\u0275\u0275text(3, "Remove"), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = p.$implicit, i = p.index, o = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("formControlName", i)("pluginName", t.contentPlugin)("settings", t.settings)("name", t.name)("label", t.label)("contexts", t.contexts)("panes", o.panes)("resolvedContext", t.resolvedContext)("indexPosition", i)("ancestory", o.ancestory);
} }
function Ze(n, p) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-error"), e.\u0275\u0275element(1, "druid-ordain-default-validation-error", 2), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("validators", t.formSettings$.value == null || t.formSettings$.value.validation == null ? null : t.formSettings$.value.validation.validators)("errors", t.formControl.errors)("resolvedContext", t.resolvedContext$.value);
} }
function et(n, p) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 9), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = p.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function tt(n, p) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-button", 2), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = p.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function it(n, p) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = p.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function nt(n, p) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-image-preview", 4), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("file", t)("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function ot(n, p) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-video-preview", 4), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("file", t)("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function rt(n, p) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-preview", 5), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function at(n, p) { if (n & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, nt, 3, 4, "ngx-dropzone-image-preview", 2)(2, ot, 3, 4, "ngx-dropzone-video-preview", 2)(3, rt, 3, 3, "ngx-dropzone-preview", 3), e.\u0275\u0275elementContainerEnd()), n & 2) {
    let t = p.$implicit, i = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.isType(t, "image")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.isType(t, "video")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !i.isType(t, "image") && !i.isType(t, "video"));
} }
var L = class {
    constructor(p) { p && (this.value = p.value ? p.value : "", p.datasourceBinding && typeof p.datasourceBinding == "object" && (this.datasourceBinding = new Oe(p.datasourceBinding)), p.datasourceOptions && typeof p.datasourceOptions == "object" && (this.datasourceOptions = new Ae(p.datasourceOptions)), p.validation && (this.validation = new J(p.validation))); }
}, te = class {
    constructor(p) { p && (this.valuesMapping = p.valuesMapping); }
}, I = (() => { class n {
    constructor(t, i, o, r) { this.tokenizerService = t, this.datasourceContentHandler = i, this.panelResolver = o, this.attributeSerializer = r; }
    resolveElementOptions(t, i) { return C(t).pipe(M(o => { if (o.datasourceBinding && o.datasourceBinding.id && o.datasourceBinding.id !== "") {
        let r = i.has("panes") ? i.get("panes").find(c => c.name === o.datasourceBinding.id) : void 0;
        return this.panelResolver.dataPanes(i.get("panes")).pipe(M(c => r ? this.datasourceContentHandler.fetchDynamicData(r.settings, new Map([...i, ["dataPanes", c]])) : C([])), y(c => [o, c.results]));
    }
    else
        return C([o, []]); }), y(([o, r]) => [o, o.datasourceOptions && o.datasourceOptions.query !== "" ? ie.JSONPath({ path: o.datasourceOptions.query, json: r }) : r]), M(([o, r]) => this.mapDataOptions(o, r))); }
    mapDataOptions(t, i) { return C([t, i]).pipe(y(([o, r]) => [o, r, r ? r.map(c => this.tokenizerService.generateGenericTokens(c)) : []]), y(([o, r, c]) => c.map(d => this.mapDataItem(o, d)))); }
    mapDataItem(t, i) { return new ke({ value: this.tokenizerService.replaceTokens(`${t.datasourceOptions.valueMapping}`, i), label: this.tokenizerService.replaceTokens(`${t.datasourceOptions.labelMapping}`, i), dataItem: void 0 }); }
    hasDataOptions(t) { return t.datasourceBinding && t.datasourceBinding.id && t.datasourceBinding.id !== ""; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(b.TokenizerService), e.\u0275\u0275inject(E.DatasourceContentHandler), e.\u0275\u0275inject(E.PanelResolverService), e.\u0275\u0275inject(h.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), _ = (() => { class n {
    constructor(t) { this.tokenizerService = t, this.cachedResolvedContexts = [], this.scheduleResolution$ = new $, this.scheduleResolutionSub = this.scheduleResolution$.pipe(V(({ resolvedContext: i, index: o }) => { let r = new Map; if (i)
        for (let c in i)
            i[c] instanceof Le || (r = new Map([...r, ...this.tokenizerService.generateGenericTokens(i[c], c === "_root" ? "" : c)])); this.cachedResolvedContexts[o].resolution$.next(r); })).subscribe(); }
    resolveContexts({ resolvedContext: t }) { let i = this.cachedResolvedContexts.findIndex(({ rContext: o }) => Ce.getDiff(o, t).length === 0); return i === -1 ? (console.log("resolved context no cache", t), i = this.cachedResolvedContexts.length, this.cachedResolvedContexts.push({ rContext: t, resolution$: new le }), this.scheduleResolution$.next({ resolvedContext: t, index: i })) : console.log("resolved context cache hit", t), this.cachedResolvedContexts[i].resolution$.pipe(me(1)); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(b.TokenizerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), j = (() => { class n {
    set label(t) { this.label$.next(t); }
    set settings(t) { this.settings$.next(t); }
    set panes(t) { this.panes$.next(t); }
    set originPanes(t) { this.originPanes$.next(t); }
    set contexts(t) { this.contexts$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    constructor(t, i, o, r, c, d) { this.attributeSerializer = t, this.optionsResolver = i, this.tokenizerService = o, this.formsContextHelper = r, this.vpm = c, this.controlContainer = d, this.formControl = new R(""), this.formControlValueChangesSub = this.formControl.valueChanges.pipe(A(s => console.log("serialized form value", this.attributeSerializer.serialize(s, "value"))), A(s => this.controlContainer.control.get("settings").setValue([this.attributeSerializer.serialize(s, "value")]))).subscribe(), this.formSettings$ = new F(void 0), this.settings$ = new F([]), this.options$ = new F([]), this.init$ = new $, this.afterViewInit$ = new $, this.panes$ = new F([]), this.originPanes$ = new F([]), this.contexts$ = new F([]), this.resolvedContext$ = new F(void 0), this.value$ = new $, this.label$ = new F(void 0), this.settingsSub = this.settings$.pipe(y(s => s ? this.settingsToObject(this.attributeSerializer.deserializeAsObject(s)) : void 0), A(s => this.formSettings$.next(s))).subscribe(), this.loadOptionsSub = B([this.formSettings$, this.panes$, this.originPanes$, this.contexts$, this.init$]).pipe(y(([s, l, m, f]) => ({ settings: s, metadata: new Map([["panes", [...l && Array.isArray(l) ? l : [], ...m && Array.isArray(m) ? m : []]], ["contexts", f]]) })), M(({ settings: s, metadata: l }) => this.optionsResolver.resolveElementOptions(s, l)), A(s => this.options$.next(s))).subscribe(), this.renderContentSub = B([this.formSettings$, this.resolvedContext$, this.afterViewInit$]).pipe(y(([s, l]) => ({ settings: s, resolvedContext: l })), M(({ settings: s, resolvedContext: l }) => this.formsContextHelper.resolveContexts({ resolvedContext: l }).pipe(y(m => ({ settings: s, tokens: m })))), M(({ settings: s, tokens: l }) => Y(s.validation && s.validation.validators ? s.validation.validators.map(m => this.vpm.getPlugin(m.validator).pipe(M(f => f.builder({ v: m, serialized: !1 }).pipe(y(S => ({ v: m, vf: S })))))) : []).pipe(y(m => ({ settings: s, tokens: l, validators: m })), ve({ settings: s, tokens: l, validators: [] }))), M(({ settings: s, tokens: l, validators: m }) => Y(s.validation && s.validation.validators ? s.validation.validators.map(f => this.vpm.getPlugin(f.validator).pipe(M(S => S.builder({ v: f, serialized: !0 }).pipe(y(H => ({ v: f, vf: H })))))) : []).pipe(y(f => ({ settings: s, tokens: l, validators: m, validatorsSerialized: f })), ve({ settings: s, tokens: l, validators: m, validatorsSerialized: [] }))), A(({ settings: s, tokens: l, validators: m, validatorsSerialized: f }) => { if (this.formControl.setAsyncValidators(m.map(({ vf: S }) => S)), this.controlContainer.control.get("settings").setAsyncValidators(f.map(({ vf: S }) => S)), this.formControl.updateValueAndValidity(), this.controlContainer.control.updateValueAndValidity(), l !== void 0 && (this.tokens = l), s.value && s.value !== null && s.value !== "") {
        (s.value.indexOf(".$i.") !== -1 || s.value.indexOf(".$j.") !== -1 || s.value.indexOf(".$k.") !== -1) && console.log(s.value, this.ancestory);
        let S = s.value.split("$i"), H = S.map((T, x) => this.ancestory[x * 1 + (3 + (x === 0 ? 0 : 3))]), U = S.reduce((T, x, P) => [...T, P === 0 ? "" : P - 1 < H.length ? `${H[P - 1]}` : "", x], []).join("");
        console.log("path", U);
        let Q = this.replaceTokens(U);
        this.formControl.setValue(Q);
        let q = this.tokenizerService.discoverTokens(Q, !0);
        if (q.length !== 0)
            if (q[0].trim().lastIndexOf(".id") === q[0].trim().length - 3) {
                let T = fe();
                this.formControl.setValue(T), this.value$.next(T);
            }
            else {
                let T = Array.from(l).filter(([x]) => x.indexOf(U.substr(1, U.length - 2)) === 0);
                if (T.length !== 0) {
                    let x = T.reduce((P, [re, _e]) => se(ae({}, P), { [re.substr(re.lastIndexOf(".") + 1)]: _e }), {});
                    this.formControl.setValue(x), this.value$.next(x);
                }
                else {
                    let x = this.tokenizerService.replaceTokens(s.value, new Map(Array.from(q).map(P => [P, ""])));
                    this.formControl.setValue(x), this.value$.next(x);
                }
            }
        else
            this.value$.next(Q);
    }
    else
        this.formControl.setValue(""); }), Ne(1)).subscribe(); }
    ngOnInit() { this.init$.next(void 0); }
    ngAfterViewInit() { this.afterViewInit$.next(void 0); }
    settingsToObject(t) { return new L(t); }
    replaceTokens(t) { return this.tokens !== void 0 && this.tokens.forEach((i, o) => { t = t.split(`[${o}]`).join(`${i}`); }), t; }
    markAsTouched() { this.formControl.markAllAsTouched(); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["", "druid-forms-form-element-base", ""]], inputs: { tokens: "tokens", label: "label", settings: "settings", panes: "panes", originPanes: "originPanes", contexts: "contexts", resolvedContext: "resolvedContext", ancestory: "ancestory" }, standalone: !1 }); }
} return n; })(), st = (() => { class n extends j {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-input"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 5, consts: [["matInput", "", 3, "formControl"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 0), e.\u0275\u0275template(5, Qe, 2, 3, "mat-error", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.formControl.invalid)); }, dependencies: [v.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, u.MatInput, u.MatFormField, u.MatLabel, u.MatError, g.DefaultValidationError, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), lt = (() => { class n extends j {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-select"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 7, consts: [[3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 0), e.\u0275\u0275template(5, Xe, 2, 2, "mat-option", 1), e.\u0275\u0275pipe(6, "async"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 5, o.options$))); }, dependencies: [v.NgForOf, a.NgControlStatus, a.FormControlDirective, k.MatOption, u.MatFormField, u.MatLabel, ne.MatSelect, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), ct = (() => { class n {
    set settings(t) { this.settings$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    set panel(t) { this.panel$.next(t); }
    get panesFormArray() { let t = this.controlContainer?.control; return t ? t.get("panes") : null; }
    constructor(t, i, o) { this.attributeSerializer = t, this.fb = i, this.controlContainer = o, this.panes = [], this.originMappings = [], this.ancestory = [], this.add$ = new $, this.remove$ = new $, this.settings$ = new F([]), this.resolvedContext$ = new F(null), this.panel$ = new F(null), this.afterViewInit$ = new $, this.destroy$ = new $; }
    ngOnInit() { this.add$.pipe(ee(this.destroy$)).subscribe(() => { let t = this.panes && this.panes.length > 0 ? new G(this.panes[0]) : new G; this.panes.push(t), this.syncFormArray(); }), this.remove$.pipe(ee(this.destroy$)).subscribe(t => { t > -1 && t < this.panes.length && (this.panes.splice(t, 1), this.syncFormArray()); }), B([this.settings$.pipe(y(t => t ? new te(this.attributeSerializer.deserializeAsObject(t)) : void 0)), this.resolvedContext$, this.panel$, this.afterViewInit$]).pipe(y(([t, i, o]) => { if (i && t?.valuesMapping?.trim()) {
        let r = t.valuesMapping.split("[$i]"), c = r.map((l, m) => this.ancestory[m * 1 + 3]), d = r.reduce((l, m, f) => [...l, f === 0 ? "" : f - 1 < c.length ? `[${c[f - 1]}]` : "", m], []).join("");
        return { items: ie.JSONPath({ path: `$.${d}.*`, json: i }) };
    } return { items: [] }; }), A(({ items: t }) => { if (t && t.length > this.panes.length) {
        let i = t.length - this.panes.length;
        for (let o = 0; o < i; o++) {
            let r = this.panes.length > 0 ? this.panes[0] : new G;
            this.panes.push(new G(r));
        }
        this.syncFormArray();
    } }), ee(this.destroy$)).subscribe(); }
    ngOnChanges(t) { t.panes && this.syncFormArray(); }
    ngAfterViewInit() { this.afterViewInit$.next(void 0); }
    ngOnDestroy() { this.destroy$.next(), this.destroy$.complete(); }
    syncFormArray() { let t = this.panesFormArray; if (!t || !this.panes)
        return; let i = this.panes.length, o = t.length; if (i > o)
        for (let r = o; r < i; r++)
            t.push(this.fb.control(""), { emitEvent: !1 });
    else if (i < o)
        for (let r = o - 1; r >= i; r--)
            t.removeAt(r, { emitEvent: !1 }); }
    trackByFn(t) { return t; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-form-section"]], inputs: { panes: "panes", originPanes: "originPanes", originMappings: "originMappings", ancestory: "ancestory", settings: "settings", resolvedContext: "resolvedContext", panel: "panel" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "panes"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "pluginName", "settings", "name", "label", "contexts", "panes", "resolvedContext", "indexPosition", "ancestory"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0)(1, 1), e.\u0275\u0275template(2, Ye, 4, 10, "div", 2), e.\u0275\u0275elementContainerEnd()(), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return o.add$.next(void 0); }), e.\u0275\u0275text(4, "Add Item"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", o.controlContainer.control), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", o.panes)); }, dependencies: [v.NgForOf, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, a.FormArrayName, ye.RenderPaneComponent], encapsulation: 2 }); }
} return n; })(), pt = (() => { class n extends j {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d), this.cols = 20, this.rows = 20; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-textarea"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 7, consts: [["matInput", "", 3, "formControl", "cols", "rows"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "textarea", 0), e.\u0275\u0275template(5, Ze, 2, 3, "mat-error", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 5, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl)("cols", o.cols)("rows", o.rows), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.formControl.invalid)); }, dependencies: [v.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, u.MatInput, u.MatFormField, u.MatLabel, u.MatError, g.DefaultValidationError, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), dt = (() => { class n {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return C([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return C(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    getBindings(t, i, o) { return i === "pane" ? this.toObject(t).pipe(M(r => pe(() => r.datasourceBinding && r.datasourceBinding.id && r.datasourceBinding.id !== null, C([r.datasourceBinding]), C([])))) : i === "context" ? C([]) : C([]); }
    fetchDynamicData(t, i) { return C(new Pe); }
    buildDynamicItems(t, i) { return C([]); }
    toObject(t) { return C(new L(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    stateDefinition(t) { return C({ autocomplete: { input: "" }, value: void 0 }); }
    editorOptions(t) { return C(new Te); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(h.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), Ie = (() => { class n extends dt {
    static { this.\u0275fac = (() => { let t; return function (o) { return (t || (t = e.\u0275\u0275getInheritedFactory(n)))(o || n); }; })(); }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), D = (() => { class n {
    get paneGroup() { return this.data.panelFormGroup.get("panes").at(this.paneIndex); }
    constructor(t, i, o, r, c) { this.data = t, this.dialogRef = i, this.fb = o, this.handler = r, this.attributeSerializer = c, this.datasourceOptions = Z, this.validation = new J({ validators: [] }), this.bindableOptions = [], this.formGroup = this.fb.group({ value: this.fb.control(""), datasourceOptions: this.fb.control(""), validation: this.fb.control(""), datasourceBinding: this.fb.group({ id: this.fb.control(""), type: this.fb.control("pane") }) }), this.paneIndex = t.paneIndex, this.pane = t.pane; }
    ngOnInit() { this.data.pane ? this.handler.toObject(this.data.pane.settings).subscribe(t => { console.log("Form Editor Data Pane Data", t), this.formGroup.patchValue({ value: t.value, datasourceOptions: t.datasourceOptions || Z, datasourceBinding: { id: t.datasourceBinding?.id || "", type: "pane" } }), this.datasourceOptions = t.datasourceOptions || Z, this.validation = t.validation ? new J(t.validation) : new J({ validators: [] }); }) : (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: this.data.plugin.id, name: new R(""), label: new R(""), rule: new R(""), settings: this.fb.array([]) })), this.paneIndex = this.data.panelFormGroup.get("panes").length - 1, this.pane = new G(this.data.panelFormGroup.get("panes").at(this.paneIndex).value)), this.bindableOptions = this.data.panelFormGroup.get("panes").controls.reduce((t, i) => i.get("name").value ? [...t, i.get("name").value] : t, []); }
    submit() { console.log(this.formGroup.value); let t = new L(this.formGroup.value); console.log("losing options debug", t), this.paneGroup.get("settings").clear(), this.handler.buildSettings(t).map(o => this.attributeSerializer.convertToGroup(o)).forEach(o => this.paneGroup.get("settings").push(o)), this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(be), e.\u0275\u0275directiveInject(z.MatDialogRef), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(Ie), e.\u0275\u0275directiveInject(h.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-element-editor"]], inputs: { bindableOptions: "bindableOptions" }, standalone: !1, decls: 17, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["fxLayout", "column"], ["matInput", "", "formControlName", "value"], ["formGroupName", "datasourceBinding"], ["required", "", "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "datasourceOptions"], ["formControlName", "validation", 3, "validation"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content", 1)(2, "div")(3, "mat-form-field")(4, "mat-label"), e.\u0275\u0275text(5, "Value"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label"), e.\u0275\u0275text(9, "Datasource"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-select", 4), e.\u0275\u0275template(11, et, 2, 2, "mat-option", 5), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(12, "classifieds-ui-datasource-options", 6)(13, "druid-ordain-validation-editor", 7), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "mat-dialog-actions")(15, "button", 8), e.\u0275\u0275text(16, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(11), e.\u0275\u0275property("ngForOf", o.bindableOptions), e.\u0275\u0275advance(2), e.\u0275\u0275property("validation", o.validation)); }, dependencies: [v.NgForOf, a.\u0275NgNoValidate, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, a.FormGroupName, k.MatOption, oe.MatButton, z.MatDialogClose, z.MatDialogActions, z.MatDialogContent, u.MatInput, u.MatFormField, u.MatLabel, ne.MatSelect, he.DatasourceOptionsComponent, g.ValidationEditorComponent], encapsulation: 2 }); }
} return n; })(), mt = (() => { class n extends j {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-radiogroup"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 7, consts: [[3, "formControl", "aria-label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-group", 0), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275template(2, tt, 2, 2, "mat-radio-button", 1), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275ariaProperty("aria-label", e.\u0275\u0275pipeBind1(1, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(3, 5, o.options$))); }, dependencies: [v.NgForOf, a.NgControlStatus, a.FormControlDirective, W.MatRadioGroup, W.MatRadioButton, v.AsyncPipe], encapsulation: 2 }); }
} return n; })(), ut = (() => { class n extends j {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-slider"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "formControl", "aria-label"], ["matSliderThumb", ""]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-slider", 0), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275element(2, "input", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275ariaProperty("aria-label", e.\u0275\u0275pipeBind1(1, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, K.MatSlider, K.MatSliderThumb, v.AsyncPipe], styles: ["mat-slider[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), ft = (() => { class n extends j {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-toggle"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 4, consts: [[1, "toggle-container"], [3, "formControl"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-slide-toggle", 1), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, Se.MatSlideToggle, v.AsyncPipe], styles: [".toggle-container[_ngcontent-%COMP%]{padding-bottom:1em}"] }); }
} return n; })(), vt = (() => { class n extends j {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-checkbox"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "formControl"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-checkbox", 0), e.\u0275\u0275text(1), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(2, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, xe.MatCheckbox, v.AsyncPipe], encapsulation: 2 }); }
} return n; })(), gt = (() => { class n extends j {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-datepicker"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 6, consts: [["picker", ""], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"]], template: function (i, o) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 2)(5, "mat-datepicker-toggle", 3)(6, "mat-datepicker", null, 0), e.\u0275\u0275elementEnd()), i & 2) {
            let r = e.\u0275\u0275reference(7);
            e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 4, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("matDatepicker", r)("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("for", r);
        } }, dependencies: [a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, N.MatDatepicker, N.MatDatepickerInput, N.MatDatepickerToggle, u.MatInput, u.MatFormField, u.MatLabel, u.MatSuffix, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), ht = (() => { class n extends j {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d), this.proxyControl = new R(""), this.optionSelected$ = new $, this.proxyControlValueChangesSub = this.proxyControl.valueChanges.pipe(Be(1e3), Ge(), Re(B([this.formSettings$, this.panes$, this.originPanes$, this.contexts$]).pipe(y(([s, l, m, f]) => ({ settings: s, panes: l, originPanes: m, contexts: f })))), y(([s, { settings: l, panes: m, originPanes: f, contexts: S }]) => ({ term: s, settings: l, metadata: new Map([["panes", [...m && Array.isArray(m) ? m : [], ...f && Array.isArray(f) ? f : []]], ["contexts", S], ["inputparams", new Map([["term", new qe({ flags: [], mapping: new Je({ value: s, testValue: s, type: "static", context: void 0 }) })]])]]) })), M(({ settings: s, metadata: l }) => this.optionsResolver.resolveElementOptions(s, l)), A(s => this.options$.next(s))).subscribe(), this.optionSelectedSub = this.optionSelected$.pipe(A(s => this.formControl.setValue(s.option && s.option.value ? s.option.value.value : ""))).subscribe(), this.displayAuto = s => s.label; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-autocomplete"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 9, consts: [["autocomplete", "matAutocomplete"], ["matInput", "", 3, "matAutocomplete", "formControl"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { if (i & 1) {
            let r = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 1), e.\u0275\u0275elementStart(5, "mat-autocomplete", 2, 0), e.\u0275\u0275listener("optionSelected", function (d) { return e.\u0275\u0275restoreView(r), e.\u0275\u0275resetView(o.optionSelected$.next(d)); }), e.\u0275\u0275template(7, it, 2, 2, "mat-option", 3), e.\u0275\u0275pipe(8, "async"), e.\u0275\u0275elementEnd()();
        } if (i & 2) {
            let r = e.\u0275\u0275reference(6);
            e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 5, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("matAutocomplete", r)("formControl", o.proxyControl), e.\u0275\u0275advance(), e.\u0275\u0275property("displayWith", o.displayAuto), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(8, 7, o.options$));
        } }, dependencies: [v.NgForOf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, k.MatAutocomplete, k.MatOption, k.MatAutocompleteTrigger, u.MatInput, u.MatFormField, u.MatLabel, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), Ct = (() => { class n extends j {
    constructor(t, i, o, r, c, d, s) { super(t, i, r, c, d, s), this.files = [], this.select$ = new $, this.selectSub = this.select$.pipe(V(l => console.log(l)), ce(l => this.filesService.bulkUpload({ files: [l.addedFiles[0]] }).pipe(X(m => ({ mfs: m, e: l })))), V(({ mfs: l }) => this.formControl.setValue(l[0])), V(({ e: l }) => this.files.push(...l.addedFiles))).subscribe(), this.valueSub = this.value$.pipe(de(l => typeof l == "object"), X(l => new We(l)), V(l => { console.log("populate value", l); }), ue(l => this.filesService.convertToFiles([l])), V(l => { console.log("populate as file", l), this.files = l; })).subscribe(), this.filesService = o; }
    onSelect(t) { this.select$.next(t); }
    onRemove(t) { console.log(t), this.formControl.setValue(""), this.files.splice(this.files.indexOf(t), 1); }
    isType(t, i) { switch (i) {
        case "image": return this.filesService.isImage({ file: t });
        case "video": return this.filesService.isVideo({ file: t });
        default: return !1;
    } }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(Fe.FilesService), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-media"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [[3, "change"], [4, "ngFor", "ngForOf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngIf"], [3, "removable", "removed", 4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "removed", "file", "removable"], [3, "removed", "removable"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "ngx-dropzone", 0), e.\u0275\u0275listener("change", function (c) { return o.onSelect(c); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2, "Drop it, baby!"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(3, at, 4, 3, "ng-container", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", o.files)); }, dependencies: [v.NgForOf, v.NgIf, O.NgxDropzoneComponent, O.NgxDropzoneLabelDirective, O.NgxDropzonePreviewComponent, O.NgxDropzoneImagePreviewComponent, O.NgxDropzoneVideoPreviewComponent], encapsulation: 2 }); }
} return n; })(), yt = (() => { class n extends j {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-hidden"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function (i, o) { }, encapsulation: 2 }); }
} return n; })(), bt = (() => { class n {
    constructor(t, i, o, r) { this.data = t, this.dialogRef = i, this.fb = o, this.attributeSerializer = r, this.contexts = [], this.formGroup = this.fb.group({ valuesMapping: this.fb.control("") }); }
    ngOnInit() { }
    submit() { this.data.panelFormGroup.get("settings").clear(), this.attributeSerializer.serialize(this.formGroup.value, "root").attributes.forEach(t => { console.log("formly repeating editor form"), console.log(this.attributeSerializer.convertToGroup(t)), this.data.panelFormGroup.get("settings").push(this.attributeSerializer.convertToGroup(t)); }); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(be), e.\u0275\u0275directiveInject(z.MatDialogRef), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(h.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-form-section-editor"]], standalone: !1, decls: 8, vars: 2, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "valuesMapping"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "div")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Values Mapping"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "button", 2), e.\u0275\u0275text(7, "Save"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(6), e.\u0275\u0275property("disabled", !o.formGroup.valid)); }, dependencies: [a.\u0275NgNoValidate, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, oe.MatButton, z.MatDialogClose, u.MatInput, u.MatFormField, u.MatLabel], encapsulation: 2 }); }
} return n; })(), St = ({ handler: n }) => new w({ id: "form_input", title: "Form Input", selectionComponent: void 0, editorComponent: D, renderComponent: st, handler: n }), xt = ({ handler: n }) => new w({ id: "form_select", title: "Form Select", selectionComponent: void 0, editorComponent: D, renderComponent: lt, handler: n }), Ft = ({ handler: n }) => new w({ id: "form_radiogroup", title: "Form Radiogroup", selectionComponent: void 0, editorComponent: D, renderComponent: mt, handler: n }), It = ({ handler: n }) => new w({ id: "form_textarea", title: "Form Textarea", selectionComponent: void 0, editorComponent: D, renderComponent: pt, handler: n }), _t = ({ handler: n }) => new w({ id: "form_slider", title: "Form Slider", selectionComponent: void 0, editorComponent: D, renderComponent: ut, handler: n }), $t = ({ handler: n }) => new w({ id: "form_toggle", title: "Form Toggle", selectionComponent: void 0, editorComponent: D, renderComponent: ft, handler: n }), Mt = ({ handler: n }) => new w({ id: "form_checkbox", title: "Form Checkbox", selectionComponent: void 0, editorComponent: D, renderComponent: vt, handler: n }), wt = ({ handler: n }) => new w({ id: "form_datepicker", title: "Form Datepicker", selectionComponent: void 0, editorComponent: D, renderComponent: gt, handler: n }), jt = ({ handler: n }) => new w({ id: "form_autocomplete", title: "Form Autocomplete", selectionComponent: void 0, editorComponent: D, renderComponent: ht, handler: n }), Dt = ({ handler: n }) => new w({ id: "form_media", title: "Form Media", selectionComponent: void 0, editorComponent: D, renderComponent: Ct, handler: n }), zt = ({ handler: n }) => new w({ id: "form_hidden", title: "Form Hidden", selectionComponent: void 0, editorComponent: D, renderComponent: yt, handler: n }), Ot = () => new He({ id: "form_section", name: "form_section", title: "Form Section", editorComponent: bt, renderComponent: ct }), ti = (() => { class n {
    constructor(t, i, o) { [St({ handler: o }), xt({ handler: o }), It({ handler: o }), Ft({ handler: o }), _t({ handler: o }), $t({ handler: o }), Mt({ handler: o }), wt({ handler: o }), jt({ handler: o }), Dt({ handler: o }), zt({ handler: o })].forEach(r => t.register(r)), [Ot()].forEach(r => i.register(r)); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(ge.ContentPluginManager), e.\u0275\u0275inject(E.StylePluginManager), e.\u0275\u0275inject(Ie)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [we, je, De, ze, Ue, Ve, Ke, Ee] }); }
} return n; })();
export { dt as AbstractFormContentHandler, ht as FormAutocompleteComponent, vt as FormCheckboxComponent, gt as FormDatepickerComponent, j as FormElementBase, D as FormElementEditorComponent, Ie as FormElementHandler, yt as FormHiddenComponent, st as FormInputComponent, Ct as FormMediaComponent, mt as FormRadiogroupComponent, ct as FormSectionComponent, bt as FormSectionEditorComponent, lt as FormSelectComponent, ut as FormSliderComponent, pt as FormTextareaComponent, ft as FormToggleComponent, ti as FormsModule, I as OptionsResolverService };
