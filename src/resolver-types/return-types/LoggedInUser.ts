import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LoggedInUser {
    @Field(()=>Number)
    id: number

    @Field(()=>String)
    firstName:string

    @Field(()=>String)
    lastName:string

    @Field(()=>String)
    email:string


}