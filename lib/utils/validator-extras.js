"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = exports.extensions = void 0;
const lodash_1 = __importDefault(require("lodash"));
const validator_1 = __importDefault(require("validator"));
const moment_1 = __importDefault(require("moment"));
const clonedValidator = lodash_1.default.cloneDeep(validator_1.default);
exports.extensions = {
    extend(name, fn) {
        // eslint-disable-next-line
        // @ts-ignore
        this[name] = fn;
    },
    notEmpty(str) {
        return !str.match(/^[\s\t\r\n]*$/);
    },
    len(str, min, max) {
        return clonedValidator.isLength(str, min, max);
    },
    isUrl(str) {
        return clonedValidator.isURL(str);
    },
    isIPv6(str) {
        return clonedValidator.isIP(str, 6);
    },
    isIPv4(str) {
        return clonedValidator.isIP(str, 4);
    },
    notIn(str, values) {
        return !clonedValidator.isIn(str, values);
    },
    regex(str, pattern, modifiers) {
        str += '';
        if (Object.prototype.toString.call(pattern).slice(8, -1) !== 'RegExp') {
            pattern = new RegExp(pattern, modifiers);
        }
        const result = str.match(pattern);
        return result ? result.length > 0 : false;
    },
    notRegex(str, pattern, modifiers) {
        return !this.regex(str, pattern, modifiers);
    },
    isDecimal(str) {
        return str !== '' && !!str.match(/^(?:-?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][+-]?(?:[0-9]+))?$/);
    },
    min(str, val) {
        const number = parseFloat(str);
        return isNaN(number) || number >= val;
    },
    max(str, val) {
        const number = parseFloat(str);
        return isNaN(number) || number <= val;
    },
    not(str, pattern, modifiers) {
        return this.notRegex(str, pattern, modifiers);
    },
    contains(str, elem) {
        return !!elem && str.includes(elem);
    },
    notContains(str, elem) {
        return !this.contains(str, elem);
    },
    is(str, pattern, modifiers) {
        return this.regex(str, pattern, modifiers);
    }
};
const extraValidator = {
    // instance based validators
    isImmutable(value, validatorArgs, field, modelInstance) {
        return modelInstance.isNewRecord || modelInstance.getDataValue(field) === modelInstance.previous(field);
    },
    // extra validators
    notNull(val) {
        return val !== null && val !== undefined;
    },
    // map isNull to isEmpty
    // https://github.com/chriso/validator.js/commit/e33d38a26ee2f9666b319adb67c7fc0d3dea7125
    isNull: clonedValidator.isEmpty,
    // isDate removed in 7.0.0
    // https://github.com/chriso/validator.js/commit/095509fc707a4dc0e99f85131df1176ad6389fc9
    isDate(dateString) {
        // avoid http://momentjs.com/guides/#/warnings/js-date/
        // by doing a preliminary check on `dateString`
        const parsed = Date.parse(dateString);
        if (isNaN(parsed)) {
            // fail if we can't parse it
            return false;
        }
        // otherwise convert to ISO 8601 as moment prefers
        // http://momentjs.com/docs/#/parsing/string/
        const date = new Date(parsed);
        return moment_1.default(date.toISOString()).isValid();
    }
};
exports.validator = { ...clonedValidator, ...exports.extensions, ...extraValidator };
//# sourceMappingURL=validator-extras.js.map