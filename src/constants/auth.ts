import passport from 'passport';
import { RequestHandler } from 'express';

export const passportAuthenticateJwt: RequestHandler = passport.authenticate('jwt', {session: false});
