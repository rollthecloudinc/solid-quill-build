import { require_lib } from "@nf-internal/chunk-JQGPH55T";
import { v4_default } from "@nf-internal/chunk-OLWRG54F";
import { forkJoin, iif } from "@nf-internal/chunk-BSWOS4VH";
import { BehaviorSubject, Observable, ReplaySubject, combineLatest, of } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues, __toESM } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/crud/fesm2022/rollthecloudinc-crud.mjs
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { forwardRef, Input, Component, Injectable, NgModule } from "@angular/core";
import * as i1 from "@angular/forms";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ReactiveFormsModule, FormsModule } from "@angular/forms";
import * as i4 from "@rollthecloudinc/context";
import { ContextModule } from "@rollthecloudinc/context";
import * as i6 from "@rollthecloudinc/dparam";
import { Param, DparamModule } from "@rollthecloudinc/dparam";
import { MaterialModule } from "@rollthecloudinc/material";
var import_qs = __toESM(require_lib(), 1);
import { map, tap, filter, delay, debounceTime, switchMap, take, defaultIfEmpty } from "rxjs/operators";
import * as i1$1 from "@rollthecloudinc/plugin";
import { Plugin, BasePluginManager, PluginDef } from "@rollthecloudinc/plugin";
import * as i2 from "@rollthecloudinc/attributes";
import * as i3 from "@angular/material/input";
import * as i1$2 from "@rollthecloudinc/datasource";
import { DatasourcePlugin, DatasourceEditorOptions, Dataset } from "@rollthecloudinc/datasource";
import * as i3$1 from "@rollthecloudinc/refinery";
import { DataductPlugin, DuctdataOutput } from "@rollthecloudinc/refinery";
import * as i2$1 from "@rollthecloudinc/utils";
import * as jre from "json-rules-engine";
import * as rd from "recursive-diff";
import * as i8 from "@rollthecloudinc/durl";
var CrudAdaptorPlugin = class extends Plugin {
    constructor(data) {
        super(data);
        if (data) {
            this.create = data.create;
            this.read = data.read;
            this.update = data.update;
            this.delete = data.delete;
            if (data.query) {
                this.query = data.query;
            }
        }
    }
};
var CrudAdaptorDatasource = class {
    constructor(data) {
        this.options = [];
        this.params = [];
        if (data) {
            this.adaptorName = data.adaptorName;
            this.optionsString = data.optionsString ? data.optionsString : void 0;
            this.paramsString = data.paramsString ? data.paramsString : void 0;
            if (data.options && Array.isArray(data.options)) {
                this.options = data.options.map(o => new Param(o));
            }
            if (data.params && Array.isArray(data.params)) {
                this.params = data.params.map(p => new Param(p));
            }
        }
    }
};
var CrudAdaptorDatasourceFormComponent = class _CrudAdaptorDatasourceFormComponent {
    set settings(settings) {
        this.settings$.next(settings);
    }
    constructor(fb, attributeSerializer) {
        this.fb = fb;
        this.attributeSerializer = attributeSerializer;
        this.contexts = [];
        this.settings$ = new BehaviorSubject(void 0);
        this.datasource$ = new BehaviorSubject(void 0);
        this.optionValues$ = new BehaviorSubject([]);
        this.paramValues$ = new BehaviorSubject([]);
        this.formGroup = this.fb.group({
            adaptorName: this.fb.control(""),
            optionsString: this.fb.control(""),
            paramsString: this.fb.control(""),
            options: this.fb.control([]),
            params: this.fb.control([])
        });
        this.settingsSub = this.settings$.pipe(map(s => s ? new CrudAdaptorDatasource(this.attributeSerializer.deserializeAsObject(s)) : void 0), tap(ds => setTimeout(() => this.datasource$.next(ds)))).subscribe(ds => {
            if (ds) {
                this.formGroup.get("adaptorName").setValue(ds.adaptorName);
                this.formGroup.get("optionsString").setValue(ds.optionsString ? ds.optionsString : "");
                this.formGroup.get("paramsString").setValue(ds.paramsString ? ds.paramsString : "");
            }
            else {
                this.formGroup.get("adaptorName").setValue("");
                this.formGroup.get("optionsString").setValue("");
                this.formGroup.get("paramsString").setValue("");
                setTimeout(() => this.optionValues$.next([]), 2);
                setTimeout(() => this.optionValues$.next([]), 2);
            }
        });
        this.datasourceOptionsSub = combineLatest([this.datasource$, this.formGroup.get("optionsString").valueChanges]).pipe(filter(([ds]) => ds !== void 0), delay(1), tap(([ds]) => this.optionValues$.next(ds.options))).subscribe();
        this.datasourceParamsSub = combineLatest([this.datasource$, this.formGroup.get("paramsString").valueChanges]).pipe(filter(([ds]) => ds !== void 0), delay(1), tap(([ds]) => this.paramValues$.next(ds.params))).subscribe();
        this.optionsStringChangeSub = this.formGroup.get("optionsString").valueChanges.pipe(debounceTime(500)).subscribe(optionsString => {
            const parsed = import_qs.default.parse("?" + optionsString);
            this.optionsParsed = parsed;
        });
        this.paramsStringChangeSub = this.formGroup.get("paramsString").valueChanges.pipe(debounceTime(500)).subscribe(paramsString => {
            const parsed = import_qs.default.parse("?" + paramsString);
            this.paramsParsed = parsed;
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
        return this.formGroup.valid ? null : this.formGroup.errors;
    }
    static {
        this.ɵfac = function CrudAdaptorDatasourceFormComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _CrudAdaptorDatasourceFormComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i2.AttributeSerializerService));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _CrudAdaptorDatasourceFormComponent,
            selectors: [["classifieds-ui-crud-adaptor-datasource-form"]],
            inputs: {
                contexts: "contexts",
                settings: "settings"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _CrudAdaptorDatasourceFormComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _CrudAdaptorDatasourceFormComponent),
                        multi: true
                    }])],
            decls: 14,
            vars: 7,
            consts: [[3, "formGroup"], ["matInput", "", "placeholder", "Adaptor", "formControlName", "adaptorName", "required", ""], [1, "options-container"], ["matInput", "", "placeholder", "Options", "formControlName", "optionsString"], ["formControlName", "options", 3, "params", "paramValues", "contexts"], [1, "params-container"], ["matInput", "", "placeholder", "Params", "formControlName", "paramsString"], ["formControlName", "params", 3, "params", "paramValues", "contexts"]],
            template: function CrudAdaptorDatasourceFormComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "mat-form-field");
                    i0.ɵɵelement(3, "input", 1);
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementStart(4, "div", 2)(5, "div")(6, "mat-form-field");
                    i0.ɵɵelement(7, "input", 3);
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelement(8, "classifieds-ui-params-form", 4);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(9, "div", 5)(10, "div")(11, "mat-form-field");
                    i0.ɵɵelement(12, "input", 6);
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelement(13, "classifieds-ui-params-form", 7);
                    i0.ɵɵelementEnd()();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.formGroup);
                    i0.ɵɵadvance(8);
                    i0.ɵɵproperty("params", ctx.optionsParsed)("paramValues", ctx.optionValues$.value)("contexts", ctx.contexts);
                    i0.ɵɵadvance(5);
                    i0.ɵɵproperty("params", ctx.paramsParsed)("paramValues", ctx.paramValues$.value)("contexts", ctx.contexts);
                }
            },
            dependencies: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i3.MatInput, i3.MatFormField, i6.ParamsFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrudAdaptorDatasourceFormComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-crud-adaptor-datasource-form",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CrudAdaptorDatasourceFormComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => CrudAdaptorDatasourceFormComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="formGroup">\n  <div>\n    <mat-form-field>\n      <input matInput placeholder="Adaptor" formControlName="adaptorName" required>\n    </mat-form-field>\n  </div>\n  <div class="options-container">\n    <div>\n      <mat-form-field>\n        <input matInput placeholder="Options" formControlName="optionsString">\n      </mat-form-field>\n    </div>\n    <classifieds-ui-params-form formControlName="options" [params]="optionsParsed" [paramValues]="optionValues$.value" [contexts]="contexts"></classifieds-ui-params-form>\n  </div>\n  <div class="params-container">\n    <div>\n      <mat-form-field>\n        <input matInput placeholder="Params" formControlName="paramsString">\n      </mat-form-field>\n    </div>\n    <classifieds-ui-params-form formControlName="params" [params]="paramsParsed" [paramValues]="paramValues$.value" [contexts]="contexts"></classifieds-ui-params-form>\n  </div>\n</div>'
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
var CrudAdaptorDatasourceComponent = class _CrudAdaptorDatasourceComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.settings = [];
        this.contexts = [];
    }
    static {
        this.ɵfac = function CrudAdaptorDatasourceComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _CrudAdaptorDatasourceComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _CrudAdaptorDatasourceComponent,
            selectors: [["classifieds-ui-crud-adaptor-datasource"]],
            inputs: {
                settings: "settings",
                contexts: "contexts"
            },
            standalone: false,
            decls: 2,
            vars: 3,
            consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings", "contexts"]],
            template: function CrudAdaptorDatasourceComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementContainerStart(0, 0);
                    i0.ɵɵelement(1, "classifieds-ui-crud-adaptor-datasource-form", 1);
                    i0.ɵɵelementContainerEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.controlContainer.control);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("settings", ctx.settings)("contexts", ctx.contexts);
                }
            },
            dependencies: [i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, CrudAdaptorDatasourceFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrudAdaptorDatasourceComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-crud-adaptor-datasource",
                    template: `<ng-container [formGroup]="controlContainer.control"><classifieds-ui-crud-adaptor-datasource-form formControlName="settings" [settings]="settings" [contexts]="contexts"></classifieds-ui-crud-adaptor-datasource-form></ng-container>`,
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
var crudAdaptorDatasourcePluginFactory = (paramContextExtractor, attributeSerializer, cpm, paramEvaluatorService, crudDataHelper, urlGenerator) => {
    return new DatasourcePlugin({
        id: "crud_adaptor",
        title: "Crud Adaptor",
        editor: CrudAdaptorDatasourceComponent,
        fetch: ({ settings, metadata }) => of(new Dataset()).pipe(map(() => attributeSerializer.deserializeAsObject(settings)), map(s => new CrudAdaptorDatasource(s)), switchMap(ds => cpm.getPlugin(ds.adaptorName).pipe(map(plugin => ({
            plugin,
            ds
        })))), map(({ plugin, ds }) => ({
            plugin,
            ds,
            optionNames: ds.optionsString ? ds.optionsString.split("&").filter(v => v.indexOf("=:") !== -1).map(v => v.split("=", 2)[1].substr(1)) : []
        })), switchMap(({ plugin, ds, optionNames }) => forkJoin([paramEvaluatorService.paramValues(ds.options.reduce((p, c, i) => new Map([...p, [optionNames[i], c]]), /* @__PURE__ */ new Map())).pipe(map(params => Array.from(params).reduce((p, [k, v]) => __spreadProps(__spreadValues({}, p), {
                [k]: v
            }), {}))), ds.paramsString && ds.paramsString !== "" ? urlGenerator.getUrl("?" + ds.paramsString, ds.params, metadata).pipe(take(1)) : of(void 0)]).pipe(map(([options, query]) => ({
            plugin,
            options,
            query
        })))), switchMap(({ plugin, options, query }) => crudDataHelper.evaluateCollectionPlugins({
            plugins: {
                [plugin.id]: {
                    params: options
                }
            },
            op: "query",
            query: query ? query.substr(1) : query
        })), map(results => new Dataset({
            results
        }))),
        editorOptions: () => of(new DatasourceEditorOptions({
            fullscreen: true
        })),
        getBindings: ({ settings, metadata }) => of([])
        /*.pipe(
        map(() => attributeSerializer.deserializeAsObject(settings)),
        map<any, CrudAdaptorDatasource>(s => new EntityDatasource(s)),
        switchMap(ds => paramContextExtractor.extractContexts(ds.params)),
        map(contexts => contexts.map(id => new ContentBinding({ id, type: 'context' })))
        )*/
    });
};
var crudDataductPluginFactory = ({ crudDataHelper, attributeSerializer }) => new DataductPlugin({
    id: "crud",
    title: "Crud",
    editor: CrudAdaptorDatasourceComponent,
    send: input => of(new DuctdataOutput({})).pipe(map(() => ({
        settings: attributeSerializer.deserializeAsObject(input.settings)
    })), tap(({ settings }) => console.log("crud data duct", settings)), map(({ settings }) => ({
        plugins: {
            [`${settings.adaptorName}`]: {
                plugin: `${settings.adaptorName}`,
                ops: ["create"],
                params: `${settings.optionsString}`.split("&").reduce((p, c, i) => __spreadProps(__spreadValues({}, p), {
                    [c.split("=", 1)[0]]: new Param(settings.options[i])
                }), {})
            }
        }
    })), switchMap(({ plugins }) => crudDataHelper.evaluatePlugins({
        object: input.data,
        plugins,
        op: "create",
        parentObject: {
            id: v4_default()
        }
    })), map(() => new DuctdataOutput({})))
});
var CrudAdaptorPluginManager = class _CrudAdaptorPluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "crud_adaptor"
        }));
    }
    static {
        this.ɵfac = function CrudAdaptorPluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _CrudAdaptorPluginManager)(i0.ɵɵinject(i1$1.PluginConfigurationManager), i0.ɵɵinject(i2$1.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _CrudAdaptorPluginManager,
            factory: _CrudAdaptorPluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrudAdaptorPluginManager, [{
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
var CrudDataHelperService = class _CrudDataHelperService {
    constructor(crud) {
        this.crud = crud;
        this.cachedCollectionQueries = [];
        this.cachedCollectionIgnore = {
            p: {
                create: void 0,
                update: void 0,
                delete: void 0,
                query: void 0,
                read: void 0
            },
            input: {
                identity: void 0
            }
        };
    }
    evaluatePlugins({ object, plugins, op, parentObject }) {
        const adaptors = Object.keys(plugins);
        const operations$ = adaptors.filter(a => !plugins[a].ops || plugins[a].ops.includes(op)).map(a => this.crud.getPlugin(plugins[a].plugin ? plugins[a].plugin : a).pipe(map(p => ({
            p,
            params: plugins[a].params ? Object.keys(plugins[a].params).reduce((p2, name) => __spreadProps(__spreadValues({}, p2), {
                [name]: plugins[a].params[name] instanceof Param ? plugins[a].params[name] : new Param({
                    flags: [],
                    mapping: {
                        type: "static",
                        value: plugins[a].params[name],
                        context: void 0,
                        testValue: plugins[a].params[name]
                    }
                })
            }), {}) : {}
        })), switchMap(({ p, params }) => p[op]({
            rule: void 0,
            object,
            parentObject,
            params,
            identity: ({ object: object2, parentObject: parentObject2 }) => of({
                identity: object2.id ? object2.id : parentObject2 ? parentObject2.id : void 0
            })
        })), switchMap(res => iif(() => plugins[a].plugins && Object.keys(plugins[a].plugins).length !== 0, plugins[a].plugins && Object.keys(plugins[a].plugins).length !== 0 ? this.evaluatePlugins({
            plugins: plugins[a].plugins,
            object: res.entity ? res.entity : object,
            parentObject: res.originalEntity ? res.originalEntity : object,
            op
        }) : of(res), of(res)))));
        return forkJoin(operations$).pipe(map(() => object));
    }
    evaluateCollectionPlugins({ query, objects, plugins, op, parentObjects }) {
        console.log("evaluate collection plugins");
        const adaptors = Object.keys(plugins);
        const operations$ = adaptors.filter(a => !plugins[a].ops || plugins[a].ops.includes(op)).map(a => this.crud.getPlugin(plugins[a].plugin ? plugins[a].plugin : a).pipe(map(p => ({
            p,
            params: plugins[a].params ? Object.keys(plugins[a].params).reduce((p2, name) => __spreadProps(__spreadValues({}, p2), {
                [name]: plugins[a].params[name] instanceof Param ? plugins[a].params[name] : new Param({
                    flags: [],
                    mapping: {
                        type: "static",
                        value: plugins[a].params[name],
                        context: void 0,
                        testValue: plugins[a].params[name]
                    }
                })
            }), {}) : {}
        })), switchMap(({ p, params }) => this.buildQueryRule({
            params: query,
            config: plugins[a]
        }).pipe(map(({ rule }) => ({
            p,
            params,
            rule
        })))), 
        // tap(({ params, rule }) => console.log('right before collection plugin query', params, rule)),
        // switchMap(({ p, params, rule }) => p.query({ rule, objects, parentObjects, params, identity: ({ object, parentObject }) => of({ identity: object.id ? object.id : parentObject ? parentObject.id : undefined }) }).pipe(
        switchMap(({ p, params, rule }) => this.flightAndCacheAwareCollectionQuery({
            p,
            input: {
                rule,
                objects,
                parentObjects,
                params,
                identity: ({ object, parentObject }) => of({
                    identity: object.id ? object.id : parentObject ? parentObject.id : void 0
                })
            }
        }).pipe(tap(() => console.log("end of crud query call")))), 
        // tap(res => console.log('right before nested collection plugins', res)),
        switchMap(res => iif(() => plugins[a].plugins && Object.keys(plugins[a].plugins).length !== 0, this.evaluateCollectionPlugins({
            query,
            plugins: plugins[a].plugins && Object.keys(plugins[a].plugins).length !== 0 ? plugins[a].plugins : {},
            objects: res.entities ? res.entities : objects,
            parentObjects: res.originalEntities ? res.originalEntities : objects,
            op
        }), of(res))), tap(res => console.log("end of op", res))));
        const fallback = adaptors.filter(a => !plugins[a].ops || plugins[a].ops.includes(op)).find(a => plugins[a].fallback);
        if (fallback && operations$.length > 1) {
            return operations$.reduce((p, c) => p.pipe(switchMap(entities => entities && Array.isArray(entities) && entities.length > 0 ? of(entities) : c.pipe(map(c2 => c2 && c2.entities && Array.isArray(c2.entities) ? c2.entities : []))), switchMap(entities => entities.length > 0 ? of(entities) : of([]))), of([]));
        }
        else {
            return operations$.length === 1 ? operations$[0].pipe(map(c => [...c.entities])) : forkJoin(operations$).pipe(map(responses => responses.reduce((p, c) => [...p, ...c.entities], [])), defaultIfEmpty([]));
        }
    }
    buildQueryRule({ params, config }) {
        return new Observable(obs => {
            const conditions = [];
            if (typeof params === "string") {
                const pieces = params.split("&").map(p => p.split("=", 2)).reduce((p, [name, value]) => new Map([...Array.from(p).filter(([k, _]) => k !== name), [name, [...(p.has(name) ? p.get(name) : []), value]]]), /* @__PURE__ */ new Map());
                pieces.forEach((values, name) => conditions.push({
                    any: values.map(value => __spreadValues({
                        fact: name === "identity" ? "identity" : "entity",
                        operator: config.queryMappings && config.queryMappings.has(name) && config.queryMappings.get(name).defaultOperator ? config.queryMappings.get(name).defaultOperator : "equal",
                        value
                    }, name === "identity" ? {} : {
                        path: `$.${name}`
                    }))
                }));
            }
            const rule = conditions.length > 0 ? new jre.Rule({
                conditions: {
                    all: conditions
                },
                event: {
                    type: "visible"
                }
            }) : void 0;
            obs.next({
                rule
            });
            obs.complete();
        });
    }
    flightAndCacheAwareCollectionQuery(q) {
        let matchedIndex = this.cachedCollectionQueries.findIndex(({ p, input }) => {
            const pDiff = rd.getDiff(__spreadValues(__spreadValues({}, q.p), this.cachedCollectionIgnore.p), __spreadValues(__spreadValues({}, p), this.cachedCollectionIgnore.p));
            const iDiff = rd.getDiff(__spreadValues(__spreadValues({}, q.input), this.cachedCollectionIgnore.input), __spreadValues(__spreadValues({}, input), this.cachedCollectionIgnore.input));
            return pDiff.length === 0 && iDiff.length === 0;
        });
        if (matchedIndex === -1) {
            this.cachedCollectionQueries.push({
                p: q.p,
                input: q.input,
                query$: new ReplaySubject()
            });
            matchedIndex = this.cachedCollectionQueries.length - 1;
            q.p.query(q.input).pipe(tap(res => this.cachedCollectionQueries[matchedIndex].query$.next(res)), take(1)).subscribe();
        }
        return this.cachedCollectionQueries[matchedIndex].query$.pipe(take(1));
    }
    static {
        this.ɵfac = function CrudDataHelperService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _CrudDataHelperService)(i0.ɵɵinject(CrudAdaptorPluginManager));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _CrudDataHelperService,
            factory: _CrudDataHelperService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrudDataHelperService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: CrudAdaptorPluginManager
        }], null);
})();
var CrudModule = class _CrudModule {
    constructor(dpm, cpm, ddpm, paramContextExtractor, attributeSerializer, paramEvaluatorService, crudDataHelper, urlGenerator) {
        dpm.register(crudAdaptorDatasourcePluginFactory(paramContextExtractor, attributeSerializer, cpm, paramEvaluatorService, crudDataHelper, urlGenerator));
        ddpm.register(crudDataductPluginFactory({
            crudDataHelper,
            attributeSerializer
        }));
    }
    static {
        this.ɵfac = function CrudModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _CrudModule)(i0.ɵɵinject(i1$2.DatasourcePluginManager), i0.ɵɵinject(CrudAdaptorPluginManager), i0.ɵɵinject(i3$1.DataductPluginManager), i0.ɵɵinject(i4.ParamContextExtractorService), i0.ɵɵinject(i2.AttributeSerializerService), i0.ɵɵinject(i6.ParamEvaluatorService), i0.ɵɵinject(CrudDataHelperService), i0.ɵɵinject(i8.UrlGeneratorService));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _CrudModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, ContextModule, DparamModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrudModule, [{
            type: NgModule,
            args: [{
                    declarations: [CrudAdaptorDatasourceComponent, CrudAdaptorDatasourceFormComponent],
                    imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, ContextModule, DparamModule],
                    exports: [CrudAdaptorDatasourceComponent, CrudAdaptorDatasourceFormComponent]
                }]
        }], () => [{
            type: i1$2.DatasourcePluginManager
        }, {
            type: CrudAdaptorPluginManager
        }, {
            type: i3$1.DataductPluginManager
        }, {
            type: i4.ParamContextExtractorService
        }, {
            type: i2.AttributeSerializerService
        }, {
            type: i6.ParamEvaluatorService
        }, {
            type: CrudDataHelperService
        }, {
            type: i8.UrlGeneratorService
        }], null);
})();
var blankCrudAdaptorResponse = {
    success: false
};
var CrudDataService = class {
    get name() {
        return this._name;
    }
    constructor(entityName, crud, entityDefinitionService, crudDataHelperService) {
        this.crud = crud;
        this.entityDefinitionService = entityDefinitionService;
        this.crudDataHelperService = crudDataHelperService;
        this._name = `${entityName} CrudDataService`;
        this.entityName = entityName;
    }
    add(object) {
        const metadata = this.entityDefinitionService.getDefinition(this.entityName).metadata;
        return this.crudDataHelperService.evaluatePlugins({
            object,
            plugins: metadata.crud,
            op: "create"
        });
    }
    update(update) {
        const metadata = this.entityDefinitionService.getDefinition(this.entityName).metadata;
        return this.crudDataHelperService.evaluatePlugins({
            object: update.changes,
            plugins: metadata.crud,
            op: "update"
        });
    }
    upsert(object) {
        const metadata = this.entityDefinitionService.getDefinition(this.entityName).metadata;
        return this.crudDataHelperService.evaluatePlugins({
            object,
            plugins: metadata.crud,
            op: "update"
        });
    }
    delete(id) {
        const metadata = this.entityDefinitionService.getDefinition(this.entityName).metadata;
        return this.getById(id).pipe(switchMap(object => this.crudDataHelperService.evaluatePlugins({
            object,
            plugins: metadata.crud,
            op: "delete"
        })), map(() => id));
    }
    getAll() {
        const metadata = this.entityDefinitionService.getDefinition(this.entityName).metadata;
        return this.crudDataHelperService.evaluateCollectionPlugins({
            plugins: metadata.crud,
            op: "query"
        });
    }
    getById(id) {
        const metadata = this.entityDefinitionService.getDefinition(this.entityName).metadata;
        return this.crudDataHelperService.evaluateCollectionPlugins({
            query: `identity=${id}`,
            plugins: metadata.crud,
            op: "query"
        }).pipe(map(objects => objects && objects.length !== 0 ? objects[0] : void 0));
    }
    getWithQuery(params) {
        const metadata = this.entityDefinitionService.getDefinition(this.entityName).metadata;
        return this.crudDataHelperService.evaluateCollectionPlugins({
            query: params,
            plugins: metadata.crud,
            op: "query"
        });
    }
};
export { CrudAdaptorDatasource, CrudAdaptorDatasourceComponent, CrudAdaptorDatasourceFormComponent, CrudAdaptorPlugin, CrudAdaptorPluginManager, CrudDataHelperService, CrudDataService, CrudModule, blankCrudAdaptorResponse };
