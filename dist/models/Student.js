"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Student extends sequelize_1.Model {
    stud_id;
    fname;
    lname;
    gender;
    age;
    contact_ID;
    email;
    password;
}
exports.Student = Student;
Student.init({
    stud_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    fname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db_1.default,
    tableName: "students",
    timestamps: true
});
