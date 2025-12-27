import "@nf-internal/chunk-BSWOS4VH";
import { of } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/attributes/fesm2022/rollthecloudinc-attributes.mjs
import * as i0 from "@angular/core";
import { InjectionToken, Inject, Injectable, Directive, ViewChild, Input, Component, forwardRef, Pipe, NgModule } from "@angular/core";
import * as i3 from "@angular/common";
import { CommonModule } from "@angular/common";
import { provideHttpClient, withJsonpSupport } from "@angular/common/http";
import * as i1$1 from "@angular/forms";
import { UntypedFormGroup, UntypedFormArray, UntypedFormControl, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@rollthecloudinc/material";
import * as i1 from "@rollthecloudinc/plugin";
import { BasePluginManager, PluginDef, Plugin } from "@rollthecloudinc/plugin";
import * as i2 from "@rollthecloudinc/utils";
import * as i2$1 from "@angular/material/input";
import * as numberString from "number-string";
function AttributeWidgetComponent_ng_template_1_Template(rf, ctx) { }
function AttributesBuilderComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 4);
        i0.ɵɵelement(1, "classifieds-ui-attribute-widget", 5);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const i_r1 = ctx.index;
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("formGroupName", i0.ɵɵinterpolate(i_r1));
        i0.ɵɵadvance();
        i0.ɵɵproperty("attribute", ctx_r1.attributes[i_r1])("widget", ctx_r1.discoverWidget(ctx_r1.attributes[i_r1].widget))("appearance", ctx_r1.appearance);
    }
}
function AttributesBuilderComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "p");
        i0.ɵɵtext(2, "No attributes available for ad type. Click next to continue.");
        i0.ɵɵelementEnd()();
    }
}
var ATTRIBUTE_WIDGET = new InjectionToken("AttributeWidget");
var WidgetsService = class _WidgetsService {
    constructor(widgets) {
        this.widgets = widgets;
    }
    get(widget) {
        return this.widgets.find(w => w.name === widget);
    }
    static {
        this.ɵfac = function WidgetsService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _WidgetsService)(i0.ɵɵinject(ATTRIBUTE_WIDGET));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _WidgetsService,
            factory: _WidgetsService.ɵfac
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetsService, [{
            type: Injectable
        }], () => [{
            type: Array,
            decorators: [{
                    type: Inject,
                    args: [ATTRIBUTE_WIDGET]
                }]
        }], null);
})();
var WidgetPluginManager = class _WidgetPluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "widget"
        }));
    }
    static {
        this.ɵfac = function WidgetPluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _WidgetPluginManager)(i0.ɵɵinject(i1.PluginConfigurationManager), i0.ɵɵinject(i2.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _WidgetPluginManager,
            factory: _WidgetPluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetPluginManager, [{
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
var AttributeWidgetDirective = class _AttributeWidgetDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static {
        this.ɵfac = function AttributeWidgetDirective_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AttributeWidgetDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef));
        };
    }
    static {
        this.ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
            type: _AttributeWidgetDirective,
            selectors: [["", "classifiedsUiWidgetHost", ""]],
            standalone: false
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributeWidgetDirective, [{
            type: Directive,
            args: [{
                    selector: "[classifiedsUiWidgetHost]",
                    standalone: false
                }]
        }], () => [{
            type: i0.ViewContainerRef
        }], null);
})();
var AttributeWidgetComponent = class _AttributeWidgetComponent {
    constructor(componentFactoryResolver, controlContainer) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.controlContainer = controlContainer;
        this.appearance = "legacy";
    }
    ngOnInit() {
        this.widget.subscribe(widget => {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.component);
            const viewContainerRef = this.widgetHost.viewContainerRef;
            viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.attribute = this.attribute;
            componentRef.instance.appearance = this.appearance;
        });
    }
    static {
        this.ɵfac = function AttributeWidgetComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AttributeWidgetComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i1$1.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _AttributeWidgetComponent,
            selectors: [["classifieds-ui-attribute-widget"]],
            viewQuery: function AttributeWidgetComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(AttributeWidgetDirective, 7);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.widgetHost = _t.first);
                }
            },
            inputs: {
                widget: "widget",
                attribute: "attribute",
                appearance: "appearance"
            },
            standalone: false,
            decls: 2,
            vars: 1,
            consts: [[3, "formGroup"], ["classifiedsUiWidgetHost", ""]],
            template: function AttributeWidgetComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementContainerStart(0, 0);
                    i0.ɵɵtemplate(1, AttributeWidgetComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
                    i0.ɵɵelementContainerEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.controlContainer.control);
                }
            },
            dependencies: [i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, AttributeWidgetDirective],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributeWidgetComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-attribute-widget",
                    template: `<ng-container [formGroup]="controlContainer.control"><ng-template classifiedsUiWidgetHost></ng-template></ng-container>`,
                    standalone: false
                }]
        }], () => [{
            type: i0.ComponentFactoryResolver
        }, {
            type: i1$1.ControlContainer
        }], {
        widget: [{
                type: Input
            }],
        attribute: [{
                type: Input
            }],
        appearance: [{
                type: Input
            }],
        widgetHost: [{
                type: ViewChild,
                args: [AttributeWidgetDirective, {
                        static: true
                    }]
            }]
    });
})();
var AttributesBuilderComponent = class _AttributesBuilderComponent {
    set attributeValues(attributeValues) {
        this._attributeValues = attributeValues;
        this.applyValues();
    }
    get attributeValues() {
        return this._attributeValues;
    }
    get attributesArray() {
        return this.attributesForm.get("attributes");
    }
    constructor(widgetsService, wpm) {
        this.widgetsService = widgetsService;
        this.wpm = wpm;
        this.attributes = [];
        this.appearance = "legacy";
        this.attributesForm = new UntypedFormGroup({
            attributes: new UntypedFormArray([])
        });
        this._attributeValues = [];
        this.onTouched = () => { };
    }
    ngOnChanges(changes) {
        if (changes.attributes && (!changes.attributes.previousValue || changes.attributes.previousValue !== changes.attributes.currentValue)) {
            while (this.attributesArray.length !== 0) {
                this.attributesArray.removeAt(0);
            }
            this.attributes.forEach(attr => {
                this.attributesArray.push(new UntypedFormGroup({
                    name: new UntypedFormControl(attr.name, Validators.required),
                    type: new UntypedFormControl(attr.type, Validators.required),
                    displayName: new UntypedFormControl(attr.label, Validators.required),
                    value: new UntypedFormControl("", attr.required ? Validators.required : []),
                    attributes: new UntypedFormArray(!attr.attributes ? [] : attr.attributes.map(attr2 => new UntypedFormGroup({
                        name: new UntypedFormControl(attr2.name, Validators.required),
                        type: new UntypedFormControl(attr2.type, Validators.required),
                        displayName: new UntypedFormControl(attr2.label, Validators.required),
                        value: new UntypedFormControl("", attr2.required ? Validators.required : [])
                    })))
                }));
            });
            this.applyValues();
        }
    }
    writeValue(val) {
        if (val) {
            console.log(`write value: ${val}`);
            this.attributesArray.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.attributesArray.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.attributesArray.disable();
        }
        else {
            this.attributesArray.enable();
        }
    }
    validate(c) {
        return this.attributesForm.valid ? null : {
            invalidForm: {
                valid: false,
                message: "attributes are invalid"
            }
        };
    }
    discoverWidget(widget) {
        return this.wpm.getPlugin(widget);
    }
    applyValues() {
        this.attributesArray.controls.forEach((c, index) => {
            const attrValue = this.attributeValues ? this.attributeValues.find(av => av.name === c.get("name").value) : void 0;
            if (attrValue !== void 0) {
                c.get("value").setValue(attrValue.value);
                c.updateValueAndValidity();
            }
            c.get("attributes").controls.forEach(c2 => {
                const attrValue2 = this.attributeValues && this.attributeValues[index] !== void 0 ? this.attributeValues[index].attributes.find(av => av.name === c2.get("name").value) : void 0;
                if (attrValue2 !== void 0) {
                    c2.get("value").setValue(attrValue2.value);
                    c2.updateValueAndValidity();
                }
            });
        });
    }
    static {
        this.ɵfac = function AttributesBuilderComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AttributesBuilderComponent)(i0.ɵɵdirectiveInject(WidgetsService), i0.ɵɵdirectiveInject(WidgetPluginManager));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _AttributesBuilderComponent,
            selectors: [["classifieds-ui-attributes-builder"]],
            inputs: {
                attributes: "attributes",
                appearance: "appearance",
                attributeValues: "attributeValues"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([WidgetsService, {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _AttributesBuilderComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _AttributesBuilderComponent),
                        multi: true
                    }]), i0.ɵɵNgOnChangesFeature],
            decls: 4,
            vars: 3,
            consts: [[3, "formGroup"], ["formArrayName", "attributes", 1, "attribute-fields"], ["class", "attribute-field-container", 3, "formGroupName", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "attribute-field-container", 3, "formGroupName"], [3, "attribute", "widget", "appearance"]],
            template: function AttributesBuilderComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementContainerStart(0, 0);
                    i0.ɵɵelementStart(1, "div", 1);
                    i0.ɵɵtemplate(2, AttributesBuilderComponent_div_2_Template, 2, 5, "div", 2);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementContainerEnd();
                    i0.ɵɵtemplate(3, AttributesBuilderComponent_div_3_Template, 3, 0, "div", 3);
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.attributesForm);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("ngForOf", ctx.attributesArray.controls);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.attributes.length == 0);
                }
            },
            dependencies: [i3.NgForOf, i3.NgIf, i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, i1$1.FormGroupName, i1$1.FormArrayName, AttributeWidgetComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributesBuilderComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-attributes-builder",
                    providers: [WidgetsService, {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => AttributesBuilderComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => AttributesBuilderComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<ng-container [formGroup]="attributesForm">\n  <div formArrayName="attributes" class="attribute-fields">\n    <div *ngFor="let attribute of attributesArray.controls; let i=index" formGroupName="{{i}}" class="attribute-field-container">\n      <classifieds-ui-attribute-widget [attribute]="attributes[i]" [widget]="discoverWidget(attributes[i].widget)" [appearance]="appearance"></classifieds-ui-attribute-widget>\n    </div>\n  </div>\n</ng-container>\n<div *ngIf="attributes.length == 0">\n  <p>No attributes available for ad type. Click next to continue.</p>\n</div>\n'
                }]
        }], () => [{
            type: WidgetsService
        }, {
            type: WidgetPluginManager
        }], {
        attributes: [{
                type: Input
            }],
        appearance: [{
                type: Input
            }],
        attributeValues: [{
                type: Input
            }]
    });
})();
var TextWidgetComponent = class _TextWidgetComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.appearance = "legacy";
    }
    static {
        this.ɵfac = function TextWidgetComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _TextWidgetComponent)(i0.ɵɵdirectiveInject(i1$1.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _TextWidgetComponent,
            selectors: [["classifieds-ui-text-widget"]],
            inputs: {
                attribute: "attribute",
                appearance: "appearance"
            },
            standalone: false,
            decls: 3,
            vars: 3,
            consts: [[3, "formGroup"], [3, "appearance"], ["matInput", "", "formControlName", "value", 3, "placeholder"]],
            template: function TextWidgetComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementContainerStart(0, 0);
                    i0.ɵɵelementStart(1, "mat-form-field", 1);
                    i0.ɵɵelement(2, "input", 2);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementContainerEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.controlContainer.control);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("appearance", ctx.appearance);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("placeholder", ctx.attribute.label);
                }
            },
            dependencies: [i1$1.DefaultValueAccessor, i1$1.NgControlStatus, i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, i1$1.FormControlName, i2$1.MatInput, i2$1.MatFormField],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextWidgetComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-text-widget",
                    standalone: false,
                    template: '<ng-container [formGroup]="controlContainer.control">\n  <mat-form-field [appearance]="appearance">\n    <input matInput [placeholder]="attribute.label" formControlName="value">\n  </mat-form-field>\n</ng-container>\n'
                }]
        }], () => [{
            type: i1$1.ControlContainer
        }], {
        attribute: [{
                type: Input
            }],
        appearance: [{
                type: Input
            }]
    });
})();
var MinMaxWidgetComponent = class _MinMaxWidgetComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
    }
    static {
        this.ɵfac = function MinMaxWidgetComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _MinMaxWidgetComponent)(i0.ɵɵdirectiveInject(i1$1.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _MinMaxWidgetComponent,
            selectors: [["classifieds-ui-min-max-widget"]],
            inputs: {
                attribute: "attribute"
            },
            standalone: false,
            decls: 8,
            vars: 4,
            consts: [[3, "formGroup"], ["formArrayName", "attributes"], ["formGroupName", "0"], ["matInput", "", "type", "number", "formControlName", "value", 3, "placeholder"], ["formGroupName", "1"]],
            template: function MinMaxWidgetComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementContainerStart(0, 0);
                    i0.ɵɵelementStart(1, "label");
                    i0.ɵɵtext(2);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(3, "div", 1)(4, "mat-form-field", 2);
                    i0.ɵɵelement(5, "input", 3);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(6, "mat-form-field", 4);
                    i0.ɵɵelement(7, "input", 3);
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementContainerEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.controlContainer.control);
                    i0.ɵɵadvance(2);
                    i0.ɵɵtextInterpolate(ctx.attribute.label);
                    i0.ɵɵadvance(3);
                    i0.ɵɵproperty("placeholder", ctx.attribute.attributes[0].label);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("placeholder", ctx.attribute.attributes[1].label);
                }
            },
            dependencies: [i1$1.DefaultValueAccessor, i1$1.NumberValueAccessor, i1$1.NgControlStatus, i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, i1$1.FormControlName, i1$1.FormGroupName, i1$1.FormArrayName, i2$1.MatInput, i2$1.MatFormField],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MinMaxWidgetComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-min-max-widget",
                    standalone: false,
                    template: '<ng-container [formGroup]="controlContainer.control">\n  <label>{{ attribute.label }}</label>\n  <div formArrayName="attributes">\n    <mat-form-field formGroupName="0">\n      <input matInput type="number" [placeholder]="attribute.attributes[0].label" formControlName="value">\n    </mat-form-field>\n    <mat-form-field formGroupName="1">\n      <input matInput type="number" [placeholder]="attribute.attributes[1].label" formControlName="value">\n    </mat-form-field>\n  </div>\n</ng-container>\n'
                }]
        }], () => [{
            type: i1$1.ControlContainer
        }], {
        attribute: [{
                type: Input
            }]
    });
})();
var AttributeMatcherService = class _AttributeMatcherService {
    getComputedValue(attr, attributes) {
        const attribute = attributes && attributes.length > 0 && this.matchAttribute(attr, attributes);
        if (attribute) {
            return attribute.computedValue;
        }
        else {
            return;
        }
    }
    getValue(attr, attributes) {
        const attribute = attributes && attributes.length > 0 && this.matchAttribute(attr, attributes);
        if (attribute) {
            return attribute.value;
        }
        else {
            return;
        }
    }
    matchAttribute(attr, attributes) {
        const len = attributes.length;
        for (let i = 0; i < len; i++) {
            if (attributes[i].attributes && attributes[i].attributes.length > 0) {
                const value = this.matchAttribute(attr, attributes[i].attributes);
                if (value) {
                    return attributes[i];
                }
                else {
                    continue;
                }
            }
            else if (attr === attributes[i].name) {
                return attributes[i];
            }
            else {
                continue;
            }
        }
    }
    static {
        this.ɵfac = function AttributeMatcherService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AttributeMatcherService)();
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _AttributeMatcherService,
            factory: _AttributeMatcherService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributeMatcherService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var AttributePipe = class _AttributePipe {
    constructor(attributeMatcher) {
        this.attributeMatcher = attributeMatcher;
    }
    transform(attributes, attr) {
        const computedValue = this.attributeMatcher.getComputedValue(attr, attributes);
        if (computedValue) {
            return computedValue;
        }
        else {
            return "";
        }
    }
    static {
        this.ɵfac = function AttributePipe_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AttributePipe)(i0.ɵɵdirectiveInject(AttributeMatcherService, 16));
        };
    }
    static {
        this.ɵpipe = /* @__PURE__ */ i0.ɵɵdefinePipe({
            name: "attribute",
            type: _AttributePipe,
            pure: true,
            standalone: false
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributePipe, [{
            type: Pipe,
            args: [{
                    name: "attribute",
                    standalone: false
                }]
        }], () => [{
            type: AttributeMatcherService
        }], null);
})();
var AttributeTypes;
(function (AttributeTypes2) {
    AttributeTypes2[AttributeTypes2["Number"] = 0] = "Number";
    AttributeTypes2[AttributeTypes2["Text"] = 1] = "Text";
    AttributeTypes2[AttributeTypes2["Complex"] = 2] = "Complex";
    AttributeTypes2[AttributeTypes2["Float"] = 3] = "Float";
    AttributeTypes2[AttributeTypes2["Array"] = 4] = "Array";
    AttributeTypes2[AttributeTypes2["Bool"] = 5] = "Bool";
    AttributeTypes2[AttributeTypes2["Date"] = 6] = "Date";
})(AttributeTypes || (AttributeTypes = {}));
var AttributeWidget = class extends Plugin {
    constructor(data) {
        super(data);
        if (data) {
            this.name = this.id;
            this.schema = data.schema ? new Attribute(data.schema) : void 0;
            this.component = data.component;
        }
    }
};
var Attribute = class _Attribute {
    constructor(data) {
        this.attributes = [];
        if (data) {
            this.name = data.name;
            this.widget = data.widget !== void 0 ? data.widget : "text";
            this.type = data.type;
            this.label = data.label;
            this.required = data.required;
            this.options = data.options;
            if (data.attributes) {
                this.attributes = data.attributes.map(a => new _Attribute(a));
            }
        }
    }
};
var AttributeValue = class _AttributeValue {
    constructor(data) {
        this.attributes = [];
        if (data) {
            this.name = data.name;
            this.displayName = data.displayName;
            this.type = data.type;
            this.value = data.value;
            this.intValue = data.intValue;
            this.computedValue = data.computedValue;
            if (data.attributes) {
                if (Array.isArray(data.attributes)) {
                    this.attributes = data.attributes.reduce((p, a) => a._store === void 0 || a._store ? [...p, new _AttributeValue(a)] : p, []);
                }
                else if (data.attributes._store === void 0 || data.attributes._store) {
                    this.attributes = [data.attributes];
                }
            }
            if (data.value && typeof data.value === "object") {
                this.value = void 0;
                this.type = AttributeTypes.Complex;
                data.value.attributes.reduce((p, a) => a._store === void 0 || a._store ? [...p, new _AttributeValue(a)] : p, []);
            }
            else {
                this.value = data.value;
            }
        }
    }
};
var textFactory = () => {
    const schema = new Attribute({
        name: "",
        type: AttributeTypes.Text,
        label: "",
        required: false,
        widget: "text",
        options: {},
        attributes: []
    });
    return new AttributeWidget({
        id: "text",
        name: "text",
        title: "Text",
        component: TextWidgetComponent,
        schema
    });
};
var minmaxFactory = () => {
    return new AttributeWidget({
        id: "minmax",
        name: "minmax",
        title: "MinMax",
        component: MinMaxWidgetComponent,
        schema: void 0
    });
};
var AttributesModule = class _AttributesModule {
    constructor(widgetPlugins, wpm) {
        widgetPlugins.forEach(p => wpm.register(p));
    }
    static {
        this.ɵfac = function AttributesModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AttributesModule)(i0.ɵɵinject(ATTRIBUTE_WIDGET), i0.ɵɵinject(WidgetPluginManager));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _AttributesModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            providers: [{
                    provide: ATTRIBUTE_WIDGET,
                    useFactory: textFactory,
                    multi: true
                }, {
                    provide: ATTRIBUTE_WIDGET,
                    useFactory: minmaxFactory,
                    multi: true
                }, provideHttpClient(withJsonpSupport())],
            imports: [CommonModule, ReactiveFormsModule, MaterialModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributesModule, [{
            type: NgModule,
            args: [{
                    declarations: [AttributesBuilderComponent, AttributeWidgetComponent, AttributeWidgetDirective, TextWidgetComponent, MinMaxWidgetComponent, AttributePipe
                        /*, YmmSelectorComponent, CitySelectorComponent*/
                    ],
                    exports: [AttributesBuilderComponent, AttributePipe, AttributeWidgetComponent],
                    imports: [CommonModule, ReactiveFormsModule, MaterialModule],
                    providers: [{
                            provide: ATTRIBUTE_WIDGET,
                            useFactory: textFactory,
                            multi: true
                        }, {
                            provide: ATTRIBUTE_WIDGET,
                            useFactory: minmaxFactory,
                            multi: true
                        }, provideHttpClient(withJsonpSupport())]
                }]
        }], () => [{
            type: Array,
            decorators: [{
                    type: Inject,
                    args: [ATTRIBUTE_WIDGET]
                }]
        }, {
            type: WidgetPluginManager
        }], null);
})();
var ValueComputerService = class _ValueComputerService {
    constructor() { }
    compute(attributes) {
        const computedAttributes = [];
        attributes.forEach(a => computedAttributes.push(this.computeAttribute(a)));
        return computedAttributes;
    }
    computeAttribute(attribute) {
        const computedValue = this.resolveComputedValue(attribute.value, attribute.type);
        if (attribute.attributes && attribute.attributes.length > 0) {
            return new AttributeValue(__spreadProps(__spreadValues({}, attribute), {
                computedValue,
                attributes: this.compute(attribute.attributes)
            }));
        }
        else {
            return new AttributeValue(__spreadProps(__spreadValues({}, attribute), {
                computedValue
            }));
        }
    }
    /**
     * @todo: Support below strings.
     * beds: 1.5
     * beds: 1 1/2
     * price: $1,000
     * price: 1,000
     * price $1,000,000.00
     * baths: one
     */
    resolveComputedValue(value, type) {
        let computedValue;
        if (type === AttributeTypes.Number) {
            computedValue = numberString.toNumber(value.trim());
            if (computedValue && isNaN(computedValue)) {
                computedValue = void 0;
            }
        }
        else {
            computedValue = value.trim();
        }
        return computedValue === void 0 ? computedValue : `${computedValue}`;
    }
    static {
        this.ɵfac = function ValueComputerService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ValueComputerService)();
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _ValueComputerService,
            factory: _ValueComputerService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ValueComputerService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var AttributeSerializerService = class _AttributeSerializerService {
    constructor(valueComputer) {
        this.valueComputer = valueComputer;
    }
    serialize(obj, prop) {
        const type = typeof obj;
        if (type !== "object") {
            return new AttributeValue({
                name: prop,
                type: type !== "string" ? type !== "boolean" ? AttributeTypes.Number : AttributeTypes.Bool : AttributeTypes.Text,
                displayName: prop,
                value: `${obj}`,
                intValue: void 0,
                computedValue: this.valueComputer.resolveComputedValue(`${obj}`, type !== "string" ? type !== "boolean" ? AttributeTypes.Number : AttributeTypes.Bool : AttributeTypes.Text),
                attributes: []
            });
        }
        else if (Array.isArray(obj) && (prop === "attributes" || prop === "settings")) {
            return new AttributeValue({
                name: prop,
                type: AttributeTypes.Complex,
                displayName: prop,
                value: void 0,
                intValue: void 0,
                computedValue: void 0,
                attributes: obj
            });
        }
        else if (Array.isArray(obj)) {
            const len = obj.length;
            const attrValues = [];
            for (let i = 0; i < len; i++) {
                if (typeof obj[i] !== "object") {
                    attrValues.push(this.serialize(obj[i], `${i}`));
                }
                else {
                    attrValues.push(this.serialize(obj[i], `${i}`));
                }
            }
            return new AttributeValue({
                name: prop,
                type: AttributeTypes.Array,
                displayName: prop,
                value: void 0,
                intValue: void 0,
                computedValue: void 0,
                attributes: attrValues
            });
        }
        else if (obj instanceof Date) {
            return new AttributeValue({
                name: prop,
                type: AttributeTypes.Date,
                displayName: prop,
                value: obj.toJSON(),
                intValue: void 0,
                computedValue: obj.toJSON(),
                attributes: []
            });
        }
        else {
            const attrValues = [];
            for (const p in obj) {
                attrValues.push(this.serialize(obj[p], p));
            }
            return new AttributeValue({
                name: prop,
                type: AttributeTypes.Complex,
                displayName: prop,
                value: void 0,
                intValue: void 0,
                computedValue: void 0,
                attributes: attrValues
            });
        }
    }
    deserializeAsObject(attrValues, ignoreAttributes = false) {
        return this.deserialize(new AttributeValue({
            name: "root",
            type: AttributeTypes.Complex,
            displayName: "root",
            value: void 0,
            computedValue: void 0,
            intValue: 0,
            attributes: attrValues
        }), ignoreAttributes);
    }
    deserialize(attrValue, ignoreAttributes = false) {
        let obj;
        let len;
        switch (attrValue.type) {
            case AttributeTypes.Complex:
                if (!ignoreAttributes && (attrValue.name === "attributes" || attrValue.name === "settings")) {
                    obj = attrValue.attributes.map(a => new AttributeValue(a));
                }
                else {
                    len = attrValue.attributes.length;
                    for (let i = 0; i < len; i++) {
                        obj = __spreadProps(__spreadValues({}, obj), {
                            [attrValue.attributes[i].name]: this.deserialize(attrValue.attributes[i])
                        });
                    }
                }
                break;
            case AttributeTypes.Bool:
                obj = attrValue.value !== void 0 ? ["1", "true", "on"].findIndex(b => b === attrValue.value) > -1 : void 0;
                break;
            case AttributeTypes.Number:
            case AttributeTypes.Float:
                obj = attrValue.value !== void 0 && attrValue.value !== "" && attrValue.value !== "undefined" ? attrValue.value !== "0" ? numberString.toNumber(attrValue.value.trim()) : 0 : void 0;
                break;
            case AttributeTypes.Text:
                obj = attrValue.value;
                break;
            case AttributeTypes.Array:
                if (!ignoreAttributes && (attrValue.name === "attributes" || attrValue.name === "settings")) {
                    obj = attrValue.attributes.map(a => new AttributeValue(a));
                }
                else {
                    len = attrValue.attributes.length;
                    obj = [];
                    for (let i = 0; i < len; i++) {
                        obj = [...obj, this.deserialize(attrValue.attributes[i])];
                    }
                }
                break;
            case AttributeTypes.Date:
                obj = attrValue.value !== void 0 && attrValue.value !== "" ? new Date(attrValue.value) : void 0;
                break;
            default:
        }
        return obj;
    }
    convertToGroup(setting) {
        const fg = new UntypedFormGroup({
            name: new UntypedFormControl(setting.name, Validators.required),
            type: new UntypedFormControl(setting.type, Validators.required),
            displayName: new UntypedFormControl(setting.displayName, Validators.required),
            value: new UntypedFormControl(setting.value, Validators.required),
            computedValue: new UntypedFormControl(setting.value, Validators.required),
            attributes: new UntypedFormArray([])
        });
        if (setting.attributes && setting.attributes.length > 0) {
            setting.attributes.forEach(s => {
                fg.get("attributes").push(this.convertToGroup(s));
            });
        }
        return fg;
    }
    static {
        this.ɵfac = function AttributeSerializerService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AttributeSerializerService)(i0.ɵɵinject(ValueComputerService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _AttributeSerializerService,
            factory: _AttributeSerializerService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributeSerializerService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: ValueComputerService
        }], null);
})();
export { ATTRIBUTE_WIDGET, Attribute, AttributeMatcherService, AttributePipe, AttributeSerializerService, AttributeTypes, AttributeValue, AttributeWidget, AttributeWidgetComponent, AttributesBuilderComponent, AttributesModule, ValueComputerService, WidgetPluginManager, WidgetsService };
