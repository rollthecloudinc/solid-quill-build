import { __spreadProps, __spreadValues } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/material/fesm2022/rollthecloudinc-material.mjs
import * as i1 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { forwardRef, Optional, ChangeDetectorRef, Inject, DOCUMENT, ElementRef, EventEmitter, ContentChildren, ViewChildren, Output, Input, ChangeDetectionStrategy, Component, NgModule } from "@angular/core";
import { A11yModule } from "@angular/cdk/a11y";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PortalModule } from "@angular/cdk/portal";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkStepper, CdkStepperModule } from "@angular/cdk/stepper";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import * as i2 from "@angular/material/stepper";
import { MatStepper as MatStepper2, MatStep, MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { Directionality } from "@angular/cdk/bidi";
import { ScrollingModule as ScrollingModule$1 } from "@angular/cdk-experimental/scrolling";
function ResponsiveStepperComponent_mat_horizontal_stepper_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-horizontal-stepper", 3);
        i0.ɵɵlistener("animationDone", function ResponsiveStepperComponent_mat_horizontal_stepper_1_Template_mat_horizontal_stepper_animationDone_0_listener($event) {
            i0.ɵɵrestoreView(_r1);
            const ctx_r1 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r1.animationDone.emit($event));
        })("selectionChange", function ResponsiveStepperComponent_mat_horizontal_stepper_1_Template_mat_horizontal_stepper_selectionChange_0_listener($event) {
            i0.ɵɵrestoreView(_r1);
            const ctx_r1 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r1.selectionChange.emit($event));
        });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("labelPosition", ctx_r1.labelPosition)("linear", ctx_r1.linear)("selected", ctx_r1.selected)("selectedIndex", ctx_r1.selectedIndex);
    }
}
function ResponsiveStepperComponent_mat_vertical_stepper_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-vertical-stepper", 4);
        i0.ɵɵlistener("animationDone", function ResponsiveStepperComponent_mat_vertical_stepper_2_Template_mat_vertical_stepper_animationDone_0_listener($event) {
            i0.ɵɵrestoreView(_r3);
            const ctx_r1 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r1.animationDone.emit($event));
        })("selectionChange", function ResponsiveStepperComponent_mat_vertical_stepper_2_Template_mat_vertical_stepper_selectionChange_0_listener($event) {
            i0.ɵɵrestoreView(_r3);
            const ctx_r1 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r1.selectionChange.emit($event));
        });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("linear", ctx_r1.linear)("selected", ctx_r1.selected)("selectedIndex", ctx_r1.selectedIndex);
    }
}
var MAT_STEPPER_PROXY_FACTORY_PROVIDER = {
    provide: MatStepper2,
    deps: [forwardRef(() => ResponsiveStepperComponent), [new Optional(), Directionality], ChangeDetectorRef, [new Inject(DOCUMENT)]],
    useFactory: MAT_STEPPER_PROXY_FACTORY
};
var CDK_STEPPER_PROXY_FACTORY_PROVIDER = __spreadProps(__spreadValues({}, MAT_STEPPER_PROXY_FACTORY_PROVIDER), {
    provide: CdkStepper
});
function MAT_STEPPER_PROXY_FACTORY(component, directionality, changeDetectorRef, document2) {
    const elementRef = new ElementRef(document2.createElement("mat-horizontal-stepper"));
    const stepper = new MatStepper2(directionality, changeDetectorRef, elementRef
    /*, document*/ );
    return new Proxy(stepper, {
        get: (target, property) => Reflect.get(component.stepper || target, property),
        set: (target, property, value) => Reflect.set(component.stepper || target, property, value)
    });
}
var ResponsiveStepperComponent = class _ResponsiveStepperComponent {
    constructor() {
        this.animationDone = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.orientationChange = new EventEmitter();
        this.needsFocus = false;
        this.htmlSteps = [];
    }
    get stepper() {
        return this.stepperList && this.stepperList.first;
    }
    /*constructor(private changeDetectorRef: ChangeDetectorRef) {
    }*/
    ngAfterViewInit() {
        this.reset();
        this.stepperList.changes.subscribe(() => this.reset());
        this.selectionChange.subscribe(e => this.lastSelectedIndex = e.selectedIndex);
        this.syncHTMLSteps();
        setTimeout(() => this.stepper.selectedIndex = this.selectedIndex, 400);
    }
    ngAfterViewChecked() {
        if (this.needsFocus) {
            this.needsFocus = false;
            const { _elementRef, _keyManager, selectedIndex } = this.stepper;
            _elementRef.nativeElement.focus();
            _keyManager.setActiveItem(selectedIndex);
        }
    }
    get isHorizontal() {
        return this.orientation === "horizontal";
    }
    get isVertical() {
        return this.orientation === "vertical";
    }
    next() {
        this.stepper.next();
    }
    previous() {
        this.stepper.previous();
    }
    /**
     * Enable/Disable the click on the step header.
     *
     * @param step The step number
     * @param enabled The new state
     */
    updateStepState(step, enabled) {
        if (this.htmlSteps.length > 0) {
            this.htmlSteps[step - 1].style.pointerEvents = enabled ? "" : "none";
        }
    }
    /**
     * Sync from the dom the list of HTML elements for the steps.
     */
    syncHTMLSteps() {
        this.htmlSteps = [];
        let increment = 1;
        let stepper = document.querySelector(".mat-stepper-vertical");
        if (!stepper) {
            increment = 2;
            stepper = document.querySelector(".mat-horizontal-stepper-header-container");
        }
        for (let i = 0; i < stepper.children.length; i += increment) {
            this.htmlSteps.push(stepper.children[i]);
        }
    }
    reset() {
        setTimeout(() => this.syncHTMLSteps(), 100);
        const { stepper, steps, 
        /*, changeDetectorRef,*/
        lastSelectedIndex } = this;
        stepper.steps.reset(steps.toArray());
        stepper.steps.notifyOnChanges();
        if (lastSelectedIndex) {
            stepper.selectedIndex = lastSelectedIndex;
            setTimeout(() => this.orientationChange.emit(this.orientation), 101);
        }
    }
    static {
        this.ɵfac = function ResponsiveStepperComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ResponsiveStepperComponent)();
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _ResponsiveStepperComponent,
            selectors: [["responsive-stepper"]],
            contentQueries: function ResponsiveStepperComponent_ContentQueries(rf, ctx, dirIndex) {
                if (rf & 1) {
                    i0.ɵɵcontentQuery(dirIndex, MatStep, 4);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.steps = _t);
                }
            },
            viewQuery: function ResponsiveStepperComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(MatStepper2, 5);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.stepperList = _t);
                }
            },
            inputs: {
                labelPosition: "labelPosition",
                linear: "linear",
                orientation: "orientation",
                selected: "selected",
                selectedIndex: "selectedIndex"
            },
            outputs: {
                animationDone: "animationDone",
                selectionChange: "selectionChange",
                orientationChange: "orientationChange"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([MAT_STEPPER_PROXY_FACTORY_PROVIDER, CDK_STEPPER_PROXY_FACTORY_PROVIDER])],
            decls: 3,
            vars: 2,
            consts: [[3, "ngSwitch"], [3, "labelPosition", "linear", "selected", "selectedIndex", "animationDone", "selectionChange", 4, "ngSwitchDefault"], [3, "linear", "selected", "selectedIndex", "animationDone", "selectionChange", 4, "ngSwitchCase"], [3, "animationDone", "selectionChange", "labelPosition", "linear", "selected", "selectedIndex"], [3, "animationDone", "selectionChange", "linear", "selected", "selectedIndex"]],
            template: function ResponsiveStepperComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementContainerStart(0, 0);
                    i0.ɵɵtemplate(1, ResponsiveStepperComponent_mat_horizontal_stepper_1_Template, 1, 4, "mat-horizontal-stepper", 1)(2, ResponsiveStepperComponent_mat_vertical_stepper_2_Template, 1, 3, "mat-vertical-stepper", 2);
                    i0.ɵɵelementContainerEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("ngSwitch", ctx.orientation);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("ngSwitchCase", "vertical");
                }
            },
            dependencies: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.MatStepper],
            encapsulation: 2,
            changeDetection: 0
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResponsiveStepperComponent, [{
            type: Component,
            args: [{
                    selector: "responsive-stepper",
                    // templateUrl: './stepper.component.html',
                    // styleUrls: ['./stepper.component.scss'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [MAT_STEPPER_PROXY_FACTORY_PROVIDER, CDK_STEPPER_PROXY_FACTORY_PROVIDER],
                    template: `
        <ng-container [ngSwitch]="orientation">
            <mat-horizontal-stepper *ngSwitchDefault
                                    [labelPosition]="labelPosition"
                                    [linear]="linear"
                                    [selected]="selected"
                                    [selectedIndex]="selectedIndex"
                                    (animationDone)="animationDone.emit($event)"
                                    (selectionChange)="selectionChange.emit($event)">
            </mat-horizontal-stepper>
            <mat-vertical-stepper *ngSwitchCase="'vertical'"
                                  [linear]="linear"
                                  [selected]="selected"
                                  [selectedIndex]="selectedIndex"
                                  (animationDone)="animationDone.emit($event)"
                                  (selectionChange)="selectionChange.emit($event)">
            </mat-vertical-stepper>
        </ng-container>`,
                    standalone: false
                }]
        }], null, {
        labelPosition: [{
                type: Input
            }],
        linear: [{
                type: Input
            }],
        orientation: [{
                type: Input
            }],
        selected: [{
                type: Input
            }],
        selectedIndex: [{
                type: Input
            }],
        animationDone: [{
                type: Output
            }],
        selectionChange: [{
                type: Output
            }],
        orientationChange: [{
                type: Output
            }],
        stepperList: [{
                type: ViewChildren,
                args: [MatStepper2]
            }],
        steps: [{
                type: ContentChildren,
                args: [MatStep]
            }]
    });
})();
var MaterialModule = class _MaterialModule {
    static {
        this.ɵfac = function MaterialModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _MaterialModule)();
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _MaterialModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule, CdkStepperModule, MatStepperModule, A11yModule, CdkStepperModule, CdkTableModule, CdkTreeModule, DragDropModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, PortalModule, ScrollingModule, ScrollingModule$1]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaterialModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CdkStepperModule, MatStepperModule],
                    exports: [A11yModule, CdkStepperModule, CdkTableModule, CdkTreeModule, DragDropModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, PortalModule, ScrollingModule, ScrollingModule$1,
                        // MatFormFieldModule,
                        ResponsiveStepperComponent],
                    declarations: [ResponsiveStepperComponent]
                }]
        }], null, null);
})();
export { MAT_STEPPER_PROXY_FACTORY, MaterialModule, ResponsiveStepperComponent };
