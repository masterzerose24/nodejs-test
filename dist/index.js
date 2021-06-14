"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./infrastructure/env");
const site_1 = __importDefault(require("./config/site"));
const bootstrap_1 = __importDefault(require("./infrastructure/bootstrap"));
bootstrap_1.default(site_1.default);
//# sourceMappingURL=index.js.map