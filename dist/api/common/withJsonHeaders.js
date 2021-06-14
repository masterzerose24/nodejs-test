"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function withJsonHeaders(data) {
    return {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...data,
        }
    };
}
exports.default = withJsonHeaders;
//# sourceMappingURL=withJsonHeaders.js.map