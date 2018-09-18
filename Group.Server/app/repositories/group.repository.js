"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const groups_1 = require("../entities/groups");
const lt_user_group_1 = require("../entities/lt_user_group");
const typeorm_1 = require("typeorm");
class GroupRepo {
    getGroups(userId) {
        return typeorm_1.getManager().getRepository(lt_user_group_1.lt_user_group).find({
            where: { id_user: userId, state: 1 },
            relations: ["id_group"]
        });
    }
    addGroup(group) {
        return typeorm_1.getManager().getRepository(groups_1.groups).save(group);
    }
    joinGroup(group) {
        return typeorm_1.getManager().getRepository(lt_user_group_1.lt_user_group).save(group);
    }
    getGroupSuggestion(userId) {
        return typeorm_1.getManager().getRepository(lt_user_group_1.lt_user_group).createQueryBuilder("lt_user_group")
            .leftJoinAndSelect("lt_user_group.id_group", "group")
            .where("lt_user_group.id_user != :id", { id: userId })
            .take(3)
            .getMany();
    }
}
exports.GroupRepo = GroupRepo;
//# sourceMappingURL=group.repository.js.map