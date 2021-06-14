"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpError extends Error {
    constructor(message, metadata) {
        super(message);
        const { status, data, token } = metadata;
        this.status = status || 500;
        if (data !== undefined)
            this.data = data;
        if (token !== undefined)
            this.token = token;
    }
}
exports.HttpError = HttpError;
function httpError(message, metadata) {
    return new HttpError(message, metadata);
}
exports.default = httpError;
//# sourceMappingURL=HttpError.js.map