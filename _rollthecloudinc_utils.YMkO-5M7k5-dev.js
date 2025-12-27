import "@nf-internal/chunk-BSWOS4VH";
import { Observable, of } from "@nf-internal/chunk-4WPE7WTU";
import "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/utils/fesm2022/rollthecloudinc-utils.mjs
import * as i0 from "@angular/core";
import { Pipe, InjectionToken, EventEmitter, Input, Output, Inject, Component, Directive, NgModule, Injectable, DOCUMENT } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as numberString from "number-string";
var NumeralPipe = class _NumeralPipe {
    transform(value, format) {
        if (value === void 0 || value === "") {
            return;
        }
        return numberString.toNumber(`${value}`);
    }
    static {
        this.ɵfac = function NumeralPipe_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _NumeralPipe)();
        };
    }
    static {
        this.ɵpipe = /* @__PURE__ */ i0.ɵɵdefinePipe({
            name: "numeral",
            type: _NumeralPipe,
            pure: true,
            standalone: false
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumeralPipe, [{
            type: Pipe,
            args: [{
                    name: "numeral",
                    standalone: false
                }]
        }], null, null);
})();
var NotAvailablePipe = class _NotAvailablePipe {
    transform(value, defaultValue) {
        return !value || value === "" ? defaultValue : value;
    }
    static {
        this.ɵfac = function NotAvailablePipe_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _NotAvailablePipe)();
        };
    }
    static {
        this.ɵpipe = /* @__PURE__ */ i0.ɵɵdefinePipe({
            name: "na",
            type: _NotAvailablePipe,
            pure: true,
            standalone: false
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotAvailablePipe, [{
            type: Pipe,
            args: [{
                    name: "na",
                    standalone: false
                }]
        }], null, null);
})();
var EMBEDDABLE_COMPONENT = new InjectionToken("EmbeddableComponent");
var SITE_NAME = new InjectionToken("Site Name");
var HOST_NAME = new InjectionToken("Host Name");
var PROTOCOL = new InjectionToken("Request Protocol");
var DynamicContentViewer = class _DynamicContentViewer {
    constructor(componentFactoryResolver, elementRef, embeddedComponents, injector) {
        this.injector = injector;
        this.embeddedComponentFactories = /* @__PURE__ */ new Map();
        this.embeddedComponents = [];
        this.docRendered = new EventEmitter();
        this.hostElement = elementRef.nativeElement;
        embeddedComponents.forEach(component => {
            const factory = componentFactoryResolver.resolveComponentFactory(component);
            this.embeddedComponentFactories.set(factory.selector, factory);
        });
    }
    set content(content) {
        this.ngOnDestroy();
        if (content) {
            this.build(content);
            this.docRendered.emit();
        }
    }
    build(content) {
        this.hostElement.innerHTML = content || "";
        if (!content) {
            return;
        }
        this.embeddedComponentFactories.forEach((factory, selector) => {
            const embeddedComponentElements = this.hostElement.querySelectorAll(selector);
            embeddedComponentElements.forEach(element => {
                const projectableNodes = [Array.prototype.slice.call(element.childNodes)];
                const embeddedComponent = factory.create(this.injector, projectableNodes, element);
                for (const attr of element.attributes) {
                    embeddedComponent.instance[attr.nodeName] = attr.nodeValue;
                }
                this.embeddedComponents.push(embeddedComponent);
            });
        });
    }
    ngDoCheck() {
        this.embeddedComponents.forEach(comp => comp.changeDetectorRef.detectChanges());
    }
    ngOnDestroy() {
        this.embeddedComponents.forEach(comp => comp.destroy());
        this.embeddedComponents.length = 0;
    }
    static {
        this.ɵfac = function DynamicContentViewer_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DynamicContentViewer)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(EMBEDDABLE_COMPONENT), i0.ɵɵdirectiveInject(i0.Injector));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _DynamicContentViewer,
            selectors: [["classifieds-ui-dynamic-content-viewer"]],
            inputs: {
                data: "data",
                content: "content"
            },
            outputs: {
                docRendered: "docRendered"
            },
            standalone: false,
            decls: 0,
            vars: 0,
            template: function DynamicContentViewer_Template(rf, ctx) { },
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicContentViewer, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-dynamic-content-viewer",
                    template: "",
                    standalone: false
                }]
        }], () => [{
            type: i0.ComponentFactoryResolver
        }, {
            type: i0.ElementRef
        }, {
            type: Array,
            decorators: [{
                    type: Inject,
                    args: [EMBEDDABLE_COMPONENT]
                }]
        }, {
            type: i0.Injector
        }], {
        data: [{
                type: Input
            }],
        docRendered: [{
                type: Output
            }],
        content: [{
                type: Input
            }]
    });
})();
var Context = class {
    constructor(index, length) {
        this.index = index;
        this.length = length;
    }
    get even() {
        return this.index % 2 === 0;
    }
    get odd() {
        return this.index % 2 === 1;
    }
    get first() {
        return this.index === 0;
    }
    get last() {
        return this.index === this.length - 1;
    }
};
var ForDirective = class _ForDirective {
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    set loop(num) {
        this.viewContainer.clear();
        for (var i = 0; i < num; i++)
            this.viewContainer.createEmbeddedView(this.templateRef, new Context(i, num));
    }
    static {
        this.ɵfac = function ForDirective_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ForDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef));
        };
    }
    static {
        this.ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
            type: _ForDirective,
            selectors: [["", "for", "", 5, "label"]],
            inputs: {
                loop: [0, "for", "loop"]
            },
            standalone: false
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForDirective, [{
            type: Directive,
            args: [{
                    selector: "[for]:not(label)",
                    standalone: false
                }]
        }], () => [{
            type: i0.TemplateRef
        }, {
            type: i0.ViewContainerRef
        }], {
        loop: [{
                type: Input,
                args: ["for"]
            }]
    });
})();
var UtilsModule = class _UtilsModule {
    static {
        this.ɵfac = function UtilsModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _UtilsModule)();
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _UtilsModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UtilsModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [NumeralPipe, NotAvailablePipe, DynamicContentViewer, ForDirective],
                    exports: [NumeralPipe, NotAvailablePipe, DynamicContentViewer, ForDirective]
                }]
        }], null, null);
})();
var ModuleLoaderService = class _ModuleLoaderService {
    constructor(compiler, injector) {
        this.compiler = compiler;
        this.injector = injector;
        this.loadedModules = [];
    }
    loadModule(module) {
        return new Observable(obs => {
            module().then(m => {
                if (this.loadedModules.indexOf(name => name == m.name) !== -1) {
                    throw "";
                }
                else {
                    this.loadedModules.push(m.name);
                    return m;
                }
            }).then(m => this.compiler.compileModuleAndAllComponentsAsync(m)).then(mf => {
                const moduleRef = mf.ngModuleFactory.create(this.injector);
                obs.next(true);
                obs.complete();
            }).catch(() => {
                obs.next(true);
                obs.complete();
            });
        });
    }
    static {
        this.ɵfac = function ModuleLoaderService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ModuleLoaderService)(i0.ɵɵinject(i0.Compiler), i0.ɵɵinject(i0.Injector));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _ModuleLoaderService,
            factory: _ModuleLoaderService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleLoaderService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i0.Compiler
        }, {
            type: i0.Injector
        }], null);
})();
var StyleLoaderService = class _StyleLoaderService {
    constructor(document) {
        this.document = document;
    }
    loadStyle(styleName) {
        const head = this.document.getElementsByTagName("head")[0];
        let themeLink = this.document.getElementById("client-theme");
        if (themeLink) {
            themeLink.href = styleName;
        }
        else {
            const style = this.document.createElement("link");
            style.id = "client-theme";
            style.rel = "stylesheet";
            style.href = `${styleName}`;
            head.appendChild(style);
        }
    }
    static {
        this.ɵfac = function StyleLoaderService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _StyleLoaderService)(i0.ɵɵinject(DOCUMENT));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _StyleLoaderService,
            factory: _StyleLoaderService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleLoaderService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: Document,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }], null);
})();
var NoopDataService = class {
    constructor(name) {
        this.entities = /* @__PURE__ */ new Map();
        this.name = name;
    }
    add(entity) {
        return of(entity);
    }
    delete(id) {
        this.entities.delete(id);
        return of(id);
    }
    getAll() {
        const flat = [];
        this.entities.forEach(v => {
            flat.push(v);
        });
        return of(flat);
    }
    getById(id) {
        return of(this.entities.get(id));
    }
    getWithQuery(params) {
        const flat = [];
        this.entities.forEach(v => {
            flat.push(v);
        });
        return of(flat);
    }
    update(update) {
        return of(void 0);
    }
    upsert(entity) {
        return of(entity);
    }
};
var AsyncApiCallHelperService = class _AsyncApiCallHelperService {
    constructor() {
        this.taskProcessor = new MyAsyncTaskProcessor();
    }
    doTask(promise) {
        return this.taskProcessor.doTask(promise);
    }
    static {
        this.ɵfac = function AsyncApiCallHelperService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AsyncApiCallHelperService)();
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _AsyncApiCallHelperService,
            factory: _AsyncApiCallHelperService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AsyncApiCallHelperService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var ZoneMacroTaskWrapper = class {
    wrap(request) {
        return new Observable(observer => {
            let task;
            let scheduled = false;
            let sub = null;
            let savedResult = null;
            let savedError = null;
            const scheduleTask = _task2 => {
                task = _task2;
                scheduled = true;
                const delegate = this.delegate(request);
                sub = delegate.subscribe(res => savedResult = res, err => {
                    if (!scheduled) {
                        throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug.");
                    }
                    savedError = err;
                    scheduled = false;
                    task.invoke();
                }, () => {
                    if (!scheduled) {
                        throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug.");
                    }
                    scheduled = false;
                    task.invoke();
                });
            };
            const cancelTask = _task2 => {
                if (!scheduled) {
                    return;
                }
                scheduled = false;
                if (sub) {
                    sub.unsubscribe();
                    sub = null;
                }
            };
            const onComplete = () => {
                if (savedError !== null) {
                    observer.error(savedError);
                }
                else {
                    observer.next(savedResult);
                    observer.complete();
                }
            };
            const _task = Zone.current.scheduleMacroTask("ZoneMacroTaskWrapper.subscribe", onComplete, {}, () => null, cancelTask);
            scheduleTask(_task);
            return () => {
                if (scheduled && task) {
                    task.zone.cancelTask(task);
                    scheduled = false;
                }
                if (sub) {
                    sub.unsubscribe();
                    sub = null;
                }
            };
        });
    }
};
var MyAsyncTaskProcessor = class extends ZoneMacroTaskWrapper {
    constructor() {
        super();
    }
    // your public task invocation method signature
    doTask(request) {
        return this.wrap(request);
    }
    // delegated raw implementation that will be called by ZoneMacroTaskWrapper
    delegate(request) {
        return new Observable(observer => {
            request.then(result => {
                observer.next(result);
                observer.complete();
            }).catch(error => observer.error(error));
        });
    }
};
export { AsyncApiCallHelperService, DynamicContentViewer, EMBEDDABLE_COMPONENT, ForDirective, HOST_NAME, ModuleLoaderService, MyAsyncTaskProcessor, NoopDataService, NotAvailablePipe, NumeralPipe, PROTOCOL, SITE_NAME, StyleLoaderService, UtilsModule, ZoneMacroTaskWrapper };
