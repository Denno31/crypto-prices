import { Field, Float, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { City } from '../global/city/city.entity';
import { SugarType } from '../global/sugar-type/sugar-type.entity';
import { Origin } from './Origin.entity';

@Entity({ name: 'parities_landed_costs' })
@ObjectType()
@Unique(['date', 'city.id', 'origin.id', 'sugarType.id'])
export class LandedCost extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Float) // account for decimal numbers
    @Column()
    price: string;

    @Field(() => Date)
    @Column()
    date: Date;

    @Field(() => City)
    @ManyToOne(() => City)
    city: City;

    @Field(() => Origin)
    @ManyToOne(() => Origin)
    origin: Origin;

    @Field(() => SugarType)
    @ManyToOne(() => SugarType)
    sugarType: SugarType;
}
