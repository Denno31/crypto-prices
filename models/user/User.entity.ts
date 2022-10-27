import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column('text', { unique: true })
    email: string;

    @Field(() => String)
    @Column('text')
    password: string;

    @Field(() => String)
    @Column('text')
    firstName: string;

    @Field(() => String)
    @Column('text')
    lastName: string;

    @Field(() => String)
    @Column('int', { default: 0 })
    tokenVersion: number;

    @Field({ nullable: true })
    @Column('text', { nullable: true })
    resetPasswordToken: string;

    @Field(() => [Int], { nullable: true })
    @Column('simple-array', { nullable: true })
    perms: number[];
}
