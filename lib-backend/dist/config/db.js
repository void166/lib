"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("./config");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = config_1.config;
const sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    database: DB_NAME,
    password: DB_PASSWORD,
    username: DB_USER,
    host: DB_HOST,
    port: DB_PORT,
    logging: false,
    ssl: false
});
exports.default = sequelize;
