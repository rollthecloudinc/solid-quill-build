import { v4_default } from "@nf-internal/chunk-OLWRG54F";
import { __async, __spreadProps, __spreadValues } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/auth/fesm2022/rollthecloudinc-auth.mjs
import * as i1 from "@ngrx/store";
import { createFeatureSelector, createSelector, select, StoreModule } from "@ngrx/store";
import * as i0 from "@angular/core";
import { Injectable, PLATFORM_ID, Inject, Component, NgModule } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { CommonModule } from "@angular/common";
import * as i2 from "@angular/router";
import * as i1$1 from "@ngrx/data";
var AuthActionTypes;
(function (AuthActionTypes2) {
    AuthActionTypes2["Login"] = "[Auth] Login";
    AuthActionTypes2["Logout"] = "[Auth] Logout";
    AuthActionTypes2["CompleteAuthentication"] = "[Auth] CompleteAuthentication";
    AuthActionTypes2["SetUser"] = "[Auth] SetUser";
})(AuthActionTypes || (AuthActionTypes = {}));
var Login = class {
    constructor() {
        this.type = AuthActionTypes.Login;
    }
};
var Logout = class {
    constructor() {
        this.type = AuthActionTypes.Logout;
    }
};
var CompleteAuthentication = class {
    constructor() {
        this.type = AuthActionTypes.CompleteAuthentication;
    }
};
var SetUser = class {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SetUser;
    }
};
var fromAuthActions = {
    Login,
    Logout,
    CompleteAuthentication,
    SetUser
};
var auth_actions = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    get AuthActionTypes() {
        return AuthActionTypes;
    },
    CompleteAuthentication,
    Login,
    Logout,
    SetUser,
    fromAuthActions
});
var AUTH_FEATURE_KEY = "auth";
var initialState = {
    user: void 0,
    cookies: /* @__PURE__ */ new Map()
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case AuthActionTypes.SetUser:
            {
                state = __spreadProps(__spreadValues({}, state), {
                    user: action.payload
                });
                break;
            }
        case AuthActionTypes.Logout:
            {
                state = __spreadProps(__spreadValues({}, state), {
                    user: void 0
                });
                break;
            }
    }
    return state;
}
var auth_reducer = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    AUTH_FEATURE_KEY,
    initialState,
    reducer
});
var getAuthState = createFeatureSelector(AUTH_FEATURE_KEY);
var getUser = createSelector(getAuthState, state => state.user);
var authQuery = {
    getUser
};
var auth_selectors = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    authQuery
});
var AuthFacade = class _AuthFacade {
    constructor(store) {
        this.store = store;
        this.getUser$ = this.store.pipe(select(authQuery.getUser));
        this.token$ = this.store.pipe(select(authQuery.getUser), map(u => u ? `${u.token_type} ${u.access_token}` : void 0));
        this.idToken$ = this.store.pipe(select(authQuery.getUser), map(u => u ? `${u.token_type} ${u.id_token}` : void 0));
    }
    login() {
        this.store.dispatch(new Login());
    }
    logout() {
        this.store.dispatch(new Logout());
    }
    setUser(user) {
        this.store.dispatch(new SetUser(user));
    }
    completeAuthentication() {
        this.store.dispatch(new CompleteAuthentication());
    }
    static {
        this.ɵfac = function AuthFacade_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AuthFacade)(i0.ɵɵinject(i1.Store));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _AuthFacade,
            factory: _AuthFacade.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthFacade, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1.Store
        }], null);
})();
var entityMetadata = {
    PublicUserProfile: {
        entityName: "PublicUserProfile"
    }
};
var AuthCallbackComponent = class _AuthCallbackComponent {
    constructor(authFacade, router, route, platformId) {
        this.authFacade = authFacade;
        this.router = router;
        this.route = route;
        this.platformId = platformId;
    }
    ngOnInit() {
        return __async(this, null, function* () {
            this.authFacade.completeAuthentication();
            this.router.navigate(["/pages/create-panel-page"], {
                queryParams: {
                    cacheBuster: v4_default()
                }
            });
        });
    }
    static {
        this.ɵfac = function AuthCallbackComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AuthCallbackComponent)(i0.ɵɵdirectiveInject(AuthFacade), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(PLATFORM_ID));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _AuthCallbackComponent,
            selectors: [["classifieds-ui-auth-callback"]],
            standalone: false,
            decls: 2,
            vars: 0,
            template: function AuthCallbackComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "p");
                    i0.ɵɵtext(1, "auth-callback works!");
                    i0.ɵɵelementEnd();
                }
            },
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthCallbackComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-auth-callback",
                    standalone: false,
                    template: "<p>auth-callback works!</p>\n"
                }]
        }], () => [{
            type: AuthFacade
        }, {
            type: i2.Router
        }, {
            type: i2.ActivatedRoute
        }, {
            type: Object,
            decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }]
        }], null);
})();
var AuthModule = class _AuthModule {
    constructor(eds) {
        eds.registerMetadataMap(entityMetadata);
    }
    static forRoot() {
        return {
            ngModule: _AuthModule,
            providers: [AuthFacade]
        };
    }
    static {
        this.ɵfac = function AuthModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AuthModule)(i0.ɵɵinject(i1$1.EntityDefinitionService));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _AuthModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule,
                // HttpClientModule,
                StoreModule.forFeature(AUTH_FEATURE_KEY, reducer)]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthModule, [{
            type: NgModule,
            args: [{
                    declarations: [AuthCallbackComponent],
                    imports: [CommonModule,
                        // HttpClientModule,
                        StoreModule.forFeature(AUTH_FEATURE_KEY, reducer)
                        // EffectsModule.forFeature([AuthEffects])
                    ],
                    exports: [AuthCallbackComponent]
                }]
        }], () => [{
            type: i1$1.EntityDefinitionService
        }], null);
})();
var LogoutInterceptor = class _LogoutInterceptor {
    constructor(authFacade, router) {
        this.authFacade = authFacade;
        this.router = router;
    }
    intercept(req, next) {
        return next.handle(req).pipe(tap({
            error: e => {
                if (e.status === 401) { }
            }
        }));
    }
    static {
        this.ɵfac = function LogoutInterceptor_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _LogoutInterceptor)(i0.ɵɵinject(AuthFacade), i0.ɵɵinject(i2.Router));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _LogoutInterceptor,
            factory: _LogoutInterceptor.ɵfac
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LogoutInterceptor, [{
            type: Injectable
        }], () => [{
            type: AuthFacade
        }, {
            type: i2.Router
        }], null);
})();
var UserInfo = class {
    constructor(data) {
        if (data) {
            this.sub = data.sub;
        }
    }
};
var PublicUserProfile = class {
    constructor(data) {
        if (data) {
            this.id = data.id;
            this.userName = data.userName;
        }
    }
};
var Cookie = class {
    constructor(data) {
        if (data) {
            this.name = data.name;
            this.value = data.value;
        }
    }
};
export { AuthActionTypes, auth_actions as AuthActions, AuthCallbackComponent, AuthFacade, auth_reducer as AuthFeature, AuthModule, auth_selectors as AuthSelectors, CompleteAuthentication, Cookie, Login, Logout, LogoutInterceptor, PublicUserProfile, SetUser, UserInfo, fromAuthActions };
