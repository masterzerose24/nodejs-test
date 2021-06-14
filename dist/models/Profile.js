"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = (sequelize, DataTypes) => {
    const Profile = sequelize.define('profiles', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        postCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        timestamps: true,
    });
    // @ts-ignore
    Profile.associate = (db) => {
        Profile.belongsTo(db.User);
    };
    return Profile;
};
//# sourceMappingURL=Profile.js.map