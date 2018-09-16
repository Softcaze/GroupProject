import { Request, Response } from "express";
import { UserRepo } from "../repositories/user.repository";
import { users } from "../entities/users";

/**
 * Récupérer tous les utilisateurs
 * @param req 
 * @param res 
 */
export let getUsers = async (req: Request, res: Response) => {
    let userRepo: UserRepo = new UserRepo();

    userRepo.getUsers().then((result: any) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
};

/**
 * Retourne l'utilisateur correspondant à l'id facebook
 * @param req 
 * @param res 
 */
export let getUser = async (req: Request, res: Response) => {
    let userRepo: UserRepo = new UserRepo();

    userRepo.getUserByFacebookId(req.query.fbid).then((user: users) => {
        res.status(200).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
};