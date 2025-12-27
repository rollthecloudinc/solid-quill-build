import { DefaultFlexDirective, DefaultLayoutDirective, DefaultStyleDirective, FlexFillDirective, FlexLayoutModule } from "@nf-internal/chunk-DTFA3YPM";
import "@nf-internal/chunk-BSWOS4VH";
import { map, of } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/layout/fesm2022/rollthecloudinc-layout.mjs
import * as i0 from "@angular/core";
import { ContentChild, Input, Component, EventEmitter, ViewChildren, ViewChild, Output, forwardRef, Inject, Injectable, Optional, NgModule } from "@angular/core";
import * as i2$1 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i1 from "@angular/forms";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as i8$1 from "angular-split";
import { SplitAreaDirective as SplitAreaDirective2, AngularSplitModule } from "angular-split";
import { MaterialModule } from "@rollthecloudinc/material";
import * as i3$1 from "angular-gridster2";
import { GridsterComponent as GridsterComponent2, DisplayGrid, GridType, GridsterModule } from "angular-gridster2";
import * as i2 from "@rollthecloudinc/attributes";
import { AttributeValue, Attribute, AttributeTypes, AttributesModule } from "@rollthecloudinc/attributes";
import { TokenModule } from "@rollthecloudinc/token";
import * as i2$2 from "@rollthecloudinc/utils";
import { SITE_NAME, UtilsModule } from "@rollthecloudinc/utils";
import * as i13 from "ngx-dropzone";
import { NgxDropzoneModule } from "ngx-dropzone";
import { LayoutSetting, LayoutEditorBaseComponent, LayoutRendererBaseComponent } from "@rollthecloudinc/panels";
import { switchMap, filter } from "rxjs/operators";
import * as i1$1 from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as i4$1 from "@angular/material/button";
import * as i1$2 from "@rollthecloudinc/plugin";
import { BasePluginManager, PluginDef, Plugin } from "@rollthecloudinc/plugin";
import * as i8 from "@angular/material/icon";
import * as i6 from "@angular/material/menu";
import * as i1$3 from "@rollthecloudinc/auth";
import * as i3$2 from "@ngrx/data";
import * as i3$3 from "@angular/cdk/drag-drop";
import * as i4$2 from "@angular/material/autocomplete";
import * as i9$1 from "@angular/material/input";
import * as i11 from "@angular/material/select";
import * as i12 from "@angular/material/sidenav";
import * as i5 from "@angular/router";
import { RouterModule } from "@angular/router";
import * as i7 from "@angular/material/divider";
import * as i9 from "@angular/cdk/scrolling";
var _c0 = ["innerGridItem"];
var _c1 = () => ({
    height: "100%"
});
var _c2 = a0 => ({
    i: a0
});
function FlexLayoutComponent_div_1_div_2_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function FlexLayoutComponent_div_1_div_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 2)(1, "p", 4);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 5);
        i0.ɵɵtemplate(4, FlexLayoutComponent_div_1_div_2_ng_container_4_Template, 1, 0, "ng-container", 6);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const j_r1 = ctx.index;
        const i_r2 = i0.ɵɵnextContext().index;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("fxFlex", ctx_r2.dashboard[ctx_r2.itemIndex(i_r2, j_r1)].cols);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate3("row: ", i_r2, " | column: ", j_r1, " | size: ", ctx_r2.dashboard[ctx_r2.itemIndex(i_r2, j_r1)].cols);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngStyle", ctx_r2.gridItemInnerStyles(i_r2, j_r1));
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.innerGridItemTmpl)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, ctx_r2.itemIndex(i_r2, j_r1)));
    }
}
function FlexLayoutComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
        i0.ɵɵtemplate(2, FlexLayoutComponent_div_1_div_2_Template, 5, 9, "div", 1);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const i_r2 = ctx.index;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("fxFlex", ctx_r2.rowFlex(i_r2));
        i0.ɵɵadvance();
        i0.ɵɵproperty("fxLayout", ctx_r2.rowDirection(i_r2))("ngStyle", i0.ɵɵpureFunction0(4, _c1));
        i0.ɵɵadvance();
        i0.ɵɵproperty("for", ctx_r2.totalColumns(i_r2));
    }
}
var _c3 = ["gridItemActions"];
var _c4 = ["extraActions"];
var _c5 = ["mainControls"];
var _c6 = ["itemHeader"];
function GridLayoutComponent_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function GridLayoutComponent_gridster_item_10_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function GridLayoutComponent_gridster_item_10_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function GridLayoutComponent_gridster_item_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "gridster-item", 9)(1, "div", 10)(2, "div", 11, 1);
        i0.ɵɵtemplate(4, GridLayoutComponent_gridster_item_10_ng_container_4_Template, 1, 0, "ng-container", 12);
        i0.ɵɵelementStart(5, "button", 13);
        i0.ɵɵlistener("mousedown", function GridLayoutComponent_gridster_item_10_Template_button_mousedown_5_listener() {
            const i_r3 = i0.ɵɵrestoreView(_r2).index;
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.removeItem(i_r3));
        })("touchstart", function GridLayoutComponent_gridster_item_10_Template_button_touchstart_5_listener() {
            const i_r3 = i0.ɵɵrestoreView(_r2).index;
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.removeItem(i_r3));
        });
        i0.ɵɵtext(6, "Delete");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "div", 14);
        i0.ɵɵtemplate(8, GridLayoutComponent_gridster_item_10_ng_container_8_Template, 1, 0, "ng-container", 12);
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const item_r5 = ctx.$implicit;
        const i_r3 = ctx.index;
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("item", item_r5);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("hidden", !ctx_r3.displayItemHeader);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.gridItemActionsTmpl)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c2, i_r3));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.innerGridItemTmpl)("ngTemplateOutletContext", i0.ɵɵpureFunction1(8, _c2, i_r3));
    }
}
var _c7 = () => ({
    i: 0
});
function GridlessLayoutComponent_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function GridlessLayoutComponent_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function GridlessLayoutComponent_ng_container_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function SplitLayoutComponent_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function SplitLayoutComponent_div_5_as_split_area_15_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function SplitLayoutComponent_div_5_as_split_area_15_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function SplitLayoutComponent_div_5_as_split_area_15_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "as-split-area", 16)(1, "div", 17)(2, "div", 18, 2);
        i0.ɵɵtemplate(4, SplitLayoutComponent_div_5_as_split_area_15_ng_container_4_Template, 1, 0, "ng-container", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 20);
        i0.ɵɵtemplate(6, SplitLayoutComponent_div_5_as_split_area_15_ng_container_6_Template, 1, 0, "ng-container", 19);
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const j_r4 = ctx.index;
        const i_r2 = i0.ɵɵnextContext().index;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("size", ctx_r2.itemSize(i_r2, j_r4));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("hidden", !ctx_r2.displayItemHeader);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.gridItemActionsTmpl)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c2, ctx_r2.itemIndex(i_r2, j_r4)));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.innerGridItemTmpl)("ngTemplateOutletContext", i0.ɵɵpureFunction1(8, _c2, ctx_r2.itemIndex(i_r2, j_r4)));
    }
}
function SplitLayoutComponent_div_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "button", 10)(3, "mat-icon");
        i0.ɵɵtext(4, "menu");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "mat-menu", null, 1)(7, "button", 11);
        i0.ɵɵlistener("mousedown", function SplitLayoutComponent_div_5_Template_button_mousedown_7_listener() {
            const i_r2 = i0.ɵɵrestoreView(_r1).index;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.addColumn(i_r2));
        });
        i0.ɵɵtext(8, "Add Column");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 11);
        i0.ɵɵlistener("mousedown", function SplitLayoutComponent_div_5_Template_button_mousedown_9_listener() {
            const i_r2 = i0.ɵɵrestoreView(_r1).index;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.layoutSettings("row", i_r2));
        });
        i0.ɵɵtext(10, "Layout Settings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 12);
        i0.ɵɵlistener("mousedown", function SplitLayoutComponent_div_5_Template_button_mousedown_11_listener() {
            const i_r2 = i0.ɵɵrestoreView(_r1).index;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.removeRow(i_r2));
        });
        i0.ɵɵtext(12, "Delete");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "div", 13)(14, "as-split", 14);
        i0.ɵɵlistener("dragEnd", function SplitLayoutComponent_div_5_Template_as_split_dragEnd_14_listener($event) {
            const i_r2 = i0.ɵɵrestoreView(_r1).index;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.dragEnd(i_r2, $event));
        });
        i0.ɵɵtemplate(15, SplitLayoutComponent_div_5_as_split_area_15_Template, 7, 10, "as-split-area", 15);
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const i_r2 = ctx.index;
        const rowActions_r5 = i0.ɵɵreference(6);
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matMenuTriggerFor", rowActions_r5);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("for", ctx_r2.totalColumns(i_r2));
    }
}
var _c8 = ["*"];
var _c9 = a0 => [a0, "manage"];
function LayoutSidenavComponent_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 6);
        i0.ɵɵlistener("click", function LayoutSidenavComponent_button_3_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r1);
            const ctx_r1 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r1.login());
        });
        i0.ɵɵtext(1, "login");
        i0.ɵɵelementEnd();
    }
}
function LayoutSidenavComponent_div_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 7)(1, "a", 8);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const pp_r3 = ctx.$implicit;
        i0.ɵɵadvance();
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c9, pp_r3.path));
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(pp_r3.path);
    }
}
var _c10 = (a0, a1) => ({
    i: a0,
    j: a1
});
function GridlessLayoutEditorComponent_li_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 16);
        i0.ɵɵlistener("click", function GridlessLayoutEditorComponent_li_6_Template_button_click_1_listener() {
            i0.ɵɵrestoreView(_r3);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.submit());
        });
        i0.ɵɵtext(2, "Save");
        i0.ɵɵelementEnd()();
    }
}
function GridlessLayoutEditorComponent_li_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 17);
        i0.ɵɵlistener("click", function GridlessLayoutEditorComponent_li_7_Template_button_click_1_listener() {
            i0.ɵɵrestoreView(_r5);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onPropertiesClick());
        });
        i0.ɵɵtext(2, "Properties");
        i0.ɵɵelementEnd()();
    }
}
function GridlessLayoutEditorComponent_li_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 17);
        i0.ɵɵlistener("click", function GridlessLayoutEditorComponent_li_8_Template_button_click_1_listener() {
            i0.ɵɵrestoreView(_r6);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onDeleteClick());
        });
        i0.ɵɵtext(2, "Delete");
        i0.ɵɵelementEnd()();
    }
}
function GridlessLayoutEditorComponent_li_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 17);
        i0.ɵɵlistener("click", function GridlessLayoutEditorComponent_li_9_Template_button_click_1_listener() {
            i0.ɵɵrestoreView(_r7);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onRulesClick());
        });
        i0.ɵɵtext(2, "Rules");
        i0.ɵɵelementEnd()();
    }
}
function GridlessLayoutEditorComponent_li_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 18);
        i0.ɵɵlistener("mousedown", function GridlessLayoutEditorComponent_li_10_Template_button_mousedown_1_listener() {
            i0.ɵɵrestoreView(_r8);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onPersistenceClick());
        });
        i0.ɵɵtext(2, "Persistence");
        i0.ɵɵelementEnd()();
    }
}
function GridlessLayoutEditorComponent_li_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 18);
        i0.ɵɵlistener("mousedown", function GridlessLayoutEditorComponent_li_11_Template_button_mousedown_1_listener() {
            i0.ɵɵrestoreView(_r9);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onInteractionsClick());
        });
        i0.ɵɵtext(2, "Interactions");
        i0.ɵɵelementEnd()();
    }
}
function GridlessLayoutEditorComponent_li_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 19);
        i0.ɵɵlistener("mousedown", function GridlessLayoutEditorComponent_li_18_Template_button_mousedown_1_listener() {
            i0.ɵɵrestoreView(_r10);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.applyStyle(0));
        })("touchstart", function GridlessLayoutEditorComponent_li_18_Template_button_touchstart_1_listener() {
            i0.ɵɵrestoreView(_r10);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.applyStyle(0));
        });
        i0.ɵɵtext(2, "Apply Style");
        i0.ɵɵelementEnd()();
    }
}
function GridlessLayoutEditorComponent_li_19_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 19);
        i0.ɵɵlistener("mousedown", function GridlessLayoutEditorComponent_li_19_Template_button_mousedown_1_listener() {
            i0.ɵɵrestoreView(_r11);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.removeStyle(0));
        })("touchstart", function GridlessLayoutEditorComponent_li_19_Template_button_touchstart_1_listener() {
            i0.ɵɵrestoreView(_r11);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.removeStyle(0));
        });
        i0.ɵɵtext(2, "Remove Style");
        i0.ɵɵelementEnd()();
    }
}
function GridlessLayoutEditorComponent_ng_template_22_button_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 36);
        i0.ɵɵlistener("click", function GridlessLayoutEditorComponent_ng_template_22_button_0_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r12);
            i0.ɵɵnextContext(2);
            const drawer_r2 = i0.ɵɵreference(2);
            return i0.ɵɵresetView(drawer_r2.toggle());
        });
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2, "menu");
        i0.ɵɵelementEnd()();
    }
}
function GridlessLayoutEditorComponent_ng_template_22_button_1_mat_icon_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "arrow_drop_down");
        i0.ɵɵelementEnd();
    }
}
function GridlessLayoutEditorComponent_ng_template_22_button_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 37);
        i0.ɵɵtemplate(1, GridlessLayoutEditorComponent_ng_template_22_button_1_mat_icon_1_Template, 2, 0, "mat-icon", 9);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext(2);
        const topActions_r13 = i0.ɵɵreference(29);
        i0.ɵɵproperty("matMenuTriggerFor", topActions_r13);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r3.nested);
    }
}
function GridlessLayoutEditorComponent_ng_template_22_ng_container_3_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function GridlessLayoutEditorComponent_ng_template_22_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, GridlessLayoutEditorComponent_ng_template_22_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 24);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.contextsMenuTpl);
    }
}
function GridlessLayoutEditorComponent_ng_template_22_div_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 38);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(ctx_r3.editor.panelStyleTitle(0));
    }
}
function GridlessLayoutEditorComponent_ng_template_22_span_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "span", 39);
    }
}
function GridlessLayoutEditorComponent_ng_template_22_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function GridlessLayoutEditorComponent_ng_template_22_div_25_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 40);
        i0.ɵɵtext(1, "Quell");
        i0.ɵɵelementEnd();
    }
}
function GridlessLayoutEditorComponent_ng_template_22_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtemplate(0, GridlessLayoutEditorComponent_ng_template_22_button_0_Template, 3, 0, "button", 20)(1, GridlessLayoutEditorComponent_ng_template_22_button_1_Template, 2, 2, "button", 21);
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵtemplate(3, GridlessLayoutEditorComponent_ng_template_22_ng_container_3_Template, 2, 1, "ng-container", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, GridlessLayoutEditorComponent_ng_template_22_div_4_Template, 2, 1, "div", 22)(5, GridlessLayoutEditorComponent_ng_template_22_span_5_Template, 1, 0, "span", 23)(6, GridlessLayoutEditorComponent_ng_template_22_ng_container_6_Template, 1, 0, "ng-container", 24);
        i0.ɵɵelementStart(7, "div", 25)(8, "mat-form-field")(9, "mat-select", 26)(10, "mat-option", 27);
        i0.ɵɵtext(11, "page");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-option", 28);
        i0.ɵɵtext(13, "form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-option", 29);
        i0.ɵɵtext(15, "json");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(16, "div", 30)(17, "mat-form-field")(18, "mat-select", 31)(19, "mat-option", 32);
        i0.ɵɵtext(20, "grid");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "mat-option", 33);
        i0.ɵɵtext(22, "gridless");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "mat-option", 34);
        i0.ɵɵtext(24, "split");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(25, GridlessLayoutEditorComponent_ng_template_22_div_25_Template, 2, 0, "div", 35);
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngIf", !ctx_r3.nested);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r3.nested);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx_r3.savable);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r3.editor.hasPanelStyle(0) && ctx_r3.nested);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r3.nested);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.extraActionsAreaTmpl);
        i0.ɵɵadvance(19);
        i0.ɵɵproperty("ngIf", !ctx_r3.nested);
    }
}
function GridlessLayoutEditorComponent_ng_template_24_div_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 38);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(ctx_r3.editor.panelStyleTitle(0));
    }
}
function GridlessLayoutEditorComponent_ng_template_24_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtemplate(0, GridlessLayoutEditorComponent_ng_template_24_div_0_Template, 2, 1, "div", 22);
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngIf", ctx_r3.editor.hasPanelStyle(0) && !ctx_r3.nested);
    }
}
function GridlessLayoutEditorComponent_ng_template_26_div_3_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function GridlessLayoutEditorComponent_ng_template_26_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 43);
        i0.ɵɵtemplate(1, GridlessLayoutEditorComponent_ng_template_26_div_3_ng_container_1_Template, 1, 0, "ng-container", 44);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const j_r16 = ctx.index;
        const i_r15 = i0.ɵɵnextContext().i;
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.editablePaneTpl)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c10, i_r15, j_r16));
    }
}
function GridlessLayoutEditorComponent_ng_template_26_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "ngx-dropzone", 41);
        i0.ɵɵlistener("change", function GridlessLayoutEditorComponent_ng_template_26_Template_ngx_dropzone_change_0_listener($event) {
            const i_r15 = i0.ɵɵrestoreView(_r14).i;
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onFileChange($event, i_r15));
        })("cdkDropListDropped", function GridlessLayoutEditorComponent_ng_template_26_Template_ngx_dropzone_cdkDropListDropped_0_listener($event) {
            i0.ɵɵrestoreView(_r14);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onDrop($event));
        });
        i0.ɵɵelementStart(1, "div", null, 5);
        i0.ɵɵtemplate(3, GridlessLayoutEditorComponent_ng_template_26_div_3_Template, 2, 5, "div", 42);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const i_r15 = ctx.i;
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cdkDropListData", i_r15)("multiple", true)("disableClick", true);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx_r3.editor.panelPanes(i_r15).controls);
    }
}
function GridlessLayoutEditorComponent_button_30_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 45);
        i0.ɵɵlistener("click", function GridlessLayoutEditorComponent_button_30_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r17);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.submit());
        });
        i0.ɵɵtext(1, "Save");
        i0.ɵɵelementEnd();
    }
}
function GridlessLayoutEditorComponent_button_31_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 17);
        i0.ɵɵlistener("click", function GridlessLayoutEditorComponent_button_31_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r18);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onPropertiesClick());
        });
        i0.ɵɵtext(1, "Properties");
        i0.ɵɵelementEnd();
    }
}
function GridlessLayoutEditorComponent_button_32_Template(rf, ctx) {
    if (rf & 1) {
        const _r19 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 17);
        i0.ɵɵlistener("click", function GridlessLayoutEditorComponent_button_32_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r19);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onDeleteClick());
        });
        i0.ɵɵtext(1, "Delete");
        i0.ɵɵelementEnd();
    }
}
function GridlessLayoutEditorComponent_button_33_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 17);
        i0.ɵɵlistener("click", function GridlessLayoutEditorComponent_button_33_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r20);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onRulesClick());
        });
        i0.ɵɵtext(1, "Rules");
        i0.ɵɵelementEnd();
    }
}
function GridlessLayoutEditorComponent_button_34_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 18);
        i0.ɵɵlistener("mousedown", function GridlessLayoutEditorComponent_button_34_Template_button_mousedown_0_listener() {
            i0.ɵɵrestoreView(_r21);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onPersistenceClick());
        });
        i0.ɵɵtext(1, "Persistence");
        i0.ɵɵelementEnd();
    }
}
function GridlessLayoutEditorComponent_button_35_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 18);
        i0.ɵɵlistener("mousedown", function GridlessLayoutEditorComponent_button_35_Template_button_mousedown_0_listener() {
            i0.ɵɵrestoreView(_r22);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onInteractionsClick());
        });
        i0.ɵɵtext(1, "Interactions");
        i0.ɵɵelementEnd();
    }
}
function GridlessLayoutEditorComponent_button_40_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 19);
        i0.ɵɵlistener("mousedown", function GridlessLayoutEditorComponent_button_40_Template_button_mousedown_0_listener() {
            i0.ɵɵrestoreView(_r23);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.applyStyle(0));
        })("touchstart", function GridlessLayoutEditorComponent_button_40_Template_button_touchstart_0_listener() {
            i0.ɵɵrestoreView(_r23);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.applyStyle(0));
        });
        i0.ɵɵtext(1, "Apply Style");
        i0.ɵɵelementEnd();
    }
}
function GridlessLayoutEditorComponent_button_41_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 19);
        i0.ɵɵlistener("mousedown", function GridlessLayoutEditorComponent_button_41_Template_button_mousedown_0_listener() {
            i0.ɵɵrestoreView(_r24);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.removeStyle(0));
        })("touchstart", function GridlessLayoutEditorComponent_button_41_Template_button_touchstart_0_listener() {
            i0.ɵɵrestoreView(_r24);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.removeStyle(0));
        });
        i0.ɵɵtext(1, "Remove Style");
        i0.ɵɵelementEnd();
    }
}
function GridlessLayoutRendererComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function GridlessLayoutRendererComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtemplate(0, GridlessLayoutRendererComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
    }
    if (rf & 2) {
        const i_r1 = ctx.i;
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.renderPanelTpl)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, i_r1));
    }
}
function SplitLayoutEditorComponent_li_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 18);
        i0.ɵɵlistener("click", function SplitLayoutEditorComponent_li_6_Template_button_click_1_listener() {
            i0.ɵɵrestoreView(_r3);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.submit());
        });
        i0.ɵɵtext(2, "Save");
        i0.ɵɵelementEnd()();
    }
}
function SplitLayoutEditorComponent_li_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 18);
        i0.ɵɵlistener("click", function SplitLayoutEditorComponent_li_16_Template_button_click_1_listener() {
            i0.ɵɵrestoreView(_r6);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onRulesClick());
        });
        i0.ɵɵtext(2, "Rules");
        i0.ɵɵelementEnd()();
    }
}
function SplitLayoutEditorComponent_li_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 12);
        i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_li_17_Template_button_mousedown_1_listener() {
            i0.ɵɵrestoreView(_r7);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onPersistenceClick());
        });
        i0.ɵɵtext(2, "Persistence");
        i0.ɵɵelementEnd()();
    }
}
function SplitLayoutEditorComponent_li_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 12);
        i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_li_18_Template_button_mousedown_1_listener() {
            i0.ɵɵrestoreView(_r8);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onInteractionsClick());
        });
        i0.ɵɵtext(2, "Interactions");
        i0.ɵɵelementEnd()();
    }
}
function SplitLayoutEditorComponent_li_19_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li")(1, "button", 18);
        i0.ɵɵlistener("click", function SplitLayoutEditorComponent_li_19_Template_button_click_1_listener() {
            i0.ɵɵrestoreView(_r9);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onDeleteClick());
        });
        i0.ɵɵtext(2, "Delete");
        i0.ɵɵelementEnd()();
    }
}
function SplitLayoutEditorComponent_ng_template_23_button_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 33);
        i0.ɵɵlistener("click", function SplitLayoutEditorComponent_ng_template_23_button_0_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r10);
            i0.ɵɵnextContext(2);
            const drawer_r2 = i0.ɵɵreference(2);
            return i0.ɵɵresetView(drawer_r2.toggle());
        });
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2, "menu");
        i0.ɵɵelementEnd()();
    }
}
function SplitLayoutEditorComponent_ng_template_23_button_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 34)(1, "mat-icon");
        i0.ɵɵtext(2, "menu");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        i0.ɵɵnextContext(2);
        const topActions_r11 = i0.ɵɵreference(30);
        i0.ɵɵproperty("matMenuTriggerFor", topActions_r11);
    }
}
function SplitLayoutEditorComponent_ng_template_23_span_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "span", 35);
    }
}
function SplitLayoutEditorComponent_ng_template_23_ng_container_4_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function SplitLayoutEditorComponent_ng_template_23_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, SplitLayoutEditorComponent_ng_template_23_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 31);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.contextsMenuTpl);
    }
}
function SplitLayoutEditorComponent_ng_template_23_ng_container_21_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function SplitLayoutEditorComponent_ng_template_23_div_22_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 36);
        i0.ɵɵtext(1, "Quell");
        i0.ɵɵelementEnd();
    }
}
function SplitLayoutEditorComponent_ng_template_23_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtemplate(0, SplitLayoutEditorComponent_ng_template_23_button_0_Template, 3, 0, "button", 19)(1, SplitLayoutEditorComponent_ng_template_23_button_1_Template, 3, 1, "button", 20)(2, SplitLayoutEditorComponent_ng_template_23_span_2_Template, 1, 0, "span", 21);
        i0.ɵɵelementStart(3, "div");
        i0.ɵɵtemplate(4, SplitLayoutEditorComponent_ng_template_23_ng_container_4_Template, 2, 1, "ng-container", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 22)(6, "mat-form-field")(7, "mat-select", 23)(8, "mat-option", 24);
        i0.ɵɵtext(9, "page");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 25);
        i0.ɵɵtext(11, "form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-option", 26);
        i0.ɵɵtext(13, "json");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(14, "div", 27)(15, "mat-form-field")(16, "mat-select", 28)(17, "mat-option", 29);
        i0.ɵɵtext(18, "gridless");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "mat-option", 30);
        i0.ɵɵtext(20, "split");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(21, SplitLayoutEditorComponent_ng_template_23_ng_container_21_Template, 1, 0, "ng-container", 31)(22, SplitLayoutEditorComponent_ng_template_23_div_22_Template, 2, 0, "div", 32);
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngIf", !ctx_r3.nested);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r3.nested);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r3.nested);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx_r3.savable);
        i0.ɵɵadvance(17);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.extraActionsAreaTmpl);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx_r3.nested);
    }
}
function SplitLayoutEditorComponent_ng_template_25_button_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 42);
        i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_ng_template_25_button_11_Template_button_mousedown_0_listener() {
            i0.ɵɵrestoreView(_r14);
            const i_r13 = i0.ɵɵnextContext().i;
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.applyStyle(i_r13));
        })("touchstart", function SplitLayoutEditorComponent_ng_template_25_button_11_Template_button_touchstart_0_listener() {
            i0.ɵɵrestoreView(_r14);
            const i_r13 = i0.ɵɵnextContext().i;
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.applyStyle(i_r13));
        });
        i0.ɵɵtext(1, "Apply Style");
        i0.ɵɵelementEnd();
    }
}
function SplitLayoutEditorComponent_ng_template_25_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 42);
        i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_ng_template_25_button_12_Template_button_mousedown_0_listener() {
            i0.ɵɵrestoreView(_r15);
            const i_r13 = i0.ɵɵnextContext().i;
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.removeStyle(i_r13));
        })("touchstart", function SplitLayoutEditorComponent_ng_template_25_button_12_Template_button_touchstart_0_listener() {
            i0.ɵɵrestoreView(_r15);
            const i_r13 = i0.ɵɵnextContext().i;
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.removeStyle(i_r13));
        });
        i0.ɵɵtext(1, "Remove Style");
        i0.ɵɵelementEnd();
    }
}
function SplitLayoutEditorComponent_ng_template_25_div_15_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 43);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const i_r13 = i0.ɵɵnextContext().i;
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(ctx_r3.editor.panelStyleTitle(i_r13));
    }
}
function SplitLayoutEditorComponent_ng_template_25_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 37)(1, "mat-icon");
        i0.ɵɵtext(2, "arrow_drop_down");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(3, "mat-menu", null, 6)(5, "button", 12);
        i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_ng_template_25_Template_button_mousedown_5_listener() {
            const i_r13 = i0.ɵɵrestoreView(_r12).i;
            i0.ɵɵnextContext();
            const splitLayout_r5 = i0.ɵɵreference(22);
            return i0.ɵɵresetView(splitLayout_r5.layoutSettings("column", i_r13));
        });
        i0.ɵɵtext(6, "Layout Settings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 38);
        i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_ng_template_25_Template_button_mousedown_7_listener() {
            const i_r13 = i0.ɵɵrestoreView(_r12).i;
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.addContent(i_r13));
        })("touchstart", function SplitLayoutEditorComponent_ng_template_25_Template_button_touchstart_7_listener() {
            const i_r13 = i0.ɵɵrestoreView(_r12).i;
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.addContent(i_r13));
        });
        i0.ɵɵtext(8, "Add Content");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 38);
        i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_ng_template_25_Template_button_mousedown_9_listener() {
            const i_r13 = i0.ɵɵrestoreView(_r12).i;
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.editPanelProps(i_r13));
        })("touchstart", function SplitLayoutEditorComponent_ng_template_25_Template_button_touchstart_9_listener() {
            const i_r13 = i0.ɵɵrestoreView(_r12).i;
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.editPanelProps(i_r13));
        });
        i0.ɵɵtext(10, "Props");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, SplitLayoutEditorComponent_ng_template_25_button_11_Template, 2, 0, "button", 39)(12, SplitLayoutEditorComponent_ng_template_25_button_12_Template, 2, 0, "button", 39);
        i0.ɵɵelementStart(13, "button", 40);
        i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_ng_template_25_Template_button_mousedown_13_listener() {
            const i_r13 = i0.ɵɵrestoreView(_r12).i;
            i0.ɵɵnextContext();
            const splitLayout_r5 = i0.ɵɵreference(22);
            return i0.ɵɵresetView(splitLayout_r5.removeColumn2(i_r13));
        })("touchstart", function SplitLayoutEditorComponent_ng_template_25_Template_button_touchstart_13_listener() {
            const i_r13 = i0.ɵɵrestoreView(_r12).i;
            i0.ɵɵnextContext();
            const splitLayout_r5 = i0.ɵɵreference(22);
            return i0.ɵɵresetView(splitLayout_r5.removeColumn2(i_r13));
        });
        i0.ɵɵtext(14, "Delete");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(15, SplitLayoutEditorComponent_ng_template_25_div_15_Template, 2, 1, "div", 41);
    }
    if (rf & 2) {
        const i_r13 = ctx.i;
        const panelActions_r16 = i0.ɵɵreference(4);
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("matMenuTriggerFor", panelActions_r16);
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("ngIf", !ctx_r3.editor.hasPanelStyle(i_r13));
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r3.editor.hasPanelStyle(i_r13));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx_r3.editor.hasPanelStyle(i_r13));
    }
}
function SplitLayoutEditorComponent_ng_template_27_div_3_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function SplitLayoutEditorComponent_ng_template_27_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 46);
        i0.ɵɵtemplate(1, SplitLayoutEditorComponent_ng_template_27_div_3_ng_container_1_Template, 1, 0, "ng-container", 47);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const j_r19 = ctx.index;
        const i_r18 = i0.ɵɵnextContext().i;
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.editablePaneTpl)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c10, i_r18, j_r19));
    }
}
function SplitLayoutEditorComponent_ng_template_27_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "ngx-dropzone", 44);
        i0.ɵɵlistener("change", function SplitLayoutEditorComponent_ng_template_27_Template_ngx_dropzone_change_0_listener($event) {
            const i_r18 = i0.ɵɵrestoreView(_r17).i;
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onFileChange($event, i_r18));
        })("cdkDropListDropped", function SplitLayoutEditorComponent_ng_template_27_Template_ngx_dropzone_cdkDropListDropped_0_listener($event) {
            i0.ɵɵrestoreView(_r17);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onDrop($event));
        });
        i0.ɵɵelementStart(1, "div", null, 7);
        i0.ɵɵtemplate(3, SplitLayoutEditorComponent_ng_template_27_div_3_Template, 2, 5, "div", 45);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const i_r18 = ctx.i;
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cdkDropListData", i_r18)("multiple", true)("disableClick", true);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx_r3.editor.panelPanes(i_r18).controls);
    }
}
function SplitLayoutEditorComponent_button_31_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 48);
        i0.ɵɵlistener("click", function SplitLayoutEditorComponent_button_31_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r20);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.submit());
        });
        i0.ɵɵtext(1, "Save");
        i0.ɵɵelementEnd();
    }
}
function SplitLayoutEditorComponent_button_38_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 18);
        i0.ɵɵlistener("click", function SplitLayoutEditorComponent_button_38_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r21);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onRulesClick());
        });
        i0.ɵɵtext(1, "Rules");
        i0.ɵɵelementEnd();
    }
}
function SplitLayoutEditorComponent_button_39_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 12);
        i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_button_39_Template_button_mousedown_0_listener() {
            i0.ɵɵrestoreView(_r22);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onPersistenceClick());
        });
        i0.ɵɵtext(1, "Persistence");
        i0.ɵɵelementEnd();
    }
}
function SplitLayoutEditorComponent_button_40_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 12);
        i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_button_40_Template_button_mousedown_0_listener() {
            i0.ɵɵrestoreView(_r23);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onInteractionsClick());
        });
        i0.ɵɵtext(1, "Interactions");
        i0.ɵɵelementEnd();
    }
}
function SplitLayoutEditorComponent_button_41_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 18);
        i0.ɵɵlistener("click", function SplitLayoutEditorComponent_button_41_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r24);
            const ctx_r3 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r3.editor.onDeleteClick());
        });
        i0.ɵɵtext(1, "Delete");
        i0.ɵɵelementEnd();
    }
}
function FlexLayoutRendererComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function FlexLayoutRendererComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtemplate(0, FlexLayoutRendererComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
    }
    if (rf & 2) {
        const i_r1 = ctx.i;
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.renderPanelTpl)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, i_r1));
    }
}
function GridLayoutEditorComponent_ng_template_1_button_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 15);
        i0.ɵɵtext(1, "Save");
        i0.ɵɵelementEnd();
    }
}
function GridLayoutEditorComponent_ng_template_1_button_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 16);
        i0.ɵɵlistener("click", function GridLayoutEditorComponent_ng_template_1_button_1_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r2);
            const ctx_r2 = i0.ɵɵnextContext(2);
            return i0.ɵɵresetView(ctx_r2.editor.onPropertiesClick());
        });
        i0.ɵɵtext(1, "Properties");
        i0.ɵɵelementEnd();
    }
}
function GridLayoutEditorComponent_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function GridLayoutEditorComponent_ng_template_1_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, GridLayoutEditorComponent_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 14);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.contextsMenuTpl);
    }
}
function GridLayoutEditorComponent_ng_template_1_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 16);
        i0.ɵɵlistener("click", function GridLayoutEditorComponent_ng_template_1_button_3_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r4);
            const ctx_r2 = i0.ɵɵnextContext(2);
            return i0.ɵɵresetView(ctx_r2.editor.onRulesClick());
        });
        i0.ɵɵtext(1, "Rules");
        i0.ɵɵelementEnd();
    }
}
function GridLayoutEditorComponent_ng_template_1_button_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 16);
        i0.ɵɵlistener("click", function GridLayoutEditorComponent_ng_template_1_button_4_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r5);
            const ctx_r2 = i0.ɵɵnextContext(2);
            return i0.ɵɵresetView(ctx_r2.editor.onDeleteClick());
        });
        i0.ɵɵtext(1, "Delete");
        i0.ɵɵelementEnd();
    }
}
function GridLayoutEditorComponent_ng_template_1_div_14_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 17)(1, "mat-form-field")(2, "mat-select", 18)(3, "mat-option", 19);
        i0.ɵɵtext(4, "Page");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-option", 20);
        i0.ɵɵtext(6, "Form");
        i0.ɵɵelementEnd()()()();
    }
}
function GridLayoutEditorComponent_ng_template_1_ng_container_15_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function GridLayoutEditorComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtemplate(0, GridLayoutEditorComponent_ng_template_1_button_0_Template, 2, 0, "button", 5)(1, GridLayoutEditorComponent_ng_template_1_button_1_Template, 2, 0, "button", 6)(2, GridLayoutEditorComponent_ng_template_1_ng_container_2_Template, 2, 1, "ng-container", 7)(3, GridLayoutEditorComponent_ng_template_1_button_3_Template, 2, 0, "button", 6)(4, GridLayoutEditorComponent_ng_template_1_button_4_Template, 2, 0, "button", 6);
        i0.ɵɵelementStart(5, "div", 8)(6, "mat-form-field")(7, "mat-select", 9)(8, "mat-option", 10);
        i0.ɵɵtext(9, "Grid");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 11);
        i0.ɵɵtext(11, "Gridless");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-option", 12);
        i0.ɵɵtext(13, "Split");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(14, GridLayoutEditorComponent_ng_template_1_div_14_Template, 7, 0, "div", 13)(15, GridLayoutEditorComponent_ng_template_1_ng_container_15_Template, 1, 0, "ng-container", 14);
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngIf", ctx_r2.savable);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r2.savable);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r2.savable);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r2.nested);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r2.nested);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngIf", !ctx_r2.nested);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.extraActionsAreaTmpl);
    }
}
function GridLayoutEditorComponent_ng_template_3_button_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 21);
        i0.ɵɵlistener("mousedown", function GridLayoutEditorComponent_ng_template_3_button_4_Template_button_mousedown_0_listener() {
            i0.ɵɵrestoreView(_r8);
            const i_r7 = i0.ɵɵnextContext().i;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.editor.applyStyle(i_r7));
        })("touchstart", function GridLayoutEditorComponent_ng_template_3_button_4_Template_button_touchstart_0_listener() {
            i0.ɵɵrestoreView(_r8);
            const i_r7 = i0.ɵɵnextContext().i;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.editor.applyStyle(i_r7));
        });
        i0.ɵɵtext(1, "Apply Style");
        i0.ɵɵelementEnd();
    }
}
function GridLayoutEditorComponent_ng_template_3_span_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const i_r7 = i0.ɵɵnextContext().i;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1("Style: ", ctx_r2.editor.panelStyleTitle(i_r7));
    }
}
function GridLayoutEditorComponent_ng_template_3_button_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 21);
        i0.ɵɵlistener("mousedown", function GridLayoutEditorComponent_ng_template_3_button_6_Template_button_mousedown_0_listener() {
            i0.ɵɵrestoreView(_r9);
            const i_r7 = i0.ɵɵnextContext().i;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.editor.removeStyle(i_r7));
        })("touchstart", function GridLayoutEditorComponent_ng_template_3_button_6_Template_button_touchstart_0_listener() {
            i0.ɵɵrestoreView(_r9);
            const i_r7 = i0.ɵɵnextContext().i;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.editor.removeStyle(i_r7));
        });
        i0.ɵɵtext(1, "Remove Style");
        i0.ɵɵelementEnd();
    }
}
function GridLayoutEditorComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 21);
        i0.ɵɵlistener("mousedown", function GridLayoutEditorComponent_ng_template_3_Template_button_mousedown_0_listener() {
            const i_r7 = i0.ɵɵrestoreView(_r6).i;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.editor.addContent(i_r7));
        })("touchstart", function GridLayoutEditorComponent_ng_template_3_Template_button_touchstart_0_listener() {
            const i_r7 = i0.ɵɵrestoreView(_r6).i;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.editor.addContent(i_r7));
        });
        i0.ɵɵtext(1, "Add Content");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 21);
        i0.ɵɵlistener("mousedown", function GridLayoutEditorComponent_ng_template_3_Template_button_mousedown_2_listener() {
            const i_r7 = i0.ɵɵrestoreView(_r6).i;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.editor.editPanelProps(i_r7));
        })("touchstart", function GridLayoutEditorComponent_ng_template_3_Template_button_touchstart_2_listener() {
            const i_r7 = i0.ɵɵrestoreView(_r6).i;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.editor.editPanelProps(i_r7));
        });
        i0.ɵɵtext(3, "Props");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, GridLayoutEditorComponent_ng_template_3_button_4_Template, 2, 0, "button", 22)(5, GridLayoutEditorComponent_ng_template_3_span_5_Template, 2, 1, "span", 7)(6, GridLayoutEditorComponent_ng_template_3_button_6_Template, 2, 0, "button", 22);
    }
    if (rf & 2) {
        const i_r7 = ctx.i;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", !ctx_r2.editor.hasPanelStyle(i_r7));
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r2.editor.hasPanelStyle(i_r7));
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r2.editor.hasPanelStyle(i_r7));
    }
}
function GridLayoutEditorComponent_ng_template_5_div_3_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function GridLayoutEditorComponent_ng_template_5_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 25);
        i0.ɵɵtemplate(1, GridLayoutEditorComponent_ng_template_5_div_3_ng_container_1_Template, 1, 0, "ng-container", 26);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const j_r12 = ctx.index;
        const i_r11 = i0.ɵɵnextContext().i;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.editablePaneTpl)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c10, i_r11, j_r12));
    }
}
function GridLayoutEditorComponent_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "ngx-dropzone", 23);
        i0.ɵɵlistener("change", function GridLayoutEditorComponent_ng_template_5_Template_ngx_dropzone_change_0_listener($event) {
            const i_r11 = i0.ɵɵrestoreView(_r10).i;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.editor.onFileChange($event, i_r11));
        })("cdkDropListDropped", function GridLayoutEditorComponent_ng_template_5_Template_ngx_dropzone_cdkDropListDropped_0_listener($event) {
            i0.ɵɵrestoreView(_r10);
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.editor.onDrop($event));
        });
        i0.ɵɵelementStart(1, "div", null, 3);
        i0.ɵɵtemplate(3, GridLayoutEditorComponent_ng_template_5_div_3_Template, 2, 5, "div", 24);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const i_r11 = ctx.i;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cdkDropListData", i_r11)("multiple", true)("disableClick", true);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx_r2.editor.panelPanes(i_r11).controls);
    }
}
var FlexLayoutComponent = class _FlexLayoutComponent {
    get totalRows() {
        return this.dashboard.length == 0 ? 0 : this.dashboard.reduce((p, c) => c.y > p ? c.y : p, 0) + 1;
    }
    get direction() {
        const d = this.attributeMatcher.getComputedValue("direction", this.layoutSetting ? this.layoutSetting.settings : []);
        return d && (d.trim() === "column" || d.trim() === "row") ? d : "column";
    }
    constructor(attributeMatcher) {
        this.attributeMatcher = attributeMatcher;
        this.dashboard = [];
        this.layoutSetting = new LayoutSetting();
        this.rowSettings = [];
        this.columnSettings = [];
    }
    ngOnInit() {
        console.log(this.dashboard);
    }
    itemIndex(rIndex, cIndex) {
        return this.dashboard.findIndex(c => c.y === rIndex && c.x === cIndex);
    }
    totalColumns(rowIndex) {
        return this.dashboard.reduce((p, c) => c.y === rowIndex ? p + 1 : p, 0);
    }
    rowDirection(index) {
        const d = this.attributeMatcher.getComputedValue("direction", this.rowSettings && this.rowSettings[index] ? this.rowSettings[index].settings : []);
        return d && (d.trim() === "column" || d.trim() === "row") ? d : "row";
    }
    rowFlex(index) {
        const attributes = ["flexGrow", "flexShrink", "flexBasis"];
        const values = attributes.map(n => this.attributeMatcher.getComputedValue(n, this.rowSettings && this.rowSettings[index] ? this.rowSettings[index].settings : []));
        const values2 = values.map(v => v !== void 0 && v !== null && v !== "" && v.trim() !== "" ? `${v.trim()}` : "");
        return values2.join(" ");
    }
    gridItemInnerStyles(row, column) {
        const index = this.itemIndex(row, column);
        const settings = this.columnSettings && this.columnSettings[index] ? this.columnSettings[index].settings : [];
        return {
            height: this.calculateHeight(this.attributeMatcher.getComputedValue("height", settings))
        };
    }
    calculateHeight(v) {
        const trimmed = v !== void 0 && v !== null ? v.trim() : "auto";
        return trimmed;
    }
    static {
        this.ɵfac = function FlexLayoutComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FlexLayoutComponent)(i0.ɵɵdirectiveInject(i2.AttributeMatcherService));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FlexLayoutComponent,
            selectors: [["classifieds-ui-flex-layout"]],
            contentQueries: function FlexLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
                if (rf & 1) {
                    i0.ɵɵcontentQuery(dirIndex, _c0, 5);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.innerGridItemTmpl = _t.first);
                }
            },
            inputs: {
                dashboard: "dashboard",
                layoutSetting: "layoutSetting",
                rowSettings: "rowSettings",
                columnSettings: "columnSettings"
            },
            standalone: false,
            decls: 2,
            vars: 2,
            consts: [["fxFill", "", 3, "fxLayout"], [3, "fxFlex", 4, "for"], [3, "fxFlex"], [3, "fxLayout", "ngStyle"], ["hidden", ""], [1, "grid-item-inner", 3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
            template: function FlexLayoutComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0);
                    i0.ɵɵtemplate(1, FlexLayoutComponent_div_1_Template, 3, 5, "div", 1);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("fxLayout", ctx.direction);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("for", ctx.totalRows);
                }
            },
            dependencies: [i2$1.NgTemplateOutlet, i2$1.NgStyle, DefaultLayoutDirective, FlexFillDirective, DefaultFlexDirective, DefaultStyleDirective, i2$2.ForDirective],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlexLayoutComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-flex-layout",
                    standalone: false,
                    template: `<div fxFill [fxLayout]="direction">
  <div *for="totalRows; let i = index" [fxFlex]="rowFlex(i)">
    <div [fxLayout]="rowDirection(i)" [ngStyle]="{ height: '100%' }">
      <div *for="totalColumns(i); let j = index" [fxFlex]="dashboard[itemIndex(i, j)].cols">
        <p hidden>row: {{ i }} | column: {{ j }} | size: {{ dashboard[itemIndex(i, j)].cols }}</p>
        <div class="grid-item-inner" [ngStyle]="gridItemInnerStyles(i, j)">
          <ng-container *ngTemplateOutlet="innerGridItemTmpl,context: { i: itemIndex(i, j) }"></ng-container>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Here is the flex layout. -->

<!--
flex on row indirectly - could be "expand"?
height of row -- when expand the height is automatically set to 100% - using fill...
-> indrectly set the item inner to the height of --
-->
`
                }]
        }], () => [{
            type: i2.AttributeMatcherService
        }], {
        dashboard: [{
                type: Input
            }],
        layoutSetting: [{
                type: Input
            }],
        rowSettings: [{
                type: Input
            }],
        columnSettings: [{
                type: Input
            }],
        innerGridItemTmpl: [{
                type: ContentChild,
                args: ["innerGridItem"]
            }]
    });
})();
var GridLayoutComponent = class _GridLayoutComponent {
    get grid() {
        return this.dashboard;
    }
    get cumulativeHeight() {
        const rows = [];
        this.heightsMatrix.forEach(m => {
            rows.push(this.itemHeights.reduce((p, c) => c > p ? c : p));
        });
        return rows.reduce((p, c) => p + c);
    }
    get heightsMatrix() {
        return this.dashboard.reduce((p, c, i) => {
            p[c.y] = p[c.y] !== void 0 ? [...p[c.y], this.itemHeights[i]] : [this.itemHeights[i]];
            return p;
        }, []);
    }
    constructor() {
        this.itemAdded = new EventEmitter();
        this.itemRemoved = new EventEmitter();
        this.dashboard = [];
        this.displayMainControls = true;
        this.displayItemHeader = true;
        this.itemHeights = [];
        this.rows = 0;
    }
    ngOnInit() { }
    removeItem(index) {
        this.dashboard.splice(index, 1);
        this.itemHeights.splice(index, 1);
        this.itemRemoved.emit(index);
    }
    addColumn() {
        console.log("add column grid");
        this.dashboard.push({
            cols: 1,
            rows: 1,
            y: 0,
            x: this.dashboard.length
        });
        this.itemAdded.emit();
    }
    addRow() {
        this.dashboard.push({
            cols: 1,
            rows: 1,
            y: this.rows++,
            x: 0
        });
        this.itemAdded.emit();
    }
    setItemContentHeight(index, height) {
        this.itemHeights[index] = height + (this.displayItemHeader ? this.itemHeaderHeight(index) : 0);
        this.refreshGridHeight();
    }
    refreshGridHeight() {
        this.gridHeight = this.cumulativeHeight + this.gridster.rows * 16;
    }
    itemHeaderHeight(index) {
        return this.itemHeaders.find((i, i22) => i22 === index).nativeElement.offsetHeight;
    }
    static {
        this.ɵfac = function GridLayoutComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _GridLayoutComponent)();
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _GridLayoutComponent,
            selectors: [["classifieds-ui-grid-layout"]],
            contentQueries: function GridLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
                if (rf & 1) {
                    i0.ɵɵcontentQuery(dirIndex, _c3, 5);
                    i0.ɵɵcontentQuery(dirIndex, _c0, 5);
                    i0.ɵɵcontentQuery(dirIndex, _c4, 5);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridItemActionsTmpl = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.innerGridItemTmpl = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.extraActionsTmpl = _t.first);
                }
            },
            viewQuery: function GridLayoutComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(GridsterComponent2, 5);
                    i0.ɵɵviewQuery(_c5, 5);
                    i0.ɵɵviewQuery(_c6, 5);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridster = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mainControls = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemHeaders = _t);
                }
            },
            inputs: {
                dashboard: "dashboard",
                displayMainControls: "displayMainControls",
                displayItemHeader: "displayItemHeader",
                options: "options"
            },
            outputs: {
                itemAdded: "itemAdded",
                itemRemoved: "itemRemoved"
            },
            standalone: false,
            decls: 11,
            vars: 6,
            consts: [["mainControls", ""], ["itemHeader", ""], [1, "layout-wrapper"], [1, "main-controls", 3, "hidden"], ["type", "button", 3, "mousedown"], [4, "ngTemplateOutlet"], [1, "layout-inner"], [3, "options"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"], ["fxLayout", "column", "fxFill", ""], ["fxFlex", "0 1 auto", 1, "grid-item-header", 3, "hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 1, "delete", 3, "mousedown", "touchstart"], ["fxFlex", "", 1, "grid-item-inner"]],
            template: function GridLayoutComponent_Template(rf, ctx) {
                if (rf & 1) {
                    const _r1 = i0.ɵɵgetCurrentView();
                    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3, 0)(3, "button", 4);
                    i0.ɵɵlistener("mousedown", function GridLayoutComponent_Template_button_mousedown_3_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.addColumn());
                    });
                    i0.ɵɵtext(4, "Add Column");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(5, "button", 4);
                    i0.ɵɵlistener("mousedown", function GridLayoutComponent_Template_button_mousedown_5_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.addRow());
                    });
                    i0.ɵɵtext(6, "Add Row");
                    i0.ɵɵelementEnd();
                    i0.ɵɵtemplate(7, GridLayoutComponent_ng_container_7_Template, 1, 0, "ng-container", 5);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(8, "div", 6)(9, "gridster", 7);
                    i0.ɵɵtemplate(10, GridLayoutComponent_gridster_item_10_Template, 9, 10, "gridster-item", 8);
                    i0.ɵɵelementEnd()()();
                }
                if (rf & 2) {
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("hidden", !ctx.displayMainControls);
                    i0.ɵɵadvance(6);
                    i0.ɵɵproperty("ngTemplateOutlet", ctx.extraActionsTmpl);
                    i0.ɵɵadvance();
                    i0.ɵɵstyleProp("height", ctx.gridHeight, "px");
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("options", ctx.options);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngForOf", ctx.dashboard);
                }
            },
            dependencies: [i2$1.NgForOf, i2$1.NgTemplateOutlet, DefaultLayoutDirective, FlexFillDirective, DefaultFlexDirective, i3$1.GridsterComponent, i3$1.GridsterItemComponent],
            styles: [".layout-wrapper[_ngcontent-%COMP%], .layout-inner[_ngcontent-%COMP%]{height:100%}.grid-item-header[_ngcontent-%COMP%]{background-color:#ccc;padding:.5em}button.delete[_ngcontent-%COMP%]{float:right}.main-controls[_ngcontent-%COMP%]{background-color:#fff;padding:.5em}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridLayoutComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-grid-layout",
                    standalone: false,
                    template: '<div class="layout-wrapper">\n  <div #mainControls [hidden]="!displayMainControls" class="main-controls">\n    <button type="button" (mousedown)="addColumn()">Add Column</button>\n    <button type="button" (mousedown)="addRow()">Add Row</button>\n    <ng-container *ngTemplateOutlet="extraActionsTmpl"></ng-container>\n  </div>\n  <div class="layout-inner" [style.height.px]="gridHeight">\n    <gridster [options]="options">\n      <gridster-item [item]="item" *ngFor="let item of dashboard; let i = index">\n        <div fxLayout="column" fxFill>\n          <div #itemHeader fxFlex="0 1 auto" [hidden]="!displayItemHeader" class="grid-item-header">\n            <ng-container *ngTemplateOutlet="gridItemActionsTmpl,context: { i: i }"></ng-container>\n            <button type="button" class="delete" (mousedown)="removeItem(i)" (touchstart)="removeItem(i)">Delete</button>\n          </div>\n          <div fxFlex class="grid-item-inner">\n            <ng-container *ngTemplateOutlet="innerGridItemTmpl,context: { i: i }"></ng-container>\n          </div>\n        </div>\n      </gridster-item>\n    </gridster>\n  </div>\n</div>\n\n',
                    styles: [".layout-wrapper,.layout-inner{height:100%}.grid-item-header{background-color:#ccc;padding:.5em}button.delete{float:right}.main-controls{background-color:#fff;padding:.5em}\n"]
                }]
        }], () => [], {
        itemAdded: [{
                type: Output
            }],
        itemRemoved: [{
                type: Output
            }],
        dashboard: [{
                type: Input
            }],
        displayMainControls: [{
                type: Input
            }],
        displayItemHeader: [{
                type: Input
            }],
        options: [{
                type: Input
            }],
        gridItemActionsTmpl: [{
                type: ContentChild,
                args: ["gridItemActions"]
            }],
        innerGridItemTmpl: [{
                type: ContentChild,
                args: ["innerGridItem"]
            }],
        extraActionsTmpl: [{
                type: ContentChild,
                args: ["extraActions"]
            }],
        gridster: [{
                type: ViewChild,
                args: [GridsterComponent2]
            }],
        mainControls: [{
                type: ViewChild,
                args: ["mainControls"]
            }],
        itemHeaders: [{
                type: ViewChildren,
                args: ["itemHeader"]
            }]
    });
})();
var GridlessLayoutComponent = class _GridlessLayoutComponent {
    constructor() {
        this.displayMainControls = true;
        this.displayItemHeader = true;
        this.nested = false;
    }
    ngOnInit() { }
    static {
        this.ɵfac = function GridlessLayoutComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _GridlessLayoutComponent)();
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _GridlessLayoutComponent,
            selectors: [["classifieds-ui-gridless-layout"]],
            contentQueries: function GridlessLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
                if (rf & 1) {
                    i0.ɵɵcontentQuery(dirIndex, _c3, 5);
                    i0.ɵɵcontentQuery(dirIndex, _c0, 5);
                    i0.ɵɵcontentQuery(dirIndex, _c4, 5);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridItemActionsTmpl = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.innerGridItemTmpl = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.extraActionsTmpl = _t.first);
                }
            },
            hostVars: 2,
            hostBindings: function GridlessLayoutComponent_HostBindings(rf, ctx) {
                if (rf & 2) {
                    i0.ɵɵclassProp("is-nested", ctx.nested);
                }
            },
            inputs: {
                displayMainControls: "displayMainControls",
                displayItemHeader: "displayItemHeader",
                nested: "nested"
            },
            standalone: false,
            decls: 11,
            vars: 9,
            consts: [["mainControls", ""], ["itemHeader", ""], [1, "layout-wrapper"], [1, "main-controls", 3, "hidden"], [4, "ngTemplateOutlet"], [1, "layout-inner"], ["fxLayout", "column", "fxFill", ""], ["fxFlex", "0 1 auto", 1, "grid-item-header", 3, "hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["fxFlex", "", 1, "grid-item-inner"]],
            template: function GridlessLayoutComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3, 0);
                    i0.ɵɵtemplate(3, GridlessLayoutComponent_ng_container_3_Template, 1, 0, "ng-container", 4);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(4, "div", 5)(5, "div", 6)(6, "div", 7, 1);
                    i0.ɵɵtemplate(8, GridlessLayoutComponent_ng_container_8_Template, 1, 0, "ng-container", 8);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(9, "div", 9);
                    i0.ɵɵtemplate(10, GridlessLayoutComponent_ng_container_10_Template, 1, 0, "ng-container", 8);
                    i0.ɵɵelementEnd()()()();
                }
                if (rf & 2) {
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("hidden", !ctx.displayMainControls);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("ngTemplateOutlet", ctx.extraActionsTmpl);
                    i0.ɵɵadvance(3);
                    i0.ɵɵproperty("hidden", !ctx.displayItemHeader);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("ngTemplateOutlet", ctx.gridItemActionsTmpl)("ngTemplateOutletContext", i0.ɵɵpureFunction0(7, _c7));
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("ngTemplateOutlet", ctx.innerGridItemTmpl)("ngTemplateOutletContext", i0.ɵɵpureFunction0(8, _c7));
                }
            },
            dependencies: [i2$1.NgTemplateOutlet, DefaultLayoutDirective, FlexFillDirective, DefaultFlexDirective],
            styles: [".layout-wrapper[_ngcontent-%COMP%], .layout-inner[_ngcontent-%COMP%]{height:100%}.is-nested[_nghost-%COMP%]   .layout-wrapper[_ngcontent-%COMP%]{padding:0 .25em;border:1px solid #ccc}.main-controls[_ngcontent-%COMP%]{display:flex;padding:0;align-items:baseline;border-bottom:1px solid #ccc;margin-bottom:.25em}.grid-item-header[_ngcontent-%COMP%]{padding:0;display:flex;align-items:baseline}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridlessLayoutComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-gridless-layout",
                    host: {
                        "[class.is-nested]": "nested"
                    },
                    standalone: false,
                    template: '<div class="layout-wrapper">\n  <div #mainControls [hidden]="!displayMainControls" class="main-controls">\n    <ng-container *ngTemplateOutlet="extraActionsTmpl"></ng-container>\n  </div>\n  <div class="layout-inner">\n    <div fxLayout="column" fxFill>\n      <div #itemHeader fxFlex="0 1 auto" [hidden]="!displayItemHeader" class="grid-item-header">\n        <ng-container *ngTemplateOutlet="gridItemActionsTmpl,context: { i: 0 }"></ng-container>\n      </div>\n      <div fxFlex class="grid-item-inner">\n        <ng-container *ngTemplateOutlet="innerGridItemTmpl,context: { i: 0 }"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n\n',
                    styles: [".layout-wrapper,.layout-inner{height:100%}:host.is-nested .layout-wrapper{padding:0 .25em;border:1px solid #ccc}.main-controls{display:flex;padding:0;align-items:baseline;border-bottom:1px solid #ccc;margin-bottom:.25em}.grid-item-header{padding:0;display:flex;align-items:baseline}\n"]
                }]
        }], () => [], {
        displayMainControls: [{
                type: Input
            }],
        displayItemHeader: [{
                type: Input
            }],
        nested: [{
                type: Input
            }],
        gridItemActionsTmpl: [{
                type: ContentChild,
                args: ["gridItemActions"]
            }],
        innerGridItemTmpl: [{
                type: ContentChild,
                args: ["innerGridItem"]
            }],
        extraActionsTmpl: [{
                type: ContentChild,
                args: ["extraActions"]
            }]
    });
})();
var LayoutFormComponent = class _LayoutFormComponent {
    get attributes() {
        return this.layout.settings.has(this.type) ? this.layout.settings.get(this.type) : [];
    }
    constructor(fb) {
        this.fb = fb;
        this.settingValues = [];
        this.layoutForm = this.fb.group({
            settings: this.fb.control("")
        });
        this.onTouched = () => { };
    }
    ngOnInit() { }
    writeValue(val) {
        if (val) {
            this.layoutForm.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.layoutForm.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.layoutForm.disable();
        }
        else {
            this.layoutForm.enable();
        }
    }
    validate(c) {
        return this.layoutForm.valid ? null : {
            invalidForm: {
                valid: false,
                message: "layout is invalid"
            }
        };
    }
    static {
        this.ɵfac = function LayoutFormComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _LayoutFormComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _LayoutFormComponent,
            selectors: [["druid-layout-form"]],
            inputs: {
                layout: "layout",
                type: "type",
                settingValues: "settingValues"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _LayoutFormComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _LayoutFormComponent),
                        multi: true
                    }])],
            decls: 2,
            vars: 3,
            consts: [[3, "formGroup"], ["formControlName", "settings", 3, "attributes", "attributeValues"]],
            template: function LayoutFormComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0);
                    i0.ɵɵelement(1, "classifieds-ui-attributes-builder", 1);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.layoutForm);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("attributes", ctx.attributes)("attributeValues", ctx.settingValues);
                }
            },
            dependencies: [i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i2.AttributesBuilderComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutFormComponent, [{
            type: Component,
            args: [{
                    selector: "druid-layout-form",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => LayoutFormComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => LayoutFormComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="layoutForm">\n  <classifieds-ui-attributes-builder formControlName="settings" [attributes]="attributes" [attributeValues]="settingValues"></classifieds-ui-attributes-builder>\n</div>\n'
                }]
        }], () => [{
            type: i1.UntypedFormBuilder
        }], {
        layout: [{
                type: Input
            }],
        type: [{
                type: Input
            }],
        settingValues: [{
                type: Input
            }]
    });
})();
var LayoutDialogComponent = class _LayoutDialogComponent {
    get attrValues() {
        return this.dialogForm.get("layout").value === "" ? this.settingValues : this.dialogForm.get("layout").value.settings.map(a => new AttributeValue(a));
    }
    constructor(data, dialogRef, valueComputerService, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.valueComputerService = valueComputerService;
        this.fb = fb;
        this.settingValues = [];
        this.dialogForm = this.fb.group({
            layout: this.fb.control("")
        });
    }
    ngOnInit() {
        this.layout = this.data.layout;
        this.type = this.data.type;
        this.settingValues = this.data.settingValues;
    }
    submit() {
        console.log(this.attrValues);
        const values = this.valueComputerService.compute(this.attrValues);
        this.dialogRef.close(values);
    }
    static {
        this.ɵfac = function LayoutDialogComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _LayoutDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(i2.ValueComputerService), i0.ɵɵdirectiveInject(i1.UntypedFormBuilder));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _LayoutDialogComponent,
            selectors: [["druid-layout-dialog"]],
            standalone: false,
            decls: 6,
            vars: 5,
            consts: [[1, "layout-form", 3, "ngSubmit", "formGroup"], ["formControlName", "layout", 3, "layout", "type", "settingValues"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]],
            template: function LayoutDialogComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "form", 0);
                    i0.ɵɵlistener("ngSubmit", function LayoutDialogComponent_Template_form_ngSubmit_0_listener() {
                        return ctx.submit();
                    });
                    i0.ɵɵelementStart(1, "mat-dialog-content");
                    i0.ɵɵelement(2, "druid-layout-form", 1);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(3, "mat-dialog-actions")(4, "button", 2);
                    i0.ɵɵtext(5, "Save");
                    i0.ɵɵelementEnd()()();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.dialogForm);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("layout", ctx.layout)("type", ctx.type)("settingValues", ctx.settingValues);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("disabled", !ctx.dialogForm.valid);
                }
            },
            dependencies: [i1.ɵNgNoValidate, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i4$1.MatButton, i1$1.MatDialogClose, i1$1.MatDialogActions, i1$1.MatDialogContent, LayoutFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutDialogComponent, [{
            type: Component,
            args: [{
                    selector: "druid-layout-dialog",
                    standalone: false,
                    template: '<form class="layout-form" [formGroup]="dialogForm" (ngSubmit)="submit()">\n  <mat-dialog-content>\n    <druid-layout-form formControlName="layout" [layout]="layout" [type]="type" [settingValues]="settingValues"></druid-layout-form>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button type="submit" mat-raised-button color="primary" mat-dialog-close [disabled]="!dialogForm.valid">Save</button>\n  </mat-dialog-actions>\n</form>\n'
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }]
        }, {
            type: i1$1.MatDialogRef
        }, {
            type: i2.ValueComputerService
        }, {
            type: i1.UntypedFormBuilder
        }], null);
})();
var LayoutPluginManager = class _LayoutPluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "layout"
        }));
    }
    static {
        this.ɵfac = function LayoutPluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _LayoutPluginManager)(i0.ɵɵinject(i1$2.PluginConfigurationManager), i0.ɵɵinject(i2$2.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _LayoutPluginManager,
            factory: _LayoutPluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutPluginManager, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1$2.PluginConfigurationManager
        }, {
            type: i2$2.ModuleLoaderService
        }], null);
})();
var SplitLayoutComponent = class _SplitLayoutComponent {
    get totalRows() {
        return this.dashboard.length == 0 ? 0 : this.dashboard.reduce((p, c) => c.y > p ? c.y : p, 0) + 1;
    }
    constructor(el, dialog, lpm) {
        this.el = el;
        this.dialog = dialog;
        this.lpm = lpm;
        this.itemAdded = new EventEmitter();
        this.itemRemoved = new EventEmitter();
        this.dashboard = [];
        this.displayMainControls = true;
        this.displayItemHeader = true;
        this.nested = false;
        this.layoutSettingChange = new EventEmitter();
        this.rowSettingsChange = new EventEmitter();
        this.columnSettingsChange = new EventEmitter();
        this.rows = 0;
        this.sizes = [];
    }
    ngOnInit() {
        if (this.dashboard.length === 0) {
            this.addRow();
        }
        else {
            for (let i = 0; i < this.totalRows; i++) {
                const totalColumns = this.totalColumns(i);
                this.sizes.push([]);
                for (let j = 0; j < totalColumns; j++) {
                    const index = this.itemIndex(i, j);
                    this.sizes[i].push(this.dashboard[index].cols);
                }
            }
            if (this.totalRows !== this.rowSettings.length && this.rowSettings.length === 0) {
                const settings = [];
                for (let i = 0; i < this.totalRows; i++) {
                    settings.push(new LayoutSetting());
                }
                this.rowSettings = settings;
                this.rowSettingsChange.emit(this.rowSettings);
            }
            let totalCols = 0;
            for (let i = 0; i < this.totalRows; i++) {
                totalCols += this.totalColumns(i);
            }
            if (totalCols !== this.columnSettings.length && this.columnSettings.length === 0) {
                const settings = [];
                for (let i = 0; i < this.totalRows; i++) {
                    for (let j = 0; j < this.totalColumns(i); j++) {
                        settings.push(new LayoutSetting());
                    }
                }
                this.columnSettings = settings;
                this.columnSettingsChange.emit(this.columnSettings);
            }
        }
    }
    removeRow(rIndex) {
        const idx = this.dashboard.reduce((p, c, i) => [...p, ...(c.y === rIndex ? [i] : [])], []);
        let len = idx.length;
        let offset = 0;
        for (let i = 0; i < len; i++) {
            this.dashboard.splice(idx[i] - offset, 1);
            this.rowSettings.splice(rIndex, 1);
            offset++;
            this.itemRemoved.emit(idx[i]);
            this.rowSettingsChange.emit(this.rowSettings);
        }
        len = this.dashboard.length;
        for (let i = 0; i < len; i++) {
            if (this.dashboard[i].y > rIndex) {
                this.dashboard[i].y = this.dashboard[i].y - 1;
            }
        }
    }
    removeColumn(rIndex, cIndex) {
        const index = this.itemIndex(rIndex, cIndex);
        this.dashboard.splice(index, 1);
        this.itemRemoved.emit(index);
    }
    removeColumn2(index) {
        this.dashboard.splice(index, 1);
        this.itemRemoved.emit(index);
    }
    addRow() {
        this.sizes.push([]);
        this.rowSettings = [...this.rowSettings.map(s => new LayoutSetting(s)), new LayoutSetting()];
        this.addColumn(this.totalRows === 0 ? 0 : this.totalRows);
        this.rowSettingsChange.emit(this.rowSettings);
    }
    addColumn(rowIndex) {
        const totalColumns = this.totalColumns(rowIndex);
        const size = totalColumns === 0 ? 100 : 100 / (totalColumns + 1);
        this.sizes[rowIndex][totalColumns] = size;
        this.dashboard.push({
            cols: size,
            rows: 1,
            y: rowIndex,
            x: totalColumns
        });
        this.itemAdded.emit();
        setTimeout(() => this.resetGutter());
    }
    dragEnd(rowIndex, { sizes }) {
        const len = this.dashboard.length;
        let counter = 0;
        this.sizes[rowIndex] = [...sizes];
        const newDash = this.dashboard.map(o => __spreadValues({}, o));
        for (let i = 0; i < len; i++) {
            if (this.dashboard[i].y === rowIndex) {
                newDash[i].cols = sizes[counter];
                counter += 1;
            }
        }
        this.dashboard = newDash;
    }
    itemIndex(rIndex, cIndex) {
        return this.dashboard.findIndex(c => c.y === rIndex && c.x === cIndex);
    }
    itemSize(rIndex, cIndex) {
        return this.dashboard[this.itemIndex(rIndex, cIndex)].cols;
    }
    totalColumns(rowIndex) {
        return this.dashboard.reduce((p, c) => c.y === rowIndex ? p + 1 : p, 0);
    }
    resetGutter() {
        this.el.nativeElement.querySelectorAll(".as-split-gutter").forEach(e => {
            e.style.height = "auto";
        });
    }
    settingValues(type, index) {
        switch (type) {
            case "column":
                return this.columnSettings[index].settings;
            case "row":
                return this.rowSettings[index].settings;
            case "global":
                return this.layoutSetting.settings;
            default:
                return [];
        }
    }
    layoutSettings(type, index) {
        this.lpm.getPlugin("split").pipe(switchMap(layout => this.dialog.open(LayoutDialogComponent, {
            data: {
                layout,
                type,
                settingValues: this.settingValues(type, index)
            }
        }).afterClosed()), filter(settings => !!settings)).subscribe(settings => {
            switch (type) {
                case "column":
                    this.columnSettings = this.columnSettings.map((v, i) => i === index ? new LayoutSetting({
                        settings: settings.map(s => new AttributeValue(s))
                    }) : new LayoutSetting(v));
                    console.log(this.columnSettings);
                    this.columnSettingsChange.emit(this.columnSettings);
                    break;
                case "row":
                    this.rowSettings = this.rowSettings.map((v, i) => i === index ? new LayoutSetting({
                        settings: settings.map(s => new AttributeValue(s))
                    }) : new LayoutSetting(v));
                    console.log(this.rowSettings);
                    this.rowSettingsChange.emit(this.rowSettings);
                    break;
                case "global":
                    this.layoutSetting = new LayoutSetting({
                        settings: settings.map(s => new AttributeValue(s))
                    });
                    this.layoutSettingChange.emit(this.layoutSetting);
                    break;
                default:
            }
        });
    }
    static {
        this.ɵfac = function SplitLayoutComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _SplitLayoutComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1$1.MatDialog), i0.ɵɵdirectiveInject(LayoutPluginManager));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _SplitLayoutComponent,
            selectors: [["classifieds-ui-split-layout"]],
            contentQueries: function SplitLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
                if (rf & 1) {
                    i0.ɵɵcontentQuery(dirIndex, _c3, 5);
                    i0.ɵɵcontentQuery(dirIndex, _c0, 5);
                    i0.ɵɵcontentQuery(dirIndex, _c4, 5);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridItemActionsTmpl = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.innerGridItemTmpl = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.extraActionsTmpl = _t.first);
                }
            },
            viewQuery: function SplitLayoutComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(_c5, 5);
                    i0.ɵɵviewQuery(_c6, 5);
                    i0.ɵɵviewQuery(SplitAreaDirective2, 5);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mainControls = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemHeaders = _t);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.splitAreas = _t);
                }
            },
            hostVars: 2,
            hostBindings: function SplitLayoutComponent_HostBindings(rf, ctx) {
                if (rf & 2) {
                    i0.ɵɵclassProp("is-nested", ctx.nested);
                }
            },
            inputs: {
                dashboard: "dashboard",
                displayMainControls: "displayMainControls",
                displayItemHeader: "displayItemHeader",
                nested: "nested",
                layoutSetting: "layoutSetting",
                rowSettings: "rowSettings",
                columnSettings: "columnSettings"
            },
            outputs: {
                itemAdded: "itemAdded",
                itemRemoved: "itemRemoved",
                layoutSettingChange: "layoutSettingChange",
                rowSettingsChange: "rowSettingsChange",
                columnSettingsChange: "columnSettingsChange"
            },
            standalone: false,
            decls: 6,
            vars: 3,
            consts: [["mainControls", ""], ["rowActions", "matMenu"], ["itemHeader", ""], [1, "layout-wrapper"], [1, "main-controls", 3, "hidden"], [4, "ngTemplateOutlet"], [1, "layout-inner"], ["class", "rows-wrapper", 4, "for"], [1, "rows-wrapper"], [1, "row-controls"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor"], ["type", "button", "mat-menu-item", "", 3, "mousedown"], ["type", "button", "mat-menu-item", "", 1, "remove-row", 3, "mousedown"], [1, "rows-inner"], ["unit", "percent", "direction", "horizontal", 3, "dragEnd"], [3, "size", 4, "for"], [3, "size"], ["fxLayout", "column", "fxFill", ""], [1, "grid-item-header", 3, "hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["fxFlex", "", 1, "grid-item-inner"]],
            template: function SplitLayoutComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4, 0);
                    i0.ɵɵtemplate(3, SplitLayoutComponent_ng_container_3_Template, 1, 0, "ng-container", 5);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(4, "div", 6);
                    i0.ɵɵtemplate(5, SplitLayoutComponent_div_5_Template, 16, 2, "div", 7);
                    i0.ɵɵelementEnd()();
                }
                if (rf & 2) {
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("hidden", !ctx.displayMainControls);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("ngTemplateOutlet", ctx.extraActionsTmpl);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("for", ctx.totalRows);
                }
            },
            dependencies: [i2$1.NgTemplateOutlet, i4$1.MatButton, i8.MatIcon, i6.MatMenu, i6.MatMenuItem, i6.MatMenuTrigger, DefaultLayoutDirective, FlexFillDirective, DefaultFlexDirective, i8$1.SplitComponent, i8$1.SplitAreaDirective, i2$2.ForDirective],
            styles: [".layout-wrapper[_ngcontent-%COMP%], .layout-inner[_ngcontent-%COMP%]{height:100%}.grid-item-header[_ngcontent-%COMP%]{padding:0;display:flex;align-items:baseline}button.delete[_ngcontent-%COMP%]{float:right}.main-controls[_ngcontent-%COMP%]{display:flex;padding:0;align-items:baseline}.rows-inner[_ngcontent-%COMP%]{height:auto;background-color:#fff}.row-controls[_ngcontent-%COMP%]{background-color:gray;padding:0}.remove-row[_ngcontent-%COMP%]{float:right}.is-nested[_nghost-%COMP%]   .layout-wrapper[_ngcontent-%COMP%]{padding:0 .25em;border:1px solid #ccc}.mat-mdc-menu-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0;color:#fff}.mat-mdc-menu-trigger[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{transform:rotate(-90deg)}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SplitLayoutComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-split-layout",
                    host: {
                        "[class.is-nested]": "nested"
                    },
                    standalone: false,
                    template: `<div class="layout-wrapper">
  <div #mainControls [hidden]="!displayMainControls" class="main-controls">
    <!-- <button type="button" (mousedown)="layoutSettings('global')">Layout Settings</button>
    <button type="button" (mousedown)="addRow()">Add Row</button> -->
    <ng-container *ngTemplateOutlet="extraActionsTmpl"></ng-container>
  </div>
  <div class="layout-inner">
    <div *for="totalRows; let i = index" class="rows-wrapper">
      <div class="row-controls">

        <button mat-button type="button" [matMenuTriggerFor]="rowActions">
          <mat-icon>menu</mat-icon>
        </button>
        <mat-menu #rowActions="matMenu">
          <button type="button" mat-menu-item (mousedown)="addColumn(i)">Add Column</button>
          <button type="button" mat-menu-item (mousedown)="layoutSettings('row', i)">Layout Settings</button>
          <button type="button" mat-menu-item (mousedown)="removeRow(i)" class="remove-row">Delete</button>
        </mat-menu>

        <!-- <button type="button" (mousedown)="addColumn(i)">Add Column</button>
        <button type="button" (mousedown)="layoutSettings('row', i)">Layout Settings</button>
        <button type="button" (mousedown)="removeRow(i)" class="remove-row">Delete</button> -->
      </div>
      <div class="rows-inner">
        <as-split unit="percent" direction="horizontal" (dragEnd)="dragEnd(i, $event)">
          <as-split-area *for="totalColumns(i); let j = index" [size]="itemSize(i, j)">
            <div fxLayout="column" fxFill>
              <div #itemHeader [hidden]="!displayItemHeader" class="grid-item-header">
                <!-- <button type="button" (mousedown)="layoutSettings('column', itemIndex(i, j))">Layout Settings</button> -->
                <ng-container *ngTemplateOutlet="gridItemActionsTmpl,context: { i: itemIndex(i, j) }"></ng-container>
                <!-- <span>percent: {{ sizes[i][j] }}</span> figure out what to do with percent -->
                <!-- <button type="button" class="delete" (mousedown)="removeColumn(i, j)" (touchstart)="removeColumn(i, j)">Delete</button> -->
              </div>
              <div fxFlex class="grid-item-inner">
                <ng-container *ngTemplateOutlet="innerGridItemTmpl,context: { i: itemIndex(i, j) }"></ng-container>
              </div>
            </div>
          </as-split-area>
        </as-split>
      </div>
    </div>
  </div>
</div>
`,
                    styles: [".layout-wrapper,.layout-inner{height:100%}.grid-item-header{padding:0;display:flex;align-items:baseline}button.delete{float:right}.main-controls{display:flex;padding:0;align-items:baseline}.rows-inner{height:auto;background-color:#fff}.row-controls{background-color:gray;padding:0}.remove-row{float:right}:host.is-nested .layout-wrapper{padding:0 .25em;border:1px solid #ccc}.mat-mdc-menu-trigger{min-width:0;padding:0;margin:0;color:#fff}.mat-mdc-menu-trigger .mat-icon{transform:rotate(-90deg)}\n"]
                }]
        }], () => [{
            type: i0.ElementRef
        }, {
            type: i1$1.MatDialog
        }, {
            type: LayoutPluginManager
        }], {
        itemAdded: [{
                type: Output
            }],
        itemRemoved: [{
                type: Output
            }],
        dashboard: [{
                type: Input
            }],
        displayMainControls: [{
                type: Input
            }],
        displayItemHeader: [{
                type: Input
            }],
        nested: [{
                type: Input
            }],
        layoutSetting: [{
                type: Input
            }],
        layoutSettingChange: [{
                type: Output
            }],
        rowSettings: [{
                type: Input
            }],
        rowSettingsChange: [{
                type: Output
            }],
        columnSettings: [{
                type: Input
            }],
        columnSettingsChange: [{
                type: Output
            }],
        gridItemActionsTmpl: [{
                type: ContentChild,
                args: ["gridItemActions"]
            }],
        innerGridItemTmpl: [{
                type: ContentChild,
                args: ["innerGridItem"]
            }],
        extraActionsTmpl: [{
                type: ContentChild,
                args: ["extraActions"]
            }],
        mainControls: [{
                type: ViewChild,
                args: ["mainControls"]
            }],
        itemHeaders: [{
                type: ViewChildren,
                args: ["itemHeader"]
            }],
        splitAreas: [{
                type: ViewChildren,
                args: [SplitAreaDirective2]
            }]
    });
})();
var LayoutPlugin = class extends Plugin {
    constructor(data) {
        super(data);
        this.settings = /* @__PURE__ */ new Map();
        if (data.settings) {
            const attributes = [];
            this.renderer = data.renderer;
            this.editor = data.editor;
            data.settings.forEach((v, k) => {
                attributes.push([k, v.map(a => new Attribute(a))]);
            });
            this.settings = new Map(attributes);
        }
    }
};
var LayoutSidenavComponent = class _LayoutSidenavComponent {
    constructor(siteName, authFacade, controlContainer, es) {
        this.siteName = siteName;
        this.authFacade = authFacade;
        this.controlContainer = controlContainer;
        this.close = new EventEmitter();
        this.panelPageListItemsService = es.getEntityCollectionService("PanelPageListItem");
    }
    ngOnInit() {
        this.panelPageListItems$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`);
        this.isAuthenticated$ = this.authFacade.getUser$.pipe(map(u => !!u));
    }
    login() {
        this.authFacade.login();
    }
    static {
        this.ɵfac = function LayoutSidenavComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _LayoutSidenavComponent)(i0.ɵɵdirectiveInject(SITE_NAME), i0.ɵɵdirectiveInject(i1$3.AuthFacade), i0.ɵɵdirectiveInject(i1.ControlContainer), i0.ɵɵdirectiveInject(i3$2.EntityServices));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _LayoutSidenavComponent,
            selectors: [["druid-layout-sidenav"]],
            outputs: {
                close: "close"
            },
            standalone: false,
            ngContentSelectors: _c8,
            decls: 12,
            vars: 6,
            consts: [[1, "close-wrapper"], [3, "click"], ["type", "button", "class", "login", "mat-button", "", 3, "click", 4, "ngIf"], [1, "viewport-container"], ["appendOnly", "", "itemSize", "48", 1, "viewport"], ["class", "pp-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["type", "button", "mat-button", "", 1, "login", 3, "click"], [1, "pp-item"], [3, "routerLink"]],
            template: function LayoutSidenavComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵprojectionDef();
                    i0.ɵɵelementStart(0, "div", 0)(1, "mat-icon", 1);
                    i0.ɵɵlistener("click", function LayoutSidenavComponent_Template_mat_icon_click_1_listener() {
                        return ctx.close.emit();
                    });
                    i0.ɵɵtext(2, "close");
                    i0.ɵɵelementEnd();
                    i0.ɵɵtemplate(3, LayoutSidenavComponent_button_3_Template, 2, 0, "button", 2);
                    i0.ɵɵpipe(4, "async");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelement(5, "mat-divider");
                    i0.ɵɵprojection(6);
                    i0.ɵɵelement(7, "mat-divider");
                    i0.ɵɵelementStart(8, "div", 3)(9, "cdk-virtual-scroll-viewport", 4);
                    i0.ɵɵtemplate(10, LayoutSidenavComponent_div_10_Template, 3, 4, "div", 5);
                    i0.ɵɵpipe(11, "async");
                    i0.ɵɵelementEnd()();
                }
                if (rf & 2) {
                    i0.ɵɵadvance(3);
                    i0.ɵɵproperty("ngIf", !i0.ɵɵpipeBind1(4, 2, ctx.isAuthenticated$));
                    i0.ɵɵadvance(7);
                    i0.ɵɵproperty("cdkVirtualForOf", i0.ɵɵpipeBind1(11, 4, ctx.panelPageListItems$));
                }
            },
            dependencies: [i2$1.NgIf, i5.RouterLink, i4$1.MatButton, i7.MatDivider, i8.MatIcon, i9.CdkFixedSizeVirtualScroll, i9.CdkVirtualForOf, i9.CdkVirtualScrollViewport, i2$1.AsyncPipe],
            styles: ["[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}.close-wrapper[_ngcontent-%COMP%]{padding:16px 16px 0;position:relative}.login[_ngcontent-%COMP%]{position:absolute;top:7px;right:5px}.pp-item[_ngcontent-%COMP%]{line-height:48px}.viewport[_ngcontent-%COMP%]{height:100%;width:300px}.viewport-container[_ngcontent-%COMP%]{flex:1;padding:0 0 0 16px;box-sizing:border-box}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutSidenavComponent, [{
            type: Component,
            args: [{
                    selector: "druid-layout-sidenav",
                    standalone: false,
                    template: `<div class="close-wrapper">
  <mat-icon (click)="close.emit()">close</mat-icon>
  <button type="button" class="login" *ngIf="!(isAuthenticated$ | async)" mat-button (click)="login()">login</button>
</div>
<mat-divider></mat-divider>
<ng-content></ng-content>
<mat-divider></mat-divider>
<div class="viewport-container">
  <cdk-virtual-scroll-viewport class="viewport" appendOnly itemSize="48">
    <div *cdkVirtualFor="let pp of (panelPageListItems$ | async)" class="pp-item">
      <a [routerLink]="[pp.path, 'manage']">{{ pp.path }}</a>
    </div>
  </cdk-virtual-scroll-viewport>
</div>`,
                    styles: [":host{height:100%;display:flex;flex-direction:column}.close-wrapper{padding:16px 16px 0;position:relative}.login{position:absolute;top:7px;right:5px}.pp-item{line-height:48px}.viewport{height:100%;width:300px}.viewport-container{flex:1;padding:0 0 0 16px;box-sizing:border-box}\n"]
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [SITE_NAME]
                }]
        }, {
            type: i1$3.AuthFacade
        }, {
            type: i1.ControlContainer
        }, {
            type: i3$2.EntityServices
        }], {
        close: [{
                type: Output
            }]
    });
})();
var GridlessLayoutEditorComponent = class _GridlessLayoutEditorComponent extends LayoutEditorBaseComponent {
    constructor(siteName, authFacade, controlContainer, es) {
        super(controlContainer);
        this.siteName = siteName;
        this.authFacade = authFacade;
        this.controlContainer = controlContainer;
        this.panelPageListItemsService = es.getEntityCollectionService("PanelPageListItem");
    }
    ngOnInit() {
        this.panelPageListItems$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`);
        this.isAuthenticated$ = this.authFacade.getUser$.pipe(map(u => !!u));
    }
    login() {
        this.authFacade.login();
    }
    static {
        this.ɵfac = function GridlessLayoutEditorComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _GridlessLayoutEditorComponent)(i0.ɵɵdirectiveInject(SITE_NAME), i0.ɵɵdirectiveInject(i1$3.AuthFacade), i0.ɵɵdirectiveInject(i1.ControlContainer), i0.ɵɵdirectiveInject(i3$2.EntityServices));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _GridlessLayoutEditorComponent,
            selectors: [["classifieds-ui-gridless-layout-editor"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 42,
            vars: 19,
            consts: [["drawer", ""], ["extraActions", ""], ["gridItemActions", ""], ["innerGridItem", ""], ["topActions", "matMenu"], ["panes", ""], ["autosize", "", 3, "hasBackdrop"], ["fixedInViewport", "", "mode", "over"], [3, "close"], [4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "mousedown", "touchstart"], ["cdkDropListGroup", "", 3, "formGroup", "nested"], ["mat-menu-item", "", "type", "submit", 3, "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "mousedown", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "mousedown", "touchstart", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "click"], ["type", "button", "mat-menu-item", "", 3, "click"], ["type", "button", "mat-menu-item", "", 3, "mousedown"], ["mat-menu-item", "", "type", "button", 3, "mousedown", "touchstart"], ["mat-button", "", "type", "button", "class", "drawer-trigger", 3, "click", 4, "ngIf"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor", 4, "ngIf"], ["class", "style-title", 4, "ngIf"], ["class", "spacer", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "display-type"], ["required", "", "formControlName", "displayType"], ["value", "page"], ["value", "form"], ["value", "json"], [1, "layout-type"], ["required", "", "formControlName", "layoutType"], ["value", "grid"], ["value", "gridless"], ["value", "split"], ["class", "brand", 4, "ngIf"], ["mat-button", "", "type", "button", 1, "drawer-trigger", 3, "click"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor"], [1, "style-title"], [1, "spacer"], [1, "brand"], ["cdkDropList", "", 1, "panel-dropzone", 3, "change", "cdkDropListDropped", "cdkDropListData", "multiple", "disableClick"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-menu-item", "", "type", "submit", 3, "click"]],
            template: function GridlessLayoutEditorComponent_Template(rf, ctx) {
                if (rf & 1) {
                    const _r1 = i0.ɵɵgetCurrentView();
                    i0.ɵɵelementStart(0, "mat-sidenav-container", 6)(1, "mat-sidenav", 7, 0)(3, "druid-layout-sidenav", 8);
                    i0.ɵɵlistener("close", function GridlessLayoutEditorComponent_Template_druid_layout_sidenav_close_3_listener() {
                        i0.ɵɵrestoreView(_r1);
                        const drawer_r2 = i0.ɵɵreference(2);
                        return i0.ɵɵresetView(drawer_r2.toggle());
                    });
                    i0.ɵɵelementStart(4, "nav")(5, "ul");
                    i0.ɵɵtemplate(6, GridlessLayoutEditorComponent_li_6_Template, 3, 0, "li", 9)(7, GridlessLayoutEditorComponent_li_7_Template, 3, 0, "li", 9)(8, GridlessLayoutEditorComponent_li_8_Template, 3, 0, "li", 9)(9, GridlessLayoutEditorComponent_li_9_Template, 3, 0, "li", 9)(10, GridlessLayoutEditorComponent_li_10_Template, 3, 0, "li", 9)(11, GridlessLayoutEditorComponent_li_11_Template, 3, 0, "li", 9);
                    i0.ɵɵelementStart(12, "li")(13, "button", 10);
                    i0.ɵɵlistener("mousedown", function GridlessLayoutEditorComponent_Template_button_mousedown_13_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.addContent(0));
                    })("touchstart", function GridlessLayoutEditorComponent_Template_button_touchstart_13_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.addContent(0));
                    });
                    i0.ɵɵtext(14, "Add Content");
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementStart(15, "li")(16, "button", 10);
                    i0.ɵɵlistener("mousedown", function GridlessLayoutEditorComponent_Template_button_mousedown_16_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.editPanelProps(0));
                    })("touchstart", function GridlessLayoutEditorComponent_Template_button_touchstart_16_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.editPanelProps(0));
                    });
                    i0.ɵɵtext(17, "Props");
                    i0.ɵɵelementEnd()();
                    i0.ɵɵtemplate(18, GridlessLayoutEditorComponent_li_18_Template, 3, 0, "li", 9)(19, GridlessLayoutEditorComponent_li_19_Template, 3, 0, "li", 9);
                    i0.ɵɵelementEnd()()()();
                    i0.ɵɵelementStart(20, "mat-sidenav-content")(21, "classifieds-ui-gridless-layout", 11);
                    i0.ɵɵtemplate(22, GridlessLayoutEditorComponent_ng_template_22_Template, 26, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(24, GridlessLayoutEditorComponent_ng_template_24_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(26, GridlessLayoutEditorComponent_ng_template_26_Template, 4, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
                    i0.ɵɵelementEnd()()();
                    i0.ɵɵelementStart(28, "mat-menu", null, 4);
                    i0.ɵɵtemplate(30, GridlessLayoutEditorComponent_button_30_Template, 2, 0, "button", 12)(31, GridlessLayoutEditorComponent_button_31_Template, 2, 0, "button", 13)(32, GridlessLayoutEditorComponent_button_32_Template, 2, 0, "button", 13)(33, GridlessLayoutEditorComponent_button_33_Template, 2, 0, "button", 13)(34, GridlessLayoutEditorComponent_button_34_Template, 2, 0, "button", 14)(35, GridlessLayoutEditorComponent_button_35_Template, 2, 0, "button", 14);
                    i0.ɵɵelementStart(36, "button", 10);
                    i0.ɵɵlistener("mousedown", function GridlessLayoutEditorComponent_Template_button_mousedown_36_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.addContent(0));
                    })("touchstart", function GridlessLayoutEditorComponent_Template_button_touchstart_36_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.addContent(0));
                    });
                    i0.ɵɵtext(37, "Add Content");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(38, "button", 10);
                    i0.ɵɵlistener("mousedown", function GridlessLayoutEditorComponent_Template_button_mousedown_38_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.editPanelProps(0));
                    })("touchstart", function GridlessLayoutEditorComponent_Template_button_touchstart_38_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.editPanelProps(0));
                    });
                    i0.ɵɵtext(39, "Props");
                    i0.ɵɵelementEnd();
                    i0.ɵɵtemplate(40, GridlessLayoutEditorComponent_button_40_Template, 2, 0, "button", 15)(41, GridlessLayoutEditorComponent_button_41_Template, 2, 0, "button", 15);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("hasBackdrop", false);
                    i0.ɵɵadvance(6);
                    i0.ɵɵproperty("ngIf", ctx.savable);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.savable || ctx.nested);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.nested);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.nested);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.savable);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.savable);
                    i0.ɵɵadvance(7);
                    i0.ɵɵproperty("ngIf", !ctx.editor.hasPanelStyle(0));
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.editor.hasPanelStyle(0));
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("formGroup", ctx.controlContainer.control)("nested", ctx.nested);
                    i0.ɵɵadvance(9);
                    i0.ɵɵproperty("ngIf", ctx.savable);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.savable || ctx.nested);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.nested);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.nested);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.savable);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.savable);
                    i0.ɵɵadvance(5);
                    i0.ɵɵproperty("ngIf", !ctx.editor.hasPanelStyle(0));
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.editor.hasPanelStyle(0));
                }
            },
            dependencies: [i2$1.NgForOf, i2$1.NgIf, i2$1.NgTemplateOutlet, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i3$3.CdkDropList, i3$3.CdkDropListGroup, i3$3.CdkDrag, i4$2.MatOption, i4$1.MatButton, i8.MatIcon, i9$1.MatFormField, i6.MatMenu, i6.MatMenuItem, i6.MatMenuTrigger, i11.MatSelect, i12.MatSidenav, i12.MatSidenavContainer, i12.MatSidenavContent, i13.NgxDropzoneComponent, GridlessLayoutComponent, LayoutSidenavComponent],
            styles: [".layout-type[_ngcontent-%COMP%]     .mat-form-field-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}.layout-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper{display:none}.layout-type[_ngcontent-%COMP%]     .mat-form-field-infix, .display-type[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:none;padding:0;margin:0}.layout-type[_ngcontent-%COMP%]     .mat-select-value, .display-type[_ngcontent-%COMP%]     .mat-select-value{text-align:right}.layout-type[_ngcontent-%COMP%]     .mat-form-field-underline, .display-type[_ngcontent-%COMP%]     .mat-form-field-underline{display:none}.layout-type[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper, .display-type[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-menu-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}.cdk-drag[_ngcontent-%COMP%]{padding:.25em}.brand[_ngcontent-%COMP%]{font-family:sans-serif;text-align:right;flex:1;letter-spacing:.2em;font-weight:lighter;color:#c82913}.spacer[_ngcontent-%COMP%]{flex:1}.style-title[_ngcontent-%COMP%]{font-family:sans-serif;font-weight:500;text-transform:lowercase;color:#000}.mat-icon[_ngcontent-%COMP%]{color:#000}.drawer-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridlessLayoutEditorComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-gridless-layout-editor",
                    standalone: false,
                    template: '<mat-sidenav-container autosize [hasBackdrop]="false">\n\n  <mat-sidenav #drawer fixedInViewport mode="over">\n    <druid-layout-sidenav (close)="drawer.toggle()">\n      <nav>\n        <ul>\n          <li *ngIf="savable"><button mat-menu-item type="button" (click)="editor.submit()">Save</button></li>\n          <li *ngIf="savable || nested"><button type="button" mat-menu-item (click)="editor.onPropertiesClick()">Properties</button></li>\n          <li *ngIf="nested"><button type="button" mat-menu-item (click)="editor.onDeleteClick()">Delete</button></li>\n          <li *ngIf="nested"><button type="button" mat-menu-item (click)="editor.onRulesClick()">Rules</button></li>\n          <li *ngIf="savable"><button type="button" mat-menu-item (mousedown)="editor.onPersistenceClick()">Persistence</button></li>\n          <li *ngIf="savable"><button type="button" mat-menu-item (mousedown)="editor.onInteractionsClick()">Interactions</button></li>\n          <li><button type="button" mat-menu-item (mousedown)="editor.addContent(0)" (touchstart)="editor.addContent(0)">Add Content</button></li>\n          <li><button type="button" mat-menu-item (mousedown)="editor.editPanelProps(0)" (touchstart)="editor.editPanelProps(0)" >Props</button></li>\n          <li *ngIf="!editor.hasPanelStyle(0)"><button mat-menu-item  type="button" (mousedown)="editor.applyStyle(0)" (touchstart)="editor.applyStyle(0)">Apply Style</button></li>\n          <li *ngIf="editor.hasPanelStyle(0)"><button mat-menu-item type="button" (mousedown)="editor.removeStyle(0)" (touchstart)="editor.removeStyle(0)" >Remove Style</button></li>\n        </ul>\n      </nav>\n    </druid-layout-sidenav>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n\n    <classifieds-ui-gridless-layout [formGroup]="controlContainer.control" [nested]="nested" cdkDropListGroup>\n      <ng-template #extraActions>\n\n        <button *ngIf="!nested" mat-button type="button" class="drawer-trigger" (click)="drawer.toggle()">\n          <mat-icon>menu</mat-icon>\n        </button>\n\n        <button *ngIf="nested" mat-button type="button" [matMenuTriggerFor]="topActions">\n          <mat-icon *ngIf="nested">arrow_drop_down</mat-icon>\n        </button>\n\n        <div>\n          <ng-container *ngIf="savable"><ng-container *ngTemplateOutlet="contextsMenuTpl"></ng-container></ng-container>\n        </div>\n\n        <!-- this looks a little wonky breaking with tradition in the top menu -->\n        <div *ngIf="editor.hasPanelStyle(0) && nested" class="style-title">{{ editor.panelStyleTitle(0) }}</div>\n\n        <span *ngIf="nested" class="spacer"></span>\n        <ng-container *ngTemplateOutlet="extraActionsAreaTmpl"></ng-container>\n\n        <div class="display-type">\n          <mat-form-field>\n            <mat-select required formControlName="displayType">\n              <mat-option value="page">page</mat-option>\n              <mat-option value="form">form</mat-option>\n              <mat-option value="json">json</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class="layout-type">\n          <mat-form-field>\n            <mat-select required formControlName="layoutType">\n              <mat-option value="grid">grid</mat-option>\n              <mat-option value="gridless">gridless</mat-option>\n              <mat-option value="split">split</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div *ngIf="!nested" class="brand">Quell</div>\n\n      </ng-template>\n      <ng-template #gridItemActions let-i="i">\n        <!-- for the root level display in item container -->\n        <div *ngIf="editor.hasPanelStyle(0) && !nested" class="style-title">{{ editor.panelStyleTitle(0) }}</div>\n      </ng-template>\n      <ng-template #innerGridItem let-i="i">\n        <ngx-dropzone [cdkDropListData]="i" class="panel-dropzone" [multiple]="true" [disableClick]="true" (change)="editor.onFileChange($event, i)" cdkDropList (cdkDropListDropped)="editor.onDrop($event)">\n          <div #panes>\n            <div *ngFor="let pane of editor.panelPanes(i).controls; let j = index" cdkDrag>\n              <ng-container *ngTemplateOutlet="editablePaneTpl;context:{ i: i, j: j }"></ng-container>\n            </div>\n          </div>\n        </ngx-dropzone>\n      </ng-template>\n\n    </classifieds-ui-gridless-layout>\n\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n\n<mat-menu #topActions="matMenu">\n  <button *ngIf="savable" mat-menu-item type="submit" (click)="editor.submit()">Save</button>\n  <button *ngIf="savable || nested" type="button" mat-menu-item (click)="editor.onPropertiesClick()">Properties</button>\n  <button *ngIf="nested" type="button" mat-menu-item (click)="editor.onDeleteClick()">Delete</button>\n  <button *ngIf="nested" type="button" mat-menu-item (click)="editor.onRulesClick()">Rules</button>\n  <button *ngIf="savable" type="button" mat-menu-item (mousedown)="editor.onPersistenceClick()">Persistence</button>\n  <button *ngIf="savable" type="button" mat-menu-item (mousedown)="editor.onInteractionsClick()">Interactions</button>\n  <button type="button" mat-menu-item (mousedown)="editor.addContent(0)" (touchstart)="editor.addContent(0)">Add Content</button>\n  <button type="button" mat-menu-item (mousedown)="editor.editPanelProps(0)" (touchstart)="editor.editPanelProps(0)" >Props</button>\n  <button *ngIf="!editor.hasPanelStyle(0)" mat-menu-item  type="button" (mousedown)="editor.applyStyle(0)" (touchstart)="editor.applyStyle(0)">Apply Style</button>\n  <button *ngIf="editor.hasPanelStyle(0)" mat-menu-item type="button" (mousedown)="editor.removeStyle(0)" (touchstart)="editor.removeStyle(0)" >Remove Style</button>\n</mat-menu>',
                    styles: [".layout-type ::ng-deep .mat-form-field-wrapper,.display-type ::ng-deep .mat-form-field-wrapper{padding-bottom:0}.layout-type ::ng-deep .mat-form-field-label-wrapper,.display-type ::ng-deep .mat-form-field-label-wrapper{display:none}.layout-type ::ng-deep .mat-form-field-infix,.display-type ::ng-deep .mat-form-field-infix{border-top:none;padding:0;margin:0}.layout-type ::ng-deep .mat-select-value,.display-type ::ng-deep .mat-select-value{text-align:right}.layout-type ::ng-deep .mat-form-field-underline,.display-type ::ng-deep .mat-form-field-underline{display:none}.layout-type ::ng-deep .mat-mdc-form-field-subscript-wrapper,.display-type ::ng-deep .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-menu-trigger{min-width:0;padding:0;margin:0}.cdk-drag{padding:.25em}.brand{font-family:sans-serif;text-align:right;flex:1;letter-spacing:.2em;font-weight:lighter;color:#c82913}.spacer{flex:1}.style-title{font-family:sans-serif;font-weight:500;text-transform:lowercase;color:#000}.mat-icon{color:#000}.drawer-trigger{min-width:0;padding:0;margin:0}\n"]
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [SITE_NAME]
                }]
        }, {
            type: i1$3.AuthFacade
        }, {
            type: i1.ControlContainer
        }, {
            type: i3$2.EntityServices
        }], null);
})();
var GridlessLayoutRendererComponent = class _GridlessLayoutRendererComponent extends LayoutRendererBaseComponent {
    constructor(controlContainer) {
        super(controlContainer);
        this.controlContainer = controlContainer;
    }
    ngOnInit() { }
    static {
        this.ɵfac = function GridlessLayoutRendererComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _GridlessLayoutRendererComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer, 8));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _GridlessLayoutRendererComponent,
            selectors: [["classifieds-ui-gridless-layout-renderer"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 3,
            vars: 2,
            consts: [["innerGridItem", ""], [3, "displayMainControls", "displayItemHeader"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
            template: function GridlessLayoutRendererComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "classifieds-ui-gridless-layout", 1);
                    i0.ɵɵtemplate(1, GridlessLayoutRendererComponent_ng_template_1_Template, 1, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("displayMainControls", ctx.displayMainControls)("displayItemHeader", ctx.displayItemHeader);
                }
            },
            dependencies: [i2$1.NgTemplateOutlet, GridlessLayoutComponent],
            styles: ["[_nghost-%COMP%]{height:100%}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridlessLayoutRendererComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-gridless-layout-renderer",
                    standalone: false,
                    template: '<classifieds-ui-gridless-layout [displayMainControls]="displayMainControls" [displayItemHeader]="displayItemHeader">\n  <ng-template #innerGridItem let-i="i">\n    <ng-container *ngTemplateOutlet="renderPanelTpl;context:{ i: i }"></ng-container>\n  </ng-template>\n</classifieds-ui-gridless-layout>',
                    styles: [":host{height:100%}\n"]
                }]
        }], () => [{
            type: i1.ControlContainer,
            decorators: [{
                    type: Optional
                }]
        }], null);
})();
var SplitLayoutEditorComponent = class _SplitLayoutEditorComponent extends LayoutEditorBaseComponent {
    get gridItems() {
        return this.dashboard.map((gi, i) => __spreadProps(__spreadValues({}, gi), {
            cols: Math.floor(gi.cols),
            weight: i
        }));
    }
    constructor(controlContainer) {
        super(controlContainer);
        this.controlContainer = controlContainer;
    }
    ngOnInit() { }
    static {
        this.ɵfac = function SplitLayoutEditorComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _SplitLayoutEditorComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _SplitLayoutEditorComponent,
            selectors: [["classifieds-ui-split-layout-editor"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 42,
            vars: 17,
            consts: [["drawer", ""], ["splitLayout", ""], ["extraActions", ""], ["gridItemActions", ""], ["innerGridItem", ""], ["topActions", "matMenu"], ["panelActions", "matMenu"], ["panes", ""], ["autosize", "", 3, "hasBackdrop"], ["fixedInViewport", "", "mode", "over"], [3, "close"], [4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "mousedown"], ["type", "button", "mat-menu-item", "", 3, "click"], ["cdkDropListGroup", "", 3, "itemAdded", "itemRemoved", "layoutSettingChange", "rowSettingsChange", "columnSettingsChange", "nested", "formGroup", "dashboard", "layoutSetting", "rowSettings", "columnSettings"], ["mat-menu-item", "", "type", "submit", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 3, "mousedown", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "click"], ["mat-button", "", "type", "button", "class", "drawer-trigger", 3, "click", 4, "ngIf"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor", 4, "ngIf"], ["class", "spacer", 4, "ngIf"], [1, "display-type"], ["required", "", "formControlName", "displayType"], ["value", "page"], ["value", "form"], ["value", "json"], [1, "layout-type"], ["required", "", "formControlName", "layoutType"], ["value", "gridless"], ["value", "split"], [4, "ngTemplateOutlet"], ["class", "brand", 4, "ngIf"], ["mat-button", "", "type", "button", 1, "drawer-trigger", 3, "click"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor"], [1, "spacer"], [1, "brand"], ["mat-button", "", "type", "button", 1, "panel-actions-btn", 3, "matMenuTriggerFor"], ["type", "button", "mat-menu-item", "", 3, "mousedown", "touchstart"], ["mat-menu-item", "", "type", "button", 3, "mousedown", "touchstart", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 1, "delete", 3, "mousedown", "touchstart"], ["class", "style-title", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "mousedown", "touchstart"], [1, "style-title"], ["cdkDropList", "", 1, "panel-dropzone", 3, "change", "cdkDropListDropped", "cdkDropListData", "multiple", "disableClick"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-menu-item", "", "type", "submit", 3, "click"]],
            template: function SplitLayoutEditorComponent_Template(rf, ctx) {
                if (rf & 1) {
                    const _r1 = i0.ɵɵgetCurrentView();
                    i0.ɵɵelementStart(0, "mat-sidenav-container", 8)(1, "mat-sidenav", 9, 0)(3, "druid-layout-sidenav", 10);
                    i0.ɵɵlistener("close", function SplitLayoutEditorComponent_Template_druid_layout_sidenav_close_3_listener() {
                        i0.ɵɵrestoreView(_r1);
                        const drawer_r2 = i0.ɵɵreference(2);
                        return i0.ɵɵresetView(drawer_r2.toggle());
                    });
                    i0.ɵɵelementStart(4, "nav")(5, "ul");
                    i0.ɵɵtemplate(6, SplitLayoutEditorComponent_li_6_Template, 3, 0, "li", 11);
                    i0.ɵɵelementStart(7, "li")(8, "button", 12);
                    i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_Template_button_mousedown_8_listener() {
                        i0.ɵɵrestoreView(_r1);
                        const splitLayout_r5 = i0.ɵɵreference(22);
                        return i0.ɵɵresetView(splitLayout_r5.addRow());
                    });
                    i0.ɵɵtext(9, "Add Row");
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementStart(10, "li")(11, "button", 13);
                    i0.ɵɵlistener("click", function SplitLayoutEditorComponent_Template_button_click_11_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.onPropertiesClick());
                    });
                    i0.ɵɵtext(12, "Props");
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementStart(13, "li")(14, "button", 12);
                    i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_Template_button_mousedown_14_listener() {
                        i0.ɵɵrestoreView(_r1);
                        const splitLayout_r5 = i0.ɵɵreference(22);
                        return i0.ɵɵresetView(splitLayout_r5.layoutSettings("global"));
                    });
                    i0.ɵɵtext(15, "Layout Settings");
                    i0.ɵɵelementEnd()();
                    i0.ɵɵtemplate(16, SplitLayoutEditorComponent_li_16_Template, 3, 0, "li", 11)(17, SplitLayoutEditorComponent_li_17_Template, 3, 0, "li", 11)(18, SplitLayoutEditorComponent_li_18_Template, 3, 0, "li", 11)(19, SplitLayoutEditorComponent_li_19_Template, 3, 0, "li", 11);
                    i0.ɵɵelementEnd()()()();
                    i0.ɵɵelementStart(20, "mat-sidenav-content")(21, "classifieds-ui-split-layout", 14, 1);
                    i0.ɵɵlistener("itemAdded", function SplitLayoutEditorComponent_Template_classifieds_ui_split_layout_itemAdded_21_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.onItemAdded());
                    })("itemRemoved", function SplitLayoutEditorComponent_Template_classifieds_ui_split_layout_itemRemoved_21_listener($event) {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.onItemRemoved($event));
                    })("layoutSettingChange", function SplitLayoutEditorComponent_Template_classifieds_ui_split_layout_layoutSettingChange_21_listener($event) {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.onLayoutSettingChange($event));
                    })("rowSettingsChange", function SplitLayoutEditorComponent_Template_classifieds_ui_split_layout_rowSettingsChange_21_listener($event) {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.onRowSettingsChange($event));
                    })("columnSettingsChange", function SplitLayoutEditorComponent_Template_classifieds_ui_split_layout_columnSettingsChange_21_listener($event) {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.onColumnSettingsChange($event));
                    });
                    i0.ɵɵtemplate(23, SplitLayoutEditorComponent_ng_template_23_Template, 23, 6, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(25, SplitLayoutEditorComponent_ng_template_25_Template, 16, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(27, SplitLayoutEditorComponent_ng_template_27_Template, 4, 4, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
                    i0.ɵɵelementEnd()()();
                    i0.ɵɵelementStart(29, "mat-menu", null, 5);
                    i0.ɵɵtemplate(31, SplitLayoutEditorComponent_button_31_Template, 2, 0, "button", 15);
                    i0.ɵɵelementStart(32, "button", 12);
                    i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_Template_button_mousedown_32_listener() {
                        i0.ɵɵrestoreView(_r1);
                        const splitLayout_r5 = i0.ɵɵreference(22);
                        return i0.ɵɵresetView(splitLayout_r5.addRow());
                    });
                    i0.ɵɵtext(33, "Add Row");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(34, "button", 13);
                    i0.ɵɵlistener("click", function SplitLayoutEditorComponent_Template_button_click_34_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.onPropertiesClick());
                    });
                    i0.ɵɵtext(35, "Props");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(36, "button", 12);
                    i0.ɵɵlistener("mousedown", function SplitLayoutEditorComponent_Template_button_mousedown_36_listener() {
                        i0.ɵɵrestoreView(_r1);
                        const splitLayout_r5 = i0.ɵɵreference(22);
                        return i0.ɵɵresetView(splitLayout_r5.layoutSettings("global"));
                    });
                    i0.ɵɵtext(37, "Layout Settings");
                    i0.ɵɵelementEnd();
                    i0.ɵɵtemplate(38, SplitLayoutEditorComponent_button_38_Template, 2, 0, "button", 16)(39, SplitLayoutEditorComponent_button_39_Template, 2, 0, "button", 17)(40, SplitLayoutEditorComponent_button_40_Template, 2, 0, "button", 17)(41, SplitLayoutEditorComponent_button_41_Template, 2, 0, "button", 16);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("hasBackdrop", false);
                    i0.ɵɵadvance(6);
                    i0.ɵɵproperty("ngIf", ctx.savable);
                    i0.ɵɵadvance(10);
                    i0.ɵɵproperty("ngIf", ctx.nested);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.savable);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.savable);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.nested);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("nested", ctx.nested)("formGroup", ctx.controlContainer.control)("dashboard", ctx.dashboard)("layoutSetting", ctx.layoutSetting)("rowSettings", ctx.rowSettings)("columnSettings", ctx.columnSettings);
                    i0.ɵɵadvance(10);
                    i0.ɵɵproperty("ngIf", ctx.savable);
                    i0.ɵɵadvance(7);
                    i0.ɵɵproperty("ngIf", ctx.nested);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.savable);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.savable);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.nested);
                }
            },
            dependencies: [i2$1.NgForOf, i2$1.NgIf, i2$1.NgTemplateOutlet, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i3$3.CdkDropList, i3$3.CdkDropListGroup, i3$3.CdkDrag, i4$2.MatOption, i4$1.MatButton, i8.MatIcon, i9$1.MatFormField, i6.MatMenu, i6.MatMenuItem, i6.MatMenuTrigger, i11.MatSelect, i12.MatSidenav, i12.MatSidenavContainer, i12.MatSidenavContent, i13.NgxDropzoneComponent, SplitLayoutComponent, LayoutSidenavComponent],
            styles: [".layout-type[_ngcontent-%COMP%]     .mat-form-field-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}.layout-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper{display:none}.layout-type[_ngcontent-%COMP%]     .mat-form-field-infix, .display-type[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:none;padding:0;margin:0}.layout-type[_ngcontent-%COMP%]     .mat-select-value, .display-type[_ngcontent-%COMP%]     .mat-select-value{text-align:right}.layout-type[_ngcontent-%COMP%]     .mat-form-field-underline, .display-type[_ngcontent-%COMP%]     .mat-form-field-underline{display:none}.layout-type[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper, .display-type[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-menu-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}.cdk-drag[_ngcontent-%COMP%]{padding:.25em}.panel-actions-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{transform:rotate(-90deg)}.brand[_ngcontent-%COMP%]{font-family:sans-serif;text-align:right;flex:1;letter-spacing:.2em;font-weight:lighter;color:#c82913}.spacer[_ngcontent-%COMP%]{flex:1}.style-title[_ngcontent-%COMP%]{font-family:sans-serif;font-weight:500;text-transform:lowercase;color:#000}.drawer-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SplitLayoutEditorComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-split-layout-editor",
                    standalone: false,
                    template: `<mat-sidenav-container autosize [hasBackdrop]="false">

  <mat-sidenav #drawer fixedInViewport mode="over">
    <druid-layout-sidenav (close)="drawer.toggle()">
      <nav>
        <ul>
          <li *ngIf="savable"><button mat-menu-item type="button" (click)="editor.submit()">Save</button></li>
          <li><button type="button" mat-menu-item (mousedown)="splitLayout.addRow()">Add Row</button></li>
          <li><button type="button" mat-menu-item (click)="editor.onPropertiesClick()">Props</button></li>
          <li><button type="button" mat-menu-item (mousedown)="splitLayout.layoutSettings('global')">Layout Settings</button></li>
          <li *ngIf="nested"><button mat-menu-item type="button" (click)="editor.onRulesClick()">Rules</button></li>
          <li *ngIf="savable"><button type="button" mat-menu-item (mousedown)="editor.onPersistenceClick()">Persistence</button></li>
          <li *ngIf="savable"><button type="button" mat-menu-item (mousedown)="editor.onInteractionsClick()">Interactions</button></li>
          <li *ngIf="nested"><button mat-menu-item type="button" (click)="editor.onDeleteClick()">Delete</button></li>
        </ul>
      </nav>
    </druid-layout-sidenav>
  </mat-sidenav>

  <mat-sidenav-content>

    <classifieds-ui-split-layout #splitLayout [nested]="nested" [formGroup]="controlContainer.control" cdkDropListGroup (itemAdded)="editor.onItemAdded()" (itemRemoved)="editor.onItemRemoved($event)" [dashboard]="dashboard" [layoutSetting]="layoutSetting" [rowSettings]="rowSettings" [columnSettings]="columnSettings" (layoutSettingChange)="editor.onLayoutSettingChange($event)" (rowSettingsChange)="editor.onRowSettingsChange($event)" (columnSettingsChange)="editor.onColumnSettingsChange($event)">
      <ng-template #extraActions>

        <button *ngIf="!nested" mat-button type="button" class="drawer-trigger" (click)="drawer.toggle()">
          <mat-icon>menu</mat-icon>
        </button>
    
        <button *ngIf="nested" mat-button type="button" [matMenuTriggerFor]="topActions">
          <mat-icon>menu</mat-icon>
        </button>
    
        <!-- <button *ngIf="savable" type="submit">Save</button>
        <button type="button" (click)="editor.onPropertiesClick()">Props</button>
        <button *ngIf="nested" type="button" (click)="editor.onRulesClick()">Rules</button>
        <button *ngIf="nested" type="button" (click)="editor.onDeleteClick()">Delete</button> -->
        <span *ngIf="nested" class="spacer"></span>
    
        <div>
          <ng-container *ngIf="savable"><ng-container *ngTemplateOutlet="contextsMenuTpl"></ng-container></ng-container>
        </div>
    
        <div class="display-type">
          <mat-form-field>
            <mat-select required formControlName="displayType">
              <mat-option value="page">page</mat-option>
              <mat-option value="form">form</mat-option>
              <mat-option value="json">json</mat-option>
            </mat-select>
          </mat-form-field>
        </div>
        <div class="layout-type">
          <mat-form-field>
            <mat-select required formControlName="layoutType">
              <!-- <mat-option value="grid">grid</mat-option> -->
              <mat-option value="gridless">gridless</mat-option>
              <mat-option value="split">split</mat-option>
            </mat-select>
          </mat-form-field>
        </div>
    
        <ng-container *ngTemplateOutlet="extraActionsAreaTmpl"></ng-container>
    
        <div *ngIf="!nested" class="brand">Quell</div>
      </ng-template>
      <ng-template #gridItemActions let-i="i">
    
        <button class="panel-actions-btn" mat-button type="button" [matMenuTriggerFor]="panelActions">
          <mat-icon>arrow_drop_down</mat-icon>
        </button>
        <mat-menu #panelActions="matMenu">
          <button type="button" mat-menu-item (mousedown)="splitLayout.layoutSettings('column', i)">Layout Settings</button>
          <button type="button" mat-menu-item (mousedown)="editor.addContent(i)" (touchstart)="editor.addContent(i)">Add Content</button>
          <button type="button" mat-menu-item (mousedown)="editor.editPanelProps(i)" (touchstart)="editor.editPanelProps(i)" >Props</button>
          <button *ngIf="!editor.hasPanelStyle(i)" mat-menu-item type="button" (mousedown)="editor.applyStyle(i)" (touchstart)="editor.applyStyle(i)" >Apply Style</button>
          <button *ngIf="editor.hasPanelStyle(i)" mat-menu-item type="button" (mousedown)="editor.removeStyle(i)" (touchstart)="editor.removeStyle(i)" >Remove Style</button>
          <button type="button" class="delete" mat-menu-item (mousedown)="splitLayout.removeColumn2(i)" (touchstart)="splitLayout.removeColumn2(i)">Delete</button>
        </mat-menu>
    
        <div *ngIf="editor.hasPanelStyle(i)" class="style-title">{{ editor.panelStyleTitle(i) }}</div>
    
        <!-- <button type="button" (mousedown)="editor.addContent(i)" (touchstart)="editor.addContent(i)">Add Content</button>
        <button type="button" (mousedown)="editor.editPanelProps(i)" (touchstart)="editor.editPanelProps(i)" >Props</button>
        <button *ngIf="!editor.hasPanelStyle(i)" type="button" (mousedown)="editor.applyStyle(i)" (touchstart)="editor.applyStyle(i)" >Apply Style</button> -->
        <!-- <span *ngIf="editor.hasPanelStyle(i)">Style: {{ editor.panelStyleTitle(i) }}</span> -->
      </ng-template>
      <ng-template #innerGridItem let-i="i">
        <ngx-dropzone [cdkDropListData]="i" class="panel-dropzone" [multiple]="true" [disableClick]="true" (change)="editor.onFileChange($event, i)" cdkDropList (cdkDropListDropped)="editor.onDrop($event)">
          <div #panes>
            <div *ngFor="let pane of editor.panelPanes(i).controls; let j = index" cdkDrag>
              <ng-container *ngTemplateOutlet="editablePaneTpl;context:{ i: i, j: j }"></ng-container>
            </div>
          </div>
        </ngx-dropzone>
      </ng-template>
    </classifieds-ui-split-layout>

  </mat-sidenav-content>

</mat-sidenav-container>

<mat-menu #topActions="matMenu">
  <button *ngIf="savable" mat-menu-item type="submit" (click)="editor.submit()">Save</button>
  <button type="button" mat-menu-item (mousedown)="splitLayout.addRow()">Add Row</button>
  <button type="button" mat-menu-item (click)="editor.onPropertiesClick()">Props</button>
  <button type="button" mat-menu-item (mousedown)="splitLayout.layoutSettings('global')">Layout Settings</button>
  <button *ngIf="nested" mat-menu-item type="button" (click)="editor.onRulesClick()">Rules</button>
  <button *ngIf="savable" type="button" mat-menu-item (mousedown)="editor.onPersistenceClick()">Persistence</button>
  <button *ngIf="savable" type="button" mat-menu-item (mousedown)="editor.onInteractionsClick()">Interactions</button>
  <button *ngIf="nested" mat-menu-item type="button" (click)="editor.onDeleteClick()">Delete</button>
</mat-menu>`,
                    styles: [".layout-type ::ng-deep .mat-form-field-wrapper,.display-type ::ng-deep .mat-form-field-wrapper{padding-bottom:0}.layout-type ::ng-deep .mat-form-field-label-wrapper,.display-type ::ng-deep .mat-form-field-label-wrapper{display:none}.layout-type ::ng-deep .mat-form-field-infix,.display-type ::ng-deep .mat-form-field-infix{border-top:none;padding:0;margin:0}.layout-type ::ng-deep .mat-select-value,.display-type ::ng-deep .mat-select-value{text-align:right}.layout-type ::ng-deep .mat-form-field-underline,.display-type ::ng-deep .mat-form-field-underline{display:none}.layout-type ::ng-deep .mat-mdc-form-field-subscript-wrapper,.display-type ::ng-deep .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-menu-trigger{min-width:0;padding:0;margin:0}.cdk-drag{padding:.25em}.panel-actions-btn .mat-icon{transform:rotate(-90deg)}.brand{font-family:sans-serif;text-align:right;flex:1;letter-spacing:.2em;font-weight:lighter;color:#c82913}.spacer{flex:1}.style-title{font-family:sans-serif;font-weight:500;text-transform:lowercase;color:#000}.drawer-trigger{min-width:0;padding:0;margin:0}\n"]
                }]
        }], () => [{
            type: i1.ControlContainer
        }], null);
})();
var FlexLayoutRendererComponent = class _FlexLayoutRendererComponent extends LayoutRendererBaseComponent {
    constructor(controlContainer) {
        super(controlContainer);
        this.controlContainer = controlContainer;
    }
    ngOnInit() { }
    static {
        this.ɵfac = function FlexLayoutRendererComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FlexLayoutRendererComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer, 8));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FlexLayoutRendererComponent,
            selectors: [["classifieds-ui-flex-layout-renderer"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 3,
            vars: 4,
            consts: [["innerGridItem", ""], [3, "dashboard", "layoutSetting", "rowSettings", "columnSettings"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
            template: function FlexLayoutRendererComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "classifieds-ui-flex-layout", 1);
                    i0.ɵɵtemplate(1, FlexLayoutRendererComponent_ng_template_1_Template, 1, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("dashboard", ctx.panelPage == null ? null : ctx.panelPage.gridItems)("layoutSetting", ctx.panelPage.layoutSetting)("rowSettings", ctx.panelPage.rowSettings)("columnSettings", ctx.columnSettings);
                }
            },
            dependencies: [i2$1.NgTemplateOutlet, FlexLayoutComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlexLayoutRendererComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-flex-layout-renderer",
                    standalone: false,
                    template: '<classifieds-ui-flex-layout [dashboard]="panelPage?.gridItems" [layoutSetting]="panelPage.layoutSetting" [rowSettings]="panelPage.rowSettings" [columnSettings]="columnSettings">\n  <ng-template #innerGridItem let-i="i">\n    <ng-container *ngTemplateOutlet="renderPanelTpl;context:{ i: i }"></ng-container>\n  </ng-template>\n</classifieds-ui-flex-layout>'
                }]
        }], () => [{
            type: i1.ControlContainer,
            decorators: [{
                    type: Optional
                }]
        }], null);
})();
var splitLayoutFactory = () => {
    const settings = /* @__PURE__ */ new Map([["row", [new Attribute({
                    name: "flexGrow",
                    type: AttributeTypes.Text,
                    label: "Flex Grow",
                    required: false,
                    widget: "text",
                    options: {},
                    attributes: []
                }), new Attribute({
                    name: "flexShrink",
                    type: AttributeTypes.Text,
                    label: "Flex Shrink",
                    required: false,
                    widget: "text",
                    options: {},
                    attributes: []
                }), new Attribute({
                    name: "flexBasis",
                    type: AttributeTypes.Text,
                    label: "Flex Basis",
                    required: false,
                    widget: "text",
                    options: {},
                    attributes: []
                }), new Attribute({
                    name: "height",
                    type: AttributeTypes.Text,
                    label: "Height",
                    required: false,
                    widget: "text",
                    options: {},
                    attributes: []
                }), new Attribute({
                    name: "direction",
                    type: AttributeTypes.Text,
                    label: "Direction",
                    required: false,
                    widget: "text",
                    options: {},
                    attributes: []
                })]], ["column", [new Attribute({
                    name: "height",
                    type: AttributeTypes.Text,
                    label: "Height",
                    required: false,
                    widget: "text",
                    options: {},
                    attributes: []
                })]], ["global", [new Attribute({
                    name: "direction",
                    type: AttributeTypes.Text,
                    label: "Direction",
                    required: false,
                    widget: "text",
                    options: {},
                    attributes: []
                })]]]);
    return new LayoutPlugin({
        id: "split",
        title: "Split",
        editor: SplitLayoutEditorComponent,
        renderer: FlexLayoutRendererComponent,
        settings
    });
};
var gridlessLayoutFactory = () => {
    return new LayoutPlugin({
        id: "gridless",
        title: "Gridless",
        editor: GridlessLayoutEditorComponent,
        renderer: GridlessLayoutRendererComponent,
        settings: /* @__PURE__ */ new Map()
    });
};
var GridLayoutEditorComponent = class _GridLayoutEditorComponent extends LayoutEditorBaseComponent {
    get gridItems() {
        return this.gridLayout.grid.map((gi, i) => __spreadProps(__spreadValues({}, gi), {
            weight: i
        }));
    }
    constructor(controlContainer) {
        super(controlContainer);
        this.controlContainer = controlContainer;
        this.options = {
            gridType: GridType.Fit,
            displayGrid: DisplayGrid.Always,
            pushItems: true,
            draggable: {
                enabled: true
            },
            resizable: {
                enabled: true
            },
            mobileBreakpoint: 0,
            itemChangeCallback: (item, itemComponent) => { },
            itemInitCallback: (item, itemComponent) => {
                if (this.nested && item.y !== 0) {
                    const matchIndex = this.gridLayout.grid.findIndex(g => g.x === item.x && g.y === item.y && g.cols === item.cols && g.rows === item.rows);
                    if (this.editor.panelPanes(matchIndex).length === 0) {
                        this.gridLayout.setItemContentHeight(matchIndex, 200);
                    }
                    else { }
                }
            }
        };
    }
    ngOnInit() { }
    static {
        this.ɵfac = function GridLayoutEditorComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _GridLayoutEditorComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _GridLayoutEditorComponent,
            selectors: [["classifieds-ui-grid-layout-editor"]],
            viewQuery: function GridLayoutEditorComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(GridLayoutComponent, 5);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridLayout = _t.first);
                }
            },
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 7,
            vars: 3,
            consts: [["extraActions", ""], ["gridItemActions", ""], ["innerGridItem", ""], ["panes", ""], ["cdkDropListGroup", "", 3, "itemAdded", "itemRemoved", "formGroup", "options", "dashboard"], ["type", "button", 4, "ngIf"], ["type", "button", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-type"], ["required", "", "formControlName", "layoutType"], ["value", "grid"], ["value", "gridless"], ["value", "split"], ["class", "display-type", 4, "ngIf"], [4, "ngTemplateOutlet"], ["type", "button"], ["type", "button", 3, "click"], [1, "display-type"], ["required", "", "formControlName", "displayType"], ["value", "page"], ["value", "form"], ["type", "button", 3, "mousedown", "touchstart"], ["type", "button", 3, "mousedown", "touchstart", 4, "ngIf"], ["cdkDropList", "", 1, "panel-dropzone", 3, "change", "cdkDropListDropped", "cdkDropListData", "multiple", "disableClick"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
            template: function GridLayoutEditorComponent_Template(rf, ctx) {
                if (rf & 1) {
                    const _r1 = i0.ɵɵgetCurrentView();
                    i0.ɵɵelementStart(0, "classifieds-ui-grid-layout", 4);
                    i0.ɵɵlistener("itemAdded", function GridLayoutEditorComponent_Template_classifieds_ui_grid_layout_itemAdded_0_listener() {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.onItemAdded());
                    })("itemRemoved", function GridLayoutEditorComponent_Template_classifieds_ui_grid_layout_itemRemoved_0_listener($event) {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.editor.onItemRemoved($event));
                    });
                    i0.ɵɵtemplate(1, GridLayoutEditorComponent_ng_template_1_Template, 16, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, GridLayoutEditorComponent_ng_template_3_Template, 7, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(5, GridLayoutEditorComponent_ng_template_5_Template, 4, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.controlContainer.control)("options", ctx.options)("dashboard", ctx.dashboard);
                }
            },
            dependencies: [i2$1.NgForOf, i2$1.NgIf, i2$1.NgTemplateOutlet, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i3$3.CdkDropList, i3$3.CdkDropListGroup, i3$3.CdkDrag, i4$2.MatOption, i9$1.MatFormField, i11.MatSelect, i13.NgxDropzoneComponent, GridLayoutComponent],
            styles: [".layout-type[_ngcontent-%COMP%], .display-type[_ngcontent-%COMP%]{float:right}[_nghost-%COMP%]     .main-controls{background-color:#ccc}[_nghost-%COMP%]     .layout-inner{background-color:#ccc;padding:.75em}[_nghost-%COMP%]     .editable-pane-wrapper{border:none;margin-bottom:0}[_nghost-%COMP%]     .pane-header{background-color:#fff}[_nghost-%COMP%]     .nested-panel-wrapper{padding:.75em;margin-bottom:0}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridLayoutEditorComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-grid-layout-editor",
                    standalone: false,
                    template: '<classifieds-ui-grid-layout [formGroup]="controlContainer.control" cdkDropListGroup (itemAdded)="editor.onItemAdded()" (itemRemoved)="editor.onItemRemoved($event)" [options]="options" [dashboard]="dashboard">\n  <ng-template #extraActions>\n    <button *ngIf="savable" type="button">Save</button>\n    <button *ngIf="savable" type="button" (click)="editor.onPropertiesClick()">Properties</button>\n    <ng-container *ngIf="savable"><ng-container *ngTemplateOutlet="contextsMenuTpl"></ng-container></ng-container>\n    <button *ngIf="nested" type="button" (click)="editor.onRulesClick()">Rules</button>\n    <button *ngIf="nested" type="button" (click)="editor.onDeleteClick()">Delete</button>\n    <div class="layout-type">\n      <mat-form-field>\n        <mat-select required formControlName="layoutType">\n          <mat-option value="grid">Grid</mat-option>\n          <mat-option value="gridless">Gridless</mat-option>\n          <mat-option value="split">Split</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div *ngIf="!nested" class="display-type">\n      <mat-form-field>\n        <mat-select required formControlName="displayType">\n          <mat-option value="page">Page</mat-option>\n          <mat-option value="form">Form</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <ng-container *ngTemplateOutlet="extraActionsAreaTmpl"></ng-container>\n  </ng-template>\n  <ng-template #gridItemActions let-i="i">\n    <button type="button" (mousedown)="editor.addContent(i)" (touchstart)="editor.addContent(i)">Add Content</button>\n    <button type="button" (mousedown)="editor.editPanelProps(i)" (touchstart)="editor.editPanelProps(i)" >Props</button>\n    <button *ngIf="!editor.hasPanelStyle(i)" type="button" (mousedown)="editor.applyStyle(i)" (touchstart)="editor.applyStyle(i)" >Apply Style</button>\n    <span *ngIf="editor.hasPanelStyle(i)">Style: {{ editor.panelStyleTitle(i) }}</span>\n    <button *ngIf="editor.hasPanelStyle(i)" type="button" (mousedown)="editor.removeStyle(i)" (touchstart)="editor.removeStyle(i)" >Remove Style</button>\n  </ng-template>\n  <ng-template #innerGridItem let-i="i">\n    <ngx-dropzone [cdkDropListData]="i" class="panel-dropzone" [multiple]="true" [disableClick]="true" (change)="editor.onFileChange($event, i)" cdkDropList (cdkDropListDropped)="editor.onDrop($event)">\n      <div #panes>\n        <div *ngFor="let pane of editor.panelPanes(i).controls; let j = index" cdkDrag>\n          <ng-container *ngTemplateOutlet="editablePaneTpl;context:{ i: i, j: j }"></ng-container>\n        </div>\n      </div>\n    </ngx-dropzone>\n  </ng-template>\n</classifieds-ui-grid-layout>',
                    styles: [".layout-type,.display-type{float:right}:host ::ng-deep .main-controls{background-color:#ccc}:host ::ng-deep .layout-inner{background-color:#ccc;padding:.75em}:host ::ng-deep .editable-pane-wrapper{border:none;margin-bottom:0}:host ::ng-deep .pane-header{background-color:#fff}:host ::ng-deep .nested-panel-wrapper{padding:.75em;margin-bottom:0}\n"]
                }]
        }], () => [{
            type: i1.ControlContainer
        }], {
        gridLayout: [{
                type: ViewChild,
                args: [GridLayoutComponent, {
                        static: false
                    }]
            }]
    });
})();
var LayoutModule = class _LayoutModule {
    constructor(lpm) {
        [splitLayoutFactory(), gridlessLayoutFactory()].forEach(p => {
            lpm.register(p);
        });
    }
    static {
        this.ɵfac = function LayoutModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _LayoutModule)(i0.ɵɵinject(LayoutPluginManager));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _LayoutModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule,
                // FlexLayoutServerModule,
                AngularSplitModule, GridsterModule, NgxDropzoneModule, UtilsModule, TokenModule, AttributesModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutModule, [{
            type: NgModule,
            args: [{
                    declarations: [FlexLayoutComponent, GridLayoutComponent, GridlessLayoutComponent, SplitLayoutComponent, LayoutFormComponent, LayoutDialogComponent, GridlessLayoutEditorComponent, GridlessLayoutRendererComponent, SplitLayoutEditorComponent, FlexLayoutRendererComponent, GridLayoutEditorComponent, LayoutSidenavComponent],
                    imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule,
                        // FlexLayoutServerModule,
                        AngularSplitModule, GridsterModule, NgxDropzoneModule, UtilsModule, TokenModule, AttributesModule],
                    exports: [FlexLayoutComponent, GridLayoutComponent, GridlessLayoutComponent, SplitLayoutComponent, LayoutFormComponent, LayoutDialogComponent, GridlessLayoutEditorComponent, GridlessLayoutRendererComponent, SplitLayoutEditorComponent, FlexLayoutRendererComponent, GridLayoutEditorComponent, LayoutSidenavComponent]
                }]
        }], () => [{
            type: LayoutPluginManager
        }], null);
})();
export { FlexLayoutComponent, FlexLayoutRendererComponent, GridLayoutComponent, GridLayoutEditorComponent, GridlessLayoutComponent, GridlessLayoutEditorComponent, GridlessLayoutRendererComponent, LayoutDialogComponent, LayoutFormComponent, LayoutModule, LayoutPlugin, LayoutPluginManager, LayoutSidenavComponent, SplitLayoutComponent, SplitLayoutEditorComponent };
