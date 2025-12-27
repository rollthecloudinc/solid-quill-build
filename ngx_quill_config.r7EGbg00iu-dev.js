import "@nf-internal/chunk-VTXF2OHE";
// node_modules/ngx-quill/fesm2022/ngx-quill-config.mjs
import * as i0 from "@angular/core";
import { InjectionToken, NgModule, makeEnvironmentProviders } from "@angular/core";
var defaultModules = {
    toolbar: [["bold", "italic", "underline", "strike"],
        // toggled buttons
        ["blockquote", "code-block"], [{
                header: 1
            }, {
                header: 2
            }],
        // custom button values
        [{
                list: "ordered"
            }, {
                list: "bullet"
            }], [{
                script: "sub"
            }, {
                script: "super"
            }],
        // superscript/subscript
        [{
                indent: "-1"
            }, {
                indent: "+1"
            }],
        // outdent/indent
        [{
                direction: "rtl"
            }],
        // text direction
        [{
                size: ["small", false, "large", "huge"]
            }],
        // custom dropdown
        [{
                header: [1, 2, 3, 4, 5, 6, false]
            }], [{
                color: []
            }, {
                background: []
            }],
        // dropdown with defaults from theme
        [{
                font: []
            }], [{
                align: []
            }], ["clean"],
        // remove formatting button
        ["link", "image", "video"],
        // link and image, video
        ["table"]]
};
var QUILL_CONFIG_TOKEN = new InjectionToken("config", {
    providedIn: "root",
    factory: () => ({
        modules: defaultModules
    })
});
var QuillConfigModule = class _QuillConfigModule {
    static forRoot(config) {
        return {
            ngModule: _QuillConfigModule,
            providers: [{
                    provide: QUILL_CONFIG_TOKEN,
                    useValue: config
                }]
        };
    }
    static {
        this.ɵfac = function QuillConfigModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _QuillConfigModule)();
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _QuillConfigModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({});
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuillConfigModule, [{
            type: NgModule
        }], null, null);
})();
var provideQuillConfig = config => makeEnvironmentProviders([{
        provide: QUILL_CONFIG_TOKEN,
        useValue: config
    }]);
export { QUILL_CONFIG_TOKEN, QuillConfigModule, defaultModules, provideQuillConfig };
