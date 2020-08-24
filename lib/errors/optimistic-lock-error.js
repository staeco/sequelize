"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_error_1 = __importDefault(require("./base-error"));
/**
 * Thrown when attempting to update a stale model instance
 */
class OptimisticLockError extends base_error_1.default {
    constructor(options) {
        super(options.message || `Attempting to update a stale model instance: ${options.modelName}`);
        this.name = 'SequelizeOptimisticLockError';
        /**
         * The name of the model on which the update was attempted
         *
         * @type {string}
         */
        this.modelName = options.modelName;
        /**
         * The values of the attempted update
         *
         * @type {object}
         */
        this.values = options.values;
        /**
         *
         * @type {object}
         */
        this.where = options.where;
    }
}
exports.default = OptimisticLockError;
//# sourceMappingURL=optimistic-lock-error.js.map