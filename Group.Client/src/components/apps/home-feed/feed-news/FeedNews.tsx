import * as React from "react";
import { FeedNewsStrings } from "./loc/strings";
import "./FeedNews.scss";
import { FeedService } from "../Feed.service";
import { GroupFeedService } from "../../group-feed/GroupFeed.service";
import { IUser } from "../../../../model/IUser";
import "react-placeholder/lib/reactPlaceholder.css"; import { IFeedEvent } from "../../../../model/IFeedEvent";
import { Constants } from "../../../../common/Constants";
import GroupCard, { GroupCardSize } from "../../common/GroupCard";

let LikeCountImg = require("./images/like_count.svg");
let LikeEnabledImg = require("./images/like_enabled.svg");
let LikeDisabledImg = require("./images/like_disabled.svg");
let CommentImg = require("./images/comment.svg");
let DateImg = require("./images/date_ico.png");
let MapImg = require("./images/map_ico.png");

export interface IFeedNewsProps {
    webToken: string;
    currentUser: IUser;
    groupId: string;
    isInsideGroup: boolean;
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
        if (!this.props.isInsideGroup) {
            FeedService.getFeedEvents(this.props.webToken, this.props.currentUser.id).then((feedEvent: IFeedEvent[]) => {
                this.setState({ feedEvent: feedEvent });
            });
        } else {
            GroupFeedService.getFeedEventsByGroup(this.props.webToken, this.props.groupId).then((feedEvent: IFeedEvent[]) => {
                this.setState({ feedEvent: feedEvent });
            });
        }
    }

    public render() {
        return (
            <div className="feed-event-container">
                {this.state.feedEvent && this.state.feedEvent.map((feedEvent) => {
                    return (
                        <div className="component-container" key={"key_" + Math.random()}>
                            {this.getFeedEvent(feedEvent)}
                            <div className="count-like-comments">
                                <span className="like-count">1</span>
                                <img className="like-img" src={LikeCountImg} />
                                <span className="comment-count">3</span><span className="comment-label">{FeedNewsStrings.CommentLabel}</span>
                            </div>
                            <div className="hr-line"></div>
                            <div className="container-interaction">
                                <div className="subcontainer-interaction">
                                    <div className="like-button">
                                        <img src={LikeDisabledImg} />
                                        <span>{FeedNewsStrings.LikeButton}</span>
                                    </div>
                                    <div className="comment-button">
                                        <img src={CommentImg} />
                                        <span>{FeedNewsStrings.CommentButton}</span>
                                    </div>
                                </div>
                            </div>
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
            case Constants.FeedEventType.LEAVE_GROUP:
                return this.getFeedEventGroupLeaved(feedEvent);
            case Constants.FeedEventType.ADD_PHOTO:
                return this.getFeedEventAddPhoto(feedEvent);
            case Constants.FeedEventType.DID_EVENT:
                return this.getFeedEventDidEvent(feedEvent);
            default:
        }
    }

    public getFeedEventGroupJoined(feedEvent: IFeedEvent): JSX.Element {
        let containerClassNames: string[] = ["feed-card-container"];

        if (this.props.isInsideGroup) {
            containerClassNames.push("hidden");
        }
        return (
            <div className="feed-event-group-joined feed-item-container">
                <img className="feed-user-picture" src={feedEvent.value.user.profil_picture} alt="Profile picture" />
                <div className="feed-content">
                    <div className="feed-content-title">
                        <span className="feed-content-title-user">{feedEvent.value.user.name}</span>{FeedNewsStrings.JoinedGroup}
                    </div>
                    <div className="feed-content-date">9 aout 2017</div>

                    <div className={containerClassNames.join(" ")}>
                        <GroupCard size={GroupCardSize.Medium} group={feedEvent.value.group} centered={true} />
                    </div>
                </div>
            </div>
        );
    }

    public getFeedEventDidEvent(feedEvent: IFeedEvent): JSX.Element {
        return (
            <div className="feed-event-did-event feed-item-container">
                <img className="feed-user-picture" src={feedEvent.value.group.profil_picture} alt="Profile picture" />
                <div className="feed-content">
                    <div className="feed-content-title">
                        <span className="feed-content-title-user">{feedEvent.value.group.name}</span>{FeedNewsStrings.DidEvent}
                    </div>
                    <div className="feed-content-date">9 aout 2017</div>

                    <div className="event-content">
                        <div className="event-content-title">
                            <span>{feedEvent.value.events.name}</span>
                        </div>
                        <div className="event-content-two-columns">
                            <div className="event-content-information">
                                <span className="information-title">{FeedNewsStrings.InformationEventLabel}</span>
                                <div className="information-date">
                                    <img src={DateImg} />
                                    <span>{feedEvent.value.events.creation_date}</span>
                                </div>
                                <div className="information-map">
                                    <img src={MapImg} />
                                    <span>{feedEvent.value.events.address}</span>
                                </div>
                            </div>
                            <div className="event-content-participant">
                                <span className="information-title">{FeedNewsStrings.ParticipantEventLabel} ({feedEvent.value.count_participant})</span><br />

                                {feedEvent.value.user_event.map((user) => {
                                    return (
                                        <div className="event-content-user" key={"key_" + user.id}>
                                            <img src={user.profil_picture} /><br />
                                            <span>{user.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public getFeedEventGroupLeaved(feedEvent: IFeedEvent): JSX.Element {
        return (
            <div className="feed-event-group-leaved feed-item-container">
                <img className="feed-user-picture" src={feedEvent.value.user.profil_picture} alt="Profile picture" />
                <div className="feed-content">
                    <div className="feed-content-title">
                        <span className="feed-content-title-user">{feedEvent.value.user.name}</span>{FeedNewsStrings.LeavedGroup}
                    </div>
                    <div className="feed-content-date">9 aout 2017</div>
                </div>
            </div>
        );
    }

    public getFeedEventAddPhoto(feedEvent: IFeedEvent): JSX.Element {
        return (
            <div className="feed-event-photo-added ">
                <div className="feed-item-container">
                    <img className="feed-user-picture" src={feedEvent.value.group.profil_picture} alt="Profile picture" />
                    <div className="feed-content">
                        <div className="feed-content-title">
                            <span className="feed-content-title-user">{feedEvent.value.group.name}</span><span>{FeedNewsStrings.AddPhoto}</span>
                        </div>
                        <div className="feed-content-date">9 aout 2017</div>
                    </div>
                </div>
                <div className="photo-container">
                    <img src={feedEvent.value.photo.url} />

                </div>
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