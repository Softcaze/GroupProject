import { users } from "../entities/users";
import { getManager } from "typeorm";

/**
 * User repository
 */
export class UserRepo {

    getAllUsers() {
        return getManager().getRepository(users).find();
    }

    saveUser(user: users) {
        return getManager().getRepository(users).save(user);
    }

    checkIfUserExists(user: users) {
        return getManager().getRepository(users).find({
            where: {
                facebook_id: user.facebook_id
            }
        })
    }

}