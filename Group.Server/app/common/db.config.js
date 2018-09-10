"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const users_1 = require("../entities/users");
const albums_1 = require("../entities/albums");
const event_state_1 = require("../entities/event_state");
const events_1 = require("../entities/events");
const groups_1 = require("../entities/groups");
const lt_user_event_1 = require("../entities/lt_user_event");
const lt_user_group_1 = require("../entities/lt_user_group");
const photo_comments_1 = require("../entities/photo_comments");
const photo_likes_1 = require("../entities/photo_likes");
const photos_1 = require("../entities/photos");
const user_state_1 = require("../entities/user_state");
exports.dbOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "groupdb",
    entities: [
        users_1.users, albums_1.albums, event_state_1.event_state, events_1.events, groups_1.groups, lt_user_event_1.lt_user_event, lt_user_group_1.lt_user_group, photo_comments_1.photo_comments, photo_likes_1.photo_likes, photos_1.photos, user_state_1.user_state
    ],
    synchronize: true,
};
//# sourceMappingURL=db.config.js.map