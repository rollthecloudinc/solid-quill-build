import { __commonJS } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/recursive-diff/src/config.js
var require_config = __commonJS({
    "node_modules/recursive-diff/src/config.js"(exports, module) {
        var types = {
            NUMBER: "NUMBER",
            BOOLEAN: "BOOLEAN",
            STRING: "STRING",
            NULL: "NULL",
            UNDEFINED: "UNDEFINED",
            DATE: "DATE",
            ARRAY: "ARRAY",
            MAP: "MAP",
            SET: "SET",
            ITERABLE_OBJECT: "ITERABLE_OBJECT",
            DEFAULT: "OBJECT"
        };
        module.exports = {
            types,
            iterableTypes: [types.ITERABLE_OBJECT, types.MAP, types.ARRAY, types.SET],
            errors: {
                EMPTY_DIFF: "No diff object is provided, Nothing to apply",
                INVALID_DIFF_FORMAT: "Invalid diff format",
                INVALID_DIFF_OP: "Unsupported operation provided into diff object"
            }
        };
    }
});
// node_modules/recursive-diff/src/utils.js
var require_utils = __commonJS({
    "node_modules/recursive-diff/src/utils.js"(exports, module) {
        var instanceOf = instance => x => x instanceof instance;
        var isNumber = x => typeof x === "number";
        var isBoolean = x => typeof x === "boolean";
        var isString = x => typeof x === "string";
        var isDate = instanceOf(Date);
        var isUndefined = x => typeof x === "undefined";
        var isNull = x => x === null;
        var isArray = instanceOf(Array);
        var isMap = instanceOf(Map);
        var isSet = instanceOf(Set);
        var isIterableObject = x => {
            const type = Object.prototype.toString.call(x);
            return type === "[object Object]";
        };
        var noop = () => { };
        var areDatesEqual = (dt1, dt2) => dt1.getTime() === dt2.getTime();
        function setValueByPath(x, path = [], value, visitorCallback) {
            if (!isArray(path)) {
                throw new Error(`Diff path: "${path}" is not valid`);
            }
            const { length } = path;
            if (length === 0) {
                return value;
            }
            let val = x;
            for (let i = 0; i < length; i += 1) {
                const key = path[i];
                if (!val)
                    throw new Error(`Invalid path: "${path}" for object: ${JSON.stringify(x, null, 2)}`);
                else if (key == null)
                    throw new Error(`Invalid path: "${path}" for object: ${JSON.stringify(x, null, 2)}`);
                if (i !== length - 1) {
                    val = val[key];
                    if (visitorCallback) {
                        visitorCallback(val);
                    }
                }
                else {
                    val[key] = value;
                }
            }
            return x;
        }
        function deleteValueByPath(ob, path) {
            const keys = path || [];
            if (keys.length === 0) {
                return void 0;
            }
            let val = ob;
            const { length } = keys;
            for (let i = 0; i < length; i += 1) {
                if (i !== length - 1) {
                    if (!val[keys[i]]) {
                        throw new Error(`Invalid path: "${path}" for object: ${JSON.stringify(ob, null, 2)}`);
                    }
                    val = val[keys[i]];
                }
                else if (isIterableObject(val)) {
                    delete val[keys[i]];
                }
                else {
                    const index = parseInt(keys[i], 10);
                    while (val.length > index) {
                        val.pop();
                    }
                }
            }
            return ob;
        }
        module.exports = {
            isNumber,
            isBoolean,
            isString,
            isDate,
            isUndefined,
            isNull,
            isArray,
            isMap,
            isSet,
            isIterableObject,
            noop,
            areDatesEqual,
            setValueByPath,
            deleteValueByPath
        };
    }
});
// node_modules/recursive-diff/src/recursive-diff.js
var require_recursive_diff = __commonJS({
    "node_modules/recursive-diff/src/recursive-diff.js"(exports, module) {
        var { types, iterableTypes, errors } = require_config();
        var utils = require_utils();
        var checkType = {
            [types.NUMBER]: utils.isNumber,
            [types.BOOLEAN]: utils.isBoolean,
            [types.STRING]: utils.isString,
            [types.DATE]: utils.isDate,
            [types.UNDEFINED]: utils.isUndefined,
            [types.NULL]: utils.isNull,
            [types.ARRAY]: utils.isArray,
            [types.MAP]: utils.isMap,
            [types.SET]: utils.isSet,
            [types.ITERABLE_OBJECT]: utils.isIterableObject
        };
        var checkEqualityForComplexTypes = {
            [types.DATE]: utils.areDatesEqual
        };
        function getType(x) {
            const keys = Object.keys(checkType);
            let type = types.DEFAULT;
            for (let i = 0; i < keys.length; i += 1) {
                if (checkType[keys[i]](x)) {
                    type = keys[i];
                    break;
                }
            }
            return type;
        }
        function isTraversalNeeded(type1, type2) {
            return type1 === type2 && iterableTypes.indexOf(type1) >= 0;
        }
        function areEqual(x, y, type1, type2) {
            if (type1 !== type2) {
                return false;
            }
            return checkEqualityForComplexTypes[type1] ? checkEqualityForComplexTypes[type1](x, y) : x === y;
        }
        function computeOp(x, y, type1, type2) {
            let op;
            if (type1 === types.UNDEFINED && type2 !== types.UNDEFINED) {
                op = "add";
            }
            else if (type1 !== types.UNDEFINED && type2 === types.UNDEFINED) {
                op = "delete";
            }
            else if (!areEqual(x, y, type1, type2)) {
                op = "update";
            }
            else {
                utils.noop();
            }
            return op;
        }
        function getKeys(x, y, type) {
            if (type === types.ARRAY) {
                const keys = x.length > y.length ? new Array(x.length) : new Array(y.length);
                keys.fill(0);
                return new Set(keys.map((_, i) => i));
            }
            return new Set(Object.keys(x).concat(Object.keys(y)));
        }
        function makeDiff(x, y, op, path, keepOldVal) {
            const diffOb = {
                op,
                path
            };
            if (op === "add" || op === "update") {
                diffOb.val = y;
            }
            if (keepOldVal && op !== "add") {
                diffOb.oldVal = x;
            }
            return diffOb;
        }
        function privateGetDiff(x, y, keepOldVal, path, diff) {
            const type1 = getType(x);
            const type2 = getType(y);
            const currPath = path || [];
            const currDiff = diff || [];
            if (isTraversalNeeded(type1, type2)) {
                const iterator = getKeys(x, y, type1).values();
                let { value, done } = iterator.next();
                while (!done) {
                    if (!Object.prototype.hasOwnProperty.call(x, value)) {
                        currDiff.push(makeDiff(x[value], y[value], "add", currPath.concat(value), keepOldVal));
                    }
                    else if (!Object.prototype.hasOwnProperty.call(y, value)) {
                        currDiff.push(makeDiff(x[value], y[value], "delete", currPath.concat(value), keepOldVal));
                    }
                    else {
                        privateGetDiff(x[value], y[value], keepOldVal, currPath.concat(value), currDiff);
                    }
                    const curr = iterator.next();
                    value = curr.value;
                    done = curr.done;
                }
            }
            else {
                const op = computeOp(x, y, type1, type2);
                if (op != null) {
                    currDiff.push(makeDiff(x, y, op, path, keepOldVal));
                }
            }
            return currDiff;
        }
        var opHandlers = {
            add: utils.setValueByPath,
            update: utils.setValueByPath,
            delete: utils.deleteValueByPath
        };
        function privateApplyDiff(x, diff, visitorCallback) {
            if (!(diff instanceof Array))
                throw new Error(errors.INVALID_DIFF_FORMAT);
            let y = x;
            diff.forEach(diffItem => {
                const { op, val, path } = diffItem;
                if (!opHandlers[op]) {
                    throw new Error(errors.INVALID_DIFF_OP);
                }
                y = opHandlers[op](y, path, val, visitorCallback);
            });
            return y;
        }
        module.exports = {
            getDiff(x, y, keepOldValInDiff = false) {
                return privateGetDiff(x, y, keepOldValInDiff);
            },
            applyDiff(x, diff, visitorCallback) {
                return privateApplyDiff(x, diff, visitorCallback);
            }
        };
    }
});
export default require_recursive_diff();
