"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responder_1 = __importDefault(require("./responder"));
function withErrorGuard(controller) {
    return (req, res, next) => {
        try {
            controller(req, res, next);
        }
        catch (e) {
            // todo: check for production environment:
            //  - if dev, provide useful details in response
            //  - if prod, suppress cause of error
            //  - if prod, log with error service
            responder_1.default(res, 'An unknown error occurred.')(e);
        }
    };
}
exports.default = withErrorGuard;
//# sourceMappingURL=withErrorGuard.js.map