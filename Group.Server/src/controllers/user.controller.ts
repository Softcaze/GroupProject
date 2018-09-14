import { Request, Response } from "express";
const JWT = require('jsonwebtoken');
import { UserRepo } from "../repositories/user.repository";
import { users } from "../entities/users";
const config = require('../common/app.config');

export let getAllUsers = async (req: Request, res: Response) => {
    console.log("GetAllUser")
    let userRepo: UserRepo = new UserRepo();

    console.log("Received GetAllUsers ==> GET");

    userRepo.getUsers().then((result: any) => {
        console.log("Result : " + JSON.stringify(result));
        res.send(result);
    });
};
