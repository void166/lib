"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Borrowing_1 = require("./Borrowing");
const Student_1 = require("./Student");
class Transaction extends sequelize_1.Model {
    trans_id;
    trans_date;
    trans_name;
    stud_id;
    borrowing_id;
}
exports.Transaction = Transaction;
Transaction.init({
    trans_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    trans_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    trans_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    borrowing_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: Borrowing_1.Borrowing,
            key: "borrowing_id"
        },
    },
    stud_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: Student_1.Student,
            key: "stud_id"
        }
    }
}, {
    sequelize: db_1.default,
    tableName: "transactions",
    timestamps: true
});
