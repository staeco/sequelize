"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_error_1 = __importDefault(require("./base-error"));
/**
 * Thrown when an include statement is improperly constructed (see message for details)
 */
class EagerLoadingError extends base_error_1.default {
    constructor(message) {
        super(message);
        this.name = 'SequelizeEagerLoadingError';
    }
}
exports.default = EagerLoadingError;
//# sourceMappingURL=eager-loading-error.js.map