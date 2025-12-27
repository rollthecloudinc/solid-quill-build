import { __commonJS } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/deepmerge-json/dist/deepmerge-json.js
var require_deepmerge_json = __commonJS({
    "node_modules/deepmerge-json/dist/deepmerge-json.js"(exports, module) {
        (function (global, factory) {
            typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.merge = factory());
        })(exports, function () {
            "use strict";
            const FK = "__proto__";
            const directReplace = (_, pos) => pos;
            const shallowCopyArray = (_, pos) => pos.map(e => merge(e));
            const shallowCopyObj = (_, pos) => {
                if (pos && pos.hasOwnProperty("__proto__")) {
                    const res = {};
                    for (let e in pos) {
                        if (e !== FK)
                            res[e] = pos[e];
                    }
                    return res;
                }
                return Object.assign({}, pos);
            };
            const mergeObjects = function (pre, pos) {
                pre = shallowCopyObj(void 0, pre);
                Object.keys(pos).forEach(k => {
                    if (k !== FK)
                        pre[k] = merge(pre[k], pos[k]);
                });
                return pre;
            };
            const mergeArrays = function (pre, pos) {
                pre = shallowCopyArray(void 0, pre);
                pos.forEach((v, i) => pre[i] = merge(pre[i], v));
                return pre;
            };
            const mergeArrayWithParams = function (pre, pos) {
                pre = shallowCopyArray(void 0, pre);
                Object.keys(pos).forEach(key => {
                    if (key !== FK) {
                        pre = key in arrayMergeFn ? arrayMergeFn[key](pre, pos[key]) : pos;
                    }
                });
                return pre;
            };
            const indexedReplace = function (pre, pos) {
                pre = shallowCopyArray(void 0, pre);
                let kn;
                Object.keys(pos).forEach(k => {
                    kn = Number.parseInt(k);
                    if (kn < 0 || Number.isNaN(kn))
                        throw Error(`Invalid index for $replace: ${k}`);
                    pre[kn] = merge.clone(pos[k]);
                });
                return pre;
            };
            const indexedMerge = function (pre, pos) {
                pre = pre.slice();
                let kn;
                Object.keys(pos).forEach(k => {
                    kn = Number.parseInt(k);
                    if (kn < 0 || Number.isNaN(kn))
                        throw Error(`Invalid index for $merge: ${k}`);
                    pre[kn] = merge(pre[kn], pos[k]);
                });
                return pre;
            };
            const insert = function (pre, pos) {
                pre = shallowCopyArray(void 0, pre);
                let kn;
                Object.keys(pos).forEach(k => {
                    kn = Number.parseInt(k);
                    if (Number.isNaN(kn))
                        throw Error(`Invalid index for $insert: ${k}`);
                    pre.splice(kn, 0, pos[k]);
                });
                return pre;
            };
            const arrayMergeFn = {
                $push: (pre, pos) => pre.concat(pos),
                $append: (pre, pos) => pre.concat(pos),
                $prepend: (pre, pos) => pos.concat(pre),
                $replace: indexedReplace,
                $merge: indexedMerge,
                $insert: insert,
                $set: shallowCopyArray
                // TODO clone
            };
            const fn = {
                oo: mergeObjects,
                oa: shallowCopyObj,
                // TODO clone
                ob: directReplace,
                aa: mergeArrays,
                ao: mergeArrayWithParams,
                ab: directReplace,
                bb: directReplace,
                bo: shallowCopyObj,
                // TODO clone
                ba: shallowCopyArray
                // TODO clone
            };
            function merge(pre, pos) {
                if (pos === void 0) {
                    if (pre == null)
                        return pre;
                    if (Array.isArray(pre))
                        pos = [];
                    else if (typeof pre === "object")
                        pos = {};
                    else
                        pos = pre;
                }
                else if (pos === null) {
                    return null;
                }
                const tt = Array.isArray(pre) ? "a" : typeof pre === "object" ? "o" : "b";
                const st = Array.isArray(pos) ? "a" : typeof pos === "object" ? "o" : "b";
                return fn[tt + st](pre, pos);
            }
            merge.clone = obj => merge(obj);
            merge.multi = (pre, ...args) => {
                if (!args)
                    return merge(pre);
                for (let i = 0; i < args.length; i++) {
                    pre = merge(pre, args[i]);
                }
                return pre;
            };
            return merge;
        });
    }
});
export default require_deepmerge_json();
