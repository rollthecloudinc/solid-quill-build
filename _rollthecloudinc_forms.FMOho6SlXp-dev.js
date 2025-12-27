import { require_index_umd } from "@nf-internal/chunk-NR6RSCOY";
import { v4_default } from "@nf-internal/chunk-OLWRG54F";
import { forkJoin, iif } from "@nf-internal/chunk-BSWOS4VH";
import { BehaviorSubject, ReplaySubject, Subject, combineLatest, filter, map, mergeMap, of, switchMap, take, tap } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues, __toESM } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/forms/fesm2022/rollthecloudinc-forms.mjs
import * as i7 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { Injectable, Input, Directive, Component, Inject, NgModule } from "@angular/core";
import * as i6 from "@angular/forms";
import { UntypedFormControl, FormsModule as FormsModule$1, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@rollthecloudinc/material";
import * as i1$2 from "@rollthecloudinc/content";
import { ContentBinding, ContentPluginEditorOptions, ContentPlugin } from "@rollthecloudinc/content";
import * as i10$1 from "@rollthecloudinc/datasource";
import { DatasourceOptions, SelectOption, Dataset, mockDatasourceOptions, DatasourceModule } from "@rollthecloudinc/datasource";
import * as i5 from "@rollthecloudinc/ordain";
import { FormValidation, OrdainModule } from "@rollthecloudinc/ordain";
import { switchMap as switchMap2, map as map2, tap as tap$1, defaultIfEmpty, take as take$1, debounceTime, distinctUntilChanged, withLatestFrom } from "rxjs/operators";
var jpp = __toESM(require_index_umd(), 1);
import * as i1 from "@rollthecloudinc/attributes";
import * as i3 from "@rollthecloudinc/token";
import * as i2 from "@rollthecloudinc/panels";
import { PanelPageForm, Pane, StylePlugin } from "@rollthecloudinc/panels";
import * as rd from "recursive-diff";
import * as i8 from "@angular/material/input";
import * as i8$1 from "@angular/material/autocomplete";
import * as i10 from "@angular/material/select";
import * as i4 from "@rollthecloudinc/render";
import { RenderModule } from "@rollthecloudinc/render";
import * as i1$1 from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as i7$1 from "@angular/material/button";
import * as i8$2 from "@angular/material/radio";
import * as i7$2 from "@angular/material/slider";
import * as i7$3 from "@angular/material/slide-toggle";
import * as i7$4 from "@angular/material/checkbox";
import * as i7$5 from "@angular/material/datepicker";
import { Param, Mapping } from "@rollthecloudinc/dparam";
import * as i3$1 from "@rollthecloudinc/media";
import { MediaFile } from "@rollthecloudinc/media";
import * as i9 from "ngx-dropzone";
import { NgxDropzoneModule } from "ngx-dropzone";
function FormInputComponent_mat_error_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵelement(1, "druid-ordain-default-validation-error", 2);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵproperty("validators", ctx_r0.formSettings$.value == null ? null : ctx_r0.formSettings$.value.validation == null ? null : ctx_r0.formSettings$.value.validation.validators)("errors", ctx_r0.formControl.errors)("resolvedContext", ctx_r0.resolvedContext$.value);
    }
}
function FormSelectComponent_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 2);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const opt_r1 = ctx.$implicit;
        i0.ɵɵproperty("value", opt_r1.value);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(opt_r1.label);
    }
}
function FormSectionComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelement(1, "classifieds-ui-render-pane", 4);
        i0.ɵɵelementStart(2, "button", 3);
        i0.ɵɵlistener("click", function FormSectionComponent_div_2_Template_button_click_2_listener() {
            const i_r2 = i0.ɵɵrestoreView(_r1).index;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.remove$.next(i_r2));
        });
        i0.ɵɵtext(3, "Remove");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const pane_r4 = ctx.$implicit;
        const i_r2 = ctx.index;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵproperty("formControlName", i_r2)("pluginName", pane_r4.contentPlugin)("settings", pane_r4.settings)("name", pane_r4.name)("label", pane_r4.label)("contexts", pane_r4.contexts)("panes", ctx_r2.panes)("resolvedContext", pane_r4.resolvedContext)("indexPosition", i_r2)("ancestory", ctx_r2.ancestory);
    }
}
function FormTextareaComponent_mat_error_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵelement(1, "druid-ordain-default-validation-error", 2);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵproperty("validators", ctx_r0.formSettings$.value == null ? null : ctx_r0.formSettings$.value.validation == null ? null : ctx_r0.formSettings$.value.validation.validators)("errors", ctx_r0.formControl.errors)("resolvedContext", ctx_r0.resolvedContext$.value);
    }
}
function FormElementEditorComponent_mat_option_11_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 9);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const bo_r1 = ctx.$implicit;
        i0.ɵɵproperty("value", bo_r1);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(bo_r1);
    }
}
function FormRadiogroupComponent_mat_radio_button_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-radio-button", 2);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const opt_r1 = ctx.$implicit;
        i0.ɵɵproperty("value", opt_r1.value);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(opt_r1.label);
    }
}
function FormAutocompleteComponent_mat_option_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 4);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const opt_r2 = ctx.$implicit;
        i0.ɵɵproperty("value", opt_r2);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(opt_r2.label);
    }
}
function FormMediaComponent_ng_container_3_ngx_dropzone_image_preview_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "ngx-dropzone-image-preview", 4);
        i0.ɵɵlistener("removed", function FormMediaComponent_ng_container_3_ngx_dropzone_image_preview_1_Template_ngx_dropzone_image_preview_removed_0_listener() {
            i0.ɵɵrestoreView(_r1);
            const f_r2 = i0.ɵɵnextContext().$implicit;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.onRemove(f_r2));
        });
        i0.ɵɵelementStart(1, "ngx-dropzone-label");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const f_r2 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵproperty("file", f_r2)("removable", true);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate2("", f_r2.name, " (", f_r2.type, ")");
    }
}
function FormMediaComponent_ng_container_3_ngx_dropzone_video_preview_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "ngx-dropzone-video-preview", 4);
        i0.ɵɵlistener("removed", function FormMediaComponent_ng_container_3_ngx_dropzone_video_preview_2_Template_ngx_dropzone_video_preview_removed_0_listener() {
            i0.ɵɵrestoreView(_r4);
            const f_r2 = i0.ɵɵnextContext().$implicit;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.onRemove(f_r2));
        });
        i0.ɵɵelementStart(1, "ngx-dropzone-label");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const f_r2 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵproperty("file", f_r2)("removable", true);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate2("", f_r2.name, " (", f_r2.type, ")");
    }
}
function FormMediaComponent_ng_container_3_ngx_dropzone_preview_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "ngx-dropzone-preview", 5);
        i0.ɵɵlistener("removed", function FormMediaComponent_ng_container_3_ngx_dropzone_preview_3_Template_ngx_dropzone_preview_removed_0_listener() {
            i0.ɵɵrestoreView(_r5);
            const f_r2 = i0.ɵɵnextContext().$implicit;
            const ctx_r2 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r2.onRemove(f_r2));
        });
        i0.ɵɵelementStart(1, "ngx-dropzone-label");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const f_r2 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵproperty("removable", true);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate2("", f_r2.name, " (", f_r2.type, ")");
    }
}
function FormMediaComponent_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, FormMediaComponent_ng_container_3_ngx_dropzone_image_preview_1_Template, 3, 4, "ngx-dropzone-image-preview", 2)(2, FormMediaComponent_ng_container_3_ngx_dropzone_video_preview_2_Template, 3, 4, "ngx-dropzone-video-preview", 2)(3, FormMediaComponent_ng_container_3_ngx_dropzone_preview_3_Template, 3, 3, "ngx-dropzone-preview", 3);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const f_r2 = ctx.$implicit;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r2.isType(f_r2, "image"));
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx_r2.isType(f_r2, "video"));
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx_r2.isType(f_r2, "image") && !ctx_r2.isType(f_r2, "video"));
    }
}
var FormSettings = class {
    constructor(data) {
        if (data) {
            this.value = data.value ? data.value : "";
            if (data.datasourceBinding && typeof data.datasourceBinding === "object") {
                this.datasourceBinding = new ContentBinding(data.datasourceBinding);
            }
            if (data.datasourceOptions && typeof data.datasourceOptions === "object") {
                this.datasourceOptions = new DatasourceOptions(data.datasourceOptions);
            }
            if (data.validation) {
                this.validation = new FormValidation(data.validation);
            }
        }
    }
};
var FormSectionForm = class {
    constructor(data) {
        if (data) {
            this.valuesMapping = data.valuesMapping;
        }
    }
};
var OptionsResolverService = class _OptionsResolverService {
    constructor(tokenizerService, datasourceContentHandler, panelResolver, attributeSerializer) {
        this.tokenizerService = tokenizerService;
        this.datasourceContentHandler = datasourceContentHandler;
        this.panelResolver = panelResolver;
        this.attributeSerializer = attributeSerializer;
    }
    resolveElementOptions(instance, metadata) {
        return of(instance).pipe(switchMap2(i => {
            if (i.datasourceBinding && i.datasourceBinding.id && i.datasourceBinding.id !== "") {
                const dataPane = metadata.has("panes") ? metadata.get("panes").find(p => p.name === i.datasourceBinding.id) : void 0;
                return this.panelResolver.dataPanes(metadata.get("panes")).pipe(switchMap2(dataPanes => dataPane ? this.datasourceContentHandler.fetchDynamicData(dataPane.settings, new Map([...metadata, ["dataPanes", dataPanes]])) : of([])), map2(d => [i, d.results]));
            }
            else {
                return of([i, []]);
            }
        }), map2(([i, d]) => [i, i.datasourceOptions && i.datasourceOptions.query !== "" ? jpp.JSONPath({
                path: i.datasourceOptions.query,
                json: d
            }) : d]), switchMap2(([i, d]) => this.mapDataOptions(i, d)));
    }
    mapDataOptions(instance, data) {
        return of([instance, data]).pipe(map2(([i, d]) => [i, d, d ? d.map(r => this.tokenizerService.generateGenericTokens(r)) : []]), map2(([i, d, tokens]) => tokens.map(t => this.mapDataItem(i, t))));
    }
    mapDataItem(instance, tokens) {
        return new SelectOption({
            value: this.tokenizerService.replaceTokens(`${instance.datasourceOptions.valueMapping}`, tokens),
            label: this.tokenizerService.replaceTokens(`${instance.datasourceOptions.labelMapping}`, tokens),
            dataItem: void 0
            // display: this.tokenizerService.replaceTokens(`${instance.datasourceOptions.labelMapping}`, tokens)
        });
    }
    hasDataOptions(instance) {
        return instance.datasourceBinding && instance.datasourceBinding.id && instance.datasourceBinding.id !== "";
    }
    static {
        this.ɵfac = function OptionsResolverService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _OptionsResolverService)(i0.ɵɵinject(i3.TokenizerService), i0.ɵɵinject(i2.DatasourceContentHandler), i0.ɵɵinject(i2.PanelResolverService), i0.ɵɵinject(i1.AttributeSerializerService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _OptionsResolverService,
            factory: _OptionsResolverService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OptionsResolverService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i3.TokenizerService
        }, {
            type: i2.DatasourceContentHandler
        }, {
            type: i2.PanelResolverService
        }, {
            type: i1.AttributeSerializerService
        }], null);
})();
var FormsContextHelperService = class _FormsContextHelperService {
    constructor(tokenizerService) {
        this.tokenizerService = tokenizerService;
        this.cachedResolvedContexts = [];
        this.scheduleResolution$ = new Subject();
        this.scheduleResolutionSub = this.scheduleResolution$.pipe(tap(({ resolvedContext, index }) => {
            let tokens = /* @__PURE__ */ new Map();
            if (resolvedContext) {
                for (const name in resolvedContext) {
                    if (!(resolvedContext[name] instanceof PanelPageForm)) {
                        tokens = new Map([...tokens, ...this.tokenizerService.generateGenericTokens(resolvedContext[name], name === "_root" ? "" : name)]);
                    }
                }
            }
            this.cachedResolvedContexts[index].resolution$.next(tokens);
        })).subscribe();
    }
    resolveContexts({ resolvedContext }) {
        let cachedIndex = this.cachedResolvedContexts.findIndex(({ rContext }) => {
            const diff = rd.getDiff(rContext, resolvedContext);
            return diff.length === 0;
        });
        if (cachedIndex === -1) {
            console.log("resolved context no cache", resolvedContext);
            cachedIndex = this.cachedResolvedContexts.length;
            this.cachedResolvedContexts.push({
                rContext: resolvedContext,
                resolution$: new ReplaySubject()
            });
            this.scheduleResolution$.next({
                resolvedContext,
                index: cachedIndex
            });
        }
        else {
            console.log("resolved context cache hit", resolvedContext);
        }
        return this.cachedResolvedContexts[cachedIndex].resolution$.pipe(take(1));
    }
    static {
        this.ɵfac = function FormsContextHelperService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormsContextHelperService)(i0.ɵɵinject(i3.TokenizerService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _FormsContextHelperService,
            factory: _FormsContextHelperService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormsContextHelperService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i3.TokenizerService
        }], null);
})();
var FormElementBase = class _FormElementBase {
    set label(label) {
        this.label$.next(label);
    }
    set settings(settings) {
        this.settings$.next(settings);
    }
    set panes(panes) {
        this.panes$.next(panes);
    }
    set originPanes(originPanes) {
        this.originPanes$.next(originPanes);
    }
    set contexts(contexts) {
        this.contexts$.next(contexts);
    }
    set resolvedContext(resolvedContext) {
        this.resolvedContext$.next(resolvedContext);
    }
    constructor(attributeSerializer, optionsResolver, tokenizerService, formsContextHelper, vpm, controlContainer) {
        this.attributeSerializer = attributeSerializer;
        this.optionsResolver = optionsResolver;
        this.tokenizerService = tokenizerService;
        this.formsContextHelper = formsContextHelper;
        this.vpm = vpm;
        this.controlContainer = controlContainer;
        this.formControl = new UntypedFormControl("");
        this.formControlValueChangesSub = this.formControl.valueChanges.pipe(tap$1(value => console.log("serialized form value", this.attributeSerializer.serialize(value, "value"))), tap$1(value => this.controlContainer.control.get("settings").setValue([this.attributeSerializer.serialize(value, "value")]))).subscribe();
        this.formSettings$ = new BehaviorSubject(void 0);
        this.settings$ = new BehaviorSubject([]);
        this.options$ = new BehaviorSubject([]);
        this.init$ = new Subject();
        this.afterViewInit$ = new Subject();
        this.panes$ = new BehaviorSubject([]);
        this.originPanes$ = new BehaviorSubject([]);
        this.contexts$ = new BehaviorSubject([]);
        this.resolvedContext$ = new BehaviorSubject(void 0);
        this.value$ = new Subject();
        this.label$ = new BehaviorSubject(void 0);
        this.settingsSub = this.settings$.pipe(map2(settings => settings ? this.settingsToObject(this.attributeSerializer.deserializeAsObject(settings)) : void 0), tap$1(s => this.formSettings$.next(s))).subscribe();
        this.loadOptionsSub = combineLatest([this.formSettings$, this.panes$, this.originPanes$, this.contexts$, this.init$]).pipe(map2(([settings, panes, originPanes, contexts]) => ({
            settings,
            metadata: /* @__PURE__ */ new Map([["panes", [...(panes && Array.isArray(panes) ? panes : []), ...(originPanes && Array.isArray(originPanes) ? originPanes : [])]], ["contexts", contexts]])
        })), switchMap2(({ settings, metadata }) => this.optionsResolver.resolveElementOptions(settings, metadata)), tap$1(options => this.options$.next(options))).subscribe();
        this.renderContentSub = combineLatest([this.formSettings$, this.resolvedContext$, this.afterViewInit$]).pipe(map2(([settings, resolvedContext]) => ({
            settings,
            resolvedContext
        })), switchMap2(({ settings, resolvedContext }) => this.formsContextHelper.resolveContexts({
            resolvedContext
        }).pipe(map2(tokens => ({
            settings,
            tokens
        })))), switchMap2(({ settings, tokens }) => forkJoin(settings.validation && settings.validation.validators ? settings.validation.validators.map(v => this.vpm.getPlugin(v.validator).pipe(switchMap2(p => p.builder({
            v,
            serialized: false
        }).pipe(map2(vf => ({
            v,
            vf
        })))))) : []).pipe(map2(validators => ({
            settings,
            tokens,
            validators
        })), defaultIfEmpty({
            settings,
            tokens,
            validators: []
        }))), switchMap2(({ settings, tokens, validators }) => forkJoin(settings.validation && settings.validation.validators ? settings.validation.validators.map(v => this.vpm.getPlugin(v.validator).pipe(switchMap2(p => p.builder({
            v,
            serialized: true
        }).pipe(map2(vf => ({
            v,
            vf
        })))))) : []).pipe(map2(validatorsSerialized => ({
            settings,
            tokens,
            validators,
            validatorsSerialized
        })), defaultIfEmpty({
            settings,
            tokens,
            validators,
            validatorsSerialized: []
        }))), tap$1(({ settings, tokens, validators, validatorsSerialized }) => {
            this.formControl.setAsyncValidators(validators.map(({ vf }) => vf));
            this.controlContainer.control.get("settings").setAsyncValidators(validatorsSerialized.map(({ vf }) => vf));
            this.formControl.updateValueAndValidity();
            this.controlContainer.control.updateValueAndValidity();
            if (tokens !== void 0) {
                this.tokens = tokens;
            }
            if (settings.value && settings.value !== null && settings.value !== "") {
                if (settings.value.indexOf(".$i.") !== -1 || settings.value.indexOf(".$j.") !== -1 || settings.value.indexOf(".$k.") !== -1) {
                    console.log(settings.value, this.ancestory);
                }
                const pieces = settings.value.split("$i");
                const replacements = pieces.map((_, i) => this.ancestory[i * 1 + (3 + (i === 0 ? 0 : 3))]);
                const path = pieces.reduce((prev, c, i) => [...prev, i === 0 ? "" : i - 1 < replacements.length ? `${replacements[i - 1]}` : "", c], []).join("");
                console.log("path", path);
                const value = this.replaceTokens(path);
                this.formControl.setValue(value);
                const extraTokens = this.tokenizerService.discoverTokens(value, true);
                if (extraTokens.length !== 0) {
                    if (extraTokens[0].trim().lastIndexOf(".id") === extraTokens[0].trim().length - 3) {
                        const id = v4_default();
                        this.formControl.setValue(id);
                        this.value$.next(id);
                    }
                    else {
                        const properties = Array.from(tokens).filter(([k]) => k.indexOf(path.substr(1, path.length - 2)) === 0);
                        if (properties.length !== 0) {
                            const object = properties.reduce((p, [k, v]) => __spreadProps(__spreadValues({}, p), {
                                [k.substr(k.lastIndexOf(".") + 1)]: v
                            }), {});
                            this.formControl.setValue(object);
                            this.value$.next(object);
                        }
                        else {
                            const v = this.tokenizerService.replaceTokens(settings.value, new Map(Array.from(extraTokens).map(k => [k, ""])));
                            this.formControl.setValue(v);
                            this.value$.next(v);
                        }
                    }
                }
                else {
                    this.value$.next(value);
                }
            }
            else {
                this.formControl.setValue("");
            }
        }), take$1(1)).subscribe();
    }
    ngOnInit() {
        this.init$.next(void 0);
    }
    ngAfterViewInit() {
        this.afterViewInit$.next(void 0);
    }
    settingsToObject(s) {
        return new FormSettings(s);
    }
    replaceTokens(v) {
        if (this.tokens !== void 0) {
            this.tokens.forEach((value, key) => {
                v = v.split(`[${key}]`).join(`${value}`);
            });
        }
        return v;
    }
    markAsTouched() {
        this.formControl.markAllAsTouched();
    }
    static {
        this.ɵfac = function FormElementBase_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormElementBase)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(OptionsResolverService), i0.ɵɵdirectiveInject(i3.TokenizerService), i0.ɵɵdirectiveInject(FormsContextHelperService), i0.ɵɵdirectiveInject(i5.ValidationPluginManager), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
            type: _FormElementBase,
            selectors: [["", "druid-forms-form-element-base", ""]],
            inputs: {
                tokens: "tokens",
                label: "label",
                settings: "settings",
                panes: "panes",
                originPanes: "originPanes",
                contexts: "contexts",
                resolvedContext: "resolvedContext",
                ancestory: "ancestory"
            },
            standalone: false
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormElementBase, [{
            type: Directive,
            args: [{
                    selector: "[druid-forms-form-element-base]",
                    standalone: false
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: OptionsResolverService
        }, {
            type: i3.TokenizerService
        }, {
            type: FormsContextHelperService
        }, {
            type: i5.ValidationPluginManager
        }, {
            type: i6.ControlContainer
        }], {
        tokens: [{
                type: Input
            }],
        label: [{
                type: Input
            }],
        settings: [{
                type: Input
            }],
        panes: [{
                type: Input
            }],
        originPanes: [{
                type: Input
            }],
        contexts: [{
                type: Input
            }],
        resolvedContext: [{
                type: Input
            }],
        ancestory: [{
                type: Input
            }]
    });
})();
var FormInputComponent = class _FormInputComponent extends FormElementBase {
    constructor(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer) {
        super(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer);
    }
    static {
        this.ɵfac = function FormInputComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormInputComponent)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(OptionsResolverService), i0.ɵɵdirectiveInject(i3.TokenizerService), i0.ɵɵdirectiveInject(FormsContextHelperService), i0.ɵɵdirectiveInject(i5.ValidationPluginManager), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormInputComponent,
            selectors: [["druid-forms-form-input"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 6,
            vars: 5,
            consts: [["matInput", "", 3, "formControl"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]],
            template: function FormInputComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "mat-form-field")(1, "mat-label");
                    i0.ɵɵtext(2);
                    i0.ɵɵpipe(3, "async");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelement(4, "input", 0);
                    i0.ɵɵtemplate(5, FormInputComponent_mat_error_5_Template, 2, 3, "mat-error", 1);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵadvance(2);
                    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, ctx.label$));
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("formControl", ctx.formControl);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.formControl.invalid);
                }
            },
            dependencies: [i7.NgIf, i6.DefaultValueAccessor, i6.NgControlStatus, i6.FormControlDirective, i8.MatInput, i8.MatFormField, i8.MatLabel, i8.MatError, i5.DefaultValidationError, i7.AsyncPipe],
            styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormInputComponent, [{
            type: Component,
            args: [{
                    selector: "druid-forms-form-input",
                    standalone: false,
                    template: '<mat-form-field>\n  <mat-label>{{ label$ | async }}</mat-label>\n  <input matInput [formControl]="formControl">\n  <mat-error *ngIf="formControl.invalid">\n    <druid-ordain-default-validation-error [validators]="formSettings$.value?.validation?.validators" [errors]="formControl.errors" [resolvedContext]="resolvedContext$.value"></druid-ordain-default-validation-error>\n  </mat-error>\n</mat-form-field>',
                    styles: ["mat-form-field{display:block}\n"]
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: OptionsResolverService
        }, {
            type: i3.TokenizerService
        }, {
            type: FormsContextHelperService
        }, {
            type: i5.ValidationPluginManager
        }, {
            type: i6.ControlContainer
        }], null);
})();
var FormSelectComponent = class _FormSelectComponent extends FormElementBase {
    constructor(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer) {
        super(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer);
    }
    static {
        this.ɵfac = function FormSelectComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormSelectComponent)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(OptionsResolverService), i0.ɵɵdirectiveInject(i3.TokenizerService), i0.ɵɵdirectiveInject(FormsContextHelperService), i0.ɵɵdirectiveInject(i5.ValidationPluginManager), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormSelectComponent,
            selectors: [["druid-forms-form-select"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 7,
            vars: 7,
            consts: [[3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
            template: function FormSelectComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "mat-form-field")(1, "mat-label");
                    i0.ɵɵtext(2);
                    i0.ɵɵpipe(3, "async");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(4, "mat-select", 0);
                    i0.ɵɵtemplate(5, FormSelectComponent_mat_option_5_Template, 2, 2, "mat-option", 1);
                    i0.ɵɵpipe(6, "async");
                    i0.ɵɵelementEnd()();
                }
                if (rf & 2) {
                    i0.ɵɵadvance(2);
                    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, ctx.label$));
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("formControl", ctx.formControl);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 5, ctx.options$));
                }
            },
            dependencies: [i7.NgForOf, i6.NgControlStatus, i6.FormControlDirective, i8$1.MatOption, i8.MatFormField, i8.MatLabel, i10.MatSelect, i7.AsyncPipe],
            styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormSelectComponent, [{
            type: Component,
            args: [{
                    selector: "druid-forms-form-select",
                    standalone: false,
                    template: '<mat-form-field>\n  <mat-label>{{ label$ | async }}</mat-label>\n  <mat-select [formControl]="formControl">\n    <mat-option *ngFor="let opt of (options$ | async); let i = index" [value]="opt.value">{{ opt.label }}</mat-option>\n  </mat-select>\n</mat-form-field>',
                    styles: ["mat-form-field{display:block}\n"]
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: OptionsResolverService
        }, {
            type: i3.TokenizerService
        }, {
            type: FormsContextHelperService
        }, {
            type: i5.ValidationPluginManager
        }, {
            type: i6.ControlContainer
        }], null);
})();
var FormSectionComponent = class _FormSectionComponent {
    set settings(settings) {
        this.settings$.next(settings);
    }
    set resolvedContext(resolvedContext) {
        this.resolvedContext$.next(resolvedContext);
    }
    set panel(panel) {
        this.panel$.next(panel);
    }
    get panesFormArray() {
        return this.controlContainer.control.get("panes");
    }
    constructor(attributeSerializer, fb, controlContainer) {
        this.attributeSerializer = attributeSerializer;
        this.fb = fb;
        this.controlContainer = controlContainer;
        this.panes = [];
        this.originMappings = [];
        this.ancestory = [];
        this.add$ = new Subject();
        this.remove$ = new Subject();
        this.panes$ = new BehaviorSubject([]);
        this.settings$ = new Subject();
        this.resolvedContext$ = new Subject();
        this.panel$ = new Subject();
        this.afterViewInit$ = new Subject();
        this.addSub = this.add$.pipe(map2(() => new Pane(this.panes[0])), tap$1(() => this.panesFormArray.push(this.fb.control(""))), tap$1(paneCopy => this.panes.push(paneCopy))).subscribe();
        this.removeSub = this.remove$.pipe(tap$1(index => this.panesFormArray.removeAt(index)), tap$1(index => this.panes.splice(index, 1))).subscribe();
        this.populateDefaultValues = combineLatest([this.settings$.pipe(map2(s => s ? new FormSectionForm(this.attributeSerializer.deserializeAsObject(s)) : void 0)), this.resolvedContext$, this.panel$, this.afterViewInit$]).pipe(map2(([s, rc, p]) => ({
            s,
            rc,
            p
        })), tap$1(({ s }) => console.log(s.valuesMapping, this.ancestory)), map2(({ s, rc, p }) => {
            if (rc && s && s.valuesMapping && s.valuesMapping.trim() !== "") {
                const pieces = s.valuesMapping.split("[$i]");
                const replacements = pieces.map((_, i) => this.ancestory[i * 1 + 3]);
                const path = pieces.reduce((prev, c, i) => [...prev, i === 0 ? "" : i - 1 < replacements.length ? `[${replacements[i - 1]}]` : "", c], []).join("");
                console.log("path", path);
                const items = jpp.JSONPath({
                    path: `$.${path}.*`,
                    json: rc
                });
                return {
                    items,
                    s,
                    p
                };
            }
            else {
                return {
                    items: [],
                    p
                };
            }
        }), tap$1(({ items }) => {
            const len = items.length - this.panesFormArray.length;
            for (let i = 0; i < len; i++) {
                this.add$.next(void 0);
            }
        })).subscribe();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.afterViewInit$.next(void 0);
    }
    static {
        this.ɵfac = function FormSectionComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormSectionComponent)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(i6.UntypedFormBuilder), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormSectionComponent,
            selectors: [["classifieds-ui-form-section"]],
            inputs: {
                panes: "panes",
                originPanes: "originPanes",
                originMappings: "originMappings",
                ancestory: "ancestory",
                settings: "settings",
                resolvedContext: "resolvedContext",
                panel: "panel"
            },
            standalone: false,
            decls: 5,
            vars: 2,
            consts: [[3, "formGroup"], ["formArrayName", "panes"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "pluginName", "settings", "name", "label", "contexts", "panes", "resolvedContext", "indexPosition", "ancestory"]],
            template: function FormSectionComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementContainerStart(0, 0)(1, 1);
                    i0.ɵɵtemplate(2, FormSectionComponent_div_2_Template, 4, 10, "div", 2);
                    i0.ɵɵelementContainerEnd()();
                    i0.ɵɵelementStart(3, "button", 3);
                    i0.ɵɵlistener("click", function FormSectionComponent_Template_button_click_3_listener() {
                        return ctx.add$.next(void 0);
                    });
                    i0.ɵɵtext(4, "Add Item");
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.controlContainer.control);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("ngForOf", ctx.panes);
                }
            },
            dependencies: [i7.NgForOf, i6.NgControlStatus, i6.NgControlStatusGroup, i6.FormGroupDirective, i6.FormControlName, i6.FormArrayName, i4.RenderPaneComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormSectionComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-form-section",
                    standalone: false,
                    template: '<ng-container [formGroup]="controlContainer.control">\n  <ng-container formArrayName="panes">\n    <div *ngFor="let pane of panes; let i = index">\n      <classifieds-ui-render-pane [formControlName]="i" [pluginName]="pane.contentPlugin" [settings]="pane.settings" [name]="pane.name" [label]="pane.label" [contexts]="pane.contexts" [panes]="panes" [resolvedContext]="pane.resolvedContext" [indexPosition]="i" [ancestory]="ancestory"></classifieds-ui-render-pane>\n      <button type="button" (click)="remove$.next(i)">Remove</button>\n    </div>\n  </ng-container>\n</ng-container>\n<button type="button" (click)="add$.next(undefined)">Add Item</button>'
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: i6.UntypedFormBuilder
        }, {
            type: i6.ControlContainer
        }], {
        panes: [{
                type: Input
            }],
        originPanes: [{
                type: Input
            }],
        originMappings: [{
                type: Input
            }],
        ancestory: [{
                type: Input
            }],
        settings: [{
                type: Input
            }],
        resolvedContext: [{
                type: Input
            }],
        panel: [{
                type: Input
            }]
    });
})();
var FormTextareaComponent = class _FormTextareaComponent extends FormElementBase {
    constructor(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer) {
        super(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer);
        this.cols = 20;
        this.rows = 20;
    }
    static {
        this.ɵfac = function FormTextareaComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormTextareaComponent)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(OptionsResolverService), i0.ɵɵdirectiveInject(i3.TokenizerService), i0.ɵɵdirectiveInject(FormsContextHelperService), i0.ɵɵdirectiveInject(i5.ValidationPluginManager), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormTextareaComponent,
            selectors: [["druid-forms-form-textarea"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 6,
            vars: 7,
            consts: [["matInput", "", 3, "formControl", "cols", "rows"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]],
            template: function FormTextareaComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "mat-form-field")(1, "mat-label");
                    i0.ɵɵtext(2);
                    i0.ɵɵpipe(3, "async");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelement(4, "textarea", 0);
                    i0.ɵɵtemplate(5, FormTextareaComponent_mat_error_5_Template, 2, 3, "mat-error", 1);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵadvance(2);
                    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, ctx.label$));
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("formControl", ctx.formControl)("cols", ctx.cols)("rows", ctx.rows);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.formControl.invalid);
                }
            },
            dependencies: [i7.NgIf, i6.DefaultValueAccessor, i6.NgControlStatus, i6.FormControlDirective, i8.MatInput, i8.MatFormField, i8.MatLabel, i8.MatError, i5.DefaultValidationError, i7.AsyncPipe],
            styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormTextareaComponent, [{
            type: Component,
            args: [{
                    selector: "druid-forms-form-textarea",
                    standalone: false,
                    template: '<mat-form-field>\n    <mat-label>{{ label$ | async }}</mat-label>\n    <textarea matInput [formControl]="formControl" [cols]="cols" [rows]="rows"></textarea>\n    <mat-error *ngIf="formControl.invalid">\n        <druid-ordain-default-validation-error [validators]="formSettings$.value?.validation?.validators" [errors]="formControl.errors" [resolvedContext]="resolvedContext$.value"></druid-ordain-default-validation-error>\n    </mat-error>\n</mat-form-field>',
                    styles: ["mat-form-field{display:block}\n"]
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: OptionsResolverService
        }, {
            type: i3.TokenizerService
        }, {
            type: FormsContextHelperService
        }, {
            type: i5.ValidationPluginManager
        }, {
            type: i6.ControlContainer
        }], null);
})();
var AbstractFormContentHandler = class _AbstractFormContentHandler {
    constructor(attributeSerializer) {
        this.attributeSerializer = attributeSerializer;
    }
    handleFile(file) {
        return of([]);
    }
    handlesType(type) {
        return false;
    }
    implementsRendererOverride() {
        return false;
    }
    hasRendererOverride(settings) {
        return of(false);
    }
    isDynamic(settings) {
        return false;
    }
    isData(settings) {
        return false;
    }
    getBindings(settings, type, metadata) {
        if (type === "pane") {
            return this.toObject(settings).pipe(switchMap2(i => iif(() => i.datasourceBinding && i.datasourceBinding.id && i.datasourceBinding.id !== null, of([i.datasourceBinding]), of([]))));
        }
        else if (type === "context") {
            return of([]);
        }
        else {
            return of([]);
        }
    }
    fetchDynamicData(settings, metadata) {
        return of(new Dataset());
    }
    buildDynamicItems(settings, metadata) {
        return of([]);
    }
    toObject(settings) {
        return of(new FormSettings(this.attributeSerializer.deserializeAsObject(settings)));
    }
    buildSettings(instance) {
        return this.attributeSerializer.serialize(instance, "root").attributes;
    }
    stateDefinition(settings) {
        return of({
            autocomplete: {
                input: ""
            },
            value: void 0
        });
    }
    editorOptions(settings) {
        return of(new ContentPluginEditorOptions());
    }
    static {
        this.ɵfac = function AbstractFormContentHandler_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _AbstractFormContentHandler)(i0.ɵɵinject(i1.AttributeSerializerService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _AbstractFormContentHandler,
            factory: _AbstractFormContentHandler.ɵfac
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractFormContentHandler, [{
            type: Injectable
        }], () => [{
            type: i1.AttributeSerializerService
        }], null);
})();
var FormElementHandler = class _FormElementHandler extends AbstractFormContentHandler {
    static {
        this.ɵfac = /* @__PURE__ */ (() => {
            let ɵFormElementHandler_BaseFactory;
            return function FormElementHandler_Factory(__ngFactoryType__) {
                return (ɵFormElementHandler_BaseFactory || (ɵFormElementHandler_BaseFactory = i0.ɵɵgetInheritedFactory(_FormElementHandler)))(__ngFactoryType__ || _FormElementHandler);
            };
        })();
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _FormElementHandler,
            factory: _FormElementHandler.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormElementHandler, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var FormElementEditorComponent = class _FormElementEditorComponent {
    get paneGroup() {
        return this.data.panelFormGroup.get("panes").at(this.paneIndex);
    }
    constructor(data, dialogRef, fb, handler, attributeSerializer) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.handler = handler;
        this.attributeSerializer = attributeSerializer;
        this.datasourceOptions = mockDatasourceOptions;
        this.validation = new FormValidation({
            validators: []
        });
        this.bindableOptions = [];
        this.formGroup = this.fb.group({
            // type: this.fb.control('', [ Validators.required ]),
            // key: this.fb.control('', [ Validators.required ]),
            value: this.fb.control(""),
            /*options: this.fb.group({
              label: this.fb.control('')
            }),*/
            // rest: this.fb.control(''),
            datasourceOptions: this.fb.control(""),
            validation: this.fb.control(""),
            datasourceBinding: this.fb.group({
                id: this.fb.control(""),
                type: this.fb.control("pane")
            })
        });
        this.paneIndex = data.paneIndex;
        this.pane = data.pane;
    }
    ngOnInit() {
        if (this.data.pane) {
            this.handler.toObject(this.data.pane.settings).subscribe(i => {
                console.log("Form Editor Data Pane Data", i);
                this.formGroup.patchValue({
                    value: i.value,
                    datasourceOptions: i.datasourceOptions || mockDatasourceOptions,
                    datasourceBinding: {
                        id: i.datasourceBinding?.id || "",
                        type: "pane"
                    }
                });
                this.datasourceOptions = i.datasourceOptions || mockDatasourceOptions;
                this.validation = i.validation ? new FormValidation(i.validation) : new FormValidation({
                    validators: []
                });
            });
        }
        else {
            this.data.panelFormGroup.get("panes").push(this.fb.group({
                contentPlugin: this.data.plugin.id,
                name: new UntypedFormControl(""),
                label: new UntypedFormControl(""),
                rule: new UntypedFormControl(""),
                settings: this.fb.array([])
            }));
            this.paneIndex = this.data.panelFormGroup.get("panes").length - 1;
            this.pane = new Pane(this.data.panelFormGroup.get("panes").at(this.paneIndex).value);
        }
        this.bindableOptions = this.data.panelFormGroup.get("panes").controls.reduce((p, c) => c.get("name").value ? [...p, c.get("name").value] : p, []);
    }
    submit() {
        console.log(this.formGroup.value);
        const instance = new FormSettings(this.formGroup.value);
        console.log("losing options debug", instance);
        this.paneGroup.get("settings").clear();
        const controls = this.handler.buildSettings(instance).map(s => this.attributeSerializer.convertToGroup(s));
        controls.forEach(c => this.paneGroup.get("settings").push(c));
        this.dialogRef.close();
    }
    static {
        this.ɵfac = function FormElementEditorComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormElementEditorComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(i6.UntypedFormBuilder), i0.ɵɵdirectiveInject(FormElementHandler), i0.ɵɵdirectiveInject(i1.AttributeSerializerService));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormElementEditorComponent,
            selectors: [["druid-forms-form-element-editor"]],
            inputs: {
                bindableOptions: "bindableOptions"
            },
            standalone: false,
            decls: 17,
            vars: 3,
            consts: [[3, "ngSubmit", "formGroup"], ["fxLayout", "column"], ["matInput", "", "formControlName", "value"], ["formGroupName", "datasourceBinding"], ["required", "", "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "datasourceOptions"], ["formControlName", "validation", 3, "validation"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [3, "value"]],
            template: function FormElementEditorComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "form", 0);
                    i0.ɵɵlistener("ngSubmit", function FormElementEditorComponent_Template_form_ngSubmit_0_listener() {
                        return ctx.submit();
                    });
                    i0.ɵɵelementStart(1, "mat-dialog-content", 1)(2, "div")(3, "mat-form-field")(4, "mat-label");
                    i0.ɵɵtext(5, "Value");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelement(6, "input", 2);
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementStart(7, "mat-form-field", 3)(8, "mat-label");
                    i0.ɵɵtext(9, "Datasource");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(10, "mat-select", 4);
                    i0.ɵɵtemplate(11, FormElementEditorComponent_mat_option_11_Template, 2, 2, "mat-option", 5);
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelement(12, "classifieds-ui-datasource-options", 6)(13, "druid-ordain-validation-editor", 7);
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(14, "mat-dialog-actions")(15, "button", 8);
                    i0.ɵɵtext(16, "Save");
                    i0.ɵɵelementEnd()()();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.formGroup);
                    i0.ɵɵadvance(11);
                    i0.ɵɵproperty("ngForOf", ctx.bindableOptions);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("validation", ctx.validation);
                }
            },
            dependencies: [i7.NgForOf, i6.ɵNgNoValidate, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgControlStatusGroup, i6.RequiredValidator, i6.FormGroupDirective, i6.FormControlName, i6.FormGroupName, i8$1.MatOption, i7$1.MatButton, i1$1.MatDialogClose, i1$1.MatDialogActions, i1$1.MatDialogContent, i8.MatInput, i8.MatFormField, i8.MatLabel, i10.MatSelect, i10$1.DatasourceOptionsComponent, i5.ValidationEditorComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormElementEditorComponent, [{
            type: Component,
            args: [{
                    selector: "druid-forms-form-element-editor",
                    standalone: false,
                    template: '<form [formGroup]="formGroup" (ngSubmit)="submit()">\n  <mat-dialog-content fxLayout="column">\n    <!-- <div>\n      <mat-form-field>\n        <input matInput placeholder="Key" formControlName="key" required>\n      </mat-form-field>\n      <mat-form-field formGroupName="options">\n        <input matInput placeholder="label" formControlName="label">\n      </mat-form-field>\n    </div> -->\n\n    <div>\n      <mat-form-field>\n        <mat-label>Value</mat-label>\n        <input matInput formControlName="value">\n      </mat-form-field>\n    </div>\n\n    <!-- <classifieds-ui-rest-source-form formControlName="rest" [restSource]="rest" [contexts]="contexts"></classifieds-ui-rest-source-form> -->\n\n    <mat-form-field formGroupName="datasourceBinding">\n      <mat-label>Datasource</mat-label>\n      <mat-select required formControlName="id">\n        <mat-option *ngFor="let bo of bindableOptions" [value]="bo">{{ bo }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <classifieds-ui-datasource-options formControlName="datasourceOptions"></classifieds-ui-datasource-options>\n\n    <druid-ordain-validation-editor formControlName="validation" [validation]="validation"></druid-ordain-validation-editor>\n\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button type="submit" mat-raised-button color="primary" mat-dialog-close>Save</button>\n  </mat-dialog-actions>\n</form>'
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }]
        }, {
            type: i1$1.MatDialogRef
        }, {
            type: i6.UntypedFormBuilder
        }, {
            type: FormElementHandler
        }, {
            type: i1.AttributeSerializerService
        }], {
        bindableOptions: [{
                type: Input
            }]
    });
})();
var FormRadiogroupComponent = class _FormRadiogroupComponent extends FormElementBase {
    constructor(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer) {
        super(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer);
    }
    static {
        this.ɵfac = function FormRadiogroupComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormRadiogroupComponent)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(OptionsResolverService), i0.ɵɵdirectiveInject(i3.TokenizerService), i0.ɵɵdirectiveInject(FormsContextHelperService), i0.ɵɵdirectiveInject(i5.ValidationPluginManager), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormRadiogroupComponent,
            selectors: [["druid-forms-form-radiogroup"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 4,
            vars: 7,
            consts: [[3, "formControl", "aria-label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
            template: function FormRadiogroupComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "mat-radio-group", 0);
                    i0.ɵɵpipe(1, "async");
                    i0.ɵɵtemplate(2, FormRadiogroupComponent_mat_radio_button_2_Template, 2, 2, "mat-radio-button", 1);
                    i0.ɵɵpipe(3, "async");
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formControl", ctx.formControl);
                    i0.ɵɵariaProperty("aria-label", i0.ɵɵpipeBind1(1, 3, ctx.label$));
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 5, ctx.options$));
                }
            },
            dependencies: [i7.NgForOf, i6.NgControlStatus, i6.FormControlDirective, i8$2.MatRadioGroup, i8$2.MatRadioButton, i7.AsyncPipe],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormRadiogroupComponent, [{
            type: Component,
            args: [{
                    selector: "druid-forms-form-radiogroup",
                    standalone: false,
                    template: '<mat-radio-group [formControl]="formControl" [aria-label]="label$ | async">\n  <mat-radio-button *ngFor="let opt of (options$ | async); let i = index" [value]="opt.value">{{ opt.label }}</mat-radio-button>\n</mat-radio-group>'
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: OptionsResolverService
        }, {
            type: i3.TokenizerService
        }, {
            type: FormsContextHelperService
        }, {
            type: i5.ValidationPluginManager
        }, {
            type: i6.ControlContainer
        }], null);
})();
var FormSliderComponent = class _FormSliderComponent extends FormElementBase {
    constructor(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer) {
        super(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer);
    }
    static {
        this.ɵfac = function FormSliderComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormSliderComponent)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(OptionsResolverService), i0.ɵɵdirectiveInject(i3.TokenizerService), i0.ɵɵdirectiveInject(FormsContextHelperService), i0.ɵɵdirectiveInject(i5.ValidationPluginManager), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormSliderComponent,
            selectors: [["druid-forms-form-slider"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 3,
            vars: 4,
            consts: [[3, "formControl", "aria-label"], ["matSliderThumb", ""]],
            template: function FormSliderComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "mat-slider", 0);
                    i0.ɵɵpipe(1, "async");
                    i0.ɵɵelement(2, "input", 1);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formControl", ctx.formControl);
                    i0.ɵɵariaProperty("aria-label", i0.ɵɵpipeBind1(1, 2, ctx.label$));
                }
            },
            dependencies: [i6.NgControlStatus, i6.FormControlDirective, i7$2.MatSlider, i7$2.MatSliderThumb, i7.AsyncPipe],
            styles: ["mat-slider[_ngcontent-%COMP%]{display:block}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormSliderComponent, [{
            type: Component,
            args: [{
                    selector: "druid-forms-form-slider",
                    standalone: false,
                    template: '<mat-slider [formControl]="formControl" [aria-label]="label$ | async"><input matSliderThumb /></mat-slider>',
                    styles: ["mat-slider{display:block}\n"]
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: OptionsResolverService
        }, {
            type: i3.TokenizerService
        }, {
            type: FormsContextHelperService
        }, {
            type: i5.ValidationPluginManager
        }, {
            type: i6.ControlContainer
        }], null);
})();
var FormToggleComponent = class _FormToggleComponent extends FormElementBase {
    constructor(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer) {
        super(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer);
    }
    static {
        this.ɵfac = function FormToggleComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormToggleComponent)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(OptionsResolverService), i0.ɵɵdirectiveInject(i3.TokenizerService), i0.ɵɵdirectiveInject(FormsContextHelperService), i0.ɵɵdirectiveInject(i5.ValidationPluginManager), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormToggleComponent,
            selectors: [["druid-forms-form-toggle"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 4,
            vars: 4,
            consts: [[1, "toggle-container"], [3, "formControl"]],
            template: function FormToggleComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0)(1, "mat-slide-toggle", 1);
                    i0.ɵɵtext(2);
                    i0.ɵɵpipe(3, "async");
                    i0.ɵɵelementEnd()();
                }
                if (rf & 2) {
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("formControl", ctx.formControl);
                    i0.ɵɵadvance();
                    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, ctx.label$));
                }
            },
            dependencies: [i6.NgControlStatus, i6.FormControlDirective, i7$3.MatSlideToggle, i7.AsyncPipe],
            styles: [".toggle-container[_ngcontent-%COMP%]{padding-bottom:1em}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormToggleComponent, [{
            type: Component,
            args: [{
                    selector: "druid-forms-form-toggle",
                    standalone: false,
                    template: '<div class="toggle-container">\n    <mat-slide-toggle [formControl]="formControl">{{ label$ | async }}</mat-slide-toggle>\n</div>',
                    styles: [".toggle-container{padding-bottom:1em}\n"]
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: OptionsResolverService
        }, {
            type: i3.TokenizerService
        }, {
            type: FormsContextHelperService
        }, {
            type: i5.ValidationPluginManager
        }, {
            type: i6.ControlContainer
        }], null);
})();
var FormCheckboxComponent = class _FormCheckboxComponent extends FormElementBase {
    constructor(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer) {
        super(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer);
    }
    static {
        this.ɵfac = function FormCheckboxComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormCheckboxComponent)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(OptionsResolverService), i0.ɵɵdirectiveInject(i3.TokenizerService), i0.ɵɵdirectiveInject(FormsContextHelperService), i0.ɵɵdirectiveInject(i5.ValidationPluginManager), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormCheckboxComponent,
            selectors: [["druid-forms-form-checkbox"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 3,
            vars: 4,
            consts: [[3, "formControl"]],
            template: function FormCheckboxComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "mat-checkbox", 0);
                    i0.ɵɵtext(1);
                    i0.ɵɵpipe(2, "async");
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formControl", ctx.formControl);
                    i0.ɵɵadvance();
                    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, ctx.label$));
                }
            },
            dependencies: [i6.NgControlStatus, i6.FormControlDirective, i7$4.MatCheckbox, i7.AsyncPipe],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormCheckboxComponent, [{
            type: Component,
            args: [{
                    selector: "druid-forms-form-checkbox",
                    standalone: false,
                    template: '<mat-checkbox [formControl]="formControl">{{ label$ | async }}</mat-checkbox>\n'
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: OptionsResolverService
        }, {
            type: i3.TokenizerService
        }, {
            type: FormsContextHelperService
        }, {
            type: i5.ValidationPluginManager
        }, {
            type: i6.ControlContainer
        }], null);
})();
var FormDatepickerComponent = class _FormDatepickerComponent extends FormElementBase {
    constructor(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer) {
        super(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer);
    }
    static {
        this.ɵfac = function FormDatepickerComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormDatepickerComponent)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(OptionsResolverService), i0.ɵɵdirectiveInject(i3.TokenizerService), i0.ɵɵdirectiveInject(FormsContextHelperService), i0.ɵɵdirectiveInject(i5.ValidationPluginManager), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormDatepickerComponent,
            selectors: [["druid-forms-form-datepicker"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 8,
            vars: 6,
            consts: [["picker", ""], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"]],
            template: function FormDatepickerComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "mat-form-field", 1)(1, "mat-label");
                    i0.ɵɵtext(2);
                    i0.ɵɵpipe(3, "async");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelement(4, "input", 2)(5, "mat-datepicker-toggle", 3)(6, "mat-datepicker", null, 0);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    const picker_r1 = i0.ɵɵreference(7);
                    i0.ɵɵadvance(2);
                    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, ctx.label$));
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("matDatepicker", picker_r1)("formControl", ctx.formControl);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("for", picker_r1);
                }
            },
            dependencies: [i6.DefaultValueAccessor, i6.NgControlStatus, i6.FormControlDirective, i7$5.MatDatepicker, i7$5.MatDatepickerInput, i7$5.MatDatepickerToggle, i8.MatInput, i8.MatFormField, i8.MatLabel, i8.MatSuffix, i7.AsyncPipe],
            styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormDatepickerComponent, [{
            type: Component,
            args: [{
                    selector: "druid-forms-form-datepicker",
                    standalone: false,
                    template: '<mat-form-field appearance="fill">\n  <mat-label>{{ label$ | async }}</mat-label>\n<!-- #docregion toggle -->\n  <input matInput [matDatepicker]="picker" [formControl]="formControl">\n  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n<!-- #enddocregion toggle -->\n</mat-form-field>',
                    styles: ["mat-form-field{display:block}\n"]
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: OptionsResolverService
        }, {
            type: i3.TokenizerService
        }, {
            type: FormsContextHelperService
        }, {
            type: i5.ValidationPluginManager
        }, {
            type: i6.ControlContainer
        }], null);
})();
var FormAutocompleteComponent = class _FormAutocompleteComponent extends FormElementBase {
    constructor(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer) {
        super(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer);
        this.proxyControl = new UntypedFormControl("");
        this.optionSelected$ = new Subject();
        this.proxyControlValueChangesSub = this.proxyControl.valueChanges.pipe(debounceTime(1e3), distinctUntilChanged(), withLatestFrom(combineLatest([this.formSettings$, this.panes$, this.originPanes$, this.contexts$]).pipe(map2(([settings, panes, originPanes, contexts]) => ({
            settings,
            panes,
            originPanes,
            contexts
        })))), map2(([term, { settings, panes, originPanes, contexts }]) => ({
            term,
            settings,
            metadata: /* @__PURE__ */ new Map([["panes", [...(panes && Array.isArray(panes) ? panes : []), ...(originPanes && Array.isArray(originPanes) ? originPanes : [])]], ["contexts", contexts], ["inputparams", /* @__PURE__ */ new Map([["term", new Param({
                                flags: [],
                                mapping: new Mapping({
                                    value: term,
                                    testValue: term,
                                    type: "static",
                                    context: void 0
                                })
                            })]])]])
        })), switchMap2(({ settings, metadata }) => this.optionsResolver.resolveElementOptions(settings, metadata)), tap$1(options => this.options$.next(options))).subscribe();
        this.optionSelectedSub = this.optionSelected$.pipe(tap$1(e => this.formControl.setValue(e.option && e.option.value ? e.option.value.value : ""))).subscribe();
        this.displayAuto = opt => {
            return opt.label;
        };
    }
    static {
        this.ɵfac = function FormAutocompleteComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormAutocompleteComponent)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(OptionsResolverService), i0.ɵɵdirectiveInject(i3.TokenizerService), i0.ɵɵdirectiveInject(FormsContextHelperService), i0.ɵɵdirectiveInject(i5.ValidationPluginManager), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormAutocompleteComponent,
            selectors: [["druid-forms-form-autocomplete"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 9,
            vars: 9,
            consts: [["autocomplete", "matAutocomplete"], ["matInput", "", 3, "matAutocomplete", "formControl"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
            template: function FormAutocompleteComponent_Template(rf, ctx) {
                if (rf & 1) {
                    const _r1 = i0.ɵɵgetCurrentView();
                    i0.ɵɵelementStart(0, "mat-form-field")(1, "mat-label");
                    i0.ɵɵtext(2);
                    i0.ɵɵpipe(3, "async");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelement(4, "input", 1);
                    i0.ɵɵelementStart(5, "mat-autocomplete", 2, 0);
                    i0.ɵɵlistener("optionSelected", function FormAutocompleteComponent_Template_mat_autocomplete_optionSelected_5_listener($event) {
                        i0.ɵɵrestoreView(_r1);
                        return i0.ɵɵresetView(ctx.optionSelected$.next($event));
                    });
                    i0.ɵɵtemplate(7, FormAutocompleteComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
                    i0.ɵɵpipe(8, "async");
                    i0.ɵɵelementEnd()();
                }
                if (rf & 2) {
                    const autocomplete_r3 = i0.ɵɵreference(6);
                    i0.ɵɵadvance(2);
                    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, ctx.label$));
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("matAutocomplete", autocomplete_r3)("formControl", ctx.proxyControl);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("displayWith", ctx.displayAuto);
                    i0.ɵɵadvance(2);
                    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 7, ctx.options$));
                }
            },
            dependencies: [i7.NgForOf, i6.DefaultValueAccessor, i6.NgControlStatus, i6.FormControlDirective, i8$1.MatAutocomplete, i8$1.MatOption, i8$1.MatAutocompleteTrigger, i8.MatInput, i8.MatFormField, i8.MatLabel, i7.AsyncPipe],
            styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormAutocompleteComponent, [{
            type: Component,
            args: [{
                    selector: "druid-forms-form-autocomplete",
                    standalone: false,
                    template: '<mat-form-field>\n  <mat-label>{{ label$ | async }}</mat-label>\n  <input matInput [matAutocomplete]="autocomplete" [formControl]="proxyControl">\n  <mat-autocomplete #autocomplete="matAutocomplete" [displayWith]="displayAuto" (optionSelected)="optionSelected$.next($event)">\n    <mat-option *ngFor="let opt of (options$ | async); let i = index" [value]="opt">{{ opt.label }}</mat-option>\n  </mat-autocomplete>\n</mat-form-field>',
                    styles: ["mat-form-field{display:block}\n"]
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: OptionsResolverService
        }, {
            type: i3.TokenizerService
        }, {
            type: FormsContextHelperService
        }, {
            type: i5.ValidationPluginManager
        }, {
            type: i6.ControlContainer
        }], null);
})();
var FormMediaComponent = class _FormMediaComponent extends FormElementBase {
    constructor(attributeSerializer, optionsResolverService, filesService, tokenizerService, formsContextHelper, vpm, controlContainer) {
        super(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer);
        this.files = [];
        this.select$ = new Subject();
        this.selectSub = this.select$.pipe(tap(e => console.log(e)), mergeMap(e => this.filesService.bulkUpload({
            files: [e.addedFiles[0]]
        }).pipe(map(mfs => ({
            mfs,
            e
        })))), tap(({ mfs }) => this.formControl.setValue(mfs[0])), tap(({ e }) => this.files.push(...e.addedFiles))).subscribe();
        this.valueSub = this.value$.pipe(filter(v => typeof v === "object"), map(v => new MediaFile(v)), tap(v => {
            console.log("populate value", v);
        }), switchMap(v => this.filesService.convertToFiles([v])), tap(f => {
            console.log("populate as file", f);
            this.files = f;
        })).subscribe();
        this.filesService = filesService;
    }
    onSelect(event) {
        this.select$.next(event);
    }
    onRemove(event) {
        console.log(event);
        this.formControl.setValue("");
        this.files.splice(this.files.indexOf(event), 1);
    }
    isType(f, type) {
        switch (type) {
            case "image":
                return this.filesService.isImage({
                    file: f
                });
            case "video":
                return this.filesService.isVideo({
                    file: f
                });
            default:
                return false;
        }
    }
    static {
        this.ɵfac = function FormMediaComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormMediaComponent)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(OptionsResolverService), i0.ɵɵdirectiveInject(i3$1.FilesService), i0.ɵɵdirectiveInject(i3.TokenizerService), i0.ɵɵdirectiveInject(FormsContextHelperService), i0.ɵɵdirectiveInject(i5.ValidationPluginManager), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormMediaComponent,
            selectors: [["druid-forms-form-media"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 4,
            vars: 1,
            consts: [[3, "change"], [4, "ngFor", "ngForOf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngIf"], [3, "removable", "removed", 4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "removed", "file", "removable"], [3, "removed", "removable"]],
            template: function FormMediaComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "ngx-dropzone", 0);
                    i0.ɵɵlistener("change", function FormMediaComponent_Template_ngx_dropzone_change_0_listener($event) {
                        return ctx.onSelect($event);
                    });
                    i0.ɵɵelementStart(1, "ngx-dropzone-label");
                    i0.ɵɵtext(2, "Drop it, baby!");
                    i0.ɵɵelementEnd();
                    i0.ɵɵtemplate(3, FormMediaComponent_ng_container_3_Template, 4, 3, "ng-container", 1);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵadvance(3);
                    i0.ɵɵproperty("ngForOf", ctx.files);
                }
            },
            dependencies: [i7.NgForOf, i7.NgIf, i9.NgxDropzoneComponent, i9.NgxDropzoneLabelDirective, i9.NgxDropzonePreviewComponent, i9.NgxDropzoneImagePreviewComponent, i9.NgxDropzoneVideoPreviewComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormMediaComponent, [{
            type: Component,
            args: [{
                    selector: "druid-forms-form-media",
                    standalone: false,
                    template: `<ngx-dropzone (change)="onSelect($event)">
	<ngx-dropzone-label>Drop it, baby!</ngx-dropzone-label>
	<ng-container *ngFor="let f of files">
		<ngx-dropzone-image-preview *ngIf="isType(f, 'image')" ngProjectAs="ngx-dropzone-preview" [file]="f" [removable]="true" (removed)="onRemove(f)">
			<ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>
		</ngx-dropzone-image-preview>
		<ngx-dropzone-video-preview *ngIf="isType(f, 'video')" ngProjectAs="ngx-dropzone-preview" [file]="f" [removable]="true" (removed)="onRemove(f)">
			<ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>
		</ngx-dropzone-video-preview>
		<ngx-dropzone-preview *ngIf="!isType(f, 'image') && !isType(f, 'video')" [removable]="true" (removed)="onRemove(f)">
			<ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>
		</ngx-dropzone-preview>
	</ng-container> 
</ngx-dropzone>`
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: OptionsResolverService
        }, {
            type: i3$1.FilesService
        }, {
            type: i3.TokenizerService
        }, {
            type: FormsContextHelperService
        }, {
            type: i5.ValidationPluginManager
        }, {
            type: i6.ControlContainer
        }], null);
})();
var FormHiddenComponent = class _FormHiddenComponent extends FormElementBase {
    constructor(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer) {
        super(attributeSerializer, optionsResolverService, tokenizerService, formsContextHelper, vpm, controlContainer);
    }
    static {
        this.ɵfac = function FormHiddenComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormHiddenComponent)(i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(OptionsResolverService), i0.ɵɵdirectiveInject(i3.TokenizerService), i0.ɵɵdirectiveInject(FormsContextHelperService), i0.ɵɵdirectiveInject(i5.ValidationPluginManager), i0.ɵɵdirectiveInject(i6.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormHiddenComponent,
            selectors: [["druid-forms-form-hidden"]],
            standalone: false,
            features: [i0.ɵɵInheritDefinitionFeature],
            decls: 0,
            vars: 0,
            template: function FormHiddenComponent_Template(rf, ctx) { },
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormHiddenComponent, [{
            type: Component,
            args: [{
                    selector: "druid-forms-form-hidden",
                    template: "",
                    standalone: false
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: OptionsResolverService
        }, {
            type: i3.TokenizerService
        }, {
            type: FormsContextHelperService
        }, {
            type: i5.ValidationPluginManager
        }, {
            type: i6.ControlContainer
        }], null);
})();
var FormSectionEditorComponent = class _FormSectionEditorComponent {
    constructor(data, dialogRef, fb, attributeSerializer) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.attributeSerializer = attributeSerializer;
        this.contexts = [];
        this.formGroup = this.fb.group({
            valuesMapping: this.fb.control("")
        });
    }
    ngOnInit() { }
    submit() {
        this.data.panelFormGroup.get("settings").clear();
        this.attributeSerializer.serialize(this.formGroup.value, "root").attributes.forEach(a => {
            console.log("formly repeating editor form");
            console.log(this.attributeSerializer.convertToGroup(a));
            this.data.panelFormGroup.get("settings").push(this.attributeSerializer.convertToGroup(a));
        });
    }
    static {
        this.ɵfac = function FormSectionEditorComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormSectionEditorComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(i6.UntypedFormBuilder), i0.ɵɵdirectiveInject(i1.AttributeSerializerService));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _FormSectionEditorComponent,
            selectors: [["classifieds-form-section-editor"]],
            standalone: false,
            decls: 8,
            vars: 2,
            consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "valuesMapping"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]],
            template: function FormSectionEditorComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "form", 0);
                    i0.ɵɵlistener("ngSubmit", function FormSectionEditorComponent_Template_form_ngSubmit_0_listener() {
                        return ctx.submit();
                    });
                    i0.ɵɵelementStart(1, "div")(2, "mat-form-field")(3, "mat-label");
                    i0.ɵɵtext(4, "Values Mapping");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelement(5, "input", 1);
                    i0.ɵɵelementEnd()();
                    i0.ɵɵelementStart(6, "button", 2);
                    i0.ɵɵtext(7, "Save");
                    i0.ɵɵelementEnd()();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.formGroup);
                    i0.ɵɵadvance(6);
                    i0.ɵɵproperty("disabled", !ctx.formGroup.valid);
                }
            },
            dependencies: [i6.ɵNgNoValidate, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgControlStatusGroup, i6.FormGroupDirective, i6.FormControlName, i7$1.MatButton, i1$1.MatDialogClose, i8.MatInput, i8.MatFormField, i8.MatLabel],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormSectionEditorComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-form-section-editor",
                    standalone: false,
                    template: '<form [formGroup]="formGroup" (ngSubmit)="submit()">\n  <div>\n    <mat-form-field>\n      <mat-label>Values Mapping</mat-label>\n      <input matInput formControlName="valuesMapping">\n    </mat-form-field>\n  </div>\n  <button type="submit" mat-raised-button color="primary" mat-dialog-close [disabled]="!formGroup.valid">Save</button>\n</form>'
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }]
        }, {
            type: i1$1.MatDialogRef
        }, {
            type: i6.UntypedFormBuilder
        }, {
            type: i1.AttributeSerializerService
        }], null);
})();
var formInputPluginFactory = ({ handler }) => {
    return new ContentPlugin({
        id: "form_input",
        title: "Form Input",
        selectionComponent: void 0,
        editorComponent: FormElementEditorComponent,
        renderComponent: FormInputComponent,
        handler
    });
};
var formSelectPluginFactory = ({ handler }) => {
    return new ContentPlugin({
        id: "form_select",
        title: "Form Select",
        selectionComponent: void 0,
        editorComponent: FormElementEditorComponent,
        renderComponent: FormSelectComponent,
        handler
    });
};
var formRadiogroupPluginFactory = ({ handler }) => {
    return new ContentPlugin({
        id: "form_radiogroup",
        title: "Form Radiogroup",
        selectionComponent: void 0,
        editorComponent: FormElementEditorComponent,
        renderComponent: FormRadiogroupComponent,
        handler
    });
};
var formTextareaPluginFactory = ({ handler }) => {
    return new ContentPlugin({
        id: "form_textarea",
        title: "Form Textarea",
        selectionComponent: void 0,
        editorComponent: FormElementEditorComponent,
        renderComponent: FormTextareaComponent,
        handler
    });
};
var formSliderPluginFactory = ({ handler }) => {
    return new ContentPlugin({
        id: "form_slider",
        title: "Form Slider",
        selectionComponent: void 0,
        editorComponent: FormElementEditorComponent,
        renderComponent: FormSliderComponent,
        handler
    });
};
var formTogglePluginFactory = ({ handler }) => {
    return new ContentPlugin({
        id: "form_toggle",
        title: "Form Toggle",
        selectionComponent: void 0,
        editorComponent: FormElementEditorComponent,
        renderComponent: FormToggleComponent,
        handler
    });
};
var formCheckboxPluginFactory = ({ handler }) => {
    return new ContentPlugin({
        id: "form_checkbox",
        title: "Form Checkbox",
        selectionComponent: void 0,
        editorComponent: FormElementEditorComponent,
        renderComponent: FormCheckboxComponent,
        handler
    });
};
var formDatepickerPluginFactory = ({ handler }) => {
    return new ContentPlugin({
        id: "form_datepicker",
        title: "Form Datepicker",
        selectionComponent: void 0,
        editorComponent: FormElementEditorComponent,
        renderComponent: FormDatepickerComponent,
        handler
    });
};
var formAutocompletePluginFactory = ({ handler }) => {
    return new ContentPlugin({
        id: "form_autocomplete",
        title: "Form Autocomplete",
        selectionComponent: void 0,
        editorComponent: FormElementEditorComponent,
        renderComponent: FormAutocompleteComponent,
        handler
    });
};
var formMediaPluginFactory = ({ handler }) => {
    return new ContentPlugin({
        id: "form_media",
        title: "Form Media",
        selectionComponent: void 0,
        editorComponent: FormElementEditorComponent,
        renderComponent: FormMediaComponent,
        handler
    });
};
var formHiddenPluginFactory = ({ handler }) => {
    return new ContentPlugin({
        id: "form_hidden",
        title: "Form Hidden",
        selectionComponent: void 0,
        editorComponent: FormElementEditorComponent,
        renderComponent: FormHiddenComponent,
        handler
    });
};
var formSectionStylePluginFactory = () => {
    return new StylePlugin({
        id: "form_section",
        name: "form_section",
        title: "Form Section",
        editorComponent: FormSectionEditorComponent,
        renderComponent: FormSectionComponent
    });
};
var FormsModule = class _FormsModule {
    constructor(cpm, spm, handler) {
        [formInputPluginFactory({
                handler
            }), formSelectPluginFactory({
                handler
            }), formTextareaPluginFactory({
                handler
            }), formRadiogroupPluginFactory({
                handler
            }), formSliderPluginFactory({
                handler
            }), formTogglePluginFactory({
                handler
            }), formCheckboxPluginFactory({
                handler
            }), formDatepickerPluginFactory({
                handler
            }), formAutocompletePluginFactory({
                handler
            }), formMediaPluginFactory({
                handler
            }), formHiddenPluginFactory({
                handler
            })].forEach(p => cpm.register(p));
        [formSectionStylePluginFactory()].forEach(p => spm.register(p));
    }
    static {
        this.ɵfac = function FormsModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormsModule)(i0.ɵɵinject(i1$2.ContentPluginManager), i0.ɵɵinject(i2.StylePluginManager), i0.ɵɵinject(FormElementHandler));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _FormsModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule, FormsModule$1, ReactiveFormsModule, MaterialModule, RenderModule, DatasourceModule, NgxDropzoneModule, OrdainModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormsModule, [{
            type: NgModule,
            args: [{
                    declarations: [FormInputComponent, FormSelectComponent, FormSectionComponent, FormTextareaComponent, FormElementEditorComponent, FormRadiogroupComponent, FormSliderComponent, FormToggleComponent, FormCheckboxComponent, FormDatepickerComponent, FormAutocompleteComponent, FormMediaComponent, FormHiddenComponent, FormSectionEditorComponent],
                    imports: [CommonModule, FormsModule$1, ReactiveFormsModule, MaterialModule, RenderModule, DatasourceModule, NgxDropzoneModule, OrdainModule],
                    exports: [FormInputComponent, FormSelectComponent, FormSectionComponent, FormElementEditorComponent, FormRadiogroupComponent, FormSliderComponent, FormToggleComponent, FormCheckboxComponent, FormDatepickerComponent, FormAutocompleteComponent, FormMediaComponent, FormHiddenComponent, FormSectionEditorComponent]
                }]
        }], () => [{
            type: i1$2.ContentPluginManager
        }, {
            type: i2.StylePluginManager
        }, {
            type: FormElementHandler
        }], null);
})();
export { AbstractFormContentHandler, FormAutocompleteComponent, FormCheckboxComponent, FormDatepickerComponent, FormElementBase, FormElementEditorComponent, FormElementHandler, FormHiddenComponent, FormInputComponent, FormMediaComponent, FormRadiogroupComponent, FormSectionComponent, FormSectionEditorComponent, FormSelectComponent, FormSliderComponent, FormTextareaComponent, FormToggleComponent, FormsModule, OptionsResolverService };
