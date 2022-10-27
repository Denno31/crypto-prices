import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'upload_columns_types' })
@ObjectType({
    description: 'Master list of column types that can be uploaded.',
})
export class UploadColumnType extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String, { description: 'Name of type.' })
    @Column()
    name: string;
}
