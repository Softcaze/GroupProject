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

    getGroupById(groupId: number) {
        return getManager().getRepository(groups).find({
            where: { id: groupId }
        })
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
            .leftJoinAndSelect("lt_user_group.idUser", "users")
            .where("lt_user_group.idGroup = :id AND state = 1", { id: groupId })
            .getMany();
    }

    countGroupMembers(groupId: number) {
        return getManager().getRepository(lt_user_group).createQueryBuilder("lt_user_group")
            .select("count(*) as countMembers")
            .where("lt_user_group.idGroup = :id AND state = 1", { id: groupId })
            .getRawMany();
    }

    getGroupFollowers(groupId: number) {
        return getManager().getRepository(lt_user_group).createQueryBuilder("lt_user_group")
            .leftJoinAndSelect("lt_user_group.idUser", "user")
            .where("lt_user_group.idGroup = :id AND state = 2", { id: groupId })
            .getMany();
    }

    countGroupFollowers(groupId: number) {
        return getManager().getRepository(lt_user_group).createQueryBuilder("lt_user_group")
            .select("count(*) as countFollowers")
            .where("lt_user_group.idGroup = :id AND state = 2", { id: groupId })
            .getRawMany();
    }
}