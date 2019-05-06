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
const user_repository_1 = require("../repositories/user.repository");
exports.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let userRepo = new user_repository_1.UserRepo();
    userRepo.getUsers().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
});
exports.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let userRepo = new user_repository_1.UserRepo();
    userRepo.getUserByFacebookId(req.query.facebookId).then((user) => {
        res.status(200).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
});
exports.getNews = (req, res) => __awaiter(this, void 0, void 0, function* () {
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
                    profil_picture: "https://media.licdn.com/dms/image/C5603AQF819ZsXXnvqg/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=m1fLXUD2rPAb9z6Pe8FBN0veAqEt_ilPblc0G8oNxIs"
                },
                group: {
                    id: "3",
                    name: "Les Copains",
                    creation_date: "2018-09-06 08:19:25",
                    type: 1,
                    profil_picture: "https://scontent.fcdg1-1.fna.fbcdn.net/v/t1.0-1/27657225_10213287695540003_4813781958765842156_n.jpg?_nc_cat=105&_nc_ht=scontent.fcdg1-1.fna&oh=939e29ba91e41ec1ba7974096033413b&oe=5D65B390",
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
    ];
    res.status(200).send(result);
});
//# sourceMappingURL=user.controller.js.map