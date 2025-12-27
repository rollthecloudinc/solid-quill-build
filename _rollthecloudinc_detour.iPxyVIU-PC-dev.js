import "@nf-internal/chunk-BSWOS4VH";
import { BehaviorSubject, Observable, Subject, combineLatest, of, tap } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/detour/fesm2022/rollthecloudinc-detour.mjs
import * as i5 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { Injectable, forwardRef, Input, Component, Inject, NgModule } from "@angular/core";
import * as i1$1 from "@angular/forms";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@rollthecloudinc/material";
import * as i3 from "@rollthecloudinc/dparam";
import { ParamPluginInstance, DparamModule } from "@rollthecloudinc/dparam";
import * as i1 from "@rollthecloudinc/plugin";
import { BasePluginManager, PluginDef, Plugin } from "@rollthecloudinc/plugin";
import * as i2 from "@rollthecloudinc/utils";
import * as i1$2 from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as i3$1 from "@angular/material/button";
import { tap as tap$1, map, filter } from "rxjs/operators";
function InteractionsFormComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelement(1, "druid-detour-interaction-listener", 4);
        i0.ɵɵelementStart(2, "button", 3);
        i0.ɵɵlistener("click", function InteractionsFormComponent_div_2_Template_button_click_2_listener() {
            const i_r2 = i0.ɵɵrestoreView(_r1).index;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.deleteListener$.next(i_r2));
        });
        i0.ɵɵtext(3, "Delete");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const i_r2 = ctx.index;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵproperty("formControlName", i_r2)("listener", ctx_r2.interactions$.value.interactions.listeners[i_r2]);
    }
}
var InteractionsFormPayload = class {
    constructor(data) {
        this.interactions = data && data.interactions ? new InteractionInteractions(data.interactions) : new InteractionInteractions();
    }
};
var InteractionInteractions = class {
    constructor(data) {
        this.listeners = [];
        if (data) {
            if (data.listeners && Array.isArray(data.listeners)) {
                this.listeners = data.listeners.map(l => new InteractionListener(l));
            }
        }
    }
};
var InteractionListener = class {
    constructor(data) {
        this.handler = data && data.handler ? new ParamPluginInstance(data.handler) : new ParamPluginInstance();
        this.event = data && data.event ? new ParamPluginInstance(data.event) : new ParamPluginInstance();
    }
};
var InteractionEventPluginManager = class _InteractionEventPluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "interaction_event"
        }));
    }
    static {
        this.ɵfac = function InteractionEventPluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _InteractionEventPluginManager)(i0.ɵɵinject(i1.PluginConfigurationManager), i0.ɵɵinject(i2.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _InteractionEventPluginManager,
            factory: _InteractionEventPluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InteractionEventPluginManager, [{
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
var InteractionHandlerPluginManager = class _InteractionHandlerPluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "interaction_handler"
        }));
    }
    discovery() {
        super.discovery();
    }
    static {
        this.ɵfac = function InteractionHandlerPluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _InteractionHandlerPluginManager)(i0.ɵɵinject(i1.PluginConfigurationManager), i0.ɵɵinject(i2.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _InteractionHandlerPluginManager,
            factory: _InteractionHandlerPluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InteractionHandlerPluginManager, [{
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
var InteractionListenerComponent = class _InteractionListenerComponent {
    set listener(listener) {
        this.listener$.next(listener);
    }
    constructor(fb, iepm, ihpm) {
        this.fb = fb;
        this.iepm = iepm;
        this.ihpm = ihpm;
        this.eventPlugins$ = this.iepm.getPlugins();
        this.handlerPlugins$ = this.ihpm.getPlugins();
        this.listenerForm = this.fb.group({
            event: this.fb.control(""),
            handler: this.fb.control("")
        });
        this.contexts = [];
        this.listener$ = new BehaviorSubject(new InteractionListener());
        this.event$ = new BehaviorSubject(new ParamPluginInstance());
        this.handler$ = new BehaviorSubject(new ParamPluginInstance());
        this.listenerSub = this.listener$.pipe(tap(listener => {
            this.event$.next(listener && listener.event ? listener.event : new ParamPluginInstance());
            this.handler$.next(listener && listener.handler ? listener.handler : new ParamPluginInstance());
        })).subscribe();
        this.onTouched = () => { };
    }
    writeValue(val) {
        if (val) {
            this.listenerForm.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.listenerForm.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.listenerForm.disable();
        }
        else {
            this.listenerForm.enable();
        }
    }
    validate(c) {
        return this.listenerForm.valid ? null : this.listenerForm.errors;
    }
    static {
        this.ɵfac = function InteractionListenerComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _InteractionListenerComponent)(i0.ɵɵdirectiveInject(i1$1.UntypedFormBuilder), i0.ɵɵdirectiveInject(InteractionEventPluginManager), i0.ɵɵdirectiveInject(InteractionHandlerPluginManager));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _InteractionListenerComponent,
            selectors: [["druid-detour-interaction-listener"]],
            inputs: {
                contexts: "contexts",
                listener: "listener"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _InteractionListenerComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _InteractionListenerComponent),
                        multi: true
                    }])],
            decls: 5,
            vars: 9,
            consts: [[3, "formGroup"], ["formControlName", "event", "title", "Event", 3, "plugins", "instance"], ["formControlName", "handler", "title", "Handler", 3, "plugins", "instance"]],
            template: function InteractionListenerComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0);
                    i0.ɵɵelement(1, "druid-params-plugin-instance", 1);
                    i0.ɵɵpipe(2, "async");
                    i0.ɵɵelement(3, "druid-params-plugin-instance", 2);
                    i0.ɵɵpipe(4, "async");
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.listenerForm);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("plugins", i0.ɵɵpipeBind1(2, 5, ctx.eventPlugins$))("instance", ctx.event$.value);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("plugins", i0.ɵɵpipeBind1(4, 7, ctx.handlerPlugins$))("instance", ctx.handler$.value);
                }
            },
            dependencies: [i1$1.NgControlStatus, i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, i1$1.FormControlName, i3.PluginInstanceComponent, i5.AsyncPipe],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InteractionListenerComponent, [{
            type: Component,
            args: [{
                    selector: "druid-detour-interaction-listener",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => InteractionListenerComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => InteractionListenerComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="listenerForm">\n  <druid-params-plugin-instance formControlName="event" title="Event" [plugins]="eventPlugins$ | async" [instance]="event$.value"></druid-params-plugin-instance>\n  <druid-params-plugin-instance formControlName="handler" title="Handler" [plugins]="handlerPlugins$ | async" [instance]="handler$.value"></druid-params-plugin-instance>\n</div>'
                }]
        }], () => [{
            type: i1$1.UntypedFormBuilder
        }, {
            type: InteractionEventPluginManager
        }, {
            type: InteractionHandlerPluginManager
        }], {
        contexts: [{
                type: Input
            }],
        listener: [{
                type: Input
            }]
    });
})();
var InteractionsFormComponent = class _InteractionsFormComponent {
    set interactions(interactions) {
        this.interactions$.next(interactions);
    }
    set contexts(contexts) {
        this.contexts$.next(contexts);
    }
    get listeners() {
        return this.interactionsForm.get("listeners");
    }
    constructor(fb) {
        this.fb = fb;
        this.interactions$ = new BehaviorSubject(new InteractionsFormPayload({
            interactions: {
                listeners: []
            }
        }));
        this.contexts$ = new BehaviorSubject([]);
        this.afterViewInit$ = new Subject();
        this.interactionsForm = this.fb.group({
            listeners: this.fb.array([])
        });
        this.addListener$ = new Subject();
        this.deleteListener$ = new Subject();
        this.addListenerSub = this.addListener$.pipe(tap$1(() => this.listeners.push(this.fb.control("")))).subscribe();
        this.deleteListenerSub = this.deleteListener$.pipe(tap$1(index => {
            this.interactions$.value.interactions.listeners.splice(index, 1);
            this.listeners.removeAt(index);
        })).subscribe();
        this.interactionsSub = combineLatest([this.interactions$, this.afterViewInit$]).pipe(map(([v]) => v), filter(interactions => interactions.interactions.listeners.length !== 0), tap$1(interactions => {
            this.listeners.clear();
            interactions.interactions.listeners.forEach((v, i) => {
                this.listeners.push(this.fb.control(""));
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
            this.interactionsForm.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.interactionsForm.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.interactionsForm.disable();
        }
        else {
            this.interactionsForm.enable();
        }
    }
    validate(c) {
        return this.interactionsForm.valid ? null : this.interactionsForm.errors;
    }
    static {
        this.ɵfac = function InteractionsFormComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _InteractionsFormComponent)(i0.ɵɵdirectiveInject(i1$1.UntypedFormBuilder));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _InteractionsFormComponent,
            selectors: [["druid-detour-interactions-form"]],
            inputs: {
                interactions: "interactions",
                contexts: "contexts"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _InteractionsFormComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _InteractionsFormComponent),
                        multi: true
                    }])],
            decls: 5,
            vars: 2,
            consts: [[3, "formGroup"], ["formArrayName", "listeners"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "listener"]],
            template: function InteractionsFormComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
                    i0.ɵɵtemplate(2, InteractionsFormComponent_div_2_Template, 4, 2, "div", 2);
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementStart(3, "button", 3);
                    i0.ɵɵlistener("click", function InteractionsFormComponent_Template_button_click_3_listener() {
                        return ctx.addListener$.next(void 0);
                    });
                    i0.ɵɵtext(4, "Add Listener");
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.interactionsForm);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("ngForOf", ctx.listeners.controls);
                }
            },
            dependencies: [i5.NgForOf, i1$1.NgControlStatus, i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, i1$1.FormControlName, i1$1.FormArrayName, InteractionListenerComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InteractionsFormComponent, [{
            type: Component,
            args: [{
                    selector: "druid-detour-interactions-form",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => InteractionsFormComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => InteractionsFormComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="interactionsForm">\n  <div formArrayName="listeners">\n    <div *ngFor="let _ of listeners.controls; let i = index">\n      <druid-detour-interaction-listener [formControlName]="i" [listener]="interactions$.value.interactions.listeners[i]"></druid-detour-interaction-listener>\n      <button type="button" (click)="deleteListener$.next(i)">Delete</button>\n    </div>\n  </div>\n</div>\n<button type="button" (click)="addListener$.next(undefined)">Add Listener</button>'
                }]
        }], () => [{
            type: i1$1.UntypedFormBuilder
        }], {
        interactions: [{
                type: Input
            }],
        contexts: [{
                type: Input
            }]
    });
})();
var InteractionsDialogComponent = class _InteractionsDialogComponent {
    constructor(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.interactionsForm = this.fb.group({
            interactions: this.fb.control("")
        });
        this.contexts = [];
        this.interactions = new InteractionsFormPayload();
        this.contexts = data.contexts;
        this.interactions = data.interactions;
    }
    submit() {
        const payload = new InteractionsFormPayload(this.interactionsForm.value);
        console.log("interactions payload", payload);
        this.dialogRef.close(payload);
    }
    static {
        this.ɵfac = function InteractionsDialogComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _InteractionsDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1$2.MatDialogRef), i0.ɵɵdirectiveInject(i1$1.UntypedFormBuilder));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _InteractionsDialogComponent,
            selectors: [["druid-detour-interactions-dialog"]],
            standalone: false,
            decls: 8,
            vars: 4,
            consts: [[1, "interactions-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["formControlName", "interactions", 3, "contexts", "interactions"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]],
            template: function InteractionsDialogComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "form", 0);
                    i0.ɵɵlistener("ngSubmit", function InteractionsDialogComponent_Template_form_ngSubmit_0_listener() {
                        return ctx.submit();
                    });
                    i0.ɵɵelementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2);
                    i0.ɵɵelement(4, "druid-detour-interactions-form", 3);
                    i0.ɵɵelementEnd()()();
                    i0.ɵɵelementStart(5, "mat-dialog-actions")(6, "button", 4);
                    i0.ɵɵtext(7, "Save");
                    i0.ɵɵelementEnd()()();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.interactionsForm);
                    i0.ɵɵadvance(4);
                    i0.ɵɵproperty("contexts", ctx.contexts)("interactions", ctx.interactions);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("disabled", !ctx.interactionsForm.valid);
                }
            },
            dependencies: [i1$1.ɵNgNoValidate, i1$1.NgControlStatus, i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, i1$1.FormControlName, i3$1.MatButton, i1$2.MatDialogClose, i1$2.MatDialogActions, i1$2.MatDialogContent, InteractionsFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InteractionsDialogComponent, [{
            type: Component,
            args: [{
                    selector: "druid-detour-interactions-dialog",
                    standalone: false,
                    template: '<form class="interactions-form" [formGroup]="interactionsForm" (ngSubmit)="submit()">\n  <mat-dialog-content>\n    <div class="content-inner">\n      <div fxLayout="column">\n        <druid-detour-interactions-form formControlName="interactions" [contexts]="contexts" [interactions]="interactions"></druid-detour-interactions-form>\n      </div>\n    </div>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button type="submit" mat-raised-button color="primary" mat-dialog-close [disabled]="!interactionsForm.valid">Save</button>\n  </mat-dialog-actions>\n</form>\n'
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }]
        }, {
            type: i1$2.MatDialogRef
        }, {
            type: i1$1.UntypedFormBuilder
        }], null);
})();
var InteractionEventPlugin = class extends Plugin {
    constructor(data) {
        super(data);
        if (data) {
            this.connect = data.connect;
        }
    }
};
var InteractionHandlerPlugin = class extends Plugin {
    constructor(data) {
        super(data);
        if (data) {
            this.handle = data.handle;
        }
    }
};
var interactionEventDomFactory = paramEvaluatorService => {
    return new InteractionEventPlugin({
        title: "DOM",
        id: "dom",
        connect: ({ filteredListeners, listenerParams, renderer, callback }) => new Observable(obs => {
            const mapTypes = /* @__PURE__ */ new Map();
            const len = filteredListeners.length;
            for (let i = 0; i < len; i++) {
                const type = listenerParams[i].type;
                if (mapTypes.has(type)) {
                    const targets = mapTypes.get(type);
                    targets.push(i);
                    mapTypes.set(type, targets);
                }
                else {
                    mapTypes.set(type, [i]);
                }
            }
            const eventDelegtionHandler = /* @__PURE__ */ (m => e => {
                if (m.has(e.type)) {
                    const targets = m.get(e.type);
                    const len2 = targets.length;
                    targets.forEach((__, i) => {
                        const expectedTarget = listenerParams[targets[i]].target;
                        if (e.target.matches(expectedTarget)) {
                            console.log(`delegated target match ${expectedTarget}`);
                            if (filteredListeners[i].handler.settings.params) {
                                const paramNames = filteredListeners[i].handler.settings.paramsString ? filteredListeners[i].handler.settings.paramsString.split("&").filter(v => v.indexOf("=:") !== -1).map(v => v.split("=", 2)[1].substr(1)) : [];
                                paramEvaluatorService.paramValues(filteredListeners[i].handler.settings.params.reduce((p, c, i4) => new Map([...p, [paramNames[i4], c]]), /* @__PURE__ */ new Map())).pipe(map(params => Array.from(params).reduce((p, [k, v]) => __spreadProps(__spreadValues({}, p), {
                                    [k]: v
                                }), {}))).subscribe(handlerParams => {
                                    callback({
                                        handlerParams,
                                        plugin: filteredListeners[i].handler.plugin,
                                        index: i,
                                        evt: e
                                    });
                                });
                            }
                            else {
                                callback({
                                    handlerParams: {},
                                    plugin: filteredListeners[i].handler.plugin,
                                    index: i,
                                    evt: e
                                });
                            }
                        }
                    });
                }
            })(mapTypes);
            const keys = Array.from(mapTypes);
            for (let i = 0; i < keys.length; i++) {
                const type = keys[i][0];
                renderer.listen("document", type, e => {
                    eventDelegtionHandler(e);
                });
            }
            obs.next({});
            obs.complete();
        })
    });
};
var interactionHandlerHelloWorldFactory = () => {
    return new InteractionHandlerPlugin({
        title: "Hello World",
        id: "hello_world",
        handle: ({}) => {
            console.log("Hello World");
        }
    });
};
var DetourModule = class _DetourModule {
    constructor(iepm, ihpm, paramEvaluatorService) {
        iepm.register(interactionEventDomFactory(paramEvaluatorService));
        ihpm.register(interactionHandlerHelloWorldFactory());
    }
    static {
        this.ɵfac = function DetourModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DetourModule)(i0.ɵɵinject(InteractionEventPluginManager), i0.ɵɵinject(InteractionHandlerPluginManager), i0.ɵɵinject(i3.ParamEvaluatorService));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _DetourModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, DparamModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetourModule, [{
            type: NgModule,
            args: [{
                    declarations: [InteractionsDialogComponent, InteractionsFormComponent, InteractionListenerComponent],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, DparamModule],
                    exports: [InteractionsDialogComponent, InteractionsFormComponent, InteractionListenerComponent]
                }]
        }], () => [{
            type: InteractionEventPluginManager
        }, {
            type: InteractionHandlerPluginManager
        }, {
            type: i3.ParamEvaluatorService
        }], null);
})();
export { DetourModule, InteractionEventPlugin, InteractionEventPluginManager, InteractionHandlerPlugin, InteractionHandlerPluginManager, InteractionInteractions, InteractionListener, InteractionListenerComponent, InteractionsDialogComponent, InteractionsFormComponent, InteractionsFormPayload };
