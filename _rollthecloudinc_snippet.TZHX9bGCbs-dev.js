import { FlexLayoutModule } from "@nf-internal/chunk-DTFA3YPM";
import "@nf-internal/chunk-BSWOS4VH";
import { of } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/snippet/fesm2022/rollthecloudinc-snippet.mjs
import * as i0 from "@angular/core";
import { EventEmitter, forwardRef, Input, Output, Component, NgModule, Injectable } from "@angular/core";
import * as i2 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i1 from "@angular/forms";
import { Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, ReactiveFormsModule, FormsModule } from "@angular/forms";
import * as i3 from "angular-split";
import { AngularSplitModule } from "angular-split";
import { MaterialModule } from "@rollthecloudinc/material";
import { NgxJsonViewerModule } from "ngx-json-viewer";
import * as i10 from "ngx-markdown";
import { MarkdownModule } from "ngx-markdown";
import * as i9 from "@rollthecloudinc/utils";
import { UtilsModule } from "@rollthecloudinc/utils";
import { distinctUntilChanged, debounceTime, map } from "rxjs/operators";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/dialog";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/select";
function SnippetFormComponent_form_0_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function SnippetFormComponent_form_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "form", 3);
        i0.ɵɵlistener("ngSubmit", function SnippetFormComponent_form_0_Template_form_ngSubmit_0_listener() {
            i0.ɵɵrestoreView(_r1);
            const ctx_r1 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r1.submit());
        });
        i0.ɵɵelementStart(1, "mat-dialog-content")(2, "div", 4);
        i0.ɵɵtemplate(3, SnippetFormComponent_form_0_ng_container_3_Template, 1, 0, "ng-container", 5);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "mat-dialog-actions")(5, "button", 6);
        i0.ɵɵtext(6, "Save");
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        const formBodyTpl_r3 = i0.ɵɵreference(3);
        i0.ɵɵproperty("formGroup", ctx_r1.contentForm);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngTemplateOutlet", formBodyTpl_r3);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !ctx_r1.contentForm.valid);
    }
}
function SnippetFormComponent_div_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function SnippetFormComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 4);
        i0.ɵɵtemplate(1, SnippetFormComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 5);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        i0.ɵɵnextContext();
        const formBodyTpl_r3 = i0.ɵɵreference(3);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngTemplateOutlet", formBodyTpl_r3);
    }
}
function SnippetFormComponent_ng_template_2_ul_3_li_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "li");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const token_r4 = ctx.$implicit;
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(token_r4.key);
    }
}
function SnippetFormComponent_ng_template_2_ul_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 18);
        i0.ɵɵtemplate(1, SnippetFormComponent_ng_template_2_ul_3_li_1_Template, 2, 1, "li", 19);
        i0.ɵɵpipe(2, "keyvalue");
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("hidden", true);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 2, ctx_r1.tokens));
    }
}
function SnippetFormComponent_ng_template_2_classifieds_ui_dynamic_content_viewer_22_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "classifieds-ui-dynamic-content-viewer", 20);
        i0.ɵɵpipe(1, "markdown");
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("content", i0.ɵɵpipeBind1(1, 1, ctx_r1.preview));
    }
}
function SnippetFormComponent_ng_template_2_classifieds_ui_dynamic_content_viewer_23_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "classifieds-ui-dynamic-content-viewer", 20);
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("content", ctx_r1.preview);
    }
}
function SnippetFormComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "as-split", 7)(1, "as-split-area", 8)(2, "div");
        i0.ɵɵtemplate(3, SnippetFormComponent_ng_template_2_ul_3_Template, 3, 4, "ul", 9);
        i0.ɵɵelementStart(4, "mat-form-field")(5, "mat-label");
        i0.ɵɵtext(6, "Content Type");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-select", 10)(8, "mat-option", 11);
        i0.ɵɵtext(9, "Markdown");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 12);
        i0.ɵɵtext(11, "HTML");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-option", 13);
        i0.ɵɵtext(13, "JSON");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(14, "as-split", 14)(15, "as-split-area", 8)(16, "div");
        i0.ɵɵelement(17, "textarea", 15);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(18, "as-split-area", 8)(19, "div");
        i0.ɵɵelement(20, "textarea", 16);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(21, "as-split-area", 8);
        i0.ɵɵtemplate(22, SnippetFormComponent_ng_template_2_classifieds_ui_dynamic_content_viewer_22_Template, 2, 3, "classifieds-ui-dynamic-content-viewer", 17)(23, SnippetFormComponent_ng_template_2_classifieds_ui_dynamic_content_viewer_23_Template, 1, 1, "classifieds-ui-dynamic-content-viewer", 17);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("direction", ctx_r1.splitDirection)("formGroup", ctx_r1.contentForm);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx_r1.tokens);
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("cols", ctx_r1.cols)("rows", ctx_r1.rows);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cols", ctx_r1.cols)("rows", ctx_r1.rows);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx_r1.isMarkdown);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx_r1.isMarkdown);
    }
}
var Snippet = class {
    constructor(data) {
        if (data) {
            this.content = data.content;
            this.contentType = data.contentType;
            if (data.jsFile && data.jsFile !== "") {
                this.jsFile = data.jsFile;
            }
            if (data.jsScript && data.jsScript !== "") {
                this.jsScript = data.jsScript;
            }
        }
    }
};
var SnippetFormComponent = class _SnippetFormComponent {
    set snippet(snippet) {
        if (snippet !== void 0) {
            this.contentForm.setValue(__spreadProps(__spreadValues({}, snippet), {
                jsScript: snippet.jsScript && snippet.jsScript !== "" ? snippet.jsScript : ""
            }));
        }
    }
    constructor(fb) {
        this.fb = fb;
        this.submitted = new EventEmitter();
        this.splitDirection = "vertical";
        this.rows = 40;
        this.cols = 100;
        this.rootForm = true;
        this.onTouched = () => { };
        this.contentForm = this.fb.group({
            content: this.fb.control("", Validators.required),
            contentType: this.fb.control("", Validators.required),
            jsScript: this.fb.control("")
        });
        this.isMarkdown = false;
        this.contentEditorOptions = {
            theme: "vs-dark",
            language: "text/html"
            /*, automaticLayout: true*/
        };
    }
    ngOnInit() {
        this.contentForm.get("content").valueChanges.pipe(distinctUntilChanged(), debounceTime(500), map(v => this.tokens !== void 0 ? this.replaceTokens(v) : v)).subscribe(v => {
            this.preview = v;
        });
        this.contentForm.get("contentType").valueChanges.subscribe(v => {
            this.isMarkdown = v === "text/markdown";
        });
    }
    writeValue(val) {
        if (val) {
            console.log(`write value: ${val}`);
            this.contentForm.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.contentForm.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.contentForm.disable();
        }
        else {
            this.contentForm.enable();
        }
    }
    validate(c) {
        return this.contentForm.valid ? null : {
            invalidForm: {
                valid: false,
                message: "snippet is invalid"
            }
        };
    }
    submit() {
        this.submitted.emit(new Snippet({
            content: this.contentForm.get("content").value,
            contentType: this.contentForm.get("contentType").value,
            jsScript: this.contentForm.get("jsScript").value
        }));
    }
    replaceTokens(v) {
        if (this.tokens) {
            this.tokens.forEach((value, key) => {
                v = v.replace(`[${key}]`, `${value} [token = '${key}']`);
            });
        }
        return v;
    }
    addScript() {
        let script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    static {
        this.ɵfac = function SnippetFormComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _SnippetFormComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _SnippetFormComponent,
            selectors: [["classifieds-ui-snippet-form"]],
            inputs: {
                tokens: "tokens",
                splitDirection: "splitDirection",
                rows: "rows",
                cols: "cols",
                rootForm: "rootForm",
                snippet: "snippet"
            },
            outputs: {
                submitted: "submitted"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _SnippetFormComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _SnippetFormComponent),
                        multi: true
                    }])],
            decls: 4,
            vars: 2,
            consts: [["formBodyTpl", ""], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "content-inner", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "content-inner"], [4, "ngTemplateOutlet"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"], [3, "direction", "formGroup"], ["size", "50"], [3, "hidden", 4, "ngIf"], ["required", "", "formControlName", "contentType"], ["value", "text/markdown"], ["value", "text/html"], ["value", "application/json"], ["direction", "horizontal"], ["formControlName", "content", 3, "cols", "rows"], ["formControlName", "jsScript", 3, "cols", "rows"], [3, "content", 4, "ngIf"], [3, "hidden"], [4, "ngFor", "ngForOf"], [3, "content"]],
            template: function SnippetFormComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵtemplate(0, SnippetFormComponent_form_0_Template, 7, 3, "form", 1)(1, SnippetFormComponent_div_1_Template, 2, 1, "div", 2)(2, SnippetFormComponent_ng_template_2_Template, 24, 9, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                }
                if (rf & 2) {
                    i0.ɵɵproperty("ngIf", ctx.rootForm);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", !ctx.rootForm);
                }
            },
            dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i3.SplitComponent, i3.SplitAreaDirective, i4.MatOption, i5.MatButton, i6.MatDialogClose, i6.MatDialogActions, i6.MatDialogContent, i7.MatFormField, i7.MatLabel, i8.MatSelect, i9.DynamicContentViewer, i2.KeyValuePipe, i10.MarkdownPipe],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnippetFormComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-snippet-form",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SnippetFormComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => SnippetFormComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<form *ngIf="rootForm" [formGroup]="contentForm" (ngSubmit)="submit()">\n  <mat-dialog-content>\n    <div class="content-inner">\n       <ng-container *ngTemplateOutlet="formBodyTpl"></ng-container>\n    </div>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button type="submit" mat-raised-button color="primary" mat-dialog-close [disabled]="!contentForm.valid">Save</button>\n  </mat-dialog-actions>\n</form>\n\n<div *ngIf="!rootForm" class="content-inner">\n  <ng-container *ngTemplateOutlet="formBodyTpl"></ng-container>\n</div>\n\n<ng-template #formBodyTpl>\n  <as-split [direction]="splitDirection" [formGroup]="contentForm">\n    <as-split-area size="50">\n      <div>\n        <ul [hidden]="true" *ngIf="tokens">\n          <li *ngFor="let token of tokens | keyvalue">{{ token.key }}</li>\n        </ul>\n        <mat-form-field>\n          <mat-label>Content Type</mat-label>\n          <mat-select required formControlName="contentType">\n            <mat-option value="text/markdown">Markdown</mat-option>\n            <mat-option value="text/html">HTML</mat-option>\n            <mat-option value="application/json">JSON</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <as-split direction="horizontal">\n        <as-split-area size="50">\n          <div>\n            <textarea formControlName="content" [cols]="cols" [rows]="rows"></textarea>\n            <!-- <ngx-monaco-editor [options]="contentEditorOptions"></ngx-monaco-editor> -->\n          </div>\n        </as-split-area>\n        <as-split-area size="50">\n          <div>\n            <textarea formControlName="jsScript" [cols]="cols" [rows]="rows"></textarea>\n            <!-- <ngx-monaco-editor formControlName="jsScript"></ngx-monaco-editor> -->\n          </div>\n        </as-split-area>\n      </as-split>\n    </as-split-area>\n    <as-split-area size="50">\n      <classifieds-ui-dynamic-content-viewer *ngIf="isMarkdown" [content]="preview | markdown"></classifieds-ui-dynamic-content-viewer>\n      <classifieds-ui-dynamic-content-viewer *ngIf="!isMarkdown" [content]="preview"></classifieds-ui-dynamic-content-viewer>\n    </as-split-area>\n  </as-split>\n</ng-template>\n'
                }]
        }], () => [{
            type: i1.UntypedFormBuilder
        }], {
        submitted: [{
                type: Output
            }],
        tokens: [{
                type: Input
            }],
        splitDirection: [{
                type: Input
            }],
        rows: [{
                type: Input
            }],
        cols: [{
                type: Input
            }],
        rootForm: [{
                type: Input
            }],
        snippet: [{
                type: Input
            }]
    });
})();
var SnippetModule = class _SnippetModule {
    static {
        this.ɵfac = function SnippetModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _SnippetModule)();
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _SnippetModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule, ReactiveFormsModule, FormsModule, FlexLayoutModule, AngularSplitModule, MaterialModule, NgxJsonViewerModule, MarkdownModule, UtilsModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnippetModule, [{
            type: NgModule,
            args: [{
                    declarations: [SnippetFormComponent],
                    imports: [CommonModule, ReactiveFormsModule, FormsModule, FlexLayoutModule, AngularSplitModule, MaterialModule, NgxJsonViewerModule, MarkdownModule, UtilsModule
                        // MonacoEditorModule
                    ],
                    exports: [SnippetFormComponent]
                }]
        }], null, null);
})();
var SnippetParserService = class _SnippetParserService {
    parseSnippet({ snippet }) {
        return of(snippet.content);
    }
    static {
        this.ɵfac = function SnippetParserService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _SnippetParserService)();
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _SnippetParserService,
            factory: _SnippetParserService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnippetParserService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
export { Snippet, SnippetFormComponent, SnippetModule, SnippetParserService };
