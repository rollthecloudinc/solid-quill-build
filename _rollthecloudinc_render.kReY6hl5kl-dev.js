import { v4_default } from "@nf-internal/chunk-OLWRG54F";
import { forkJoin, iif } from "@nf-internal/chunk-BSWOS4VH";
import { BehaviorSubject, Observable, Subject, combineLatest, of, timer } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/render/fesm2022/rollthecloudinc-render.mjs
import * as i6 from "@angular/common";
import { isPlatformServer, isPlatformBrowser, CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { Directive, DOCUMENT, PLATFORM_ID, forwardRef, ViewChild, HostBinding, Input, Inject, Component, EventEmitter, ViewChildren, Output, Injectable, NgModule } from "@angular/core";
import * as i2 from "@angular/forms";
import { Validators, NG_VALUE_ACCESSOR, NG_ASYNC_VALIDATORS, FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as i11 from "@rollthecloudinc/utils";
import { UtilsModule } from "@rollthecloudinc/utils";
import * as i10 from "@rollthecloudinc/layout";
import { GridLayoutComponent, LayoutModule } from "@rollthecloudinc/layout";
import * as i17 from "@rollthecloudinc/media";
import { MEDIA_SETTINGS } from "@rollthecloudinc/media";
import * as i9 from "@rollthecloudinc/context";
import { InlineContext } from "@rollthecloudinc/context";
import * as i1 from "@rollthecloudinc/panels";
import { PanelPage, PanelPageForm, PanelsModule } from "@rollthecloudinc/panels";
import { map, tap, delay, switchMap, defaultIfEmpty, filter, startWith, debounceTime, take, distinctUntilChanged, skip, bufferTime, takeUntil, concatMap, catchError, finalize } from "rxjs/operators";
import * as i16 from "@rollthecloudinc/sheath";
import { isSelectorValid, ClassClassification } from "@rollthecloudinc/sheath";
import { camelize } from "inflected";
import merge from "deepmerge-json";
import * as i3 from "@rollthecloudinc/content";
import * as i4 from "@rollthecloudinc/dparam";
import * as i5 from "@ngrx/data";
import * as i8 from "@ngrx/store";
import * as i12 from "@angular/common/http";
import * as i13 from "@rollthecloudinc/attributes";
import * as i14 from "@rollthecloudinc/crud";
import * as i15 from "@rollthecloudinc/refinery";
import * as i18 from "@rollthecloudinc/auth";
import * as i19 from "@rollthecloudinc/detour";
import { InteractionHandlerPlugin } from "@rollthecloudinc/detour";
import * as i1$1 from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as i2$1 from "@angular/material/button";
import { MaterialModule } from "@rollthecloudinc/material";
function RenderPaneComponent_ng_template_2_Template(rf, ctx) { }
function RenderPaneComponent_classifieds_ui_panel_page_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "classifieds-ui-panel-page", 4);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("panelPage", ctx_r0.panelPage)("nested", true)("contexts", ctx_r0.contexts)("css", ctx_r0.filteredCss)("listeners", ctx_r0.filteredListeners)("ancestory", ctx_r0.ancestoryWithSelf);
    }
}
function RenderPaneComponent_classifieds_ui_panel_page_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "classifieds-ui-panel-page", 5);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("id", ctx_r0.linkedPageId)("nested", true)("contexts", ctx_r0.contexts)("ancestory", ctx_r0.ancestoryWithSelf);
    }
}
function RenderPaneComponent_classifieds_ui_panel_page_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "classifieds-ui-panel-page", 4);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("panelPage", ctx_r0.embedPanel)("nested", true)("contexts", ctx_r0.contexts)("css", ctx_r0.filteredCss)("listeners", ctx_r0.filteredListeners)("ancestory", ctx_r0.ancestoryWithSelf);
    }
}
var _c0 = ["panes"];
function RenderPanelComponent_ng_template_3_Template(rf, ctx) { }
function RenderPanelComponent_ng_container_4_ng_container_2_classifieds_ui_render_pane_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "classifieds-ui-render-pane", 8);
    }
    if (rf & 2) {
        const pane_r1 = ctx.$implicit;
        const j_r2 = ctx.index;
        const ctx_r2 = i0.ɵɵnextContext(3);
        const panes_r4 = i0.ɵɵreference(1);
        i0.ɵɵproperty("formControlName", j_r2)("pluginName", pane_r1.contentPlugin)("settings", pane_r1.settings)("name", pane_r1.name)("label", pane_r1.label)("originPane", ctx_r2.panel.panes[ctx_r2.originMappings[j_r2]])("contexts", pane_r1.contexts)("displayType", ctx_r2.displayType)("resolvedContext", pane_r1.resolvedContext)("indexPosition", j_r2)("css", ctx_r2.filteredCss)("listeners", ctx_r2.filteredListeners)("ancestory", ctx_r2.ancestoryWithSelf$.value)("panes", panes_r4)("originPanes", ctx_r2.originPanes);
    }
}
function RenderPanelComponent_ng_container_4_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0)(1)(2, 6);
        i0.ɵɵtemplate(3, RenderPanelComponent_ng_container_4_ng_container_2_classifieds_ui_render_pane_3_Template, 1, 15, "classifieds-ui-render-pane", 7);
        i0.ɵɵelementContainerEnd()()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx_r2.resolvedPanes);
    }
}
function RenderPanelComponent_ng_container_4_ng_container_3_classifieds_ui_render_pane_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "classifieds-ui-render-pane", 10);
    }
    if (rf & 2) {
        const pane_r5 = ctx.$implicit;
        const j_r6 = ctx.index;
        const ctx_r2 = i0.ɵɵnextContext(3);
        const panes_r4 = i0.ɵɵreference(1);
        i0.ɵɵproperty("pluginName", pane_r5.contentPlugin)("settings", pane_r5.settings)("name", pane_r5.name)("label", pane_r5.label)("originPane", ctx_r2.panel.panes[ctx_r2.originMappings[j_r6]])("contexts", pane_r5.contexts)("linkedPageId", pane_r5.linkedPageId)("displayType", ctx_r2.displayType)("resolvedContext", pane_r5.resolvedContext)("indexPosition", j_r6)("css", ctx_r2.filteredCss)("listeners", ctx_r2.filteredListeners)("ancestory", ctx_r2.ancestoryWithSelf$.value)("panes", panes_r4)("originPanes", ctx_r2.originPanes);
    }
}
function RenderPanelComponent_ng_container_4_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, RenderPanelComponent_ng_container_4_ng_container_3_classifieds_ui_render_pane_1_Template, 1, 15, "classifieds-ui-render-pane", 9);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngForOf", ctx_r2.resolvedPanes);
    }
}
function RenderPanelComponent_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0)(1, 4);
        i0.ɵɵtemplate(2, RenderPanelComponent_ng_container_4_ng_container_2_Template, 4, 1, "ng-container", 5)(3, RenderPanelComponent_ng_container_4_ng_container_3_Template, 2, 1, "ng-container", 5);
        i0.ɵɵelementContainerEnd()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngSwitch", ctx_r2.displayType);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngSwitchCase", "form");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngSwitchCase", "page");
    }
}
var _c1 = ["renderPanelTpl"];
function PanelPageComponent_ng_template_2_Template(rf, ctx) { }
function PanelPageComponent_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 1)(1, 3);
        i0.ɵɵelement(2, "classifieds-ui-render-panel", 4);
        i0.ɵɵelementContainerEnd()();
    }
    if (rf & 2) {
        const i_r1 = ctx.i;
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("formGroup", ctx_r1.pageForm);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formControlName", i_r1)("panel", ctx_r1.panelPageCached.panels[i_r1])("nested", ctx_r1.nested$.value)("contexts", ctx_r1.contexts$.value)("resolvedContext", ctx_r1.resolvedContext)("contextsChanged", ctx_r1.contextsChanged)("displayType", ctx_r1.panelPageCached.displayType)("indexPosition", i_r1)("css", ctx_r1.filteredCss)("listeners", ctx_r1.filteredListeners)("ancestory", ctx_r1.ancestory$.value);
    }
}
var PaneContentHostDirective = class _PaneContentHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static {
        this.ɵfac = function PaneContentHostDirective_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PaneContentHostDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef));
        };
    }
    static {
        this.ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
            type: _PaneContentHostDirective,
            selectors: [["", "classifiedsUiPaneContentHost", ""]],
            standalone: false
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaneContentHostDirective, [{
            type: Directive,
            args: [{
                    selector: "[classifiedsUiPaneContentHost]",
                    standalone: false
                }]
        }], () => [{
            type: i0.ViewContainerRef
        }], null);
})();
var LayoutRendererHostDirective = class _LayoutRendererHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static {
        this.ɵfac = function LayoutRendererHostDirective_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _LayoutRendererHostDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef));
        };
    }
    static {
        this.ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
            type: _LayoutRendererHostDirective,
            selectors: [["", "classifiedsUiLayoutRendererHost", ""]],
            standalone: false
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutRendererHostDirective, [{
            type: Directive,
            args: [{
                    selector: "[classifiedsUiLayoutRendererHost]",
                    standalone: false
                }]
        }], () => [{
            type: i0.ViewContainerRef
        }], null);
})();
var RenderPaneComponent = class _RenderPaneComponent {
    set resolvedContext(resolvedContext) {
        this.resolvedContext$.next(resolvedContext);
    }
    set css(css) {
        this.css$.next(css);
    }
    set listeners(listeners) {
        this.listeners$.next(listeners);
    }
    get indexPositionClass() {
        return `pane-${this.indexPosition}`;
    }
    get dynamicPanel() {
        return new PanelPage(this.resolvedContext._root);
    }
    constructor(document, platformId, el, renderer2, componentFactoryResolver, panelHandler, fb, cpm, cssHelper, paneStateService, paramEvaluatorService, renderer, es) {
        this.document = document;
        this.platformId = platformId;
        this.el = el;
        this.renderer2 = renderer2;
        this.componentFactoryResolver = componentFactoryResolver;
        this.panelHandler = panelHandler;
        this.fb = fb;
        this.cpm = cpm;
        this.cssHelper = cssHelper;
        this.paneStateService = paneStateService;
        this.paramEvaluatorService = paramEvaluatorService;
        this.renderer = renderer;
        this.settings = [];
        this.ancestory = [];
        this.panes = [];
        this.originPanes = [];
        this.afterContentInit$ = new Subject();
        this.resolvedContext$ = new BehaviorSubject({});
        this.schedulePluginChange = new Subject();
        this.ancestoryWithSelf = [];
        this.filteredListeners = [];
        this.css$ = new BehaviorSubject({
            css: this.cssHelper.makeJsonNode(),
            classes: {}
        });
        this.cssSub = combineLatest([this.css$, this.afterContentInit$, this.schedulePluginChange]).pipe(map(([s]) => s), map(s => ({
            css: this.cssHelper.reduceCss(s.css, `.pane-${this.indexPosition}`),
            classes: this.cssHelper.reduceSelector(s.classes, `.pane-${this.indexPosition}`)
        })), map(({ css, classes }) => [this.cssHelper.reduceCss(css, ".panel-page", false), this.cssHelper.reduceCss(css, ".panel-page"), this.cssHelper.reduceSelector(classes, ".panel-page", false), this.cssHelper.reduceSelector(classes, ".panel-page")]), tap(([_, nestedCss, __, nestedClasses]) => this.filteredCss = {
            css: nestedCss,
            classes: nestedClasses
        }), map(([css, _, classes, __]) => ({
            css,
            classes
        })), map(({ css, classes }) => {
            const rebuiltCss = Object.keys(css.children).reduce((p, c) => __spreadValues(__spreadValues({}, p), c.indexOf(">") === 0 ? {
                [this.ancestoryWithSelf.map((v, k) => (k + 1) % 2 === 0 ? `.pane-${v}` : `.panel-${v}`).join(" ") + " " + c]: classes[c]
            } : {
                [c]: classes[c]
            }), {});
            const rebuiltClasses = Object.keys(classes).reduce((p, c) => __spreadValues(__spreadValues({}, p), c.indexOf(">") === 0 ? {
                [this.ancestoryWithSelf.map((v, k) => (k + 1) % 2 === 0 ? `.pane-${v}` : `.panel-${v}`).join(" ") + " " + c]: classes[c]
            } : {
                [c]: classes[c]
            }), {});
            return {
                css: {
                    children: rebuiltCss
                },
                classes: rebuiltClasses
            };
        }), delay(500)).subscribe(({ css, classes }) => {
            console.log("reduced classes", classes);
            const keys = Object.keys(css.children).filter(k => k === "" || isSelectorValid({
                selector: k,
                document: this.document
            }));
            const classKeys = Object.keys(classes).filter(k => k === "" || isSelectorValid({
                selector: k,
                document: this.document
            }));
            classKeys.forEach((k, keyIndex) => {
                const matchedNodes = k === "" ? [this.el.nativeElement] : k.indexOf(">") !== -1 ? this.document.querySelectorAll(k) : this.el.nativeElement.querySelectorAll(k);
                const len = matchedNodes.length;
                for (let i = 0; i < len; i++) {
                    const c = classes[classKeys[keyIndex]];
                    const cKeys = Object.keys(c);
                    const cLen = cKeys.length;
                    for (let j = 0; j < cLen; j++) {
                        if (matchedNodes[i]) {
                            if (c[cKeys[j]] === ClassClassification.REMOVE) {
                                console.log(`remove class ${cKeys[j]}`);
                                this.renderer2.removeClass(matchedNodes[i], cKeys[j]);
                            }
                            else {
                                console.log(`add class ${cKeys[j]}`);
                                this.renderer2.addClass(matchedNodes[i], cKeys[j]);
                            }
                        }
                    }
                }
            });
            keys.forEach(k => {
                console.log(`search: ${k}`);
                const matchedNodes = k === "" ? [this.el.nativeElement] : k.indexOf(">") !== -1 ? this.document.querySelectorAll(k) : this.el.nativeElement.querySelectorAll(k);
                const len = matchedNodes.length;
                const rules = Object.keys(css.children[k].attributes);
                for (let i = 0; i < len; i++) {
                    if (matchedNodes[i]) {
                        rules.forEach(p => {
                            console.log(`${k} { ${p}: ${css.children[k].attributes[p]}; }`);
                            const prop = camelize(p.replace("-", "_"), false);
                            this.renderer2.setStyle(matchedNodes[i], /*p*/ prop, css.children[k].attributes[p]);
                        });
                    }
                }
            });
        });
        this.listeners$ = new BehaviorSubject([]);
        this.listenersSub = combineLatest([this.listeners$, this.schedulePluginChange]).pipe(map(([l]) => l), tap(listeners => {
            this.filteredListeners = listeners;
            console.log("pane listeners", listeners);
        })).subscribe();
        this.wireListenersSub = combineLatest([this.listeners$, this.afterContentInit$]).pipe(delay(1), switchMap(() => forkJoin(this.filteredListeners.map(l => of({}).pipe(map(() => ({
            paramNames: l.event.settings.paramsString ? l.event.settings.paramsString.split("&").filter(v => v.indexOf("=:") !== -1).map(v => v.split("=", 2)[1].substr(1)) : []
        })), switchMap(({ paramNames }) => this.paramEvaluatorService.paramValues(l.event.settings.params.reduce((p, c, i) => new Map([...p, [paramNames[i], c]]), /* @__PURE__ */ new Map())).pipe(map(params => Array.from(params).reduce((p, [k, v]) => __spreadProps(__spreadValues({}, p), {
            [k]: v
        }), {})))), defaultIfEmpty([]))))), tap(listenerParams => {
            console.log("listener info", this.filteredListeners, listenerParams);
            const listenerLen = this.filteredListeners.length;
            for (let i = 0; i < listenerLen; i++) {
                const targets = this.el.nativeElement.querySelectorAll(listenerParams[i].target);
                console.log("listener target", targets);
                targets.forEach(t => this.renderer.listen(t, listenerParams[i].type, e => {
                    console.log("listener fired");
                    if (this.filteredListeners[i].handler.settings.params) {
                        const paramNames = this.filteredListeners[i].handler.settings.paramsString ? this.filteredListeners[i].handler.settings.paramsString.split("&").filter(v => v.indexOf("=:") !== -1).map(v => v.split("=", 2)[1].substr(1)) : [];
                        this.paramEvaluatorService.paramValues(this.filteredListeners[i].handler.settings.params.reduce((p, c, i7) => new Map([...p, [paramNames[i7], c]]), /* @__PURE__ */ new Map())).pipe(map(params => Array.from(params).reduce((p, [k, v]) => __spreadProps(__spreadValues({}, p), {
                            [k]: v
                        }), {}))).subscribe(handlerParams => {
                            console.log("handler original event and params", e, handlerParams);
                        });
                    }
                    else {
                        console.log("handler original event and params", e);
                    }
                }));
            }
        })).subscribe();
        this.paneForm = this.fb.group({
            contentPlugin: this.fb.control("", Validators.required),
            name: this.fb.control(""),
            label: this.fb.control(""),
            settings: this.fb.control("")
        });
        this.paneFormSub = this.paneForm.valueChanges.subscribe(v => {
            console.log(`pane form value plugin: ${this.pluginName}`);
            console.log(v);
        });
        this.scheduleStateChange$ = new Subject();
        this.scheduleStateChangeSub = this.scheduleStateChange$.pipe(switchMap(({ state }) => this.paneStateService.mergeState({
            state,
            ancestory: [...this.ancestoryWithSelf],
            settings: this.settings,
            plugin: this.contentPlugin
        }))).subscribe(({ pageState }) => {
            this.panelPageStateService.upsert(pageState);
        });
        this.onTouched = () => { };
        this.pluginChangeSub = this.schedulePluginChange.pipe(filter(() => this.pluginName && this.pluginName !== null && this.pluginName !== ""), switchMap(() => this.cpm.getPlugin(this.pluginName))).subscribe(p => {
            this.contentPlugin = p;
            this.paneForm.get("contentPlugin").setValue(p.name);
            this.paneForm.get("name").setValue(this.name);
            this.paneForm.get("label").setValue(this.label);
            if (this.pluginName === "panel") {
                this.resolveNestedPanelPage();
            }
            else {
                this.renderPaneContent();
            }
        });
        this.embedPanelSub = this.resolvedContext$.pipe(map(rc => {
            if (rc && rc._root && !this.linkedPageId && this.settings.length === 0) {
                this.embedPanel = new PanelPage(rc._root);
            }
        })).subscribe();
        this.panelPageStateService = es.getEntityCollectionService("PanelPageState");
    }
    ngOnInit() {
        this.ancestoryWithSelf = [...(this.ancestory ? this.ancestory : []), ...(this.indexPosition !== void 0 && this.indexPosition !== null ? [this.indexPosition] : [])];
        this.schedulePluginChange.next(void 0);
    }
    ngOnChanges(changes) {
        if (changes.ancestory || changes.indexPosition) {
            const ancestoryWithSelf = [...(changes.ancestory.currentValue ? changes.ancestory.currentValue : this.ancestory ? this.ancestory : []), ...(changes.indexPosition.currentValue !== void 0 && changes.indexPosition.currentValue !== null ? [changes.indexPosition.currentValue] : this.indexPosition ? [this.indexPosition] : [])];
            if (ancestoryWithSelf.length !== this.ancestoryWithSelf.length || this.ancestoryWithSelf.filter((n, index) => ancestoryWithSelf[index] !== n).length !== 0) {
                this.ancestoryWithSelf = ancestoryWithSelf;
            }
        }
        this.schedulePluginChange.next(void 0);
    }
    ngAfterContentInit() {
        this.afterContentInit$.next(void 0);
    }
    writeValue(val) {
        if (val) {
            this.paneForm.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.paneForm.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.paneForm.disable();
        }
        else {
            this.paneForm.enable();
        }
    }
    validate(c) {
        return this.paneForm.statusChanges.pipe(startWith(this.paneForm.status), 
        // start with the current form status
        filter(status => status !== "PENDING"), debounceTime(1), take(1), 
        // We only want one emit after status changes from PENDING
        map(status => {
            return this.paneForm.valid ? null : {
                invalidForm: {
                    invalidForm: {
                        valid: false,
                        message: "pane is invalid"
                    }
                }
            };
        }));
    }
    resolveNestedPanelPage() {
        this.panelHandler.toObject(this.settings).subscribe(p => {
            this.panelPage = new PanelPage(__spreadProps(__spreadValues({}, p), {
                contexts: this.contexts
            }));
        });
    }
    renderPaneContent() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.contentPlugin.renderComponent);
        const viewContainerRef = this.contentPaneHost.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.settings = this.settings;
        this.componentRef.instance.name = this.name;
        this.componentRef.instance.label = this.label;
        this.componentRef.instance.panes = this.panes;
        this.componentRef.instance.originPanes = this.originPanes;
        this.componentRef.instance.contexts = this.contexts.map(c => new InlineContext(c));
        this.componentRef.instance.displayType = this.displayType;
        this.componentRef.instance.resolvedContext = this.resolvedContext$.value;
        this.componentRef.instance.ancestory = this.ancestoryWithSelf;
        if (this.componentRef.instance.state && this.contentPlugin.handler) {
            this.contentPlugin.handler.stateDefinition(this.settings).pipe(take(1)).subscribe(s => {
                this.componentRef.instance.state = s ? s : {};
            });
        }
        if (this.componentRef.instance.stateChange) {
            this.componentRef.instance.stateChange.subscribe(state => {
                this.scheduleStateChange$.next({
                    state
                });
            });
        }
    }
    static {
        this.ɵfac = function RenderPaneComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _RenderPaneComponent)(i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i1.PanelContentHandler), i0.ɵɵdirectiveInject(i2.UntypedFormBuilder), i0.ɵɵdirectiveInject(i3.ContentPluginManager), i0.ɵɵdirectiveInject(i1.CssHelperService), i0.ɵɵdirectiveInject(i1.PaneStateService), i0.ɵɵdirectiveInject(i4.ParamEvaluatorService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i5.EntityServices));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _RenderPaneComponent,
            selectors: [["classifieds-ui-render-pane"]],
            viewQuery: function RenderPaneComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(PaneContentHostDirective, 7);
                    i0.ɵɵviewQuery(PanelPageComponent, 5);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentPaneHost = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panelPageComponent = _t.first);
                }
            },
            hostVars: 5,
            hostBindings: function RenderPaneComponent_HostBindings(rf, ctx) {
                if (rf & 2) {
                    i0.ɵɵattribute("data-index", ctx.indexPosition);
                    i0.ɵɵclassMap(ctx.indexPositionClass);
                    i0.ɵɵclassProp("pane", true);
                }
            },
            inputs: {
                pluginName: "pluginName",
                settings: "settings",
                linkedPageId: "linkedPageId",
                contexts: "contexts",
                originPane: "originPane",
                displayType: "displayType",
                name: "name",
                label: "label",
                indexPosition: "indexPosition",
                ancestory: "ancestory",
                panes: "panes",
                originPanes: "originPanes",
                resolvedContext: "resolvedContext",
                css: "css",
                listeners: "listeners"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _RenderPaneComponent),
                        multi: true
                    },
                    /*{
                      provide: NG_VALIDATORS,
                      useExisting: forwardRef(() => RenderPaneComponent),
                      multi: true
                    },*/
                    {
                        provide: NG_ASYNC_VALIDATORS,
                        useExisting: forwardRef(() => _RenderPaneComponent),
                        multi: true
                    }]), i0.ɵɵNgOnChangesFeature],
            decls: 6,
            vars: 4,
            consts: [["fxFlex", "", 3, "formGroup"], ["classifiedsUiPaneContentHost", ""], ["fxFlex", "", "formControlName", "settings", 3, "panelPage", "nested", "contexts", "css", "listeners", "ancestory", 4, "ngIf"], ["fxFlex", "", "formControlName", "settings", 3, "id", "nested", "contexts", "ancestory", 4, "ngIf"], ["fxFlex", "", "formControlName", "settings", 3, "panelPage", "nested", "contexts", "css", "listeners", "ancestory"], ["fxFlex", "", "formControlName", "settings", 3, "id", "nested", "contexts", "ancestory"]],
            template: function RenderPaneComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0);
                    i0.ɵɵelementContainerStart(1);
                    i0.ɵɵtemplate(2, RenderPaneComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
                    i0.ɵɵelementContainerEnd();
                    i0.ɵɵtemplate(3, RenderPaneComponent_classifieds_ui_panel_page_3_Template, 1, 6, "classifieds-ui-panel-page", 2)(4, RenderPaneComponent_classifieds_ui_panel_page_4_Template, 1, 4, "classifieds-ui-panel-page", 3)(5, RenderPaneComponent_classifieds_ui_panel_page_5_Template, 1, 6, "classifieds-ui-panel-page", 2);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.paneForm);
                    i0.ɵɵadvance(3);
                    i0.ɵɵproperty("ngIf", ctx.pluginName == "panel" && !ctx.linkedPageId && ctx.settings.length !== 0);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.pluginName == "panel" && ctx.linkedPageId);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.pluginName == "panel" && !ctx.linkedPageId && ctx.settings.length === 0);
                }
            },
            dependencies: () => [i6.NgIf, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, PaneContentHostDirective, PanelPageComponent],
            styles: ["[_nghost-%COMP%]{height:100%}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RenderPaneComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-render-pane",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RenderPaneComponent),
                            multi: true
                        },
                        /*{
                          provide: NG_VALIDATORS,
                          useExisting: forwardRef(() => RenderPaneComponent),
                          multi: true
                        },*/
                        {
                            provide: NG_ASYNC_VALIDATORS,
                            useExisting: forwardRef(() => RenderPaneComponent),
                            multi: true
                        }],
                    host: {
                        "[class.pane]": "true",
                        "[attr.data-index]": "indexPosition"
                    },
                    standalone: false,
                    template: `<div fxFlex [formGroup]="paneForm">
  <ng-container><ng-template classifiedsUiPaneContentHost></ng-template></ng-container>
  <classifieds-ui-panel-page fxFlex *ngIf="pluginName == 'panel' && !linkedPageId && settings.length !== 0" [panelPage]="panelPage" [nested]="true" [contexts]="contexts" [css]="filteredCss" [listeners]="filteredListeners" formControlName="settings" [ancestory]="ancestoryWithSelf"></classifieds-ui-panel-page>
  <classifieds-ui-panel-page fxFlex *ngIf="pluginName == 'panel' && linkedPageId" [id]="linkedPageId" [nested]="true" [contexts]="contexts" formControlName="settings" [ancestory]="ancestoryWithSelf"></classifieds-ui-panel-page>
  <classifieds-ui-panel-page fxFlex *ngIf="pluginName == 'panel' && !linkedPageId && settings.length === 0" [panelPage]="embedPanel" [nested]="true" [contexts]="contexts" formControlName="settings" [css]="filteredCss" [listeners]="filteredListeners" [ancestory]="ancestoryWithSelf"></classifieds-ui-panel-page>
</div>
`,
                    styles: [":host{height:100%}\n"]
                }]
        }], () => [{
            type: Document,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }, {
            type: Object,
            decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }]
        }, {
            type: i0.ElementRef
        }, {
            type: i0.Renderer2
        }, {
            type: i0.ComponentFactoryResolver
        }, {
            type: i1.PanelContentHandler
        }, {
            type: i2.UntypedFormBuilder
        }, {
            type: i3.ContentPluginManager
        }, {
            type: i1.CssHelperService
        }, {
            type: i1.PaneStateService
        }, {
            type: i4.ParamEvaluatorService
        }, {
            type: i0.Renderer2
        }, {
            type: i5.EntityServices
        }], {
        pluginName: [{
                type: Input
            }],
        settings: [{
                type: Input
            }],
        linkedPageId: [{
                type: Input
            }],
        contexts: [{
                type: Input
            }],
        originPane: [{
                type: Input
            }],
        displayType: [{
                type: Input
            }],
        name: [{
                type: Input
            }],
        label: [{
                type: Input
            }],
        indexPosition: [{
                type: Input
            }],
        ancestory: [{
                type: Input
            }],
        panes: [{
                type: Input
            }],
        originPanes: [{
                type: Input
            }],
        resolvedContext: [{
                type: Input
            }],
        css: [{
                type: Input
            }],
        listeners: [{
                type: Input
            }],
        indexPositionClass: [{
                type: HostBinding,
                args: ["class"]
            }],
        contentPaneHost: [{
                type: ViewChild,
                args: [PaneContentHostDirective, {
                        static: true
                    }]
            }],
        panelPageComponent: [{
                type: ViewChild,
                args: [forwardRef(() => PanelPageComponent)]
            }]
    });
})();
var RenderPanelComponent = class _RenderPanelComponent {
    static {
        this.COUNTER = 0;
    }
    set contextChanged(contextChanged) { }
    set contextsChanged(contextsChanged) {
        contextsChanged.map(c => this.schduleContextChange.next(c));
    }
    set indexPosition(indexPosition) {
        this.indexPosition$.next(indexPosition);
    }
    set ancestory(ancestory) {
        this.ancestory$.next(ancestory);
    }
    set css(css) {
        this.css$.next(css);
    }
    set listeners(listeners) {
        this.listeners$.next(listeners);
    }
    get indexPositionClass() {
        return `panel-${this.indexPosition$.value}`;
    }
    get panesArray() {
        return this.panelForm.get("panes");
    }
    constructor(platformId, document, hostEl, renderer2, componentFactoryResolver, fb, panelResolverService, spm, cssHelper, styleResolverService) {
        this.platformId = platformId;
        this.document = document;
        this.hostEl = hostEl;
        this.renderer2 = renderer2;
        this.componentFactoryResolver = componentFactoryResolver;
        this.fb = fb;
        this.panelResolverService = panelResolverService;
        this.spm = spm;
        this.cssHelper = cssHelper;
        this.styleResolverService = styleResolverService;
        this.nested = false;
        this.resolvedContext = {};
        this.heightChange = new EventEmitter();
        this.panelForm = this.fb.group({
            name: this.fb.control(""),
            label: this.fb.control(""),
            panes: this.fb.array([])
        });
        this.panelFormSub = this.panelForm.valueChanges.subscribe(v => {
            console.log("paneL form value");
            console.log(v);
        });
        this.filteredListeners = [];
        this.afterContentInit$ = new Subject();
        this.schedulePanelRender = new Subject();
        this.rendered$ = new Subject();
        this.css$ = new BehaviorSubject({
            css: this.cssHelper.makeJsonNode(),
            classes: {}
        });
        this.cssSub = combineLatest([this.css$, this.afterContentInit$, this.rendered$]).pipe(tap(([s]) => console.log("css node", s.css)), map(([s]) => s), map(s => ({
            css: this.cssHelper.reduceCss(s.css, `.panel-${this.indexPosition$.value}`),
            classes: this.cssHelper.reduceSelector(s.classes, `.panel-${this.indexPosition$.value}`)
        })), map(({ css, classes }) => [this.cssHelper.reduceCss(css, ".pane-", false), css, this.cssHelper.reduceSelector(classes, ".pane-", false), classes]), tap(([_, nestedCss, __, nestedClasses]) => this.filteredCss = {
            css: nestedCss,
            classes: nestedClasses
        }), map(([css, _, classes]) => ({
            css,
            classes
        })), map(({ css, classes }) => {
            const rebuiltCss = Object.keys(css.children).reduce((p, c) => __spreadValues(__spreadValues({}, p), c.indexOf(">") === 0 ? {
                [this.ancestoryWithSelf$.value.map((v, k) => (k + 1) % 2 === 0 ? `.pane-${v}` : `.panel-${v}`).join(" ") + " " + c]: classes[c]
            } : {
                [c]: classes[c]
            }), {});
            const rebuiltClasses = Object.keys(classes).reduce((p, c) => __spreadValues(__spreadValues({}, p), c.indexOf(">") === 0 ? {
                [this.ancestoryWithSelf$.value.map((v, k) => (k + 1) % 2 === 0 ? `.pane-${v}` : `.panel-${v}`).join(" ") + " " + c]: classes[c]
            } : {
                [c]: classes[c]
            }), {});
            return {
                css: {
                    children: rebuiltCss
                },
                classes: rebuiltClasses
            };
        }), delay(1)).subscribe(({ css, classes }) => {
            console.log("classes", classes);
            const keys = Object.keys(css.children).filter(k => k === "" || isSelectorValid({
                selector: k,
                document: this.document
            }));
            const classKeys = Object.keys(classes).filter(k => k === "" || isSelectorValid({
                selector: k,
                document: this.document
            }));
            classKeys.forEach((k, keyIndex) => {
                const matchedNodes = k === "" ? [this.hostEl.nativeElement] : k.indexOf(">") !== -1 ? this.document.querySelectorAll(k) : this.hostEl.nativeElement.querySelectorAll(k);
                const len = matchedNodes.length;
                for (let i = 0; i < len; i++) {
                    const c = classes[classKeys[keyIndex]];
                    const cKeys = Object.keys(c);
                    const cLen = cKeys.length;
                    for (let j = 0; j < cLen; j++) {
                        if (matchedNodes[i]) {
                            if (c[cKeys[j]] === ClassClassification.REMOVE) {
                                console.log(`remove class ${cKeys[j]}`);
                                this.renderer2.removeClass(matchedNodes[i], cKeys[j]);
                            }
                            else {
                                console.log(`add class ${cKeys[j]}`);
                                this.renderer2.addClass(matchedNodes[i], cKeys[j]);
                            }
                        }
                    }
                }
            });
            keys.forEach(k => {
                console.log(`search: ${k}`);
                const matchedNodes = k === "" ? [this.hostEl.nativeElement] : k.indexOf(">") !== -1 ? this.document.querySelectorAll(k) : this.hostEl.nativeElement.querySelectorAll(k);
                const len = matchedNodes.length;
                const rules = Object.keys(css.children[k].attributes);
                for (let i = 0; i < len; i++) {
                    if (matchedNodes[i]) {
                        rules.forEach(p => {
                            console.log(`${k} { ${p}: ${css.children[k].attributes[p]}; }`);
                            const prop = camelize(p.replace("-", "_"), false);
                            this.renderer2.setStyle(matchedNodes[i], /*p*/ prop, css.children[k].attributes[p]);
                        });
                    }
                }
            });
        });
        this.listeners$ = new BehaviorSubject([]);
        this.listenersSub = this.listeners$.pipe(tap(listeners => {
            console.log("panel listeners", listeners);
            this.filteredListeners = listeners;
        })).subscribe();
        this.scheduleRender = new Subject();
        this.scheduleRenderSub = this.scheduleRender.pipe(tap(() => console.log(`schdule renderer before [${this.panel.name}]`)), switchMap(([panes, contexts, resolvedContext]) => this.panelResolverService.resolvePanes({
            panes,
            contexts,
            resolvedContext
        }).pipe(map(({ resolvedPanes, originMappings
        /*, resolvedContexts */
         }) => ({
            resolvedPanes,
            originMappings,
            panes
        })))), switchMap(({ panes, resolvedPanes, originMappings
        /*, resolvedContexts */
         }) => this.styleResolverService.alterResolvedPanes({
            panel: this.panel,
            resolvedPanes,
            originMappings
            /*, resolvedContexts */
        }).pipe(map(({ resolvedPanes: resolvedPanes2, originMappings: originMappings2
        /*, resolvedContexts */
         }) => ({
            panes,
            resolvedPanes: resolvedPanes2,
            originMappings: originMappings2
        })))), tap(() => console.log(`schdule renderer after [${this.panel.name}]`))).subscribe(({ panes, resolvedPanes, originMappings
        /*, resolvedContexts*/
         }) => {
            console.log(`render panel: ${this.panel.name}`);
            this.resolvedPanes = resolvedPanes;
            this.originPanes = panes;
            this.originMappings = originMappings;
            if (this.paneContainer && this.stylePlugin === void 0) { }
            this.populatePanesFormArray();
            if (this.stylePlugin !== void 0) {
                this.renderPanelContent();
            }
            else {
                this.rendered$.next(void 0);
            }
        });
        this.schduleContextChange = new Subject();
        this.schedulePanelRenderSub = this.schedulePanelRender.pipe(switchMap(p => this.spm.getPlugin(p))).subscribe(stylePlugin => {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(stylePlugin.renderComponent);
            const viewContainerRef = this.panelHost.viewContainerRef;
            viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(componentFactory);
            this.componentRef = componentRef;
            componentRef.instance.settings = this.panel.settings;
            componentRef.instance.panes = this.resolvedPanes;
            componentRef.instance.originPanes = this.panel.panes;
            componentRef.instance.originMappings = this.originMappings;
            componentRef.instance.contexts = this.contexts.map(c => new InlineContext(c));
            componentRef.instance.displayType = this.displayType;
            componentRef.instance.ancestory = this.ancestoryWithSelf$.value;
            componentRef.instance.resolvedContext = this.resolvedContext;
            componentRef.instance.panel = this.panel;
            componentRef.instance.indexPosition = this.indexPosition$.value;
            this.rendered$.next(void 0);
        });
        this.originMappings = [];
        this.resolvedContexts = [];
        this.ancestoryWithSelf$ = new BehaviorSubject([]);
        this.ancestory$ = new BehaviorSubject([]);
        this.indexPosition$ = new BehaviorSubject(void 0);
        this.onTouched = () => { };
        this.ancestorySub = combineLatest([this.ancestory$, this.indexPosition$]).pipe(tap(([ancestory, indexPosition]) => {
            this.ancestoryWithSelf$.next([...ancestory, indexPosition]);
        })).subscribe();
        this.counter = _RenderPanelComponent.COUNTER++;
    }
    ngOnInit() {
        this.stylePlugin = this.panel.stylePlugin !== void 0 && this.panel.stylePlugin !== "" ? this.panel.stylePlugin : void 0;
        if (this.panel !== void 0 && this.panelHost !== void 0) {
            console.log(`panel render init [${this.panel.name}`);
            this.panelResolverService.usedContexts(this.panel.panes).pipe(map(ctx => ctx.filter(c => c !== "_page" && c !== "_root" && c !== "." && c.indexOf("panestate-" + this.ancestoryWithSelf$.value.join("-")) !== 0)), tap(ctx => console.log(`contexts [${this.panel.name}]: ${ctx.join(",")}`)), switchMap(ctx => this.schduleContextChange.pipe(tap(contextChanged => console.log(`detected change [${this.panel.name}]: ${contextChanged}`)), map(contextChanged => [ctx, contextChanged])
            // @todo: Replacing the line above with the one below causes an infinite context change loop on the ad browser use case. no good.
            // I think this line was being used for the pane state detection since there was an issue with it. However, that is not being use anymore.
            // map(contextChanged => [ctx.includes(contextChanged) ? ctx : [ ...ctx, contextChanged ], contextChanged]) // This might be a breaking change but I do know some of this was never very well tested... :/
            )), tap(([ctx, contextChanged]) => console.log(`detected change [${this.panel.name}]: ${contextChanged} : ctx: ${ctx.join(",")}`)), filter(([ctx, contextChanged]) => Array.isArray(ctx) && ctx.findIndex(c => c === contextChanged) !== -1), debounceTime(100)).subscribe(([ctx, contextChanged]) => {
                console.log(`Context changed [${this.panel.name}]: ${contextChanged}`);
                console.log(`contexts detected [${this.panel.name}]: ${ctx.join(",")}`);
                this.scheduleRender.next([this.panel.panes, this.contexts, this.resolvedContext]);
            });
        }
    }
    ngOnChanges(changes) {
        this.stylePlugin = this.panel.stylePlugin !== void 0 && this.panel.stylePlugin !== "" ? this.panel.stylePlugin : void 0;
        if (changes.resolvedContext && changes.resolvedContext.previousValue === void 0) {
            this.scheduleRender.next([this.panel.panes, this.contexts, this.resolvedContext]);
        }
    }
    ngAfterViewInit() { }
    ngAfterContentInit() {
        this.afterContentInit$.next(void 0);
    }
    writeValue(val) {
        if (val) {
            this.panelForm.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.panelForm.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.panelForm.disable();
        }
        else {
            this.panelForm.enable();
        }
    }
    validate(c) {
        return this.panelForm.statusChanges.pipe(startWith(this.panelForm.status), 
        // start with the current form status
        filter(status => status !== "PENDING"), debounceTime(1), take(1), 
        // We only want one emit after status changes from PENDING
        map(status => {
            return this.panelForm.valid ? null : {
                invalidForm: {
                    valid: false,
                    message: "panel are invalid"
                }
            };
        }));
    }
    populatePanesFormArray() {
        this.panesArray.clear();
        this.resolvedPanes.forEach((p, i) => {
            this.panesArray.push(this.fb.control(""));
        });
    }
    renderPanelContent() {
        this.schedulePanelRender.next(this.stylePlugin);
    }
    static {
        this.ɵfac = function RenderPanelComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _RenderPanelComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i2.UntypedFormBuilder), i0.ɵɵdirectiveInject(i1.PanelResolverService), i0.ɵɵdirectiveInject(i1.StylePluginManager), i0.ɵɵdirectiveInject(i1.CssHelperService), i0.ɵɵdirectiveInject(i1.StyleResolverService));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _RenderPanelComponent,
            selectors: [["classifieds-ui-render-panel"]],
            viewQuery: function RenderPanelComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(PaneContentHostDirective, 7);
                    i0.ɵɵviewQuery(_c0, 7);
                    i0.ɵɵviewQuery(RenderPaneComponent, 5);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panelHost = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paneContainer = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.renderedPanes = _t);
                }
            },
            hostVars: 5,
            hostBindings: function RenderPanelComponent_HostBindings(rf, ctx) {
                if (rf & 2) {
                    i0.ɵɵattribute("data-index", ctx.indexPosition$.value);
                    i0.ɵɵclassMap(ctx.indexPositionClass);
                    i0.ɵɵclassProp("panel", true);
                }
            },
            inputs: {
                panel: "panel",
                contexts: "contexts",
                nested: "nested",
                displayType: "displayType",
                resolvedContext: "resolvedContext",
                contextChanged: "contextChanged",
                contextsChanged: "contextsChanged",
                indexPosition: "indexPosition",
                ancestory: "ancestory",
                css: "css",
                listeners: "listeners"
            },
            outputs: {
                heightChange: "heightChange"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _RenderPanelComponent),
                        multi: true
                    },
                    /*{
                      provide: NG_VALIDATORS,
                      useExisting: forwardRef(() => RenderPanelComponent),
                      multi: true
                    },*/
                    {
                        provide: NG_ASYNC_VALIDATORS,
                        useExisting: forwardRef(() => _RenderPanelComponent),
                        multi: true
                    }]), i0.ɵɵNgOnChangesFeature],
            decls: 5,
            vars: 2,
            consts: [["panes", ""], [1, "render-panel", 3, "formGroup"], ["classifiedsUiPaneContentHost", ""], [4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["formArrayName", "panes"], [3, "formControlName", "pluginName", "settings", "name", "label", "originPane", "contexts", "displayType", "resolvedContext", "indexPosition", "css", "listeners", "ancestory", "panes", "originPanes", 4, "ngFor", "ngForOf"], [3, "formControlName", "pluginName", "settings", "name", "label", "originPane", "contexts", "displayType", "resolvedContext", "indexPosition", "css", "listeners", "ancestory", "panes", "originPanes"], [3, "pluginName", "settings", "name", "label", "originPane", "contexts", "linkedPageId", "displayType", "resolvedContext", "indexPosition", "css", "listeners", "ancestory", "panes", "originPanes", 4, "ngFor", "ngForOf"], [3, "pluginName", "settings", "name", "label", "originPane", "contexts", "linkedPageId", "displayType", "resolvedContext", "indexPosition", "css", "listeners", "ancestory", "panes", "originPanes"]],
            template: function RenderPanelComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 1, 0);
                    i0.ɵɵelementContainerStart(2);
                    i0.ɵɵtemplate(3, RenderPanelComponent_ng_template_3_Template, 0, 0, "ng-template", 2);
                    i0.ɵɵelementContainerEnd();
                    i0.ɵɵtemplate(4, RenderPanelComponent_ng_container_4_Template, 4, 3, "ng-container", 3);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.panelForm);
                    i0.ɵɵadvance(4);
                    i0.ɵɵproperty("ngIf", !ctx.stylePlugin && ctx.resolvedPanes);
                }
            },
            dependencies: [i6.NgForOf, i6.NgIf, i6.NgSwitch, i6.NgSwitchCase, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i2.FormArrayName, PaneContentHostDirective, RenderPaneComponent],
            styles: ["[_nghost-%COMP%]{height:100%}.render-panel[_ngcontent-%COMP%]{height:100%}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RenderPanelComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-render-panel",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RenderPanelComponent),
                            multi: true
                        },
                        /*{
                          provide: NG_VALIDATORS,
                          useExisting: forwardRef(() => RenderPanelComponent),
                          multi: true
                        },*/
                        {
                            provide: NG_ASYNC_VALIDATORS,
                            useExisting: forwardRef(() => RenderPanelComponent),
                            multi: true
                        }],
                    host: {
                        "[class.panel]": "true",
                        "[attr.data-index]": "indexPosition$.value"
                    },
                    standalone: false,
                    template: `<div [formGroup]="panelForm" class="render-panel" #panes>
  <ng-container><ng-template classifiedsUiPaneContentHost></ng-template></ng-container>
  <!-- <ng-container [ngSwitch]="displayType">
    <ng-container *ngSwitchCase="'form'">
      <ng-container [formGroup]="panelForm">
        <ng-template classifiedsUiPaneContentHost></ng-template>
      </ng-container>
    </ng-container>
    <ng-container *ngSwitchCase="'page'">
      <ng-container><ng-template classifiedsUiPaneContentHost></ng-template></ng-container>
    </ng-container>
  </ng-container> -->
  <!-- is fxFlex needed here? - verify other pages -->
  <!-- removing fxFlex breaks design of adbrowserv9 -->
  <ng-container *ngIf="!stylePlugin && resolvedPanes">
    <ng-container [ngSwitch]="displayType">
      <ng-container *ngSwitchCase="'form'">
        <ng-container>
          <ng-container formArrayName="panes">
            <classifieds-ui-render-pane *ngFor="let pane of resolvedPanes; let j = index" [formControlName]="j" [pluginName]="pane.contentPlugin" [settings]="pane.settings" [name]="pane.name" [label]="pane.label" [originPane]="panel.panes[originMappings[j]]" [contexts]="pane.contexts" [displayType]="displayType" [resolvedContext]="pane.resolvedContext" [indexPosition]="j" [css]="filteredCss" [listeners]="filteredListeners" [ancestory]="ancestoryWithSelf$.value" [panes]="panes" [originPanes]="originPanes"></classifieds-ui-render-pane>
          </ng-container>
        </ng-container>
      </ng-container>
      <ng-container *ngSwitchCase="'page'">
        <!-- is fxFlex needed here? - verify other pages -->
        <!-- removing fxFlex breaks design of adbrowserv9 -->
        <classifieds-ui-render-pane *ngFor="let pane of resolvedPanes; let j = index" [pluginName]="pane.contentPlugin" [settings]="pane.settings" [name]="pane.name" [label]="pane.label" [originPane]="panel.panes[originMappings[j]]" [contexts]="pane.contexts" [linkedPageId]="pane.linkedPageId" [displayType]="displayType" [resolvedContext]="pane.resolvedContext" [indexPosition]="j" [css]="filteredCss" [listeners]="filteredListeners" [ancestory]="ancestoryWithSelf$.value" [panes]="panes" [originPanes]="originPanes"></classifieds-ui-render-pane>
      </ng-container>
    </ng-container>
  </ng-container>
</div>
`,
                    styles: [":host{height:100%}.render-panel{height:100%}\n"]
                }]
        }], () => [{
            type: Object,
            decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }]
        }, {
            type: Document,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }, {
            type: i0.ElementRef
        }, {
            type: i0.Renderer2
        }, {
            type: i0.ComponentFactoryResolver
        }, {
            type: i2.UntypedFormBuilder
        }, {
            type: i1.PanelResolverService
        }, {
            type: i1.StylePluginManager
        }, {
            type: i1.CssHelperService
        }, {
            type: i1.StyleResolverService
        }], {
        panel: [{
                type: Input
            }],
        contexts: [{
                type: Input
            }],
        nested: [{
                type: Input
            }],
        displayType: [{
                type: Input
            }],
        resolvedContext: [{
                type: Input
            }],
        contextChanged: [{
                type: Input
            }],
        contextsChanged: [{
                type: Input
            }],
        indexPosition: [{
                type: Input
            }],
        ancestory: [{
                type: Input
            }],
        css: [{
                type: Input
            }],
        listeners: [{
                type: Input
            }],
        heightChange: [{
                type: Output
            }],
        indexPositionClass: [{
                type: HostBinding,
                args: ["class"]
            }],
        renderedPanes: [{
                type: ViewChildren,
                args: [RenderPaneComponent]
            }],
        panelHost: [{
                type: ViewChild,
                args: [PaneContentHostDirective, {
                        static: true
                    }]
            }],
        paneContainer: [{
                type: ViewChild,
                args: ["panes", {
                        static: true
                    }]
            }]
    });
})();
var PanelPageComponent = class _PanelPageComponent {
    static {
        this.registredContextListeners = /* @__PURE__ */ new Set();
    }
    set id(id) {
        this.id$.next(id);
    }
    set panelPage(panelPage) {
        this.panelPage$.next(panelPage);
    }
    set nested(nested) {
        this.nested$.next(nested);
    }
    set contexts(contexts) {
        this.contexts$.next(contexts);
    }
    set ancestory(ancestory) {
        this.ancestory$.next(ancestory);
    }
    set css(css) {
        this.css$.next(css);
    }
    set listeners(listeners) {
        this.listeners$.next(listeners);
    }
    get panelsArray() {
        return this.pageForm.get("panels");
    }
    constructor(platformId, mediaSettings, routerStore, fb, el, inlineContextResolver, pageBuilderFacade, cpm, cxm, lpm, componentFactoryResolver, styleLoader, http, cssHelper, attributeSerializer, formService, panelsContextService, asyncApiCallHelperSvc, crudDataHelperService, entityDefinitionService, ngZone, persistService, stylizerService, classifyService, fileService, authFacade, paramEvaluatorService, renderer, iepm, ihpm, es) {
        this.platformId = platformId;
        this.mediaSettings = mediaSettings;
        this.routerStore = routerStore;
        this.fb = fb;
        this.el = el;
        this.inlineContextResolver = inlineContextResolver;
        this.pageBuilderFacade = pageBuilderFacade;
        this.cpm = cpm;
        this.cxm = cxm;
        this.lpm = lpm;
        this.componentFactoryResolver = componentFactoryResolver;
        this.styleLoader = styleLoader;
        this.http = http;
        this.cssHelper = cssHelper;
        this.attributeSerializer = attributeSerializer;
        this.formService = formService;
        this.panelsContextService = panelsContextService;
        this.asyncApiCallHelperSvc = asyncApiCallHelperSvc;
        this.crudDataHelperService = crudDataHelperService;
        this.entityDefinitionService = entityDefinitionService;
        this.ngZone = ngZone;
        this.persistService = persistService;
        this.stylizerService = stylizerService;
        this.classifyService = classifyService;
        this.fileService = fileService;
        this.authFacade = authFacade;
        this.paramEvaluatorService = paramEvaluatorService;
        this.renderer = renderer;
        this.iepm = iepm;
        this.ihpm = ihpm;
        this.resolvedContext = {};
        this.contextsChanged = [];
        this.persistenceEnabled = false;
        this.onInit$ = new Subject();
        this.afterViewInit$ = new Subject();
        this.afterContentInit$ = new Subject();
        this.renderLayout$ = new Subject();
        this.id$ = new BehaviorSubject(void 0);
        this.panelPage$ = new BehaviorSubject(void 0);
        this.nested$ = new BehaviorSubject(false);
        this.ancestory$ = new BehaviorSubject([]);
        this.contexts$ = new BehaviorSubject([]);
        this.instanceUniqueIdentity = v4_default();
        this.isStable = false;
        this.managedCssCache = "";
        this.managedClassesCache = {};
        this.filteredListeners = [];
        this.css$ = new BehaviorSubject({
            css: this.cssHelper.makeJsonNode(),
            classes: {}
        });
        this.cssSub = this.css$.subscribe(css => {
            if (this.nested$.value) {
                console.log("filtered css nested", css);
            }
            this.filteredCss = css;
        });
        this.listeners$ = new BehaviorSubject([]);
        this.listenersSub = this.listeners$.pipe(tap(listeners => {
            this.filteredListeners = listeners;
        })).subscribe();
        this.settingsFormArray = this.fb.array([]);
        this.pageForm = this.fb.group({
            /*name: this.fb.control(''),
            title: this.fb.control(''),
            derivativeId: this.fb.control(''),*/
            panels: this.fb.array([])
        });
        this.bridgeSub = this.pageForm.valueChanges.pipe(filter(() => this.nested$.value), debounceTime(500)).subscribe(v => {
            console.log("write page");
            console.log(v);
            this.settingsFormArray.clear();
            const newGroup = this.attributeSerializer.convertToGroup(this.attributeSerializer.serialize(v, "value").attributes[0]);
            this.settingsFormArray.push(newGroup);
            console.log(newGroup.value);
        });
        this.idOrPanelPageSub = combineLatest([this.id$, this.panelPage$]).pipe(distinctUntilChanged(), map(([id, panelPage]) => ({
            id,
            panelPage
        })), filter(({ id, panelPage }) => !!id || !!panelPage), switchMap(({ id, panelPage }) => iif(() => !id, of({
            panelPage
        }), new Observable(obs => {
            const metadata = this.entityDefinitionService.getDefinition("PanelPage").metadata;
            return this.crudDataHelperService.evaluateCollectionPlugins({
                query: `identity=${id}`,
                plugins: metadata.crud,
                op: "query"
            }).pipe(map(objects => objects && objects.length !== 0 ? objects[0] : void 0), tap(p => {
                obs.next({
                    panelPage: p
                });
                obs.complete();
            })).subscribe();
        }))), switchMap(({ panelPage }) => this.cpm.getPlugins(panelPage.panels.reduce((contentPlugins, c) => {
            c.panes.forEach(pane => {
                if (!contentPlugins.includes(pane.contentPlugin)) {
                    contentPlugins.push(pane.contentPlugin);
                }
            });
            return contentPlugins;
        }, [])).pipe(map(() => ({
            panelPage
        })))), switchMap(({ panelPage }) => iif(() => !this.nested$.value, 
        /*!this.nested ? this.panelsContextService.allActivePageContexts({ panelPage: p }).pipe(
          map(paneContexts => [p, isDynamic, paneContexts])
        ): of([p, isDynamic, []]),*/
        this.panelsContextService.allActivePageContexts({
            panelPage
        }).pipe(map(paneContexts => ({
            panelPage,
            contexts: Array.from(paneContexts)
        }))), of({
            panelPage,
            contexts: []
        }))), 
        /*switchMap(({ panelPage, isDynamic }) => this.panelsContextService.allActivePageContexts({ panelPage }).pipe(
          map(paneContexts => ({ panelPage, isDynamic, contexts: Array.from(paneContexts) }))
        )),*/
        tap(({ panelPage, contexts }) => {
            this.hookupFormChange({
                panelPage
            });
            this.populatePanelsFormArray({
                panelPage
            });
            this.panelPageCached = panelPage;
            this.persistenceEnabled = panelPage.persistence && panelPage.persistence.dataduct && panelPage.persistence.dataduct.plugin && panelPage.persistence.dataduct.plugin !== "";
            this.filteredListeners = panelPage.interactions && panelPage.interactions.interactions && panelPage.interactions.interactions.listeners ? panelPage.interactions.interactions.listeners : [];
            this.renderLayout$.next(panelPage);
            this.contexts$.next([...(panelPage.contexts ? panelPage.contexts.map(c => new InlineContext(c)) : []), ...contexts]);
            this.hookupCss({
                file: panelPage.cssFile ? panelPage.cssFile.trim() : void 0
            });
            console.log(`cached panel page: ${panelPage.id}`);
        })).subscribe();
        this.hookupContextSub = combineLatest(this.contexts$, 
        // this.nested$,
        this.afterContentInit$).pipe(
        // filter(([ _, nested ]) => !nested),
        map(([contexts]) => contexts), switchMap(contexts => this.inlineContextResolver.resolveMerged(contexts, `panelpage:${v4_default()}`).pipe(switchMap(resolvedContext => this.cxm.getPlugins().pipe(map(plugins => ({
            contexts,
            resolvedContext,
            globalPlugins: Array.from(plugins.values()).filter(p => p.global === true)
        })))), take(1))), tap(() => {
            if (this.resolveSub) {
                this.resolveSub.unsubscribe();
            }
        }), tap(({ contexts, resolvedContext, globalPlugins }) => {
            this.resolvedContext = resolvedContext;
            const short$ = new Subject();
            if (isPlatformServer(this.platformId)) {
                const interval = setInterval(() => {
                    if (_PanelPageComponent.registredContextListeners.size === 0) {
                        short$.next();
                        short$.complete();
                        clearInterval(interval);
                    }
                }, 1e3);
            }
            this.resolveSub = this.inlineContextResolver.resolveMergedSingle(contexts).pipe(skip(globalPlugins.length + (contexts ? contexts.length : 0)), tap(() => _PanelPageComponent.registredContextListeners.add(this.instanceUniqueIdentity)), tap(v => console.log("buffer", v)), bufferTime(1), tap(buffered => {
                if (buffered.length === 0) {
                    _PanelPageComponent.registredContextListeners.delete(this.instanceUniqueIdentity);
                }
            }), filter(buffered => buffered.length !== 0), tap(buffered => {
                this.contextsChanged = buffered.reduce((p, [cName, _]) => [...p, ...(p.includes(cName) ? [] : [cName])], []);
                this.resolvedContext = buffered.reduce((p, [cName, cValue]) => __spreadProps(__spreadValues({}, p), {
                    [cName]: cValue
                }), this.resolvedContext);
            }), tap(() => _PanelPageComponent.registredContextListeners.delete(this.instanceUniqueIdentity)), isPlatformServer(this.platformId) ? takeUntil(short$) : tap(() => { })).subscribe();
        })).subscribe();
        this.renderLayoutSub = combineLatest([this.renderLayout$, this.afterViewInit$]).pipe(delay(1), map(([panelPage]) => ({
            panelPage
        })), switchMap(({ panelPage }) => this.lpm.getPlugin(panelPage.layoutType).pipe(map(plugin => ({
            panelPage,
            plugin
        })))), tap(() => console.log("start render layout")), map(({ plugin, panelPage }) => ({
            panelPage,
            plugin,
            viewContainerRef: this.layoutRendererHost.viewContainerRef
        })), tap(({ viewContainerRef }) => viewContainerRef.clear()), map(({ plugin, viewContainerRef, panelPage }) => ({
            panelPage,
            layoutRendererRef: viewContainerRef.createComponent(plugin.renderer)
        })), tap(({ layoutRendererRef }) => this.layoutRendererRef = layoutRendererRef), tap(({ layoutRendererRef, panelPage }) => {
            layoutRendererRef.instance.renderPanelTpl = this.renderPanelTpl;
            layoutRendererRef.instance.panelPage = panelPage;
        }), tap(() => console.log("end render layout"))).subscribe();
        this.stylizerSub = this.afterViewInit$.pipe(
        //filter(() => false), // @tofo: Note ready for prime time just yet.
        filter(() => isPlatformBrowser(this.platformId)), tap(() => {
            this.stylizerService.stylize({
                targetNode: this.el.nativeElement
            });
        })).subscribe();
        this.classifySub = this.afterViewInit$.pipe(
        //filter(() => false), // @tofo: Note ready for prime time just yet.
        filter(() => isPlatformBrowser(this.platformId)), tap(() => {
            this.classifyService.classify({
                targetNode: this.el.nativeElement
            });
        })).subscribe();
        this.stylizerMutatedSub = !isPlatformBrowser(this.platformId) ? void 0 : this.stylizerService.mutated$.pipe(debounceTime(2e3), skip(1), switchMap(({ stylesheet }) => this.authFacade.getUser$.pipe(map(u => ({
            stylesheet,
            isAuthenticated: !!u
        }))
        // No sheath asset uploads are attempted unless user is at least authenticated.
        )), filter(({ isAuthenticated }) => isAuthenticated), tap(({ stylesheet }) => {
            console.log("merged css", stylesheet);
        }), filter(() => !!this.panelPageCached && !!this.panelPageCached.id), 
        // filter(() => false), // @tofo: Note ready for prime time just yet.
        switchMap(({ stylesheet }) => this.isStable ? of({
            stylesheet
        }) : this.ngZone.onStable.asObservable().pipe(map(() => ({
            stylesheet
        })), take(1))), map(({ stylesheet }) => ({
            stylesheet: (this.managedCssCache && this.managedCssCache.trim() !== "" ? this.managedCssCache + "\n" : "") + stylesheet
        })), concatMap(({ stylesheet }) => this.fileService.bulkUpload({
            nocache: true,
            files: [new File([stylesheet], `panelpage__${this.panelPageCached.id}.css`)],
            fileNameOverride: `panelpage__${this.panelPageCached.id}.css`
        })), tap(() => {
            console.log("stylesheet saved.");
        })).subscribe();
        this.classifyMutatedSub = !isPlatformBrowser(this.platformId) ? void 0 : this.classifyService.mutated$.pipe(debounceTime(2e3), skip(1), switchMap(({ classes }) => this.authFacade.getUser$.pipe(
        // No sheath asset uploads are attempted unless user is at least authenticated.
        map(u => ({
            classes,
            isAuthenticated: !!u
        })))), filter(({ isAuthenticated }) => isAuthenticated), tap(({ classes }) => {
            console.log("merged classes", classes);
        }), filter(() => !!this.panelPageCached && !!this.panelPageCached.id), 
        // filter(() => false), // @tofo: Note ready for prime time just yet.
        switchMap(({ classes }) => this.isStable ? of({
            classes
        }) : this.ngZone.onStable.asObservable().pipe(map(() => ({
            classes
        })), take(1))), map(({ classes }) => ({
            classes: Array.from(classes.keys()).reduce((p, k) => __spreadProps(__spreadValues({}, p), {
                [k]: Array.from(classes.get(k).keys()).filter(k2 => classes.get(k).get(k2) !== ClassClassification.KEEP).reduce((p2, k2) => __spreadProps(__spreadValues({}, p2), {
                    [k2]: classes.get(k).get(k2)
                }), {})
            }), {})
        })), map(({ classes }) => ({
            classes: merge(this.managedClassesCache, classes)
        })), map(({ classes }) => ({
            json: JSON.stringify(classes)
        })), concatMap(({ json }) => this.fileService.bulkUpload({
            nocache: true,
            files: [new File([json], `panelpage__${this.panelPageCached.id}__classes.json`)],
            fileNameOverride: `panelpage__${this.panelPageCached.id}__classes.json`
        })), tap(() => {
            console.log("classes saved.");
        })).subscribe();
        this.onStableSub = this.ngZone.onStable.asObservable().pipe(tap(() => this.isStable = true)).subscribe();
        this.onUnstableSub = this.ngZone.onUnstable.asObservable().pipe(tap(() => this.isStable = false)).subscribe();
        this.wireListenersSub = combineLatest([this.listeners$, this.renderLayout$, this.afterContentInit$]).pipe(delay(1), switchMap(() => forkJoin(this.filteredListeners.map(l => of({}).pipe(map(() => ({
            paramNames: l.event.settings.paramsString ? l.event.settings.paramsString.split("&").filter(v => v.indexOf("=:") !== -1).map(v => v.split("=", 2)[1].substr(1)) : []
        })), switchMap(({ paramNames }) => this.paramEvaluatorService.paramValues(l.event.settings.params.reduce((p, c, i) => new Map([...p, [paramNames[i], c]]), /* @__PURE__ */ new Map())).pipe(map(params => Array.from(params).reduce((p, [k, v]) => __spreadProps(__spreadValues({}, p), {
            [k]: v
        }), {})))), defaultIfEmpty([]))))), switchMap(listenerParams => this.iepm.getPlugin("dom").pipe(map(p => ({
            p,
            listenerParams
        })))), switchMap(({ p, listenerParams }) => p.connect({
            filteredListeners: this.filteredListeners,
            listenerParams,
            renderer: this.renderer,
            callback: ({ handlerParams, plugin, index, evt }) => {
                this.ihpm.getPlugin(plugin).pipe(tap(p2 => {
                    p2.handle({
                        handlerParams,
                        plugin,
                        index,
                        listener: this.filteredListeners[index],
                        evt,
                        renderer: this.renderer,
                        panelPageComponent: this
                    });
                })).subscribe();
            }
        })), tap(listenerParams => {
            console.log("listener info", this.filteredListeners, listenerParams);
        })).subscribe();
        this.onTouched = () => { };
        this.panelPageService = es.getEntityCollectionService("PanelPage");
        this.panelPageFormService = es.getEntityCollectionService("PanelPageForm");
        this.panelPageStateService = es.getEntityCollectionService("PanelPageState");
    }
    ngOnInit() {
        this.onInit$.next(void 0);
    }
    ngAfterViewInit() {
        this.afterViewInit$.next(void 0);
    }
    ngAfterContentInit() {
        this.afterContentInit$.next(void 0);
    }
    ngOnDestroy() {
        _PanelPageComponent.registredContextListeners.delete(this.instanceUniqueIdentity);
    }
    populatePanelsFormArray({ panelPage }) {
        this.panelsArray.clear();
        panelPage.panels.forEach(() => {
            this.panelsArray.push(this.fb.control(""));
        });
    }
    hookupFormChange({ panelPage }) {
        combineLatest([this.pageForm.valueChanges, this.pageForm.statusChanges]).pipe(debounceTime(100), filter(([_, s]) => panelPage !== void 0 && panelPage.displayType === "form" && s !== "PENDING")
        // we only update on valid and invalid states not inbetween
        ).subscribe(([v]) => {
            const valid = this.pageForm.valid;
            const persistence = this.panelPageCached.persistence ? this.panelPageCached.persistence : void 0;
            const form = new PanelPageForm(__spreadProps(__spreadValues({}, v), {
                name: panelPage.name,
                title: panelPage.title,
                derivativeId: panelPage.id,
                persistence,
                valid
            }));
            this.pageBuilderFacade.setForm(panelPage.name, form);
        });
    }
    hookupCss({ file }) {
        forkJoin([
            /*this.http.get<cssJson.JSONNode>(file).pipe(
              catchError(() => of(undefined)),
              defaultIfEmpty(undefined)
            ),*/
            of(void 0),
            // Disable this for now since 400s have negative impact on page scoring
            /*this.panelPageCached.id ? this.http.get<cssJson.JSONNode>(`${this.mediaSettings.imageUrl}/media/panelpage__${this.panelPageCached.id}.css.json`).pipe(
              catchError(() => of(undefined)),
              defaultIfEmpty(undefined)
            ) : of(undefined),*/
            of(void 0),
            // Disable this for now since 400s have negative impact on page scoring
            /*
            this.panelPageCached.id ? this.http.get<cssJson.JSONNode>(`${this.mediaSettings.imageUrl}/media/panelpage__${this.panelPageCached.id}.css`).pipe(
              catchError(() => of(undefined)),
              defaultIfEmpty(undefined)
            ) : of(undefined),*/
            of(void 0), this.panelPageCached.id ? this.http.get(`${this.mediaSettings.imageUrl}/media/panelpage__${this.panelPageCached.id}__classes.json`).pipe(catchError(() => of(void 0)), defaultIfEmpty(void 0)) : of(void 0)
        ]).pipe(tap(([cssFile, managedCss, managedCssRaw, classes]) => {
            console.log("fetched managed panelpage css and class files");
            let css = {};
            this.managedCssCache = "";
            this.managedClassesCache = classes;
            if (cssFile) {
                css = merge(css, cssFile);
            }
            if (managedCss) {
                this.managedCssCache = managedCssRaw;
                css = merge(css, managedCss);
            }
            this.filteredCss = {
                css,
                classes
            };
        })).subscribe();
    }
    submit() {
        if (this.pageForm.valid) {
            const panelPageForm = new PanelPageForm(__spreadValues({}, this.pageForm.value));
            const data = this.formService.serializeForm(panelPageForm);
            console.log(panelPageForm);
            console.log(this.formService.serializeForm(panelPageForm));
            console.log("form data", data);
            this.persistService.persist({
                data,
                persistence: this.panelPageCached.persistence
            }).subscribe(() => {
                console.log("persisted data");
            });
            ;
        }
        else {
            console.log("detected form invalid");
        }
    }
    writeValue(val) {
        if (val) {
            this.settingsFormArray.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.settingsFormArray.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.settingsFormArray.disable();
        }
        else {
            this.settingsFormArray.enable();
        }
    }
    validate(c) {
        return this.pageForm.statusChanges.pipe(startWith(this.pageForm.status), 
        // start with the current form status
        filter(status => status !== "PENDING"), debounceTime(1), take(1), 
        // We only want one emit after status changes from PENDING
        map(status => {
            return this.pageForm.valid ? null : {
                invalidForm: {
                    valid: false,
                    message: "content is invalid"
                }
            };
        }));
    }
    static {
        this.ɵfac = function PanelPageComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelPageComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(MEDIA_SETTINGS), i0.ɵɵdirectiveInject(i8.Store), i0.ɵɵdirectiveInject(i2.UntypedFormBuilder), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i9.InlineContextResolverService), i0.ɵɵdirectiveInject(i1.PageBuilderFacade), i0.ɵɵdirectiveInject(i3.ContentPluginManager), i0.ɵɵdirectiveInject(i9.ContextPluginManager), i0.ɵɵdirectiveInject(i10.LayoutPluginManager), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i11.StyleLoaderService), i0.ɵɵdirectiveInject(i12.HttpClient), i0.ɵɵdirectiveInject(i1.CssHelperService), i0.ɵɵdirectiveInject(i13.AttributeSerializerService), i0.ɵɵdirectiveInject(i1.FormService), i0.ɵɵdirectiveInject(i1.PanelsContextService), i0.ɵɵdirectiveInject(i11.AsyncApiCallHelperService), i0.ɵɵdirectiveInject(i14.CrudDataHelperService), i0.ɵɵdirectiveInject(i5.EntityDefinitionService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i15.PersistService), i0.ɵɵdirectiveInject(i16.StylizerService), i0.ɵɵdirectiveInject(i16.ClassifyService), i0.ɵɵdirectiveInject(i17.FilesService), i0.ɵɵdirectiveInject(i18.AuthFacade), i0.ɵɵdirectiveInject(i4.ParamEvaluatorService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i19.InteractionEventPluginManager), i0.ɵɵdirectiveInject(i19.InteractionHandlerPluginManager), i0.ɵɵdirectiveInject(i5.EntityServices));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _PanelPageComponent,
            selectors: [["classifieds-ui-panel-page"]],
            viewQuery: function PanelPageComponent_Query(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵviewQuery(GridLayoutComponent, 5);
                    i0.ɵɵviewQuery(_c1, 7);
                    i0.ɵɵviewQuery(LayoutRendererHostDirective, 5);
                    i0.ɵɵviewQuery(RenderPanelComponent, 5);
                }
                if (rf & 2) {
                    let _t;
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridLayout = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.renderPanelTpl = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.layoutRendererHost = _t.first);
                    i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.renderedPanels = _t);
                }
            },
            hostVars: 2,
            hostBindings: function PanelPageComponent_HostBindings(rf, ctx) {
                if (rf & 2) {
                    i0.ɵɵclassProp("panel-page", true);
                }
            },
            inputs: {
                id: "id",
                panelPage: "panelPage",
                nested: "nested",
                contexts: "contexts",
                ancestory: "ancestory",
                css: "css",
                listeners: "listeners",
                resolvedContext: "resolvedContext"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _PanelPageComponent),
                        multi: true
                    },
                    /*{
                      provide: NG_VALIDATORS,
                      useExisting: forwardRef(() => PanelPageComponent),
                      multi: true
                    },*/
                    {
                        provide: NG_ASYNC_VALIDATORS,
                        useExisting: forwardRef(() => _PanelPageComponent),
                        multi: true
                    }])],
            decls: 5,
            vars: 1,
            consts: [["renderPanelTpl", ""], [3, "formGroup"], ["classifiedsUiLayoutRendererHost", ""], ["formArrayName", "panels"], [3, "formControlName", "panel", "nested", "contexts", "resolvedContext", "contextsChanged", "displayType", "indexPosition", "css", "listeners", "ancestory"]],
            template: function PanelPageComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 1);
                    i0.ɵɵelementContainerStart(1);
                    i0.ɵɵtemplate(2, PanelPageComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
                    i0.ɵɵelementContainerEnd();
                    i0.ɵɵelementEnd();
                    i0.ɵɵtemplate(3, PanelPageComponent_ng_template_3_Template, 3, 12, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.pageForm);
                }
            },
            dependencies: [i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i2.FormArrayName, RenderPanelComponent, LayoutRendererHostDirective],
            styles: ["[_nghost-%COMP%]     gridster{background-color:#fff}[_nghost-%COMP%]     gridster-item{background-color:#fff}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelPageComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-panel-page",
                    host: {
                        "[class.panel-page]": "true"
                    },
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PanelPageComponent),
                            multi: true
                        },
                        /*{
                          provide: NG_VALIDATORS,
                          useExisting: forwardRef(() => PanelPageComponent),
                          multi: true
                        },*/
                        {
                            provide: NG_ASYNC_VALIDATORS,
                            useExisting: forwardRef(() => PanelPageComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '\n<div [formGroup]="pageForm">\n  <ng-container><ng-template classifiedsUiLayoutRendererHost></ng-template></ng-container>\n</div>\n\n<!-- <button *ngIf="persistenceEnabled" type="button" (click)="submit()">Submit</button> -->\n\n<ng-template #renderPanelTpl let-i="i">\n  <ng-container [formGroup]="pageForm">\n    <ng-container formArrayName="panels">\n      <classifieds-ui-render-panel [formControlName]="i" [panel]="panelPageCached.panels[i]" [nested]="nested$.value" [contexts]="contexts$.value" [resolvedContext]="resolvedContext" [contextsChanged]="contextsChanged" [displayType]="panelPageCached.displayType" [indexPosition]="i" [css]="filteredCss" [listeners]="filteredListeners" [ancestory]="ancestory$.value"></classifieds-ui-render-panel>\n    </ng-container>\n  </ng-container>\n</ng-template>\n',
                    styles: [":host ::ng-deep gridster{background-color:#fff}:host ::ng-deep gridster-item{background-color:#fff}\n"]
                }]
        }], () => [{
            type: Object,
            decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }]
        }, {
            type: i17.MediaSettings,
            decorators: [{
                    type: Inject,
                    args: [MEDIA_SETTINGS]
                }]
        }, {
            type: i8.Store
        }, {
            type: i2.UntypedFormBuilder
        }, {
            type: i0.ElementRef
        }, {
            type: i9.InlineContextResolverService
        }, {
            type: i1.PageBuilderFacade
        }, {
            type: i3.ContentPluginManager
        }, {
            type: i9.ContextPluginManager
        }, {
            type: i10.LayoutPluginManager
        }, {
            type: i0.ComponentFactoryResolver
        }, {
            type: i11.StyleLoaderService
        }, {
            type: i12.HttpClient
        }, {
            type: i1.CssHelperService
        }, {
            type: i13.AttributeSerializerService
        }, {
            type: i1.FormService
        }, {
            type: i1.PanelsContextService
        }, {
            type: i11.AsyncApiCallHelperService
        }, {
            type: i14.CrudDataHelperService
        }, {
            type: i5.EntityDefinitionService
        }, {
            type: i0.NgZone
        }, {
            type: i15.PersistService
        }, {
            type: i16.StylizerService
        }, {
            type: i16.ClassifyService
        }, {
            type: i17.FilesService
        }, {
            type: i18.AuthFacade
        }, {
            type: i4.ParamEvaluatorService
        }, {
            type: i0.Renderer2
        }, {
            type: i19.InteractionEventPluginManager
        }, {
            type: i19.InteractionHandlerPluginManager
        }, {
            type: i5.EntityServices
        }], {
        id: [{
                type: Input
            }],
        panelPage: [{
                type: Input
            }],
        nested: [{
                type: Input
            }],
        contexts: [{
                type: Input
            }],
        ancestory: [{
                type: Input
            }],
        css: [{
                type: Input
            }],
        listeners: [{
                type: Input
            }],
        resolvedContext: [{
                type: Input
            }],
        gridLayout: [{
                type: ViewChild,
                args: [GridLayoutComponent, {
                        static: false
                    }]
            }],
        renderPanelTpl: [{
                type: ViewChild,
                args: ["renderPanelTpl", {
                        static: true
                    }]
            }],
        layoutRendererHost: [{
                type: ViewChild,
                args: [LayoutRendererHostDirective, {
                        static: false
                    }]
            }],
        renderedPanels: [{
                type: ViewChildren,
                args: [RenderPanelComponent]
            }]
    });
})();
var EmptyLayoutComponent = class _EmptyLayoutComponent {
    static {
        this.ɵfac = function EmptyLayoutComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _EmptyLayoutComponent)();
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _EmptyLayoutComponent,
            selectors: [["classifieds-ui-empty-layout"]],
            standalone: false,
            decls: 1,
            vars: 0,
            template: function EmptyLayoutComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵtext(0, "empty layout content");
                }
            },
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmptyLayoutComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-empty-layout",
                    template: `empty layout content`,
                    standalone: false
                }]
        }], null, null);
})();
var RenderDialogComponent = class _RenderDialogComponent {
    constructor(data, dialog) {
        this.dialog = dialog;
        this.panelPageId = data.panelPageId || "";
    }
    // Method to close the dialog
    onClose() {
        this.dialog.closeAll();
    }
    static {
        this.ɵfac = function RenderDialogComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _RenderDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1$1.MatDialog));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _RenderDialogComponent,
            selectors: [["quell-render-dialog"]],
            standalone: false,
            decls: 7,
            vars: 1,
            consts: [["mat-dialog-title", ""], [3, "id"], ["mat-button", "", 3, "click"]],
            template: function RenderDialogComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "h2", 0);
                    i0.ɵɵtext(1, "Panel Page");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(2, "mat-dialog-content");
                    i0.ɵɵelement(3, "classifieds-ui-panel-page", 1);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(4, "mat-dialog-actions")(5, "button", 2);
                    i0.ɵɵlistener("click", function RenderDialogComponent_Template_button_click_5_listener() {
                        return ctx.onClose();
                    });
                    i0.ɵɵtext(6, "Close");
                    i0.ɵɵelementEnd()();
                }
                if (rf & 2) {
                    i0.ɵɵadvance(3);
                    i0.ɵɵproperty("id", ctx.panelPageId);
                }
            },
            dependencies: [i2$1.MatButton, i1$1.MatDialogTitle, i1$1.MatDialogActions, i1$1.MatDialogContent, PanelPageComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RenderDialogComponent, [{
            type: Component,
            args: [{
                    selector: "quell-render-dialog",
                    standalone: false,
                    template: '<h2 mat-dialog-title>Panel Page</h2>\n<mat-dialog-content>\n    <classifieds-ui-panel-page [id]="panelPageId"></classifieds-ui-panel-page>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button (click)="onClose()">Close</button>\n</mat-dialog-actions>'
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }]
        }, {
            type: i1$1.MatDialog
        }], null);
})();
var formThrottleMap = /* @__PURE__ */ new Map();
var formProcessingMap = /* @__PURE__ */ new Map();
var interationHandlerFormSubmit = ({ pageBuilderFacade, formService, persistService, transversePanelpageComponentSvc }) => {
    return new InteractionHandlerPlugin({
        id: "panels_form_submit",
        title: "Submit Panels Form",
        handle: ({ handlerParams, panelPageComponent }) => {
            const formName = handlerParams?.name;
            if (!formName) {
                console.log("No form name provided. Ignoring submission request.");
                return;
            }
            if (formProcessingMap.get(formName)) {
                console.log(`Form submission is already being processed for: ${formName}`);
                return;
            }
            if (formThrottleMap.get(formName)) {
                console.log(`Form submission for ${formName} is throttled. Try again later.`);
                return;
            }
            formProcessingMap.set(formName, true);
            console.log(`Processing form submission for: ${formName}`);
            pageBuilderFacade.getForm$(formName).pipe(take(1), 
            // Take a single form at a time
            tap(panelPageForm => {
                if (!panelPageForm) {
                    console.log(`Form ${formName} not found.`);
                    return;
                }
                if (panelPageForm.valid) {
                    const data = formService.serializeForm(panelPageForm);
                    console.log("Panel Page Form Data:", data);
                    persistService.persist({
                        data,
                        persistence: panelPageForm.persistence
                    }).subscribe({
                        next: () => {
                            console.log("Form Submitted successfully:", formName);
                            alert("Form Submitted");
                        },
                        error: err => {
                            console.error("Error persisting form: ", err);
                        },
                        complete: () => {
                            console.log("Form submission complete for:", formName);
                        }
                    });
                }
                else {
                    transversePanelpageComponentSvc.traverseAndVisit(panelPageComponent, component => {
                        if (component instanceof RenderPaneComponent && component.componentRef && component.componentRef.instance && component.componentRef.instance.markAsTouched) {
                            component.componentRef.instance.markAsTouched();
                        }
                        else { }
                    });
                    console.log("Form is invalid or unavailable. Skipping processing for:", formName);
                }
            }), finalize(() => {
                formProcessingMap.delete(formName);
                formThrottleMap.set(formName, true);
                timer(2e3).subscribe(() => {
                    formThrottleMap.delete(formName);
                });
                console.log(`Throttle applied for form: ${formName}`);
            })).subscribe({
                error: err => {
                    console.error(`Error occurred during form submission for ${formName}:`, err);
                    formProcessingMap.delete(formName);
                    formThrottleMap.delete(formName);
                }
            });
        }
    });
};
var interationHandlerDialog = ({ dialog }) => {
    return new InteractionHandlerPlugin({
        id: "panels_dialog",
        title: "Open Panels Dialog",
        handle: ({ handlerParams }) => {
            const panelPageId = handlerParams?.panelPageId || "";
            const dialogTitle = handlerParams?.title || "Panel Page";
            const dialogWidth = handlerParams?.width || "800px";
            if (!panelPageId) {
                console.error("No Panel Page ID provided. Cannot open dialog.");
                return;
            }
            dialog.open(RenderDialogComponent, {
                width: dialogWidth,
                // Use dynamic or default width
                data: {
                    panelPageId,
                    // Pass the panel page ID
                    title: dialogTitle
                    // Pass the title
                }
            });
        }
    });
};
var TransversePanelPageComponentService = class _TransversePanelPageComponentService {
    /**
     * Recursively traverses the hierarchy of the panel page components.
     *
     * @param component - The starting component to transverse (can be PanelPageComponent, RenderPanelComponent, or RenderPaneComponent).
     * @param visitorFn - A visitor function that will be called for each component visited in the hierarchy.
     */
    traverseAndVisit(component, visitorFn) {
        if (!component) {
            return;
        }
        visitorFn(component);
        if (component instanceof PanelPageComponent) {
            component.renderedPanels.forEach(renderPanelComponent => {
                this.traverseAndVisit(renderPanelComponent, visitorFn);
            });
        }
        else if (component instanceof RenderPanelComponent) {
            component.renderedPanes.forEach(renderPaneComponent => {
                this.traverseAndVisit(renderPaneComponent, visitorFn);
            });
        }
        else if (component instanceof RenderPaneComponent) {
            if (component.panelPageComponent) {
                this.traverseAndVisit(component.panelPageComponent, visitorFn);
            }
        }
    }
    static {
        this.ɵfac = function TransversePanelPageComponentService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _TransversePanelPageComponentService)();
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _TransversePanelPageComponentService,
            factory: _TransversePanelPageComponentService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TransversePanelPageComponentService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var RenderModule = class _RenderModule {
    constructor(ihpm, pageBuilderFacade, formService, persistService, dialog, transversePanelpageComponentSvc) {
        ihpm.register(interationHandlerFormSubmit({
            pageBuilderFacade,
            formService,
            persistService,
            transversePanelpageComponentSvc
        }));
        ihpm.register(interationHandlerDialog({
            dialog
        }));
    }
    static {
        this.ɵfac = function RenderModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _RenderModule)(i0.ɵɵinject(i19.InteractionHandlerPluginManager), i0.ɵɵinject(i1.PageBuilderFacade), i0.ɵɵinject(i1.FormService), i0.ɵɵinject(i15.PersistService), i0.ɵɵinject(i1$1.MatDialog), i0.ɵɵinject(TransversePanelPageComponentService));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _RenderModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule,
                // HttpClientModule,
                FormsModule, UtilsModule, ReactiveFormsModule, PanelsModule, LayoutModule, MaterialModule
                // PanelpageModule
            ]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RenderModule, [{
            type: NgModule,
            args: [{
                    declarations: [PaneContentHostDirective, EmptyLayoutComponent, RenderPanelComponent, RenderPaneComponent, LayoutRendererHostDirective, PanelPageComponent, RenderDialogComponent],
                    imports: [CommonModule,
                        // HttpClientModule,
                        FormsModule, UtilsModule, ReactiveFormsModule, PanelsModule, LayoutModule, MaterialModule
                        // PanelpageModule
                    ],
                    exports: [RenderPanelComponent, RenderPaneComponent, PanelPageComponent, EmptyLayoutComponent]
                }]
        }], () => [{
            type: i19.InteractionHandlerPluginManager
        }, {
            type: i1.PageBuilderFacade
        }, {
            type: i1.FormService
        }, {
            type: i15.PersistService
        }, {
            type: i1$1.MatDialog
        }, {
            type: TransversePanelPageComponentService
        }], null);
})();
export { EmptyLayoutComponent, PanelPageComponent, RenderModule, RenderPaneComponent, RenderPanelComponent, TransversePanelPageComponentService };
