"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.User = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                len: [5, 250],
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: true,
    });
    User.prototype.validPassword = function (password) {
        return bcryptjs_1.default.compareSync(password, this.password);
    };
    User.beforeCreate(user => {
        user.password = bcryptjs_1.default.hashSync(user.password, bcryptjs_1.default.genSaltSync(10), null);
    });
    // @ts-ignore
    User.associate = (db) => {
        User.hasOne(db.Profile);
    };
    return User;
};
//# sourceMappingURL=User.js.map