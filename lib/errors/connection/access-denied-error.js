"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_error_1 = __importDefault(require("../connection-error"));
/**
 * Thrown when a connection to a database is refused due to insufficient privileges
 */
class AccessDeniedError extends connection_error_1.default {
    constructor(parent) {
        super(parent);
        this.name = 'SequelizeAccessDeniedError';
    }
}
exports.default = AccessDeniedError;
//# sourceMappingURL=access-denied-error.js.map