import * as React from "react";
import { GroupPhotoStrings } from "./loc/strings";
import "./GroupPhoto.scss";

export interface IGroupPhotoProps {
    groupId: string;
    webToken: string;
    location: string;
}

export interface IGroupPhotoState {
}

export default class GroupPhoto extends React.Component<IGroupPhotoProps, IGroupPhotoState> {
    constructor(props: IGroupPhotoProps) {
        super(props);
    }

    public render() {
        return (
            <div className="group-photo-container">
                <div className="component-container">
                    PHOTO
                </div>
            </div>
        );
    }
}