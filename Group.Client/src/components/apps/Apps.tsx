import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./home-feed/Feed";
import GroupFeed from "./group-feed/GroupFeed";
import GroupMembers from "./group-feed/group-members/GroupMembers";
import { Constants } from "../../common/Constants";
import Login from "./login/Login";
import { SecurityService } from "../../common/SecurityService";
import { IUser } from "../../model/IUser";
import AppBar from "./app-bar/AppBar";
import "./Apps.scss";

export interface IAppsProps {

}

export interface IAppsState {
    webToken: string;
    facebookId: string;
    currentUser: IUser;
    isLoading: boolean;
}

/**
 * Composant host de l'ensemble de l'application
 */
export default class Apps extends React.Component<IAppsProps, IAppsState> {

    constructor(props: IAppsProps) {
        super(props);

        this.state = {
            webToken: localStorage.getItem(Constants.LOCAL_STORAGE_WEBTOKEN_KEY),
            facebookId: localStorage.getItem(Constants.LOCAL_STORAGE_FACEBOOKID_KEY),
            currentUser: null,
            isLoading: (localStorage.getItem(Constants.LOCAL_STORAGE_WEBTOKEN_KEY) != null && localStorage.getItem(Constants.LOCAL_STORAGE_FACEBOOKID_KEY) != null)
        };

        // si on est déjà connecté, on charge l'utilisateur
        if (this.state.webToken && this.state.facebookId) {
            this.getCurrentUser(this.state.facebookId, this.state.webToken).then((user) => {
                this.setState({ currentUser: user, isLoading: false });
            });
        }
    }

    public render() {
        if (this.state.isLoading) {
            return null;
        }
        if (this.state.webToken && this.state.facebookId && this.state.currentUser) {
            return (
                <div>
                    <AppBar />
                    <div className="app-content-container">
                        <div className="app-content-subcontainer">
                            <Router>
                                <div>
                                    <Switch>
                                        <Route exact={true} path="/group/:groupid" component={(props) => <GroupFeed webToken={this.state.webToken} groupid={props.match.params.groupid} location={Constants.LocationType.JOURNAL} />} />
                                        <Route exact={true} path="/group/:groupid/photo" component={(props) => <GroupFeed webToken={this.state.webToken} groupid={props.match.params.groupid} location={Constants.LocationType.PHOTO} />} />
                                        <Route exact={true} path="/group/:groupid/event" component={(props) => <GroupFeed webToken={this.state.webToken} groupid={props.match.params.groupid} location={Constants.LocationType.EVENT} />} />
                                        <Route exact={true} path="/group/:groupid/member" component={(props) => <GroupFeed webToken={this.state.webToken} groupid={props.match.params.groupid} location={Constants.LocationType.MEMBER} />} />
                                        <Route exact={true} path="/group/:groupid/follower" component={(props) => <GroupFeed webToken={this.state.webToken} groupid={props.match.params.groupid} location={Constants.LocationType.FOLLOWER} />} />
                                        <Route component={() => <Feed webToken={this.state.webToken} facebookId={this.state.facebookId} currentUser={this.state.currentUser} />} /> {/* Page par defaut */}
                                    </Switch>
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <Login onWebTokenReceived={this.onWebTokenReceived.bind(this)} />
            );
        }
    }

    private onWebTokenReceived(data: any) {
        if (data && data.webToken && data.facebookId) {
            this.getCurrentUser(data.facebookId, data.webToken).then((user: IUser) => {
                this.setState({ webToken: data.webToken, facebookId: data.facebookId, currentUser: user, isLoading: false });
            });
        }
    }

    private getCurrentUser(facebookId: string, webToken: string) {
        // on récupère l'utilisateur
        return SecurityService.GetUser(facebookId, webToken);
    }
}