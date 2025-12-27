import { require_lib } from "@nf-internal/chunk-JQGPH55T";
import { forkJoin } from "@nf-internal/chunk-BSWOS4VH";
import { of } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues, __toESM } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/durl/fesm2022/rollthecloudinc-durl.mjs
import * as i0 from "@angular/core";
import { NgModule, Injectable } from "@angular/core";
import * as i2 from "@rollthecloudinc/dparam";
import { ParamPlugin, DparamModule } from "@rollthecloudinc/dparam";
var import_qs = __toESM(require_lib(), 1);
import { getRouterSelectors } from "@ngrx/router-store";
import * as i1 from "@ngrx/store";
import { select } from "@ngrx/store";
import { map, switchMap, defaultIfEmpty, tap } from "rxjs/operators";
var paramPagePluginFactory = () => {
    return new ParamPlugin({
        id: "page",
        title: "Page",
        usedContexts: () => of(["_page"]),
        condition: ({ param, metadata }) => {
            return param.flags.findIndex(f => f.enabled && f.name === "page") > -1 && metadata.has("page");
        },
        evalParam: ({ param, metadata }) => {
            return of(`${metadata.get("page")}`);
        }
    });
};
var paramSearchStringPluginFactory = () => {
    return new ParamPlugin({
        id: "searchstring",
        title: "Searchstring",
        condition: ({ param, metadata }) => {
            return param.flags.findIndex(f => f.enabled) > -1 && metadata.has("searchString");
        },
        evalParam: ({ param, metadata }) => {
            return of(`${metadata.get("searchString")}`);
        }
    });
};
var paramRoutePluginFactory = () => {
    return new ParamPlugin({
        id: "route",
        title: "Route",
        usedContexts: () => of(["_route"]),
        evalParam: ({ param, metadata }) => {
            const route = metadata.get("_route");
            return of(route.params[param.mapping.value]);
        }
    });
};
var paramQueryStringPluginFactory = () => {
    return new ParamPlugin({
        id: "querystring",
        title: "Querystring",
        usedContexts: () => of(["_page"]),
        evalParam: ({ param, metadata }) => {
            const route = metadata.get("_route");
            return of(route.queryParams[param.mapping.value]);
        }
    });
};
var paramStandardPaginationPluginFactory = () => {
    return new ParamPlugin({
        id: "standardpagination",
        title: "Standard Pagination",
        usedContexts: () => of(["_page"]),
        condition: ({ param, metadata }) => {
            return param.flags.findIndex(f => f.enabled && f.name === "offset") > -1 && metadata.has("limit") && metadata.has("page");
        },
        evalParam: ({ param, metadata }) => {
            return of(`${+metadata.get("limit") * (+metadata.get("page") - 1)}`);
        }
    });
};
var DurlModule = class _DurlModule {
    constructor(ppm) {
        [paramPagePluginFactory(), paramSearchStringPluginFactory(), paramRoutePluginFactory(), paramQueryStringPluginFactory(), paramStandardPaginationPluginFactory()].forEach(p => ppm.register(p));
    }
    static {
        this.ɵfac = function DurlModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DurlModule)(i0.ɵɵinject(i2.ParamPluginManager));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _DurlModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [DparamModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DurlModule, [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [DparamModule],
                    exports: []
                }]
        }], () => [{
            type: i2.ParamPluginManager
        }], null);
})();
var UrlGeneratorService = class _UrlGeneratorService {
    constructor(routerStore, paramPluginManager, paramEvaluatorService) {
        this.routerStore = routerStore;
        this.paramPluginManager = paramPluginManager;
        this.paramEvaluatorService = paramEvaluatorService;
    }
    getUrl(url, params, metadata) {
        const { selectCurrentRoute } = getRouterSelectors();
        return this.routerStore.pipe(select(selectCurrentRoute), map(route => [route, url, url ? url.indexOf("?") : -1]), map(([route, url2, index]) => [route, index > -1 ? url2.substring(0, index) : url2, index > -1 ? url2.substring(index + 1) : ""]), switchMap(([route, path, queryString]) => {
            const qsParsed = import_qs.default.parse(queryString);
            const pathPieces = path ? path.split("/") : [];
            const meta = new Map([...metadata, ["_route", route]]);
            const paramNames = this.paramNames(url);
            const mappings = params.reduce((p, c, i) => new Map([...p, [paramNames[i], c]]), /* @__PURE__ */ new Map());
            const path$ = pathPieces.reduce((p, c, i) => {
                if (c.indexOf(":") === 0) {
                    return [...p, this.paramEvaluatorService.paramValue(mappings.get(c
                        /*.substr(1)*/ ), meta)];
                }
                else {
                    return [...p, of(pathPieces[i])];
                }
            }, []);
            const qs$ = [];
            for (const prop in qsParsed) {
                if (Array.isArray(qsParsed[prop])) {
                    qsParsed[prop].forEach(p => qs$.push(this.paramEvaluatorService.paramValue(mappings.get(p), meta).pipe(map(v => [prop, v, true]))));
                }
                else if (typeof qsParsed[prop] === "string" && qsParsed[prop].indexOf(":") > -1) {
                    qs$.push(this.paramEvaluatorService.paramValue(mappings.get(qsParsed[prop]
                    /*.substr(1)*/ ), meta).pipe(map(v => [prop, v, false])));
                }
                else {
                    qs$.push(of([prop, qsParsed[prop], Array.isArray(qsParsed[prop])]));
                }
            }
            return forkJoin([forkJoin(path$).pipe(map(p => p.filter(v => v !== void 0 && v !== null && v !== "" && v !== "undefined").map((v, index) => index === 0 && v.indexOf("http") === 0 ? `${v}/` : v).join("/")), defaultIfEmpty(path)), forkJoin(qs$).pipe(tap(q => console.log(q)), map(q => q.reduce((p, [n, v, m]) => {
                    if (v === void 0 || v === null || v === "" || v === "undefined") {
                        const p2 = __spreadValues({}, p);
                        delete p2[n];
                        return p2;
                    }
                    else {
                        return m ? __spreadProps(__spreadValues({}, p), {
                            [n]: [...(p[n] !== void 0 ? p[n] : []), v]
                        }) : __spreadProps(__spreadValues({}, p), {
                            [n]: v
                        });
                    }
                }, this.rebuildQueryString(qsParsed))), tap(q => console.log(q)), map(q => import_qs.default.stringify(q, {
                    arrayFormat: "repeat",
                    indices: false
                })), defaultIfEmpty(queryString))]).pipe(map(r => r.join("?")));
        }));
    }
    paramNames(url) {
        const indexPos = url ? url.indexOf("?") : -1;
        const pathParsed = (indexPos > -1 ? url.substring(0, indexPos) : url ? url : "").split("/").reduce((p, c, i) => c.indexOf(":") === 0 ? __spreadProps(__spreadValues({}, p), {
            [c.substr(1)]: c
        }) : p, {});
        const parsed = __spreadValues(__spreadValues({}, pathParsed), import_qs.default.parse(url ? url.substring(url.indexOf("?") + 1) : ""));
        const paramNames = [];
        for (const param in parsed) {
            if (Array.isArray(parsed[param])) {
                parsed[param].forEach(p => paramNames.push(p));
            }
            else if (parsed[param].indexOf(":") === 0) {
                paramNames.push(parsed[param]);
            }
        }
        return paramNames;
    }
    rebuildQueryString(q) {
        const newQ = {};
        for (const p in q) {
            if (Array.isArray(q[p])) {
                newQ[p] = [];
            }
            else if (p[q] !== void 0 && p[q] !== null && p[q] !== "" && p[q] !== "undefined") {
                newQ[p] = p[q];
            }
        }
        return import_qs.default.parse(newQ);
    }
    static {
        this.ɵfac = function UrlGeneratorService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _UrlGeneratorService)(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.ParamPluginManager), i0.ɵɵinject(i2.ParamEvaluatorService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _UrlGeneratorService,
            factory: _UrlGeneratorService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UrlGeneratorService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1.Store
        }, {
            type: i2.ParamPluginManager
        }, {
            type: i2.ParamEvaluatorService
        }], null);
})();
export { DurlModule, UrlGeneratorService };
