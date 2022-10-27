import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class CryptoPriceArgs {
    @Field()
    id: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    symbol?: string;

    @Field({ nullable: true })
    price?: number;

    @Field({ nullable: true })
    volume?: number;
}
