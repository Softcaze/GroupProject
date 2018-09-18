import * as React from "react";
import { HomeFeedStrings } from "../loc/strings";
import "./MyGroups.scss";
import { IGroup } from "../../../../model/IGroup";
import { GoPlus } from "react-icons/go";
import { FeedService } from "../Feed.service";
import { IUser } from "../../../../model/IUser";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css"; import { IFeedEvent } from "../../../../model/IFeedEvent";
;

export interface INewsProps {
    webToken: string;
    facebookId: string;
    currentUser: IUser;
}

export interface INewsState {
    feedEvent: IFeedEvent[];
}

/**
 * Composant afficher les groupes de l'utilisateur connecté
 */
export default class News extends React.Component<INewsProps, INewsState> {

    constructor(props: INewsProps) {
        super(props);

        this.state = {
            feedEvent: null
        };

        // on charge les feed event
        // FeedService.getMyGroups(this.props.webToken, this.props.currentUser.id).then((myGroups: IGroup[]) => {
        //     this.setState({ myGroups: myGroups });
        // });
    }

    public render() {
        return (
            <div className="feed-event-container">

            </div >
        );
    }
}