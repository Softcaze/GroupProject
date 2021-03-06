const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
import { UserRepo } from "../repositories/user.repository";
import { users } from "../entities/users";
const config = require("./app.config");
const JWT = require('jsonwebtoken');

export class PasspordStrategies {

    public static initialize() {
        /**
         * Sign in with Facebook.
         */
        passport.use(new FacebookTokenStrategy({
            clientID: config.oauth.facebook.clientID,
            clientSecret: config.oauth.facebook.clientSecret,
            profileFields: ["name", "email"]
        }, async (accessToken, refreshToken, profile, done) => {
            try {
                let userRepo: UserRepo = new UserRepo();
                let userExisting = await userRepo.getUserByFacebookId(profile.id);

                if (userExisting) {
                    return done(null, userExisting);
                }

                let user = new users();

                user.firstname = profile._json.first_name;
                user.lastname = profile._json.last_name;
                user.email = profile._json.email;
                user.profil_picture = "";
                user.facebook_id = profile.id;
                user.home_adress = "";
                user.password = "";
                user.creation_date = "2018-09-15 08:19:25" as any;//new Date(Date.now());
                user.last_connection = "2018-09-15 08:19:25" as any;//= new Date(Date.now());
                user.last_connection_ip = "";
                user.last_gps_location = "";

                await userRepo.addUser(user);

                done(null, user);
            }
            catch (error) {
                done(error, false, error.message);
            }
        }));
    }
}