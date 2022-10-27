import { Field, ObjectType } from "type-graphql";
import { LoggedInUser } from "./LoggedInUser";

@ObjectType()
export class LoginResponse {
    @Field(()=>String)
    token
    @Field(()=>LoggedInUser)
    loggedInUser:LoggedInUser
}