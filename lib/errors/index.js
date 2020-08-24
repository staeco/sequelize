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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationErrorItem = exports.ValidationError = exports.UnknownConstraintError = exports.UniqueConstraintError = exports.TimeoutError = exports.ScopeError = exports.QueryError = exports.OptimisticLockError = exports.InvalidConnectionError = exports.InstanceError = exports.HostNotReachableError = exports.HostNotFoundError = exports.ForeignKeyConstraintError = exports.ExclusionConstraintError = exports.EmptyResultError = exports.EagerLoadingError = exports.DatabaseError = exports.ConnectionTimedOutError = exports.ConnectionRefusedError = exports.ConnectionError = exports.ConnectionAcquireTimeoutError = exports.BulkRecordError = exports.AsyncQueueError = exports.AssociationError = exports.AggregateError = exports.AccessDeniedError = exports.BaseError = void 0;
const base_error_1 = __importDefault(require("./base-error"));
exports.BaseError = base_error_1.default;
const aggregate_error_1 = __importDefault(require("./aggregate-error"));
exports.AggregateError = aggregate_error_1.default;
const association_error_1 = __importDefault(require("./association-error"));
exports.AssociationError = association_error_1.default;
const bulk_record_error_1 = __importDefault(require("./bulk-record-error"));
exports.BulkRecordError = bulk_record_error_1.default;
const connection_error_1 = __importDefault(require("./connection-error"));
exports.ConnectionError = connection_error_1.default;
const database_error_1 = __importDefault(require("./database-error"));
exports.DatabaseError = database_error_1.default;
const eager_loading_error_1 = __importDefault(require("./eager-loading-error"));
exports.EagerLoadingError = eager_loading_error_1.default;
const empty_result_error_1 = __importDefault(require("./empty-result-error"));
exports.EmptyResultError = empty_result_error_1.default;
const instance_error_1 = __importDefault(require("./instance-error"));
exports.InstanceError = instance_error_1.default;
const optimistic_lock_error_1 = __importDefault(require("./optimistic-lock-error"));
exports.OptimisticLockError = optimistic_lock_error_1.default;
const query_error_1 = __importDefault(require("./query-error"));
exports.QueryError = query_error_1.default;
const scope_error_1 = __importDefault(require("./scope-error"));
exports.ScopeError = scope_error_1.default;
const validation_error_1 = __importStar(require("./validation-error"));
exports.ValidationError = validation_error_1.default;
Object.defineProperty(exports, "ValidationErrorItem", { enumerable: true, get: function () { return validation_error_1.ValidationErrorItem; } });
const async_queue_1 = require("../dialects/mssql/async-queue");
Object.defineProperty(exports, "AsyncQueueError", { enumerable: true, get: function () { return async_queue_1.AsyncQueueError; } });
const access_denied_error_1 = __importDefault(require("./connection/access-denied-error"));
exports.AccessDeniedError = access_denied_error_1.default;
const connection_acquire_timeout_error_1 = __importDefault(require("./connection/connection-acquire-timeout-error"));
exports.ConnectionAcquireTimeoutError = connection_acquire_timeout_error_1.default;
const connection_refused_error_1 = __importDefault(require("./connection/connection-refused-error"));
exports.ConnectionRefusedError = connection_refused_error_1.default;
const connection_timed_out_error_1 = __importDefault(require("./connection/connection-timed-out-error"));
exports.ConnectionTimedOutError = connection_timed_out_error_1.default;
const host_not_found_error_1 = __importDefault(require("./connection/host-not-found-error"));
exports.HostNotFoundError = host_not_found_error_1.default;
const host_not_reachable_error_1 = __importDefault(require("./connection/host-not-reachable-error"));
exports.HostNotReachableError = host_not_reachable_error_1.default;
const invalid_connection_error_1 = __importDefault(require("./connection/invalid-connection-error"));
exports.InvalidConnectionError = invalid_connection_error_1.default;
const exclusion_constraint_error_1 = __importDefault(require("./database/exclusion-constraint-error"));
exports.ExclusionConstraintError = exclusion_constraint_error_1.default;
const foreign_key_constraint_error_1 = __importDefault(require("./database/foreign-key-constraint-error"));
exports.ForeignKeyConstraintError = foreign_key_constraint_error_1.default;
const timeout_error_1 = __importDefault(require("./database/timeout-error"));
exports.TimeoutError = timeout_error_1.default;
const unknown_constraint_error_1 = __importDefault(require("./database/unknown-constraint-error"));
exports.UnknownConstraintError = unknown_constraint_error_1.default;
const unique_constraint_error_1 = __importDefault(require("./validation/unique-constraint-error"));
exports.UniqueConstraintError = unique_constraint_error_1.default;
//# sourceMappingURL=index.js.map