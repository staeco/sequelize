"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_error_1 = __importDefault(require("./base-error"));
/**
 * A base class for all connection related parents.
 */
class ConnectionError extends base_error_1.default {
    constructor(parent) {
        super(parent ? parent.message : '');
        this.name = 'SequelizeConnectionError';
        if (parent) {
            this.parent = parent;
            this.original = parent;
        }
    }
}
exports.default = ConnectionError;
//# sourceMappingURL=connection-error.js.map