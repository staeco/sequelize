"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_error_1 = __importDefault(require("../connection-error"));
/**
 * Thrown when connection is not acquired due to timeout
 */
class ConnectionAcquireTimeoutError extends connection_error_1.default {
    constructor(parent) {
        super(parent);
        this.name = 'SequelizeConnectionAcquireTimeoutError';
    }
}
exports.default = ConnectionAcquireTimeoutError;
//# sourceMappingURL=connection-acquire-timeout-error.js.map