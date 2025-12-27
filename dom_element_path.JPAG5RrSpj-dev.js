import { __commonJS } from "@nf-internal/chunk-VTXF2OHE";
// node_modules/dom-element-path/dist/dom-element-path.js
var require_dom_element_path = __commonJS({
    "node_modules/dom-element-path/dist/dom-element-path.js"(exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = exports.nthElement = exports.parentElements = void 0;
        var parentElements = function parentElements2(element) {
            var parents = [];
            while (element) {
                var tagName = element.nodeName.toLowerCase();
                var cssId = element.id ? "#".concat(element.id) : "";
                var cssClass = "";
                if (element.className && typeof element.className === "string") {
                    cssClass = ".".concat(element.className.replace(/\s+/g, ".").replace(/[:*+?^${}()|[\]\\]/gi, "\\$&"));
                }
                parents.unshift({
                    element,
                    selector: tagName + cssId + cssClass
                });
                element = element.parentNode !== document ? element.parentNode : false;
            }
            return parents;
        };
        exports.parentElements = parentElements;
        var nthElement = function nthElement2(element) {
            var sameType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            var c = element;
            var nth = 1;
            while (c.previousElementSibling !== null) {
                if (!sameType || c.previousElementSibling.nodeName === element.nodeName) {
                    nth++;
                }
                c = c.previousElementSibling;
            }
            return nth;
        };
        exports.nthElement = nthElement;
        var nthSelectorNeeded = function nthSelectorNeeded2(selector, path) {
            var querySelector = path === "" ? selector : "".concat(path, " > ").concat(selector);
            return document.querySelectorAll(querySelector).length > 1;
        };
        var buildPathString = function buildPathString2(parents) {
            var pathArr = [];
            parents.forEach(function (parent) {
                if (nthSelectorNeeded(parent.selector, pathArr.join(" > "))) {
                    parent.selector += ":nth-of-type(".concat(nthElement(parent.element), ")");
                }
                pathArr.push(parent.selector);
            });
            return pathArr.join(" > ");
        };
        var domElementPath = function domElementPath2(element) {
            if (!(element instanceof HTMLElement)) {
                throw new Error("element must be of type `HTMLElement`.");
            }
            return buildPathString(parentElements(element));
        };
        var _default = domElementPath;
        exports["default"] = _default;
    }
});
export default require_dom_element_path();
