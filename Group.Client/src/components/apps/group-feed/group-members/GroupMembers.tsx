import * as React from "react";
import { GroupFeedService } from "../../group-feed/GroupFeed.service";
import { GroupFeedStrings } from "../loc/strings";
import { IUser } from "../../../../model/IUser";
import { Constants } from "../../../../common/Constants";
import "./GroupMembers.scss";

let MemberImg = require("./images/multiple_users_participants.png");

export interface IGroupMembersProps {
    groupId: string;
    webToken: string;
}

export interface IGroupMembersState {
    users: IUser[];
    countMembers: number;
}

/**
 * Liste des membres d'un groupe
 */
export default class GroupMembers extends React.Component<IGroupMembersProps, IGroupMembersState> {
    constructor(props: IGroupMembersProps) {
        super(props);

        this.state = {
            users: null,
            countMembers: null,
        };

        // on charge les membres d'un groupe
        GroupFeedService.getGroupMembers(this.props.webToken, this.props.groupId, Constants.LimitPeopleDisplayed.PREVIEW).then((users: IUser[]) => {
            this.setState({ users: users });
        });

        // on recupère le nombre de membre dans un groupe
        GroupFeedService.countGroupMembers(this.props.webToken, this.props.groupId).then((countMembers: number) => {
            this.setState({ countMembers: countMembers });
        });
    }

    public render() {
        if (this.state.users != null && this.state.countMembers != null) {
            return (
                <div className="group-members">
                    <div>
                        <img className="title-img" src={MemberImg} />
                        <span className="title-value">{GroupFeedStrings.ListMembersLabel} ({this.state.countMembers})</span>
                    </div>
                    {this.state.users.map((user) => {
                        return (
                            <div className="container-user" key={"key_" + user.id}>
                                <img src={user.profil_picture} />
                                <br />
                                <span>{user.firstname} {user.lastname}</span>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return (
                null
            );
        }
    }
}