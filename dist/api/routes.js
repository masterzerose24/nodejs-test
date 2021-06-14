"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const services_1 = require("../services");
const withErrorGuard_1 = __importDefault(require("../infrastructure/api/withErrorGuard"));
const site_1 = __importDefault(require("../config/site"));
const forEachDirIn = (source, cb) => {
    fs_1.default.readdirSync(source)
        .filter(f => fs_1.default.statSync(path_1.join(source, f)).isDirectory())
        .forEach(cb);
};
function routes(app) {
    console.log(`Search for routes under \`${__dirname}\``);
    const source = __dirname;
    const excludes = ['common'];
    const basePath = site_1.default.API_VERSION;
    try {
        forEachDirIn(source, (dir) => {
            if (excludes.includes(dir))
                return;
            const dirRouter = express_1.Router();
            forEachDirIn(path_1.join(source, dir), (subdir) => {
                if (fs_1.default.existsSync(path_1.join(source, dir, subdir, `${dir}.${subdir}.route.ts`))) {
                    Promise.resolve().then(() => __importStar(require(path_1.join(source, dir, subdir, `${dir}.${subdir}.route.ts`)))).then(({ default: routeDef }) => {
                        // todo ensure leading slash is correct:
                        const correctedRoutePath = routeDef.path[0] === '/'
                            ? routeDef.path
                            : `/${routeDef.path}`;
                        console.log(`Defining route: ${routeDef.method}:/${basePath}/${dir}${correctedRoutePath}`);
                        //
                        dirRouter[routeDef.method](routeDef.path, ...(Array.isArray(routeDef.middleware) ? routeDef.middleware : []), withErrorGuard_1.default(routeDef.controller));
                    })
                        .catch((err) => {
                        throw new Error(err);
                    });
                }
            });
            app.use(`/${basePath}/${dir}`, dirRouter);
        });
    }
    catch (err) {
        console.log('caught the error');
        services_1.reportError(err);
    }
}
exports.default = routes;
;
//# sourceMappingURL=routes.js.map