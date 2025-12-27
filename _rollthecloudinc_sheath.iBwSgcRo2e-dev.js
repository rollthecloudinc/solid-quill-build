import "@nf-internal/chunk-BSWOS4VH";
import { Observable, Subject, catchError, debounceTime, filter, of, switchMap, tap } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/sheath/fesm2022/rollthecloudinc-sheath.mjs
import * as i0 from "@angular/core";
import { NgModule, DOCUMENT, Inject, Injectable } from "@angular/core";
import domElementPath from "dom-element-path";
import { camelize, dasherize, underscore } from "inflected";
import merge from "deepmerge-json";
var SheathModule = class _SheathModule {
    static {
        this.ɵfac = function SheathModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _SheathModule)();
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _SheathModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({});
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SheathModule, [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: []
                }]
        }], null, null);
})();
var isSelectorValid = ({ selector, document }) => {
    const dummyElement = document.createDocumentFragment();
    if (!selector || selector.indexOf("undefined") !== -1) {
        return false;
    }
    try {
        dummyElement.querySelector(selector);
    }
    catch {
        return false;
    }
    return true;
};
var commentX = /\/\*[\s\S]*?\*\//g;
var lineAttrX = /([^\:]+):([^\;]*);/;
var altX = /(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gim;
var isEmpty = function (x) {
    return typeof x == "undefined" || x.length == 0 || x == null;
};
var defaultToJsonArgs = {
    ordered: false,
    comments: false,
    stripComments: false,
    split: false
};
var StylizerService = class _StylizerService {
    constructor(document) {
        this.document = document;
        this.mutate$ = new Subject();
        this.mutated$ = new Subject();
        this.mutateSub = this.mutate$.pipe(filter(({ record }) => record.type === "attributes" && record.attributeName === "style" && !!record.target), debounceTime(2e3), switchMap(({ record, overlay }) => this.mapRecord({
            record,
            overlay
        })), tap(({ stylesheet }) => this.mutated$.next({
            stylesheet
        }))).subscribe();
    }
    stylize({ targetNode }) {
        const overlay = /* @__PURE__ */ new Map();
        const observer = new MutationObserver(records => {
            records.forEach(record => {
                this.mutate$.next({
                    record,
                    overlay
                });
            });
        });
        const observerOptions = {
            childList: true,
            attributes: true,
            subtree: true,
            attributeFilter: ["style"],
            attributeOldValue: true
        };
        observer.observe(targetNode, observerOptions);
    }
    mapRecord({ record, overlay }) {
        return new Observable(obs => {
            const path = domElementPath.default(record.target);
            const oldCssAsJson = this.toJSON(`${path} { ${record.oldValue} }`);
            const oldCssAsObject = oldCssAsJson.children[path] ? Object.keys(oldCssAsJson.children[path].attributes).reduce((p, c) => __spreadProps(__spreadValues({}, p), {
                [camelize(c.replace("-", "_"), false)]: oldCssAsJson.children[path].attributes[c]
            }), {}) : void 0;
            const newCssAsObject = Object.keys(record.target.style).reduce((p, c) => !Number.isNaN(parseInt(c)) && record.target.style.hasOwnProperty(camelize(record.target.style[c].replace("-", "_"), false)) ? __spreadProps(__spreadValues({}, p), {
                [camelize(record.target.style[c].replace("-", "_"), false)]: record.target.style[camelize(record.target.style[c].replace("-", "_"), false)]
            }) : p, {});
            const merged = merge(oldCssAsObject, newCssAsObject);
            overlay.set(path, merged);
            const rules = [];
            overlay.forEach((v, k) => {
                const pieces = k.split(" ");
                const optimizedSelector = pieces.reduce((p, c, i) => c.indexOf(".pane-") !== -1 || c.indexOf(".panel-") !== -1 ? {
                    selector: [...p.selector, c.replace(/^(.*?)(\.pane-|\.panel-page|\.panel-)([0-9]*)(.*?)$/, "$2$3")],
                    chars: p.chars + c.length,
                    lastIndex: p.chars + i + c.length
                } : __spreadProps(__spreadValues({}, p), {
                    chars: p.chars + c.length
                }), {
                    selector: [],
                    chars: 0,
                    lastIndex: 0
                });
                if (optimizedSelector.selector.length !== 0) {
                    let rebuiltSelector = (optimizedSelector.selector.join(" ") + " " + k.slice(optimizedSelector.lastIndex).split(">").join("")).replace(/(\.ng\-[a-zA-Z0-9_-]*)/gm, "").trim();
                    if (rebuiltSelector.indexOf(".panel-page") === 0) {
                        rebuiltSelector = rebuiltSelector.substr(12).trim();
                    }
                    const selectorValid = isSelectorValid({
                        selector: rebuiltSelector,
                        document: this.document
                    });
                    if (selectorValid) {
                        rules.push(rebuiltSelector + " { " + Object.keys(v).reduce((p, c) => c.match(/^[a-zA-Z-]*$/gm) ? `${p}${dasherize(underscore(c))}: ${v[c]};` : p, ``) + " }");
                    }
                    else { }
                }
            });
            const stylesheet = rules.join("\n");
            obs.next({
                stylesheet
            });
            obs.complete();
        });
    }
    /**
     * The library has an error in it. Considering the size of the function its much easier
     * to just copy it here and fix than to do anything else. Should probably move it
     * to a more appropriate module / service though.
     */
    toJSON(cssString, args = defaultToJsonArgs) {
        const capComment = 1;
        const capSelector = 2;
        const capEnd = 3;
        const capAttr = 4;
        const node = {
            children: {},
            attributes: {}
        };
        let match = null;
        let count = 0;
        if (args.stripComments) {
            args.comments = false;
            cssString = cssString.replace(commentX, "");
        }
        while ((match = altX.exec(cssString)) != null) {
            if (!isEmpty(match[capComment]) && args.comments) {
                node[count++] = match[capComment].trim();
            }
            else if (!isEmpty(match[capSelector])) {
                const name = match[capSelector].trim();
                const newNode = this.toJSON(cssString, args);
                if (args.ordered) {
                    node[count++] = {
                        name,
                        value: newNode,
                        type: "rule"
                    };
                }
                else {
                    const bits = args.split ? name.split(",") : [name];
                    for (const i in bits) {
                        const sel = bits[i].trim();
                        if (sel in node.children) {
                            for (const att in newNode.attributes) {
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
                const line = match[capAttr].trim();
                const attr = lineAttrX.exec(line);
                if (attr) {
                    const name = attr[1].trim();
                    const value = attr[2].trim();
                    if (args.ordered) {
                        node[count++] = {
                            name,
                            value,
                            type: "attr"
                        };
                    }
                    else {
                        if (name in node.attributes) {
                            const currVal = node.attributes[name];
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
    }
    static {
        this.ɵfac = function StylizerService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _StylizerService)(i0.ɵɵinject(DOCUMENT));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _StylizerService,
            factory: _StylizerService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StylizerService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: Document,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }], null);
})();
var ClassClassification;
(function (ClassClassification2) {
    ClassClassification2[ClassClassification2["KEEP"] = 0] = "KEEP";
    ClassClassification2[ClassClassification2["ADD"] = 1] = "ADD";
    ClassClassification2[ClassClassification2["REMOVE"] = 2] = "REMOVE";
})(ClassClassification || (ClassClassification = {}));
var ClassifyService = class _ClassifyService {
    constructor(document) {
        this.document = document;
        this.mutate = new Subject();
        this.mutated$ = new Subject();
        this.mutateub = this.mutate.pipe(filter(({ record }) => record.type === "attributes" && record.attributeName === "class" && !!record.target), debounceTime(2e3), switchMap(({ record, overlay, originals }) => this.mapRecord({
            record,
            overlay,
            originals
        }).pipe(catchError(e => {
            return of({
                classes: overlay
            });
        }))), tap(({ classes }) => this.mutated$.next({
            classes
        }))).subscribe();
    }
    classify({ targetNode }) {
        const overlay = /* @__PURE__ */ new Map();
        const originals = /* @__PURE__ */ new Map();
        const observer = new MutationObserver(records => {
            records.forEach(record => {
                this.mutate.next({
                    record,
                    overlay,
                    originals
                });
            });
        });
        const observerOptions = {
            childList: true,
            attributes: true,
            subtree: true,
            attributeFilter: ["class"],
            attributeOldValue: true
        };
        observer.observe(targetNode, observerOptions);
    }
    mapRecord({ record, overlay, originals }) {
        return new Observable(obs => {
            const path = domElementPath.default(record.target);
            let rebuiltSelector = "";
            const oldClasses = record.oldValue && record.oldValue !== null ? record.oldValue.split(" ").map(c => c.trim()) : [];
            const pieces = path.split(" ");
            const optimizedSelector = pieces.reduce((p, c, i) => c.indexOf(".pane-") !== -1 || c.indexOf(".panel-") !== -1 ? {
                selector: [...p.selector, c.replace(/^(.*?)(\.pane-|\.panel-page|\.panel-)([0-9]*)(.*?)$/, "$2$3")],
                chars: p.chars + c.length,
                lastIndex: p.chars + i + c.length
            } : __spreadProps(__spreadValues({}, p), {
                chars: p.chars + c.length
            }), {
                selector: [],
                chars: 0,
                lastIndex: 0
            });
            if (optimizedSelector.selector.length !== 0) {
                const suffix = path.substring(optimizedSelector.lastIndex).split(">").map(s => s.trim()).filter(s => s !== "").map((s, i) => {
                    const dotIndex = s.indexOf(".");
                    const element = dotIndex === -1 ? s.substring(0) : s.substring(0, dotIndex);
                    const classes = dotIndex === -1 ? [] : s.substring(dotIndex + 1).split(".");
                    const keep = classes.filter(c => oldClasses.find(oc => c === oc) !== void 0);
                    return (i === 0 ? " > " : "") + element + (keep.length === 0 ? "" : "." + keep.join("."));
                });
                rebuiltSelector = (optimizedSelector.selector.join(" ") + /*' ' +*/
                    suffix.join(" > ")).replace(/(\.ng\-[a-zA-Z0-9_-]*)/gm, "");
                if (rebuiltSelector.indexOf(".panel-page") === 0) {
                    rebuiltSelector = rebuiltSelector.substr(12).trim();
                }
            }
            const selectorValid = isSelectorValid({
                selector: rebuiltSelector,
                document: this.document
            });
            if (selectorValid) {
                if (!originals.has(rebuiltSelector)) {
                    originals.set(rebuiltSelector, new Set(oldClasses));
                }
                const classList = record.target.classList;
                const classMap = new Map(Array.from(classList.values()).map(c => [`${c}`, !originals.has(rebuiltSelector) || !originals.get(rebuiltSelector).has(`${c}`) && `${c}`.indexOf("ng-") !== 0 && `${c}`.indexOf("mat-") !== 0 ? ClassClassification.ADD : ClassClassification.KEEP]));
                const removed = Array.from(originals.get(rebuiltSelector)).reduce((p, c) => [Array.from(classList.values()).findIndex(c2 => c2 === c) === -1 ? c : void 0], []).filter(c => c !== void 0);
                if (removed.length !== 0) {
                    removed.forEach(c => classMap.set(c, ClassClassification.REMOVE));
                }
                if (classMap.size === 0 && overlay.has(rebuiltSelector)) {
                    overlay.delete(rebuiltSelector);
                }
                else if (classMap.size !== 0) {
                    overlay.set(rebuiltSelector, classMap);
                }
                obs.next({
                    classes: overlay
                });
                obs.complete();
            }
            else {
                obs.error(new Error('Selector invalid "' + rebuiltSelector + '"'));
                obs.complete();
            }
        });
    }
    static {
        this.ɵfac = function ClassifyService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ClassifyService)(i0.ɵɵinject(DOCUMENT));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _ClassifyService,
            factory: _ClassifyService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassifyService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: Document,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }], null);
})();
export { ClassClassification, ClassifyService, SheathModule, StylizerService, isEmpty, isSelectorValid };
