"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../entities/users");
const groups_1 = require("../entities/groups");
const typeorm_1 = require("typeorm");
class UserRepo {
    getUserByFacebookId(id) {
        return typeorm_1.getManager().getRepository(users_1.users).findOne({ facebook_id: id });
    }
    addUser(user) {
        return typeorm_1.getManager().getRepository(users_1.users).save(user);
    }
    getUsers() {
        return typeorm_1.getManager().getRepository(users_1.users).find();
    }
    getUserByEmail(mail) {
        return typeorm_1.getManager().getRepository(users_1.users).findOne({ email: mail });
    }
    getGroups(id) {
        return typeorm_1.getManager().getRepository(groups_1.groups).find({
            where: { id: id }
        });
    }
}
exports.UserRepo = UserRepo;
//# sourceMappingURL=user.repository.js.map