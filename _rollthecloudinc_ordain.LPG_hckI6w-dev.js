import { require_lib } from "@nf-internal/chunk-JQGPH55T";
import "@nf-internal/chunk-BSWOS4VH";
import { BehaviorSubject, Observable, Subject, combineLatest, map, of, switchMap } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues, __toESM } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/ordain/fesm2022/rollthecloudinc-ordain.mjs
import * as i3$1 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { Directive, forwardRef, Input, Component, Injectable, ViewChild, NgModule } from "@angular/core";
import * as i1 from "@angular/forms";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, UntypedFormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@rollthecloudinc/material";
import * as i1$1 from "@rollthecloudinc/dparam";
import { Param, DparamModule } from "@rollthecloudinc/dparam";
var import_qs = __toESM(require_lib(), 1);
import * as i2$1 from "@rollthecloudinc/plugin";
import { Plugin, BasePluginManager, PluginDef } from "@rollthecloudinc/plugin";
import { debounceTime, tap, filter, delay, map as map2, switchMap as switchMap$1 } from "rxjs/operators";
import * as i5 from "@angular/material/input";
import * as i2 from "@rollthecloudinc/attributes";
import * as i3 from "@rollthecloudinc/utils";
import * as i4 from "@angular/material/autocomplete";
import * as i6 from "@angular/material/select";
import * as i2$2 from "@rollthecloudinc/token";
function ValidationValidatorComponent_mat_option_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 6);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const vp_r1 = ctx.$implicit;
        i0.ɵɵproperty("value", vp_r1.value.id);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(vp_r1.value.title);
    }
}
function ValidationValidatorComponent_ng_template_18_Template(rf, ctx) { }
function ValidationEditorComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelement(1, "druid-ordain-validation-validator", 4);
        i0.ɵɵelementStart(2, "button", 3);
        i0.ɵɵlistener("click", function ValidationEditorComponent_div_2_Template_button_click_2_listener() {
            const i_r2 = i0.ɵɵrestoreView(_r1).index;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.deleteValidator$.next(i_r2));
        });
        i0.ɵɵtext(3, "Delete");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const i_r2 = ctx.index;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵproperty("formControlName", i_r2)("validation", ctx_r2.validation$.value.validators[i_r2]);
    }
}
var ValidationPlugin = class extends Plugin {
    constructor(data) {
        super(data);
        if (data) {
            this.editor = data.editor;
            this.errorMessage = data.errorMessage;
            this.builder = data.builder;
        }
    }
};
var ValidationValidator = class {
    constructor(data) {
        if (data) {
            this.name = data.name;
            this.validator = data.validator;
            this.overrideErrorMessage = data.overrideErrorMessage;
            if (data.paramSettings && typeof data.paramSettings !== "string") {
                this.paramSettings = new ValidationValidatorSettings(data.paramSettings);
            }
        }
    }
};
var ValidationValidatorSettings = class {
    constructor(data) {
        this.params = [];
        if (data) {
            this.paramsString = data.paramsString;
            if (data.params && Array.isArray(data.params)) {
                this.params = data.params.map(p => new Param(p));
            }
        }
    }
};
var FormValidation = class {
    constructor(data) {
        if (data && Array.isArray(data.validators)) {
            this.validators = data.validators.map(v => new ValidationValidator(v));
        }
    }
};
var ValidationRendererHostDirective = class _ValidationRendererHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static {
        this.ɵfac = function ValidationRendererHostDirective_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ValidationRendererHostDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef));
        };
    }
    static {
        this.ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
            type: _ValidationRendererHostDirective,
            selectors: [["", "druidValidationRendererHost", ""]],
            standalone: false
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ValidationRendererHostDirective, [{
            type: Directive,
            args: [{
                    selector: "[druidValidationRendererHost]",
                    standalone: false
                }]
        }], () => [{
            type: i0.ViewContainerRef
        }], null);
})();
var ValidationParamsEditorFormComponent = class _ValidationParamsEditorFormComponent {
    set settings(settings) {
        this.settings$.next(settings);
    }
    constructor(fb) {
        this.fb = fb;
        this.contexts = [];
        this.settings$ = new BehaviorSubject(void 0);
        this.afterViewInit$ = new Subject();
        this.paramValues$ = new BehaviorSubject([]);
        this.formGroup = this.fb.group({
            paramsString: this.fb.control(""),
            params: this.fb.control([])
        });
        this.paramsStringChangeSub = this.formGroup.get("paramsString").valueChanges.pipe(debounceTime(500)).subscribe(paramsString => {
            const parsed = import_qs.default.parse("?" + paramsString);
            this.paramsParsed = parsed;
        });
        this.settingsSub = this.settings$.pipe(tap(s => {
            if (s) {
                this.formGroup.get("paramsString").setValue(s.paramsString ? s.paramsString : "");
            }
        })).subscribe();
        this.settingsParamsSub = combineLatest([this.settings$, this.formGroup.get("paramsString").valueChanges]).pipe(filter(([s]) => s !== void 0), delay(1), tap(([s]) => this.paramValues$.next(s.params))).subscribe();
        this.onTouched = () => { };
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
        return this.formGroup.valid ? null : this.formGroup.errors;
    }
    static {
        this.ɵfac = function ValidationParamsEditorFormComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ValidationParamsEditorFormComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _ValidationParamsEditorFormComponent,
            selectors: [["druid-ordain-validation-params-editor-form"]],
            inputs: {
                contexts: "contexts",
                settings: "settings"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _ValidationParamsEditorFormComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _ValidationParamsEditorFormComponent),
                        multi: true
                    }])],
            decls: 6,
            vars: 4,
            consts: [[3, "formGroup"], [1, "params-container"], ["matInput", "", "placeholder", "Params", "formControlName", "paramsString"], ["formControlName", "params", 3, "params", "paramValues", "contexts"]],
            template: function ValidationParamsEditorFormComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "mat-form-field");
                    i0.ɵɵelement(4, "input", 2);
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelement(5, "classifieds-ui-params-form", 3);
                    i0.ɵɵelementEnd()();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.formGroup);
                    i0.ɵɵadvance(5);
                    i0.ɵɵproperty("params", ctx.paramsParsed)("paramValues", ctx.paramValues$.value)("contexts", ctx.contexts);
                }
            },
            dependencies: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i5.MatInput, i5.MatFormField, i1$1.ParamsFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ValidationParamsEditorFormComponent, [{
            type: Component,
            args: [{
                    selector: "druid-ordain-validation-params-editor-form",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ValidationParamsEditorFormComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => ValidationParamsEditorFormComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="formGroup">\n  <div class="params-container">\n    <div>\n      <mat-form-field>\n        <input matInput placeholder="Params" formControlName="paramsString">\n      </mat-form-field>\n    </div>\n    <classifieds-ui-params-form formControlName="params" [params]="paramsParsed" [paramValues]="paramValues$.value" [contexts]="contexts"></classifieds-ui-params-form>\n  </div>\n</div>'
                }]
        }], () => [{
            type: i1.UntypedFormBuilder
        }], {
        contexts: [{
                type: Input
            }],
        settings: [{
                type: Input
            }]
    });
})();
var ValidationParamsEditorComponent = class _ValidationParamsEditorComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.settings = [];
        this.contexts = [];
    }
    static {
        this.ɵfac = function ValidationParamsEditorComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ValidationParamsEditorComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _ValidationParamsEditorComponent,
            selectors: [["druid-ordain-validation-params-editor"]],
            inputs: {
                settings: "settings",
                contexts: "contexts"
            },
            standalone: false,
            decls: 2,
            vars: 3,
            consts: [[3, "formGroup"], ["formControlName", "paramSettings", 3, "settings", "contexts"]],
            template: function ValidationParamsEditorComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementContainerStart(0, 0);
                    i0.ɵɵelement(1, "druid-ordain-validation-params-editor-form", 1);
                    i0.ɵɵelementContainerEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.controlContainer.control);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("settings", ctx.settings)("contexts", ctx.contexts);
                }
            },
            dependencies: [i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, ValidationParamsEditorFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ValidationParamsEditorComponent, [{
            type: Component,
            args: [{
                    selector: "druid-ordain-validation-params-editor",
                    template: `<ng-container [formGroup]="controlContainer.control"><druid-ordain-validation-params-editor-form formControlName="paramSettings" [settings]="settings" [contexts]="contexts"></druid-ordain-validation-params-editor-form></ng-container>`,
                    standalone: false
                }]
        }], () => [{
            type: i1.ControlContainer
        }], {
        settings: [{
                type: Input
            }],
        contexts: [{
                type: Input
            }]
    });
})();
var CoreValidationDiscovery = class {
    constructor(pluginManager, formsValidationUtils) {
        this.pluginManager = pluginManager;
        this.formsValidationUtils = formsValidationUtils;
    }
    loadPlugins(pluginDef, ids = []) {
        return of(false).pipe(tap(() => this.pluginManager.register(this.makeRequired())), tap(() => this.pluginManager.register(this.makeRequiredTrue())), tap(() => {
            this.pluginManager.register(this.makeMin());
            this.pluginManager.register(this.makeMax());
            this.pluginManager.register(this.makeMinLength());
            this.pluginManager.register(this.makeMaxLength());
        }), map2(() => this.pluginManager.register(this.makeEmail())), map2(() => this.pluginManager.register(this.makePattern())), map2(() => this.pluginManager.register(this.nullValidator())), map2(() => true));
    }
    makeRequired() {
        return new ValidationPlugin({
            id: "required",
            title: "Required",
            errorMessage: "Field is required",
            editor: ValidationParamsEditorComponent,
            builder: ({ serialized }) => of(c => of(Validators.required(this.formsValidationUtils.rebuildControl({
                c,
                serialized
            }))))
        });
    }
    makeRequiredTrue() {
        return new ValidationPlugin({
            id: "required_true",
            title: "Required True",
            errorMessage: "Field is required",
            editor: ValidationParamsEditorComponent,
            builder: ({ serialized }) => of(c => of(Validators.requiredTrue(this.formsValidationUtils.rebuildControl({
                c,
                serialized
            }))))
        });
    }
    makeEmail() {
        return new ValidationPlugin({
            id: "email",
            title: "Email",
            errorMessage: "Invalid email",
            editor: ValidationParamsEditorComponent,
            builder: ({ serialized }) => of(c => of(Validators.email(this.formsValidationUtils.rebuildControl({
                c,
                serialized
            }))))
        });
    }
    nullValidator() {
        return new ValidationPlugin({
            id: "null",
            title: "Null",
            errorMessage: "nota",
            editor: ValidationParamsEditorComponent,
            builder: ({ serialized }) => of(c => of(Validators.nullValidator(this.formsValidationUtils.rebuildControl({
                c,
                serialized
            }))))
        });
    }
    makeMin() {
        return new ValidationPlugin({
            id: "min",
            title: "Min",
            errorMessage: "Field min [.min]",
            editor: ValidationParamsEditorComponent,
            builder: ({ v, serialized }) => of(c => this.formsValidationUtils.resolveParams({
                v
            }).pipe(map2(p => Validators.min(+p.min)(this.formsValidationUtils.rebuildControl({
                c,
                serialized
            })))))
        });
    }
    makeMax() {
        return new ValidationPlugin({
            id: "max",
            title: "Max",
            errorMessage: "Field max [.max]",
            editor: ValidationParamsEditorComponent,
            builder: ({ v, serialized }) => of(c => this.formsValidationUtils.resolveParams({
                v
            }).pipe(map2(p => Validators.max(+p.max)(this.formsValidationUtils.rebuildControl({
                c,
                serialized
            })))))
        });
    }
    makeMinLength() {
        return new ValidationPlugin({
            id: "min_length",
            title: "Min Length",
            errorMessage: "minimum of [.min] characters",
            editor: ValidationParamsEditorComponent,
            builder: ({ v, serialized }) => of(c => this.formsValidationUtils.resolveParams({
                v
            }).pipe(map2(p => Validators.minLength(+p.minLength)(this.formsValidationUtils.rebuildControl({
                c,
                serialized
            })))))
        });
    }
    makeMaxLength() {
        return new ValidationPlugin({
            id: "max_length",
            title: "Max Length",
            errorMessage: "Maximum of [.max] characters",
            editor: ValidationParamsEditorComponent,
            builder: ({ v, serialized }) => of(c => this.formsValidationUtils.resolveParams({
                v
            }).pipe(map2(p => Validators.maxLength(+p.maxLength)(this.formsValidationUtils.rebuildControl({
                c,
                serialized
            })))))
        });
    }
    makePattern() {
        return new ValidationPlugin({
            id: "pattern",
            title: "Pattern",
            errorMessage: "Must match pattern",
            editor: ValidationParamsEditorComponent,
            builder: ({ v, serialized }) => of(c => this.formsValidationUtils.resolveParams({
                v
            }).pipe(map2(p => Validators.pattern(new RegExp(p.pattern))(this.formsValidationUtils.rebuildControl({
                c,
                serialized
            })))))
        });
    }
};
var FormsValidationUtils = class _FormsValidationUtils {
    constructor(paramEvaluatorService, attributesSerializerService) {
        this.paramEvaluatorService = paramEvaluatorService;
        this.attributesSerializerService = attributesSerializerService;
    }
    resolveParams({ v }) {
        return of({}).pipe(map(() => ({
            paramNames: v.paramSettings.paramsString ? v.paramSettings.paramsString.split("&").filter(v2 => v2.indexOf("=:") !== -1).map(v2 => v2.split("=", 2)[1].substr(1)) : []
        })), switchMap(({ paramNames }) => this.paramEvaluatorService.paramValues(v.paramSettings.params.reduce((p, c, i) => new Map([...p, [paramNames[i], c]]), /* @__PURE__ */ new Map())).pipe(map(params => Array.from(params).reduce((p, [k, v2]) => __spreadProps(__spreadValues({}, p), {
            [k]: v2
        }), {})))));
    }
    rebuildControl({ c, serialized }) {
        return serialized ? new UntypedFormControl(this.attributesSerializerService.deserializeAsObject(c.value).value) : c;
    }
    static {
        this.ɵfac = function FormsValidationUtils_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormsValidationUtils)(i0.ɵɵinject(i1$1.ParamEvaluatorService), i0.ɵɵinject(i2.AttributeSerializerService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _FormsValidationUtils,
            factory: _FormsValidationUtils.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormsValidationUtils, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1$1.ParamEvaluatorService
        }, {
            type: i2.AttributeSerializerService
        }], null);
})();
var ValidationPluginManager = class _ValidationPluginManager extends BasePluginManager {
    constructor(formsValidationUtils, pcm, moduleLoader) {
        super(pcm, moduleLoader);
        this.addDiscovery(new CoreValidationDiscovery(this, formsValidationUtils));
    }
    pluginDef() {
        return of(new PluginDef({
            name: "validation"
        }));
    }
    discovery() {
        super.discovery();
    }
    static {
        this.ɵfac = function ValidationPluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ValidationPluginManager)(i0.ɵɵinject(FormsValidationUtils), i0.ɵɵinject(i2$1.PluginConfigurationManager), i0.ɵɵinject(i3.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _ValidationPluginManager,
            factory: _ValidationPluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ValidationPluginManager, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: FormsValidationUtils
        }, {
            type: i2$1.PluginConfigurationManager
        }, {
            type: i3.ModuleLoaderService
        }], null);
})();
var ValidationValidatorComponent = class _ValidationValidatorComponent {
    set validation(v) {
        this.validation$.next(v);
    }
    constructor(fb, vpm, componentFactoryResolver) {
        this.fb = fb;
        this.vpm = vpm;
        this.componentFactoryResolver = componentFactoryResolver;
        this.contexts = [];
        this.settings$ = new BehaviorSubject(void 0);
        this.formGroup = this.fb.group({
            name: this.fb.control("", [Validators.required]),
            validator: this.fb.control("", [Validators.required]),
            overrideErrorMessage: this.fb.control(""),
            paramSettings: this.fb.control("")
        });
        this.validationPlugins$ = this.vpm.getPlugins();
        this.componentRef$ = new BehaviorSubject(void 0);
        this.afterViewInit$ = new Subject();
        this.onInit$ = new Subject();
        this.validation$ = new BehaviorSubject(void 0);
        this.validatorChangeSub = this.formGroup.get("validator").valueChanges.pipe(tap(v => {
            console.log("validator change", v);
        })).subscribe();
        this.validatorSub = combineLatest([this.formGroup.get("validator").valueChanges, this.afterViewInit$]).pipe(map2(([v]) => v), switchMap$1(v => v && v !== "" ? this.vpm.getPlugin(v) : of(void 0)), tap(v => {
            if (v) {
                this.renderValidation(v);
            }
        })).subscribe();
        this.validationSub = this.validation$.pipe(tap(v => {
            if (v) {
                this.formGroup.get("name").setValue(v.name);
                this.formGroup.get("validator").setValue(v.validator);
                this.formGroup.get("overrideErrorMessage").setValue(v.overrideErrorMessage);
                setTimeout(() => this.formGroup.get("paramSettings").setValue(v.paramSettings));
            }
            else {
                this.formGroup.get("name").setValue("");
                this.formGroup.get("overrideErrorMessage").setValue("");
                this.formGroup.get("validator").setValue("");
            }
        })).subscribe();
        this.contextForwardingSub = this.componentRef$.pipe(filter(componentRef => !!componentRef)).subscribe(componentRef => {
            componentRef.instance.contexts = this.contexts;
            componentRef.instance.settings = this.validation$.value ? this.validation$.value.paramSettings : void 0;
        });
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.onInit$.next(void 0);
        this.onInit$.complete();
    }
    ngAfterViewInit() {
        this.afterViewInit$.next(void 0);
        this.afterViewInit$.complete();
    }
    writeValue(val) {
        if (val) {
            this.formGroup.setValue(__spreadProps(__spreadValues({}, val), {
                settings: val.settings ? val.settings : ""
            }), {
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
    renderValidation(plugin) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(plugin.editor);
        const viewContainerRef = this.validationHost.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef$.next(viewContainerRef.createComponent(componentFactory));
    }
    static {
        this.ɵfac = function ValidationValidatorComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ValidationValidatorComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(ValidationPluginManager), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _ValidationValidatorComponent,
            selectors: [["druid-ordain-validation-validator"]],
            viewQuery: function ValidationValidatorComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(ValidationRendererHostDirective, 7);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.validationHost = _t.first);
                }
            },
            inputs: {
                contexts: "contexts",
                validation: "validation"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _ValidationValidatorComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _ValidationValidatorComponent),
                        multi: true
                    }])],
            decls: 19,
            vars: 6,
            consts: [[3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "name"], ["required", "", "formControlName", "validator"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "formControlName", "overrideErrorMessage"], ["druidValidationRendererHost", ""], [3, "value"]],
            template: function ValidationValidatorComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "mat-form-field")(3, "mat-label");
                    i0.ɵɵtext(4, "Name");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelement(5, "input", 1);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(6, "mat-form-field")(7, "mat-label");
                    i0.ɵɵtext(8, "Validator");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(9, "mat-select", 2);
                    i0.ɵɵtemplate(10, ValidationValidatorComponent_mat_option_10_Template, 2, 2, "mat-option", 3);
                    i0.ɵɵpipe(11, "async");
                    i0.ɵɵpipe(12, "keyvalue");
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementStart(13, "mat-form-field")(14, "mat-label");
                    i0.ɵɵtext(15, "Error Message");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelement(16, "input", 4);
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementContainerStart(17);
                    i0.ɵɵtemplate(18, ValidationValidatorComponent_ng_template_18_Template, 0, 0, "ng-template", 5);
                    i0.ɵɵelementContainerEnd();
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.formGroup);
                    i0.ɵɵadvance(10);
                    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(12, 4, i0.ɵɵpipeBind1(11, 2, ctx.validationPlugins$)));
                }
            },
            dependencies: [i3$1.NgForOf, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i4.MatOption, i5.MatInput, i5.MatFormField, i5.MatLabel, i6.MatSelect, ValidationRendererHostDirective, i3$1.AsyncPipe, i3$1.KeyValuePipe],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ValidationValidatorComponent, [{
            type: Component,
            args: [{
                    selector: "druid-ordain-validation-validator",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ValidationValidatorComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => ValidationValidatorComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="formGroup">\n  <div>\n    <mat-form-field>\n      <mat-label>Name</mat-label>\n      <input matInput type="text" formControlName="name">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Validator</mat-label>\n      <mat-select required formControlName="validator">\n        <mat-option *ngFor="let vp of ((validationPlugins$ | async) | keyvalue); let i = index" [value]="vp.value.id">{{ vp.value.title }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Error Message</mat-label>\n      <input matInput type="text" formControlName="overrideErrorMessage">\n    </mat-form-field>\n  </div>\n  <ng-container><ng-template druidValidationRendererHost></ng-template></ng-container>\n</div>'
                }]
        }], () => [{
            type: i1.UntypedFormBuilder
        }, {
            type: ValidationPluginManager
        }, {
            type: i0.ComponentFactoryResolver
        }], {
        validationHost: [{
                type: ViewChild,
                args: [ValidationRendererHostDirective, {
                        static: true
                    }]
            }],
        contexts: [{
                type: Input
            }],
        validation: [{
                type: Input
            }]
    });
})();
var ValidationEditorComponent = class _ValidationEditorComponent {
    set validation(v) {
        this.validation$.next(v);
    }
    get validators() {
        return this.formGroup.get("validators");
    }
    constructor(fb) {
        this.fb = fb;
        this.formGroup = this.fb.group({
            validators: this.fb.array([])
        });
        this.addValidator$ = new Subject();
        this.deleteValidator$ = new Subject();
        this.afterViewInit$ = new Subject();
        this.validation$ = new BehaviorSubject(new FormValidation({
            validators: []
        }));
        this.addValidatorSub = this.addValidator$.pipe(tap(() => {
            this.validators.push(this.fb.control(""));
        })).subscribe();
        this.deleteValidatorSub = this.deleteValidator$.pipe(tap(index => {
            this.validation$.value.validators.splice(index, 1);
            this.validators.removeAt(index);
        })).subscribe();
        this.validationSub = combineLatest([this.validation$, this.afterViewInit$]).pipe(map2(([v]) => v), filter(validation => validation.validators.length !== 0), tap(validation => {
            this.validators.clear();
            validation.validators.forEach((v, i) => {
                this.validators.push(this.fb.control(""));
            });
        })).subscribe();
        this.onTouched = () => { };
    }
    ngAfterViewInit() {
        this.afterViewInit$.next(void 0);
        this.afterViewInit$.complete();
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
    static {
        this.ɵfac = function ValidationEditorComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ValidationEditorComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _ValidationEditorComponent,
            selectors: [["druid-ordain-validation-editor"]],
            inputs: {
                validation: "validation"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _ValidationEditorComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _ValidationEditorComponent),
                        multi: true
                    }])],
            decls: 5,
            vars: 2,
            consts: [[3, "formGroup"], ["formArrayName", "validators"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "validation"]],
            template: function ValidationEditorComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
                    i0.ɵɵtemplate(2, ValidationEditorComponent_div_2_Template, 4, 2, "div", 2);
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementStart(3, "button", 3);
                    i0.ɵɵlistener("click", function ValidationEditorComponent_Template_button_click_3_listener() {
                        return ctx.addValidator$.next(void 0);
                    });
                    i0.ɵɵtext(4, "Add Validator");
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.formGroup);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("ngForOf", ctx.validators.controls);
                }
            },
            dependencies: [i3$1.NgForOf, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1.FormArrayName, ValidationValidatorComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ValidationEditorComponent, [{
            type: Component,
            args: [{
                    selector: "druid-ordain-validation-editor",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ValidationEditorComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => ValidationEditorComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="formGroup">\n  <div formArrayName="validators">\n    <div *ngFor="let _ of validators.controls; let i = index">\n      <druid-ordain-validation-validator [formControlName]="i" [validation]="validation$.value.validators[i]"></druid-ordain-validation-validator>\n      <button type="button" (click)="deleteValidator$.next(i)">Delete</button>\n    </div>\n  </div>\n</div>\n<button type="button" (click)="addValidator$.next(undefined)">Add Validator</button>'
                }]
        }], () => [{
            type: i1.UntypedFormBuilder
        }], {
        validation: [{
                type: Input
            }]
    });
})();
var DefaultValidationError = class _DefaultValidationError {
    set validators(validators) {
        this.validators$.next(validators);
    }
    set errors(errors) {
        this.errors$.next(errors);
    }
    set resolvedContext(resolvedContext) {
        this.resolvedContext$.next(resolvedContext);
    }
    constructor(vpm, tokenizerService) {
        this.vpm = vpm;
        this.tokenizerService = tokenizerService;
        this.validators$ = new BehaviorSubject([]);
        this.errors$ = new BehaviorSubject(null);
        this.message$ = new BehaviorSubject("Field is invalid");
        this.resolvedContext$ = new BehaviorSubject(void 0);
        this.messageSub = combineLatest([this.validators$, this.errors$, this.resolvedContext$]).pipe(filter(([_, errors]) => errors !== null && Object.keys(errors).length !== 0), map2(([validators, errors]) => {
            const [k] = Object.keys(errors);
            const v = validators.find(v2 => v2.validator === k);
            return {
                k,
                v,
                e: errors[k]
            };
        }), switchMap$1(({ k, v, e }) => this.vpm.getPlugin(v.validator).pipe(map2(p => ({
            k,
            v,
            p,
            e
        })))), switchMap$1(({ k, v, p, e }) => this.resolveContexts({
            errors: e
        }).pipe(map2(t => ({
            k,
            v,
            p,
            t
        })))), tap(({ p, t, v }) => {
            const replacedTokens = this.replaceTokens({
                message: v.overrideErrorMessage && v.overrideErrorMessage !== "" ? v.overrideErrorMessage : p.errorMessage,
                tokens: t
            });
            this.message$.next(replacedTokens);
        })).subscribe();
    }
    replaceTokens({ message, tokens }) {
        if (tokens !== void 0) {
            tokens.forEach((value, key) => {
                message = message.split(`[${key}]`).join(`${value}`);
            });
        }
        return message;
    }
    resolveContexts({ errors }) {
        return new Observable(obs => {
            let tokens = new Map(this.tokenizerService.generateGenericTokens(errors, ""));
            if (this.resolvedContext$.value) {
                for (const name in this.resolvedContext$.value) {
                    tokens = new Map([...tokens, ...this.tokenizerService.generateGenericTokens(this.resolvedContext$.value[name], name === "_root" ? "" : name)]);
                }
            }
            obs.next(tokens);
            obs.complete();
        });
    }
    static {
        this.ɵfac = function DefaultValidationError_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DefaultValidationError)(i0.ɵɵdirectiveInject(ValidationPluginManager), i0.ɵɵdirectiveInject(i2$2.TokenizerService));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _DefaultValidationError,
            selectors: [["druid-ordain-default-validation-error"]],
            inputs: {
                validators: "validators",
                errors: "errors",
                resolvedContext: "resolvedContext"
            },
            standalone: false,
            decls: 1,
            vars: 1,
            template: function DefaultValidationError_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵtext(0);
                }
                if (rf & 2) {
                    i0.ɵɵtextInterpolate(ctx.message$.value);
                }
            },
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultValidationError, [{
            type: Component,
            args: [{
                    selector: "druid-ordain-default-validation-error",
                    standalone: false,
                    template: "{{ message$.value }}"
                }]
        }], () => [{
            type: ValidationPluginManager
        }, {
            type: i2$2.TokenizerService
        }], {
        validators: [{
                type: Input
            }],
        errors: [{
                type: Input
            }],
        resolvedContext: [{
                type: Input
            }]
    });
})();
var OrdainModule = class _OrdainModule {
    static {
        this.ɵfac = function OrdainModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _OrdainModule)();
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _OrdainModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, DparamModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrdainModule, [{
            type: NgModule,
            args: [{
                    declarations: [ValidationEditorComponent, ValidationValidatorComponent, ValidationRendererHostDirective, ValidationParamsEditorComponent, ValidationParamsEditorFormComponent, DefaultValidationError],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, DparamModule],
                    exports: [ValidationEditorComponent, ValidationParamsEditorComponent, DefaultValidationError]
                }]
        }], null, null);
})();
export { DefaultValidationError, FormValidation, OrdainModule, ValidationEditorComponent, ValidationParamsEditorComponent, ValidationPlugin, ValidationPluginManager, ValidationValidator, ValidationValidatorSettings };
