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
const user_repository_1 = require("../repositories/user.repository");
const JWT = require('jsonwebtoken');
const config = require('../common/app.config');
exports.signToken = (user) => {
    return JWT.sign({
        iss: 'Group',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, config.JWT_SECRET);
};
function verifyJWTToken(webToken) {
    return new Promise((resolve, reject) => {
        JWT.verify(webToken, config.JWT_SECRET, (err, decodedToken) => {
            if (err || !decodedToken) {
                return reject(err);
            }
            resolve(decodedToken);
        });
    });
}
exports.verifyJWTToken = verifyJWTToken;
exports.authFacebook = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let userRepo = new user_repository_1.UserRepo();
    const webToken = exports.signToken(userRepo.getUserByFacebookId(req.body.facebookId));
    res.status(200).json({ webToken });
});
//# sourceMappingURL=auth.controller.js.map