"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationErrorItem = void 0;
const base_error_1 = __importDefault(require("./base-error"));
/**
 * Validation Error. Thrown when the sequelize validation has failed. The error contains an `errors` property,
 * which is an array with 1 or more ValidationErrorItems, one for each validation that failed.
 *
 * @param {string} message Error message
 * @param {Array} [errors] Array of ValidationErrorItem objects describing the validation errors
 *
 * @property errors {ValidationErrorItems[]}
 */
class ValidationError extends base_error_1.default {
    constructor(message, errors) {
        super(message);
        this.name = 'SequelizeValidationError';
        this.message = 'Validation Error';
        /**
         *
         * @type {ValidationErrorItem[]}
         */
        this.errors = errors || [];
        // Use provided error message if available...
        if (message) {
            this.message = message;
            // ... otherwise create a concatenated message out of existing errors.
        }
        else if (this.errors.length > 0 && this.errors[0].message) {
            this.message = this.errors.map(err => `${err.type || err.origin || 'Unknown'}: ${err.message}`).join(',\n');
        }
    }
    /**
     * Gets all validation error items for the path / field specified.
     *
     * @param {string} path The path to be checked for error items
     */
    get(path) {
        return this.errors.reduce((reduced, error) => {
            if (error.path === path) {
                reduced.push(error);
            }
            return reduced;
        }, []);
    }
}
/**
 * An enum that defines valid ValidationErrorItem `origin` values
 *
 * @property CORE       {string}  specifies errors that originate from the sequelize "core"
 * @property DB         {string}  specifies validation errors that originate from the storage engine
 * @property FUNCTION   {string}  specifies validation errors that originate from validator functions (both built-in and custom) defined for a given attribute
 */
var Origins;
(function (Origins) {
    Origins["CORE"] = "CORE";
    Origins["DB"] = "DB";
    Origins["FUNCTION"] = "FUNCTION";
})(Origins || (Origins = {}));
/**
 * An object that is used internally by the `ValidationErrorItem` class
 * that maps current `type` strings (as given to ValidationErrorItem.constructor()) to
 * our new `origin` values.
 */
var TypeStringMap;
(function (TypeStringMap) {
    TypeStringMap["notnull violation"] = "CORE";
    TypeStringMap["string violation"] = "CORE";
    TypeStringMap["unique violation"] = "DB";
    TypeStringMap["validation error"] = "FUNCTION";
})(TypeStringMap || (TypeStringMap = {}));
/**
 * Validation Error Item
 * Instances of this class are included in the `ValidationError.errors` property.
 */
class ValidationErrorItem {
    /**
     * Creates new validation error item
     *
     * @param {string} message An error message
     * @param {string} type The type/origin of the validation error
     * @param {string} path The field that triggered the validation error
     * @param {string} value The value that generated the error
     * @param {object} [inst] the DAO instance that caused the validation error
     * @param {string} [validatorKey] a validation "key", used for identification
     * @param {string} [fnName] property name of the BUILT-IN validator function that caused the validation error (e.g. "in" or "len"), if applicable
     * @param {unknown[]} [fnArgs] parameters used with the BUILT-IN validator function, if applicable
     */
    constructor(message, type, path, value, inst, validatorKey, fnName, fnArgs) {
        /**
         * An error message
         *
         * @type {string} message
         */
        this.message = message || '';
        /**
         * The type/origin of the validation error
         *
         * @type {string}
         */
        this.type = type || null;
        this.origin = null;
        /**
         * The field that triggered the validation error
         *
         * @type {string}
         */
        this.path = path || null;
        /**
         * The value that generated the error
         *
         * @type {string}
         */
        this.value = value !== undefined ? value : null;
        /**
         * The DAO instance that caused the validation error
         *
         * @type {Model}
         */
        this.instance = inst || null;
        /**
         * A validation "key", used for identification
         *
         * @type {string}
         */
        this.validatorKey = validatorKey || null;
        /**
         * Property name of the BUILT-IN validator function that caused the validation error (e.g. "in" or "len"), if applicable
         *
         * @type {string}
         */
        this.validatorName = fnName || null;
        /**
         * Parameters used with the BUILT-IN validator function, if applicable
         *
         * @type {unknown[]}
         */
        this.validatorArgs = fnArgs || [];
        if (type) {
            if (ValidationErrorItem.Origins[type]) {
                this.origin = type;
            }
            else {
                const lowercaseType = `${type}`.toLowerCase().trim();
                const realType = TypeStringMap[lowercaseType];
                if (realType && ValidationErrorItem.Origins[realType]) {
                    this.origin = realType;
                    this.type = type;
                }
            }
        }
    }
    /**
     * return a lowercase, trimmed string "key" that identifies the validator.
     *
     * Note: the string will be empty if the instance has neither a valid `validatorKey` property nor a valid `validatorName` property
     *
     * @param   {boolean} [useTypeAsNS=true]      controls whether the returned value is "namespace",
     *                                            this parameter is ignored if the validator's `type` is not one of ValidationErrorItem.Origins
     * @param   {string}  [NSSeparator='.']       a separator string for concatenating the namespace, must be not be empty,
     *                                            defaults to "." (fullstop). only used and validated if useTypeAsNS is TRUE.
     * @throws  {Error}                           thrown if NSSeparator is found to be invalid.
     * @returns  {string}
     *
     * @private
     */
    getValidatorKey(useTypeAsNS, NSSeparator) {
        const useTANS = useTypeAsNS === undefined || !!useTypeAsNS;
        const NSSep = NSSeparator === undefined ? '.' : NSSeparator;
        const type = this.origin;
        const key = this.validatorKey || this.validatorName;
        const useNS = useTANS && type && ValidationErrorItem.Origins[type];
        if (useNS && (typeof NSSep !== 'string' || !NSSep.length)) {
            throw new Error('Invalid namespace separator given, must be a non-empty string');
        }
        if (!(typeof key === 'string' && key.length)) {
            return '';
        }
        return (useNS ? [type, key].join(NSSep) : key).toLowerCase().trim();
    }
}
exports.ValidationErrorItem = ValidationErrorItem;
ValidationErrorItem.Origins = Origins;
ValidationErrorItem.TypeStringMap = TypeStringMap;
exports.default = ValidationError;
//# sourceMappingURL=validation-error.js.map