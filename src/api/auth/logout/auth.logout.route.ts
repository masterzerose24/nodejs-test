import {Response, NextFunction} from 'express';
import {Errable} from '../../../infrastructure/types/Errable';
import {RouteDef} from '../../../infrastructure/types/RouteDef';
import responder from '../../../infrastructure/api/responder';
import {ReqVars, Resp} from './auth.logout.types';
import {AuthorizedRequestOf} from "../../../infrastructure/types/AuthorizedRequestOf";
import {passportAuthenticateJwt} from '../../../constants/auth';

const authLogoutRoute: RouteDef<ReqVars, Resp> = {
    method: 'get',
    path: '/logout',
    middleware: [passportAuthenticateJwt],
    // weight: 0,
    controller: async (req: AuthorizedRequestOf<ReqVars>, res: Response, next: NextFunction): Promise<Errable<any>> => {
        // TODO fix logout
        await req.logout();
        return responder(res)({ message: 'logged out' });
    }
};

export default authLogoutRoute;
