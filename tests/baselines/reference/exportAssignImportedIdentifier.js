//// [tests/cases/conformance/externalModules/exportAssignImportedIdentifier.ts] ////

//// [foo1.ts]
export function x(){
	return true;
}

//// [foo2.ts]
import foo1 = require('./foo1');
var x = foo1.x;
export = x;

//// [foo3.ts]
import foo2 = require('./foo2');
var x = foo2(); // should be boolean

//// [foo1.js]
"use strict";
function x() {
    return true;
}
exports.x = x;
exports.__esModule = true;
//// [foo2.js]
"use strict";
var foo1 = require("./foo1");
var x = foo1.x;
module.exports = x;
//// [foo3.js]
"use strict";
var foo2 = require("./foo2");
var x = foo2(); // should be boolean
