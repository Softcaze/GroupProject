"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../entities/users");
const typeorm_1 = require("typeorm");
class UserRepo {
    getAllUsers() {
        return typeorm_1.getManager().getRepository(users_1.users).query("SELECT firstname FROM users WHERE id = 1");
    }
    saveEmployee(user) {
        return typeorm_1.getManager().getRepository(users_1.users).save(user);
    }
    getUserById(id) {
        return typeorm_1.getManager().getRepository(users_1.users).findOne({ id: id });
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
}
exports.UserRepo = UserRepo;
//# sourceMappingURL=user.repository.js.map