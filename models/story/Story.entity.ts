import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'stories' })
@ObjectType()
export class Story extends BaseEntity {
    @Field(() => Int) // type-graphql field
    @PrimaryGeneratedColumn() // typeorm column
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

    @Field(() => String)
    formattedDate: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
