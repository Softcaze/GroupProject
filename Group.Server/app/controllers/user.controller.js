"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const JWT = require('jsonwebtoken');
const user_repository_1 = require("../repositories/user.repository");
const users_1 = require("../entities/users");
const config = require('../common/app.config');
exports.saveUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let usersRepo = new user_repository_1.UserRepo();
    console.log("Received UserEmployee ==> POST");
    console.log(req.body);
    let user = new users_1.users();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.facebook_id = req.body.facebook_id;
    user.profil_picture = req.body.profil_picture;
    user.password = req.body.password;
    user.creation_date = req.body.creation_date;
    user.last_connection = req.body.last_connection;
    user.last_connection_ip = req.body.last_connection_ip;
    user.home_adress = req.body.home_adress;
    user.last_gps_location = req.body.last_gps_location;
    usersRepo.addUser(user).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.getAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let userRepo = new user_repository_1.UserRepo();
    console.log("Received GetAllUsers ==> GET");
    userRepo.getAllUsers().then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
//# sourceMappingURL=user.controller.js.map