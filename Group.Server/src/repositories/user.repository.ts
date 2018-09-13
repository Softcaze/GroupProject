import { users } from "../entities/users";
import { getManager } from "typeorm";

/**
 * User repository
 */
export class UserRepo {

    getAllUsers() {
        return getManager().getRepository(users).query("SELECT firstname FROM users WHERE id = 1");
    }

    getUserByFacebookId(id: string) {
        return getManager().getRepository(users).findOne({ facebook_id: id });
    }

    addUser(user: users) {
        return getManager().getRepository(users).save(user);
    }

    getUsers() {
        return getManager().getRepository(users).find();
    }

    getUserByEmail(mail: string) {
        return getManager().getRepository(users).findOne({ email: mail });
    }

    checkIfUserExists(user: users) {
        return getManager().getRepository(users).find({
            where: {
                facebook_id: user.facebook_id
            }
        })
    }
}