//// [server.ts]

class c {
}
interface i {
}
module m {
    export var x = 10;
}
var x = 10;
module uninstantiated {
}
export { c };
export { c as c2 };
export { i, m as instantiatedModule };
export { uninstantiated };
export { x };

//// [server.js]
"use strict";
var c = (function () {
    function c() {
    }
    return c;
}());
exports.c = c;
exports.c2 = c;
var m;
(function (m) {
    m.x = 10;
})(m || (m = {}));
exports.instantiatedModule = m;
var x = 10;
exports.x = x;
Object.defineProperty(exports, "__esModule", { value: true });


//// [server.d.ts]
declare class c {
}
interface i {
}
declare module m {
    var x: number;
}
declare var x: number;
declare module uninstantiated {
}
export { c };
export { c as c2 };
export { i, m as instantiatedModule };
export { uninstantiated };
export { x };
