import { a as U, b as v, c as S, d as T, e as W } from "@nf-internal/chunk-YWLUDWUY";
import "@nf-internal/chunk-M4JCPEPJ";
import { D as $, z as B } from "@nf-internal/chunk-STIBVO4O";
import { a as V, b as A } from "@nf-internal/chunk-2AVGQ2MQ";
import * as t from "@angular/core";
import { EventEmitter as y, forwardRef as J } from "@angular/core";
import * as u from "@angular/common";
import { CommonModule as dt } from "@angular/common";
import * as s from "@angular/forms";
import { NG_VALUE_ACCESSOR as ut, NG_VALIDATORS as mt, FormsModule as pt, ReactiveFormsModule as ct } from "@angular/forms";
import * as G from "angular-split";
import { SplitAreaDirective as _t, AngularSplitModule as gt } from "angular-split";
import { MaterialModule as ft } from "@rollthecloudinc/material";
import * as O from "angular-gridster2";
import { GridsterComponent as yt, DisplayGrid as Ct, GridType as ht, GridsterModule as xt } from "angular-gridster2";
import * as x from "@rollthecloudinc/attributes";
import { AttributeValue as I, Attribute as f, AttributeTypes as C, AttributesModule as wt } from "@rollthecloudinc/attributes";
import { TokenModule as bt } from "@rollthecloudinc/token";
import * as E from "@rollthecloudinc/utils";
import { SITE_NAME as Y, UtilsModule as vt } from "@rollthecloudinc/utils";
import * as k from "ngx-dropzone";
import { NgxDropzoneModule as St } from "ngx-dropzone";
import { LayoutSetting as c, LayoutEditorBaseComponent as N, LayoutRendererBaseComponent as Z } from "@rollthecloudinc/panels";
import { switchMap as Tt, filter as Et } from "rxjs/operators";
import * as _ from "@angular/material/dialog";
import { MAT_DIALOG_DATA as Lt } from "@angular/material/dialog";
import * as w from "@angular/material/button";
import * as tt from "@rollthecloudinc/plugin";
import { BasePluginManager as Vt, PluginDef as It, Plugin as Mt } from "@rollthecloudinc/plugin";
import * as L from "@angular/material/icon";
import * as m from "@angular/material/menu";
import * as Q from "@rollthecloudinc/auth";
import * as H from "@ngrx/data";
import * as p from "@angular/cdk/drag-drop";
import * as P from "@angular/material/autocomplete";
import * as D from "@angular/material/input";
import * as F from "@angular/material/select";
import * as g from "@angular/material/sidenav";
import * as et from "@angular/router";
import { RouterModule as Gt } from "@angular/router";
import * as it from "@angular/material/divider";
import * as b from "@angular/cdk/scrolling";
var R = ["innerGridItem"], Ot = () => ({ height: "100%" }), h = o => ({ i: o });
function kt(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function Pt(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "div", 2)(1, "p", 4), t.\u0275\u0275text(2), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(3, "div", 5), t.\u0275\u0275template(4, kt, 1, 0, "ng-container", 6), t.\u0275\u0275elementEnd()()), o & 2) {
    let e = a.index, n = t.\u0275\u0275nextContext().index, i = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("fxFlex", i.dashboard[i.itemIndex(n, e)].cols), t.\u0275\u0275advance(2), t.\u0275\u0275textInterpolate3("row: ", n, " | column: ", e, " | size: ", i.dashboard[i.itemIndex(n, e)].cols), t.\u0275\u0275advance(), t.\u0275\u0275property("ngStyle", i.gridItemInnerStyles(n, e)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", i.innerGridItemTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(7, h, i.itemIndex(n, e)));
} }
function Dt(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "div", 2)(1, "div", 3), t.\u0275\u0275template(2, Pt, 5, 9, "div", 1), t.\u0275\u0275elementEnd()()), o & 2) {
    let e = a.index, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("fxFlex", n.rowFlex(e)), t.\u0275\u0275advance(), t.\u0275\u0275property("fxLayout", n.rowDirection(e))("ngStyle", t.\u0275\u0275pureFunction0(4, Ot)), t.\u0275\u0275advance(), t.\u0275\u0275property("for", n.totalColumns(e));
} }
var j = ["gridItemActions"], z = ["extraActions"], nt = ["mainControls"], ot = ["itemHeader"];
function Ft(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function Rt(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function At(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function $t(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "gridster-item", 9)(1, "div", 10)(2, "div", 11, 1), t.\u0275\u0275template(4, Rt, 1, 0, "ng-container", 12), t.\u0275\u0275elementStart(5, "button", 13), t.\u0275\u0275listener("mousedown", function () { let i = t.\u0275\u0275restoreView(e).index, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.removeItem(i)); })("touchstart", function () { let i = t.\u0275\u0275restoreView(e).index, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.removeItem(i)); }), t.\u0275\u0275text(6, "Delete"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(7, "div", 14), t.\u0275\u0275template(8, At, 1, 0, "ng-container", 12), t.\u0275\u0275elementEnd()()();
} if (o & 2) {
    let e = a.$implicit, n = a.index, i = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("item", e), t.\u0275\u0275advance(2), t.\u0275\u0275property("hidden", !i.displayItemHeader), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", i.gridItemActionsTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(6, h, n)), t.\u0275\u0275advance(4), t.\u0275\u0275property("ngTemplateOutlet", i.innerGridItemTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(8, h, n));
} }
var K = () => ({ i: 0 });
function Nt(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function Qt(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function Ht(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function jt(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function zt(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function qt(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function Bt(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "as-split-area", 16)(1, "div", 17)(2, "div", 18, 2), t.\u0275\u0275template(4, zt, 1, 0, "ng-container", 19), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(5, "div", 20), t.\u0275\u0275template(6, qt, 1, 0, "ng-container", 19), t.\u0275\u0275elementEnd()()()), o & 2) {
    let e = a.index, n = t.\u0275\u0275nextContext().index, i = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("size", i.itemSize(n, e)), t.\u0275\u0275advance(2), t.\u0275\u0275property("hidden", !i.displayItemHeader), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", i.gridItemActionsTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(6, h, i.itemIndex(n, e))), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", i.innerGridItemTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(8, h, i.itemIndex(n, e)));
} }
function Ut(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "button", 10)(3, "mat-icon"), t.\u0275\u0275text(4, "menu"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(5, "mat-menu", null, 1)(7, "button", 11), t.\u0275\u0275listener("mousedown", function () { let i = t.\u0275\u0275restoreView(e).index, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.addColumn(i)); }), t.\u0275\u0275text(8, "Add Column"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(9, "button", 11), t.\u0275\u0275listener("mousedown", function () { let i = t.\u0275\u0275restoreView(e).index, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.layoutSettings("row", i)); }), t.\u0275\u0275text(10, "Layout Settings"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(11, "button", 12), t.\u0275\u0275listener("mousedown", function () { let i = t.\u0275\u0275restoreView(e).index, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.removeRow(i)); }), t.\u0275\u0275text(12, "Delete"), t.\u0275\u0275elementEnd()()(), t.\u0275\u0275elementStart(13, "div", 13)(14, "as-split", 14), t.\u0275\u0275listener("dragEnd", function (i) { let r = t.\u0275\u0275restoreView(e).index, l = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(l.dragEnd(r, i)); }), t.\u0275\u0275template(15, Bt, 7, 10, "as-split-area", 15), t.\u0275\u0275elementEnd()()();
} if (o & 2) {
    let e = a.index, n = t.\u0275\u0275reference(6), i = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(2), t.\u0275\u0275property("matMenuTriggerFor", n), t.\u0275\u0275advance(13), t.\u0275\u0275property("for", i.totalColumns(e));
} }
var Wt = ["*"], Jt = o => [o, "manage"];
function Kt(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 6), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.login()); }), t.\u0275\u0275text(1, "login"), t.\u0275\u0275elementEnd();
} }
function Xt(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "div", 7)(1, "a", 8), t.\u0275\u0275text(2), t.\u0275\u0275elementEnd()()), o & 2) {
    let e = a.$implicit;
    t.\u0275\u0275advance(), t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction1(2, Jt, e.path)), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.path);
} }
var q = (o, a) => ({ i: o, j: a });
function Yt(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 16), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.submit()); }), t.\u0275\u0275text(2, "Save"), t.\u0275\u0275elementEnd()();
} }
function Zt(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onPropertiesClick()); }), t.\u0275\u0275text(2, "Properties"), t.\u0275\u0275elementEnd()();
} }
function te(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onDeleteClick()); }), t.\u0275\u0275text(2, "Delete"), t.\u0275\u0275elementEnd()();
} }
function ee(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onRulesClick()); }), t.\u0275\u0275text(2, "Rules"), t.\u0275\u0275elementEnd()();
} }
function ie(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onPersistenceClick()); }), t.\u0275\u0275text(2, "Persistence"), t.\u0275\u0275elementEnd()();
} }
function ne(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onInteractionsClick()); }), t.\u0275\u0275text(2, "Interactions"), t.\u0275\u0275elementEnd()();
} }
function oe(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 19), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.applyStyle(0)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.applyStyle(0)); }), t.\u0275\u0275text(2, "Apply Style"), t.\u0275\u0275elementEnd()();
} }
function re(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 19), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.removeStyle(0)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.removeStyle(0)); }), t.\u0275\u0275text(2, "Remove Style"), t.\u0275\u0275elementEnd()();
} }
function ae(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 36), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e), t.\u0275\u0275nextContext(2); let i = t.\u0275\u0275reference(2); return t.\u0275\u0275resetView(i.toggle()); }), t.\u0275\u0275elementStart(1, "mat-icon"), t.\u0275\u0275text(2, "menu"), t.\u0275\u0275elementEnd()();
} }
function le(o, a) { o & 1 && (t.\u0275\u0275elementStart(0, "mat-icon"), t.\u0275\u0275text(1, "arrow_drop_down"), t.\u0275\u0275elementEnd()); }
function se(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "button", 37), t.\u0275\u0275template(1, le, 2, 0, "mat-icon", 9), t.\u0275\u0275elementEnd()), o & 2) {
    let e = t.\u0275\u0275nextContext(2), n = t.\u0275\u0275reference(29);
    t.\u0275\u0275property("matMenuTriggerFor", n), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested);
} }
function de(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function ue(o, a) { if (o & 1 && (t.\u0275\u0275elementContainerStart(0), t.\u0275\u0275template(1, de, 1, 0, "ng-container", 24), t.\u0275\u0275elementContainerEnd()), o & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e.contextsMenuTpl);
} }
function me(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "div", 38), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), o & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.editor.panelStyleTitle(0));
} }
function pe(o, a) { o & 1 && t.\u0275\u0275element(0, "span", 39); }
function ce(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function _e(o, a) { o & 1 && (t.\u0275\u0275elementStart(0, "div", 40), t.\u0275\u0275text(1, "Quell"), t.\u0275\u0275elementEnd()); }
function ge(o, a) { if (o & 1 && (t.\u0275\u0275template(0, ae, 3, 0, "button", 20)(1, se, 2, 2, "button", 21), t.\u0275\u0275elementStart(2, "div"), t.\u0275\u0275template(3, ue, 2, 1, "ng-container", 9), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(4, me, 2, 1, "div", 22)(5, pe, 1, 0, "span", 23)(6, ce, 1, 0, "ng-container", 24), t.\u0275\u0275elementStart(7, "div", 25)(8, "mat-form-field")(9, "mat-select", 26)(10, "mat-option", 27), t.\u0275\u0275text(11, "page"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(12, "mat-option", 28), t.\u0275\u0275text(13, "form"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(14, "mat-option", 29), t.\u0275\u0275text(15, "json"), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275elementStart(16, "div", 30)(17, "mat-form-field")(18, "mat-select", 31)(19, "mat-option", 32), t.\u0275\u0275text(20, "grid"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(21, "mat-option", 33), t.\u0275\u0275text(22, "gridless"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(23, "mat-option", 34), t.\u0275\u0275text(24, "split"), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275template(25, _e, 2, 0, "div", 35)), o & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngIf", !e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngIf", e.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.editor.hasPanelStyle(0) && e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e.extraActionsAreaTmpl), t.\u0275\u0275advance(19), t.\u0275\u0275property("ngIf", !e.nested);
} }
function fe(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "div", 38), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), o & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.editor.panelStyleTitle(0));
} }
function ye(o, a) { if (o & 1 && t.\u0275\u0275template(0, fe, 2, 1, "div", 22), o & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngIf", e.editor.hasPanelStyle(0) && !e.nested);
} }
function Ce(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function he(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "div", 43), t.\u0275\u0275template(1, Ce, 1, 0, "ng-container", 44), t.\u0275\u0275elementEnd()), o & 2) {
    let e = a.index, n = t.\u0275\u0275nextContext().i, i = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", i.editablePaneTpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction2(2, q, n, e));
} }
function xe(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "ngx-dropzone", 41), t.\u0275\u0275listener("change", function (i) { let r = t.\u0275\u0275restoreView(e).i, l = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(l.editor.onFileChange(i, r)); })("cdkDropListDropped", function (i) { t.\u0275\u0275restoreView(e); let r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.onDrop(i)); }), t.\u0275\u0275elementStart(1, "div", null, 5), t.\u0275\u0275template(3, he, 2, 5, "div", 42), t.\u0275\u0275elementEnd()();
} if (o & 2) {
    let e = a.i, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("cdkDropListData", e)("multiple", !0)("disableClick", !0), t.\u0275\u0275advance(3), t.\u0275\u0275property("ngForOf", n.editor.panelPanes(e).controls);
} }
function we(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 45), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.submit()); }), t.\u0275\u0275text(1, "Save"), t.\u0275\u0275elementEnd();
} }
function be(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onPropertiesClick()); }), t.\u0275\u0275text(1, "Properties"), t.\u0275\u0275elementEnd();
} }
function ve(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onDeleteClick()); }), t.\u0275\u0275text(1, "Delete"), t.\u0275\u0275elementEnd();
} }
function Se(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onRulesClick()); }), t.\u0275\u0275text(1, "Rules"), t.\u0275\u0275elementEnd();
} }
function Te(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onPersistenceClick()); }), t.\u0275\u0275text(1, "Persistence"), t.\u0275\u0275elementEnd();
} }
function Ee(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onInteractionsClick()); }), t.\u0275\u0275text(1, "Interactions"), t.\u0275\u0275elementEnd();
} }
function Le(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 19), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.applyStyle(0)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.applyStyle(0)); }), t.\u0275\u0275text(1, "Apply Style"), t.\u0275\u0275elementEnd();
} }
function Ve(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 19), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.removeStyle(0)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.removeStyle(0)); }), t.\u0275\u0275text(1, "Remove Style"), t.\u0275\u0275elementEnd();
} }
function Ie(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function Me(o, a) { if (o & 1 && t.\u0275\u0275template(0, Ie, 1, 0, "ng-container", 2), o & 2) {
    let e = a.i, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngTemplateOutlet", n.renderPanelTpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(2, h, e));
} }
function Ge(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 18), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.submit()); }), t.\u0275\u0275text(2, "Save"), t.\u0275\u0275elementEnd()();
} }
function Oe(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 18), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onRulesClick()); }), t.\u0275\u0275text(2, "Rules"), t.\u0275\u0275elementEnd()();
} }
function ke(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 12), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onPersistenceClick()); }), t.\u0275\u0275text(2, "Persistence"), t.\u0275\u0275elementEnd()();
} }
function Pe(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 12), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onInteractionsClick()); }), t.\u0275\u0275text(2, "Interactions"), t.\u0275\u0275elementEnd()();
} }
function De(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 18), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onDeleteClick()); }), t.\u0275\u0275text(2, "Delete"), t.\u0275\u0275elementEnd()();
} }
function Fe(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 33), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e), t.\u0275\u0275nextContext(2); let i = t.\u0275\u0275reference(2); return t.\u0275\u0275resetView(i.toggle()); }), t.\u0275\u0275elementStart(1, "mat-icon"), t.\u0275\u0275text(2, "menu"), t.\u0275\u0275elementEnd()();
} }
function Re(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "button", 34)(1, "mat-icon"), t.\u0275\u0275text(2, "menu"), t.\u0275\u0275elementEnd()()), o & 2) {
    t.\u0275\u0275nextContext(2);
    let e = t.\u0275\u0275reference(30);
    t.\u0275\u0275property("matMenuTriggerFor", e);
} }
function Ae(o, a) { o & 1 && t.\u0275\u0275element(0, "span", 35); }
function $e(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function Ne(o, a) { if (o & 1 && (t.\u0275\u0275elementContainerStart(0), t.\u0275\u0275template(1, $e, 1, 0, "ng-container", 31), t.\u0275\u0275elementContainerEnd()), o & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e.contextsMenuTpl);
} }
function Qe(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function He(o, a) { o & 1 && (t.\u0275\u0275elementStart(0, "div", 36), t.\u0275\u0275text(1, "Quell"), t.\u0275\u0275elementEnd()); }
function je(o, a) { if (o & 1 && (t.\u0275\u0275template(0, Fe, 3, 0, "button", 19)(1, Re, 3, 1, "button", 20)(2, Ae, 1, 0, "span", 21), t.\u0275\u0275elementStart(3, "div"), t.\u0275\u0275template(4, Ne, 2, 1, "ng-container", 11), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(5, "div", 22)(6, "mat-form-field")(7, "mat-select", 23)(8, "mat-option", 24), t.\u0275\u0275text(9, "page"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(10, "mat-option", 25), t.\u0275\u0275text(11, "form"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(12, "mat-option", 26), t.\u0275\u0275text(13, "json"), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275elementStart(14, "div", 27)(15, "mat-form-field")(16, "mat-select", 28)(17, "mat-option", 29), t.\u0275\u0275text(18, "gridless"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(19, "mat-option", 30), t.\u0275\u0275text(20, "split"), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275template(21, Qe, 1, 0, "ng-container", 31)(22, He, 2, 0, "div", 32)), o & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngIf", !e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngIf", e.savable), t.\u0275\u0275advance(17), t.\u0275\u0275property("ngTemplateOutlet", e.extraActionsAreaTmpl), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", !e.nested);
} }
function ze(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 42), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.applyStyle(i)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.applyStyle(i)); }), t.\u0275\u0275text(1, "Apply Style"), t.\u0275\u0275elementEnd();
} }
function qe(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 42), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.removeStyle(i)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.removeStyle(i)); }), t.\u0275\u0275text(1, "Remove Style"), t.\u0275\u0275elementEnd();
} }
function Be(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "div", 43), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), o & 2) {
    let e = t.\u0275\u0275nextContext().i, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(n.editor.panelStyleTitle(e));
} }
function Ue(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 37)(1, "mat-icon"), t.\u0275\u0275text(2, "arrow_drop_down"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(3, "mat-menu", null, 6)(5, "button", 12), t.\u0275\u0275listener("mousedown", function () { let i = t.\u0275\u0275restoreView(e).i; t.\u0275\u0275nextContext(); let r = t.\u0275\u0275reference(22); return t.\u0275\u0275resetView(r.layoutSettings("column", i)); }), t.\u0275\u0275text(6, "Layout Settings"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(7, "button", 38), t.\u0275\u0275listener("mousedown", function () { let i = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.addContent(i)); })("touchstart", function () { let i = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.addContent(i)); }), t.\u0275\u0275text(8, "Add Content"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(9, "button", 38), t.\u0275\u0275listener("mousedown", function () { let i = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.editPanelProps(i)); })("touchstart", function () { let i = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.editPanelProps(i)); }), t.\u0275\u0275text(10, "Props"), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(11, ze, 2, 0, "button", 39)(12, qe, 2, 0, "button", 39), t.\u0275\u0275elementStart(13, "button", 40), t.\u0275\u0275listener("mousedown", function () { let i = t.\u0275\u0275restoreView(e).i; t.\u0275\u0275nextContext(); let r = t.\u0275\u0275reference(22); return t.\u0275\u0275resetView(r.removeColumn2(i)); })("touchstart", function () { let i = t.\u0275\u0275restoreView(e).i; t.\u0275\u0275nextContext(); let r = t.\u0275\u0275reference(22); return t.\u0275\u0275resetView(r.removeColumn2(i)); }), t.\u0275\u0275text(14, "Delete"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275template(15, Be, 2, 1, "div", 41);
} if (o & 2) {
    let e = a.i, n = t.\u0275\u0275reference(4), i = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("matMenuTriggerFor", n), t.\u0275\u0275advance(11), t.\u0275\u0275property("ngIf", !i.editor.hasPanelStyle(e)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.editor.hasPanelStyle(e)), t.\u0275\u0275advance(3), t.\u0275\u0275property("ngIf", i.editor.hasPanelStyle(e));
} }
function We(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function Je(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "div", 46), t.\u0275\u0275template(1, We, 1, 0, "ng-container", 47), t.\u0275\u0275elementEnd()), o & 2) {
    let e = a.index, n = t.\u0275\u0275nextContext().i, i = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", i.editablePaneTpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction2(2, q, n, e));
} }
function Ke(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "ngx-dropzone", 44), t.\u0275\u0275listener("change", function (i) { let r = t.\u0275\u0275restoreView(e).i, l = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(l.editor.onFileChange(i, r)); })("cdkDropListDropped", function (i) { t.\u0275\u0275restoreView(e); let r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.onDrop(i)); }), t.\u0275\u0275elementStart(1, "div", null, 7), t.\u0275\u0275template(3, Je, 2, 5, "div", 45), t.\u0275\u0275elementEnd()();
} if (o & 2) {
    let e = a.i, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("cdkDropListData", e)("multiple", !0)("disableClick", !0), t.\u0275\u0275advance(3), t.\u0275\u0275property("ngForOf", n.editor.panelPanes(e).controls);
} }
function Xe(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 48), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.submit()); }), t.\u0275\u0275text(1, "Save"), t.\u0275\u0275elementEnd();
} }
function Ye(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onRulesClick()); }), t.\u0275\u0275text(1, "Rules"), t.\u0275\u0275elementEnd();
} }
function Ze(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 12), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onPersistenceClick()); }), t.\u0275\u0275text(1, "Persistence"), t.\u0275\u0275elementEnd();
} }
function ti(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 12), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onInteractionsClick()); }), t.\u0275\u0275text(1, "Interactions"), t.\u0275\u0275elementEnd();
} }
function ei(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.editor.onDeleteClick()); }), t.\u0275\u0275text(1, "Delete"), t.\u0275\u0275elementEnd();
} }
function ii(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function ni(o, a) { if (o & 1 && t.\u0275\u0275template(0, ii, 1, 0, "ng-container", 2), o & 2) {
    let e = a.i, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngTemplateOutlet", n.renderPanelTpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(2, h, e));
} }
function oi(o, a) { o & 1 && (t.\u0275\u0275elementStart(0, "button", 15), t.\u0275\u0275text(1, "Save"), t.\u0275\u0275elementEnd()); }
function ri(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 16), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(i.editor.onPropertiesClick()); }), t.\u0275\u0275text(1, "Properties"), t.\u0275\u0275elementEnd();
} }
function ai(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function li(o, a) { if (o & 1 && (t.\u0275\u0275elementContainerStart(0), t.\u0275\u0275template(1, ai, 1, 0, "ng-container", 14), t.\u0275\u0275elementContainerEnd()), o & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e.contextsMenuTpl);
} }
function si(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 16), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(i.editor.onRulesClick()); }), t.\u0275\u0275text(1, "Rules"), t.\u0275\u0275elementEnd();
} }
function di(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 16), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(i.editor.onDeleteClick()); }), t.\u0275\u0275text(1, "Delete"), t.\u0275\u0275elementEnd();
} }
function ui(o, a) { o & 1 && (t.\u0275\u0275elementStart(0, "div", 17)(1, "mat-form-field")(2, "mat-select", 18)(3, "mat-option", 19), t.\u0275\u0275text(4, "Page"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(5, "mat-option", 20), t.\u0275\u0275text(6, "Form"), t.\u0275\u0275elementEnd()()()()); }
function mi(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function pi(o, a) { if (o & 1 && (t.\u0275\u0275template(0, oi, 2, 0, "button", 5)(1, ri, 2, 0, "button", 6)(2, li, 2, 1, "ng-container", 7)(3, si, 2, 0, "button", 6)(4, di, 2, 0, "button", 6), t.\u0275\u0275elementStart(5, "div", 8)(6, "mat-form-field")(7, "mat-select", 9)(8, "mat-option", 10), t.\u0275\u0275text(9, "Grid"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(10, "mat-option", 11), t.\u0275\u0275text(11, "Gridless"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(12, "mat-option", 12), t.\u0275\u0275text(13, "Split"), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275template(14, ui, 7, 0, "div", 13)(15, mi, 1, 0, "ng-container", 14)), o & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngIf", e.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested), t.\u0275\u0275advance(10), t.\u0275\u0275property("ngIf", !e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e.extraActionsAreaTmpl);
} }
function ci(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 21), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.applyStyle(i)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.applyStyle(i)); }), t.\u0275\u0275text(1, "Apply Style"), t.\u0275\u0275elementEnd();
} }
function _i(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "span"), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), o & 2) {
    let e = t.\u0275\u0275nextContext().i, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1("Style: ", n.editor.panelStyleTitle(e));
} }
function gi(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 21), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.removeStyle(i)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.removeStyle(i)); }), t.\u0275\u0275text(1, "Remove Style"), t.\u0275\u0275elementEnd();
} }
function fi(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 21), t.\u0275\u0275listener("mousedown", function () { let i = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.addContent(i)); })("touchstart", function () { let i = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.addContent(i)); }), t.\u0275\u0275text(1, "Add Content"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(2, "button", 21), t.\u0275\u0275listener("mousedown", function () { let i = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.editPanelProps(i)); })("touchstart", function () { let i = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.editPanelProps(i)); }), t.\u0275\u0275text(3, "Props"), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(4, ci, 2, 0, "button", 22)(5, _i, 2, 1, "span", 7)(6, gi, 2, 0, "button", 22);
} if (o & 2) {
    let e = a.i, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(4), t.\u0275\u0275property("ngIf", !n.editor.hasPanelStyle(e)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.editor.hasPanelStyle(e)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.editor.hasPanelStyle(e));
} }
function yi(o, a) { o & 1 && t.\u0275\u0275elementContainer(0); }
function Ci(o, a) { if (o & 1 && (t.\u0275\u0275elementStart(0, "div", 25), t.\u0275\u0275template(1, yi, 1, 0, "ng-container", 26), t.\u0275\u0275elementEnd()), o & 2) {
    let e = a.index, n = t.\u0275\u0275nextContext().i, i = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", i.editablePaneTpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction2(2, q, n, e));
} }
function hi(o, a) { if (o & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "ngx-dropzone", 23), t.\u0275\u0275listener("change", function (i) { let r = t.\u0275\u0275restoreView(e).i, l = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(l.editor.onFileChange(i, r)); })("cdkDropListDropped", function (i) { t.\u0275\u0275restoreView(e); let r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.onDrop(i)); }), t.\u0275\u0275elementStart(1, "div", null, 3), t.\u0275\u0275template(3, Ci, 2, 5, "div", 24), t.\u0275\u0275elementEnd()();
} if (o & 2) {
    let e = a.i, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("cdkDropListData", e)("multiple", !0)("disableClick", !0), t.\u0275\u0275advance(3), t.\u0275\u0275property("ngForOf", n.editor.panelPanes(e).controls);
} }
var xi = (() => { class o {
    get totalRows() { return this.dashboard.length == 0 ? 0 : this.dashboard.reduce((e, n) => n.y > e ? n.y : e, 0) + 1; }
    get direction() { let e = this.attributeMatcher.getComputedValue("direction", this.layoutSetting ? this.layoutSetting.settings : []); return e && (e.trim() === "column" || e.trim() === "row") ? e : "column"; }
    constructor(e) { this.attributeMatcher = e, this.dashboard = [], this.layoutSetting = new c, this.rowSettings = [], this.columnSettings = []; }
    ngOnInit() { console.log(this.dashboard); }
    itemIndex(e, n) { return this.dashboard.findIndex(i => i.y === e && i.x === n); }
    totalColumns(e) { return this.dashboard.reduce((n, i) => i.y === e ? n + 1 : n, 0); }
    rowDirection(e) { let n = this.attributeMatcher.getComputedValue("direction", this.rowSettings && this.rowSettings[e] ? this.rowSettings[e].settings : []); return n && (n.trim() === "column" || n.trim() === "row") ? n : "row"; }
    rowFlex(e) { return ["flexGrow", "flexShrink", "flexBasis"].map(l => this.attributeMatcher.getComputedValue(l, this.rowSettings && this.rowSettings[e] ? this.rowSettings[e].settings : [])).map(l => l != null && l !== "" && l.trim() !== "" ? `${l.trim()}` : "").join(" "); }
    gridItemInnerStyles(e, n) { let i = this.itemIndex(e, n), r = this.columnSettings && this.columnSettings[i] ? this.columnSettings[i].settings : []; return { height: this.calculateHeight(this.attributeMatcher.getComputedValue("height", r)) }; }
    calculateHeight(e) { return e != null ? e.trim() : "auto"; }
    static { this.\u0275fac = function (n) { return new (n || o)(t.\u0275\u0275directiveInject(x.AttributeMatcherService)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-flex-layout"]], contentQueries: function (n, i, r) { if (n & 1 && t.\u0275\u0275contentQuery(r, R, 5), n & 2) {
            let l;
            t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (i.innerGridItemTmpl = l.first);
        } }, inputs: { dashboard: "dashboard", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings" }, standalone: !1, decls: 2, vars: 2, consts: [["fxFill", "", 3, "fxLayout"], [3, "fxFlex", 4, "for"], [3, "fxFlex"], [3, "fxLayout", "ngStyle"], ["hidden", ""], [1, "grid-item-inner", 3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (n, i) { n & 1 && (t.\u0275\u0275elementStart(0, "div", 0), t.\u0275\u0275template(1, Dt, 3, 5, "div", 1), t.\u0275\u0275elementEnd()), n & 2 && (t.\u0275\u0275property("fxLayout", i.direction), t.\u0275\u0275advance(), t.\u0275\u0275property("for", i.totalRows)); }, dependencies: [u.NgTemplateOutlet, u.NgStyle, v, T, S, U, E.ForDirective], encapsulation: 2 }); }
} return o; })(), X = (() => { class o {
    get grid() { return this.dashboard; }
    get cumulativeHeight() { let e = []; return this.heightsMatrix.forEach(n => { e.push(this.itemHeights.reduce((i, r) => r > i ? r : i)); }), e.reduce((n, i) => n + i); }
    get heightsMatrix() { return this.dashboard.reduce((e, n, i) => (e[n.y] = e[n.y] !== void 0 ? [...e[n.y], this.itemHeights[i]] : [this.itemHeights[i]], e), []); }
    constructor() { this.itemAdded = new y, this.itemRemoved = new y, this.dashboard = [], this.displayMainControls = !0, this.displayItemHeader = !0, this.itemHeights = [], this.rows = 0; }
    ngOnInit() { }
    removeItem(e) { this.dashboard.splice(e, 1), this.itemHeights.splice(e, 1), this.itemRemoved.emit(e); }
    addColumn() { console.log("add column grid"), this.dashboard.push({ cols: 1, rows: 1, y: 0, x: this.dashboard.length }), this.itemAdded.emit(); }
    addRow() { this.dashboard.push({ cols: 1, rows: 1, y: this.rows++, x: 0 }), this.itemAdded.emit(); }
    setItemContentHeight(e, n) { this.itemHeights[e] = n + (this.displayItemHeader ? this.itemHeaderHeight(e) : 0), this.refreshGridHeight(); }
    refreshGridHeight() { this.gridHeight = this.cumulativeHeight + this.gridster.rows * 16; }
    itemHeaderHeight(e) { return this.itemHeaders.find((n, i) => i === e).nativeElement.offsetHeight; }
    static { this.\u0275fac = function (n) { return new (n || o); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-grid-layout"]], contentQueries: function (n, i, r) { if (n & 1 && (t.\u0275\u0275contentQuery(r, j, 5), t.\u0275\u0275contentQuery(r, R, 5), t.\u0275\u0275contentQuery(r, z, 5)), n & 2) {
            let l;
            t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (i.gridItemActionsTmpl = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (i.innerGridItemTmpl = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (i.extraActionsTmpl = l.first);
        } }, viewQuery: function (n, i) { if (n & 1 && (t.\u0275\u0275viewQuery(yt, 5), t.\u0275\u0275viewQuery(nt, 5), t.\u0275\u0275viewQuery(ot, 5)), n & 2) {
            let r;
            t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (i.gridster = r.first), t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (i.mainControls = r.first), t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (i.itemHeaders = r);
        } }, inputs: { dashboard: "dashboard", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", options: "options" }, outputs: { itemAdded: "itemAdded", itemRemoved: "itemRemoved" }, standalone: !1, decls: 11, vars: 6, consts: [["mainControls", ""], ["itemHeader", ""], [1, "layout-wrapper"], [1, "main-controls", 3, "hidden"], ["type", "button", 3, "mousedown"], [4, "ngTemplateOutlet"], [1, "layout-inner"], [3, "options"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"], ["fxLayout", "column", "fxFill", ""], ["fxFlex", "0 1 auto", 1, "grid-item-header", 3, "hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 1, "delete", 3, "mousedown", "touchstart"], ["fxFlex", "", 1, "grid-item-inner"]], template: function (n, i) { if (n & 1) {
            let r = t.\u0275\u0275getCurrentView();
            t.\u0275\u0275elementStart(0, "div", 2)(1, "div", 3, 0)(3, "button", 4), t.\u0275\u0275listener("mousedown", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.addColumn()); }), t.\u0275\u0275text(4, "Add Column"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(5, "button", 4), t.\u0275\u0275listener("mousedown", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.addRow()); }), t.\u0275\u0275text(6, "Add Row"), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(7, Ft, 1, 0, "ng-container", 5), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(8, "div", 6)(9, "gridster", 7), t.\u0275\u0275template(10, $t, 9, 10, "gridster-item", 8), t.\u0275\u0275elementEnd()()();
        } n & 2 && (t.\u0275\u0275advance(), t.\u0275\u0275property("hidden", !i.displayMainControls), t.\u0275\u0275advance(6), t.\u0275\u0275property("ngTemplateOutlet", i.extraActionsTmpl), t.\u0275\u0275advance(), t.\u0275\u0275styleProp("height", i.gridHeight, "px"), t.\u0275\u0275advance(), t.\u0275\u0275property("options", i.options), t.\u0275\u0275advance(), t.\u0275\u0275property("ngForOf", i.dashboard)); }, dependencies: [u.NgForOf, u.NgTemplateOutlet, v, T, S, O.GridsterComponent, O.GridsterItemComponent], styles: [".layout-wrapper[_ngcontent-%COMP%], .layout-inner[_ngcontent-%COMP%]{height:100%}.grid-item-header[_ngcontent-%COMP%]{background-color:#ccc;padding:.5em}button.delete[_ngcontent-%COMP%]{float:right}.main-controls[_ngcontent-%COMP%]{background-color:#fff;padding:.5em}"] }); }
} return o; })(), rt = (() => { class o {
    constructor() { this.displayMainControls = !0, this.displayItemHeader = !0, this.nested = !1; }
    ngOnInit() { }
    static { this.\u0275fac = function (n) { return new (n || o); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-gridless-layout"]], contentQueries: function (n, i, r) { if (n & 1 && (t.\u0275\u0275contentQuery(r, j, 5), t.\u0275\u0275contentQuery(r, R, 5), t.\u0275\u0275contentQuery(r, z, 5)), n & 2) {
            let l;
            t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (i.gridItemActionsTmpl = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (i.innerGridItemTmpl = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (i.extraActionsTmpl = l.first);
        } }, hostVars: 2, hostBindings: function (n, i) { n & 2 && t.\u0275\u0275classProp("is-nested", i.nested); }, inputs: { displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", nested: "nested" }, standalone: !1, decls: 11, vars: 9, consts: [["mainControls", ""], ["itemHeader", ""], [1, "layout-wrapper"], [1, "main-controls", 3, "hidden"], [4, "ngTemplateOutlet"], [1, "layout-inner"], ["fxLayout", "column", "fxFill", ""], ["fxFlex", "0 1 auto", 1, "grid-item-header", 3, "hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["fxFlex", "", 1, "grid-item-inner"]], template: function (n, i) { n & 1 && (t.\u0275\u0275elementStart(0, "div", 2)(1, "div", 3, 0), t.\u0275\u0275template(3, Nt, 1, 0, "ng-container", 4), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "div", 7, 1), t.\u0275\u0275template(8, Qt, 1, 0, "ng-container", 8), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(9, "div", 9), t.\u0275\u0275template(10, Ht, 1, 0, "ng-container", 8), t.\u0275\u0275elementEnd()()()()), n & 2 && (t.\u0275\u0275advance(), t.\u0275\u0275property("hidden", !i.displayMainControls), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", i.extraActionsTmpl), t.\u0275\u0275advance(3), t.\u0275\u0275property("hidden", !i.displayItemHeader), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", i.gridItemActionsTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction0(7, K)), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", i.innerGridItemTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction0(8, K))); }, dependencies: [u.NgTemplateOutlet, v, T, S], styles: [".layout-wrapper[_ngcontent-%COMP%], .layout-inner[_ngcontent-%COMP%]{height:100%}.is-nested[_nghost-%COMP%]   .layout-wrapper[_ngcontent-%COMP%]{padding:0 .25em;border:1px solid #ccc}.main-controls[_ngcontent-%COMP%]{display:flex;padding:0;align-items:baseline;border-bottom:1px solid #ccc;margin-bottom:.25em}.grid-item-header[_ngcontent-%COMP%]{padding:0;display:flex;align-items:baseline}"] }); }
} return o; })(), wi = (() => { class o {
    get attributes() { return this.layout.settings.has(this.type) ? this.layout.settings.get(this.type) : []; }
    constructor(e) { this.fb = e, this.settingValues = [], this.layoutForm = this.fb.group({ settings: this.fb.control("") }), this.onTouched = () => { }; }
    ngOnInit() { }
    writeValue(e) { e && this.layoutForm.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.layoutForm.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.layoutForm.disable() : this.layoutForm.enable(); }
    validate(e) { return this.layoutForm.valid ? null : { invalidForm: { valid: !1, message: "layout is invalid" } }; }
    static { this.\u0275fac = function (n) { return new (n || o)(t.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["druid-layout-form"]], inputs: { layout: "layout", type: "type", settingValues: "settingValues" }, standalone: !1, features: [t.\u0275\u0275ProvidersFeature([{ provide: ut, useExisting: J(() => o), multi: !0 }, { provide: mt, useExisting: J(() => o), multi: !0 }])], decls: 2, vars: 3, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "attributes", "attributeValues"]], template: function (n, i) { n & 1 && (t.\u0275\u0275elementStart(0, "div", 0), t.\u0275\u0275element(1, "classifieds-ui-attributes-builder", 1), t.\u0275\u0275elementEnd()), n & 2 && (t.\u0275\u0275property("formGroup", i.layoutForm), t.\u0275\u0275advance(), t.\u0275\u0275property("attributes", i.attributes)("attributeValues", i.settingValues)); }, dependencies: [s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, x.AttributesBuilderComponent], encapsulation: 2 }); }
} return o; })(), bi = (() => { class o {
    get attrValues() { return this.dialogForm.get("layout").value === "" ? this.settingValues : this.dialogForm.get("layout").value.settings.map(e => new I(e)); }
    constructor(e, n, i, r) { this.data = e, this.dialogRef = n, this.valueComputerService = i, this.fb = r, this.settingValues = [], this.dialogForm = this.fb.group({ layout: this.fb.control("") }); }
    ngOnInit() { this.layout = this.data.layout, this.type = this.data.type, this.settingValues = this.data.settingValues; }
    submit() { console.log(this.attrValues); let e = this.valueComputerService.compute(this.attrValues); this.dialogRef.close(e); }
    static { this.\u0275fac = function (n) { return new (n || o)(t.\u0275\u0275directiveInject(Lt), t.\u0275\u0275directiveInject(_.MatDialogRef), t.\u0275\u0275directiveInject(x.ValueComputerService), t.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["druid-layout-dialog"]], standalone: !1, decls: 6, vars: 5, consts: [[1, "layout-form", 3, "ngSubmit", "formGroup"], ["formControlName", "layout", 3, "layout", "type", "settingValues"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (n, i) { n & 1 && (t.\u0275\u0275elementStart(0, "form", 0), t.\u0275\u0275listener("ngSubmit", function () { return i.submit(); }), t.\u0275\u0275elementStart(1, "mat-dialog-content"), t.\u0275\u0275element(2, "druid-layout-form", 1), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(3, "mat-dialog-actions")(4, "button", 2), t.\u0275\u0275text(5, "Save"), t.\u0275\u0275elementEnd()()()), n & 2 && (t.\u0275\u0275property("formGroup", i.dialogForm), t.\u0275\u0275advance(2), t.\u0275\u0275property("layout", i.layout)("type", i.type)("settingValues", i.settingValues), t.\u0275\u0275advance(2), t.\u0275\u0275property("disabled", !i.dialogForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, w.MatButton, _.MatDialogClose, _.MatDialogActions, _.MatDialogContent, wi], encapsulation: 2 }); }
} return o; })(), at = (() => { class o extends Vt {
    constructor(e, n) { super(e, n); }
    pluginDef() { return B(new It({ name: "layout" })); }
    static { this.\u0275fac = function (n) { return new (n || o)(t.\u0275\u0275inject(tt.PluginConfigurationManager), t.\u0275\u0275inject(E.ModuleLoaderService)); }; }
    static { this.\u0275prov = t.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" }); }
} return o; })(), vi = (() => { class o {
    get totalRows() { return this.dashboard.length == 0 ? 0 : this.dashboard.reduce((e, n) => n.y > e ? n.y : e, 0) + 1; }
    constructor(e, n, i) { this.el = e, this.dialog = n, this.lpm = i, this.itemAdded = new y, this.itemRemoved = new y, this.dashboard = [], this.displayMainControls = !0, this.displayItemHeader = !0, this.nested = !1, this.layoutSettingChange = new y, this.rowSettingsChange = new y, this.columnSettingsChange = new y, this.rows = 0, this.sizes = []; }
    ngOnInit() { if (this.dashboard.length === 0)
        this.addRow();
    else {
        for (let n = 0; n < this.totalRows; n++) {
            let i = this.totalColumns(n);
            this.sizes.push([]);
            for (let r = 0; r < i; r++) {
                let l = this.itemIndex(n, r);
                this.sizes[n].push(this.dashboard[l].cols);
            }
        }
        if (this.totalRows !== this.rowSettings.length && this.rowSettings.length === 0) {
            let n = [];
            for (let i = 0; i < this.totalRows; i++)
                n.push(new c);
            this.rowSettings = n, this.rowSettingsChange.emit(this.rowSettings);
        }
        let e = 0;
        for (let n = 0; n < this.totalRows; n++)
            e += this.totalColumns(n);
        if (e !== this.columnSettings.length && this.columnSettings.length === 0) {
            let n = [];
            for (let i = 0; i < this.totalRows; i++)
                for (let r = 0; r < this.totalColumns(i); r++)
                    n.push(new c);
            this.columnSettings = n, this.columnSettingsChange.emit(this.columnSettings);
        }
    } }
    removeRow(e) { let n = this.dashboard.reduce((l, d, st) => [...l, ...d.y === e ? [st] : []], []), i = n.length, r = 0; for (let l = 0; l < i; l++)
        this.dashboard.splice(n[l] - r, 1), this.rowSettings.splice(e, 1), r++, this.itemRemoved.emit(n[l]), this.rowSettingsChange.emit(this.rowSettings); i = this.dashboard.length; for (let l = 0; l < i; l++)
        this.dashboard[l].y > e && (this.dashboard[l].y = this.dashboard[l].y - 1); }
    removeColumn(e, n) { let i = this.itemIndex(e, n); this.dashboard.splice(i, 1), this.itemRemoved.emit(i); }
    removeColumn2(e) { this.dashboard.splice(e, 1), this.itemRemoved.emit(e); }
    addRow() { this.sizes.push([]), this.rowSettings = [...this.rowSettings.map(e => new c(e)), new c], this.addColumn(this.totalRows === 0 ? 0 : this.totalRows), this.rowSettingsChange.emit(this.rowSettings); }
    addColumn(e) { let n = this.totalColumns(e), i = n === 0 ? 100 : 100 / (n + 1); this.sizes[e][n] = i, this.dashboard.push({ cols: i, rows: 1, y: e, x: n }), this.itemAdded.emit(), setTimeout(() => this.resetGutter()); }
    dragEnd(e, { sizes: n }) { let i = this.dashboard.length, r = 0; this.sizes[e] = [...n]; let l = this.dashboard.map(d => V({}, d)); for (let d = 0; d < i; d++)
        this.dashboard[d].y === e && (l[d].cols = n[r], r += 1); this.dashboard = l; }
    itemIndex(e, n) { return this.dashboard.findIndex(i => i.y === e && i.x === n); }
    itemSize(e, n) { return this.dashboard[this.itemIndex(e, n)].cols; }
    totalColumns(e) { return this.dashboard.reduce((n, i) => i.y === e ? n + 1 : n, 0); }
    resetGutter() { this.el.nativeElement.querySelectorAll(".as-split-gutter").forEach(e => { e.style.height = "auto"; }); }
    settingValues(e, n) { switch (e) {
        case "column": return this.columnSettings[n].settings;
        case "row": return this.rowSettings[n].settings;
        case "global": return this.layoutSetting.settings;
        default: return [];
    } }
    layoutSettings(e, n) { this.lpm.getPlugin("split").pipe(Tt(i => this.dialog.open(bi, { data: { layout: i, type: e, settingValues: this.settingValues(e, n) } }).afterClosed()), Et(i => !!i)).subscribe(i => { switch (e) {
        case "column":
            this.columnSettings = this.columnSettings.map((r, l) => l === n ? new c({ settings: i.map(d => new I(d)) }) : new c(r)), console.log(this.columnSettings), this.columnSettingsChange.emit(this.columnSettings);
            break;
        case "row":
            this.rowSettings = this.rowSettings.map((r, l) => l === n ? new c({ settings: i.map(d => new I(d)) }) : new c(r)), console.log(this.rowSettings), this.rowSettingsChange.emit(this.rowSettings);
            break;
        case "global":
            this.layoutSetting = new c({ settings: i.map(r => new I(r)) }), this.layoutSettingChange.emit(this.layoutSetting);
            break;
        default:
    } }); }
    static { this.\u0275fac = function (n) { return new (n || o)(t.\u0275\u0275directiveInject(t.ElementRef), t.\u0275\u0275directiveInject(_.MatDialog), t.\u0275\u0275directiveInject(at)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-split-layout"]], contentQueries: function (n, i, r) { if (n & 1 && (t.\u0275\u0275contentQuery(r, j, 5), t.\u0275\u0275contentQuery(r, R, 5), t.\u0275\u0275contentQuery(r, z, 5)), n & 2) {
            let l;
            t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (i.gridItemActionsTmpl = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (i.innerGridItemTmpl = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (i.extraActionsTmpl = l.first);
        } }, viewQuery: function (n, i) { if (n & 1 && (t.\u0275\u0275viewQuery(nt, 5), t.\u0275\u0275viewQuery(ot, 5), t.\u0275\u0275viewQuery(_t, 5)), n & 2) {
            let r;
            t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (i.mainControls = r.first), t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (i.itemHeaders = r), t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (i.splitAreas = r);
        } }, hostVars: 2, hostBindings: function (n, i) { n & 2 && t.\u0275\u0275classProp("is-nested", i.nested); }, inputs: { dashboard: "dashboard", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", nested: "nested", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings" }, outputs: { itemAdded: "itemAdded", itemRemoved: "itemRemoved", layoutSettingChange: "layoutSettingChange", rowSettingsChange: "rowSettingsChange", columnSettingsChange: "columnSettingsChange" }, standalone: !1, decls: 6, vars: 3, consts: [["mainControls", ""], ["rowActions", "matMenu"], ["itemHeader", ""], [1, "layout-wrapper"], [1, "main-controls", 3, "hidden"], [4, "ngTemplateOutlet"], [1, "layout-inner"], ["class", "rows-wrapper", 4, "for"], [1, "rows-wrapper"], [1, "row-controls"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor"], ["type", "button", "mat-menu-item", "", 3, "mousedown"], ["type", "button", "mat-menu-item", "", 1, "remove-row", 3, "mousedown"], [1, "rows-inner"], ["unit", "percent", "direction", "horizontal", 3, "dragEnd"], [3, "size", 4, "for"], [3, "size"], ["fxLayout", "column", "fxFill", ""], [1, "grid-item-header", 3, "hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["fxFlex", "", 1, "grid-item-inner"]], template: function (n, i) { n & 1 && (t.\u0275\u0275elementStart(0, "div", 3)(1, "div", 4, 0), t.\u0275\u0275template(3, jt, 1, 0, "ng-container", 5), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(4, "div", 6), t.\u0275\u0275template(5, Ut, 16, 2, "div", 7), t.\u0275\u0275elementEnd()()), n & 2 && (t.\u0275\u0275advance(), t.\u0275\u0275property("hidden", !i.displayMainControls), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", i.extraActionsTmpl), t.\u0275\u0275advance(2), t.\u0275\u0275property("for", i.totalRows)); }, dependencies: [u.NgTemplateOutlet, w.MatButton, L.MatIcon, m.MatMenu, m.MatMenuItem, m.MatMenuTrigger, v, T, S, G.SplitComponent, G.SplitAreaDirective, E.ForDirective], styles: [".layout-wrapper[_ngcontent-%COMP%], .layout-inner[_ngcontent-%COMP%]{height:100%}.grid-item-header[_ngcontent-%COMP%]{padding:0;display:flex;align-items:baseline}button.delete[_ngcontent-%COMP%]{float:right}.main-controls[_ngcontent-%COMP%]{display:flex;padding:0;align-items:baseline}.rows-inner[_ngcontent-%COMP%]{height:auto;background-color:#fff}.row-controls[_ngcontent-%COMP%]{background-color:gray;padding:0}.remove-row[_ngcontent-%COMP%]{float:right}.is-nested[_nghost-%COMP%]   .layout-wrapper[_ngcontent-%COMP%]{padding:0 .25em;border:1px solid #ccc}.mat-mdc-menu-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0;color:#fff}.mat-mdc-menu-trigger[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{transform:rotate(-90deg)}"] }); }
} return o; })(), M = class extends Mt {
    constructor(a) { if (super(a), this.settings = new Map, a.settings) {
        let e = [];
        this.renderer = a.renderer, this.editor = a.editor, a.settings.forEach((n, i) => { e.push([i, n.map(r => new f(r))]); }), this.settings = new Map(e);
    } }
}, lt = (() => { class o {
    constructor(e, n, i, r) { this.siteName = e, this.authFacade = n, this.controlContainer = i, this.close = new y, this.panelPageListItemsService = r.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { this.panelPageListItems$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`), this.isAuthenticated$ = this.authFacade.getUser$.pipe($(e => !!e)); }
    login() { this.authFacade.login(); }
    static { this.\u0275fac = function (n) { return new (n || o)(t.\u0275\u0275directiveInject(Y), t.\u0275\u0275directiveInject(Q.AuthFacade), t.\u0275\u0275directiveInject(s.ControlContainer), t.\u0275\u0275directiveInject(H.EntityServices)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["druid-layout-sidenav"]], outputs: { close: "close" }, standalone: !1, ngContentSelectors: Wt, decls: 12, vars: 6, consts: [[1, "close-wrapper"], [3, "click"], ["type", "button", "class", "login", "mat-button", "", 3, "click", 4, "ngIf"], [1, "viewport-container"], ["appendOnly", "", "itemSize", "48", 1, "viewport"], ["class", "pp-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["type", "button", "mat-button", "", 1, "login", 3, "click"], [1, "pp-item"], [3, "routerLink"]], template: function (n, i) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275elementStart(0, "div", 0)(1, "mat-icon", 1), t.\u0275\u0275listener("click", function () { return i.close.emit(); }), t.\u0275\u0275text(2, "close"), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(3, Kt, 2, 0, "button", 2), t.\u0275\u0275pipe(4, "async"), t.\u0275\u0275elementEnd(), t.\u0275\u0275element(5, "mat-divider"), t.\u0275\u0275projection(6), t.\u0275\u0275element(7, "mat-divider"), t.\u0275\u0275elementStart(8, "div", 3)(9, "cdk-virtual-scroll-viewport", 4), t.\u0275\u0275template(10, Xt, 3, 4, "div", 5), t.\u0275\u0275pipe(11, "async"), t.\u0275\u0275elementEnd()()), n & 2 && (t.\u0275\u0275advance(3), t.\u0275\u0275property("ngIf", !t.\u0275\u0275pipeBind1(4, 2, i.isAuthenticated$)), t.\u0275\u0275advance(7), t.\u0275\u0275property("cdkVirtualForOf", t.\u0275\u0275pipeBind1(11, 4, i.panelPageListItems$))); }, dependencies: [u.NgIf, et.RouterLink, w.MatButton, it.MatDivider, L.MatIcon, b.CdkFixedSizeVirtualScroll, b.CdkVirtualForOf, b.CdkVirtualScrollViewport, u.AsyncPipe], styles: ["[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}.close-wrapper[_ngcontent-%COMP%]{padding:16px 16px 0;position:relative}.login[_ngcontent-%COMP%]{position:absolute;top:7px;right:5px}.pp-item[_ngcontent-%COMP%]{line-height:48px}.viewport[_ngcontent-%COMP%]{height:100%;width:300px}.viewport-container[_ngcontent-%COMP%]{flex:1;padding:0 0 0 16px;box-sizing:border-box}"] }); }
} return o; })(), Si = (() => { class o extends N {
    constructor(e, n, i, r) { super(i), this.siteName = e, this.authFacade = n, this.controlContainer = i, this.panelPageListItemsService = r.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { this.panelPageListItems$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`), this.isAuthenticated$ = this.authFacade.getUser$.pipe($(e => !!e)); }
    login() { this.authFacade.login(); }
    static { this.\u0275fac = function (n) { return new (n || o)(t.\u0275\u0275directiveInject(Y), t.\u0275\u0275directiveInject(Q.AuthFacade), t.\u0275\u0275directiveInject(s.ControlContainer), t.\u0275\u0275directiveInject(H.EntityServices)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-gridless-layout-editor"]], standalone: !1, features: [t.\u0275\u0275InheritDefinitionFeature], decls: 42, vars: 19, consts: [["drawer", ""], ["extraActions", ""], ["gridItemActions", ""], ["innerGridItem", ""], ["topActions", "matMenu"], ["panes", ""], ["autosize", "", 3, "hasBackdrop"], ["fixedInViewport", "", "mode", "over"], [3, "close"], [4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "mousedown", "touchstart"], ["cdkDropListGroup", "", 3, "formGroup", "nested"], ["mat-menu-item", "", "type", "submit", 3, "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "mousedown", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "mousedown", "touchstart", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "click"], ["type", "button", "mat-menu-item", "", 3, "click"], ["type", "button", "mat-menu-item", "", 3, "mousedown"], ["mat-menu-item", "", "type", "button", 3, "mousedown", "touchstart"], ["mat-button", "", "type", "button", "class", "drawer-trigger", 3, "click", 4, "ngIf"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor", 4, "ngIf"], ["class", "style-title", 4, "ngIf"], ["class", "spacer", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "display-type"], ["required", "", "formControlName", "displayType"], ["value", "page"], ["value", "form"], ["value", "json"], [1, "layout-type"], ["required", "", "formControlName", "layoutType"], ["value", "grid"], ["value", "gridless"], ["value", "split"], ["class", "brand", 4, "ngIf"], ["mat-button", "", "type", "button", 1, "drawer-trigger", 3, "click"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor"], [1, "style-title"], [1, "spacer"], [1, "brand"], ["cdkDropList", "", 1, "panel-dropzone", 3, "change", "cdkDropListDropped", "cdkDropListData", "multiple", "disableClick"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-menu-item", "", "type", "submit", 3, "click"]], template: function (n, i) { if (n & 1) {
            let r = t.\u0275\u0275getCurrentView();
            t.\u0275\u0275elementStart(0, "mat-sidenav-container", 6)(1, "mat-sidenav", 7, 0)(3, "druid-layout-sidenav", 8), t.\u0275\u0275listener("close", function () { t.\u0275\u0275restoreView(r); let d = t.\u0275\u0275reference(2); return t.\u0275\u0275resetView(d.toggle()); }), t.\u0275\u0275elementStart(4, "nav")(5, "ul"), t.\u0275\u0275template(6, Yt, 3, 0, "li", 9)(7, Zt, 3, 0, "li", 9)(8, te, 3, 0, "li", 9)(9, ee, 3, 0, "li", 9)(10, ie, 3, 0, "li", 9)(11, ne, 3, 0, "li", 9), t.\u0275\u0275elementStart(12, "li")(13, "button", 10), t.\u0275\u0275listener("mousedown", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.addContent(0)); })("touchstart", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.addContent(0)); }), t.\u0275\u0275text(14, "Add Content"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(15, "li")(16, "button", 10), t.\u0275\u0275listener("mousedown", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.editPanelProps(0)); })("touchstart", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.editPanelProps(0)); }), t.\u0275\u0275text(17, "Props"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275template(18, oe, 3, 0, "li", 9)(19, re, 3, 0, "li", 9), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275elementStart(20, "mat-sidenav-content")(21, "classifieds-ui-gridless-layout", 11), t.\u0275\u0275template(22, ge, 26, 7, "ng-template", null, 1, t.\u0275\u0275templateRefExtractor)(24, ye, 1, 1, "ng-template", null, 2, t.\u0275\u0275templateRefExtractor)(26, xe, 4, 4, "ng-template", null, 3, t.\u0275\u0275templateRefExtractor), t.\u0275\u0275elementEnd()()(), t.\u0275\u0275elementStart(28, "mat-menu", null, 4), t.\u0275\u0275template(30, we, 2, 0, "button", 12)(31, be, 2, 0, "button", 13)(32, ve, 2, 0, "button", 13)(33, Se, 2, 0, "button", 13)(34, Te, 2, 0, "button", 14)(35, Ee, 2, 0, "button", 14), t.\u0275\u0275elementStart(36, "button", 10), t.\u0275\u0275listener("mousedown", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.addContent(0)); })("touchstart", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.addContent(0)); }), t.\u0275\u0275text(37, "Add Content"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(38, "button", 10), t.\u0275\u0275listener("mousedown", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.editPanelProps(0)); })("touchstart", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.editPanelProps(0)); }), t.\u0275\u0275text(39, "Props"), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(40, Le, 2, 0, "button", 15)(41, Ve, 2, 0, "button", 15), t.\u0275\u0275elementEnd();
        } n & 2 && (t.\u0275\u0275property("hasBackdrop", !1), t.\u0275\u0275advance(6), t.\u0275\u0275property("ngIf", i.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.savable || i.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.savable), t.\u0275\u0275advance(7), t.\u0275\u0275property("ngIf", !i.editor.hasPanelStyle(0)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.editor.hasPanelStyle(0)), t.\u0275\u0275advance(2), t.\u0275\u0275property("formGroup", i.controlContainer.control)("nested", i.nested), t.\u0275\u0275advance(9), t.\u0275\u0275property("ngIf", i.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.savable || i.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.savable), t.\u0275\u0275advance(5), t.\u0275\u0275property("ngIf", !i.editor.hasPanelStyle(0)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.editor.hasPanelStyle(0))); }, dependencies: [u.NgForOf, u.NgIf, u.NgTemplateOutlet, s.NgControlStatus, s.NgControlStatusGroup, s.RequiredValidator, s.FormGroupDirective, s.FormControlName, p.CdkDropList, p.CdkDropListGroup, p.CdkDrag, P.MatOption, w.MatButton, L.MatIcon, D.MatFormField, m.MatMenu, m.MatMenuItem, m.MatMenuTrigger, F.MatSelect, g.MatSidenav, g.MatSidenavContainer, g.MatSidenavContent, k.NgxDropzoneComponent, rt, lt], styles: [".layout-type[_ngcontent-%COMP%]     .mat-form-field-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}.layout-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper{display:none}.layout-type[_ngcontent-%COMP%]     .mat-form-field-infix, .display-type[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:none;padding:0;margin:0}.layout-type[_ngcontent-%COMP%]     .mat-select-value, .display-type[_ngcontent-%COMP%]     .mat-select-value{text-align:right}.layout-type[_ngcontent-%COMP%]     .mat-form-field-underline, .display-type[_ngcontent-%COMP%]     .mat-form-field-underline{display:none}.layout-type[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper, .display-type[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-menu-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}.cdk-drag[_ngcontent-%COMP%]{padding:.25em}.brand[_ngcontent-%COMP%]{font-family:sans-serif;text-align:right;flex:1;letter-spacing:.2em;font-weight:lighter;color:#c82913}.spacer[_ngcontent-%COMP%]{flex:1}.style-title[_ngcontent-%COMP%]{font-family:sans-serif;font-weight:500;text-transform:lowercase;color:#000}.mat-icon[_ngcontent-%COMP%]{color:#000}.drawer-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}"] }); }
} return o; })(), Ti = (() => { class o extends Z {
    constructor(e) { super(e), this.controlContainer = e; }
    ngOnInit() { }
    static { this.\u0275fac = function (n) { return new (n || o)(t.\u0275\u0275directiveInject(s.ControlContainer, 8)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-gridless-layout-renderer"]], standalone: !1, features: [t.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [["innerGridItem", ""], [3, "displayMainControls", "displayItemHeader"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (n, i) { n & 1 && (t.\u0275\u0275elementStart(0, "classifieds-ui-gridless-layout", 1), t.\u0275\u0275template(1, Me, 1, 4, "ng-template", null, 0, t.\u0275\u0275templateRefExtractor), t.\u0275\u0275elementEnd()), n & 2 && t.\u0275\u0275property("displayMainControls", i.displayMainControls)("displayItemHeader", i.displayItemHeader); }, dependencies: [u.NgTemplateOutlet, rt], styles: ["[_nghost-%COMP%]{height:100%}"] }); }
} return o; })(), Ei = (() => { class o extends N {
    get gridItems() { return this.dashboard.map((e, n) => A(V({}, e), { cols: Math.floor(e.cols), weight: n })); }
    constructor(e) { super(e), this.controlContainer = e; }
    ngOnInit() { }
    static { this.\u0275fac = function (n) { return new (n || o)(t.\u0275\u0275directiveInject(s.ControlContainer)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-split-layout-editor"]], standalone: !1, features: [t.\u0275\u0275InheritDefinitionFeature], decls: 42, vars: 17, consts: [["drawer", ""], ["splitLayout", ""], ["extraActions", ""], ["gridItemActions", ""], ["innerGridItem", ""], ["topActions", "matMenu"], ["panelActions", "matMenu"], ["panes", ""], ["autosize", "", 3, "hasBackdrop"], ["fixedInViewport", "", "mode", "over"], [3, "close"], [4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "mousedown"], ["type", "button", "mat-menu-item", "", 3, "click"], ["cdkDropListGroup", "", 3, "itemAdded", "itemRemoved", "layoutSettingChange", "rowSettingsChange", "columnSettingsChange", "nested", "formGroup", "dashboard", "layoutSetting", "rowSettings", "columnSettings"], ["mat-menu-item", "", "type", "submit", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "mousedown", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "click"], ["mat-button", "", "type", "button", "class", "drawer-trigger", 3, "click", 4, "ngIf"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor", 4, "ngIf"], ["class", "spacer", 4, "ngIf"], [1, "display-type"], ["required", "", "formControlName", "displayType"], ["value", "page"], ["value", "form"], ["value", "json"], [1, "layout-type"], ["required", "", "formControlName", "layoutType"], ["value", "gridless"], ["value", "split"], [4, "ngTemplateOutlet"], ["class", "brand", 4, "ngIf"], ["mat-button", "", "type", "button", 1, "drawer-trigger", 3, "click"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor"], [1, "spacer"], [1, "brand"], ["mat-button", "", "type", "button", 1, "panel-actions-btn", 3, "matMenuTriggerFor"], ["type", "button", "mat-menu-item", "", 3, "mousedown", "touchstart"], ["mat-menu-item", "", "type", "button", 3, "mousedown", "touchstart", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 1, "delete", 3, "mousedown", "touchstart"], ["class", "style-title", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "mousedown", "touchstart"], [1, "style-title"], ["cdkDropList", "", 1, "panel-dropzone", 3, "change", "cdkDropListDropped", "cdkDropListData", "multiple", "disableClick"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-menu-item", "", "type", "submit", 3, "click"]], template: function (n, i) { if (n & 1) {
            let r = t.\u0275\u0275getCurrentView();
            t.\u0275\u0275elementStart(0, "mat-sidenav-container", 8)(1, "mat-sidenav", 9, 0)(3, "druid-layout-sidenav", 10), t.\u0275\u0275listener("close", function () { t.\u0275\u0275restoreView(r); let d = t.\u0275\u0275reference(2); return t.\u0275\u0275resetView(d.toggle()); }), t.\u0275\u0275elementStart(4, "nav")(5, "ul"), t.\u0275\u0275template(6, Ge, 3, 0, "li", 11), t.\u0275\u0275elementStart(7, "li")(8, "button", 12), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(r); let d = t.\u0275\u0275reference(22); return t.\u0275\u0275resetView(d.addRow()); }), t.\u0275\u0275text(9, "Add Row"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(10, "li")(11, "button", 13), t.\u0275\u0275listener("click", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.onPropertiesClick()); }), t.\u0275\u0275text(12, "Props"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(13, "li")(14, "button", 12), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(r); let d = t.\u0275\u0275reference(22); return t.\u0275\u0275resetView(d.layoutSettings("global")); }), t.\u0275\u0275text(15, "Layout Settings"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275template(16, Oe, 3, 0, "li", 11)(17, ke, 3, 0, "li", 11)(18, Pe, 3, 0, "li", 11)(19, De, 3, 0, "li", 11), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275elementStart(20, "mat-sidenav-content")(21, "classifieds-ui-split-layout", 14, 1), t.\u0275\u0275listener("itemAdded", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.onItemAdded()); })("itemRemoved", function (d) { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.onItemRemoved(d)); })("layoutSettingChange", function (d) { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.onLayoutSettingChange(d)); })("rowSettingsChange", function (d) { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.onRowSettingsChange(d)); })("columnSettingsChange", function (d) { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.onColumnSettingsChange(d)); }), t.\u0275\u0275template(23, je, 23, 6, "ng-template", null, 2, t.\u0275\u0275templateRefExtractor)(25, Ue, 16, 4, "ng-template", null, 3, t.\u0275\u0275templateRefExtractor)(27, Ke, 4, 4, "ng-template", null, 4, t.\u0275\u0275templateRefExtractor), t.\u0275\u0275elementEnd()()(), t.\u0275\u0275elementStart(29, "mat-menu", null, 5), t.\u0275\u0275template(31, Xe, 2, 0, "button", 15), t.\u0275\u0275elementStart(32, "button", 12), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(r); let d = t.\u0275\u0275reference(22); return t.\u0275\u0275resetView(d.addRow()); }), t.\u0275\u0275text(33, "Add Row"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(34, "button", 13), t.\u0275\u0275listener("click", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.onPropertiesClick()); }), t.\u0275\u0275text(35, "Props"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(36, "button", 12), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(r); let d = t.\u0275\u0275reference(22); return t.\u0275\u0275resetView(d.layoutSettings("global")); }), t.\u0275\u0275text(37, "Layout Settings"), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(38, Ye, 2, 0, "button", 16)(39, Ze, 2, 0, "button", 17)(40, ti, 2, 0, "button", 17)(41, ei, 2, 0, "button", 16), t.\u0275\u0275elementEnd();
        } n & 2 && (t.\u0275\u0275property("hasBackdrop", !1), t.\u0275\u0275advance(6), t.\u0275\u0275property("ngIf", i.savable), t.\u0275\u0275advance(10), t.\u0275\u0275property("ngIf", i.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.nested), t.\u0275\u0275advance(2), t.\u0275\u0275property("nested", i.nested)("formGroup", i.controlContainer.control)("dashboard", i.dashboard)("layoutSetting", i.layoutSetting)("rowSettings", i.rowSettings)("columnSettings", i.columnSettings), t.\u0275\u0275advance(10), t.\u0275\u0275property("ngIf", i.savable), t.\u0275\u0275advance(7), t.\u0275\u0275property("ngIf", i.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", i.nested)); }, dependencies: [u.NgForOf, u.NgIf, u.NgTemplateOutlet, s.NgControlStatus, s.NgControlStatusGroup, s.RequiredValidator, s.FormGroupDirective, s.FormControlName, p.CdkDropList, p.CdkDropListGroup, p.CdkDrag, P.MatOption, w.MatButton, L.MatIcon, D.MatFormField, m.MatMenu, m.MatMenuItem, m.MatMenuTrigger, F.MatSelect, g.MatSidenav, g.MatSidenavContainer, g.MatSidenavContent, k.NgxDropzoneComponent, vi, lt], styles: [".layout-type[_ngcontent-%COMP%]     .mat-form-field-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}.layout-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper{display:none}.layout-type[_ngcontent-%COMP%]     .mat-form-field-infix, .display-type[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:none;padding:0;margin:0}.layout-type[_ngcontent-%COMP%]     .mat-select-value, .display-type[_ngcontent-%COMP%]     .mat-select-value{text-align:right}.layout-type[_ngcontent-%COMP%]     .mat-form-field-underline, .display-type[_ngcontent-%COMP%]     .mat-form-field-underline{display:none}.layout-type[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper, .display-type[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-menu-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}.cdk-drag[_ngcontent-%COMP%]{padding:.25em}.panel-actions-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{transform:rotate(-90deg)}.brand[_ngcontent-%COMP%]{font-family:sans-serif;text-align:right;flex:1;letter-spacing:.2em;font-weight:lighter;color:#c82913}.spacer[_ngcontent-%COMP%]{flex:1}.style-title[_ngcontent-%COMP%]{font-family:sans-serif;font-weight:500;text-transform:lowercase;color:#000}.drawer-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}"] }); }
} return o; })(), Li = (() => { class o extends Z {
    constructor(e) { super(e), this.controlContainer = e; }
    ngOnInit() { }
    static { this.\u0275fac = function (n) { return new (n || o)(t.\u0275\u0275directiveInject(s.ControlContainer, 8)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-flex-layout-renderer"]], standalone: !1, features: [t.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [["innerGridItem", ""], [3, "dashboard", "layoutSetting", "rowSettings", "columnSettings"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (n, i) { n & 1 && (t.\u0275\u0275elementStart(0, "classifieds-ui-flex-layout", 1), t.\u0275\u0275template(1, ni, 1, 4, "ng-template", null, 0, t.\u0275\u0275templateRefExtractor), t.\u0275\u0275elementEnd()), n & 2 && t.\u0275\u0275property("dashboard", i.panelPage == null ? null : i.panelPage.gridItems)("layoutSetting", i.panelPage.layoutSetting)("rowSettings", i.panelPage.rowSettings)("columnSettings", i.columnSettings); }, dependencies: [u.NgTemplateOutlet, xi], encapsulation: 2 }); }
} return o; })(), Vi = () => { let o = new Map([["row", [new f({ name: "flexGrow", type: C.Text, label: "Flex Grow", required: !1, widget: "text", options: {}, attributes: [] }), new f({ name: "flexShrink", type: C.Text, label: "Flex Shrink", required: !1, widget: "text", options: {}, attributes: [] }), new f({ name: "flexBasis", type: C.Text, label: "Flex Basis", required: !1, widget: "text", options: {}, attributes: [] }), new f({ name: "height", type: C.Text, label: "Height", required: !1, widget: "text", options: {}, attributes: [] }), new f({ name: "direction", type: C.Text, label: "Direction", required: !1, widget: "text", options: {}, attributes: [] })]], ["column", [new f({ name: "height", type: C.Text, label: "Height", required: !1, widget: "text", options: {}, attributes: [] })]], ["global", [new f({ name: "direction", type: C.Text, label: "Direction", required: !1, widget: "text", options: {}, attributes: [] })]]]); return new M({ id: "split", title: "Split", editor: Ei, renderer: Li, settings: o }); }, Ii = () => new M({ id: "gridless", title: "Gridless", editor: Si, renderer: Ti, settings: new Map }), an = (() => { class o extends N {
    get gridItems() { return this.gridLayout.grid.map((e, n) => A(V({}, e), { weight: n })); }
    constructor(e) { super(e), this.controlContainer = e, this.options = { gridType: ht.Fit, displayGrid: Ct.Always, pushItems: !0, draggable: { enabled: !0 }, resizable: { enabled: !0 }, mobileBreakpoint: 0, itemChangeCallback: (n, i) => { }, itemInitCallback: (n, i) => { if (this.nested && n.y !== 0) {
            let r = this.gridLayout.grid.findIndex(l => l.x === n.x && l.y === n.y && l.cols === n.cols && l.rows === n.rows);
            this.editor.panelPanes(r).length === 0 && this.gridLayout.setItemContentHeight(r, 200);
        } } }; }
    ngOnInit() { }
    static { this.\u0275fac = function (n) { return new (n || o)(t.\u0275\u0275directiveInject(s.ControlContainer)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-grid-layout-editor"]], viewQuery: function (n, i) { if (n & 1 && t.\u0275\u0275viewQuery(X, 5), n & 2) {
            let r;
            t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (i.gridLayout = r.first);
        } }, standalone: !1, features: [t.\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 3, consts: [["extraActions", ""], ["gridItemActions", ""], ["innerGridItem", ""], ["panes", ""], ["cdkDropListGroup", "", 3, "itemAdded", "itemRemoved", "formGroup", "options", "dashboard"], ["type", "button", 4, "ngIf"], ["type", "button", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-type"], ["required", "", "formControlName", "layoutType"], ["value", "grid"], ["value", "gridless"], ["value", "split"], ["class", "display-type", 4, "ngIf"], [4, "ngTemplateOutlet"], ["type", "button"], ["type", "button", 3, "click"], [1, "display-type"], ["required", "", "formControlName", "displayType"], ["value", "page"], ["value", "form"], ["type", "button", 3, "mousedown", "touchstart"], ["type", "button", 3, "mousedown", "touchstart", 4, "ngIf"], ["cdkDropList", "", 1, "panel-dropzone", 3, "change", "cdkDropListDropped", "cdkDropListData", "multiple", "disableClick"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (n, i) { if (n & 1) {
            let r = t.\u0275\u0275getCurrentView();
            t.\u0275\u0275elementStart(0, "classifieds-ui-grid-layout", 4), t.\u0275\u0275listener("itemAdded", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.onItemAdded()); })("itemRemoved", function (d) { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.editor.onItemRemoved(d)); }), t.\u0275\u0275template(1, pi, 16, 7, "ng-template", null, 0, t.\u0275\u0275templateRefExtractor)(3, fi, 7, 3, "ng-template", null, 1, t.\u0275\u0275templateRefExtractor)(5, hi, 4, 4, "ng-template", null, 2, t.\u0275\u0275templateRefExtractor), t.\u0275\u0275elementEnd();
        } n & 2 && t.\u0275\u0275property("formGroup", i.controlContainer.control)("options", i.options)("dashboard", i.dashboard); }, dependencies: [u.NgForOf, u.NgIf, u.NgTemplateOutlet, s.NgControlStatus, s.NgControlStatusGroup, s.RequiredValidator, s.FormGroupDirective, s.FormControlName, p.CdkDropList, p.CdkDropListGroup, p.CdkDrag, P.MatOption, D.MatFormField, F.MatSelect, k.NgxDropzoneComponent, X], styles: [".layout-type[_ngcontent-%COMP%], .display-type[_ngcontent-%COMP%]{float:right}[_nghost-%COMP%]     .main-controls{background-color:#ccc}[_nghost-%COMP%]     .layout-inner{background-color:#ccc;padding:.75em}[_nghost-%COMP%]     .editable-pane-wrapper{border:none;margin-bottom:0}[_nghost-%COMP%]     .pane-header{background-color:#fff}[_nghost-%COMP%]     .nested-panel-wrapper{padding:.75em;margin-bottom:0}"] }); }
} return o; })(), ln = (() => { class o {
    constructor(e) { [Vi(), Ii()].forEach(n => { e.register(n); }); }
    static { this.\u0275fac = function (n) { return new (n || o)(t.\u0275\u0275inject(at)); }; }
    static { this.\u0275mod = t.\u0275\u0275defineNgModule({ type: o }); }
    static { this.\u0275inj = t.\u0275\u0275defineInjector({ imports: [dt, pt, Gt, ct, ft, W, gt, xt, St, vt, bt, wt] }); }
} return o; })();
export { xi as FlexLayoutComponent, Li as FlexLayoutRendererComponent, X as GridLayoutComponent, an as GridLayoutEditorComponent, rt as GridlessLayoutComponent, Si as GridlessLayoutEditorComponent, Ti as GridlessLayoutRendererComponent, bi as LayoutDialogComponent, wi as LayoutFormComponent, ln as LayoutModule, M as LayoutPlugin, at as LayoutPluginManager, lt as LayoutSidenavComponent, vi as SplitLayoutComponent, Ei as SplitLayoutEditorComponent };
