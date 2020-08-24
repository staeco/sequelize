"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_error_1 = __importDefault(require("../connection-error"));
/**
 * Thrown when a connection to a database has a hostname that was not reachable
 */
class HostNotReachableError extends connection_error_1.default {
    constructor(parent) {
        super(parent);
        this.name = 'SequelizeHostNotReachableError';
    }
}
exports.default = HostNotReachableError;
//# sourceMappingURL=host-not-reachable-error.js.map