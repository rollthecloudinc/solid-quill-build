import { a as C } from "@nf-internal/chunk-VJMH5IEE";
import { e as v, g as h } from "@nf-internal/chunk-M4JCPEPJ";
import { A as w, f as u, z as f } from "@nf-internal/chunk-STIBVO4O";
import { a as y } from "@nf-internal/chunk-2AVGQ2MQ";
import * as r from "@angular/core";
import { InjectionToken as D } from "@angular/core";
import { CommonModule as F } from "@angular/common";
import * as I from "@rollthecloudinc/content";
import { ContentPlugin as T } from "@rollthecloudinc/content";
import "@rollthecloudinc/awcog";
import { COGNITO_SETTINGS as U } from "@rollthecloudinc/awcog";
import { catchError as S, map as j } from "rxjs/operators";
import { Upload as E } from "@aws-sdk/lib-storage";
import { fromCognitoIdentityPool as k } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient as $ } from "@aws-sdk/client-cognito-identity";
import { S3Client as A } from "@aws-sdk/client-s3";
import * as M from "@angular/common/http";
import * as P from "@rollthecloudinc/auth";
var B = (() => { class i {
    static { this.\u0275fac = function (n) { return new (n || i); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-mediafile-pane-renderer"]], standalone: !1, decls: 1, vars: 0, template: function (n, a) { n & 1 && r.\u0275\u0275text(0, "Media File"); }, encapsulation: 2 }); }
} return i; })(), N = () => new T({ id: "media_file", title: "Media File", selectionComponent: void 0, editorComponent: void 0, renderComponent: B, handler: void 0 }), ne = (() => { class i {
    constructor(t) { t.register(N()); }
    static { this.\u0275fac = function (n) { return new (n || i)(r.\u0275\u0275inject(I.ContentPluginManager)); }; }
    static { this.\u0275mod = r.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = r.\u0275\u0275defineInjector({ imports: [F] }); }
} return i; })(), _ = new D("Media Settings"), b = class {
    constructor(e) { e && (this.endpointUrl = e.endpointUrl, this.cloudinaryUrl = e.cloudinaryUrl, this.uploadPreset = e.uploadPreset, this.imageUrl = e.imageUrl, this.bucket = e.bucket, this.prefix = e.prefix); }
}, g = class {
    constructor(e) { e && (this.id = e.id, this.contentType = e.contentType, this.contentDisposition = e.contentDisposition, this.path = e.path, this.fileName = e.fileName, this.length = e.length, this.extension = e.extension ? e.extension : void 0, this.realPath = e.realPath && e.realPath !== "" ? e.realPath : void 0); }
}, x = class {
    constructor(e) { e && (this.public_id = e.public_id, this.format = e.format, this.original_filename = e.original_filename, this.bytes = e.bytes); }
}, ie = (() => { class i {
    constructor(t, n, a, s) { this.settings = t, this.cognitoSettings = n, this.http = a, this.authFacade = s; }
    bulkUpload({ files: t, fileNameOverride: n, nocache: a }) { let s = []; return t.forEach(o => { if (o) {
        let l = new FormData;
        l.append("File", o, n || o.name), s.push(this.http.post(this.settings.endpointUrl, l).pipe(S(p => w(new Error("Error uploading images.")))));
    } }), s.length > 0 ? h(s) : f([]); }
    bulkUploadS3({ files: t, fileNameOverride: n, nocache: a }) { let s = []; return t.forEach(o => { o && s.push(new u(l => { let p = n || C(), [c, d] = o.name.split(".", 2), m = p + (d ? "." + d : ""); new E({ client: this.buildClient(), params: y({ Bucket: this.settings.bucket, Key: this.settings.prefix + m, Body: o, ContentType: o.type }, a ? { CacheControl: "no-cache" } : {}) }).done().then(() => { l.next(new g({ id: p, contentType: o.type, contentDisposition: "", path: m, realPath: this.settings.prefix + m, length: o.size, fileName: o.name, extension: d && d !== "" ? d : void 0 })), l.complete(); }); })); }), s.length > 0 ? h(s) : f([]); }
    convertToFiles(t) { let n = t.map(a => new u(s => { fetch(`${this.settings.imageUrl}/${a.path}`).then(o => { o.blob().then(l => { new Promise(p => { let c = new FileReader; c.onload = () => p(c.result), c.readAsDataURL(l); }).then(p => { let c = this.convertDataURIToBinary(p), d = new File([c], a.fileName, { type: a.contentType }); s.next(d), s.complete(); }); }); }); })); return h(n); }
    convertDataURIToBinary(t) { for (var n = ";base64,", a = t.indexOf(n) + n.length, s = t.substring(a), o = window.atob(s), l = o.length, p = new Uint8Array(new ArrayBuffer(l)), c = 0; c < l; c++)
        p[c] = o.charCodeAt(c); return p; }
    buildClient() { return new A({ region: this.cognitoSettings.region, credentials: k({ client: new $({ region: this.cognitoSettings.region }), identityPoolId: this.cognitoSettings.identityPoolId, logins: { [`cognito-idp.${this.cognitoSettings.region}.amazonaws.com/${this.cognitoSettings.userPoolId}`]: () => v(this.authFacade.getUser$.pipe(j(t => t ? t.id_token : void 0))) } }) }); }
    isImage({ file: t }) { return t.type && t.type.indexOf("image/") === 0; }
    isVideo({ file: t }) { return t.type && t.type.indexOf("video/") === 0; }
    static { this.\u0275fac = function (n) { return new (n || i)(r.\u0275\u0275inject(_), r.\u0275\u0275inject(U), r.\u0275\u0275inject(M.HttpClient), r.\u0275\u0275inject(P.AuthFacade)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })();
export { x as CloudinaryUploadResponse, ie as FilesService, _ as MEDIA_SETTINGS, g as MediaFile, ne as MediaModule, b as MediaSettings, B as MediafilePaneRendererComponent };
