//// [multipleExportDefault3.ts]
export default {
    uhoh: "another default",
};

export default class C { }



//// [multipleExportDefault3.js]
"use strict";
exports["default"] = {
    uhoh: "another default"
};
var C = (function () {
    function C() {
    }
    return C;
}());
exports["default"] = C;
exports.__esModule = true;
