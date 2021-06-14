import { Dto, ReqVars } from './auth.login.types';
import { AuthorizedRequestOf } from '../../../infrastructure/types/AuthorizedRequestOf';

export function toDto(req: AuthorizedRequestOf<ReqVars>): Dto {
  return {
    id: req.user.id || '',
    email: req.user.email || '',
    token: req.user.token || '', //TODO only for openbook
  };
}
