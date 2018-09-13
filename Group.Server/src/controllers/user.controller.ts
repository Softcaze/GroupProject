import { Request, Response } from "express";
const JWT = require('jsonwebtoken');
import { UserRepo } from "../repositories/user.repository";
import { users } from "../entities/users";
const config = require('../common/app.config');

export let signToken = user => {
    return JWT.sign({
        iss: 'Group',
        sub: user.id,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, config.JWT_SECRET);
}

export let authFacebook = async (req: Request, res: Response) => {
    const token = signToken(req.body.user);
    res.status(200).json({ token });
}

export let saveUser = async (req: Request, res: Response) => {
    let empRepo: UserRepo = new UserRepo();

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

    empRepo.saveEmployee(user).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let getAllUsers = async (req: Request, res: Response) => {
    let userRepo: UserRepo = new UserRepo();

    console.log("Received GetAllUsers ==> GET");

    userRepo.getAllUsers().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};
