import { MatError, MatFormField, MatHint, MatLabel, MatPrefix, MatSuffix } from "@nf-internal/chunk-Y4PYHPLA";
import { MatCommonModule } from "@nf-internal/chunk-AY7MLMFN";
// node_modules/@angular/material/fesm2022/form-field-module.mjs
import { ObserversModule } from "@angular/cdk/observers";
import * as i0 from "@angular/core";
import { NgModule } from "@angular/core";
var MatFormFieldModule = class _MatFormFieldModule {
    static ɵfac = function MatFormFieldModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatFormFieldModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatFormFieldModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [MatCommonModule, ObserversModule, MatFormField, MatCommonModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatFormFieldModule, [{
            type: NgModule,
            args: [{
                    imports: [MatCommonModule, ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
                    exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
                }]
        }], null, null);
})();
export { MatFormFieldModule };
