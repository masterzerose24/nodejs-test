"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const HttpError_1 = __importDefault(require("../../../infrastructure/HttpError"));
const db_1 = __importDefault(require("../../../utils/db"));
const axiosBuilder_1 = __importDefault(require("../../common/axiosBuilder"));
const models_1 = __importDefault(require("../../../models"));
async function usecase(dto) {
    return models_1.default.User.create({
        id: v4_1.default(),
        email: dto.email,
        password: dto.password,
    }).then(db_1.default)
        .then((plainuser) => axiosBuilder_1.default('POST', '/user', dto)
        .then(() => plainuser))
        .then((val) => ({ user: val }))
        .catch((err) => {
        return HttpError_1.default(err.errors[0].message, err);
    });
}
exports.default = usecase;
//# sourceMappingURL=usecaseNoTransaction.js.map