import { Request, Response } from "express";
import { UserRepo } from "../repositories/user.repository";
const JWT = require('jsonwebtoken');
const config = require('../common/app.config');

export let setFacebookConnection = async (req: Request, res: Response) => {
    let usersRepo: UserRepo = new UserRepo();
    console.log("setFacebookConnection");

    console.log("Received Facebook Connection ==> POST");
    console.log(req.body);

    res.send("OK, connexion de " + req.body.name);
}

export let signToken = (user) => {
    console.log(user);
    console.log(user.id);
    return JWT.sign({
        iss: 'Group',
        sub: user.id,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, config.JWT_SECRET);
}

export let authFacebook = async (req: Request, res: Response) => {
    console.log("Nouvelle connexion : " + JSON.stringify(req.body));

    let userRepo: UserRepo = new UserRepo();

    const token = signToken(userRepo.getUserByFacebookId(req.body.id));
    res.status(200).json({ token });
}