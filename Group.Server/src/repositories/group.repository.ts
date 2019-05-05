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
            where: { idUser: userId, state: 1 },
            relations: ["idGroup"]
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
            .leftJoinAndSelect("lt_user_group.idGroup", "group")
            .where("lt_user_group.idUser != :id", { id: userId })
            .take(3)
            .getMany();
    }


    getGroupMembers(groupId: number) {
        return getManager().getRepository(lt_user_group).createQueryBuilder("lt_user_group")
            .leftJoinAndSelect("lt_user_group.id_user", "users")
            .where("lt_user_group.id_group = :id AND state = 1", { id: groupId })
            .getMany();
    }

    getGroupSubscribers(groupId: number) {
        return getManager().getRepository(lt_user_group).createQueryBuilder("lt_user_group")
            .leftJoinAndSelect("lt_user_group.id_group", "users")
            .where("lt_user_group.id_group = :id AND state = 2", { id: groupId })
            .getMany();
    }
}