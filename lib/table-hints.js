"use strict";
/**
 * An enum of table hints to be used in mssql for querying with table hints
 */
var TableHints;
(function (TableHints) {
    TableHints["NOLOCK"] = "NOLOCK";
    TableHints["READUNCOMMITTED"] = "READUNCOMMITTED";
    TableHints["UPDLOCK"] = "UPDLOCK";
    TableHints["REPEATABLEREAD"] = "REPEATABLEREAD";
    TableHints["SERIALIZABLE"] = "SERIALIZABLE";
    TableHints["READCOMMITTED"] = "READCOMMITTED";
    TableHints["TABLOCK"] = "TABLOCK";
    TableHints["TABLOCKX"] = "TABLOCKX";
    TableHints["PAGLOCK"] = "PAGLOCK";
    TableHints["ROWLOCK"] = "ROWLOCK";
    TableHints["NOWAIT"] = "NOWAIT";
    TableHints["READPAST"] = "READPAST";
    TableHints["XLOCK"] = "XLOCK";
    TableHints["SNAPSHOT"] = "SNAPSHOT";
    TableHints["NOEXPAND"] = "NOEXPAND";
})(TableHints || (TableHints = {}));
module.exports = TableHints;
//# sourceMappingURL=table-hints.js.map