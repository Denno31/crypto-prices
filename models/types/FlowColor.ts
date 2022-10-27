import { Field, ObjectType } from 'type-graphql';

@ObjectType({
    description: 'RGB Color Arrays for source and target of each flow',
})
export class FlowColor {
    @Field(() => [Number])
    source: number[];

    @Field(() => [Number])
    target: number[];
}
