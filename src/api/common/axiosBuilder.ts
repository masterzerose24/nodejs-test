import axios from 'axios';
import url from '../../config/openbook';
import withJsonHeaders from './withJsonHeaders';
import httpError from "../../infrastructure/HttpError";

// TODO add TYPES
export default function axiosBuilder(method,endpoint, dto) {
    return axios({
        method,
        url: `${url.url}${endpoint}`,
        ...withJsonHeaders({
            securityToken: dto.token,
        }),
        data: {
            email: dto.email,
            active: true
        },
    }).then((val) => {
        return val.data;
    }).catch((err) => {
        const message: string = (err.code)
            ? err.code
            : err.response.statusText;
        return httpError(`Axios Error: ${message}`, {data: err});
    })
}
