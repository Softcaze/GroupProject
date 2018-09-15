import { users } from "../entities/users";
import { groups } from "../entities/groups";
import { getManager } from "typeorm";

/**
 * User repository
 */
export class UserRepo {
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

    getGroups(id: number) {
        return getManager().getRepository(groups).find({
            where: { id: id }
        })
    }
}