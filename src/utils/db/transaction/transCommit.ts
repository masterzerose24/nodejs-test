export default async function transCommit(val, transaction) {
    await transaction.commit();
    return val;
}