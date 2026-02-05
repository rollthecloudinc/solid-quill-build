import "@nf-internal/chunk-2AVGQ2MQ";
import * as o from "@angular/core";
import { InjectionToken as n, makeEnvironmentProviders as d } from "@angular/core";
var l = { toolbar: [["bold", "italic", "underline", "strike"], ["blockquote", "code-block"], [{ header: 1 }, { header: 2 }], [{ list: "ordered" }, { list: "bullet" }], [{ script: "sub" }, { script: "super" }], [{ indent: "-1" }, { indent: "+1" }], [{ direction: "rtl" }], [{ size: ["small", !1, "large", "huge"] }], [{ header: [1, 2, 3, 4, 5, 6, !1] }], [{ color: [] }, { background: [] }], [{ font: [] }], [{ align: [] }], ["clean"], ["link", "image", "video"], ["table"]] }, i = new n("config", { providedIn: "root", factory: () => ({ modules: l }) }), c = (() => { class e {
    static forRoot(t) { return { ngModule: e, providers: [{ provide: i, useValue: t }] }; }
    static { this.\u0275fac = function (r) { return new (r || e); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({}); }
} return e; })(), u = e => d([{ provide: i, useValue: e }]);
export { i as QUILL_CONFIG_TOKEN, c as QuillConfigModule, l as defaultModules, u as provideQuillConfig };
