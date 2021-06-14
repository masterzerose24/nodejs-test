import {Sequelize, Model, BuildOptions} from 'sequelize';

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

export const Profile = (
  sequelize: Sequelize,
  DataTypes,
) => {
  const Profile = <MyModelStatic>sequelize.define('profiles', {
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
