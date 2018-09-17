import * as React from "react";
import "./GroupCard.scss";
import { IGroup } from "../../../model/IGroup";
import { CommonStrings } from "./loc/strings";

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
                    <div className="group-card-top">
                        <div className="cover-picture">
                            <img className="cover-picture-img" src={this.props.group.cover_picture} />
                        </div>
                    </div>
                    <div className="group-card-bottom">
                        <div className="profile-picture">
                            <img className="profile-picture-img" src={this.props.group.profil_picture} />
                        </div>
                        <div className="group-name">
                            {this.props.group.name}
                        </div>
                        <div className="group-stats-container">
                            {this.getGroupStatsItem(CommonStrings.Score, 8025)}
                            {this.getGroupStatsItem(CommonStrings.MembersCount, this.props.group.member_count)}
                            {this.getGroupStatsItem(CommonStrings.FollowersCount, this.props.group.follower_count)}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return <div>Group unknow</div>
        }
    }

    private getGroupStatsItem(title: string, value: any): JSX.Element {
        return (
            <div className="group-stats-item">
                <div className="group-stats-item-value">{value}</div>
                <div className="group-stats-item-title">{title}</div>
            </div>
        );
    }
}