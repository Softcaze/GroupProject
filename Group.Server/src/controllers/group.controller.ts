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
 * Retourne la liste des membres d'un groupe
 * @param req 
 * @param res 
 */
export let getMembers = async (req: Request, res: Response) => {
    let groupRepo: GroupRepo = new GroupRepo();

    groupRepo.getGroupMembers(req.query.groupId).then((result) => {
        res.status(200).send(result.map((item) => item.id_user));
    }).catch((err) => {
        res.status(400).send(err);
    });
}

/**
 * Retourne la lsite des abonnées d'un groupe
 * @param req 
 * @param res 
 */
export let getSubscribers = async (req: Request, res: Response) => {
    let groupRepo: GroupRepo = new GroupRepo();

    groupRepo.getGroupSubscribers(req.query.groupId).then((result) => {
        res.status(200).send(result.map((item) => item.id_user));
    }).catch((err) => {
        res.status(400).send(err);
    });
}

/**
 * Récupèrer les groupes de suggestion
 * @param req 
 * @param res 
 */
export let getGroupSuggestion = async (req: Request, res: Response) => {
    let groupRepo: GroupRepo = new GroupRepo();

    groupRepo.getGroupSuggestion(req.query.userId).then((result: lt_user_group[]) => {
        res.status(200).send(result.map((item) => item.id_group));
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
            res.status(200).send(resultJoin.id_group.id);
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
        res.status(200).send(resultJoin.id_group.id);
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
        res.status(200).send(resultSubscribe.id_group.id);
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
    groupJoin.id_user = userId.body.userId;
    groupJoin.id_group = groupId.body.groupId;
    groupJoin.state = state;
    groupJoin.last_change_date = getDateTimeNow();

    return groupJoin;
}