import {Sequelize, Model, BuildOptions} from 'sequelize';
import bcrypt from 'bcryptjs';

interface MyModel extends Model {
  readonly id?: string,
  email: string,
  password: string,
  token: string,
  createdAt?: Date,
  updatedAt?: Date,
}

type MyModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): MyModel;
}

export const User = (
  sequelize: Sequelize,
  DataTypes,
) => {
  const User = <MyModelStatic>sequelize.define('users', {
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

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.beforeCreate(user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null,
    )
  });
  
  // @ts-ignore
  User.associate = (db) => {
    User.hasOne(db.Profile);
  };

  return User;
};
