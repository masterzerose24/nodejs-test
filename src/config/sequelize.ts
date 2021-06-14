const dotenv = require('dotenv');

dotenv.config();

export default  {
  development: {
    url: String(process.env.SQL_URI) || '',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    seederStorageTableName: 'seeds',
    migrationStorageTableName: 'migrations',
  },
}
