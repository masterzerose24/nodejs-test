"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function transCommit(val, transaction) {
    await transaction.commit();
    return val;
}
exports.default = transCommit;
//# sourceMappingURL=transCommit.js.map