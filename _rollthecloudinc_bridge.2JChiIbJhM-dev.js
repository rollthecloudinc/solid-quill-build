import "@nf-internal/chunk-BSWOS4VH";
import { of } from "@nf-internal/chunk-4WPE7WTU";
import "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/bridge/fesm2022/rollthecloudinc-bridge.mjs
import * as i0 from "@angular/core";
import { Injectable, provideAppInitializer, inject, NgModule } from "@angular/core";
import * as i1 from "@rollthecloudinc/plugin";
import { Plugin, BasePluginManager, PluginDef } from "@rollthecloudinc/plugin";
import * as i2 from "@rollthecloudinc/utils";
var PublicApiBridgeService = class _PublicApiBridgeService {
    static {
        this.ɵfac = function PublicApiBridgeService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PublicApiBridgeService)();
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PublicApiBridgeService,
            factory: _PublicApiBridgeService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PublicApiBridgeService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var BridgeBuilderPlugin = class extends Plugin {
    constructor(data) {
        super(data);
        if (data) {
            this.build = data.build;
        }
    }
};
var bridgeAppInit = builder => {
    return () => new Promise(res => {
        builder.build();
        res();
    });
};
var testBridgeFactory = () => {
    return new BridgeBuilderPlugin({
        id: "test",
        title: "Test",
        build: () => {
            PublicApiBridgeService.prototype["sayHello2"] = () => {
                alert("say hello 2");
            };
        }
    });
};
var BridgeBuilderPluginManager = class _BridgeBuilderPluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "bridgebuilder"
        }));
    }
    static {
        this.ɵfac = function BridgeBuilderPluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _BridgeBuilderPluginManager)(i0.ɵɵinject(i1.PluginConfigurationManager), i0.ɵɵinject(i2.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _BridgeBuilderPluginManager,
            factory: _BridgeBuilderPluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BridgeBuilderPluginManager, [{
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
var BridgeBuilderService = class _BridgeBuilderService {
    constructor(bpm) {
        this.bpm = bpm;
    }
    build() {
        try {
            console.log("build bridge...");
            this.bpm.getPlugins().subscribe(plugins => {
                Array.from(plugins).forEach(([k, p]) => {
                    p.build();
                    console.log("bridge build: " + k);
                });
            });
            console.log("bridge built.");
        }
        catch (e) { }
    }
    static {
        this.ɵfac = function BridgeBuilderService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _BridgeBuilderService)(i0.ɵɵinject(BridgeBuilderPluginManager));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _BridgeBuilderService,
            factory: _BridgeBuilderService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BridgeBuilderService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: BridgeBuilderPluginManager
        }], null);
})();
var BridgeModule = class _BridgeModule {
    constructor(bmp) {
        console.log("bridge constructor");
        bmp.register(testBridgeFactory());
    }
    static {
        this.ɵfac = function BridgeModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _BridgeModule)(i0.ɵɵinject(BridgeBuilderPluginManager));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _BridgeModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            providers: [provideAppInitializer(() => {
                    const initializerFn = bridgeAppInit(inject(BridgeBuilderService));
                    return initializerFn();
                })]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BridgeModule, [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                    providers: [provideAppInitializer(() => {
                            const initializerFn = bridgeAppInit(inject(BridgeBuilderService));
                            return initializerFn();
                        })]
                }]
        }], () => [{
            type: BridgeBuilderPluginManager
        }], null);
})();
export { BridgeBuilderPlugin, BridgeBuilderPluginManager, BridgeModule, PublicApiBridgeService };
