import { Field, Float, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { KuleaVessel } from './KuleaVessel.entity';
import { VesselNavigationStatus } from './VesselNavigationStatus.entity';
import { VesselPort } from './VesselPort.entity';
import { VesselType } from './VesselType.entity';

@Entity({ name: 'vessels' })
@ObjectType()
export class Vessel extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String, { description: 'MMSI number of the vessel (AIS identifier)' })
    @Column({ unique: true })
    mmsi: string;

    @Field(() => String, { description: 'Date and Time (in UTC) when position was recorded by AIS' })
    @Column({ nullable: true })
    timestamp: string;

    @Field(() => Float, { description: 'Geographical latitude (WGS84)' })
    @Column()
    latitude: string;

    @Field(() => Float, { description: 'Geographical longitude (WGS84)' })
    @Column()
    longitude: string;

    @Field(() => Float, { description: 'Course over ground (degrees)' })
    @Column()
    course: string;

    @Field(() => Float, { description: 'Speed over ground (knots)' })
    @Column()
    speed: string;

    @Field(() => Number, {
        description: "Heading (degrees) of the vessel's hull. A value of 511 indicates there is no heading data.",
    })
    @Column()
    heading: number;

    @Field(() => VesselNavigationStatus, { description: 'Navigation status according to AIS Specification' })
    @ManyToOne(() => VesselNavigationStatus, (navStat) => navStat.code)
    navstat: number;

    @Field(() => Number, { description: 'IMO number of the vessel' })
    @Column({ unique: true })
    imo: number;

    @Field(() => String, { description: 'Vessel name' })
    @Column()
    name: string;

    @Field(() => String, { nullable: true, description: 'Callsign of the vessel' })
    @Column({ nullable: true })
    callsign: string;

    @Field(() => VesselType, { description: 'Type of the vessel according to AIS Specification' })
    @ManyToOne(() => VesselType, (type) => type.code)
    type: number;

    @Field(() => Number, { description: 'Dimension (meters) from AIS GPS antenna to the Bow of the vessel' })
    @Column()
    a: number;

    @Field(() => Number, {
        description: 'Dimension (meters) from AIS GPS antenna to the Stern of the vessel (Vessel Length = A + B)',
    })
    @Column()
    b: number;

    @Field(() => Number, { description: 'Dimension (meters) from AIS GPS antenna to the Port of the vessel' })
    @Column()
    c: number;

    @Field(() => Number, {
        description: 'Dimension (meters) from AIS GPS antenna to the Starboard of the vessel (Vessel Width = C + D)',
    })
    @Column()
    d: number;

    @Field(() => Float, { description: 'Current draught (meters) of the vessel' })
    @Column()
    draught: string;

    @Field(() => String, { description: 'Port of destination (manually entered by the Master)' })
    @Column()
    destination: string;

    @Field(() => String, {
        description: 'A uniquely assigned ID by the United Nations for the destination port',
    })
    @Column()
    locode: string;

    @Field(() => String, {
        nullable: true,
        description: 'Estimated Time of Arrival at the port of destination (manually entered by the Master)',
    })
    @Column({ nullable: true })
    etaAis: string;

    @Field(() => String, { description: 'Estimated Time of Arrival in full date/time format' })
    @Column()
    eta: string;

    @Field(() => String, {
        nullable: true,
        description: 'Estimated Time of Arrival (in UTC) prediction based on the current speed of the vessel ',
    })
    @Column({ nullable: true })
    etaPredicted: string;

    @Field(() => Number, {
        nullable: true,
        description: "The shortest sea route (in nautical miles) from the vessel's position to the destination port",
    })
    @Column({ nullable: true })
    distanceRemaining: number;

    @Field(() => String, { description: 'Source of AIS data - Terrestrial (TER) or Satellite (SAT)' })
    @Column()
    src: string;

    @Field(() => String, { description: 'Name of the World zone where the vessel is located' })
    @Column()
    zone: string;

    @Field(() => Boolean, { description: 'Indicates whether the vessel is inside ECA/SECA zone' })
    @Column()
    eca: boolean;

    @Field(() => String, { description: 'Time at which lambda function is called' })
    @Column()
    updatedAt: string;

    @Field(() => KuleaVessel, { description: 'Time at which lambda function is called' })
    @OneToOne(() => KuleaVessel, (kuleaVessel) => kuleaVessel.mmsi)
    @JoinColumn({ name: 'mmsi' })
    kuleaVessel: KuleaVessel;

    @Field(() => VesselPort, { nullable: true, description: 'The id of destination port' })
    @ManyToOne(() => VesselPort, { nullable: true })
    destinationPort: VesselPort;

    @Field(() => VesselPort, { nullable: true, description: 'The id of last visited port' })
    @ManyToOne(() => VesselPort, { nullable: true })
    lastPort: VesselPort;

    @Field(() => String, { nullable: true, description: 'Departure date from last visited port' })
    @Column({ nullable: true })
    lastPortDeparture: string;
}
