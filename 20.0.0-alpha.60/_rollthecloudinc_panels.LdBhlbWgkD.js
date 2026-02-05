import { a as $t } from "@nf-internal/chunk-EOHDPEXE";
import { a as V } from "@nf-internal/chunk-VJMH5IEE";
import { g as C, i as D } from "@nf-internal/chunk-FYX6O4YR";
import { b as Be, f as be, k as Ge, l as Q, z as m } from "@nf-internal/chunk-STIBVO4O";
import { a as v, b as S, e as Dt, g as Re } from "@nf-internal/chunk-2AVGQ2MQ";
var Ue = Dt((Se, Le) => {
    (function (n, s) { typeof define == "function" && define.amd ? define([], s) : typeof Se == "object" ? Le.exports = s() : n.CSSJSON = s(); })(Se, function () {
        var n = new function () {
            var s = this;
            s.init = function () { String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, ""); }, String.prototype.repeat = function (b) { return new Array(1 + b).join(this); }; }, s.init();
            var e = /([^\s\;\{\}][^\;\{\}]*)\{/g, t = /\}/g, a = /([^\;\{\}]*)\;/g, o = /\/\*[\s\S]*?\*\//g, l = /([^\:]+):([^\;]*);/, c = /(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gmi, p = 1, u = 2, d = 3, g = 4, I = function (b) { return typeof b > "u" || b.length == 0 || b == null; };
            s.toJSON = function (b, w) { var P = { children: {}, attributes: {} }, x = null, N = 0; if (typeof w > "u")
                var w = { ordered: !1, comments: !1, stripComments: !1, split: !1 }; for (w.stripComments && (w.comments = !1, b = b.replace(o, "")); (x = c.exec(b)) != null;)
                if (!I(x[p]) && w.comments) {
                    var ne = x[p].trim();
                    P[N++] = ne;
                }
                else if (I(x[u]))
                    if (I(x[d])) {
                        if (!I(x[g])) {
                            var Ee = x[g].trim(), Pe = l.exec(Ee);
                            if (Pe) {
                                var M = Pe[1].trim(), ye = Pe[2].trim();
                                if (w.ordered) {
                                    var R = {};
                                    R.name = M, R.value = ye, R.type = "attr", P[N++] = R;
                                }
                                else if (M in P.attributes) {
                                    var Ne = P.attributes[M];
                                    Ne instanceof Array || (P.attributes[M] = [Ne]), P.attributes[M].push(ye);
                                }
                                else
                                    P.attributes[M] = ye;
                            }
                            else
                                P[N++] = Ee;
                        }
                    }
                    else
                        return P;
                else {
                    var M = x[u].trim(), ce = s.toJSON(b, w);
                    if (w.ordered) {
                        var R = {};
                        R.name = M, R.value = ce, R.type = "rule", P[N++] = R;
                    }
                    else {
                        if (w.split)
                            var ge = M.split(",");
                        else
                            var ge = [M];
                        for (i in ge) {
                            var ve = ge[i].trim();
                            if (ve in P.children)
                                for (var ze in ce.attributes)
                                    P.children[ve].attributes[ze] = ce.attributes[ze];
                            else
                                P.children[ve] = ce;
                        }
                    }
                } return P; }, s.toCSS = function (b, w, P) {
                var x = "";
                if (typeof w > "u" && (w = 0), typeof P > "u" && (P = !1), b.attributes)
                    for (i in b.attributes) {
                        var N = b.attributes[i];
                        if (N instanceof Array)
                            for (var ne = 0; ne < N.length; ne++)
                                x += Y(i, N[ne], w);
                        else
                            x += Y(i, N, w);
                    }
                if (b.children) {
                    var M = !0;
                    for (i in b.children)
                        P && !M ? x += `
` : M = !1, x += H(i, b.children[i], w);
                }
                return x;
            };
            var Y = function (b, w, P) {
                return "	".repeat(P) + b + ": " + w + `;
`;
            }, H = function (b, w, P) {
                var x = "	".repeat(P) + b + ` {
`;
                return x += s.toCSS(w, P + 1), x += "	".repeat(P) + `}
`, x;
            };
        };
        return n;
    });
});
import * as G from "@angular/common";
import { isPlatformServer as we, CommonModule as Ft } from "@angular/common";
import * as r from "@angular/core";
import { forwardRef as He, InjectionToken as et, PLATFORM_ID as _t } from "@angular/core";
import * as z from "@ngrx/data";
import { DefaultPluralizer as Tt, Pluralizer as kt } from "@ngrx/data";
import * as y from "@angular/forms";
import { NG_VALUE_ACCESSOR as Ot, NG_VALIDATORS as At, UntypedFormControl as j, Validators as W, UntypedFormArray as zt, FormsModule as Et, ReactiveFormsModule as Nt } from "@angular/forms";
import { map as f, switchMap as h, filter as tt, defaultIfEmpty as Ie, catchError as nt, concatMap as Rt, tap as F, take as se } from "rxjs/operators";
import * as k from "@rollthecloudinc/attributes";
import { AttributeValue as J } from "@rollthecloudinc/attributes";
import * as it from "@rollthecloudinc/context";
import { InlineContext as re } from "@rollthecloudinc/context";
import { PersistenceFormPayload as st } from "@rollthecloudinc/refinery";
import * as rt from "@rollthecloudinc/detour";
import { InteractionsFormPayload as Bt, roleHandlerPluginFactory as $e } from "@rollthecloudinc/detour";
import * as L from "@rollthecloudinc/datasource";
import { Datasource as Fe, Dataset as _e, DatasourceModule as Gt } from "@rollthecloudinc/datasource";
import * as de from "@rollthecloudinc/content";
import { ContentPluginEditorOptions as Te, ContentBinding as Lt, ContentPlugin as ke, CONTENT_PLUGIN as Ce } from "@rollthecloudinc/content";
import * as at from "@angular/material/autocomplete";
import * as ot from "@angular/material/input";
import * as lt from "@angular/material/select";
import * as ct from "@rollthecloudinc/utils";
import { SITE_NAME as ut, NoopDataService as Ut } from "@rollthecloudinc/utils";
import { MaterialModule as Ht } from "@rollthecloudinc/material";
var Kt = Re(Ue(), 1), Ae = Re($t(), 1);
import * as pt from "@angular/material/bottom-sheet";
import * as fe from "@angular/material/dialog";
import { MAT_DIALOG_DATA as Vt } from "@angular/material/dialog";
import * as dt from "@angular/material/grid-list";
import * as me from "@angular/material/list";
import * as ee from "@angular/material/tabs";
import * as ft from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as qt, PublicApiBridgeService as Jt } from "@rollthecloudinc/bridge";
import * as he from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as vi, CrudDataService as xe, CrudModule as Xt } from "@rollthecloudinc/crud";
import * as Oe from "@rollthecloudinc/rules";
import { Aws3Module as Yt } from "@rollthecloudinc/aws3";
import { AwosModule as Qt } from "@rollthecloudinc/awos";
import { AuthModule as Wt } from "@rollthecloudinc/auth";
import * as mt from "@ngrx/effects";
import { createEffect as Zt, ofType as en, EffectsModule as tn } from "@ngrx/effects";
import * as ht from "@ngrx/store";
import { createAction as X, props as K, createReducer as nn, on as ie, StoreModule as sn, createFeatureSelector as rn, createSelector as U, select as Z } from "@ngrx/store";
import * as gt from "@rollthecloudinc/snippet";
import * as vt from "@rollthecloudinc/plugin";
import { BasePluginManager as an, PluginDef as on, Plugin as ln } from "@rollthecloudinc/plugin";
import { DataSource as cn } from "@angular/cdk/collections";
import un from "deepmerge-json";
import { pluralize as pn } from "inflected";
function dn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 5), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1("panel page | level: ", e);
} }
function fn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 3), r.\u0275\u0275template(2, dn, 2, 2, "mat-option", 4), r.\u0275\u0275pipe(3, "async"), r.\u0275\u0275elementEnd()()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(2), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(3, 1, e.panelPages$));
} }
function mn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 5), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1("panel | ", e);
} }
function hn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 6), r.\u0275\u0275template(2, mn, 2, 2, "mat-option", 4), r.\u0275\u0275pipe(3, "async"), r.\u0275\u0275elementEnd()()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(2), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(3, 1, e.panels$));
} }
function gn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 5), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1("pane | ", e);
} }
function vn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 7), r.\u0275\u0275template(2, gn, 2, 2, "mat-option", 4), r.\u0275\u0275pipe(3, "async"), r.\u0275\u0275elementEnd()()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(2), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(3, 1, e.panes$));
} }
function Pn(n, s) { if (n & 1 && r.\u0275\u0275element(0, "druid-panels-panelpage-linkedlist", 8), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275property("panelPages", e.nested);
} }
function yn(n, s) { if (n & 1) {
    let e = r.\u0275\u0275getCurrentView();
    r.\u0275\u0275elementStart(0, "a", 2), r.\u0275\u0275listener("click", function () { let a = r.\u0275\u0275restoreView(e).$implicit, o = r.\u0275\u0275nextContext(2); return r.\u0275\u0275resetView(o.onItemSelect(a.id)); }), r.\u0275\u0275elementStart(1, "span", 6), r.\u0275\u0275text(2), r.\u0275\u0275elementEnd()();
} if (n & 2) {
    let e = s.$implicit;
    r.\u0275\u0275advance(2), r.\u0275\u0275textInterpolate2("", e.title, " [", e.id, "]");
} }
function bn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-nav-list"), r.\u0275\u0275template(1, yn, 3, 2, "a", 5), r.\u0275\u0275pipe(2, "async"), r.\u0275\u0275elementEnd()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(2, 1, e.panels$));
} }
var Sn = (n, s) => ({ PanelPageListItem: { entityName: "PanelPageListItem", crud: S(v({}, we(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }), { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }) }, PanelPage: { entityName: "PanelPage", crud: v({ save: { ops: ["create", "update"], plugin: "rest", params: { entityName: "PanelPage" } }, readPrimary: { fallback: !0, ops: ["create", "update", "query"], plugin: we(n) ? "memory_store" : "idb_keyval", params: { prefix: "panelpage__" } }, readFallback: { fallback: !0, ops: ["query"], plugin: "rest", params: { entityName: "PanelPage", root: s.objectsRootUrl, suffix: ".json" } } }, we(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" } } }) }, PanelPageState: { entityName: "PanelPageState" } }), Ve = class {
    constructor(s) { this.readUserIds = [], s && (this.title = s.title, this.name = s.name, this.path = s.path, this.cssFile = s.cssFile, s.readUserIds && (this.readUserIds = s.readUserIds.map(e => e))); }
}, qe = class {
    constructor(s) { s && (this.label = s.label, this.name = s.name); }
}, Je = class {
    constructor(s) { s && (this.label = s.label, this.name = s.name); }
}, ae = class {
    constructor(s) { this.panels = [], s && (this.id = s.id, this.name = s.name, this.title = s.title, this.derivativeId = s.derivativeId, this.valid = !!s.valid, s.persistence && (this.persistence = new st(s.persistence)), s.panels && (this.panels = s.panels.map(e => new oe(e)))); }
}, oe = class {
    constructor(s) { this.panes = [], s && (this.name = s.name, this.label = s.label, s.panes && (this.panes = s.panes.map(e => new le(e)))); }
}, le = class {
    constructor(s) { this.settings = [], s && (this.name = s.name, this.label = s.label, this.contentPlugin = s.contentPlugin, s.settings && (this.settings = s.settings.map(e => new J(e)))); }
}, Xe = class {
    constructor(s) { s && (this.name = s.name, this.field = s.field); }
}, je = class {
    constructor(s) { s && (this.route = s.route, s.datasource && (this.datasource = new Fe(s.datasource))); }
}, Me = class {
    constructor(s) { s && (s.rule && typeof s.rule != "string" && (this.rule = v({}, s.rule)), s.priority !== void 0 && (this.priority = s.priority)); }
}, Ke = class {
    constructor(s) { s && (this.openSearchDomain = s.openSearchDomain, this.s3Bucket = s.s3Bucket, this.objectsRootUrl = s.objectsRootUrl); }
}, $ = class {
    constructor(s) { this.gridItems = [], this.panels = [], this.contexts = [], this.rowSettings = [], this.entityPermissions = new pe, s && (this.id = s.id, this.layoutType = s.layoutType, this.displayType = s.displayType, this.name = s.name ? s.name : void 0, this.title = s.title ? s.title : void 0, this.site = s.site ? s.site : void 0, this.userId = s.userId ? s.userId : void 0, this.path = s.path ? s.path : void 0, this.persistence = s.persistence ? new st(s.persistence) : void 0, this.interactions = s.interactions ? new Bt(s.interactions) : void 0, this.prerender = s.prerender ? new je(s.prerender) : void 0, s.selection && (this.selection = new Me(s.selection)), s.panels && (this.panels = s.panels.map(e => new q(e))), s.gridItems && (this.gridItems = s.gridItems.map(e => new ue(e))), s.contexts && (this.contexts = s.contexts.map(e => new re(e))), s.layoutSetting && (this.layoutSetting = new T(s.layoutSetting)), s.rowSettings && Array.isArray(s.rowSettings) && (this.rowSettings = s.rowSettings.map(e => new T(e))), s.entityPermissions && (this.entityPermissions = new pe(s.entityPermissions)), s.cssFile && (this.cssFile = s.cssFile)); }
}, Ye = class extends $ {
}, Qe = class {
    constructor(s) { this.gridItems = [], s && (this.id = s.id, this.site = s.site, s.gridItems && (this.gridItems = s.gridItems.map(e => new ue(e)))); }
}, q = class {
    constructor(s) { this.settings = [], this.panes = [], s && (this.name = s.name ? s.name : void 0, this.label = s.label ? s.label : void 0, this.stylePlugin = s.stylePlugin, s.settings && (this.settings = s.settings.map(e => new J(e))), s.panes && (this.panes = s.panes.map(e => new E(e))), s.columnSetting && (this.columnSetting = new T(s.columnSetting))); }
}, E = class {
    constructor(s) { this.settings = [], this.locked = !1, this.contexts = [], s && (this.name = s.name, this.label = s.label, this.contentPlugin = s.contentPlugin, this.locked = s.locked !== void 0 ? s.locked : !1, s.linkedPageId && (this.linkedPageId = s.linkedPageId), s.metadata !== void 0 && (this.metadata = new Map([...s.metadata])), s.settings !== void 0 && (this.settings = s.settings.map(e => new J(e))), s.contexts !== void 0 && (this.contexts = s.contexts.map(e => new re(e))), s.rule !== void 0 && typeof s.rule != "string" && (this.rule = v({}, s.rule)), s.nestedPage && (this.nestedPage = new $(s.nestedPage)), s.resolvedContext && (this.resolvedContext = v({}, s.resolvedContext))); }
}, ue = class {
    constructor(s) { s && (this.cols = s.cols, this.rows = s.rows, this.x = s.x, this.y = s.y, this.weight = s.weight); }
}, T = class {
    constructor(s) { this.settings = [], s && s.settings && Array.isArray(s.settings) && (this.settings = s.settings.map(e => new J(e))); }
}, pe = class {
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
    fetchDynamicData(e, t) { return m(new _e); }
    getBindings(e, t) { return m([]); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new E(this.attributeSerializer.deserialize(t))); }
    wrapPanel(e) { return new q({ stylePlugin: void 0, settings: [], panes: e, columnSetting: new T }); }
    stateDefinition(e) { return m({}); }
    editorOptions(e) { return m(new Te); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Mi = (() => { class n {
    set panelPages(e) { this.panelPages$.next(e); }
    set panels(e) { this.panels$.next(e); }
    set panes(e) { this.panes$.next(e); }
    get panelPages() { return this.panelPages$.value && Array.isArray(this.panelPages$.value) ? this.panelPages$.value : []; }
    get panels() { return this.panels$.value && Array.isArray(this.panels$.value) ? this.panels$.value : []; }
    get panes() { return this.panes$.value && Array.isArray(this.panes$.value) ? this.panes$.value : []; }
    get nested() { return this.nested$.value && typeof this.nested$.value !== void 0 && this.nested$.value.length > 0 ? [...this.nested$.value] : void 0; }
    constructor(e, t) { this.fb = e, this.panelHandler = t, this.panelPages$ = new Q([]), this.panels$ = new Q([]), this.panes$ = new Q([]), this.nested$ = new Q([]), this.formGroup = this.fb.group({ panelPage: this.fb.control(void 0), panel: this.fb.control(void 0), pane: this.fb.control(void 0), nested: this.fb.control(void 0) }), this.panelPageSub = this.formGroup.get("panelPage").valueChanges.subscribe(a => { this.panels$.next(new $(this.panelPages$.value[a]).panels); }), this.panelSub = this.formGroup.get("panel").valueChanges.subscribe(a => { this.panes$.next(new q(this.panels$.value[a]).panes); }), this.paneSub = this.formGroup.get("pane").valueChanges.pipe(f(a => this.panes$.value[a]), h(a => D(() => a.contentPlugin === "panel", this.panelHandler.toObject(a.settings), m(void 0))), tt(a => !!a)).subscribe(a => { this.nested$.next([a]); }), this.onTouched = () => { }; }
    writeValue(e) { e && this.formGroup.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.formGroup.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(e) { return this.formGroup.valid ? null : { invalidForm: { valid: !1 } }; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(y.UntypedFormBuilder), r.\u0275\u0275directiveInject(A)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["druid-panels-panelpage-linkedlist"]], inputs: { panelPages: "panelPages", panels: "panels", panes: "panes" }, standalone: !1, features: [r.\u0275\u0275ProvidersFeature([{ provide: Ot, useExisting: He(() => n), multi: !0 }, { provide: At, useExisting: He(() => n), multi: !0 }])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "nested", 3, "panelPages", 4, "ngIf"], ["required", "", "formControlName", "panelPage"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["required", "", "formControlName", "panel"], ["required", "", "formControlName", "pane"], ["formControlName", "nested", 3, "panelPages"]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "div", 0), r.\u0275\u0275template(1, fn, 4, 3, "mat-form-field", 1)(2, hn, 4, 3, "mat-form-field", 1)(3, vn, 4, 3, "mat-form-field", 1)(4, Pn, 1, 1, "druid-panels-panelpage-linkedlist", 2), r.\u0275\u0275elementEnd()), t & 2 && (r.\u0275\u0275property("formGroup", a.formGroup), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.panelPages.length > 0), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.panels.length > 0), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.panes.length > 0), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.nested)); }, dependencies: [G.NgForOf, G.NgIf, y.NgControlStatus, y.NgControlStatusGroup, y.RequiredValidator, y.FormGroupDirective, y.FormControlName, at.MatOption, ot.MatFormField, lt.MatSelect, n, G.AsyncPipe], encapsulation: 2 }); }
} return n; })(), Pt = (() => { class n {
    constructor(e, t, a, o, l, c) { this.siteName = e, this.bottomSheetRef = t, this.handler = a, this.dialog = o, this.fb = l, this.selectedIndex = 0, this.panelPagesService = c.getEntityCollectionService("PanelPage"), this.panelPageListItemsService = c.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { }
    onNewSelect() { let e = V(), t = new $({ id: void 0, layoutType: "split", displayType: "page", site: this.siteName, gridItems: [], panels: [], layoutSetting: new T, rowSettings: [] }); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new j(""), settings: this.fb.array(this.handler.buildSettings(t).map(a => this.convertToGroup(a))) })), this.bottomSheetRef.dismiss(); }
    onLinkSelect() { this.selectedIndex = 1, this.panels$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(this.siteName)}`); }
    onEmbedSelect() { let e = V(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new j(""), locked: new j(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onYieldSelect() { let e = V(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "yield", name: e, label: e, rule: new j(""), locked: new j(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onItemSelect(e) { let t = V(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: t, label: t, rule: new j(""), linkedPageId: new j(e, W.required), locked: new j(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    convertToGroup(e) { let t = this.fb.group({ name: new j(e.name, W.required), type: new j(e.type, W.required), displayName: new j(e.displayName, W.required), value: new j(e.value, W.required), computedValue: new j(e.value, W.required), attributes: new zt([]) }); return e.attributes && e.attributes.length > 0 && e.attributes.forEach(a => { t.get("attributes").push(this.convertToGroup(a)); }), t; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(ut), r.\u0275\u0275directiveInject(pt.MatBottomSheetRef), r.\u0275\u0275directiveInject(A), r.\u0275\u0275directiveInject(fe.MatDialog), r.\u0275\u0275directiveInject(y.UntypedFormBuilder), r.\u0275\u0275directiveInject(z.EntityServices)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-selector"]], inputs: { panelFormGroup: "panelFormGroup" }, standalone: !1, decls: 13, vars: 1, consts: [["mat-align-tabs", "start", 3, "selectedIndex"], ["label", "Type"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["label", "Search"], ["matTabContent", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-line", ""]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "mat-nav-list")(3, "a", 2), r.\u0275\u0275listener("click", function () { return a.onNewSelect(); }), r.\u0275\u0275text(4, "New Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(5, "a", 2), r.\u0275\u0275listener("click", function () { return a.onLinkSelect(); }), r.\u0275\u0275text(6, "Link Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(7, "a", 2), r.\u0275\u0275listener("click", function () { return a.onEmbedSelect(); }), r.\u0275\u0275text(8, "Embed Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(9, "a", 2), r.\u0275\u0275listener("click", function () { return a.onYieldSelect(); }), r.\u0275\u0275text(10, "Yield"), r.\u0275\u0275elementEnd()()(), r.\u0275\u0275elementStart(11, "mat-tab", 3), r.\u0275\u0275template(12, bn, 3, 3, "ng-template", 4), r.\u0275\u0275elementEnd()()), t & 2 && r.\u0275\u0275property("selectedIndex", a.selectedIndex); }, dependencies: [G.NgForOf, dt.MatLine, me.MatNavList, me.MatListItem, ee.MatTabContent, ee.MatTab, ee.MatTabGroup, G.AsyncPipe], encapsulation: 2 }); }
} return n; })(), wn = (() => { class n {
    constructor() { }
    ngOnInit() { }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-editor"]], standalone: !1, decls: 2, vars: 0, template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "p"), r.\u0275\u0275text(1, "panel-editor works!"), r.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return n; })(), _ = class {
    constructor(s) { this.panels = [], s && (this.id = s.id, s.panels !== void 0 && Array.isArray(s.panels) && (this.panels = s.panels.map(e => new B(e)))); }
}, B = class {
    constructor(s) { this.panes = [], s && s.panes !== void 0 && Array.isArray(s.panes) && (this.panes = s.panes.map(e => new O(e))); }
}, O = class {
    constructor(s) { s && (s.state !== void 0 && (this.state = new J(s.state)), s.nestedPage !== void 0 && s.nestedPage !== null && (this.nestedPage = new _(s.nestedPage))); }
}, yt = (() => { class n {
    constructor(e, t, a, o, l, c) { this.siteName = e, this.panelHandler = t, this.attributeSerializer = a, this.rulesResolver = o, this.dpm = l, this.datasourceEvalutator = c; }
    handleFile(e) { return m([]); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(e) { return m(!1); }
    isDynamic(e) { return !0; }
    isData(e) { return !0; }
    fetchDynamicData(e, t) { let a = t.has("dataPanes") ? new Map(t.get("dataPanes").map(l => [l.name, l])) : new Map([]), o = new Map(Array.from(a).map(([l, c]) => [l, new Fe(this.attributeSerializer.deserializeAsObject(c.settings))])); return this.toObject(e).pipe(h(l => this.datasourceEvalutator.evalDatasource({ datasource: l, metadata: t, datasources: o }))); }
    buildDynamicItems(e, t) { let a = new Map(t.get("dataPanes").map(o => [o.name, o])); return this.fetchDynamicData(e, t).pipe(h(o => this.toObject(e).pipe(f(l => [l, o]))), h(([o, l]) => this.getBindings(e, "pane").pipe(f(c => [o, l, c]))), h(([o, l, c]) => D(() => l.results.length !== 0 && c.length > 0, C(l.results.map(p => C(c.filter(u => !a.has(u.id)).map(u => m(t.get("panes").find(d => d.name === u.id)).pipe(h(d => D(() => d && d.rule && d.rule !== null && d.rule.condition !== "", d ? this.rulesResolver.evaluate(d.rule, [...t.get("contexts"), ...d.contexts !== void 0 ? d.contexts : [], new re({ name: "_root", adaptor: "data", data: p })]).pipe(f(g => [d, g])) : m([d, !1]), m(!1).pipe(f(g => [d, g])))), tt(([d, g]) => g), f(([d, g]) => d.name), Ie(u.id)))).pipe(f(u => u.reduce((d, g) => [...d, g], []))))).pipe(f(p => [o, l, p])), new be(p => { p.next([o, l, []]), p.complete(); }))), f(([o, l, c]) => l.results.reduce((p, u, d) => [...p, ...c[d] ? c[d].map(g => new E(S(v({}, t.get("panes").find(I => I.name === g)), { rule: void 0, label: V(), contexts: [...t.get("contexts"), new re({ name: "_root", adaptor: "data", data: u })] }))) : []], [])), f(o => new q({ stylePlugin: void 0, settings: [], panes: o, columnSetting: new T })), f(o => this.panelHandler.buildSettings(new $({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new T, rowSettings: [], panels: [o] }))), f(o => o.find(l => l.name === "panels").attributes[0].attributes.find(l => l.name === "panes").attributes)); }
    getBindings(e, t, a) { let o = a ? new Map(a.get("dataPanes").map(l => [l.name, l])) : new Map; return t === "context" ? this.toObject(e).pipe(f(l => [l, l.params ? l.params.reduce((c, p) => [...c, ...p.mapping.type === "form" ? [new Lt({ id: `form__${p.mapping.value.split(".", 2)[0].trim()}`, type: "context" })] : []], []) : []]), h(([l, c]) => this.dpm.getPlugin(l.plugin).pipe(h(p => p.getBindings({ settings: l.settings, metadata: a }).pipe(f(u => [l, u]))))), h(([l, c]) => C(l.renderer.bindings.reduce((p, u) => [...p, ...o.has(u.id) ? [this.toObject(o.get(u.id).settings)] : []], [])).pipe(h(p => C(p.map(u => this.dpm.getPlugin(u.plugin).pipe(h(d => d.getBindings({ settings: u.settings, metadata: a }))))).pipe(f(u => u.reduce((d, g) => [...d, ...g], c)), Ie(c))), Ie(c)))) : this.toObject(e).pipe(h(l => D(() => l.renderer.type === t, m(l.renderer.bindings), m([])))); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    getRenderType(e) { let t = [e.find(a => a.name === "renderer")].map(a => a.attributes.find(o => o.name === "type")); return t.length > 0 ? t[0].value : void 0; }
    stateDefinition(e) { return m({ autocomplete: { input: "" }, loading: "y" }); }
    editorOptions(e) { return this.toObject(e).pipe(h(t => this.dpm.getPlugin(t && t.plugin ? t.plugin : "data").pipe(f(a => [t, a]))), h(([t, a]) => a.editorOptions ? a.editorOptions({ settings: t && t.settings ? t.settings : [] }) : m(void 0)), f(t => new Te({ fullscreen: t ? t.fullscreen : !1 }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(ut), r.\u0275\u0275inject(A), r.\u0275\u0275inject(k.AttributeSerializerService), r.\u0275\u0275inject(Oe.RulesResolverService), r.\u0275\u0275inject(L.DatasourcePluginManager), r.\u0275\u0275inject(L.DatasourceEvaluator)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), In = (() => { class n {
    constructor(e, t, a, o, l) { this.data = e, this.dialogRef = t, this.fb = a, this.attributeSerializer = o, this.datasourceHandler = l, this.datasource = new Fe, this.bindableOptions = [], this.contexts = [], this.formGroup = this.fb.group({ source: this.fb.control("") }); }
    ngOnInit() { let e = this.data.panelFormGroup.get("panes"); if (this.bindableOptions = e.controls.reduce((t, a) => a.get("name").value ? [...t, a.get("name").value] : [...t], []), this.contexts = this.data.contexts.map(t => t.name), this.data.panelIndex !== void 0 && this.data.paneIndex < e.length) {
        let t = e.at(this.data.paneIndex).get("settings").value.map(a => new J(a));
        this.datasourceHandler.toObject(t).subscribe(a => { this.datasource = a; });
    } }
    onSubmit() { let e = this.attributeSerializer.serialize(this.formGroup.value.source, "source"), t = this.data.panelFormGroup.get("panes").at(this.data.paneIndex); this.data.paneIndex === void 0 ? (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "datasource", name: new j(""), label: new j(""), rule: new j(""), settings: this.fb.array(e.attributes.map(a => this.attributeSerializer.convertToGroup(a))) })), console.log(this.data.panelFormGroup.get("panes").value)) : (t.get("settings").clear(), e.attributes.forEach(a => t.get("settings").push(this.attributeSerializer.convertToGroup(a)))), this.dialogRef.close(); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(Vt), r.\u0275\u0275directiveInject(fe.MatDialogRef), r.\u0275\u0275directiveInject(y.UntypedFormBuilder), r.\u0275\u0275directiveInject(k.AttributeSerializerService), r.\u0275\u0275directiveInject(yt)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-datasource-editor"]], standalone: !1, decls: 4, vars: 4, consts: [[3, "ngSubmit", "formGroup"], ["formControlName", "source", 3, "bindableOptions", "contexts", "datasource"], ["type", "submit"]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "form", 0), r.\u0275\u0275listener("ngSubmit", function () { return a.onSubmit(); }), r.\u0275\u0275element(1, "classifieds-ui-datasource-form", 1), r.\u0275\u0275elementStart(2, "button", 2), r.\u0275\u0275text(3, "Save"), r.\u0275\u0275elementEnd()()), t & 2 && (r.\u0275\u0275property("formGroup", a.formGroup), r.\u0275\u0275advance(), r.\u0275\u0275property("bindableOptions", a.bindableOptions)("contexts", a.contexts)("datasource", a.datasource)); }, dependencies: [y.\u0275NgNoValidate, y.NgControlStatus, y.NgControlStatusGroup, y.FormGroupDirective, y.FormControlName, L.DatasourceFormComponent], encapsulation: 2 }); }
} return n; })(), Cn = n => new ke({ id: "panel", title: "Panel", selectionComponent: Pt, editorComponent: wn, renderComponent: void 0, handler: n }), xn = ({ handler: n }) => new ke({ id: "yield", title: "Yield", selectionComponent: Pt, editorComponent: void 0, renderComponent: void 0, handler: n }), jn = n => new ke({ id: "datasource", title: "Datasource", selectionComponent: void 0, editorComponent: In, renderComponent: void 0, handler: n }), Mn = (n, s) => new qt({ id: "panels", title: "Panels", build: () => { Jt.prototype.writePaneState = (e, t) => new Promise(a => { let o = n.getEntityCollectionService("PanelPageState"); o.getByKey(e.id).pipe(nt(() => m(new _({ id: e.id, panels: [] }))), f(l => l === void 0 ? new _({ id: e.id, panels: [] }) : l), f(l => { let c = s.serialize(t, "root"), p = new _(S(v({}, l), { panels: [] })); for (let u = 0; u < e.panelIndex + 1; u++) {
        p.panels.push(u < l.panels.length ? new B(S(v({}, l.panels[u]), { panes: [] })) : new B);
        for (let d = 0; d < e.paneIndex + 1; d++)
            u === e.panelIndex && d === e.paneIndex ? p.panels[u].panes.push(u < l.panels.length && d < l.panels[u].panes.length ? new O(S(v({}, l.panels[u].panes[d]), { state: c })) : new O({ state: c })) : p.panels[u].panes.push(u < l.panels.length && d < l.panels[u].panes.length ? new O(v({}, l.panels[u].panes[d])) : new O);
    } return p; }), h(l => o.upsert(l))).subscribe(l => { a(l); }); }); } });
var Dn = $e({ id: "toggle_sidenav", title: "Toggle Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(s => s.toggle()); } }), $n = $e({ id: "open_sidenav", title: "Open Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(s => s.open()); } }), Fn = $e({ id: "close_sidenav", title: "Close Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(s => s.close()); } }), bt = X("[PageBuilder] Load Rest Data", K()), St = X("[PageBuilder] Load Rest Data Success", K()), Di = X("[PageBuilder] Load Rest Data Error", K()), wt = X("[PageBuilder] Set Page Info", K()), It = X("[PageBuilder] Set Form", K()), Ct = X("[PageBuilder] Set Page", K()), xt = X("[PageBuilder] Selection Path", K()), _n = (() => { class n {
    fetchRestdata$(e) { switch (e.method ? e.method : "get") {
        case "post":
        case "POST": return m([]).pipe(h(() => this.snippetParserService.parseSnippet({ snippet: e.body })), h(a => this.datasourceApi.postData({ url: e.url, body: a })));
        default: return this.datasourceApi.getData(e.url);
    } }
    constructor(e, t, a) { this.actions$ = e, this.datasourceApi = t, this.snippetParserService = a, this.loadRestData$ = Zt(() => this.actions$.pipe(en(bt), Rt(o => this.fetchRestdata$(o.rest).pipe(nt(() => []), f(l => o.rest.renderer !== void 0 && o.rest.renderer.query !== void 0 && o.rest.renderer.query !== "" ? Ae.JSONPath({ path: o.rest.renderer.query, json: l }) : l), f(l => St({ tag: o.tag, data: new _e({ results: l }) })))))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(mt.Actions), r.\u0275\u0275inject(L.DatasourceApiService), r.\u0275\u0275inject(gt.SnippetParserService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), De = class {
    constructor(s) { s && (this.id = s.id, this.path = s.path, this.realPath = s.realPath, this.args = s.args); }
}, jt = "pageBuilder", Tn = { dataTags: [], datasets: [], pageInfo: void 0, formNames: [], forms: [], page: void 0, selectionPath: [] }, kn = nn(Tn, ie(St, (n, s) => { let e = n.dataTags.findIndex(t => t === s.tag); if (e > -1 && n.forms[e] !== void 0) {
    let t = v({}, n);
    return t.datasets[e].push(s.data), t;
}
else
    return S(v({}, n), { dataTags: [...n.dataTags, s.tag], datasets: [...n.datasets, [s.data]] }); }), ie(It, (n, s) => { let e = n.formNames.findIndex(t => t === s.name); return e > -1 && n.forms[e] !== void 0 ? S(v({}, n), { forms: n.forms.map((t, a) => a === e ? s.form : t) }) : S(v({}, n), { formNames: [...n.formNames, s.name], forms: [...n.forms, s.form] }); }), ie(wt, (n, s) => S(v({}, n), { pageInfo: s.info !== void 0 ? new De(s.info) : void 0 })), ie(Ct, (n, s) => S(v({}, n), { page: s.page !== void 0 ? new $(s.page) : void 0 })), ie(xt, (n, s) => S(v({}, n), { selectionPath: s.path !== void 0 ? s.path : [] })));
function On(n, s) { return kn(n, s); }
var $i = new et("StylePlugin"), An = new et("PanelsSettings"), zn = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    handleFile(e) { return m(); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(e) { return m(!1); }
    isDynamic(e) { return !1; }
    isData(e) { return !1; }
    buildDynamicItems(e, t) { return m([]); }
    fetchDynamicData(e, t) { return m(new _e); }
    getBindings(e, t) { return m([]); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new E(this.attributeSerializer.deserialize(t))); }
    stateDefinition(e) { return m({}); }
    editorOptions(e) { return m(new Te); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Fi = (() => { class n {
    constructor(e, t, a, o, l, c, p, u, d, g, I, Y, H, b) { let w = Sn(e, a); o.registerMetadataMap(w), c.registerService("PanelPageState", new Ut("PanelPageState")), c.registerService("PanelPage", new xe("PanelPage", g, I, H)), c.registerService("PanelPageListItem", new xe("PanelPageListItem", g, I, H)), t.forEach(P => l.register(P)), l.register(xn({ handler: b })), p.register(Mn(u, d)), c.registerService("PanelPageForm", new xe("PanelPageForm", g, I, H)), [Dn, $n, Fn].map(P => Y.register(P)); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(_t), r.\u0275\u0275inject(Ce), r.\u0275\u0275inject(An), r.\u0275\u0275inject(z.EntityDefinitionService), r.\u0275\u0275inject(de.ContentPluginManager), r.\u0275\u0275inject(z.EntityDataService), r.\u0275\u0275inject(ft.BridgeBuilderPluginManager), r.\u0275\u0275inject(z.EntityServices), r.\u0275\u0275inject(k.AttributeSerializerService), r.\u0275\u0275inject(he.CrudAdaptorPluginManager), r.\u0275\u0275inject(z.EntityDefinitionService), r.\u0275\u0275inject(rt.InteractionHandlerPluginManager), r.\u0275\u0275inject(he.CrudDataHelperService), r.\u0275\u0275inject(zn)); }; }
    static { this.\u0275mod = r.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = r.\u0275\u0275defineInjector({ providers: [{ provide: A, useClass: A }, { provide: Ce, useFactory: Cn, multi: !0, deps: [A] }, { provide: Ce, useFactory: jn, multi: !0, deps: [yt] }, { provide: kt, useClass: Tt }], imports: [Ft, Et, Nt, sn.forFeature(jt, On), tn.forFeature([_n]), Ht, Gt, Wt, Yt, Qt, Xt] }); }
} return n; })(), We = class n {
    constructor(s) { s && (this.panelPage = s.panelPage, s.panel !== void 0 && s.panel !== null && (this.panel = s.panel), s.pane !== void 0 && s.pane !== null && (this.pane = s.pane), s.nested !== void 0 && s.nested !== null && typeof s.nested == "object" && (this.nested = new n(s.nested))); }
}, _i = (() => { class n {
    get gridItems() { return []; }
    constructor(e) { this.controlContainer = e, this.savable = !0, this.nested = !1, this.dashboard = [], this.layoutSetting = new T, this.rowSettings = [], this.ancestory = []; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(y.ControlContainer)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-editor-base"]], inputs: { savable: "savable", nested: "nested", editor: "editor", dashboard: "dashboard", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings", editablePaneTpl: "editablePaneTpl", extraActionsAreaTmpl: "extraActionsAreaTmpl", contextsMenuTpl: "contextsMenuTpl", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), Ti = (() => { class n {
    get columnSettings() { return this.panelPage ? this.panelPage.panels.reduce((t, a) => [...t, new T(a.columnSetting)], []) : []; }
    constructor(e) { this.controlContainer = e, this.displayMainControls = !1, this.displayItemHeader = !1; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(y.ControlContainer, 8)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-renderer-base"]], inputs: { panelPage: "panelPage", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", renderPanelTpl: "renderPanelTpl" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), ki = (() => { class n {
    constructor() { this.settings = [], this.panes = [], this.originMappings = [], this.ancestory = []; }
    mergeContexts(e) { if (!(e === void 0 && this.contexts === void 0))
        return e !== void 0 && this.contexts !== void 0 ? [...e, ...this.contexts] : e !== void 0 ? e : this.contexts; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-style-renderer-base"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", contexts: "contexts", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), En = (() => { class n {
    get panelPageService() { return this.es.getEntityCollectionService("PanelPage"); }
    constructor(e, t) { this.es = e, this.panelHandler = t; }
    reducePage(e) { return e.panels.reduce((t, a, o) => this.reducePanels(t, a, o), []); }
    reducePanels(e, t, a) { return [...e, ...t.panes.reduce((o, l, c) => this.reducePanes(o, l, c).map(p => p.pipe(f(([u, d]) => [a, u, d]))), [])]; }
    reducePanes(e, t, a) { return [...e, ...t.contentPlugin === "panel" ? [this.nestedPage$(t).pipe(f(o => [a, o]))] : []]; }
    nestedPage$(e) { return console.log("get nested panel page"), e.linkedPageId && e.linkedPageId !== "" ? this.getByKey(e.linkedPageId).pipe(F(() => console.log(`get(${e.linkedPageId})`))) : this.getEmbedded(e.settings).pipe(F(() => console.log("toObject()"))); }
    remapNested(e, t) { t.forEach(([a, o, l]) => { e.panels[a].panes[o].nestedPage = l; }); }
    getByKey(e) { return this.panelPageService.getByKey(e).pipe(f(t => new $(t)), h(t => D(() => this.reducePage(t).length > 0, C(this.reducePage(t)).pipe(F(a => this.remapNested(t, a)), f(() => t)), m(t)))); }
    getEmbedded(e) { return this.panelHandler.toObject(e).pipe(f(t => new $(t)), h(t => D(() => this.reducePage(t).length > 0, C(this.reducePage(t)).pipe(F(a => this.remapNested(t, a)), f(() => t)), m(t)))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(z.EntityServices), r.\u0275\u0275inject(A)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Oi = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    rebuildPage(e, t) { return new $(S(v({}, e), { panels: this.rebuildPanels(e.panels, [...t]) })); }
    rebuildPanels(e, t) { return e.filter((a, o) => this.rebuildCondition(t[0], o)).map(a => new q(S(v({}, a), { panes: this.rebuildPanes(a.panes, t.slice(1)) }))); }
    rebuildPanes(e, t) { return e.filter((a, o) => this.rebuildCondition(t[0], o)).map(a => a.contentPlugin === "panel" ? new E(S(v({}, a), { nestedPage: void 0, settings: this.panelHandler.buildSettings(this.rebuildPage(a.nestedPage, t.slice(1))) })) : new E(v({}, a))); }
    rebuildCondition(e, t) { return e !== 0 ? e > -1 ? t === e + e * -1 : t !== e * -1 + e : !0; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(A)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ai = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    convertPageToState(e) { return m(new _).pipe(h(() => C(e.panels.map(t => this.convertPanelToState(t)))), f(t => new _({ id: e.id, panels: t }))); }
    convertPanelToState(e) { return m(new B).pipe(h(() => C(e.panes.map(t => this.convertPaneToState(t)))), f(t => new B({ panes: t }))); }
    convertPaneToState(e) { return m(new O).pipe(h(t => D(() => this.hasNestedPanelPage(e), this.panelHandler.toObject(e.settings).pipe(h(a => this.convertPageToState(a)), f(a => new O({ state: new J, nestedPage: a }))), m(t)))); }
    hasNestedPanelPage(e) { return e.contentPlugin === "panel" && (e.linkedPageId === void 0 || e.linkedPageId === null || e.linkedPageId === ""); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(A)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Nn = (() => { class n {
    constructor(e) { this.panelsLoaderService = e; }
    walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: a, ancestory: o }) { return new be(l => { let c = e.panels.length, p = []; for (let u = 0; u < c; u++) {
        let d = e.panels[u].panes.length;
        for (let g = 0; g < d; g++)
            p.push(t({ pane: e.panels[u].panes[g], panelPage: e, ancestoryWithSelf: [...o, u, g] })), e.panels[u].panes[g].nestedPage && e.panels[u].panes[g].nestedPage.panels && e.panels[u].panes[g].nestedPage.panels.length !== 0 ? p.push(this.walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: a, ancestory: [...o, u, g] })) : e.panels[u].panes[g].contentPlugin;
    } p.length === 0 ? (l.next(a), l.complete()) : C(p).pipe(f(u => u.reduce((d, g) => [...d, ...g], a)), F(u => { l.next(u), l.complete(); })).subscribe(); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(En)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), zi = (() => { class n {
    constructor(e, t) { this.panelsVisitorService = e, this.cpm = t, this.gatherPaneContexts = ({ pane: a, panelPage: o, ancestoryWithSelf: l }) => this.cpm.getPlugin(a.contentPlugin).pipe(h(c => c.handler ? c.handler.stateDefinition(a.settings) : m({})), f(c => new re({ name: "panestate-" + l.join("-"), adaptor: "data", plugin: "panestate", data: { id: o ? o.id : "", selectionPath: [...l], value: c } })), f(c => [c]), se(1)); }
    allActivePageContexts({ panelPage: e, ancestory: t = [] }) { return this.panelsVisitorService.walkPageHierarchy({ panelPage: e, ancestory: t, visitorFunc: this.gatherPaneContexts, defaultv: [] }); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Nn), r.\u0275\u0275inject(de.ContentPluginManager)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Rn = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    buildToAncestorySpec({ panelPageState: e, ancestory: t }) { for (let a = 0; a < t[0] + 1; a++)
        if (e.panels.length < a + 1 && e.panels.push(new B), a === t[0] && t.length > 1)
            for (let o = 0; o < t[1] + 1; o++)
                e.panels[t[0]].panes.length < o + 1 && e.panels[t[0]].panes.push(new O({ state: this.attributeSerializer.serialize({}, "root") })), o === t[1] && t.length > 2 && (e.panels[t[0]].panes[o].nestedPage || (e.panels[t[0]].panes[o].nestedPage = new _), this.buildToAncestorySpec({ panelPageState: e.panels[t[0]].panes[o].nestedPage, ancestory: t.slice(2) })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ei = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Bn = (() => { class n extends an {
    constructor(e, t) { super(e, t); }
    pluginDef() { return m(new on({ name: "style" })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(vt.PluginConfigurationManager), r.\u0275\u0275inject(ct.ModuleLoaderService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ni = (() => { class n {
    constructor(e) { this.spm = e; }
    alterResolvedPanes({ panel: e, resolvedPanes: t, originMappings: a }) { return m(void 0).pipe(h(() => e.stylePlugin && e.stylePlugin !== "" ? this.spm.getPlugin(e.stylePlugin) : m(void 0)), h(o => o && o.handler ? o.handler.alterResolvedPanes({ settings: e.settings, resolvedPanes: t, originMappings: a }) : m({ resolvedPanes: t, originMappings: a }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Bn)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ri = (() => { class n {
    constructor(e, t, a, o) { this.panelHandler = e, this.rulesResolver = t, this.inlineContextResolver = a, this.cpm = o; }
    usedContexts(e) { return this.panesPlugins(e).pipe(h(t => this.dataPanes(e).pipe(f(a => ({ plugins: t, dataPanes: a })))), h(({ plugins: t, dataPanes: a }) => C(e.reduce((o, l) => { let c = t.get(l.contentPlugin); return c.handler !== void 0 ? [...o, c.handler.getBindings(l.settings, "context", new Map([["dataPanes", a]])).pipe(f(p => p.map(u => u.id)))] : [...o]; }, [])).pipe(f(o => o.reduce((l, c) => [...l, ...c], []))))); }
    staticPanes(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])).pipe(f(t => e.filter(a => t.get(a.contentPlugin).handler === void 0 || !t.get(a.contentPlugin).handler.isDynamic(a.settings)))); }
    dataPanes(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])).pipe(f(t => e.filter(a => t.get(a.contentPlugin).handler !== void 0 && t.get(a.contentPlugin).handler.isData(a.settings)))); }
    panesPlugins(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])); }
    resolvePanes({ panes: e, contexts: t, resolvedContext: a }) { return console.log("resolve panes"), this.panesPlugins(e).pipe(h(o => C(e.reduce((l, c) => { let p = o.get(c.contentPlugin); return p.handler !== void 0 ? [...l, p.handler.getBindings(c.settings, "pane").pipe(f(u => u.map(d => d.id)))] : [...l, m([])]; }, [])))).pipe(f(o => o.reduce((l, c) => [...l, ...c], [])), h(o => this.panesPlugins(e).pipe(f(l => [o, l]))), h(([o, l]) => C(e.reduce((c, p) => { let u = l.get(p.contentPlugin); return u.handler !== void 0 && u.handler.isDynamic(p.settings) ? [...c, u.handler.isData(p.settings) && o.findIndex(d => d === p.name) !== -1 ? m([]) : C([this.staticPanes(e), this.dataPanes(e)]).pipe(h(([d, g]) => u.handler.buildDynamicItems(p.settings, new Map([...p.metadata === void 0 ? [] : p.metadata, ["tag", V()], ["panes", d], ["dataPanes", g], ["contexts", t !== void 0 ? t : []]])).pipe(f(I => this.panelHandler.fromPanes(I)), f(I => this.panelHandler.wrapPanel(I).panes), se(1))))] : p.name === "" || o.findIndex(d => d === p.name) === -1 ? [...c, m([new E(S(v({}, p), { contexts: [...t, ...p.contexts ? p.contexts : []] }))]).pipe(h(d => D(() => d[0].rule !== void 0 && d[0].rule !== null && d[0].rule.condition !== "", this.rulesResolver.evaluate(d[0].rule, [...t, ...p.contexts ? p.contexts : []]).pipe(f(g => g ? d : [])), m(d))))] : [...c]; }, [])).pipe(h(c => D(() => c.reduce((p, u) => [...p, ...u], []).length === 0, m([c, []]), C([...c.reduce((p, u) => [...p, ...u.map(d => d.contexts && d.contexts.length !== 0 ? this.inlineContextResolver.resolveAll(d.contexts).pipe(se(1)) : m({}).pipe(se(1)))], [])]).pipe(f(p => [c, p.map(u => v(v({}, u), a))])))), f(([c, p]) => { let u = [], d = []; return c.forEach((g, I) => { u = [...u === void 0 ? [] : u, ...g.map((Y, H) => new E(S(v({}, Y), { resolvedContext: p[u.length + H] })))], d = [...d && [], ...g.map(() => I)]; }), { resolvedPanes: u, originMappings: d }; })))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(A), r.\u0275\u0275inject(Oe.RulesResolverService), r.\u0275\u0275inject(it.InlineContextResolverService), r.\u0275\u0275inject(de.ContentPluginManager)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ze = class extends ln {
    constructor(s) { super(s), s && (this.name = this.id, this.title = s.title, this.editorComponent = s.editorComponent ? s.editorComponent : void 0, this.renderComponent = s.renderComponent ? s.renderComponent : void 0, s.handler && (this.handler = s.handler)); }
}, Bi = (() => { class n extends cn {
    constructor() { super(), this.pageChange$ = new Ge, this.pageSize = 20, this.dataStream = new Q([]), this.subscription = new Be, this.lastPage = 0, this.paneItems = []; }
    set panes(e) { this.paneItems = [...this.paneItems, ...e], this.dataStream.next(this.paneItems); }
    connect(e) { return this.subscription.add(e.viewChange.subscribe(t => { let a = Math.ceil((t.end + 1) / this.pageSize); a > this.lastPage && (this.lastPage = a, this.pageChange$.next(a)); })), this.dataStream; }
    disconnect(e) { this.subscription.unsubscribe(); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), te = rn(jt), Gi = n => U(te, s => { let e = s.dataTags.findIndex(t => t === n); if (e > -1)
    return s.datasets[e][s.datasets[e].length - 1]; }), Gn = U(te, n => n.pageInfo), Ln = U(te, n => n.page), Un = U(te, n => n.selectionPath), Mt = U(te, n => n.formNames), Hn = U(te, n => n.forms), Vn = U(Mt, Hn, (n, s, e) => { let t = n.findIndex(a => a === e.name); if (t > -1)
    return s[t]; }), qn = (() => { class n {
    constructor(e) { this.store = e, this.getPageInfo$ = this.store.pipe(Z(Gn)), this.getPage$ = this.store.pipe(Z(Ln)), this.getSelectionPath$ = this.store.pipe(Z(Un)), this.getFormNames$ = this.store.pipe(Z(Mt)), this.getForm$ = t => this.store.pipe(Z(Vn, { name: t })); }
    loadRestData(e, t) { this.store.dispatch(bt({ tag: e, rest: t })); }
    setPageInfo(e) { this.store.dispatch(wt({ info: e })); }
    setPage(e) { this.store.dispatch(Ct({ page: e })); }
    setSelectionPath(e) { this.store.dispatch(xt({ path: e })); }
    setForm(e, t) { this.store.dispatch(It({ name: e, form: t })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(ht.Store)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Li = (() => { class n {
    constructor(e, t, a, o) { this.pageBuilderFacade = e, this.panelStateArchitectService = t, this.attributeSerializer = a, this.selectEntities = l => l.entities, this.selectById = ({ id: l }) => U(this.selectEntities, c => c[l] ? c[l] : void 0), this.panelPageStateService = o.getEntityCollectionService("PanelPageState"); }
    mergeState({ state: e, settings: t, plugin: a, ancestory: o }) { return m(e).pipe(h(l => this.pageBuilderFacade.getPageInfo$.pipe(f(c => [l, c]))), h(([l, c]) => a.handler.stateDefinition(t).pipe(f(p => [l, c, p]))), h(([l, c, p]) => this.panelPageStateService.collection$.pipe(Z(this.selectById({ id: c.id })), f(u => [l, new _(u || { id: c.id, panels: [] }), p]), se(1))), f(([l, c, p]) => { this.panelStateArchitectService.buildToAncestorySpec({ panelPageState: c, ancestory: [...o] }); let u = "$." + o.map((g, I) => `${(I + 1) % 2 === 0 ? "panes" : (I === 0 ? "" : "nestedPage.") + "panels"}[${g}]`).join("."), d = Ae.JSONPath({ path: u, json: c })[0]; return [l, c, p, d]; }), F(([l, c, p, u]) => { let d = u.state ? u.state.root ? this.attributeSerializer.deserialize(u.state).root : this.attributeSerializer.deserialize(u.state) : {}, g = un(!d || Object.keys(d).length === 0 ? p : d, l); u.state = this.attributeSerializer.serialize(g, "root"); }), f(([l, c, p, u]) => ({ paneState: u, pageState: c }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(qn), r.\u0275\u0275inject(Rn), r.\u0275\u0275inject(k.AttributeSerializerService), r.\u0275\u0275inject(z.EntityServices)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ui = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    serializeForm(e) { let t = e.panels.length, a = {}; for (let o = 0; o < t; o++) {
        let l = e.panels[o].panes.length, c = new Map;
        for (let p = 0; p < l; p++) {
            let u = this.serializeFormPane(e.panels[o].panes[p]);
            if (e.panels[o].panes[p].name && e.panels[o].panes[p].name !== null && (a[e.panels[o].panes[p].name] || e.panels[o].panes[p].name === pn(e.panels[o].panes[p].name))) {
                c.has(e.panels[o].panes[p].name) || c.set(e.panels[o].panes[p].name, typeof a[e.panels[o].panes[p].name] < "u" ? [a[e.panels[o].panes[p].name]] : []);
                let d = c.get(e.panels[o].panes[p].name);
                c.set(e.panels[o].panes[p].name, [...d, u]);
            }
            else
                e.panels[o].panes[p].name && e.panels[o].panes[p].name !== "" ? a = S(v({}, a), { [e.panels[o].panes[p].name]: u }) : a = v(v({}, a), u);
        }
        Array.from(c).forEach(([p, u]) => a[p] = u);
    } return a; }
    serializeFormPane(e) { if (e.contentPlugin === "panel")
        return this.serializeForm(new ae(this.attributeSerializer.deserializeAsObject(e.settings, !0))); {
        let t = this.attributeSerializer.deserializeAsObject(e.settings, !0);
        return t !== void 0 ? t.value : void 0;
    } }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Hi = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    convertPageToForm({ pp: e, pp2: t, ancestory: a, debugPath: o = [] }) { return m(new _).pipe(h(() => C(e.panels.map((l, c) => this.convertPanelToForm({ panel: l, panel2: t.panels[c], ancestory: a, debugPath: [...o, `convertPageToForm{ index: ${c} }`] })))), f(l => new ae({ id: e.id, panels: l, name: t.name, title: t.title, derivativeId: "" }))); }
    convertPanelToForm({ panel: e, panel2: t, ancestory: a, debugPath: o = [] }) { return m(new oe).pipe(h(() => C(e.panes.map((l, c) => this.convertPaneToForm({ pane: l, pane2: t.panes[c], ancestory: a, debugPath: [...o, `convertPanelToForm{ index: ${c} }`] })))), f(l => new oe({ panes: l, name: t.name, label: t.label }))); }
    convertPaneToForm({ pane: e, pane2: t, ancestory: a, debugPath: o = [] }) { let l = e.state.attributes.find(c => c.name === "value"); return m(new le({ settings: l ? [l] : [], name: t.name, label: t.label, contentPlugin: t.contentPlugin })).pipe(h(c => D(() => this.hasNestedPanelPage(e), e.nestedPage ? this.convertPageToForm({ ancestory: a, pp: e.nestedPage, pp2: new $(this.attributeSerializer.deserializeAsObject(t.settings)), debugPath: [...o, "convertPaneToForm"] }).pipe(f(p => new le(S(v({}, c), { settings: this.attributeSerializer.serialize(p, "root").attributes })))) : m(c), m(c)))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Vi = (() => { class n {
    constructor(e, t) { this.attributeSerializer = e, this.fb = t; }
    makeFormGroupFromPage(e, t) { return m(this.fb.group({ panels: this.fb.array([]) })).pipe(h(a => C(e.panels.map((o, l) => this.makeFormGroupFromPanel(o, t.panels[l]))).pipe(f(o => ({ panelGroups: o, pageFormGroup: a })))), F(({ panelGroups: a, pageFormGroup: o }) => { let l = a.length; for (let c = 0; c < l; c++)
        o.get("panels").push(a[c]); }), f(({ pageFormGroup: a }) => a)); }
    makeFormGroupFromPanel(e, t) { return m(this.fb.group({ name: this.fb.control(e.name), panes: this.fb.array([]) })).pipe(h(a => C(e.panes.map((o, l) => this.makeFormGroupFromPane(o, t.panes[l]))).pipe(f(o => ({ paneGroups: o, panelFormGroup: a })))), F(({ paneGroups: a, panelFormGroup: o }) => { let l = a.length; for (let c = 0; c < l; c++)
        o.get("panes").push(a[c]); }), f(({ panelFormGroup: a }) => a)); }
    makeFormGroupFromPane(e, t) { let a = t ? t.settings.find(o => o.name === "value") : void 0; return m(this.fb.group({ name: this.fb.control(e.name), contentPlugin: this.fb.control(""), settings: this.fb.array([]) })).pipe(h(o => D(() => this.hasNestedPanelPage(e), this.hasNestedPanelPage(e) ? this.makeFormGroupFromPage(e.nestedPage, new ae(this.attributeSerializer.deserializeAsObject(t.settings))).pipe(F(l => { let c = this.attributeSerializer.convertToGroup(this.attributeSerializer.serialize(l.value, "value").attributes[0]); o.get("contentPlugin").setValue("panel"), o.get("settings").push(c); }), f(() => o)) : m(o).pipe(F(() => { if (a) {
        let l = this.attributeSerializer.convertToGroup(a);
        o.get("settings").push(l);
    } })), m(o).pipe(F(() => { if (a) {
        let l = this.attributeSerializer.convertToGroup(a);
        o.get("settings").push(l);
    } }))))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService), r.\u0275\u0275inject(y.UntypedFormBuilder)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), qi = (() => { class n {
    makeJsonNode() { return { attributes: {}, children: {} }; }
    reduceCss(e, t, a = !0) { return e && e.children ? Object.keys(e.children).filter(o => a ? o.indexOf(t) === 0 : o.indexOf(t) !== 0).reduce((o, l) => S(v({}, o), { children: S(v({}, o.children), { [a ? l.substr(l.indexOf(t) + t.length).trim() : l]: e.children[l] }) }), this.makeJsonNode()) : this.makeJsonNode(); }
    reduceSelector(e, t, a = !0) { return e ? Object.keys(e).filter(o => a ? o.indexOf(t) === 0 : o.indexOf(t) !== 0).reduce((o, l) => S(v({}, o), { [a ? l.substr(l.indexOf(t) + t.length).trim() : l]: e[l] }), {}) : {}; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
export { qi as CssHelperService, yt as DatasourceContentHandler, In as DatasourceEditorComponent, Ei as DynamicPaneService, Xe as FormDatasource, Vi as FormGroupConverterService, Ui as FormService, Hi as FormStateConverterService, ue as GridItem, Qe as GridLayout, _i as LayoutEditorBaseComponent, Ti as LayoutRendererBaseComponent, T as LayoutSetting, An as PANELS_SETTINGS, qn as PageBuilderFacade, E as Pane, Bi as PaneDatasourceService, Je as PanePropsFormPayload, O as PaneState, Li as PaneStateService, q as Panel, A as PanelContentHandler, wn as PanelEditorComponent, $ as PanelPage, ae as PanelPageForm, le as PanelPageFormPane, oe as PanelPageFormPanel, Mi as PanelPageLinkedlistComponent, Ye as PanelPageListItem, pe as PanelPagePermissions, We as PanelPageSelector, _ as PanelPageState, De as PanelPageStateSlice, qe as PanelPropsFormPayload, Ri as PanelResolverService, Pt as PanelSelectorComponent, B as PanelState, Rn as PanelStateArchitectService, Ai as PanelStateConverterService, ki as PanelStyleRendererBaseComponent, zi as PanelsContextService, En as PanelsLoaderService, Fi as PanelsModule, Oi as PanelsSelectorService, Ke as PanelsSettings, Nn as PanelsWalkerService, je as PrerenderFormPayload, Ve as PropertiesFormPayload, $i as STYLE_PLUGIN, Me as SelectionFormPayload, Ze as StylePlugin, Bn as StylePluginManager, Ni as StyleResolverService, Tn as initialState, bt as loadRestData, Di as loadRestDataError, St as loadRestDataSuccess, jt as pageBuilderFeatureKey, On as reducer, Gi as selectDataset, Vn as selectForm, Mt as selectFormNames, Hn as selectForms, Ln as selectPage, te as selectPageBuilderState, Gn as selectPageInfo, Un as selectSelectionPath, It as setForm, Ct as setPage, wt as setPageInfo, xt as setSelectionPath };
