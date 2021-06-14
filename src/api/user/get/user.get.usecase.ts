import { Dto, ReqVars, Resp } from './user.get.types';
import { Errable } from '../../../infrastructure/types/Errable';
import { AuthorizedRequestOf } from "../../../infrastructure/types/AuthorizedRequestOf";
import axios from 'axios';
import url from '../../../config/openbook';
import httpError from "../../../infrastructure/HttpError";
import withJsonHeaders from '../../common/withJsonHeaders';


export default function getUser(dto: Dto, req: AuthorizedRequestOf<ReqVars>): Promise<Errable<any>> {
  return axios({
      method: 'GET',
      url: `${url.url}/entity/${dto.id}`,
      ...withJsonHeaders({
        securityToken: req.user.token,
        email: req.user.email,
      }),
    })
      .then(({status, data}) => ({status, data, message: 'Entity'}))
      .catch(({response}) => httpError(response.data.message, response.data));
}
