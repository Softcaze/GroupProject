import * as React from "react";
import "./GroupCard.scss";
import { IGroup } from "../../../model/IGroup";

export interface IGroupCardProps {
    group: IGroup;
}

export interface IGroupCardState {

}

/**
 * Carte présentant un groupe
 */
export default class GroupCard extends React.Component<IGroupCardProps, IGroupCardState> {

    constructor(props: IGroupCardProps) {
        super(props);
    }

    public render() {
        if (this.props.group) {
            return (
                <div className="groupcard-container">
                    <div className="cover-picture">
                        <img src={this.props.group.cover_picture} />
                    </div>
                </div>
            );
        }
        else {
            return <div>Group unknow</div>
        }
    }
}