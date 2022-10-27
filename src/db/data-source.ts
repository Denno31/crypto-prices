import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';


dotenv.config();

const  isProduction =  process.env.NODE_ENV  === 'production'

export const options: DataSourceOptions = {
    type: 'postgres',
    host: isProduction ? process.env.PROD_DB_HOST : process.env.DEV_DB_HOST,
    username: isProduction ? process.env.PROD_DB_USERNAME : process.env.DEV_DB_USERNAME,
    port: 5432,
    password: isProduction ? process.env.PROD_DB_PASSWORD : process.env.DEV_DB_PASSWORD,
    database: isProduction ? process.env.PROD_DB_DATABASE : process.env.DEV_DB_DATABASE,
    synchronize: true,
    entities: [`${__dirname}/models/**/*.entity.*`],
    migrations: [`${__dirname}/migrations/*.ts`],
    migrationsRun: true,
    subscribers: [] as string[],
    namingStrategy: new SnakeNamingStrategy(),
};

export const AppDataSource = new DataSource(options);
