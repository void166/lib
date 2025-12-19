import {Sequelize} from 'sequelize';
import { config } from './config';

const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT}= config;

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: DB_NAME,
    password: DB_PASSWORD,
    username: DB_USER,
    host: DB_HOST,
    port: DB_PORT,
    logging: false,
    ssl: false
});


sequelize.sync({ alter: true });
console.log("✅ Database synced successfully");

export default sequelize;