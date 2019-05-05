import * as React from "react";
import "./GroupCard.scss";
import { IGroup } from "../../../model/IGroup";
import { CommonStrings } from "./loc/strings";

export interface IGroupCardProps {
    group: IGroup;
    size?: number;
    centered?: boolean;
}

export interface IGroupCardState {

}

export const GroupCardSize = {
    Small: 0,
    Medium: 1,
    Large: 2
};

/**
 * Carte présentant un groupe
 */
export default class GroupCard extends React.Component<IGroupCardProps, IGroupCardState> {
    constructor(props: IGroupCardProps) {
        super(props);
    }

    public render() {
        let containerClassNames: string[] = ["groupcard-container"];
        switch (this.props.size) {
            case GroupCardSize.Small:
                containerClassNames.push("size-small");
                break;
            case GroupCardSize.Medium:
                containerClassNames.push("size-medium");
                break;
            case GroupCardSize.Large:
                containerClassNames.push("size-large");
                break;
        }

        if (this.props.centered == true) {
            containerClassNames.push("centered")
        }

        if (this.props.group) {
            return (
                <div className={containerClassNames.join(" ")}>
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
                            {this.getGroupStatsItem(CommonStrings.Score, this.props.group.score)}
                            {this.getGroupStatsItem(CommonStrings.MembersCount, this.props.group.member_count)}
                            {this.getGroupStatsItem(CommonStrings.FollowersCount, this.props.group.follower_count)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div>Group unknow</div>;
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