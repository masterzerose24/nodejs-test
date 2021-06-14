"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fallback_1 = __importDefault(require("../../../utils/dataTransform/fallback"));
function toDto(req) {
    return {
        id: fallback_1.default((_req) => _req.params.id, null, req),
    };
}
exports.default = toDto;
//# sourceMappingURL=user.get.transformDto.js.map