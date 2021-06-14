import { RequestHandler, Response, NextFunction } from 'express';
import { Errable } from '../../../infrastructure/types/Errable';
import { RouteDef } from '../../../infrastructure/types/RouteDef';
import responder from '../../../infrastructure/api/responder';
import jwt from 'jsonwebtoken';
import { ReqVars, Resp } from './auth.login.types';
import passport from '../../../config/passport';
import jwtConfig from '../../../config/jwt';
import { toDto } from './auth.login.transformDto';
import { AuthorizedRequestOf } from '../../../infrastructure/types/AuthorizedRequestOf';
import { ReturnType } from './auth.login.types';

const localAuthenticateJwt: RequestHandler = passport.authenticate('local');
const authLoginRoute: RouteDef<ReqVars, Resp> = {
  method: 'post',
  path: '/login',
  middleware: [localAuthenticateJwt],
  controller: (req: AuthorizedRequestOf<ReqVars>, res: Response, next: NextFunction): Errable<ReturnType> => {
      const user = toDto(req);
      const jwtSignConfig: Object = {
          issuer: jwtConfig.issuer,
          expiresIn: jwtConfig.expiresIn,
          audience: jwtConfig.audience,
      };
      const token = jwt.sign(
          user,
          jwtConfig.tokenSecret,
          jwtSignConfig,
      );
      return <ReturnType>responder(res)({token, user})
  }
};

export default authLoginRoute;
