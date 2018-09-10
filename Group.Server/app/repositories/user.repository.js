"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../entities/users");
const typeorm_1 = require("typeorm");
class UserRepo {
    getAllUsers() {
        return typeorm_1.getManager().getRepository(users_1.users).find();
    }
    saveEmployee(user) {
        return typeorm_1.getManager().getRepository(users_1.users).save(user);
    }
}
exports.UserRepo = UserRepo;
//# sourceMappingURL=user.repository.js.map