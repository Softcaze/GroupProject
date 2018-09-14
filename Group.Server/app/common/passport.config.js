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
const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const user_repository_1 = require("../repositories/user.repository");
const users_1 = require("../entities/users");
const config = require("./app.config");
const JWT = require('jsonwebtoken');
passport.use(new FacebookTokenStrategy({
    clientID: config.oauth.facebook.clientID,
    clientSecret: config.oauth.facebook.clientSecret,
    profileFields: ["name", "email"]
}, (accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
    try {
        let userRepo = new user_repository_1.UserRepo();
        let userExisting = yield userRepo.getUserByFacebookId(profile.id);
        if (userExisting) {
            return done(null, userExisting);
        }
        let user = new users_1.users();
        user.firstname = profile._json.first_name;
        user.lastname = profile._json.last_name;
        user.email = profile._json.email;
        user.profil_picture = "";
        user.facebook_id = profile.id;
        user.home_adress = "";
        user.password = "";
        user.creation_date = "2018-09-15 08:19:25";
        user.last_connection = "2018-09-15 08:19:25";
        user.last_connection_ip = "";
        user.last_gps_location = "";
        yield userRepo.addUser(user);
        done(null, user);
    }
    catch (error) {
        done(error, false, error.message);
    }
})));
//# sourceMappingURL=passport.config.js.map