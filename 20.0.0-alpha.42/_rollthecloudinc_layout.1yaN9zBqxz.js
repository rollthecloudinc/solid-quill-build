import "@nf-internal/chunk-M4JCPEPJ";
import { D, z as H } from "@nf-internal/chunk-STIBVO4O";
import { a as k, b as F } from "@nf-internal/chunk-2AVGQ2MQ";
import * as t from "@angular/core";
import { EventEmitter as C, forwardRef as j } from "@angular/core";
import * as u from "@angular/common";
import { CommonModule as rt } from "@angular/common";
import * as d from "@angular/forms";
import { NG_VALUE_ACCESSOR as at, NG_VALIDATORS as lt, FormsModule as st, ReactiveFormsModule as dt } from "@angular/forms";
import * as L from "angular-split";
import { AngularSplitModule as ut } from "angular-split";
import { MaterialModule as mt } from "@rollthecloudinc/material";
import * as V from "angular-gridster2";
import { GridsterComponent as pt, DisplayGrid as ct, GridType as _t, GridsterModule as gt } from "angular-gridster2";
import * as w from "@rollthecloudinc/attributes";
import { AttributeValue as T, Attribute as y, AttributeTypes as h, AttributesModule as ft } from "@rollthecloudinc/attributes";
import { TokenModule as yt } from "@rollthecloudinc/token";
import * as U from "@rollthecloudinc/utils";
import { SITE_NAME as W, UtilsModule as Ct } from "@rollthecloudinc/utils";
import * as I from "ngx-dropzone";
import { NgxDropzoneModule as ht } from "ngx-dropzone";
import { LayoutSetting as g, LayoutEditorBaseComponent as R, LayoutRendererBaseComponent as J } from "@rollthecloudinc/panels";
import { switchMap as xt, filter as wt } from "rxjs/operators";
import * as _ from "@angular/material/dialog";
import { MAT_DIALOG_DATA as bt } from "@angular/material/dialog";
import * as b from "@angular/material/button";
import * as K from "@rollthecloudinc/plugin";
import { BasePluginManager as vt, PluginDef as St, Plugin as Tt } from "@rollthecloudinc/plugin";
import * as S from "@angular/material/icon";
import * as m from "@angular/material/menu";
import * as A from "@rollthecloudinc/auth";
import * as $ from "@ngrx/data";
import * as p from "@angular/cdk/drag-drop";
import * as M from "@angular/material/autocomplete";
import * as O from "@angular/material/input";
import * as G from "@angular/material/select";
import * as f from "@angular/material/sidenav";
import * as X from "@angular/router";
import { RouterModule as Et } from "@angular/router";
import * as Y from "@angular/material/divider";
import * as v from "@angular/cdk/scrolling";
var P = ["innerGridItem"], Z = () => [], x = i => ({ i });
function Lt(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function Vt(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 5)(1, "p", 6), t.\u0275\u0275text(2), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(3, "div", 7), t.\u0275\u0275template(4, Lt, 1, 0, "ng-container", 8), t.\u0275\u0275elementEnd()()), i & 2) {
    let e, o, n = a.index, r = t.\u0275\u0275nextContext().index, l = t.\u0275\u0275nextContext();
    t.\u0275\u0275styleProp("flex", l.getColFlex(r, n))("max-width", (e = l.dashboard[l.itemIndex(r, n)]) == null ? null : e.cols, "%"), t.\u0275\u0275advance(2), t.\u0275\u0275textInterpolate3("row: ", r, " | column: ", n, " | size: ", (o = l.dashboard[l.itemIndex(r, n)]) == null ? null : o.cols), t.\u0275\u0275advance(), t.\u0275\u0275property("ngStyle", l.gridItemInnerStyles(r, n)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", l.innerGridItemTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(10, x, l.itemIndex(r, n)));
} }
function It(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 2)(1, "div", 3), t.\u0275\u0275template(2, Vt, 5, 12, "div", 4), t.\u0275\u0275elementEnd()()), i & 2) {
    let e = a.index, o = t.\u0275\u0275nextContext();
    t.\u0275\u0275styleProp("flex", o.rowFlex(e)), t.\u0275\u0275advance(), t.\u0275\u0275styleProp("flex-direction", o.rowDirection(e))("gap", o.rowGap(e)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngForOf", t.\u0275\u0275pureFunction0(7, Z).constructor(o.totalColumns(e)));
} }
var N = ["gridItemActions"], z = ["extraActions"], tt = ["mainControls"], et = ["itemHeader"];
function Mt(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function Ot(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function Gt(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function Pt(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "gridster-item", 9)(1, "div", 10)(2, "div", 11, 1), t.\u0275\u0275template(4, Ot, 1, 0, "ng-container", 12), t.\u0275\u0275elementStart(5, "button", 13), t.\u0275\u0275listener("mousedown", function () { let n = t.\u0275\u0275restoreView(e).index, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.removeItem(n)); })("touchstart", function () { let n = t.\u0275\u0275restoreView(e).index, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.removeItem(n)); }), t.\u0275\u0275text(6, "Delete"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(7, "div", 14), t.\u0275\u0275template(8, Gt, 1, 0, "ng-container", 12), t.\u0275\u0275elementEnd()()();
} if (i & 2) {
    let e = a.$implicit, o = a.index, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("item", e), t.\u0275\u0275advance(2), t.\u0275\u0275property("hidden", !n.displayItemHeader), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", n.gridItemActionsTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(6, x, o)), t.\u0275\u0275advance(4), t.\u0275\u0275property("ngTemplateOutlet", n.innerGridItemTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(8, x, o));
} }
var q = () => ({ i: 0 });
function kt(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function Ft(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function Dt(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function Rt(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function At(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function $t(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function Nt(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "as-split-area", 17)(1, "div")(2, "div", 18, 2), t.\u0275\u0275template(4, At, 1, 0, "ng-container", 19), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(5, "div", 20), t.\u0275\u0275template(6, $t, 1, 0, "ng-container", 19), t.\u0275\u0275elementEnd()()()), i & 2) {
    let e = a.index, o = t.\u0275\u0275nextContext(2).index, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("size", n.sizes[o][e]), t.\u0275\u0275advance(2), t.\u0275\u0275property("hidden", !n.displayItemHeader), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", n.gridItemActionsTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(6, x, n.itemIndex(o, e))), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", n.innerGridItemTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(8, x, n.itemIndex(o, e)));
} }
function zt(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "as-split", 15), t.\u0275\u0275listener("dragEnd", function (n) { t.\u0275\u0275restoreView(e); let r = t.\u0275\u0275nextContext().index, l = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(l.dragEnd(r, n)); }), t.\u0275\u0275template(1, Nt, 7, 10, "as-split-area", 16), t.\u0275\u0275elementEnd();
} if (i & 2) {
    let e = t.\u0275\u0275nextContext().index, o = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngForOf", o.arrayFromNumber(o.totalColumns(e)));
} }
function Qt(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "button", 10)(3, "mat-icon"), t.\u0275\u0275text(4, "menu"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(5, "mat-menu", null, 1)(7, "button", 11), t.\u0275\u0275listener("mousedown", function () { let n = t.\u0275\u0275restoreView(e).index, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.addColumn(n)); }), t.\u0275\u0275text(8, "Add Column"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(9, "button", 11), t.\u0275\u0275listener("mousedown", function () { let n = t.\u0275\u0275restoreView(e).index, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.layoutSettings("row", n)); }), t.\u0275\u0275text(10, "Layout Settings"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(11, "button", 12), t.\u0275\u0275listener("mousedown", function () { let n = t.\u0275\u0275restoreView(e).index, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.removeRow(n)); }), t.\u0275\u0275text(12, "Delete"), t.\u0275\u0275elementEnd()()(), t.\u0275\u0275elementStart(13, "div", 13), t.\u0275\u0275template(14, zt, 2, 1, "as-split", 14), t.\u0275\u0275elementEnd()();
} if (i & 2) {
    let e = t.\u0275\u0275reference(6), o = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(2), t.\u0275\u0275property("matMenuTriggerFor", e), t.\u0275\u0275advance(12), t.\u0275\u0275property("ngIf", (o.dashboard == null ? null : o.dashboard.length) > 0);
} }
var Ht = ["*"], jt = i => [i, "manage"];
function qt(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 6), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.login()); }), t.\u0275\u0275text(1, "login"), t.\u0275\u0275elementEnd();
} }
function Bt(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 7)(1, "a", 8), t.\u0275\u0275text(2), t.\u0275\u0275elementEnd()()), i & 2) {
    let e = a.$implicit;
    t.\u0275\u0275advance(), t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction1(2, jt, e.path)), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.path);
} }
var Q = (i, a) => ({ i, j: a });
function Ut(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 16), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.submit()); }), t.\u0275\u0275text(2, "Save"), t.\u0275\u0275elementEnd()();
} }
function Wt(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onPropertiesClick()); }), t.\u0275\u0275text(2, "Properties"), t.\u0275\u0275elementEnd()();
} }
function Jt(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onDeleteClick()); }), t.\u0275\u0275text(2, "Delete"), t.\u0275\u0275elementEnd()();
} }
function Kt(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onRulesClick()); }), t.\u0275\u0275text(2, "Rules"), t.\u0275\u0275elementEnd()();
} }
function Xt(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onPersistenceClick()); }), t.\u0275\u0275text(2, "Persistence"), t.\u0275\u0275elementEnd()();
} }
function Yt(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onInteractionsClick()); }), t.\u0275\u0275text(2, "Interactions"), t.\u0275\u0275elementEnd()();
} }
function Zt(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 19), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.applyStyle(0)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.applyStyle(0)); }), t.\u0275\u0275text(2, "Apply Style"), t.\u0275\u0275elementEnd()();
} }
function te(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 19), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.removeStyle(0)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.removeStyle(0)); }), t.\u0275\u0275text(2, "Remove Style"), t.\u0275\u0275elementEnd()();
} }
function ee(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 36), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e), t.\u0275\u0275nextContext(2); let n = t.\u0275\u0275reference(2); return t.\u0275\u0275resetView(n.toggle()); }), t.\u0275\u0275elementStart(1, "mat-icon"), t.\u0275\u0275text(2, "menu"), t.\u0275\u0275elementEnd()();
} }
function ne(i, a) { i & 1 && (t.\u0275\u0275elementStart(0, "mat-icon"), t.\u0275\u0275text(1, "arrow_drop_down"), t.\u0275\u0275elementEnd()); }
function ie(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "button", 37), t.\u0275\u0275template(1, ne, 2, 0, "mat-icon", 9), t.\u0275\u0275elementEnd()), i & 2) {
    let e = t.\u0275\u0275nextContext(2), o = t.\u0275\u0275reference(29);
    t.\u0275\u0275property("matMenuTriggerFor", o), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested);
} }
function oe(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function re(i, a) { if (i & 1 && (t.\u0275\u0275elementContainerStart(0), t.\u0275\u0275template(1, oe, 1, 0, "ng-container", 24), t.\u0275\u0275elementContainerEnd()), i & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e.contextsMenuTpl);
} }
function ae(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 38), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), i & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.editor.panelStyleTitle(0));
} }
function le(i, a) { i & 1 && t.\u0275\u0275element(0, "span", 39); }
function se(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function de(i, a) { i & 1 && (t.\u0275\u0275elementStart(0, "div", 40), t.\u0275\u0275text(1, "Quell"), t.\u0275\u0275elementEnd()); }
function ue(i, a) { if (i & 1 && (t.\u0275\u0275template(0, ee, 3, 0, "button", 20)(1, ie, 2, 2, "button", 21), t.\u0275\u0275elementStart(2, "div"), t.\u0275\u0275template(3, re, 2, 1, "ng-container", 9), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(4, ae, 2, 1, "div", 22)(5, le, 1, 0, "span", 23)(6, se, 1, 0, "ng-container", 24), t.\u0275\u0275elementStart(7, "div", 25)(8, "mat-form-field")(9, "mat-select", 26)(10, "mat-option", 27), t.\u0275\u0275text(11, "page"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(12, "mat-option", 28), t.\u0275\u0275text(13, "form"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(14, "mat-option", 29), t.\u0275\u0275text(15, "json"), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275elementStart(16, "div", 30)(17, "mat-form-field")(18, "mat-select", 31)(19, "mat-option", 32), t.\u0275\u0275text(20, "grid"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(21, "mat-option", 33), t.\u0275\u0275text(22, "gridless"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(23, "mat-option", 34), t.\u0275\u0275text(24, "split"), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275template(25, de, 2, 0, "div", 35)), i & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngIf", !e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngIf", e.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.editor.hasPanelStyle(0) && e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e.extraActionsAreaTmpl), t.\u0275\u0275advance(19), t.\u0275\u0275property("ngIf", !e.nested);
} }
function me(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 38), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), i & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.editor.panelStyleTitle(0));
} }
function pe(i, a) { if (i & 1 && t.\u0275\u0275template(0, me, 2, 1, "div", 22), i & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngIf", e.editor.hasPanelStyle(0) && !e.nested);
} }
function ce(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function _e(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 43), t.\u0275\u0275template(1, ce, 1, 0, "ng-container", 44), t.\u0275\u0275elementEnd()), i & 2) {
    let e = a.index, o = t.\u0275\u0275nextContext().i, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", n.editablePaneTpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction2(2, Q, o, e));
} }
function ge(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "ngx-dropzone", 41), t.\u0275\u0275listener("change", function (n) { let r = t.\u0275\u0275restoreView(e).i, l = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(l.editor.onFileChange(n, r)); })("cdkDropListDropped", function (n) { t.\u0275\u0275restoreView(e); let r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.onDrop(n)); }), t.\u0275\u0275elementStart(1, "div", null, 5), t.\u0275\u0275template(3, _e, 2, 5, "div", 42), t.\u0275\u0275elementEnd()();
} if (i & 2) {
    let e = a.i, o = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("cdkDropListData", e)("multiple", !0)("disableClick", !0), t.\u0275\u0275advance(3), t.\u0275\u0275property("ngForOf", o.editor.panelPanes(e).controls);
} }
function fe(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 45), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.submit()); }), t.\u0275\u0275text(1, "Save"), t.\u0275\u0275elementEnd();
} }
function ye(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onPropertiesClick()); }), t.\u0275\u0275text(1, "Properties"), t.\u0275\u0275elementEnd();
} }
function Ce(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onDeleteClick()); }), t.\u0275\u0275text(1, "Delete"), t.\u0275\u0275elementEnd();
} }
function he(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onRulesClick()); }), t.\u0275\u0275text(1, "Rules"), t.\u0275\u0275elementEnd();
} }
function xe(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onPersistenceClick()); }), t.\u0275\u0275text(1, "Persistence"), t.\u0275\u0275elementEnd();
} }
function we(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onInteractionsClick()); }), t.\u0275\u0275text(1, "Interactions"), t.\u0275\u0275elementEnd();
} }
function be(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 19), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.applyStyle(0)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.applyStyle(0)); }), t.\u0275\u0275text(1, "Apply Style"), t.\u0275\u0275elementEnd();
} }
function ve(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 19), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.removeStyle(0)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.removeStyle(0)); }), t.\u0275\u0275text(1, "Remove Style"), t.\u0275\u0275elementEnd();
} }
function Se(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function Te(i, a) { if (i & 1 && t.\u0275\u0275template(0, Se, 1, 0, "ng-container", 2), i & 2) {
    let e = a.i, o = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngTemplateOutlet", o.renderPanelTpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(2, x, e));
} }
var Ee = ["splitLayout"];
function Le(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.submit()); }), t.\u0275\u0275text(2, "Save"), t.\u0275\u0275elementEnd()();
} }
function Ve(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e), t.\u0275\u0275nextContext(); let n = t.\u0275\u0275reference(18); return t.\u0275\u0275resetView(n.addRow()); }), t.\u0275\u0275text(2, "Add Row"), t.\u0275\u0275elementEnd()();
} }
function Ie(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e), t.\u0275\u0275nextContext(); let n = t.\u0275\u0275reference(18); return t.\u0275\u0275resetView(n.layoutSettings("global")); }), t.\u0275\u0275text(2, "Layout Settings"), t.\u0275\u0275elementEnd()();
} }
function Me(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onRulesClick()); }), t.\u0275\u0275text(2, "Rules"), t.\u0275\u0275elementEnd()();
} }
function Oe(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onPersistenceClick()); }), t.\u0275\u0275text(2, "Persistence"), t.\u0275\u0275elementEnd()();
} }
function Ge(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onInteractionsClick()); }), t.\u0275\u0275text(2, "Interactions"), t.\u0275\u0275elementEnd()();
} }
function Pe(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "li")(1, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onDeleteClick()); }), t.\u0275\u0275text(2, "Delete"), t.\u0275\u0275elementEnd()();
} }
function ke(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 33), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e), t.\u0275\u0275nextContext(2); let n = t.\u0275\u0275reference(2); return t.\u0275\u0275resetView(n.toggle()); }), t.\u0275\u0275elementStart(1, "mat-icon"), t.\u0275\u0275text(2, "menu"), t.\u0275\u0275elementEnd()();
} }
function Fe(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "button", 34)(1, "mat-icon"), t.\u0275\u0275text(2, "menu"), t.\u0275\u0275elementEnd()()), i & 2) {
    t.\u0275\u0275nextContext(2);
    let e = t.\u0275\u0275reference(26);
    t.\u0275\u0275property("matMenuTriggerFor", e);
} }
function De(i, a) { i & 1 && t.\u0275\u0275element(0, "span", 35); }
function Re(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function Ae(i, a) { if (i & 1 && (t.\u0275\u0275elementContainerStart(0), t.\u0275\u0275template(1, Re, 1, 0, "ng-container", 31), t.\u0275\u0275elementContainerEnd()), i & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e.contextsMenuTpl);
} }
function $e(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function Ne(i, a) { i & 1 && (t.\u0275\u0275elementStart(0, "div", 36), t.\u0275\u0275text(1, "Quell"), t.\u0275\u0275elementEnd()); }
function ze(i, a) { if (i & 1 && (t.\u0275\u0275template(0, ke, 3, 0, "button", 19)(1, Fe, 3, 1, "button", 20)(2, De, 1, 0, "span", 21), t.\u0275\u0275elementStart(3, "div"), t.\u0275\u0275template(4, Ae, 2, 1, "ng-container", 11), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(5, "div", 22)(6, "mat-form-field")(7, "mat-select", 23)(8, "mat-option", 24), t.\u0275\u0275text(9, "page"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(10, "mat-option", 25), t.\u0275\u0275text(11, "form"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(12, "mat-option", 26), t.\u0275\u0275text(13, "json"), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275elementStart(14, "div", 27)(15, "mat-form-field")(16, "mat-select", 28)(17, "mat-option", 29), t.\u0275\u0275text(18, "gridless"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(19, "mat-option", 30), t.\u0275\u0275text(20, "split"), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275template(21, $e, 1, 0, "ng-container", 31)(22, Ne, 2, 0, "div", 32)), i & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngIf", !e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngIf", e.savable), t.\u0275\u0275advance(17), t.\u0275\u0275property("ngTemplateOutlet", e.extraActionsAreaTmpl), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", !e.nested);
} }
function Qe(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext().i; t.\u0275\u0275nextContext(); let r = t.\u0275\u0275reference(18); return t.\u0275\u0275resetView(r.layoutSettings("column", n)); }), t.\u0275\u0275text(1, "Layout Settings"), t.\u0275\u0275elementEnd();
} }
function He(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 42), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.applyStyle(n)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.applyStyle(n)); }), t.\u0275\u0275text(1, "Apply Style"), t.\u0275\u0275elementEnd();
} }
function je(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 42), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.removeStyle(n)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.removeStyle(n)); }), t.\u0275\u0275text(1, "Remove Style"), t.\u0275\u0275elementEnd();
} }
function qe(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 43), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext().i; t.\u0275\u0275nextContext(); let r = t.\u0275\u0275reference(18); return t.\u0275\u0275resetView(r.removeColumn2(n)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext().i; t.\u0275\u0275nextContext(); let r = t.\u0275\u0275reference(18); return t.\u0275\u0275resetView(r == null ? null : r.removeColumn2(n)); }), t.\u0275\u0275text(1, "Delete"), t.\u0275\u0275elementEnd();
} }
function Be(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 44), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), i & 2) {
    let e = t.\u0275\u0275nextContext().i, o = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(o.editor.panelStyleTitle(e));
} }
function Ue(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 37)(1, "mat-icon"), t.\u0275\u0275text(2, "arrow_drop_down"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(3, "mat-menu", null, 6), t.\u0275\u0275template(5, Qe, 2, 0, "button", 15), t.\u0275\u0275elementStart(6, "button", 38), t.\u0275\u0275listener("mousedown", function () { let n = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.addContent(n)); })("touchstart", function () { let n = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.addContent(n)); }), t.\u0275\u0275text(7, "Add Content"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(8, "button", 38), t.\u0275\u0275listener("mousedown", function () { let n = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.editPanelProps(n)); })("touchstart", function () { let n = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.editPanelProps(n)); }), t.\u0275\u0275text(9, "Props"), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(10, He, 2, 0, "button", 39)(11, je, 2, 0, "button", 39)(12, qe, 2, 0, "button", 40), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(13, Be, 2, 1, "div", 41);
} if (i & 2) {
    let e = a.i, o = t.\u0275\u0275reference(4), n = t.\u0275\u0275nextContext(), r = t.\u0275\u0275reference(18);
    t.\u0275\u0275property("matMenuTriggerFor", o), t.\u0275\u0275advance(5), t.\u0275\u0275property("ngIf", r), t.\u0275\u0275advance(5), t.\u0275\u0275property("ngIf", !n.editor.hasPanelStyle(e)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.editor.hasPanelStyle(e)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", r), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.editor.hasPanelStyle(e));
} }
function We(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function Je(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 47), t.\u0275\u0275template(1, We, 1, 0, "ng-container", 48), t.\u0275\u0275elementEnd()), i & 2) {
    let e = a.index, o = t.\u0275\u0275nextContext().i, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", n.editablePaneTpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction2(2, Q, o, e));
} }
function Ke(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "ngx-dropzone", 45), t.\u0275\u0275listener("change", function (n) { let r = t.\u0275\u0275restoreView(e).i, l = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(l.editor.onFileChange(n, r)); })("cdkDropListDropped", function (n) { t.\u0275\u0275restoreView(e); let r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.onDrop(n)); }), t.\u0275\u0275elementStart(1, "div", null, 7), t.\u0275\u0275template(3, Je, 2, 5, "div", 46), t.\u0275\u0275elementEnd()();
} if (i & 2) {
    let e = a.i, o = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("cdkDropListData", e)("multiple", !0)("disableClick", !0), t.\u0275\u0275advance(3), t.\u0275\u0275property("ngForOf", o.editor.panelPanes(e).controls);
} }
function Xe(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 49), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.submit()); }), t.\u0275\u0275text(1, "Save"), t.\u0275\u0275elementEnd();
} }
function Ye(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e), t.\u0275\u0275nextContext(); let n = t.\u0275\u0275reference(18); return t.\u0275\u0275resetView(n.addRow()); }), t.\u0275\u0275text(1, "Add Row"), t.\u0275\u0275elementEnd();
} }
function Ze(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e), t.\u0275\u0275nextContext(); let n = t.\u0275\u0275reference(18); return t.\u0275\u0275resetView(n.layoutSettings("global")); }), t.\u0275\u0275text(1, "Layout Settings"), t.\u0275\u0275elementEnd();
} }
function tn(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onRulesClick()); }), t.\u0275\u0275text(1, "Rules"), t.\u0275\u0275elementEnd();
} }
function en(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onPersistenceClick()); }), t.\u0275\u0275text(1, "Persistence"), t.\u0275\u0275elementEnd();
} }
function nn(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onInteractionsClick()); }), t.\u0275\u0275text(1, "Interactions"), t.\u0275\u0275elementEnd();
} }
function on(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 17), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n.editor.onDeleteClick()); }), t.\u0275\u0275text(1, "Delete"), t.\u0275\u0275elementEnd();
} }
function rn(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function an(i, a) { if (i & 1 && t.\u0275\u0275template(0, rn, 1, 0, "ng-container", 2), i & 2) {
    let e = a.i, o = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngTemplateOutlet", o.renderPanelTpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(2, x, e));
} }
function ln(i, a) { i & 1 && (t.\u0275\u0275elementStart(0, "button", 15), t.\u0275\u0275text(1, "Save"), t.\u0275\u0275elementEnd()); }
function sn(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 16), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(n.editor.onPropertiesClick()); }), t.\u0275\u0275text(1, "Properties"), t.\u0275\u0275elementEnd();
} }
function dn(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function un(i, a) { if (i & 1 && (t.\u0275\u0275elementContainerStart(0), t.\u0275\u0275template(1, dn, 1, 0, "ng-container", 14), t.\u0275\u0275elementContainerEnd()), i & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e.contextsMenuTpl);
} }
function mn(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 16), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(n.editor.onRulesClick()); }), t.\u0275\u0275text(1, "Rules"), t.\u0275\u0275elementEnd();
} }
function pn(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 16), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(n.editor.onDeleteClick()); }), t.\u0275\u0275text(1, "Delete"), t.\u0275\u0275elementEnd();
} }
function cn(i, a) { i & 1 && (t.\u0275\u0275elementStart(0, "div", 17)(1, "mat-form-field")(2, "mat-select", 18)(3, "mat-option", 19), t.\u0275\u0275text(4, "Page"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(5, "mat-option", 20), t.\u0275\u0275text(6, "Form"), t.\u0275\u0275elementEnd()()()()); }
function _n(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function gn(i, a) { if (i & 1 && (t.\u0275\u0275template(0, ln, 2, 0, "button", 5)(1, sn, 2, 0, "button", 6)(2, un, 2, 1, "ng-container", 7)(3, mn, 2, 0, "button", 6)(4, pn, 2, 0, "button", 6), t.\u0275\u0275elementStart(5, "div", 8)(6, "mat-form-field")(7, "mat-select", 9)(8, "mat-option", 10), t.\u0275\u0275text(9, "Grid"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(10, "mat-option", 11), t.\u0275\u0275text(11, "Gridless"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(12, "mat-option", 12), t.\u0275\u0275text(13, "Split"), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275template(14, cn, 7, 0, "div", 13)(15, _n, 1, 0, "ng-container", 14)), i & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngIf", e.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", e.nested), t.\u0275\u0275advance(10), t.\u0275\u0275property("ngIf", !e.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e.extraActionsAreaTmpl);
} }
function fn(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 21), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.applyStyle(n)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.applyStyle(n)); }), t.\u0275\u0275text(1, "Apply Style"), t.\u0275\u0275elementEnd();
} }
function yn(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "span"), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), i & 2) {
    let e = t.\u0275\u0275nextContext().i, o = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1("Style: ", o.editor.panelStyleTitle(e));
} }
function Cn(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 21), t.\u0275\u0275listener("mousedown", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.removeStyle(n)); })("touchstart", function () { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext().i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.removeStyle(n)); }), t.\u0275\u0275text(1, "Remove Style"), t.\u0275\u0275elementEnd();
} }
function hn(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 21), t.\u0275\u0275listener("mousedown", function () { let n = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.addContent(n)); })("touchstart", function () { let n = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.addContent(n)); }), t.\u0275\u0275text(1, "Add Content"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(2, "button", 21), t.\u0275\u0275listener("mousedown", function () { let n = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.editPanelProps(n)); })("touchstart", function () { let n = t.\u0275\u0275restoreView(e).i, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.editPanelProps(n)); }), t.\u0275\u0275text(3, "Props"), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(4, fn, 2, 0, "button", 22)(5, yn, 2, 1, "span", 7)(6, Cn, 2, 0, "button", 22);
} if (i & 2) {
    let e = a.i, o = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(4), t.\u0275\u0275property("ngIf", !o.editor.hasPanelStyle(e)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", o.editor.hasPanelStyle(e)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", o.editor.hasPanelStyle(e));
} }
function xn(i, a) { i & 1 && t.\u0275\u0275elementContainer(0); }
function wn(i, a) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 25), t.\u0275\u0275template(1, xn, 1, 0, "ng-container", 26), t.\u0275\u0275elementEnd()), i & 2) {
    let e = a.index, o = t.\u0275\u0275nextContext().i, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", n.editablePaneTpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction2(2, Q, o, e));
} }
function bn(i, a) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "ngx-dropzone", 23), t.\u0275\u0275listener("change", function (n) { let r = t.\u0275\u0275restoreView(e).i, l = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(l.editor.onFileChange(n, r)); })("cdkDropListDropped", function (n) { t.\u0275\u0275restoreView(e); let r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.editor.onDrop(n)); }), t.\u0275\u0275elementStart(1, "div", null, 3), t.\u0275\u0275template(3, wn, 2, 5, "div", 24), t.\u0275\u0275elementEnd()();
} if (i & 2) {
    let e = a.i, o = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("cdkDropListData", e)("multiple", !0)("disableClick", !0), t.\u0275\u0275advance(3), t.\u0275\u0275property("ngForOf", o.editor.panelPanes(e).controls);
} }
var vn = (() => { class i {
    constructor(e) { this.attributeMatcher = e, this.dashboard = [], this.layoutSetting = new g, this.rowSettings = [], this.columnSettings = []; }
    ngOnInit() { console.log("dashboard", this.dashboard); }
    get totalRows() { return this.dashboard.length === 0 ? 0 : this.dashboard.reduce((e, o) => o.y > e ? o.y : e, 0) + 1; }
    get direction() { let e = this.attributeMatcher.getComputedValue("direction", this.layoutSetting?.settings || []); return e && (e.trim() === "column" || e.trim() === "row") ? e.trim() : "column"; }
    get layoutGap() { let e = this.attributeMatcher.getComputedValue("gap", this.layoutSetting?.settings || []); return e ? e.trim() : "0px"; }
    totalColumns(e) { return this.dashboard.reduce((o, n) => n.y === e ? o + 1 : o, 0); }
    rowDirection(e) { let o = this.rowSettings?.[e]?.settings || [], n = this.attributeMatcher.getComputedValue("direction", o); return n && (n.trim() === "column" || n.trim() === "row") ? n.trim() : "row"; }
    rowFlex(e) { let o = this.rowSettings?.[e]?.settings || [], l = ["flexGrow", "flexShrink", "flexBasis"].map(s => this.attributeMatcher.getComputedValue(s, o)).map(s => s != null && s !== "" ? s.toString().trim() : "").filter(s => s !== ""); return l.length > 0 ? l.join(" ") : "1 1 auto"; }
    rowGap(e) { let o = this.rowSettings?.[e]?.settings || [], n = this.attributeMatcher.getComputedValue("gap", o); return n ? n.trim() : "0px"; }
    itemIndex(e, o) { return this.dashboard.findIndex(n => n.y === e && n.x === o); }
    gridItemInnerStyles(e, o) { let n = this.itemIndex(e, o), r = this.columnSettings?.[n]?.settings || [], l = this.attributeMatcher.getComputedValue("height", r); return { height: this.calculateHeight(l) }; }
    calculateHeight(e) { let o = e != null ? e.toString().trim() : "auto"; return o === "" ? "auto" : o; }
    getColFlex(e, o) { let n = this.itemIndex(e, o), r = this.dashboard[n]; return !r || r.cols === void 0 ? "1 1 auto" : `0 0 ${r.cols}%`; }
    static { this.\u0275fac = function (o) { return new (o || i)(t.\u0275\u0275directiveInject(w.AttributeMatcherService)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-flex-layout"]], contentQueries: function (o, n, r) { if (o & 1 && t.\u0275\u0275contentQuery(r, P, 5), o & 2) {
            let l;
            t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.innerGridItemTmpl = l.first);
        } }, inputs: { dashboard: "dashboard", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings" }, standalone: !1, decls: 2, vars: 6, consts: [[1, "layout-host"], ["class", "flex-row-wrapper", 3, "flex", 4, "ngFor", "ngForOf"], [1, "flex-row-wrapper"], [1, "layout-row-container"], ["class", "flex-column-item", 3, "flex", "max-width", 4, "ngFor", "ngForOf"], [1, "flex-column-item"], ["hidden", ""], [1, "grid-item-inner", 3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (o, n) { o & 1 && (t.\u0275\u0275elementStart(0, "div", 0), t.\u0275\u0275template(1, It, 3, 8, "div", 1), t.\u0275\u0275elementEnd()), o & 2 && (t.\u0275\u0275styleProp("flex-direction", n.direction)("gap", n.layoutGap), t.\u0275\u0275advance(), t.\u0275\u0275property("ngForOf", t.\u0275\u0275pureFunction0(5, Z).constructor(n.totalRows))); }, dependencies: [u.NgForOf, u.NgTemplateOutlet, u.NgStyle], styles: ["[_nghost-%COMP%]{display:block;width:100%;height:100%}.layout-host[_ngcontent-%COMP%]{display:flex;box-sizing:border-box;width:100%;height:100%;min-width:0;min-height:0}.flex-row-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;box-sizing:border-box;width:100%;min-height:0}.layout-row-container[_ngcontent-%COMP%]{display:flex;box-sizing:border-box;width:100%;height:100%;overflow:hidden}.flex-column-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;box-sizing:border-box;min-width:0;position:relative}.grid-item-inner[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;display:flex;flex-direction:column}p[hidden][_ngcontent-%COMP%]{display:none}"] }); }
} return i; })(), B = (() => { class i {
    get grid() { return this.dashboard; }
    get cumulativeHeight() { let e = []; return this.heightsMatrix.forEach(o => { e.push(this.itemHeights.reduce((n, r) => r > n ? r : n)); }), e.reduce((o, n) => o + n); }
    get heightsMatrix() { return this.dashboard.reduce((e, o, n) => (e[o.y] = e[o.y] !== void 0 ? [...e[o.y], this.itemHeights[n]] : [this.itemHeights[n]], e), []); }
    constructor() { this.itemAdded = new C, this.itemRemoved = new C, this.dashboard = [], this.displayMainControls = !0, this.displayItemHeader = !0, this.itemHeights = [], this.rows = 0; }
    ngOnInit() { }
    removeItem(e) { this.dashboard.splice(e, 1), this.itemHeights.splice(e, 1), this.itemRemoved.emit(e); }
    addColumn() { console.log("add column grid"), this.dashboard.push({ cols: 1, rows: 1, y: 0, x: this.dashboard.length }), this.itemAdded.emit(); }
    addRow() { this.dashboard.push({ cols: 1, rows: 1, y: this.rows++, x: 0 }), this.itemAdded.emit(); }
    setItemContentHeight(e, o) { this.itemHeights[e] = o + (this.displayItemHeader ? this.itemHeaderHeight(e) : 0), this.refreshGridHeight(); }
    refreshGridHeight() { this.gridHeight = this.cumulativeHeight + this.gridster.rows * 16; }
    itemHeaderHeight(e) { return this.itemHeaders.find((o, n) => n === e).nativeElement.offsetHeight; }
    static { this.\u0275fac = function (o) { return new (o || i); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-grid-layout"]], contentQueries: function (o, n, r) { if (o & 1 && (t.\u0275\u0275contentQuery(r, N, 5), t.\u0275\u0275contentQuery(r, P, 5), t.\u0275\u0275contentQuery(r, z, 5)), o & 2) {
            let l;
            t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.gridItemActionsTmpl = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.innerGridItemTmpl = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.extraActionsTmpl = l.first);
        } }, viewQuery: function (o, n) { if (o & 1 && (t.\u0275\u0275viewQuery(pt, 5), t.\u0275\u0275viewQuery(tt, 5), t.\u0275\u0275viewQuery(et, 5)), o & 2) {
            let r;
            t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (n.gridster = r.first), t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (n.mainControls = r.first), t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (n.itemHeaders = r);
        } }, inputs: { dashboard: "dashboard", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", options: "options" }, outputs: { itemAdded: "itemAdded", itemRemoved: "itemRemoved" }, standalone: !1, decls: 11, vars: 6, consts: [["mainControls", ""], ["itemHeader", ""], [1, "layout-wrapper"], [1, "main-controls", 3, "hidden"], ["type", "button", 3, "mousedown"], [4, "ngTemplateOutlet"], [1, "layout-inner"], [3, "options"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"], ["fxLayout", "column", "fxFill", ""], ["fxFlex", "0 1 auto", 1, "grid-item-header", 3, "hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 1, "delete", 3, "mousedown", "touchstart"], ["fxFlex", "", 1, "grid-item-inner"]], template: function (o, n) { if (o & 1) {
            let r = t.\u0275\u0275getCurrentView();
            t.\u0275\u0275elementStart(0, "div", 2)(1, "div", 3, 0)(3, "button", 4), t.\u0275\u0275listener("mousedown", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.addColumn()); }), t.\u0275\u0275text(4, "Add Column"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(5, "button", 4), t.\u0275\u0275listener("mousedown", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.addRow()); }), t.\u0275\u0275text(6, "Add Row"), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(7, Mt, 1, 0, "ng-container", 5), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(8, "div", 6)(9, "gridster", 7), t.\u0275\u0275template(10, Pt, 9, 10, "gridster-item", 8), t.\u0275\u0275elementEnd()()();
        } o & 2 && (t.\u0275\u0275advance(), t.\u0275\u0275property("hidden", !n.displayMainControls), t.\u0275\u0275advance(6), t.\u0275\u0275property("ngTemplateOutlet", n.extraActionsTmpl), t.\u0275\u0275advance(), t.\u0275\u0275styleProp("height", n.gridHeight, "px"), t.\u0275\u0275advance(), t.\u0275\u0275property("options", n.options), t.\u0275\u0275advance(), t.\u0275\u0275property("ngForOf", n.dashboard)); }, dependencies: [u.NgForOf, u.NgTemplateOutlet, V.GridsterComponent, V.GridsterItemComponent], styles: [".layout-wrapper[_ngcontent-%COMP%], .layout-inner[_ngcontent-%COMP%]{height:100%}.grid-item-header[_ngcontent-%COMP%]{background-color:#ccc;padding:.5em}button.delete[_ngcontent-%COMP%]{float:right}.main-controls[_ngcontent-%COMP%]{background-color:#fff;padding:.5em}"] }); }
} return i; })(), nt = (() => { class i {
    constructor() { this.displayMainControls = !0, this.displayItemHeader = !0, this.nested = !1; }
    ngOnInit() { }
    static { this.\u0275fac = function (o) { return new (o || i); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-gridless-layout"]], contentQueries: function (o, n, r) { if (o & 1 && (t.\u0275\u0275contentQuery(r, N, 5), t.\u0275\u0275contentQuery(r, P, 5), t.\u0275\u0275contentQuery(r, z, 5)), o & 2) {
            let l;
            t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.gridItemActionsTmpl = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.innerGridItemTmpl = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.extraActionsTmpl = l.first);
        } }, hostVars: 2, hostBindings: function (o, n) { o & 2 && t.\u0275\u0275classProp("is-nested", n.nested); }, inputs: { displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", nested: "nested" }, standalone: !1, decls: 11, vars: 9, consts: [["mainControls", ""], ["itemHeader", ""], [1, "layout-wrapper"], [1, "main-controls", 3, "hidden"], [4, "ngTemplateOutlet"], [1, "layout-inner"], ["fxLayout", "column", "fxFill", ""], ["fxFlex", "0 1 auto", 1, "grid-item-header", 3, "hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["fxFlex", "", 1, "grid-item-inner"]], template: function (o, n) { o & 1 && (t.\u0275\u0275elementStart(0, "div", 2)(1, "div", 3, 0), t.\u0275\u0275template(3, kt, 1, 0, "ng-container", 4), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "div", 7, 1), t.\u0275\u0275template(8, Ft, 1, 0, "ng-container", 8), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(9, "div", 9), t.\u0275\u0275template(10, Dt, 1, 0, "ng-container", 8), t.\u0275\u0275elementEnd()()()()), o & 2 && (t.\u0275\u0275advance(), t.\u0275\u0275property("hidden", !n.displayMainControls), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", n.extraActionsTmpl), t.\u0275\u0275advance(3), t.\u0275\u0275property("hidden", !n.displayItemHeader), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", n.gridItemActionsTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction0(7, q)), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", n.innerGridItemTmpl)("ngTemplateOutletContext", t.\u0275\u0275pureFunction0(8, q))); }, dependencies: [u.NgTemplateOutlet], styles: [".layout-wrapper[_ngcontent-%COMP%], .layout-inner[_ngcontent-%COMP%]{height:100%}.is-nested[_nghost-%COMP%]   .layout-wrapper[_ngcontent-%COMP%]{padding:0 .25em;border:1px solid #ccc}.main-controls[_ngcontent-%COMP%]{display:flex;padding:0;align-items:baseline;border-bottom:1px solid #ccc;margin-bottom:.25em}.grid-item-header[_ngcontent-%COMP%]{padding:0;display:flex;align-items:baseline}"] }); }
} return i; })(), Sn = (() => { class i {
    get attributes() { return this.layout.settings.has(this.type) ? this.layout.settings.get(this.type) : []; }
    constructor(e) { this.fb = e, this.settingValues = [], this.layoutForm = this.fb.group({ settings: this.fb.control("") }), this.onTouched = () => { }; }
    ngOnInit() { }
    writeValue(e) { e && this.layoutForm.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.layoutForm.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.layoutForm.disable() : this.layoutForm.enable(); }
    validate(e) { return this.layoutForm.valid ? null : { invalidForm: { valid: !1, message: "layout is invalid" } }; }
    static { this.\u0275fac = function (o) { return new (o || i)(t.\u0275\u0275directiveInject(d.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["druid-layout-form"]], inputs: { layout: "layout", type: "type", settingValues: "settingValues" }, standalone: !1, features: [t.\u0275\u0275ProvidersFeature([{ provide: at, useExisting: j(() => i), multi: !0 }, { provide: lt, useExisting: j(() => i), multi: !0 }])], decls: 2, vars: 3, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "attributes", "attributeValues"]], template: function (o, n) { o & 1 && (t.\u0275\u0275elementStart(0, "div", 0), t.\u0275\u0275element(1, "classifieds-ui-attributes-builder", 1), t.\u0275\u0275elementEnd()), o & 2 && (t.\u0275\u0275property("formGroup", n.layoutForm), t.\u0275\u0275advance(), t.\u0275\u0275property("attributes", n.attributes)("attributeValues", n.settingValues)); }, dependencies: [d.NgControlStatus, d.NgControlStatusGroup, d.FormGroupDirective, d.FormControlName, w.AttributesBuilderComponent], encapsulation: 2 }); }
} return i; })(), Tn = (() => { class i {
    get attrValues() { return this.dialogForm.get("layout").value === "" ? this.settingValues : this.dialogForm.get("layout").value.settings.map(e => new T(e)); }
    constructor(e, o, n, r) { this.data = e, this.dialogRef = o, this.valueComputerService = n, this.fb = r, this.settingValues = [], this.dialogForm = this.fb.group({ layout: this.fb.control("") }); }
    ngOnInit() { this.layout = this.data.layout, this.type = this.data.type, this.settingValues = this.data.settingValues; }
    submit() { console.log(this.attrValues); let e = this.valueComputerService.compute(this.attrValues); this.dialogRef.close(e); }
    static { this.\u0275fac = function (o) { return new (o || i)(t.\u0275\u0275directiveInject(bt), t.\u0275\u0275directiveInject(_.MatDialogRef), t.\u0275\u0275directiveInject(w.ValueComputerService), t.\u0275\u0275directiveInject(d.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["druid-layout-dialog"]], standalone: !1, decls: 6, vars: 5, consts: [[1, "layout-form", 3, "ngSubmit", "formGroup"], ["formControlName", "layout", 3, "layout", "type", "settingValues"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (o, n) { o & 1 && (t.\u0275\u0275elementStart(0, "form", 0), t.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), t.\u0275\u0275elementStart(1, "mat-dialog-content"), t.\u0275\u0275element(2, "druid-layout-form", 1), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(3, "mat-dialog-actions")(4, "button", 2), t.\u0275\u0275text(5, "Save"), t.\u0275\u0275elementEnd()()()), o & 2 && (t.\u0275\u0275property("formGroup", n.dialogForm), t.\u0275\u0275advance(2), t.\u0275\u0275property("layout", n.layout)("type", n.type)("settingValues", n.settingValues), t.\u0275\u0275advance(2), t.\u0275\u0275property("disabled", !n.dialogForm.valid)); }, dependencies: [d.\u0275NgNoValidate, d.NgControlStatus, d.NgControlStatusGroup, d.FormGroupDirective, d.FormControlName, b.MatButton, _.MatDialogClose, _.MatDialogActions, _.MatDialogContent, Sn], encapsulation: 2 }); }
} return i; })(), it = (() => { class i extends vt {
    constructor(e, o) { super(e, o); }
    pluginDef() { return H(new St({ name: "layout" })); }
    static { this.\u0275fac = function (o) { return new (o || i)(t.\u0275\u0275inject(K.PluginConfigurationManager), t.\u0275\u0275inject(U.ModuleLoaderService)); }; }
    static { this.\u0275prov = t.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), En = (() => { class i {
    constructor(e, o, n) { this.el = e, this.dialog = o, this.lpm = n, this.itemAdded = new C, this.itemRemoved = new C, this.dashboard = [], this.displayMainControls = !0, this.displayItemHeader = !0, this.nested = !1, this.layoutSettingChange = new C, this.rowSettings = [], this.rowSettingsChange = new C, this.columnSettings = [], this.columnSettingsChange = new C, this.sizes = []; }
    get totalRows() { return this.dashboard.length ? Math.max(...this.dashboard.map(e => e.y)) + 1 : 0; }
    totalColumns(e) { return this.dashboard.filter(o => o.y === e).length; }
    arrayFromNumber(e) { return Array.from({ length: e }); }
    ngOnInit() { this.rebuildSizeMatrix(), this.ensureInitialSettings(); }
    ngAfterViewInit() { }
    rebuildSizeMatrix() { this.sizes = []; for (let e = 0; e < this.totalRows; e++) {
        let o = this.dashboard.filter(n => n.y === e).sort((n, r) => n.x - r.x);
        this.sizes[e] = o.map(n => n.cols);
    } }
    ensureInitialSettings() { this.rowSettings.length || (this.rowSettings = Array.from({ length: this.totalRows }, () => new g), this.rowSettingsChange.emit(this.rowSettings)), this.columnSettings.length || (this.columnSettings = this.dashboard.map(() => new g), this.columnSettingsChange.emit(this.columnSettings)); }
    addRow() { let e = this.totalRows; this.rowSettings.push(new g), this.rowSettingsChange.emit(this.rowSettings), this.sizes[e] = [], setTimeout(() => this.addColumn(e), 0); }
    addColumn(e) { let o = this.dashboard.filter(l => l.y === e), n = o.length + 1, r = 100 / n; o.forEach(l => l.cols = r), this.dashboard.push({ rows: 1, y: e, x: o.length, cols: r, weight: o.length }), this.sizes[e] = Array.from({ length: n }, () => r), this.dashboard = [...this.dashboard], this.itemAdded.emit(); }
    removeColumn(e, o) { let n = this.itemIndex(e, o); if (n < 0)
        return; this.dashboard.splice(n, 1), this.itemRemoved.emit(n); let r = this.dashboard.filter(s => s.y === e).sort((s, c) => s.x - c.x); if (!r.length) {
        this.removeRow(e);
        return;
    } let l = r.reduce((s, c) => s + c.cols, 0); r.forEach((s, c) => { s.cols = s.cols / l * 100, s.x = c; }), this.finalizePercentages(r), this.sizes[e] = r.map(s => s.cols), this.dashboard = [...this.dashboard]; }
    removeColumn2(e) { let o = this.dashboard[e]; if (!o)
        return; let n = o.y; this.dashboard.splice(e, 1), this.itemRemoved.emit(e); let r = this.dashboard.filter(s => s.y === n).sort((s, c) => s.x - c.x); if (!r.length) {
        this.removeRow(n);
        return;
    } let l = r.reduce((s, c) => s + c.cols, 0); r.forEach((s, c) => { s.cols = s.cols / l * 100, s.x = c; }), this.finalizePercentages(r), this.sizes[n] = r.map(s => s.cols), this.dashboard = [...this.dashboard]; }
    removeRow(e) { this.dashboard = this.dashboard.filter(o => o.y !== e), this.dashboard.forEach(o => { o.y > e && o.y--; }), this.rowSettings.splice(e, 1), this.rowSettingsChange.emit(this.rowSettings), this.rebuildSizeMatrix(); }
    dragEnd(e, o) { let n = o.sizes, r = this.dashboard.filter(l => l.y === e).sort((l, s) => l.x - s.x); r.forEach((l, s) => l.cols = n[s]), this.finalizePercentages(r), this.sizes[e] = r.map(l => l.cols), this.dashboard = [...this.dashboard], console.log("dashboard", this.dashboard); }
    itemIndex(e, o) { return this.dashboard.findIndex(n => n.y === e && n.x === o); }
    itemSize(e, o) { return this.dashboard.filter(r => r.y === e).sort((r, l) => r.x - l.x)[o]?.cols ?? 0; }
    finalizePercentages(e) { this.normalizeToWholePercentages(e); }
    normalizeToWholePercentages(e) { if (!e.length)
        return; let o = e.map(r => Math.round(r.cols)), n = o.reduce((r, l) => r + l, 0); n !== 100 && (o[o.length - 1] += 100 - n), o.forEach((r, l) => e[l].cols = r); }
    resetGutter() { this.el.nativeElement.querySelectorAll(".as-split-gutter").forEach(e => e.style.height = "auto"); }
    settingValues(e, o) { switch (e) {
        case "column": return this.columnSettings[o].settings;
        case "row": return this.rowSettings[o].settings;
        case "global": return this.layoutSetting.settings;
        default: return [];
    } }
    layoutSettings(e, o) { this.lpm.getPlugin("split").pipe(xt(n => this.dialog.open(Tn, { data: { layout: n, type: e, settingValues: this.settingValues(e, o) } }).afterClosed()), wt(n => !!n)).subscribe(n => { switch (e) {
        case "column":
            this.columnSettings = this.columnSettings.map((r, l) => l === o ? new g({ settings: n.map(s => new T(s)) }) : new g(r)), this.columnSettingsChange.emit(this.columnSettings);
            break;
        case "row":
            this.rowSettings = this.rowSettings.map((r, l) => l === o ? new g({ settings: n.map(s => new T(s)) }) : new g(r)), this.rowSettingsChange.emit(this.rowSettings);
            break;
        case "global":
            this.layoutSetting = new g({ settings: n.map(r => new T(r)) }), this.layoutSettingChange.emit(this.layoutSetting);
            break;
    } }); }
    static { this.\u0275fac = function (o) { return new (o || i)(t.\u0275\u0275directiveInject(t.ElementRef), t.\u0275\u0275directiveInject(_.MatDialog), t.\u0275\u0275directiveInject(it)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-split-layout"]], contentQueries: function (o, n, r) { if (o & 1 && (t.\u0275\u0275contentQuery(r, N, 5), t.\u0275\u0275contentQuery(r, P, 5), t.\u0275\u0275contentQuery(r, z, 5)), o & 2) {
            let l;
            t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.gridItemActionsTmpl = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.innerGridItemTmpl = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.extraActionsTmpl = l.first);
        } }, viewQuery: function (o, n) { if (o & 1 && (t.\u0275\u0275viewQuery(tt, 5), t.\u0275\u0275viewQuery(et, 5)), o & 2) {
            let r;
            t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (n.mainControls = r.first), t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (n.itemHeaders = r);
        } }, hostVars: 2, hostBindings: function (o, n) { o & 2 && t.\u0275\u0275classProp("is-nested", n.nested); }, inputs: { dashboard: "dashboard", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", nested: "nested", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings" }, outputs: { itemAdded: "itemAdded", itemRemoved: "itemRemoved", layoutSettingChange: "layoutSettingChange", rowSettingsChange: "rowSettingsChange", columnSettingsChange: "columnSettingsChange" }, standalone: !1, decls: 6, vars: 3, consts: [["mainControls", ""], ["rowActions", "matMenu"], ["itemHeader", ""], [1, "layout-wrapper"], [1, "main-controls", 3, "hidden"], [4, "ngTemplateOutlet"], [1, "layout-inner"], ["class", "rows-wrapper", 4, "ngFor", "ngForOf"], [1, "rows-wrapper"], [1, "row-controls"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "type", "button", 3, "mousedown"], ["mat-menu-item", "", "type", "button", 1, "remove-row", 3, "mousedown"], [1, "rows-inner"], ["unit", "percent", "direction", "horizontal", 3, "dragEnd", 4, "ngIf"], ["unit", "percent", "direction", "horizontal", 3, "dragEnd"], [3, "size", 4, "ngFor", "ngForOf"], [3, "size"], [1, "grid-item-header", 3, "hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "grid-item-inner"]], template: function (o, n) { o & 1 && (t.\u0275\u0275elementStart(0, "div", 3)(1, "div", 4, 0), t.\u0275\u0275template(3, Rt, 1, 0, "ng-container", 5), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(4, "div", 6), t.\u0275\u0275template(5, Qt, 15, 2, "div", 7), t.\u0275\u0275elementEnd()()), o & 2 && (t.\u0275\u0275advance(), t.\u0275\u0275property("hidden", !n.displayMainControls), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngTemplateOutlet", n.extraActionsTmpl), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngForOf", n.arrayFromNumber(n.totalRows))); }, dependencies: [u.NgForOf, u.NgIf, u.NgTemplateOutlet, b.MatButton, S.MatIcon, m.MatMenu, m.MatMenuItem, m.MatMenuTrigger, L.SplitComponent, L.SplitAreaComponent], styles: [".layout-wrapper[_ngcontent-%COMP%], .layout-inner[_ngcontent-%COMP%]{height:100%}.grid-item-header[_ngcontent-%COMP%]{padding:0;display:flex;align-items:baseline}button.delete[_ngcontent-%COMP%]{float:right}.main-controls[_ngcontent-%COMP%]{display:flex;padding:0;align-items:baseline}.rows-inner[_ngcontent-%COMP%]{height:auto;background-color:#fff}.row-controls[_ngcontent-%COMP%]{background-color:gray;padding:0}.remove-row[_ngcontent-%COMP%]{float:right}.is-nested[_nghost-%COMP%]   .layout-wrapper[_ngcontent-%COMP%]{padding:0 .25em;border:1px solid #ccc}.mat-mdc-menu-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0;color:#fff}.mat-mdc-menu-trigger[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{transform:rotate(-90deg)}"] }); }
} return i; })(), E = class extends Tt {
    constructor(a) { if (super(a), this.settings = new Map, a.settings) {
        let e = [];
        this.renderer = a.renderer, this.editor = a.editor, a.settings.forEach((o, n) => { e.push([n, o.map(r => new y(r))]); }), this.settings = new Map(e);
    } }
}, ot = (() => { class i {
    constructor(e, o, n, r) { this.siteName = e, this.authFacade = o, this.controlContainer = n, this.close = new C, this.panelPageListItemsService = r.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { this.panelPageListItems$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`), this.isAuthenticated$ = this.authFacade.getUser$.pipe(D(e => !!e)); }
    login() { this.authFacade.login(); }
    static { this.\u0275fac = function (o) { return new (o || i)(t.\u0275\u0275directiveInject(W), t.\u0275\u0275directiveInject(A.AuthFacade), t.\u0275\u0275directiveInject(d.ControlContainer), t.\u0275\u0275directiveInject($.EntityServices)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["druid-layout-sidenav"]], outputs: { close: "close" }, standalone: !1, ngContentSelectors: Ht, decls: 12, vars: 6, consts: [[1, "close-wrapper"], [3, "click"], ["type", "button", "class", "login", "mat-button", "", 3, "click", 4, "ngIf"], [1, "viewport-container"], ["appendOnly", "", "itemSize", "48", 1, "viewport"], ["class", "pp-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["type", "button", "mat-button", "", 1, "login", 3, "click"], [1, "pp-item"], [3, "routerLink"]], template: function (o, n) { o & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275elementStart(0, "div", 0)(1, "mat-icon", 1), t.\u0275\u0275listener("click", function () { return n.close.emit(); }), t.\u0275\u0275text(2, "close"), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(3, qt, 2, 0, "button", 2), t.\u0275\u0275pipe(4, "async"), t.\u0275\u0275elementEnd(), t.\u0275\u0275element(5, "mat-divider"), t.\u0275\u0275projection(6), t.\u0275\u0275element(7, "mat-divider"), t.\u0275\u0275elementStart(8, "div", 3)(9, "cdk-virtual-scroll-viewport", 4), t.\u0275\u0275template(10, Bt, 3, 4, "div", 5), t.\u0275\u0275pipe(11, "async"), t.\u0275\u0275elementEnd()()), o & 2 && (t.\u0275\u0275advance(3), t.\u0275\u0275property("ngIf", !t.\u0275\u0275pipeBind1(4, 2, n.isAuthenticated$)), t.\u0275\u0275advance(7), t.\u0275\u0275property("cdkVirtualForOf", t.\u0275\u0275pipeBind1(11, 4, n.panelPageListItems$))); }, dependencies: [u.NgIf, X.RouterLink, b.MatButton, Y.MatDivider, S.MatIcon, v.CdkFixedSizeVirtualScroll, v.CdkVirtualForOf, v.CdkVirtualScrollViewport, u.AsyncPipe], styles: ["[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}.close-wrapper[_ngcontent-%COMP%]{padding:16px 16px 0;position:relative}.login[_ngcontent-%COMP%]{position:absolute;top:7px;right:5px}.pp-item[_ngcontent-%COMP%]{line-height:48px}.viewport[_ngcontent-%COMP%]{height:100%;width:300px}.viewport-container[_ngcontent-%COMP%]{flex:1;padding:0 0 0 16px;box-sizing:border-box}"] }); }
} return i; })(), Ln = (() => { class i extends R {
    constructor(e, o, n, r) { super(n), this.siteName = e, this.authFacade = o, this.controlContainer = n, this.panelPageListItemsService = r.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { this.panelPageListItems$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`), this.isAuthenticated$ = this.authFacade.getUser$.pipe(D(e => !!e)); }
    login() { this.authFacade.login(); }
    static { this.\u0275fac = function (o) { return new (o || i)(t.\u0275\u0275directiveInject(W), t.\u0275\u0275directiveInject(A.AuthFacade), t.\u0275\u0275directiveInject(d.ControlContainer), t.\u0275\u0275directiveInject($.EntityServices)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-gridless-layout-editor"]], standalone: !1, features: [t.\u0275\u0275InheritDefinitionFeature], decls: 42, vars: 19, consts: [["drawer", ""], ["extraActions", ""], ["gridItemActions", ""], ["innerGridItem", ""], ["topActions", "matMenu"], ["panes", ""], ["autosize", "", 3, "hasBackdrop"], ["fixedInViewport", "", "mode", "over"], [3, "close"], [4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "mousedown", "touchstart"], ["cdkDropListGroup", "", 3, "formGroup", "nested"], ["mat-menu-item", "", "type", "submit", 3, "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "mousedown", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "mousedown", "touchstart", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "click"], ["type", "button", "mat-menu-item", "", 3, "click"], ["type", "button", "mat-menu-item", "", 3, "mousedown"], ["mat-menu-item", "", "type", "button", 3, "mousedown", "touchstart"], ["mat-button", "", "type", "button", "class", "drawer-trigger", 3, "click", 4, "ngIf"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor", 4, "ngIf"], ["class", "style-title", 4, "ngIf"], ["class", "spacer", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "display-type"], ["required", "", "formControlName", "displayType"], ["value", "page"], ["value", "form"], ["value", "json"], [1, "layout-type"], ["required", "", "formControlName", "layoutType"], ["value", "grid"], ["value", "gridless"], ["value", "split"], ["class", "brand", 4, "ngIf"], ["mat-button", "", "type", "button", 1, "drawer-trigger", 3, "click"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor"], [1, "style-title"], [1, "spacer"], [1, "brand"], ["cdkDropList", "", 1, "panel-dropzone", 3, "change", "cdkDropListDropped", "cdkDropListData", "multiple", "disableClick"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-menu-item", "", "type", "submit", 3, "click"]], template: function (o, n) { if (o & 1) {
            let r = t.\u0275\u0275getCurrentView();
            t.\u0275\u0275elementStart(0, "mat-sidenav-container", 6)(1, "mat-sidenav", 7, 0)(3, "druid-layout-sidenav", 8), t.\u0275\u0275listener("close", function () { t.\u0275\u0275restoreView(r); let s = t.\u0275\u0275reference(2); return t.\u0275\u0275resetView(s.toggle()); }), t.\u0275\u0275elementStart(4, "nav")(5, "ul"), t.\u0275\u0275template(6, Ut, 3, 0, "li", 9)(7, Wt, 3, 0, "li", 9)(8, Jt, 3, 0, "li", 9)(9, Kt, 3, 0, "li", 9)(10, Xt, 3, 0, "li", 9)(11, Yt, 3, 0, "li", 9), t.\u0275\u0275elementStart(12, "li")(13, "button", 10), t.\u0275\u0275listener("mousedown", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.addContent(0)); })("touchstart", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.addContent(0)); }), t.\u0275\u0275text(14, "Add Content"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(15, "li")(16, "button", 10), t.\u0275\u0275listener("mousedown", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.editPanelProps(0)); })("touchstart", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.editPanelProps(0)); }), t.\u0275\u0275text(17, "Props"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275template(18, Zt, 3, 0, "li", 9)(19, te, 3, 0, "li", 9), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275elementStart(20, "mat-sidenav-content")(21, "classifieds-ui-gridless-layout", 11), t.\u0275\u0275template(22, ue, 26, 7, "ng-template", null, 1, t.\u0275\u0275templateRefExtractor)(24, pe, 1, 1, "ng-template", null, 2, t.\u0275\u0275templateRefExtractor)(26, ge, 4, 4, "ng-template", null, 3, t.\u0275\u0275templateRefExtractor), t.\u0275\u0275elementEnd()()(), t.\u0275\u0275elementStart(28, "mat-menu", null, 4), t.\u0275\u0275template(30, fe, 2, 0, "button", 12)(31, ye, 2, 0, "button", 13)(32, Ce, 2, 0, "button", 13)(33, he, 2, 0, "button", 13)(34, xe, 2, 0, "button", 14)(35, we, 2, 0, "button", 14), t.\u0275\u0275elementStart(36, "button", 10), t.\u0275\u0275listener("mousedown", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.addContent(0)); })("touchstart", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.addContent(0)); }), t.\u0275\u0275text(37, "Add Content"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(38, "button", 10), t.\u0275\u0275listener("mousedown", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.editPanelProps(0)); })("touchstart", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.editPanelProps(0)); }), t.\u0275\u0275text(39, "Props"), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(40, be, 2, 0, "button", 15)(41, ve, 2, 0, "button", 15), t.\u0275\u0275elementEnd();
        } o & 2 && (t.\u0275\u0275property("hasBackdrop", !1), t.\u0275\u0275advance(6), t.\u0275\u0275property("ngIf", n.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.savable || n.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.savable), t.\u0275\u0275advance(7), t.\u0275\u0275property("ngIf", !n.editor.hasPanelStyle(0)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.editor.hasPanelStyle(0)), t.\u0275\u0275advance(2), t.\u0275\u0275property("formGroup", n.controlContainer.control)("nested", n.nested), t.\u0275\u0275advance(9), t.\u0275\u0275property("ngIf", n.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.savable || n.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.savable), t.\u0275\u0275advance(5), t.\u0275\u0275property("ngIf", !n.editor.hasPanelStyle(0)), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.editor.hasPanelStyle(0))); }, dependencies: [u.NgForOf, u.NgIf, u.NgTemplateOutlet, d.NgControlStatus, d.NgControlStatusGroup, d.RequiredValidator, d.FormGroupDirective, d.FormControlName, p.CdkDropList, p.CdkDropListGroup, p.CdkDrag, M.MatOption, b.MatButton, S.MatIcon, O.MatFormField, m.MatMenu, m.MatMenuItem, m.MatMenuTrigger, G.MatSelect, f.MatSidenav, f.MatSidenavContainer, f.MatSidenavContent, I.NgxDropzoneComponent, nt, ot], styles: [".layout-type[_ngcontent-%COMP%]     .mat-form-field-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}.layout-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper{display:none}.layout-type[_ngcontent-%COMP%]     .mat-form-field-infix, .display-type[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:none;padding:0;margin:0}.layout-type[_ngcontent-%COMP%]     .mat-select-value, .display-type[_ngcontent-%COMP%]     .mat-select-value{text-align:right}.layout-type[_ngcontent-%COMP%]     .mat-form-field-underline, .display-type[_ngcontent-%COMP%]     .mat-form-field-underline{display:none}.layout-type[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper, .display-type[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-menu-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}.cdk-drag[_ngcontent-%COMP%]{padding:.25em}.brand[_ngcontent-%COMP%]{font-family:sans-serif;text-align:right;flex:1;letter-spacing:.2em;font-weight:lighter;color:#c82913}.spacer[_ngcontent-%COMP%]{flex:1}.style-title[_ngcontent-%COMP%]{font-family:sans-serif;font-weight:500;text-transform:lowercase;color:#000}.mat-icon[_ngcontent-%COMP%]{color:#000}.drawer-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}"] }); }
} return i; })(), Vn = (() => { class i extends J {
    constructor(e) { super(e), this.controlContainer = e; }
    ngOnInit() { }
    static { this.\u0275fac = function (o) { return new (o || i)(t.\u0275\u0275directiveInject(d.ControlContainer, 8)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-gridless-layout-renderer"]], standalone: !1, features: [t.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [["innerGridItem", ""], [3, "displayMainControls", "displayItemHeader"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (o, n) { o & 1 && (t.\u0275\u0275elementStart(0, "classifieds-ui-gridless-layout", 1), t.\u0275\u0275template(1, Te, 1, 4, "ng-template", null, 0, t.\u0275\u0275templateRefExtractor), t.\u0275\u0275elementEnd()), o & 2 && t.\u0275\u0275property("displayMainControls", n.displayMainControls)("displayItemHeader", n.displayItemHeader); }, dependencies: [u.NgTemplateOutlet, nt], styles: ["[_nghost-%COMP%]{height:100%}"] }); }
} return i; })(), In = (() => { class i extends R {
    get gridItems() { return this.dashboard.map((e, o) => F(k({}, e), { cols: Math.floor(e.cols), weight: o })); }
    constructor(e) { super(e), this.controlContainer = e; }
    ngOnInit() { }
    static { this.\u0275fac = function (o) { return new (o || i)(t.\u0275\u0275directiveInject(d.ControlContainer)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-split-layout-editor"]], viewQuery: function (o, n) { if (o & 1 && t.\u0275\u0275viewQuery(Ee, 5), o & 2) {
            let r;
            t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (n.splitLayout = r.first);
        } }, standalone: !1, features: [t.\u0275\u0275InheritDefinitionFeature], decls: 36, vars: 21, consts: [["drawer", ""], ["splitLayout", ""], ["extraActions", ""], ["gridItemActions", ""], ["innerGridItem", ""], ["topActions", "matMenu"], ["panelActions", "matMenu"], ["panes", ""], ["autosize", "", 3, "hasBackdrop"], ["fixedInViewport", "", "mode", "over"], [3, "close"], [4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "click"], ["cdkDropListGroup", "", 3, "itemAdded", "itemRemoved", "layoutSettingChange", "rowSettingsChange", "columnSettingsChange", "nested", "formGroup", "dashboard", "layoutSetting", "rowSettings", "columnSettings"], ["mat-menu-item", "", "type", "submit", 3, "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "mousedown", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "click"], ["type", "button", "mat-menu-item", "", 3, "mousedown"], ["mat-button", "", "type", "button", "class", "drawer-trigger", 3, "click", 4, "ngIf"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor", 4, "ngIf"], ["class", "spacer", 4, "ngIf"], [1, "display-type"], ["required", "", "formControlName", "displayType"], ["value", "page"], ["value", "form"], ["value", "json"], [1, "layout-type"], ["required", "", "formControlName", "layoutType"], ["value", "gridless"], ["value", "split"], [4, "ngTemplateOutlet"], ["class", "brand", 4, "ngIf"], ["mat-button", "", "type", "button", 1, "drawer-trigger", 3, "click"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor"], [1, "spacer"], [1, "brand"], ["mat-button", "", "type", "button", 1, "panel-actions-btn", 3, "matMenuTriggerFor"], ["type", "button", "mat-menu-item", "", 3, "mousedown", "touchstart"], ["mat-menu-item", "", "type", "button", 3, "mousedown", "touchstart", 4, "ngIf"], ["type", "button", "class", "delete", "mat-menu-item", "", 3, "mousedown", "touchstart", 4, "ngIf"], ["class", "style-title", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "mousedown", "touchstart"], ["type", "button", "mat-menu-item", "", 1, "delete", 3, "mousedown", "touchstart"], [1, "style-title"], ["cdkDropList", "", 1, "panel-dropzone", 3, "change", "cdkDropListDropped", "cdkDropListData", "multiple", "disableClick"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-menu-item", "", "type", "submit", 3, "click"]], template: function (o, n) { if (o & 1) {
            let r = t.\u0275\u0275getCurrentView();
            t.\u0275\u0275elementStart(0, "mat-sidenav-container", 8)(1, "mat-sidenav", 9, 0)(3, "druid-layout-sidenav", 10), t.\u0275\u0275listener("close", function () { t.\u0275\u0275restoreView(r); let s = t.\u0275\u0275reference(2); return t.\u0275\u0275resetView(s.toggle()); }), t.\u0275\u0275elementStart(4, "nav")(5, "ul"), t.\u0275\u0275template(6, Le, 3, 0, "li", 11)(7, Ve, 3, 0, "li", 11), t.\u0275\u0275elementStart(8, "li")(9, "button", 12), t.\u0275\u0275listener("click", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.onPropertiesClick()); }), t.\u0275\u0275text(10, "Props"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275template(11, Ie, 3, 0, "li", 11)(12, Me, 3, 0, "li", 11)(13, Oe, 3, 0, "li", 11)(14, Ge, 3, 0, "li", 11)(15, Pe, 3, 0, "li", 11), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275elementStart(16, "mat-sidenav-content")(17, "classifieds-ui-split-layout", 13, 1), t.\u0275\u0275listener("itemAdded", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.onItemAdded()); })("itemRemoved", function (s) { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.onItemRemoved(s)); })("layoutSettingChange", function (s) { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.onLayoutSettingChange(s)); })("rowSettingsChange", function (s) { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.onRowSettingsChange(s)); })("columnSettingsChange", function (s) { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.onColumnSettingsChange(s)); }), t.\u0275\u0275template(19, ze, 23, 6, "ng-template", null, 2, t.\u0275\u0275templateRefExtractor)(21, Ue, 14, 6, "ng-template", null, 3, t.\u0275\u0275templateRefExtractor)(23, Ke, 4, 4, "ng-template", null, 4, t.\u0275\u0275templateRefExtractor), t.\u0275\u0275elementEnd()()(), t.\u0275\u0275elementStart(25, "mat-menu", null, 5), t.\u0275\u0275template(27, Xe, 2, 0, "button", 14)(28, Ye, 2, 0, "button", 15), t.\u0275\u0275elementStart(29, "button", 12), t.\u0275\u0275listener("click", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.onPropertiesClick()); }), t.\u0275\u0275text(30, "Props"), t.\u0275\u0275elementEnd(), t.\u0275\u0275template(31, Ze, 2, 0, "button", 15)(32, tn, 2, 0, "button", 16)(33, en, 2, 0, "button", 15)(34, nn, 2, 0, "button", 15)(35, on, 2, 0, "button", 16), t.\u0275\u0275elementEnd();
        } if (o & 2) {
            let r = t.\u0275\u0275reference(18);
            t.\u0275\u0275property("hasBackdrop", !1), t.\u0275\u0275advance(6), t.\u0275\u0275property("ngIf", n.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", r), t.\u0275\u0275advance(4), t.\u0275\u0275property("ngIf", r), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.nested), t.\u0275\u0275advance(2), t.\u0275\u0275property("nested", n.nested)("formGroup", n.controlContainer.control)("dashboard", n.dashboard)("layoutSetting", n.layoutSetting)("rowSettings", n.rowSettings)("columnSettings", n.columnSettings), t.\u0275\u0275advance(10), t.\u0275\u0275property("ngIf", n.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", r), t.\u0275\u0275advance(3), t.\u0275\u0275property("ngIf", r), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.nested), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.savable), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.nested);
        } }, dependencies: [u.NgForOf, u.NgIf, u.NgTemplateOutlet, d.NgControlStatus, d.NgControlStatusGroup, d.RequiredValidator, d.FormGroupDirective, d.FormControlName, p.CdkDropList, p.CdkDropListGroup, p.CdkDrag, M.MatOption, b.MatButton, S.MatIcon, O.MatFormField, m.MatMenu, m.MatMenuItem, m.MatMenuTrigger, G.MatSelect, f.MatSidenav, f.MatSidenavContainer, f.MatSidenavContent, I.NgxDropzoneComponent, En, ot], styles: [".layout-type[_ngcontent-%COMP%]     .mat-form-field-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}.layout-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper{display:none}.layout-type[_ngcontent-%COMP%]     .mat-form-field-infix, .display-type[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:none;padding:0;margin:0}.layout-type[_ngcontent-%COMP%]     .mat-select-value, .display-type[_ngcontent-%COMP%]     .mat-select-value{text-align:right}.layout-type[_ngcontent-%COMP%]     .mat-form-field-underline, .display-type[_ngcontent-%COMP%]     .mat-form-field-underline{display:none}.layout-type[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper, .display-type[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-menu-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}.cdk-drag[_ngcontent-%COMP%]{padding:.25em}.panel-actions-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{transform:rotate(-90deg)}.brand[_ngcontent-%COMP%]{font-family:sans-serif;text-align:right;flex:1;letter-spacing:.2em;font-weight:lighter;color:#c82913}.spacer[_ngcontent-%COMP%]{flex:1}.style-title[_ngcontent-%COMP%]{font-family:sans-serif;font-weight:500;text-transform:lowercase;color:#000}.drawer-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}"] }); }
} return i; })(), Mn = (() => { class i extends J {
    constructor(e) { super(e), this.controlContainer = e; }
    ngOnInit() { }
    static { this.\u0275fac = function (o) { return new (o || i)(t.\u0275\u0275directiveInject(d.ControlContainer, 8)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-flex-layout-renderer"]], standalone: !1, features: [t.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [["innerGridItem", ""], [3, "dashboard", "layoutSetting", "rowSettings", "columnSettings"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (o, n) { o & 1 && (t.\u0275\u0275elementStart(0, "classifieds-ui-flex-layout", 1), t.\u0275\u0275template(1, an, 1, 4, "ng-template", null, 0, t.\u0275\u0275templateRefExtractor), t.\u0275\u0275elementEnd()), o & 2 && t.\u0275\u0275property("dashboard", n.panelPage == null ? null : n.panelPage.gridItems)("layoutSetting", n.panelPage.layoutSetting)("rowSettings", n.panelPage.rowSettings)("columnSettings", n.columnSettings); }, dependencies: [u.NgTemplateOutlet, vn], encapsulation: 2 }); }
} return i; })(), On = () => { let i = new Map([["row", [new y({ name: "flexGrow", type: h.Text, label: "Flex Grow", required: !1, widget: "text", options: {}, attributes: [] }), new y({ name: "flexShrink", type: h.Text, label: "Flex Shrink", required: !1, widget: "text", options: {}, attributes: [] }), new y({ name: "flexBasis", type: h.Text, label: "Flex Basis", required: !1, widget: "text", options: {}, attributes: [] }), new y({ name: "height", type: h.Text, label: "Height", required: !1, widget: "text", options: {}, attributes: [] }), new y({ name: "direction", type: h.Text, label: "Direction", required: !1, widget: "text", options: {}, attributes: [] })]], ["column", [new y({ name: "height", type: h.Text, label: "Height", required: !1, widget: "text", options: {}, attributes: [] })]], ["global", [new y({ name: "direction", type: h.Text, label: "Direction", required: !1, widget: "text", options: {}, attributes: [] })]]]); return new E({ id: "split", title: "Split", editor: In, renderer: Mn, settings: i }); }, Gn = () => new E({ id: "gridless", title: "Gridless", editor: Ln, renderer: Vn, settings: new Map }), ri = (() => { class i extends R {
    get gridItems() { return this.gridLayout.grid.map((e, o) => F(k({}, e), { weight: o })); }
    constructor(e) { super(e), this.controlContainer = e, this.options = { gridType: _t.Fit, displayGrid: ct.Always, pushItems: !0, draggable: { enabled: !0 }, resizable: { enabled: !0 }, mobileBreakpoint: 0, itemChangeCallback: (o, n) => { }, itemInitCallback: (o, n) => { if (this.nested && o.y !== 0) {
            let r = this.gridLayout.grid.findIndex(l => l.x === o.x && l.y === o.y && l.cols === o.cols && l.rows === o.rows);
            this.editor.panelPanes(r).length === 0 && this.gridLayout.setItemContentHeight(r, 200);
        } } }; }
    ngOnInit() { }
    static { this.\u0275fac = function (o) { return new (o || i)(t.\u0275\u0275directiveInject(d.ControlContainer)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-grid-layout-editor"]], viewQuery: function (o, n) { if (o & 1 && t.\u0275\u0275viewQuery(B, 5), o & 2) {
            let r;
            t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (n.gridLayout = r.first);
        } }, standalone: !1, features: [t.\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 3, consts: [["extraActions", ""], ["gridItemActions", ""], ["innerGridItem", ""], ["panes", ""], ["cdkDropListGroup", "", 3, "itemAdded", "itemRemoved", "formGroup", "options", "dashboard"], ["type", "button", 4, "ngIf"], ["type", "button", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-type"], ["required", "", "formControlName", "layoutType"], ["value", "grid"], ["value", "gridless"], ["value", "split"], ["class", "display-type", 4, "ngIf"], [4, "ngTemplateOutlet"], ["type", "button"], ["type", "button", 3, "click"], [1, "display-type"], ["required", "", "formControlName", "displayType"], ["value", "page"], ["value", "form"], ["type", "button", 3, "mousedown", "touchstart"], ["type", "button", 3, "mousedown", "touchstart", 4, "ngIf"], ["cdkDropList", "", 1, "panel-dropzone", 3, "change", "cdkDropListDropped", "cdkDropListData", "multiple", "disableClick"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (o, n) { if (o & 1) {
            let r = t.\u0275\u0275getCurrentView();
            t.\u0275\u0275elementStart(0, "classifieds-ui-grid-layout", 4), t.\u0275\u0275listener("itemAdded", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.onItemAdded()); })("itemRemoved", function (s) { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(n.editor.onItemRemoved(s)); }), t.\u0275\u0275template(1, gn, 16, 7, "ng-template", null, 0, t.\u0275\u0275templateRefExtractor)(3, hn, 7, 3, "ng-template", null, 1, t.\u0275\u0275templateRefExtractor)(5, bn, 4, 4, "ng-template", null, 2, t.\u0275\u0275templateRefExtractor), t.\u0275\u0275elementEnd();
        } o & 2 && t.\u0275\u0275property("formGroup", n.controlContainer.control)("options", n.options)("dashboard", n.dashboard); }, dependencies: [u.NgForOf, u.NgIf, u.NgTemplateOutlet, d.NgControlStatus, d.NgControlStatusGroup, d.RequiredValidator, d.FormGroupDirective, d.FormControlName, p.CdkDropList, p.CdkDropListGroup, p.CdkDrag, M.MatOption, O.MatFormField, G.MatSelect, I.NgxDropzoneComponent, B], styles: [".layout-type[_ngcontent-%COMP%], .display-type[_ngcontent-%COMP%]{float:right}[_nghost-%COMP%]     .main-controls{background-color:#ccc}[_nghost-%COMP%]     .layout-inner{background-color:#ccc;padding:.75em}[_nghost-%COMP%]     .editable-pane-wrapper{border:none;margin-bottom:0}[_nghost-%COMP%]     .pane-header{background-color:#fff}[_nghost-%COMP%]     .nested-panel-wrapper{padding:.75em;margin-bottom:0}"] }); }
} return i; })(), ai = (() => { class i {
    constructor(e) { [On(), Gn()].forEach(o => { e.register(o); }); }
    static { this.\u0275fac = function (o) { return new (o || i)(t.\u0275\u0275inject(it)); }; }
    static { this.\u0275mod = t.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = t.\u0275\u0275defineInjector({ imports: [rt, st, Et, dt, mt, ut, gt, ht, Ct, yt, ft] }); }
} return i; })();
export { vn as FlexLayoutComponent, Mn as FlexLayoutRendererComponent, B as GridLayoutComponent, ri as GridLayoutEditorComponent, nt as GridlessLayoutComponent, Ln as GridlessLayoutEditorComponent, Vn as GridlessLayoutRendererComponent, Tn as LayoutDialogComponent, Sn as LayoutFormComponent, ai as LayoutModule, E as LayoutPlugin, it as LayoutPluginManager, ot as LayoutSidenavComponent, En as SplitLayoutComponent, In as SplitLayoutEditorComponent };
