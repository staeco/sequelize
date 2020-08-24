"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_error_1 = __importDefault(require("./../database-error"));
/**
 * Thrown when a foreign key constraint is violated in the database
 */
class ForeignKeyConstraintError extends database_error_1.default {
    constructor(options) {
        options = options || {};
        options.parent = options.parent || { sql: '' };
        super(options.parent);
        this.name = 'SequelizeForeignKeyConstraintError';
        this.message = options.message || options.parent.message || 'Database Error';
        this.fields = options.fields;
        this.table = options.table;
        this.value = options.value;
        this.index = options.index;
        this.reltype = options.reltype;
    }
}
exports.default = ForeignKeyConstraintError;
//# sourceMappingURL=foreign-key-constraint-error.js.map