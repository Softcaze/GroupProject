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
                    <GroupCard group={{
                        name: "Les copains",
                        cover_picture: "https://spark.adobe.com/images/landing/examples/hiking-fb-cover.jpg",
                        member_count: 21,
                        follower_count: 157,
                        profil_picture: "data:image/jpeg;base64,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"
                    } as IGroup} />
                </div>
            </div >
        );
    }
}