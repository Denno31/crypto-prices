import { AppDataSource } from '../data-source';
import { migrateCryptoPrices } from './by-entity/crypto-pricing';
import { migrateUsers } from './by-entity/users';

const seed = async () => {
    await AppDataSource.initialize();
    await migrateUsers();
    await migrateCryptoPrices();
    await AppDataSource.destroy();
};

if (require.main === module) {
    seed();
}
