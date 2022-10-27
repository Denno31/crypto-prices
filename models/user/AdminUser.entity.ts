import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('admin_users')
export class AdminUser extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column('text')
    name: string;

    @Field(() => String)
    @Column('text', { unique: true })
    email: string;

    @Field(() => String)
    @Column('text')
    password: string;

    @Field(() => String, { nullable: true })
    @Column('text', { nullable: true })
    resetToken: string;

    @Field(() => Date, { nullable: true })
    @Column('timestamp', { nullable: true })
    resetTokenExpires: Date;

    @Field(() => Int)
    @Column('int')
    role: number;
}
