// node_modules/@angular/material/fesm2022/common-module.mjs
import { HighContrastModeDetector } from "@angular/cdk/a11y";
import { BidiModule } from "@angular/cdk/bidi";
import * as i0 from "@angular/core";
import { InjectionToken, inject, NgModule } from "@angular/core";
var MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
    providedIn: "root",
    factory: () => true
});
var MatCommonModule = class _MatCommonModule {
    constructor() {
        inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
    }
    static ɵfac = function MatCommonModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCommonModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatCommonModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [BidiModule, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCommonModule, [{
            type: NgModule,
            args: [{
                    imports: [BidiModule],
                    exports: [BidiModule]
                }]
        }], () => [], null);
})();
export { MATERIAL_SANITY_CHECKS, MatCommonModule };
