import dotenv from 'dotenv';
dotenv.config();


export const  config = {
    DB_USER: process.env.DB_USER!,
    DB_PASSWORD: process.env.DB_PASSWORD!,
    DB_HOST: process.env.DB_HOST!,
    DB_NAME: process.env.DB_NAME!,
    PORT: process.env.PORT! ? parseInt(process.env.PORT, 10) : 5000,
    DB_PORT: process.env.DB_PORT! ? parseInt(process.env.DB_PORT, 10) : 5432,
    JWT_SECRET_STUD: process.env.JWT_SECRET_STUD!,
    JWT_SECRET_PUB: process.env.JWT_SECRET_PUB!
}