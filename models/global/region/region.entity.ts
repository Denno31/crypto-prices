import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'global_regions' })
@ObjectType()
export class Region extends BaseEntity {
    @Field(() => Int) // type-graphql field
    @PrimaryGeneratedColumn() // typeorm column
    id: number;

    @Field(() => String)
    @Column()
    name: string;
}
