import { require_index_umd } from "@nf-internal/chunk-NR6RSCOY";
import { require_events } from "@nf-internal/chunk-CQKTPYPT";
import { __commonJS, __require } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/curriable/dist/curriable.js
var require_curriable = __commonJS({
    "node_modules/curriable/dist/curriable.js"(exports, module) {
        (function (global, factory) {
            typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.curriable = {}));
        })(exports, function (exports2) {
            "use strict";
            var __ = typeof Symbol === "function" ? Symbol("curriable placeholder") : 60881;
            function getCurried(fn, arity) {
                function _curried(args) {
                    return function () {
                        var length = args.length;
                        var newArgs = arguments;
                        var newArgsLength = newArgs.length;
                        var combined = [];
                        var newArgsIndex = 0;
                        var remaining = arity;
                        var value;
                        if (length) {
                            var index = -1;
                            while (++index < length) {
                                combined[index] = value = args[index] === __ && newArgsIndex < newArgsLength ? newArgs[newArgsIndex++] : args[index];
                                if (value !== __) {
                                    --remaining;
                                }
                            }
                        }
                        if (newArgsIndex < newArgsLength) {
                            while (newArgsIndex < newArgsLength) {
                                combined[combined.length] = value = newArgs[newArgsIndex];
                                if (value !== __ && newArgsIndex < arity) {
                                    --remaining;
                                }
                                ++newArgsIndex;
                            }
                        }
                        return remaining > 0 ? _curried(combined) : fn.apply(this, combined);
                    };
                }
                return _curried([]);
            }
            function curry(fn, arityOverride) {
                var arity = typeof arityOverride === "number" ? arityOverride : fn.length;
                var curried = getCurried(fn, arity);
                curried.arity = arity;
                curried.fn = fn;
                return curried;
            }
            curry.__ = __;
            function isPlaceholder(value) {
                return value === __;
            }
            curry.isPlaceholder = isPlaceholder;
            function uncurry(curried) {
                return curried.fn;
            }
            curry.uncurry = uncurry;
            exports2.__ = __;
            exports2.curry = curry;
            exports2.default = curry;
            exports2.isPlaceholder = isPlaceholder;
            exports2.uncurry = uncurry;
            Object.defineProperty(exports2, "__esModule", {
                value: true
            });
        });
    }
});
// node_modules/hash-it/lib/constants.js
var require_constants = __commonJS({
    "node_modules/hash-it/lib/constants.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports.UNPARSEABLE_TAGS = exports.TYPEDARRAY_TAGS = exports.TOSTRING_TAGS = exports.SELF_TAGS = exports.PRIMITIVE_TAGS = exports.ITERABLE_TAGS = exports.OBJECT_CLASS_TYPE_MAP = exports.OBJECT_CLASS_MAP = exports.SVG_ELEMENT_REGEXP = exports.HTML_ELEMENT_REGEXP = exports.HAS_UINT16ARRAY_SUPPORT = exports.HAS_BUFFER_FROM_SUPPORT = void 0;
        var _SELF_TAGS;
        var _TOSTRING_TAGS;
        var _TYPEDARRAY_TAGS;
        var _UNPARSEABLE_TAGS;
        var HAS_BUFFER_FROM_SUPPORT = typeof Buffer !== "undefined" && typeof Buffer.from === "function";
        exports.HAS_BUFFER_FROM_SUPPORT = HAS_BUFFER_FROM_SUPPORT;
        var HAS_UINT16ARRAY_SUPPORT = typeof Uint16Array === "function";
        exports.HAS_UINT16ARRAY_SUPPORT = HAS_UINT16ARRAY_SUPPORT;
        var HTML_ELEMENT_REGEXP = /\[object (HTML(.*)Element)\]/;
        exports.HTML_ELEMENT_REGEXP = HTML_ELEMENT_REGEXP;
        var SVG_ELEMENT_REGEXP = /\[object (SVG(.*)Element)\]/;
        exports.SVG_ELEMENT_REGEXP = SVG_ELEMENT_REGEXP;
        var OBJECT_CLASSES = ["Arguments", "Array", "ArrayBuffer", "Boolean", "DataView", "Date", "DocumentFragment", "Error", "Event", "Float32Array", "Float64Array", "Function", "Generator", "GeneratorFunction", "HTMLElement", "Int8Array", "Int16Array", "Int32Array", "Map", "Null", "Number", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "Undefined", "WeakMap", "WeakSet", "Window"];
        var OBJECT_CLASS_MAP = OBJECT_CLASSES.reduce(function (objectClasses, type) {
            objectClasses["[object " + type + "]"] = type;
            return objectClasses;
        }, {});
        exports.OBJECT_CLASS_MAP = OBJECT_CLASS_MAP;
        var OBJECT_CLASS_TYPE_MAP = Object.keys(OBJECT_CLASS_MAP).reduce(function (objectClassTypes, objectClass) {
            objectClassTypes[OBJECT_CLASS_MAP[objectClass].toUpperCase()] = objectClass;
            return objectClassTypes;
        }, {});
        exports.OBJECT_CLASS_TYPE_MAP = OBJECT_CLASS_TYPE_MAP;
        var ITERABLE_TAGS = {
            "[object Map]": true,
            "[object Set]": true
        };
        exports.ITERABLE_TAGS = ITERABLE_TAGS;
        var PRIMITIVE_TAGS = {
            boolean: true,
            function: true,
            number: true,
            string: true,
            undefined: true
        };
        exports.PRIMITIVE_TAGS = PRIMITIVE_TAGS;
        var SELF_TAGS = (_SELF_TAGS = {}, _SELF_TAGS[OBJECT_CLASS_TYPE_MAP.ARGUMENTS] = true, _SELF_TAGS[OBJECT_CLASS_TYPE_MAP.ARRAY] = true, _SELF_TAGS);
        exports.SELF_TAGS = SELF_TAGS;
        var TOSTRING_TAGS = (_TOSTRING_TAGS = {}, _TOSTRING_TAGS[OBJECT_CLASS_TYPE_MAP.REGEXP] = true, _TOSTRING_TAGS[OBJECT_CLASS_TYPE_MAP.SYMBOL] = true, _TOSTRING_TAGS);
        exports.TOSTRING_TAGS = TOSTRING_TAGS;
        var TYPEDARRAY_TAGS = (_TYPEDARRAY_TAGS = {}, _TYPEDARRAY_TAGS[OBJECT_CLASS_TYPE_MAP.FLOAT32ARRAY] = true, _TYPEDARRAY_TAGS[OBJECT_CLASS_TYPE_MAP.FLOAT64ARRAY] = true, _TYPEDARRAY_TAGS[OBJECT_CLASS_TYPE_MAP.INT8ARRAY] = true, _TYPEDARRAY_TAGS[OBJECT_CLASS_TYPE_MAP.INT16ARRAY] = true, _TYPEDARRAY_TAGS[OBJECT_CLASS_TYPE_MAP.INT32ARRAY] = true, _TYPEDARRAY_TAGS[OBJECT_CLASS_TYPE_MAP.UINT8ARRAY] = true, _TYPEDARRAY_TAGS[OBJECT_CLASS_TYPE_MAP.UINT8CLAMPEDARRAY] = true, _TYPEDARRAY_TAGS[OBJECT_CLASS_TYPE_MAP.UINT16ARRAY] = true, _TYPEDARRAY_TAGS[OBJECT_CLASS_TYPE_MAP.UINT32ARRAY] = true, _TYPEDARRAY_TAGS);
        exports.TYPEDARRAY_TAGS = TYPEDARRAY_TAGS;
        var UNPARSEABLE_TAGS = (_UNPARSEABLE_TAGS = {}, _UNPARSEABLE_TAGS[OBJECT_CLASS_TYPE_MAP.GENERATOR] = true, _UNPARSEABLE_TAGS[OBJECT_CLASS_TYPE_MAP.PROMISE] = true, _UNPARSEABLE_TAGS[OBJECT_CLASS_TYPE_MAP.WEAKMAP] = true, _UNPARSEABLE_TAGS[OBJECT_CLASS_TYPE_MAP.WEAKSET] = true, _UNPARSEABLE_TAGS);
        exports.UNPARSEABLE_TAGS = UNPARSEABLE_TAGS;
    }
});
// node_modules/hash-it/lib/utils.js
var require_utils = __commonJS({
    "node_modules/hash-it/lib/utils.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports.getFunctionName = getFunctionName;
        exports.getIntegerHashValue = getIntegerHashValue;
        exports.getSortedEvent = getSortedEvent;
        exports.shouldSort = shouldSort;
        exports.shouldSortPair = shouldSortPair;
        exports.sort = sort;
        exports.getSortedIterable = getSortedIterable;
        exports.getSortedObject = getSortedObject;
        exports.getStringifiedArrayBufferFallback = getStringifiedArrayBufferFallback;
        exports.getStringifiedArrayBufferModern = getStringifiedArrayBufferModern;
        exports.getStringifiedArrayBufferNoSupport = getStringifiedArrayBufferNoSupport;
        exports.getStringifiedDocumentFragment = getStringifiedDocumentFragment;
        exports.getCutoffIndex = getCutoffIndex;
        exports.getNormalizedValue = getNormalizedValue;
        exports.createReplacer = createReplacer;
        exports.stringify = stringify;
        exports.getStringifiedArrayBuffer = void 0;
        var _constants = require_constants();
        var FUNCTION_NAME_REGEX = /^\s*function\s*([^(]*)/i;
        var toString = Object.prototype.toString;
        var keys = Object.keys;
        function getFunctionName(fn) {
            return fn.name || (fn.toString().match(FUNCTION_NAME_REGEX) || [])[1] || "anonymous";
        }
        function getIntegerHashValue(string) {
            var index = string.length, hashA = 5381, hashB = 52711, charCode;
            while (index--) {
                charCode = string.charCodeAt(index);
                hashA = hashA * 33 ^ charCode;
                hashB = hashB * 33 ^ charCode;
            }
            return (hashA >>> 0) * 4096 + (hashB >>> 0);
        }
        function getSortedEvent(event) {
            return {
                bubbles: event.bubbles,
                cancelBubble: event.cancelBubble,
                cancelable: event.cancelable,
                composed: event.composed,
                currentTarget: event.currentTarget,
                defaultPrevented: event.defaultPrevented,
                eventPhase: event.eventPhase,
                isTrusted: event.isTrusted,
                returnValue: event.returnValue,
                target: event.target,
                type: event.type
            };
        }
        function shouldSort(valueA, valueB) {
            return valueA > valueB;
        }
        function shouldSortPair(pairA, pairB) {
            return pairA[0] > pairB[0];
        }
        function sort(array, fn) {
            var subIndex, value;
            for (var index = 0; index < array.length; ++index) {
                value = array[index];
                for (subIndex = index - 1; ~subIndex && fn(array[subIndex], value); --subIndex) {
                    array[subIndex + 1] = array[subIndex];
                }
                array[subIndex + 1] = value;
            }
            return array;
        }
        function getSortedIterable(iterable, cache, keys2) {
            var isMap = typeof iterable.get === "function";
            var entries = [];
            if (isMap) {
                iterable.forEach(function (value, key) {
                    entries.push([
                        // eslint-disable-next-line no-use-before-define
                        stringify(key, cache, keys2),
                        // eslint-disable-next-line no-use-before-define
                        stringify(value, cache, keys2)
                    ]);
                });
                sort(entries, shouldSortPair);
            }
            else {
                iterable.forEach(function (value) {
                    entries.push(stringify(value, cache, keys2));
                });
                sort(entries, shouldSort);
            }
            var _final = getFunctionName(iterable.constructor) + "|[";
            for (var index = 0, length = entries.length, entry; index < length; ++index) {
                entry = entries[index];
                _final += (index ? "," : "") + (isMap ? "[" + entry[0] + "," + entry[1] + "]" : entry);
            }
            return _final + "]";
        }
        function getSortedObject(object) {
            var objectKeys = sort(keys(object), shouldSort);
            var newObject = {};
            var key;
            for (var index = 0; index < objectKeys.length; ++index) {
                key = objectKeys[index];
                newObject[key] = object[key];
            }
            return newObject;
        }
        function getStringifiedArrayBufferFallback(buffer) {
            return String.fromCharCode.apply(null, new Uint16Array(buffer));
        }
        function getStringifiedArrayBufferModern(buffer) {
            return Buffer.from(buffer).toString("utf8");
        }
        function getStringifiedArrayBufferNoSupport() {
            return "";
        }
        var getStringifiedArrayBuffer = function () {
            if (_constants.HAS_BUFFER_FROM_SUPPORT) {
                return getStringifiedArrayBufferModern;
            }
            if (_constants.HAS_UINT16ARRAY_SUPPORT) {
                return getStringifiedArrayBufferFallback;
            }
            return getStringifiedArrayBufferNoSupport;
        }();
        exports.getStringifiedArrayBuffer = getStringifiedArrayBuffer;
        function getStringifiedDocumentFragment(fragment) {
            var children = fragment.children;
            var innerHTML = "";
            for (var index = 0; index < children.length; ++index) {
                innerHTML += children[index].outerHTML;
            }
            return innerHTML;
        }
        function getCutoffIndex(array, value) {
            for (var index = 0; index < array.length; ++index) {
                if (array[index] === value) {
                    return index + 1;
                }
            }
            return 0;
        }
        function getNormalizedValue(value, cache, keys2, passedTag) {
            if (passedTag === void 0) {
                var type = typeof value;
                if (type === "string" || _constants.PRIMITIVE_TAGS[type]) {
                    return type + "|" + value;
                }
                if (value === null) {
                    return "null|" + value;
                }
            }
            var tag = passedTag || toString.call(value);
            if (_constants.SELF_TAGS[tag]) {
                return value;
            }
            if (tag === _constants.OBJECT_CLASS_TYPE_MAP.OBJECT) {
                return getSortedObject(value);
            }
            if (_constants.TOSTRING_TAGS[tag]) {
                return _constants.OBJECT_CLASS_MAP[tag] + "|" + value.toString();
            }
            if (_constants.ITERABLE_TAGS[tag]) {
                return getSortedIterable(value, cache, keys2);
            }
            if (tag === _constants.OBJECT_CLASS_TYPE_MAP.DATE) {
                return _constants.OBJECT_CLASS_MAP[tag] + "|" + value.getTime();
            }
            if (tag === _constants.OBJECT_CLASS_TYPE_MAP.ERROR) {
                return _constants.OBJECT_CLASS_MAP[tag] + "|" + value.stack;
            }
            if (tag === _constants.OBJECT_CLASS_TYPE_MAP.EVENT) {
                return getSortedEvent(value);
            }
            if (_constants.UNPARSEABLE_TAGS[tag]) {
                return _constants.OBJECT_CLASS_MAP[tag] + "|NOT_ENUMERABLE";
            }
            if (_constants.HTML_ELEMENT_REGEXP.test(tag) || _constants.SVG_ELEMENT_REGEXP.test(tag)) {
                return tag.slice(8, -1) + "|" + value.outerHTML;
            }
            if (tag === _constants.OBJECT_CLASS_TYPE_MAP.DOCUMENTFRAGMENT) {
                return _constants.OBJECT_CLASS_MAP[tag] + "|" + getStringifiedDocumentFragment(value);
            }
            if (_constants.TYPEDARRAY_TAGS[tag]) {
                return _constants.OBJECT_CLASS_MAP[tag] + "|" + value.join(",");
            }
            if (tag === _constants.OBJECT_CLASS_TYPE_MAP.ARRAYBUFFER) {
                return _constants.OBJECT_CLASS_MAP[tag] + "|" + getStringifiedArrayBuffer(value);
            }
            if (tag === _constants.OBJECT_CLASS_TYPE_MAP.DATAVIEW) {
                return _constants.OBJECT_CLASS_MAP[tag] + "|" + getStringifiedArrayBuffer(value.buffer);
            }
            return value;
        }
        function createReplacer(cache, keys2) {
            if (cache === void 0) {
                cache = [];
            }
            if (keys2 === void 0) {
                keys2 = [];
            }
            return function (key, value) {
                if (typeof value === "object") {
                    if (cache.length) {
                        var thisCutoff = getCutoffIndex(cache, this);
                        if (thisCutoff === 0) {
                            cache.push(this);
                        }
                        else {
                            cache.splice(thisCutoff);
                            keys2.splice(thisCutoff);
                        }
                        keys2.push(key);
                        var valueCutoff = getCutoffIndex(cache, value);
                        if (valueCutoff !== 0) {
                            return "[~" + (keys2.slice(0, valueCutoff).join(".") || ".") + "]";
                        }
                        cache.push(value);
                    }
                    else {
                        cache[0] = value;
                        keys2[0] = key;
                    }
                }
                if (key && this[key] instanceof Date) {
                    return getNormalizedValue(this[key], cache, keys2, _constants.OBJECT_CLASS_TYPE_MAP.DATE, cache, keys2);
                }
                return getNormalizedValue(value, cache, keys2);
            };
        }
        function stringify(value, cache, keys2) {
            if (!value || typeof value !== "object") {
                return getNormalizedValue(value, cache, keys2);
            }
            var tag = toString.call(value);
            if (tag === _constants.OBJECT_CLASS_TYPE_MAP.DATE || tag === _constants.OBJECT_CLASS_TYPE_MAP.REGEXP) {
                return getNormalizedValue(value, cache, keys2, tag);
            }
            return JSON.stringify(value, createReplacer(cache, keys2));
        }
    }
});
// node_modules/hash-it/lib/index.js
var require_lib = __commonJS({
    "node_modules/hash-it/lib/index.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports.hash = hash;
        exports.default = void 0;
        var _curriable = require_curriable();
        var _utils = require_utils();
        function hash(value) {
            return (0, _utils.getIntegerHashValue)((0, _utils.stringify)(value));
        }
        hash.is = (0, _curriable.curry)(function (object, otherObject) {
            return hash(object) === hash(otherObject);
        });
        hash.is.all = (0, _curriable.curry)(function (objectBasis) {
            var isEqual = hash.is(objectBasis);
            for (var index = 1; index < arguments.length; ++index) {
                if (!isEqual(arguments[index])) {
                    return false;
                }
            }
            return true;
        }, 2);
        hash.is.any = (0, _curriable.curry)(function (objectBasis) {
            var isEqual = hash.is(objectBasis);
            for (var index = 1; index < arguments.length; index++) {
                if (isEqual(arguments[index])) {
                    return true;
                }
            }
            return false;
        }, 2);
        hash.is.not = (0, _curriable.curry)(function (object, otherObject) {
            return hash(object) !== hash(otherObject);
        });
        var _default = hash;
        exports.default = _default;
    }
});
// node_modules/json-rules-engine/dist/fact.js
var require_fact = __commonJS({
    "node_modules/json-rules-engine/dist/fact.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = /* @__PURE__ */ function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _hashIt = require_lib();
        var _hashIt2 = _interopRequireDefault(_hashIt);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var Fact = function () {
            function Fact2(id, valueOrMethod, options) {
                _classCallCheck(this, Fact2);
                this.id = id;
                var defaultOptions = {
                    cache: true
                };
                if (typeof options === "undefined") {
                    options = defaultOptions;
                }
                if (typeof valueOrMethod !== "function") {
                    this.value = valueOrMethod;
                    this.type = this.constructor.CONSTANT;
                }
                else {
                    this.calculationMethod = valueOrMethod;
                    this.type = this.constructor.DYNAMIC;
                }
                if (!this.id)
                    throw new Error("factId required");
                this.priority = parseInt(options.priority || 1, 10);
                this.options = Object.assign({}, defaultOptions, options);
                this.cacheKeyMethod = this.defaultCacheKeys;
                return this;
            }
            _createClass(Fact2, [{
                    key: "isConstant",
                    value: function isConstant() {
                        return this.type === this.constructor.CONSTANT;
                    }
                }, {
                    key: "isDynamic",
                    value: function isDynamic() {
                        return this.type === this.constructor.DYNAMIC;
                    }
                    /**
                     * Return the fact value, based on provided parameters
                     * @param  {object} params
                     * @param  {Almanac} almanac
                     * @return {any} calculation method results
                     */
                }, {
                    key: "calculate",
                    value: function calculate(params, almanac) {
                        if (Object.prototype.hasOwnProperty.call(this, "value")) {
                            return this.value;
                        }
                        return this.calculationMethod(params, almanac);
                    }
                    /**
                     * Return a cache key (MD5 string) based on parameters
                     * @param  {object} obj - properties to generate a hash key from
                     * @return {string} MD5 string based on the hash'd object
                     */
                }, {
                    key: "defaultCacheKeys",
                    /**
                     * Default properties to use when caching a fact
                     * Assumes every fact is a pure function, whose computed value will only
                     * change when input params are modified
                     * @param  {string} id - fact unique identifer
                     * @param  {object} params - parameters passed to fact calcution method
                     * @return {object} id + params
                     */
                    value: function defaultCacheKeys(id, params) {
                        return {
                            params,
                            id
                        };
                    }
                    /**
                     * Generates the fact's cache key(MD5 string)
                     * Returns nothing if the fact's caching has been disabled
                     * @param  {object} params - parameters that would be passed to the computation method
                     * @return {string} cache key
                     */
                }, {
                    key: "getCacheKey",
                    value: function getCacheKey(params) {
                        if (this.options.cache === true) {
                            var cacheProperties = this.cacheKeyMethod(this.id, params);
                            var _hash = Fact2.hashFromObject(cacheProperties);
                            return _hash;
                        }
                    }
                }], [{
                    key: "hashFromObject",
                    value: function hashFromObject(obj) {
                        return (0, _hashIt2.default)(obj);
                    }
                }]);
            return Fact2;
        }();
        Fact.CONSTANT = "CONSTANT";
        Fact.DYNAMIC = "DYNAMIC";
        exports.default = Fact;
    }
});
// node_modules/json-rules-engine/dist/debug.js
var require_debug = __commonJS({
    "node_modules/json-rules-engine/dist/debug.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = debug;
        function debug(message) {
            try {
                if (typeof process !== "undefined" && process.env && process.env.DEBUG && process.env.DEBUG.match(/json-rules-engine/) || typeof window !== "undefined" && window.localStorage && window.localStorage.debug && window.localStorage.debug.match(/json-rules-engine/)) {
                    console.log(message);
                }
            }
            catch (ex) { }
        }
    }
});
// node_modules/lodash.isobjectlike/index.js
var require_lodash = __commonJS({
    "node_modules/lodash.isobjectlike/index.js"(exports, module) {
        function isObjectLike(value) {
            return !!value && typeof value == "object";
        }
        module.exports = isObjectLike;
    }
});
// node_modules/json-rules-engine/dist/condition.js
var require_condition = __commonJS({
    "node_modules/json-rules-engine/dist/condition.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = /* @__PURE__ */ function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _debug = require_debug();
        var _debug2 = _interopRequireDefault(_debug);
        var _lodash = require_lodash();
        var _lodash2 = _interopRequireDefault(_lodash);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var Condition = function () {
            function Condition2(properties) {
                _classCallCheck(this, Condition2);
                if (!properties)
                    throw new Error("Condition: constructor options required");
                var booleanOperator = Condition2.booleanOperator(properties);
                Object.assign(this, properties);
                if (booleanOperator) {
                    var subConditions = properties[booleanOperator];
                    if (!Array.isArray(subConditions)) {
                        throw new Error('"' + booleanOperator + '" must be an array');
                    }
                    this.operator = booleanOperator;
                    this.priority = parseInt(properties.priority, 10) || 1;
                    this[booleanOperator] = subConditions.map(function (c) {
                        return new Condition2(c);
                    });
                }
                else {
                    if (!Object.prototype.hasOwnProperty.call(properties, "fact"))
                        throw new Error('Condition: constructor "fact" property required');
                    if (!Object.prototype.hasOwnProperty.call(properties, "operator"))
                        throw new Error('Condition: constructor "operator" property required');
                    if (!Object.prototype.hasOwnProperty.call(properties, "value"))
                        throw new Error('Condition: constructor "value" property required');
                    if (Object.prototype.hasOwnProperty.call(properties, "priority")) {
                        properties.priority = parseInt(properties.priority, 10);
                    }
                }
            }
            _createClass(Condition2, [{
                    key: "toJSON",
                    value: function toJSON() {
                        var stringify = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                        var props = {};
                        if (this.priority) {
                            props.priority = this.priority;
                        }
                        var oper = Condition2.booleanOperator(this);
                        if (oper) {
                            props[oper] = this[oper].map(function (c) {
                                return c.toJSON(stringify);
                            });
                        }
                        else {
                            props.operator = this.operator;
                            props.value = this.value;
                            props.fact = this.fact;
                            if (this.factResult !== void 0) {
                                props.factResult = this.factResult;
                            }
                            if (this.result !== void 0) {
                                props.result = this.result;
                            }
                            if (this.params) {
                                props.params = this.params;
                            }
                            if (this.path) {
                                props.path = this.path;
                            }
                        }
                        if (stringify) {
                            return JSON.stringify(props);
                        }
                        return props;
                    }
                    /**
                     * Interprets .value as either a primitive, or if a fact, retrieves the fact value
                     */
                }, {
                    key: "_getValue",
                    value: function _getValue(almanac) {
                        var value = this.value;
                        if ((0, _lodash2.default)(value) && Object.prototype.hasOwnProperty.call(value, "fact")) {
                            return almanac.factValue(value.fact, value.params, value.path);
                        }
                        return Promise.resolve(value);
                    }
                    /**
                     * Takes the fact result and compares it to the condition 'value', using the operator
                     *   LHS                      OPER       RHS
                     * <fact + params + path>  <operator>  <value>
                     *
                     * @param   {Almanac} almanac
                     * @param   {Map} operatorMap - map of available operators, keyed by operator name
                     * @returns {Boolean} - evaluation result
                     */
                }, {
                    key: "evaluate",
                    value: function evaluate(almanac, operatorMap) {
                        var _this = this;
                        if (!almanac)
                            return Promise.reject(new Error("almanac required"));
                        if (!operatorMap)
                            return Promise.reject(new Error("operatorMap required"));
                        if (this.isBooleanOperator())
                            return Promise.reject(new Error("Cannot evaluate() a boolean condition"));
                        var op = operatorMap.get(this.operator);
                        if (!op)
                            return Promise.reject(new Error("Unknown operator: " + this.operator));
                        return this._getValue(almanac).then(function (rightHandSideValue) {
                            return almanac.factValue(_this.fact, _this.params, _this.path).then(function (leftHandSideValue) {
                                var result = op.evaluate(leftHandSideValue, rightHandSideValue);
                                (0, _debug2.default)("condition::evaluate <" + leftHandSideValue + " " + _this.operator + " " + rightHandSideValue + "?> (" + result + ")");
                                return {
                                    result,
                                    leftHandSideValue,
                                    rightHandSideValue,
                                    operator: _this.operator
                                };
                            });
                        });
                    }
                    /**
                     * Returns the boolean operator for the condition
                     * If the condition is not a boolean condition, the result will be 'undefined'
                     * @return {string 'all' or 'any'}
                     */
                }, {
                    key: "booleanOperator",
                    /**
                     * Returns the condition's boolean operator
                     * Instance version of Condition.isBooleanOperator
                     * @returns {string,undefined} - 'any', 'all', or undefined (if not a boolean condition)
                     */
                    value: function booleanOperator() {
                        return Condition2.booleanOperator(this);
                    }
                    /**
                     * Whether the operator is boolean ('all', 'any')
                     * @returns {Boolean}
                     */
                }, {
                    key: "isBooleanOperator",
                    value: function isBooleanOperator() {
                        return Condition2.booleanOperator(this) !== void 0;
                    }
                }], [{
                    key: "booleanOperator",
                    value: function booleanOperator(condition) {
                        if (Object.prototype.hasOwnProperty.call(condition, "any")) {
                            return "any";
                        }
                        else if (Object.prototype.hasOwnProperty.call(condition, "all")) {
                            return "all";
                        }
                    }
                }]);
            return Condition2;
        }();
        exports.default = Condition;
    }
});
// node_modules/clone/clone.js
var require_clone = __commonJS({
    "node_modules/clone/clone.js"(exports, module) {
        var clone = function () {
            "use strict";
            function _instanceof(obj, type) {
                return type != null && obj instanceof type;
            }
            var nativeMap;
            try {
                nativeMap = Map;
            }
            catch (_) {
                nativeMap = function () { };
            }
            var nativeSet;
            try {
                nativeSet = Set;
            }
            catch (_) {
                nativeSet = function () { };
            }
            var nativePromise;
            try {
                nativePromise = Promise;
            }
            catch (_) {
                nativePromise = function () { };
            }
            function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
                if (typeof circular === "object") {
                    depth = circular.depth;
                    prototype = circular.prototype;
                    includeNonEnumerable = circular.includeNonEnumerable;
                    circular = circular.circular;
                }
                var allParents = [];
                var allChildren = [];
                var useBuffer = typeof Buffer != "undefined";
                if (typeof circular == "undefined")
                    circular = true;
                if (typeof depth == "undefined")
                    depth = Infinity;
                function _clone(parent2, depth2) {
                    if (parent2 === null)
                        return null;
                    if (depth2 === 0)
                        return parent2;
                    var child;
                    var proto;
                    if (typeof parent2 != "object") {
                        return parent2;
                    }
                    if (_instanceof(parent2, nativeMap)) {
                        child = new nativeMap();
                    }
                    else if (_instanceof(parent2, nativeSet)) {
                        child = new nativeSet();
                    }
                    else if (_instanceof(parent2, nativePromise)) {
                        child = new nativePromise(function (resolve, reject) {
                            parent2.then(function (value) {
                                resolve(_clone(value, depth2 - 1));
                            }, function (err) {
                                reject(_clone(err, depth2 - 1));
                            });
                        });
                    }
                    else if (clone2.__isArray(parent2)) {
                        child = [];
                    }
                    else if (clone2.__isRegExp(parent2)) {
                        child = new RegExp(parent2.source, __getRegExpFlags(parent2));
                        if (parent2.lastIndex)
                            child.lastIndex = parent2.lastIndex;
                    }
                    else if (clone2.__isDate(parent2)) {
                        child = new Date(parent2.getTime());
                    }
                    else if (useBuffer && Buffer.isBuffer(parent2)) {
                        if (Buffer.allocUnsafe) {
                            child = Buffer.allocUnsafe(parent2.length);
                        }
                        else {
                            child = new Buffer(parent2.length);
                        }
                        parent2.copy(child);
                        return child;
                    }
                    else if (_instanceof(parent2, Error)) {
                        child = Object.create(parent2);
                    }
                    else {
                        if (typeof prototype == "undefined") {
                            proto = Object.getPrototypeOf(parent2);
                            child = Object.create(proto);
                        }
                        else {
                            child = Object.create(prototype);
                            proto = prototype;
                        }
                    }
                    if (circular) {
                        var index = allParents.indexOf(parent2);
                        if (index != -1) {
                            return allChildren[index];
                        }
                        allParents.push(parent2);
                        allChildren.push(child);
                    }
                    if (_instanceof(parent2, nativeMap)) {
                        parent2.forEach(function (value, key) {
                            var keyChild = _clone(key, depth2 - 1);
                            var valueChild = _clone(value, depth2 - 1);
                            child.set(keyChild, valueChild);
                        });
                    }
                    if (_instanceof(parent2, nativeSet)) {
                        parent2.forEach(function (value) {
                            var entryChild = _clone(value, depth2 - 1);
                            child.add(entryChild);
                        });
                    }
                    for (var i in parent2) {
                        var attrs;
                        if (proto) {
                            attrs = Object.getOwnPropertyDescriptor(proto, i);
                        }
                        if (attrs && attrs.set == null) {
                            continue;
                        }
                        child[i] = _clone(parent2[i], depth2 - 1);
                    }
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(parent2);
                        for (var i = 0; i < symbols.length; i++) {
                            var symbol = symbols[i];
                            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
                            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
                                continue;
                            }
                            child[symbol] = _clone(parent2[symbol], depth2 - 1);
                            if (!descriptor.enumerable) {
                                Object.defineProperty(child, symbol, {
                                    enumerable: false
                                });
                            }
                        }
                    }
                    if (includeNonEnumerable) {
                        var allPropertyNames = Object.getOwnPropertyNames(parent2);
                        for (var i = 0; i < allPropertyNames.length; i++) {
                            var propertyName = allPropertyNames[i];
                            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
                            if (descriptor && descriptor.enumerable) {
                                continue;
                            }
                            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
                            Object.defineProperty(child, propertyName, {
                                enumerable: false
                            });
                        }
                    }
                    return child;
                }
                return _clone(parent, depth);
            }
            clone2.clonePrototype = function clonePrototype(parent) {
                if (parent === null)
                    return null;
                var c = function () { };
                c.prototype = parent;
                return new c();
            };
            function __objToStr(o) {
                return Object.prototype.toString.call(o);
            }
            clone2.__objToStr = __objToStr;
            function __isDate(o) {
                return typeof o === "object" && __objToStr(o) === "[object Date]";
            }
            clone2.__isDate = __isDate;
            function __isArray(o) {
                return typeof o === "object" && __objToStr(o) === "[object Array]";
            }
            clone2.__isArray = __isArray;
            function __isRegExp(o) {
                return typeof o === "object" && __objToStr(o) === "[object RegExp]";
            }
            clone2.__isRegExp = __isRegExp;
            function __getRegExpFlags(re) {
                var flags = "";
                if (re.global)
                    flags += "g";
                if (re.ignoreCase)
                    flags += "i";
                if (re.multiline)
                    flags += "m";
                return flags;
            }
            clone2.__getRegExpFlags = __getRegExpFlags;
            return clone2;
        }();
        if (typeof module === "object" && module.exports) {
            module.exports = clone;
        }
    }
});
// node_modules/json-rules-engine/dist/rule-result.js
var require_rule_result = __commonJS({
    "node_modules/json-rules-engine/dist/rule-result.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = /* @__PURE__ */ function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _clone = require_clone();
        var _clone2 = _interopRequireDefault(_clone);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var RuleResult = function () {
            function RuleResult2(conditions, event, priority, name) {
                _classCallCheck(this, RuleResult2);
                this.conditions = (0, _clone2.default)(conditions);
                this.event = (0, _clone2.default)(event);
                this.priority = (0, _clone2.default)(priority);
                this.name = (0, _clone2.default)(name);
                this.result = null;
            }
            _createClass(RuleResult2, [{
                    key: "setResult",
                    value: function setResult(result) {
                        this.result = result;
                    }
                }, {
                    key: "toJSON",
                    value: function toJSON() {
                        var stringify = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                        var props = {
                            conditions: this.conditions.toJSON(false),
                            event: this.event,
                            priority: this.priority,
                            name: this.name,
                            result: this.result
                        };
                        if (stringify) {
                            return JSON.stringify(props);
                        }
                        return props;
                    }
                }]);
            return RuleResult2;
        }();
        exports.default = RuleResult;
    }
});
// node_modules/json-rules-engine/dist/rule.js
var require_rule = __commonJS({
    "node_modules/json-rules-engine/dist/rule.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = /* @__PURE__ */ function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _condition = require_condition();
        var _condition2 = _interopRequireDefault(_condition);
        var _ruleResult = require_rule_result();
        var _ruleResult2 = _interopRequireDefault(_ruleResult);
        var _events = require_events();
        var _debug = require_debug();
        var _debug2 = _interopRequireDefault(_debug);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self2, call) {
            if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Rule = function (_EventEmitter) {
            _inherits(Rule2, _EventEmitter);
            function Rule2(options) {
                _classCallCheck(this, Rule2);
                var _this = _possibleConstructorReturn(this, (Rule2.__proto__ || Object.getPrototypeOf(Rule2)).call(this));
                if (typeof options === "string") {
                    options = JSON.parse(options);
                }
                if (options && options.conditions) {
                    _this.setConditions(options.conditions);
                }
                if (options && options.onSuccess) {
                    _this.on("success", options.onSuccess);
                }
                if (options && options.onFailure) {
                    _this.on("failure", options.onFailure);
                }
                if (options && (options.name || options.name === 0)) {
                    _this.setName(options.name);
                }
                var priority = options && options.priority || 1;
                _this.setPriority(priority);
                var event = options && options.event || {
                    type: "unknown"
                };
                _this.setEvent(event);
                return _this;
            }
            _createClass(Rule2, [{
                    key: "setPriority",
                    value: function setPriority(priority) {
                        priority = parseInt(priority, 10);
                        if (priority <= 0)
                            throw new Error("Priority must be greater than zero");
                        this.priority = priority;
                        return this;
                    }
                    /**
                     * Sets the name of the rule
                     * @param {any} name - any truthy input and zero is allowed
                     */
                }, {
                    key: "setName",
                    value: function setName(name) {
                        if (!name && name !== 0) {
                            throw new Error('Rule "name" must be defined');
                        }
                        this.name = name;
                        return this;
                    }
                    /**
                     * Sets the conditions to run when evaluating the rule.
                     * @param {object} conditions - conditions, root element must be a boolean operator
                     */
                }, {
                    key: "setConditions",
                    value: function setConditions(conditions) {
                        if (!Object.prototype.hasOwnProperty.call(conditions, "all") && !Object.prototype.hasOwnProperty.call(conditions, "any")) {
                            throw new Error('"conditions" root must contain a single instance of "all" or "any"');
                        }
                        this.conditions = new _condition2.default(conditions);
                        return this;
                    }
                    /**
                     * Sets the event to emit when the conditions evaluate truthy
                     * @param {object} event - event to emit
                     * @param {string} event.type - event name to emit on
                     * @param {string} event.params - parameters to emit as the argument of the event emission
                     */
                }, {
                    key: "setEvent",
                    value: function setEvent(event) {
                        if (!event)
                            throw new Error("Rule: setEvent() requires event object");
                        if (!Object.prototype.hasOwnProperty.call(event, "type"))
                            throw new Error('Rule: setEvent() requires event object with "type" property');
                        this.event = {
                            type: event.type
                        };
                        if (event.params)
                            this.event.params = event.params;
                        return this;
                    }
                    /**
                     * Sets the engine to run the rules under
                     * @param {object} engine
                     * @returns {Rule}
                     */
                }, {
                    key: "setEngine",
                    value: function setEngine(engine) {
                        this.engine = engine;
                        return this;
                    }
                }, {
                    key: "toJSON",
                    value: function toJSON() {
                        var stringify = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                        var props = {
                            conditions: this.conditions.toJSON(false),
                            priority: this.priority,
                            event: this.event,
                            name: this.name
                        };
                        if (stringify) {
                            return JSON.stringify(props);
                        }
                        return props;
                    }
                    /**
                     * Priorizes an array of conditions based on "priority"
                     *   When no explicit priority is provided on the condition itself, the condition's priority is determine by its fact
                     * @param  {Condition[]} conditions
                     * @return {Condition[][]} prioritized two-dimensional array of conditions
                     *    Each outer array element represents a single priority(integer).  Inner array is
                     *    all conditions with that priority.
                     */
                }, {
                    key: "prioritizeConditions",
                    value: function prioritizeConditions(conditions) {
                        var _this2 = this;
                        var factSets = conditions.reduce(function (sets, condition) {
                            var priority = condition.priority;
                            if (!priority) {
                                var fact = _this2.engine.getFact(condition.fact);
                                priority = fact && fact.priority || 1;
                            }
                            if (!sets[priority])
                                sets[priority] = [];
                            sets[priority].push(condition);
                            return sets;
                        }, {});
                        return Object.keys(factSets).sort(function (a, b) {
                            return Number(a) > Number(b) ? -1 : 1;
                        }).map(function (priority) {
                            return factSets[priority];
                        });
                    }
                    /**
                     * Evaluates the rule, starting with the root boolean operator and recursing down
                     * All evaluation is done within the context of an almanac
                     * @return {Promise(RuleResult)} rule evaluation result
                     */
                }, {
                    key: "evaluate",
                    value: function evaluate(almanac) {
                        var _this3 = this;
                        var ruleResult = new _ruleResult2.default(this.conditions, this.event, this.priority, this.name);
                        var evaluateCondition = function evaluateCondition2(condition) {
                            if (condition.isBooleanOperator()) {
                                var subConditions = condition[condition.operator];
                                var comparisonPromise = void 0;
                                if (condition.operator === "all") {
                                    comparisonPromise = all(subConditions);
                                }
                                else {
                                    comparisonPromise = any(subConditions);
                                }
                                return comparisonPromise.then(function (comparisonValue) {
                                    var passes = comparisonValue === true;
                                    condition.result = passes;
                                    return passes;
                                });
                            }
                            else {
                                return condition.evaluate(almanac, _this3.engine.operators).then(function (evaluationResult) {
                                    var passes = evaluationResult.result;
                                    condition.factResult = evaluationResult.leftHandSideValue;
                                    condition.result = passes;
                                    return passes;
                                });
                            }
                        };
                        var evaluateConditions = function evaluateConditions2(conditions, method) {
                            if (!Array.isArray(conditions))
                                conditions = [conditions];
                            return Promise.all(conditions.map(function (condition) {
                                return evaluateCondition(condition);
                            })).then(function (conditionResults) {
                                (0, _debug2.default)("rule::evaluateConditions results", conditionResults);
                                return method.call(conditionResults, function (result) {
                                    return result === true;
                                });
                            });
                        };
                        var prioritizeAndRun = function prioritizeAndRun2(conditions, operator) {
                            if (conditions.length === 0) {
                                return Promise.resolve(true);
                            }
                            var method = Array.prototype.some;
                            if (operator === "all") {
                                method = Array.prototype.every;
                            }
                            var orderedSets = _this3.prioritizeConditions(conditions);
                            var cursor = Promise.resolve();
                            var _loop = function _loop2(i2) {
                                var set = orderedSets[i2];
                                var stop = false;
                                cursor = cursor.then(function (setResult) {
                                    if (operator === "any" && setResult === true || stop) {
                                        (0, _debug2.default)("prioritizeAndRun::detected truthy result; skipping remaining conditions");
                                        stop = true;
                                        return true;
                                    }
                                    if (operator === "all" && setResult === false || stop) {
                                        (0, _debug2.default)("prioritizeAndRun::detected falsey result; skipping remaining conditions");
                                        stop = true;
                                        return false;
                                    }
                                    return evaluateConditions(set, method);
                                });
                            };
                            for (var i = 0; i < orderedSets.length; i++) {
                                _loop(i);
                            }
                            return cursor;
                        };
                        var any = function any2(conditions) {
                            return prioritizeAndRun(conditions, "any");
                        };
                        var all = function all2(conditions) {
                            return prioritizeAndRun(conditions, "all");
                        };
                        var processResult = function processResult2(result) {
                            ruleResult.setResult(result);
                            if (result)
                                _this3.emit("success", ruleResult.event, almanac, ruleResult);
                            else
                                _this3.emit("failure", ruleResult.event, almanac, ruleResult);
                            return ruleResult;
                        };
                        if (ruleResult.conditions.any) {
                            return any(ruleResult.conditions.any).then(function (result) {
                                return processResult(result);
                            });
                        }
                        else {
                            return all(ruleResult.conditions.all).then(function (result) {
                                return processResult(result);
                            });
                        }
                    }
                }]);
            return Rule2;
        }(_events.EventEmitter);
        exports.default = Rule;
    }
});
// node_modules/json-rules-engine/dist/operator.js
var require_operator = __commonJS({
    "node_modules/json-rules-engine/dist/operator.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = /* @__PURE__ */ function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var Operator = function () {
            function Operator2(name, cb, factValueValidator) {
                _classCallCheck(this, Operator2);
                this.name = String(name);
                if (!name)
                    throw new Error("Missing operator name");
                if (typeof cb !== "function")
                    throw new Error("Missing operator callback");
                this.cb = cb;
                this.factValueValidator = factValueValidator;
                if (!this.factValueValidator)
                    this.factValueValidator = function () {
                        return true;
                    };
            }
            _createClass(Operator2, [{
                    key: "evaluate",
                    value: function evaluate(factValue, jsonValue) {
                        return this.factValueValidator(factValue) && this.cb(factValue, jsonValue);
                    }
                }]);
            return Operator2;
        }();
        exports.default = Operator;
    }
});
// node_modules/json-rules-engine/dist/errors.js
var require_errors = __commonJS({
    "node_modules/json-rules-engine/dist/errors.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self2, call) {
            if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var UndefinedFactError = exports.UndefinedFactError = function (_Error) {
            _inherits(UndefinedFactError2, _Error);
            function UndefinedFactError2() {
                var _ref;
                _classCallCheck(this, UndefinedFactError2);
                for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
                    props[_key] = arguments[_key];
                }
                var _this = _possibleConstructorReturn(this, (_ref = UndefinedFactError2.__proto__ || Object.getPrototypeOf(UndefinedFactError2)).call.apply(_ref, [this].concat(props)));
                _this.code = "UNDEFINED_FACT";
                return _this;
            }
            return UndefinedFactError2;
        }(Error);
    }
});
// node_modules/json-rules-engine/dist/almanac.js
var require_almanac = __commonJS({
    "node_modules/json-rules-engine/dist/almanac.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _createClass = /* @__PURE__ */ function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _fact = require_fact();
        var _fact2 = _interopRequireDefault(_fact);
        var _errors = require_errors();
        var _debug = require_debug();
        var _debug2 = _interopRequireDefault(_debug);
        var _jsonpathPlus = require_index_umd();
        var _lodash = require_lodash();
        var _lodash2 = _interopRequireDefault(_lodash);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var Almanac = function () {
            function Almanac2(factMap) {
                var runtimeFacts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                _classCallCheck(this, Almanac2);
                this.factMap = new Map(factMap);
                this.factResultsCache = /* @__PURE__ */ new Map();
                this.allowUndefinedFacts = Boolean(options.allowUndefinedFacts);
                for (var factId in runtimeFacts) {
                    var fact = void 0;
                    if (runtimeFacts[factId] instanceof _fact2.default) {
                        fact = runtimeFacts[factId];
                    }
                    else {
                        fact = new _fact2.default(factId, runtimeFacts[factId]);
                    }
                    this._addConstantFact(fact);
                    (0, _debug2.default)("almanac::constructor initialized runtime fact:" + fact.id + " with " + fact.value + "<" + _typeof(fact.value) + ">");
                }
            }
            _createClass(Almanac2, [{
                    key: "_getFact",
                    value: function _getFact(factId) {
                        return this.factMap.get(factId);
                    }
                    /**
                     * Registers fact with the almanac
                     * @param {[type]} fact [description]
                     */
                }, {
                    key: "_addConstantFact",
                    value: function _addConstantFact(fact) {
                        this.factMap.set(fact.id, fact);
                        this._setFactValue(fact, {}, fact.value);
                    }
                    /**
                     * Sets the computed value of a fact
                     * @param {Fact} fact
                     * @param {Object} params - values for differentiating this fact value from others, used for cache key
                     * @param {Mixed} value - computed value
                     */
                }, {
                    key: "_setFactValue",
                    value: function _setFactValue(fact, params, value) {
                        var cacheKey = fact.getCacheKey(params);
                        var factValue = Promise.resolve(value);
                        if (cacheKey) {
                            this.factResultsCache.set(cacheKey, factValue);
                        }
                        return factValue;
                    }
                    /**
                     * Adds a constant fact during runtime.  Can be used mid-run() to add additional information
                     * @param {String} fact - fact identifier
                     * @param {Mixed} value - constant value of the fact
                     */
                }, {
                    key: "addRuntimeFact",
                    value: function addRuntimeFact(factId, value) {
                        (0, _debug2.default)("almanac::addRuntimeFact id:" + factId);
                        var fact = new _fact2.default(factId, value);
                        return this._addConstantFact(fact);
                    }
                    /**
                     * Returns the value of a fact, based on the given parameters.  Utilizes the 'almanac' maintained
                     * by the engine, which cache's fact computations based on parameters provided
                     * @param  {string} factId - fact identifier
                     * @param  {Object} params - parameters to feed into the fact.  By default, these will also be used to compute the cache key
                     * @param  {String} path - object
                     * @return {Promise} a promise which will resolve with the fact computation.
                     */
                }, {
                    key: "factValue",
                    value: function factValue(factId) {
                        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
                        var factValuePromise = void 0;
                        var fact = this._getFact(factId);
                        if (fact === void 0) {
                            if (this.allowUndefinedFacts) {
                                return Promise.resolve(void 0);
                            }
                            else {
                                return Promise.reject(new _errors.UndefinedFactError("Undefined fact: " + factId));
                            }
                        }
                        if (fact.isConstant()) {
                            factValuePromise = Promise.resolve(fact.calculate(params, this));
                        }
                        else {
                            var cacheKey = fact.getCacheKey(params);
                            var cacheVal = cacheKey && this.factResultsCache.get(cacheKey);
                            if (cacheVal) {
                                factValuePromise = Promise.resolve(cacheVal);
                                (0, _debug2.default)("almanac::factValue cache hit for fact:" + factId);
                            }
                            else {
                                (0, _debug2.default)("almanac::factValue cache miss for fact:" + factId + "; calculating");
                                factValuePromise = this._setFactValue(fact, params, fact.calculate(params, this));
                            }
                        }
                        if (path) {
                            if (typeof path === "string" && path.startsWith("$")) {
                                (0, _debug2.default)("condition::evaluate extracting object property " + path);
                                return factValuePromise.then(function (factValue2) {
                                    if ((0, _lodash2.default)(factValue2)) {
                                        var pathValue = (0, _jsonpathPlus.JSONPath)({
                                            path,
                                            json: factValue2,
                                            wrap: false
                                        });
                                        (0, _debug2.default)("condition::evaluate extracting object property " + path + ", received: " + pathValue);
                                        return pathValue;
                                    }
                                    else {
                                        (0, _debug2.default)("condition::evaluate could not compute object path(" + path + ") of non-object: " + factValue2 + " <" + (typeof factValue2 === "undefined" ? "undefined" : _typeof(factValue2)) + ">; continuing with " + factValue2);
                                        return factValue2;
                                    }
                                });
                            }
                            else {
                                var selectn = void 0;
                                try {
                                    selectn = __require("selectn");
                                }
                                catch (err) {
                                    console.error(`Oops! Looks like you're trying to use the deprecated syntax for the ".path" property.`);
                                    console.error('Please convert your "path" properties to JsonPath syntax (ensure your path starts with "$")');
                                    console.error('Alternatively, if you wish to continue using old syntax (provided by selectn), you may "npm install selectn" as a direct dependency.');
                                    console.error("See https://github.com/CacheControl/json-rules-engine/blob/master/CHANGELOG.md#500--2019-10-27 for more information.");
                                    throw new Error('json-rules-engine: Unmet peer dependency "selectn" required for use of deprecated ".path" syntax. please "npm install selectn" or convert to json-path syntax');
                                }
                                return factValuePromise.then(function (factValue2) {
                                    if ((0, _lodash2.default)(factValue2)) {
                                        var pathValue = selectn(path)(factValue2);
                                        (0, _debug2.default)("condition::evaluate extracting object property " + path + ", received: " + pathValue);
                                        return pathValue;
                                    }
                                    else {
                                        (0, _debug2.default)("condition::evaluate could not compute object path(" + path + ") of non-object: " + factValue2 + " <" + (typeof factValue2 === "undefined" ? "undefined" : _typeof(factValue2)) + ">; continuing with " + factValue2);
                                        return factValue2;
                                    }
                                });
                            }
                        }
                        return factValuePromise;
                    }
                }]);
            return Almanac2;
        }();
        exports.default = Almanac;
    }
});
// node_modules/json-rules-engine/dist/engine-facts.js
var require_engine_facts = __commonJS({
    "node_modules/json-rules-engine/dist/engine-facts.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var SuccessEventFact = function SuccessEventFact2() {
            var successTriggers = [];
            return function () {
                var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                if (params.event) {
                    successTriggers.push(params.event);
                }
                return successTriggers;
            };
        };
        exports.SuccessEventFact = SuccessEventFact;
    }
});
// node_modules/json-rules-engine/dist/engine-default-operators.js
var require_engine_default_operators = __commonJS({
    "node_modules/json-rules-engine/dist/engine-default-operators.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _operator = require_operator();
        var _operator2 = _interopRequireDefault(_operator);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var Operators = [];
        Operators.push(new _operator2.default("equal", function (a, b) {
            return a === b;
        }));
        Operators.push(new _operator2.default("notEqual", function (a, b) {
            return a !== b;
        }));
        Operators.push(new _operator2.default("in", function (a, b) {
            return b.indexOf(a) > -1;
        }));
        Operators.push(new _operator2.default("notIn", function (a, b) {
            return b.indexOf(a) === -1;
        }));
        Operators.push(new _operator2.default("contains", function (a, b) {
            return a.indexOf(b) > -1;
        }, Array.isArray));
        Operators.push(new _operator2.default("doesNotContain", function (a, b) {
            return a.indexOf(b) === -1;
        }, Array.isArray));
        function numberValidator(factValue) {
            return Number.parseFloat(factValue).toString() !== "NaN";
        }
        Operators.push(new _operator2.default("lessThan", function (a, b) {
            return a < b;
        }, numberValidator));
        Operators.push(new _operator2.default("lessThanInclusive", function (a, b) {
            return a <= b;
        }, numberValidator));
        Operators.push(new _operator2.default("greaterThan", function (a, b) {
            return a > b;
        }, numberValidator));
        Operators.push(new _operator2.default("greaterThanInclusive", function (a, b) {
            return a >= b;
        }, numberValidator));
        exports.default = Operators;
    }
});
// node_modules/json-rules-engine/dist/engine.js
var require_engine = __commonJS({
    "node_modules/json-rules-engine/dist/engine.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.FINISHED = exports.RUNNING = exports.READY = void 0;
        var _createClass = /* @__PURE__ */ function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _fact = require_fact();
        var _fact2 = _interopRequireDefault(_fact);
        var _rule = require_rule();
        var _rule2 = _interopRequireDefault(_rule);
        var _operator = require_operator();
        var _operator2 = _interopRequireDefault(_operator);
        var _almanac = require_almanac();
        var _almanac2 = _interopRequireDefault(_almanac);
        var _events = require_events();
        var _engineFacts = require_engine_facts();
        var _engineDefaultOperators = require_engine_default_operators();
        var _engineDefaultOperators2 = _interopRequireDefault(_engineDefaultOperators);
        var _debug = require_debug();
        var _debug2 = _interopRequireDefault(_debug);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self2, call) {
            if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var READY = exports.READY = "READY";
        var RUNNING = exports.RUNNING = "RUNNING";
        var FINISHED = exports.FINISHED = "FINISHED";
        var Engine = function (_EventEmitter) {
            _inherits(Engine2, _EventEmitter);
            function Engine2() {
                var rules = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                _classCallCheck(this, Engine2);
                var _this = _possibleConstructorReturn(this, (Engine2.__proto__ || Object.getPrototypeOf(Engine2)).call(this));
                _this.rules = [];
                _this.allowUndefinedFacts = options.allowUndefinedFacts || false;
                _this.operators = /* @__PURE__ */ new Map();
                _this.facts = /* @__PURE__ */ new Map();
                _this.status = READY;
                rules.map(function (r) {
                    return _this.addRule(r);
                });
                _engineDefaultOperators2.default.map(function (o) {
                    return _this.addOperator(o);
                });
                return _this;
            }
            _createClass(Engine2, [{
                    key: "addRule",
                    value: function addRule(properties) {
                        if (!properties)
                            throw new Error("Engine: addRule() requires options");
                        if (!Object.prototype.hasOwnProperty.call(properties, "conditions"))
                            throw new Error('Engine: addRule() argument requires "conditions" property');
                        if (!Object.prototype.hasOwnProperty.call(properties, "event"))
                            throw new Error('Engine: addRule() argument requires "event" property');
                        var rule = void 0;
                        if (properties instanceof _rule2.default) {
                            rule = properties;
                        }
                        else {
                            rule = new _rule2.default(properties);
                        }
                        rule.setEngine(this);
                        this.rules.push(rule);
                        this.prioritizedRules = null;
                        return this;
                    }
                    /**
                     * Remove a rule from the engine
                     * @param {object|Rule} rule - rule definition. Must be a instance of Rule
                     */
                }, {
                    key: "removeRule",
                    value: function removeRule(rule) {
                        if (rule instanceof _rule2.default === false)
                            throw new Error("Engine: removeRule() rule must be a instance of Rule");
                        var index = this.rules.indexOf(rule);
                        if (index === -1)
                            return false;
                        this.prioritizedRules = null;
                        return Boolean(this.rules.splice(index, 1).length);
                    }
                    /**
                     * Add a custom operator definition
                     * @param {string}   operatorOrName - operator identifier within the condition; i.e. instead of 'equals', 'greaterThan', etc
                     * @param {function(factValue, jsonValue)} callback - the method to execute when the operator is encountered.
                     */
                }, {
                    key: "addOperator",
                    value: function addOperator(operatorOrName, cb) {
                        var operator = void 0;
                        if (operatorOrName instanceof _operator2.default) {
                            operator = operatorOrName;
                        }
                        else {
                            operator = new _operator2.default(operatorOrName, cb);
                        }
                        (0, _debug2.default)("engine::addOperator name:" + operator.name);
                        this.operators.set(operator.name, operator);
                    }
                    /**
                     * Remove a custom operator definition
                     * @param {string}   operatorOrName - operator identifier within the condition; i.e. instead of 'equals', 'greaterThan', etc
                     * @param {function(factValue, jsonValue)} callback - the method to execute when the operator is encountered.
                     */
                }, {
                    key: "removeOperator",
                    value: function removeOperator(operatorOrName) {
                        var operatorName = void 0;
                        if (operatorOrName instanceof _operator2.default) {
                            operatorName = operatorOrName.name;
                        }
                        else {
                            operatorName = operatorOrName;
                        }
                        return this.operators.delete(operatorName);
                    }
                    /**
                     * Add a fact definition to the engine.  Facts are called by rules as they are evaluated.
                     * @param {object|Fact} id - fact identifier or instance of Fact
                     * @param {function} definitionFunc - function to be called when computing the fact value for a given rule
                     * @param {Object} options - options to initialize the fact with. used when "id" is not a Fact instance
                     */
                }, {
                    key: "addFact",
                    value: function addFact(id, valueOrMethod, options) {
                        var factId = id;
                        var fact = void 0;
                        if (id instanceof _fact2.default) {
                            factId = id.id;
                            fact = id;
                        }
                        else {
                            fact = new _fact2.default(id, valueOrMethod, options);
                        }
                        (0, _debug2.default)("engine::addFact id:" + factId);
                        this.facts.set(factId, fact);
                        return this;
                    }
                    /**
                     * Remove a fact definition to the engine.  Facts are called by rules as they are evaluated.
                     * @param {object|Fact} id - fact identifier or instance of Fact
                     */
                }, {
                    key: "removeFact",
                    value: function removeFact(factOrId) {
                        var factId = void 0;
                        if (!(factOrId instanceof _fact2.default)) {
                            factId = factOrId;
                        }
                        else {
                            factId = factOrId.id;
                        }
                        return this.facts.delete(factId);
                    }
                    /**
                     * Iterates over the engine rules, organizing them by highest -> lowest priority
                     * @return {Rule[][]} two dimensional array of Rules.
                     *    Each outer array element represents a single priority(integer).  Inner array is
                     *    all rules with that priority.
                     */
                }, {
                    key: "prioritizeRules",
                    value: function prioritizeRules() {
                        if (!this.prioritizedRules) {
                            var ruleSets = this.rules.reduce(function (sets, rule) {
                                var priority = rule.priority;
                                if (!sets[priority])
                                    sets[priority] = [];
                                sets[priority].push(rule);
                                return sets;
                            }, {});
                            this.prioritizedRules = Object.keys(ruleSets).sort(function (a, b) {
                                return Number(a) > Number(b) ? -1 : 1;
                            }).map(function (priority) {
                                return ruleSets[priority];
                            });
                        }
                        return this.prioritizedRules;
                    }
                    /**
                     * Stops the rules engine from running the next priority set of Rules.  All remaining rules will be resolved as undefined,
                     * and no further events emitted.  Since rules of the same priority are evaluated in parallel(not series), other rules of
                     * the same priority may still emit events, even though the engine is in a "finished" state.
                     * @return {Engine}
                     */
                }, {
                    key: "stop",
                    value: function stop() {
                        this.status = FINISHED;
                        return this;
                    }
                    /**
                     * Returns a fact by fact-id
                     * @param  {string} factId - fact identifier
                     * @return {Fact} fact instance, or undefined if no such fact exists
                     */
                }, {
                    key: "getFact",
                    value: function getFact(factId) {
                        return this.facts.get(factId);
                    }
                    /**
                     * Runs an array of rules
                     * @param  {Rule[]} array of rules to be evaluated
                     * @return {Promise} resolves when all rules in the array have been evaluated
                     */
                }, {
                    key: "evaluateRules",
                    value: function evaluateRules(ruleArray, almanac) {
                        var _this2 = this;
                        return Promise.all(ruleArray.map(function (rule) {
                            if (_this2.status !== RUNNING) {
                                (0, _debug2.default)("engine::run status:" + _this2.status + "; skipping remaining rules");
                                return;
                            }
                            return rule.evaluate(almanac).then(function (ruleResult) {
                                (0, _debug2.default)("engine::run ruleResult:" + ruleResult.result);
                                if (ruleResult.result) {
                                    _this2.emit("success", rule.event, almanac, ruleResult);
                                    _this2.emit(rule.event.type, rule.event.params, almanac, ruleResult);
                                    almanac.factValue("success-events", {
                                        event: rule.event
                                    });
                                }
                                else {
                                    _this2.emit("failure", rule.event, almanac, ruleResult);
                                }
                            });
                        }));
                    }
                    /**
                     * Runs the rules engine
                     * @param  {Object} runtimeFacts - fact values known at runtime
                     * @param  {Object} runOptions - run options
                     * @return {Promise} resolves when the engine has completed running
                     */
                }, {
                    key: "run",
                    value: function run() {
                        var _this3 = this;
                        var runtimeFacts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        (0, _debug2.default)("engine::run started");
                        (0, _debug2.default)("engine::run runtimeFacts:", runtimeFacts);
                        runtimeFacts["success-events"] = new _fact2.default("success-events", (0, _engineFacts.SuccessEventFact)(), {
                            cache: false
                        });
                        this.status = RUNNING;
                        var almanac = new _almanac2.default(this.facts, runtimeFacts, {
                            allowUndefinedFacts: this.allowUndefinedFacts
                        });
                        var orderedSets = this.prioritizeRules();
                        var cursor = Promise.resolve();
                        return new Promise(function (resolve, reject) {
                            orderedSets.map(function (set) {
                                cursor = cursor.then(function () {
                                    return _this3.evaluateRules(set, almanac);
                                }).catch(reject);
                                return cursor;
                            });
                            cursor.then(function () {
                                _this3.status = FINISHED;
                                (0, _debug2.default)("engine::run completed");
                                return almanac.factValue("success-events");
                            }).then(function (events) {
                                resolve({
                                    events,
                                    almanac
                                });
                            }).catch(reject);
                        });
                    }
                }]);
            return Engine2;
        }(_events.EventEmitter);
        exports.default = Engine;
    }
});
// node_modules/json-rules-engine/dist/json-rules-engine.js
var require_json_rules_engine = __commonJS({
    "node_modules/json-rules-engine/dist/json-rules-engine.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Engine = exports.Operator = exports.Rule = exports.Fact = void 0;
        exports.default = function (rules, options) {
            return new _engine2.default(rules, options);
        };
        var _engine = require_engine();
        var _engine2 = _interopRequireDefault(_engine);
        var _fact = require_fact();
        var _fact2 = _interopRequireDefault(_fact);
        var _rule = require_rule();
        var _rule2 = _interopRequireDefault(_rule);
        var _operator = require_operator();
        var _operator2 = _interopRequireDefault(_operator);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.Fact = _fact2.default;
        exports.Rule = _rule2.default;
        exports.Operator = _operator2.default;
        exports.Engine = _engine2.default;
    }
});
// node_modules/json-rules-engine/dist/index.js
var require_dist = __commonJS({
    "node_modules/json-rules-engine/dist/index.js"(exports, module) {
        module.exports = require_json_rules_engine();
    }
});
export default require_dist();
