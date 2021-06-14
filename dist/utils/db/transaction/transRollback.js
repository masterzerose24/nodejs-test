"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function transRollback(val, transaction) {
    await transaction.rollback();
    return val;
}
exports.default = transRollback;
//# sourceMappingURL=transRollback.js.map