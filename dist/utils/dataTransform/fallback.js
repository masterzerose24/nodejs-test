"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const execFallback = (fn, defaultVal, obj) => {
    try {
        const result = fn(obj);
        return result !== undefined ? result : defaultVal;
    }
    catch (e) {
        return defaultVal;
    }
};
function fallback(fn, defaultVal, obj1) {
    if (obj1 !== undefined) {
        return execFallback(fn, defaultVal, obj1);
    }
    return (obj2) => execFallback(fn, defaultVal, obj2);
}
exports.default = fallback;
//# sourceMappingURL=fallback.js.map