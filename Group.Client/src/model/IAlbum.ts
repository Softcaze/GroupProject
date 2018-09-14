import { IGroup } from "./IGroup";

export interface IAlbum {
    id: string;
    name: string;
    id_group: IGroup;
    photo_count: number;

}
