"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../../../models"));
function createTransaction() {
    return models_1.default.sequelize.transaction({
        deferrable: models_1.default.Sequelize.Deferrable.SET_DEFERRED,
        isolationLevel: models_1.default.Sequelize.Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED,
    });
}
exports.default = createTransaction;
//# sourceMappingURL=createTransaction.js.map