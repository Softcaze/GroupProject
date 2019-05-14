import * as React from "react";
import { ListGroupEventPreviewStrings } from "./loc/strings";
import "./ListGroupEventPreview.scss";

export interface IListGroupEventProps {
    groupId: string;
    webToken: string;
    eventId: string;
}

export interface IListGroupEventState {
}

/**
 * Page du journal des publications d'un group
 */
export default class ListGroupEventPreview extends React.Component<IListGroupEventProps, IListGroupEventState> {
    constructor(props: IListGroupEventProps) {
        super(props);
    }

    public render() {
        return (
            <div className="list-group-event-preview-container">
                <div className="list-group-event-preview-title">{ListGroupEventPreviewStrings.MyEventsLabel}</div>
                <div className="hr-line"></div>
            </div>
        );
    }
}