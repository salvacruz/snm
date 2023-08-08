import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entity/User.js';
import { config } from './config.js';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: config.sql.host,
    port: config.sql.port,
    username: config.sql.un,
    password: config.sql.pw,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});
