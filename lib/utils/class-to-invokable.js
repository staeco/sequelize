"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classToInvokable = void 0;
/**
 * Wraps a constructor to not need the `new` keyword using a proxy.
 * Only used for data types.
 *
 * @param {Function} Class The class instance to wrap as invocable.
 * @returns {Proxy} Wrapped class instance.
 *
 * @private
 */
function classToInvokable(Class) {
    return new Proxy(Class, {
        apply(Target, thisArg, args) {
            return new Target(...args);
        },
        construct(Target, args) {
            return new Target(...args);
        },
        get(target, p) {
            return Reflect.get(target, p);
        }
    });
}
exports.classToInvokable = classToInvokable;
//# sourceMappingURL=class-to-invokable.js.map