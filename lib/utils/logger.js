"use strict";
/**
 * Sequelize module for debug and deprecation messages.
 * It require a `context` for which messages will be printed.
 *
 * @module logging
 * @private
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.Logger = void 0;
const debug_1 = __importDefault(require("debug"));
const util_1 = require("util");
class Logger {
    constructor(config = {}) {
        this.config = {
            context: 'sequelize',
            debug: true,
            ...config
        };
    }
    warn(message) {
        // eslint-disable-next-line no-console
        console.warn(`(${this.config.context}) Warning: ${message}`);
    }
    inspect(value) {
        return util_1.inspect(value, false, 3);
    }
    debugContext(name) {
        return debug_1.default(`${this.config.context}:${name}`);
    }
}
exports.Logger = Logger;
exports.logger = new Logger();
//# sourceMappingURL=logger.js.map