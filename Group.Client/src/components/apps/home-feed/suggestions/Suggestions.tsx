import * as React from "react";
import "./Suggestions.scss";
import { IGroup } from "../../../../model/IGroup";
import { IUser } from "../../../../model/IUser";
import { GoInfo } from "react-icons/go";
import { HomeFeedStrings } from "../loc/strings";
import GroupCard from "../../common/GroupCard";

export interface ISuggestionsProps {
    webToken: string;
    facebookId: string;
    currentUser: IUser;
}

export interface ISuggestionsState {
    suggestedGroups: IGroup[];
}

/**
 * Composant affichant la liste des sugestions
 */
export default class Suggestions extends React.Component<ISuggestionsProps, ISuggestionsState> {

    constructor(props: ISuggestionsProps) {
        super(props);

        this.state = {
            suggestedGroups: null
        };
    }

    public render() {
        return (
            <div className="suggestions-container">
                <div className="suggestions-title">
                    <GoInfo className="suggestion-icon" /> <span className="suggestion-text">{HomeFeedStrings.Suggestions}</span>
                </div>
                <div className="suggestions-content">
                    <GroupCard group={null} />
                </div>
            </div >
        );
    }
}