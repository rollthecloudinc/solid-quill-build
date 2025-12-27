import { AwsSdkSigV4Signer, Client, Command, DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE, DEFAULT_USE_DUALSTACK_ENDPOINT, DEFAULT_USE_FIPS_ENDPOINT, DefaultIdentityProviderConfig, EndpointCache, FetchHttpHandler, HttpProtocol, HttpRequest, LazyJsonString, NoAuthSigner, NoOpLogger, NormalizedSchema, NumericValue, ProtocolLib, SerdeContextConfig, ServiceException, TypeRegistry, UnionSerde, awsEndpointFunctions, calculateBodyLength, collectBody, collectBodyString, createAggregatedClient, createDefaultUserAgentProvider, createPaginator, customEndpointFunctions, dateToUtcString, deref, deserializingStructIterator, determineTimestampFormat, fromBase64, getAwsRegionExtensionConfiguration, getContentLengthPlugin, getDefaultExtensionConfiguration, getEndpointPlugin, getHostHeaderPlugin, getHttpAuthSchemeEndpointRuleSetPlugin, getHttpHandlerExtensionConfiguration, getHttpSigningPlugin, getLoggerPlugin, getRecursionDetectionPlugin, getRetryPlugin, getSchemaSerdePlugin, getSmithyContext, getUserAgentPlugin, invalidProvider, loadConfigsForDefaultMode, locateWindow, normalizeProvider, parseEpochTimestamp, parseRfc3339DateTimeWithOffset, parseRfc7231DateTime, resolveAwsRegionExtensionConfiguration, resolveAwsSdkSigV4Config, resolveDefaultRuntimeConfig, resolveDefaultsModeConfig, resolveEndpoint, resolveEndpointConfig, resolveHostHeaderConfig, resolveHttpHandlerRuntimeConfig, resolveRegionConfig, resolveRetryConfig, resolveUserAgentConfig, serializingStructIterator, streamCollector, toBase64, v4 } from "@nf-internal/chunk-SKPNU3DF";
import { fromUtf8, toUtf8 } from "@nf-internal/chunk-NVTRXWIU";
import "@nf-internal/chunk-GXO62OFV";
import { parseUrl } from "@nf-internal/chunk-MKAXSSMD";
import { __async, __spreadProps, __spreadValues, __superGet } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js
var RpcProtocol = class extends HttpProtocol {
    serializeRequest(operationSchema, input, context) {
        return __async(this, null, function* () {
            const serializer = this.serializer;
            const query = {};
            const headers = {};
            const endpoint = yield context.endpoint();
            const ns = NormalizedSchema.of(operationSchema?.input);
            const schema = ns.getSchema();
            let payload;
            const request = new HttpRequest({
                protocol: "",
                hostname: "",
                port: void 0,
                path: "/",
                fragment: void 0,
                query,
                headers,
                body: void 0
            });
            if (endpoint) {
                this.updateServiceEndpoint(request, endpoint);
                this.setHostPrefix(request, operationSchema, input);
            }
            const _input = __spreadValues({}, input);
            if (input) {
                const eventStreamMember = ns.getEventStreamMember();
                if (eventStreamMember) {
                    if (_input[eventStreamMember]) {
                        const initialRequest = {};
                        for (const [memberName, memberSchema] of ns.structIterator()) {
                            if (memberName !== eventStreamMember && _input[memberName]) {
                                serializer.write(memberSchema, _input[memberName]);
                                initialRequest[memberName] = serializer.flush();
                            }
                        }
                        payload = yield this.serializeEventStream({
                            eventStream: _input[eventStreamMember],
                            requestSchema: ns,
                            initialRequest
                        });
                    }
                }
                else {
                    serializer.write(schema, _input);
                    payload = serializer.flush();
                }
            }
            request.headers = headers;
            request.query = query;
            request.body = payload;
            request.method = "POST";
            return request;
        });
    }
    deserializeResponse(operationSchema, context, response) {
        return __async(this, null, function* () {
            const deserializer = this.deserializer;
            const ns = NormalizedSchema.of(operationSchema.output);
            const dataObject = {};
            if (response.statusCode >= 300) {
                const bytes = yield collectBody(response.body, context);
                if (bytes.byteLength > 0) {
                    Object.assign(dataObject, yield deserializer.read(15, bytes));
                }
                yield this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
                throw new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
            }
            for (const header in response.headers) {
                const value = response.headers[header];
                delete response.headers[header];
                response.headers[header.toLowerCase()] = value;
            }
            const eventStreamMember = ns.getEventStreamMember();
            if (eventStreamMember) {
                dataObject[eventStreamMember] = yield this.deserializeEventStream({
                    response,
                    responseSchema: ns,
                    initialResponseContainer: dataObject
                });
            }
            else {
                const bytes = yield collectBody(response.body, context);
                if (bytes.byteLength > 0) {
                    Object.assign(dataObject, yield deserializer.read(ns, bytes));
                }
            }
            dataObject.$metadata = this.deserializeMetadata(response);
            return dataObject;
        });
    }
};
// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReviver.js
function jsonReviver(key, value, context) {
    if (context?.source) {
        const numericString = context.source;
        if (typeof value === "number") {
            if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER || numericString !== String(value)) {
                const isFractional = numericString.includes(".");
                if (isFractional) {
                    return new NumericValue(numericString, "bigDecimal");
                }
                else {
                    return BigInt(numericString);
                }
            }
        }
    }
    return value;
}
// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var parseJsonBody = (streamBody, context) => collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
        try {
            return JSON.parse(encoded);
        }
        catch (e2) {
            if (e2?.name === "SyntaxError") {
                Object.defineProperty(e2, "$responseBodyText", {
                    value: encoded
                });
            }
            throw e2;
        }
    }
    return {};
});
var loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find(k2 => k2.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = rawValue => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data && typeof data === "object") {
        const codeKey = findKey(data, "code");
        if (codeKey && data[codeKey] !== void 0) {
            return sanitizeErrorCode(data[codeKey]);
        }
        if (data["__type"] !== void 0) {
            return sanitizeErrorCode(data["__type"]);
        }
    }
};
// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeDeserializer.js
var JsonShapeDeserializer = class extends SerdeContextConfig {
    settings;
    constructor(settings) {
        super();
        this.settings = settings;
    }
    read(schema, data) {
        return __async(this, null, function* () {
            return this._read(schema, typeof data === "string" ? JSON.parse(data, jsonReviver) : yield parseJsonBody(data, this.serdeContext));
        });
    }
    readObject(schema, data) {
        return this._read(schema, data);
    }
    _read(schema, value) {
        const isObject = value !== null && typeof value === "object";
        const ns = NormalizedSchema.of(schema);
        if (isObject) {
            if (ns.isStructSchema()) {
                const union = ns.isUnionSchema();
                const out = {};
                let unionSerde;
                if (union) {
                    unionSerde = new UnionSerde(value, out);
                }
                for (const [memberName, memberSchema] of deserializingStructIterator(ns, value, this.settings.jsonName ? "jsonName" : false)) {
                    const fromKey = this.settings.jsonName ? memberSchema.getMergedTraits().jsonName ?? memberName : memberName;
                    if (union) {
                        unionSerde.mark(fromKey);
                    }
                    if (value[fromKey] != null) {
                        out[memberName] = this._read(memberSchema, value[fromKey]);
                    }
                }
                if (union) {
                    unionSerde.writeUnknown();
                }
                return out;
            }
            if (Array.isArray(value) && ns.isListSchema()) {
                const listMember = ns.getValueSchema();
                const out = [];
                const sparse = !!ns.getMergedTraits().sparse;
                for (const item of value) {
                    if (sparse || item != null) {
                        out.push(this._read(listMember, item));
                    }
                }
                return out;
            }
            if (ns.isMapSchema()) {
                const mapMember = ns.getValueSchema();
                const out = {};
                const sparse = !!ns.getMergedTraits().sparse;
                for (const [_k, _v] of Object.entries(value)) {
                    if (sparse || _v != null) {
                        out[_k] = this._read(mapMember, _v);
                    }
                }
                return out;
            }
        }
        if (ns.isBlobSchema() && typeof value === "string") {
            return fromBase64(value);
        }
        const mediaType = ns.getMergedTraits().mediaType;
        if (ns.isStringSchema() && typeof value === "string" && mediaType) {
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
                return LazyJsonString.from(value);
            }
            return value;
        }
        if (ns.isTimestampSchema() && value != null) {
            const format = determineTimestampFormat(ns, this.settings);
            switch (format) {
                case 5:
                    return parseRfc3339DateTimeWithOffset(value);
                case 6:
                    return parseRfc7231DateTime(value);
                case 7:
                    return parseEpochTimestamp(value);
                default:
                    console.warn("Missing timestamp format, parsing value with Date constructor:", value);
                    return new Date(value);
            }
        }
        if (ns.isBigIntegerSchema() && (typeof value === "number" || typeof value === "string")) {
            return BigInt(value);
        }
        if (ns.isBigDecimalSchema() && value != void 0) {
            if (value instanceof NumericValue) {
                return value;
            }
            const untyped = value;
            if (untyped.type === "bigDecimal" && "string" in untyped) {
                return new NumericValue(untyped.string, untyped.type);
            }
            return new NumericValue(String(value), "bigDecimal");
        }
        if (ns.isNumericSchema() && typeof value === "string") {
            switch (value) {
                case "Infinity":
                    return Infinity;
                case "-Infinity":
                    return -Infinity;
                case "NaN":
                    return NaN;
            }
            return value;
        }
        if (ns.isDocumentSchema()) {
            if (isObject) {
                const out = Array.isArray(value) ? [] : {};
                for (const [k2, v2] of Object.entries(value)) {
                    if (v2 instanceof NumericValue) {
                        out[k2] = v2;
                    }
                    else {
                        out[k2] = this._read(ns, v2);
                    }
                }
                return out;
            }
            else {
                return structuredClone(value);
            }
        }
        return value;
    }
};
// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReplacer.js
var NUMERIC_CONTROL_CHAR = String.fromCharCode(925);
var JsonReplacer = class {
    values = /* @__PURE__ */ new Map();
    counter = 0;
    stage = 0;
    createReplacer() {
        if (this.stage === 1) {
            throw new Error("@aws-sdk/core/protocols - JsonReplacer already created.");
        }
        if (this.stage === 2) {
            throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        }
        this.stage = 1;
        return (key, value) => {
            if (value instanceof NumericValue) {
                const v2 = `${NUMERIC_CONTROL_CHAR + "nv" + this.counter++}_` + value.string;
                this.values.set(`"${v2}"`, value.string);
                return v2;
            }
            if (typeof value === "bigint") {
                const s2 = value.toString();
                const v2 = `${NUMERIC_CONTROL_CHAR + "b" + this.counter++}_` + s2;
                this.values.set(`"${v2}"`, s2);
                return v2;
            }
            return value;
        };
    }
    replaceInJson(json) {
        if (this.stage === 0) {
            throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
        }
        if (this.stage === 2) {
            throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        }
        this.stage = 2;
        if (this.counter === 0) {
            return json;
        }
        for (const [key, value] of this.values) {
            json = json.replace(key, value);
        }
        return json;
    }
};
// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeSerializer.js
var JsonShapeSerializer = class extends SerdeContextConfig {
    settings;
    buffer;
    useReplacer = false;
    rootSchema;
    constructor(settings) {
        super();
        this.settings = settings;
    }
    write(schema, value) {
        this.rootSchema = NormalizedSchema.of(schema);
        this.buffer = this._write(this.rootSchema, value);
    }
    writeDiscriminatedDocument(schema, value) {
        this.write(schema, value);
        if (typeof this.buffer === "object") {
            this.buffer.__type = NormalizedSchema.of(schema).getName(true);
        }
    }
    flush() {
        const { rootSchema, useReplacer } = this;
        this.rootSchema = void 0;
        this.useReplacer = false;
        if (rootSchema?.isStructSchema() || rootSchema?.isDocumentSchema()) {
            if (!useReplacer) {
                return JSON.stringify(this.buffer);
            }
            const replacer = new JsonReplacer();
            return replacer.replaceInJson(JSON.stringify(this.buffer, replacer.createReplacer(), 0));
        }
        return this.buffer;
    }
    _write(schema, value, container) {
        const isObject = value !== null && typeof value === "object";
        const ns = NormalizedSchema.of(schema);
        if (isObject) {
            if (ns.isStructSchema()) {
                const out = {};
                for (const [memberName, memberSchema] of serializingStructIterator(ns, value)) {
                    const serializableValue = this._write(memberSchema, value[memberName], ns);
                    if (serializableValue !== void 0) {
                        const jsonName = memberSchema.getMergedTraits().jsonName;
                        const targetKey = this.settings.jsonName ? jsonName ?? memberName : memberName;
                        out[targetKey] = serializableValue;
                    }
                }
                if (ns.isUnionSchema() && Object.keys(out).length === 0) {
                    const { $unknown } = value;
                    if (Array.isArray($unknown)) {
                        const [k2, v2] = $unknown;
                        out[k2] = this._write(15, v2);
                    }
                }
                return out;
            }
            if (Array.isArray(value) && ns.isListSchema()) {
                const listMember = ns.getValueSchema();
                const out = [];
                const sparse = !!ns.getMergedTraits().sparse;
                for (const item of value) {
                    if (sparse || item != null) {
                        out.push(this._write(listMember, item));
                    }
                }
                return out;
            }
            if (ns.isMapSchema()) {
                const mapMember = ns.getValueSchema();
                const out = {};
                const sparse = !!ns.getMergedTraits().sparse;
                for (const [_k, _v] of Object.entries(value)) {
                    if (sparse || _v != null) {
                        out[_k] = this._write(mapMember, _v);
                    }
                }
                return out;
            }
            if (value instanceof Uint8Array && (ns.isBlobSchema() || ns.isDocumentSchema())) {
                if (ns === this.rootSchema) {
                    return value;
                }
                return (this.serdeContext?.base64Encoder ?? toBase64)(value);
            }
            if (value instanceof Date && (ns.isTimestampSchema() || ns.isDocumentSchema())) {
                const format = determineTimestampFormat(ns, this.settings);
                switch (format) {
                    case 5:
                        return value.toISOString().replace(".000Z", "Z");
                    case 6:
                        return dateToUtcString(value);
                    case 7:
                        return value.getTime() / 1e3;
                    default:
                        console.warn("Missing timestamp format, using epoch seconds", value);
                        return value.getTime() / 1e3;
                }
            }
            if (value instanceof NumericValue) {
                this.useReplacer = true;
            }
        }
        if (value === null && container?.isStructSchema()) {
            return void 0;
        }
        if (ns.isStringSchema()) {
            if (typeof value === "undefined" && ns.isIdempotencyToken()) {
                return v4();
            }
            const mediaType = ns.getMergedTraits().mediaType;
            if (value != null && mediaType) {
                const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
                if (isJson) {
                    return LazyJsonString.from(value);
                }
            }
            return value;
        }
        if (typeof value === "number" && ns.isNumericSchema()) {
            if (Math.abs(value) === Infinity || isNaN(value)) {
                return String(value);
            }
            return value;
        }
        if (typeof value === "string" && ns.isBlobSchema()) {
            if (ns === this.rootSchema) {
                return value;
            }
            return (this.serdeContext?.base64Encoder ?? toBase64)(value);
        }
        if (typeof value === "bigint") {
            this.useReplacer = true;
        }
        if (ns.isDocumentSchema()) {
            if (isObject) {
                const out = Array.isArray(value) ? [] : {};
                for (const [k2, v2] of Object.entries(value)) {
                    if (v2 instanceof NumericValue) {
                        this.useReplacer = true;
                        out[k2] = v2;
                    }
                    else {
                        out[k2] = this._write(ns, v2);
                    }
                }
                return out;
            }
            else {
                return structuredClone(value);
            }
        }
        return value;
    }
};
// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonCodec.js
var JsonCodec = class extends SerdeContextConfig {
    settings;
    constructor(settings) {
        super();
        this.settings = settings;
    }
    createSerializer() {
        const serializer = new JsonShapeSerializer(this.settings);
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
    }
    createDeserializer() {
        const deserializer = new JsonShapeDeserializer(this.settings);
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
    }
};
// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJsonRpcProtocol.js
var AwsJsonRpcProtocol = class _AwsJsonRpcProtocol extends RpcProtocol {
    serializer;
    deserializer;
    serviceTarget;
    codec;
    mixin;
    awsQueryCompatible;
    constructor({ defaultNamespace, serviceTarget, awsQueryCompatible, jsonCodec }) {
        super({
            defaultNamespace
        });
        this.serviceTarget = serviceTarget;
        this.codec = jsonCodec ?? new JsonCodec({
            timestampFormat: {
                useTrait: true,
                default: 7
            },
            jsonName: false
        });
        this.serializer = this.codec.createSerializer();
        this.deserializer = this.codec.createDeserializer();
        this.awsQueryCompatible = !!awsQueryCompatible;
        this.mixin = new ProtocolLib(this.awsQueryCompatible);
    }
    serializeRequest(operationSchema, input, context) {
        return __async(this, null, function* () {
            const request = yield __superGet(_AwsJsonRpcProtocol.prototype, this, "serializeRequest").call(this, operationSchema, input, context);
            if (!request.path.endsWith("/")) {
                request.path += "/";
            }
            Object.assign(request.headers, {
                "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
                "x-amz-target": `${this.serviceTarget}.${operationSchema.name}`
            });
            if (this.awsQueryCompatible) {
                request.headers["x-amzn-query-mode"] = "true";
            }
            if (deref(operationSchema.input) === "unit" || !request.body) {
                request.body = "{}";
            }
            return request;
        });
    }
    getPayloadCodec() {
        return this.codec;
    }
    handleError(operationSchema, context, response, dataObject, metadata) {
        return __async(this, null, function* () {
            if (this.awsQueryCompatible) {
                this.mixin.setQueryCompatError(dataObject, response);
            }
            const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";
            const { errorSchema, errorMetadata } = yield this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata, this.awsQueryCompatible ? this.mixin.findQueryCompatibleError : void 0);
            const ns = NormalizedSchema.of(errorSchema);
            const message = dataObject.message ?? dataObject.Message ?? "Unknown";
            const ErrorCtor = TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error;
            const exception = new ErrorCtor(message);
            const output = {};
            for (const [name, member] of ns.structIterator()) {
                if (dataObject[name] != null) {
                    output[name] = this.codec.createDeserializer().readObject(member, dataObject[name]);
                }
            }
            if (this.awsQueryCompatible) {
                this.mixin.queryCompatOutput(dataObject, output);
            }
            throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
                $fault: ns.getMergedTraits().error,
                message
            }, output), dataObject);
        });
    }
};
// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_1Protocol.js
var AwsJson1_1Protocol = class extends AwsJsonRpcProtocol {
    constructor({ defaultNamespace, serviceTarget, awsQueryCompatible, jsonCodec }) {
        super({
            defaultNamespace,
            serviceTarget,
            awsQueryCompatible,
            jsonCodec
        });
    }
    getShapeId() {
        return "aws.protocols#awsJson1_1";
    }
    getJsonRpcVersion() {
        return "1.1";
    }
    getDefaultContentType() {
        return "application/x-amz-json-1.1";
    }
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthSchemeProvider.js
var defaultCognitoIdentityHttpAuthSchemeParametersProvider = (config, context, input) => __async(null, null, function* () {
    return {
        operation: getSmithyContext(context).operation,
        region: (yield normalizeProvider(config.region)()) || (() => {
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
    };
});
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "cognito-identity",
            region: authParameters.region
        },
        propertiesExtractor: (config, context) => ({
            signingProperties: {
                config,
                context
            }
        })
    };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#noAuth"
    };
}
var defaultCognitoIdentityHttpAuthSchemeProvider = authParameters => {
    const options = [];
    switch (authParameters.operation) {
        case "GetCredentialsForIdentity":
            {
                options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
                break;
            }
        case "GetId":
            {
                options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
                break;
            }
        case "GetOpenIdToken":
            {
                options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
                break;
            }
        case "UnlinkIdentity":
            {
                options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
                break;
            }
        default:
            {
                options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
            }
    }
    return options;
};
var resolveHttpAuthSchemeConfig = config => {
    const config_0 = resolveAwsSdkSigV4Config(config);
    return Object.assign(config_0, {
        authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
    });
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = options => {
    return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "cognito-identity"
    });
};
var commonParams = {
    UseFIPS: {
        type: "builtInParams",
        name: "useFipsEndpoint"
    },
    Endpoint: {
        type: "builtInParams",
        name: "endpoint"
    },
    Region: {
        type: "builtInParams",
        name: "region"
    },
    UseDualStack: {
        type: "builtInParams",
        name: "useDualstackEndpoint"
    }
};
// node_modules/@aws-sdk/client-cognito-identity/package.json
var package_default = {
    name: "@aws-sdk/client-cognito-identity",
    description: "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native",
    version: "3.957.0",
    scripts: {
        build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
        "build:cjs": "node ../../scripts/compilation/inline client-cognito-identity",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo cognito-identity",
        "test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts --mode development",
        "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts",
        "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: false,
    dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.957.0",
        "@aws-sdk/credential-provider-node": "3.957.0",
        "@aws-sdk/middleware-host-header": "3.957.0",
        "@aws-sdk/middleware-logger": "3.957.0",
        "@aws-sdk/middleware-recursion-detection": "3.957.0",
        "@aws-sdk/middleware-user-agent": "3.957.0",
        "@aws-sdk/region-config-resolver": "3.957.0",
        "@aws-sdk/types": "3.957.0",
        "@aws-sdk/util-endpoints": "3.957.0",
        "@aws-sdk/util-user-agent-browser": "3.957.0",
        "@aws-sdk/util-user-agent-node": "3.957.0",
        "@smithy/config-resolver": "^4.4.5",
        "@smithy/core": "^3.20.0",
        "@smithy/fetch-http-handler": "^5.3.8",
        "@smithy/hash-node": "^4.2.7",
        "@smithy/invalid-dependency": "^4.2.7",
        "@smithy/middleware-content-length": "^4.2.7",
        "@smithy/middleware-endpoint": "^4.4.1",
        "@smithy/middleware-retry": "^4.4.17",
        "@smithy/middleware-serde": "^4.2.8",
        "@smithy/middleware-stack": "^4.2.7",
        "@smithy/node-config-provider": "^4.3.7",
        "@smithy/node-http-handler": "^4.4.7",
        "@smithy/protocol-http": "^5.3.7",
        "@smithy/smithy-client": "^4.10.2",
        "@smithy/types": "^4.11.0",
        "@smithy/url-parser": "^4.2.7",
        "@smithy/util-base64": "^4.3.0",
        "@smithy/util-body-length-browser": "^4.2.0",
        "@smithy/util-body-length-node": "^4.2.1",
        "@smithy/util-defaults-mode-browser": "^4.3.16",
        "@smithy/util-defaults-mode-node": "^4.2.19",
        "@smithy/util-endpoints": "^3.2.7",
        "@smithy/util-middleware": "^4.2.7",
        "@smithy/util-retry": "^4.2.7",
        "@smithy/util-utf8": "^4.2.0",
        tslib: "^2.6.2"
    },
    devDependencies: {
        "@aws-sdk/client-iam": "3.957.0",
        "@tsconfig/node18": "18.2.4",
        "@types/chai": "^4.2.11",
        "@types/node": "^18.19.69",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~5.8.3"
    },
    engines: {
        node: ">=18.0.0"
    },
    typesVersions: {
        "<4.0": {
            "dist-types/*": ["dist-types/ts3.4/*"]
        }
    },
    files: ["dist-*/**"],
    author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
    },
    license: "Apache-2.0",
    browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity",
    repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-cognito-identity"
    }
};
// node_modules/@aws-sdk/client-cognito-identity/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
var fromUtf82 = input => new TextEncoder().encode(input);
// node_modules/@aws-sdk/client-cognito-identity/node_modules/@aws-crypto/util/build/module/convertToBuffer.js
var fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function (input) {
    return Buffer.from(input, "utf8");
} : fromUtf82;
function convertToBuffer(data) {
    if (data instanceof Uint8Array)
        return data;
    if (typeof data === "string") {
        return fromUtf83(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
// node_modules/@aws-sdk/client-cognito-identity/node_modules/@aws-crypto/util/build/module/isEmptyData.js
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
// node_modules/@aws-sdk/client-cognito-identity/node_modules/@aws-crypto/sha256-browser/build/module/constants.js
var SHA_256_HASH = {
    name: "SHA-256"
};
var SHA_256_HMAC_ALGO = {
    name: "HMAC",
    hash: SHA_256_HASH
};
var EMPTY_DATA_SHA_256 = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85]);
// node_modules/@aws-sdk/client-cognito-identity/node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
var Sha256 = /** @class */ function () {
    function Sha2564(secret) {
        this.toHash = new Uint8Array(0);
        this.secret = secret;
        this.reset();
    }
    Sha2564.prototype.update = function (data) {
        if (isEmptyData(data)) {
            return;
        }
        var update = convertToBuffer(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
    };
    Sha2564.prototype.digest = function () {
        var _this = this;
        if (this.key) {
            return this.key.then(function (key) {
                return locateWindow().crypto.subtle.sign(SHA_256_HMAC_ALGO, key, _this.toHash).then(function (data) {
                    return new Uint8Array(data);
                });
            });
        }
        if (isEmptyData(this.toHash)) {
            return Promise.resolve(EMPTY_DATA_SHA_256);
        }
        return Promise.resolve().then(function () {
            return locateWindow().crypto.subtle.digest(SHA_256_HASH, _this.toHash);
        }).then(function (data) {
            return Promise.resolve(new Uint8Array(data));
        });
    };
    Sha2564.prototype.reset = function () {
        var _this = this;
        this.toHash = new Uint8Array(0);
        if (this.secret && this.secret !== void 0) {
            this.key = new Promise(function (resolve, reject) {
                locateWindow().crypto.subtle.importKey("raw", convertToBuffer(_this.secret), SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
            });
            this.key.catch(function () { });
        }
    };
    return Sha2564;
}();
// node_modules/@aws-sdk/client-cognito-identity/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
import { __awaiter, __generator } from "tslib";
// node_modules/@aws-sdk/client-cognito-identity/node_modules/@aws-crypto/sha256-js/build/module/constants.js
var BLOCK_SIZE = 64;
var DIGEST_LENGTH = 32;
var KEY = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
var INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
// node_modules/@aws-sdk/client-cognito-identity/node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js
var RawSha256 = /** @class */ function () {
    function RawSha2562() {
        this.state = Int32Array.from(INIT);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        this.finished = false;
    }
    RawSha2562.prototype.update = function (data) {
        if (this.finished) {
            throw new Error("Attempted to update an already finished hash.");
        }
        var position = 0;
        var byteLength = data.byteLength;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
            throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
            this.buffer[this.bufferLength++] = data[position++];
            byteLength--;
            if (this.bufferLength === BLOCK_SIZE) {
                this.hashBuffer();
                this.bufferLength = 0;
            }
        }
    };
    RawSha2562.prototype.digest = function () {
        if (!this.finished) {
            var bitsHashed = this.bytesHashed * 8;
            var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
            var undecoratedLength = this.bufferLength;
            bufferView.setUint8(this.bufferLength++, 128);
            if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
                for (var i2 = this.bufferLength; i2 < BLOCK_SIZE; i2++) {
                    bufferView.setUint8(i2, 0);
                }
                this.hashBuffer();
                this.bufferLength = 0;
            }
            for (var i2 = this.bufferLength; i2 < BLOCK_SIZE - 8; i2++) {
                bufferView.setUint8(i2, 0);
            }
            bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
            bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
            this.hashBuffer();
            this.finished = true;
        }
        var out = new Uint8Array(DIGEST_LENGTH);
        for (var i2 = 0; i2 < 8; i2++) {
            out[i2 * 4] = this.state[i2] >>> 24 & 255;
            out[i2 * 4 + 1] = this.state[i2] >>> 16 & 255;
            out[i2 * 4 + 2] = this.state[i2] >>> 8 & 255;
            out[i2 * 4 + 3] = this.state[i2] >>> 0 & 255;
        }
        return out;
    };
    RawSha2562.prototype.hashBuffer = function () {
        var _a = this, buffer = _a.buffer, state = _a.state;
        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for (var i2 = 0; i2 < BLOCK_SIZE; i2++) {
            if (i2 < 16) {
                this.temp[i2] = (buffer[i2 * 4] & 255) << 24 | (buffer[i2 * 4 + 1] & 255) << 16 | (buffer[i2 * 4 + 2] & 255) << 8 | buffer[i2 * 4 + 3] & 255;
            }
            else {
                var u2 = this.temp[i2 - 2];
                var t1_1 = (u2 >>> 17 | u2 << 15) ^ (u2 >>> 19 | u2 << 13) ^ u2 >>> 10;
                u2 = this.temp[i2 - 15];
                var t2_1 = (u2 >>> 7 | u2 << 25) ^ (u2 >>> 18 | u2 << 14) ^ u2 >>> 3;
                this.temp[i2] = (t1_1 + this.temp[i2 - 7] | 0) + (t2_1 + this.temp[i2 - 16] | 0);
            }
            var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (KEY[i2] + this.temp[i2] | 0) | 0) | 0;
            var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
            state7 = state6;
            state6 = state5;
            state5 = state4;
            state4 = state3 + t1 | 0;
            state3 = state2;
            state2 = state1;
            state1 = state0;
            state0 = t1 + t2 | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
    };
    return RawSha2562;
}();
// node_modules/@aws-sdk/client-cognito-identity/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
var Sha2562 = /** @class */ function () {
    function Sha2564(secret) {
        this.secret = secret;
        this.hash = new RawSha256();
        this.reset();
    }
    Sha2564.prototype.update = function (toHash) {
        if (isEmptyData(toHash) || this.error) {
            return;
        }
        try {
            this.hash.update(convertToBuffer(toHash));
        }
        catch (e2) {
            this.error = e2;
        }
    };
    Sha2564.prototype.digestSync = function () {
        if (this.error) {
            throw this.error;
        }
        if (this.outer) {
            if (!this.outer.finished) {
                this.outer.update(this.hash.digest());
            }
            return this.outer.digest();
        }
        return this.hash.digest();
    };
    Sha2564.prototype.digest = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.digestSync()];
            });
        });
    };
    Sha2564.prototype.reset = function () {
        this.hash = new RawSha256();
        if (this.secret) {
            this.outer = new RawSha256();
            var inner = bufferFromSecret(this.secret);
            var outer = new Uint8Array(BLOCK_SIZE);
            outer.set(inner);
            for (var i2 = 0; i2 < BLOCK_SIZE; i2++) {
                inner[i2] ^= 54;
                outer[i2] ^= 92;
            }
            this.hash.update(inner);
            this.outer.update(outer);
            for (var i2 = 0; i2 < inner.byteLength; i2++) {
                inner[i2] = 0;
            }
        }
    };
    return Sha2564;
}();
function bufferFromSecret(secret) {
    var input = convertToBuffer(secret);
    if (input.byteLength > BLOCK_SIZE) {
        var bufferHash = new RawSha256();
        bufferHash.update(input);
        input = bufferHash.digest();
    }
    var buffer = new Uint8Array(BLOCK_SIZE);
    buffer.set(input);
    return buffer;
}
// node_modules/@aws-sdk/client-cognito-identity/node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js
import { __awaiter as __awaiter2, __generator as __generator2 } from "tslib";
var subtleCryptoMethods = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
function supportsWebCrypto(window) {
    if (supportsSecureRandom(window) && typeof window.crypto.subtle === "object") {
        var subtle = window.crypto.subtle;
        return supportsSubtleCrypto(subtle);
    }
    return false;
}
function supportsSecureRandom(window) {
    if (typeof window === "object" && typeof window.crypto === "object") {
        var getRandomValues = window.crypto.getRandomValues;
        return typeof getRandomValues === "function";
    }
    return false;
}
function supportsSubtleCrypto(subtle) {
    return subtle && subtleCryptoMethods.every(function (methodName) {
        return typeof subtle[methodName] === "function";
    });
}
// node_modules/@aws-sdk/client-cognito-identity/node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js
var Sha2563 = /** @class */ function () {
    function Sha2564(secret) {
        if (supportsWebCrypto(locateWindow())) {
            this.hash = new Sha256(secret);
        }
        else {
            this.hash = new Sha2562(secret);
        }
    }
    Sha2564.prototype.update = function (data, encoding) {
        this.hash.update(convertToBuffer(data));
    };
    Sha2564.prototype.digest = function () {
        return this.hash.digest();
    };
    Sha2564.prototype.reset = function () {
        this.hash.reset();
    };
    return Sha2564;
}();
// node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/ruleset.js
var w = "required";
var x = "fn";
var y = "argv";
var z = "ref";
var a = true;
var b = "isSet";
var c = "booleanEquals";
var d = "error";
var e = "endpoint";
var f = "tree";
var g = "PartitionResult";
var h = "getAttr";
var i = "stringEquals";
var j = {
    [w]: false,
    "type": "string"
};
var k = {
    [w]: true,
    "default": false,
    "type": "boolean"
};
var l = {
    [z]: "Endpoint"
};
var m = {
    [x]: c,
    [y]: [{
            [z]: "UseFIPS"
        }, true]
};
var n = {
    [x]: c,
    [y]: [{
            [z]: "UseDualStack"
        }, true]
};
var o = {};
var p = {
    [z]: "Region"
};
var q = {
    [x]: h,
    [y]: [{
            [z]: g
        }, "supportsFIPS"]
};
var r = {
    [z]: g
};
var s = {
    [x]: c,
    [y]: [true, {
            [x]: h,
            [y]: [r, "supportsDualStack"]
        }]
};
var t = [m];
var u = [n];
var v = [p];
var _data = {
    version: "1.0",
    parameters: {
        Region: j,
        UseDualStack: k,
        UseFIPS: k,
        Endpoint: j
    },
    rules: [{
            conditions: [{
                    [x]: b,
                    [y]: [l]
                }],
            rules: [{
                    conditions: t,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: d
                }, {
                    conditions: u,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: d
                }, {
                    endpoint: {
                        url: l,
                        properties: o,
                        headers: o
                    },
                    type: e
                }],
            type: f
        }, {
            conditions: [{
                    [x]: b,
                    [y]: v
                }],
            rules: [{
                    conditions: [{
                            [x]: "aws.partition",
                            [y]: v,
                            assign: g
                        }],
                    rules: [{
                            conditions: [m, n],
                            rules: [{
                                    conditions: [{
                                            [x]: c,
                                            [y]: [a, q]
                                        }, s],
                                    rules: [{
                                            conditions: [{
                                                    [x]: i,
                                                    [y]: [p, "us-east-1"]
                                                }],
                                            endpoint: {
                                                url: "https://cognito-identity-fips.us-east-1.amazonaws.com",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        }, {
                                            conditions: [{
                                                    [x]: i,
                                                    [y]: [p, "us-east-2"]
                                                }],
                                            endpoint: {
                                                url: "https://cognito-identity-fips.us-east-2.amazonaws.com",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        }, {
                                            conditions: [{
                                                    [x]: i,
                                                    [y]: [p, "us-west-1"]
                                                }],
                                            endpoint: {
                                                url: "https://cognito-identity-fips.us-west-1.amazonaws.com",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        }, {
                                            conditions: [{
                                                    [x]: i,
                                                    [y]: [p, "us-west-2"]
                                                }],
                                            endpoint: {
                                                url: "https://cognito-identity-fips.us-west-2.amazonaws.com",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        }, {
                                            endpoint: {
                                                url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        }],
                                    type: f
                                }, {
                                    error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                                    type: d
                                }],
                            type: f
                        }, {
                            conditions: t,
                            rules: [{
                                    conditions: [{
                                            [x]: c,
                                            [y]: [q, a]
                                        }],
                                    rules: [{
                                            endpoint: {
                                                url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        }],
                                    type: f
                                }, {
                                    error: "FIPS is enabled but this partition does not support FIPS",
                                    type: d
                                }],
                            type: f
                        }, {
                            conditions: u,
                            rules: [{
                                    conditions: [s],
                                    rules: [{
                                            conditions: [{
                                                    [x]: i,
                                                    [y]: ["aws", {
                                                            [x]: h,
                                                            [y]: [r, "name"]
                                                        }]
                                                }],
                                            endpoint: {
                                                url: "https://cognito-identity.{Region}.amazonaws.com",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        }, {
                                            endpoint: {
                                                url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        }],
                                    type: f
                                }, {
                                    error: "DualStack is enabled but this partition does not support DualStack",
                                    type: d
                                }],
                            type: f
                        }, {
                            endpoint: {
                                url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",
                                properties: o,
                                headers: o
                            },
                            type: e
                        }],
                    type: f
                }],
            type: f
        }, {
            error: "Invalid Configuration: Missing Region",
            type: d
        }]
};
var ruleSet = _data;
// node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/endpointResolver.js
var cache = new EndpointCache({
    size: 50,
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
});
var defaultEndpointResolver = (endpointParams, context = {}) => {
    return cache.get(endpointParams, () => resolveEndpoint(ruleSet, {
        endpointParams,
        logger: context.logger
    }));
};
customEndpointFunctions.aws = awsEndpointFunctions;
// node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.shared.js
var getRuntimeConfig = config => {
    return {
        apiVersion: "2014-06-30",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultCognitoIdentityHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [{
                schemeId: "aws.auth#sigv4",
                identityProvider: ipc => ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new AwsSdkSigV4Signer()
            }, {
                schemeId: "smithy.api#noAuth",
                identityProvider: ipc => ipc.getIdentityProvider("smithy.api#noAuth") || (() => __async(null, null, function* () {
                    return {};
                })),
                signer: new NoAuthSigner()
            }],
        logger: config?.logger ?? new NoOpLogger(),
        protocol: config?.protocol ?? AwsJson1_1Protocol,
        protocolSettings: config?.protocolSettings ?? {
            defaultNamespace: "com.amazonaws.cognitoidentity",
            xmlNamespace: "http://cognito-identity.amazonaws.com/doc/2014-06-30/",
            version: "2014-06-30",
            serviceTarget: "AWSCognitoIdentityService"
        },
        serviceId: config?.serviceId ?? "Cognito Identity",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8
    };
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.browser.js
var getRuntimeConfig2 = config => {
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getRuntimeConfig(config);
    return __spreadProps(__spreadValues(__spreadValues({}, clientSharedValues), config), {
        runtime: "browser",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? (_ => () => Promise.reject(new Error("Credential is missing"))),
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({
            serviceId: clientSharedValues.serviceId,
            clientVersion: package_default.version
        }),
        maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
        region: config?.region ?? invalidProvider("Region is missing"),
        requestHandler: FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (() => __async(null, null, function* () {
            return (yield defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE;
        })),
        sha256: config?.sha256 ?? Sha2563,
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
        useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
    });
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration = runtimeConfig => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex(scheme => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        }
    };
};
var resolveHttpAuthRuntimeConfig = config => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
    };
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeExtensions.js
var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
    extensions.forEach(extension => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentityClient.js
var CognitoIdentityClient = class extends Client {
    config;
    constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig2(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveUserAgentConfig(_config_1);
        const _config_3 = resolveRetryConfig(_config_2);
        const _config_4 = resolveRegionConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveEndpointConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use(getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: defaultCognitoIdentityHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: config => __async(this, null, function* () {
                return new DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": config.credentials
                });
            })
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js
var CognitoIdentityServiceException = class _CognitoIdentityServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _CognitoIdentityServiceException.prototype);
    }
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/models/errors.js
var InternalErrorException = class _InternalErrorException extends CognitoIdentityServiceException {
    name = "InternalErrorException";
    $fault = "server";
    constructor(opts) {
        super(__spreadValues({
            name: "InternalErrorException",
            $fault: "server"
        }, opts));
        Object.setPrototypeOf(this, _InternalErrorException.prototype);
    }
};
var InvalidParameterException = class _InvalidParameterException extends CognitoIdentityServiceException {
    name = "InvalidParameterException";
    $fault = "client";
    constructor(opts) {
        super(__spreadValues({
            name: "InvalidParameterException",
            $fault: "client"
        }, opts));
        Object.setPrototypeOf(this, _InvalidParameterException.prototype);
    }
};
var LimitExceededException = class _LimitExceededException extends CognitoIdentityServiceException {
    name = "LimitExceededException";
    $fault = "client";
    constructor(opts) {
        super(__spreadValues({
            name: "LimitExceededException",
            $fault: "client"
        }, opts));
        Object.setPrototypeOf(this, _LimitExceededException.prototype);
    }
};
var NotAuthorizedException = class _NotAuthorizedException extends CognitoIdentityServiceException {
    name = "NotAuthorizedException";
    $fault = "client";
    constructor(opts) {
        super(__spreadValues({
            name: "NotAuthorizedException",
            $fault: "client"
        }, opts));
        Object.setPrototypeOf(this, _NotAuthorizedException.prototype);
    }
};
var ResourceConflictException = class _ResourceConflictException extends CognitoIdentityServiceException {
    name = "ResourceConflictException";
    $fault = "client";
    constructor(opts) {
        super(__spreadValues({
            name: "ResourceConflictException",
            $fault: "client"
        }, opts));
        Object.setPrototypeOf(this, _ResourceConflictException.prototype);
    }
};
var TooManyRequestsException = class _TooManyRequestsException extends CognitoIdentityServiceException {
    name = "TooManyRequestsException";
    $fault = "client";
    constructor(opts) {
        super(__spreadValues({
            name: "TooManyRequestsException",
            $fault: "client"
        }, opts));
        Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
    }
};
var ResourceNotFoundException = class _ResourceNotFoundException extends CognitoIdentityServiceException {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(opts) {
        super(__spreadValues({
            name: "ResourceNotFoundException",
            $fault: "client"
        }, opts));
        Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
    }
};
var ExternalServiceException = class _ExternalServiceException extends CognitoIdentityServiceException {
    name = "ExternalServiceException";
    $fault = "client";
    constructor(opts) {
        super(__spreadValues({
            name: "ExternalServiceException",
            $fault: "client"
        }, opts));
        Object.setPrototypeOf(this, _ExternalServiceException.prototype);
    }
};
var InvalidIdentityPoolConfigurationException = class _InvalidIdentityPoolConfigurationException extends CognitoIdentityServiceException {
    name = "InvalidIdentityPoolConfigurationException";
    $fault = "client";
    constructor(opts) {
        super(__spreadValues({
            name: "InvalidIdentityPoolConfigurationException",
            $fault: "client"
        }, opts));
        Object.setPrototypeOf(this, _InvalidIdentityPoolConfigurationException.prototype);
    }
};
var DeveloperUserAlreadyRegisteredException = class _DeveloperUserAlreadyRegisteredException extends CognitoIdentityServiceException {
    name = "DeveloperUserAlreadyRegisteredException";
    $fault = "client";
    constructor(opts) {
        super(__spreadValues({
            name: "DeveloperUserAlreadyRegisteredException",
            $fault: "client"
        }, opts));
        Object.setPrototypeOf(this, _DeveloperUserAlreadyRegisteredException.prototype);
    }
};
var ConcurrentModificationException = class _ConcurrentModificationException extends CognitoIdentityServiceException {
    name = "ConcurrentModificationException";
    $fault = "client";
    constructor(opts) {
        super(__spreadValues({
            name: "ConcurrentModificationException",
            $fault: "client"
        }, opts));
        Object.setPrototypeOf(this, _ConcurrentModificationException.prototype);
    }
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/schemas/schemas_0.js
var _ACF = "AllowClassicFlow";
var _AI = "AccountId";
var _AKI = "AccessKeyId";
var _ARR = "AmbiguousRoleResolution";
var _AUI = "AllowUnauthenticatedIdentities";
var _C = "Credentials";
var _CD = "CreationDate";
var _CI = "ClientId";
var _CIP = "CognitoIdentityProvider";
var _CIPI = "CreateIdentityPoolInput";
var _CIPL = "CognitoIdentityProviderList";
var _CIPo = "CognitoIdentityProviders";
var _CIPr = "CreateIdentityPool";
var _CME = "ConcurrentModificationException";
var _CRA = "CustomRoleArn";
var _Cl = "Claim";
var _DI = "DeleteIdentities";
var _DII = "DeleteIdentitiesInput";
var _DIIe = "DescribeIdentityInput";
var _DIP = "DeleteIdentityPool";
var _DIPI = "DeleteIdentityPoolInput";
var _DIPIe = "DescribeIdentityPoolInput";
var _DIPe = "DescribeIdentityPool";
var _DIR = "DeleteIdentitiesResponse";
var _DIe = "DescribeIdentity";
var _DPN = "DeveloperProviderName";
var _DUARE = "DeveloperUserAlreadyRegisteredException";
var _DUI = "DeveloperUserIdentifier";
var _DUIL = "DeveloperUserIdentifierList";
var _DUIe = "DestinationUserIdentifier";
var _E = "Expiration";
var _EC = "ErrorCode";
var _ESE = "ExternalServiceException";
var _GCFI = "GetCredentialsForIdentity";
var _GCFII = "GetCredentialsForIdentityInput";
var _GCFIR = "GetCredentialsForIdentityResponse";
var _GI = "GetId";
var _GII = "GetIdInput";
var _GIPR = "GetIdentityPoolRoles";
var _GIPRI = "GetIdentityPoolRolesInput";
var _GIPRR = "GetIdentityPoolRolesResponse";
var _GIR = "GetIdResponse";
var _GOIT = "GetOpenIdToken";
var _GOITFDI = "GetOpenIdTokenForDeveloperIdentity";
var _GOITFDII = "GetOpenIdTokenForDeveloperIdentityInput";
var _GOITFDIR = "GetOpenIdTokenForDeveloperIdentityResponse";
var _GOITI = "GetOpenIdTokenInput";
var _GOITR = "GetOpenIdTokenResponse";
var _GPTAM = "GetPrincipalTagAttributeMap";
var _GPTAMI = "GetPrincipalTagAttributeMapInput";
var _GPTAMR = "GetPrincipalTagAttributeMapResponse";
var _HD = "HideDisabled";
var _I = "Identities";
var _ID = "IdentityDescription";
var _IEE = "InternalErrorException";
var _II = "IdentityId";
var _IIPCE = "InvalidIdentityPoolConfigurationException";
var _IITD = "IdentityIdsToDelete";
var _IL = "IdentitiesList";
var _IP = "IdentityPool";
var _IPE = "InvalidParameterException";
var _IPI = "IdentityPoolId";
var _IPL = "IdentityPoolsList";
var _IPN = "IdentityPoolName";
var _IPNd = "IdentityProviderName";
var _IPSD = "IdentityPoolShortDescription";
var _IPT = "IdentityProviderToken";
var _IPTd = "IdentityPoolTags";
var _IPd = "IdentityPools";
var _L = "Logins";
var _LDI = "LookupDeveloperIdentity";
var _LDII = "LookupDeveloperIdentityInput";
var _LDIR = "LookupDeveloperIdentityResponse";
var _LEE = "LimitExceededException";
var _LI = "ListIdentities";
var _LII = "ListIdentitiesInput";
var _LIP = "ListIdentityPools";
var _LIPI = "ListIdentityPoolsInput";
var _LIPR = "ListIdentityPoolsResponse";
var _LIR = "ListIdentitiesResponse";
var _LM = "LoginsMap";
var _LMD = "LastModifiedDate";
var _LTFR = "ListTagsForResource";
var _LTFRI = "ListTagsForResourceInput";
var _LTFRR = "ListTagsForResourceResponse";
var _LTR = "LoginsToRemove";
var _MDI = "MergeDeveloperIdentities";
var _MDII = "MergeDeveloperIdentitiesInput";
var _MDIR = "MergeDeveloperIdentitiesResponse";
var _MR = "MaxResults";
var _MRL = "MappingRulesList";
var _MRa = "MappingRule";
var _MT = "MatchType";
var _NAE = "NotAuthorizedException";
var _NT = "NextToken";
var _OICPARN = "OpenIdConnectProviderARNs";
var _OIDCT = "OIDCToken";
var _PN = "ProviderName";
var _PT = "PrincipalTags";
var _R = "Roles";
var _RA = "ResourceArn";
var _RARN = "RoleARN";
var _RC = "RulesConfiguration";
var _RCE = "ResourceConflictException";
var _RCT = "RulesConfigurationType";
var _RM = "RoleMappings";
var _RMM = "RoleMappingMap";
var _RMo = "RoleMapping";
var _RNFE = "ResourceNotFoundException";
var _Ru = "Rules";
var _SIPR = "SetIdentityPoolRoles";
var _SIPRI = "SetIdentityPoolRolesInput";
var _SK = "SecretKey";
var _SKS = "SecretKeyString";
var _SLP = "SupportedLoginProviders";
var _SPARN = "SamlProviderARNs";
var _SPTAM = "SetPrincipalTagAttributeMap";
var _SPTAMI = "SetPrincipalTagAttributeMapInput";
var _SPTAMR = "SetPrincipalTagAttributeMapResponse";
var _SSTC = "ServerSideTokenCheck";
var _ST = "SessionToken";
var _SUI = "SourceUserIdentifier";
var _T = "Token";
var _TD = "TokenDuration";
var _TK = "TagKeys";
var _TMRE = "TooManyRequestsException";
var _TR = "TagResource";
var _TRI = "TagResourceInput";
var _TRR = "TagResourceResponse";
var _Ta = "Tags";
var _Ty = "Type";
var _UD = "UseDefaults";
var _UDI = "UnlinkDeveloperIdentity";
var _UDII = "UnlinkDeveloperIdentityInput";
var _UI = "UnlinkIdentity";
var _UII = "UnprocessedIdentityIds";
var _UIIL = "UnprocessedIdentityIdList";
var _UIIn = "UnlinkIdentityInput";
var _UIInp = "UnprocessedIdentityId";
var _UIP = "UpdateIdentityPool";
var _UR = "UntagResource";
var _URI = "UntagResourceInput";
var _URR = "UntagResourceResponse";
var _V = "Value";
var _c = "client";
var _e = "error";
var _hE = "httpError";
var _m = "message";
var _s = "server";
var _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cognitoidentity";
var n0 = "com.amazonaws.cognitoidentity";
var IdentityProviderToken = [0, n0, _IPT, 8, 0];
var OIDCToken = [0, n0, _OIDCT, 8, 0];
var SecretKeyString = [0, n0, _SKS, 8, 0];
var CognitoIdentityProvider$ = [3, n0, _CIP, 0, [_PN, _CI, _SSTC], [0, 0, 2]];
var ConcurrentModificationException$ = [-3, n0, _CME, {
        [_e]: _c,
        [_hE]: 400
    }, [_m], [0]];
TypeRegistry.for(n0).registerError(ConcurrentModificationException$, ConcurrentModificationException);
var CreateIdentityPoolInput$ = [3, n0, _CIPI, 0, [_IPN, _AUI, _ACF, _SLP, _DPN, _OICPARN, _CIPo, _SPARN, _IPTd], [0, 2, 2, 128 | 0, 0, 64 | 0, () => CognitoIdentityProviderList, 64 | 0, 128 | 0]];
var Credentials$ = [3, n0, _C, 0, [_AKI, _SK, _ST, _E], [0, [() => SecretKeyString, 0], 0, 4]];
var DeleteIdentitiesInput$ = [3, n0, _DII, 0, [_IITD], [64 | 0]];
var DeleteIdentitiesResponse$ = [3, n0, _DIR, 0, [_UII], [() => UnprocessedIdentityIdList]];
var DeleteIdentityPoolInput$ = [3, n0, _DIPI, 0, [_IPI], [0]];
var DescribeIdentityInput$ = [3, n0, _DIIe, 0, [_II], [0]];
var DescribeIdentityPoolInput$ = [3, n0, _DIPIe, 0, [_IPI], [0]];
var DeveloperUserAlreadyRegisteredException$ = [-3, n0, _DUARE, {
        [_e]: _c,
        [_hE]: 400
    }, [_m], [0]];
TypeRegistry.for(n0).registerError(DeveloperUserAlreadyRegisteredException$, DeveloperUserAlreadyRegisteredException);
var ExternalServiceException$ = [-3, n0, _ESE, {
        [_e]: _c,
        [_hE]: 400
    }, [_m], [0]];
TypeRegistry.for(n0).registerError(ExternalServiceException$, ExternalServiceException);
var GetCredentialsForIdentityInput$ = [3, n0, _GCFII, 0, [_II, _L, _CRA], [0, [() => LoginsMap, 0], 0]];
var GetCredentialsForIdentityResponse$ = [3, n0, _GCFIR, 0, [_II, _C], [0, [() => Credentials$, 0]]];
var GetIdentityPoolRolesInput$ = [3, n0, _GIPRI, 0, [_IPI], [0]];
var GetIdentityPoolRolesResponse$ = [3, n0, _GIPRR, 0, [_IPI, _R, _RM], [0, 128 | 0, () => RoleMappingMap]];
var GetIdInput$ = [3, n0, _GII, 0, [_AI, _IPI, _L], [0, 0, [() => LoginsMap, 0]]];
var GetIdResponse$ = [3, n0, _GIR, 0, [_II], [0]];
var GetOpenIdTokenForDeveloperIdentityInput$ = [3, n0, _GOITFDII, 0, [_IPI, _II, _L, _PT, _TD], [0, 0, [() => LoginsMap, 0], 128 | 0, 1]];
var GetOpenIdTokenForDeveloperIdentityResponse$ = [3, n0, _GOITFDIR, 0, [_II, _T], [0, [() => OIDCToken, 0]]];
var GetOpenIdTokenInput$ = [3, n0, _GOITI, 0, [_II, _L], [0, [() => LoginsMap, 0]]];
var GetOpenIdTokenResponse$ = [3, n0, _GOITR, 0, [_II, _T], [0, [() => OIDCToken, 0]]];
var GetPrincipalTagAttributeMapInput$ = [3, n0, _GPTAMI, 0, [_IPI, _IPNd], [0, 0]];
var GetPrincipalTagAttributeMapResponse$ = [3, n0, _GPTAMR, 0, [_IPI, _IPNd, _UD, _PT], [0, 0, 2, 128 | 0]];
var IdentityDescription$ = [3, n0, _ID, 0, [_II, _L, _CD, _LMD], [0, 64 | 0, 4, 4]];
var IdentityPool$ = [3, n0, _IP, 0, [_IPI, _IPN, _AUI, _ACF, _SLP, _DPN, _OICPARN, _CIPo, _SPARN, _IPTd], [0, 0, 2, 2, 128 | 0, 0, 64 | 0, () => CognitoIdentityProviderList, 64 | 0, 128 | 0]];
var IdentityPoolShortDescription$ = [3, n0, _IPSD, 0, [_IPI, _IPN], [0, 0]];
var InternalErrorException$ = [-3, n0, _IEE, {
        [_e]: _s
    }, [_m], [0]];
TypeRegistry.for(n0).registerError(InternalErrorException$, InternalErrorException);
var InvalidIdentityPoolConfigurationException$ = [-3, n0, _IIPCE, {
        [_e]: _c,
        [_hE]: 400
    }, [_m], [0]];
TypeRegistry.for(n0).registerError(InvalidIdentityPoolConfigurationException$, InvalidIdentityPoolConfigurationException);
var InvalidParameterException$ = [-3, n0, _IPE, {
        [_e]: _c,
        [_hE]: 400
    }, [_m], [0]];
TypeRegistry.for(n0).registerError(InvalidParameterException$, InvalidParameterException);
var LimitExceededException$ = [-3, n0, _LEE, {
        [_e]: _c,
        [_hE]: 400
    }, [_m], [0]];
TypeRegistry.for(n0).registerError(LimitExceededException$, LimitExceededException);
var ListIdentitiesInput$ = [3, n0, _LII, 0, [_IPI, _MR, _NT, _HD], [0, 1, 0, 2]];
var ListIdentitiesResponse$ = [3, n0, _LIR, 0, [_IPI, _I, _NT], [0, () => IdentitiesList, 0]];
var ListIdentityPoolsInput$ = [3, n0, _LIPI, 0, [_MR, _NT], [1, 0]];
var ListIdentityPoolsResponse$ = [3, n0, _LIPR, 0, [_IPd, _NT], [() => IdentityPoolsList, 0]];
var ListTagsForResourceInput$ = [3, n0, _LTFRI, 0, [_RA], [0]];
var ListTagsForResourceResponse$ = [3, n0, _LTFRR, 0, [_Ta], [128 | 0]];
var LookupDeveloperIdentityInput$ = [3, n0, _LDII, 0, [_IPI, _II, _DUI, _MR, _NT], [0, 0, 0, 1, 0]];
var LookupDeveloperIdentityResponse$ = [3, n0, _LDIR, 0, [_II, _DUIL, _NT], [0, 64 | 0, 0]];
var MappingRule$ = [3, n0, _MRa, 0, [_Cl, _MT, _V, _RARN], [0, 0, 0, 0]];
var MergeDeveloperIdentitiesInput$ = [3, n0, _MDII, 0, [_SUI, _DUIe, _DPN, _IPI], [0, 0, 0, 0]];
var MergeDeveloperIdentitiesResponse$ = [3, n0, _MDIR, 0, [_II], [0]];
var NotAuthorizedException$ = [-3, n0, _NAE, {
        [_e]: _c,
        [_hE]: 403
    }, [_m], [0]];
TypeRegistry.for(n0).registerError(NotAuthorizedException$, NotAuthorizedException);
var ResourceConflictException$ = [-3, n0, _RCE, {
        [_e]: _c,
        [_hE]: 409
    }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceConflictException$, ResourceConflictException);
var ResourceNotFoundException$ = [-3, n0, _RNFE, {
        [_e]: _c,
        [_hE]: 404
    }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
var RoleMapping$ = [3, n0, _RMo, 0, [_Ty, _ARR, _RC], [0, 0, () => RulesConfigurationType$]];
var RulesConfigurationType$ = [3, n0, _RCT, 0, [_Ru], [() => MappingRulesList]];
var SetIdentityPoolRolesInput$ = [3, n0, _SIPRI, 0, [_IPI, _R, _RM], [0, 128 | 0, () => RoleMappingMap]];
var SetPrincipalTagAttributeMapInput$ = [3, n0, _SPTAMI, 0, [_IPI, _IPNd, _UD, _PT], [0, 0, 2, 128 | 0]];
var SetPrincipalTagAttributeMapResponse$ = [3, n0, _SPTAMR, 0, [_IPI, _IPNd, _UD, _PT], [0, 0, 2, 128 | 0]];
var TagResourceInput$ = [3, n0, _TRI, 0, [_RA, _Ta], [0, 128 | 0]];
var TagResourceResponse$ = [3, n0, _TRR, 0, [], []];
var TooManyRequestsException$ = [-3, n0, _TMRE, {
        [_e]: _c,
        [_hE]: 429
    }, [_m], [0]];
TypeRegistry.for(n0).registerError(TooManyRequestsException$, TooManyRequestsException);
var UnlinkDeveloperIdentityInput$ = [3, n0, _UDII, 0, [_II, _IPI, _DPN, _DUI], [0, 0, 0, 0]];
var UnlinkIdentityInput$ = [3, n0, _UIIn, 0, [_II, _L, _LTR], [0, [() => LoginsMap, 0], 64 | 0]];
var UnprocessedIdentityId$ = [3, n0, _UIInp, 0, [_II, _EC], [0, 0]];
var UntagResourceInput$ = [3, n0, _URI, 0, [_RA, _TK], [0, 64 | 0]];
var UntagResourceResponse$ = [3, n0, _URR, 0, [], []];
var __Unit = "unit";
var CognitoIdentityServiceException$ = [-3, _sm, "CognitoIdentityServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(CognitoIdentityServiceException$, CognitoIdentityServiceException);
var CognitoIdentityProviderList = [1, n0, _CIPL, 0, () => CognitoIdentityProvider$];
var DeveloperUserIdentifierList = 64 | 0;
var IdentitiesList = [1, n0, _IL, 0, () => IdentityDescription$];
var IdentityIdList = 64 | 0;
var IdentityPoolsList = [1, n0, _IPL, 0, () => IdentityPoolShortDescription$];
var IdentityPoolTagsListType = 64 | 0;
var LoginsList = 64 | 0;
var MappingRulesList = [1, n0, _MRL, 0, () => MappingRule$];
var OIDCProviderList = 64 | 0;
var SAMLProviderList = 64 | 0;
var UnprocessedIdentityIdList = [1, n0, _UIIL, 0, () => UnprocessedIdentityId$];
var IdentityPoolTagsType = 128 | 0;
var IdentityProviders = 128 | 0;
var LoginsMap = [2, n0, _LM, 0, [0, 0], [() => IdentityProviderToken, 0]];
var PrincipalTags = 128 | 0;
var RoleMappingMap = [2, n0, _RMM, 0, 0, () => RoleMapping$];
var RolesMap = 128 | 0;
var CreateIdentityPool$ = [9, n0, _CIPr, 0, () => CreateIdentityPoolInput$, () => IdentityPool$];
var DeleteIdentities$ = [9, n0, _DI, 0, () => DeleteIdentitiesInput$, () => DeleteIdentitiesResponse$];
var DeleteIdentityPool$ = [9, n0, _DIP, 0, () => DeleteIdentityPoolInput$, () => __Unit];
var DescribeIdentity$ = [9, n0, _DIe, 0, () => DescribeIdentityInput$, () => IdentityDescription$];
var DescribeIdentityPool$ = [9, n0, _DIPe, 0, () => DescribeIdentityPoolInput$, () => IdentityPool$];
var GetCredentialsForIdentity$ = [9, n0, _GCFI, 0, () => GetCredentialsForIdentityInput$, () => GetCredentialsForIdentityResponse$];
var GetId$ = [9, n0, _GI, 0, () => GetIdInput$, () => GetIdResponse$];
var GetIdentityPoolRoles$ = [9, n0, _GIPR, 0, () => GetIdentityPoolRolesInput$, () => GetIdentityPoolRolesResponse$];
var GetOpenIdToken$ = [9, n0, _GOIT, 0, () => GetOpenIdTokenInput$, () => GetOpenIdTokenResponse$];
var GetOpenIdTokenForDeveloperIdentity$ = [9, n0, _GOITFDI, 0, () => GetOpenIdTokenForDeveloperIdentityInput$, () => GetOpenIdTokenForDeveloperIdentityResponse$];
var GetPrincipalTagAttributeMap$ = [9, n0, _GPTAM, 0, () => GetPrincipalTagAttributeMapInput$, () => GetPrincipalTagAttributeMapResponse$];
var ListIdentities$ = [9, n0, _LI, 0, () => ListIdentitiesInput$, () => ListIdentitiesResponse$];
var ListIdentityPools$ = [9, n0, _LIP, 0, () => ListIdentityPoolsInput$, () => ListIdentityPoolsResponse$];
var ListTagsForResource$ = [9, n0, _LTFR, 0, () => ListTagsForResourceInput$, () => ListTagsForResourceResponse$];
var LookupDeveloperIdentity$ = [9, n0, _LDI, 0, () => LookupDeveloperIdentityInput$, () => LookupDeveloperIdentityResponse$];
var MergeDeveloperIdentities$ = [9, n0, _MDI, 0, () => MergeDeveloperIdentitiesInput$, () => MergeDeveloperIdentitiesResponse$];
var SetIdentityPoolRoles$ = [9, n0, _SIPR, 0, () => SetIdentityPoolRolesInput$, () => __Unit];
var SetPrincipalTagAttributeMap$ = [9, n0, _SPTAM, 0, () => SetPrincipalTagAttributeMapInput$, () => SetPrincipalTagAttributeMapResponse$];
var TagResource$ = [9, n0, _TR, 0, () => TagResourceInput$, () => TagResourceResponse$];
var UnlinkDeveloperIdentity$ = [9, n0, _UDI, 0, () => UnlinkDeveloperIdentityInput$, () => __Unit];
var UnlinkIdentity$ = [9, n0, _UI, 0, () => UnlinkIdentityInput$, () => __Unit];
var UntagResource$ = [9, n0, _UR, 0, () => UntagResourceInput$, () => UntagResourceResponse$];
var UpdateIdentityPool$ = [9, n0, _UIP, 0, () => IdentityPool$, () => IdentityPool$];
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/CreateIdentityPoolCommand.js
var CreateIdentityPoolCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "CreateIdentityPool", {}).n("CognitoIdentityClient", "CreateIdentityPoolCommand").sc(CreateIdentityPool$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DeleteIdentitiesCommand.js
var DeleteIdentitiesCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "DeleteIdentities", {}).n("CognitoIdentityClient", "DeleteIdentitiesCommand").sc(DeleteIdentities$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DeleteIdentityPoolCommand.js
var DeleteIdentityPoolCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "DeleteIdentityPool", {}).n("CognitoIdentityClient", "DeleteIdentityPoolCommand").sc(DeleteIdentityPool$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DescribeIdentityCommand.js
var DescribeIdentityCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "DescribeIdentity", {}).n("CognitoIdentityClient", "DescribeIdentityCommand").sc(DescribeIdentity$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DescribeIdentityPoolCommand.js
var DescribeIdentityPoolCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "DescribeIdentityPool", {}).n("CognitoIdentityClient", "DescribeIdentityPoolCommand").sc(DescribeIdentityPool$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetCredentialsForIdentityCommand.js
var GetCredentialsForIdentityCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").sc(GetCredentialsForIdentity$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdCommand.js
var GetIdCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").sc(GetId$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdentityPoolRolesCommand.js
var GetIdentityPoolRolesCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "GetIdentityPoolRoles", {}).n("CognitoIdentityClient", "GetIdentityPoolRolesCommand").sc(GetIdentityPoolRoles$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetOpenIdTokenCommand.js
var GetOpenIdTokenCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "GetOpenIdToken", {}).n("CognitoIdentityClient", "GetOpenIdTokenCommand").sc(GetOpenIdToken$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetOpenIdTokenForDeveloperIdentityCommand.js
var GetOpenIdTokenForDeveloperIdentityCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "GetOpenIdTokenForDeveloperIdentity", {}).n("CognitoIdentityClient", "GetOpenIdTokenForDeveloperIdentityCommand").sc(GetOpenIdTokenForDeveloperIdentity$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetPrincipalTagAttributeMapCommand.js
var GetPrincipalTagAttributeMapCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "GetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "GetPrincipalTagAttributeMapCommand").sc(GetPrincipalTagAttributeMap$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListIdentitiesCommand.js
var ListIdentitiesCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "ListIdentities", {}).n("CognitoIdentityClient", "ListIdentitiesCommand").sc(ListIdentities$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListIdentityPoolsCommand.js
var ListIdentityPoolsCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "ListIdentityPools", {}).n("CognitoIdentityClient", "ListIdentityPoolsCommand").sc(ListIdentityPools$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListTagsForResourceCommand.js
var ListTagsForResourceCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "ListTagsForResource", {}).n("CognitoIdentityClient", "ListTagsForResourceCommand").sc(ListTagsForResource$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/LookupDeveloperIdentityCommand.js
var LookupDeveloperIdentityCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "LookupDeveloperIdentity", {}).n("CognitoIdentityClient", "LookupDeveloperIdentityCommand").sc(LookupDeveloperIdentity$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/MergeDeveloperIdentitiesCommand.js
var MergeDeveloperIdentitiesCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "MergeDeveloperIdentities", {}).n("CognitoIdentityClient", "MergeDeveloperIdentitiesCommand").sc(MergeDeveloperIdentities$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/SetIdentityPoolRolesCommand.js
var SetIdentityPoolRolesCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "SetIdentityPoolRoles", {}).n("CognitoIdentityClient", "SetIdentityPoolRolesCommand").sc(SetIdentityPoolRoles$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/SetPrincipalTagAttributeMapCommand.js
var SetPrincipalTagAttributeMapCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "SetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "SetPrincipalTagAttributeMapCommand").sc(SetPrincipalTagAttributeMap$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/TagResourceCommand.js
var TagResourceCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "TagResource", {}).n("CognitoIdentityClient", "TagResourceCommand").sc(TagResource$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UnlinkDeveloperIdentityCommand.js
var UnlinkDeveloperIdentityCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "UnlinkDeveloperIdentity", {}).n("CognitoIdentityClient", "UnlinkDeveloperIdentityCommand").sc(UnlinkDeveloperIdentity$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UnlinkIdentityCommand.js
var UnlinkIdentityCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "UnlinkIdentity", {}).n("CognitoIdentityClient", "UnlinkIdentityCommand").sc(UnlinkIdentity$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UntagResourceCommand.js
var UntagResourceCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "UntagResource", {}).n("CognitoIdentityClient", "UntagResourceCommand").sc(UntagResource$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UpdateIdentityPoolCommand.js
var UpdateIdentityPoolCommand = class extends Command.classBuilder().ep(commonParams).m(function (Command2, cs, config, o2) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("AWSCognitoIdentityService", "UpdateIdentityPool", {}).n("CognitoIdentityClient", "UpdateIdentityPoolCommand").sc(UpdateIdentityPool$).build() {
};
// node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentity.js
var commands = {
    CreateIdentityPoolCommand,
    DeleteIdentitiesCommand,
    DeleteIdentityPoolCommand,
    DescribeIdentityCommand,
    DescribeIdentityPoolCommand,
    GetCredentialsForIdentityCommand,
    GetIdCommand,
    GetIdentityPoolRolesCommand,
    GetOpenIdTokenCommand,
    GetOpenIdTokenForDeveloperIdentityCommand,
    GetPrincipalTagAttributeMapCommand,
    ListIdentitiesCommand,
    ListIdentityPoolsCommand,
    ListTagsForResourceCommand,
    LookupDeveloperIdentityCommand,
    MergeDeveloperIdentitiesCommand,
    SetIdentityPoolRolesCommand,
    SetPrincipalTagAttributeMapCommand,
    TagResourceCommand,
    UnlinkDeveloperIdentityCommand,
    UnlinkIdentityCommand,
    UntagResourceCommand,
    UpdateIdentityPoolCommand
};
var CognitoIdentity = class extends CognitoIdentityClient {
};
createAggregatedClient(commands, CognitoIdentity);
// node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/ListIdentityPoolsPaginator.js
var paginateListIdentityPools = createPaginator(CognitoIdentityClient, ListIdentityPoolsCommand, "NextToken", "NextToken", "MaxResults");
// node_modules/@aws-sdk/client-cognito-identity/dist-es/models/enums.js
var AmbiguousRoleResolutionType = {
    AUTHENTICATED_ROLE: "AuthenticatedRole",
    DENY: "Deny"
};
var ErrorCode = {
    ACCESS_DENIED: "AccessDenied",
    INTERNAL_SERVER_ERROR: "InternalServerError"
};
var MappingRuleMatchType = {
    CONTAINS: "Contains",
    EQUALS: "Equals",
    NOT_EQUAL: "NotEqual",
    STARTS_WITH: "StartsWith"
};
var RoleMappingType = {
    RULES: "Rules",
    TOKEN: "Token"
};
export { Command as $Command, AmbiguousRoleResolutionType, CognitoIdentity, CognitoIdentityClient, CognitoIdentityProvider$, CognitoIdentityServiceException, CognitoIdentityServiceException$, ConcurrentModificationException, ConcurrentModificationException$, CreateIdentityPool$, CreateIdentityPoolCommand, CreateIdentityPoolInput$, Credentials$, DeleteIdentities$, DeleteIdentitiesCommand, DeleteIdentitiesInput$, DeleteIdentitiesResponse$, DeleteIdentityPool$, DeleteIdentityPoolCommand, DeleteIdentityPoolInput$, DescribeIdentity$, DescribeIdentityCommand, DescribeIdentityInput$, DescribeIdentityPool$, DescribeIdentityPoolCommand, DescribeIdentityPoolInput$, DeveloperUserAlreadyRegisteredException, DeveloperUserAlreadyRegisteredException$, ErrorCode, ExternalServiceException, ExternalServiceException$, GetCredentialsForIdentity$, GetCredentialsForIdentityCommand, GetCredentialsForIdentityInput$, GetCredentialsForIdentityResponse$, GetId$, GetIdCommand, GetIdInput$, GetIdResponse$, GetIdentityPoolRoles$, GetIdentityPoolRolesCommand, GetIdentityPoolRolesInput$, GetIdentityPoolRolesResponse$, GetOpenIdToken$, GetOpenIdTokenCommand, GetOpenIdTokenForDeveloperIdentity$, GetOpenIdTokenForDeveloperIdentityCommand, GetOpenIdTokenForDeveloperIdentityInput$, GetOpenIdTokenForDeveloperIdentityResponse$, GetOpenIdTokenInput$, GetOpenIdTokenResponse$, GetPrincipalTagAttributeMap$, GetPrincipalTagAttributeMapCommand, GetPrincipalTagAttributeMapInput$, GetPrincipalTagAttributeMapResponse$, IdentityDescription$, IdentityPool$, IdentityPoolShortDescription$, InternalErrorException, InternalErrorException$, InvalidIdentityPoolConfigurationException, InvalidIdentityPoolConfigurationException$, InvalidParameterException, InvalidParameterException$, LimitExceededException, LimitExceededException$, ListIdentities$, ListIdentitiesCommand, ListIdentitiesInput$, ListIdentitiesResponse$, ListIdentityPools$, ListIdentityPoolsCommand, ListIdentityPoolsInput$, ListIdentityPoolsResponse$, ListTagsForResource$, ListTagsForResourceCommand, ListTagsForResourceInput$, ListTagsForResourceResponse$, LookupDeveloperIdentity$, LookupDeveloperIdentityCommand, LookupDeveloperIdentityInput$, LookupDeveloperIdentityResponse$, MappingRule$, MappingRuleMatchType, MergeDeveloperIdentities$, MergeDeveloperIdentitiesCommand, MergeDeveloperIdentitiesInput$, MergeDeveloperIdentitiesResponse$, NotAuthorizedException, NotAuthorizedException$, ResourceConflictException, ResourceConflictException$, ResourceNotFoundException, ResourceNotFoundException$, RoleMapping$, RoleMappingType, RulesConfigurationType$, SetIdentityPoolRoles$, SetIdentityPoolRolesCommand, SetIdentityPoolRolesInput$, SetPrincipalTagAttributeMap$, SetPrincipalTagAttributeMapCommand, SetPrincipalTagAttributeMapInput$, SetPrincipalTagAttributeMapResponse$, TagResource$, TagResourceCommand, TagResourceInput$, TagResourceResponse$, TooManyRequestsException, TooManyRequestsException$, UnlinkDeveloperIdentity$, UnlinkDeveloperIdentityCommand, UnlinkDeveloperIdentityInput$, UnlinkIdentity$, UnlinkIdentityCommand, UnlinkIdentityInput$, UnprocessedIdentityId$, UntagResource$, UntagResourceCommand, UntagResourceInput$, UntagResourceResponse$, UpdateIdentityPool$, UpdateIdentityPoolCommand, Client as __Client, paginateListIdentityPools };
