"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStatus = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Book_1 = require("./Book");
class BookStatus extends sequelize_1.Model {
    stat_id;
    book_id;
    status_name;
}
exports.BookStatus = BookStatus;
BookStatus.init({
    stat_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true
    },
    status_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    book_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: Book_1.Books,
            key: "book_id"
        }
    }
}, {
    sequelize: db_1.default,
    tableName: "book_status",
    timestamps: true
});
