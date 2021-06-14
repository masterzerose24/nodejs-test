export default async function transRollback(val, transaction) {
    await transaction.rollback();
    return val;
}