import * as React from "react";
import { GroupFeedService } from "./../GroupFeed.service";
import { IUser } from "../../../../model/IUser";
import { Constants } from "../../../../common/Constants";
import { ListGroupPeopleStrings } from "./loc/strings";
import "./ListGroupPeople.scss";

export interface IListGroupPeopleProps {
    groupId: string;
    webToken: string;
    location: string;
}

export interface IListGroupPeopleState {
    users: IUser[];
}

export default class ListGroupPeople extends React.Component<IListGroupPeopleProps, IListGroupPeopleState> {
    constructor(props: IListGroupPeopleProps) {
        super(props);

        this.state = {
            users: null,
        };

        if (this.props.location === Constants.LocationType.MEMBER) {
            GroupFeedService.getGroupMembers(this.props.webToken, this.props.groupId, Constants.LimitPeopleDisplayed.FULL).then((users: IUser[]) => {
                this.setState({ users: users });
            });
        } else if (this.props.location === Constants.LocationType.FOLLOWER) {
            GroupFeedService.getGroupFollowers(this.props.webToken, this.props.groupId, Constants.LimitPeopleDisplayed.FULL).then((users: IUser[]) => {
                this.setState({ users: users });
            });
        }
    }

    public render() {
        if (this.state.users != null) {
            return (
                <div className="list-group-people-container">
                    <div className="component-container">
                        <div className="list-group-people-title">
                            {this.props.location === Constants.LocationType.MEMBER ? (
                                <span>{ListGroupPeopleStrings.MembersLabel}</span>
                            ) : this.props.location === Constants.LocationType.FOLLOWER ? (
                                <span>{ListGroupPeopleStrings.FollowersLabel}</span>
                            ) : (
                                        <div></div>
                                    )}
                        </div>

                        <div className="list-content-user">
                            {this.state.users.map((user) => {
                                return (
                                    <div className="content-user" key={"key_" + user.id}>
                                        <img src={user.profil_picture} />
                                        <div className="content-user-information">
                                            <span className="content-user-name">{user.firstname} {user.lastname}</span><br />
                                            <span className="content-user-count-group">Appartient à 2 groupes</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                null
            );
        }
    }

}