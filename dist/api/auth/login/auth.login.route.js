"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responder_1 = __importDefault(require("../../../infrastructure/api/responder"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const passport_1 = __importDefault(require("../../../config/passport"));
const jwt_1 = __importDefault(require("../../../config/jwt"));
const auth_login_transformDto_1 = require("./auth.login.transformDto");
const localAuthenticateJwt = passport_1.default.authenticate('local');
const authLoginRoute = {
    method: 'post',
    path: '/login',
    middleware: [localAuthenticateJwt],
    controller: (req, res, next) => {
        const user = auth_login_transformDto_1.toDto(req);
        const jwtSignConfig = {
            issuer: jwt_1.default.issuer,
            expiresIn: jwt_1.default.expiresIn,
            audience: jwt_1.default.audience,
        };
        const token = jsonwebtoken_1.default.sign(user, jwt_1.default.tokenSecret, jwtSignConfig);
        return responder_1.default(res)({ token, user });
    }
};
exports.default = authLoginRoute;
//# sourceMappingURL=auth.login.route.js.map