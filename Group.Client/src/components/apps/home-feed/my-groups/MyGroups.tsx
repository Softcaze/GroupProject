import * as React from "react";
import { HomeFeedStrings } from "../loc/strings";
import "./MyGroups.scss";
import { IGroup } from "../../../../model/IGroup";
import { GoPlus } from "react-icons/go";
import { FeedService } from "../Feed.service";
import { IUser } from "../../../../model/IUser";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";;

export interface IMyGroupsProps {
    webToken: string;
    facebookId: string;
    currentUser: IUser;
}

export interface IMyGroupsState {
    myGroups: IGroup[];
}

/**
 * Composant afficher les groupes de l'utilisateur connecté
 */
export default class MyGroups extends React.Component<IMyGroupsProps, IMyGroupsState> {

    constructor(props: IMyGroupsProps) {
        super(props);

        this.state = {
            myGroups: null
        };

        // on charge les groupes de l'utilisateur
        FeedService.getMyGroups(this.props.webToken, this.props.currentUser.id).then((myGroups: IGroup[]) => {
            this.setState({ myGroups: myGroups });
        });
    }

    public render() {
        return (
            <div className="mygroups-container">
                <div className="mygroups-title">
                    {HomeFeedStrings.MyGroupsTitle}
                </div>
                <div className="mygroups-groupl-list-container">
                    <ReactPlaceholder type='media' rows={4} ready={this.state.myGroups != null}>
                        {this.getMyGroupsList(this.state.myGroups)}
                    </ReactPlaceholder>
                </div>
            </div >
        );
    }

    private getMyGroupsList(groups: IGroup[]): JSX.Element {
        if (groups && groups.length > 0) {
            return (
                <div>
                    {
                        groups.map((group) => {
                            return this.getDisplayedGroup(group);
                        })
                    }
                    {
                        this.getDisplayedAddGroup()
                    }
                </div>
            );
        } else {
            return (
                <span>Aucun groupe à afficher</span>
            );
        }
    }

    private getDisplayedGroup(group: IGroup): JSX.Element {
        return (
            <div key={"key_" + group.name.toLowerCase().trim()} className="group-display-container">
                <div className="image-container">
                    <img src={group.profil_picture} />
                </div>
                <div className="name">
                    {group.name}
                </div>
            </div>
        );
    }

    private getDisplayedAddGroup(): JSX.Element {
        return (
            <div className="group-display-container">
                <div className="create-group-button-container">
                    <GoPlus className="create-group-icon" />
                </div>
                <div className="name">
                    {HomeFeedStrings.AddGroup}
                </div>
            </div>
        );
    }
}