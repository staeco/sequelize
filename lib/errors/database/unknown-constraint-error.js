"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_error_1 = __importDefault(require("./../database-error"));
/**
 * Thrown when constraint name is not found in the database
 */
class UnknownConstraintError extends database_error_1.default {
    constructor(options) {
        options = options || {};
        options.parent = options.parent || { sql: '' };
        super(options.parent);
        this.name = 'SequelizeUnknownConstraintError';
        this.message = options.message || 'The specified constraint does not exist';
        this.constraint = options.constraint;
        this.fields = options.fields;
        this.table = options.table;
    }
}
exports.default = UnknownConstraintError;
//# sourceMappingURL=unknown-constraint-error.js.map