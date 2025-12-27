import { v4_default } from "@nf-internal/chunk-OLWRG54F";
import "@nf-internal/chunk-BSWOS4VH";
import { Observable } from "@nf-internal/chunk-4WPE7WTU";
import { __spreadValues } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@rollthecloudinc/rules/fesm2022/rollthecloudinc-rules.mjs
import * as i0 from "@angular/core";
import { NgModule, Injectable } from "@angular/core";
import { AttributeTypes } from "@rollthecloudinc/attributes";
import * as jre from "json-rules-engine";
import { take, map, tap, switchMap } from "rxjs/operators";
import * as i2 from "@rollthecloudinc/context";
var RulesModule = class _RulesModule {
    static {
        this.ɵfac = function RulesModule_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _RulesModule)();
        };
    }
    static {
        this.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
            type: _RulesModule
        });
    }
    static {
        this.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({});
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RulesModule, [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: []
                }]
        }], null, null);
})();
var RulesParserService = class _RulesParserService {
    constructor() {
        this.operatorsMap = /* @__PURE__ */ new Map([["=", "equal"], ["!=", "notEqual"]]);
    }
    buildFields(obj, prefix = "") {
        const fields = /* @__PURE__ */ new Map();
        this.genericFields(obj, fields, prefix, 0);
        return fields;
    }
    attributeFields(settings, fields, prefix, level) {
        settings.forEach((s, i) => {
            if (s.name !== "widget") {
                for (const prop in s) {
                    if (s.type === AttributeTypes.Complex || prop === "attributes" && s.attributes && s.attributes.length > 0) {
                        if (s.type === AttributeTypes.Complex) {
                            this.attributeFields(s.attributes, fields, `${prefix}`, level + 1);
                        }
                        else {
                            this.attributeFields(s.attributes, fields, `${prefix}.${s.name}`, level + 1);
                        }
                    }
                    else if (prop !== "attributes") {
                        if (prop === s.name) {
                            fields.set(`${prefix}.${prop}`, {
                                name: `${prefix}.${prop}`,
                                type: this.resolveAttributeType(s.type),
                                defaultValue: s[prop]
                            });
                        }
                        else {
                            fields.set(`${prefix}.${s.name}.${prop}`, {
                                name: `${prefix}.${s.name}.${prop}`,
                                type: this.resolveAttributeType(s.type),
                                defaultValue: s[prop]
                            });
                        }
                    }
                }
            }
        });
    }
    genericFields(obj, fields, prefix, level) {
        for (const prop in obj) {
            const type = typeof obj[prop];
            if (type !== "object") {
                fields.set(`${prefix}.${prop}`, {
                    name: `${prefix}.${prop}`,
                    type: this.resolveNativeType(type),
                    defaultValue: obj[prop]
                });
            }
            else if (Array.isArray(obj[prop]) && prop === "attributes") {
                this.attributeFields(obj[prop], fields, `${prefix}.${prop}`, level + 1);
            }
            else if (Array.isArray(obj[prop])) {
                var len = obj[prop].length;
                for (let i = 0; i < len; i++) {
                    this.genericFields(obj[prop][i], fields, `${prefix}.${prop}.${i}`, level + 1);
                }
            }
            else {
                this.genericFields(obj[prop], fields, `${prefix}.${prop}`, level + 1);
            }
        }
    }
    /**
     * Changes commited on 9/12/2021 have potential to break older panel pages that
     * use context. Although I believe that originally this only worked for one level. Now
     * it works for nested rules. I also can't recall why the field split was limited
     * to only 2 items. That might hav just been laziness or there might have been a valid reason for it.
     * I don't know why that be done instead of using indexOf to make sure the full path is included.
     */
    toEngineRule(rule, level = 0) {
        const conditions = [];
        if (rule.rules === void 0 || !Array.isArray(rule.rules)) {
            const firstDot = rule.field.indexOf(".");
            const fact = rule.field.substr(0, firstDot);
            const path = rule.field.substr(firstDot + 1);
            conditions.push({
                fact,
                path: `$.${path}`,
                operator: this.operatorsMap.get(rule.operator),
                value: rule.value
            });
            return new jre.Rule({
                conditions: {
                    all: conditions
                },
                event: level === 0 ? {
                    type: "visible"
                } : void 0
            });
        }
        else {
            const len = rule.rules.length;
            for (let i = 0; i < len; i++) {
                if ("field" in rule.rules[i] && (rule.condition === void 0 || rule.condition === null || rule.condition === "")) {
                    const firstDot = rule.rules[i].field.indexOf(".");
                    const fact = rule.rules[i].field.substr(0, firstDot);
                    const path = rule.rules[i].field.substr(firstDot + 1);
                    conditions.push({
                        fact,
                        path: `$.${path}`,
                        operator: this.operatorsMap.get(rule.rules[i].operator),
                        value: rule.rules[i].value
                    });
                }
                else {
                    const nestedRule = this.toEngineRule(rule.rules[i], level + 1);
                    conditions.push(nestedRule.conditions);
                }
            }
            if (rule.condition === "and") {
                return new jre.Rule({
                    conditions: {
                        all: conditions
                    },
                    event: level === 0 ? {
                        type: "visible"
                    } : void 0
                });
            }
            else {
                return new jre.Rule({
                    conditions: {
                        any: conditions
                    },
                    event: level === 0 ? {
                        type: "visible"
                    } : void 0
                });
            }
        }
    }
    extractConditions(ngRule, level = 0) {
        const rule = this.toEngineRule(ngRule);
        return [...(rule.conditions.any !== void 0 ? rule.conditions.any : []), ...(rule.conditions.all !== void 0 ? rule.conditions.all : [])];
    }
    resolveNativeType(type) {
        switch (type) {
            case "number":
                return "number";
            case "boolean":
                return "boolean";
            case "string":
            default:
                return "string";
        }
    }
    resolveAttributeType(type) {
        switch (type) {
            case AttributeTypes.Float:
            case AttributeTypes.Number:
                return "number";
            case AttributeTypes.Bool:
                return "boolean";
            case AttributeTypes.Text:
            default:
                return "string";
        }
    }
    static {
        this.ɵfac = function RulesParserService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _RulesParserService)();
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _RulesParserService,
            factory: _RulesParserService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RulesParserService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var RulesResolverService = class _RulesResolverService {
    constructor(rulesParser, inlineContextResolver) {
        this.rulesParser = rulesParser;
        this.inlineContextResolver = inlineContextResolver;
    }
    evaluate(ngRule, contexts = []) {
        return this.inlineContextResolver.resolveMerged(contexts, `rules:${v4_default()}`).pipe(take(1), map(facts => [__spreadValues({}, facts), new jre.Engine()]), tap(([_, engine]) => {
            const rule = this.rulesParser.toEngineRule(ngRule);
            engine.addRule(rule);
        }), switchMap(([facts, engine]) => new Observable(obs => {
            engine.run(facts).then(res => {
                obs.next(res.events.findIndex(e => e.type === "visible") > -1);
                obs.complete();
            });
        })));
    }
    static {
        this.ɵfac = function RulesResolverService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _RulesResolverService)(i0.ɵɵinject(RulesParserService), i0.ɵɵinject(i2.InlineContextResolverService));
        };
    }
    static {
        this.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: _RulesResolverService,
            factory: _RulesResolverService.ɵfac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RulesResolverService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: RulesParserService
        }, {
            type: i2.InlineContextResolverService
        }], null);
})();
export { RulesModule, RulesParserService, RulesResolverService };
