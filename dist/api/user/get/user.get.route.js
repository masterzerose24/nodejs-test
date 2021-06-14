"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responder_1 = __importDefault(require("../../../infrastructure/api/responder"));
const user_get_transformDto_1 = __importDefault(require("./user.get.transformDto"));
const user_get_usecase_1 = __importDefault(require("./user.get.usecase"));
const errorResponder_1 = __importDefault(require("../../common/errorResponder"));
const HttpError_1 = require("../../../infrastructure/HttpError");
const auth_1 = require("../../../constants/auth");
const userGetRoute = {
    method: 'get',
    path: '/:id',
    middleware: [auth_1.passportAuthenticateJwt],
    // weight: 0,
    controller: (req, res, next) => {
        return Promise.resolve(user_get_transformDto_1.default(req))
            // .then(validate) // optional validation
            // .then(authorize(permissionModel))
            // -> { user, dto }
            .then(validated => (validated instanceof HttpError_1.HttpError)
            ? validated
            : user_get_usecase_1.default(validated, req))
            .then(responder_1.default(res))
            .catch((err) => {
            return errorResponder_1.default(err);
        });
    },
};
exports.default = userGetRoute;
//# sourceMappingURL=user.get.route.js.map