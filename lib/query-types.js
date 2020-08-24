"use strict";
/**
 * An enum of query types used by `sequelize.query`
 *
 * @see {@link Sequelize#query}
 */
var QueryTypes;
(function (QueryTypes) {
    QueryTypes["SELECT"] = "SELECT";
    QueryTypes["INSERT"] = "INSERT";
    QueryTypes["UPDATE"] = "UPDATE";
    QueryTypes["BULKUPDATE"] = "BULKUPDATE";
    QueryTypes["BULKDELETE"] = "BULKDELETE";
    QueryTypes["DELETE"] = "DELETE";
    QueryTypes["UPSERT"] = "UPSERT";
    QueryTypes["VERSION"] = "VERSION";
    QueryTypes["SHOWTABLES"] = "SHOWTABLES";
    QueryTypes["SHOWINDEXES"] = "SHOWINDEXES";
    QueryTypes["DESCRIBE"] = "DESCRIBE";
    QueryTypes["RAW"] = "RAW";
    QueryTypes["FOREIGNKEYS"] = "FOREIGNKEYS";
    QueryTypes["SHOWCONSTRAINTS"] = "SHOWCONSTRAINTS";
})(QueryTypes || (QueryTypes = {}));
module.exports = QueryTypes;
//# sourceMappingURL=query-types.js.map