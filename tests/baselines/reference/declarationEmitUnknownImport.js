//// [declarationEmitUnknownImport.ts]

import Foo = SomeNonExistingName
export {Foo}

//// [declarationEmitUnknownImport.js]
"use strict";
var Foo = SomeNonExistingName;
exports.Foo = Foo;
Object.defineProperty(exports, "__esModule", { value: true });
