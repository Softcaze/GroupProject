import * as React from "react";
import { HomeFeedStrings } from "../loc/strings";
import "./FeedNews.scss";
import { FeedService } from "../Feed.service";
import { IUser } from "../../../../model/IUser";
import "react-placeholder/lib/reactPlaceholder.css"; import { IFeedEvent } from "../../../../model/IFeedEvent";
import { Constants } from "../../../../common/Constants";

export interface IFeedNewsProps {
    webToken: string;
    facebookId: string;
    currentUser: IUser;
}

export interface IFeedNewsState {
    feedEvent: IFeedEvent[];
}

/**
 * Composant qui affiche les news dans le fil d'actualité
 */
export default class FeedNews extends React.Component<IFeedNewsProps, IFeedNewsState> {

    constructor(props: IFeedNewsProps) {
        super(props);

        this.state = {
            feedEvent: null
        };

        // on charge les feed event
        FeedService.getFeedEvents(this.props.webToken, this.props.currentUser.id).then((feedEvent: IFeedEvent[]) => {
            console.log(feedEvent);
            this.setState({ feedEvent: feedEvent });
        });
    }

    public render() {
        return (
            <div className="feed-event-container">
                {this.state.feedEvent && this.state.feedEvent.map((feedEvent) => {
                    return (
                        <div className="component-container" key={"key_" + Math.random()}>
                            {this.getFeedEvent(feedEvent)}
                        </div>
                    );
                })}
            </div >
        );
    }

    public getFeedEvent(feedEvent: IFeedEvent): JSX.Element {
        switch (feedEvent.type) {
            case Constants.FeedEventType.GROUP_JOINED:
                return this.getFeedEventGroupJoined(feedEvent);
            case Constants.FeedEventType.CREATE_EVENT:
                return this.getFeedEventGroupEvent(feedEvent);
            case Constants.FeedEventType.CREATE_ALBUM:
                return this.getFeedEventGroupAlbum(feedEvent);
        }
    }

    public getFeedEventGroupJoined(feedEvent: IFeedEvent): JSX.Element {
        return (
            <div>
                Group joinded
            </div>
        );
    }

    public getFeedEventGroupEvent(feedEvent: IFeedEvent): JSX.Element {
        return (
            <div>
                Group event
            </div>
        );
    }

    public getFeedEventGroupAlbum(feedEvent: IFeedEvent): JSX.Element {
        return (
            <div>
                Group ablum
            </div>
        );
    }
}