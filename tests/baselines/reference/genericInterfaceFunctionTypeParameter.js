//// [genericInterfaceFunctionTypeParameter.ts]
export interface IFoo<A> { }
export function foo<A>(fn: (ifoo: IFoo<A>) => void) {
    foo(fn); // Invocation is necessary to repro (!)
}




//// [genericInterfaceFunctionTypeParameter.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    function foo(fn) {
        foo(fn); // Invocation is necessary to repro (!)
    }
    exports.foo = foo;
    exports.__esModule = true;
});
