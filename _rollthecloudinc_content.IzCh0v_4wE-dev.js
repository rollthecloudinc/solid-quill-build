import "@nf-internal/chunk-BSWOS4VH";
import { of } from "@nf-internal/chunk-4WPE7WTU";
import "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/content/fesm2022/rollthecloudinc-content.mjs
import * as i0 from "@angular/core";
import { NgModule, InjectionToken, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AttributeValue } from "@rollthecloudinc/attributes";
import * as i1 from "@rollthecloudinc/plugin";
import { Plugin, BasePluginManager, PluginDef } from "@rollthecloudinc/plugin";
import * as i2 from "@rollthecloudinc/utils";
var ContentModule = class _ContentModule {
    static {
        this.ɵfac = function ContentModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ContentModule)();
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _ContentModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule]
                }]
        }], null, null);
})();
var ContentPlugin = class extends Plugin {
    constructor(data) {
        super(data);
        this.fileTypes = [];
        if (data) {
            this.name = this.id;
            this.handler = data.handler !== void 0 ? data.handler : void 0;
            this.selectionComponent = data.selectionComponent ? data.selectionComponent : void 0;
            this.renderComponent = data.renderComponent ? data.renderComponent : void 0;
            this.editorComponent = data.editorComponent ? data.editorComponent : void 0;
        }
    }
};
var ContentBinding = class {
    constructor(data) {
        if (data) {
            this.type = data.type;
            this.id = data.id;
        }
    }
};
var ContentInstance = class {
    constructor(data) {
        this.settings = [];
        if (data) {
            this.pluginName = data.pluginName;
            if (data.settings) {
                this.settings = data.settings.map(s => new AttributeValue(s));
            }
        }
    }
};
var ContentPluginEditorOptions = class {
    constructor(data) {
        this.fullscreen = false;
        if (data) {
            this.fullscreen = data.fullscreen;
        }
    }
};
var CONTENT_PLUGIN = new InjectionToken("ContentPlugin");
var ContentPluginManager = class _ContentPluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "content"
        }));
    }
    static {
        this.ɵfac = function ContentPluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ContentPluginManager)(i0.ɵɵinject(i1.PluginConfigurationManager), i0.ɵɵinject(i2.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _ContentPluginManager,
            factory: _ContentPluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentPluginManager, [{
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
export { CONTENT_PLUGIN, ContentBinding, ContentInstance, ContentModule, ContentPlugin, ContentPluginEditorOptions, ContentPluginManager };
