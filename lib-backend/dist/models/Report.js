"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Transaction_1 = require("./Transaction");
const Borrowing_1 = require("./Borrowing");
class Report extends sequelize_1.Model {
    report_id;
    trans_id;
    borrowing_id;
    report_date;
}
exports.Report = Report;
Report.init({
    report_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    report_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    trans_id: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: Transaction_1.Transaction,
            key: "trans_id"
        }
    },
    borrowing_id: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: Borrowing_1.Borrowing,
            key: "borrowing_id"
        }
    }
}, {
    sequelize: db_1.default,
    tableName: "reports",
    timestamps: true
});
