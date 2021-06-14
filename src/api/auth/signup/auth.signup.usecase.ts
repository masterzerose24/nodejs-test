import {Dto, ReturnType} from './auth.signup.types';
import uuid from 'uuid/v4';
import {Errable} from '../../../infrastructure/types/Errable';
import httpError, {HttpError} from '../../../infrastructure/HttpError';
import toPlain from '../../../utils/db/toPlain/toPlain';
import trans from '../../../utils/db/transaction';
import axiosBuilder from '../../common/axiosBuilder';

import db from '../../../models';
import Promise, {Transaction} from 'sequelize';

export default async function usecase(dto: Dto): Promise<Errable<ReturnType>> {
    return trans.createTransaction()
        .then((transaction: Transaction) => {
            return db.User.create({
                id: uuid(),
                email: dto.email,
                password: dto.password,
                token: dto.token // TODO openbook need to pass something Client call .env token
            }, {transaction})
                .then(toPlain)
                .then((userPlain) => axiosBuilder('POST', '/user', dto)
                    .then(req => (req instanceof HttpError)
                        ? trans.transRollback(req, transaction)
                        : trans.transCommit({user: userPlain}, transaction))
                )
                .catch((err) => httpError(`${err.original}`, {data: err}))
        })
        .catch((err) => httpError('Transaction Promise Error', {data: err}));
}
