"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_error_1 = __importDefault(require("./base-error"));
/**
 * A base class for all database related errors.
 */
class DatabaseError extends base_error_1.default {
    constructor(parent) {
        super(parent.message);
        this.name = 'SequelizeDatabaseError';
        this.parent = parent;
        this.original = parent;
        this.sql = parent.sql;
        this.parameters = parent.parameters;
    }
}
exports.default = DatabaseError;
//# sourceMappingURL=database-error.js.map