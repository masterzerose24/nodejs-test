"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responder_1 = __importDefault(require("../../infrastructure/api/responder"));
const HttpError_1 = __importDefault(require("../../infrastructure/HttpError"));
function errorResponder(res) {
    return (errorThrown) => {
        const unexpError = HttpError_1.default('Unexpected error', { data: errorThrown });
        responder_1.default(res, 'Unexpected error')(unexpError);
        return unexpError;
    };
}
exports.default = errorResponder;
//# sourceMappingURL=errorResponder.js.map