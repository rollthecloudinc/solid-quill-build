import { a as jt } from "@nf-internal/chunk-EOHDPEXE";
import { a as V } from "@nf-internal/chunk-VJMH5IEE";
import { g as C, i as D } from "@nf-internal/chunk-FYX6O4YR";
import { b as Ne, f as be, k as Re, l as Y, z as m } from "@nf-internal/chunk-STIBVO4O";
import { a as v, b as S, e as xt, g as Ee } from "@nf-internal/chunk-2AVGQ2MQ";
var Ge = xt((Se, Be) => {
    (function (n, s) { typeof define == "function" && define.amd ? define([], s) : typeof Se == "object" ? Be.exports = s() : n.CSSJSON = s(); })(Se, function () {
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
                            var Ae = x[g].trim(), Pe = l.exec(Ae);
                            if (Pe) {
                                var M = Pe[1].trim(), ye = Pe[2].trim();
                                if (w.ordered) {
                                    var R = {};
                                    R.name = M, R.value = ye, R.type = "attr", P[N++] = R;
                                }
                                else if (M in P.attributes) {
                                    var ze = P.attributes[M];
                                    ze instanceof Array || (P.attributes[M] = [ze]), P.attributes[M].push(ye);
                                }
                                else
                                    P.attributes[M] = ye;
                            }
                            else
                                P[N++] = Ae;
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
                                for (var Oe in ce.attributes)
                                    P.children[ve].attributes[Oe] = ce.attributes[Oe];
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
                                x += B(i, N[ne], w);
                        else
                            x += B(i, N, w);
                    }
                if (b.children) {
                    var M = !0;
                    for (i in b.children)
                        P && !M ? x += `
` : M = !1, x += te(i, b.children[i], w);
                }
                return x;
            };
            var B = function (b, w, P) {
                return "	".repeat(P) + b + ": " + w + `;
`;
            }, te = function (b, w, P) {
                var x = "	".repeat(P) + b + ` {
`;
                return x += s.toCSS(w, P + 1), x += "	".repeat(P) + `}
`, x;
            };
        };
        return n;
    });
});
import * as L from "@angular/common";
import { isPlatformServer as we, CommonModule as Mt } from "@angular/common";
import * as r from "@angular/core";
import { forwardRef as Le, InjectionToken as We, PLATFORM_ID as Dt } from "@angular/core";
import * as z from "@ngrx/data";
import { DefaultPluralizer as $t, Pluralizer as Ft } from "@ngrx/data";
import * as y from "@angular/forms";
import { NG_VALUE_ACCESSOR as _t, NG_VALIDATORS as Tt, UntypedFormControl as j, Validators as Q, UntypedFormArray as kt, FormsModule as Ot, ReactiveFormsModule as At } from "@angular/forms";
import { map as f, switchMap as h, filter as Ze, defaultIfEmpty as Ie, catchError as et, concatMap as zt, tap as F, take as se } from "rxjs/operators";
import * as k from "@rollthecloudinc/attributes";
import { AttributeValue as J } from "@rollthecloudinc/attributes";
import * as tt from "@rollthecloudinc/context";
import { InlineContext as re } from "@rollthecloudinc/context";
import { PersistenceFormPayload as nt } from "@rollthecloudinc/refinery";
import { InteractionsFormPayload as Et } from "@rollthecloudinc/detour";
import * as U from "@rollthecloudinc/datasource";
import { Datasource as De, Dataset as $e, DatasourceModule as Nt } from "@rollthecloudinc/datasource";
import * as de from "@rollthecloudinc/content";
import { ContentPluginEditorOptions as Fe, ContentBinding as Rt, ContentPlugin as _e, CONTENT_PLUGIN as Ce } from "@rollthecloudinc/content";
import * as it from "@angular/material/autocomplete";
import * as st from "@angular/material/input";
import * as rt from "@angular/material/select";
import * as at from "@rollthecloudinc/utils";
import { SITE_NAME as ot, NoopDataService as Bt } from "@rollthecloudinc/utils";
import { MaterialModule as Gt } from "@rollthecloudinc/material";
var qt = Ee(Ge(), 1), ke = Ee(jt(), 1);
import * as lt from "@angular/material/bottom-sheet";
import * as fe from "@angular/material/dialog";
import { MAT_DIALOG_DATA as Lt } from "@angular/material/dialog";
import * as ct from "@angular/material/grid-list";
import * as me from "@angular/material/list";
import * as Z from "@angular/material/tabs";
import * as ut from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as Ut, PublicApiBridgeService as Ht } from "@rollthecloudinc/bridge";
import * as he from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as pi, CrudDataService as xe, CrudModule as Vt } from "@rollthecloudinc/crud";
import * as Te from "@rollthecloudinc/rules";
import { Aws3Module as Jt } from "@rollthecloudinc/aws3";
import { AwosModule as Xt } from "@rollthecloudinc/awos";
import { AuthModule as Kt } from "@rollthecloudinc/auth";
import * as pt from "@ngrx/effects";
import { createEffect as Yt, ofType as Qt, EffectsModule as Wt } from "@ngrx/effects";
import * as dt from "@ngrx/store";
import { createAction as X, props as K, createReducer as Zt, on as ie, StoreModule as en, createFeatureSelector as tn, createSelector as H, select as W } from "@ngrx/store";
import * as ft from "@rollthecloudinc/snippet";
import * as mt from "@rollthecloudinc/plugin";
import { BasePluginManager as nn, PluginDef as sn, Plugin as rn } from "@rollthecloudinc/plugin";
import { DataSource as an } from "@angular/cdk/collections";
import on from "deepmerge-json";
import { pluralize as ln } from "inflected";
function cn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 5), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1("panel page | level: ", e);
} }
function un(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 3), r.\u0275\u0275template(2, cn, 2, 2, "mat-option", 4), r.\u0275\u0275pipe(3, "async"), r.\u0275\u0275elementEnd()()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(2), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(3, 1, e.panelPages$));
} }
function pn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 5), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1("panel | ", e);
} }
function dn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 6), r.\u0275\u0275template(2, pn, 2, 2, "mat-option", 4), r.\u0275\u0275pipe(3, "async"), r.\u0275\u0275elementEnd()()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(2), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(3, 1, e.panels$));
} }
function fn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 5), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1("pane | ", e);
} }
function mn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 7), r.\u0275\u0275template(2, fn, 2, 2, "mat-option", 4), r.\u0275\u0275pipe(3, "async"), r.\u0275\u0275elementEnd()()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(2), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(3, 1, e.panes$));
} }
function hn(n, s) { if (n & 1 && r.\u0275\u0275element(0, "druid-panels-panelpage-linkedlist", 8), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275property("panelPages", e.nested);
} }
function gn(n, s) { if (n & 1) {
    let e = r.\u0275\u0275getCurrentView();
    r.\u0275\u0275elementStart(0, "a", 2), r.\u0275\u0275listener("click", function () { let a = r.\u0275\u0275restoreView(e).$implicit, o = r.\u0275\u0275nextContext(2); return r.\u0275\u0275resetView(o.onItemSelect(a.id)); }), r.\u0275\u0275elementStart(1, "span", 6), r.\u0275\u0275text(2), r.\u0275\u0275elementEnd()();
} if (n & 2) {
    let e = s.$implicit;
    r.\u0275\u0275advance(2), r.\u0275\u0275textInterpolate2("", e.title, " [", e.id, "]");
} }
function vn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-nav-list"), r.\u0275\u0275template(1, gn, 3, 2, "a", 5), r.\u0275\u0275pipe(2, "async"), r.\u0275\u0275elementEnd()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(2, 1, e.panels$));
} }
var Pn = (n, s) => ({ PanelPageListItem: { entityName: "PanelPageListItem", crud: S(v({}, we(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }), { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }) }, PanelPage: { entityName: "PanelPage", crud: v(S(v({ save: { ops: ["create", "update"], plugin: "rest", params: { entityName: "PanelPage" } } }, we(n) ? {} : { readPrimary: { fallback: !0, ops: ["create", "update", "query"], plugin: "idb_keyval", params: { prefix: "panelpage__" } } }), { readFallback: { fallback: !0, ops: ["query"], plugin: "rest", params: { entityName: "PanelPage", root: s.objectsRootUrl, suffix: ".json" } } }), we(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" } } }) }, PanelPageState: { entityName: "PanelPageState" } }), Ue = class {
    constructor(s) { this.readUserIds = [], s && (this.title = s.title, this.name = s.name, this.path = s.path, this.cssFile = s.cssFile, s.readUserIds && (this.readUserIds = s.readUserIds.map(e => e))); }
}, He = class {
    constructor(s) { s && (this.label = s.label, this.name = s.name); }
}, Ve = class {
    constructor(s) { s && (this.label = s.label, this.name = s.name); }
}, ae = class {
    constructor(s) { this.panels = [], s && (this.id = s.id, this.name = s.name, this.title = s.title, this.derivativeId = s.derivativeId, this.valid = !!s.valid, s.persistence && (this.persistence = new nt(s.persistence)), s.panels && (this.panels = s.panels.map(e => new oe(e)))); }
}, oe = class {
    constructor(s) { this.panes = [], s && (this.name = s.name, this.label = s.label, s.panes && (this.panes = s.panes.map(e => new le(e)))); }
}, le = class {
    constructor(s) { this.settings = [], s && (this.name = s.name, this.label = s.label, this.contentPlugin = s.contentPlugin, s.settings && (this.settings = s.settings.map(e => new J(e)))); }
}, qe = class {
    constructor(s) { s && (this.name = s.name, this.field = s.field); }
}, je = class {
    constructor(s) { s && (this.route = s.route, s.datasource && (this.datasource = new De(s.datasource))); }
}, Je = class {
    constructor(s) { s && (this.openSearchDomain = s.openSearchDomain, this.s3Bucket = s.s3Bucket, this.objectsRootUrl = s.objectsRootUrl); }
}, $ = class {
    constructor(s) { this.gridItems = [], this.panels = [], this.contexts = [], this.rowSettings = [], this.entityPermissions = new pe, s && (this.id = s.id, this.layoutType = s.layoutType, this.displayType = s.displayType, this.name = s.name ? s.name : void 0, this.title = s.title ? s.title : void 0, this.site = s.site ? s.site : void 0, this.userId = s.userId ? s.userId : void 0, this.path = s.path ? s.path : void 0, this.persistence = s.persistence ? new nt(s.persistence) : void 0, this.interactions = s.interactions ? new Et(s.interactions) : void 0, this.prerender = s.prerender ? new je(s.prerender) : void 0, s.panels && (this.panels = s.panels.map(e => new q(e))), s.gridItems && (this.gridItems = s.gridItems.map(e => new ue(e))), s.contexts && (this.contexts = s.contexts.map(e => new re(e))), s.layoutSetting && (this.layoutSetting = new T(s.layoutSetting)), s.rowSettings && Array.isArray(s.rowSettings) && (this.rowSettings = s.rowSettings.map(e => new T(e))), s.entityPermissions && (this.entityPermissions = new pe(s.entityPermissions)), s.cssFile && (this.cssFile = s.cssFile)); }
}, Xe = class extends $ {
}, Ke = class {
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
    fetchDynamicData(e, t) { return m(new $e); }
    getBindings(e, t) { return m([]); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new E(this.attributeSerializer.deserialize(t))); }
    wrapPanel(e) { return new q({ stylePlugin: void 0, settings: [], panes: e, columnSetting: new T }); }
    stateDefinition(e) { return m({}); }
    editorOptions(e) { return m(new Fe); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Si = (() => { class n {
    set panelPages(e) { this.panelPages$.next(e); }
    set panels(e) { this.panels$.next(e); }
    set panes(e) { this.panes$.next(e); }
    get panelPages() { return this.panelPages$.value && Array.isArray(this.panelPages$.value) ? this.panelPages$.value : []; }
    get panels() { return this.panels$.value && Array.isArray(this.panels$.value) ? this.panels$.value : []; }
    get panes() { return this.panes$.value && Array.isArray(this.panes$.value) ? this.panes$.value : []; }
    get nested() { return this.nested$.value && typeof this.nested$.value !== void 0 && this.nested$.value.length > 0 ? [...this.nested$.value] : void 0; }
    constructor(e, t) { this.fb = e, this.panelHandler = t, this.panelPages$ = new Y([]), this.panels$ = new Y([]), this.panes$ = new Y([]), this.nested$ = new Y([]), this.formGroup = this.fb.group({ panelPage: this.fb.control(void 0), panel: this.fb.control(void 0), pane: this.fb.control(void 0), nested: this.fb.control(void 0) }), this.panelPageSub = this.formGroup.get("panelPage").valueChanges.subscribe(a => { this.panels$.next(new $(this.panelPages$.value[a]).panels); }), this.panelSub = this.formGroup.get("panel").valueChanges.subscribe(a => { this.panes$.next(new q(this.panels$.value[a]).panes); }), this.paneSub = this.formGroup.get("pane").valueChanges.pipe(f(a => this.panes$.value[a]), h(a => D(() => a.contentPlugin === "panel", this.panelHandler.toObject(a.settings), m(void 0))), Ze(a => !!a)).subscribe(a => { this.nested$.next([a]); }), this.onTouched = () => { }; }
    writeValue(e) { e && this.formGroup.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.formGroup.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(e) { return this.formGroup.valid ? null : { invalidForm: { valid: !1 } }; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(y.UntypedFormBuilder), r.\u0275\u0275directiveInject(A)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["druid-panels-panelpage-linkedlist"]], inputs: { panelPages: "panelPages", panels: "panels", panes: "panes" }, standalone: !1, features: [r.\u0275\u0275ProvidersFeature([{ provide: _t, useExisting: Le(() => n), multi: !0 }, { provide: Tt, useExisting: Le(() => n), multi: !0 }])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "nested", 3, "panelPages", 4, "ngIf"], ["required", "", "formControlName", "panelPage"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["required", "", "formControlName", "panel"], ["required", "", "formControlName", "pane"], ["formControlName", "nested", 3, "panelPages"]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "div", 0), r.\u0275\u0275template(1, un, 4, 3, "mat-form-field", 1)(2, dn, 4, 3, "mat-form-field", 1)(3, mn, 4, 3, "mat-form-field", 1)(4, hn, 1, 1, "druid-panels-panelpage-linkedlist", 2), r.\u0275\u0275elementEnd()), t & 2 && (r.\u0275\u0275property("formGroup", a.formGroup), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.panelPages.length > 0), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.panels.length > 0), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.panes.length > 0), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.nested)); }, dependencies: [L.NgForOf, L.NgIf, y.NgControlStatus, y.NgControlStatusGroup, y.RequiredValidator, y.FormGroupDirective, y.FormControlName, it.MatOption, st.MatFormField, rt.MatSelect, n, L.AsyncPipe], encapsulation: 2 }); }
} return n; })(), ht = (() => { class n {
    constructor(e, t, a, o, l, c) { this.siteName = e, this.bottomSheetRef = t, this.handler = a, this.dialog = o, this.fb = l, this.selectedIndex = 0, this.panelPagesService = c.getEntityCollectionService("PanelPage"), this.panelPageListItemsService = c.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { }
    onNewSelect() { let e = V(), t = new $({ id: void 0, layoutType: "split", displayType: "page", site: this.siteName, gridItems: [], panels: [], layoutSetting: new T, rowSettings: [] }); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new j(""), settings: this.fb.array(this.handler.buildSettings(t).map(a => this.convertToGroup(a))) })), this.bottomSheetRef.dismiss(); }
    onLinkSelect() { this.selectedIndex = 1, this.panels$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(this.siteName)}`); }
    onEmbedSelect() { let e = V(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new j(""), locked: new j(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onYieldSelect() { let e = V(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "yield", name: e, label: e, rule: new j(""), locked: new j(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onItemSelect(e) { let t = V(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: t, label: t, rule: new j(""), linkedPageId: new j(e, Q.required), locked: new j(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    convertToGroup(e) { let t = this.fb.group({ name: new j(e.name, Q.required), type: new j(e.type, Q.required), displayName: new j(e.displayName, Q.required), value: new j(e.value, Q.required), computedValue: new j(e.value, Q.required), attributes: new kt([]) }); return e.attributes && e.attributes.length > 0 && e.attributes.forEach(a => { t.get("attributes").push(this.convertToGroup(a)); }), t; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(ot), r.\u0275\u0275directiveInject(lt.MatBottomSheetRef), r.\u0275\u0275directiveInject(A), r.\u0275\u0275directiveInject(fe.MatDialog), r.\u0275\u0275directiveInject(y.UntypedFormBuilder), r.\u0275\u0275directiveInject(z.EntityServices)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-selector"]], inputs: { panelFormGroup: "panelFormGroup" }, standalone: !1, decls: 13, vars: 1, consts: [["mat-align-tabs", "start", 3, "selectedIndex"], ["label", "Type"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["label", "Search"], ["matTabContent", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-line", ""]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "mat-nav-list")(3, "a", 2), r.\u0275\u0275listener("click", function () { return a.onNewSelect(); }), r.\u0275\u0275text(4, "New Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(5, "a", 2), r.\u0275\u0275listener("click", function () { return a.onLinkSelect(); }), r.\u0275\u0275text(6, "Link Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(7, "a", 2), r.\u0275\u0275listener("click", function () { return a.onEmbedSelect(); }), r.\u0275\u0275text(8, "Embed Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(9, "a", 2), r.\u0275\u0275listener("click", function () { return a.onYieldSelect(); }), r.\u0275\u0275text(10, "Yield"), r.\u0275\u0275elementEnd()()(), r.\u0275\u0275elementStart(11, "mat-tab", 3), r.\u0275\u0275template(12, vn, 3, 3, "ng-template", 4), r.\u0275\u0275elementEnd()()), t & 2 && r.\u0275\u0275property("selectedIndex", a.selectedIndex); }, dependencies: [L.NgForOf, ct.MatLine, me.MatNavList, me.MatListItem, Z.MatTabContent, Z.MatTab, Z.MatTabGroup, L.AsyncPipe], encapsulation: 2 }); }
} return n; })(), yn = (() => { class n {
    constructor() { }
    ngOnInit() { }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-editor"]], standalone: !1, decls: 2, vars: 0, template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "p"), r.\u0275\u0275text(1, "panel-editor works!"), r.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return n; })(), _ = class {
    constructor(s) { this.panels = [], s && (this.id = s.id, s.panels !== void 0 && Array.isArray(s.panels) && (this.panels = s.panels.map(e => new G(e)))); }
}, G = class {
    constructor(s) { this.panes = [], s && s.panes !== void 0 && Array.isArray(s.panes) && (this.panes = s.panes.map(e => new O(e))); }
}, O = class {
    constructor(s) { s && (s.state !== void 0 && (this.state = new J(s.state)), s.nestedPage !== void 0 && s.nestedPage !== null && (this.nestedPage = new _(s.nestedPage))); }
}, gt = (() => { class n {
    constructor(e, t, a, o, l, c) { this.siteName = e, this.panelHandler = t, this.attributeSerializer = a, this.rulesResolver = o, this.dpm = l, this.datasourceEvalutator = c; }
    handleFile(e) { return m([]); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(e) { return m(!1); }
    isDynamic(e) { return !0; }
    isData(e) { return !0; }
    fetchDynamicData(e, t) { let a = t.has("dataPanes") ? new Map(t.get("dataPanes").map(l => [l.name, l])) : new Map([]), o = new Map(Array.from(a).map(([l, c]) => [l, new De(this.attributeSerializer.deserializeAsObject(c.settings))])); return this.toObject(e).pipe(h(l => this.datasourceEvalutator.evalDatasource({ datasource: l, metadata: t, datasources: o }))); }
    buildDynamicItems(e, t) { let a = new Map(t.get("dataPanes").map(o => [o.name, o])); return this.fetchDynamicData(e, t).pipe(h(o => this.toObject(e).pipe(f(l => [l, o]))), h(([o, l]) => this.getBindings(e, "pane").pipe(f(c => [o, l, c]))), h(([o, l, c]) => D(() => l.results.length !== 0 && c.length > 0, C(l.results.map(p => C(c.filter(u => !a.has(u.id)).map(u => m(t.get("panes").find(d => d.name === u.id)).pipe(h(d => D(() => d && d.rule && d.rule !== null && d.rule.condition !== "", d ? this.rulesResolver.evaluate(d.rule, [...t.get("contexts"), ...d.contexts !== void 0 ? d.contexts : [], new re({ name: "_root", adaptor: "data", data: p })]).pipe(f(g => [d, g])) : m([d, !1]), m(!1).pipe(f(g => [d, g])))), Ze(([d, g]) => g), f(([d, g]) => d.name), Ie(u.id)))).pipe(f(u => u.reduce((d, g) => [...d, g], []))))).pipe(f(p => [o, l, p])), new be(p => { p.next([o, l, []]), p.complete(); }))), f(([o, l, c]) => l.results.reduce((p, u, d) => [...p, ...c[d] ? c[d].map(g => new E(S(v({}, t.get("panes").find(I => I.name === g)), { rule: void 0, label: V(), contexts: [...t.get("contexts"), new re({ name: "_root", adaptor: "data", data: u })] }))) : []], [])), f(o => new q({ stylePlugin: void 0, settings: [], panes: o, columnSetting: new T })), f(o => this.panelHandler.buildSettings(new $({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new T, rowSettings: [], panels: [o] }))), f(o => o.find(l => l.name === "panels").attributes[0].attributes.find(l => l.name === "panes").attributes)); }
    getBindings(e, t, a) { let o = a ? new Map(a.get("dataPanes").map(l => [l.name, l])) : new Map; return t === "context" ? this.toObject(e).pipe(f(l => [l, l.params ? l.params.reduce((c, p) => [...c, ...p.mapping.type === "form" ? [new Rt({ id: `form__${p.mapping.value.split(".", 2)[0].trim()}`, type: "context" })] : []], []) : []]), h(([l, c]) => this.dpm.getPlugin(l.plugin).pipe(h(p => p.getBindings({ settings: l.settings, metadata: a }).pipe(f(u => [l, u]))))), h(([l, c]) => C(l.renderer.bindings.reduce((p, u) => [...p, ...o.has(u.id) ? [this.toObject(o.get(u.id).settings)] : []], [])).pipe(h(p => C(p.map(u => this.dpm.getPlugin(u.plugin).pipe(h(d => d.getBindings({ settings: u.settings, metadata: a }))))).pipe(f(u => u.reduce((d, g) => [...d, ...g], c)), Ie(c))), Ie(c)))) : this.toObject(e).pipe(h(l => D(() => l.renderer.type === t, m(l.renderer.bindings), m([])))); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    getRenderType(e) { let t = [e.find(a => a.name === "renderer")].map(a => a.attributes.find(o => o.name === "type")); return t.length > 0 ? t[0].value : void 0; }
    stateDefinition(e) { return m({ autocomplete: { input: "" }, loading: "y" }); }
    editorOptions(e) { return this.toObject(e).pipe(h(t => this.dpm.getPlugin(t && t.plugin ? t.plugin : "data").pipe(f(a => [t, a]))), h(([t, a]) => a.editorOptions ? a.editorOptions({ settings: t && t.settings ? t.settings : [] }) : m(void 0)), f(t => new Fe({ fullscreen: t ? t.fullscreen : !1 }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(ot), r.\u0275\u0275inject(A), r.\u0275\u0275inject(k.AttributeSerializerService), r.\u0275\u0275inject(Te.RulesResolverService), r.\u0275\u0275inject(U.DatasourcePluginManager), r.\u0275\u0275inject(U.DatasourceEvaluator)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), bn = (() => { class n {
    constructor(e, t, a, o, l) { this.data = e, this.dialogRef = t, this.fb = a, this.attributeSerializer = o, this.datasourceHandler = l, this.datasource = new De, this.bindableOptions = [], this.contexts = [], this.formGroup = this.fb.group({ source: this.fb.control("") }); }
    ngOnInit() { let e = this.data.panelFormGroup.get("panes"); if (this.bindableOptions = e.controls.reduce((t, a) => a.get("name").value ? [...t, a.get("name").value] : [...t], []), this.contexts = this.data.contexts.map(t => t.name), this.data.panelIndex !== void 0 && this.data.paneIndex < e.length) {
        let t = e.at(this.data.paneIndex).get("settings").value.map(a => new J(a));
        this.datasourceHandler.toObject(t).subscribe(a => { this.datasource = a; });
    } }
    onSubmit() { let e = this.attributeSerializer.serialize(this.formGroup.value.source, "source"), t = this.data.panelFormGroup.get("panes").at(this.data.paneIndex); this.data.paneIndex === void 0 ? (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "datasource", name: new j(""), label: new j(""), rule: new j(""), settings: this.fb.array(e.attributes.map(a => this.attributeSerializer.convertToGroup(a))) })), console.log(this.data.panelFormGroup.get("panes").value)) : (t.get("settings").clear(), e.attributes.forEach(a => t.get("settings").push(this.attributeSerializer.convertToGroup(a)))), this.dialogRef.close(); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(Lt), r.\u0275\u0275directiveInject(fe.MatDialogRef), r.\u0275\u0275directiveInject(y.UntypedFormBuilder), r.\u0275\u0275directiveInject(k.AttributeSerializerService), r.\u0275\u0275directiveInject(gt)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-datasource-editor"]], standalone: !1, decls: 4, vars: 4, consts: [[3, "ngSubmit", "formGroup"], ["formControlName", "source", 3, "bindableOptions", "contexts", "datasource"], ["type", "submit"]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "form", 0), r.\u0275\u0275listener("ngSubmit", function () { return a.onSubmit(); }), r.\u0275\u0275element(1, "classifieds-ui-datasource-form", 1), r.\u0275\u0275elementStart(2, "button", 2), r.\u0275\u0275text(3, "Save"), r.\u0275\u0275elementEnd()()), t & 2 && (r.\u0275\u0275property("formGroup", a.formGroup), r.\u0275\u0275advance(), r.\u0275\u0275property("bindableOptions", a.bindableOptions)("contexts", a.contexts)("datasource", a.datasource)); }, dependencies: [y.\u0275NgNoValidate, y.NgControlStatus, y.NgControlStatusGroup, y.FormGroupDirective, y.FormControlName, U.DatasourceFormComponent], encapsulation: 2 }); }
} return n; })(), Sn = n => new _e({ id: "panel", title: "Panel", selectionComponent: ht, editorComponent: yn, renderComponent: void 0, handler: n }), wn = ({ handler: n }) => new _e({ id: "yield", title: "Yield", selectionComponent: ht, editorComponent: void 0, renderComponent: void 0, handler: n }), In = n => new _e({ id: "datasource", title: "Datasource", selectionComponent: void 0, editorComponent: bn, renderComponent: void 0, handler: n }), Cn = (n, s) => new Ut({ id: "panels", title: "Panels", build: () => { Ht.prototype.writePaneState = (e, t) => new Promise(a => { let o = n.getEntityCollectionService("PanelPageState"); o.getByKey(e.id).pipe(et(() => m(new _({ id: e.id, panels: [] }))), f(l => l === void 0 ? new _({ id: e.id, panels: [] }) : l), f(l => { let c = s.serialize(t, "root"), p = new _(S(v({}, l), { panels: [] })); for (let u = 0; u < e.panelIndex + 1; u++) {
        p.panels.push(u < l.panels.length ? new G(S(v({}, l.panels[u]), { panes: [] })) : new G);
        for (let d = 0; d < e.paneIndex + 1; d++)
            u === e.panelIndex && d === e.paneIndex ? p.panels[u].panes.push(u < l.panels.length && d < l.panels[u].panes.length ? new O(S(v({}, l.panels[u].panes[d]), { state: c })) : new O({ state: c })) : p.panels[u].panes.push(u < l.panels.length && d < l.panels[u].panes.length ? new O(v({}, l.panels[u].panes[d])) : new O);
    } return p; }), h(l => o.upsert(l))).subscribe(l => { a(l); }); }); } });
var vt = X("[PageBuilder] Load Rest Data", K()), Pt = X("[PageBuilder] Load Rest Data Success", K()), wi = X("[PageBuilder] Load Rest Data Error", K()), yt = X("[PageBuilder] Set Page Info", K()), bt = X("[PageBuilder] Set Form", K()), St = X("[PageBuilder] Set Page", K()), wt = X("[PageBuilder] Selection Path", K()), xn = (() => { class n {
    fetchRestdata$(e) { switch (e.method ? e.method : "get") {
        case "post":
        case "POST": return m([]).pipe(h(() => this.snippetParserService.parseSnippet({ snippet: e.body })), h(a => this.datasourceApi.postData({ url: e.url, body: a })));
        default: return this.datasourceApi.getData(e.url);
    } }
    constructor(e, t, a) { this.actions$ = e, this.datasourceApi = t, this.snippetParserService = a, this.loadRestData$ = Yt(() => this.actions$.pipe(Qt(vt), zt(o => this.fetchRestdata$(o.rest).pipe(et(() => []), f(l => o.rest.renderer !== void 0 && o.rest.renderer.query !== void 0 && o.rest.renderer.query !== "" ? ke.JSONPath({ path: o.rest.renderer.query, json: l }) : l), f(l => Pt({ tag: o.tag, data: new $e({ results: l }) })))))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(pt.Actions), r.\u0275\u0275inject(U.DatasourceApiService), r.\u0275\u0275inject(ft.SnippetParserService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), Me = class {
    constructor(s) { s && (this.id = s.id, this.path = s.path, this.realPath = s.realPath, this.args = s.args); }
}, It = "pageBuilder", jn = { dataTags: [], datasets: [], pageInfo: void 0, formNames: [], forms: [], page: void 0, selectionPath: [] }, Mn = Zt(jn, ie(Pt, (n, s) => { let e = n.dataTags.findIndex(t => t === s.tag); if (e > -1 && n.forms[e] !== void 0) {
    let t = v({}, n);
    return t.datasets[e].push(s.data), t;
}
else
    return S(v({}, n), { dataTags: [...n.dataTags, s.tag], datasets: [...n.datasets, [s.data]] }); }), ie(bt, (n, s) => { let e = n.formNames.findIndex(t => t === s.name); return e > -1 && n.forms[e] !== void 0 ? S(v({}, n), { forms: n.forms.map((t, a) => a === e ? s.form : t) }) : S(v({}, n), { formNames: [...n.formNames, s.name], forms: [...n.forms, s.form] }); }), ie(yt, (n, s) => S(v({}, n), { pageInfo: s.info !== void 0 ? new Me(s.info) : void 0 })), ie(St, (n, s) => S(v({}, n), { page: s.page !== void 0 ? new $(s.page) : void 0 })), ie(wt, (n, s) => S(v({}, n), { selectionPath: s.path !== void 0 ? s.path : [] })));
function Dn(n, s) { return Mn(n, s); }
var Ii = new We("StylePlugin"), $n = new We("PanelsSettings"), Fn = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    handleFile(e) { return m(); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(e) { return m(!1); }
    isDynamic(e) { return !1; }
    isData(e) { return !1; }
    buildDynamicItems(e, t) { return m([]); }
    fetchDynamicData(e, t) { return m(new $e); }
    getBindings(e, t) { return m([]); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new E(this.attributeSerializer.deserialize(t))); }
    stateDefinition(e) { return m({}); }
    editorOptions(e) { return m(new Fe); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ci = (() => { class n {
    constructor(e, t, a, o, l, c, p, u, d, g, I, B, te) { let b = Pn(e, a); o.registerMetadataMap(b), c.registerService("PanelPageState", new Bt("PanelPageState")), c.registerService("PanelPage", new xe("PanelPage", g, I, B)), c.registerService("PanelPageListItem", new xe("PanelPageListItem", g, I, B)), t.forEach(w => l.register(w)), l.register(wn({ handler: te })), p.register(Cn(u, d)), c.registerService("PanelPageForm", new xe("PanelPageForm", g, I, B)); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Dt), r.\u0275\u0275inject(Ce), r.\u0275\u0275inject($n), r.\u0275\u0275inject(z.EntityDefinitionService), r.\u0275\u0275inject(de.ContentPluginManager), r.\u0275\u0275inject(z.EntityDataService), r.\u0275\u0275inject(ut.BridgeBuilderPluginManager), r.\u0275\u0275inject(z.EntityServices), r.\u0275\u0275inject(k.AttributeSerializerService), r.\u0275\u0275inject(he.CrudAdaptorPluginManager), r.\u0275\u0275inject(z.EntityDefinitionService), r.\u0275\u0275inject(he.CrudDataHelperService), r.\u0275\u0275inject(Fn)); }; }
    static { this.\u0275mod = r.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = r.\u0275\u0275defineInjector({ providers: [{ provide: A, useClass: A }, { provide: Ce, useFactory: Sn, multi: !0, deps: [A] }, { provide: Ce, useFactory: In, multi: !0, deps: [gt] }, { provide: Ft, useClass: $t }], imports: [Mt, Ot, At, en.forFeature(It, Dn), Wt.forFeature([xn]), Gt, Nt, Kt, Jt, Xt, Vt] }); }
} return n; })(), Ye = class n {
    constructor(s) { s && (this.panelPage = s.panelPage, s.panel !== void 0 && s.panel !== null && (this.panel = s.panel), s.pane !== void 0 && s.pane !== null && (this.pane = s.pane), s.nested !== void 0 && s.nested !== null && typeof s.nested == "object" && (this.nested = new n(s.nested))); }
}, xi = (() => { class n {
    get gridItems() { return []; }
    constructor(e) { this.controlContainer = e, this.savable = !0, this.nested = !1, this.dashboard = [], this.layoutSetting = new T, this.rowSettings = [], this.ancestory = []; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(y.ControlContainer)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-editor-base"]], inputs: { savable: "savable", nested: "nested", editor: "editor", dashboard: "dashboard", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings", editablePaneTpl: "editablePaneTpl", extraActionsAreaTmpl: "extraActionsAreaTmpl", contextsMenuTpl: "contextsMenuTpl", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), ji = (() => { class n {
    get columnSettings() { return this.panelPage ? this.panelPage.panels.reduce((t, a) => [...t, new T(a.columnSetting)], []) : []; }
    constructor(e) { this.controlContainer = e, this.displayMainControls = !1, this.displayItemHeader = !1; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(y.ControlContainer, 8)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-renderer-base"]], inputs: { panelPage: "panelPage", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", renderPanelTpl: "renderPanelTpl" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), Mi = (() => { class n {
    constructor() { this.settings = [], this.panes = [], this.originMappings = [], this.ancestory = []; }
    mergeContexts(e) { if (!(e === void 0 && this.contexts === void 0))
        return e !== void 0 && this.contexts !== void 0 ? [...e, ...this.contexts] : e !== void 0 ? e : this.contexts; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-style-renderer-base"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", contexts: "contexts", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), _n = (() => { class n {
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
} return n; })(), Di = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    rebuildPage(e, t) { return new $(S(v({}, e), { panels: this.rebuildPanels(e.panels, [...t]) })); }
    rebuildPanels(e, t) { return e.filter((a, o) => this.rebuildCondition(t[0], o)).map(a => new q(S(v({}, a), { panes: this.rebuildPanes(a.panes, t.slice(1)) }))); }
    rebuildPanes(e, t) { return e.filter((a, o) => this.rebuildCondition(t[0], o)).map(a => a.contentPlugin === "panel" ? new E(S(v({}, a), { nestedPage: void 0, settings: this.panelHandler.buildSettings(this.rebuildPage(a.nestedPage, t.slice(1))) })) : new E(v({}, a))); }
    rebuildCondition(e, t) { return e !== 0 ? e > -1 ? t === e + e * -1 : t !== e * -1 + e : !0; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(A)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), $i = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    convertPageToState(e) { return m(new _).pipe(h(() => C(e.panels.map(t => this.convertPanelToState(t)))), f(t => new _({ id: e.id, panels: t }))); }
    convertPanelToState(e) { return m(new G).pipe(h(() => C(e.panes.map(t => this.convertPaneToState(t)))), f(t => new G({ panes: t }))); }
    convertPaneToState(e) { return m(new O).pipe(h(t => D(() => this.hasNestedPanelPage(e), this.panelHandler.toObject(e.settings).pipe(h(a => this.convertPageToState(a)), f(a => new O({ state: new J, nestedPage: a }))), m(t)))); }
    hasNestedPanelPage(e) { return e.contentPlugin === "panel" && (e.linkedPageId === void 0 || e.linkedPageId === null || e.linkedPageId === ""); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(A)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Tn = (() => { class n {
    constructor(e) { this.panelsLoaderService = e; }
    walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: a, ancestory: o }) { return new be(l => { let c = e.panels.length, p = []; for (let u = 0; u < c; u++) {
        let d = e.panels[u].panes.length;
        for (let g = 0; g < d; g++)
            p.push(t({ pane: e.panels[u].panes[g], panelPage: e, ancestoryWithSelf: [...o, u, g] })), e.panels[u].panes[g].nestedPage && e.panels[u].panes[g].nestedPage.panels && e.panels[u].panes[g].nestedPage.panels.length !== 0 ? p.push(this.walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: a, ancestory: [...o, u, g] })) : e.panels[u].panes[g].contentPlugin;
    } p.length === 0 ? (l.next(a), l.complete()) : C(p).pipe(f(u => u.reduce((d, g) => [...d, ...g], a)), F(u => { l.next(u), l.complete(); })).subscribe(); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(_n)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Fi = (() => { class n {
    constructor(e, t) { this.panelsVisitorService = e, this.cpm = t, this.gatherPaneContexts = ({ pane: a, panelPage: o, ancestoryWithSelf: l }) => this.cpm.getPlugin(a.contentPlugin).pipe(h(c => c.handler ? c.handler.stateDefinition(a.settings) : m({})), f(c => new re({ name: "panestate-" + l.join("-"), adaptor: "data", plugin: "panestate", data: { id: o ? o.id : "", selectionPath: [...l], value: c } })), f(c => [c]), se(1)); }
    allActivePageContexts({ panelPage: e, ancestory: t = [] }) { return this.panelsVisitorService.walkPageHierarchy({ panelPage: e, ancestory: t, visitorFunc: this.gatherPaneContexts, defaultv: [] }); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Tn), r.\u0275\u0275inject(de.ContentPluginManager)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), kn = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    buildToAncestorySpec({ panelPageState: e, ancestory: t }) { for (let a = 0; a < t[0] + 1; a++)
        if (e.panels.length < a + 1 && e.panels.push(new G), a === t[0] && t.length > 1)
            for (let o = 0; o < t[1] + 1; o++)
                e.panels[t[0]].panes.length < o + 1 && e.panels[t[0]].panes.push(new O({ state: this.attributeSerializer.serialize({}, "root") })), o === t[1] && t.length > 2 && (e.panels[t[0]].panes[o].nestedPage || (e.panels[t[0]].panes[o].nestedPage = new _), this.buildToAncestorySpec({ panelPageState: e.panels[t[0]].panes[o].nestedPage, ancestory: t.slice(2) })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), _i = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), On = (() => { class n extends nn {
    constructor(e, t) { super(e, t); }
    pluginDef() { return m(new sn({ name: "style" })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(mt.PluginConfigurationManager), r.\u0275\u0275inject(at.ModuleLoaderService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ti = (() => { class n {
    constructor(e) { this.spm = e; }
    alterResolvedPanes({ panel: e, resolvedPanes: t, originMappings: a }) { return m(void 0).pipe(h(() => e.stylePlugin && e.stylePlugin !== "" ? this.spm.getPlugin(e.stylePlugin) : m(void 0)), h(o => o && o.handler ? o.handler.alterResolvedPanes({ settings: e.settings, resolvedPanes: t, originMappings: a }) : m({ resolvedPanes: t, originMappings: a }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(On)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ki = (() => { class n {
    constructor(e, t, a, o) { this.panelHandler = e, this.rulesResolver = t, this.inlineContextResolver = a, this.cpm = o; }
    usedContexts(e) { return this.panesPlugins(e).pipe(h(t => this.dataPanes(e).pipe(f(a => ({ plugins: t, dataPanes: a })))), h(({ plugins: t, dataPanes: a }) => C(e.reduce((o, l) => { let c = t.get(l.contentPlugin); return c.handler !== void 0 ? [...o, c.handler.getBindings(l.settings, "context", new Map([["dataPanes", a]])).pipe(f(p => p.map(u => u.id)))] : [...o]; }, [])).pipe(f(o => o.reduce((l, c) => [...l, ...c], []))))); }
    staticPanes(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])).pipe(f(t => e.filter(a => t.get(a.contentPlugin).handler === void 0 || !t.get(a.contentPlugin).handler.isDynamic(a.settings)))); }
    dataPanes(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])).pipe(f(t => e.filter(a => t.get(a.contentPlugin).handler !== void 0 && t.get(a.contentPlugin).handler.isData(a.settings)))); }
    panesPlugins(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])); }
    resolvePanes({ panes: e, contexts: t, resolvedContext: a }) { return console.log("resolve panes"), this.panesPlugins(e).pipe(h(o => C(e.reduce((l, c) => { let p = o.get(c.contentPlugin); return p.handler !== void 0 ? [...l, p.handler.getBindings(c.settings, "pane").pipe(f(u => u.map(d => d.id)))] : [...l, m([])]; }, [])))).pipe(f(o => o.reduce((l, c) => [...l, ...c], [])), h(o => this.panesPlugins(e).pipe(f(l => [o, l]))), h(([o, l]) => C(e.reduce((c, p) => { let u = l.get(p.contentPlugin); return u.handler !== void 0 && u.handler.isDynamic(p.settings) ? [...c, u.handler.isData(p.settings) && o.findIndex(d => d === p.name) !== -1 ? m([]) : C([this.staticPanes(e), this.dataPanes(e)]).pipe(h(([d, g]) => u.handler.buildDynamicItems(p.settings, new Map([...p.metadata === void 0 ? [] : p.metadata, ["tag", V()], ["panes", d], ["dataPanes", g], ["contexts", t !== void 0 ? t : []]])).pipe(f(I => this.panelHandler.fromPanes(I)), f(I => this.panelHandler.wrapPanel(I).panes), se(1))))] : p.name === "" || o.findIndex(d => d === p.name) === -1 ? [...c, m([new E(S(v({}, p), { contexts: [...t, ...p.contexts ? p.contexts : []] }))]).pipe(h(d => D(() => d[0].rule !== void 0 && d[0].rule !== null && d[0].rule.condition !== "", this.rulesResolver.evaluate(d[0].rule, [...t, ...p.contexts ? p.contexts : []]).pipe(f(g => g ? d : [])), m(d))))] : [...c]; }, [])).pipe(h(c => D(() => c.reduce((p, u) => [...p, ...u], []).length === 0, m([c, []]), C([...c.reduce((p, u) => [...p, ...u.map(d => d.contexts && d.contexts.length !== 0 ? this.inlineContextResolver.resolveAll(d.contexts).pipe(se(1)) : m({}).pipe(se(1)))], [])]).pipe(f(p => [c, p.map(u => v(v({}, u), a))])))), f(([c, p]) => { let u = [], d = []; return c.forEach((g, I) => { u = [...u === void 0 ? [] : u, ...g.map((B, te) => new E(S(v({}, B), { resolvedContext: p[u.length + te] })))], d = [...d && [], ...g.map(() => I)]; }), { resolvedPanes: u, originMappings: d }; })))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(A), r.\u0275\u0275inject(Te.RulesResolverService), r.\u0275\u0275inject(tt.InlineContextResolverService), r.\u0275\u0275inject(de.ContentPluginManager)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Qe = class extends rn {
    constructor(s) { super(s), s && (this.name = this.id, this.title = s.title, this.editorComponent = s.editorComponent ? s.editorComponent : void 0, this.renderComponent = s.renderComponent ? s.renderComponent : void 0, s.handler && (this.handler = s.handler)); }
}, Oi = (() => { class n extends an {
    constructor() { super(), this.pageChange$ = new Re, this.pageSize = 20, this.dataStream = new Y([]), this.subscription = new Ne, this.lastPage = 0, this.paneItems = []; }
    set panes(e) { this.paneItems = [...this.paneItems, ...e], this.dataStream.next(this.paneItems); }
    connect(e) { return this.subscription.add(e.viewChange.subscribe(t => { let a = Math.ceil((t.end + 1) / this.pageSize); a > this.lastPage && (this.lastPage = a, this.pageChange$.next(a)); })), this.dataStream; }
    disconnect(e) { this.subscription.unsubscribe(); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), ee = tn(It), Ai = n => H(ee, s => { let e = s.dataTags.findIndex(t => t === n); if (e > -1)
    return s.datasets[e][s.datasets[e].length - 1]; }), An = H(ee, n => n.pageInfo), zn = H(ee, n => n.page), En = H(ee, n => n.selectionPath), Ct = H(ee, n => n.formNames), Nn = H(ee, n => n.forms), Rn = H(Ct, Nn, (n, s, e) => { let t = n.findIndex(a => a === e.name); if (t > -1)
    return s[t]; }), Bn = (() => { class n {
    constructor(e) { this.store = e, this.getPageInfo$ = this.store.pipe(W(An)), this.getPage$ = this.store.pipe(W(zn)), this.getSelectionPath$ = this.store.pipe(W(En)), this.getFormNames$ = this.store.pipe(W(Ct)), this.getForm$ = t => this.store.pipe(W(Rn, { name: t })); }
    loadRestData(e, t) { this.store.dispatch(vt({ tag: e, rest: t })); }
    setPageInfo(e) { this.store.dispatch(yt({ info: e })); }
    setPage(e) { this.store.dispatch(St({ page: e })); }
    setSelectionPath(e) { this.store.dispatch(wt({ path: e })); }
    setForm(e, t) { this.store.dispatch(bt({ name: e, form: t })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(dt.Store)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), zi = (() => { class n {
    constructor(e, t, a, o) { this.pageBuilderFacade = e, this.panelStateArchitectService = t, this.attributeSerializer = a, this.selectEntities = l => l.entities, this.selectById = ({ id: l }) => H(this.selectEntities, c => c[l] ? c[l] : void 0), this.panelPageStateService = o.getEntityCollectionService("PanelPageState"); }
    mergeState({ state: e, settings: t, plugin: a, ancestory: o }) { return m(e).pipe(h(l => this.pageBuilderFacade.getPageInfo$.pipe(f(c => [l, c]))), h(([l, c]) => a.handler.stateDefinition(t).pipe(f(p => [l, c, p]))), h(([l, c, p]) => this.panelPageStateService.collection$.pipe(W(this.selectById({ id: c.id })), f(u => [l, new _(u || { id: c.id, panels: [] }), p]), se(1))), f(([l, c, p]) => { this.panelStateArchitectService.buildToAncestorySpec({ panelPageState: c, ancestory: [...o] }); let u = "$." + o.map((g, I) => `${(I + 1) % 2 === 0 ? "panes" : (I === 0 ? "" : "nestedPage.") + "panels"}[${g}]`).join("."), d = ke.JSONPath({ path: u, json: c })[0]; return [l, c, p, d]; }), F(([l, c, p, u]) => { let d = u.state ? u.state.root ? this.attributeSerializer.deserialize(u.state).root : this.attributeSerializer.deserialize(u.state) : {}, g = on(!d || Object.keys(d).length === 0 ? p : d, l); u.state = this.attributeSerializer.serialize(g, "root"); }), f(([l, c, p, u]) => ({ paneState: u, pageState: c }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Bn), r.\u0275\u0275inject(kn), r.\u0275\u0275inject(k.AttributeSerializerService), r.\u0275\u0275inject(z.EntityServices)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ei = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    serializeForm(e) { let t = e.panels.length, a = {}; for (let o = 0; o < t; o++) {
        let l = e.panels[o].panes.length, c = new Map;
        for (let p = 0; p < l; p++) {
            let u = this.serializeFormPane(e.panels[o].panes[p]);
            if (e.panels[o].panes[p].name && e.panels[o].panes[p].name !== null && (a[e.panels[o].panes[p].name] || e.panels[o].panes[p].name === ln(e.panels[o].panes[p].name))) {
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
} return n; })(), Ni = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    convertPageToForm({ pp: e, pp2: t, ancestory: a, debugPath: o = [] }) { return m(new _).pipe(h(() => C(e.panels.map((l, c) => this.convertPanelToForm({ panel: l, panel2: t.panels[c], ancestory: a, debugPath: [...o, `convertPageToForm{ index: ${c} }`] })))), f(l => new ae({ id: e.id, panels: l, name: t.name, title: t.title, derivativeId: "" }))); }
    convertPanelToForm({ panel: e, panel2: t, ancestory: a, debugPath: o = [] }) { return m(new oe).pipe(h(() => C(e.panes.map((l, c) => this.convertPaneToForm({ pane: l, pane2: t.panes[c], ancestory: a, debugPath: [...o, `convertPanelToForm{ index: ${c} }`] })))), f(l => new oe({ panes: l, name: t.name, label: t.label }))); }
    convertPaneToForm({ pane: e, pane2: t, ancestory: a, debugPath: o = [] }) { let l = e.state.attributes.find(c => c.name === "value"); return m(new le({ settings: l ? [l] : [], name: t.name, label: t.label, contentPlugin: t.contentPlugin })).pipe(h(c => D(() => this.hasNestedPanelPage(e), e.nestedPage ? this.convertPageToForm({ ancestory: a, pp: e.nestedPage, pp2: new $(this.attributeSerializer.deserializeAsObject(t.settings)), debugPath: [...o, "convertPaneToForm"] }).pipe(f(p => new le(S(v({}, c), { settings: this.attributeSerializer.serialize(p, "root").attributes })))) : m(c), m(c)))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ri = (() => { class n {
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
} return n; })(), Bi = (() => { class n {
    makeJsonNode() { return { attributes: {}, children: {} }; }
    reduceCss(e, t, a = !0) { return e && e.children ? Object.keys(e.children).filter(o => a ? o.indexOf(t) === 0 : o.indexOf(t) !== 0).reduce((o, l) => S(v({}, o), { children: S(v({}, o.children), { [a ? l.substr(l.indexOf(t) + t.length).trim() : l]: e.children[l] }) }), this.makeJsonNode()) : this.makeJsonNode(); }
    reduceSelector(e, t, a = !0) { return e ? Object.keys(e).filter(o => a ? o.indexOf(t) === 0 : o.indexOf(t) !== 0).reduce((o, l) => S(v({}, o), { [a ? l.substr(l.indexOf(t) + t.length).trim() : l]: e[l] }), {}) : {}; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
export { Bi as CssHelperService, gt as DatasourceContentHandler, bn as DatasourceEditorComponent, _i as DynamicPaneService, qe as FormDatasource, Ri as FormGroupConverterService, Ei as FormService, Ni as FormStateConverterService, ue as GridItem, Ke as GridLayout, xi as LayoutEditorBaseComponent, ji as LayoutRendererBaseComponent, T as LayoutSetting, $n as PANELS_SETTINGS, Bn as PageBuilderFacade, E as Pane, Oi as PaneDatasourceService, Ve as PanePropsFormPayload, O as PaneState, zi as PaneStateService, q as Panel, A as PanelContentHandler, yn as PanelEditorComponent, $ as PanelPage, ae as PanelPageForm, le as PanelPageFormPane, oe as PanelPageFormPanel, Si as PanelPageLinkedlistComponent, Xe as PanelPageListItem, pe as PanelPagePermissions, Ye as PanelPageSelector, _ as PanelPageState, Me as PanelPageStateSlice, He as PanelPropsFormPayload, ki as PanelResolverService, ht as PanelSelectorComponent, G as PanelState, kn as PanelStateArchitectService, $i as PanelStateConverterService, Mi as PanelStyleRendererBaseComponent, Fi as PanelsContextService, _n as PanelsLoaderService, Ci as PanelsModule, Di as PanelsSelectorService, Je as PanelsSettings, Tn as PanelsWalkerService, je as PrerenderFormPayload, Ue as PropertiesFormPayload, Ii as STYLE_PLUGIN, Qe as StylePlugin, On as StylePluginManager, Ti as StyleResolverService, jn as initialState, vt as loadRestData, wi as loadRestDataError, Pt as loadRestDataSuccess, It as pageBuilderFeatureKey, Dn as reducer, Ai as selectDataset, Rn as selectForm, Ct as selectFormNames, Nn as selectForms, zn as selectPage, ee as selectPageBuilderState, An as selectPageInfo, En as selectSelectionPath, bt as setForm, St as setPage, yt as setPageInfo, wt as setSelectionPath };
