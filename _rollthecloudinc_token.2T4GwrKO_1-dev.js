import "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/token/fesm2022/rollthecloudinc-token.mjs
import * as i0 from "@angular/core";
import { NgModule, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AttributeTypes } from "@rollthecloudinc/attributes";
var TokenModule = class _TokenModule {
    static {
        this.ɵfac = function TokenModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _TokenModule)();
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _TokenModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
            imports: [CommonModule]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TokenModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule]
                }]
        }], null, null);
})();
var TokenizerService = class _TokenizerService {
    constructor() { }
    generateTokens(settings) {
        const tokens = /* @__PURE__ */ new Map();
        this.attributeTokens(settings, tokens, "", 0);
        return tokens;
    }
    generateGenericTokens(obj, prefix = "") {
        const tokens = /* @__PURE__ */ new Map();
        this.genericTokens(obj, tokens, prefix, 0);
        return tokens;
    }
    attributeTokens(settings, tokens, prefix, level) {
        settings.forEach((s, i) => {
            if (s.name !== "widget") {
                for (const prop in s) {
                    if (s.type === AttributeTypes.Complex || prop === "attributes" && s.attributes && s.attributes.length > 0) {
                        if (s.type === AttributeTypes.Complex) {
                            this.attributeTokens(s.attributes, tokens, `${prefix}`, level + 1);
                        }
                        else {
                            this.attributeTokens(s.attributes, tokens, `${prefix}.${s.name}`, level + 1);
                        }
                    }
                    else if (prop !== "attributes") {
                        if (prop === s.name) {
                            tokens.set(`${prefix}.${prop}`, s[prop]);
                        }
                        else {
                            tokens.set(`${prefix}.${s.name}.${prop}`, s[prop]);
                        }
                    }
                }
            }
        });
    }
    genericTokens(obj, tokens, prefix, level) {
        for (const prop in obj) {
            const type = typeof obj[prop];
            if (type !== "object") {
                tokens.set(`${prefix}.${prop}`, obj[prop]);
            }
            else if (Array.isArray(obj[prop]) && prop === "attributes") {
                this.attributeTokens(obj[prop], tokens, `${prefix}.${prop}`, level + 1);
            }
            else if (Array.isArray(obj[prop])) {
                var len = obj[prop].length;
                for (let i = 0; i < len; i++) {
                    this.genericTokens(obj[prop][i], tokens, `${prefix}.${prop}.${i}`, level + 1);
                }
            }
            else {
                this.genericTokens(obj[prop], tokens, `${prefix}.${prop}`, level + 1);
            }
        }
    }
    replaceTokens(v, tokens) {
        if (tokens) {
            tokens.forEach((value, key) => {
                v = v.replace(`[${key}]`, `${value}`);
            });
        }
        return v;
    }
    matchTokens(v, tokens) {
        const matched = [];
        const len = tokens.length;
        for (let i = 0; i < len; i++) {
            if (v.indexOf(`[${tokens[i]}]`) > -1) {
                matched.push(tokens[i]);
            }
        }
        return matched;
    }
    discoverTokens(v, full = false) {
        const m = v.match(/(\[(?:\[??[^\[]*?\]))/g);
        if (m === null) {
            return [];
        }
        const matches = m.reduce((p, c) => {
            if (c.indexOf(" ") !== -1 || c.indexOf(".") === -1) {
                return p;
            }
            const [firstPiece] = c.indexOf(".") === 1 ? ["."] : c.substr(1, c.length - 2).split(".");
            if (p.findIndex(p2 => p2 === firstPiece) !== -1) {
                return p;
            }
            return [...p, full ? c.substr(1, c.length - 2) : firstPiece];
        }, []);
        return matches;
    }
    static {
        this.ɵfac = function TokenizerService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _TokenizerService)();
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _TokenizerService,
            factory: _TokenizerService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TokenizerService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
export { TokenModule, TokenizerService };
