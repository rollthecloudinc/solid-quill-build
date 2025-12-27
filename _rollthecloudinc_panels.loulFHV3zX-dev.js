import { require_index_umd } from "@nf-internal/chunk-NR6RSCOY";
import { v4_default } from "@nf-internal/chunk-OLWRG54F";
import { forkJoin, iif } from "@nf-internal/chunk-BSWOS4VH";
import { BehaviorSubject, Observable, Subject, Subscription, of } from "@nf-internal/chunk-4WPE7WTU";
import { __commonJS, __spreadProps, __spreadValues, __toESM } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/cssjson/cssjson.js
var require_cssjson = __commonJS({
    "node_modules/cssjson/cssjson.js"(exports, module) {
        (function (root, factory) {
            if (typeof define === "function" && define.amd) {
                define([], factory);
            }
            else if (typeof exports === "object") {
                module.exports = factory();
            }
            else {
                root.CSSJSON = factory();
            }
        })(exports, function () {
            var CSSJSON = new function () {
                var base = this;
                base.init = function () {
                    String.prototype.trim = function () {
                        return this.replace(/^\s+|\s+$/g, "");
                    };
                    String.prototype.repeat = function (n) {
                        return new Array(1 + n).join(this);
                    };
                };
                base.init();
                var selX = /([^\s\;\{\}][^\;\{\}]*)\{/g;
                var endX = /\}/g;
                var lineX = /([^\;\{\}]*)\;/g;
                var commentX = /\/\*[\s\S]*?\*\//g;
                var lineAttrX = /([^\:]+):([^\;]*);/;
                var altX = /(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gmi;
                var capComment = 1;
                var capSelector = 2;
                var capEnd = 3;
                var capAttr = 4;
                var isEmpty = function (x) {
                    return typeof x == "undefined" || x.length == 0 || x == null;
                };
                base.toJSON = function (cssString, args) {
                    var node = {
                        children: {},
                        attributes: {}
                    };
                    var match = null;
                    var count = 0;
                    if (typeof args == "undefined") {
                        var args = {
                            ordered: false,
                            comments: false,
                            stripComments: false,
                            split: false
                        };
                    }
                    if (args.stripComments) {
                        args.comments = false;
                        cssString = cssString.replace(commentX, "");
                    }
                    while ((match = altX.exec(cssString)) != null) {
                        if (!isEmpty(match[capComment]) && args.comments) {
                            var add = match[capComment].trim();
                            node[count++] = add;
                        }
                        else if (!isEmpty(match[capSelector])) {
                            var name = match[capSelector].trim();
                            var newNode = base.toJSON(cssString, args);
                            if (args.ordered) {
                                var obj = {};
                                obj["name"] = name;
                                obj["value"] = newNode;
                                obj["type"] = "rule";
                                node[count++] = obj;
                            }
                            else {
                                if (args.split) {
                                    var bits = name.split(",");
                                }
                                else {
                                    var bits = [name];
                                }
                                for (i in bits) {
                                    var sel = bits[i].trim();
                                    if (sel in node.children) {
                                        for (var att in newNode.attributes) {
                                            node.children[sel].attributes[att] = newNode.attributes[att];
                                        }
                                    }
                                    else {
                                        node.children[sel] = newNode;
                                    }
                                }
                            }
                        }
                        else if (!isEmpty(match[capEnd])) {
                            return node;
                        }
                        else if (!isEmpty(match[capAttr])) {
                            var line = match[capAttr].trim();
                            var attr = lineAttrX.exec(line);
                            if (attr) {
                                var name = attr[1].trim();
                                var value = attr[2].trim();
                                if (args.ordered) {
                                    var obj = {};
                                    obj["name"] = name;
                                    obj["value"] = value;
                                    obj["type"] = "attr";
                                    node[count++] = obj;
                                }
                                else {
                                    if (name in node.attributes) {
                                        var currVal = node.attributes[name];
                                        if (!(currVal instanceof Array)) {
                                            node.attributes[name] = [currVal];
                                        }
                                        node.attributes[name].push(value);
                                    }
                                    else {
                                        node.attributes[name] = value;
                                    }
                                }
                            }
                            else {
                                node[count++] = line;
                            }
                        }
                    }
                    return node;
                };
                base.toCSS = function (node, depth, breaks) {
                    var cssString = "";
                    if (typeof depth == "undefined") {
                        depth = 0;
                    }
                    if (typeof breaks == "undefined") {
                        breaks = false;
                    }
                    if (node.attributes) {
                        for (i in node.attributes) {
                            var att = node.attributes[i];
                            if (att instanceof Array) {
                                for (var j = 0; j < att.length; j++) {
                                    cssString += strAttr(i, att[j], depth);
                                }
                            }
                            else {
                                cssString += strAttr(i, att, depth);
                            }
                        }
                    }
                    if (node.children) {
                        var first = true;
                        for (i in node.children) {
                            if (breaks && !first) {
                                cssString += "\n";
                            }
                            else {
                                first = false;
                            }
                            cssString += strNode(i, node.children[i], depth);
                        }
                    }
                    return cssString;
                };
                var strAttr = function (name, value, depth) {
                    return "	".repeat(depth) + name + ": " + value + ";\n";
                };
                var strNode = function (name, value, depth) {
                    var cssString = "	".repeat(depth) + name + " {\n";
                    cssString += base.toCSS(value, depth + 1);
                    cssString += "	".repeat(depth) + "}\n";
                    return cssString;
                };
            }();
            return CSSJSON;
        });
    }
});
// node_modules/@rollthecloudinc/panels/fesm2022/rollthecloudinc-panels.mjs
import * as i3 from "@angular/common";
import { isPlatformServer, CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { Injectable, forwardRef, Input, Component, Inject, InjectionToken, PLATFORM_ID, NgModule, Optional } from "@angular/core";
import * as i1$3 from "@ngrx/data";
import { DefaultPluralizer, Pluralizer } from "@ngrx/data";
import * as i1$1 from "@angular/forms";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, UntypedFormControl, Validators, UntypedFormArray, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { map, switchMap, filter, defaultIfEmpty, catchError, concatMap, tap, take } from "rxjs/operators";
import * as i1 from "@rollthecloudinc/attributes";
import { AttributeValue } from "@rollthecloudinc/attributes";
import * as i3$5 from "@rollthecloudinc/context";
import { InlineContext } from "@rollthecloudinc/context";
import { PersistenceFormPayload } from "@rollthecloudinc/refinery";
import { InteractionsFormPayload } from "@rollthecloudinc/detour";
import * as i2 from "@rollthecloudinc/content";
import { ContentPluginEditorOptions, ContentBinding, ContentPlugin, CONTENT_PLUGIN } from "@rollthecloudinc/content";
import * as i4$1 from "@rollthecloudinc/datasource";
import { Dataset, Datasource, DatasourceModule } from "@rollthecloudinc/datasource";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/select";
import * as i2$1 from "@rollthecloudinc/utils";
import { SITE_NAME, NoopDataService } from "@rollthecloudinc/utils";
import { MaterialModule } from "@rollthecloudinc/material";
var cssJson = __toESM(require_cssjson(), 1);
var jpp = __toESM(require_index_umd(), 1);
import * as i1$2 from "@angular/material/bottom-sheet";
import * as i3$1 from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as i7 from "@angular/material/grid-list";
import * as i8 from "@angular/material/list";
import * as i9 from "@angular/material/tabs";
import * as i3$4 from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin, PublicApiBridgeService } from "@rollthecloudinc/bridge";
import * as i5$1 from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin, CrudDataService, CrudModule } from "@rollthecloudinc/crud";
import * as i3$2 from "@rollthecloudinc/rules";
import { Aws3Module } from "@rollthecloudinc/aws3";
import { AwosModule } from "@rollthecloudinc/awos";
import { AuthModule } from "@rollthecloudinc/auth";
import * as i1$4 from "@ngrx/effects";
import { createEffect, ofType, EffectsModule } from "@ngrx/effects";
import * as i1$5 from "@ngrx/store";
import { createAction, props, createReducer, on, StoreModule, createFeatureSelector, createSelector, select } from "@ngrx/store";
import * as i3$3 from "@rollthecloudinc/snippet";
import * as i1$6 from "@rollthecloudinc/plugin";
import { BasePluginManager, PluginDef, Plugin } from "@rollthecloudinc/plugin";
import { DataSource } from "@angular/cdk/collections";
import merge from "deepmerge-json";
import { pluralize } from "inflected";
function PanelPageLinkedlistComponent_mat_form_field_1_mat_option_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 5);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const i_r1 = ctx.index;
        i0.ɵɵproperty("value", i_r1);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1("panel page | level: ", i_r1);
    }
}
function PanelPageLinkedlistComponent_mat_form_field_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field")(1, "mat-select", 3);
        i0.ɵɵtemplate(2, PanelPageLinkedlistComponent_mat_form_field_1_mat_option_2_Template, 2, 2, "mat-option", 4);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 1, ctx_r1.panelPages$));
    }
}
function PanelPageLinkedlistComponent_mat_form_field_2_mat_option_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 5);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const i_r3 = ctx.index;
        i0.ɵɵproperty("value", i_r3);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1("panel | ", i_r3);
    }
}
function PanelPageLinkedlistComponent_mat_form_field_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field")(1, "mat-select", 6);
        i0.ɵɵtemplate(2, PanelPageLinkedlistComponent_mat_form_field_2_mat_option_2_Template, 2, 2, "mat-option", 4);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 1, ctx_r1.panels$));
    }
}
function PanelPageLinkedlistComponent_mat_form_field_3_mat_option_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 5);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const i_r4 = ctx.index;
        i0.ɵɵproperty("value", i_r4);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1("pane | ", i_r4);
    }
}
function PanelPageLinkedlistComponent_mat_form_field_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field")(1, "mat-select", 7);
        i0.ɵɵtemplate(2, PanelPageLinkedlistComponent_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 4);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 1, ctx_r1.panes$));
    }
}
function PanelPageLinkedlistComponent_druid_panels_panelpage_linkedlist_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "druid-panels-panelpage-linkedlist", 8);
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("panelPages", ctx_r1.nested);
    }
}
function PanelSelectorComponent_ng_template_10_a_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 2);
        i0.ɵɵlistener("click", function PanelSelectorComponent_ng_template_10_a_1_Template_a_click_0_listener() {
            const panel_r2 = i0.ɵɵrestoreView(_r1).$implicit;
            const ctx_r2 = i0.ɵɵnextContext(2);
            return i0.ɵɵresetView(ctx_r2.onItemSelect(panel_r2.id));
        });
        i0.ɵɵelementStart(1, "span", 6);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const panel_r2 = ctx.$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate2("", panel_r2.title, " [", panel_r2.id, "]");
    }
}
function PanelSelectorComponent_ng_template_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-nav-list");
        i0.ɵɵtemplate(1, PanelSelectorComponent_ng_template_10_a_1_Template, 3, 2, "a", 5);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r2.panels$));
    }
}
var entityMetadataFactory = (platformId, panelsSettings) => {
    return {
        PanelPageListItem: {
            entityName: "PanelPageListItem",
            crud: __spreadProps(__spreadValues({}, isPlatformServer(platformId) ? {} : {
                idb_keyval: {
                    params: {
                        prefix: "panelpage__"
                    },
                    queryMappings: /* @__PURE__ */ new Map([
                        // ['path', { defaultOperator: 'startsWith' }]
                        ["site", {
                                defaultOperator: "term||wildcard"
                            }], ["path", {
                                defaultOperator: "term||wildcard"
                            }]
                    ])
                }
            }), {
                /*aws_opensearch_entity: {
                  ops: ['create', 'update', 'read', 'delete']
                },*/
                idb_keyval: {
                    params: {
                        prefix: "panelpage__"
                    },
                    queryMappings: /* @__PURE__ */ new Map([
                        // ['path', { defaultOperator: 'startsWith' }]
                        ["site", {
                                defaultOperator: "term||wildcard"
                            }], ["path", {
                                defaultOperator: "term||wildcard"
                            }]
                    ])
                }
            })
        },
        PanelPage: {
            entityName: "PanelPage",
            crud: __spreadValues(__spreadProps(__spreadValues({
                /*aws_s3_entity: {
                  ops: ['query', 'create', 'update'],
                  params: {
                    // bucket: 'classifieds-ui-dev',
                    bucket: panelsSettings.s3Bucket,
                    prefix: 'panelpages/'
                  }
                }*/
                save: {
                    ops: ["create", "update"],
                    plugin: "rest",
                    params: {
                        entityName: "PanelPage"
                    }
                }
            }, isPlatformServer(platformId) ? {} : {
                readPrimary: {
                    fallback: true,
                    ops: ["create", "update", "query"],
                    plugin: "idb_keyval",
                    params: {
                        prefix: "panelpage__"
                    }
                }
            }), {
                readFallback: {
                    fallback: true,
                    ops: ["query"],
                    plugin: "rest",
                    params: {
                        entityName: "PanelPage",
                        root: panelsSettings.objectsRootUrl,
                        // root: 'https://rollthecloudinc.github.io/ipe-objects',
                        // root: '/assets/objects',
                        suffix: ".json"
                    }
                }
            }), isPlatformServer(platformId) ? {} : {
                idb_keyval: {
                    params: {
                        prefix: "panelpage__"
                    }
                }
            })
        },
        PanelPageState: {
            entityName: "PanelPageState"
        }
    };
};
var PanelsSettings = class {
    constructor(data) {
        if (data) {
            this.openSearchDomain = data.openSearchDomain;
            this.s3Bucket = data.s3Bucket;
            this.objectsRootUrl = data.objectsRootUrl;
        }
    }
};
var PanelPage = class {
    constructor(data) {
        this.gridItems = [];
        this.panels = [];
        this.contexts = [];
        this.rowSettings = [];
        this.entityPermissions = new PanelPagePermissions();
        if (data) {
            this.id = data.id;
            this.layoutType = data.layoutType;
            this.displayType = data.displayType;
            this.name = data.name ? data.name : void 0;
            this.title = data.title ? data.title : void 0;
            this.site = data.site ? data.site : void 0;
            this.userId = data.userId ? data.userId : void 0;
            this.path = data.path ? data.path : void 0;
            this.persistence = data.persistence ? new PersistenceFormPayload(data.persistence) : void 0;
            this.interactions = data.interactions ? new InteractionsFormPayload(data.interactions) : void 0;
            if (data.panels) {
                this.panels = data.panels.map(p => new Panel(p));
            }
            if (data.gridItems) {
                this.gridItems = data.gridItems.map(i10 => new GridItem(i10));
            }
            if (data.contexts) {
                this.contexts = data.contexts.map(c => new InlineContext(c));
            }
            if (data.layoutSetting) {
                this.layoutSetting = new LayoutSetting(data.layoutSetting);
            }
            if (data.rowSettings && Array.isArray(data.rowSettings)) {
                this.rowSettings = data.rowSettings.map(s => new LayoutSetting(s));
            }
            if (data.entityPermissions) {
                this.entityPermissions = new PanelPagePermissions(data.entityPermissions);
            }
            if (data.cssFile) {
                this.cssFile = data.cssFile;
            }
        }
    }
};
var PanelPageListItem = class extends PanelPage {
};
var GridLayout = class {
    constructor(data) {
        this.gridItems = [];
        if (data) {
            this.id = data.id;
            this.site = data.site;
            if (data.gridItems) {
                this.gridItems = data.gridItems.map(i10 => new GridItem(i10));
            }
        }
    }
};
var Panel = class {
    constructor(data) {
        this.settings = [];
        this.panes = [];
        if (data) {
            this.name = data.name ? data.name : void 0;
            this.label = data.label ? data.label : void 0;
            this.stylePlugin = data.stylePlugin;
            if (data.settings) {
                this.settings = data.settings.map(a => new AttributeValue(a));
            }
            if (data.panes) {
                this.panes = data.panes.map(p => new Pane(p));
            }
            if (data.columnSetting) {
                this.columnSetting = new LayoutSetting(data.columnSetting);
            }
        }
    }
};
var Pane = class {
    constructor(data) {
        this.settings = [];
        this.locked = false;
        this.contexts = [];
        if (data) {
            this.name = data.name;
            this.label = data.label;
            this.contentPlugin = data.contentPlugin;
            this.locked = data.locked !== void 0 ? data.locked : false;
            if (data.linkedPageId) {
                this.linkedPageId = data.linkedPageId;
            }
            if (data.metadata !== void 0) {
                this.metadata = new Map([...data.metadata]);
            }
            if (data.settings !== void 0) {
                this.settings = data.settings.map(a => new AttributeValue(a));
            }
            if (data.contexts !== void 0) {
                this.contexts = data.contexts.map(c => new InlineContext(c));
            }
            if (data.rule !== void 0 && typeof data.rule !== "string") {
                this.rule = __spreadValues({}, data.rule);
            }
            if (data.nestedPage) {
                this.nestedPage = new PanelPage(data.nestedPage);
            }
            if (data.resolvedContext) {
                this.resolvedContext = __spreadValues({}, data.resolvedContext);
            }
        }
    }
};
var GridItem = class {
    constructor(data) {
        if (data) {
            this.cols = data.cols;
            this.rows = data.rows;
            this.x = data.x;
            this.y = data.y;
            this.weight = data.weight;
        }
    }
};
var LayoutSetting = class {
    constructor(data) {
        this.settings = [];
        if (data) {
            if (data.settings && Array.isArray(data.settings)) {
                this.settings = data.settings.map(v => new AttributeValue(v));
            }
        }
    }
};
var PanelPagePermissions = class {
    constructor(data) {
        this.readUserIds = [];
        this.writeUserIds = [];
        this.deleteUserIds = [];
        if (data) {
            this.readUserIds = data.readUserIds ? data.readUserIds.map(id => id) : [];
            this.writeUserIds = data.writeUserIds ? data.writeUserIds.map(id => id) : [];
            this.deleteUserIds = data.deleteUserIds ? data.deleteUserIds.map(id => id) : [];
        }
    }
};
var PanelContentHandler = class _PanelContentHandler {
    constructor(attributeSerializer) {
        this.attributeSerializer = attributeSerializer;
    }
    handleFile(file) {
        return of();
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
    buildDynamicItems(settings, metadata) {
        return of([]);
    }
    fetchDynamicData(settings, metadata) {
        return of(new Dataset());
    }
    getBindings(settings, type) {
        return of([]);
    }
    toObject(settings) {
        return of(this.attributeSerializer.deserializeAsObject(settings));
    }
    buildSettings(panelPage) {
        return this.attributeSerializer.serialize(panelPage, "root").attributes;
    }
    fromPanes(panesAsSettings) {
        return panesAsSettings.map(p => new Pane(this.attributeSerializer.deserialize(p)));
    }
    wrapPanel(panes) {
        return new Panel({
            stylePlugin: void 0,
            settings: [],
            panes,
            columnSetting: new LayoutSetting()
        });
    }
    stateDefinition(settings) {
        return of({});
    }
    editorOptions(settings) {
        return of(new ContentPluginEditorOptions());
    }
    static {
        this.ɵfac = function PanelContentHandler_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelContentHandler)(i0.ɵɵinject(i1.AttributeSerializerService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PanelContentHandler,
            factory: _PanelContentHandler.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelContentHandler, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }], null);
})();
var PanelPageLinkedlistComponent = class _PanelPageLinkedlistComponent {
    set panelPages(panelPages) {
        this.panelPages$.next(panelPages);
    }
    set panels(panels) {
        this.panels$.next(panels);
    }
    set panes(panes) {
        this.panes$.next(panes);
    }
    get panelPages() {
        return this.panelPages$.value && Array.isArray(this.panelPages$.value) ? this.panelPages$.value : [];
    }
    get panels() {
        return this.panels$.value && Array.isArray(this.panels$.value) ? this.panels$.value : [];
    }
    get panes() {
        return this.panes$.value && Array.isArray(this.panes$.value) ? this.panes$.value : [];
    }
    get nested() {
        return this.nested$.value && typeof this.nested$.value !== void 0 && this.nested$.value.length > 0 ? [...this.nested$.value] : void 0;
    }
    constructor(fb, panelHandler) {
        this.fb = fb;
        this.panelHandler = panelHandler;
        this.panelPages$ = new BehaviorSubject([]);
        this.panels$ = new BehaviorSubject([]);
        this.panes$ = new BehaviorSubject([]);
        this.nested$ = new BehaviorSubject([]);
        this.formGroup = this.fb.group({
            panelPage: this.fb.control(void 0),
            panel: this.fb.control(void 0),
            pane: this.fb.control(void 0),
            nested: this.fb.control(void 0)
        });
        this.panelPageSub = this.formGroup.get("panelPage").valueChanges.subscribe(index => {
            this.panels$.next(new PanelPage(this.panelPages$.value[index]).panels);
        });
        this.panelSub = this.formGroup.get("panel").valueChanges.subscribe(index => {
            this.panes$.next(new Panel(this.panels$.value[index]).panes);
        });
        this.paneSub = this.formGroup.get("pane").valueChanges.pipe(map(index => this.panes$.value[index]), switchMap(pane => iif(() => pane.contentPlugin === "panel", this.panelHandler.toObject(pane.settings), of(void 0))), filter(p => !!p)).subscribe(panelPage => {
            this.nested$.next([panelPage]);
        });
        this.onTouched = () => { };
    }
    writeValue(val) {
        if (val) {
            this.formGroup.setValue(val, {
                emitEvent: false
            });
        }
    }
    registerOnChange(fn) {
        this.formGroup.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formGroup.disable();
        }
        else {
            this.formGroup.enable();
        }
    }
    validate(c) {
        return this.formGroup.valid ? null : {
            invalidForm: {
                valid: false
            }
        };
    }
    static {
        this.ɵfac = function PanelPageLinkedlistComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelPageLinkedlistComponent)(i0.ɵɵdirectiveInject(i1$1.UntypedFormBuilder), i0.ɵɵdirectiveInject(PanelContentHandler));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _PanelPageLinkedlistComponent,
            selectors: [["druid-panels-panelpage-linkedlist"]],
            inputs: {
                panelPages: "panelPages",
                panels: "panels",
                panes: "panes"
            },
            standalone: false,
            features: [i0.ɵɵProvidersFeature([{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => _PanelPageLinkedlistComponent),
                        multi: true
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => _PanelPageLinkedlistComponent),
                        multi: true
                    }])],
            decls: 5,
            vars: 5,
            consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "nested", 3, "panelPages", 4, "ngIf"], ["required", "", "formControlName", "panelPage"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["required", "", "formControlName", "panel"], ["required", "", "formControlName", "pane"], ["formControlName", "nested", 3, "panelPages"]],
            template: function PanelPageLinkedlistComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "div", 0);
                    i0.ɵɵtemplate(1, PanelPageLinkedlistComponent_mat_form_field_1_Template, 4, 3, "mat-form-field", 1)(2, PanelPageLinkedlistComponent_mat_form_field_2_Template, 4, 3, "mat-form-field", 1)(3, PanelPageLinkedlistComponent_mat_form_field_3_Template, 4, 3, "mat-form-field", 1)(4, PanelPageLinkedlistComponent_druid_panels_panelpage_linkedlist_4_Template, 1, 1, "druid-panels-panelpage-linkedlist", 2);
                    i0.ɵɵelementEnd();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.formGroup);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.panelPages.length > 0);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.panels.length > 0);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.panes.length > 0);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("ngIf", ctx.nested);
                }
            },
            dependencies: [i3.NgForOf, i3.NgIf, i1$1.NgControlStatus, i1$1.NgControlStatusGroup, i1$1.RequiredValidator, i1$1.FormGroupDirective, i1$1.FormControlName, i4.MatOption, i5.MatFormField, i6.MatSelect, _PanelPageLinkedlistComponent, i3.AsyncPipe],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelPageLinkedlistComponent, [{
            type: Component,
            args: [{
                    selector: "druid-panels-panelpage-linkedlist",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PanelPageLinkedlistComponent),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => PanelPageLinkedlistComponent),
                            multi: true
                        }],
                    standalone: false,
                    template: '<div [formGroup]="formGroup">\n  <mat-form-field *ngIf="panelPages.length > 0">\n    <mat-select required formControlName="panelPage">\n      <mat-option *ngFor="let p of (panelPages$ | async); let i = index" [value]="i">panel page | level: {{ i }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field *ngIf="panels.length > 0">\n    <mat-select required formControlName="panel">\n      <mat-option *ngFor="let p of (panels$ | async); let i = index" [value]="i">panel | {{ i }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field *ngIf="panes.length > 0">\n    <mat-select required formControlName="pane">\n      <mat-option *ngFor="let p of (panes$ | async); let i = index" [value]="i">pane | {{ i }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <druid-panels-panelpage-linkedlist *ngIf="nested" formControlName="nested" [panelPages]="nested"></druid-panels-panelpage-linkedlist>\n</div>'
                }]
        }], () => [{
            type: i1$1.UntypedFormBuilder
        }, {
            type: PanelContentHandler
        }], {
        panelPages: [{
                type: Input
            }],
        panels: [{
                type: Input
            }],
        panes: [{
                type: Input
            }]
    });
})();
var PanelSelectorComponent = class _PanelSelectorComponent {
    // private contentPlugin: ContentPlugin;
    constructor(siteName, bottomSheetRef, handler, dialog, fb, es) {
        this.siteName = siteName;
        this.bottomSheetRef = bottomSheetRef;
        this.handler = handler;
        this.dialog = dialog;
        this.fb = fb;
        this.selectedIndex = 0;
        this.panelPagesService = es.getEntityCollectionService("PanelPage");
        this.panelPageListItemsService = es.getEntityCollectionService("PanelPageListItem");
    }
    ngOnInit() { }
    onNewSelect() {
        const name = v4_default();
        const newPanel = new PanelPage({
            id: void 0,
            layoutType: "split",
            displayType: "page",
            site: this.siteName,
            gridItems: [],
            panels: [],
            layoutSetting: new LayoutSetting(),
            rowSettings: []
        });
        this.panelFormGroup.get("panes").push(this.fb.group({
            contentPlugin: "panel",
            name,
            label: name,
            rule: new UntypedFormControl(""),
            settings: this.fb.array(this.handler.buildSettings(newPanel).map(s => this.convertToGroup(s)))
        }));
        this.bottomSheetRef.dismiss();
    }
    onLinkSelect() {
        this.selectedIndex = 1;
        this.panels$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(this.siteName)}`);
    }
    onEmbedSelect() {
        const name = v4_default();
        this.panelFormGroup.get("panes").push(this.fb.group({
            contentPlugin: "panel",
            name,
            label: name,
            rule: new UntypedFormControl(""),
            locked: new UntypedFormControl(true),
            settings: this.fb.array([])
        }));
        this.bottomSheetRef.dismiss();
    }
    onItemSelect(panel) {
        const name = v4_default();
        this.panelFormGroup.get("panes").push(this.fb.group({
            contentPlugin: "panel",
            name,
            label: name,
            rule: new UntypedFormControl(""),
            linkedPageId: new UntypedFormControl(panel, Validators.required),
            locked: new UntypedFormControl(true),
            // settings: this.fb.array(this.handler.buildSettings(p).map(s => this.convertToGroup(s)))
            settings: this.fb.array([])
        }));
        this.bottomSheetRef.dismiss();
    }
    convertToGroup(setting) {
        const fg = this.fb.group({
            name: new UntypedFormControl(setting.name, Validators.required),
            type: new UntypedFormControl(setting.type, Validators.required),
            displayName: new UntypedFormControl(setting.displayName, Validators.required),
            value: new UntypedFormControl(setting.value, Validators.required),
            computedValue: new UntypedFormControl(setting.value, Validators.required),
            attributes: new UntypedFormArray([])
        });
        if (setting.attributes && setting.attributes.length > 0) {
            setting.attributes.forEach(s => {
                fg.get("attributes").push(this.convertToGroup(s));
            });
        }
        return fg;
    }
    static {
        this.ɵfac = function PanelSelectorComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelSelectorComponent)(i0.ɵɵdirectiveInject(SITE_NAME), i0.ɵɵdirectiveInject(i1$2.MatBottomSheetRef), i0.ɵɵdirectiveInject(PanelContentHandler), i0.ɵɵdirectiveInject(i3$1.MatDialog), i0.ɵɵdirectiveInject(i1$1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i1$3.EntityServices));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _PanelSelectorComponent,
            selectors: [["classifieds-ui-panel-selector"]],
            inputs: {
                panelFormGroup: "panelFormGroup"
            },
            standalone: false,
            decls: 11,
            vars: 1,
            consts: [["mat-align-tabs", "start", 3, "selectedIndex"], ["label", "Type"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["label", "Search"], ["matTabContent", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-line", ""]],
            template: function PanelSelectorComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "mat-nav-list")(3, "a", 2);
                    i0.ɵɵlistener("click", function PanelSelectorComponent_Template_a_click_3_listener() {
                        return ctx.onNewSelect();
                    });
                    i0.ɵɵtext(4, "New Panel");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(5, "a", 2);
                    i0.ɵɵlistener("click", function PanelSelectorComponent_Template_a_click_5_listener() {
                        return ctx.onLinkSelect();
                    });
                    i0.ɵɵtext(6, "Link Panel");
                    i0.ɵɵelementEnd();
                    i0.ɵɵelementStart(7, "a", 2);
                    i0.ɵɵlistener("click", function PanelSelectorComponent_Template_a_click_7_listener() {
                        return ctx.onEmbedSelect();
                    });
                    i0.ɵɵtext(8, "Embed Panel");
                    i0.ɵɵelementEnd()()();
                    i0.ɵɵelementStart(9, "mat-tab", 3);
                    i0.ɵɵtemplate(10, PanelSelectorComponent_ng_template_10_Template, 3, 3, "ng-template", 4);
                    i0.ɵɵelementEnd()();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("selectedIndex", ctx.selectedIndex);
                }
            },
            dependencies: [i3.NgForOf, i7.MatLine, i8.MatNavList, i8.MatListItem, i9.MatTabContent, i9.MatTab, i9.MatTabGroup, i3.AsyncPipe],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelSelectorComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-panel-selector",
                    standalone: false,
                    template: '<mat-tab-group mat-align-tabs="start" [selectedIndex]="selectedIndex">\n  <mat-tab label="Type">\n    <mat-nav-list>\n      <a mat-list-item mat-list-item (click)="onNewSelect()">New Panel</a>\n      <a mat-list-item mat-list-item (click)="onLinkSelect()">Link Panel</a>\n      <a mat-list-item mat-list-item (click)="onEmbedSelect()">Embed Panel</a>\n    </mat-nav-list>\n  </mat-tab>\n  <mat-tab label="Search">\n    <ng-template matTabContent>\n      <mat-nav-list>\n        <a *ngFor="let panel of (panels$ | async)" mat-list-item mat-list-item (click)="onItemSelect(panel.id)">\n          <span mat-line>{{ panel.title }} [{{ panel.id }}]</span>\n        </a>\n      </mat-nav-list>\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n'
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [SITE_NAME]
                }]
        }, {
            type: i1$2.MatBottomSheetRef
        }, {
            type: PanelContentHandler
        }, {
            type: i3$1.MatDialog
        }, {
            type: i1$1.UntypedFormBuilder
        }, {
            type: i1$3.EntityServices
        }], {
        panelFormGroup: [{
                type: Input
            }]
    });
})();
var PanelEditorComponent = class _PanelEditorComponent {
    constructor() { }
    ngOnInit() { }
    static {
        this.ɵfac = function PanelEditorComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelEditorComponent)();
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _PanelEditorComponent,
            selectors: [["classifieds-ui-panel-editor"]],
            standalone: false,
            decls: 2,
            vars: 0,
            template: function PanelEditorComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "p");
                    i0.ɵɵtext(1, "panel-editor works!");
                    i0.ɵɵelementEnd();
                }
            },
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelEditorComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-panel-editor",
                    standalone: false,
                    template: "<p>panel-editor works!</p>\n"
                }]
        }], () => [], null);
})();
var PanelPageState = class {
    constructor(data) {
        this.panels = [];
        if (data) {
            this.id = data.id;
            if (data.panels !== void 0 && Array.isArray(data.panels)) {
                this.panels = data.panels.map(p => new PanelState(p));
            }
        }
    }
};
var PanelState = class {
    constructor(data) {
        this.panes = [];
        if (data) {
            if (data.panes !== void 0 && Array.isArray(data.panes)) {
                this.panes = data.panes.map(p => new PaneState(p));
            }
        }
    }
};
var PaneState = class {
    constructor(data) {
        if (data) {
            if (data.state !== void 0) {
                this.state = new AttributeValue(data.state);
            }
            if (data.nestedPage !== void 0 && data.nestedPage !== null) {
                this.nestedPage = new PanelPageState(data.nestedPage);
            }
        }
    }
};
var DatasourceContentHandler = class _DatasourceContentHandler {
    constructor(siteName, panelHandler, attributeSerializer, rulesResolver, dpm, datasourceEvalutator) {
        this.siteName = siteName;
        this.panelHandler = panelHandler;
        this.attributeSerializer = attributeSerializer;
        this.rulesResolver = rulesResolver;
        this.dpm = dpm;
        this.datasourceEvalutator = datasourceEvalutator;
    }
    handleFile(file) {
        return of([]);
    }
    handlesType(type) {
        return false;
    }
    implementsRendererOverride() {
        return true;
    }
    hasRendererOverride(settings) {
        return of(false);
    }
    isDynamic(settings) {
        return true;
    }
    isData(settings) {
        return true;
    }
    fetchDynamicData(settings, metadata) {
        const dataPanes = metadata.has("dataPanes") ? new Map(metadata.get("dataPanes").map(p => [p.name, p])) : /* @__PURE__ */ new Map([]);
        const datasources = new Map(Array.from(dataPanes).map(([k, v]) => [k, new Datasource(this.attributeSerializer.deserializeAsObject(v.settings))]));
        return this.toObject(settings).pipe(switchMap(ds => this.datasourceEvalutator.evalDatasource({
            datasource: ds,
            metadata,
            datasources
        })));
    }
    buildDynamicItems(settings, metadata) {
        const dataPanes = new Map(metadata.get("dataPanes").map(p => [p.name, p]));
        return this.fetchDynamicData(settings, metadata).pipe(switchMap(dataset => this.toObject(settings).pipe(map(ds => [ds, dataset]))), switchMap(([ds, dataset]) => this.getBindings(settings, "pane").pipe(map(bindings => [ds, dataset, bindings]))), switchMap(([ds, dataset, bindings]) => iif(() => dataset.results.length !== 0 && bindings.length > 0, forkJoin(dataset.results.map(row => forkJoin(bindings.filter(b => !dataPanes.has(b.id)).map(binding => of(metadata.get("panes").find(p => p.name === binding.id)).pipe(switchMap(pane => iif(() => pane && pane.rule && pane.rule !== null && pane.rule.condition !== "", pane ? this.rulesResolver.evaluate(pane.rule, [...metadata.get("contexts"), ...(pane.contexts !== void 0 ? pane.contexts : []), new InlineContext({
                name: "_root",
                adaptor: "data",
                data: row
            })]).pipe(map(res => [pane, res])) : of([pane, false]), of(false).pipe(map(b => [pane, b])))), filter(([_, res]) => res), map(([pane, _]) => pane.name), defaultIfEmpty(binding.id)))).pipe(map(groups => groups.reduce((p, c) => [...p, c], []))))).pipe(map(groups => [ds, dataset, groups])), new Observable(obs => {
            obs.next([ds, dataset, []]);
            obs.complete();
        }))), map(([_, dataset, paneMappings]) => dataset.results.reduce((p, row, rowIndex) => [...p, ...(paneMappings[rowIndex] ? paneMappings[rowIndex].map(bId => new Pane(__spreadProps(__spreadValues({}, metadata.get("panes").find(p2 => p2.name === bId)), {
                rule: void 0,
                label: v4_default(),
                contexts: [...metadata.get("contexts"), new InlineContext({
                        name: "_root",
                        adaptor: "data",
                        data: row
                    })]
            }))) : [])], [])), map(panes => new Panel({
            stylePlugin: void 0,
            settings: [],
            panes,
            columnSetting: new LayoutSetting()
        })), map(panel => this.panelHandler.buildSettings(new PanelPage({
            id: void 0,
            layoutType: "grid",
            displayType: "page",
            site: this.siteName,
            gridItems: [],
            layoutSetting: new LayoutSetting(),
            rowSettings: [],
            panels: [panel]
        }))), map(panelSettings => panelSettings.find(s => s.name === "panels").attributes[0].attributes.find(s => s.name === "panes").attributes));
    }
    getBindings(settings, type, metadata) {
        const dataPanes = metadata ? new Map(metadata.get("dataPanes").map(p => [p.name, p])) : /* @__PURE__ */ new Map();
        if (type === "context") {
            return this.toObject(settings).pipe(map(ds => [ds, ds.params ? ds.params.reduce((p, c) => [...p, ...(c.mapping.type === "form" ? [new ContentBinding({
                            id: `form__${c.mapping.value.split(".", 2)[0].trim()}`,
                            type: "context"
                        })] : [])], []) : []]), switchMap(([ds, bindings]) => this.dpm.getPlugin(ds.plugin).pipe(switchMap(dsp => dsp.getBindings({
                settings: ds.settings,
                metadata
            }).pipe(map(bindings2 => [ds, bindings2]))))), switchMap(([ds, bindings]) => forkJoin(ds.renderer.bindings.reduce((p, c) => [...p, ...(dataPanes.has(c.id) ? [this.toObject(dataPanes.get(c.id).settings)] : [])], [])).pipe(switchMap(datasources => forkJoin(datasources.map(d => this.dpm.getPlugin(d.plugin).pipe(switchMap(dsp => dsp.getBindings({
                settings: d.settings,
                metadata
            }))))).pipe(map(dsBindings => dsBindings.reduce((p, c) => [...p, ...c], bindings)), defaultIfEmpty(bindings))), defaultIfEmpty(bindings))));
        }
        else {
            return this.toObject(settings).pipe(switchMap(ds => iif(() => ds.renderer.type === type, of(ds.renderer.bindings), of([]))));
        }
    }
    toObject(settings) {
        return of(this.attributeSerializer.deserializeAsObject(settings));
    }
    buildSettings(rest) {
        return this.attributeSerializer.serialize(rest, "root").attributes;
    }
    getRenderType(settings) {
        const renderType = [settings.find(s => s.name === "renderer")].map(r => r.attributes.find(s => s.name === "type"));
        return renderType.length > 0 ? renderType[0].value : void 0;
    }
    stateDefinition(settings) {
        return of({
            autocomplete: {
                input: ""
            },
            loading: "y"
        });
    }
    editorOptions(settings) {
        return this.toObject(settings).pipe(switchMap(ds => this.dpm.getPlugin(ds && ds.plugin ? ds.plugin : "data").pipe(map(p => [ds, p]))), switchMap(([ds, p]) => p.editorOptions ? p.editorOptions({
            settings: ds && ds.settings ? ds.settings : []
        }) : of(void 0)), map(o => new ContentPluginEditorOptions({
            fullscreen: o ? o.fullscreen : false
        })));
    }
    static {
        this.ɵfac = function DatasourceContentHandler_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourceContentHandler)(i0.ɵɵinject(SITE_NAME), i0.ɵɵinject(PanelContentHandler), i0.ɵɵinject(i1.AttributeSerializerService), i0.ɵɵinject(i3$2.RulesResolverService), i0.ɵɵinject(i4$1.DatasourcePluginManager), i0.ɵɵinject(i4$1.DatasourceEvaluator));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _DatasourceContentHandler,
            factory: _DatasourceContentHandler.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourceContentHandler, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [SITE_NAME]
                }]
        }, {
            type: PanelContentHandler
        }, {
            type: i1.AttributeSerializerService
        }, {
            type: i3$2.RulesResolverService
        }, {
            type: i4$1.DatasourcePluginManager
        }, {
            type: i4$1.DatasourceEvaluator
        }], null);
})();
var DatasourceEditorComponent = class _DatasourceEditorComponent {
    constructor(data, dialogRef, fb, attributeSerializer, datasourceHandler) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.attributeSerializer = attributeSerializer;
        this.datasourceHandler = datasourceHandler;
        this.datasource = new Datasource();
        this.bindableOptions = [];
        this.contexts = [];
        this.formGroup = this.fb.group({
            source: this.fb.control("")
        });
    }
    ngOnInit() {
        const panesArray = this.data.panelFormGroup.get("panes");
        this.bindableOptions = panesArray.controls.reduce((p, c) => c.get("name").value ? [...p, c.get("name").value] : [...p], []);
        this.contexts = this.data.contexts.map(c => c.name);
        if (this.data.panelIndex !== void 0 && this.data.paneIndex < panesArray.length) {
            const settings = panesArray.at(this.data.paneIndex).get("settings").value.map(s => new AttributeValue(s));
            this.datasourceHandler.toObject(settings).subscribe(ds => {
                this.datasource = ds;
            });
        }
    }
    onSubmit() {
        const sourceSettings = this.attributeSerializer.serialize(this.formGroup.value.source, "source");
        const paneForm = this.data.panelFormGroup.get("panes").at(this.data.paneIndex);
        if (this.data.paneIndex === void 0) {
            this.data.panelFormGroup.get("panes").push(this.fb.group({
                contentPlugin: "datasource",
                name: new UntypedFormControl(""),
                label: new UntypedFormControl(""),
                rule: new UntypedFormControl(""),
                settings: this.fb.array(sourceSettings.attributes.map(a => this.attributeSerializer.convertToGroup(a)))
            }));
            console.log(this.data.panelFormGroup.get("panes").value);
        }
        else {
            paneForm.get("settings").clear();
            sourceSettings.attributes.forEach(a => paneForm.get("settings").push(this.attributeSerializer.convertToGroup(a)));
        }
        this.dialogRef.close();
    }
    static {
        this.ɵfac = function DatasourceEditorComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DatasourceEditorComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i3$1.MatDialogRef), i0.ɵɵdirectiveInject(i1$1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i1.AttributeSerializerService), i0.ɵɵdirectiveInject(DatasourceContentHandler));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _DatasourceEditorComponent,
            selectors: [["classifieds-ui-datasource-editor"]],
            standalone: false,
            decls: 4,
            vars: 4,
            consts: [[3, "ngSubmit", "formGroup"], ["formControlName", "source", 3, "bindableOptions", "contexts", "datasource"], ["type", "submit"]],
            template: function DatasourceEditorComponent_Template(rf, ctx) {
                if (rf & 1) {
                    i0.ɵɵelementStart(0, "form", 0);
                    i0.ɵɵlistener("ngSubmit", function DatasourceEditorComponent_Template_form_ngSubmit_0_listener() {
                        return ctx.onSubmit();
                    });
                    i0.ɵɵelement(1, "classifieds-ui-datasource-form", 1);
                    i0.ɵɵelementStart(2, "button", 2);
                    i0.ɵɵtext(3, "Save");
                    i0.ɵɵelementEnd()();
                }
                if (rf & 2) {
                    i0.ɵɵproperty("formGroup", ctx.formGroup);
                    i0.ɵɵadvance();
                    i0.ɵɵproperty("bindableOptions", ctx.bindableOptions)("contexts", ctx.contexts)("datasource", ctx.datasource);
                }
            },
            dependencies: [i1$1.ɵNgNoValidate, i1$1.NgControlStatus, i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, i1$1.FormControlName, i4$1.DatasourceFormComponent],
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatasourceEditorComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-datasource-editor",
                    standalone: false,
                    template: '<form [formGroup]="formGroup" (ngSubmit)="onSubmit()">\n  <classifieds-ui-datasource-form formControlName="source" [bindableOptions]="bindableOptions" [contexts]="contexts" [datasource]="datasource"></classifieds-ui-datasource-form>\n  <button type="submit">Save</button>\n</form>'
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }]
        }, {
            type: i3$1.MatDialogRef
        }, {
            type: i1$1.UntypedFormBuilder
        }, {
            type: i1.AttributeSerializerService
        }, {
            type: DatasourceContentHandler
        }], null);
})();
var panelContentPluginFactory = handler => {
    return new ContentPlugin({
        id: "panel",
        title: "Panel",
        selectionComponent: PanelSelectorComponent,
        editorComponent: PanelEditorComponent,
        renderComponent: void 0,
        handler
    });
};
var datasourceContentPluginFactory = handler => {
    return new ContentPlugin({
        id: "datasource",
        title: "Datasource",
        selectionComponent: void 0,
        editorComponent: DatasourceEditorComponent,
        renderComponent: void 0,
        handler
    });
};
var panelsBridgeFactory = (es, attributeSerializer) => {
    return new BridgeBuilderPlugin({
        id: "panels",
        title: "Panels",
        build: () => {
            PublicApiBridgeService.prototype["writePaneState"] = (f, v) => {
                return new Promise(res => {
                    const svc = es.getEntityCollectionService("PanelPageState");
                    svc.getByKey(f.id).pipe(catchError(() => of(new PanelPageState({
                        id: f.id,
                        panels: []
                    }))), map(p => p === void 0 ? new PanelPageState({
                        id: f.id,
                        panels: []
                    }) : p), map(p => {
                        const state = attributeSerializer.serialize(v, "root");
                        let panelPageState = new PanelPageState(__spreadProps(__spreadValues({}, p), {
                            panels: []
                        }));
                        for (let i10 = 0; i10 < f.panelIndex + 1; i10++) {
                            panelPageState.panels.push(i10 < p.panels.length ? new PanelState(__spreadProps(__spreadValues({}, p.panels[i10]), {
                                panes: []
                            })) : new PanelState());
                            for (let j = 0; j < f.paneIndex + 1; j++) {
                                if (i10 === f.panelIndex && j === f.paneIndex) {
                                    panelPageState.panels[i10].panes.push(i10 < p.panels.length && j < p.panels[i10].panes.length ? new PaneState(__spreadProps(__spreadValues({}, p.panels[i10].panes[j]), {
                                        state
                                    })) : new PaneState({
                                        state
                                    }));
                                }
                                else {
                                    panelPageState.panels[i10].panes.push(i10 < p.panels.length && j < p.panels[i10].panes.length ? new PaneState(__spreadValues({}, p.panels[i10].panes[j])) : new PaneState());
                                }
                            }
                        }
                        return panelPageState;
                    }), switchMap(pps => svc.upsert(pps))).subscribe(pps => {
                        res(pps);
                    });
                });
            };
        }
    });
};
var loadRestData = createAction("[PageBuilder] Load Rest Data", props());
var loadRestDataSuccess = createAction("[PageBuilder] Load Rest Data Success", props());
var loadRestDataError = createAction("[PageBuilder] Load Rest Data Error", props());
var setPageInfo = createAction("[PageBuilder] Set Page Info", props());
var setForm = createAction("[PageBuilder] Set Form", props());
var setPage = createAction("[PageBuilder] Set Page", props());
var setSelectionPath = createAction("[PageBuilder] Selection Path", props());
var PageBuilderEffects = class _PageBuilderEffects {
    fetchRestdata$(rest) {
        const method = rest.method ? rest.method : "get";
        switch (method) {
            case "post":
            case "POST":
                return of([]).pipe(switchMap(() => this.snippetParserService.parseSnippet({
                    snippet: rest.body
                })), switchMap(body => this.datasourceApi.postData({
                    url: rest.url,
                    body
                })));
            default:
                return this.datasourceApi.getData(rest.url);
        }
    }
    constructor(actions$, datasourceApi, snippetParserService) {
        this.actions$ = actions$;
        this.datasourceApi = datasourceApi;
        this.snippetParserService = snippetParserService;
        this.loadRestData$ = createEffect(() => this.actions$.pipe(ofType(loadRestData), concatMap(p => this.fetchRestdata$(p.rest).pipe(catchError(() => {
            return [];
        }), map(results => p.rest.renderer !== void 0 && p.rest.renderer.query !== void 0 && p.rest.renderer.query !== "" ? jpp.JSONPath({
            path: p.rest.renderer.query,
            json: results
        }) : results), map(results => loadRestDataSuccess({
            tag: p.tag,
            data: new Dataset({
                results
            })
        }))))));
    }
    static {
        this.ɵfac = function PageBuilderEffects_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PageBuilderEffects)(i0.ɵɵinject(i1$4.Actions), i0.ɵɵinject(i4$1.DatasourceApiService), i0.ɵɵinject(i3$3.SnippetParserService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PageBuilderEffects,
            factory: _PageBuilderEffects.ɵfac
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageBuilderEffects, [{
            type: Injectable
        }], () => [{
            type: i1$4.Actions
        }, {
            type: i4$1.DatasourceApiService
        }, {
            type: i3$3.SnippetParserService
        }], null);
})();
var PanelPageStateSlice = class {
    constructor(data) {
        if (data) {
            this.id = data.id;
            this.path = data.path;
            this.realPath = data.realPath;
            this.args = data.args;
        }
    }
};
var pageBuilderFeatureKey = "pageBuilder";
var initialState = {
    dataTags: [],
    datasets: [],
    pageInfo: void 0,
    formNames: [],
    forms: [],
    page: void 0,
    selectionPath: []
};
var pageBuilderReducer = createReducer(initialState, on(loadRestDataSuccess, (state, action) => {
    const tagIndex = state.dataTags.findIndex(t => t === action.tag);
    if (tagIndex > -1 && state.forms[tagIndex] !== void 0) {
        const newState = __spreadValues({}, state);
        newState.datasets[tagIndex].push(action.data);
        return newState;
    }
    else {
        return __spreadProps(__spreadValues({}, state), {
            dataTags: [...state.dataTags, action.tag],
            datasets: [...state.datasets, [action.data]]
        });
    }
}), on(setForm, (state, action) => {
    const nameIndex = state.formNames.findIndex(n => n === action.name);
    if (nameIndex > -1 && state.forms[nameIndex] !== void 0) {
        return __spreadProps(__spreadValues({}, state), {
            forms: state.forms.map((f, i10) => i10 === nameIndex ? action.form : f)
        });
    }
    else {
        return __spreadProps(__spreadValues({}, state), {
            formNames: [...state.formNames, action.name],
            forms: [...state.forms, action.form]
        });
    }
}), on(setPageInfo, (state, action) => {
    return __spreadProps(__spreadValues({}, state), {
        pageInfo: action.info !== void 0 ? new PanelPageStateSlice(action.info) : void 0
    });
}), on(setPage, (state, action) => {
    return __spreadProps(__spreadValues({}, state), {
        page: action.page !== void 0 ? new PanelPage(action.page) : void 0
    });
}), on(setSelectionPath, (state, action) => {
    return __spreadProps(__spreadValues({}, state), {
        selectionPath: action.path !== void 0 ? action.path : []
    });
}));
function reducer(state, action) {
    return pageBuilderReducer(state, action);
}
var STYLE_PLUGIN = new InjectionToken("StylePlugin");
var PANELS_SETTINGS = new InjectionToken("PanelsSettings");
var PanelsModule = class _PanelsModule {
    constructor(platformId, contentPlugins, panelsSettings, eds, cpm, entityDataService, bpm, es, attributesSerialzer, crud, entityDefinitionService, crudDataHelper) {
        const entityMetadata = entityMetadataFactory(platformId, panelsSettings);
        eds.registerMetadataMap(entityMetadata);
        entityDataService.registerService("PanelPageState", new NoopDataService("PanelPageState"));
        entityDataService.registerService("PanelPage", new CrudDataService("PanelPage", crud, entityDefinitionService, crudDataHelper));
        entityDataService.registerService("PanelPageListItem", new CrudDataService("PanelPageListItem", crud, entityDefinitionService, crudDataHelper));
        contentPlugins.forEach(p => cpm.register(p));
        bpm.register(panelsBridgeFactory(es, attributesSerialzer));
        entityDataService.registerService("PanelPageForm", new CrudDataService("PanelPageForm", crud, entityDefinitionService, crudDataHelper));
    }
    static {
        this.ɵfac = function PanelsModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelsModule)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(CONTENT_PLUGIN), i0.ɵɵinject(PANELS_SETTINGS), i0.ɵɵinject(i1$3.EntityDefinitionService), i0.ɵɵinject(i2.ContentPluginManager), i0.ɵɵinject(i1$3.EntityDataService), i0.ɵɵinject(i3$4.BridgeBuilderPluginManager), i0.ɵɵinject(i1$3.EntityServices), i0.ɵɵinject(i1.AttributeSerializerService), i0.ɵɵinject(i5$1.CrudAdaptorPluginManager), i0.ɵɵinject(i1$3.EntityDefinitionService), i0.ɵɵinject(i5$1.CrudDataHelperService));
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _PanelsModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            providers: [{
                    provide: PanelContentHandler,
                    useClass: PanelContentHandler
                },
                //{ provide: PanelContentHandler, useClass: PanelContentHandler },
                {
                    provide: CONTENT_PLUGIN,
                    useFactory: panelContentPluginFactory,
                    multi: true,
                    deps: [PanelContentHandler]
                }, {
                    provide: CONTENT_PLUGIN,
                    useFactory: datasourceContentPluginFactory,
                    multi: true,
                    deps: [DatasourceContentHandler]
                }, {
                    provide: Pluralizer,
                    useClass: DefaultPluralizer
                }],
            imports: [CommonModule,
                // HttpClientModule,
                FormsModule, ReactiveFormsModule, StoreModule.forFeature(pageBuilderFeatureKey, reducer), EffectsModule.forFeature([PageBuilderEffects]), MaterialModule, DatasourceModule, AuthModule, Aws3Module, AwosModule, CrudModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelsModule, [{
            type: NgModule,
            args: [{
                    declarations: [PanelPageLinkedlistComponent, PanelEditorComponent, PanelSelectorComponent, DatasourceEditorComponent],
                    imports: [CommonModule,
                        // HttpClientModule,
                        FormsModule, ReactiveFormsModule, StoreModule.forFeature(pageBuilderFeatureKey, reducer), EffectsModule.forFeature([PageBuilderEffects]), MaterialModule, DatasourceModule, AuthModule, Aws3Module, AwosModule, CrudModule],
                    exports: [PanelPageLinkedlistComponent, PanelEditorComponent, PanelSelectorComponent, DatasourceEditorComponent],
                    providers: [{
                            provide: PanelContentHandler,
                            useClass: PanelContentHandler
                        },
                        //{ provide: PanelContentHandler, useClass: PanelContentHandler },
                        {
                            provide: CONTENT_PLUGIN,
                            useFactory: panelContentPluginFactory,
                            multi: true,
                            deps: [PanelContentHandler]
                        }, {
                            provide: CONTENT_PLUGIN,
                            useFactory: datasourceContentPluginFactory,
                            multi: true,
                            deps: [DatasourceContentHandler]
                        }, {
                            provide: Pluralizer,
                            useClass: DefaultPluralizer
                        }]
                }]
        }], () => [{
            type: Object,
            decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }]
        }, {
            type: Array,
            decorators: [{
                    type: Inject,
                    args: [CONTENT_PLUGIN]
                }]
        }, {
            type: PanelsSettings,
            decorators: [{
                    type: Inject,
                    args: [PANELS_SETTINGS]
                }]
        }, {
            type: i1$3.EntityDefinitionService
        }, {
            type: i2.ContentPluginManager
        }, {
            type: i1$3.EntityDataService
        }, {
            type: i3$4.BridgeBuilderPluginManager
        }, {
            type: i1$3.EntityServices
        }, {
            type: i1.AttributeSerializerService
        }, {
            type: i5$1.CrudAdaptorPluginManager
        }, {
            type: i1$3.EntityDefinitionService
        }, {
            type: i5$1.CrudDataHelperService
        }], null);
})();
var PanelPageSelector = class _PanelPageSelector {
    constructor(data) {
        if (data) {
            this.panelPage = data.panelPage;
            if (data.panel !== void 0 && data.panel !== null) {
                this.panel = data.panel;
            }
            if (data.pane !== void 0 && data.pane !== null) {
                this.pane = data.pane;
            }
            if (data.nested !== void 0 && data.nested !== null && typeof data.nested === "object") {
                this.nested = new _PanelPageSelector(data.nested);
            }
        }
    }
};
var LayoutEditorBaseComponent = class _LayoutEditorBaseComponent {
    get gridItems() {
        return [];
    }
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.savable = true;
        this.nested = false;
        this.dashboard = [];
        this.layoutSetting = new LayoutSetting();
        this.rowSettings = [];
        this.ancestory = [];
    }
    static {
        this.ɵfac = function LayoutEditorBaseComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _LayoutEditorBaseComponent)(i0.ɵɵdirectiveInject(i1$1.ControlContainer));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _LayoutEditorBaseComponent,
            selectors: [["classifieds-ui-layout-editor-base"]],
            inputs: {
                savable: "savable",
                nested: "nested",
                editor: "editor",
                dashboard: "dashboard",
                layoutSetting: "layoutSetting",
                rowSettings: "rowSettings",
                columnSettings: "columnSettings",
                editablePaneTpl: "editablePaneTpl",
                extraActionsAreaTmpl: "extraActionsAreaTmpl",
                contextsMenuTpl: "contextsMenuTpl",
                ancestory: "ancestory"
            },
            standalone: false,
            decls: 0,
            vars: 0,
            template: function LayoutEditorBaseComponent_Template(rf, ctx) { },
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutEditorBaseComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-layout-editor-base",
                    template: "",
                    standalone: false
                }]
        }], () => [{
            type: i1$1.ControlContainer
        }], {
        savable: [{
                type: Input
            }],
        nested: [{
                type: Input
            }],
        editor: [{
                type: Input
            }],
        dashboard: [{
                type: Input
            }],
        layoutSetting: [{
                type: Input
            }],
        rowSettings: [{
                type: Input
            }],
        columnSettings: [{
                type: Input
            }],
        editablePaneTpl: [{
                type: Input
            }],
        extraActionsAreaTmpl: [{
                type: Input
            }],
        contextsMenuTpl: [{
                type: Input
            }],
        ancestory: [{
                type: Input
            }]
    });
})();
var LayoutRendererBaseComponent = class _LayoutRendererBaseComponent {
    get columnSettings() {
        const settings = this.panelPage ? this.panelPage.panels.reduce((p, c) => [...p, new LayoutSetting(c.columnSetting)], []) : [];
        return settings;
    }
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.displayMainControls = false;
        this.displayItemHeader = false;
    }
    static {
        this.ɵfac = function LayoutRendererBaseComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _LayoutRendererBaseComponent)(i0.ɵɵdirectiveInject(i1$1.ControlContainer, 8));
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _LayoutRendererBaseComponent,
            selectors: [["classifieds-ui-layout-renderer-base"]],
            inputs: {
                panelPage: "panelPage",
                displayMainControls: "displayMainControls",
                displayItemHeader: "displayItemHeader",
                renderPanelTpl: "renderPanelTpl"
            },
            standalone: false,
            decls: 0,
            vars: 0,
            template: function LayoutRendererBaseComponent_Template(rf, ctx) { },
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutRendererBaseComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-layout-renderer-base",
                    template: "",
                    standalone: false
                }]
        }], () => [{
            type: i1$1.ControlContainer,
            decorators: [{
                    type: Optional
                }]
        }], {
        panelPage: [{
                type: Input
            }],
        displayMainControls: [{
                type: Input
            }],
        displayItemHeader: [{
                type: Input
            }],
        renderPanelTpl: [{
                type: Input
            }]
    });
})();
var PanelStyleRendererBaseComponent = class _PanelStyleRendererBaseComponent {
    constructor() {
        this.settings = [];
        this.panes = [];
        this.originMappings = [];
        this.ancestory = [];
    }
    mergeContexts(contexts) {
        if (contexts === void 0 && this.contexts === void 0) {
            return void 0;
        }
        else if (contexts !== void 0 && this.contexts !== void 0) {
            return [...contexts, ...this.contexts];
        }
        else if (contexts !== void 0) {
            return contexts;
        }
        else {
            return this.contexts;
        }
    }
    static {
        this.ɵfac = function PanelStyleRendererBaseComponent_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelStyleRendererBaseComponent)();
        };
    }
    static {
        this.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
            type: _PanelStyleRendererBaseComponent,
            selectors: [["classifieds-ui-panel-style-renderer-base"]],
            inputs: {
                settings: "settings",
                panes: "panes",
                originPanes: "originPanes",
                originMappings: "originMappings",
                contexts: "contexts",
                ancestory: "ancestory"
            },
            standalone: false,
            decls: 0,
            vars: 0,
            template: function PanelStyleRendererBaseComponent_Template(rf, ctx) { },
            encapsulation: 2
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelStyleRendererBaseComponent, [{
            type: Component,
            args: [{
                    selector: "classifieds-ui-panel-style-renderer-base",
                    template: "",
                    standalone: false
                }]
        }], null, {
        settings: [{
                type: Input
            }],
        panes: [{
                type: Input
            }],
        originPanes: [{
                type: Input
            }],
        originMappings: [{
                type: Input
            }],
        contexts: [{
                type: Input
            }],
        ancestory: [{
                type: Input
            }]
    });
})();
var PanelsLoaderService = class _PanelsLoaderService {
    get panelPageService() {
        return this.es.getEntityCollectionService("PanelPage");
    }
    constructor(es, panelHandler) {
        this.es = es;
        this.panelHandler = panelHandler;
    }
    reducePage(pp) {
        return pp.panels.reduce((p, c, i10) => this.reducePanels(p, c, i10), []);
    }
    reducePanels(p, c, i10) {
        return [...p, ...c.panes.reduce((p2, c2, i22) => this.reducePanes(p2, c2, i22).map(o => o.pipe(map(([i32, pp]) => [i10, i32, pp]))), [])];
    }
    reducePanes(p, c, i10) {
        return [...p, ...(c.contentPlugin === "panel" ? [this.nestedPage$(c).pipe(map(pp => [i10, pp]))] : [])];
    }
    nestedPage$(p) {
        console.log("get nested panel page");
        return p.linkedPageId && p.linkedPageId !== "" ? this.getByKey(p.linkedPageId).pipe(tap(() => console.log(`get(${p.linkedPageId})`))) : this.getEmbedded(p.settings).pipe(tap(() => console.log("toObject()")));
    }
    remapNested(p, nested) {
        nested.forEach(([index1, index2, np]) => {
            p.panels[index1].panes[index2].nestedPage = np;
        });
    }
    getByKey(key) {
        return this.panelPageService.getByKey(key).pipe(map(p => new PanelPage(p)), switchMap(p => iif(() => this.reducePage(p).length > 0, forkJoin(this.reducePage(p)).pipe(tap(nested => this.remapNested(p, nested)), map(() => p)), of(p))));
    }
    getEmbedded(settings) {
        return this.panelHandler.toObject(settings).pipe(map(p => new PanelPage(p)), switchMap(p => iif(() => this.reducePage(p).length > 0, forkJoin(this.reducePage(p)).pipe(tap(nested => this.remapNested(p, nested)), map(() => p)), of(p))));
    }
    static {
        this.ɵfac = function PanelsLoaderService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelsLoaderService)(i0.ɵɵinject(i1$3.EntityServices), i0.ɵɵinject(PanelContentHandler));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PanelsLoaderService,
            factory: _PanelsLoaderService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelsLoaderService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1$3.EntityServices
        }, {
            type: PanelContentHandler
        }], null);
})();
var PanelsSelectorService = class _PanelsSelectorService {
    constructor(panelHandler) {
        this.panelHandler = panelHandler;
    }
    rebuildPage(panelPage, path) {
        return new PanelPage(__spreadProps(__spreadValues({}, panelPage), {
            panels: this.rebuildPanels(panelPage.panels, [...path])
        }));
    }
    rebuildPanels(panels, path) {
        return panels.filter((_, i10) => this.rebuildCondition(path[0], i10)).map(p => new Panel(__spreadProps(__spreadValues({}, p), {
            panes: this.rebuildPanes(p.panes, path.slice(1))
        })));
    }
    rebuildPanes(panes, path) {
        return panes.filter((_, i10) => this.rebuildCondition(path[0], i10)).map(p => p.contentPlugin === "panel" ? new Pane(__spreadProps(__spreadValues({}, p), {
            nestedPage: void 0,
            settings: this.panelHandler.buildSettings(this.rebuildPage(p.nestedPage, path.slice(1)))
        })) : new Pane(__spreadValues({}, p)));
    }
    rebuildCondition(s, i10) {
        return s !== 0 ? s > -1 ? i10 === s + s * -1 : i10 !== s * -1 + s : true;
    }
    static {
        this.ɵfac = function PanelsSelectorService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelsSelectorService)(i0.ɵɵinject(PanelContentHandler));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PanelsSelectorService,
            factory: _PanelsSelectorService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelsSelectorService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: PanelContentHandler
        }], null);
})();
var PanelStateConverterService = class _PanelStateConverterService {
    constructor(panelHandler) {
        this.panelHandler = panelHandler;
    }
    convertPageToState(pp) {
        return of(new PanelPageState()).pipe(switchMap(() => forkJoin(pp.panels.map(p => this.convertPanelToState(p)))), map(panels => new PanelPageState({
            id: pp.id,
            panels
        })));
    }
    convertPanelToState(panel) {
        return of(new PanelState()).pipe(switchMap(() => forkJoin(panel.panes.map(p => this.convertPaneToState(p)))), map(panes => new PanelState({
            panes
        })));
    }
    convertPaneToState(pane) {
        return of(new PaneState()).pipe(switchMap(state => iif(() => this.hasNestedPanelPage(pane), this.panelHandler.toObject(pane.settings).pipe(switchMap(panelPage => this.convertPageToState(panelPage)), map(nestedPage => new PaneState({
            state: new AttributeValue(),
            nestedPage
        }))), of(state))));
    }
    hasNestedPanelPage(pane) {
        return pane.contentPlugin === "panel" && (pane.linkedPageId === void 0 || pane.linkedPageId === null || pane.linkedPageId === "");
    }
    static {
        this.ɵfac = function PanelStateConverterService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelStateConverterService)(i0.ɵɵinject(PanelContentHandler));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PanelStateConverterService,
            factory: _PanelStateConverterService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelStateConverterService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: PanelContentHandler
        }], null);
})();
var PanelsWalkerService = class _PanelsWalkerService {
    constructor(panelsLoaderService) {
        this.panelsLoaderService = panelsLoaderService;
    }
    walkPageHierarchy({ panelPage, visitorFunc, defaultv, ancestory }) {
        return new Observable(obs => {
            const len = panelPage.panels.length;
            const visitors$ = [];
            for (let i10 = 0; i10 < len; i10++) {
                const len2 = panelPage.panels[i10].panes.length;
                for (let j = 0; j < len2; j++) {
                    visitors$.push(visitorFunc({
                        pane: panelPage.panels[i10].panes[j],
                        panelPage,
                        ancestoryWithSelf: [...ancestory, i10, j]
                    }));
                    if (panelPage.panels[i10].panes[j].nestedPage && panelPage.panels[i10].panes[j].nestedPage.panels && panelPage.panels[i10].panes[j].nestedPage.panels.length !== 0) {
                        visitors$.push(this.walkPageHierarchy({
                            panelPage,
                            visitorFunc,
                            defaultv,
                            ancestory: [...ancestory, i10, j]
                        }));
                    }
                    else if (panelPage.panels[i10].panes[j].contentPlugin === "panel") { }
                }
            }
            if (visitors$.length === 0) {
                obs.next(defaultv);
                obs.complete();
            }
            else {
                forkJoin(visitors$).pipe(map(groups => groups.reduce((p, c) => [...p, ...c], defaultv)), tap(values => {
                    obs.next(values);
                    obs.complete();
                })).subscribe();
            }
        });
    }
    static {
        this.ɵfac = function PanelsWalkerService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelsWalkerService)(i0.ɵɵinject(PanelsLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PanelsWalkerService,
            factory: _PanelsWalkerService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelsWalkerService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: PanelsLoaderService
        }], null);
})();
var PanelsContextService = class _PanelsContextService {
    constructor(panelsVisitorService, cpm) {
        this.panelsVisitorService = panelsVisitorService;
        this.cpm = cpm;
        this.gatherPaneContexts = ({ pane, panelPage, ancestoryWithSelf }) => this.cpm.getPlugin(pane.contentPlugin).pipe(switchMap(p => ( /*p &&*/p.handler ? p.handler.stateDefinition(pane.settings) : of({}))), map(state => new InlineContext({
            // name: 'panestate' + ancestoryWithSelf.map(i => `[${i}]`).join(''), 
            name: "panestate-" + ancestoryWithSelf.join("-"),
            adaptor: "data",
            plugin: "panestate",
            data: {
                id: panelPage ? panelPage.id : "",
                selectionPath: [...ancestoryWithSelf],
                value: state
            }
        })), map(paneContext => [paneContext]), take(1));
    }
    allActivePageContexts({ panelPage, ancestory = [] }) {
        return this.panelsVisitorService.walkPageHierarchy({
            panelPage,
            ancestory,
            visitorFunc: this.gatherPaneContexts,
            defaultv: []
        });
    }
    static {
        this.ɵfac = function PanelsContextService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelsContextService)(i0.ɵɵinject(PanelsWalkerService), i0.ɵɵinject(i2.ContentPluginManager));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PanelsContextService,
            factory: _PanelsContextService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelsContextService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: PanelsWalkerService
        }, {
            type: i2.ContentPluginManager
        }], null);
})();
var PanelStateArchitectService = class _PanelStateArchitectService {
    constructor(attributeSerializer) {
        this.attributeSerializer = attributeSerializer;
    }
    buildToAncestorySpec({ panelPageState, ancestory }) {
        for (let i10 = 0; i10 < ancestory[0] + 1; i10++) {
            if (panelPageState.panels.length < i10 + 1) {
                panelPageState.panels.push(new PanelState());
            }
            if (i10 === ancestory[0] && ancestory.length > 1) {
                for (let j = 0; j < ancestory[1] + 1; j++) {
                    if (panelPageState.panels[ancestory[0]].panes.length < j + 1) {
                        panelPageState.panels[ancestory[0]].panes.push(new PaneState({
                            state: this.attributeSerializer.serialize({}, "root")
                        }));
                    }
                    if (j === ancestory[1] && ancestory.length > 2) {
                        if (!panelPageState.panels[ancestory[0]].panes[j].nestedPage) {
                            panelPageState.panels[ancestory[0]].panes[j].nestedPage = new PanelPageState();
                        }
                        this.buildToAncestorySpec({
                            panelPageState: panelPageState.panels[ancestory[0]].panes[j].nestedPage,
                            ancestory: ancestory.slice(2)
                        });
                    }
                }
            }
        }
    }
    static {
        this.ɵfac = function PanelStateArchitectService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelStateArchitectService)(i0.ɵɵinject(i1.AttributeSerializerService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PanelStateArchitectService,
            factory: _PanelStateArchitectService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelStateArchitectService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }], null);
})();
var DynamicPaneService = class _DynamicPaneService {
    static {
        this.ɵfac = function DynamicPaneService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _DynamicPaneService)();
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _DynamicPaneService,
            factory: _DynamicPaneService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicPaneService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var StylePluginManager = class _StylePluginManager extends BasePluginManager {
    constructor(pcm, moduleLoader) {
        super(pcm, moduleLoader);
    }
    pluginDef() {
        return of(new PluginDef({
            name: "style"
        }));
    }
    static {
        this.ɵfac = function StylePluginManager_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _StylePluginManager)(i0.ɵɵinject(i1$6.PluginConfigurationManager), i0.ɵɵinject(i2$1.ModuleLoaderService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _StylePluginManager,
            factory: _StylePluginManager.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StylePluginManager, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1$6.PluginConfigurationManager
        }, {
            type: i2$1.ModuleLoaderService
        }], null);
})();
var StyleResolverService = class _StyleResolverService {
    constructor(spm) {
        this.spm = spm;
    }
    alterResolvedPanes({ panel, resolvedPanes, originMappings
    /*, resolvedContexts */
     }) {
        return of(void 0).pipe(switchMap(() => panel.stylePlugin && panel.stylePlugin !== "" ? this.spm.getPlugin(panel.stylePlugin) : of(void 0)), switchMap(p => p && p.handler ? p.handler.alterResolvedPanes({
            settings: panel.settings,
            resolvedPanes,
            originMappings
            /*, resolvedContexts */
        }) : of({
            resolvedPanes,
            originMappings
            /*, resolvedContexts */
        })));
    }
    static {
        this.ɵfac = function StyleResolverService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _StyleResolverService)(i0.ɵɵinject(StylePluginManager));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _StyleResolverService,
            factory: _StyleResolverService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleResolverService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: StylePluginManager
        }], null);
})();
var PanelResolverService = class _PanelResolverService {
    // ontentPlugins: Array<ContentPlugin> = [];
    constructor(panelHandler, rulesResolver, inlineContextResolver, cpm) {
        this.panelHandler = panelHandler;
        this.rulesResolver = rulesResolver;
        this.inlineContextResolver = inlineContextResolver;
        this.cpm = cpm;
    }
    /**
     * @todo: This needs to include looking through the rules. Otherwise contexts
     * only used in rules will not trigger context update chain. A hacky work-around
     * to this is to include the context token being used in a rule as a hidden value
     * part of the content. This works for snippets and for the time being is an ok
     * solution since states are only really relevant to snippets. However, in the long term
     * the disovery needs to include rules.
     */
    usedContexts(panes) {
        return this.panesPlugins(panes).pipe(switchMap(plugins => this.dataPanes(panes).pipe(map(dataPanes => ({
            plugins,
            dataPanes
        })))), switchMap(({ plugins, dataPanes }) => forkJoin(panes.reduce((p, c) => {
            const plugin = plugins.get(c.contentPlugin);
            if (plugin.handler !== void 0) {
                return [...p, plugin.handler.getBindings(c.settings, "context", /* @__PURE__ */ new Map([["dataPanes", dataPanes]])).pipe(map(cb => cb.map(b => b.id)))];
            }
            else {
                return [...p];
            }
        }, [])).pipe(map(v => v.reduce((p, c) => [...p, ...c], [])))));
    }
    staticPanes(panes) {
        return this.cpm.getPlugins(panes.reduce((p, c) => {
            return p.findIndex(cp => cp === c.contentPlugin) === -1 ? [...p, c.contentPlugin] : [...p];
        }, [])).pipe(map(plugins => panes.filter(p => plugins.get(p.contentPlugin).handler === void 0 || !plugins.get(p.contentPlugin).handler.isDynamic(p.settings))));
    }
    dataPanes(panes) {
        return this.cpm.getPlugins(panes.reduce((p, c) => {
            return p.findIndex(cp => cp === c.contentPlugin) === -1 ? [...p, c.contentPlugin] : [...p];
        }, [])).pipe(map(plugins => panes.filter(p => plugins.get(p.contentPlugin).handler !== void 0 && plugins.get(p.contentPlugin).handler.isData(p.settings))));
    }
    panesPlugins(panes) {
        return this.cpm.getPlugins(panes.reduce((p, c) => {
            return p.findIndex(cp => cp === c.contentPlugin) === -1 ? [...p, c.contentPlugin] : [...p];
        }, []));
    }
    resolvePanes({ panes, contexts, resolvedContext }) {
        console.log("resolve panes");
        return this.panesPlugins(panes).pipe(switchMap(plugins => forkJoin(panes.reduce((p, c) => {
            const plugin = plugins.get(c.contentPlugin);
            if ( /*plugin &&*/plugin.handler !== void 0) {
                return [...p, plugin.handler.getBindings(c.settings, "pane").pipe(map(c2 => c2.map(c3 => c3.id)))];
            }
            else {
                return [...p, of([])];
            }
        }, [])))).pipe(map(groups => groups.reduce((p, c) => [...p, ...c], [])), switchMap(bindings => this.panesPlugins(panes).pipe(map(plugins => [bindings, plugins]))), switchMap(([bindings, plugins]) => forkJoin(panes.reduce((p, c) => {
            const plugin = plugins.get(c.contentPlugin);
            if ( /*plugin &&*/plugin.handler !== void 0 && plugin.handler.isDynamic(c.settings)) {
                return [...p, plugin.handler.isData(c.settings) && bindings.findIndex(n => n === c.name) !== -1 ? of([]) : forkJoin([this.staticPanes(panes), this.dataPanes(panes)]).pipe(switchMap(([staticPanes, dataPanes]) => plugin.handler.buildDynamicItems(c.settings, new Map([...(c.metadata === void 0 ? [] : c.metadata), ["tag", v4_default()], ["panes", staticPanes], ["dataPanes", dataPanes], ["contexts", contexts !== void 0 ? contexts : []]])).pipe(map(items => this.panelHandler.fromPanes(items)), map(panes2 => this.panelHandler.wrapPanel(panes2).panes), take(1))))];
            }
            else if (c.name === "" || bindings.findIndex(n => n === c.name) === -1) {
                return [...p, of([new Pane(__spreadProps(__spreadValues({}, c), {
                            contexts: [...contexts, ...(c.contexts ? c.contexts : [])]
                        }))]).pipe(switchMap(panes2 => iif(() => panes2[0].rule !== void 0 && panes2[0].rule !== null && panes2[0].rule.condition !== "", this.rulesResolver.evaluate(panes2[0].rule, [...contexts, ...(c.contexts ? c.contexts : [])]).pipe(map(res => res ? panes2 : [])), of(panes2))))];
            }
            else {
                return [...p];
            }
        }, [])).pipe(switchMap(paneGroups => iif(() => paneGroups.reduce((p, c) => [...p, ...c], []).length === 0, of([paneGroups, []]), forkJoin([...paneGroups.reduce((p, c) => [...p, ...c.map(pa => pa.contexts && pa.contexts.length !== 0 ? this.inlineContextResolver.resolveAll(pa.contexts).pipe(take(1)) : of({}).pipe(take(1)))], [])]).pipe(map(pc => [paneGroups, pc.map(c => __spreadValues(__spreadValues({}, c), resolvedContext))])))), 
        /*switchMap(paneGroups => paneGroups.reduce((p, c) => [ ...p, ...c ], []).length === 0 ? of([paneGroups,[]]) : forkJoin([
          ...paneGroups.reduce<Array<Observable<any>>>((p, c) => [ ...p, ...c.map(pa => (pa.contexts && pa.contexts.length !== 0 ? this.inlineContextResolver.resolveAll(pa.contexts).pipe(take(1)) : of({}).pipe(take(1))))], [])
        ]).pipe(
          map(pc => [paneGroups, pc.map(c => ({ ...c, ...resolvedContext }))])
        )),*/
        map(([paneGroups, resolvedContexts]) => {
            let resolvedPanes = [];
            let originMappings = [];
            paneGroups.forEach((panes2, index) => {
                resolvedPanes = [...(resolvedPanes === void 0 ? [] : resolvedPanes), ...panes2.map((p, index2) => new Pane(__spreadProps(__spreadValues({}, p), {
                        resolvedContext: resolvedContexts[resolvedPanes.length + index2]
                    })))];
                originMappings = [...(originMappings ? [] : originMappings), ...panes2.map(() => index)];
            });
            return {
                resolvedPanes,
                originMappings
                /*, resolvedContexts */
            };
        }))));
    }
    static {
        this.ɵfac = function PanelResolverService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PanelResolverService)(i0.ɵɵinject(PanelContentHandler), i0.ɵɵinject(i3$2.RulesResolverService), i0.ɵɵinject(i3$5.InlineContextResolverService), i0.ɵɵinject(i2.ContentPluginManager));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PanelResolverService,
            factory: _PanelResolverService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelResolverService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: PanelContentHandler
        }, {
            type: i3$2.RulesResolverService
        }, {
            type: i3$5.InlineContextResolverService
        }, {
            type: i2.ContentPluginManager
        }], null);
})();
var StylePlugin = class extends Plugin {
    constructor(data) {
        super(data);
        if (data) {
            this.name = this.id;
            this.title = data.title;
            this.editorComponent = data.editorComponent ? data.editorComponent : void 0;
            this.renderComponent = data.renderComponent ? data.renderComponent : void 0;
            if (data.handler) {
                this.handler = data.handler;
            }
        }
    }
};
var PaneDatasourceService = class _PaneDatasourceService extends DataSource {
    // private fetchedPages = new Set<number>();
    constructor() {
        super();
        this.pageChange$ = new Subject();
        this.pageSize = 20;
        this.dataStream = new BehaviorSubject([]);
        this.subscription = new Subscription();
        this.lastPage = 0;
        this.paneItems = [];
    }
    set panes(panes) {
        this.paneItems = [...this.paneItems, ...panes];
        this.dataStream.next(this.paneItems);
    }
    connect(collectionViewer) {
        this.subscription.add(collectionViewer.viewChange.subscribe(range => {
            const currentPage = Math.ceil((range.end + 1) / this.pageSize);
            if (currentPage > this.lastPage) {
                this.lastPage = currentPage;
                this.pageChange$.next(currentPage);
            }
        }));
        return this.dataStream;
    }
    /*connect(collectionViewer: CollectionViewer): Observable<Array<any>> {
      this.subscription.add(collectionViewer.viewChange.subscribe(range => {
        const startPage = Math.floor(range.start / this.pageSize);
        const endPage = Math.floor((range.end - 1) / this.pageSize);
        for (let i = startPage; i <= endPage; i++) {
          if (this.fetchedPages.has(i)) {
            return;
          }
          console.log(`fetch page ${i}`);
          this.pageChange$.next(i);
          this.fetchedPages.add(i);
        }
      }));
      return this.dataStream;
    }*/
    disconnect(collectionViewer) {
        this.subscription.unsubscribe();
    }
    static {
        this.ɵfac = function PaneDatasourceService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PaneDatasourceService)();
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PaneDatasourceService,
            factory: _PaneDatasourceService.ɵfac
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaneDatasourceService, [{
            type: Injectable
        }], () => [], null);
})();
var selectPageBuilderState = createFeatureSelector(pageBuilderFeatureKey);
var selectDataset = tag => createSelector(selectPageBuilderState, state => {
    const index = state.dataTags.findIndex(t => t === tag);
    if (index > -1) {
        return state.datasets[index][state.datasets[index].length - 1];
    }
    else {
        return void 0;
    }
});
var selectPageInfo = createSelector(selectPageBuilderState, state => state.pageInfo);
var selectPage = createSelector(selectPageBuilderState, state => state.page);
var selectSelectionPath = createSelector(selectPageBuilderState, state => state.selectionPath);
var selectFormNames = createSelector(selectPageBuilderState, state => state.formNames);
var selectForms = createSelector(selectPageBuilderState, state => state.forms);
var selectForm = createSelector(selectFormNames, selectForms, (names, forms, props2) => {
    const index = names.findIndex(n => n === props2.name);
    if (index > -1) {
        return forms[index];
    }
    else {
        return void 0;
    }
});
var PageBuilderFacade = class _PageBuilderFacade {
    constructor(store) {
        this.store = store;
        this.getPageInfo$ = this.store.pipe(select(selectPageInfo));
        this.getPage$ = this.store.pipe(select(selectPage));
        this.getSelectionPath$ = this.store.pipe(select(selectSelectionPath));
        this.getFormNames$ = this.store.pipe(select(selectFormNames));
        this.getForm$ = name => this.store.pipe(select(selectForm, {
            name
        }));
    }
    loadRestData(tag, rest) {
        this.store.dispatch(loadRestData({
            tag,
            rest
        }));
    }
    setPageInfo(info) {
        this.store.dispatch(setPageInfo({
            info
        }));
    }
    setPage(page) {
        this.store.dispatch(setPage({
            page
        }));
    }
    setSelectionPath(path) {
        this.store.dispatch(setSelectionPath({
            path
        }));
    }
    setForm(name, form) {
        this.store.dispatch(setForm({
            name,
            form
        }));
    }
    static {
        this.ɵfac = function PageBuilderFacade_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PageBuilderFacade)(i0.ɵɵinject(i1$5.Store));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PageBuilderFacade,
            factory: _PageBuilderFacade.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageBuilderFacade, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1$5.Store
        }], null);
})();
var PropertiesFormPayload = class {
    constructor(data) {
        this.readUserIds = [];
        if (data) {
            this.title = data.title;
            this.name = data.name;
            this.path = data.path;
            this.cssFile = data.cssFile;
            if (data.readUserIds) {
                this.readUserIds = data.readUserIds.map(id => id);
            }
        }
    }
};
var PanelPropsFormPayload = class {
    constructor(data) {
        if (data) {
            this.label = data.label;
            this.name = data.name;
        }
    }
};
var PanePropsFormPayload = class {
    constructor(data) {
        if (data) {
            this.label = data.label;
            this.name = data.name;
        }
    }
};
var PanelPageForm = class {
    constructor(data) {
        this.panels = [];
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.title = data.title;
            this.derivativeId = data.derivativeId;
            this.valid = data.valid ? true : false;
            if (data.persistence) {
                this.persistence = new PersistenceFormPayload(data.persistence);
            }
            if (data.panels) {
                this.panels = data.panels.map(p => new PanelPageFormPanel(p));
            }
        }
    }
};
var PanelPageFormPanel = class {
    constructor(data) {
        this.panes = [];
        if (data) {
            this.name = data.name;
            this.label = data.label;
            if (data.panes) {
                this.panes = data.panes.map(p => new PanelPageFormPane(p));
            }
        }
    }
};
var PanelPageFormPane = class {
    constructor(data) {
        this.settings = [];
        if (data) {
            this.name = data.name;
            this.label = data.label;
            this.contentPlugin = data.contentPlugin;
            if (data.settings) {
                this.settings = data.settings.map(s => new AttributeValue(s));
            }
        }
    }
};
var FormDatasource = class {
    constructor(data) {
        if (data) {
            this.name = data.name;
            this.field = data.field;
        }
    }
};
var PaneStateService = class _PaneStateService {
    constructor(pageBuilderFacade, panelStateArchitectService, attributeSerializer, es) {
        this.pageBuilderFacade = pageBuilderFacade;
        this.panelStateArchitectService = panelStateArchitectService;
        this.attributeSerializer = attributeSerializer;
        this.selectEntities = entities => entities.entities;
        this.selectById = ({ id }) => createSelector(this.selectEntities, entities => entities[id] ? entities[id] : void 0);
        this.panelPageStateService = es.getEntityCollectionService("PanelPageState");
    }
    mergeState({ state, settings, plugin, ancestory }) {
        return of(state).pipe(switchMap(s => this.pageBuilderFacade.getPageInfo$.pipe(map(p => [s, p]))), switchMap(([s, p]) => plugin.handler.stateDefinition(settings).pipe(map(d => [s, p, d]))), switchMap(([s, p, d]) => this.panelPageStateService.collection$.pipe(select(this.selectById({
            id: p.id
        })), map(ps => [s, new PanelPageState(ps ? ps : {
                id: p.id,
                panels: []
            }), d]), take(1))), map(([s, ps, d]) => {
            this.panelStateArchitectService.buildToAncestorySpec({
                panelPageState: ps,
                ancestory: [...ancestory]
            });
            const path = "$." + ancestory.map((index, i10) => `${(i10 + 1) % 2 === 0 ? "panes" : (i10 === 0 ? "" : "nestedPage.") + "panels"}[${index}]`).join(".");
            const paneState = jpp.JSONPath({
                path,
                json: ps
            })[0];
            return [s, ps, d, paneState];
        }), tap(([s, _, d, ps2]) => {
            const deserializedState = ps2.state ? ps2.state.root ? this.attributeSerializer.deserialize(ps2.state).root : this.attributeSerializer.deserialize(ps2.state) : {};
            const newState = merge(!deserializedState || Object.keys(deserializedState).length === 0 ? d : deserializedState, s);
            ps2.state = this.attributeSerializer.serialize(newState, "root");
        }), map(([_, ps, __, ps2]) => ({
            paneState: ps2,
            pageState: ps
        })));
    }
    static {
        this.ɵfac = function PaneStateService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _PaneStateService)(i0.ɵɵinject(PageBuilderFacade), i0.ɵɵinject(PanelStateArchitectService), i0.ɵɵinject(i1.AttributeSerializerService), i0.ɵɵinject(i1$3.EntityServices));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _PaneStateService,
            factory: _PaneStateService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaneStateService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: PageBuilderFacade
        }, {
            type: PanelStateArchitectService
        }, {
            type: i1.AttributeSerializerService
        }, {
            type: i1$3.EntityServices
        }], null);
})();
var FormService = class _FormService {
    constructor(attributeSerializer) {
        this.attributeSerializer = attributeSerializer;
    }
    serializeForm(form) {
        const len = form.panels.length;
        let value = {};
        for (let i10 = 0; i10 < len; i10++) {
            const len2 = form.panels[i10].panes.length;
            const dsValues = /* @__PURE__ */ new Map();
            for (let j = 0; j < len2; j++) {
                const serializedValue = this.serializeFormPane(form.panels[i10].panes[j]);
                if (form.panels[i10].panes[j].name && form.panels[i10].panes[j].name !== null && (value[form.panels[i10].panes[j].name] || form.panels[i10].panes[j].name === pluralize(form.panels[i10].panes[j].name))) {
                    if (!dsValues.has(form.panels[i10].panes[j].name)) {
                        dsValues.set(form.panels[i10].panes[j].name, typeof value[form.panels[i10].panes[j].name] !== "undefined" ? [value[form.panels[i10].panes[j].name]] : []);
                    }
                    const arrayValues = dsValues.get(form.panels[i10].panes[j].name);
                    dsValues.set(form.panels[i10].panes[j].name, [...arrayValues, serializedValue]);
                }
                else {
                    if (form.panels[i10].panes[j].name && form.panels[i10].panes[j].name !== "") {
                        value = __spreadProps(__spreadValues({}, value), {
                            [form.panels[i10].panes[j].name]: serializedValue
                        });
                    }
                    else {
                        value = __spreadValues(__spreadValues({}, value), serializedValue);
                    }
                }
            }
            Array.from(dsValues).forEach(([k, v]) => value[k] = v);
        }
        return value;
    }
    serializeFormPane(pane) {
        if (pane.contentPlugin === "panel") {
            return this.serializeForm(new PanelPageForm(this.attributeSerializer.deserializeAsObject(pane.settings, true)));
        }
        else {
            const value = this.attributeSerializer.deserializeAsObject(pane.settings, true);
            return value !== void 0 ? value.value : void 0;
        }
    }
    static {
        this.ɵfac = function FormService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormService)(i0.ɵɵinject(i1.AttributeSerializerService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _FormService,
            factory: _FormService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }], null);
})();
var FormStateConverterService = class _FormStateConverterService {
    constructor(attributeSerializer) {
        this.attributeSerializer = attributeSerializer;
    }
    convertPageToForm({ pp, pp2, ancestory, debugPath = [] }) {
        return of(new PanelPageState()).pipe(switchMap(() => forkJoin(pp.panels.map((p, index) => this.convertPanelToForm({
            panel: p,
            panel2: pp2.panels[index],
            ancestory,
            debugPath: [...debugPath, `convertPageToForm{ index: ${index} }`]
        })))), map(panels => new PanelPageForm({
            id: pp.id,
            panels,
            name: pp2.name,
            title: pp2.title,
            derivativeId: ""
        })));
    }
    convertPanelToForm({ panel, panel2, ancestory, debugPath = [] }) {
        return of(new PanelPageFormPanel()).pipe(switchMap(() => forkJoin(panel.panes.map((p, index) => this.convertPaneToForm({
            pane: p,
            pane2: panel2.panes[index],
            ancestory,
            debugPath: [...debugPath, `convertPanelToForm{ index: ${index} }`]
        })))), map(panes => new PanelPageFormPanel({
            panes,
            name: panel2.name,
            label: panel2.label
        })));
    }
    convertPaneToForm({ pane, pane2, ancestory, debugPath = [] }) {
        const value = pane.state.attributes.find(a => a.name === "value");
        return of(new PanelPageFormPane({
            settings: value ? [value] : [],
            name: pane2.name,
            label: pane2.label,
            contentPlugin: pane2.contentPlugin
        })).pipe(switchMap(form => iif(() => this.hasNestedPanelPage(pane), pane.nestedPage ? this.convertPageToForm({
            ancestory,
            pp: pane.nestedPage,
            pp2: new PanelPage(this.attributeSerializer.deserializeAsObject(pane2.settings)),
            debugPath: [...debugPath, `convertPaneToForm`]
        }).pipe(map(nestedPage => new PanelPageFormPane(__spreadProps(__spreadValues({}, form), {
            settings: this.attributeSerializer.serialize(nestedPage, "root").attributes
        })))) : of(form), of(form))));
    }
    hasNestedPanelPage(pane) {
        return !!pane.nestedPage;
    }
    static {
        this.ɵfac = function FormStateConverterService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormStateConverterService)(i0.ɵɵinject(i1.AttributeSerializerService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _FormStateConverterService,
            factory: _FormStateConverterService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormStateConverterService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }], null);
})();
var FormGroupConverterService = class _FormGroupConverterService {
    constructor(attributeSerializer, fb) {
        this.attributeSerializer = attributeSerializer;
        this.fb = fb;
    }
    makeFormGroupFromPage(pp, pp2) {
        return of(this.fb.group({
            /*name: this.fb.control(pp.name),*/
            panels: this.fb.array([])
        })).pipe(switchMap(pageFormGroup => forkJoin(pp.panels.map((p, index) => this.makeFormGroupFromPanel(p, pp2.panels[index]))).pipe(map(panelGroups => ({
            panelGroups,
            pageFormGroup
        })))), tap(({ panelGroups, pageFormGroup }) => {
            const len = panelGroups.length;
            for (let i10 = 0; i10 < len; i10++) {
                pageFormGroup.get("panels").push(panelGroups[i10]);
            }
        }), map(({ pageFormGroup }) => pageFormGroup));
    }
    makeFormGroupFromPanel(panel, panel2) {
        return of(this.fb.group({
            name: this.fb.control(panel.name),
            panes: this.fb.array([])
        })).pipe(switchMap(panelFormGroup => forkJoin(panel.panes.map((p, index) => this.makeFormGroupFromPane(p, panel2.panes[index]))).pipe(map(paneGroups => ({
            paneGroups,
            panelFormGroup
        })))), tap(({ paneGroups, panelFormGroup }) => {
            const len = paneGroups.length;
            for (let i10 = 0; i10 < len; i10++) {
                panelFormGroup.get("panes").push(paneGroups[i10]);
            }
        }), map(({ panelFormGroup }) => panelFormGroup));
    }
    makeFormGroupFromPane(pane, pane2) {
        const value = pane2 ? pane2.settings.find(a => a.name === "value") : void 0;
        return of(this.fb.group({
            name: this.fb.control(pane.name),
            contentPlugin: this.fb.control(""),
            settings: this.fb.array([])
        })).pipe(switchMap(paneFormGroup => iif(() => this.hasNestedPanelPage(pane), this.hasNestedPanelPage(pane) ? this.makeFormGroupFromPage(pane.nestedPage, new PanelPageForm(this.attributeSerializer.deserializeAsObject(pane2.settings))).pipe(tap(pageFormGroup => {
            const newGroup = this.attributeSerializer.convertToGroup(this.attributeSerializer.serialize(pageFormGroup.value, "value").attributes[0]);
            paneFormGroup.get("contentPlugin").setValue("panel");
            paneFormGroup.get("settings").push(newGroup);
        }), map(() => paneFormGroup)) : of(paneFormGroup).pipe(tap(() => {
            if (value) {
                const newGroup = this.attributeSerializer.convertToGroup(value);
                paneFormGroup.get("settings").push(newGroup);
            }
        })), of(paneFormGroup).pipe(tap(() => {
            if (value) {
                const newGroup = this.attributeSerializer.convertToGroup(value);
                paneFormGroup.get("settings").push(newGroup);
            }
        })))));
    }
    hasNestedPanelPage(pane) {
        return !!pane.nestedPage;
    }
    static {
        this.ɵfac = function FormGroupConverterService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _FormGroupConverterService)(i0.ɵɵinject(i1.AttributeSerializerService), i0.ɵɵinject(i1$1.UntypedFormBuilder));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _FormGroupConverterService,
            factory: _FormGroupConverterService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormGroupConverterService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i1.AttributeSerializerService
        }, {
            type: i1$1.UntypedFormBuilder
        }], null);
})();
var CssHelperService = class _CssHelperService {
    makeJsonNode() {
        return {
            attributes: {},
            children: {}
        };
    }
    reduceCss(css, match, matches = true) {
        return css && css.children ? Object.keys(css.children).filter(k => matches ? k.indexOf(match) === 0 : k.indexOf(match) !== 0).reduce((p, c) => __spreadProps(__spreadValues({}, p), {
            children: __spreadProps(__spreadValues({}, p.children), {
                [matches ? c.substr(c.indexOf(match) + match.length).trim() : c]: css.children[c]
            })
        }), this.makeJsonNode()) : this.makeJsonNode();
    }
    reduceSelector(css, match, matches = true) {
        return css ? Object.keys(css).filter(k => matches ? k.indexOf(match) === 0 : k.indexOf(match) !== 0).reduce((p, c) => __spreadProps(__spreadValues({}, p), {
            [matches ? c.substr(c.indexOf(match) + match.length).trim() : c]: css[c]
        }), {}) : {};
    }
    static {
        this.ɵfac = function CssHelperService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _CssHelperService)();
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _CssHelperService,
            factory: _CssHelperService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CssHelperService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
export { CssHelperService, DatasourceContentHandler, DatasourceEditorComponent, DynamicPaneService, FormDatasource, FormGroupConverterService, FormService, FormStateConverterService, GridItem, GridLayout, LayoutEditorBaseComponent, LayoutRendererBaseComponent, LayoutSetting, PANELS_SETTINGS, PageBuilderFacade, Pane, PaneDatasourceService, PanePropsFormPayload, PaneState, PaneStateService, Panel, PanelContentHandler, PanelEditorComponent, PanelPage, PanelPageForm, PanelPageFormPane, PanelPageFormPanel, PanelPageLinkedlistComponent, PanelPageListItem, PanelPagePermissions, PanelPageSelector, PanelPageState, PanelPageStateSlice, PanelPropsFormPayload, PanelResolverService, PanelSelectorComponent, PanelState, PanelStateArchitectService, PanelStateConverterService, PanelStyleRendererBaseComponent, PanelsContextService, PanelsLoaderService, PanelsModule, PanelsSelectorService, PanelsSettings, PanelsWalkerService, PropertiesFormPayload, STYLE_PLUGIN, StylePlugin, StylePluginManager, StyleResolverService, initialState, loadRestData, loadRestDataError, loadRestDataSuccess, pageBuilderFeatureKey, reducer, selectDataset, selectForm, selectFormNames, selectForms, selectPage, selectPageBuilderState, selectPageInfo, selectSelectionPath, setForm, setPage, setPageInfo, setSelectionPath };
