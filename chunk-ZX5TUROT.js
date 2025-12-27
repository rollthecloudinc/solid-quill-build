import { MatRipple } from "@nf-internal/chunk-6M43UBJD";
import { MatCommonModule } from "@nf-internal/chunk-AY7MLMFN";
// node_modules/@angular/material/fesm2022/ripple-module.mjs
import * as i0 from "@angular/core";
import { NgModule } from "@angular/core";
var MatRippleModule = class _MatRippleModule {
    static ɵfac = function MatRippleModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatRippleModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatRippleModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [MatCommonModule, MatCommonModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatRippleModule, [{
            type: NgModule,
            args: [{
                    imports: [MatCommonModule, MatRipple],
                    exports: [MatRipple, MatCommonModule]
                }]
        }], null, null);
})();
export { MatRippleModule };
