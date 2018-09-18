import { groups } from "../entities/groups";
import { users } from "../entities/users";
import { lt_user_group } from "../entities/lt_user_group";
import { getManager } from "typeorm";
import { NOTFOUND } from "dns";

/**
 * User repository
 */
export class GroupRepo {
    getGroups(userId: number) {
        return getManager().getRepository(lt_user_group).find({
            where: { id_user: userId, state: 1 },
            relations: ["id_group"]
        });
    }

    addGroup(group: groups) {
        return getManager().getRepository(groups).save(group);
    }

    joinGroup(group: lt_user_group) {
        return getManager().getRepository(lt_user_group).save(group);
    }

    getGroupSuggestion(userId: number) {
        return getManager().getRepository(lt_user_group).createQueryBuilder("lt_user_group")
            .leftJoinAndSelect("lt_user_group.id_group", "group")
            .where("lt_user_group.id_user != :id", { id: userId })
            .take(3)
            .getMany();
    }
}