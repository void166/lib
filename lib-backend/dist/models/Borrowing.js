"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrowing = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Book_1 = require("./Book");
const Student_1 = require("./Student");
class Borrowing extends sequelize_1.Model {
    borrowing_id;
    book_id;
    stud_id;
    date_borrowed;
    date_return;
}
exports.Borrowing = Borrowing;
Borrowing.init({
    borrowing_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    date_borrowed: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    date_return: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    book_id: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: Book_1.Books,
            key: "book_id"
        }
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
    tableName: "borrowing",
    timestamps: true
});
