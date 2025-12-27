import { MatPseudoCheckbox } from "@nf-internal/chunk-LTTGRATQ";
import { MatCommonModule } from "@nf-internal/chunk-AY7MLMFN";
// node_modules/@angular/material/fesm2022/pseudo-checkbox-module.mjs
import * as i0 from "@angular/core";
import { NgModule } from "@angular/core";
var MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
    static ɵfac = function MatPseudoCheckboxModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatPseudoCheckboxModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatPseudoCheckboxModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [MatCommonModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPseudoCheckboxModule, [{
            type: NgModule,
            args: [{
                    imports: [MatCommonModule, MatPseudoCheckbox],
                    exports: [MatPseudoCheckbox]
                }]
        }], null, null);
})();
export { MatPseudoCheckboxModule };
