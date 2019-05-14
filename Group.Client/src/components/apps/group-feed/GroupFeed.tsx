import * as React from "react";
import { GroupFeedService } from "./GroupFeed.service";
import { GroupFeedStrings } from "./loc/strings";
import { IGroup } from "../../../model/IGroup";
import { Constants } from "../../../common/Constants";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GroupMembers from "./group-members/GroupMembers";
import GroupFollowers from "./group-followers/GroupFollowers";
import ListGroupPeople from "./list-group-people/ListGroupPeople";
import FeedNews from "../home-feed/feed-news/FeedNews";
import GroupEvent from "./group-event/GroupEvent";
import GroupPhoto from "./group-photo/GroupPhoto";
import ListGroupEventPreview from "../group-feed/list-group-event-preview/ListGroupEventPreview";
import "./GroupFeed.scss";
import "../../../common/Constants.scss";

let AddPeopleImg = require("./images/add-event.svg");
let EventMenuImg = require("./images/menu_group_events.png");
let NewsMenuImg = require("./images/menu_group_news.png");
let PhotoMenuImg = require("./images/menu_group_photos.png");

export interface IGroupFeedProps {
    groupid: string;
    webToken: string;
    location: string;
    eventid: string;
}

export interface IGroupFeedState {
    group: IGroup;
}

/**
 * Page du journal des publications d'un group
 */
export default class GroupFeed extends React.Component<IGroupFeedProps, IGroupFeedState> {

    constructor(props: IGroupFeedProps) {
        super(props);

        this.state = {
            group: null
        };

        // on récupère les informations du groupe
        GroupFeedService.getGroupById(this.props.webToken, this.props.groupid).then((resultGroup) => {
            this.setState({ group: resultGroup });
        });
    }

    public render() {
        if (this.state.group != null) {
            return (
                <div className="group-feed-container">
                    <img className="cover-group-img" src={this.state.group.cover_picture} />
                    <div className="container-profil-group-img">
                        <img className="profil-group-img" src={this.state.group.profil_picture} />
                    </div>
                    <div className="container-group-button">
                        <input type="button" value="Suivre" className="button secondary-button" />
                        <input type="button" value="Rejoindre" className="button primary-button" />
                    </div>
                    <div className="conainer-group-info">
                        <div className="container-left-info">
                            <span className="value">{this.state.group.score}</span><br />
                            <span className="title">{GroupFeedStrings.ScoreLabel}</span>
                        </div>
                        <div className="container-right-info">
                            <div className="container-member">
                                <span className="value">{this.state.group.member_count}</span><br />
                                <span className="title">{GroupFeedStrings.MembersInfoLabel}</span>
                            </div>
                            <div className="container-follower">
                                <span className="value">{this.state.group.follower_count}</span><br />
                                <span className="title">{GroupFeedStrings.FollowersInfoLabel}</span>
                            </div>
                        </div>
                    </div>
                    <div className="container-group-name">
                        <span>{this.state.group.name}</span>
                    </div>

                    <div className="left-feed">
                        <div className="menu-group-feed">
                            <div className="item-menu active">
                                <img src={NewsMenuImg} />
                                <br />
                                <span>{GroupFeedStrings.JournalMenuLabel}</span>
                            </div>
                            <div className="item-menu">
                                <img src={PhotoMenuImg} />
                                <br />
                                <span>{GroupFeedStrings.PhotosMenuLabel}</span>
                            </div>
                            <div className="item-menu">
                                <img src={EventMenuImg} />
                                <br />
                                <span>{GroupFeedStrings.EventMenuLabel}</span>
                            </div>
                        </div>
                        {this.props.location === Constants.LocationType.JOURNAL ? (
                            <FeedNews webToken={this.props.webToken} currentUser={null} groupId={this.props.groupid} isInsideGroup={true} />
                        ) : this.props.location === Constants.LocationType.MEMBER ? (
                            <ListGroupPeople webToken={this.props.webToken} groupId={this.props.groupid} location={Constants.LocationType.MEMBER} />
                        ) : this.props.location === Constants.LocationType.FOLLOWER ? (
                            <ListGroupPeople webToken={this.props.webToken} groupId={this.props.groupid} location={Constants.LocationType.FOLLOWER} />
                        ) : this.props.location === Constants.LocationType.PHOTO ? (
                            <GroupPhoto webToken={this.props.webToken} groupId={this.props.groupid} location={Constants.LocationType.PHOTO} />
                        ) : this.props.location === Constants.LocationType.EVENT ? (
                            <GroupEvent webToken={this.props.webToken} eventId={this.props.eventid} groupId={this.props.groupid} location={Constants.LocationType.EVENT} />
                        ) : (
                                                null
                                            )}

                    </div>

                    {this.props.location === Constants.LocationType.PHOTO ? (
                        <div></div>
                    ) : this.props.location === Constants.LocationType.EVENT ? (
                        <div className="right-feed">
                            <div className="invite-people">
                                <img src={AddPeopleImg} />
                                <span>{GroupFeedStrings.CreateEvent}</span>
                            </div>
                            <div className="component-container">
                                <ListGroupEventPreview webToken={this.props.webToken} eventId={""} groupId={this.state.group.id} />
                            </div>
                        </div>
                    ) : (
                                <div className="right-feed">
                                    <div className="invite-people">
                                        <img src={AddPeopleImg} />
                                        <span>{GroupFeedStrings.InvitePeople}</span>
                                    </div>
                                    <div className="component-container">
                                        <GroupMembers webToken={this.props.webToken} groupId={this.state.group.id} />
                                    </div>
                                    <div className="component-container">
                                        <GroupFollowers webToken={this.props.webToken} groupId={this.state.group.id} />
                                    </div>
                                </div>
                            )}
                </div>
            );
        } else {
            return (
                null
            );
        }
    }
}