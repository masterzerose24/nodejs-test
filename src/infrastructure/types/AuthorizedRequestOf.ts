import { Request } from 'express';
import { RequestVars } from './RequestVars';

export type AuthorizedRequestOf<ReqVars extends RequestVars> = Request & {
    logout: Function,
    user: {
        id: string,
        email: string,
        token: string,
    }
} & ReqVars;
