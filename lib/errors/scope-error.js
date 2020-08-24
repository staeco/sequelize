"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_error_1 = __importDefault(require("./base-error"));
/**
 * Scope Error. Thrown when the sequelize cannot query the specified scope.
 */
class ScopeError extends base_error_1.default {
    constructor(message) {
        super(message);
        this.name = 'SequelizeScopeError';
    }
}
exports.default = ScopeError;
//# sourceMappingURL=scope-error.js.map