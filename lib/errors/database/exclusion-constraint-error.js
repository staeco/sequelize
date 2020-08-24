"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_error_1 = __importDefault(require("./../database-error"));
/**
 * Thrown when an exclusion constraint is violated in the database
 */
class ExclusionConstraintError extends database_error_1.default {
    constructor(options) {
        options = options || {};
        options.parent = options.parent || { sql: '' };
        super(options.parent);
        this.name = 'SequelizeExclusionConstraintError';
        this.message = options.message || options.parent.message || '';
        this.constraint = options.constraint;
        this.fields = options.fields;
        this.table = options.table;
    }
}
exports.default = ExclusionConstraintError;
//# sourceMappingURL=exclusion-constraint-error.js.map