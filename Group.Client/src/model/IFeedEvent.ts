import { IAlbum } from "./IAlbum";
import { IEvent } from "./IEvent";
import { IGroup } from "./IGroup";

export interface IFeedEvent {
    type: string;
    position: number;
    value: any;
}