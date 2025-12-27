import "@nf-internal/chunk-BSWOS4VH";
import { BehaviorSubject, Subject, combineLatest, map, of, switchMap } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/refinery/fesm2022/rollthecloudinc-refinery.mjs
import * as i3 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { Directive, Injectable, forwardRef, ViewChild, Input, Component, Inject, NgModule } from "@angular/core";
import * as i2$1 from "@angular/forms";
import { Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@rollthecloudinc/material";
import * as i1$1 from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as i1 from "@rollthecloudinc/plugin";
import { Plugin, BasePluginManager, PluginDef } from "@rollthecloudinc/plugin";
import * as i3$1 from "@rollthecloudinc/attributes";
import { AttributeValue } from "@rollthecloudinc/attributes";
import * as i4$1 from "@angular/material/button";
import { filter, map as map2, tap, delay, switchMap as switchMap2 } from "rxjs/operators";
import * as i2 from "@rollthecloudinc/utils";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/select";
function PersistenceFormComponent_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 4);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const duct_r1 = ctx.$implicit;
        i0.ɵɵproperty("value", duct_r1.value.id);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(duct_r1.value.title);
    }
}
function PersistenceFormComponent_ng_template_9_Template(rf, ctx) { }
var DataductPlugin = class extends Plugin {
    constructor(data) {
        super(data);
        if (data) {
            this.editor = data.editor;
            this.send = data.send;
        }
    }
};
var DuctdataInput = class {
    constructor(data) {
        this.settings = [];
        if (data) {
            this.data = data.data;
            if (data.settings && Array.isArray(data.settings)) {
                this.settings = data.settings.map(s => new AttributeValue(s));
            }
        }
    }
};
var DuctdataOutput = class {
    constructor(data) {
        if (data) { }
    }
};
var PersistenceFormPayload = class {
    constructor(data) {
        if (data) {
            this.dataduct = new PersistenceFormDataduct(data.dataduct);
        }
    }
};
var PersistenceFormDataduct = class {
    constructor(data) {
        this.settings = [];
        if (data) {
            this.plugin = data.plugin;
            if (data.settings && Array.isArray(data.settings)) {
                this.settings = data.settings.map(s => new AttributeValue(s));
            }
        }
    }
};
var DataductRenderHostDirective = class _DataductRenderHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static {
        this.ɵfac = function DataductRenderHostDirective_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DataductRenderHostDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef));
        };
    }
    static {
        this.ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
            type: _DataductRenderHostDirective,
            selectors: [["", "classifiedsUiDataductRendererHost", ""]],
            standalone: false
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataductRenderHostDirective, [{
            type: Directive,
            args: [{
                    selector: "[classifiedsUiDataductRendererHost]",
                    standalone: false
                }]
        }], () => [{
            type: i0.ViewContainerRef
        }], null);
})();
var DataductPluginManager = class _DataductPluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "dataduct"
        }));
    }
    static {
        this.ɵfac = function DataductPluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DataductPluginManager)(i0.ɵɵinject(i1.PluginConfigurationManager), i0.ɵɵinject(i2.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _DataductPluginManager,
            factory: _DataductPluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataductPluginManager, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1.PluginConfigurationManager
        }, {
            type: i2.ModuleLoaderService
        }], null);
})();
var PersistenceFormComponent = class _PersistenceFormComponent {
    set persistence(persistence) {
        this.persistence$.next(persistence);
    }
    constructor(dpm, fb) {
        this.dpm = dpm;
        this.fb = fb;
        this.contexts = [];
        this.ductForm = this.fb.group({
            plugin: this.fb.control("", [Validators.required]),
            settings: this.fb.control("")
        });
        this.ducts$ = this.dpm.getPlugins();
        this.componentRef$ = new BehaviorSubject(void 0);
        this.persistence$ = new BehaviorSubject(void 0);
        this.afterViewInit$ = new Subject();
        this.contextForwardingSub = this.componentRef$.pipe(filter(componentRef => !!componentRef)).subscribe(componentRef => {
            componentRef.instance.contexts = this.contexts;
            componentRef.instance.settings = this.persistence$.value && this.persistence$.value.dataduct ? this.persistence$.value.dataduct.settings : [];
        });
        this.persistenceSub = combineLatest([this.persistence$, this.afterViewInit$]).pipe(map2(([p]) => p), tap(persistence => {
            this.ductForm.get("plugin").setValue(persistence && persistence.dataduct ? persistence.dataduct.plugin : "");
        }), delay(1), tap(persistence => {
            if (this.componentRef$.value && this.componentRef$.value.instance && persistence) {
                this.componentRef$.value.instance.settings = persistence.dataduct ? persistence.dataduct.settings : [];
            }
        })).subscribe();
        this.rendererSub = combineLatest([this.ductForm.get("plugin").valueChanges, this.afterViewInit$]).pipe(switchMap2(([p, _]) => p && p !== "" ? this.dpm.getPlugin(p) : of(void 0))).subscribe(p => {
            if (p) {
                this.renderPlugin(p);
            }
        });
        this.onTouched = () => { };
    }
    ngAfterViewInit() {
        this.afterViewInit$.next(void 0);
    }
    writeValue(val) {
        if (val) {
            this.ductForm.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.ductForm.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.ductForm.disable();
        }
        else {
            this.ductForm.enable();
        }
    }
    validate(c) {
        return this.ductForm.valid ? null : this.ductForm.errors;
    }
    renderPlugin(plugin) {
        const viewContainerRef = this.datasourceHost.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef$.next(viewContainerRef.createComponent(plugin.editor));
    }
    static {
        this.ɵfac = function PersistenceFormComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PersistenceFormComponent)(i0.ɵɵdirectiveInject(DataductPluginManager), i0.ɵɵdirectiveInject(i2$1.UntypedFormBuilder));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _PersistenceFormComponent,
            selectors: [["classifieds-ui-persistence-form"]],
            viewQuery: function PersistenceFormComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(DataductRenderHostDirective, 7);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datasourceHost = _t.first);
                }
            },
            inputs: {
                contexts: "contexts",
                persistence: "persistence"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _PersistenceFormComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _PersistenceFormComponent),
                        multi: true
                    }])],
            decls: 10,
            vars: 6,
            consts: [[3, "formGroup"], ["required", "", "formControlName", "plugin"], [3, "value", 4, "ngFor", "ngForOf"], ["classifiedsUiDataductRendererHost", ""], [3, "value"]],
            template: function PersistenceFormComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label");
                    i0.ɵɵtext(3, "Plugin");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(4, "mat-select", 1);
                    i0.ɵɵtemplate(5, PersistenceFormComponent_mat_option_5_Template, 2, 2, "mat-option", 2);
                    i0.ɵɵpipe(6, "async");
                    i0.ɵɵpipe(7, "keyvalue");
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementContainerStart(8);
                    i0.ɵɵtemplate(9, PersistenceFormComponent_ng_template_9_Template, 0, 0, "ng-template", 3);
                    i0.ɵɵelementContainerEnd();
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.ductForm);
                    i0.ɵɵadvance(5);
                    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(7, 4, i0.ɵɵpipeBind1(6, 2, ctx.ducts$)));
                }
            },
            dependencies: [i3.NgForOf, i2$1.NgControlStatus, i2$1.NgControlStatusGroup, i2$1.RequiredValidator, i2$1.FormGroupDirective, i2$1.FormControlName, i4.MatOption, i5.MatFormField, i5.MatLabel, i6.MatSelect, DataductRenderHostDirective, i3.AsyncPipe, i3.KeyValuePipe],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PersistenceFormComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-persistence-form",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PersistenceFormComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => PersistenceFormComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="ductForm">\n\n  <mat-form-field>\n    <mat-label>Plugin</mat-label>\n    <mat-select required formControlName="plugin">\n      <mat-option *ngFor="let duct of ((ducts$ | async) | keyvalue) let i = index" [value]="duct.value.id">{{ duct.value.title }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <ng-container><ng-template classifiedsUiDataductRendererHost></ng-template></ng-container>\n\n</div>'
                }]
        }], () => [{
            type: DataductPluginManager
        }, {
            type: i2$1.UntypedFormBuilder
        }], {
        contexts: [{
                type: Input
            }],
        persistence: [{
                type: Input
            }],
        datasourceHost: [{
                type: ViewChild,
                args: [DataductRenderHostDirective, {
                        static: true
                    }]
            }]
    });
})();
var PersistenceDialogComponent = class _PersistenceDialogComponent {
    constructor(data, dialogRef, fb, attributeSerializer) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.attributeSerializer = attributeSerializer;
        this.persistenceForm = this.fb.group({
            dataduct: this.fb.control("")
        });
        this.contexts = [];
        this.persistence = new PersistenceFormPayload();
        this.contexts = data.contexts;
        this.persistence = data.persistence;
    }
    submit() {
        const data = this.persistenceForm.value;
        console.log("persistence form", data);
        const settings = this.attributeSerializer.serialize(data.dataduct.settings, "settings");
        console.log("persistence settings", settings);
        this.dialogRef.close(new PersistenceFormPayload(__spreadProps(__spreadValues({}, this.persistenceForm.value), {
            dataduct: __spreadProps(__spreadValues({}, data.dataduct), {
                settings: settings.attributes
            })
        })));
    }
    static {
        this.ɵfac = function PersistenceDialogComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PersistenceDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(i2$1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i3$1.AttributeSerializerService));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _PersistenceDialogComponent,
            selectors: [["classifieds-ui-persistence-dialog"]],
            standalone: false,
            decls: 8,
            vars: 4,
            consts: [[1, "persistence-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["formControlName", "dataduct", 3, "contexts", "persistence"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]],
            template: function PersistenceDialogComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "form", 0);
                    i0.ɵɵlistener("ngSubmit", function PersistenceDialogComponent_Template_form_ngSubmit_0_listener() {
                        return ctx.submit();
                    });
                    i0.ɵɵelementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2);
                    i0.ɵɵelement(4, "classifieds-ui-persistence-form", 3);
                    i0.ɵɵelementEnd()()();
                    i0.ɵɵelementStart(5, "mat-dialog-actions")(6, "button", 4);
                    i0.ɵɵtext(7, "Save");
                    i0.ɵɵelementEnd()()();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.persistenceForm);
                    i0.ɵɵadvance(4);
                    i0.ɵɵproperty("contexts", ctx.contexts)("persistence", ctx.persistence);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("disabled", !ctx.persistenceForm.valid);
                }
            },
            dependencies: [i2$1.ɵNgNoValidate, i2$1.NgControlStatus, i2$1.NgControlStatusGroup, i2$1.FormGroupDirective, i2$1.FormControlName, i4$1.MatButton, i1$1.MatDialogClose, i1$1.MatDialogActions, i1$1.MatDialogContent, PersistenceFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PersistenceDialogComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-persistence-dialog",
                    standalone: false,
                    template: '<form class="persistence-form" [formGroup]="persistenceForm" (ngSubmit)="submit()">\n  <mat-dialog-content>\n    <div class="content-inner">\n      <div fxLayout="column">\n        <classifieds-ui-persistence-form formControlName="dataduct" [contexts]="contexts" [persistence]="persistence"></classifieds-ui-persistence-form>\n      </div>\n    </div>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button type="submit" mat-raised-button color="primary" mat-dialog-close [disabled]="!persistenceForm.valid">Save</button>\n  </mat-dialog-actions>\n</form>\n'
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
            type: i2$1.UntypedFormBuilder
        }, {
            type: i3$1.AttributeSerializerService
        }], null);
})();
var RefineryModule = class _RefineryModule {
    static {
        this.ɵfac = function RefineryModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _RefineryModule)();
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _RefineryModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RefineryModule, [{
            type: NgModule,
            args: [{
                    declarations: [PersistenceDialogComponent, PersistenceFormComponent, DataductRenderHostDirective],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
                    exports: [PersistenceDialogComponent, PersistenceFormComponent]
                }]
        }], null, null);
})();
var PersistService = class _PersistService {
    constructor(dpm) {
        this.dpm = dpm;
    }
    persist({ data, persistence }) {
        return this.dpm.getPlugin(persistence.dataduct.plugin).pipe(switchMap(p => p.send(new DuctdataInput({
            data,
            settings: persistence.dataduct.settings
        }))), map(() => void 0));
    }
    static {
        this.ɵfac = function PersistService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PersistService)(i0.ɵɵinject(DataductPluginManager));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PersistService,
            factory: _PersistService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PersistService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: DataductPluginManager
        }], null);
})();
export { DataductPlugin, DataductPluginManager, DuctdataInput, DuctdataOutput, PersistService, PersistenceDialogComponent, PersistenceFormComponent, PersistenceFormDataduct, PersistenceFormPayload, RefineryModule };
