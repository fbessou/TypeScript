//// [interfaceDeclaration5.ts]
export interface I1 { item:string; }
export class C1 { }


//// [interfaceDeclaration5.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    var C1 = (function () {
        function C1() {
        }
        return C1;
    }());
    exports.C1 = C1;
    exports.__esModule = true;
});
