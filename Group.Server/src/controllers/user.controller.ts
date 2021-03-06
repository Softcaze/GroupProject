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

    userRepo.getUserByFacebookId(req.query.facebookId).then((user: users) => {
        res.status(200).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
};


/**
 * Récupère les activités d'un utilisateurs
 * @param req 
 * @param res 
 */
export let getNews = async (req: Request, res: Response) => {
    let result = [
        {
            position: 1,
            type: "CREATE_EVENT",
            value: {
                events: {
                    id: 1,
                    name: "Karting",
                    creation_date: "2018-10-11 17:32:50",
                    type: 2,
                    location: "-0.434402;43.333177",
                    address: "8 rue de la chiasse",
                    idGroup: 2,
                    idAuthor: 3
                },
                user_event: [{
                    idUser: 2,
                    idEvent: 1,
                }, {
                    idUser: 3,
                    idEvent: 1
                }
                ]
            }
        },
        {
            position: 2,
            type: "JOIN_GROUP",
            value: {
                last_change_date: "2018-10-12 17:49:00",
                user: {
                    id: "3",
                    profile_picture: "https://media.licdn.com/dms/image/C5603AQF819ZsXXnvqg/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=m1fLXUD2rPAb9z6Pe8FBN0veAqEt_ilPblc0G8oNxIs"
                },
                group: {
                    id: "3",
                    name: "Les Copains",
                    creation_date: "2018-09-06 08:19:25",
                    type: 1,
                    profile_picture: "https://bde-eeigm.fr/wp-content/uploads/2016/11/photo-de-profil-generique-garcon.png",
                    cover_picture: "https://spark.adobe.com/images/landing/examples/hiking-fb-cover.jpg",
                    member_count: 10,
                    follower_count: 28
                }
            }
        },
        {
            position: 3,
            type: "CREATE_ALBUM",
            value: {
                album: {
                    id: 1,
                    name: "Karting",
                    idGroup: 2,
                    photo_count: 2,
                    photos: [{
                        url: "http://localhost:3001/file/photos/1537480103860-66216714095112314151319.jpg",
                        creation_date: "2018-10-12 15:40:20",
                        id_author: "3",
                        id_album: "1",
                        comment_count: 5,
                        like_count: 2
                    }, {
                        url: "http://localhost:3001/file/photos/1537480103860-66216714095112314151319.jpg",
                        creation_date: "2018-10-12 15:40:20",
                        id_author: "3",
                        comment_count: 5,
                        like_count: 2
                    }
                    ]
                }
            }
        }
    ]

    res.status(200).send(result);
};