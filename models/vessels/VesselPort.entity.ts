import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from '../global/country/country.entity';

@Entity({ name: 'vessels_ports' })
@ObjectType()
export class VesselPort extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    code: string;

    @Field(() => String)
    @Column()
    portName: string;

    @Field(() => Country)
    @ManyToOne(() => Country)
    country: Country;
}
