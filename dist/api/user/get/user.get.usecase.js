"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const openbook_1 = __importDefault(require("../../../config/openbook"));
const HttpError_1 = __importDefault(require("../../../infrastructure/HttpError"));
const withJsonHeaders_1 = __importDefault(require("../../common/withJsonHeaders"));
function getUser(dto, req) {
    return axios_1.default({
        method: 'GET',
        url: `${openbook_1.default.url}/entity/${dto.id}`,
        ...withJsonHeaders_1.default({
            securityToken: req.user.token,
            email: req.user.email,
        }),
    })
        .then(({ status, data }) => ({ status, data, message: 'Entity' }))
        .catch(({ response }) => HttpError_1.default(response.data.message, response.data));
}
exports.default = getUser;
//# sourceMappingURL=user.get.usecase.js.map