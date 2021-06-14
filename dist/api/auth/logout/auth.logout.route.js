"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responder_1 = __importDefault(require("../../../infrastructure/api/responder"));
const auth_1 = require("../../../constants/auth");
const authLogoutRoute = {
    method: 'get',
    path: '/logout',
    middleware: [auth_1.passportAuthenticateJwt],
    // weight: 0,
    controller: async (req, res, next) => {
        // TODO fix logout
        await req.logout();
        return responder_1.default(res)({ message: 'logged out' });
    }
};
exports.default = authLogoutRoute;
//# sourceMappingURL=auth.logout.route.js.map