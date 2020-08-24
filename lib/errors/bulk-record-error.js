"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_error_1 = __importDefault(require("./base-error"));
/**
 * Thrown when bulk operation fails, it represent per record level error.
 * Used with AggregateError
 *
 * @param {Error}  error   Error for a given record/instance
 * @param {object} record  DAO instance that error belongs to
 */
class BulkRecordError extends base_error_1.default {
    constructor(error, record) {
        super(error.message);
        this.name = 'SequelizeBulkRecordError';
        this.error = error;
        this.record = record;
    }
}
exports.default = BulkRecordError;
//# sourceMappingURL=bulk-record-error.js.map