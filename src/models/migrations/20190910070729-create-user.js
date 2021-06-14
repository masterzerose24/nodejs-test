module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('users', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
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
      token: { // TODO openbook middleware
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};