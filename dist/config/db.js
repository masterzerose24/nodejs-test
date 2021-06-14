"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ silent: true });
exports.default = {
    uri: String(process.env.SQL_URI) || 'postgres://jon@localhost:5432/openbook_middleware',
    dialect: 'postgres',
    options: {
        pool: {
            max: Number(process.env.SQL_MAX_CONN) || 20,
            min: Number(process.env.SQL_MIN_CONN) || 5,
            idle: Number(process.env.SQL_IDLE) || 10000,
        },
        dialectOptions: process.env.SQL_OPTIONS ? process.env.SQL_OPTIONS : {},
    },
};
//# sourceMappingURL=db.js.map