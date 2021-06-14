import {Dto, ReturnType} from '../../auth/signup/auth.signup.types'; // TODO UPDATE TYPE import
import uuid from 'uuid/v4';
import {Errable} from '../../../infrastructure/types/Errable';
import httpError from '../../../infrastructure/HttpError';
import toPlain from '../../../utils/db';
import axiosBuilder from '../../common/axiosBuilder';

import db from '../../../models';
import Promise from 'sequelize';

export default async function usecase(dto: Dto): Promise<Errable<ReturnType>> {
    return db.User.create({
        id: uuid(),
        email: dto.email,
        password: dto.password,
    }).then(toPlain)
        .then((plainuser) => axiosBuilder('POST', '/user', dto)
            .then(() => plainuser)
        )
        .then((val) => ({user: val}))
        .catch((err) => {
            return httpError(err.errors[0].message, err);
        });
}