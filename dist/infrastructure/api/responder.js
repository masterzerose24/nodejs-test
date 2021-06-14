"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("../HttpError");
exports.default = (res, message) => (result) => {
    if (result instanceof HttpError_1.HttpError) {
        const { status, message: errMessage, data, token } = result;
        const useStatus = status || 500;
        res
            .status(useStatus)
            .send({
            status: useStatus,
            message: errMessage,
            errors: data || null,
            ...(token ? { token } : {}),
        });
    }
    else {
        const { token, ...data } = result;
        res
            .status(200)
            .send({
            data,
            message: message || 'Success',
            ...(token ? { token } : {}),
        });
    }
    return result;
};
//# sourceMappingURL=responder.js.map