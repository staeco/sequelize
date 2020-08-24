"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_error_1 = __importDefault(require("./base-error"));
/**
 * Thrown when a record was not found, Usually used with rejectOnEmpty mode (see message for details)
 */
class EmptyResultError extends base_error_1.default {
    constructor(message) {
        super(message);
        this.name = 'SequelizeEmptyResultError';
    }
}
exports.default = EmptyResultError;
//# sourceMappingURL=empty-result-error.js.map