import { Request, Response } from "express";
import { UserRepo } from "../repositories/user.repository";
const JWT = require('jsonwebtoken');
const config = require('../common/app.config');

export let signToken = (user) => {
    return JWT.sign({
        iss: 'Group',
        sub: user.id,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, config.JWT_SECRET);
}

export function verifyJWTToken(token) {
    return new Promise((resolve, reject) => {
        JWT.verify(token, config.JWT_SECRET, (err, decodedToken) => {
            if (err || !decodedToken) {
                return reject(err)
            }

            resolve(decodedToken)
        })
    })
}

export let authFacebook = async (req: Request, res: Response) => {
    let userRepo: UserRepo = new UserRepo();

    const token = signToken(userRepo.getUserByFacebookId(req.body.id));
    res.status(200).json({ token });
}