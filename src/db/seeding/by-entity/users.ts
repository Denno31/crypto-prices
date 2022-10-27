import bcrypt from 'bcryptjs';
import { User } from '../../models/users/user.entity';
import usersData from '../sample-data/users/users.json';
import { migrateEntity } from '../utils/migrateEntity';

const getUsersWithHashedPassword = async () => {
    const users = [];
    for (let i = 0; i < usersData.length; i = +1) {
        usersData[i].password = bcrypt.hashSync(usersData[i].password, 10);
        users.push(usersData[i]);
    }

    return users;
};

export const migrateUsers = async (connect = false) => {
    try {
        const users = await getUsersWithHashedPassword();

        migrateEntity(User, users, connect);
    } catch (err) {
        console.log(err);
    }
};

if (require.main === module) {
    migrateUsers(true);
}
