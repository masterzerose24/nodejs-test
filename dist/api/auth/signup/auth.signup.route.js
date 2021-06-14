"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responder_1 = __importDefault(require("../../../infrastructure/api/responder"));
const auth_signup_transformDto_1 = require("./auth.signup.transformDto");
const auth_signup_usecase_1 = __importDefault(require("./auth.signup.usecase"));
const errorResponder_1 = __importDefault(require("../../common/errorResponder"));
const HttpError_1 = require("../../../infrastructure/HttpError");
const authSignupRoute = {
    method: 'post',
    path: '/signup',
    controller: (req, res, next) => {
        return Promise.resolve(auth_signup_transformDto_1.toDto(req))
            .then(validated => (validated instanceof HttpError_1.HttpError)
            ? validated
            : auth_signup_usecase_1.default(validated))
            .then(responder_1.default(res))
            .catch(errorResponder_1.default(res));
    },
};
exports.default = authSignupRoute;
//# sourceMappingURL=auth.signup.route.js.map