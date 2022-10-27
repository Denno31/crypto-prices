import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class CryptoPriceResponse {
    @Field(() => String)
    name: string;

    @Field(() => String)
    symbol: string;

    @Field(() => Number)
    price: number;

    @Field(() => Number)
    volume: number;
}
