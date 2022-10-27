import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('admin_invitations')
export class AdminInvitation extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column('text')
    email: string;

    @Field(() => Int)
    @Column('text', { default: 1 })
    role: number;

    @Field(() => String)
    @Column('text')
    inviteToken: string;

    @Field(() => Date)
    @Column({ default: null })
    inviteTokenExpires: Date;

    @Field(() => Boolean)
    @Column({ default: false })
    used: boolean;

    @Field(() => [Int], { nullable: true })
    @Column('simple-array', { nullable: true })
    perms: number[];
}
