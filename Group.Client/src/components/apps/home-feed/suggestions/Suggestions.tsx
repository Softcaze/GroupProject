import * as React from "react";
import "./Suggestions.scss";
import { IGroup } from "../../../../model/IGroup";
import { IUser } from "../../../../model/IUser";
import { GoInfo } from "react-icons/go";
import { HomeFeedStrings } from "../loc/strings";
import GroupCard, { GroupCardSize } from "../../common/GroupCard";
import { FeedService } from "../Feed.service";

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

        // on charge les suggestions de groupe
        FeedService.getSuggestedGroups(this.props.webToken, this.props.currentUser.id).then((groups) => {
            this.setState({ suggestedGroups: groups });
        });
    }

    public render() {
        return (
            <div className="suggestions-container">
                <div className="suggestions-title">
                    <GoInfo className="suggestion-icon" /> <span className="suggestion-text">{HomeFeedStrings.Suggestions}</span>
                </div>
                <div className="suggestions-content">
                    {this.state.suggestedGroups && this.state.suggestedGroups.map((group) => {
                        return (
                            <div className="group-card-container" key={"key_" + group.id}>
                                <GroupCard size={GroupCardSize.Small} group={group} />
                            </div>
                        );
                    })}
                    {!this.state.suggestedGroups || this.state.suggestedGroups.length == 0 ? (
                        <div className="no-suggestion">{HomeFeedStrings.NoSuggestion}</div>
                    ) : null}
                </div>
            </div >
        );
    }
}