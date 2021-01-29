const BaseError = require('./base-error');
/**
 * Thrown when a query is passed invalid options (see message for details)
 */
class QueryError extends BaseError {
    constructor(message) {
        super(message);
        this.name = 'SequelizeQueryError';
    }
}
module.exports = QueryError;
//# sourceMappingURL=query-error.js.map