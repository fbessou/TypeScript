//// [tests/cases/compiler/declarationEmitInferedTypeAlias5.ts] ////

//// [0.ts]

export type Data = string | boolean;
let obj: Data = true;

//// [1.ts]
import * as Z from "./0"
//let v2: Z.Data;
let v = "str" || true;
export { v }

//// [0.js]
"use strict";
var obj = true;
//// [1.js]
"use strict";
//let v2: Z.Data;
var v = "str" || true;
exports.v = v;
exports.__esModule = true;


//// [0.d.ts]
export declare type Data = string | boolean;
//// [1.d.ts]
import * as Z from "./0";
declare let v: Z.Data;
export { v };
