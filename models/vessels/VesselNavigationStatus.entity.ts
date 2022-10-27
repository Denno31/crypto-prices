import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Color } from '../global/color/color.entity';

@Entity({ name: 'vessels_vessel_navigation_status' })
@ObjectType()
export class VesselNavigationStatus extends BaseEntity {
    @Field(() => Number)
    @PrimaryColumn()
    code: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => Color)
    @ManyToOne(() => Color)
    color: Color;
}
