import { Request } from 'express';
import fallback from '../../../utils/dataTransform/fallback';
import { Dto } from './auth.signup.types';

export function toDto(req: Request): Dto {
  return {
    email: fallback((_req) => _req.body.email, '', req),
    password: fallback((_req) => _req.body.password, null, req),
    token: fallback((_req) => _req.body.token, '', req),
  };
}
