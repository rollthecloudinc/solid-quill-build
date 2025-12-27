import {
  of,
  pluginDownloadContentPluginFactory
} from "./chunk-WAOM5HBH.js";
import "./chunk-M7EOTVDA.js";

// projects/plugin/src/app/download.module.ts
import { NgModule } from "@angular/core";

// projects/plugin/src/app/handlers/download-content.handler.ts
import { Injectable } from "@angular/core";
import { ContentPluginEditorOptions } from "@rollthecloudinc/content";
import * as i0 from "@angular/core";
var DownloadContentHandler = class _DownloadContentHandler {
  constructor() {
  }
  handleFile(file) {
    return of();
  }
  handlesType(type) {
    return false;
  }
  implementsRendererOverride() {
    return false;
  }
  hasRendererOverride(settings) {
    return of(false);
  }
  isDynamic(settings) {
    return false;
  }
  isData(settings) {
    return false;
  }
  getBindings(settings, type, metadata) {
    return of([]);
  }
  fetchDynamicData(settings, metadata) {
    return of();
  }
  buildDynamicItems(settings, metadata) {
    return of([]);
  }
  stateDefinition(settings) {
    return of({});
  }
  editorOptions(settings) {
    return of(new ContentPluginEditorOptions({ fullscreen: true }));
  }
  static {
    this.\u0275fac = function DownloadContentHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadContentHandler)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _DownloadContentHandler, factory: _DownloadContentHandler.\u0275fac });
  }
};

// projects/plugin/src/app/download.module.ts
import { CommonModule } from "@angular/common";
import * as i02 from "@angular/core";
import * as i1 from "@rollthecloudinc/content";
var DownloadModule = class _DownloadModule {
  constructor(cpm, downloadHandler) {
    console.log("register plugin download content plugin");
    cpm.register(pluginDownloadContentPluginFactory({ handler: downloadHandler }));
  }
  static {
    this.\u0275fac = function DownloadModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadModule)(i02.\u0275\u0275inject(i1.ContentPluginManager), i02.\u0275\u0275inject(DownloadContentHandler));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ i02.\u0275\u0275defineNgModule({ type: _DownloadModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ i02.\u0275\u0275defineInjector({ providers: [
      DownloadContentHandler
    ], imports: [CommonModule] });
  }
};
export {
  DownloadModule
};
//# sourceMappingURL=DownloadModule.js.map
