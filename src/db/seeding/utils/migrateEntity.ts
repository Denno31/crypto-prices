import { EntityTarget } from 'typeorm';
import { AppDataSource } from '../../data-source';

import { splitDataIntoChunks } from './splitDataIntoChunks';

export const migrateEntity = async (
    entity: EntityTarget<unknown> | string,
    data: { [key: string]: unknown }[],
    connect = false,
    splitIntoChunks = false
) => {
    try {
        // if run in isolation connect to db otherwise will already have been initialized in higher level function
        if (connect) {
            await AppDataSource.initialize();
        }

        // await AppDat aSource.getRepository(entity).clear();

        if (splitIntoChunks) {
            const splitData = splitDataIntoChunks(data);

            splitData.forEach(async (chunk) => {
                try {
                    await AppDataSource.createQueryBuilder().insert().into(entity).values(chunk).execute();
                } catch (error) {
                    console.info(error);
                }
            });
        } else {
            await AppDataSource.createQueryBuilder().insert().into(entity).values(data).execute();
        }

        // dynamically get table name for logging
        const { tableName } = AppDataSource.getRepository(entity).metadata;

        console.info(`Migrated ${data.length} rows into the ${tableName} table`);

        if (connect) {
            await AppDataSource.destroy();
        }
    } catch (err) {
        console.info(err);
    }
};
