import { Point } from 'geojson';
import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from '../../global/country/country.entity';
import { Coordinate } from '../../types/Coordinate';
import { MillType } from '../millType/millType.entity';

@Entity({ name: 'flow_map_mills' })
@ObjectType()
export class Mill extends BaseEntity {
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

    @Field(() => MillType)
    @ManyToOne(() => MillType, { eager: true })
    type: MillType;

    @Field(() => Number)
    @Column()
    tcd: number;
}
