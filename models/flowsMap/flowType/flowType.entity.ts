import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { FlowColor } from '../../types/FlowColor';

@Entity({ name: 'flow_map_flow_types' })
@ObjectType()
export class FlowType extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    className: string;

    @Field(() => FlowColor)
    @Column('simple-json')
    colors: { source: number[]; target: number[] };
}
