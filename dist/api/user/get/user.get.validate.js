"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = __importDefault(require("../../../infrastructure/HttpError"));
function validate(dto) {
    return !dto.id ? HttpError_1.default('no id', { status: 400 }) : dto;
}
exports.default = validate;
//# sourceMappingURL=user.get.validate.js.map