function o(e) { return encodeURIComponent(e).replace(/[!'()*]/g, function (n) { return "%" + n.charCodeAt(0).toString(16).toUpperCase(); }); }
export { o as a };
