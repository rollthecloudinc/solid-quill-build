import { a as je } from "@nf-internal/chunk-EOHDPEXE";
import { a as ve } from "@nf-internal/chunk-VJMH5IEE";
import { g as Z, i as de } from "@nf-internal/chunk-FYX6O4YR";
import { D as Y, H as G, I as pe, P as me, k as j, l as I, m as ce, ma as ue, pb as fe, vb as N, z as y } from "@nf-internal/chunk-STIBVO4O";
import { a as se, b as le, g as we } from "@nf-internal/chunk-2AVGQ2MQ";
import * as v from "@angular/common";
import { CommonModule as De } from "@angular/common";
import * as e from "@angular/core";
import "@angular/core";
import * as a from "@angular/forms";
import { UntypedFormControl as L, FormsModule as ze, ReactiveFormsModule as Oe } from "@angular/forms";
import { MaterialModule as Te } from "@rollthecloudinc/material";
import * as he from "@rollthecloudinc/content";
import { ContentBinding as Ae, ContentPluginEditorOptions as ke, ContentPlugin as M } from "@rollthecloudinc/content";
import * as Ce from "@rollthecloudinc/datasource";
import { DatasourceOptions as Ve, SelectOption as Pe, Dataset as Ee, mockDatasourceOptions as ee, DatasourceModule as Ne } from "@rollthecloudinc/datasource";
import * as g from "@rollthecloudinc/ordain";
import { FormValidation as W, OrdainModule as Be } from "@rollthecloudinc/ordain";
import { switchMap as D, map as b, tap as k, defaultIfEmpty as ge, take as Ge, takeUntil as te, debounceTime as Re, distinctUntilChanged as Le, withLatestFrom as He } from "rxjs/operators";
var ne = we(je(), 1);
import * as h from "@rollthecloudinc/attributes";
import * as x from "@rollthecloudinc/token";
import * as V from "@rollthecloudinc/panels";
import { PanelPageForm as Ue, Pane as R, StylePlugin as Je } from "@rollthecloudinc/panels";
import * as ye from "recursive-diff";
import * as f from "@angular/material/input";
import * as P from "@angular/material/autocomplete";
import * as oe from "@angular/material/select";
import * as be from "@rollthecloudinc/render";
import { RenderModule as qe } from "@rollthecloudinc/render";
import * as O from "@angular/material/dialog";
import { MAT_DIALOG_DATA as xe } from "@angular/material/dialog";
import * as re from "@angular/material/button";
import * as K from "@angular/material/radio";
import * as Q from "@angular/material/slider";
import * as Se from "@angular/material/slide-toggle";
import * as Fe from "@angular/material/checkbox";
import * as B from "@angular/material/datepicker";
import { Param as We, Mapping as Ke } from "@rollthecloudinc/dparam";
import * as _e from "@rollthecloudinc/media";
import { MediaFile as Qe } from "@rollthecloudinc/media";
import * as T from "ngx-dropzone";
import { NgxDropzoneModule as Xe } from "ngx-dropzone";
import * as X from "@angular/material/chips";
function Ye(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-error"), e.\u0275\u0275element(1, "druid-ordain-default-validation-error", 2), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("validators", t.formSettings$.value == null || t.formSettings$.value.validation == null ? null : t.formSettings$.value.validation.validators)("errors", t.formControl.errors)("resolvedContext", t.resolvedContext$.value);
} }
function Ze(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 2), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function et(n, d) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 4), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let o = e.\u0275\u0275restoreView(t).index, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.remove$.next(o)); }), e.\u0275\u0275text(3, "Remove"), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = d.$implicit, i = d.index, o = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("formControlName", i)("pluginName", t.contentPlugin)("settings", t.settings)("name", t.name)("label", t.label)("contexts", t.contexts)("panes", o.panes)("resolvedContext", t.resolvedContext)("indexPosition", i)("ancestory", o.ancestory);
} }
function tt(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-error"), e.\u0275\u0275element(1, "druid-ordain-default-validation-error", 2), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("validators", t.formSettings$.value == null || t.formSettings$.value.validation == null ? null : t.formSettings$.value.validation.validators)("errors", t.formControl.errors)("resolvedContext", t.resolvedContext$.value);
} }
function it(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 9), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function nt(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-button", 2), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function ot(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function rt(n, d) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-image-preview", 4), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("file", t)("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function at(n, d) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-video-preview", 4), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("file", t)("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function st(n, d) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-preview", 5), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function lt(n, d) { if (n & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, rt, 3, 4, "ngx-dropzone-image-preview", 2)(2, at, 3, 4, "ngx-dropzone-video-preview", 2)(3, st, 3, 3, "ngx-dropzone-preview", 3), e.\u0275\u0275elementContainerEnd()), n & 2) {
    let t = d.$implicit, i = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.isType(t, "image")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.isType(t, "video")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !i.isType(t, "image") && !i.isType(t, "video"));
} }
function ct(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-chip-option", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t.label, " ");
} }
var H = class {
    constructor(d) { d && (this.value = d.value ? d.value : "", d.datasourceBinding && typeof d.datasourceBinding == "object" && (this.datasourceBinding = new Ae(d.datasourceBinding)), d.datasourceOptions && typeof d.datasourceOptions == "object" && (this.datasourceOptions = new Ve(d.datasourceOptions)), d.validation && (this.validation = new W(d.validation))); }
}, ie = class {
    constructor(d) { d && (this.valuesMapping = d.valuesMapping); }
}, S = (() => { class n {
    constructor(t, i, o, r) { this.tokenizerService = t, this.datasourceContentHandler = i, this.panelResolver = o, this.attributeSerializer = r; }
    resolveElementOptions(t, i) { return y(t).pipe(D(o => { if (o.datasourceBinding && o.datasourceBinding.id && o.datasourceBinding.id !== "") {
        let r = i.has("panes") ? i.get("panes").find(c => c.name === o.datasourceBinding.id) : void 0;
        return this.panelResolver.dataPanes(i.get("panes")).pipe(D(c => r ? this.datasourceContentHandler.fetchDynamicData(r.settings, new Map([...i, ["dataPanes", c]])) : y([])), b(c => [o, c.results]));
    }
    else
        return y([o, []]); }), b(([o, r]) => [o, o.datasourceOptions && o.datasourceOptions.query !== "" ? ne.JSONPath({ path: o.datasourceOptions.query, json: r }) : r]), D(([o, r]) => this.mapDataOptions(o, r))); }
    mapDataOptions(t, i) { return y([t, i]).pipe(b(([o, r]) => [o, r, r ? r.map(c => this.tokenizerService.generateGenericTokens(c)) : []]), b(([o, r, c]) => c.map(p => this.mapDataItem(o, p)))); }
    mapDataItem(t, i) { return new Pe({ value: this.tokenizerService.replaceTokens(`${t.datasourceOptions.valueMapping}`, i), label: this.tokenizerService.replaceTokens(`${t.datasourceOptions.labelMapping}`, i), dataItem: void 0 }); }
    hasDataOptions(t) { return t.datasourceBinding && t.datasourceBinding.id && t.datasourceBinding.id !== ""; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(x.TokenizerService), e.\u0275\u0275inject(V.DatasourceContentHandler), e.\u0275\u0275inject(V.PanelResolverService), e.\u0275\u0275inject(h.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), F = (() => { class n {
    constructor(t, i) { this.tokenizerService = t, this.formService = i, this.cachedResolvedContexts = [], this.scheduleResolution$ = new j, this.scheduleResolutionSub = this.scheduleResolution$.pipe(N(({ resolvedContext: o, index: r }) => { let c = new Map; if (o)
        for (let p in o)
            if (!(o[p] instanceof Ue))
                c = new Map([...c, ...this.tokenizerService.generateGenericTokens(o[p], p === "_root" ? "" : p)]);
            else {
                let s = this.formService.serializeForm(o[p]);
                c = new Map([...c, ...this.tokenizerService.generateGenericTokens(s, p === "_root" ? "" : p)]);
            } this.cachedResolvedContexts[r].resolution$.next(c); })).subscribe(); }
    resolveContexts({ resolvedContext: t }) { let i = this.cachedResolvedContexts.findIndex(({ rContext: o }) => ye.getDiff(o, t).length === 0); return i === -1 ? (console.log("resolved context no cache", t), i = this.cachedResolvedContexts.length, this.cachedResolvedContexts.push({ rContext: t, resolution$: new ce(1) }), this.scheduleResolution$.next({ resolvedContext: t, index: i })) : console.log("resolved context cache hit", t), this.cachedResolvedContexts[i].resolution$.pipe(ue(1)); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(x.TokenizerService), e.\u0275\u0275inject(V.FormService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), $ = (() => { class n {
    set label(t) { this.label$.next(t); }
    set settings(t) { this.settings$.next(t); }
    set panes(t) { this.panes$.next(t); }
    set originPanes(t) { this.originPanes$.next(t); }
    set contexts(t) { this.contexts$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    constructor(t, i, o, r, c, p) { this.attributeSerializer = t, this.optionsResolver = i, this.tokenizerService = o, this.formsContextHelper = r, this.vpm = c, this.controlContainer = p, this.formControl = new L(""), this.formControlValueChangesSub = this.formControl.valueChanges.pipe(k(s => console.log("serialized form value", this.attributeSerializer.serialize(s, "value"))), k(s => this.controlContainer.control.get("settings").setValue([this.attributeSerializer.serialize(s, "value")]))).subscribe(), this.formSettings$ = new I(void 0), this.settings$ = new I([]), this.options$ = new I([]), this.init$ = new j, this.afterViewInit$ = new j, this.panes$ = new I([]), this.originPanes$ = new I([]), this.contexts$ = new I([]), this.resolvedContext$ = new I(void 0), this.value$ = new j, this.label$ = new I(void 0), this.settingsSub = this.settings$.pipe(b(s => s ? this.settingsToObject(this.attributeSerializer.deserializeAsObject(s)) : void 0), k(s => this.formSettings$.next(s))).subscribe(), this.loadOptionsSub = G([this.formSettings$, this.panes$, this.originPanes$, this.contexts$, this.init$]).pipe(b(([s, l, m, u]) => ({ settings: s, metadata: new Map([["panes", [...l && Array.isArray(l) ? l : [], ...m && Array.isArray(m) ? m : []]], ["contexts", u]]) })), D(({ settings: s, metadata: l }) => this.optionsResolver.resolveElementOptions(s, l)), k(s => this.options$.next(s))).subscribe(), this.renderContentSub = G([this.formSettings$, this.resolvedContext$, this.afterViewInit$]).pipe(b(([s, l]) => ({ settings: s, resolvedContext: l })), D(({ settings: s, resolvedContext: l }) => this.formsContextHelper.resolveContexts({ resolvedContext: l }).pipe(b(m => ({ settings: s, tokens: m })))), D(({ settings: s, tokens: l }) => Z(s.validation && s.validation.validators ? s.validation.validators.map(m => this.vpm.getPlugin(m.validator).pipe(D(u => u.builder({ v: m, serialized: !1 }).pipe(b(C => ({ v: m, vf: C })))))) : []).pipe(b(m => ({ settings: s, tokens: l, validators: m })), ge({ settings: s, tokens: l, validators: [] }))), D(({ settings: s, tokens: l, validators: m }) => Z(s.validation && s.validation.validators ? s.validation.validators.map(u => this.vpm.getPlugin(u.validator).pipe(D(C => C.builder({ v: u, serialized: !0 }).pipe(b(z => ({ v: u, vf: z })))))) : []).pipe(b(u => ({ settings: s, tokens: l, validators: m, validatorsSerialized: u })), ge({ settings: s, tokens: l, validators: m, validatorsSerialized: [] }))), k(({ settings: s, tokens: l, validators: m, validatorsSerialized: u }) => { if (this.formControl.setAsyncValidators(m.map(({ vf: C }) => C)), this.controlContainer.control.get("settings").setAsyncValidators(u.map(({ vf: C }) => C)), this.formControl.updateValueAndValidity(), this.controlContainer.control.updateValueAndValidity(), l !== void 0 && (this.tokens = l), s.value && s.value !== null && s.value !== "") {
        (s.value.indexOf(".$i.") !== -1 || s.value.indexOf(".$j.") !== -1 || s.value.indexOf(".$k.") !== -1) && console.log(s.value, this.ancestory);
        let C = s.value.split("$i"), z = C.map((A, _) => this.ancestory[_ * 1 + (3 + (_ === 0 ? 0 : 3))]), U = C.reduce((A, _, E) => [...A, E === 0 ? "" : E - 1 < z.length ? `${z[E - 1]}` : "", _], []).join("");
        console.log("path", U);
        let { resolvedValue: J, remainingExpression: Me } = this.replaceTokens(U, l);
        if (J !== void 0) {
            this.formControl.setValue(J), this.value$.next(J);
            return;
        }
        let q = this.tokenizerService.discoverTokens(Me, !0);
        if (q.length !== 0)
            if (q[0].trim().lastIndexOf(".id") === q[0].trim().length - 3) {
                let A = ve();
                this.formControl.setValue(A), this.value$.next(A);
            }
            else {
                let A = Array.from(l).filter(([_]) => _.indexOf(U.substr(1, U.length - 2)) === 0);
                if (A.length !== 0) {
                    let _ = A.reduce((E, [ae, $e]) => le(se({}, E), { [ae.substr(ae.lastIndexOf(".") + 1)]: $e }), {});
                    this.formControl.setValue(_), this.value$.next(_);
                }
                else {
                    let _ = this.tokenizerService.replaceTokens(s.value, new Map(Array.from(q).map(E => [E, ""])));
                    this.formControl.setValue(_), this.value$.next(_);
                }
            }
        else
            this.value$.next(J);
    }
    else
        this.formControl.setValue(""); }), Ge(1)).subscribe(); }
    ngOnInit() { this.init$.next(void 0); }
    ngAfterViewInit() { this.afterViewInit$.next(void 0); }
    settingsToObject(t) { return new H(t); }
    replaceTokens(t, i) { if (!t)
        return { resolvedValue: t, remainingExpression: "" }; let o = t, r = !1, c = [], p = []; i.forEach((u, C) => { let z = `[${C}]`; t.includes(z) && c.push(z); }), c.forEach(u => { let C = u.substring(1, u.length - 1), z = i.get(C); z !== void 0 && (r = !0, o = o.split(u).join(JSON.stringify(z))); }); let s = o.match(/(\[(?:\[??[^\[]*?\]))/g); s && p.push(...s); let l = t; if (c.forEach(u => { let C = u.substring(1, u.length - 1); i.has(C) && (l = l.replace(u, "")); }), l = l.trim(), !r)
        return { resolvedValue: void 0, remainingExpression: l }; let m = o; try {
        m = JSON.parse(o);
    }
    catch { } return { resolvedValue: m, remainingExpression: l }; }
    markAsTouched() { this.formControl.markAllAsTouched(); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["", "druid-forms-form-element-base", ""]], inputs: { tokens: "tokens", label: "label", settings: "settings", panes: "panes", originPanes: "originPanes", contexts: "contexts", resolvedContext: "resolvedContext", ancestory: "ancestory" }, standalone: !1 }); }
} return n; })(), pt = (() => { class n extends $ {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-input"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 5, consts: [["matInput", "", 3, "formControl"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 0), e.\u0275\u0275template(5, Ye, 2, 3, "mat-error", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.formControl.invalid)); }, dependencies: [v.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, f.MatInput, f.MatFormField, f.MatLabel, f.MatError, g.DefaultValidationError, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), dt = (() => { class n extends $ {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-select"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 7, consts: [[3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 0), e.\u0275\u0275template(5, Ze, 2, 2, "mat-option", 1), e.\u0275\u0275pipe(6, "async"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 5, o.options$))); }, dependencies: [v.NgForOf, a.NgControlStatus, a.FormControlDirective, P.MatOption, f.MatFormField, f.MatLabel, oe.MatSelect, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), mt = (() => { class n {
    set settings(t) { this.settings$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    set panel(t) { this.panel$.next(t); }
    get panesFormArray() { let t = this.controlContainer?.control; return t ? t.get("panes") : null; }
    constructor(t, i, o) { this.attributeSerializer = t, this.fb = i, this.controlContainer = o, this.panes = [], this.originMappings = [], this.ancestory = [], this.add$ = new j, this.remove$ = new j, this.settings$ = new I([]), this.resolvedContext$ = new I(null), this.panel$ = new I(null), this.afterViewInit$ = new j, this.destroy$ = new j; }
    ngOnInit() { this.add$.pipe(te(this.destroy$)).subscribe(() => { let t = this.panes && this.panes.length > 0 ? new R(this.panes[0]) : new R; this.panes.push(t), this.syncFormArray(); }), this.remove$.pipe(te(this.destroy$)).subscribe(t => { t > -1 && t < this.panes.length && (this.panes.splice(t, 1), this.syncFormArray()); }), G([this.settings$.pipe(b(t => t ? new ie(this.attributeSerializer.deserializeAsObject(t)) : void 0)), this.resolvedContext$, this.panel$, this.afterViewInit$]).pipe(b(([t, i, o]) => { if (i && t?.valuesMapping?.trim()) {
        let r = t.valuesMapping.split("[$i]"), c = r.map((l, m) => this.ancestory[m * 1 + 3]), p = r.reduce((l, m, u) => [...l, u === 0 ? "" : u - 1 < c.length ? `[${c[u - 1]}]` : "", m], []).join("");
        return { items: ne.JSONPath({ path: `$.${p}.*`, json: i }) };
    } return { items: [] }; }), k(({ items: t }) => { if (t && t.length > this.panes.length) {
        let i = t.length - this.panes.length;
        for (let o = 0; o < i; o++) {
            let r = this.panes.length > 0 ? this.panes[0] : new R;
            this.panes.push(new R(r));
        }
        this.syncFormArray();
    } }), te(this.destroy$)).subscribe(); }
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
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-form-section"]], inputs: { panes: "panes", originPanes: "originPanes", originMappings: "originMappings", ancestory: "ancestory", settings: "settings", resolvedContext: "resolvedContext", panel: "panel" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "panes"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "pluginName", "settings", "name", "label", "contexts", "panes", "resolvedContext", "indexPosition", "ancestory"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0)(1, 1), e.\u0275\u0275template(2, et, 4, 10, "div", 2), e.\u0275\u0275elementContainerEnd()(), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return o.add$.next(void 0); }), e.\u0275\u0275text(4, "Add Item"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", o.controlContainer.control), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", o.panes)); }, dependencies: [v.NgForOf, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, a.FormArrayName, be.RenderPaneComponent], encapsulation: 2 }); }
} return n; })(), ut = (() => { class n extends $ {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p), this.cols = 20, this.rows = 20; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-textarea"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 7, consts: [["matInput", "", 3, "formControl", "cols", "rows"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "textarea", 0), e.\u0275\u0275template(5, tt, 2, 3, "mat-error", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 5, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl)("cols", o.cols)("rows", o.rows), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.formControl.invalid)); }, dependencies: [v.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, f.MatInput, f.MatFormField, f.MatLabel, f.MatError, g.DefaultValidationError, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), ft = (() => { class n {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return y([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return y(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    getBindings(t, i, o) { return i === "pane" ? this.toObject(t).pipe(D(r => de(() => r.datasourceBinding && r.datasourceBinding.id && r.datasourceBinding.id !== null, y([r.datasourceBinding]), y([])))) : i === "context" ? y([]) : y([]); }
    fetchDynamicData(t, i) { return y(new Ee); }
    buildDynamicItems(t, i) { return y([]); }
    toObject(t) { return y(new H(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    stateDefinition(t) { return y({ autocomplete: { input: "" }, value: void 0 }); }
    editorOptions(t) { return y(new ke); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(h.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), Ie = (() => { class n extends ft {
    static { this.\u0275fac = (() => { let t; return function (o) { return (t || (t = e.\u0275\u0275getInheritedFactory(n)))(o || n); }; })(); }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), w = (() => { class n {
    get paneGroup() { return this.data.panelFormGroup.get("panes").at(this.paneIndex); }
    constructor(t, i, o, r, c) { this.data = t, this.dialogRef = i, this.fb = o, this.handler = r, this.attributeSerializer = c, this.datasourceOptions = ee, this.validation = new W({ validators: [] }), this.bindableOptions = [], this.formGroup = this.fb.group({ value: this.fb.control(""), datasourceOptions: this.fb.control(""), validation: this.fb.control(""), datasourceBinding: this.fb.group({ id: this.fb.control(""), type: this.fb.control("pane") }) }), this.paneIndex = t.paneIndex, this.pane = t.pane; }
    ngOnInit() { this.data.pane ? this.handler.toObject(this.data.pane.settings).subscribe(t => { console.log("Form Editor Data Pane Data", t), this.formGroup.patchValue({ value: t.value, datasourceOptions: t.datasourceOptions || ee, datasourceBinding: { id: t.datasourceBinding?.id || "", type: "pane" } }), this.datasourceOptions = t.datasourceOptions || ee, this.validation = t.validation ? new W(t.validation) : new W({ validators: [] }); }) : (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: this.data.plugin.id, name: new L(""), label: new L(""), rule: new L(""), settings: this.fb.array([]) })), this.paneIndex = this.data.panelFormGroup.get("panes").length - 1, this.pane = new R(this.data.panelFormGroup.get("panes").at(this.paneIndex).value)), this.bindableOptions = this.data.panelFormGroup.get("panes").controls.reduce((t, i) => i.get("name").value ? [...t, i.get("name").value] : t, []); }
    submit() { console.log(this.formGroup.value); let t = new H(this.formGroup.value); console.log("losing options debug", t), this.paneGroup.get("settings").clear(), this.handler.buildSettings(t).map(o => this.attributeSerializer.convertToGroup(o)).forEach(o => this.paneGroup.get("settings").push(o)), this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(xe), e.\u0275\u0275directiveInject(O.MatDialogRef), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(Ie), e.\u0275\u0275directiveInject(h.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-element-editor"]], inputs: { bindableOptions: "bindableOptions" }, standalone: !1, decls: 17, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["fxLayout", "column"], ["matInput", "", "formControlName", "value"], ["formGroupName", "datasourceBinding"], ["required", "", "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "datasourceOptions"], ["formControlName", "validation", 3, "validation"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content", 1)(2, "div")(3, "mat-form-field")(4, "mat-label"), e.\u0275\u0275text(5, "Value"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label"), e.\u0275\u0275text(9, "Datasource"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-select", 4), e.\u0275\u0275template(11, it, 2, 2, "mat-option", 5), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(12, "classifieds-ui-datasource-options", 6)(13, "druid-ordain-validation-editor", 7), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "mat-dialog-actions")(15, "button", 8), e.\u0275\u0275text(16, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(11), e.\u0275\u0275property("ngForOf", o.bindableOptions), e.\u0275\u0275advance(2), e.\u0275\u0275property("validation", o.validation)); }, dependencies: [v.NgForOf, a.\u0275NgNoValidate, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, a.FormGroupName, P.MatOption, re.MatButton, O.MatDialogClose, O.MatDialogActions, O.MatDialogContent, f.MatInput, f.MatFormField, f.MatLabel, oe.MatSelect, Ce.DatasourceOptionsComponent, g.ValidationEditorComponent], encapsulation: 2 }); }
} return n; })(), vt = (() => { class n extends $ {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-radiogroup"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 7, consts: [[3, "formControl", "aria-label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-group", 0), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275template(2, nt, 2, 2, "mat-radio-button", 1), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275ariaProperty("aria-label", e.\u0275\u0275pipeBind1(1, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(3, 5, o.options$))); }, dependencies: [v.NgForOf, a.NgControlStatus, a.FormControlDirective, K.MatRadioGroup, K.MatRadioButton, v.AsyncPipe], encapsulation: 2 }); }
} return n; })(), gt = (() => { class n extends $ {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-slider"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "formControl", "aria-label"], ["matSliderThumb", ""]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-slider", 0), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275element(2, "input", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275ariaProperty("aria-label", e.\u0275\u0275pipeBind1(1, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, Q.MatSlider, Q.MatSliderThumb, v.AsyncPipe], styles: ["mat-slider[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), ht = (() => { class n extends $ {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-toggle"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 4, consts: [[1, "toggle-container"], [3, "formControl"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-slide-toggle", 1), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, Se.MatSlideToggle, v.AsyncPipe], styles: [".toggle-container[_ngcontent-%COMP%]{padding-bottom:1em}"] }); }
} return n; })(), Ct = (() => { class n extends $ {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-checkbox"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "formControl"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-checkbox", 0), e.\u0275\u0275text(1), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(2, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, Fe.MatCheckbox, v.AsyncPipe], encapsulation: 2 }); }
} return n; })(), yt = (() => { class n extends $ {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-datepicker"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 6, consts: [["picker", ""], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"]], template: function (i, o) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 2)(5, "mat-datepicker-toggle", 3)(6, "mat-datepicker", null, 0), e.\u0275\u0275elementEnd()), i & 2) {
            let r = e.\u0275\u0275reference(7);
            e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 4, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("matDatepicker", r)("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("for", r);
        } }, dependencies: [a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, B.MatDatepicker, B.MatDatepickerInput, B.MatDatepickerToggle, f.MatInput, f.MatFormField, f.MatLabel, f.MatSuffix, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), bt = (() => { class n extends $ {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p), this.proxyControl = new L(""), this.optionSelected$ = new j, this.proxyControlValueChangesSub = this.proxyControl.valueChanges.pipe(Re(1e3), Le(), He(G([this.formSettings$, this.panes$, this.originPanes$, this.contexts$]).pipe(b(([s, l, m, u]) => ({ settings: s, panes: l, originPanes: m, contexts: u })))), b(([s, { settings: l, panes: m, originPanes: u, contexts: C }]) => ({ term: s, settings: l, metadata: new Map([["panes", [...m && Array.isArray(m) ? m : [], ...u && Array.isArray(u) ? u : []]], ["contexts", C], ["inputparams", new Map([["term", new We({ flags: [], mapping: new Ke({ value: s, testValue: s, type: "static", context: void 0 }) })]])]]) })), D(({ settings: s, metadata: l }) => this.optionsResolver.resolveElementOptions(s, l)), k(s => this.options$.next(s))).subscribe(), this.optionSelectedSub = this.optionSelected$.pipe(k(s => this.formControl.setValue(s.option && s.option.value ? s.option.value.value : ""))).subscribe(), this.displayAuto = s => s.label; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-autocomplete"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 9, consts: [["autocomplete", "matAutocomplete"], ["matInput", "", 3, "matAutocomplete", "formControl"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { if (i & 1) {
            let r = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 1), e.\u0275\u0275elementStart(5, "mat-autocomplete", 2, 0), e.\u0275\u0275listener("optionSelected", function (p) { return e.\u0275\u0275restoreView(r), e.\u0275\u0275resetView(o.optionSelected$.next(p)); }), e.\u0275\u0275template(7, ot, 2, 2, "mat-option", 3), e.\u0275\u0275pipe(8, "async"), e.\u0275\u0275elementEnd()();
        } if (i & 2) {
            let r = e.\u0275\u0275reference(6);
            e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 5, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("matAutocomplete", r)("formControl", o.proxyControl), e.\u0275\u0275advance(), e.\u0275\u0275property("displayWith", o.displayAuto), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(8, 7, o.options$));
        } }, dependencies: [v.NgForOf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, P.MatAutocomplete, P.MatOption, P.MatAutocompleteTrigger, f.MatInput, f.MatFormField, f.MatLabel, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), xt = (() => { class n extends $ {
    constructor(t, i, o, r, c, p, s) { super(t, i, r, c, p, s), this.files = [], this.select$ = new j, this.selectSub = this.select$.pipe(N(l => console.log(l)), pe(l => this.filesService.bulkUpload({ files: [l.addedFiles[0]] }).pipe(Y(m => ({ mfs: m, e: l })))), N(({ mfs: l }) => this.formControl.setValue(l[0])), N(({ e: l }) => this.files.push(...l.addedFiles))).subscribe(), this.valueSub = this.value$.pipe(me(l => typeof l == "object"), Y(l => new Qe(l)), N(l => { console.log("populate value", l); }), fe(l => this.filesService.convertToFiles([l])), N(l => { console.log("populate as file", l), this.files = l; })).subscribe(), this.filesService = o; }
    onSelect(t) { this.select$.next(t); }
    onRemove(t) { console.log(t), this.formControl.setValue(""), this.files.splice(this.files.indexOf(t), 1); }
    isType(t, i) { switch (i) {
        case "image": return this.filesService.isImage({ file: t });
        case "video": return this.filesService.isVideo({ file: t });
        default: return !1;
    } }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(_e.FilesService), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-media"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [[3, "change"], [4, "ngFor", "ngForOf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngIf"], [3, "removable", "removed", 4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "removed", "file", "removable"], [3, "removed", "removable"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "ngx-dropzone", 0), e.\u0275\u0275listener("change", function (c) { return o.onSelect(c); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2, "Drop it, baby!"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(3, lt, 4, 3, "ng-container", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", o.files)); }, dependencies: [v.NgForOf, v.NgIf, T.NgxDropzoneComponent, T.NgxDropzoneLabelDirective, T.NgxDropzonePreviewComponent, T.NgxDropzoneImagePreviewComponent, T.NgxDropzoneVideoPreviewComponent], encapsulation: 2 }); }
} return n; })(), St = (() => { class n extends $ {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-hidden"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function (i, o) { }, encapsulation: 2 }); }
} return n; })(), Ft = (() => { class n {
    constructor(t, i, o, r) { this.data = t, this.dialogRef = i, this.fb = o, this.attributeSerializer = r, this.contexts = [], this.formGroup = this.fb.group({ valuesMapping: this.fb.control("") }); }
    ngOnInit() { }
    submit() { this.data.panelFormGroup.get("settings").clear(), this.attributeSerializer.serialize(this.formGroup.value, "root").attributes.forEach(t => { console.log("formly repeating editor form"), console.log(this.attributeSerializer.convertToGroup(t)), this.data.panelFormGroup.get("settings").push(this.attributeSerializer.convertToGroup(t)); }); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(xe), e.\u0275\u0275directiveInject(O.MatDialogRef), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(h.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-form-section-editor"]], standalone: !1, decls: 8, vars: 2, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "valuesMapping"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "div")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Values Mapping"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "button", 2), e.\u0275\u0275text(7, "Save"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(6), e.\u0275\u0275property("disabled", !o.formGroup.valid)); }, dependencies: [a.\u0275NgNoValidate, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, re.MatButton, O.MatDialogClose, f.MatInput, f.MatFormField, f.MatLabel], encapsulation: 2 }); }
} return n; })(), _t = (() => { class n extends $ {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(x.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-listbox"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 7, consts: [[1, "form-listbox"], [1, "form-listbox-label"], ["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "label", 1), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-chip-listbox", 2), e.\u0275\u0275template(5, ct, 2, 2, "mat-chip-option", 3), e.\u0275\u0275pipe(6, "async"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 5, o.options$))); }, dependencies: [v.NgForOf, a.NgControlStatus, a.FormControlDirective, X.MatChipListbox, X.MatChipOption, v.AsyncPipe], styles: [".form-listbox[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.form-listbox-label[_ngcontent-%COMP%]{font-size:12px;color:#0009}"] }); }
} return n; })(), It = ({ handler: n }) => new M({ id: "form_input", title: "Form Input", selectionComponent: void 0, editorComponent: w, renderComponent: pt, handler: n }), Mt = ({ handler: n }) => new M({ id: "form_select", title: "Form Select", selectionComponent: void 0, editorComponent: w, renderComponent: dt, handler: n }), $t = ({ handler: n }) => new M({ id: "form_listbox", title: "Form Listbox", selectionComponent: void 0, editorComponent: w, renderComponent: _t, handler: n }), wt = ({ handler: n }) => new M({ id: "form_radiogroup", title: "Form Radiogroup", selectionComponent: void 0, editorComponent: w, renderComponent: vt, handler: n }), jt = ({ handler: n }) => new M({ id: "form_textarea", title: "Form Textarea", selectionComponent: void 0, editorComponent: w, renderComponent: ut, handler: n }), Dt = ({ handler: n }) => new M({ id: "form_slider", title: "Form Slider", selectionComponent: void 0, editorComponent: w, renderComponent: gt, handler: n }), zt = ({ handler: n }) => new M({ id: "form_toggle", title: "Form Toggle", selectionComponent: void 0, editorComponent: w, renderComponent: ht, handler: n }), Ot = ({ handler: n }) => new M({ id: "form_checkbox", title: "Form Checkbox", selectionComponent: void 0, editorComponent: w, renderComponent: Ct, handler: n }), Tt = ({ handler: n }) => new M({ id: "form_datepicker", title: "Form Datepicker", selectionComponent: void 0, editorComponent: w, renderComponent: yt, handler: n }), At = ({ handler: n }) => new M({ id: "form_autocomplete", title: "Form Autocomplete", selectionComponent: void 0, editorComponent: w, renderComponent: bt, handler: n }), kt = ({ handler: n }) => new M({ id: "form_media", title: "Form Media", selectionComponent: void 0, editorComponent: w, renderComponent: xt, handler: n }), Vt = ({ handler: n }) => new M({ id: "form_hidden", title: "Form Hidden", selectionComponent: void 0, editorComponent: w, renderComponent: St, handler: n }), Pt = () => new Je({ id: "form_section", name: "form_section", title: "Form Section", editorComponent: Ft, renderComponent: mt }), ai = (() => { class n {
    constructor(t, i, o) { [It({ handler: o }), Mt({ handler: o }), jt({ handler: o }), wt({ handler: o }), Dt({ handler: o }), zt({ handler: o }), Ot({ handler: o }), Tt({ handler: o }), At({ handler: o }), kt({ handler: o }), Vt({ handler: o }), $t({ handler: o })].forEach(r => t.register(r)), [Pt()].forEach(r => i.register(r)); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(he.ContentPluginManager), e.\u0275\u0275inject(V.StylePluginManager), e.\u0275\u0275inject(Ie)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [De, ze, Oe, Te, qe, Ne, Xe, Be] }); }
} return n; })();
export { ft as AbstractFormContentHandler, bt as FormAutocompleteComponent, Ct as FormCheckboxComponent, yt as FormDatepickerComponent, $ as FormElementBase, w as FormElementEditorComponent, Ie as FormElementHandler, St as FormHiddenComponent, pt as FormInputComponent, _t as FormListboxComponent, xt as FormMediaComponent, vt as FormRadiogroupComponent, mt as FormSectionComponent, Ft as FormSectionEditorComponent, dt as FormSelectComponent, gt as FormSliderComponent, ut as FormTextareaComponent, ht as FormToggleComponent, ai as FormsModule, S as OptionsResolverService };
