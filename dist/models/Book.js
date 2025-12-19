"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const BookStatus_1 = require("./BookStatus");
class Books extends sequelize_1.Model {
    book_id;
    bk_title;
    bk_name;
    publisher;
    author;
    bk_num;
    pub_date;
    stat_ID;
}
exports.Books = Books;
Books.init({
    book_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    bk_title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bk_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    publisher: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bk_num: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    pub_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    stat_ID: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: BookStatus_1.BookStatus,
            key: "stat_ID"
        }
    }
}, {
    sequelize: db_1.default,
    tableName: "books",
    timestamps: true
});
