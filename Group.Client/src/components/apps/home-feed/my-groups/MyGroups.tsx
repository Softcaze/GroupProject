import * as React from "react";
import { HomeFeedStrings } from "../loc/strings";
import "./MyGroups.scss";
import { IGroup } from "../../../../model/IGroup";
import { GoPlus } from "react-icons/go";

export interface IMyGroupsProps {
    webToken: string;
    facebookId: string;
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
            myGroups: [
                { name: "Les copains", cover_picture: "https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg" },
                { name: "Tarbes", cover_picture: "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426" }
            ]
        };
    }

    public render() {
        return (
            <div className="mygroups-container">
                <div className="mygroups-title">
                    {HomeFeedStrings.myGroupsTitle}
                </div>
                <div className="mygroups-groupl-list-container">
                    {this.getMyGroupsList(this.state.myGroups)}
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
                    <img src={group.cover_picture} />
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