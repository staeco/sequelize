"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_error_1 = __importDefault(require("./base-error"));
/**
 * Thrown when a some problem occurred with Instance methods (see message for details)
 */
class InstanceError extends base_error_1.default {
    constructor(message) {
        super(message);
        this.name = 'SequelizeInstanceError';
    }
}
exports.default = InstanceError;
//# sourceMappingURL=instance-error.js.map