"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fallback_1 = __importDefault(require("../../../utils/dataTransform/fallback"));
function toDto(req) {
    return {
        email: fallback_1.default((_req) => _req.body.email, '', req),
        password: fallback_1.default((_req) => _req.body.password, null, req),
        token: fallback_1.default((_req) => _req.body.token, '', req),
    };
}
exports.toDto = toDto;
//# sourceMappingURL=auth.signup.transformDto.js.map