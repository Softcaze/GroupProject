import { IAlbum } from "./IAlbum";
import { IUser } from "./IUser";
import { IEvent } from "./IEvent";

export interface IGroup {
    id?: string;
    name?: string;
    creation_date?: Date;
    type?: number;
    profil_picture?: string | null;
    cover_picture?: string;
    member_count?: number;
    follower_count?: number;
    albumss?: IAlbum[];
    eventss?: IEvent[];
    users?: IUser[];
}
