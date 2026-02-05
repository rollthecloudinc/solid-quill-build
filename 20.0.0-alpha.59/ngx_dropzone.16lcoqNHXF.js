import { i as u } from "@nf-internal/chunk-2AVGQ2MQ";
import * as e from "@angular/core";
import { EventEmitter as z } from "@angular/core";
import * as f from "@angular/common";
import { CommonModule as I } from "@angular/common";
import * as h from "@angular/platform-browser";
var b = [[["ngx-dropzone-label"]]], x = ["ngx-dropzone-label"];
function w(n, s) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-remove-badge", 1), e.\u0275\u0275listener("click", function (o) { e.\u0275\u0275restoreView(t); let r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r._remove(o)); }), e.\u0275\u0275elementEnd();
} }
var P = ["fileInput"], M = [[["ngx-dropzone-preview"]], "*", [["ngx-dropzone-label"]]], N = ["ngx-dropzone-preview", "*", "ngx-dropzone-label"];
function O(n, s) { n & 1 && e.\u0275\u0275projection(0, 2, ["*ngIf", "!_hasPreviews"]); }
function k(n, s) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-remove-badge", 2), e.\u0275\u0275listener("click", function (o) { e.\u0275\u0275restoreView(t); let r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r._remove(o)); }), e.\u0275\u0275elementEnd();
} }
function F(n, s) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "video", 2), e.\u0275\u0275listener("click", function (o) { return e.\u0275\u0275restoreView(t), e.\u0275\u0275resetView(o.stopPropagation()); }), e.\u0275\u0275element(1, "source", 3), e.\u0275\u0275elementEnd();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("src", t.sanitizedVideoSrc, e.\u0275\u0275sanitizeUrl);
} }
function S(n, s) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-remove-badge", 4), e.\u0275\u0275listener("click", function (o) { e.\u0275\u0275restoreView(t); let r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r._remove(o)); }), e.\u0275\u0275elementEnd();
} }
var X = (() => { class n {
} return n.\u0275fac = function (t) { return new (t || n); }, n.\u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["ngx-dropzone-label"]], standalone: !1 }), n; })();
function g(n) { return n != null && `${n}` != "false"; }
function j(n) { return !isNaN(parseFloat(n)) && !isNaN(Number(n)) ? Number(n) : null; }
var y = (() => { class n {
} return n.\u0275fac = function (t) { return new (t || n); }, n.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["ngx-dropzone-remove-badge"]], standalone: !1, decls: 3, vars: 0, consts: [["x1", "0", "y1", "0", "x2", "10", "y2", "10"], ["x1", "0", "y1", "10", "x2", "10", "y2", "0"]], template: function (t, i) { t & 1 && (e.\u0275\u0275namespaceSVG(), e.\u0275\u0275elementStart(0, "svg"), e.\u0275\u0275element(1, "line", 0)(2, "line", 1), e.\u0275\u0275elementEnd()); }, styles: ["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke-width:2px;stroke:#fff}"] }), n; })(), v = (function (n) { return n[n.BACKSPACE = 8] = "BACKSPACE", n[n.DELETE = 46] = "DELETE", n; })(v || {}), m = (() => {
    class n {
        constructor(t) { this.sanitizer = t, this._removable = !1, this.removed = new z, this.tabIndex = 0; }
        set file(t) { this._file = t; }
        get file() { return this._file; }
        get removable() { return this._removable; }
        set removable(t) { this._removable = g(t); }
        keyEvent(t) { switch (t.keyCode) {
            case v.BACKSPACE:
            case v.DELETE:
                this.remove();
                break;
            default: break;
        } }
        get hostStyle() {
            return this.sanitizer.bypassSecurityTrustStyle(`
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`);
        }
        _remove(t) { t.stopPropagation(), this.remove(); }
        remove() { this._removable && this.removed.next(this.file); }
        readFile() { return u(this, null, function* () { return new Promise((t, i) => { let o = new FileReader; if (o.onload = r => { t(r.target.result); }, o.onerror = r => { console.error(`FileReader failed on file ${this.file.name}.`), i(r); }, !this.file)
            return i("No file to read. Please provide a file using the [file] Input property."); o.readAsDataURL(this.file); }); }); }
    }
    return n.\u0275fac = function (t) { return new (t || n)(e.\u0275\u0275directiveInject(h.DomSanitizer)); }, n.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["ngx-dropzone-preview"]], hostVars: 3, hostBindings: function (t, i) { t & 1 && e.\u0275\u0275listener("keyup", function (r) { return i.keyEvent(r); }), t & 2 && (e.\u0275\u0275domProperty("tabIndex", i.tabIndex), e.\u0275\u0275styleMap(i.hostStyle)); }, inputs: { file: "file", removable: "removable" }, outputs: { removed: "removed" }, standalone: !1, ngContentSelectors: x, decls: 2, vars: 1, consts: [[3, "click", 4, "ngIf"], [3, "click"]], template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(b), e.\u0275\u0275projection(0), e.\u0275\u0275template(1, w, 1, 0, "ngx-dropzone-remove-badge", 0)), t & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.removable)); }, dependencies: [y, f.NgIf], styles: ["[_nghost-%COMP%]{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"] }), n;
})(), C = (() => { class n {
    parseFileList(t, i, o, r) { let l = [], d = []; for (let c = 0; c < t.length; c++) {
        let p = t.item(c);
        if (!this.isAccepted(p, i)) {
            this.rejectFile(d, p, "type");
            continue;
        }
        if (o && p.size > o) {
            this.rejectFile(d, p, "size");
            continue;
        }
        if (!r && l.length >= 1) {
            this.rejectFile(d, p, "no_multiple");
            continue;
        }
        l.push(p);
    } return { addedFiles: l, rejectedFiles: d }; }
    isAccepted(t, i) { if (i === "*")
        return !0; let o = i.split(",").map(a => a.toLowerCase().trim()), r = t.type.toLowerCase(), l = t.name.toLowerCase(); return !!o.find(a => a.endsWith("/*") ? r.split("/")[0] === a.split("/")[0] : a.startsWith(".") ? l.endsWith(a) : a == r); }
    rejectFile(t, i, o) { let r = i; r.reason = o, t.push(r); }
} return n.\u0275fac = function (t) { return new (t || n); }, n.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }), n; })(), J = (() => { class n {
    constructor(t) { this.service = t, this.change = new z, this.accept = "*", this._disabled = !1, this._multiple = !0, this._maxFileSize = void 0, this._expandable = !1, this._disableClick = !1, this._processDirectoryDrop = !1, this._isHovered = !1; }
    get _hasPreviews() { return !!this._previewChildren.length; }
    get disabled() { return this._disabled; }
    set disabled(t) { this._disabled = g(t), this._isHovered && (this._isHovered = !1); }
    get multiple() { return this._multiple; }
    set multiple(t) { this._multiple = g(t); }
    get maxFileSize() { return this._maxFileSize; }
    set maxFileSize(t) { this._maxFileSize = j(t); }
    get expandable() { return this._expandable; }
    set expandable(t) { this._expandable = g(t); }
    get disableClick() { return this._disableClick; }
    set disableClick(t) { this._disableClick = g(t); }
    get processDirectoryDrop() { return this._processDirectoryDrop; }
    set processDirectoryDrop(t) { this._processDirectoryDrop = g(t); }
    _onClick() { this.disableClick || this.showFileSelector(); }
    _onDragOver(t) { this.disabled || (this.preventDefault(t), this._isHovered = !0); }
    _onDragLeave() { this._isHovered = !1; }
    _onDrop(t) { if (!this.disabled)
        if (this.preventDefault(t), this._isHovered = !1, !this.processDirectoryDrop || !DataTransferItem.prototype.webkitGetAsEntry)
            this.handleFileDrop(t.dataTransfer.files);
        else {
            let i = t.dataTransfer.items;
            if (i.length > 0) {
                let o = [], r = [];
                for (let d = 0; d < i.length; d++) {
                    let a = i[d].webkitGetAsEntry();
                    a.isFile ? o.push(t.dataTransfer.files[d]) : a.isDirectory && r.push(a);
                }
                let l = new DataTransfer;
                if (o.forEach(d => { l.items.add(d); }), !r.length && l.items.length && this.handleFileDrop(l.files), r.length) {
                    let d = [];
                    for (let a of r)
                        d.push(this.extractFilesFromDirectory(a));
                    Promise.all(d).then(a => { a.reduce((c, p) => [...c, ...p]).forEach(c => { l.items.add(c); }), this.handleFileDrop(l.files); });
                }
            }
        } }
    extractFilesFromDirectory(t) { function i(o) { return u(this, null, function* () { try {
        return yield new Promise((r, l) => o.file(r, l));
    }
    catch (r) {
        console.log("Error converting a fileEntry to a File: ", r);
    } }); } return new Promise((o, r) => { let l = [], d = t.createReader(), a = () => { d.readEntries(c => u(null, null, function* () { if (!c.length)
        o(l);
    else {
        let p = c.filter(_ => _.isFile);
        for (let _ of p) {
            let D = yield i(_);
            l.push(D);
        }
        a();
    } })); }; a(); }); }
    showFileSelector() { this.disabled || this._fileInput.nativeElement.click(); }
    _onFilesSelected(t) { let i = t.target.files; this.handleFileDrop(i), this._fileInput.nativeElement.value = "", this.preventDefault(t); }
    handleFileDrop(t) { let i = this.service.parseFileList(t, this.accept, this.maxFileSize, this.multiple); this.change.next({ addedFiles: i.addedFiles, rejectedFiles: i.rejectedFiles, source: this }); }
    preventDefault(t) { t.preventDefault(), t.stopPropagation(); }
} return n.\u0275fac = function (t) { return new (t || n)(e.\u0275\u0275directiveInject(C, 2)); }, n.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["ngx-dropzone"], ["", "ngx-dropzone", ""]], contentQueries: function (t, i, o) { if (t & 1 && e.\u0275\u0275contentQuery(o, m, 5), t & 2) {
        let r;
        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i._previewChildren = r);
    } }, viewQuery: function (t, i) { if (t & 1 && e.\u0275\u0275viewQuery(P, 7), t & 2) {
        let o;
        e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i._fileInput = o.first);
    } }, hostVars: 8, hostBindings: function (t, i) { t & 1 && e.\u0275\u0275listener("click", function () { return i._onClick(); })("dragover", function (r) { return i._onDragOver(r); })("dragleave", function () { return i._onDragLeave(); })("drop", function (r) { return i._onDrop(r); }), t & 2 && e.\u0275\u0275classProp("ngx-dz-disabled", i.disabled)("expandable", i.expandable)("unclickable", i.disableClick)("ngx-dz-hovered", i._isHovered); }, inputs: { accept: "accept", disabled: "disabled", multiple: "multiple", maxFileSize: "maxFileSize", expandable: "expandable", disableClick: "disableClick", processDirectoryDrop: "processDirectoryDrop", id: "id", ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"], ariaDescribedBy: [0, "aria-describedby", "ariaDescribedBy"] }, outputs: { change: "change" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([C])], ngContentSelectors: N, decls: 5, vars: 8, consts: [["fileInput", ""], ["type", "file", 3, "change", "id", "multiple", "accept", "disabled"], [4, "ngIf"]], template: function (t, i) { if (t & 1) {
        let o = e.\u0275\u0275getCurrentView();
        e.\u0275\u0275projectionDef(M), e.\u0275\u0275elementStart(0, "input", 1, 0), e.\u0275\u0275listener("change", function (l) { return e.\u0275\u0275restoreView(o), e.\u0275\u0275resetView(i._onFilesSelected(l)); }), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(2, O, 1, 0, "ng-content", 2), e.\u0275\u0275projection(3), e.\u0275\u0275projection(4, 1);
    } t & 2 && (e.\u0275\u0275property("id", i.id)("multiple", i.multiple)("accept", i.accept)("disabled", i.disabled), e.\u0275\u0275attribute("aria-label", i.ariaLabel)("aria-labelledby", i.ariaLabelledby)("aria-describedby", i.ariaDescribedBy), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngIf", !i._hasPreviews)); }, dependencies: [f.NgIf], styles: ["[_nghost-%COMP%]{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop;pointer-events:none}.expandable[_nghost-%COMP%]{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:1px dotted #000;outline:-webkit-focus-ring-color auto 5px}"] }), n; })(), Q = (() => { class n extends m {
    constructor(t) { super(t), this.defaultImgLoading = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==", this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(this.defaultImgLoading); }
    set file(t) { this._file = t, this.renderImage(); }
    get file() { return this._file; }
    ngOnInit() { this.renderImage(); }
    renderImage() { this.readFile().then(t => setTimeout(() => this.imageSrc = t)).catch(t => console.error(t)); }
} return n.\u0275fac = function (t) { return new (t || n)(e.\u0275\u0275directiveInject(h.DomSanitizer)); }, n.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["ngx-dropzone-image-preview"]], inputs: { file: "file" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: m, useExisting: n }]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: x, decls: 3, vars: 2, consts: [[3, "src"], [3, "click", 4, "ngIf"], [3, "click"]], template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(b), e.\u0275\u0275element(0, "img", 0), e.\u0275\u0275projection(1), e.\u0275\u0275template(2, k, 1, 0, "ngx-dropzone-remove-badge", 1)), t & 2 && (e.\u0275\u0275property("src", i.imageSrc, e.\u0275\u0275sanitizeUrl), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngIf", i.removable)); }, dependencies: [y, f.NgIf], styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:hover   img[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;border-radius:5px;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"] }), n; })(), K = (() => { class n extends m {
    constructor(t) { super(t); }
    ngOnInit() { if (!this.file) {
        console.error("No file to read. Please provide a file using the [file] Input property.");
        return;
    } this.videoSrc = URL.createObjectURL(this.file), this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc); }
    ngOnDestroy() { URL.revokeObjectURL(this.videoSrc); }
} return n.\u0275fac = function (t) { return new (t || n)(e.\u0275\u0275directiveInject(h.DomSanitizer)); }, n.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["ngx-dropzone-video-preview"]], standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: m, useExisting: n }]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: x, decls: 3, vars: 2, consts: [["controls", "", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["controls", "", 3, "click"], [3, "src"], [3, "click"]], template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(b), e.\u0275\u0275template(0, F, 2, 1, "video", 0), e.\u0275\u0275projection(1), e.\u0275\u0275template(2, S, 1, 0, "ngx-dropzone-remove-badge", 1)), t & 2 && (e.\u0275\u0275property("ngIf", i.sanitizedVideoSrc), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngIf", i.removable)); }, dependencies: [y, f.NgIf], styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:hover   video[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   video[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{max-height:100%;border-radius:5px}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"] }), n; })(), q = (() => { class n {
} return n.\u0275fac = function (t) { return new (t || n); }, n.\u0275mod = e.\u0275\u0275defineNgModule({ type: n }), n.\u0275inj = e.\u0275\u0275defineInjector({ imports: [[I]] }), n; })();
export { J as NgxDropzoneComponent, Q as NgxDropzoneImagePreviewComponent, X as NgxDropzoneLabelDirective, q as NgxDropzoneModule, m as NgxDropzonePreviewComponent, y as NgxDropzoneRemoveBadgeComponent, K as NgxDropzoneVideoPreviewComponent };
