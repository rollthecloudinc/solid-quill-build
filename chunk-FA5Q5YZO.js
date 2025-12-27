import { __commonJS } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js
var require_pureJs = __commonJS({
    "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.toUtf8 = exports.fromUtf8 = void 0;
        var fromUtf8 = input => {
            const bytes = [];
            for (let i = 0, len = input.length; i < len; i++) {
                const value = input.charCodeAt(i);
                if (value < 128) {
                    bytes.push(value);
                }
                else if (value < 2048) {
                    bytes.push(value >> 6 | 192, value & 63 | 128);
                }
                else if (i + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i + 1) & 64512) === 56320) {
                    const surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
                    bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
                }
                else {
                    bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
                }
            }
            return Uint8Array.from(bytes);
        };
        exports.fromUtf8 = fromUtf8;
        var toUtf8 = input => {
            let decoded = "";
            for (let i = 0, len = input.length; i < len; i++) {
                const byte = input[i];
                if (byte < 128) {
                    decoded += String.fromCharCode(byte);
                }
                else if (192 <= byte && byte < 224) {
                    const nextByte = input[++i];
                    decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
                }
                else if (240 <= byte && byte < 365) {
                    const surrogatePair = [byte, input[++i], input[++i], input[++i]];
                    const encoded = "%" + surrogatePair.map(byteValue => byteValue.toString(16)).join("%");
                    decoded += decodeURIComponent(encoded);
                }
                else {
                    decoded += String.fromCharCode((byte & 15) << 12 | (input[++i] & 63) << 6 | input[++i] & 63);
                }
            }
            return decoded;
        };
        exports.toUtf8 = toUtf8;
    }
});
// node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi = __commonJS({
    "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.toUtf8 = exports.fromUtf8 = void 0;
        function fromUtf8(input) {
            return new TextEncoder().encode(input);
        }
        exports.fromUtf8 = fromUtf8;
        function toUtf8(input) {
            return new TextDecoder("utf-8").decode(input);
        }
        exports.toUtf8 = toUtf8;
    }
});
// node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js
var require_dist_cjs = __commonJS({
    "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.toUtf8 = exports.fromUtf8 = void 0;
        var pureJs_1 = require_pureJs();
        var whatwgEncodingApi_1 = require_whatwgEncodingApi();
        var fromUtf8 = input => typeof TextEncoder === "function" ? (0, whatwgEncodingApi_1.fromUtf8)(input) : (0, pureJs_1.fromUtf8)(input);
        exports.fromUtf8 = fromUtf8;
        var toUtf8 = input => typeof TextDecoder === "function" ? (0, whatwgEncodingApi_1.toUtf8)(input) : (0, pureJs_1.toUtf8)(input);
        exports.toUtf8 = toUtf8;
    }
});
// node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer = __commonJS({
    "node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.convertToBuffer = void 0;
        var util_utf8_browser_1 = require_dist_cjs();
        var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from ? function (input) {
            return Buffer.from(input, "utf8");
        } : util_utf8_browser_1.fromUtf8;
        function convertToBuffer(data) {
            if (data instanceof Uint8Array)
                return data;
            if (typeof data === "string") {
                return fromUtf8(data);
            }
            if (ArrayBuffer.isView(data)) {
                return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
            }
            return new Uint8Array(data);
        }
        exports.convertToBuffer = convertToBuffer;
    }
});
// node_modules/@aws-crypto/util/build/isEmptyData.js
var require_isEmptyData = __commonJS({
    "node_modules/@aws-crypto/util/build/isEmptyData.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.isEmptyData = void 0;
        function isEmptyData(data) {
            if (typeof data === "string") {
                return data.length === 0;
            }
            return data.byteLength === 0;
        }
        exports.isEmptyData = isEmptyData;
    }
});
// node_modules/@aws-crypto/util/build/numToUint8.js
var require_numToUint8 = __commonJS({
    "node_modules/@aws-crypto/util/build/numToUint8.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.numToUint8 = void 0;
        function numToUint8(num) {
            return new Uint8Array([(num & 4278190080) >> 24, (num & 16711680) >> 16, (num & 65280) >> 8, num & 255]);
        }
        exports.numToUint8 = numToUint8;
    }
});
// node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
var require_uint32ArrayFrom = __commonJS({
    "node_modules/@aws-crypto/util/build/uint32ArrayFrom.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.uint32ArrayFrom = void 0;
        function uint32ArrayFrom(a_lookUpTable) {
            if (!Array.from) {
                var return_array = new Uint32Array(a_lookUpTable.length);
                var a_index = 0;
                while (a_index < a_lookUpTable.length) {
                    return_array[a_index] = a_lookUpTable[a_index];
                }
                return return_array;
            }
            return Uint32Array.from(a_lookUpTable);
        }
        exports.uint32ArrayFrom = uint32ArrayFrom;
    }
});
// node_modules/@aws-crypto/util/build/index.js
var require_build = __commonJS({
    "node_modules/@aws-crypto/util/build/index.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
        var convertToBuffer_1 = require_convertToBuffer();
        Object.defineProperty(exports, "convertToBuffer", {
            enumerable: true,
            get: function () {
                return convertToBuffer_1.convertToBuffer;
            }
        });
        var isEmptyData_1 = require_isEmptyData();
        Object.defineProperty(exports, "isEmptyData", {
            enumerable: true,
            get: function () {
                return isEmptyData_1.isEmptyData;
            }
        });
        var numToUint8_1 = require_numToUint8();
        Object.defineProperty(exports, "numToUint8", {
            enumerable: true,
            get: function () {
                return numToUint8_1.numToUint8;
            }
        });
        var uint32ArrayFrom_1 = require_uint32ArrayFrom();
        Object.defineProperty(exports, "uint32ArrayFrom", {
            enumerable: true,
            get: function () {
                return uint32ArrayFrom_1.uint32ArrayFrom;
            }
        });
    }
});
export { require_build };
