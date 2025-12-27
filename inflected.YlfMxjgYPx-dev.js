import "@nf-internal/chunk-VTXF2OHE";
// node_modules/inflected/dist/esm/inflected.js
var toString = Object.prototype.toString;
function isFunc(obj) {
    return toString.call(obj) === "[object Function]";
}
var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};
var createClass = /* @__PURE__ */ function () {
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
function icPart(str) {
    return str.split("").map(function (c) {
        return "(?:" + c.toUpperCase() + "|" + c.toLowerCase() + ")";
    }).join("");
}
function remove(arr, elem) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === elem) {
            Array.prototype.splice.call(arr, i, 1);
        }
    }
}
function hasProp(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
var instances = {};
var Inflector = function () {
    createClass(Inflector2, null, [{
            key: "getInstance",
            value: function getInstance(locale) {
                instances[locale] = instances[locale] || new Inflector2();
                return instances[locale];
            }
        }]);
    function Inflector2() {
        classCallCheck(this, Inflector2);
        this.plurals = [];
        this.singulars = [];
        this.uncountables = [];
        this.humans = [];
        this.acronyms = {};
        this.acronymRegex = /(?=a)b/;
    }
    createClass(Inflector2, [{
            key: "acronym",
            value: function acronym(word) {
                this.acronyms[word.toLowerCase()] = word;
                var values = [];
                for (var key in this.acronyms) {
                    if (hasProp(this.acronyms, key)) {
                        values.push(this.acronyms[key]);
                    }
                }
                this.acronymRegex = new RegExp(values.join("|"));
            }
        }, {
            key: "plural",
            value: function plural(rule, replacement) {
                if (typeof rule === "string") {
                    remove(this.uncountables, rule);
                }
                remove(this.uncountables, replacement);
                this.plurals.unshift([rule, replacement]);
            }
        }, {
            key: "singular",
            value: function singular(rule, replacement) {
                if (typeof rule === "string") {
                    remove(this.uncountables, rule);
                }
                remove(this.uncountables, replacement);
                this.singulars.unshift([rule, replacement]);
            }
        }, {
            key: "irregular",
            value: function irregular(singular, plural) {
                remove(this.uncountables, singular);
                remove(this.uncountables, plural);
                var s0 = singular[0];
                var sRest = singular.substr(1);
                var p0 = plural[0];
                var pRest = plural.substr(1);
                if (s0.toUpperCase() === p0.toUpperCase()) {
                    this.plural(new RegExp("(" + s0 + ")" + sRest + "$", "i"), "$1" + pRest);
                    this.plural(new RegExp("(" + p0 + ")" + pRest + "$", "i"), "$1" + pRest);
                    this.singular(new RegExp("(" + s0 + ")" + sRest + "$", "i"), "$1" + sRest);
                    this.singular(new RegExp("(" + p0 + ")" + pRest + "$", "i"), "$1" + sRest);
                }
                else {
                    var sRestIC = icPart(sRest);
                    var pRestIC = icPart(pRest);
                    this.plural(new RegExp(s0.toUpperCase() + sRestIC + "$"), p0.toUpperCase() + pRest);
                    this.plural(new RegExp(s0.toLowerCase() + sRestIC + "$"), p0.toLowerCase() + pRest);
                    this.plural(new RegExp(p0.toUpperCase() + pRestIC + "$"), p0.toUpperCase() + pRest);
                    this.plural(new RegExp(p0.toLowerCase() + pRestIC + "$"), p0.toLowerCase() + pRest);
                    this.singular(new RegExp(s0.toUpperCase() + sRestIC + "$"), s0.toUpperCase() + sRest);
                    this.singular(new RegExp(s0.toLowerCase() + sRestIC + "$"), s0.toLowerCase() + sRest);
                    this.singular(new RegExp(p0.toUpperCase() + pRestIC + "$"), s0.toUpperCase() + sRest);
                    this.singular(new RegExp(p0.toLowerCase() + pRestIC + "$"), s0.toLowerCase() + sRest);
                }
            }
        }, {
            key: "uncountable",
            value: function uncountable() {
                for (var _len = arguments.length, words = Array(_len), _key = 0; _key < _len; _key++) {
                    words[_key] = arguments[_key];
                }
                this.uncountables = this.uncountables.concat(words);
            }
        }, {
            key: "human",
            value: function human(rule, replacement) {
                this.humans.unshift([rule, replacement]);
            }
        }, {
            key: "clear",
            value: function clear() {
                var scope = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "all";
                if (scope === "all") {
                    this.plurals = [];
                    this.singulars = [];
                    this.uncountables = [];
                    this.humans = [];
                }
                else {
                    this[scope] = [];
                }
            }
        }]);
    return Inflector2;
}();
function en(inflector) {
    inflector.plural(/$/, "s");
    inflector.plural(/s$/i, "s");
    inflector.plural(/^(ax|test)is$/i, "$1es");
    inflector.plural(/(octop|vir)us$/i, "$1i");
    inflector.plural(/(octop|vir)i$/i, "$1i");
    inflector.plural(/(alias|status)$/i, "$1es");
    inflector.plural(/(bu)s$/i, "$1ses");
    inflector.plural(/(buffal|tomat)o$/i, "$1oes");
    inflector.plural(/([ti])um$/i, "$1a");
    inflector.plural(/([ti])a$/i, "$1a");
    inflector.plural(/sis$/i, "ses");
    inflector.plural(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
    inflector.plural(/(hive)$/i, "$1s");
    inflector.plural(/([^aeiouy]|qu)y$/i, "$1ies");
    inflector.plural(/(x|ch|ss|sh)$/i, "$1es");
    inflector.plural(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
    inflector.plural(/^(m|l)ouse$/i, "$1ice");
    inflector.plural(/^(m|l)ice$/i, "$1ice");
    inflector.plural(/^(ox)$/i, "$1en");
    inflector.plural(/^(oxen)$/i, "$1");
    inflector.plural(/(quiz)$/i, "$1zes");
    inflector.singular(/s$/i, "");
    inflector.singular(/(ss)$/i, "$1");
    inflector.singular(/(n)ews$/i, "$1ews");
    inflector.singular(/([ti])a$/i, "$1um");
    inflector.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i, "$1sis");
    inflector.singular(/(^analy)(sis|ses)$/i, "$1sis");
    inflector.singular(/([^f])ves$/i, "$1fe");
    inflector.singular(/(hive)s$/i, "$1");
    inflector.singular(/(tive)s$/i, "$1");
    inflector.singular(/([lr])ves$/i, "$1f");
    inflector.singular(/([^aeiouy]|qu)ies$/i, "$1y");
    inflector.singular(/(s)eries$/i, "$1eries");
    inflector.singular(/(m)ovies$/i, "$1ovie");
    inflector.singular(/(x|ch|ss|sh)es$/i, "$1");
    inflector.singular(/^(m|l)ice$/i, "$1ouse");
    inflector.singular(/(bus)(es)?$/i, "$1");
    inflector.singular(/(o)es$/i, "$1");
    inflector.singular(/(shoe)s$/i, "$1");
    inflector.singular(/(cris|test)(is|es)$/i, "$1is");
    inflector.singular(/^(a)x[ie]s$/i, "$1xis");
    inflector.singular(/(octop|vir)(us|i)$/i, "$1us");
    inflector.singular(/(alias|status)(es)?$/i, "$1");
    inflector.singular(/^(ox)en/i, "$1");
    inflector.singular(/(vert|ind)ices$/i, "$1ex");
    inflector.singular(/(matr)ices$/i, "$1ix");
    inflector.singular(/(quiz)zes$/i, "$1");
    inflector.singular(/(database)s$/i, "$1");
    inflector.irregular("person", "people");
    inflector.irregular("man", "men");
    inflector.irregular("child", "children");
    inflector.irregular("sex", "sexes");
    inflector.irregular("move", "moves");
    inflector.irregular("zombie", "zombies");
    inflector.uncountable("equipment", "information", "rice", "money", "species", "series", "fish", "sheep", "jeans", "police");
}
var defaults$1 = {
    en
};
function inflections(locale, fn) {
    if (isFunc(locale)) {
        fn = locale;
        locale = null;
    }
    locale = locale || "en";
    if (fn) {
        fn(Inflector.getInstance(locale));
    }
    else {
        return Inflector.getInstance(locale);
    }
}
for (locale in defaults$1) {
    inflections(locale, defaults$1[locale]);
}
var locale;
function applyInflections(word, rules) {
    var result = "" + word, rule, regex, replacement;
    if (result.length === 0) {
        return result;
    }
    else {
        var match = result.toLowerCase().match(/\b\w+$/);
        if (match && inflections().uncountables.indexOf(match[0]) > -1) {
            return result;
        }
        else {
            for (var i = 0, ii = rules.length; i < ii; i++) {
                rule = rules[i];
                regex = rule[0];
                replacement = rule[1];
                if (result.match(regex)) {
                    result = result.replace(regex, replacement);
                    break;
                }
            }
            return result;
        }
    }
}
function pluralize(word) {
    var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en";
    return applyInflections(word, inflections(locale).plurals);
}
function singularize(word) {
    var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en";
    return applyInflections(word, inflections(locale).singulars);
}
function capitalize(str) {
    var result = str === null || str === void 0 ? "" : String(str);
    return result.charAt(0).toUpperCase() + result.slice(1);
}
function camelize(term, uppercaseFirstLetter) {
    if (uppercaseFirstLetter === null || uppercaseFirstLetter === void 0) {
        uppercaseFirstLetter = true;
    }
    var result = "" + term;
    if (uppercaseFirstLetter) {
        result = result.replace(/^[a-z\d]*/, function (a) {
            return inflections().acronyms[a] || capitalize(a);
        });
    }
    else {
        result = result.replace(new RegExp("^(?:" + inflections().acronymRegex.source + "(?=\\b|[A-Z_])|\\w)"), function (a) {
            return a.toLowerCase();
        });
    }
    result = result.replace(/(?:_|(\/))([a-z\d]*)/gi, function (match, a, b, idx, string) {
        a || (a = "");
        return "" + a + (inflections().acronyms[b] || capitalize(b));
    });
    return result;
}
function underscore(camelCasedWord) {
    var result = "" + camelCasedWord;
    result = result.replace(new RegExp("(?:([A-Za-z\\d])|^)(" + inflections().acronymRegex.source + ")(?=\\b|[^a-z])", "g"), function (match, $1, $2) {
        return "" + ($1 || "") + ($1 ? "_" : "") + $2.toLowerCase();
    });
    result = result.replace(/([A-Z\d]+)([A-Z][a-z])/g, "$1_$2");
    result = result.replace(/([a-z\d])([A-Z])/g, "$1_$2");
    result = result.replace(/-/g, "_");
    return result.toLowerCase();
}
function humanize(lowerCaseAndUnderscoredWord, options) {
    var result = "" + lowerCaseAndUnderscoredWord;
    var humans = inflections().humans;
    var human = void 0, rule = void 0, replacement = void 0;
    options = options || {};
    if (options.capitalize === null || options.capitalize === void 0) {
        options.capitalize = true;
    }
    for (var i = 0, ii = humans.length; i < ii; i++) {
        human = humans[i];
        rule = human[0];
        replacement = human[1];
        if (rule.test && rule.test(result) || result.indexOf(rule) > -1) {
            result = result.replace(rule, replacement);
            break;
        }
    }
    result = result.replace(/_id$/, "");
    result = result.replace(/_/g, " ");
    result = result.replace(/([a-z\d]*)/gi, function (match) {
        return inflections().acronyms[match] || match.toLowerCase();
    });
    if (options.capitalize) {
        result = result.replace(/^\w/, function (match) {
            return match.toUpperCase();
        });
    }
    return result;
}
function titleize(word) {
    return humanize(underscore(word)).replace(/(^|[\s¿/]+)([a-z])/g, function (match, boundary, letter, idx, string) {
        return match.replace(letter, letter.toUpperCase());
    });
}
function tableize(className) {
    return pluralize(underscore(className));
}
function classify(tableName) {
    return camelize(singularize(tableName.replace(/.*\./g, "")));
}
function dasherize(underscoredWord) {
    return underscoredWord.replace(/_/g, "-");
}
function foreignKey(className) {
    var separateWithUnderscore = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return "" + underscore(className) + (separateWithUnderscore ? "_id" : "id");
}
function ordinal(number) {
    var absNumber = Math.abs(Number(number));
    var mod100 = absNumber % 100;
    if (mod100 === 11 || mod100 === 12 || mod100 === 13) {
        return "th";
    }
    else {
        switch (absNumber % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }
}
function ordinalize(number) {
    return "" + number + ordinal(number);
}
var DEFAULT_APPROXIMATIONS = {
    "\xC0": "A",
    "\xC1": "A",
    "\xC2": "A",
    "\xC3": "A",
    "\xC4": "A",
    "\xC5": "A",
    "\xC6": "AE",
    "\xC7": "C",
    "\xC8": "E",
    "\xC9": "E",
    "\xCA": "E",
    "\xCB": "E",
    "\xCC": "I",
    "\xCD": "I",
    "\xCE": "I",
    "\xCF": "I",
    "\xD0": "D",
    "\xD1": "N",
    "\xD2": "O",
    "\xD3": "O",
    "\xD4": "O",
    "\xD5": "O",
    "\xD6": "O",
    "\xD7": "x",
    "\xD8": "O",
    "\xD9": "U",
    "\xDA": "U",
    "\xDB": "U",
    "\xDC": "U",
    "\xDD": "Y",
    "\xDE": "Th",
    "\xDF": "ss",
    "\xE0": "a",
    "\xE1": "a",
    "\xE2": "a",
    "\xE3": "a",
    "\xE4": "a",
    "\xE5": "a",
    "\xE6": "ae",
    "\xE7": "c",
    "\xE8": "e",
    "\xE9": "e",
    "\xEA": "e",
    "\xEB": "e",
    "\xEC": "i",
    "\xED": "i",
    "\xEE": "i",
    "\xEF": "i",
    "\xF0": "d",
    "\xF1": "n",
    "\xF2": "o",
    "\xF3": "o",
    "\xF4": "o",
    "\xF5": "o",
    "\xF6": "o",
    "\xF8": "o",
    "\xF9": "u",
    "\xFA": "u",
    "\xFB": "u",
    "\xFC": "u",
    "\xFD": "y",
    "\xFE": "th",
    "\xFF": "y",
    "\u0100": "A",
    "\u0101": "a",
    "\u0102": "A",
    "\u0103": "a",
    "\u0104": "A",
    "\u0105": "a",
    "\u0106": "C",
    "\u0107": "c",
    "\u0108": "C",
    "\u0109": "c",
    "\u010A": "C",
    "\u010B": "c",
    "\u010C": "C",
    "\u010D": "c",
    "\u010E": "D",
    "\u010F": "d",
    "\u0110": "D",
    "\u0111": "d",
    "\u0112": "E",
    "\u0113": "e",
    "\u0114": "E",
    "\u0115": "e",
    "\u0116": "E",
    "\u0117": "e",
    "\u0118": "E",
    "\u0119": "e",
    "\u011A": "E",
    "\u011B": "e",
    "\u011C": "G",
    "\u011D": "g",
    "\u011E": "G",
    "\u011F": "g",
    "\u0120": "G",
    "\u0121": "g",
    "\u0122": "G",
    "\u0123": "g",
    "\u0124": "H",
    "\u0125": "h",
    "\u0126": "H",
    "\u0127": "h",
    "\u0128": "I",
    "\u0129": "i",
    "\u012A": "I",
    "\u012B": "i",
    "\u012C": "I",
    "\u012D": "i",
    "\u012E": "I",
    "\u012F": "i",
    "\u0130": "I",
    "\u0131": "i",
    "\u0132": "IJ",
    "\u0133": "ij",
    "\u0134": "J",
    "\u0135": "j",
    "\u0136": "K",
    "\u0137": "k",
    "\u0138": "k",
    "\u0139": "L",
    "\u013A": "l",
    "\u013B": "L",
    "\u013C": "l",
    "\u013D": "L",
    "\u013E": "l",
    "\u013F": "L",
    "\u0140": "l",
    "\u0141": "L",
    "\u0142": "l",
    "\u0143": "N",
    "\u0144": "n",
    "\u0145": "N",
    "\u0146": "n",
    "\u0147": "N",
    "\u0148": "n",
    "\u0149": "'n",
    "\u014A": "NG",
    "\u014B": "ng",
    "\u014C": "O",
    "\u014D": "o",
    "\u014E": "O",
    "\u014F": "o",
    "\u0150": "O",
    "\u0151": "o",
    "\u0152": "OE",
    "\u0153": "oe",
    "\u0154": "R",
    "\u0155": "r",
    "\u0156": "R",
    "\u0157": "r",
    "\u0158": "R",
    "\u0159": "r",
    "\u015A": "S",
    "\u015B": "s",
    "\u015C": "S",
    "\u015D": "s",
    "\u015E": "S",
    "\u015F": "s",
    "\u0160": "S",
    "\u0161": "s",
    "\u0162": "T",
    "\u0163": "t",
    "\u0164": "T",
    "\u0165": "t",
    "\u0166": "T",
    "\u0167": "t",
    "\u0168": "U",
    "\u0169": "u",
    "\u016A": "U",
    "\u016B": "u",
    "\u016C": "U",
    "\u016D": "u",
    "\u016E": "U",
    "\u016F": "u",
    "\u0170": "U",
    "\u0171": "u",
    "\u0172": "U",
    "\u0173": "u",
    "\u0174": "W",
    "\u0175": "w",
    "\u0176": "Y",
    "\u0177": "y",
    "\u0178": "Y",
    "\u0179": "Z",
    "\u017A": "z",
    "\u017B": "Z",
    "\u017C": "z",
    "\u017D": "Z",
    "\u017E": "z",
    "\u0410": "A",
    "\u0411": "B",
    "\u0412": "V",
    "\u0413": "G",
    "\u0414": "D",
    "\u0415": "E",
    "\u0401": "E",
    "\u0416": "ZH",
    "\u0417": "Z",
    "\u0418": "I",
    "\u0419": "J",
    "\u041A": "K",
    "\u041B": "L",
    "\u041C": "M",
    "\u041D": "N",
    "\u041E": "O",
    "\u041F": "P",
    "\u0420": "R",
    "\u0421": "S",
    "\u0422": "T",
    "\u0423": "U",
    "\u0424": "F",
    "\u0425": "KH",
    "\u0426": "C",
    "\u0427": "CH",
    "\u0428": "SH",
    "\u0429": "SHCH",
    "\u042A": "",
    "\u042B": "Y",
    "\u042C": "",
    "\u042D": "E",
    "\u042E": "YU",
    "\u042F": "YA",
    "\u0430": "a",
    "\u0431": "b",
    "\u0432": "v",
    "\u0433": "g",
    "\u0434": "d",
    "\u0435": "e",
    "\u0451": "e",
    "\u0436": "zh",
    "\u0437": "z",
    "\u0438": "i",
    "\u0439": "j",
    "\u043A": "k",
    "\u043B": "l",
    "\u043C": "m",
    "\u043D": "n",
    "\u043E": "o",
    "\u043F": "p",
    "\u0440": "r",
    "\u0441": "s",
    "\u0442": "t",
    "\u0443": "u",
    "\u0444": "f",
    "\u0445": "kh",
    "\u0446": "c",
    "\u0447": "ch",
    "\u0448": "sh",
    "\u0449": "shch",
    "\u044A": "",
    "\u044B": "y",
    "\u044C": "",
    "\u044D": "e",
    "\u044E": "yu",
    "\u044F": "ya"
};
var DEFAULT_REPLACEMENT_CHAR = "?";
var instances$1 = {};
var Transliterator = function () {
    createClass(Transliterator2, null, [{
            key: "getInstance",
            value: function getInstance(locale) {
                instances$1[locale] = instances$1[locale] || new Transliterator2();
                return instances$1[locale];
            }
        }]);
    function Transliterator2() {
        classCallCheck(this, Transliterator2);
        this.approximations = {};
        for (var char in DEFAULT_APPROXIMATIONS) {
            this.approximate(char, DEFAULT_APPROXIMATIONS[char]);
        }
    }
    createClass(Transliterator2, [{
            key: "approximate",
            value: function approximate(char, replacement) {
                this.approximations[char] = replacement;
            }
        }, {
            key: "transliterate",
            value: function transliterate2(string, replacement) {
                var _this = this;
                return string.replace(/[^\u0000-\u007f]/g, function (c) {
                    return _this.approximations[c] || replacement || DEFAULT_REPLACEMENT_CHAR;
                });
            }
        }]);
    return Transliterator2;
}();
function transliterations(locale, fn) {
    if (isFunc(locale)) {
        fn = locale;
        locale = null;
    }
    locale = locale || "en";
    if (fn) {
        fn(Transliterator.getInstance(locale));
    }
    else {
        return Transliterator.getInstance(locale);
    }
}
function transliterate(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var locale = options.locale || "en";
    var replacement = options.replacement || "?";
    return transliterations(locale).transliterate(string, replacement);
}
function parameterize(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (options.separator === void 0) {
        options.separator = "-";
    }
    if (options.separator === null) {
        options.separator = "";
    }
    var result = transliterate(string, options);
    result = result.replace(/[^a-z0-9\-_]+/ig, options.separator);
    if (options.separator.length) {
        var separatorRegex = new RegExp(options.separator);
        result = result.replace(new RegExp(separatorRegex.source + "{2,}"), options.separator);
        result = result.replace(new RegExp("^" + separatorRegex.source + "|" + separatorRegex.source + "$", "i"), "");
    }
    if (options.preserveCase) {
        return result;
    }
    return result.toLowerCase();
}
function constantify(word) {
    return underscore(word).toUpperCase().replace(/\s+/g, "_");
}
export { camelize, capitalize, classify, constantify, dasherize, foreignKey, humanize, inflections, ordinal, ordinalize, parameterize, pluralize, singularize, tableize, titleize, transliterate, transliterations, underscore };
