"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const openbook_1 = __importDefault(require("../../config/openbook"));
const withJsonHeaders_1 = __importDefault(require("./withJsonHeaders"));
const HttpError_1 = __importDefault(require("../../infrastructure/HttpError"));
// TODO add TYPES
function axiosBuilder(method, endpoint, dto) {
    return axios_1.default({
        method,
        url: `${openbook_1.default.url}${endpoint}`,
        ...withJsonHeaders_1.default({
            securityToken: dto.token,
        }),
        data: {
            email: dto.email,
            active: true
        },
    }).then((val) => {
        return val.data;
    }).catch((err) => {
        const message = (err.code)
            ? err.code
            : err.response.statusText;
        return HttpError_1.default(`Axios Error: ${message}`, { data: err });
    });
}
exports.default = axiosBuilder;
//# sourceMappingURL=axiosBuilder.js.map