import { forkJoin } from "@nf-internal/chunk-BSWOS4VH";
import { BehaviorSubject, Subject, combineLatest, of } from "@nf-internal/chunk-4WPE7WTU";
import "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/datasource/fesm2022/rollthecloudinc-datasource.mjs
import * as i3$1 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { forwardRef, Input, Component, Directive, Injectable, ViewChild, NgModule } from "@angular/core";
import * as i1 from "@angular/forms";
import { NG_VALUE_ACCESSOR, Validators, NG_VALIDATORS, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@rollthecloudinc/material";
import { DurlModule } from "@rollthecloudinc/durl";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/material/input";
import { filter, switchMap, tap, map, delay, catchError, defaultIfEmpty } from "rxjs/operators";
import * as i1$1 from "@rollthecloudinc/plugin";
import { BasePluginManager, PluginDef, Plugin } from "@rollthecloudinc/plugin";
import * as i2$1 from "@rollthecloudinc/utils";
import * as i4 from "@angular/material/autocomplete";
import * as i6 from "@angular/material/select";
import * as i2$2 from "@rollthecloudinc/attributes";
import { AttributeValue } from "@rollthecloudinc/attributes";
import { ContentBinding } from "@rollthecloudinc/content";
import { Snippet } from "@rollthecloudinc/snippet";
import { Param } from "@rollthecloudinc/dparam";
import * as i1$2 from "@ngrx/data";
import * as i2$3 from "@angular/common/http";
function DatasourceFormComponent_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const dp_r1 = ctx.$implicit;
        i0.ɵɵproperty("value", dp_r1.value.id);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(dp_r1.value.title);
    }
}
function DatasourceFormComponent_ng_template_9_Template(rf, ctx) { }
function DatasourceFormComponent_div_15_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const bo_r3 = ctx.$implicit;
        i0.ɵɵproperty("value", bo_r3);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(bo_r3);
    }
}
function DatasourceFormComponent_div_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 9)(1, "mat-form-field")(2, "mat-label");
        i0.ɵɵtext(3, "Binding");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-select", 10);
        i0.ɵɵtemplate(5, DatasourceFormComponent_div_15_mat_option_5_Template, 2, 2, "mat-option", 2);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(6, "button", 6);
        i0.ɵɵlistener("click", function DatasourceFormComponent_div_15_Template_button_click_6_listener() {
            const i_r4 = i0.ɵɵrestoreView(_r2).index;
            const ctx_r4 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r4.removeBinding(i_r4));
        });
        i0.ɵɵtext(7, "Remove");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const i_r4 = ctx.index;
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵproperty("formGroupName", i_r4);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx_r4.bindableOptions);
    }
}
var DatasourceOptionsComponent = class _DatasourceOptionsComponent {
    constructor(fb) {
        this.fb = fb;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.formGroup = this.fb.group({
            query: [""],
            trackBy: [""],
            valueMapping: [""],
            labelMapping: [""],
            idMapping: [""],
            multiple: [""],
            limit: [""]
        });
        this.formGroup.valueChanges.subscribe(value => {
            this.onChange(value);
        });
    }
    ngOnChanges(changes) {
        if (changes["datasourceOptions"] && changes["datasourceOptions"].currentValue) {
            this.formGroup.patchValue(this.datasourceOptions, {
                emitEvent: false
            });
        }
    }
    writeValue(value) {
        console.log("Datasource Options Write Value", value);
        if (value) {
            this.formGroup.patchValue(value, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formGroup.disable();
        }
        else {
            this.formGroup.enable();
        }
    }
    static {
        this.ɵfac = function DatasourceOptionsComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourceOptionsComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _DatasourceOptionsComponent,
            selectors: [["classifieds-ui-datasource-options"]],
            inputs: {
                datasourceOptions: "datasourceOptions"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _DatasourceOptionsComponent),
                        multi: true
                    }]), i0.ɵɵNgOnChangesFeature],
            decls: 16,
            vars: 1,
            consts: [[3, "formGroup"], ["matInput", "", "formControlName", "query", "placeholder", "Query"], ["matInput", "", "formControlName", "trackBy", "placeholder", "Track By"], ["matInput", "", "formControlName", "idMapping", "placeholder", "Id"], ["matInput", "", "formControlName", "valueMapping", "placeholder", "Value"], ["matInput", "", "formControlName", "labelMapping", "placeholder", "Label"], ["formControlName", "multiple"], ["matInput", "", "formControlName", "limit", "placeholder", "Limit"]],
            template: function DatasourceOptionsComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0)(1, "mat-form-field");
                    i0.ɵɵelement(2, "input", 1);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(3, "mat-form-field");
                    i0.ɵɵelement(4, "input", 2);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(5, "mat-form-field");
                    i0.ɵɵelement(6, "input", 3);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(7, "mat-form-field");
                    i0.ɵɵelement(8, "input", 4);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(9, "mat-form-field");
                    i0.ɵɵelement(10, "input", 5);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(11, "div")(12, "mat-checkbox", 6);
                    i0.ɵɵtext(13, "Multiple");
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementStart(14, "mat-form-field");
                    i0.ɵɵelement(15, "input", 7);
                    i0.ɵɵelementEnd()();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.formGroup);
                }
            },
            dependencies: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i2.MatCheckbox, i3.MatInput, i3.MatFormField],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourceOptionsComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-datasource-options",
                    standalone: false,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DatasourceOptionsComponent),
                            multi: true
                        }],
                    template: '<div [formGroup]="formGroup">\n  <mat-form-field>\n    <input matInput formControlName="query" placeholder="Query">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput formControlName="trackBy" placeholder="Track By">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput formControlName="idMapping" placeholder="Id">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput formControlName="valueMapping" placeholder="Value">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput formControlName="labelMapping" placeholder="Label">\n  </mat-form-field>\n  <div>\n    <mat-checkbox formControlName="multiple">Multiple</mat-checkbox>\n  </div>\n  <mat-form-field>\n    <input matInput formControlName="limit" placeholder="Limit">\n  </mat-form-field>\n</div>'
                }]
        }], () => [{
            type: i1.UntypedFormBuilder
        }], {
        datasourceOptions: [{
                type: Input
            }]
    });
})();
var DatasourceRendererHostDirective = class _DatasourceRendererHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static {
        this.ɵfac = function DatasourceRendererHostDirective_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourceRendererHostDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef));
        };
    }
    static {
        this.ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
            type: _DatasourceRendererHostDirective,
            selectors: [["", "classifiedsUiDatasourceRendererHost", ""]],
            standalone: false
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourceRendererHostDirective, [{
            type: Directive,
            args: [{
                    selector: "[classifiedsUiDatasourceRendererHost]",
                    standalone: false
                }]
        }], () => [{
            type: i0.ViewContainerRef
        }], null);
})();
var DatasourcePluginManager = class _DatasourcePluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "datasource"
        }));
    }
    static {
        this.ɵfac = function DatasourcePluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourcePluginManager)(i0.ɵɵinject(i1$1.PluginConfigurationManager), i0.ɵɵinject(i2$1.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _DatasourcePluginManager,
            factory: _DatasourcePluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourcePluginManager, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1$1.PluginConfigurationManager
        }, {
            type: i2$1.ModuleLoaderService
        }], null);
})();
var DatasourceFormComponent = class _DatasourceFormComponent {
    set datasource(ds) {
        this.datasource$.next(ds);
    }
    get bindings() {
        return this.formGroup.get("renderer").get("bindings");
    }
    constructor(fb, componentFactoryResolver, dpm) {
        this.fb = fb;
        this.componentFactoryResolver = componentFactoryResolver;
        this.dpm = dpm;
        this.datasources$ = this.dpm.getPlugins();
        this.formGroup = this.fb.group({
            plugin: this.fb.control("", [Validators.required]),
            settings: this.fb.control(""),
            renderer: this.fb.group({
                type: this.fb.control("pane"),
                bindings: this.fb.array([])
            })
        });
        this.bindableOptions = [];
        this.contexts = [];
        this.settings$ = new BehaviorSubject([]);
        this.componentRef$ = new BehaviorSubject(void 0);
        this.datasource$ = new BehaviorSubject(void 0);
        this.afterViewInit$ = new Subject();
        this.contextForwardingSub = this.componentRef$.pipe(filter(componentRef => !!componentRef)).subscribe(componentRef => {
            componentRef.instance.contexts = this.contexts;
            componentRef.instance.settings = this.settings$.value;
        });
        this.rendererSub = combineLatest([this.formGroup.get("plugin").valueChanges, this.afterViewInit$]).pipe(switchMap(([p, _]) => p && p !== "" ? this.dpm.getPlugin(p) : of(void 0))).subscribe(p => {
            if (p) {
                this.renderPlugin(p);
            }
        });
        this.settingsSub = combineLatest([this.componentRef$, this.settings$]).pipe(filter(([componentRef, _]) => !!componentRef)).subscribe(([componentRef, s]) => {
            componentRef.instance.settings = s;
        });
        this.datasourceSub = this.datasource$.pipe(tap(ds => {
            setTimeout(() => this.settings$.next(ds ? ds.settings : []));
        })).subscribe(ds => {
            this.formGroup.get("renderer").get("bindings").clear();
            if (ds) {
                this.formGroup.get("plugin").setValue(ds.plugin);
                this.formGroup.get("renderer").get("type").setValue("pane");
                if (ds.renderer && ds.renderer.bindings) {
                    ds.renderer.bindings.forEach(b => {
                        this.addBinding(b);
                    });
                }
            }
            else {
                this.formGroup.get("plugin").setValue("");
                this.formGroup.get("renderer").get("type").setValue("pane");
            }
        });
        this.onTouched = () => { };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.afterViewInit$.next(void 0);
    }
    renderPlugin(plugin) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(plugin.editor);
        const viewContainerRef = this.datasourceHost.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef$.next(viewContainerRef.createComponent(componentFactory));
    }
    writeValue(val) {
        if (val) {
            this.formGroup.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.formGroup.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formGroup.disable();
        }
        else {
            this.formGroup.enable();
        }
    }
    validate(c) {
        return this.formGroup.valid ? null : {
            invalidForm: {
                valid: false,
                message: "content is invalid"
            }
        };
    }
    addBinding(b) {
        this.bindings.push(this.fb.group({
            type: this.fb.control("pane", Validators.required),
            id: this.fb.control(b ? b.id : "", Validators.required)
        }));
    }
    removeBinding(index) {
        this.bindings.removeAt(index);
    }
    static {
        this.ɵfac = function DatasourceFormComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourceFormComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(DatasourcePluginManager));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _DatasourceFormComponent,
            selectors: [["classifieds-ui-datasource-form"]],
            viewQuery: function DatasourceFormComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(DatasourceRendererHostDirective, 7);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datasourceHost = _t.first);
                }
            },
            inputs: {
                bindableOptions: "bindableOptions",
                contexts: "contexts",
                datasource: "datasource"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _DatasourceFormComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _DatasourceFormComponent),
                        multi: true
                    }])],
            decls: 16,
            vars: 7,
            consts: [[3, "formGroup"], ["required", "", "formControlName", "plugin"], [3, "value", 4, "ngFor", "ngForOf"], ["classifiedsUiDatasourceRendererHost", ""], ["formGroupName", "renderer"], ["formArrayName", "bindings"], ["type", "button", 3, "click"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "value"], [3, "formGroupName"], ["required", "", "formControlName", "id"]],
            template: function DatasourceFormComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label");
                    i0.ɵɵtext(3, "Datasource");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(4, "mat-select", 1);
                    i0.ɵɵtemplate(5, DatasourceFormComponent_mat_option_5_Template, 2, 2, "mat-option", 2);
                    i0.ɵɵpipe(6, "async");
                    i0.ɵɵpipe(7, "keyvalue");
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementContainerStart(8);
                    i0.ɵɵtemplate(9, DatasourceFormComponent_ng_template_9_Template, 0, 0, "ng-template", 3);
                    i0.ɵɵelementContainerEnd();
                    i0.ɵɵelementStart(10, "div", 4)(11, "div", 5)(12, "button", 6);
                    i0.ɵɵlistener("click", function DatasourceFormComponent_Template_button_click_12_listener() {
                        return ctx.addBinding();
                    });
                    i0.ɵɵtext(13, "Add Binding");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(14, "div");
                    i0.ɵɵtemplate(15, DatasourceFormComponent_div_15_Template, 8, 2, "div", 7);
                    i0.ɵɵelementEnd()()()();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.formGroup);
                    i0.ɵɵadvance(5);
                    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(7, 5, i0.ɵɵpipeBind1(6, 3, ctx.datasources$)));
                    i0.ɵɵadvance(10);
                    i0.ɵɵproperty("ngForOf", ctx.bindings.controls);
                }
            },
            dependencies: [i3$1.NgForOf, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName, i4.MatOption, i3.MatFormField, i3.MatLabel, i6.MatSelect, DatasourceRendererHostDirective, i3$1.AsyncPipe, i3$1.KeyValuePipe],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourceFormComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-datasource-form",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DatasourceFormComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => DatasourceFormComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="formGroup">\n\n  <mat-form-field>\n    <mat-label>Datasource</mat-label>\n    <mat-select required formControlName="plugin">\n      <mat-option *ngFor="let dp of ((datasources$ | async) | keyvalue); let i = index" [value]="dp.value.id">{{ dp.value.title }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <ng-container><ng-template classifiedsUiDatasourceRendererHost></ng-template></ng-container>\n\n  <div formGroupName="renderer">\n\n    <div formArrayName="bindings">\n      <button type="button" (click)="addBinding()">Add Binding</button>\n      <div>\n        <div *ngFor="let b of bindings.controls; let i = index" [formGroupName]="i">\n          <mat-form-field>\n            <mat-label>Binding</mat-label>\n            <mat-select required formControlName="id">\n              <mat-option *ngFor="let bo of bindableOptions" [value]="bo">{{ bo }}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <button type="button" (click)="removeBinding(i)">Remove</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>'
                }]
        }], () => [{
            type: i1.UntypedFormBuilder
        }, {
            type: i0.ComponentFactoryResolver
        }, {
            type: DatasourcePluginManager
        }], {
        datasourceHost: [{
                type: ViewChild,
                args: [DatasourceRendererHostDirective, {
                        static: true
                    }]
            }],
        bindableOptions: [{
                type: Input
            }],
        contexts: [{
                type: Input
            }],
        datasource: [{
                type: Input
            }]
    });
})();
var DataSourceFormComponent = class _DataSourceFormComponent {
    set settings(settings) {
        this.settings$.next(settings);
    }
    constructor(fb, attributeSerializer) {
        this.fb = fb;
        this.attributeSerializer = attributeSerializer;
        this.settings$ = new BehaviorSubject(void 0);
        this.formGroup = this.fb.group({
            data: this.fb.control("")
        });
        this.settingsSub = this.settings$.pipe(map(s => s ? this.attributeSerializer.deserializeAsObject(s) : void 0)).subscribe(ds => {
            if (ds && ds.data) {
                this.formGroup.get("data").setValue(ds.data);
            }
            else {
                this.formGroup.get("data").setValue("");
            }
        });
        this.onTouched = () => { };
    }
    ngOnInit() { }
    writeValue(val) {
        if (val) {
            this.formGroup.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.formGroup.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formGroup.disable();
        }
        else {
            this.formGroup.enable();
        }
    }
    validate(c) {
        return this.formGroup.valid ? null : {
            invalidForm: {
                valid: false,
                message: "content is invalid"
            }
        };
    }
    static {
        this.ɵfac = function DataSourceFormComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DataSourceFormComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i2$2.AttributeSerializerService));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _DataSourceFormComponent,
            selectors: [["classifieds-ui-data-source-form"]],
            inputs: {
                settings: "settings"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _DataSourceFormComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _DataSourceFormComponent),
                        multi: true
                    }])],
            decls: 2,
            vars: 1,
            consts: [[3, "formGroup"], ["formControlName", "data", "cols", "60", "rows", "20"]],
            template: function DataSourceFormComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0);
                    i0.ɵɵelement(1, "textarea", 1);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.formGroup);
                }
            },
            dependencies: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataSourceFormComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-data-source-form",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DataSourceFormComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => DataSourceFormComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="formGroup">\n\n  <textarea formControlName="data" cols="60" rows="20"></textarea>\n\n</div>'
                }]
        }], () => [{
            type: i1.UntypedFormBuilder
        }, {
            type: i2$2.AttributeSerializerService
        }], {
        settings: [{
                type: Input
            }]
    });
})();
var DataDatasourceComponent = class _DataDatasourceComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.settings = [];
    }
    static {
        this.ɵfac = function DataDatasourceComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DataDatasourceComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _DataDatasourceComponent,
            selectors: [["classifieds-ui-data-datasource"]],
            inputs: {
                settings: "settings"
            },
            standalone: false,
            decls: 2,
            vars: 2,
            consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings"]],
            template: function DataDatasourceComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementContainerStart(0, 0);
                    i0.ɵɵelement(1, "classifieds-ui-data-source-form", 1);
                    i0.ɵɵelementContainerEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.controlContainer.control);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("settings", ctx.settings);
                }
            },
            dependencies: [i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, DataSourceFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataDatasourceComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-data-datasource",
                    template: `<ng-container [formGroup]="controlContainer.control"><classifieds-ui-data-source-form formControlName="settings" [settings]="settings"></classifieds-ui-data-source-form></ng-container>`,
                    standalone: false
                }]
        }], () => [{
            type: i1.ControlContainer
        }], {
        settings: [{
                type: Input
            }]
    });
})();
var DatasourcePlugin = class extends Plugin {
    constructor(data) {
        super(data);
        if (data) {
            this.editor = data.editor;
            this.fetch = data.fetch;
            this.getBindings = data.getBindings ? data.getBindings : () => of([]);
            this.editorOptions = data.editorOptions ? data.editorOptions : () => of(new DatasourceEditorOptions());
        }
    }
};
var Rest = class {
    constructor(data) {
        if (data) {
            this.url = data.url;
            this.method = data.method ? data.method : void 0;
            if (data.renderer !== void 0) {
                this.renderer = new Renderer(data.renderer);
            }
            if (data.params !== void 0) {
                this.params = data.params.map(p => new Param(p));
            }
            if (data.body) {
                this.body = new Snippet(data.body);
            }
        }
    }
};
var Renderer = class {
    constructor(data) {
        if (data) {
            this.type = data.type;
            this.query = data.query;
            this.trackBy = data.trackBy;
            if (data.data !== void 0) {
                this.data = new Snippet(data.data);
            }
            if (data.bindings !== void 0) {
                this.bindings = data.bindings.map(b => new ContentBinding(b));
            }
        }
    }
};
var Dataset = class {
    constructor(data) {
        this.results = [];
        if (data) {
            this.results = data.results;
        }
    }
};
var DatasourceOptions = class {
    constructor(data) {
        if (data) {
            this.query = data.query;
            this.trackBy = data.trackBy;
            this.idMapping = data.idMapping;
            this.labelMapping = data.labelMapping;
            this.valueMapping = data.valueMapping;
            this.multiple = data.multiple;
            this.limit = data.limit;
        }
    }
};
var Datasource = class {
    constructor(data) {
        this.settings = [];
        this.params = [];
        if (data) {
            this.plugin = data.plugin;
            if (data.renderer) {
                this.renderer = new Renderer(data.renderer);
            }
            if (data.settings) {
                this.settings = data.settings.map(s => new AttributeValue(s));
            }
            if (data.params) {
                this.params = data.params.map(p => new Param(p));
            }
        }
    }
};
var DatasourceEditorOptions = class {
    constructor(data) {
        this.fullscreen = false;
        if (data) {
            this.fullscreen = data.fullscreen;
        }
    }
};
var DatasourceSourceFormComponent = class _DatasourceSourceFormComponent {
    set settings(settings) {
        this.settings$.next(settings);
    }
    constructor(fb, attributeSerializer) {
        this.fb = fb;
        this.attributeSerializer = attributeSerializer;
        this.settings$ = new BehaviorSubject(void 0);
        this.formGroup = this.fb.group({
            data: this.fb.control("")
        });
        this.settingsSub = this.settings$.pipe(map(s => s ? this.attributeSerializer.deserializeAsObject(s) : void 0)).subscribe(ds => {
            if (ds && ds.data) { }
            else { }
        });
        this.onTouched = () => { };
    }
    ngOnInit() { }
    writeValue(val) {
        if (val) {
            this.formGroup.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.formGroup.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formGroup.disable();
        }
        else {
            this.formGroup.enable();
        }
    }
    validate(c) {
        return this.formGroup.valid ? null : {
            invalidForm: {
                valid: false,
                message: "content is invalid"
            }
        };
    }
    static {
        this.ɵfac = function DatasourceSourceFormComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourceSourceFormComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i2$2.AttributeSerializerService));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _DatasourceSourceFormComponent,
            selectors: [["classifieds-ui-datasource-source-form"]],
            inputs: {
                settings: "settings"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _DatasourceSourceFormComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _DatasourceSourceFormComponent),
                        multi: true
                    }])],
            decls: 2,
            vars: 0,
            template: function DatasourceSourceFormComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "p");
                    i0.ɵɵtext(1, "Datasource");
                    i0.ɵɵelementEnd();
                }
            },
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourceSourceFormComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-datasource-source-form",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DatasourceSourceFormComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => DatasourceSourceFormComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: "<p>Datasource</p>"
                }]
        }], () => [{
            type: i1.UntypedFormBuilder
        }, {
            type: i2$2.AttributeSerializerService
        }], {
        settings: [{
                type: Input
            }]
    });
})();
var DatasourceSourceComponent = class _DatasourceSourceComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.settings = [];
    }
    static {
        this.ɵfac = function DatasourceSourceComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourceSourceComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _DatasourceSourceComponent,
            selectors: [["classifieds-ui-datasource-source"]],
            inputs: {
                settings: "settings"
            },
            standalone: false,
            decls: 2,
            vars: 2,
            consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings"]],
            template: function DatasourceSourceComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementContainerStart(0, 0);
                    i0.ɵɵelement(1, "classifieds-ui-datasource-source-form", 1);
                    i0.ɵɵelementContainerEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.controlContainer.control);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("settings", ctx.settings);
                }
            },
            dependencies: [i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, DatasourceSourceFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourceSourceComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-datasource-source",
                    template: `<ng-container [formGroup]="controlContainer.control"><classifieds-ui-datasource-source-form formControlName="settings" [settings]="settings"></classifieds-ui-datasource-source-form></ng-container>`,
                    standalone: false
                }]
        }], () => [{
            type: i1.ControlContainer
        }], {
        settings: [{
                type: Input
            }]
    });
})();
var dataDatasourcePluginFactory = attrbuteSerializer => {
    return new DatasourcePlugin({
        id: "data",
        title: "Data",
        editor: DataDatasourceComponent,
        fetch: ({ settings }) => of(new Dataset()).pipe(map(() => attrbuteSerializer.deserializeAsObject(settings)), map(s => new Dataset({
            results: JSON.parse(s.data)
        })))
    });
};
var datasourceDatasourcePluginFactory = attrbuteSerializer => {
    return new DatasourcePlugin({
        id: "datasource_datasource",
        title: "Datasource",
        editor: DatasourceSourceComponent,
        fetch: ({ settings }) => of(new Dataset())
    });
};
var DatasourceModule = class _DatasourceModule {
    constructor(dpm, attributeSerializer) {
        [dataDatasourcePluginFactory(attributeSerializer), datasourceDatasourcePluginFactory(attributeSerializer)].forEach(p => dpm.register(p));
    }
    static {
        this.ɵfac = function DatasourceModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourceModule)(i0.ɵɵinject(DatasourcePluginManager), i0.ɵɵinject(i2$2.AttributeSerializerService));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _DatasourceModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule,
                // HttpClientModule,
                ReactiveFormsModule, MaterialModule, DurlModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourceModule, [{
            type: NgModule,
            args: [{
                    declarations: [DatasourceOptionsComponent, DatasourceFormComponent, DatasourceRendererHostDirective, DataDatasourceComponent, DataSourceFormComponent, DatasourceSourceComponent, DatasourceSourceFormComponent],
                    imports: [CommonModule,
                        // HttpClientModule,
                        ReactiveFormsModule, MaterialModule, DurlModule],
                    exports: [DatasourceOptionsComponent, DatasourceFormComponent, DatasourceRendererHostDirective, DataDatasourceComponent, DataSourceFormComponent, DatasourceSourceComponent, DatasourceSourceFormComponent]
                }]
        }], () => [{
            type: DatasourcePluginManager
        }, {
            type: i2$2.AttributeSerializerService
        }], null);
})();
var DatasourceApiService = class _DatasourceApiService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this.cache = /* @__PURE__ */ new Map();
    }
    getData(url) {
        if (this.cache.has(url)) {
            return of(this.cache.get(url)).pipe(delay(0));
        }
        else {
            return this.http.get(`${url}`).pipe(catchError(() => of([])), map(data => Array.isArray(data) ? data : [data]), tap(data => this.cache.set(url, data)));
        }
    }
    postData({ url, body = "" }) {
        return this.http.post(`${url}`, body).pipe(map(data => Array.isArray(data) ? data : [data]));
    }
    static {
        this.ɵfac = function DatasourceApiService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourceApiService)(i0.ɵɵinject(i1$2.DefaultDataServiceConfig), i0.ɵɵinject(i2$3.HttpClient));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _DatasourceApiService,
            factory: _DatasourceApiService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourceApiService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1$2.DefaultDataServiceConfig
        }, {
            type: i2$3.HttpClient
        }], null);
})();
var mockDatasourceOptions = new DatasourceOptions({
    query: "",
    trackBy: "",
    idMapping: "",
    labelMapping: "",
    valueMapping: "",
    multiple: false,
    limit: 0
});
var mockRest = new Rest({
    url: "",
    renderer: {
        type: "",
        data: {
            content: "",
            contentType: ""
        },
        query: "",
        trackBy: "",
        bindings: []
    },
    params: []
});
var SelectOption = class {
    constructor(data) {
        if (data) {
            this.label = data.label;
            this.dataItem = data.dataItem;
            if (data.value !== void 0) {
                this.value = data.value;
            }
        }
    }
};
var SelectMapping = class {
    constructor(data) {
        if (data) {
            this.value = data.value;
            this.label = data.label;
            this.id = data.id;
            this.multiple = data.multiple;
            this.limit = data.limit;
        }
    }
};
var DatasourceEvaluator = class _DatasourceEvaluator {
    constructor(dpm, attributeSerializer) {
        this.dpm = dpm;
        this.attributeSerializer = attributeSerializer;
    }
    evalDatasource({ datasource, metadata, datasources }) {
        return of(datasource).pipe(switchMap(ds => this.dpm.getPlugin(ds.plugin).pipe(map(p => [ds, p]))), switchMap(([ds, p]) => p.fetch({
            settings: ds.settings,
            metadata,
            datasource: ds,
            datasources
        }).pipe(map(d => [ds, d]))), switchMap(([ds, dataset]) => forkJoin(ds.renderer.bindings.reduce((p, c) => [...p, ...(datasources && datasources.has(c.id) ? [of(datasources.get(c.id))] : [])], [])).pipe(switchMap(datasources2 => datasources2.reduce((p, c) => p.pipe(switchMap(dataset2 => this.dpm.getPlugin(c.plugin).pipe(map(dsp => [dsp, dataset2, c]))), switchMap(([dsp, dataset2, nestedDatasource]) => dsp.fetch({
            settings: c.settings,
            dataset: dataset2,
            metadata,
            datasource: nestedDatasource,
            datasources
        }))), of(dataset))), map(dataset2 => dataset2), defaultIfEmpty(dataset))));
    }
    static {
        this.ɵfac = function DatasourceEvaluator_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourceEvaluator)(i0.ɵɵinject(DatasourcePluginManager), i0.ɵɵinject(i2$2.AttributeSerializerService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _DatasourceEvaluator,
            factory: _DatasourceEvaluator.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourceEvaluator, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: DatasourcePluginManager
        }, {
            type: i2$2.AttributeSerializerService
        }], null);
})();
export { DataDatasourceComponent, DataSourceFormComponent, Dataset, Datasource, DatasourceApiService, DatasourceEditorOptions, DatasourceEvaluator, DatasourceFormComponent, DatasourceModule, DatasourceOptions, DatasourceOptionsComponent, DatasourcePlugin, DatasourcePluginManager, DatasourceRendererHostDirective, DatasourceSourceComponent, DatasourceSourceFormComponent, Renderer, Rest, SelectMapping, SelectOption, mockDatasourceOptions, mockRest };
