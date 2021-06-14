import db from '../../../models';
import {default as Promise, Transaction} from 'sequelize';

export default function createTransaction(): Promise<Transaction> {
  return db.sequelize.transaction({
    deferrable: db.Sequelize.Deferrable.SET_DEFERRED,
    isolationLevel: db.Sequelize.Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED,
  });
}
