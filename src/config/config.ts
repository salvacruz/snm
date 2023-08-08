import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

export const config = {
    server: {
        port: SERVER_PORT,
    },
    sql: {
        host: DB_HOST,
        port: DB_PORT,
        un: DB_USERNAME,
        pw: DB_PASSWORD,
    },
};
