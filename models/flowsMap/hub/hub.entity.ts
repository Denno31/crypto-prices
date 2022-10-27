import { Point } from 'geojson';
import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from '../../global/country/country.entity';
import { Coordinate } from '../../types/Coordinate';

@Entity({ name: 'flow_map_hubs' })
@ObjectType()
export class Hub extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => Country)
    @ManyToOne(() => Country, { eager: true })
    country: Country;

    @Field(() => Coordinate)
    @Index({ spatial: true })
    @Column({
        type: 'point',
        spatialFeatureType: 'Point',
        srid: 4326,
        nullable: true,
    })
    coordinates: Point;
}
