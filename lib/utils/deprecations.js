"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsupportedEngine = exports.noDoubleNestedGroup = exports.noBoolOperatorAliases = exports.noStringOperators = exports.noTrueLogging = exports.noRawAttributes = void 0;
const util_1 = require("util");
const noop = () => {
    /* noop */
};
exports.noRawAttributes = util_1.deprecate(noop, 'Use sequelize.fn / sequelize.literal to construct attributes', 'SEQUELIZE0001');
exports.noTrueLogging = util_1.deprecate(noop, 'The logging-option should be either a function or false. Default: console.log', 'SEQUELIZE0002');
exports.noStringOperators = util_1.deprecate(noop, 'String based operators are deprecated. Please use Symbol based operators for better security, read more at https://sequelize.org/master/manual/querying.html#operators', 'SEQUELIZE0003');
exports.noBoolOperatorAliases = util_1.deprecate(noop, 'A boolean value was passed to options.operatorsAliases. This is a no-op with v5 and should be removed.', 'SEQUELIZE0004');
exports.noDoubleNestedGroup = util_1.deprecate(noop, 'Passing a double nested nested array to `group` is unsupported and will be removed in v6.', 'SEQUELIZE0005');
exports.unsupportedEngine = util_1.deprecate(noop, 'This database engine version is not supported, please update your database server. More information https://github.com/sequelize/sequelize/blob/master/ENGINE.md', 'SEQUELIZE0006');
//# sourceMappingURL=deprecations.js.map