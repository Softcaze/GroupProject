"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const groups_1 = require("../entities/groups");
const lt_user_group_1 = require("../entities/lt_user_group");
const typeorm_1 = require("typeorm");
class GroupRepo {
    getGroups(id) {
        return typeorm_1.getManager().getRepository(lt_user_group_1.lt_user_group).find({
            where: { id_user: id, state: 1 },
            relations: ["id_group"]
        });
    }
    addGroup(group) {
        return typeorm_1.getManager().getRepository(groups_1.groups).save(group);
    }
    joinGroup(group) {
        return typeorm_1.getManager().getRepository(lt_user_group_1.lt_user_group).save(group);
    }
}
exports.GroupRepo = GroupRepo;
//# sourceMappingURL=group.repository.js.map