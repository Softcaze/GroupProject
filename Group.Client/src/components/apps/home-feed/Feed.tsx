import * as React from "react";
import MyGroups from "./my-groups/MyGroups";
import { IUser } from "../../../model/IUser";
import "./Feed.scss";
import Suggestions from "./suggestions/Suggestions";
import FeedNews from "./feed-news/FeedNews";

export interface IFeedProps {
    webToken: string;
    facebookId: string;
    currentUser: IUser;
}

export interface IFeedState {

}

/**
 * Page du journal des publications
 */
export default class Feed extends React.Component<IFeedProps, IFeedState> {

    constructor(props: IFeedProps) {
        super(props);

        this.state = {

        };
    }

    public render() {
        return (
            <div className="home-feed-container">
                <div className="left-feed">
                    <div className="component-container">
                        <MyGroups webToken={this.props.webToken} facebookId={this.props.facebookId} currentUser={this.props.currentUser} />
                    </div>
                    <FeedNews webToken={this.props.webToken} currentUser={this.props.currentUser} groupId={null} isInsideGroup={false} />
                </div>
                <div className="right-feed">
                    <div className="component-container">
                        <Suggestions webToken={this.props.webToken} facebookId={this.props.facebookId} currentUser={this.props.currentUser} />
                    </div>
                </div>
            </div >
        );
    }
}