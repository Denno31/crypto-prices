import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'vessels_vessel_types' })
@ObjectType()
export class VesselType extends BaseEntity {
    @Field(() => Number)
    @PrimaryColumn()
    code: number;

    @Field(() => String)
    @Column()
    name: string;
}
