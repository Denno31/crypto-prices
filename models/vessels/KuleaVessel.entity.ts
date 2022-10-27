import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { SugarType } from '../global/sugar-type/sugar-type.entity';

@Entity({ name: 'vessels_kulea' })
@ObjectType()
export class KuleaVessel extends BaseEntity {
    @Field(() => String, { description: 'MMSI number of the vessel (AIS identifier)' })
    @PrimaryColumn()
    mmsi: string;

    @Field(() => Number, { nullable: true, description: 'MT of Sugar' })
    @Column({ nullable: true })
    sugarQuantity: number;

    @Field(() => SugarType, { nullable: true, description: 'Type of sugar' })
    @ManyToOne(() => SugarType)
    sugarType: SugarType;

    @Field(() => String, { nullable: true, description: 'Sugar shipper' })
    @Column({ nullable: true })
    shipper: string;

    @Field(() => Date)
    @UpdateDateColumn()
    updatedOn: Date;
}
