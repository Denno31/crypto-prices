import { ObjectType } from 'type-graphql';
import { Entity } from 'typeorm';

import { Vessel } from './Vessel.entity';

// table to temporarily store vessels that have a null value for locode (need to be reviewed manually)
@Entity({ name: 'vessels_null_locode_vessels' })
@ObjectType()
export class NullLocodeVessel extends Vessel {}
