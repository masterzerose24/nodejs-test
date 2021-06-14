"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toDto(req) {
    return {
        id: req.user.id || '',
        email: req.user.email || '',
        token: req.user.token || '',
    };
}
exports.toDto = toDto;
//# sourceMappingURL=auth.login.transformDto.js.map