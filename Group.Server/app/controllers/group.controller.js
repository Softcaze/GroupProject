"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const group_repository_1 = require("../repositories/group.repository");
const lt_user_group_1 = require("../entities/lt_user_group");
const groups_1 = require("../entities/groups");
const functions_1 = require("../common/functions");
exports.getGroups = (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log("getGroups");
    let groupRepo = new group_repository_1.GroupRepo();
    groupRepo.getGroups(req.query.userid).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
});
exports.getGroupSuggestion = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let groupRepo = new group_repository_1.GroupRepo();
    groupRepo.getGroupSuggestion(req.query.id).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
});
exports.addGroup = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let groupRepo = new group_repository_1.GroupRepo();
    let group = new groups_1.groups();
    group = req.body.group;
    group.creation_date = functions_1.getDateTimeNow();
    group.cover_picture = "";
    groupRepo.addGroup(group).then((result) => {
        let groupJoin = new lt_user_group_1.lt_user_group();
        groupJoin.creation_date = functions_1.getDateTimeNow();
        groupJoin.id_user = req.body.id;
        groupJoin.id_group = result.id;
        groupJoin.state = 1;
        groupJoin.last_change_date = functions_1.getDateTimeNow();
        groupRepo.joinGroup(groupJoin).then((resultJoin) => {
            res.status(200).send(resultJoin);
        }).catch((err) => {
            res.status(400).send(err);
        });
    }).catch((err) => {
        res.status(400).send(err);
    });
});
//# sourceMappingURL=group.controller.js.map