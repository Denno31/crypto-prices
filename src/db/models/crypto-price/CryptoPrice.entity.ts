import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class CryptoPrice extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    symbol: string;

    @Field(() => Number)
    @Column({ type: 'float' })
    price: number;

    @Field(() => Number)
    @Column({ type: 'float' })
    volume: number;
}
