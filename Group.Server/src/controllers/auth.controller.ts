import { Request, Response } from "express";
import { UserRepo } from "../repositories/user.repository";
const JWT = require('jsonwebtoken');
import { users } from "../entities/users";
const config = require('../common/app.config');

export let setFacebookConnection = async (req: Request, res: Response) => {
    let usersRepo: UserRepo = new UserRepo();

    console.log("Received Facebook Connection ==> POST");
    console.log(req.body);

    res.send("OK, connexion de " + req.body.name);
}

export let signToken = user => {
    return JWT.sign({
        iss: 'Group',
        sub: user.id,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, config.JWT_SECRET);
}

export let authFacebook = async (req: Request, res: Response) => {
    console.log("Nouvelle connexion : " + req);
    const token = signToken(req.body.user);
    res.status(200).json({ token });
}