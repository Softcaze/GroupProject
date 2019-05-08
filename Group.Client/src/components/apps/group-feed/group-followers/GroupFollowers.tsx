import * as React from "react";
import { GroupFeedService } from "../../group-feed/GroupFeed.service";
import { GroupFeedStrings } from "../loc/strings";
import { IUser } from "../../../../model/IUser";
import "./GroupFollowers.scss";

let FollowerImg = require("./images/multiple_users_abonnes.png");

export interface IGroupFollowersProps {
    groupId: string;
    webToken: string;
}

export interface IGroupFollowersState {
    users: IUser[];
    countFollowers: number;
}

/**
 * Liste des followers d'un groupe
 */
export default class GroupFollowers extends React.Component<IGroupFollowersProps, IGroupFollowersState> {
    constructor(props: IGroupFollowersProps) {
        super(props);

        this.state = {
            users: null,
            countFollowers: null
        };

        // on charge les followers d'un groupe
        GroupFeedService.getGroupFollowers(this.props.webToken, this.props.groupId).then((users: IUser[]) => {
            this.setState({ users: users });
        });

        // on recupère le nombre d'abonnés dans un groupe
        GroupFeedService.countGroupFollowers(this.props.webToken, this.props.groupId).then((countFollowers: number) => {
            this.setState({ countFollowers: countFollowers });
            console.log(countFollowers);
        });
    }

    public render() {
        if (this.state.users != null && this.state.countFollowers != null) {
            return (
                <div className="group-followers">
                    <div>
                        <img className="title-img" src={FollowerImg} />
                        <span className="title-value">{GroupFeedStrings.ListFollowersLabel} ({this.state.countFollowers})</span>
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