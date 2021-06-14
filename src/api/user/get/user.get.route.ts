import {Request, Response, NextFunction} from 'express';
import R from 'ramda';
import {Errable} from '../../../infrastructure/types/Errable';
import {RouteDef} from '../../../infrastructure/types/RouteDef';
import responder from '../../../infrastructure/api/responder';

import transformDto from './user.get.transformDto';
import validate from './user.get.validate';
import usecase from './user.get.usecase';
import { Dto, ReqVars, Resp } from './user.get.types';
import errorResponder from '../../common/errorResponder';
import {HttpError} from "../../../infrastructure/HttpError";
import {passportAuthenticateJwt} from '../../../constants/auth';
import {AuthorizedRequestOf} from "../../../infrastructure/types/AuthorizedRequestOf";

const userGetRoute: RouteDef<ReqVars, Resp> = {
    method: 'get',
    path: '/:id',
    middleware: [passportAuthenticateJwt],
    // weight: 0,
    controller: (req: AuthorizedRequestOf<ReqVars>, res: Response, next: NextFunction): Promise<Errable<any>> => {
        return Promise.resolve(transformDto(req))
        // .then(validate) // optional validation
        // .then(authorize(permissionModel))
        // -> { user, dto }
            .then(validated => (validated instanceof HttpError)
                ? validated
                : usecase(validated, req)
            )
            .then(responder(res))
            .catch((err) => {
                return errorResponder(err);
            });
    },
};

export default userGetRoute;
