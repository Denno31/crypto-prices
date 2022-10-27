import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'password_reset' })
export class PasswordReset extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column('text')
    email: string;

    @Field(() => String)
    @Column('text')
    resetToken: string;

    @Field(() => Date)
    @Column({ default: null })
    resetTokenExpires: Date;

    @Field(() => Boolean)
    @Column({ default: false })
    used: boolean;
}
