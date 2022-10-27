import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UploadColumnType } from '../UploadColumnsTypes/UploadColumnType.entity';

@Entity({ name: 'upload_columns' })
@ObjectType({
    description: 'All upload columns that exist in our system.',
})
export class UploadColumn extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String, { description: 'Name of column.' })
    @Column()
    name: string;

    @Field(() => UploadColumnType, {
        description: 'Type of column that is uploaded.',
    })
    @ManyToOne(() => UploadColumnType)
    type: UploadColumnType;

    @Field(() => Boolean, { description: 'Can this column be nullable?' })
    @Column({ default: false })
    nullable: boolean;
}
