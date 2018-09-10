import { users } from "../entities/users";
import { getManager } from "typeorm";

/**
 * User repository
 */
export class UserRepo {

    getAllUsers() {
        return getManager().getRepository(users).find();
    }

    saveEmployee(user: users) {
        return getManager().getRepository(users).save(user);
    }

}