import { ApolloError } from 'apollo-server-express';
import { Args, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { CryptoPrice } from '../../db/models/crypto-price/CryptoPrice.entity';
import { CryptoPriceArgs } from '../../resolver-types/crypto-prices/crypto-price';
import { CryptoPriceResponse } from '../../resolver-types/return-types/crypto-prices/CryptoPrice';
import { MessageResponseWithSuccessAndErrors } from '../../shared/MessageResponseWithSuccessAndErrors';
import { UserContext } from '../../types/context/User';
import { checkAuth } from '../../utils/checkAuthToken';

@Resolver()
export class CryptoPricesResolvers {
    @Query(() => [CryptoPriceResponse])
    async getCryptoPrices(@Ctx() { req }: UserContext) {
        try {
            checkAuth(req);
            const cryptoPrices = await CryptoPrice.find();
            return cryptoPrices;
        } catch (error) {
            throw new ApolloError(error);
        }
    }

    @Query(() => CryptoPriceResponse)
    async getCryptoPriceById(@Args() { id }: CryptoPriceArgs, @Ctx() { req }: UserContext) {
        try {
            checkAuth(req);
            const cryptoPrice = await CryptoPrice.findOneBy({ id });
            return cryptoPrice;
        } catch (error) {
            throw new ApolloError(error);
        }
    }

    @Mutation(() => CryptoPrice)
    async updateCryptoPrice(@Args() { id, name, symbol, volume, price }: CryptoPriceArgs, @Ctx() { req }: UserContext) {
        try {
            checkAuth(req);
            const cryptoPrice = await CryptoPrice.findOneBy({ id });
            if (!cryptoPrice) {
                throw new ApolloError('The item does not exist!');
            }
            cryptoPrice.name = name || cryptoPrice.name;
            cryptoPrice.symbol = symbol || cryptoPrice.symbol;
            cryptoPrice.volume = volume || cryptoPrice.volume;
            cryptoPrice.price = price || cryptoPrice.price;

            const savedCryptoPrice = await cryptoPrice.save();
            return savedCryptoPrice;
        } catch (error) {
            throw new ApolloError(error);
        }
    }

    @Mutation(() => MessageResponseWithSuccessAndErrors)
    async deleteCryptoPrice(@Args() { id }: CryptoPriceArgs, @Ctx() { req }: UserContext) {
        try {
            checkAuth(req);
            const cryptoPrice = await CryptoPrice.findOneBy({ id });
            if (!cryptoPrice) {
                throw new ApolloError('The item does not exist!');
            }
            await cryptoPrice.remove();
            return {
                message: 'The Item was removed successfully.',
                success: true,
            };
        } catch (error) {
            throw new ApolloError(error);
        }
    }
}
