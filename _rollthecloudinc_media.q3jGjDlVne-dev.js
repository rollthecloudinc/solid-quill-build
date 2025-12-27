import { v4_default } from "@nf-internal/chunk-OLWRG54F";
import { firstValueFrom, forkJoin } from "@nf-internal/chunk-BSWOS4VH";
import { Observable, of, throwError } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadValues } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/media/fesm2022/rollthecloudinc-media.mjs
import * as i0 from "@angular/core";
import { Component, NgModule, InjectionToken, Inject, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as i1 from "@rollthecloudinc/content";
import { ContentPlugin } from "@rollthecloudinc/content";
import * as i4 from "@rollthecloudinc/awcog";
import { COGNITO_SETTINGS } from "@rollthecloudinc/awcog";
import { catchError, map } from "rxjs/operators";
import { Upload } from "@aws-sdk/lib-storage";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { S3Client } from "@aws-sdk/client-s3";
import * as i1$1 from "@angular/common/http";
import * as i2 from "@rollthecloudinc/auth";
var MediafilePaneRendererComponent = class _MediafilePaneRendererComponent {
    static {
        this.ɵfac = function MediafilePaneRendererComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _MediafilePaneRendererComponent)();
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _MediafilePaneRendererComponent,
            selectors: [["classifieds-ui-mediafile-pane-renderer"]],
            standalone: false,
            decls: 1,
            vars: 0,
            template: function MediafilePaneRendererComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵtext(0, "Media File");
                }
            },
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MediafilePaneRendererComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-mediafile-pane-renderer",
                    standalone: false,
                    template: "Media File"
                }]
        }], null, null);
})();
var mediafileContentPluginFactory = () => {
    return new ContentPlugin({
        id: "media_file",
        title: "Media File",
        selectionComponent: void 0,
        editorComponent: void 0,
        renderComponent: MediafilePaneRendererComponent,
        handler: void 0
    });
};
var MediaModule = class _MediaModule {
    constructor(cpm) {
        cpm.register(mediafileContentPluginFactory());
    }
    static {
        this.ɵfac = function MediaModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _MediaModule)(i0.ɵɵinject(i1.ContentPluginManager));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _MediaModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule
                /*, HttpClientModule*/
            ]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MediaModule, [{
            type: NgModule,
            args: [{
                    declarations: [MediafilePaneRendererComponent],
                    exports: [MediafilePaneRendererComponent],
                    imports: [CommonModule
                        /*, HttpClientModule*/
                    ]
                }]
        }], () => [{
            type: i1.ContentPluginManager
        }], null);
})();
var MEDIA_SETTINGS = new InjectionToken("Media Settings");
var MediaSettings = class {
    constructor(data) {
        if (data) {
            this.endpointUrl = data.endpointUrl;
            this.cloudinaryUrl = data.cloudinaryUrl;
            this.uploadPreset = data.uploadPreset;
            this.imageUrl = data.imageUrl;
            this.bucket = data.bucket;
            this.prefix = data.prefix;
        }
    }
};
var MediaFile = class {
    constructor(data) {
        if (data) {
            this.id = data.id;
            this.contentType = data.contentType;
            this.contentDisposition = data.contentDisposition;
            this.path = data.path;
            this.fileName = data.fileName;
            this.length = data.length;
            this.extension = data.extension ? data.extension : void 0;
            this.realPath = data.realPath && data.realPath !== "" ? data.realPath : void 0;
        }
    }
};
var CloudinaryUploadResponse = class {
    constructor(data) {
        if (data) {
            this.public_id = data.public_id;
            this.format = data.format;
            this.original_filename = data.original_filename;
            this.bytes = data.bytes;
        }
    }
};
var FilesService = class _FilesService {
    constructor(settings, cognitoSettings, http, authFacade) {
        this.settings = settings;
        this.cognitoSettings = cognitoSettings;
        this.http = http;
        this.authFacade = authFacade;
    }
    bulkUpload({ files, fileNameOverride, nocache }) {
        const requests$ = [];
        files.forEach(f => {
            if (f) {
                const formData = new FormData();
                formData.append("File", f, fileNameOverride ? fileNameOverride : f.name);
                requests$.push(this.http.post(this.settings.endpointUrl, formData).pipe(catchError(e => {
                    return throwError(new Error("Error uploading images."));
                })));
            }
        });
        return requests$.length > 0 ? forkJoin(requests$) : of([]);
    }
    // github will be favored
    bulkUploadS3({ files, fileNameOverride, nocache }) {
        const requests$ = [];
        files.forEach(f => {
            if (f) {
                requests$.push(new Observable(obs => {
                    const id = fileNameOverride ? fileNameOverride : v4_default();
                    const [_, ext] = f.name.split(".", 2);
                    const fileName = id + ( /*'.' + mime.extension(f.type);*/ext ? "." + ext : "");
                    const upload = new Upload({
                        client: this.buildClient(),
                        params: __spreadValues({
                            Bucket: this.settings.bucket,
                            Key: this.settings.prefix + fileName,
                            Body: f,
                            ContentType: f.type
                        }, nocache ? {
                            CacheControl: "no-cache"
                        } : {})
                    });
                    upload.done().then(() => {
                        obs.next(new MediaFile({
                            id,
                            contentType: f.type,
                            contentDisposition: "",
                            path: fileName,
                            realPath: this.settings.prefix + fileName,
                            length: f.size,
                            fileName: f.name,
                            extension: ( /*mime.extension(f.type)*/ext && ext !== "" ? ext : void 0)
                        }));
                        obs.complete();
                    });
                }));
            }
        });
        return requests$.length > 0 ? forkJoin(requests$) : of([]);
    }
    convertToFiles(mediaFiles) {
        const requests$ = mediaFiles.map(f => new Observable(obs => {
            fetch(`${this.settings.imageUrl}/${f.path}`).then(r => {
                r.blob().then(d => {
                    new Promise(resolve => {
                        let reader = new FileReader();
                        reader.onload = () => resolve(reader.result);
                        reader.readAsDataURL(d);
                    }).then(d2 => {
                        const arrayBufferFromBase64 = this.convertDataURIToBinary(d2);
                        const file = new File([arrayBufferFromBase64], f.fileName, {
                            type: f.contentType
                        });
                        obs.next(file);
                        obs.complete();
                    });
                });
            });
        }));
        return forkJoin(requests$);
    }
    convertDataURIToBinary(dataURI) {
        var BASE64_MARKER = ";base64,";
        var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        var base64 = dataURI.substring(base64Index);
        var raw = window.atob(base64);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));
        for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    }
    buildClient() {
        return new S3Client({
            region: this.cognitoSettings.region,
            credentials: fromCognitoIdentityPool({
                client: new CognitoIdentityClient({
                    region: this.cognitoSettings.region
                }),
                identityPoolId: this.cognitoSettings.identityPoolId,
                logins: {
                    [`cognito-idp.${this.cognitoSettings.region}.amazonaws.com/${this.cognitoSettings.userPoolId}`]: () => firstValueFrom(this.authFacade.getUser$.pipe(map(u => u ? u.id_token : void 0)))
                }
            })
        });
    }
    isImage({ file }) {
        return file.type && file.type.indexOf("image/") === 0;
    }
    isVideo({ file }) {
        return file.type && file.type.indexOf("video/") === 0;
    }
    static {
        this.ɵfac = function FilesService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FilesService)(i0.ɵɵinject(MEDIA_SETTINGS), i0.ɵɵinject(COGNITO_SETTINGS), i0.ɵɵinject(i1$1.HttpClient), i0.ɵɵinject(i2.AuthFacade));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _FilesService,
            factory: _FilesService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilesService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: MediaSettings,
            decorators: [{
                    type: Inject,
                    args: [MEDIA_SETTINGS]
                }]
        }, {
            type: i4.CognitoSettings,
            decorators: [{
                    type: Inject,
                    args: [COGNITO_SETTINGS]
                }]
        }, {
            type: i1$1.HttpClient
        }, {
            type: i2.AuthFacade
        }], null);
})();
export { CloudinaryUploadResponse, FilesService, MEDIA_SETTINGS, MediaFile, MediaModule, MediaSettings, MediafilePaneRendererComponent };
