import { require_build } from "@nf-internal/chunk-H6AQFQOQ";
import "@nf-internal/chunk-FA5Q5YZO";
import { firstValueFrom, iif } from "@nf-internal/chunk-BSWOS4VH";
import { from, of } from "@nf-internal/chunk-4WPE7WTU";
import { __toESM } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/aws3/fesm2022/rollthecloudinc-aws3.mjs
import * as i0 from "@angular/core";
import { PLATFORM_ID, Inject, NgModule } from "@angular/core";
import * as i1 from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin, CrudModule } from "@rollthecloudinc/crud";
import * as i2 from "@rollthecloudinc/auth";
import { AuthModule } from "@rollthecloudinc/auth";
import * as i6 from "@rollthecloudinc/awcog";
import { COGNITO_SETTINGS } from "@rollthecloudinc/awcog";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { S3Client } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
var sha256 = __toESM(require_build(), 1);
import { map, switchMap, tap, take } from "rxjs/operators";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import * as i5 from "@rollthecloudinc/utils";
import { UtilsModule } from "@rollthecloudinc/utils";
import * as i3 from "@rollthecloudinc/dparam";
import * as i4 from "@angular/common/http";
var s3EntityCrudAdaptorPluginFactory = (platformId, authFacade, cognitoSettings, paramsEvaluatorService, http, asyncApiCallHelperSvc) => {
    return new CrudAdaptorPlugin({
        id: "aws_s3_entity",
        title: "AWS S3 Entity",
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
        })))), switchMap(({ options, identity: identity2 }) => createS3SignedHttpRequest({
            method: "PUT",
            body: JSON.stringify(object),
            headers: {
                "Content-Type": "application/json",
                host: `${options.bucket}.s3.amazonaws.com`
            },
            hostname: `${options.bucket}.s3.amazonaws.com`,
            path: `${options.prefix}${identity2}.json`,
            protocol: "https:",
            service: "s3",
            cognitoSettings,
            authFacade
        }).pipe(map(signedHttpRequest => ({
            signedHttpRequest,
            options
        })))), tap(({ signedHttpRequest }) => delete signedHttpRequest.headers.host), map(({ signedHttpRequest, options }) => ({
            signedHttpRequest,
            options,
            url: `https://${options.bucket}.s3.amazonaws.com${signedHttpRequest.path}`
        })), switchMap(({ signedHttpRequest, url }) => http.put(url, JSON.stringify(object), {
            headers: signedHttpRequest.headers,
            withCredentials: false
        })), map(() => ({
            success: true
        }))),
        read: ({}) => of({
            success: false
        }),
        update: ({ object, identity, params }) => of({
            success: false
        }).pipe(paramsEvaluatorService.resolveParams({
            params
        }), switchMap(({ options }) => identity({
            object
        }).pipe(map(({ identity: identity2 }) => ({
            identity: identity2,
            options
        })))), switchMap(({ options, identity: identity2 }) => createS3SignedHttpRequest({
            method: "PUT",
            body: JSON.stringify(object),
            headers: {
                "Content-Type": "application/json",
                host: `${options.bucket}.s3.amazonaws.com`
            },
            hostname: `${options.bucket}.s3.amazonaws.com`,
            path: `${options.prefix}${identity2}.json`,
            protocol: "https:",
            service: "s3",
            cognitoSettings,
            authFacade
        }).pipe(map(signedHttpRequest => ({
            signedHttpRequest,
            options
        })))), tap(({ signedHttpRequest }) => delete signedHttpRequest.headers.host), map(({ signedHttpRequest, options }) => ({
            signedHttpRequest,
            options,
            url: `https://${options.bucket}.s3.amazonaws.com${signedHttpRequest.path}`
        })), switchMap(({ signedHttpRequest, url }) => http.put(url, JSON.stringify(object), {
            headers: signedHttpRequest.headers,
            withCredentials: false
        })), map(() => ({
            success: true
        }))),
        delete: ({}) => of({
            success: false
        }),
        query: ({ rule, params }) => of({
            entities: [],
            success: false
        }).pipe(paramsEvaluatorService.resolveParams({
            params
        }), 
        // This can be moved into crud adaptor and passed as argument.
        map(({ options }) => ({
            options,
            identityCondition: rule.conditions.all.map(c => c.any.find(c2 => c2.fact === "identity")).find(c => !!c)
        })), switchMap(({ identityCondition, options }) => iif(() => identityCondition !== void 0 && identityCondition && identityCondition.fact === "identity" && options && options.bucket, 
        // This could probably be moved into an aw util module to easily build rest queries for any aw service efficently.
        createS3SignedHttpRequest({
            method: "GET",
            body: void 0,
            headers: {
                "Content-Type": "application/json",
                host: `${options ? options.bucket : ""}.s3.amazonaws.com`
            },
            hostname: `${options ? options.bucket : ""}.s3.amazonaws.com`,
            path: `${options && options.prefix ? options.prefix : ""}${identityCondition ? identityCondition.value : ""}.json`,
            protocol: "https:",
            service: "s3",
            cognitoSettings,
            authFacade
        }).pipe(tap(() => console.log(".marker({ event: AFTER , entity: s3 , op: query , meta: { action: createSignedRequest } })")), tap(signedHttpRequest => delete signedHttpRequest.headers.host), 
        // map(signedHttpRequest => ({ signedHttpRequest, options, url: `${ isPlatformServer(platformId) ? /*'http://localhost:4000'*/ `${protocol}://${hostName}` /*`https://${options.bucket}.s3.amazonaws.com`*/ : `${protocol}://${hostName}` }${ `/awproxy/s3/${(options as any).bucket}` }${signedHttpRequest.path}` })),
        map(signedHttpRequest => ({
            signedHttpRequest,
            options,
            url: `https://${options.bucket}.s3.amazonaws.com${signedHttpRequest.path}`
        })), tap(() => console.log(".marker({ event: BEFORE , entity: crud , op: query , meta: { http: get } })")), switchMap(({ signedHttpRequest, url }) => http.get(url, {
            headers: signedHttpRequest.headers,
            withCredentials: false
        })), tap(() => console.log(".marker({ event: AFTER , entity: s3 , op: query , meta: { http: get } })")), map(res => ({
            entities: res ? [res] : [],
            success: res ? true : false
        }))), of({
            entities: [],
            success: false
        }))))
    });
};
var createS3SignedHttpRequest = ({ body, headers, hostname, method = "GET", path = "/", port = 443, protocol = "https:", query, service, cognitoSettings, authFacade }) => of(new HttpRequest({
    body,
    headers,
    hostname,
    method,
    path,
    port,
    protocol,
    query
})).pipe(tap(() => console.log(".marker({ event: BEGIN , context: s3, entity: sig , op: signv4 , meta: {  } })")), switchMap(req => from(new SignatureV4({
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
    sha256: sha256.Sha256
}).sign(req).then(signedReq => {
    console.log(".marker({ event: RESOLVED, entity: s3 , op: signv4 , meta: {  } })");
    return signedReq;
})).pipe(tap(() => console.log(".marker({ /s3/sign/after/sig })")), take(1))), map(req => req), tap(() => console.log(".marker({ event: END , context: s3, entity: sig , op: signv4 , meta: {  } })")));
var Aws3Module = class _Aws3Module {
    constructor(cognitoSettings, platformId, cpm, authFacade, paramsEvaluatorService, http, asyncApiCallHelperSvc) {
        cpm.register(s3EntityCrudAdaptorPluginFactory(platformId, authFacade, cognitoSettings, paramsEvaluatorService, http, asyncApiCallHelperSvc));
    }
    static {
        this.ɵfac = function Aws3Module_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _Aws3Module)(i0.ɵɵinject(COGNITO_SETTINGS), i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i1.CrudAdaptorPluginManager), i0.ɵɵinject(i2.AuthFacade), i0.ɵɵinject(i3.ParamEvaluatorService), i0.ɵɵinject(i4.HttpClient), i0.ɵɵinject(i5.AsyncApiCallHelperService));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _Aws3Module
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [UtilsModule, AuthModule, CrudModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Aws3Module, [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [UtilsModule, AuthModule, CrudModule],
                    exports: []
                }]
        }], () => [{
            type: i6.CognitoSettings,
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
        }, {
            type: i5.AsyncApiCallHelperService
        }], null);
})();
export { Aws3Module };
