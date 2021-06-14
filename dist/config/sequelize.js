"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require('dotenv');
dotenv.config();
exports.default = {
    development: {
        url: String(process.env.SQL_URI) || '',
        dialect: 'postgres',
        seederStorage: 'sequelize',
        seederStorageTableName: 'seeds',
        migrationStorageTableName: 'migrations',
    },
};
//# sourceMappingURL=sequelize.js.map