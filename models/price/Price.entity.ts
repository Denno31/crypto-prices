import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { City } from '../global/city/city.entity';

@Entity({ name: 'prices' })
@ObjectType()
@Unique(['city.id', 'date'])
export class Price extends BaseEntity {
    @Field(() => Int) // type-graphql field
    @PrimaryGeneratedColumn() // typeorm column
    id: number;

    @Field(() => Number)
    @Column({ type: 'numeric' })
    price: number;

    @Field(() => City)
    @ManyToOne(() => City, { eager: true })
    city: City;

    @Field(() => Date)
    @Column()
    date: Date;
}
