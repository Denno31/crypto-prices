import { ApolloError } from "apollo-server-express";
import { Args, Mutation, Resolver } from "type-graphql";
import { compare } from "bcryptjs";
import { User } from "../../db/models/users/user.entity";
import { LoginUserInputs } from "../../resolver-types/users/LoginUserInputs";
import { MessageResponseWithSuccessAndErrors } from "../../shared/MessageResponseWithSuccessAndErrors";
import { LoginResponse } from "../../resolver-types/return-types/LoginResponse";
import { generateJWT } from "./utils/utils";

@Resolver()
export class AuthResolver {
  @Mutation(() => LoginResponse)
  async login(@Args() { email, password }: LoginUserInputs) {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new ApolloError("This user does not exist. Kindly register");
      }

      const passwordIsValid = await compare(password, user.password);
      if (!passwordIsValid) {
        throw new ApolloError("Wrong credentials");
      }
      return {
        loggedInUser: user,
        token: generateJWT(user),
      };
    } catch (error) {
      throw new ApolloError(error);
    }
  }
}
