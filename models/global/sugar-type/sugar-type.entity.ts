import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Color } from '../color/color.entity';

@Entity({ name: 'global_sugar_types' })
@ObjectType()
export class SugarType extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => Color, {
        description: 'Color for anything associated with sugar type',
    })
    @ManyToOne(() => Color, (color) => color.id, { eager: true })
    color: number;
}
