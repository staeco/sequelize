"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validation_error_1 = __importDefault(require("./../validation-error"));
/**
 * Thrown when a unique constraint is violated in the database
 */
class UniqueConstraintError extends validation_error_1.default {
    constructor(options) {
        options = options || {};
        options.parent = options.parent || { sql: '' };
        options.message = options.message || options.parent.message || 'Validation Error';
        options.errors = options.errors || {};
        super(options.message, options.errors);
        this.name = 'SequelizeUniqueConstraintError';
        this.fields = options.fields;
        this.parent = options.parent;
        this.original = options.parent;
        this.sql = options.parent.sql;
    }
}
exports.default = UniqueConstraintError;
//# sourceMappingURL=unique-constraint-error.js.map