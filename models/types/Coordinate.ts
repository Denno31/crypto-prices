import { Field, Float, ObjectType } from 'type-graphql';

@ObjectType({
    description: 'Coordinate structure returned from spatial Point column',
})
export class Coordinate {
    @Field(() => Float)
    x: number;

    @Field(() => Float)
    y: number;
}
