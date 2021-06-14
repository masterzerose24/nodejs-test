"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require('./passport');
const sequelize_1 = __importDefault(require("./sequelize"));
const db_1 = __importDefault(require("./db"));
const jwt_1 = __importDefault(require("./jwt"));
const site_1 = __importDefault(require("./site"));
exports.default = {
    dbConfig: db_1.default,
    passport,
    sequelize: sequelize_1.default,
    jwt: jwt_1.default,
    site: site_1.default,
};
//# sourceMappingURL=index.js.map