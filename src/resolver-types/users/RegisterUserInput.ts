import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class RegisterUserInput {
    @Field(()=>String)
    firstName:string

    @Field(()=>String)
    lastName:string

    @Field(()=>String)
    email:string
    
    @Field(()=>String)
    password:string
}

