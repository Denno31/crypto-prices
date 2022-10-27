import { Field, Int, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Origin } from '../../parities/Origin.entity';
import { City } from '../city/city.entity';
import { Region } from '../region/region.entity';
import { SugarType } from '../sugar-type/sugar-type.entity';

@Entity({ name: 'global_countries' })
@ObjectType()
export class Country extends BaseEntity {
    @Field(() => Int) // type-graphql field
    @PrimaryGeneratedColumn() // typeorm column
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    code: string;

    @Field(() => String)
    @Column()
    emoji: string;

    @Field(() => Boolean, { defaultValue: false, description: 'Does this country appear in the flow map UI?' })
    @Column()
    hasFlowMapData: boolean;

    @Field(() => Boolean, { defaultValue: false, description: 'Does this country have parities data available?' })
    @Column()
    hasParitiesData: boolean;

    @Field(() => Boolean, { defaultValue: false, description: 'Does this country have prices data available?' })
    @Column()
    hasPriceData: boolean;

    @Field(() => Region)
    @ManyToOne(() => Region, { eager: true })
    region: Region;

    @Field(() => [City])
    @OneToMany(() => City, (city) => city.country)
    cities: City[];

    @Field(() => [Origin])
    @ManyToMany(() => Origin)
    @JoinTable({ name: 'parities_destinations_origins' })
    origins: Origin[];

    @Field(() => [SugarType], { nullable: true })
    @ManyToMany(() => SugarType)
    @JoinTable({ name: 'parities_destinations_sugar_types' })
    sugarTypes: SugarType[];
}
