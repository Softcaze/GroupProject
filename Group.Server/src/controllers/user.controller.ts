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
                    profil_picture: "https://media.licdn.com/dms/image/C5603AQF819ZsXXnvqg/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=m1fLXUD2rPAb9z6Pe8FBN0veAqEt_ilPblc0G8oNxIs",
                    name: "Guillaume Cazenave"
                },
                group: {
                    id: "3",
                    name: "Les Copains",
                    creation_date: "2018-09-06 08:19:25",
                    type: 1,
                    profil_picture: "https://scontent.fcdg1-1.fna.fbcdn.net/v/t1.0-1/27657225_10213287695540003_4813781958765842156_n.jpg?_nc_cat=105&_nc_ht=scontent.fcdg1-1.fna&oh=939e29ba91e41ec1ba7974096033413b&oe=5D65B390",
                    cover_picture: "https://spark.adobe.com/images/landing/examples/hiking-fb-cover.jpg",
                    member_count: 10,
                    follower_count: 28,
                    score: 500
                }
            }
        },

        {
            position: 4,
            type: "ADD_PHOTO",
            value: {
                last_change_date: "2018-10-12 17:49:00",
                user: {
                    id: "3",
                    profil_picture: "https://media.licdn.com/dms/image/C5603AQF819ZsXXnvqg/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=m1fLXUD2rPAb9z6Pe8FBN0veAqEt_ilPblc0G8oNxIs",
                    name: "Guillaume Cazenave"
                },
                photo: {
                    id: 1,
                    url: "https://www.ot-batzsurmer.fr/medias/images/prestataires/multitailles/800x600_01-racing-kart-jade-1327042.jpg",
                    creation_date: "2018-10-12 17:49:00",
                    id_abldum: 2
                },
                group: {
                    id: "3",
                    name: "Les Copains",
                    creation_date: "2018-09-06 08:19:25",
                    type: 1,
                    profil_picture: "https://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2015/06/21/les-minions-prets-conquerir-la-france.jpg?itok=OSQCCDZM",
                    cover_picture: "https://spark.adobe.com/images/landing/examples/hiking-fb-cover.jpg",
                    member_count: 10,
                    follower_count: 28,
                    score: 500
                }
            }
        },

    ]

    res.status(200).send(result);
};