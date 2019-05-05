import { IAlbum } from "./IAlbum";
import { IEvent } from "./IEvent";
import { IGroup } from "./IGroup";

export interface IFeedEvent {
    type: string;
    idUser: number;
    ablum?: IAlbum;
    event?: IEvent;
    group?: IGroup;
    date?: Date;
}