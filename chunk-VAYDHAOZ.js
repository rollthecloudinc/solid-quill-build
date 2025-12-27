import { ConnectableObservable } from "@nf-internal/chunk-4WPE7WTU";
// node_modules/@angular/cdk/fesm2022/data-source.mjs
var DataSource = class {
};
function isDataSource(value) {
    return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
export { DataSource, isDataSource };
