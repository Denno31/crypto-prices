import { Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolvers {
    @Query(()=>String)
    hello():string {
        return "hello world"
    }
}

