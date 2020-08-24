"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sequelize provides a host of custom error classes, to allow you to do easier debugging.
 * All of these errors are exposed on Sequelize constructor.
 * All Sequelize errors inherit from ES6 Error class.
 *
 * This means that errors can be accessed using `Sequelize.ValidationError`
 * The Base Error all Sequelize Errors inherit from.
 */
class BaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'SequelizeBaseError';
    }
}
exports.default = BaseError;
//# sourceMappingURL=base-error.js.map