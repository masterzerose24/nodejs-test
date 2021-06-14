const passport = require('./passport');
import sequelize from './sequelize';
import dbConfig from './db';
import jwt from './jwt';
import site from './site';

export default {
  dbConfig,
  passport,
  sequelize,
  jwt,
  site,
};