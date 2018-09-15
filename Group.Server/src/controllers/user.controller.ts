import { Request, Response } from "express";
import { UserRepo } from "../repositories/user.repository";

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
