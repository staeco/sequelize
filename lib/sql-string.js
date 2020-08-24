"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNamedParameters = exports.format = exports.escape = void 0;
const dataTypes = __importStar(require("./data-types"));
const logger_1 = require("./utils/logger");
function arrayToList(array, timeZone, dialect, format) {
    return array.reduce((sql, val, i) => {
        if (i !== 0) {
            sql += ', ';
        }
        if (Array.isArray(val)) {
            sql += `(${arrayToList(val, timeZone, dialect, format)})`;
        }
        else {
            sql += escape(val, timeZone, dialect, format);
        }
        return sql;
    }, '');
}
function escape(val, timeZone, dialect, format = false) {
    let prependN = false;
    if (val === undefined || val === null) {
        return 'NULL';
    }
    switch (typeof val) {
        case 'boolean':
            // SQLite doesn't have true/false support. MySQL aliases true/false to 1/0
            // for us. Postgres actually has a boolean type with true/false literals,
            // but sequelize doesn't use it yet.
            if (dialect === 'sqlite' || dialect === 'mssql') {
                return val ? '1' : '0';
            }
            return (!!val).toString();
        case 'number':
            return val.toString();
        case 'string':
            // In mssql, prepend N to all quoted vals which are originally a string (for
            // unicode compatibility)
            prependN = dialect === 'mssql';
            break;
    }
    if (val instanceof Date) {
        val = dataTypes[dialect].DATE.prototype.stringify(val, {
            timezone: timeZone
        });
    }
    if (Buffer.isBuffer(val)) {
        if (dataTypes[dialect].BLOB) {
            return dataTypes[dialect].BLOB.prototype.stringify(val);
        }
        return dataTypes.BLOB.prototype.stringify(val, undefined); // TODO: Remove unknown
    }
    if (Array.isArray(val)) {
        const partialEscape = (escVal) => escape(escVal, timeZone, dialect, format);
        if (dialect === 'postgres' && !format) {
            return dataTypes.ARRAY.prototype.stringify(val, {
                escape: partialEscape
            });
        }
        return arrayToList(val, timeZone, dialect, format);
    }
    if (typeof val !== 'string') {
        throw new Error(`Invalid value ${logger_1.logger.inspect(val)}`);
    }
    if (dialect === 'postgres' || dialect === 'sqlite' || dialect === 'mssql') {
        // http://www.postgresql.org/docs/8.2/static/sql-syntax-lexical.html#SQL-SYNTAX-STRINGS
        // http://stackoverflow.com/q/603572/130598
        val = val.replace(/'/g, "''");
        if (dialect === 'postgres') {
            // null character is not allowed in Postgres
            // Todo: type inference broken.
            val = val.replace(/\0/g, '\\0');
        }
    }
    else {
        // eslint-disable-next-line no-control-regex
        val = val.replace(/[\0\n\r\b\t\\'"\x1a]/g, s => {
            switch (s) {
                case '\0':
                    return '\\0';
                case '\n':
                    return '\\n';
                case '\r':
                    return '\\r';
                case '\b':
                    return '\\b';
                case '\t':
                    return '\\t';
                case '\x1a':
                    return '\\Z';
                default:
                    return `\\${s}`;
            }
        });
    }
    return `${(prependN ? "N'" : "'") + val}'`;
}
exports.escape = escape;
function format(sql, values, dialect) {
    values = values.slice();
    if (typeof sql !== 'string') {
        throw new Error(`Invalid SQL string provided: ${sql}`);
    }
    return sql.replace(/\?/g, match => {
        if (!values.length) {
            return match;
        }
        return escape(values.shift(), null, dialect, true);
    });
}
exports.format = format;
function formatNamedParameters(sql, values, dialect) {
    return sql.replace(/:+(?!\d)(\w+)/g, (value, key) => {
        if (dialect === 'postgres' && value.startsWith('::')) {
            return value;
        }
        if (values[key] !== undefined) {
            return escape(values[key], null, dialect, true);
        }
        throw new Error(`Named parameter "${value}" has no value in the given object.`);
    });
}
exports.formatNamedParameters = formatNamedParameters;
//# sourceMappingURL=sql-string.js.map