//// [test.tsx]

declare module JSX {
    interface IntrinsicElements {
        [s: string]: any;
    }
}

export class AppComponent {
    render(createElement) {
        return <div />;
    }
}


//// [test.js]
"use strict";
class AppComponent {
    render(createElement) {
        return createElement("div", null);
    }
}
exports.AppComponent = AppComponent;
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=test.js.map