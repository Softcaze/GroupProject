import { groups } from "../entities/groups";
import { users } from "../entities/users";
import { lt_user_group } from "../entities/lt_user_group";
import { getManager } from "typeorm";

/**
 * User repository
 */
export class GroupRepo {
    getGroups(id: number) {
        return getManager().getRepository(lt_user_group).find({
            where: { id_user: id, state: 1 },
            relations: ["id_group"]
        })
    }

    addGroup(group: groups) {
        return getManager().getRepository(groups).save(group);
    }

    joinGroup(group: lt_user_group) {
        return getManager().getRepository(lt_user_group).save(group);
    }
}