import { a as Ct } from "@nf-internal/chunk-EOHDPEXE";
import { a as Q } from "@nf-internal/chunk-VJMH5IEE";
import { g as x, i as $ } from "@nf-internal/chunk-FYX6O4YR";
import { b as Oe, f as be, k as Ne, l as K, z as m } from "@nf-internal/chunk-STIBVO4O";
import { a as v, b as S, e as xt, g as Ae } from "@nf-internal/chunk-2AVGQ2MQ";
var ze = xt((Se, Ee) => {
    (function (n, s) { typeof define == "function" && define.amd ? define([], s) : typeof Se == "object" ? Ee.exports = s() : n.CSSJSON = s(); })(Se, function () {
        var n = new function () {
            var s = this;
            s.init = function () { String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, ""); }, String.prototype.repeat = function (b) { return new Array(1 + b).join(this); }; }, s.init();
            var e = /([^\s\;\{\}][^\;\{\}]*)\{/g, t = /\}/g, a = /([^\;\{\}]*)\;/g, o = /\/\*[\s\S]*?\*\//g, l = /([^\:]+):([^\;]*);/, c = /(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gmi, u = 1, p = 2, d = 3, g = 4, w = function (b) { return typeof b > "u" || b.length == 0 || b == null; };
            s.toJSON = function (b, I) { var P = { children: {}, attributes: {} }, C = null, E = 0; if (typeof I > "u")
                var I = { ordered: !1, comments: !1, stripComments: !1, split: !1 }; for (I.stripComments && (I.comments = !1, b = b.replace(o, "")); (C = c.exec(b)) != null;)
                if (!w(C[u]) && I.comments) {
                    var ne = C[u].trim();
                    P[E++] = ne;
                }
                else if (w(C[p]))
                    if (w(C[d])) {
                        if (!w(C[g])) {
                            var Te = C[g].trim(), Pe = l.exec(Te);
                            if (Pe) {
                                var j = Pe[1].trim(), ye = Pe[2].trim();
                                if (I.ordered) {
                                    var z = {};
                                    z.name = j, z.value = ye, z.type = "attr", P[E++] = z;
                                }
                                else if (j in P.attributes) {
                                    var ke = P.attributes[j];
                                    ke instanceof Array || (P.attributes[j] = [ke]), P.attributes[j].push(ye);
                                }
                                else
                                    P.attributes[j] = ye;
                            }
                            else
                                P[E++] = Te;
                        }
                    }
                    else
                        return P;
                else {
                    var j = C[p].trim(), ce = s.toJSON(b, I);
                    if (I.ordered) {
                        var z = {};
                        z.name = j, z.value = ce, z.type = "rule", P[E++] = z;
                    }
                    else {
                        if (I.split)
                            var ge = j.split(",");
                        else
                            var ge = [j];
                        for (i in ge) {
                            var ve = ge[i].trim();
                            if (ve in P.children)
                                for (var _e in ce.attributes)
                                    P.children[ve].attributes[_e] = ce.attributes[_e];
                            else
                                P.children[ve] = ce;
                        }
                    }
                } return P; }, s.toCSS = function (b, I, P) {
                var C = "";
                if (typeof I > "u" && (I = 0), typeof P > "u" && (P = !1), b.attributes)
                    for (i in b.attributes) {
                        var E = b.attributes[i];
                        if (E instanceof Array)
                            for (var ne = 0; ne < E.length; ne++)
                                C += R(i, E[ne], I);
                        else
                            C += R(i, E, I);
                    }
                if (b.children) {
                    var j = !0;
                    for (i in b.children)
                        P && !j ? C += `
` : j = !1, C += te(i, b.children[i], I);
                }
                return C;
            };
            var R = function (b, I, P) {
                return "	".repeat(P) + b + ": " + I + `;
`;
            }, te = function (b, I, P) {
                var C = "	".repeat(P) + b + ` {
`;
                return C += s.toCSS(I, P + 1), C += "	".repeat(P) + `}
`, C;
            };
        };
        return n;
    });
});
import * as L from "@angular/common";
import { isPlatformServer as we, CommonModule as Mt } from "@angular/common";
import * as r from "@angular/core";
import { forwardRef as Be, InjectionToken as Ke, PLATFORM_ID as jt } from "@angular/core";
import * as O from "@ngrx/data";
import { DefaultPluralizer as $t, Pluralizer as Dt } from "@ngrx/data";
import * as y from "@angular/forms";
import { NG_VALUE_ACCESSOR as Ft, NG_VALIDATORS as _t, UntypedFormControl as M, Validators as W, UntypedFormArray as Tt, FormsModule as kt, ReactiveFormsModule as At } from "@angular/forms";
import { map as f, switchMap as h, filter as Qe, defaultIfEmpty as Ie, catchError as We, concatMap as Ot, tap as F, take as se } from "rxjs/operators";
import * as N from "@rollthecloudinc/attributes";
import { AttributeValue as q } from "@rollthecloudinc/attributes";
import * as Ye from "@rollthecloudinc/context";
import { InlineContext as re } from "@rollthecloudinc/context";
import { PersistenceFormPayload as Ze } from "@rollthecloudinc/refinery";
import { InteractionsFormPayload as Nt } from "@rollthecloudinc/detour";
import * as U from "@rollthecloudinc/datasource";
import { Datasource as $e, Dataset as et, DatasourceModule as Et } from "@rollthecloudinc/datasource";
import * as de from "@rollthecloudinc/content";
import { ContentPluginEditorOptions as tt, ContentBinding as zt, ContentPlugin as nt, CONTENT_PLUGIN as xe } from "@rollthecloudinc/content";
import * as it from "@angular/material/autocomplete";
import * as st from "@angular/material/input";
import * as rt from "@angular/material/select";
import * as at from "@rollthecloudinc/utils";
import { SITE_NAME as ot, NoopDataService as Bt } from "@rollthecloudinc/utils";
import { MaterialModule as Rt } from "@rollthecloudinc/material";
var Vt = Ae(ze(), 1), Fe = Ae(Ct(), 1);
import * as lt from "@angular/material/bottom-sheet";
import * as fe from "@angular/material/dialog";
import { MAT_DIALOG_DATA as Gt } from "@angular/material/dialog";
import * as ct from "@angular/material/grid-list";
import * as me from "@angular/material/list";
import * as Z from "@angular/material/tabs";
import * as pt from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as Lt, PublicApiBridgeService as Ut } from "@rollthecloudinc/bridge";
import * as he from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as ci, CrudDataService as Ce, CrudModule as Ht } from "@rollthecloudinc/crud";
import * as De from "@rollthecloudinc/rules";
import { Aws3Module as qt } from "@rollthecloudinc/aws3";
import { AwosModule as Jt } from "@rollthecloudinc/awos";
import { AuthModule as Xt } from "@rollthecloudinc/auth";
import * as ut from "@ngrx/effects";
import { createEffect as Kt, ofType as Qt, EffectsModule as Wt } from "@ngrx/effects";
import * as dt from "@ngrx/store";
import { createAction as J, props as X, createReducer as Yt, on as ie, StoreModule as Zt, createFeatureSelector as en, createSelector as H, select as Y } from "@ngrx/store";
import * as ft from "@rollthecloudinc/snippet";
import * as mt from "@rollthecloudinc/plugin";
import { BasePluginManager as tn, PluginDef as nn, Plugin as sn } from "@rollthecloudinc/plugin";
import { DataSource as rn } from "@angular/cdk/collections";
import an from "deepmerge-json";
import { pluralize as on } from "inflected";
function ln(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 5), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1("panel page | level: ", e);
} }
function cn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 3), r.\u0275\u0275template(2, ln, 2, 2, "mat-option", 4), r.\u0275\u0275pipe(3, "async"), r.\u0275\u0275elementEnd()()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(2), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(3, 1, e.panelPages$));
} }
function pn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 5), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1("panel | ", e);
} }
function un(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 6), r.\u0275\u0275template(2, pn, 2, 2, "mat-option", 4), r.\u0275\u0275pipe(3, "async"), r.\u0275\u0275elementEnd()()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(2), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(3, 1, e.panels$));
} }
function dn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 5), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1("pane | ", e);
} }
function fn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 7), r.\u0275\u0275template(2, dn, 2, 2, "mat-option", 4), r.\u0275\u0275pipe(3, "async"), r.\u0275\u0275elementEnd()()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(2), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(3, 1, e.panes$));
} }
function mn(n, s) { if (n & 1 && r.\u0275\u0275element(0, "druid-panels-panelpage-linkedlist", 8), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275property("panelPages", e.nested);
} }
function hn(n, s) { if (n & 1) {
    let e = r.\u0275\u0275getCurrentView();
    r.\u0275\u0275elementStart(0, "a", 2), r.\u0275\u0275listener("click", function () { let a = r.\u0275\u0275restoreView(e).$implicit, o = r.\u0275\u0275nextContext(2); return r.\u0275\u0275resetView(o.onItemSelect(a.id)); }), r.\u0275\u0275elementStart(1, "span", 6), r.\u0275\u0275text(2), r.\u0275\u0275elementEnd()();
} if (n & 2) {
    let e = s.$implicit;
    r.\u0275\u0275advance(2), r.\u0275\u0275textInterpolate2("", e.title, " [", e.id, "]");
} }
function gn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-nav-list"), r.\u0275\u0275template(1, hn, 3, 2, "a", 5), r.\u0275\u0275pipe(2, "async"), r.\u0275\u0275elementEnd()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(2, 1, e.panels$));
} }
var vn = (n, s) => ({ PanelPageListItem: { entityName: "PanelPageListItem", crud: S(v({}, we(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }), { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }) }, PanelPage: { entityName: "PanelPage", crud: v(S(v({ save: { ops: ["create", "update"], plugin: "rest", params: { entityName: "PanelPage" } } }, we(n) ? {} : { readPrimary: { fallback: !0, ops: ["create", "update", "query"], plugin: "idb_keyval", params: { prefix: "panelpage__" } } }), { readFallback: { fallback: !0, ops: ["query"], plugin: "rest", params: { entityName: "PanelPage", root: s.objectsRootUrl, suffix: ".json" } } }), we(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" } } }) }, PanelPageState: { entityName: "PanelPageState" } }), Re = class {
    constructor(s) { this.readUserIds = [], s && (this.title = s.title, this.name = s.name, this.path = s.path, this.cssFile = s.cssFile, s.readUserIds && (this.readUserIds = s.readUserIds.map(e => e))); }
}, Ge = class {
    constructor(s) { s && (this.label = s.label, this.name = s.name); }
}, Le = class {
    constructor(s) { s && (this.label = s.label, this.name = s.name); }
}, ae = class {
    constructor(s) { this.panels = [], s && (this.id = s.id, this.name = s.name, this.title = s.title, this.derivativeId = s.derivativeId, this.valid = !!s.valid, s.persistence && (this.persistence = new Ze(s.persistence)), s.panels && (this.panels = s.panels.map(e => new oe(e)))); }
}, oe = class {
    constructor(s) { this.panes = [], s && (this.name = s.name, this.label = s.label, s.panes && (this.panes = s.panes.map(e => new le(e)))); }
}, le = class {
    constructor(s) { this.settings = [], s && (this.name = s.name, this.label = s.label, this.contentPlugin = s.contentPlugin, s.settings && (this.settings = s.settings.map(e => new q(e)))); }
}, Ue = class {
    constructor(s) { s && (this.name = s.name, this.field = s.field); }
}, Me = class {
    constructor(s) { s && (this.route = s.route, s.datasource && (this.datasource = new $e(s.datasource))); }
}, He = class {
    constructor(s) { s && (this.openSearchDomain = s.openSearchDomain, this.s3Bucket = s.s3Bucket, this.objectsRootUrl = s.objectsRootUrl); }
}, D = class {
    constructor(s) { this.gridItems = [], this.panels = [], this.contexts = [], this.rowSettings = [], this.entityPermissions = new ue, s && (this.id = s.id, this.layoutType = s.layoutType, this.displayType = s.displayType, this.name = s.name ? s.name : void 0, this.title = s.title ? s.title : void 0, this.site = s.site ? s.site : void 0, this.userId = s.userId ? s.userId : void 0, this.path = s.path ? s.path : void 0, this.persistence = s.persistence ? new Ze(s.persistence) : void 0, this.interactions = s.interactions ? new Nt(s.interactions) : void 0, this.prerender = s.prerender ? new Me(s.prerender) : void 0, s.panels && (this.panels = s.panels.map(e => new V(e))), s.gridItems && (this.gridItems = s.gridItems.map(e => new pe(e))), s.contexts && (this.contexts = s.contexts.map(e => new re(e))), s.layoutSetting && (this.layoutSetting = new T(s.layoutSetting)), s.rowSettings && Array.isArray(s.rowSettings) && (this.rowSettings = s.rowSettings.map(e => new T(e))), s.entityPermissions && (this.entityPermissions = new ue(s.entityPermissions)), s.cssFile && (this.cssFile = s.cssFile)); }
}, Ve = class extends D {
}, qe = class {
    constructor(s) { this.gridItems = [], s && (this.id = s.id, this.site = s.site, s.gridItems && (this.gridItems = s.gridItems.map(e => new pe(e)))); }
}, V = class {
    constructor(s) { this.settings = [], this.panes = [], s && (this.name = s.name ? s.name : void 0, this.label = s.label ? s.label : void 0, this.stylePlugin = s.stylePlugin, s.settings && (this.settings = s.settings.map(e => new q(e))), s.panes && (this.panes = s.panes.map(e => new B(e))), s.columnSetting && (this.columnSetting = new T(s.columnSetting))); }
}, B = class {
    constructor(s) { this.settings = [], this.locked = !1, this.contexts = [], s && (this.name = s.name, this.label = s.label, this.contentPlugin = s.contentPlugin, this.locked = s.locked !== void 0 ? s.locked : !1, s.linkedPageId && (this.linkedPageId = s.linkedPageId), s.metadata !== void 0 && (this.metadata = new Map([...s.metadata])), s.settings !== void 0 && (this.settings = s.settings.map(e => new q(e))), s.contexts !== void 0 && (this.contexts = s.contexts.map(e => new re(e))), s.rule !== void 0 && typeof s.rule != "string" && (this.rule = v({}, s.rule)), s.nestedPage && (this.nestedPage = new D(s.nestedPage)), s.resolvedContext && (this.resolvedContext = v({}, s.resolvedContext))); }
}, pe = class {
    constructor(s) { s && (this.cols = s.cols, this.rows = s.rows, this.x = s.x, this.y = s.y, this.weight = s.weight); }
}, T = class {
    constructor(s) { this.settings = [], s && s.settings && Array.isArray(s.settings) && (this.settings = s.settings.map(e => new q(e))); }
}, ue = class {
    constructor(s) { this.readUserIds = [], this.writeUserIds = [], this.deleteUserIds = [], s && (this.readUserIds = s.readUserIds ? s.readUserIds.map(e => e) : [], this.writeUserIds = s.writeUserIds ? s.writeUserIds.map(e => e) : [], this.deleteUserIds = s.deleteUserIds ? s.deleteUserIds.map(e => e) : []); }
}, A = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    handleFile(e) { return m(); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(e) { return m(!1); }
    isDynamic(e) { return !1; }
    isData(e) { return !1; }
    buildDynamicItems(e, t) { return m([]); }
    fetchDynamicData(e, t) { return m(new et); }
    getBindings(e, t) { return m([]); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new B(this.attributeSerializer.deserialize(t))); }
    wrapPanel(e) { return new V({ stylePlugin: void 0, settings: [], panes: e, columnSetting: new T }); }
    stateDefinition(e) { return m({}); }
    editorOptions(e) { return m(new tt); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(N.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), yi = (() => { class n {
    set panelPages(e) { this.panelPages$.next(e); }
    set panels(e) { this.panels$.next(e); }
    set panes(e) { this.panes$.next(e); }
    get panelPages() { return this.panelPages$.value && Array.isArray(this.panelPages$.value) ? this.panelPages$.value : []; }
    get panels() { return this.panels$.value && Array.isArray(this.panels$.value) ? this.panels$.value : []; }
    get panes() { return this.panes$.value && Array.isArray(this.panes$.value) ? this.panes$.value : []; }
    get nested() { return this.nested$.value && typeof this.nested$.value !== void 0 && this.nested$.value.length > 0 ? [...this.nested$.value] : void 0; }
    constructor(e, t) { this.fb = e, this.panelHandler = t, this.panelPages$ = new K([]), this.panels$ = new K([]), this.panes$ = new K([]), this.nested$ = new K([]), this.formGroup = this.fb.group({ panelPage: this.fb.control(void 0), panel: this.fb.control(void 0), pane: this.fb.control(void 0), nested: this.fb.control(void 0) }), this.panelPageSub = this.formGroup.get("panelPage").valueChanges.subscribe(a => { this.panels$.next(new D(this.panelPages$.value[a]).panels); }), this.panelSub = this.formGroup.get("panel").valueChanges.subscribe(a => { this.panes$.next(new V(this.panels$.value[a]).panes); }), this.paneSub = this.formGroup.get("pane").valueChanges.pipe(f(a => this.panes$.value[a]), h(a => $(() => a.contentPlugin === "panel", this.panelHandler.toObject(a.settings), m(void 0))), Qe(a => !!a)).subscribe(a => { this.nested$.next([a]); }), this.onTouched = () => { }; }
    writeValue(e) { e && this.formGroup.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.formGroup.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(e) { return this.formGroup.valid ? null : { invalidForm: { valid: !1 } }; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(y.UntypedFormBuilder), r.\u0275\u0275directiveInject(A)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["druid-panels-panelpage-linkedlist"]], inputs: { panelPages: "panelPages", panels: "panels", panes: "panes" }, standalone: !1, features: [r.\u0275\u0275ProvidersFeature([{ provide: Ft, useExisting: Be(() => n), multi: !0 }, { provide: _t, useExisting: Be(() => n), multi: !0 }])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "nested", 3, "panelPages", 4, "ngIf"], ["required", "", "formControlName", "panelPage"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["required", "", "formControlName", "panel"], ["required", "", "formControlName", "pane"], ["formControlName", "nested", 3, "panelPages"]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "div", 0), r.\u0275\u0275template(1, cn, 4, 3, "mat-form-field", 1)(2, un, 4, 3, "mat-form-field", 1)(3, fn, 4, 3, "mat-form-field", 1)(4, mn, 1, 1, "druid-panels-panelpage-linkedlist", 2), r.\u0275\u0275elementEnd()), t & 2 && (r.\u0275\u0275property("formGroup", a.formGroup), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.panelPages.length > 0), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.panels.length > 0), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.panes.length > 0), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.nested)); }, dependencies: [L.NgForOf, L.NgIf, y.NgControlStatus, y.NgControlStatusGroup, y.RequiredValidator, y.FormGroupDirective, y.FormControlName, it.MatOption, st.MatFormField, rt.MatSelect, n, L.AsyncPipe], encapsulation: 2 }); }
} return n; })(), Pn = (() => { class n {
    constructor(e, t, a, o, l, c) { this.siteName = e, this.bottomSheetRef = t, this.handler = a, this.dialog = o, this.fb = l, this.selectedIndex = 0, this.panelPagesService = c.getEntityCollectionService("PanelPage"), this.panelPageListItemsService = c.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { }
    onNewSelect() { let e = Q(), t = new D({ id: void 0, layoutType: "split", displayType: "page", site: this.siteName, gridItems: [], panels: [], layoutSetting: new T, rowSettings: [] }); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new M(""), settings: this.fb.array(this.handler.buildSettings(t).map(a => this.convertToGroup(a))) })), this.bottomSheetRef.dismiss(); }
    onLinkSelect() { this.selectedIndex = 1, this.panels$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(this.siteName)}`); }
    onEmbedSelect() { let e = Q(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new M(""), locked: new M(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onItemSelect(e) { let t = Q(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: t, label: t, rule: new M(""), linkedPageId: new M(e, W.required), locked: new M(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    convertToGroup(e) { let t = this.fb.group({ name: new M(e.name, W.required), type: new M(e.type, W.required), displayName: new M(e.displayName, W.required), value: new M(e.value, W.required), computedValue: new M(e.value, W.required), attributes: new Tt([]) }); return e.attributes && e.attributes.length > 0 && e.attributes.forEach(a => { t.get("attributes").push(this.convertToGroup(a)); }), t; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(ot), r.\u0275\u0275directiveInject(lt.MatBottomSheetRef), r.\u0275\u0275directiveInject(A), r.\u0275\u0275directiveInject(fe.MatDialog), r.\u0275\u0275directiveInject(y.UntypedFormBuilder), r.\u0275\u0275directiveInject(O.EntityServices)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-selector"]], inputs: { panelFormGroup: "panelFormGroup" }, standalone: !1, decls: 11, vars: 1, consts: [["mat-align-tabs", "start", 3, "selectedIndex"], ["label", "Type"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["label", "Search"], ["matTabContent", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-line", ""]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "mat-nav-list")(3, "a", 2), r.\u0275\u0275listener("click", function () { return a.onNewSelect(); }), r.\u0275\u0275text(4, "New Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(5, "a", 2), r.\u0275\u0275listener("click", function () { return a.onLinkSelect(); }), r.\u0275\u0275text(6, "Link Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(7, "a", 2), r.\u0275\u0275listener("click", function () { return a.onEmbedSelect(); }), r.\u0275\u0275text(8, "Embed Panel"), r.\u0275\u0275elementEnd()()(), r.\u0275\u0275elementStart(9, "mat-tab", 3), r.\u0275\u0275template(10, gn, 3, 3, "ng-template", 4), r.\u0275\u0275elementEnd()()), t & 2 && r.\u0275\u0275property("selectedIndex", a.selectedIndex); }, dependencies: [L.NgForOf, ct.MatLine, me.MatNavList, me.MatListItem, Z.MatTabContent, Z.MatTab, Z.MatTabGroup, L.AsyncPipe], encapsulation: 2 }); }
} return n; })(), yn = (() => { class n {
    constructor() { }
    ngOnInit() { }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-editor"]], standalone: !1, decls: 2, vars: 0, template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "p"), r.\u0275\u0275text(1, "panel-editor works!"), r.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return n; })(), _ = class {
    constructor(s) { this.panels = [], s && (this.id = s.id, s.panels !== void 0 && Array.isArray(s.panels) && (this.panels = s.panels.map(e => new G(e)))); }
}, G = class {
    constructor(s) { this.panes = [], s && s.panes !== void 0 && Array.isArray(s.panes) && (this.panes = s.panes.map(e => new k(e))); }
}, k = class {
    constructor(s) { s && (s.state !== void 0 && (this.state = new q(s.state)), s.nestedPage !== void 0 && s.nestedPage !== null && (this.nestedPage = new _(s.nestedPage))); }
}, ht = (() => { class n {
    constructor(e, t, a, o, l, c) { this.siteName = e, this.panelHandler = t, this.attributeSerializer = a, this.rulesResolver = o, this.dpm = l, this.datasourceEvalutator = c; }
    handleFile(e) { return m([]); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(e) { return m(!1); }
    isDynamic(e) { return !0; }
    isData(e) { return !0; }
    fetchDynamicData(e, t) { let a = t.has("dataPanes") ? new Map(t.get("dataPanes").map(l => [l.name, l])) : new Map([]), o = new Map(Array.from(a).map(([l, c]) => [l, new $e(this.attributeSerializer.deserializeAsObject(c.settings))])); return this.toObject(e).pipe(h(l => this.datasourceEvalutator.evalDatasource({ datasource: l, metadata: t, datasources: o }))); }
    buildDynamicItems(e, t) { let a = new Map(t.get("dataPanes").map(o => [o.name, o])); return this.fetchDynamicData(e, t).pipe(h(o => this.toObject(e).pipe(f(l => [l, o]))), h(([o, l]) => this.getBindings(e, "pane").pipe(f(c => [o, l, c]))), h(([o, l, c]) => $(() => l.results.length !== 0 && c.length > 0, x(l.results.map(u => x(c.filter(p => !a.has(p.id)).map(p => m(t.get("panes").find(d => d.name === p.id)).pipe(h(d => $(() => d && d.rule && d.rule !== null && d.rule.condition !== "", d ? this.rulesResolver.evaluate(d.rule, [...t.get("contexts"), ...d.contexts !== void 0 ? d.contexts : [], new re({ name: "_root", adaptor: "data", data: u })]).pipe(f(g => [d, g])) : m([d, !1]), m(!1).pipe(f(g => [d, g])))), Qe(([d, g]) => g), f(([d, g]) => d.name), Ie(p.id)))).pipe(f(p => p.reduce((d, g) => [...d, g], []))))).pipe(f(u => [o, l, u])), new be(u => { u.next([o, l, []]), u.complete(); }))), f(([o, l, c]) => l.results.reduce((u, p, d) => [...u, ...c[d] ? c[d].map(g => new B(S(v({}, t.get("panes").find(w => w.name === g)), { rule: void 0, label: Q(), contexts: [...t.get("contexts"), new re({ name: "_root", adaptor: "data", data: p })] }))) : []], [])), f(o => new V({ stylePlugin: void 0, settings: [], panes: o, columnSetting: new T })), f(o => this.panelHandler.buildSettings(new D({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new T, rowSettings: [], panels: [o] }))), f(o => o.find(l => l.name === "panels").attributes[0].attributes.find(l => l.name === "panes").attributes)); }
    getBindings(e, t, a) { let o = a ? new Map(a.get("dataPanes").map(l => [l.name, l])) : new Map; return t === "context" ? this.toObject(e).pipe(f(l => [l, l.params ? l.params.reduce((c, u) => [...c, ...u.mapping.type === "form" ? [new zt({ id: `form__${u.mapping.value.split(".", 2)[0].trim()}`, type: "context" })] : []], []) : []]), h(([l, c]) => this.dpm.getPlugin(l.plugin).pipe(h(u => u.getBindings({ settings: l.settings, metadata: a }).pipe(f(p => [l, p]))))), h(([l, c]) => x(l.renderer.bindings.reduce((u, p) => [...u, ...o.has(p.id) ? [this.toObject(o.get(p.id).settings)] : []], [])).pipe(h(u => x(u.map(p => this.dpm.getPlugin(p.plugin).pipe(h(d => d.getBindings({ settings: p.settings, metadata: a }))))).pipe(f(p => p.reduce((d, g) => [...d, ...g], c)), Ie(c))), Ie(c)))) : this.toObject(e).pipe(h(l => $(() => l.renderer.type === t, m(l.renderer.bindings), m([])))); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    getRenderType(e) { let t = [e.find(a => a.name === "renderer")].map(a => a.attributes.find(o => o.name === "type")); return t.length > 0 ? t[0].value : void 0; }
    stateDefinition(e) { return m({ autocomplete: { input: "" }, loading: "y" }); }
    editorOptions(e) { return this.toObject(e).pipe(h(t => this.dpm.getPlugin(t && t.plugin ? t.plugin : "data").pipe(f(a => [t, a]))), h(([t, a]) => a.editorOptions ? a.editorOptions({ settings: t && t.settings ? t.settings : [] }) : m(void 0)), f(t => new tt({ fullscreen: t ? t.fullscreen : !1 }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(ot), r.\u0275\u0275inject(A), r.\u0275\u0275inject(N.AttributeSerializerService), r.\u0275\u0275inject(De.RulesResolverService), r.\u0275\u0275inject(U.DatasourcePluginManager), r.\u0275\u0275inject(U.DatasourceEvaluator)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), bn = (() => { class n {
    constructor(e, t, a, o, l) { this.data = e, this.dialogRef = t, this.fb = a, this.attributeSerializer = o, this.datasourceHandler = l, this.datasource = new $e, this.bindableOptions = [], this.contexts = [], this.formGroup = this.fb.group({ source: this.fb.control("") }); }
    ngOnInit() { let e = this.data.panelFormGroup.get("panes"); if (this.bindableOptions = e.controls.reduce((t, a) => a.get("name").value ? [...t, a.get("name").value] : [...t], []), this.contexts = this.data.contexts.map(t => t.name), this.data.panelIndex !== void 0 && this.data.paneIndex < e.length) {
        let t = e.at(this.data.paneIndex).get("settings").value.map(a => new q(a));
        this.datasourceHandler.toObject(t).subscribe(a => { this.datasource = a; });
    } }
    onSubmit() { let e = this.attributeSerializer.serialize(this.formGroup.value.source, "source"), t = this.data.panelFormGroup.get("panes").at(this.data.paneIndex); this.data.paneIndex === void 0 ? (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "datasource", name: new M(""), label: new M(""), rule: new M(""), settings: this.fb.array(e.attributes.map(a => this.attributeSerializer.convertToGroup(a))) })), console.log(this.data.panelFormGroup.get("panes").value)) : (t.get("settings").clear(), e.attributes.forEach(a => t.get("settings").push(this.attributeSerializer.convertToGroup(a)))), this.dialogRef.close(); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(Gt), r.\u0275\u0275directiveInject(fe.MatDialogRef), r.\u0275\u0275directiveInject(y.UntypedFormBuilder), r.\u0275\u0275directiveInject(N.AttributeSerializerService), r.\u0275\u0275directiveInject(ht)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-datasource-editor"]], standalone: !1, decls: 4, vars: 4, consts: [[3, "ngSubmit", "formGroup"], ["formControlName", "source", 3, "bindableOptions", "contexts", "datasource"], ["type", "submit"]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "form", 0), r.\u0275\u0275listener("ngSubmit", function () { return a.onSubmit(); }), r.\u0275\u0275element(1, "classifieds-ui-datasource-form", 1), r.\u0275\u0275elementStart(2, "button", 2), r.\u0275\u0275text(3, "Save"), r.\u0275\u0275elementEnd()()), t & 2 && (r.\u0275\u0275property("formGroup", a.formGroup), r.\u0275\u0275advance(), r.\u0275\u0275property("bindableOptions", a.bindableOptions)("contexts", a.contexts)("datasource", a.datasource)); }, dependencies: [y.\u0275NgNoValidate, y.NgControlStatus, y.NgControlStatusGroup, y.FormGroupDirective, y.FormControlName, U.DatasourceFormComponent], encapsulation: 2 }); }
} return n; })(), Sn = n => new nt({ id: "panel", title: "Panel", selectionComponent: Pn, editorComponent: yn, renderComponent: void 0, handler: n }), wn = n => new nt({ id: "datasource", title: "Datasource", selectionComponent: void 0, editorComponent: bn, renderComponent: void 0, handler: n }), In = (n, s) => new Lt({ id: "panels", title: "Panels", build: () => { Ut.prototype.writePaneState = (e, t) => new Promise(a => { let o = n.getEntityCollectionService("PanelPageState"); o.getByKey(e.id).pipe(We(() => m(new _({ id: e.id, panels: [] }))), f(l => l === void 0 ? new _({ id: e.id, panels: [] }) : l), f(l => { let c = s.serialize(t, "root"), u = new _(S(v({}, l), { panels: [] })); for (let p = 0; p < e.panelIndex + 1; p++) {
        u.panels.push(p < l.panels.length ? new G(S(v({}, l.panels[p]), { panes: [] })) : new G);
        for (let d = 0; d < e.paneIndex + 1; d++)
            p === e.panelIndex && d === e.paneIndex ? u.panels[p].panes.push(p < l.panels.length && d < l.panels[p].panes.length ? new k(S(v({}, l.panels[p].panes[d]), { state: c })) : new k({ state: c })) : u.panels[p].panes.push(p < l.panels.length && d < l.panels[p].panes.length ? new k(v({}, l.panels[p].panes[d])) : new k);
    } return u; }), h(l => o.upsert(l))).subscribe(l => { a(l); }); }); } });
var gt = J("[PageBuilder] Load Rest Data", X()), vt = J("[PageBuilder] Load Rest Data Success", X()), bi = J("[PageBuilder] Load Rest Data Error", X()), Pt = J("[PageBuilder] Set Page Info", X()), yt = J("[PageBuilder] Set Form", X()), bt = J("[PageBuilder] Set Page", X()), St = J("[PageBuilder] Selection Path", X()), xn = (() => { class n {
    fetchRestdata$(e) { switch (e.method ? e.method : "get") {
        case "post":
        case "POST": return m([]).pipe(h(() => this.snippetParserService.parseSnippet({ snippet: e.body })), h(a => this.datasourceApi.postData({ url: e.url, body: a })));
        default: return this.datasourceApi.getData(e.url);
    } }
    constructor(e, t, a) { this.actions$ = e, this.datasourceApi = t, this.snippetParserService = a, this.loadRestData$ = Kt(() => this.actions$.pipe(Qt(gt), Ot(o => this.fetchRestdata$(o.rest).pipe(We(() => []), f(l => o.rest.renderer !== void 0 && o.rest.renderer.query !== void 0 && o.rest.renderer.query !== "" ? Fe.JSONPath({ path: o.rest.renderer.query, json: l }) : l), f(l => vt({ tag: o.tag, data: new et({ results: l }) })))))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(ut.Actions), r.\u0275\u0275inject(U.DatasourceApiService), r.\u0275\u0275inject(ft.SnippetParserService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), je = class {
    constructor(s) { s && (this.id = s.id, this.path = s.path, this.realPath = s.realPath, this.args = s.args); }
}, wt = "pageBuilder", Cn = { dataTags: [], datasets: [], pageInfo: void 0, formNames: [], forms: [], page: void 0, selectionPath: [] }, Mn = Yt(Cn, ie(vt, (n, s) => { let e = n.dataTags.findIndex(t => t === s.tag); if (e > -1 && n.forms[e] !== void 0) {
    let t = v({}, n);
    return t.datasets[e].push(s.data), t;
}
else
    return S(v({}, n), { dataTags: [...n.dataTags, s.tag], datasets: [...n.datasets, [s.data]] }); }), ie(yt, (n, s) => { let e = n.formNames.findIndex(t => t === s.name); return e > -1 && n.forms[e] !== void 0 ? S(v({}, n), { forms: n.forms.map((t, a) => a === e ? s.form : t) }) : S(v({}, n), { formNames: [...n.formNames, s.name], forms: [...n.forms, s.form] }); }), ie(Pt, (n, s) => S(v({}, n), { pageInfo: s.info !== void 0 ? new je(s.info) : void 0 })), ie(bt, (n, s) => S(v({}, n), { page: s.page !== void 0 ? new D(s.page) : void 0 })), ie(St, (n, s) => S(v({}, n), { selectionPath: s.path !== void 0 ? s.path : [] })));
function jn(n, s) { return Mn(n, s); }
var Si = new Ke("StylePlugin"), $n = new Ke("PanelsSettings"), wi = (() => { class n {
    constructor(e, t, a, o, l, c, u, p, d, g, w, R) { let te = vn(e, a); o.registerMetadataMap(te), c.registerService("PanelPageState", new Bt("PanelPageState")), c.registerService("PanelPage", new Ce("PanelPage", g, w, R)), c.registerService("PanelPageListItem", new Ce("PanelPageListItem", g, w, R)), t.forEach(b => l.register(b)), u.register(In(p, d)), c.registerService("PanelPageForm", new Ce("PanelPageForm", g, w, R)); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(jt), r.\u0275\u0275inject(xe), r.\u0275\u0275inject($n), r.\u0275\u0275inject(O.EntityDefinitionService), r.\u0275\u0275inject(de.ContentPluginManager), r.\u0275\u0275inject(O.EntityDataService), r.\u0275\u0275inject(pt.BridgeBuilderPluginManager), r.\u0275\u0275inject(O.EntityServices), r.\u0275\u0275inject(N.AttributeSerializerService), r.\u0275\u0275inject(he.CrudAdaptorPluginManager), r.\u0275\u0275inject(O.EntityDefinitionService), r.\u0275\u0275inject(he.CrudDataHelperService)); }; }
    static { this.\u0275mod = r.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = r.\u0275\u0275defineInjector({ providers: [{ provide: A, useClass: A }, { provide: xe, useFactory: Sn, multi: !0, deps: [A] }, { provide: xe, useFactory: wn, multi: !0, deps: [ht] }, { provide: Dt, useClass: $t }], imports: [Mt, kt, At, Zt.forFeature(wt, jn), Wt.forFeature([xn]), Rt, Et, Xt, qt, Jt, Ht] }); }
} return n; })(), Je = class n {
    constructor(s) { s && (this.panelPage = s.panelPage, s.panel !== void 0 && s.panel !== null && (this.panel = s.panel), s.pane !== void 0 && s.pane !== null && (this.pane = s.pane), s.nested !== void 0 && s.nested !== null && typeof s.nested == "object" && (this.nested = new n(s.nested))); }
}, Ii = (() => { class n {
    get gridItems() { return []; }
    constructor(e) { this.controlContainer = e, this.savable = !0, this.nested = !1, this.dashboard = [], this.layoutSetting = new T, this.rowSettings = [], this.ancestory = []; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(y.ControlContainer)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-editor-base"]], inputs: { savable: "savable", nested: "nested", editor: "editor", dashboard: "dashboard", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings", editablePaneTpl: "editablePaneTpl", extraActionsAreaTmpl: "extraActionsAreaTmpl", contextsMenuTpl: "contextsMenuTpl", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), xi = (() => { class n {
    get columnSettings() { return this.panelPage ? this.panelPage.panels.reduce((t, a) => [...t, new T(a.columnSetting)], []) : []; }
    constructor(e) { this.controlContainer = e, this.displayMainControls = !1, this.displayItemHeader = !1; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(y.ControlContainer, 8)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-renderer-base"]], inputs: { panelPage: "panelPage", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", renderPanelTpl: "renderPanelTpl" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), Ci = (() => { class n {
    constructor() { this.settings = [], this.panes = [], this.originMappings = [], this.ancestory = []; }
    mergeContexts(e) { if (!(e === void 0 && this.contexts === void 0))
        return e !== void 0 && this.contexts !== void 0 ? [...e, ...this.contexts] : e !== void 0 ? e : this.contexts; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-style-renderer-base"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", contexts: "contexts", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), Dn = (() => { class n {
    get panelPageService() { return this.es.getEntityCollectionService("PanelPage"); }
    constructor(e, t) { this.es = e, this.panelHandler = t; }
    reducePage(e) { return e.panels.reduce((t, a, o) => this.reducePanels(t, a, o), []); }
    reducePanels(e, t, a) { return [...e, ...t.panes.reduce((o, l, c) => this.reducePanes(o, l, c).map(u => u.pipe(f(([p, d]) => [a, p, d]))), [])]; }
    reducePanes(e, t, a) { return [...e, ...t.contentPlugin === "panel" ? [this.nestedPage$(t).pipe(f(o => [a, o]))] : []]; }
    nestedPage$(e) { return console.log("get nested panel page"), e.linkedPageId && e.linkedPageId !== "" ? this.getByKey(e.linkedPageId).pipe(F(() => console.log(`get(${e.linkedPageId})`))) : this.getEmbedded(e.settings).pipe(F(() => console.log("toObject()"))); }
    remapNested(e, t) { t.forEach(([a, o, l]) => { e.panels[a].panes[o].nestedPage = l; }); }
    getByKey(e) { return this.panelPageService.getByKey(e).pipe(f(t => new D(t)), h(t => $(() => this.reducePage(t).length > 0, x(this.reducePage(t)).pipe(F(a => this.remapNested(t, a)), f(() => t)), m(t)))); }
    getEmbedded(e) { return this.panelHandler.toObject(e).pipe(f(t => new D(t)), h(t => $(() => this.reducePage(t).length > 0, x(this.reducePage(t)).pipe(F(a => this.remapNested(t, a)), f(() => t)), m(t)))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(O.EntityServices), r.\u0275\u0275inject(A)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Mi = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    rebuildPage(e, t) { return new D(S(v({}, e), { panels: this.rebuildPanels(e.panels, [...t]) })); }
    rebuildPanels(e, t) { return e.filter((a, o) => this.rebuildCondition(t[0], o)).map(a => new V(S(v({}, a), { panes: this.rebuildPanes(a.panes, t.slice(1)) }))); }
    rebuildPanes(e, t) { return e.filter((a, o) => this.rebuildCondition(t[0], o)).map(a => a.contentPlugin === "panel" ? new B(S(v({}, a), { nestedPage: void 0, settings: this.panelHandler.buildSettings(this.rebuildPage(a.nestedPage, t.slice(1))) })) : new B(v({}, a))); }
    rebuildCondition(e, t) { return e !== 0 ? e > -1 ? t === e + e * -1 : t !== e * -1 + e : !0; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(A)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ji = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    convertPageToState(e) { return m(new _).pipe(h(() => x(e.panels.map(t => this.convertPanelToState(t)))), f(t => new _({ id: e.id, panels: t }))); }
    convertPanelToState(e) { return m(new G).pipe(h(() => x(e.panes.map(t => this.convertPaneToState(t)))), f(t => new G({ panes: t }))); }
    convertPaneToState(e) { return m(new k).pipe(h(t => $(() => this.hasNestedPanelPage(e), this.panelHandler.toObject(e.settings).pipe(h(a => this.convertPageToState(a)), f(a => new k({ state: new q, nestedPage: a }))), m(t)))); }
    hasNestedPanelPage(e) { return e.contentPlugin === "panel" && (e.linkedPageId === void 0 || e.linkedPageId === null || e.linkedPageId === ""); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(A)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Fn = (() => { class n {
    constructor(e) { this.panelsLoaderService = e; }
    walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: a, ancestory: o }) { return new be(l => { let c = e.panels.length, u = []; for (let p = 0; p < c; p++) {
        let d = e.panels[p].panes.length;
        for (let g = 0; g < d; g++)
            u.push(t({ pane: e.panels[p].panes[g], panelPage: e, ancestoryWithSelf: [...o, p, g] })), e.panels[p].panes[g].nestedPage && e.panels[p].panes[g].nestedPage.panels && e.panels[p].panes[g].nestedPage.panels.length !== 0 ? u.push(this.walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: a, ancestory: [...o, p, g] })) : e.panels[p].panes[g].contentPlugin;
    } u.length === 0 ? (l.next(a), l.complete()) : x(u).pipe(f(p => p.reduce((d, g) => [...d, ...g], a)), F(p => { l.next(p), l.complete(); })).subscribe(); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Dn)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), $i = (() => { class n {
    constructor(e, t) { this.panelsVisitorService = e, this.cpm = t, this.gatherPaneContexts = ({ pane: a, panelPage: o, ancestoryWithSelf: l }) => this.cpm.getPlugin(a.contentPlugin).pipe(h(c => c.handler ? c.handler.stateDefinition(a.settings) : m({})), f(c => new re({ name: "panestate-" + l.join("-"), adaptor: "data", plugin: "panestate", data: { id: o ? o.id : "", selectionPath: [...l], value: c } })), f(c => [c]), se(1)); }
    allActivePageContexts({ panelPage: e, ancestory: t = [] }) { return this.panelsVisitorService.walkPageHierarchy({ panelPage: e, ancestory: t, visitorFunc: this.gatherPaneContexts, defaultv: [] }); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Fn), r.\u0275\u0275inject(de.ContentPluginManager)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), _n = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    buildToAncestorySpec({ panelPageState: e, ancestory: t }) { for (let a = 0; a < t[0] + 1; a++)
        if (e.panels.length < a + 1 && e.panels.push(new G), a === t[0] && t.length > 1)
            for (let o = 0; o < t[1] + 1; o++)
                e.panels[t[0]].panes.length < o + 1 && e.panels[t[0]].panes.push(new k({ state: this.attributeSerializer.serialize({}, "root") })), o === t[1] && t.length > 2 && (e.panels[t[0]].panes[o].nestedPage || (e.panels[t[0]].panes[o].nestedPage = new _), this.buildToAncestorySpec({ panelPageState: e.panels[t[0]].panes[o].nestedPage, ancestory: t.slice(2) })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(N.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Di = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Tn = (() => { class n extends tn {
    constructor(e, t) { super(e, t); }
    pluginDef() { return m(new nn({ name: "style" })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(mt.PluginConfigurationManager), r.\u0275\u0275inject(at.ModuleLoaderService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Fi = (() => { class n {
    constructor(e) { this.spm = e; }
    alterResolvedPanes({ panel: e, resolvedPanes: t, originMappings: a }) { return m(void 0).pipe(h(() => e.stylePlugin && e.stylePlugin !== "" ? this.spm.getPlugin(e.stylePlugin) : m(void 0)), h(o => o && o.handler ? o.handler.alterResolvedPanes({ settings: e.settings, resolvedPanes: t, originMappings: a }) : m({ resolvedPanes: t, originMappings: a }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Tn)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), _i = (() => { class n {
    constructor(e, t, a, o) { this.panelHandler = e, this.rulesResolver = t, this.inlineContextResolver = a, this.cpm = o; }
    usedContexts(e) { return this.panesPlugins(e).pipe(h(t => this.dataPanes(e).pipe(f(a => ({ plugins: t, dataPanes: a })))), h(({ plugins: t, dataPanes: a }) => x(e.reduce((o, l) => { let c = t.get(l.contentPlugin); return c.handler !== void 0 ? [...o, c.handler.getBindings(l.settings, "context", new Map([["dataPanes", a]])).pipe(f(u => u.map(p => p.id)))] : [...o]; }, [])).pipe(f(o => o.reduce((l, c) => [...l, ...c], []))))); }
    staticPanes(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])).pipe(f(t => e.filter(a => t.get(a.contentPlugin).handler === void 0 || !t.get(a.contentPlugin).handler.isDynamic(a.settings)))); }
    dataPanes(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])).pipe(f(t => e.filter(a => t.get(a.contentPlugin).handler !== void 0 && t.get(a.contentPlugin).handler.isData(a.settings)))); }
    panesPlugins(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])); }
    resolvePanes({ panes: e, contexts: t, resolvedContext: a }) { return console.log("resolve panes"), this.panesPlugins(e).pipe(h(o => x(e.reduce((l, c) => { let u = o.get(c.contentPlugin); return u.handler !== void 0 ? [...l, u.handler.getBindings(c.settings, "pane").pipe(f(p => p.map(d => d.id)))] : [...l, m([])]; }, [])))).pipe(f(o => o.reduce((l, c) => [...l, ...c], [])), h(o => this.panesPlugins(e).pipe(f(l => [o, l]))), h(([o, l]) => x(e.reduce((c, u) => { let p = l.get(u.contentPlugin); return p.handler !== void 0 && p.handler.isDynamic(u.settings) ? [...c, p.handler.isData(u.settings) && o.findIndex(d => d === u.name) !== -1 ? m([]) : x([this.staticPanes(e), this.dataPanes(e)]).pipe(h(([d, g]) => p.handler.buildDynamicItems(u.settings, new Map([...u.metadata === void 0 ? [] : u.metadata, ["tag", Q()], ["panes", d], ["dataPanes", g], ["contexts", t !== void 0 ? t : []]])).pipe(f(w => this.panelHandler.fromPanes(w)), f(w => this.panelHandler.wrapPanel(w).panes), se(1))))] : u.name === "" || o.findIndex(d => d === u.name) === -1 ? [...c, m([new B(S(v({}, u), { contexts: [...t, ...u.contexts ? u.contexts : []] }))]).pipe(h(d => $(() => d[0].rule !== void 0 && d[0].rule !== null && d[0].rule.condition !== "", this.rulesResolver.evaluate(d[0].rule, [...t, ...u.contexts ? u.contexts : []]).pipe(f(g => g ? d : [])), m(d))))] : [...c]; }, [])).pipe(h(c => $(() => c.reduce((u, p) => [...u, ...p], []).length === 0, m([c, []]), x([...c.reduce((u, p) => [...u, ...p.map(d => d.contexts && d.contexts.length !== 0 ? this.inlineContextResolver.resolveAll(d.contexts).pipe(se(1)) : m({}).pipe(se(1)))], [])]).pipe(f(u => [c, u.map(p => v(v({}, p), a))])))), f(([c, u]) => { let p = [], d = []; return c.forEach((g, w) => { p = [...p === void 0 ? [] : p, ...g.map((R, te) => new B(S(v({}, R), { resolvedContext: u[p.length + te] })))], d = [...d && [], ...g.map(() => w)]; }), { resolvedPanes: p, originMappings: d }; })))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(A), r.\u0275\u0275inject(De.RulesResolverService), r.\u0275\u0275inject(Ye.InlineContextResolverService), r.\u0275\u0275inject(de.ContentPluginManager)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Xe = class extends sn {
    constructor(s) { super(s), s && (this.name = this.id, this.title = s.title, this.editorComponent = s.editorComponent ? s.editorComponent : void 0, this.renderComponent = s.renderComponent ? s.renderComponent : void 0, s.handler && (this.handler = s.handler)); }
}, Ti = (() => { class n extends rn {
    constructor() { super(), this.pageChange$ = new Ne, this.pageSize = 20, this.dataStream = new K([]), this.subscription = new Oe, this.lastPage = 0, this.paneItems = []; }
    set panes(e) { this.paneItems = [...this.paneItems, ...e], this.dataStream.next(this.paneItems); }
    connect(e) { return this.subscription.add(e.viewChange.subscribe(t => { let a = Math.ceil((t.end + 1) / this.pageSize); a > this.lastPage && (this.lastPage = a, this.pageChange$.next(a)); })), this.dataStream; }
    disconnect(e) { this.subscription.unsubscribe(); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), ee = en(wt), ki = n => H(ee, s => { let e = s.dataTags.findIndex(t => t === n); if (e > -1)
    return s.datasets[e][s.datasets[e].length - 1]; }), kn = H(ee, n => n.pageInfo), An = H(ee, n => n.page), On = H(ee, n => n.selectionPath), It = H(ee, n => n.formNames), Nn = H(ee, n => n.forms), En = H(It, Nn, (n, s, e) => { let t = n.findIndex(a => a === e.name); if (t > -1)
    return s[t]; }), zn = (() => { class n {
    constructor(e) { this.store = e, this.getPageInfo$ = this.store.pipe(Y(kn)), this.getPage$ = this.store.pipe(Y(An)), this.getSelectionPath$ = this.store.pipe(Y(On)), this.getFormNames$ = this.store.pipe(Y(It)), this.getForm$ = t => this.store.pipe(Y(En, { name: t })); }
    loadRestData(e, t) { this.store.dispatch(gt({ tag: e, rest: t })); }
    setPageInfo(e) { this.store.dispatch(Pt({ info: e })); }
    setPage(e) { this.store.dispatch(bt({ page: e })); }
    setSelectionPath(e) { this.store.dispatch(St({ path: e })); }
    setForm(e, t) { this.store.dispatch(yt({ name: e, form: t })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(dt.Store)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ai = (() => { class n {
    constructor(e, t, a, o) { this.pageBuilderFacade = e, this.panelStateArchitectService = t, this.attributeSerializer = a, this.selectEntities = l => l.entities, this.selectById = ({ id: l }) => H(this.selectEntities, c => c[l] ? c[l] : void 0), this.panelPageStateService = o.getEntityCollectionService("PanelPageState"); }
    mergeState({ state: e, settings: t, plugin: a, ancestory: o }) { return m(e).pipe(h(l => this.pageBuilderFacade.getPageInfo$.pipe(f(c => [l, c]))), h(([l, c]) => a.handler.stateDefinition(t).pipe(f(u => [l, c, u]))), h(([l, c, u]) => this.panelPageStateService.collection$.pipe(Y(this.selectById({ id: c.id })), f(p => [l, new _(p || { id: c.id, panels: [] }), u]), se(1))), f(([l, c, u]) => { this.panelStateArchitectService.buildToAncestorySpec({ panelPageState: c, ancestory: [...o] }); let p = "$." + o.map((g, w) => `${(w + 1) % 2 === 0 ? "panes" : (w === 0 ? "" : "nestedPage.") + "panels"}[${g}]`).join("."), d = Fe.JSONPath({ path: p, json: c })[0]; return [l, c, u, d]; }), F(([l, c, u, p]) => { let d = p.state ? p.state.root ? this.attributeSerializer.deserialize(p.state).root : this.attributeSerializer.deserialize(p.state) : {}, g = an(!d || Object.keys(d).length === 0 ? u : d, l); p.state = this.attributeSerializer.serialize(g, "root"); }), f(([l, c, u, p]) => ({ paneState: p, pageState: c }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(zn), r.\u0275\u0275inject(_n), r.\u0275\u0275inject(N.AttributeSerializerService), r.\u0275\u0275inject(O.EntityServices)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Oi = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    serializeForm(e) { let t = e.panels.length, a = {}; for (let o = 0; o < t; o++) {
        let l = e.panels[o].panes.length, c = new Map;
        for (let u = 0; u < l; u++) {
            let p = this.serializeFormPane(e.panels[o].panes[u]);
            if (e.panels[o].panes[u].name && e.panels[o].panes[u].name !== null && (a[e.panels[o].panes[u].name] || e.panels[o].panes[u].name === on(e.panels[o].panes[u].name))) {
                c.has(e.panels[o].panes[u].name) || c.set(e.panels[o].panes[u].name, typeof a[e.panels[o].panes[u].name] < "u" ? [a[e.panels[o].panes[u].name]] : []);
                let d = c.get(e.panels[o].panes[u].name);
                c.set(e.panels[o].panes[u].name, [...d, p]);
            }
            else
                e.panels[o].panes[u].name && e.panels[o].panes[u].name !== "" ? a = S(v({}, a), { [e.panels[o].panes[u].name]: p }) : a = v(v({}, a), p);
        }
        Array.from(c).forEach(([u, p]) => a[u] = p);
    } return a; }
    serializeFormPane(e) { if (e.contentPlugin === "panel")
        return this.serializeForm(new ae(this.attributeSerializer.deserializeAsObject(e.settings, !0))); {
        let t = this.attributeSerializer.deserializeAsObject(e.settings, !0);
        return t !== void 0 ? t.value : void 0;
    } }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(N.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ni = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    convertPageToForm({ pp: e, pp2: t, ancestory: a, debugPath: o = [] }) { return m(new _).pipe(h(() => x(e.panels.map((l, c) => this.convertPanelToForm({ panel: l, panel2: t.panels[c], ancestory: a, debugPath: [...o, `convertPageToForm{ index: ${c} }`] })))), f(l => new ae({ id: e.id, panels: l, name: t.name, title: t.title, derivativeId: "" }))); }
    convertPanelToForm({ panel: e, panel2: t, ancestory: a, debugPath: o = [] }) { return m(new oe).pipe(h(() => x(e.panes.map((l, c) => this.convertPaneToForm({ pane: l, pane2: t.panes[c], ancestory: a, debugPath: [...o, `convertPanelToForm{ index: ${c} }`] })))), f(l => new oe({ panes: l, name: t.name, label: t.label }))); }
    convertPaneToForm({ pane: e, pane2: t, ancestory: a, debugPath: o = [] }) { let l = e.state.attributes.find(c => c.name === "value"); return m(new le({ settings: l ? [l] : [], name: t.name, label: t.label, contentPlugin: t.contentPlugin })).pipe(h(c => $(() => this.hasNestedPanelPage(e), e.nestedPage ? this.convertPageToForm({ ancestory: a, pp: e.nestedPage, pp2: new D(this.attributeSerializer.deserializeAsObject(t.settings)), debugPath: [...o, "convertPaneToForm"] }).pipe(f(u => new le(S(v({}, c), { settings: this.attributeSerializer.serialize(u, "root").attributes })))) : m(c), m(c)))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(N.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ei = (() => { class n {
    constructor(e, t) { this.attributeSerializer = e, this.fb = t; }
    makeFormGroupFromPage(e, t) { return m(this.fb.group({ panels: this.fb.array([]) })).pipe(h(a => x(e.panels.map((o, l) => this.makeFormGroupFromPanel(o, t.panels[l]))).pipe(f(o => ({ panelGroups: o, pageFormGroup: a })))), F(({ panelGroups: a, pageFormGroup: o }) => { let l = a.length; for (let c = 0; c < l; c++)
        o.get("panels").push(a[c]); }), f(({ pageFormGroup: a }) => a)); }
    makeFormGroupFromPanel(e, t) { return m(this.fb.group({ name: this.fb.control(e.name), panes: this.fb.array([]) })).pipe(h(a => x(e.panes.map((o, l) => this.makeFormGroupFromPane(o, t.panes[l]))).pipe(f(o => ({ paneGroups: o, panelFormGroup: a })))), F(({ paneGroups: a, panelFormGroup: o }) => { let l = a.length; for (let c = 0; c < l; c++)
        o.get("panes").push(a[c]); }), f(({ panelFormGroup: a }) => a)); }
    makeFormGroupFromPane(e, t) { let a = t ? t.settings.find(o => o.name === "value") : void 0; return m(this.fb.group({ name: this.fb.control(e.name), contentPlugin: this.fb.control(""), settings: this.fb.array([]) })).pipe(h(o => $(() => this.hasNestedPanelPage(e), this.hasNestedPanelPage(e) ? this.makeFormGroupFromPage(e.nestedPage, new ae(this.attributeSerializer.deserializeAsObject(t.settings))).pipe(F(l => { let c = this.attributeSerializer.convertToGroup(this.attributeSerializer.serialize(l.value, "value").attributes[0]); o.get("contentPlugin").setValue("panel"), o.get("settings").push(c); }), f(() => o)) : m(o).pipe(F(() => { if (a) {
        let l = this.attributeSerializer.convertToGroup(a);
        o.get("settings").push(l);
    } })), m(o).pipe(F(() => { if (a) {
        let l = this.attributeSerializer.convertToGroup(a);
        o.get("settings").push(l);
    } }))))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(N.AttributeSerializerService), r.\u0275\u0275inject(y.UntypedFormBuilder)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), zi = (() => { class n {
    makeJsonNode() { return { attributes: {}, children: {} }; }
    reduceCss(e, t, a = !0) { return e && e.children ? Object.keys(e.children).filter(o => a ? o.indexOf(t) === 0 : o.indexOf(t) !== 0).reduce((o, l) => S(v({}, o), { children: S(v({}, o.children), { [a ? l.substr(l.indexOf(t) + t.length).trim() : l]: e.children[l] }) }), this.makeJsonNode()) : this.makeJsonNode(); }
    reduceSelector(e, t, a = !0) { return e ? Object.keys(e).filter(o => a ? o.indexOf(t) === 0 : o.indexOf(t) !== 0).reduce((o, l) => S(v({}, o), { [a ? l.substr(l.indexOf(t) + t.length).trim() : l]: e[l] }), {}) : {}; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
export { zi as CssHelperService, ht as DatasourceContentHandler, bn as DatasourceEditorComponent, Di as DynamicPaneService, Ue as FormDatasource, Ei as FormGroupConverterService, Oi as FormService, Ni as FormStateConverterService, pe as GridItem, qe as GridLayout, Ii as LayoutEditorBaseComponent, xi as LayoutRendererBaseComponent, T as LayoutSetting, $n as PANELS_SETTINGS, zn as PageBuilderFacade, B as Pane, Ti as PaneDatasourceService, Le as PanePropsFormPayload, k as PaneState, Ai as PaneStateService, V as Panel, A as PanelContentHandler, yn as PanelEditorComponent, D as PanelPage, ae as PanelPageForm, le as PanelPageFormPane, oe as PanelPageFormPanel, yi as PanelPageLinkedlistComponent, Ve as PanelPageListItem, ue as PanelPagePermissions, Je as PanelPageSelector, _ as PanelPageState, je as PanelPageStateSlice, Ge as PanelPropsFormPayload, _i as PanelResolverService, Pn as PanelSelectorComponent, G as PanelState, _n as PanelStateArchitectService, ji as PanelStateConverterService, Ci as PanelStyleRendererBaseComponent, $i as PanelsContextService, Dn as PanelsLoaderService, wi as PanelsModule, Mi as PanelsSelectorService, He as PanelsSettings, Fn as PanelsWalkerService, Me as PrerenderFormPayload, Re as PropertiesFormPayload, Si as STYLE_PLUGIN, Xe as StylePlugin, Tn as StylePluginManager, Fi as StyleResolverService, Cn as initialState, gt as loadRestData, bi as loadRestDataError, vt as loadRestDataSuccess, wt as pageBuilderFeatureKey, jn as reducer, ki as selectDataset, En as selectForm, It as selectFormNames, Nn as selectForms, An as selectPage, ee as selectPageBuilderState, kn as selectPageInfo, On as selectSelectionPath, yt as setForm, bt as setPage, Pt as setPageInfo, St as setSelectionPath };
