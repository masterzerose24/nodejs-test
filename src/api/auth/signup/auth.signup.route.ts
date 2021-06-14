import { Request, Response, NextFunction } from 'express';
import R from 'ramda';
import { Errable } from '../../../infrastructure/types/Errable';
import { RouteDef } from '../../../infrastructure/types/RouteDef';
import responder from '../../../infrastructure/api/responder';

import { toDto } from './auth.signup.transformDto';
import usecase from './auth.signup.usecase';
import { ReturnType } from './auth.signup.types';
import errorResponder from '../../common/errorResponder';
import {HttpError} from '../../../infrastructure/HttpError';

type ReqVars = void;
type Resp = ReturnType;

const authSignupRoute: RouteDef<ReqVars, Resp> = {
  method: 'post',
  path: '/signup',
  controller: (req: Request, res: Response, next: NextFunction): Promise<Errable<Resp>> => {
    return Promise.resolve(toDto(req))
      .then(validated => (validated instanceof HttpError)
        ? validated
        : usecase(validated)
      )
      .then(responder(res))
      .catch(errorResponder(res));
  },
};

export default authSignupRoute;
