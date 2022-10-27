import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'stories_temporary' })
@ObjectType()
export class TemporaryStory extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column()
    link: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    img: string;

    @Field(() => String)
    @Column()
    source: string;

    @Field(() => Date)
    @Column()
    date: Date;
}
