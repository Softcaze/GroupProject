import { Request, Response } from "express";
import { UserRepo } from "../repositories/user.repository";
const JWT = require('jsonwebtoken');
const config = require('../common/app.config');

/**
 * Génére un token d'accès
 * @param user 
 */
export let signToken = (user) => {
    return JWT.sign({
        iss: 'Group',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, config.JWT_SECRET);
}

/**
 * Vérifie le token d'accès
 * @param webToken 
 */
export function verifyJWTToken(webToken) {
    return new Promise((resolve, reject) => {
        JWT.verify(webToken, config.JWT_SECRET, (err, decodedToken) => {
            if (err || !decodedToken) {
                return reject(err)
            }

            resolve(decodedToken)
        })
    })
}

/**
 * Authentication avec facebook
 * @param req 
 * @param res 
 */
export let authFacebook = async (req: Request, res: Response) => {
    let userRepo: UserRepo = new UserRepo();

    const webToken = signToken(userRepo.getUserByFacebookId(req.body.facebookId));
    res.status(200).json({ webToken });
}