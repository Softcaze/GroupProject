import { IUser } from "./IUser";
import { IGroup } from "./IGroup";

export interface ILT_User_Group {
    id?: string;
    creation_date?: Date;
    id_user?: IUser;
    id_group?: IGroup;
    state?: number;
    last_change_date?: Date;

}