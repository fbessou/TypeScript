//// [es5ExportDefaultIdentifier.ts]

export function f() { }

export default f;


//// [es5ExportDefaultIdentifier.js]
"use strict";
function f() { }
exports.f = f;
exports.default = f;
Object.defineProperty(exports, "__esModule", { value: true });


//// [es5ExportDefaultIdentifier.d.ts]
export declare function f(): void;
export default f;
