import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Color } from '../color/color.entity';
import { Country } from '../country/country.entity';

@Entity({ name: 'global_cities' })
@ObjectType()
export class City extends BaseEntity {
    @Field(() => Int) // type-graphql field
    @PrimaryGeneratedColumn() // typeorm column
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => Country)
    @ManyToOne(() => Country, (country) => country.cities, { eager: true })
    country: Country;

    @Field(() => Color, {
        description: 'Color for anything associated with city',
    })
    @ManyToOne(() => Color, (color) => color.id, { eager: true })
    color: number;
}
