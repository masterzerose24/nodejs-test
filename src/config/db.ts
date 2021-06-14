import dotenv from 'dotenv';

dotenv.config({ silent: true });

export default {
  uri: String(process.env.SQL_URI) || 'postgres://jon@localhost:5432/openbook_middleware',
  dialect: 'postgres',
  options: {
    pool: {
      max: Number(process.env.SQL_MAX_CONN) || 20,
      min: Number(process.env.SQL_MIN_CONN) || 5,
      idle: Number(process.env.SQL_IDLE) || 10000,
    },
    dialectOptions: process.env.SQL_OPTIONS ? process.env.SQL_OPTIONS : {},
  },
};
