export default {
  expiresIn: process.env.JWT_EXPIRY || '30d',
  tokenSecret: process.env.JWT_SECRET || '',
  issuer: process.env.JWT_ISSUER || 'StationFive',
  audience: process.env.JWT_AUDIENCE || 'Openbook',
};