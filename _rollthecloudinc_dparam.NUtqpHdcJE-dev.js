import { require_lib } from "@nf-internal/chunk-JQGPH55T";
import { forkJoin, iif } from "@nf-internal/chunk-BSWOS4VH";
import { BehaviorSubject, Subject, combineLatest, filter, of, tap } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadValues, __toESM } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/dparam/fesm2022/rollthecloudinc-dparam.mjs
import * as i0 from "@angular/core";
import { Injectable, forwardRef, Input, Component, NgModule } from "@angular/core";
import * as i1 from "@rollthecloudinc/plugin";
import { Plugin, BasePluginManager, PluginDef } from "@rollthecloudinc/plugin";
var import_qs = __toESM(require_lib(), 1);
import { map, switchMap, filter as filter2, tap as tap2, debounceTime, delay, defaultIfEmpty } from "rxjs/operators";
import * as i1$1 from "@angular/forms";
import { Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as i2 from "@rollthecloudinc/utils";
import * as i3 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/select";
import { MaterialModule } from "@rollthecloudinc/material";
import * as i2$1 from "@rollthecloudinc/token";
function ParamsFormComponent_div_0_mat_option_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const p_r1 = ctx.$implicit;
        i0.ɵɵproperty("value", p_r1.value.id);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(p_r1.value.title);
    }
}
function ParamsFormComponent_div_0_mat_form_field_10_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const c_r2 = ctx.$implicit;
        i0.ɵɵproperty("value", c_r2);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(c_r2);
    }
}
function ParamsFormComponent_div_0_mat_form_field_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 2)(1, "mat-label");
        i0.ɵɵtext(2, "Context");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 11);
        i0.ɵɵtemplate(4, ParamsFormComponent_div_0_mat_form_field_10_mat_option_4_Template, 2, 2, "mat-option", 4);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx_r2.contexts);
    }
}
function ParamsFormComponent_div_0_div_16_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 12)(1, "mat-checkbox", 13);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const j_r4 = ctx.index;
        const ctx_r2 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("formGroupName", j_r4);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r2.flagsAsArray[j_r4]);
    }
}
function ParamsFormComponent_div_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 1)(1, "div");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field", 2)(4, "mat-label");
        i0.ɵɵtext(5, "Type");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-select", 3);
        i0.ɵɵtemplate(7, ParamsFormComponent_div_0_mat_option_7_Template, 2, 2, "mat-option", 4);
        i0.ɵɵpipe(8, "async");
        i0.ɵɵpipe(9, "keyvalue");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(10, ParamsFormComponent_div_0_mat_form_field_10_Template, 5, 1, "mat-form-field", 5);
        i0.ɵɵelementStart(11, "mat-form-field", 2);
        i0.ɵɵelement(12, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-form-field", 2);
        i0.ɵɵelement(14, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 8);
        i0.ɵɵtemplate(16, ParamsFormComponent_div_0_div_16_Template, 3, 2, "div", 9);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const param_r5 = ctx.$implicit;
        const i_r6 = ctx.index;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("formGroup", param_r5);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r2.paramName(i_r6));
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 7, i0.ɵɵpipeBind1(8, 5, ctx_r2.paramPlugins$)));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", param_r5.get("mapping").get("type").value == "context");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", param_r5.get("flags").controls);
    }
}
function PluginInstanceComponent_mat_option_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 4);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const p_r1 = ctx.$implicit;
        i0.ɵɵproperty("value", p_r1.value.id);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(p_r1.value.title);
    }
}
var ParamPlugin = class extends Plugin {
    constructor(data) {
        super(data);
        if (data) {
            this.evalParam = data.evalParam;
            if (data.condition) {
                this.condition = data.condition;
            }
            if (data.usedContexts) {
                this.usedContexts = data.usedContexts;
            }
        }
    }
};
var staticParamFactory = () => {
    return new ParamPlugin({
        id: "static",
        title: "Static",
        evalParam: ({ param, metadata }) => of(param.mapping.value)
    });
};
var inputParamFactory = paramEvaluatorService => {
    return new ParamPlugin({
        id: "inputparam",
        title: "Input Param",
        evalParam: ({ param, metadata }) => of(param.mapping.value).pipe(map(name => metadata.has("inputparams") && metadata.get("inputparams").has(name) ? metadata.get("inputparams").get(name) : void 0), switchMap(paramMatch => iif(() => paramMatch !== void 0, paramMatch !== void 0 ? paramEvaluatorService.paramValue(paramMatch, metadata) : of(param.mapping.testValue), of(param.mapping.testValue))))
    });
};
var ParamPluginManager = class _ParamPluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "param"
        }));
    }
    static {
        this.ɵfac = function ParamPluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ParamPluginManager)(i0.ɵɵinject(i1.PluginConfigurationManager), i0.ɵɵinject(i2.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _ParamPluginManager,
            factory: _ParamPluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParamPluginManager, [{
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
var ParamsFormComponent = class _ParamsFormComponent {
    set params(params) {
        console.log('Input "params" set:', params);
        this.params$.next(params);
    }
    set paramValues(paramValues) {
        console.log('Input "paramValues" set:', paramValues);
        this.paramValues$.next(paramValues || []);
    }
    constructor(fb, ppm) {
        this.fb = fb;
        this.ppm = ppm;
        this.contexts = [];
        this.params$ = new BehaviorSubject({});
        this.paramValues$ = new BehaviorSubject([]);
        this.init$ = new Subject();
        this.formArray = this.fb.array([]);
        this.paramPlugins$ = this.ppm.getPlugins();
        this.flags = /* @__PURE__ */ new Map();
        this.savedParams = /* @__PURE__ */ new Map();
        this.paramIndexes = /* @__PURE__ */ new Map();
        this.onTouched = () => { };
        this.flags.set("page", "Page");
        this.flags.set("limit", "Limit");
        this.flags.set("offset", "Offset");
        this.flags.set("searchString", "Search String");
        combineLatest([this.params$, this.paramValues$, this.init$]).pipe(filter2(([params, paramValues]) => !!params && !!paramValues), 
        // Wait until both values are present
        tap2(([params, paramValues]) => {
            console.log("params$ emitted value:", params);
            console.log("paramValues$.value (current):", paramValues);
            const previousIndexes = new Map(this.paramIndexes);
            this.formArray.clear();
            this.paramIndexes.clear();
            let index = 0;
            for (const param in params) {
                console.log("Processing param:", param);
                if (Array.isArray(params[param])) {
                    params[param].forEach(p => this.buildParams(p, index++, previousIndexes));
                }
                else if (params[param].indexOf(":") === 0) {
                    this.buildParams(params[param], index++, previousIndexes);
                }
            }
        })).subscribe();
    }
    ngOnInit() {
        this.init$.next(void 0);
    }
    // ControlValueAccessor methods
    writeValue(val) {
        if (val) {
            this.formArray.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.formArray.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formArray.disable();
        }
        else {
            this.formArray.enable();
        }
    }
    validate(c) {
        return this.formArray.valid ? null : this.formArray.errors;
    }
    // Build the form fields for given parameters
    buildParams(param, index, previousIndexes) {
        console.log(`Building param: ${param}, index: ${index}`);
        this.paramIndexes.set(param, index);
        const formGroup = this.fb.group({
            mapping: this.fb.group({
                type: this.fb.control("", Validators.required),
                value: this.fb.control("", Validators.required),
                testValue: this.fb.control(""),
                context: this.fb.control("")
            }),
            flags: this.fb.array(this.flagsAsArray.map(k => this.fb.group({
                name: k,
                enabled: this.fb.control(false)
            })))
        });
        this.formArray.push(formGroup);
        if (this.savedParams.has(param)) {
            formGroup.setValue(this.savedParams.get(param));
        }
        else if (index < this.paramValues$.value.length) {
            const previousIndex = Array.from(previousIndexes).findIndex(([_, v]) => v === index);
            if (previousIndex === -1) {
                formGroup.setValue(this.paramValues$.value[index]);
            }
        }
    }
    // Retrieve a parameter name by its index
    paramName(index) {
        let i = 0;
        for (const param in this.params$.value) {
            if (Array.isArray(this.params$.value[param])) {
                for (let j = 0; j < this.params$.value[param].length; j++) {
                    if (index === i) {
                        return this.params$.value[param][j];
                    }
                    i++;
                }
            }
            else if (this.params$.value[param].indexOf(":") === 0) {
                if (i === index) {
                    return this.params$.value[param];
                }
                i++;
            }
        }
        return void 0;
    }
    get flagsAsArray() {
        return Array.from(this.flags.keys());
    }
    static {
        this.ɵfac = function ParamsFormComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ParamsFormComponent)(i0.ɵɵdirectiveInject(i1$1.UntypedFormBuilder), i0.ɵɵdirectiveInject(ParamPluginManager));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _ParamsFormComponent,
            selectors: [["classifieds-ui-params-form"]],
            inputs: {
                contexts: "contexts",
                params: "params",
                paramValues: "paramValues"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _ParamsFormComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _ParamsFormComponent),
                        multi: true
                    }])],
            decls: 1,
            vars: 1,
            consts: [[3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["formGroupName", "mapping"], ["required", "", "formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "mapping", 4, "ngIf"], ["matInput", "", "formControlName", "value", "placeholder", "value", "required", ""], ["matInput", "", "formControlName", "testValue", "placeholder", "Test Value", "required", ""], ["formArrayName", "flags"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "context"], [3, "formGroupName"], ["formControlName", "enabled"]],
            template: function ParamsFormComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵtemplate(0, ParamsFormComponent_div_0_Template, 17, 9, "div", 0);
                }
                if (rf & 2) {
                    i0.ɵɵproperty("ngForOf", ctx.formArray.controls);
                }
            },
            dependencies: [i3.NgForOf, i3.NgIf, i1$1.DefaultValueAccessor, i1$1.NgControlStatus, i1$1.NgControlStatusGroup, i1$1.RequiredValidator, i1$1.FormGroupDirective, i1$1.FormControlName, i1$1.FormGroupName, i1$1.FormArrayName, i4.MatOption, i5.MatCheckbox, i6.MatInput, i6.MatFormField, i6.MatLabel, i7.MatSelect, i3.AsyncPipe, i3.KeyValuePipe],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParamsFormComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-params-form",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ParamsFormComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => ParamsFormComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: `<div *ngFor="let param of formArray.controls; let i = index" [formGroup]="param">
  <div>{{ paramName(i) }}</div>
  <mat-form-field formGroupName="mapping">
    <mat-label>Type</mat-label>
    <mat-select required formControlName="type">
      <mat-option *ngFor="let p of (paramPlugins$ | async) | keyvalue" [value]="p.value.id">{{ p.value.title }}</mat-option>
    </mat-select>
  </mat-form-field>
  <mat-form-field *ngIf="param.get('mapping').get('type').value == 'context'" formGroupName="mapping">
    <mat-label>Context</mat-label>
    <mat-select formControlName="context">
      <mat-option *ngFor="let c of contexts" [value]="c">{{ c }}</mat-option>
    </mat-select>
  </mat-form-field>
  <mat-form-field formGroupName="mapping">
    <input matInput formControlName="value" placeholder="value" required>
  </mat-form-field>
  <mat-form-field formGroupName="mapping">
    <input matInput formControlName="testValue" placeholder="Test Value" required>
  </mat-form-field>
  <div formArrayName="flags">
    <div *ngFor="let flag of param.get('flags').controls; let j = index" [formGroupName]="j">
      <mat-checkbox formControlName="enabled">{{ flagsAsArray[j] }}</mat-checkbox>
    </div>
  </div>
</div>`
                }]
        }], () => [{
            type: i1$1.UntypedFormBuilder
        }, {
            type: ParamPluginManager
        }], {
        contexts: [{
                type: Input
            }],
        params: [{
                type: Input
            }],
        paramValues: [{
                type: Input
            }]
    });
})();
var ParamsQuerystringComponent = class _ParamsQuerystringComponent {
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
        this.settingsSub = this.settings$.pipe(tap2(s => {
            if (s) {
                this.formGroup.get("paramsString").setValue(s.paramsString ? s.paramsString : "");
            }
        })).subscribe();
        this.settingsParamsSub = combineLatest([this.settings$, this.formGroup.get("paramsString").valueChanges]).pipe(filter2(([s]) => s !== void 0), delay(1), tap2(([s]) => this.paramValues$.next(s.params))).subscribe();
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
        this.ɵfac = function ParamsQuerystringComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ParamsQuerystringComponent)(i0.ɵɵdirectiveInject(i1$1.UntypedFormBuilder));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _ParamsQuerystringComponent,
            selectors: [["druid-params-querystring"]],
            inputs: {
                contexts: "contexts",
                settings: "settings"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _ParamsQuerystringComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _ParamsQuerystringComponent),
                        multi: true
                    }])],
            decls: 6,
            vars: 4,
            consts: [[3, "formGroup"], [1, "params-container"], ["matInput", "", "placeholder", "Params", "formControlName", "paramsString"], ["formControlName", "params", 3, "params", "paramValues", "contexts"]],
            template: function ParamsQuerystringComponent_Template(rf, ctx) {
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
            dependencies: [i1$1.DefaultValueAccessor, i1$1.NgControlStatus, i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, i1$1.FormControlName, i6.MatInput, i6.MatFormField, ParamsFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParamsQuerystringComponent, [{
            type: Component,
            args: [{
                    selector: "druid-params-querystring",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ParamsQuerystringComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => ParamsQuerystringComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="formGroup">\n  <div class="params-container">\n    <div>\n      <mat-form-field>\n        <input matInput placeholder="Params" formControlName="paramsString">\n      </mat-form-field>\n    </div>\n    <classifieds-ui-params-form formControlName="params" [params]="paramsParsed" [paramValues]="paramValues$.value" [contexts]="contexts"></classifieds-ui-params-form>\n  </div>\n</div>'
                }]
        }], () => [{
            type: i1$1.UntypedFormBuilder
        }], {
        contexts: [{
                type: Input
            }],
        settings: [{
                type: Input
            }]
    });
})();
var Param = class {
    constructor(data) {
        if (data) {
            this.mapping = new Mapping(data.mapping);
            if (data.flags !== void 0) {
                this.flags = data.flags.map(f => new Flag(f));
            }
        }
    }
};
var Mapping = class {
    constructor(data) {
        if (data) {
            this.type = data.type;
            this.value = data.value;
            this.testValue = data.testValue;
            this.context = data.context;
        }
    }
};
var Flag = class {
    constructor(data) {
        if (data) {
            this.name = data.name;
            this.enabled = data.enabled;
        }
    }
};
var ParamPluginInstance = class {
    constructor(data) {
        if (data) {
            this.plugin = data.plugin;
            this.settings = data.settings ? new ParamSettings(data.settings) : new ParamSettings();
        }
    }
};
var ParamSettings = class {
    constructor(data) {
        if (data) {
            this.paramsString = data.paramsString;
            if (data.params && Array.isArray(data.params)) {
                this.params = data.params.map(p => new Param(p));
            }
        }
    }
};
var PluginInstanceComponent = class _PluginInstanceComponent {
    set title(title) {
        this.title$.next(title);
    }
    set plugins(plugins) {
        this.plugins$.next(plugins);
    }
    set instance(instance) {
        this.instance$.next(instance);
    }
    constructor(fb) {
        this.fb = fb;
        this.plugins$ = new BehaviorSubject([]);
        this.title$ = new BehaviorSubject("Plugin");
        this.instance$ = new BehaviorSubject(new ParamPluginInstance());
        this.instanceForm = this.fb.group({
            plugin: this.fb.control(""),
            settings: this.fb.control("")
        });
        this.instanceSub = this.instance$.pipe(filter(i => !!i), tap(i => {
            this.instanceForm.get("plugin").setValue(i.plugin);
        })).subscribe();
        this.onTouched = () => { };
    }
    writeValue(val) {
        if (val) {
            this.instanceForm.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.instanceForm.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.instanceForm.disable();
        }
        else {
            this.instanceForm.enable();
        }
    }
    validate(c) {
        return this.instanceForm.valid ? null : this.instanceForm.errors;
    }
    static {
        this.ɵfac = function PluginInstanceComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PluginInstanceComponent)(i0.ɵɵdirectiveInject(i1$1.UntypedFormBuilder));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _PluginInstanceComponent,
            selectors: [["druid-params-plugin-instance"]],
            inputs: {
                title: "title",
                plugins: "plugins",
                instance: "instance"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _PluginInstanceComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _PluginInstanceComponent),
                        multi: true
                    }])],
            decls: 10,
            vars: 10,
            consts: [[3, "formGroup"], ["required", "", "formControlName", "plugin"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "settings", 3, "settings"], [3, "value"]],
            template: function PluginInstanceComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label");
                    i0.ɵɵtext(3);
                    i0.ɵɵpipe(4, "async");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(5, "mat-select", 1);
                    i0.ɵɵtemplate(6, PluginInstanceComponent_mat_option_6_Template, 2, 2, "mat-option", 2);
                    i0.ɵɵpipe(7, "async");
                    i0.ɵɵpipe(8, "keyvalue");
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelement(9, "druid-params-querystring", 3);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.instanceForm);
                    i0.ɵɵadvance(3);
                    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 4, ctx.title$));
                    i0.ɵɵadvance(3);
                    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 8, i0.ɵɵpipeBind1(7, 6, ctx.plugins$)));
                    i0.ɵɵadvance(3);
                    i0.ɵɵproperty("settings", ctx.instance$.value.settings);
                }
            },
            dependencies: [i3.NgForOf, i1$1.NgControlStatus, i1$1.NgControlStatusGroup, i1$1.RequiredValidator, i1$1.FormGroupDirective, i1$1.FormControlName, i4.MatOption, i6.MatFormField, i6.MatLabel, i7.MatSelect, ParamsQuerystringComponent, i3.AsyncPipe, i3.KeyValuePipe],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PluginInstanceComponent, [{
            type: Component,
            args: [{
                    selector: "druid-params-plugin-instance",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PluginInstanceComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => PluginInstanceComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="instanceForm">\n  <mat-form-field>\n    <mat-label>{{ title$ | async }}</mat-label>\n    <mat-select required formControlName="plugin">\n      <mat-option *ngFor="let p of ((plugins$ | async) | keyvalue); let i = index" [value]="p.value.id">{{ p.value.title }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <druid-params-querystring formControlName="settings" [settings]="instance$.value.settings"></druid-params-querystring>\n</div>'
                }]
        }], () => [{
            type: i1$1.UntypedFormBuilder
        }], {
        title: [{
                type: Input
            }],
        plugins: [{
                type: Input
            }],
        instance: [{
                type: Input
            }]
    });
})();
var ParamEvaluatorService = class _ParamEvaluatorService {
    constructor(paramPluginManager, tokenizerService) {
        this.paramPluginManager = paramPluginManager;
        this.tokenizerService = tokenizerService;
    }
    paramValue(param, metadata) {
        return this.paramPluginManager.getPlugins().pipe(map(plugins => Array.from(plugins).map(([_, p]) => p)), map(plugins => plugins.find(p => p.condition && p.condition({
            param,
            metadata
        }) || !p.condition && p.id === param.mapping.type)), switchMap(p => iif(() => !!p, p ? p.evalParam({
            param,
            metadata
        }) : of(
        /*param.mapping.value*/
        ), of(param.mapping.value))), map(v => param.mapping.value && typeof v === "string" && this.tokenizerService.discoverTokens(v).length === 0 ? v : param.mapping.testValue));
    }
    paramValues(params) {
        return forkJoin(Array.from(params.keys()).map(name => this.paramValue(params.get(name), /* @__PURE__ */ new Map()).pipe(map(v => [name, v])))).pipe(map(groups => groups.reduce((p, c) => new Map([...p, c]), /* @__PURE__ */ new Map())), defaultIfEmpty(/* @__PURE__ */ new Map()));
    }
    resolveParams({ params }) {
        return switchMap(() => iif(() => Object.keys(params).length > 1, forkJoin(Object.keys(params).map(name => this.paramValue(params[name], /* @__PURE__ */ new Map()).pipe(map(v => ({
            [name]: v
        }))))).pipe(map(groups => groups.reduce((p, c) => __spreadValues(__spreadValues({}, p), c), {})), 
        // default options go here instead of empty object.
        map(options => ({
            options
        }))), iif(() => Object.keys(params).length !== 0, this.paramValue(Object.keys(params).length !== 0 ? params[Object.keys(params)[0]] : new Param(), /* @__PURE__ */ new Map()).pipe(map(optionValue => ({
            options: {
                [Object.keys(params)[0]]: optionValue
            }
        }))), of({
            options: {}
        }))));
    }
    static {
        this.ɵfac = function ParamEvaluatorService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ParamEvaluatorService)(i0.ɵɵinject(ParamPluginManager), i0.ɵɵinject(i2$1.TokenizerService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _ParamEvaluatorService,
            factory: _ParamEvaluatorService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParamEvaluatorService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: ParamPluginManager
        }, {
            type: i2$1.TokenizerService
        }], null);
})();
var DparamModule = class _DparamModule {
    constructor(ppm, paramEvaluatorService) {
        ppm.register(staticParamFactory());
        ppm.register(inputParamFactory(paramEvaluatorService));
    }
    static {
        this.ɵfac = function DparamModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DparamModule)(i0.ɵɵinject(ParamPluginManager), i0.ɵɵinject(ParamEvaluatorService));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _DparamModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DparamModule, [{
            type: NgModule,
            args: [{
                    declarations: [ParamsFormComponent, ParamsQuerystringComponent, PluginInstanceComponent],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
                    exports: [ParamsFormComponent, ParamsQuerystringComponent, PluginInstanceComponent]
                }]
        }], () => [{
            type: ParamPluginManager
        }, {
            type: ParamEvaluatorService
        }], null);
})();
export { DparamModule, Flag, Mapping, Param, ParamEvaluatorService, ParamPlugin, ParamPluginInstance, ParamPluginManager, ParamSettings, ParamsFormComponent, ParamsQuerystringComponent, PluginInstanceComponent };
