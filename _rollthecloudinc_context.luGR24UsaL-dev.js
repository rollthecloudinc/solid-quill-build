import { DefaultLayoutDirective, FlexLayoutModule } from "@nf-internal/chunk-DTFA3YPM";
import { v4_default } from "@nf-internal/chunk-OLWRG54F";
import { forkJoin, iif, merge } from "@nf-internal/chunk-BSWOS4VH";
import { BehaviorSubject, ReplaySubject, combineLatest, of } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/context/fesm2022/rollthecloudinc-context.mjs
import * as i0 from "@angular/core";
import { InjectionToken, forwardRef, Input, Component, ViewChild, Injectable, Directive, Inject, NgModule } from "@angular/core";
import * as i3 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i1 from "@angular/forms";
import { Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule } from "@rollthecloudinc/material";
import * as i2$2 from "@rollthecloudinc/token";
import { TokenModule } from "@rollthecloudinc/token";
import { Snippet, SnippetModule } from "@rollthecloudinc/snippet";
import * as i1$1 from "@rollthecloudinc/datasource";
import { Rest, Datasource, DatasourceFormComponent as DatasourceFormComponent2, DatasourcePlugin, Dataset, DatasourceModule } from "@rollthecloudinc/datasource";
import * as i1$3 from "@rollthecloudinc/plugin";
import { Plugin, BasePluginManager, PluginDef } from "@rollthecloudinc/plugin";
import * as i4$1 from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin, PublicApiBridgeService } from "@rollthecloudinc/bridge";
import { map, tap, switchMap, take, filter, scan, defaultIfEmpty, debounceTime } from "rxjs/operators";
import * as i6$1 from "@rollthecloudinc/dparam";
import { ParamPlugin } from "@rollthecloudinc/dparam";
import * as i2 from "@rollthecloudinc/attributes";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/select";
import { ContentBinding } from "@rollthecloudinc/content";
import { getRouterSelectors } from "@ngrx/router-store";
import * as i1$2 from "@ngrx/store";
import { select } from "@ngrx/store";
import * as i2$1 from "@rollthecloudinc/utils";
function ContextDatasourceFormComponent_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 3);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const c_r1 = ctx.$implicit;
        i0.ɵɵproperty("value", c_r1);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(c_r1);
    }
}
function ContextFormComponent_mat_option_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 5);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const cPlugin_r1 = ctx.$implicit;
        i0.ɵɵproperty("value", cPlugin_r1.value.name);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(cPlugin_r1.value.title);
    }
}
function ContextFormComponent_ng_template_11_Template(rf, ctx) { }
var CONTEXT_PLUGIN = new InjectionToken("ContextPlugin");
var ContextPlugin = class extends Plugin {
    constructor(data) {
        super(data);
        this.global = false;
        if (data) {
            this.name = this.id;
            this.baseObject = data.baseObject;
            this.resolver = data.resolver;
            this.global = data.global === void 0 ? false : data.global;
            this.internal = data.internal === void 0 ? false : data.internal;
            this.group = data.group !== void 0 ? data.group : void 0;
            if (data.editorComponent) {
                this.editorComponent = data.editorComponent;
            }
        }
    }
};
var InlineContext = class {
    constructor(data) {
        this.name = data.name;
        this.adaptor = data.adaptor;
        if (data.plugin) {
            this.plugin = data.plugin;
        }
        if (this.adaptor === "rest") {
            this.rest = new Rest(data.rest);
        }
        else if (this.adaptor === "snippet" || this.adaptor === "json") {
            this.snippet = new Snippet(data.snippet);
        }
        else if (this.adaptor === "data") {
            this.data = data.data;
        }
        else if (this.adaptor === "token") {
            this.tokens = new Map([...data.tokens]);
        }
        else if (this.adaptor === "datasource") {
            this.datasource = new Datasource(data.datasource);
        }
    }
};
var ContextDatasource = class {
    constructor(data) {
        if (data) {
            this.name = data.name;
        }
    }
};
var ContextDatasourceFormComponent = class _ContextDatasourceFormComponent {
    set settings(settings) {
        this.settings$.next(settings);
    }
    constructor(fb, attributeSerializer) {
        this.fb = fb;
        this.attributeSerializer = attributeSerializer;
        this.contexts = [];
        this.settings$ = new BehaviorSubject(void 0);
        this.formGroup = this.fb.group({
            name: this.fb.control("", [Validators.required])
        });
        this.settingsSub = this.settings$.pipe(map(s => s ? new ContextDatasource(this.attributeSerializer.deserializeAsObject(s)) : void 0)).subscribe(ds => {
            if (ds) {
                this.formGroup.get("name").setValue(ds.name);
            }
            else {
                this.formGroup.get("name").setValue("");
            }
        });
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
        return this.formGroup.valid ? null : {
            invalidForm: {
                valid: false,
                message: "content is invalid"
            }
        };
    }
    static {
        this.ɵfac = function ContextDatasourceFormComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ContextDatasourceFormComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i2.AttributeSerializerService));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _ContextDatasourceFormComponent,
            selectors: [["classifieds-ui-context-datasource-form"]],
            inputs: {
                contexts: "contexts",
                settings: "settings"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _ContextDatasourceFormComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _ContextDatasourceFormComponent),
                        multi: true
                    }])],
            decls: 6,
            vars: 2,
            consts: [[3, "formGroup"], ["required", "", "formControlName", "name"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
            template: function ContextDatasourceFormComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label");
                    i0.ɵɵtext(3, "Context");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(4, "mat-select", 1);
                    i0.ɵɵtemplate(5, ContextDatasourceFormComponent_mat_option_5_Template, 2, 2, "mat-option", 2);
                    i0.ɵɵelementEnd()()();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.formGroup);
                    i0.ɵɵadvance(5);
                    i0.ɵɵproperty("ngForOf", ctx.contexts);
                }
            },
            dependencies: [i3.NgForOf, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i4.MatOption, i5.MatFormField, i5.MatLabel, i6.MatSelect],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextDatasourceFormComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-context-datasource-form",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ContextDatasourceFormComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => ContextDatasourceFormComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="formGroup">\n\n  <mat-form-field>\n    <mat-label>Context</mat-label>\n    <mat-select required formControlName="name">\n      <mat-option *ngFor="let c of contexts" [value]="c">{{ c }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n</div>'
                }]
        }], () => [{
            type: i1.UntypedFormBuilder
        }, {
            type: i2.AttributeSerializerService
        }], {
        contexts: [{
                type: Input
            }],
        settings: [{
                type: Input
            }]
    });
})();
var ContextDatasourceComponent = class _ContextDatasourceComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.contexts = [];
        this.settings = [];
    }
    static {
        this.ɵfac = function ContextDatasourceComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ContextDatasourceComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _ContextDatasourceComponent,
            selectors: [["classifieds-ui-context-datasource"]],
            inputs: {
                contexts: "contexts",
                settings: "settings"
            },
            standalone: false,
            decls: 2,
            vars: 3,
            consts: [[3, "formGroup"], ["formControlName", "settings", 3, "contexts", "settings"]],
            template: function ContextDatasourceComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementContainerStart(0, 0);
                    i0.ɵɵelement(1, "classifieds-ui-context-datasource-form", 1);
                    i0.ɵɵelementContainerEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.controlContainer.control);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("contexts", ctx.contexts)("settings", ctx.settings);
                }
            },
            dependencies: [i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, ContextDatasourceFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextDatasourceComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-context-datasource",
                    template: `<ng-container [formGroup]="controlContainer.control"><classifieds-ui-context-datasource-form formControlName="settings" [contexts]="contexts" [settings]="settings"></classifieds-ui-context-datasource-form></ng-container>`,
                    standalone: false
                }]
        }], () => [{
            type: i1.ControlContainer
        }], {
        contexts: [{
                type: Input
            }],
        settings: [{
                type: Input
            }]
    });
})();
var DatasourceContextEditorComponent = class _DatasourceContextEditorComponent {
    constructor(fb, controlContainer, attributeSerializer) {
        this.fb = fb;
        this.controlContainer = controlContainer;
        this.attributeSerializer = attributeSerializer;
    }
    ngOnInit() {
        this.controlContainer.control.addControl("adaptor", this.fb.control("datasource", Validators.required));
        this.controlContainer.control.addControl("datasource", this.fb.control(""));
        this.controlContainer.control.addControl("_proxy", this.fb.control(""));
        this.proxyControlSub = this.controlContainer.control.get("_proxy").valueChanges.pipe(map(v => v ? new Datasource(__spreadProps(__spreadValues({}, v), {
            settings: this.attributeSerializer.serialize(v.settings, "settings").attributes
        })) : new Datasource()), tap(ds => this.controlContainer.control.get("datasource").setValue(ds))).subscribe();
    }
    static {
        this.ɵfac = function DatasourceContextEditorComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourceContextEditorComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i1.ControlContainer), i0.ɵɵdirectiveInject(i2.AttributeSerializerService));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _DatasourceContextEditorComponent,
            selectors: [["classifieds-ui-datasource-context-editor"]],
            viewQuery: function DatasourceContextEditorComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(DatasourceFormComponent2, 7);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datasourceFormComp = _t.first);
                }
            },
            standalone: false,
            decls: 2,
            vars: 1,
            consts: [[3, "formGroup"], ["formControlName", "_proxy"]],
            template: function DatasourceContextEditorComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementContainerStart(0, 0);
                    i0.ɵɵelement(1, "classifieds-ui-datasource-form", 1);
                    i0.ɵɵelementContainerEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.controlContainer.control);
                }
            },
            dependencies: [i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1$1.DatasourceFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourceContextEditorComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-datasource-context-editor",
                    //templateUrl: './context-editor.component.html',
                    // styleUrls: ['./datasource-editor.component.scss'],
                    template: `<ng-container [formGroup]="controlContainer.control"><classifieds-ui-datasource-form formControlName="_proxy"></classifieds-ui-datasource-form></ng-container>`,
                    standalone: false
                }]
        }], () => [{
            type: i1.UntypedFormBuilder
        }, {
            type: i1.ControlContainer
        }, {
            type: i2.AttributeSerializerService
        }], {
        datasourceFormComp: [{
                type: ViewChild,
                args: [DatasourceFormComponent2, {
                        static: true
                    }]
            }]
    });
})();
var routeContextFactory = resolver => {
    const baseObject = {
        path: "",
        arg0: "",
        arg2: "",
        arg3: "",
        arg4: "",
        arg5: ""
    };
    return new ContextPlugin({
        id: "route",
        name: "route",
        title: "Route",
        global: true,
        baseObject,
        resolver
    });
};
var contextBridgeFactory = (cpm, inlineContextResolver) => {
    return new BridgeBuilderPlugin({
        id: "context",
        title: "Context",
        build: () => {
            PublicApiBridgeService.prototype["resolveContext"] = (n, data) => {
                return new Promise(res => {
                    cpm.getPlugin(n).pipe(switchMap(p => p.resolver.resolve(p, data).pipe(take(1)))).subscribe(result => {
                        res(result);
                    });
                });
            };
            PublicApiBridgeService.prototype["resolveMergedContext"] = contexts => {
                return new Promise(res => {
                    inlineContextResolver.resolveMerged(contexts).pipe(tap(v => res(v)), take(1)).subscribe();
                });
            };
        }
    });
};
var paramPluginFactory = (inlineContextResolver, tokenizerService) => {
    return new ParamPlugin({
        id: "context",
        title: "Context",
        evalParam: ({ param, metadata }) => {
            const ctx = param.mapping.context && param.mapping.context !== "" ? new InlineContext(metadata.get("contexts").find(c => c.name === param.mapping.context)) : void 0;
            return ctx ? inlineContextResolver.resolve(ctx).pipe(take(1), switchMap(d => iif(() => param.mapping.value && param.mapping.value !== "", of(d).pipe(map(d2 => tokenizerService.generateGenericTokens(Array.isArray(d2) ? d2[0] : d2)), map(tokens => tokenizerService.replaceTokens(`[${param.mapping.value}]`, tokens)), take(1)), of(Array.isArray(d) ? d[0] : d)).pipe(take(1)))) : of();
        },
        // At the very least it uses itself, right?
        usedContexts: ({ param, metadata }) => of([param.mapping.context])
    });
};
var contextDatasourceFactory = (inlineContextResolver, attributeSerializer) => {
    return new DatasourcePlugin({
        id: "context",
        title: "Context",
        editor: ContextDatasourceComponent,
        fetch: ({ settings, metadata }) => of(new Dataset()).pipe(map(() => new ContextDatasource(attributeSerializer.deserializeAsObject(settings))), map(ds => metadata.get("contexts").find(c => c.name === ds.name)), switchMap(inlineContext => inlineContextResolver.resolve(inlineContext).pipe(map(v => v instanceof Dataset ? v : new Dataset({
            results: Array.isArray(v) ? v : [v]
        })), take(1)))),
        getBindings: ({ settings, metadata }) => of([]).pipe(map(() => new ContextDatasource(attributeSerializer.deserializeAsObject(settings))), map(ds => [new ContentBinding({
                id: ds.name,
                type: "context"
            })]))
    });
};
var datasourceContextFactory = resolver => {
    const baseObject = {
        dataset: new Dataset()
    };
    return new ContextPlugin({
        id: "datasource",
        name: "datasource",
        title: "Datasource",
        baseObject,
        resolver,
        editorComponent: DatasourceContextEditorComponent
    });
};
var RouteResolver = class _RouteResolver {
    constructor(routerStore) {
        this.routerStore = routerStore;
    }
    resolve(ctx, data) {
        const { selectCurrentRoute } = getRouterSelectors();
        return this.routerStore.pipe(select(selectCurrentRoute), map(route => {
            const obj = {
                path: `/pages/panelpage/${route.params.panelPageId}`
            };
            return obj;
        })
        //take(1)
        );
    }
    static {
        this.ɵfac = function RouteResolver_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _RouteResolver)(i0.ɵɵinject(i1$2.Store));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _RouteResolver,
            factory: _RouteResolver.ɵfac
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouteResolver, [{
            type: Injectable
        }], () => [{
            type: i1$2.Store
        }], null);
})();
var ContextEditorHostDirective = class _ContextEditorHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static {
        this.ɵfac = function ContextEditorHostDirective_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ContextEditorHostDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef));
        };
    }
    static {
        this.ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
            type: _ContextEditorHostDirective,
            selectors: [["", "classifiedsUiContextEditorHost", ""]],
            standalone: false
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextEditorHostDirective, [{
            type: Directive,
            args: [{
                    selector: "[classifiedsUiContextEditorHost]",
                    standalone: false
                }]
        }], () => [{
            type: i0.ViewContainerRef
        }], null);
})();
var ContextPluginManager = class _ContextPluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "context"
        }));
    }
    static {
        this.ɵfac = function ContextPluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ContextPluginManager)(i0.ɵɵinject(i1$3.PluginConfigurationManager), i0.ɵɵinject(i2$1.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _ContextPluginManager,
            factory: _ContextPluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextPluginManager, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1$3.PluginConfigurationManager
        }, {
            type: i2$1.ModuleLoaderService
        }], null);
})();
var ContextFormComponent = class _ContextFormComponent {
    set context(context) {
        this.context$.next(context);
    }
    constructor(fb, componentFactoryResolver, cpm) {
        this.fb = fb;
        this.componentFactoryResolver = componentFactoryResolver;
        this.cpm = cpm;
        this.contextForm = this.fb.group({
            name: this.fb.control("", Validators.required),
            plugin: this.fb.control("", Validators.required)
        });
        this.context$ = new BehaviorSubject(void 0);
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.contextPlugins = this.cpm.getPlugins().pipe(map(plugins => new Map(Array.from(plugins).filter(([_, p], __) => !p.internal).map(([_, p], __) => [p.name, p]))));
        this.contextForm.get("plugin").valueChanges.pipe(switchMap(v => this.cpm.getPlugin(v))).subscribe(plugin => {
            if (plugin.editorComponent) {
                this.renderEditor(plugin);
            }
            else {
                this.editorHost.viewContainerRef.clear();
            }
        });
        this.context$.pipe(filter(() => !!this.componentRef)).subscribe(c => {
            this.componentRef.instance.context = c;
        });
    }
    writeValue(val) {
        if (val) {
            this.contextForm.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.contextForm.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.contextForm.disable();
        }
        else {
            this.contextForm.enable();
        }
    }
    validate(c) {
        return this.contextForm.valid ? null : {
            invalidForm: {
                valid: false,
                message: "context is invalid"
            }
        };
    }
    renderEditor(plugin) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(plugin.editorComponent);
        const viewContainerRef = this.editorHost.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.context = this.context$.value;
    }
    static {
        this.ɵfac = function ContextFormComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ContextFormComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(ContextPluginManager));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _ContextFormComponent,
            selectors: [["classifieds-ui-context-form"]],
            viewQuery: function ContextFormComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(ContextEditorHostDirective, 7);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorHost = _t.first);
                }
            },
            inputs: {
                context: "context"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _ContextFormComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _ContextFormComponent),
                        multi: true
                    }])],
            decls: 12,
            vars: 6,
            consts: [["fxLayout", "column", 3, "formGroup"], ["matInput", "", "formControlName", "name", "placeholder", "Name", "required", ""], ["required", "", "formControlName", "plugin"], [3, "value", 4, "ngFor", "ngForOf"], ["classifiedsUiContextEditorHost", ""], [3, "value"]],
            template: function ContextFormComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0)(1, "mat-form-field");
                    i0.ɵɵelement(2, "input", 1);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(3, "mat-form-field")(4, "mat-label");
                    i0.ɵɵtext(5, "Type");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(6, "mat-select", 2);
                    i0.ɵɵtemplate(7, ContextFormComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
                    i0.ɵɵpipe(8, "async");
                    i0.ɵɵpipe(9, "keyvalue");
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementContainerStart(10);
                    i0.ɵɵtemplate(11, ContextFormComponent_ng_template_11_Template, 0, 0, "ng-template", 4);
                    i0.ɵɵelementContainerEnd();
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.contextForm);
                    i0.ɵɵadvance(7);
                    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 4, i0.ɵɵpipeBind1(8, 2, ctx.contextPlugins)));
                }
            },
            dependencies: [i3.NgForOf, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i4.MatOption, i5.MatInput, i5.MatFormField, i5.MatLabel, i6.MatSelect, DefaultLayoutDirective, ContextEditorHostDirective, i3.AsyncPipe, i3.KeyValuePipe],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextFormComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-context-form",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ContextFormComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => ContextFormComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="contextForm" fxLayout="column">\n  <mat-form-field>\n    <input matInput formControlName="name" placeholder="Name" required>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Type</mat-label>\n    <mat-select required formControlName="plugin">\n      <mat-option *ngFor="let cPlugin of ((contextPlugins | async) | keyvalue); let i = index" [value]="cPlugin.value.name">{{ cPlugin.value.title }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <ng-container><ng-template classifiedsUiContextEditorHost></ng-template></ng-container>\n</div>\n'
                }]
        }], () => [{
            type: i1.UntypedFormBuilder
        }, {
            type: i0.ComponentFactoryResolver
        }, {
            type: ContextPluginManager
        }], {
        context: [{
                type: Input
            }],
        editorHost: [{
                type: ViewChild,
                args: [ContextEditorHostDirective, {
                        static: true
                    }]
            }]
    });
})();
var DatasourceResolver = class _DatasourceResolver {
    constructor(dpm) {
        this.dpm = dpm;
    }
    resolve(ctx, data, metadata) {
        return of(new Dataset()).pipe(map(() => new Datasource(data)), switchMap(ds => this.dpm.getPlugin(ds.plugin).pipe(map(p => ({
            ds,
            p
        })))), switchMap(({ ds, p }) => p.fetch({
            settings: ds.settings,
            metadata
        })), map(d => d));
    }
    static {
        this.ɵfac = function DatasourceResolver_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourceResolver)(i0.ɵɵinject(i1$1.DatasourcePluginManager));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _DatasourceResolver,
            factory: _DatasourceResolver.ɵfac
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourceResolver, [{
            type: Injectable
        }], () => [{
            type: i1$1.DatasourcePluginManager
        }], null);
})();
var BaseInlineContextResolverService = class {
    constructor(cpm, rcm) {
        this.cpm = cpm;
        this.rcm = rcm;
    }
    resolveGlobals(tag = v4_default()) {
        return this.cpm.getPlugins().pipe(map(plugins => Array.from(plugins.values()).filter(p => p.global === true)), switchMap(plugins => merge(...plugins.map(p => p.resolver.resolve(p, {}).pipe(map(res => [p.name, res, plugins.length])))).pipe(scan((acc, [n, v, len]) => new Map([...acc, [`_${n}`, v], ["__len", len]]), /* @__PURE__ */ new Map([])), filter(v => v.size - 1 === +v.get("__len")), map(v => Object.assign({}, ...[...v.entries()].filter(([k, v2]) => k !== "__len").map(([k, v2]) => ({
            [k]: v2
        })))))));
    }
    resolveGlobalsSingle(tag = v4_default()) {
        return this.cpm.getPlugins().pipe(map(plugins => Array.from(plugins.values()).filter(p => p.global === true)), switchMap(plugins => merge(...plugins.map(p => p.resolver.resolve(p, {}).pipe(map(res => [p.name, res]))))));
    }
    /*resolveForms(): Observable<any> {
      return this.pageBuilderFacade.getFormNames$.pipe(
        switchMap(names => names.length === 0 ? of([]) : combineLatest( names.map(n => this.pageBuilderFacade.getForm$(n).pipe(
          map(f => [n, f])
        ) ) )),
        map(v => v.reduce((p, [n, f]) => ({ ...p, [`form__${n}`]: f }), {}))
      );
    }*/
    /*resolveFormsSingle(): Observable<any> {
      return this.pageBuilderFacade.getFormNames$.pipe(
        switchMap(names => merge( ...names.map(n => this.pageBuilderFacade.getForm$(n).pipe(
          map(f => [`form__${n}`, f])
        ) ) ))
      );
    }*/
    resolveAll(contexts, tag = v4_default()) {
        return merge(...contexts.map(c => this.resolve(c, tag).pipe(map(res => [c.name, Array.isArray(res) ? res.length > 0 ? res[0] : void 0 : res])))).pipe(scan((acc, [n, v]) => new Map([...acc, [n, v]]), /* @__PURE__ */ new Map()), filter(v => v.size === contexts.length), map(v => Object.assign({}, ...[...v.entries()].map(([k, v2]) => ({
            [k]: v2
        })))));
    }
    resolveAllSingle(contexts, tag = v4_default()) {
        return merge(...contexts.map(c => this.resolve(c, tag).pipe(map(res => [c.name, Array.isArray(res) ? res.length > 0 ? res[0] : void 0 : res])))).pipe(map(([n, v]) => [n, v]));
    }
    resolveMerged(contexts, tag = v4_default()) {
        return this.rcm.getPlugins().pipe(switchMap(() => this.rcm.add$.pipe(defaultIfEmpty(void 0))), switchMap(() => this.rcm.getPlugins()), switchMap(plugins => combineLatest([...Array.from(plugins).map(([_, p]) => p.resolve()), this.resolveGlobals(tag), contexts.length === 0 ? of({}) : this.resolveAll(contexts, tag)]).pipe(debounceTime(0), map(v => v.reduce((p, c) => __spreadValues(__spreadValues({}, p), c), {})))));
    }
    resolveMergedSingle(contexts, tag = v4_default()) {
        if (contexts.length !== 0) {
            return this.rcm.getPlugins().pipe(
            /*switchMap(() => this.rcm.add$.pipe(
              defaultIfEmpty()
            )),
            switchMap(() => this.rcm.getPlugins()),*/
            switchMap(plugins => merge(...Array.from(plugins).map(([_, p]) => p.resolveSingle()), 
            // Turn this into plugins as well
            this.resolveGlobalsSingle(), this.resolveAllSingle(contexts))));
        }
        else {
            return this.rcm.getPlugins().pipe(
            /*switchMap(() => this.rcm.add$.pipe(
              defaultIfEmpty()
            )),
            switchMap(() => this.rcm.getPlugins()),*/
            switchMap(plugins => merge(...Array.from(plugins).map(([_, p]) => p.resolveSingle()), this.resolveGlobalsSingle())));
        }
    }
    resolve(context, tag = v4_default()) {
        if (context.plugin) {
            return this.cpm.getPlugin(context.plugin).pipe(
            /*switchMap(p => p.beforeResolve({ inlineContext: context }).pipe(
              map(({ inlineContext }) => ({ inlineContext, plugin: p }))
            )),*/
            // switchMap(p => p.resolver.resolve(p, this.getDataObject(context)))
            switchMap(p => p.resolver.resolve(p, this.getDataObject(context), /* @__PURE__ */ new Map([["name", context.name]]))));
        }
        else {
            return of(this.getDataObject(context));
        }
    }
    getDataObject(context) {
        switch (context.adaptor) {
            case "rest":
                return context.rest;
            case "snippet":
                return context.snippet;
            case "json":
                return JSON.parse(context.snippet.content);
            case "data":
                return context.data;
            case "token":
                return context.tokens;
            case "datasource":
                return context.datasource;
            default:
                return void 0;
        }
    }
};
var ResolvedContextPluginManager = class _ResolvedContextPluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
        this.add$ = new ReplaySubject(1);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "resolved_context"
        }));
    }
    register(plugin) {
        const hasPlugin = this.pluginInstances.has(plugin.id);
        super.register(plugin);
        if (!hasPlugin) {
            this.add$.next(void 0);
        }
    }
    static {
        this.ɵfac = function ResolvedContextPluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ResolvedContextPluginManager)(i0.ɵɵinject(i1$3.PluginConfigurationManager), i0.ɵɵinject(i2$1.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _ResolvedContextPluginManager,
            factory: _ResolvedContextPluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResolvedContextPluginManager, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1$3.PluginConfigurationManager
        }, {
            type: i2$1.ModuleLoaderService
        }], null);
})();
var InlineContextResolverService = class _InlineContextResolverService extends BaseInlineContextResolverService {
    constructor(cpm, rcm) {
        super(cpm, rcm);
    }
    static {
        this.ɵfac = function InlineContextResolverService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _InlineContextResolverService)(i0.ɵɵinject(ContextPluginManager), i0.ɵɵinject(ResolvedContextPluginManager));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _InlineContextResolverService,
            factory: _InlineContextResolverService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InlineContextResolverService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: ContextPluginManager
        }, {
            type: ResolvedContextPluginManager
        }], null);
})();
var ContextModule = class _ContextModule {
    constructor(contextPlugins, inlineContextResolver, tokenizerService, cpm, bpm, dpm, ppm, attributeSerializer, datasourceResolver) {
        contextPlugins.forEach(p => cpm.register(p));
        bpm.register(contextBridgeFactory(cpm, inlineContextResolver));
        ppm.register(paramPluginFactory(inlineContextResolver, tokenizerService));
        dpm.register(contextDatasourceFactory(inlineContextResolver, attributeSerializer));
        cpm.register(datasourceContextFactory(datasourceResolver));
    }
    static {
        this.ɵfac = function ContextModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ContextModule)(i0.ɵɵinject(CONTEXT_PLUGIN), i0.ɵɵinject(InlineContextResolverService), i0.ɵɵinject(i2$2.TokenizerService), i0.ɵɵinject(ContextPluginManager), i0.ɵɵinject(i4$1.BridgeBuilderPluginManager), i0.ɵɵinject(i1$1.DatasourcePluginManager), i0.ɵɵinject(i6$1.ParamPluginManager), i0.ɵɵinject(i2.AttributeSerializerService), i0.ɵɵinject(DatasourceResolver));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _ContextModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            providers: [{
                    provide: RouteResolver,
                    useClass: RouteResolver
                }, {
                    provide: DatasourceResolver,
                    useClass: DatasourceResolver
                }, {
                    provide: CONTEXT_PLUGIN,
                    useFactory: routeContextFactory,
                    multi: true,
                    deps: [RouteResolver]
                }],
            imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, FlexLayoutModule, TokenModule, SnippetModule, DatasourceModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, FlexLayoutModule, TokenModule, SnippetModule, DatasourceModule],
                    providers: [{
                            provide: RouteResolver,
                            useClass: RouteResolver
                        }, {
                            provide: DatasourceResolver,
                            useClass: DatasourceResolver
                        }, {
                            provide: CONTEXT_PLUGIN,
                            useFactory: routeContextFactory,
                            multi: true,
                            deps: [RouteResolver]
                        }],
                    declarations: [ContextFormComponent, ContextEditorHostDirective, ContextDatasourceFormComponent, ContextDatasourceComponent, DatasourceContextEditorComponent],
                    exports: [ContextFormComponent, ContextDatasourceFormComponent, ContextDatasourceComponent, DatasourceContextEditorComponent]
                }]
        }], () => [{
            type: Array,
            decorators: [{
                    type: Inject,
                    args: [CONTEXT_PLUGIN]
                }]
        }, {
            type: InlineContextResolverService
        }, {
            type: i2$2.TokenizerService
        }, {
            type: ContextPluginManager
        }, {
            type: i4$1.BridgeBuilderPluginManager
        }, {
            type: i1$1.DatasourcePluginManager
        }, {
            type: i6$1.ParamPluginManager
        }, {
            type: i2.AttributeSerializerService
        }, {
            type: DatasourceResolver
        }], null);
})();
var ContextManagerService = class _ContextManagerService {
    constructor(contextPlugins) {
        this.contextPlugins = contextPlugins;
    }
    getAll(globals) {
        if (typeof globals === "undefined") {
            return this.contextPlugins;
        }
        else if (globals) {
            return this.contextPlugins.filter(c => c.global);
        }
        else {
            return this.contextPlugins.filter(c => !c.global);
        }
    }
    getAllObjects() {
        return this.contextPlugins.map(cp => cp.baseObject);
    }
    lookupContext(name) {
        return this.contextPlugins.find(c => c.name === name);
    }
    register(contextPlugin) {
        this.contextPlugins.push(contextPlugin);
    }
    static {
        this.ɵfac = function ContextManagerService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ContextManagerService)(i0.ɵɵinject(CONTEXT_PLUGIN));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _ContextManagerService,
            factory: _ContextManagerService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextManagerService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: Array,
            decorators: [{
                    type: Inject,
                    args: [CONTEXT_PLUGIN]
                }]
        }], null);
})();
var ResolvedContextPlugin = class extends Plugin {
    constructor(data) {
        super(data);
        this.resolve = data.resolve;
        this.resolveSingle = data.resolveSingle;
    }
};
var ParamContextExtractorService = class _ParamContextExtractorService {
    constructor(ppm) {
        this.ppm = ppm;
    }
    extractContexts(params) {
        return forkJoin(params.map(param => this.ppm.getPlugin(param.mapping.type).pipe(switchMap(p => iif(() => !!p && !!p.usedContexts, p ? p.usedContexts ? p.usedContexts({
            param,
            metadata: /* @__PURE__ */ new Map([])
        }) : of([]) : of([]), of([])))))).pipe(map(c => c.reduce((p, c2) => [...p, ...c2.filter(v => !p.includes(v))], [])));
    }
    static {
        this.ɵfac = function ParamContextExtractorService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ParamContextExtractorService)(i0.ɵɵinject(i6$1.ParamPluginManager));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _ParamContextExtractorService,
            factory: _ParamContextExtractorService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParamContextExtractorService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i6$1.ParamPluginManager
        }], null);
})();
export { BaseInlineContextResolverService, CONTEXT_PLUGIN, ContextDatasource, ContextDatasourceComponent, ContextDatasourceFormComponent, ContextFormComponent, ContextManagerService, ContextModule, ContextPlugin, ContextPluginManager, DatasourceContextEditorComponent, InlineContext, InlineContextResolverService, ParamContextExtractorService, ResolvedContextPlugin, ResolvedContextPluginManager };
