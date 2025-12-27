import { forkJoin } from "@nf-internal/chunk-BSWOS4VH";
import { of } from "@nf-internal/chunk-4WPE7WTU";
import "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/plugin/fesm2022/rollthecloudinc-plugin.mjs
import * as i0 from "@angular/core";
import { NgModule, Injectable } from "@angular/core";
import * as i2 from "@rollthecloudinc/utils";
import { UtilsModule } from "@rollthecloudinc/utils";
import { map, switchMap } from "rxjs/operators";
var PluginModule = class _PluginModule {
    static {
        this.ɵfac = function PluginModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PluginModule)();
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _PluginModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [UtilsModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PluginModule, [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [UtilsModule],
                    exports: []
                }]
        }], null, null);
})();
var PluginConfigurationManager = class _PluginConfigurationManager {
    constructor() {
        this.configs = [];
    }
    addConfig(cfg) {
        this.configs.push(cfg);
    }
    getConfigs() {
        return this.configs;
    }
    static {
        this.ɵfac = function PluginConfigurationManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PluginConfigurationManager)();
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PluginConfigurationManager,
            factory: _PluginConfigurationManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PluginConfigurationManager, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var ConfigDiscovery = class _ConfigDiscovery {
    constructor(pcm, moduleLoader) {
        this.pcm = pcm;
        this.moduleLoader = moduleLoader;
    }
    loadPlugins(pluginDef, ids = []) {
        const configs = this.pcm.getConfigs();
        const len = configs.length;
        const loadModules$ = [];
        for (let i = 0; i < len; i++) {
            const len2 = configs[i].modules.length;
            for (let j = 0; j < len2; j++) {
                if (configs[i].modules[j].plugins.has(pluginDef.name) && (ids.length === 0 || ids.some(id => configs[i].modules[j].plugins.get(pluginDef.name).findIndex(p => p === id) > -1))) {
                    loadModules$.push(this.moduleLoader.loadModule(configs[i].modules[j].module));
                }
            }
        }
        if (loadModules$.length === 0) {
            return of(true);
        }
        else {
            return forkJoin(loadModules$).pipe(map(() => true));
        }
    }
    static {
        this.ɵfac = function ConfigDiscovery_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ConfigDiscovery)(i0.ɵɵinject(PluginConfigurationManager), i0.ɵɵinject(i2.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _ConfigDiscovery,
            factory: _ConfigDiscovery.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigDiscovery, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: PluginConfigurationManager
        }, {
            type: i2.ModuleLoaderService
        }], null);
})();
var BasePluginManager = class {
    constructor(pcm, moduleLoader) {
        this.pcm = pcm;
        this.moduleLoader = moduleLoader;
        this.pluginInstances = /* @__PURE__ */ new Map();
        this.discoveryPipeline = [];
        this.discovery();
    }
    discovery() {
        this.discoveryPipeline.push(new ConfigDiscovery(this.pcm, this.moduleLoader));
    }
    addDiscovery(d) {
        this.discoveryPipeline.push(d);
    }
    register(plugin) {
        this.pluginInstances.set(plugin.id, plugin);
    }
    getPlugins(ids) {
        const newPlugins = ids ? ids.filter(id => !this.pluginInstances.has(id)) : [];
        if (ids && newPlugins.length === 0) {
            return of(new Map(ids.map(id => [id, this.pluginInstances.get(id)])));
        }
        else {
            return this.pluginDef().pipe(switchMap(def => forkJoin(this.discoveryPipeline.map(d => d.loadPlugins(def, newPlugins))).pipe(map(() => ids ? new Map(ids.map(id => [id, this.pluginInstances.get(id)])) : this.pluginInstances))));
        }
    }
    getPlugin(id) {
        if (this.pluginInstances.has(id)) {
            return of(this.pluginInstances.get(id));
        }
        else {
            return this.pluginDef().pipe(switchMap(def => forkJoin(this.discoveryPipeline.map(d => d.loadPlugins(def, [id]))).pipe(map(() => this.pluginInstances.get(id)))));
        }
    }
};
var PluginConfig = class {
    constructor(data) {
        this.modules = [];
        if (data) {
            if (data.modules) {
                this.modules = data.modules.map(m => new PluginConfigModule(m));
            }
        }
    }
};
var Plugin = class {
    constructor(data) {
        if (data) {
            this.id = data.id;
            this.title = data.title;
        }
    }
};
var PluginDef = class {
    constructor(data) {
        if (data) {
            this.name = data.name;
        }
    }
};
var PluginConfigModule = class {
    constructor(data) {
        if (data) {
            this.module = data.module;
            if (data.plugins) {
                this.plugins = new Map([...data.plugins]);
            }
        }
    }
};
export { BasePluginManager, ConfigDiscovery, Plugin, PluginConfig, PluginConfigModule, PluginConfigurationManager, PluginDef, PluginModule };
