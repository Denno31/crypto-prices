import { CryptoPrice } from '../../models/crypto-price/CryptoPrice.entity';
import CryptoPricingData from '../sample-data/crypto-pricing/crypto-pricing.json';
import { migrateEntity } from '../utils/migrateEntity';

export const migrateCryptoPrices = async (connect = false) => {
    migrateEntity(CryptoPrice, CryptoPricingData, connect);
};

if (require.main) {
    migrateCryptoPrices(true);
}
