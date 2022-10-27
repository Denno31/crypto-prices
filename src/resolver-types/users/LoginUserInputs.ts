import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class LoginUserInputs {
    @Field(()=>String)
    email

    @Field(()=>String)
    password

}