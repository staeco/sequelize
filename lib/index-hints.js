"use strict";
/**
 * An enum of index hints to be used in mysql for querying with index hints
 */
var IndexHints;
(function (IndexHints) {
    IndexHints["USE"] = "USE";
    IndexHints["FORCE"] = "FORCE";
    IndexHints["IGNORE"] = "IGNORE";
})(IndexHints || (IndexHints = {}));
module.exports = IndexHints;
//# sourceMappingURL=index-hints.js.map