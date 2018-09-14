import { Request, Response } from "express";
const JWT = require('jsonwebtoken');
import { UserRepo } from "../repositories/user.repository";
import { users } from "../entities/users";
const config = require('../common/app.config');

export let saveUser = async (req: Request, res: Response) => {
    let usersRepo: UserRepo = new UserRepo();

    console.log("Received UserEmployee ==> POST");
    console.log(req.body);

    let user: users = new users();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.facebook_id = req.body.facebook_id;
    user.profil_picture = req.body.profil_picture;
    user.password = req.body.password;
    user.creation_date = req.body.creation_date;
    user.last_connection = req.body.last_connection;
    user.last_connection_ip = req.body.last_connection_ip;
    user.home_adress = req.body.home_adress;
    user.last_gps_location = req.body.last_gps_location;

    usersRepo.addUser(user).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let getAllUsers = async (req: Request, res: Response) => {
    console.log("GetAllUser")
    let userRepo: UserRepo = new UserRepo();

    console.log("Received GetAllUsers ==> GET");

    userRepo.getUsers().then((result: any) => {
        console.log("Result : " + JSON.stringify(result));
        res.send(result);
    });
};
