const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
import { UserRepo } from "../repositories/user.repository";
import { users } from "../entities/users";
const config = require("./app.config");
//import * as config from "../common/app.config";

/**
 * Sign in with Facebook.
 */
passport.use(new FacebookTokenStrategy({
    clientID: config.oauth.facebook.clientID,
    clientSecret: config.oauth.facebook.clientSecret,
    profileFields: ["name", "email", "first_name", "last_name"]
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let userRepo: UserRepo = new UserRepo();

        console.log("accessToken : " + accessToken);
        console.log("refreshToken : " + refreshToken);
        console.log("profile : " + profile);

        let userExisting = new users();

        userExisting = await userRepo.getUserById(profile.id);

        if (userExisting) {
            return done(null, userExisting);
        }

        let user = new users();

        user.firstname = profile._json.first_name;
        user.lastname = profile._json.last_name;
        user.email = profile._json.email;
        user.facebook_id = profile.id;
        user.home_adress = profile.address;
        user.password = "";
        user.creation_date = new Date(Date.now());
        user.last_connection = new Date(Date.now());
        user.last_connection_ip = "";
        user.last_gps_location = "";

        await userRepo.addUser(user);

        done(null, user);
    }
    catch (error) {
        done(error, false, error.message);
    }
}));