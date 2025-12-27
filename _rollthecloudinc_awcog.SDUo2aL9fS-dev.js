import "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/awcog/fesm2022/rollthecloudinc-awcog.mjs
import * as i0 from "@angular/core";
import { Injectable, NgModule, InjectionToken } from "@angular/core";
import * as i1 from "@ngrx/effects";
import { createEffect, ofType, EffectsModule } from "@ngrx/effects";
import * as i2 from "@ngrx/data";
import { EntityOp, ofEntityType, ofEntityOp } from "@ngrx/data";
import { map, tap } from "rxjs/operators";
import { AuthActions } from "@rollthecloudinc/auth";
import Cookies from "js-cookie";
var CognitoAuthEffects = class _CognitoAuthEffects {
    constructor(actions$, entityActionFactory) {
        this.actions$ = actions$;
        this.entityActionFactory = entityActionFactory;
        this.setUser = createEffect(() => this.actions$.pipe(ofType(AuthActions.AuthActionTypes.SetUser), map(() => this.entityActionFactory.create("Cookie", EntityOp.QUERY_ALL))));
        this.loadCookies$ = createEffect(() => this.actions$.pipe(ofEntityType("Cookie"), ofEntityOp([EntityOp.QUERY_ALL_SUCCESS]), tap(action => console.log(action.payload.data)), tap(action => {
            action.payload.data.forEach(c => Cookies.set(c.name, c.value, {
                expires: new Date(( /* @__PURE__ */new Date()).getTime() + 1 * 3600 * 1e3)
            }));
        })), {
            dispatch: false
        });
    }
    static {
        this.ɵfac = function CognitoAuthEffects_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _CognitoAuthEffects)(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i2.EntityActionFactory));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _CognitoAuthEffects,
            factory: _CognitoAuthEffects.ɵfac
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CognitoAuthEffects, [{
            type: Injectable
        }], () => [{
            type: i1.Actions
        }, {
            type: i2.EntityActionFactory
        }], null);
})();
var AwcogModule = class _AwcogModule {
    static {
        this.ɵfac = function AwcogModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AwcogModule)();
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _AwcogModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [EffectsModule.forFeature([CognitoAuthEffects])]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AwcogModule, [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [EffectsModule.forFeature([CognitoAuthEffects])],
                    exports: []
                }]
        }], null, null);
})();
var CognitoSettings = class {
    constructor(data) {
        if (data) {
            this.identityPoolId = data.identityPoolId;
            this.region = data.region;
            this.userPoolId = data.userPoolId;
        }
    }
};
var COGNITO_SETTINGS = new InjectionToken("CognitoSettings");
export { AwcogModule, COGNITO_SETTINGS, CognitoSettings };
