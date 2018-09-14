import { IGroup } from "./IGroup";
import { IUser } from "./IUser";

export interface IEvent {
    id: string;
    name: string;
    creation_date: Date;
    type: number;
    location: string;
    address: string;
    id_group: IGroup;
    id_author: IUser;
}
