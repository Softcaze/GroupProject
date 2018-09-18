import { IGroup } from "./IGroup";

export interface IUser {
    id?: string;
    facebook_id?: string;
    firstname?: string;
    lastname?: string;
    profil_picture?: string;
    email?: string;
    password?: string;
    creation_date?: Date;
    last_connection?: Date;
    last_connection_ip?: string;
    home_adress?: string;
    last_gps_location?: string;
    groups?: IGroup[];
}