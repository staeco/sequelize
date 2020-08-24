"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_error_1 = __importDefault(require("./../database-error"));
/**
 * Thrown when a database query times out because of a deadlock
 */
class TimeoutError extends database_error_1.default {
    constructor(parent) {
        super(parent);
        this.name = 'SequelizeTimeoutError';
    }
}
exports.default = TimeoutError;
//# sourceMappingURL=timeout-error.js.map