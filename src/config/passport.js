const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const tokenSecret = require('./jwt');
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;
const { default: db } = require('../models');

passport.use(new LocalStrategy(
  {
    usernameField: 'email'
  },
  (email, password, done) => {
    db.User.findOne({
      where: { email: email }
    }).then((user) => {
      if (!user) {
        return done(null, false, { message: 'Invalid Email' });
      }

      else if (!user.validPassword(password)) {
        return done(null, false, { message: 'Invalid Password' });
      }

      return done(null, user);
    });
  }
));

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey   : 'LivreOuvert' // TODO not getting correctly
  },
  function (jwtPayload, cb) {
  return db.User.findByPk(jwtPayload.id)
    .then(user => {
      return cb(null, user);
    })
    .catch(err => {
      return cb(err);
    });
  }
));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;