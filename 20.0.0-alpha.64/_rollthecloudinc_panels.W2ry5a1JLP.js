import { a as Et } from "@nf-internal/chunk-EOHDPEXE";
import { a as V } from "@nf-internal/chunk-VJMH5IEE";
import { g as C, i as x } from "@nf-internal/chunk-FYX6O4YR";
import { b as Le, f as Ce, k as He, l as Y, z as m } from "@nf-internal/chunk-STIBVO4O";
import { a as v, b, e as Ot, g as Ue, i as Ie } from "@nf-internal/chunk-2AVGQ2MQ";
var qe = Ot((Fe, Ve) => {
    (function (n, s) { typeof define == "function" && define.amd ? define([], s) : typeof Fe == "object" ? Ve.exports = s() : n.CSSJSON = s(); })(Fe, function () {
        var n = new function () {
            var s = this;
            s.init = function () { String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, ""); }, String.prototype.repeat = function (P) { return new Array(1 + P).join(this); }; }, s.init();
            var e = /([^\s\;\{\}][^\;\{\}]*)\{/g, t = /\}/g, a = /([^\;\{\}]*)\;/g, o = /\/\*[\s\S]*?\*\//g, l = /([^\:]+):([^\;]*);/, c = /(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gmi, u = 1, p = 2, d = 3, g = 4, I = function (P) { return typeof P > "u" || P.length == 0 || P == null; };
            s.toJSON = function (P, w) { var y = { children: {}, attributes: {} }, F = null, N = 0; if (typeof w > "u")
                var w = { ordered: !1, comments: !1, stripComments: !1, split: !1 }; for (w.stripComments && (w.comments = !1, P = P.replace(o, "")); (F = c.exec(P)) != null;)
                if (!I(F[u]) && w.comments) {
                    var ie = F[u].trim();
                    y[N++] = ie;
                }
                else if (I(F[p]))
                    if (I(F[d])) {
                        if (!I(F[g])) {
                            var Re = F[g].trim(), Se = l.exec(Re);
                            if (Se) {
                                var D = Se[1].trim(), we = Se[2].trim();
                                if (w.ordered) {
                                    var B = {};
                                    B.name = D, B.value = we, B.type = "attr", y[N++] = B;
                                }
                                else if (D in y.attributes) {
                                    var Ge = y.attributes[D];
                                    Ge instanceof Array || (y.attributes[D] = [Ge]), y.attributes[D].push(we);
                                }
                                else
                                    y.attributes[D] = we;
                            }
                            else
                                y[N++] = Re;
                        }
                    }
                    else
                        return y;
                else {
                    var D = F[p].trim(), pe = s.toJSON(P, w);
                    if (w.ordered) {
                        var B = {};
                        B.name = D, B.value = pe, B.type = "rule", y[N++] = B;
                    }
                    else {
                        if (w.split)
                            var Pe = D.split(",");
                        else
                            var Pe = [D];
                        for (i in Pe) {
                            var be = Pe[i].trim();
                            if (be in y.children)
                                for (var Be in pe.attributes)
                                    y.children[be].attributes[Be] = pe.attributes[Be];
                            else
                                y.children[be] = pe;
                        }
                    }
                } return y; }, s.toCSS = function (P, w, y) {
                var F = "";
                if (typeof w > "u" && (w = 0), typeof y > "u" && (y = !1), P.attributes)
                    for (i in P.attributes) {
                        var N = P.attributes[i];
                        if (N instanceof Array)
                            for (var ie = 0; ie < N.length; ie++)
                                F += Q(i, N[ie], w);
                        else
                            F += Q(i, N, w);
                    }
                if (P.children) {
                    var D = !0;
                    for (i in P.children)
                        y && !D ? F += `
` : D = !1, F += H(i, P.children[i], w);
                }
                return F;
            };
            var Q = function (P, w, y) {
                return "	".repeat(y) + P + ": " + w + `;
`;
            }, H = function (P, w, y) {
                var F = "	".repeat(y) + P + ` {
`;
                return F += s.toCSS(w, y + 1), F += "	".repeat(y) + `}
`, F;
            };
        };
        return n;
    });
});
import * as G from "@angular/common";
import { isPlatformServer as je, CommonModule as zt } from "@angular/common";
import * as r from "@angular/core";
import { forwardRef as Je, inject as At, Injector as Nt, InjectionToken as at, PLATFORM_ID as Bt } from "@angular/core";
import * as z from "@ngrx/data";
import { DefaultPluralizer as Rt, Pluralizer as Gt } from "@ngrx/data";
import * as S from "@angular/forms";
import { NG_VALUE_ACCESSOR as Ut, NG_VALIDATORS as Lt, UntypedFormControl as j, Validators as W, UntypedFormArray as Ht, FormsModule as Vt, ReactiveFormsModule as qt } from "@angular/forms";
import { filter as se, map as f, switchMap as h, defaultIfEmpty as De, catchError as ot, concatMap as Jt, tap as $, take as re } from "rxjs/operators";
import * as _ from "@rollthecloudinc/attributes";
import { AttributeValue as J } from "@rollthecloudinc/attributes";
import * as lt from "@rollthecloudinc/context";
import { InlineContext as ae } from "@rollthecloudinc/context";
import { PersistenceFormPayload as ct } from "@rollthecloudinc/refinery";
import * as ut from "@rollthecloudinc/detour";
import { InteractionsFormPayload as Xt, roleHandlerPluginFactory as me, waitForComponent as Xe, resolveTargetElement as Ke } from "@rollthecloudinc/detour";
import * as U from "@rollthecloudinc/datasource";
import { Datasource as Oe, Dataset as Ee, DatasourceFormComponent as Kt, DatasourceModule as Qt } from "@rollthecloudinc/datasource";
import * as he from "@rollthecloudinc/content";
import { ContentPluginEditorOptions as ze, ContentBinding as Yt, ContentPlugin as Ae, CONTENT_PLUGIN as Me } from "@rollthecloudinc/content";
import * as pt from "@angular/material/autocomplete";
import * as dt from "@angular/material/input";
import * as ft from "@angular/material/select";
import * as mt from "@rollthecloudinc/utils";
import { SITE_NAME as ht, RegisterRole as Wt, NoopDataService as Zt } from "@rollthecloudinc/utils";
import { MaterialModule as ei } from "@rollthecloudinc/material";
var ai = Ue(qe(), 1), Ne = Ue(Et(), 1);
import * as gt from "@angular/material/bottom-sheet";
import * as ge from "@angular/material/dialog";
import { MAT_DIALOG_DATA as ti } from "@angular/material/dialog";
import * as vt from "@angular/material/grid-list";
import * as ve from "@angular/material/list";
import * as ee from "@angular/material/tabs";
import * as yt from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as ii, PublicApiBridgeService as ni } from "@rollthecloudinc/bridge";
import * as ye from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as Dn, CrudDataService as xe, CrudModule as si } from "@rollthecloudinc/crud";
import { __decorate as ri } from "tslib";
import * as ue from "@rollthecloudinc/rules";
import * as Pt from "@angular/material/button";
import { Aws3Module as oi } from "@rollthecloudinc/aws3";
import { AwosModule as li } from "@rollthecloudinc/awos";
import { AuthModule as ci } from "@rollthecloudinc/auth";
import * as bt from "@ngrx/effects";
import { createEffect as ui, ofType as pi, EffectsModule as di } from "@ngrx/effects";
import * as St from "@ngrx/store";
import { createAction as X, props as K, createReducer as fi, on as ne, StoreModule as mi, createFeatureSelector as hi, createSelector as L, select as Z } from "@ngrx/store";
import * as wt from "@rollthecloudinc/snippet";
import * as It from "@rollthecloudinc/plugin";
import { BasePluginManager as gi, PluginDef as vi, Plugin as yi } from "@rollthecloudinc/plugin";
import { DataSource as Pi } from "@angular/cdk/collections";
import bi from "deepmerge-json";
import { pluralize as Si } from "inflected";
function wi(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 6), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1(" panel page | level: ", e, " ");
} }
function Ii(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 6), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1(" panel | ", e, " ");
} }
function Ci(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 6), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1(" pane | ", e, " ");
} }
function Fi(n, s) { if (n & 1 && (r.\u0275\u0275element(0, "druid-panels-panelpage-linkedlist", 7), r.\u0275\u0275pipe(1, "async")), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275property("panelPages", r.\u0275\u0275pipeBind1(1, 1, e.nested$));
} }
function ji(n, s) { if (n & 1) {
    let e = r.\u0275\u0275getCurrentView();
    r.\u0275\u0275elementStart(0, "a", 2), r.\u0275\u0275listener("click", function () { let a = r.\u0275\u0275restoreView(e).$implicit, o = r.\u0275\u0275nextContext(2); return r.\u0275\u0275resetView(o.onItemSelect(a.id)); }), r.\u0275\u0275elementStart(1, "span", 6), r.\u0275\u0275text(2), r.\u0275\u0275elementEnd()();
} if (n & 2) {
    let e = s.$implicit;
    r.\u0275\u0275advance(2), r.\u0275\u0275textInterpolate2("", e.title, " [", e.id, "]");
} }
function Di(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-nav-list"), r.\u0275\u0275template(1, ji, 3, 2, "a", 5), r.\u0275\u0275pipe(2, "async"), r.\u0275\u0275elementEnd()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(2, 1, e.panels$));
} }
var Mi = (n, s) => ({ PanelPageListItem: { entityName: "PanelPageListItem", crud: b(v({}, je(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }), { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }) }, PanelPage: { entityName: "PanelPage", crud: v({ save: { ops: ["create", "update"], plugin: "rest", params: { entityName: "PanelPage" } }, readPrimary: { fallback: !0, ops: ["create", "update", "query"], plugin: je(n) ? "memory_store" : "idb_keyval", params: { prefix: "panelpage__" } }, readFallback: { fallback: !0, ops: ["query"], plugin: "rest", params: { entityName: "PanelPage", root: s.objectsRootUrl, suffix: ".json" } } }, je(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" } } }) }, PanelPageState: { entityName: "PanelPageState" } }), Qe = class {
    constructor(s) { this.readUserIds = [], s && (this.title = s.title, this.name = s.name, this.path = s.path, this.cssFile = s.cssFile, s.readUserIds && (this.readUserIds = s.readUserIds.map(e => e))); }
}, Ye = class {
    constructor(s) { s && (this.label = s.label, this.name = s.name); }
}, We = class {
    constructor(s) { s && (this.label = s.label, this.name = s.name); }
}, oe = class {
    constructor(s) { this.panels = [], s && (this.id = s.id, this.name = s.name, this.title = s.title, this.derivativeId = s.derivativeId, this.valid = !!s.valid, s.persistence && (this.persistence = new ct(s.persistence)), s.panels && (this.panels = s.panels.map(e => new le(e)))); }
}, le = class {
    constructor(s) { this.panes = [], s && (this.name = s.name, this.label = s.label, s.panes && (this.panes = s.panes.map(e => new ce(e)))); }
}, ce = class {
    constructor(s) { this.settings = [], s && (this.name = s.name, this.label = s.label, this.contentPlugin = s.contentPlugin, s.settings && (this.settings = s.settings.map(e => new J(e)))); }
}, Ze = class {
    constructor(s) { s && (this.name = s.name, this.field = s.field); }
}, $e = class {
    constructor(s) { s && (this.route = s.route, s.datasource && (this.datasource = new Oe(s.datasource))); }
}, Te = class {
    constructor(s) { s && (s.rule && typeof s.rule != "string" && (this.rule = v({}, s.rule)), s.priority !== void 0 && (this.priority = s.priority)); }
}, et = class {
    constructor(s) { this.enablePreview = !1, this.disableBackdrop = !1, s && (this.enablePreview = s.enablePreview !== void 0 ? s.enablePreview : !1, this.disableBackdrop = s.disableBackdrop !== void 0 ? s.disableBackdrop : !1); }
}, tt = class {
    constructor(s) { s && (this.openSearchDomain = s.openSearchDomain, this.s3Bucket = s.s3Bucket, this.objectsRootUrl = s.objectsRootUrl); }
}, M = class {
    constructor(s) { this.gridItems = [], this.panels = [], this.contexts = [], this.rowSettings = [], this.entityPermissions = new fe, s && (this.id = s.id, this.layoutType = s.layoutType, this.displayType = s.displayType, this.name = s.name ? s.name : void 0, this.title = s.title ? s.title : void 0, this.site = s.site ? s.site : void 0, this.userId = s.userId ? s.userId : void 0, this.path = s.path ? s.path : void 0, this.persistence = s.persistence ? new ct(s.persistence) : void 0, this.interactions = s.interactions ? new Xt(s.interactions) : void 0, this.prerender = s.prerender ? new $e(s.prerender) : void 0, s.selection && (this.selection = new Te(s.selection)), s.panels && (this.panels = s.panels.map(e => new q(e))), s.gridItems && (this.gridItems = s.gridItems.map(e => new de(e))), s.contexts && (this.contexts = s.contexts.map(e => new ae(e))), s.layoutSetting && (this.layoutSetting = new k(s.layoutSetting)), s.rowSettings && Array.isArray(s.rowSettings) && (this.rowSettings = s.rowSettings.map(e => new k(e))), s.entityPermissions && (this.entityPermissions = new fe(s.entityPermissions)), s.cssFile && (this.cssFile = s.cssFile)); }
}, it = class extends M {
}, nt = class {
    constructor(s) { this.gridItems = [], s && (this.id = s.id, this.site = s.site, s.gridItems && (this.gridItems = s.gridItems.map(e => new de(e)))); }
}, q = class {
    constructor(s) { this.settings = [], this.panes = [], s && (this.name = s.name ? s.name : void 0, this.label = s.label ? s.label : void 0, this.stylePlugin = s.stylePlugin, s.settings && (this.settings = s.settings.map(e => new J(e))), s.panes && (this.panes = s.panes.map(e => new A(e))), s.columnSetting && (this.columnSetting = new k(s.columnSetting))); }
}, A = class {
    constructor(s) { this.settings = [], this.locked = !1, this.contexts = [], s && (this.name = s.name, this.label = s.label, this.contentPlugin = s.contentPlugin, this.locked = s.locked !== void 0 ? s.locked : !1, s.linkedPageId && (this.linkedPageId = s.linkedPageId), s.metadata !== void 0 && (this.metadata = new Map([...s.metadata])), s.settings !== void 0 && (this.settings = s.settings.map(e => new J(e))), s.contexts !== void 0 && (this.contexts = s.contexts.map(e => new ae(e))), s.rule !== void 0 && typeof s.rule != "string" && (this.rule = v({}, s.rule)), s.nestedPage && (this.nestedPage = new M(s.nestedPage)), s.resolvedContext && (this.resolvedContext = v({}, s.resolvedContext))); }
}, de = class {
    constructor(s) { s && (this.cols = s.cols, this.rows = s.rows, this.x = s.x, this.y = s.y, this.weight = s.weight); }
}, k = class {
    constructor(s) { this.settings = [], s && s.settings && Array.isArray(s.settings) && (this.settings = s.settings.map(e => new J(e))); }
}, fe = class {
    constructor(s) { this.readUserIds = [], this.writeUserIds = [], this.deleteUserIds = [], s && (this.readUserIds = s.readUserIds ? s.readUserIds.map(e => e) : [], this.writeUserIds = s.writeUserIds ? s.writeUserIds.map(e => e) : [], this.deleteUserIds = s.deleteUserIds ? s.deleteUserIds.map(e => e) : []); }
}, E = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    handleFile(e) { return m(); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(e) { return m(!1); }
    isDynamic(e) { return !1; }
    isData(e) { return !1; }
    buildDynamicItems(e, t) { return m([]); }
    fetchDynamicData(e, t) { return m(new Ee); }
    getBindings(e, t) { return m([]); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new A(this.attributeSerializer.deserialize(t))); }
    wrapPanel(e) { return new q({ stylePlugin: void 0, settings: [], panes: e, columnSetting: new k }); }
    stateDefinition(e) { return m({}); }
    editorOptions(e) { return m(new ze); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(_.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Nn = (() => { class n {
    set panelPages(e) { this.panelPages$.next(e ?? []); }
    set panels(e) { this.panels$.next(e ?? []); }
    set panes(e) { this.panes$.next(e ?? []); }
    constructor(e, t) { this.fb = e, this.panelHandler = t, this.panelPages$ = new Y([]), this.panels$ = new Y([]), this.panes$ = new Y([]), this.nested$ = new Y([]), this.formGroup = this.fb.group({ panelPage: this.fb.control(null), panel: this.fb.control(null), pane: this.fb.control(null), nested: this.fb.control(null) }), this.onTouched = () => { }, this.initSubscriptions(); }
    initSubscriptions() { this.formGroup.get("panelPage").valueChanges.pipe(se(e => e != null)).subscribe(e => { let t = this.panelPages$.value[e]; this.panels$.next(t ? new M(t).panels : []); }), this.formGroup.get("panel").valueChanges.pipe(se(e => e != null)).subscribe(e => { let t = this.panels$.value[e]; this.panes$.next(t ? new q(t).panes : []); }), this.formGroup.get("pane").valueChanges.pipe(se(e => e != null), f(e => this.panes$.value[e] ?? null), se(e => !!e), h(e => e.contentPlugin === "panel" ? this.panelHandler.toObject(e.settings) : m(null))).subscribe(e => { this.nested$.next(e ? [e] : []); }); }
    writeValue(e) { e && this.formGroup.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.formGroup.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(e) { return this.formGroup.valid ? null : { invalidForm: { valid: !1 } }; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(S.UntypedFormBuilder), r.\u0275\u0275directiveInject(E)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["druid-panels-panelpage-linkedlist"]], inputs: { panelPages: "panelPages", panels: "panels", panes: "panes" }, standalone: !1, features: [r.\u0275\u0275ProvidersFeature([{ provide: Ut, useExisting: Je(() => n), multi: !0 }, { provide: Lt, useExisting: Je(() => n), multi: !0 }])], decls: 15, vars: 13, consts: [[3, "formGroup"], ["formControlName", "panelPage"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "panel"], ["formControlName", "pane"], ["formControlName", "nested", 3, "panelPages", 4, "ngIf"], [3, "value"], ["formControlName", "nested", 3, "panelPages"]], template: function (t, a) { if (t & 1 && (r.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-select", 1), r.\u0275\u0275template(3, wi, 2, 2, "mat-option", 2), r.\u0275\u0275pipe(4, "async"), r.\u0275\u0275elementEnd()(), r.\u0275\u0275elementStart(5, "mat-form-field")(6, "mat-select", 3), r.\u0275\u0275template(7, Ii, 2, 2, "mat-option", 2), r.\u0275\u0275pipe(8, "async"), r.\u0275\u0275elementEnd()(), r.\u0275\u0275elementStart(9, "mat-form-field")(10, "mat-select", 4), r.\u0275\u0275template(11, Ci, 2, 2, "mat-option", 2), r.\u0275\u0275pipe(12, "async"), r.\u0275\u0275elementEnd()(), r.\u0275\u0275template(13, Fi, 2, 3, "druid-panels-panelpage-linkedlist", 5), r.\u0275\u0275pipe(14, "async"), r.\u0275\u0275elementEnd()), t & 2) {
            let o;
            r.\u0275\u0275property("formGroup", a.formGroup), r.\u0275\u0275advance(3), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(4, 5, a.panelPages$)), r.\u0275\u0275advance(4), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(8, 7, a.panels$)), r.\u0275\u0275advance(4), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(12, 9, a.panes$)), r.\u0275\u0275advance(2), r.\u0275\u0275property("ngIf", (o = r.\u0275\u0275pipeBind1(14, 11, a.nested$)) == null ? null : o.length);
        } }, dependencies: [G.NgForOf, G.NgIf, S.NgControlStatus, S.NgControlStatusGroup, S.FormGroupDirective, S.FormControlName, pt.MatOption, dt.MatFormField, ft.MatSelect, n, G.AsyncPipe], encapsulation: 2 }); }
} return n; })(), Ct = (() => { class n {
    constructor(e, t, a, o, l, c) { this.siteName = e, this.bottomSheetRef = t, this.handler = a, this.dialog = o, this.fb = l, this.selectedIndex = 0, this.panelPagesService = c.getEntityCollectionService("PanelPage"), this.panelPageListItemsService = c.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { }
    onNewSelect() { let e = V(), t = new M({ id: void 0, layoutType: "split", displayType: "page", site: this.siteName, gridItems: [], panels: [], layoutSetting: new k, rowSettings: [] }); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new j(""), settings: this.fb.array(this.handler.buildSettings(t).map(a => this.convertToGroup(a))) })), this.bottomSheetRef.dismiss(); }
    onLinkSelect() { this.selectedIndex = 1, this.panels$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(this.siteName)}`); }
    onEmbedSelect() { let e = V(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new j(""), locked: new j(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onYieldSelect() { let e = V(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "yield", name: e, label: e, rule: new j(""), locked: new j(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onItemSelect(e) { let t = V(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: t, label: t, rule: new j(""), linkedPageId: new j(e, W.required), locked: new j(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    convertToGroup(e) { let t = this.fb.group({ name: new j(e.name, W.required), type: new j(e.type, W.required), displayName: new j(e.displayName, W.required), value: new j(e.value, W.required), computedValue: new j(e.value, W.required), attributes: new Ht([]) }); return e.attributes && e.attributes.length > 0 && e.attributes.forEach(a => { t.get("attributes").push(this.convertToGroup(a)); }), t; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(ht), r.\u0275\u0275directiveInject(gt.MatBottomSheetRef), r.\u0275\u0275directiveInject(E), r.\u0275\u0275directiveInject(ge.MatDialog), r.\u0275\u0275directiveInject(S.UntypedFormBuilder), r.\u0275\u0275directiveInject(z.EntityServices)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-selector"]], inputs: { panelFormGroup: "panelFormGroup" }, standalone: !1, decls: 13, vars: 1, consts: [["mat-align-tabs", "start", 3, "selectedIndex"], ["label", "Type"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["label", "Search"], ["matTabContent", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-line", ""]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "mat-nav-list")(3, "a", 2), r.\u0275\u0275listener("click", function () { return a.onNewSelect(); }), r.\u0275\u0275text(4, "New Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(5, "a", 2), r.\u0275\u0275listener("click", function () { return a.onLinkSelect(); }), r.\u0275\u0275text(6, "Link Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(7, "a", 2), r.\u0275\u0275listener("click", function () { return a.onEmbedSelect(); }), r.\u0275\u0275text(8, "Embed Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(9, "a", 2), r.\u0275\u0275listener("click", function () { return a.onYieldSelect(); }), r.\u0275\u0275text(10, "Yield"), r.\u0275\u0275elementEnd()()(), r.\u0275\u0275elementStart(11, "mat-tab", 3), r.\u0275\u0275template(12, Di, 3, 3, "ng-template", 4), r.\u0275\u0275elementEnd()()), t & 2 && r.\u0275\u0275property("selectedIndex", a.selectedIndex); }, dependencies: [G.NgForOf, vt.MatLine, ve.MatNavList, ve.MatListItem, ee.MatTabContent, ee.MatTab, ee.MatTabGroup, G.AsyncPipe], encapsulation: 2 }); }
} return n; })(), xi = (() => { class n {
    constructor() { }
    ngOnInit() { }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-editor"]], standalone: !1, decls: 2, vars: 0, template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "p"), r.\u0275\u0275text(1, "panel-editor works!"), r.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return n; })(), T = class {
    constructor(s) { this.panels = [], s && (this.id = s.id, s.panels !== void 0 && Array.isArray(s.panels) && (this.panels = s.panels.map(e => new R(e)))); }
}, R = class {
    constructor(s) { this.panes = [], s && s.panes !== void 0 && Array.isArray(s.panes) && (this.panes = s.panes.map(e => new O(e))); }
}, O = class {
    constructor(s) { s && (s.state !== void 0 && (this.state = new J(s.state)), s.nestedPage !== void 0 && s.nestedPage !== null && (this.nestedPage = new T(s.nestedPage))); }
}, Ft = (() => { class n {
    constructor(e, t, a, o, l, c) { this.siteName = e, this.panelHandler = t, this.attributeSerializer = a, this.rulesResolver = o, this.dpm = l, this.datasourceEvalutator = c; }
    handleFile(e) { return m([]); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(e) { return m(!1); }
    isDynamic(e) { return !0; }
    isData(e) { return !0; }
    fetchDynamicData(e, t) { let a = t.has("dataPanes") ? new Map(t.get("dataPanes").map(l => [l.name, l])) : new Map([]), o = new Map(Array.from(a).map(([l, c]) => [l, new Oe(this.attributeSerializer.deserializeAsObject(c.settings))])); return this.toObject(e).pipe(h(l => this.datasourceEvalutator.evalDatasource({ datasource: l, metadata: t, datasources: o }))); }
    buildDynamicItems(e, t) { let a = new Map(t.get("dataPanes").map(o => [o.name, o])); return this.fetchDynamicData(e, t).pipe(h(o => this.toObject(e).pipe(f(l => [l, o]))), h(([o, l]) => this.getBindings(e, "pane").pipe(f(c => [o, l, c]))), h(([o, l, c]) => x(() => l.results.length !== 0 && c.length > 0, C(l.results.map(u => C(c.filter(p => !a.has(p.id)).map(p => m(t.get("panes").find(d => d.name === p.id)).pipe(h(d => x(() => d && d.rule && d.rule !== null && d.rule.condition !== "", d ? this.rulesResolver.evaluate(d.rule, [...t.get("contexts"), ...d.contexts !== void 0 ? d.contexts : [], new ae({ name: "_root", adaptor: "data", data: u })]).pipe(f(g => [d, g])) : m([d, !1]), m(!1).pipe(f(g => [d, g])))), se(([d, g]) => g), f(([d, g]) => d.name), De(p.id)))).pipe(f(p => p.reduce((d, g) => [...d, g], []))))).pipe(f(u => [o, l, u])), new Ce(u => { u.next([o, l, []]), u.complete(); }))), f(([o, l, c]) => l.results.reduce((u, p, d) => [...u, ...c[d] ? c[d].map(g => new A(b(v({}, t.get("panes").find(I => I.name === g)), { rule: void 0, label: V(), contexts: [...t.get("contexts"), new ae({ name: "_root", adaptor: "data", data: p })] }))) : []], [])), f(o => new q({ stylePlugin: void 0, settings: [], panes: o, columnSetting: new k })), f(o => this.panelHandler.buildSettings(new M({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new k, rowSettings: [], panels: [o] }))), f(o => o.find(l => l.name === "panels").attributes[0].attributes.find(l => l.name === "panes").attributes)); }
    getBindings(e, t, a) { let o = a ? new Map(a.get("dataPanes").map(l => [l.name, l])) : new Map; return t === "context" ? this.toObject(e).pipe(f(l => [l, l.params ? l.params.reduce((c, u) => [...c, ...u.mapping.type === "form" ? [new Yt({ id: `form__${u.mapping.value.split(".", 2)[0].trim()}`, type: "context" })] : []], []) : []]), h(([l, c]) => this.dpm.getPlugin(l.plugin).pipe(h(u => u.getBindings({ settings: l.settings, metadata: a }).pipe(f(p => [l, p]))))), h(([l, c]) => C(l.renderer.bindings.reduce((u, p) => [...u, ...o.has(p.id) ? [this.toObject(o.get(p.id).settings)] : []], [])).pipe(h(u => C(u.map(p => this.dpm.getPlugin(p.plugin).pipe(h(d => d.getBindings({ settings: p.settings, metadata: a }))))).pipe(f(p => p.reduce((d, g) => [...d, ...g], c)), De(c))), De(c)))) : this.toObject(e).pipe(h(l => x(() => l.renderer.type === t, m(l.renderer.bindings), m([])))); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    getRenderType(e) { let t = [e.find(a => a.name === "renderer")].map(a => a.attributes.find(o => o.name === "type")); return t.length > 0 ? t[0].value : void 0; }
    stateDefinition(e) { return m({ autocomplete: { input: "" }, loading: "y" }); }
    editorOptions(e) { return this.toObject(e).pipe(h(t => this.dpm.getPlugin(t && t.plugin ? t.plugin : "data").pipe(f(a => [t, a]))), h(([t, a]) => a.editorOptions ? a.editorOptions({ settings: t && t.settings ? t.settings : [] }) : m(void 0)), f(t => new ze({ fullscreen: t ? t.fullscreen : !1 }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(ht), r.\u0275\u0275inject(E), r.\u0275\u0275inject(_.AttributeSerializerService), r.\u0275\u0275inject(ue.RulesResolverService), r.\u0275\u0275inject(U.DatasourcePluginManager), r.\u0275\u0275inject(U.DatasourceEvaluator)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), $i = (() => { let n = class ke {
    constructor(e, t, a, o, l) { this.data = e, this.dialogRef = t, this.fb = a, this.attributeSerializer = o, this.datasourceHandler = l, this.injector = At(Nt), this.datasource = new Oe, this.bindableOptions = [], this.contexts = [], this.formGroup = this.fb.group({ source: this.fb.control("") }), this.hasFillContent = !0; }
    ngOnInit() { let e = this.data.panelFormGroup.get("panes"); if (this.bindableOptions = e.controls.reduce((t, a) => a.get("name").value ? [...t, a.get("name").value] : [...t], []), this.contexts = this.data.contexts.map(t => t.name), this.data.panelIndex !== void 0 && this.data.paneIndex < e.length) {
        let t = e.at(this.data.paneIndex).get("settings").value.map(a => new J(a));
        this.datasourceHandler.toObject(t).subscribe(a => { this.datasource = a; });
    } }
    onSubmit() { let e = this.attributeSerializer.serialize(this.formGroup.value.source, "source"), t = this.data.panelFormGroup.get("panes").at(this.data.paneIndex); this.data.paneIndex === void 0 ? (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "datasource", name: new j(""), label: new j(""), rule: new j(""), settings: this.fb.array(e.attributes.map(a => this.attributeSerializer.convertToGroup(a))) })), console.log(this.data.panelFormGroup.get("panes").value)) : (t.get("settings").clear(), e.attributes.forEach(a => t.get("settings").push(this.attributeSerializer.convertToGroup(a)))), this.dialogRef.close(); }
    submit() { this.onSubmit(); }
    fill() { this.datasourceForm.fill(); }
    setFillContent(e) { e ? this.hasFillContent = !0 : this.hasFillContent = !1, this.datasourceForm.setFillContent(e); }
    static { this.\u0275fac = function (t) { return new (t || ke)(r.\u0275\u0275directiveInject(ti), r.\u0275\u0275directiveInject(ge.MatDialogRef), r.\u0275\u0275directiveInject(S.UntypedFormBuilder), r.\u0275\u0275directiveInject(_.AttributeSerializerService), r.\u0275\u0275directiveInject(Ft)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: ke, selectors: [["classifieds-ui-datasource-editor"]], viewQuery: function (t, a) { if (t & 1 && r.\u0275\u0275viewQuery(Kt, 5), t & 2) {
            let o;
            r.\u0275\u0275queryRefresh(o = r.\u0275\u0275loadQuery()) && (a.datasourceForm = o.first);
        } }, standalone: !1, decls: 8, vars: 5, consts: [[3, "ngSubmit", "formGroup"], ["formControlName", "source", 3, "bindableOptions", "contexts", "datasource"], ["type", "submit"], ["type", "button", "matButton", "outlined", 3, "click"], ["type", "submit", "matButton", "outlined", 3, "disabled"]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "form", 0), r.\u0275\u0275listener("ngSubmit", function () { return a.onSubmit(); }), r.\u0275\u0275element(1, "classifieds-ui-datasource-form", 1), r.\u0275\u0275elementStart(2, "button", 2), r.\u0275\u0275text(3, "Save"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(4, "button", 3), r.\u0275\u0275listener("click", function () { return a.fill(); }), r.\u0275\u0275text(5, "Fill in the form"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(6, "button", 4), r.\u0275\u0275text(7, "Save the Form"), r.\u0275\u0275elementEnd()()), t & 2 && (r.\u0275\u0275property("formGroup", a.formGroup), r.\u0275\u0275advance(), r.\u0275\u0275property("bindableOptions", a.bindableOptions)("contexts", a.contexts)("datasource", a.datasource), r.\u0275\u0275advance(5), r.\u0275\u0275property("disabled", !a.formGroup.valid)); }, dependencies: [S.\u0275NgNoValidate, S.NgControlStatus, S.NgControlStatusGroup, S.FormGroupDirective, S.FormControlName, Pt.MatButton, U.DatasourceFormComponent], encapsulation: 2 }); }
}; return n = ri([Wt("editor")], n), n; })(), Ti = n => new Ae({ id: "panel", title: "Panel", selectionComponent: Ct, editorComponent: xi, renderComponent: void 0, handler: n }), ki = ({ handler: n }) => new Ae({ id: "yield", title: "Yield", selectionComponent: Ct, editorComponent: void 0, renderComponent: void 0, handler: n }), _i = n => new Ae({ id: "datasource", title: "Datasource", selectionComponent: void 0, cls: "datasource", editorComponent: $i, renderComponent: void 0, handler: n }), Oi = (n, s) => new ii({ id: "panels", title: "Panels", build: () => { ni.prototype.writePaneState = (e, t) => new Promise(a => { let o = n.getEntityCollectionService("PanelPageState"); o.getByKey(e.id).pipe(ot(() => m(new T({ id: e.id, panels: [] }))), f(l => l === void 0 ? new T({ id: e.id, panels: [] }) : l), f(l => { let c = s.serialize(t, "root"), u = new T(b(v({}, l), { panels: [] })); for (let p = 0; p < e.panelIndex + 1; p++) {
        u.panels.push(p < l.panels.length ? new R(b(v({}, l.panels[p]), { panes: [] })) : new R);
        for (let d = 0; d < e.paneIndex + 1; d++)
            p === e.panelIndex && d === e.paneIndex ? u.panels[p].panes.push(p < l.panels.length && d < l.panels[p].panes.length ? new O(b(v({}, l.panels[p].panes[d]), { state: c })) : new O({ state: c })) : u.panels[p].panes.push(p < l.panels.length && d < l.panels[p].panes.length ? new O(v({}, l.panels[p].panes[d])) : new O);
    } return u; }), h(l => o.upsert(l))).subscribe(l => { a(l); }); }); } });
var Ei = me({ id: "toggle_sidenav", title: "Toggle Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(s => s.toggle()); } }), zi = me({ id: "open_sidenav", title: "Open Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(s => s.open()); } }), Ai = me({ id: "close_sidenav", title: "Close Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(s => s.close()); } }), Ni = me({ id: "refresh_sidenav", title: "Refresh Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(s => s.refresh()); } }), jt = X("[PageBuilder] Load Rest Data", K()), Dt = X("[PageBuilder] Load Rest Data Success", K()), Bn = X("[PageBuilder] Load Rest Data Error", K()), Mt = X("[PageBuilder] Set Page Info", K()), xt = X("[PageBuilder] Set Form", K()), $t = X("[PageBuilder] Set Page", K()), Tt = X("[PageBuilder] Selection Path", K()), Bi = (() => { class n {
    fetchRestdata$(e) { switch (e.method ? e.method : "get") {
        case "post":
        case "POST": return m([]).pipe(h(() => this.snippetParserService.parseSnippet({ snippet: e.body })), h(a => this.datasourceApi.postData({ url: e.url, body: a })));
        default: return this.datasourceApi.getData(e.url);
    } }
    constructor(e, t, a) { this.actions$ = e, this.datasourceApi = t, this.snippetParserService = a, this.loadRestData$ = ui(() => this.actions$.pipe(pi(jt), Jt(o => this.fetchRestdata$(o.rest).pipe(ot(() => []), f(l => o.rest.renderer !== void 0 && o.rest.renderer.query !== void 0 && o.rest.renderer.query !== "" ? Ne.JSONPath({ path: o.rest.renderer.query, json: l }) : l), f(l => Dt({ tag: o.tag, data: new Ee({ results: l }) })))))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(bt.Actions), r.\u0275\u0275inject(U.DatasourceApiService), r.\u0275\u0275inject(wt.SnippetParserService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), _e = class {
    constructor(s) { s && (this.id = s.id, this.path = s.path, this.realPath = s.realPath, this.args = s.args); }
}, kt = "pageBuilder", Ri = { dataTags: [], datasets: [], pageInfo: void 0, formNames: [], forms: [], page: void 0, selectionPath: [] }, Gi = fi(Ri, ne(Dt, (n, s) => { let e = n.dataTags.findIndex(t => t === s.tag); if (e > -1 && n.forms[e] !== void 0) {
    let t = v({}, n);
    return t.datasets[e].push(s.data), t;
}
else
    return b(v({}, n), { dataTags: [...n.dataTags, s.tag], datasets: [...n.datasets, [s.data]] }); }), ne(xt, (n, s) => { let e = n.formNames.findIndex(t => t === s.name); return e > -1 && n.forms[e] !== void 0 ? b(v({}, n), { forms: n.forms.map((t, a) => a === e ? s.form : t) }) : b(v({}, n), { formNames: [...n.formNames, s.name], forms: [...n.forms, s.form] }); }), ne(Mt, (n, s) => b(v({}, n), { pageInfo: s.info !== void 0 ? new _e(s.info) : void 0 })), ne($t, (n, s) => b(v({}, n), { page: s.page !== void 0 ? new M(s.page) : void 0 })), ne(Tt, (n, s) => b(v({}, n), { selectionPath: s.path !== void 0 ? s.path : [] })));
function Ui(n, s) { return Gi(n, s); }
var Rn = new at("StylePlugin"), Li = new at("PanelsSettings"), Hi = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    handleFile(e) { return m(); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(e) { return m(!1); }
    isDynamic(e) { return !1; }
    isData(e) { return !1; }
    buildDynamicItems(e, t) { return m([]); }
    fetchDynamicData(e, t) { return m(new Ee); }
    getBindings(e, t) { return m([]); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new A(this.attributeSerializer.deserialize(t))); }
    stateDefinition(e) { return m({}); }
    editorOptions(e) { return m(new ze); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(_.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Gn = (() => { class n {
    constructor(e, t, a, o, l, c, u, p, d, g, I, Q, H, P) { let w = Mi(e, a); o.registerMetadataMap(w), c.registerService("PanelPageState", new Zt("PanelPageState")), c.registerService("PanelPage", new xe("PanelPage", g, I, H)), c.registerService("PanelPageListItem", new xe("PanelPageListItem", g, I, H)), t.forEach(y => l.register(y)), l.register(ki({ handler: P })), u.register(Oi(p, d)), c.registerService("PanelPageForm", new xe("PanelPageForm", g, I, H)), [Ei, zi, Ai, Ni].map(y => Q.register(y)); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Bt), r.\u0275\u0275inject(Me), r.\u0275\u0275inject(Li), r.\u0275\u0275inject(z.EntityDefinitionService), r.\u0275\u0275inject(he.ContentPluginManager), r.\u0275\u0275inject(z.EntityDataService), r.\u0275\u0275inject(yt.BridgeBuilderPluginManager), r.\u0275\u0275inject(z.EntityServices), r.\u0275\u0275inject(_.AttributeSerializerService), r.\u0275\u0275inject(ye.CrudAdaptorPluginManager), r.\u0275\u0275inject(z.EntityDefinitionService), r.\u0275\u0275inject(ut.InteractionHandlerPluginManager), r.\u0275\u0275inject(ye.CrudDataHelperService), r.\u0275\u0275inject(Hi)); }; }
    static { this.\u0275mod = r.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = r.\u0275\u0275defineInjector({ providers: [{ provide: E, useClass: E }, { provide: Me, useFactory: Ti, multi: !0, deps: [E] }, { provide: Me, useFactory: _i, multi: !0, deps: [Ft] }, { provide: Gt, useClass: Rt }], imports: [zt, Vt, qt, mi.forFeature(kt, Ui), di.forFeature([Bi]), ei, Qt, ci, oi, li, si] }); }
} return n; })(), st = class n {
    constructor(s) { s && (this.panelPage = s.panelPage, s.panel !== void 0 && s.panel !== null && (this.panel = s.panel), s.pane !== void 0 && s.pane !== null && (this.pane = s.pane), s.nested !== void 0 && s.nested !== null && typeof s.nested == "object" && (this.nested = new n(s.nested))); }
}, Un = (() => { class n {
    get gridItems() { return []; }
    constructor(e) { this.controlContainer = e, this.savable = !0, this.nested = !1, this.dashboard = [], this.layoutSetting = new k, this.rowSettings = [], this.ancestory = []; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(S.ControlContainer)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-editor-base"]], inputs: { savable: "savable", nested: "nested", editor: "editor", dashboard: "dashboard", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings", editablePaneTpl: "editablePaneTpl", extraActionsAreaTmpl: "extraActionsAreaTmpl", contextsMenuTpl: "contextsMenuTpl", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), Ln = (() => { class n {
    get columnSettings() { return this.panelPage ? this.panelPage.panels.reduce((t, a) => [...t, new k(a.columnSetting)], []) : []; }
    constructor(e) { this.controlContainer = e, this.displayMainControls = !1, this.displayItemHeader = !1; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(S.ControlContainer, 8)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-renderer-base"]], inputs: { panelPage: "panelPage", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", renderPanelTpl: "renderPanelTpl" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), Hn = (() => { class n {
    constructor() { this.settings = [], this.panes = [], this.originMappings = [], this.ancestory = []; }
    mergeContexts(e) { if (!(e === void 0 && this.contexts === void 0))
        return e !== void 0 && this.contexts !== void 0 ? [...e, ...this.contexts] : e !== void 0 ? e : this.contexts; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-style-renderer-base"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", contexts: "contexts", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), Vi = (() => { class n {
    get panelPageService() { return this.es.getEntityCollectionService("PanelPage"); }
    constructor(e, t) { this.es = e, this.panelHandler = t; }
    reducePage(e) { return e.panels.reduce((t, a, o) => this.reducePanels(t, a, o), []); }
    reducePanels(e, t, a) { return [...e, ...t.panes.reduce((o, l, c) => this.reducePanes(o, l, c).map(u => u.pipe(f(([p, d]) => [a, p, d]))), [])]; }
    reducePanes(e, t, a) { return [...e, ...t.contentPlugin === "panel" ? [this.nestedPage$(t).pipe(f(o => [a, o]))] : []]; }
    nestedPage$(e) { return console.log("get nested panel page"), e.linkedPageId && e.linkedPageId !== "" ? this.getByKey(e.linkedPageId).pipe($(() => console.log(`get(${e.linkedPageId})`))) : this.getEmbedded(e.settings).pipe($(() => console.log("toObject()"))); }
    remapNested(e, t) { t.forEach(([a, o, l]) => { e.panels[a].panes[o].nestedPage = l; }); }
    getByKey(e) { return this.panelPageService.getByKey(e).pipe(f(t => new M(t)), h(t => x(() => this.reducePage(t).length > 0, C(this.reducePage(t)).pipe($(a => this.remapNested(t, a)), f(() => t)), m(t)))); }
    getEmbedded(e) { return this.panelHandler.toObject(e).pipe(f(t => new M(t)), h(t => x(() => this.reducePage(t).length > 0, C(this.reducePage(t)).pipe($(a => this.remapNested(t, a)), f(() => t)), m(t)))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(z.EntityServices), r.\u0275\u0275inject(E)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Vn = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    rebuildPage(e, t) { return new M(b(v({}, e), { panels: this.rebuildPanels(e.panels, [...t]) })); }
    rebuildPanels(e, t) { return e.filter((a, o) => this.rebuildCondition(t[0], o)).map(a => new q(b(v({}, a), { panes: this.rebuildPanes(a.panes, t.slice(1)) }))); }
    rebuildPanes(e, t) { return e.filter((a, o) => this.rebuildCondition(t[0], o)).map(a => a.contentPlugin === "panel" ? new A(b(v({}, a), { nestedPage: void 0, settings: this.panelHandler.buildSettings(this.rebuildPage(a.nestedPage, t.slice(1))) })) : new A(v({}, a))); }
    rebuildCondition(e, t) { return e !== 0 ? e > -1 ? t === e + e * -1 : t !== e * -1 + e : !0; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(E)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), qn = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    convertPageToState(e) { return m(new T).pipe(h(() => C(e.panels.map(t => this.convertPanelToState(t)))), f(t => new T({ id: e.id, panels: t }))); }
    convertPanelToState(e) { return m(new R).pipe(h(() => C(e.panes.map(t => this.convertPaneToState(t)))), f(t => new R({ panes: t }))); }
    convertPaneToState(e) { return m(new O).pipe(h(t => x(() => this.hasNestedPanelPage(e), this.panelHandler.toObject(e.settings).pipe(h(a => this.convertPageToState(a)), f(a => new O({ state: new J, nestedPage: a }))), m(t)))); }
    hasNestedPanelPage(e) { return e.contentPlugin === "panel" && (e.linkedPageId === void 0 || e.linkedPageId === null || e.linkedPageId === ""); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(E)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), qi = (() => { class n {
    constructor(e) { this.panelsLoaderService = e; }
    walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: a, ancestory: o }) { return new Ce(l => { let c = e.panels.length, u = []; for (let p = 0; p < c; p++) {
        let d = e.panels[p].panes.length;
        for (let g = 0; g < d; g++)
            u.push(t({ pane: e.panels[p].panes[g], panelPage: e, ancestoryWithSelf: [...o, p, g] })), e.panels[p].panes[g].nestedPage && e.panels[p].panes[g].nestedPage.panels && e.panels[p].panes[g].nestedPage.panels.length !== 0 ? u.push(this.walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: a, ancestory: [...o, p, g] })) : e.panels[p].panes[g].contentPlugin;
    } u.length === 0 ? (l.next(a), l.complete()) : C(u).pipe(f(p => p.reduce((d, g) => [...d, ...g], a)), $(p => { l.next(p), l.complete(); })).subscribe(); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Vi)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Jn = (() => { class n {
    constructor(e, t) { this.panelsVisitorService = e, this.cpm = t, this.gatherPaneContexts = ({ pane: a, panelPage: o, ancestoryWithSelf: l }) => this.cpm.getPlugin(a.contentPlugin).pipe(h(c => c.handler ? c.handler.stateDefinition(a.settings) : m({})), f(c => new ae({ name: "panestate-" + l.join("-"), adaptor: "data", plugin: "panestate", data: { id: o ? o.id : "", selectionPath: [...l], value: c } })), f(c => [c]), re(1)); }
    allActivePageContexts({ panelPage: e, ancestory: t = [] }) { return this.panelsVisitorService.walkPageHierarchy({ panelPage: e, ancestory: t, visitorFunc: this.gatherPaneContexts, defaultv: [] }); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(qi), r.\u0275\u0275inject(he.ContentPluginManager)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ji = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    buildToAncestorySpec({ panelPageState: e, ancestory: t }) { for (let a = 0; a < t[0] + 1; a++)
        if (e.panels.length < a + 1 && e.panels.push(new R), a === t[0] && t.length > 1)
            for (let o = 0; o < t[1] + 1; o++)
                e.panels[t[0]].panes.length < o + 1 && e.panels[t[0]].panes.push(new O({ state: this.attributeSerializer.serialize({}, "root") })), o === t[1] && t.length > 2 && (e.panels[t[0]].panes[o].nestedPage || (e.panels[t[0]].panes[o].nestedPage = new T), this.buildToAncestorySpec({ panelPageState: e.panels[t[0]].panes[o].nestedPage, ancestory: t.slice(2) })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(_.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Xn = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Xi = (() => { class n extends gi {
    constructor(e, t) { super(e, t); }
    pluginDef() { return m(new vi({ name: "style" })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(It.PluginConfigurationManager), r.\u0275\u0275inject(mt.ModuleLoaderService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Kn = (() => { class n {
    constructor(e) { this.spm = e; }
    alterResolvedPanes({ panel: e, resolvedPanes: t, originMappings: a }) { return m(void 0).pipe(h(() => e.stylePlugin && e.stylePlugin !== "" ? this.spm.getPlugin(e.stylePlugin) : m(void 0)), h(o => o && o.handler ? o.handler.alterResolvedPanes({ settings: e.settings, resolvedPanes: t, originMappings: a }) : m({ resolvedPanes: t, originMappings: a }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Xi)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Qn = (() => { class n {
    constructor(e, t, a, o, l) { this.panelHandler = e, this.rulesResolver = t, this.rulesParser = a, this.inlineContextResolver = o, this.cpm = l; }
    usedContexts(e) { return this.panesPlugins(e).pipe(h(t => this.dataPanes(e).pipe(f(a => ({ plugins: t, dataPanes: a })))), h(({ plugins: t, dataPanes: a }) => C(e.reduce((o, l) => { let c = t.get(l.contentPlugin); return c.handler !== void 0 ? [...o, c.handler.getBindings(l.settings, "context", new Map([["dataPanes", a]])).pipe(f(u => u.map(p => p.id)))] : [...o]; }, [])).pipe(f(o => o.reduce((l, c) => [...l, ...c], [])), f(o => { let l = e.map(c => c.rule ? this.rulesParser.extractFacts(c.rule) : []).reduce((c, u) => [...c, ...u], []); return console.log("facts", l), Array.from(new Set([...o, ...l])); })))); }
    staticPanes(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])).pipe(f(t => e.filter(a => t.get(a.contentPlugin).handler === void 0 || !t.get(a.contentPlugin).handler.isDynamic(a.settings)))); }
    dataPanes(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])).pipe(f(t => e.filter(a => t.get(a.contentPlugin).handler !== void 0 && t.get(a.contentPlugin).handler.isData(a.settings)))); }
    panesPlugins(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])); }
    resolvePanes({ panes: e, contexts: t, resolvedContext: a }) { return console.log("resolve panes"), this.panesPlugins(e).pipe(h(o => C(e.reduce((l, c) => { let u = o.get(c.contentPlugin); return u.handler !== void 0 ? [...l, u.handler.getBindings(c.settings, "pane").pipe(f(p => p.map(d => d.id)))] : [...l, m([])]; }, [])))).pipe(f(o => o.reduce((l, c) => [...l, ...c], [])), h(o => this.panesPlugins(e).pipe(f(l => [o, l]))), h(([o, l]) => C(e.reduce((c, u) => { let p = l.get(u.contentPlugin); return p.handler !== void 0 && p.handler.isDynamic(u.settings) ? [...c, p.handler.isData(u.settings) && o.findIndex(d => d === u.name) !== -1 ? m([]) : C([this.staticPanes(e), this.dataPanes(e)]).pipe(h(([d, g]) => p.handler.buildDynamicItems(u.settings, new Map([...u.metadata === void 0 ? [] : u.metadata, ["tag", V()], ["panes", d], ["dataPanes", g], ["contexts", t !== void 0 ? t : []]])).pipe(f(I => this.panelHandler.fromPanes(I)), f(I => this.panelHandler.wrapPanel(I).panes), re(1))))] : u.name === "" || o.findIndex(d => d === u.name) === -1 ? [...c, m([new A(b(v({}, u), { contexts: [...t, ...u.contexts ? u.contexts : []] }))]).pipe(h(d => x(() => d[0].rule !== void 0 && d[0].rule !== null && d[0].rule.condition !== "", this.rulesResolver.evaluate(d[0].rule, [...t, ...u.contexts ? u.contexts : []]).pipe(f(g => g ? d : [])), m(d))))] : [...c]; }, [])).pipe(h(c => x(() => c.reduce((u, p) => [...u, ...p], []).length === 0, m([c, []]), C([...c.reduce((u, p) => [...u, ...p.map(d => d.contexts && d.contexts.length !== 0 ? this.inlineContextResolver.resolveAll(d.contexts).pipe(re(1)) : m({}).pipe(re(1)))], [])]).pipe(f(u => [c, u.map(p => v(v({}, p), a))])))), f(([c, u]) => { let p = [], d = []; return c.forEach((g, I) => { p = [...p === void 0 ? [] : p, ...g.map((Q, H) => new A(b(v({}, Q), { resolvedContext: u[p.length + H] })))], d = [...d && [], ...g.map(() => I)]; }), { resolvedPanes: p, originMappings: d }; })))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(E), r.\u0275\u0275inject(ue.RulesResolverService), r.\u0275\u0275inject(ue.RulesParserService), r.\u0275\u0275inject(lt.InlineContextResolverService), r.\u0275\u0275inject(he.ContentPluginManager)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), rt = class extends yi {
    constructor(s) { super(s), s && (this.name = this.id, this.title = s.title, this.editorComponent = s.editorComponent ? s.editorComponent : void 0, this.renderComponent = s.renderComponent ? s.renderComponent : void 0, s.handler && (this.handler = s.handler)); }
}, Yn = (() => { class n extends Pi {
    constructor() { super(), this.pageChange$ = new He, this.pageSize = 20, this.dataStream = new Y([]), this.subscription = new Le, this.lastPage = 0, this.paneItems = []; }
    set panes(e) { this.paneItems = [...this.paneItems, ...e], this.dataStream.next(this.paneItems); }
    connect(e) { return this.subscription.add(e.viewChange.subscribe(t => { let a = Math.ceil((t.end + 1) / this.pageSize); a > this.lastPage && (this.lastPage = a, this.pageChange$.next(a)); })), this.dataStream; }
    disconnect(e) { this.subscription.unsubscribe(); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), te = hi(kt), Wn = n => L(te, s => { let e = s.dataTags.findIndex(t => t === n); if (e > -1)
    return s.datasets[e][s.datasets[e].length - 1]; }), Ki = L(te, n => n.pageInfo), Qi = L(te, n => n.page), Yi = L(te, n => n.selectionPath), _t = L(te, n => n.formNames), Wi = L(te, n => n.forms), Zi = L(_t, Wi, (n, s, e) => { let t = n.findIndex(a => a === e.name); if (t > -1)
    return s[t]; }), en = (() => { class n {
    constructor(e) { this.store = e, this.getPageInfo$ = this.store.pipe(Z(Ki)), this.getPage$ = this.store.pipe(Z(Qi)), this.getSelectionPath$ = this.store.pipe(Z(Yi)), this.getFormNames$ = this.store.pipe(Z(_t)), this.getForm$ = t => this.store.pipe(Z(Zi, { name: t })); }
    loadRestData(e, t) { this.store.dispatch(jt({ tag: e, rest: t })); }
    setPageInfo(e) { this.store.dispatch(Mt({ info: e })); }
    setPage(e) { this.store.dispatch($t({ page: e })); }
    setSelectionPath(e) { this.store.dispatch(Tt({ path: e })); }
    setForm(e, t) { this.store.dispatch(xt({ name: e, form: t })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(St.Store)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Zn = (() => { class n {
    constructor(e, t, a, o) { this.pageBuilderFacade = e, this.panelStateArchitectService = t, this.attributeSerializer = a, this.selectEntities = l => l.entities, this.selectById = ({ id: l }) => L(this.selectEntities, c => c[l] ? c[l] : void 0), this.panelPageStateService = o.getEntityCollectionService("PanelPageState"); }
    mergeState({ state: e, settings: t, plugin: a, ancestory: o }) { return m(e).pipe(h(l => this.pageBuilderFacade.getPageInfo$.pipe(f(c => [l, c]))), h(([l, c]) => a.handler.stateDefinition(t).pipe(f(u => [l, c, u]))), h(([l, c, u]) => this.panelPageStateService.collection$.pipe(Z(this.selectById({ id: c.id })), f(p => [l, new T(p || { id: c.id, panels: [] }), u]), re(1))), f(([l, c, u]) => { this.panelStateArchitectService.buildToAncestorySpec({ panelPageState: c, ancestory: [...o] }); let p = "$." + o.map((g, I) => `${(I + 1) % 2 === 0 ? "panes" : (I === 0 ? "" : "nestedPage.") + "panels"}[${g}]`).join("."), d = Ne.JSONPath({ path: p, json: c })[0]; return [l, c, u, d]; }), $(([l, c, u, p]) => { let d = p.state ? p.state.root ? this.attributeSerializer.deserialize(p.state).root : this.attributeSerializer.deserialize(p.state) : {}, g = bi(!d || Object.keys(d).length === 0 ? u : d, l); p.state = this.attributeSerializer.serialize(g, "root"); }), f(([l, c, u, p]) => ({ paneState: p, pageState: c }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(en), r.\u0275\u0275inject(Ji), r.\u0275\u0275inject(_.AttributeSerializerService), r.\u0275\u0275inject(z.EntityServices)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), es = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    serializeForm(e) { let t = e.panels.length, a = {}; for (let o = 0; o < t; o++) {
        let l = e.panels[o].panes.length, c = new Map;
        for (let u = 0; u < l; u++) {
            let p = this.serializeFormPane(e.panels[o].panes[u]);
            if (e.panels[o].panes[u].name && e.panels[o].panes[u].name !== null && (a[e.panels[o].panes[u].name] || e.panels[o].panes[u].name === Si(e.panels[o].panes[u].name))) {
                c.has(e.panels[o].panes[u].name) || c.set(e.panels[o].panes[u].name, typeof a[e.panels[o].panes[u].name] < "u" ? [a[e.panels[o].panes[u].name]] : []);
                let d = c.get(e.panels[o].panes[u].name);
                c.set(e.panels[o].panes[u].name, [...d, p]);
            }
            else
                e.panels[o].panes[u].name && e.panels[o].panes[u].name !== "" ? a = b(v({}, a), { [e.panels[o].panes[u].name]: p }) : a = v(v({}, a), p);
        }
        Array.from(c).forEach(([u, p]) => a[u] = p);
    } return a; }
    serializeFormPane(e) { if (e.contentPlugin === "panel")
        return this.serializeForm(new oe(this.attributeSerializer.deserializeAsObject(e.settings, !0))); {
        let t = this.attributeSerializer.deserializeAsObject(e.settings, !0);
        return t !== void 0 ? t.value : void 0;
    } }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(_.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ts = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    convertPageToForm({ pp: e, pp2: t, ancestory: a, debugPath: o = [] }) { return m(new T).pipe(h(() => C(e.panels.map((l, c) => this.convertPanelToForm({ panel: l, panel2: t.panels[c], ancestory: a, debugPath: [...o, `convertPageToForm{ index: ${c} }`] })))), f(l => new oe({ id: e.id, panels: l, name: t.name, title: t.title, derivativeId: "" }))); }
    convertPanelToForm({ panel: e, panel2: t, ancestory: a, debugPath: o = [] }) { return m(new le).pipe(h(() => C(e.panes.map((l, c) => this.convertPaneToForm({ pane: l, pane2: t.panes[c], ancestory: a, debugPath: [...o, `convertPanelToForm{ index: ${c} }`] })))), f(l => new le({ panes: l, name: t.name, label: t.label }))); }
    convertPaneToForm({ pane: e, pane2: t, ancestory: a, debugPath: o = [] }) { let l = e.state.attributes.find(c => c.name === "value"); return m(new ce({ settings: l ? [l] : [], name: t.name, label: t.label, contentPlugin: t.contentPlugin })).pipe(h(c => x(() => this.hasNestedPanelPage(e), e.nestedPage ? this.convertPageToForm({ ancestory: a, pp: e.nestedPage, pp2: new M(this.attributeSerializer.deserializeAsObject(t.settings)), debugPath: [...o, "convertPaneToForm"] }).pipe(f(u => new ce(b(v({}, c), { settings: this.attributeSerializer.serialize(u, "root").attributes })))) : m(c), m(c)))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(_.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), is = (() => { class n {
    constructor(e, t) { this.attributeSerializer = e, this.fb = t; }
    makeFormGroupFromPage(e, t) { return m(this.fb.group({ panels: this.fb.array([]) })).pipe(h(a => C(e.panels.map((o, l) => this.makeFormGroupFromPanel(o, t.panels[l]))).pipe(f(o => ({ panelGroups: o, pageFormGroup: a })))), $(({ panelGroups: a, pageFormGroup: o }) => { let l = a.length; for (let c = 0; c < l; c++)
        o.get("panels").push(a[c]); }), f(({ pageFormGroup: a }) => a)); }
    makeFormGroupFromPanel(e, t) { return m(this.fb.group({ name: this.fb.control(e.name), panes: this.fb.array([]) })).pipe(h(a => C(e.panes.map((o, l) => this.makeFormGroupFromPane(o, t.panes[l]))).pipe(f(o => ({ paneGroups: o, panelFormGroup: a })))), $(({ paneGroups: a, panelFormGroup: o }) => { let l = a.length; for (let c = 0; c < l; c++)
        o.get("panes").push(a[c]); }), f(({ panelFormGroup: a }) => a)); }
    makeFormGroupFromPane(e, t) { let a = t ? t.settings.find(o => o.name === "value") : void 0; return m(this.fb.group({ name: this.fb.control(e.name), contentPlugin: this.fb.control(""), settings: this.fb.array([]) })).pipe(h(o => x(() => this.hasNestedPanelPage(e), this.hasNestedPanelPage(e) ? this.makeFormGroupFromPage(e.nestedPage, new oe(this.attributeSerializer.deserializeAsObject(t.settings))).pipe($(l => { let c = this.attributeSerializer.convertToGroup(this.attributeSerializer.serialize(l.value, "value").attributes[0]); o.get("contentPlugin").setValue("panel"), o.get("settings").push(c); }), f(() => o)) : m(o).pipe($(() => { if (a) {
        let l = this.attributeSerializer.convertToGroup(a);
        o.get("settings").push(l);
    } })), m(o).pipe($(() => { if (a) {
        let l = this.attributeSerializer.convertToGroup(a);
        o.get("settings").push(l);
    } }))))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(_.AttributeSerializerService), r.\u0275\u0275inject(S.UntypedFormBuilder)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ns = (() => { class n {
    makeJsonNode() { return { attributes: {}, children: {} }; }
    reduceCss(e, t, a = !0) { return e && e.children ? Object.keys(e.children).filter(o => a ? o.indexOf(t) === 0 : o.indexOf(t) !== 0).reduce((o, l) => b(v({}, o), { children: b(v({}, o.children), { [a ? l.substr(l.indexOf(t) + t.length).trim() : l]: e.children[l] }) }), this.makeJsonNode()) : this.makeJsonNode(); }
    reduceSelector(e, t, a = !0) { return e ? Object.keys(e).filter(o => a ? o.indexOf(t) === 0 : o.indexOf(t) !== 0).reduce((o, l) => b(v({}, o), { [a ? l.substr(l.indexOf(t) + t.length).trim() : l]: e[l] }), {}) : {}; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ss = ({ group: n, registry: s, mouseTarget: e, cursor: t, content: a }) => { let o = 0; return [{ group: n, weight: o++, autoContinue: !1, cursorBehavior: "click-item", title: "Fill in Form", run: l => Ie(null, null, function* () { console.log("Fill in Form"); let c = yield Xe("editor", void 0, 0, s), u = Ke(c, e); t.moveTo(u), yield setTimeout(() => { a && c.setFillContent(a), c.fill(); }, 1e3); }) }, { group: n, weight: o++, autoContinue: !1, cursorBehavior: "click-item", title: "Save the form", run: l => Ie(null, null, function* () { console.log("Save the form"); let c = yield Xe("editor", void 0, 0, s), u = Ke(c, e); t.moveTo(u), yield setTimeout(() => c.submit(), 1e3); }) }]; };
export { et as ContentEditorConfig, ns as CssHelperService, Ft as DatasourceContentHandler, $i as DatasourceEditorComponent, Xn as DynamicPaneService, Ze as FormDatasource, is as FormGroupConverterService, es as FormService, ts as FormStateConverterService, de as GridItem, nt as GridLayout, Un as LayoutEditorBaseComponent, Ln as LayoutRendererBaseComponent, k as LayoutSetting, Li as PANELS_SETTINGS, en as PageBuilderFacade, A as Pane, Yn as PaneDatasourceService, We as PanePropsFormPayload, O as PaneState, Zn as PaneStateService, q as Panel, E as PanelContentHandler, xi as PanelEditorComponent, M as PanelPage, oe as PanelPageForm, ce as PanelPageFormPane, le as PanelPageFormPanel, Nn as PanelPageLinkedlistComponent, it as PanelPageListItem, fe as PanelPagePermissions, st as PanelPageSelector, T as PanelPageState, _e as PanelPageStateSlice, Ye as PanelPropsFormPayload, Qn as PanelResolverService, Ct as PanelSelectorComponent, R as PanelState, Ji as PanelStateArchitectService, qn as PanelStateConverterService, Hn as PanelStyleRendererBaseComponent, Jn as PanelsContextService, Vi as PanelsLoaderService, Gn as PanelsModule, Vn as PanelsSelectorService, tt as PanelsSettings, qi as PanelsWalkerService, $e as PrerenderFormPayload, Qe as PropertiesFormPayload, Rn as STYLE_PLUGIN, Te as SelectionFormPayload, rt as StylePlugin, Xi as StylePluginManager, Kn as StyleResolverService, ss as autoFillSteps, Ri as initialState, jt as loadRestData, Bn as loadRestDataError, Dt as loadRestDataSuccess, kt as pageBuilderFeatureKey, Ui as reducer, Wn as selectDataset, Zi as selectForm, _t as selectFormNames, Wi as selectForms, Qi as selectPage, te as selectPageBuilderState, Ki as selectPageInfo, Yi as selectSelectionPath, xt as setForm, $t as setPage, Mt as setPageInfo, Tt as setSelectionPath };
