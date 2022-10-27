import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FlowType } from '../flowType/flowType.entity';
import { Hub } from '../hub/hub.entity';

@Entity({ name: 'flow_map_flows' })
@ObjectType()
export class Flow extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Hub)
    @ManyToOne(() => Hub)
    from: Hub;

    @Field(() => Hub)
    @ManyToOne(() => Hub)
    to: Hub;

    @Field(() => FlowType)
    @ManyToOne(() => FlowType)
    flowType: number;

    @Field(() => Number)
    @Column()
    hqw: number;

    @Field(() => Number)
    @Column()
    lqw: number;

    @Field(() => Number)
    @Column()
    vhp: number;

    @Field(() => Number)
    @Column()
    br: number;

    @Field(() => Number)
    @Column()
    year: number;

    @Field(() => Number)
    @Column()
    flowSum: number;
}
