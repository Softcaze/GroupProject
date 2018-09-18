import { users } from "../entities/users";
import { groups } from "../entities/groups";
import { getManager } from "typeorm";

/**
 * User repository
 */
export class UserRepo {
    getUserByFacebookId(facebookId: string) {
        return getManager().getRepository(users).findOne({ facebook_id: facebookId });
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

    getGroups(userId: number) {
        return getManager().getRepository(groups).find({
            where: { id: userId }
        })
    }
}