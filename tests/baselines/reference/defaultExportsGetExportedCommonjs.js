//// [tests/cases/conformance/es6/moduleExportsCommonjs/defaultExportsGetExportedCommonjs.ts] ////

//// [a.ts]
export default class Foo {}

//// [b.ts]
export default function foo() {}


//// [a.js]
"use strict";
class Foo {
}
exports.default = Foo;
Object.defineProperty(exports, "__esModule", { value: true });
//// [b.js]
"use strict";
function foo() { }
exports.default = foo;
Object.defineProperty(exports, "__esModule", { value: true });
