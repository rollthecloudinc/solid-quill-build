// projects/plugin/src/app/download.component.ts
import { Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@rollthecloudinc/content";
var DownloadComponent = class _DownloadComponent {
  constructor(cpm) {
    this.cpm = cpm;
    console.log("download component constructor");
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function DownloadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadComponent)(i0.\u0275\u0275directiveInject(i1.ContentPluginManager));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _DownloadComponent, selectors: [["plugin-download"]], standalone: false, decls: 3, vars: 0, consts: [[1, "task"]], template: function DownloadComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 0)(1, "p");
        i0.\u0275\u0275text(2, "Download");
        i0.\u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(DownloadComponent, { className: "DownloadComponent", filePath: "projects/plugin/src/app/download.component.ts", lineNumber: 14 });
})();

export {
  DownloadComponent
};
//# sourceMappingURL=chunk-M7EOTVDA.js.map
