import {
  QuillViewContentHandler,
  pluginQuillContentPluginFactory,
  pluginQuillViewContentPluginFactory
} from "./chunk-WAOM5HBH.js";
import "./chunk-M7EOTVDA.js";

// projects/plugin/src/app/quill.module.ts
import { NgModule } from "@angular/core";
import { MaterialModule } from "@rollthecloudinc/material";
import { CommonModule } from "@angular/common";
import { QuillModule as QModule } from "ngx-quill";
import { ReactiveFormsModule } from "@angular/forms";
import { OrdainModule } from "@rollthecloudinc/ordain";
import * as i0 from "@angular/core";
import * as i1 from "@rollthecloudinc/content";
import * as i2 from "@rollthecloudinc/forms";
var QuillModule = class _QuillModule {
  constructor(cpm, handler, viewHandler) {
    console.log("register plugin quill content plugin");
    cpm.register(pluginQuillContentPluginFactory({ handler }));
    cpm.register(pluginQuillViewContentPluginFactory({ handler: viewHandler }));
  }
  static {
    this.\u0275fac = function QuillModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuillModule)(i0.\u0275\u0275inject(i1.ContentPluginManager), i0.\u0275\u0275inject(i2.FormElementHandler), i0.\u0275\u0275inject(QuillViewContentHandler));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({ type: _QuillModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({ providers: [
      // QuillContentHandler
      QuillViewContentHandler
    ], imports: [
      CommonModule,
      ReactiveFormsModule,
      MaterialModule,
      OrdainModule,
      QModule.forRoot()
    ] });
  }
};
export {
  QuillModule
};
//# sourceMappingURL=QuillModule.js.map
