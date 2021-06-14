"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const HttpError_1 = __importStar(require("../../../infrastructure/HttpError"));
const toPlain_1 = __importDefault(require("../../../utils/db/toPlain/toPlain"));
const transaction_1 = __importDefault(require("../../../utils/db/transaction"));
const axiosBuilder_1 = __importDefault(require("../../common/axiosBuilder"));
const models_1 = __importDefault(require("../../../models"));
async function usecase(dto) {
    return transaction_1.default.createTransaction()
        .then((transaction) => {
        return models_1.default.User.create({
            id: v4_1.default(),
            email: dto.email,
            password: dto.password,
            token: dto.token // TODO openbook need to pass something Client call .env token
        }, { transaction })
            .then(toPlain_1.default)
            .then((userPlain) => axiosBuilder_1.default('POST', '/user', dto)
            .then(req => (req instanceof HttpError_1.HttpError)
            ? transaction_1.default.transRollback(req, transaction)
            : transaction_1.default.transCommit({ user: userPlain }, transaction)))
            .catch((err) => HttpError_1.default(`${err.original}`, { data: err }));
    })
        .catch((err) => HttpError_1.default('Transaction Promise Error', { data: err }));
}
exports.default = usecase;
//# sourceMappingURL=auth.signup.usecase.js.map