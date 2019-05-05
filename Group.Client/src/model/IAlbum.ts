import { IGroup } from "./IGroup";

export interface IAlbum {
    id: string;
    name: string;
    idGroup: IGroup;
    photo_count: number;

}
