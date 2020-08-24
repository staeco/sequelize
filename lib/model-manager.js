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
exports.ModelManager = void 0;
const toposort_class_1 = __importDefault(require("toposort-class"));
const _ = __importStar(require("lodash"));
class ModelManager {
    constructor(sequelize) {
        this.sequelize = sequelize;
        this.models = [];
    }
    addModel(model) {
        this.models.push(model);
        this.sequelize.models[model.name] = model;
        return model;
    }
    removeModel(modelToRemove) {
        this.models = this.models.filter(model => model.name !== modelToRemove.name);
        delete this.sequelize.models[modelToRemove.name];
    }
    getModel(against, options = {}) {
        const attribute = options.attribute || 'name';
        return this.models.find(model => model[attribute] === against);
    }
    get all() {
        return this.models;
    }
    /**
     * Iterate over Models in an order suitable for e.g. creating tables.
     * Will take foreign key constraints into account so that dependencies are visited before dependents.
     *
     * @param {Function} iterator method to execute on each model
     * @param {object} [options] iterator options
     * @private
     */
    forEachModel(iterator, options = { reverse: true }) {
        const models = {};
        const sorter = new toposort_class_1.default();
        for (const model of this.models) {
            let deps = [];
            let tableName = model.getTableName();
            if (_.isObject(tableName)) {
                tableName = `${tableName.schema}.${tableName.tableName}`;
            }
            models[tableName] = model;
            for (const attrName in model.rawAttributes) {
                if (Object.prototype.hasOwnProperty.call(model.rawAttributes, attrName)) {
                    const attribute = model.rawAttributes[attrName];
                    if (attribute.references) {
                        const dep = attribute.references.model;
                        if (_.isObject(dep)) {
                            deps.push(`${dep.schema}.${dep.tableName}`);
                        }
                        else {
                            deps.push(dep);
                        }
                    }
                }
            }
            deps = deps.filter(dep => tableName !== dep);
            sorter.add(tableName, deps);
        }
        let sorted = sorter.sort();
        if (options.reverse) {
            sorted = sorted.reverse();
        }
        for (const name of sorted) {
            iterator(models[name]);
        }
    }
}
exports.ModelManager = ModelManager;
module.exports = ModelManager;
module.exports.default = ModelManager;
//# sourceMappingURL=model-manager.js.map