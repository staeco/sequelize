"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_error_1 = __importDefault(require("./base-error"));
/**
 * A wrapper for multiple Errors
 */
class AggregateError extends base_error_1.default {
    constructor(errors) {
        super();
        this.errors = errors;
        this.name = 'AggregateError';
    }
    toString() {
        const message = `AggregateError of:\n${this.errors
            .map(error => error === this
            ? '[Circular AggregateError]'
            : error instanceof AggregateError
                ? String(error).replace(/\n$/, '').replace(/^/gm, '  ')
                : String(error).replace(/^/gm, '    ').substring(2))
            .join('\n')}\n`;
        return message;
    }
}
exports.default = AggregateError;
//# sourceMappingURL=aggregate-error.js.map