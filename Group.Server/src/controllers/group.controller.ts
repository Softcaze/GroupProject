import { Request, Response } from "express";
import { GroupRepo } from "../repositories/group.repository";
import { lt_user_group } from "../entities/lt_user_group";
import { groups } from "../entities/groups";
import { getDateTimeNow } from "../common/functions";

/**
 * Récupèrer les groupes d'un utilisateur
 * @param req
 * @param res 
 */
export let getGroups = async (req: Request, res: Response) => {
    let groupRepo: GroupRepo = new GroupRepo();

    groupRepo.getGroups(req.query.userId).then((result: any) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
};

/**
 * Récupèrer un group à l'aide de son id
 * @param req 
 * @param res 
 */
export let getGroupById = async (req: Request, res: Response) => {
    let groupRepo: GroupRepo = new GroupRepo();

    groupRepo.getGroupById(req.query.groupId).then((result: any) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    })
}


/**
 * Retourne la liste des membres d'un groupe
 * @param req 
 * @param res 
 */
export let getGroupMembers = async (req: Request, res: Response) => {
    let groupRepo: GroupRepo = new GroupRepo();

    groupRepo.getGroupMembers(req.query.groupId).then((result) => {
        res.status(200).send(result.map((item) => item.idUser));
    }).catch((err) => {
        res.status(400).send(err);
    });
}

/**
 * Récupère le nombre de membre d'un groupe
 */
export let countGroupMembers = async (req: Request, res: Response) => {
    let groupRepo: GroupRepo = new GroupRepo();

    groupRepo.countGroupMembers(req.query.groupId).then((result) => {
        console.log(result);
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
}

/**
 * Retourne la lsite des abonnées d'un groupe
 * @param req 
 * @param res 
 */
export let getGroupFollowers = async (req: Request, res: Response) => {
    let groupRepo: GroupRepo = new GroupRepo();

    groupRepo.getGroupFollowers(req.query.groupId).then((result) => {
        res.status(200).send(result.map((item) => item.idUser));
    }).catch((err) => {
        res.status(400).send(err);
    });
}

/**
 * Récupère le nombre d'abonnés d'un groupe
 */
export let countGroupFollowers = async (req: Request, res: Response) => {
    let groupRepo: GroupRepo = new GroupRepo();

    groupRepo.countGroupFollowers(req.query.groupId).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
}

export let getFeedEventsByGroup = async (req: Request, res: Response) => {
    /*let groupRepo: GroupRepo = new GroupRepo();

    groupRepo.getGroupNews(req.query.groupId).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    })*/

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
                }
            }
        },
        {
            position: 3,
            type: "LEAVE_GROUP",
            value: {
                last_change_date: "2018-10-12 17:49:00",
                user: {
                    id: "3",
                    profil_picture: "https://scontent.fcdg1-1.fna.fbcdn.net/v/t1.0-9/27657225_10213287695540003_4813781958765842156_n.jpg?_nc_cat=105&_nc_ht=scontent.fcdg1-1.fna&oh=1cf915a40872b84361ab269012d46bdc&oe=5D673920",
                    name: "Nicolas Cazenave"
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
}

/**
 * Récupèrer les groupes de suggestion
 * @param req 
 * @param res 
 */
export let getGroupSuggestion = async (req: Request, res: Response) => {
    let groupRepo: GroupRepo = new GroupRepo();

    groupRepo.getGroupSuggestion(req.query.userId).then((result: lt_user_group[]) => {
        res.status(200).send(result.map((item) => item.idGroup));
    }).catch((err) => {
        res.status(400).send(err);
    });
};

/**
 * Ajouter un groupe
 * @param req 
 * @param res 
 */
export let addGroup = async (req: Request, res: Response) => {
    let groupRepo: GroupRepo = new GroupRepo();
    let group = new groups();

    // On récupère le groupe reçu en paramètre
    group = req.body.group;
    group.creation_date = getDateTimeNow();
    group.cover_picture = "";

    groupRepo.addGroup(group).then((result: any) => {
        let groupJoin: lt_user_group = new lt_user_group();

        groupJoin = joinUserGroup(req.body.userId, result.id, 1);

        groupRepo.joinGroup(groupJoin).then((resultJoin) => {
            res.status(200).send(resultJoin.idGroup.id);
        }).catch((err) => {
            res.status(400).send(err);
        });
    }).catch((err) => {
        res.status(400).send(err);
    });
}

/**
 * Permet à l'utilisateur de rejoindre un groupe existant en tant que membre
 * @param req 
 * @param res 
 */
export let joinAExistingGroup = async (req: Request, res: Response) => {
    let groupJoin: lt_user_group = new lt_user_group();
    let groupRepo: GroupRepo = new GroupRepo();

    groupJoin = joinUserGroup(req.body.userId, req.body.groupId, 1);

    groupRepo.joinGroup(groupJoin).then((resultJoin) => {
        res.status(200).send(resultJoin.idGroup.id);
    }).catch((err) => {
        res.status(400).send(err);
    });
}

/**
 * Permet à l'utilisateur de s'abonner à un group existant
 * @param req 
 * @param res 
 */
export let subscribeAExistingGroup = async (req: Request, res: Response) => {
    let groupJoin: lt_user_group = new lt_user_group();
    let groupRepo: GroupRepo = new GroupRepo();

    groupJoin = joinUserGroup(req.body.userId, req.body.groupId, 2);

    groupRepo.joinGroup(groupJoin).then((resultSubscribe) => {
        res.status(200).send(resultSubscribe.idGroup.id);
    }).catch((err) => {
        res.status(400).send(err);
    });
}

/**
 * Permet à l'utilisateur de quitter un groupe
 * @param req 
 * @param res 
 */
export let leaveAGroup = async (req: Request, res: Response) => {

}

/**
 * Permet de créer une liaison entre un groupe et un utilisateur 
 * @param userId 
 * @param groupId 
 */
export let joinUserGroup = function (userId: any, groupId: any, state: any) {
    let groupJoin: lt_user_group = new lt_user_group();

    groupJoin.creation_date = getDateTimeNow();
    groupJoin.idUser = userId.body.userId;
    groupJoin.idGroup = groupId.body.groupId;
    groupJoin.state = state;
    groupJoin.last_change_date = getDateTimeNow();

    return groupJoin;
}