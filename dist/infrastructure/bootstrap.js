"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("../api/routes"));
const http_1 = __importDefault(require("http"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const passport_1 = __importDefault(require("passport"));
const logger_1 = __importDefault(require("./logger"));
function default_1(siteConfig) {
    const app = express_1.default();
    const root = path_1.default.normalize(__dirname + "/../..");
    app.set("appPath", root + "client");
    app.use(body_parser_1.default.json({ limit: process.env.REQUEST_LIMIT || "100kb" }));
    app.use(body_parser_1.default.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || "100kb",
    }));
    app.use(cookie_parser_1.default(process.env.SESSION_SECRET));
    app.use(express_1.default.static(`${root}/public`));
    app.use(express_session_1.default({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    // swaggerify(app, routeCreator);
    routes_1.default(app);
    const welcome = (port) => () => logger_1.default.info(`up and running in ${process.env.NODE_ENV || "development"} on port: ${port}}`);
    http_1.default.createServer(app).listen(siteConfig.PORT, welcome(siteConfig.PORT));
}
exports.default = default_1;
//# sourceMappingURL=bootstrap.js.map