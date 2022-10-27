import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express, { Express } from 'express';
import { buildSchema } from 'type-graphql';
import { AppDataSource } from './db/data-source';
import { AuthResolver } from './resolvers/auth/auth.resolver';
import { CryptoPricesResolvers } from './resolvers/crypto-prices/crypto-prices.resolver';
import { RegisterResolvers } from './resolvers/register/register.resolver';
import { UserResolvers } from './resolvers/users/users.resolver';

const main = async () => {
    await AppDataSource.initialize();
    const apolloServer = new ApolloServer({
        context: ({ req, res }) => ({ req, res }),
        schema: await buildSchema({
            resolvers: [UserResolvers, RegisterResolvers, AuthResolver, CryptoPricesResolvers],
            validate: false,
        }),
    });
    await apolloServer.start();
    const app: Express = express();
    apolloServer.applyMiddleware({ app });
    app.get('/', (req, res) => res.send('Hello world!'));
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

main().catch((err) => console.log(err));
