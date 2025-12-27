import { require_build } from "@nf-internal/chunk-H6AQFQOQ";
import "@nf-internal/chunk-FA5Q5YZO";
import { firstValueFrom, forkJoin } from "@nf-internal/chunk-BSWOS4VH";
import { from, of } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues, __toESM } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/awos/fesm2022/rollthecloudinc-awos.mjs
import * as i0 from "@angular/core";
import { PLATFORM_ID, Inject, NgModule } from "@angular/core";
import * as i2 from "@rollthecloudinc/auth";
import { AuthModule } from "@rollthecloudinc/auth";
import * as i5 from "@rollthecloudinc/awcog";
import { COGNITO_SETTINGS } from "@rollthecloudinc/awcog";
import * as i1 from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin, CrudModule } from "@rollthecloudinc/crud";
var sha256 = __toESM(require_build(), 1);
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { switchMap, map, tap, catchError, take } from "rxjs/operators";
import * as i3 from "@rollthecloudinc/dparam";
import * as i4 from "@angular/common/http";
var opensearchTemplateCrudAdaptorPluginFactory = (platformId, authFacade, cognitoSettings, paramsEvaluatorService, http) => {
    return new CrudAdaptorPlugin({
        id: "aws_opensearch_template",
        title: "AWS Opensearch Template",
        create: ({ object, identity, params, parentObject }) => of({
            success: false
        }),
        read: ({}) => of({
            success: false
        }),
        update: ({ object, identity, params, parentObject }) => of({
            success: false
        }),
        delete: ({}) => of({
            success: false
        }),
        query: ({ rule, params }) => of({
            entities: [],
            success: false
        }).pipe(switchMap(() => params && Object.keys(params).length !== 0 ? forkJoin(Object.keys(params).map(name => paramsEvaluatorService.paramValue(params[name], /* @__PURE__ */ new Map()).pipe(map(v => ({
            [name]: v
        }))))).pipe(map(groups => groups.reduce((p, c) => __spreadValues(__spreadValues({}, p), c), {})), 
        // default options go here instead of empty object.
        map(options => ({
            options
        }))) : of({
            options: {}
        })), map(({ options }) => ({
            options,
            body: JSON.stringify({
                id: options.id,
                params: rule ? rule.conditions.all.reduce((p, c) => __spreadValues(__spreadValues({}, p), c.any.reduce((p2, c2) => __spreadProps(__spreadValues({}, p2), {
                    [c2.path.substr(2)]: [...(p2[c2.path.substr(2)] ? p2[c2.path.substr(2)] : []), JSON.parse(decodeURIComponent(c2.value))]
                }), {})), {}) : {}
            })
        })), tap(({ body }) => console.log("open search template query body", body)), switchMap(({ options, body }) => createSignedHttpRequest({
            method: "POST",
            body,
            headers: {
                "Content-Type": "application/json",
                host: `${options.domain}.${options.region}.es.amazonaws.com`
            },
            hostname: `${options.domain}.${options.region}.es.amazonaws.com`,
            path: `/${options.index}/_search/template`,
            protocol: "https:",
            service: "es",
            cognitoSettings,
            authFacade
        }).pipe(map(signedHttpRequest => ({
            signedHttpRequest,
            options
        })))), switchMap(({ signedHttpRequest, options }) => {
            delete signedHttpRequest.headers.host;
            const url = `https://${options.domain}.${options.region}.es.amazonaws.com/${options.index}/_search/template`;
            return http.post(url, signedHttpRequest.body, {
                headers: signedHttpRequest.headers,
                withCredentials: false
            }).pipe(map(res => ({
                res,
                options
            })));
        }), map(({ res, options }) => ({
            entities: options.hits && res && res.hits && res.hits.hits ? res.hits.hits.map(h => options.source ? h._source : h) : [res],
            success: true
        })))
    });
};
var opensearchEntityCrudAdaptorPluginFactory = (authFacade, cognitoSettings, paramsEvaluatorService, http) => {
    return new CrudAdaptorPlugin({
        id: "aws_opensearch_entity",
        title: "AWS Opensearch Entity",
        create: ({ object, identity, params, parentObject }) => of({
            success: false
        }).pipe(paramsEvaluatorService.resolveParams({
            params
        }), switchMap(({ options }) => identity({
            object,
            parentObject
        }).pipe(map(({ identity: identity2 }) => ({
            identity: identity2,
            options
        })))), switchMap(({ options, identity: identity2 }) => createSignedHttpRequest(__spreadProps(__spreadValues({
            method: "PUT",
            body: JSON.stringify(object),
            headers: {
                "Content-Type": "application/json",
                host: `${options.domain}.${options.region}.es.amazonaws.com`
            },
            hostname: `${options.domain}.${options.region}.es.amazonaws.com`,
            path: `/${options.index}/_doc/${identity2}`,
            protocol: "https:",
            service: "es"
        }, __spreadValues({}, options.pipeline ? {
            query: {
                pipeline: options.pipeline
            }
        } : {})), {
            cognitoSettings,
            authFacade
        })).pipe(map(signedHttpRequest => ({
            signedHttpRequest,
            options,
            identity: identity2
        })))), switchMap(({ signedHttpRequest, options, identity: identity2 }) => {
            delete signedHttpRequest.headers.host;
            const url = `https://${options.domain}.${options.region}.es.amazonaws.com/${options.index}/_doc/${identity2}`;
            return http.put(url, JSON.stringify(object), {
                headers: signedHttpRequest.headers,
                withCredentials: false,
                params: __spreadValues({}, options.pipeline ? {
                    pipeline: options.pipeline
                } : {})
            }).pipe(map(res => ({
                res,
                options
            })));
        }), map(() => ({
            success: true
        }))),
        read: ({}) => of({
            success: false
        }),
        update: ({ object, identity, params, parentObject }) => of({
            success: false
        }).pipe(paramsEvaluatorService.resolveParams({
            params
        }), switchMap(({ options }) => identity({
            object,
            parentObject
        }).pipe(map(({ identity: identity2 }) => ({
            identity: identity2,
            options
        })))), switchMap(({ options, identity: identity2 }) => createSignedHttpRequest(__spreadProps(__spreadValues({
            method: "PUT",
            body: JSON.stringify(object),
            headers: {
                "Content-Type": "application/json",
                host: `${options.domain}.${options.region}.es.amazonaws.com`
            },
            hostname: `${options.domain}.${options.region}.es.amazonaws.com`,
            path: `/${options.index}/_doc/${identity2}`,
            protocol: "https:",
            service: "es"
        }, __spreadValues({}, options.pipeline ? {
            query: {
                pipeline: options.pipeline
            }
        } : {})), {
            cognitoSettings,
            authFacade
        })).pipe(map(signedHttpRequest => ({
            signedHttpRequest,
            options,
            identity: identity2
        })))), switchMap(({ signedHttpRequest, options, identity: identity2 }) => {
            delete signedHttpRequest.headers.host;
            const url = `https://${options.domain}.${options.region}.es.amazonaws.com/${options.index}/_doc/${identity2}`;
            return http.put(url, JSON.stringify(object), {
                headers: signedHttpRequest.headers,
                withCredentials: false,
                params: __spreadValues({}, options.pipeline ? {
                    pipeline: options.pipeline
                } : {})
            }).pipe(map(res => ({
                res,
                options
            })));
        }), map(() => ({
            success: true
        }))),
        delete: ({}) => of({
            success: false
        }),
        query: ({ rule, params }) => of({
            entities: [],
            success: false
        }).pipe(tap(() => {
            console.log("crud open search query", rule, params);
        }), paramsEvaluatorService.resolveParams({
            params
        }), 
        // This can be moved into crud adaptor and passed as argument.
        map(({ options }) => ({
            options,
            identityCondition: rule.conditions.all.map(c => c.any.find(c2 => c2.fact === "identity")).find(c => !!c)
        })), switchMap(({ options, identityCondition }) => createSignedHttpRequest({
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                host: `${options.domain}.${options.region}.es.amazonaws.com`
            },
            hostname: `${options.domain}.${options.region}.es.amazonaws.com`,
            path: `/${options.index}/_doc/${identityCondition ? identityCondition.value : ""}`,
            protocol: "https:",
            service: "es",
            cognitoSettings,
            authFacade
        }).pipe(tap(() => console.log(".marker({ event: AFTER , entity: opensearch , op: query , meta: { action: createSignedRequest } })")), tap(signedHttpRequest => delete signedHttpRequest.headers.host), 
        // map(signedHttpRequest => ({ signedHttpRequest, options, url: `${ isPlatformServer(platformId) ? /*'http://localhost:4000'*/ `${protocol}://${hostName}` /*`https://${options.bucket}.s3.amazonaws.com`*/ : `${protocol}://${hostName}` }${ `/awproxy/s3/${(options as any).bucket}` }${signedHttpRequest.path}` })),
        map(signedHttpRequest => ({
            signedHttpRequest,
            options,
            url: `https://${options.domain}.${options.region}.es.amazonaws.com${signedHttpRequest.path}`
        })), tap(() => console.log(".marker({ event: BEFORE , entity: crud , op: query , meta: { http: get } })")), switchMap(({ signedHttpRequest, url }) => http.get(url, {
            headers: signedHttpRequest.headers,
            withCredentials: false
        }).pipe(catchError(() => of(void 0)))), tap(() => console.log(".marker({ event: AFTER , entity: opensearch , op: query , meta: { http: get } })")), map(res => ({
            entities: res ? [res["_source"]] : [],
            success: res ? true : false
        })))))
    });
};
var createSignedHttpRequest = ({ body, headers, hostname, method = "GET", path = "/", port = 443, protocol = "https:", query, service, cognitoSettings, authFacade }) => of(new HttpRequest({
    body,
    headers,
    hostname,
    method,
    path,
    port,
    protocol,
    query
})).pipe(tap(() => console.log(".marker({ event: BEGIN , context: os, entity: sig , op: signv4 , meta: {  } })")), switchMap(req => from(new SignatureV4({
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({
            region: cognitoSettings.region
        }),
        identityPoolId: cognitoSettings.identityPoolId,
        logins: {
            [`cognito-idp.${cognitoSettings.region}.amazonaws.com/${cognitoSettings.userPoolId}`]: () => firstValueFrom(authFacade.getUser$.pipe(map(u => u ? u.id_token : void 0)))
        }
    }),
    region: cognitoSettings.region,
    service,
    sha256: sha256.Sha256,
    applyChecksum: false
}).sign(req).then(signedReq => {
    console.log(".marker({ event: RESOLVED, entity: os , op: signv4 , meta: {  } })");
    return signedReq;
})).pipe(tap(() => console.log(".marker({ /os/sign/after/sig })")), take(1))), map(req => req), tap(() => console.log(".marker({ event: END , context: os, entity: sig , op: signv4 , meta: {  } })")));
var AwosModule = class _AwosModule {
    constructor(cognitoSettings, platformId, cpm, authFacade, paramsEvaluatorService, http) {
        cpm.register(opensearchTemplateCrudAdaptorPluginFactory(platformId, authFacade, cognitoSettings, paramsEvaluatorService, http));
        cpm.register(opensearchEntityCrudAdaptorPluginFactory(authFacade, cognitoSettings, paramsEvaluatorService, http));
    }
    static {
        this.ɵfac = function AwosModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AwosModule)(i0.ɵɵinject(COGNITO_SETTINGS), i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i1.CrudAdaptorPluginManager), i0.ɵɵinject(i2.AuthFacade), i0.ɵɵinject(i3.ParamEvaluatorService), i0.ɵɵinject(i4.HttpClient));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _AwosModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [AuthModule, CrudModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AwosModule, [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [AuthModule, CrudModule],
                    exports: []
                }]
        }], () => [{
            type: i5.CognitoSettings,
            decorators: [{
                    type: Inject,
                    args: [COGNITO_SETTINGS]
                }]
        }, {
            type: Object,
            decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }]
        }, {
            type: i1.CrudAdaptorPluginManager
        }, {
            type: i2.AuthFacade
        }, {
            type: i3.ParamEvaluatorService
        }, {
            type: i4.HttpClient
        }], null);
})();
export { AwosModule };
