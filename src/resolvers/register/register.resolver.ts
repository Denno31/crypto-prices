import { ApolloError, UserInputError } from 'apollo-server-express';
import { hash } from 'bcryptjs';
import { Args, Mutation, Resolver } from 'type-graphql';
import { User } from '../../db/models/users/user.entity';
import { RegisterUserInput } from '../../resolver-types/users/RegisterUserInput';
import { MessageResponseWithSuccessAndErrors } from '../../shared/MessageResponseWithSuccessAndErrors';

@Resolver()
export class RegisterResolvers {
    @Mutation(() => MessageResponseWithSuccessAndErrors)
    async register(@Args() { firstName, lastName, email, password }: RegisterUserInput) {
        try {
            // check if email exists

            const user = await User.findOne({ where: { email } });
            if (user) {
                throw new UserInputError('The email you provided is already registered');
            }

            // hash password
            const hashedPassword = await hash(password, 10);

            // insert new user
            await User.insert({
                firstName,
                lastName,
                email,
                password: hashedPassword,
            });
            return {
                success: true,
                message: 'Registration was successful',
            };
        } catch (error) {
            throw new ApolloError(error);
        }
    }
}
