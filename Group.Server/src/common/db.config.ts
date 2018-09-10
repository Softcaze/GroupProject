import "reflect-metadata";
import { ConnectionOptions } from "typeorm";
import { users } from "../entities/users";
import { albums } from "../entities/albums";
import { event_state } from "../entities/event_state";
import { events } from "../entities/events";
import { groups } from "../entities/groups";
import { lt_user_event } from "../entities/lt_user_event";
import { lt_user_group } from "../entities/lt_user_group";
import { photo_comments } from "../entities/photo_comments";
import { photo_likes } from "../entities/photo_likes";
import { photos } from "../entities/photos";
import { user_state } from "../entities/user_state";

export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "groupdb",
    entities: [
        users, albums, event_state, events, groups, lt_user_event, lt_user_group, photo_comments, photo_likes, photos, user_state
    ],
    synchronize: true,
}