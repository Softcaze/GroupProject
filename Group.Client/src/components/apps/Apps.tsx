import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./home-feed/Feed";
import GroupFeed from "./group-feed/GroupFeed";
import { Constants } from "../../common/Constants";
import Login from "./login/Login";

export interface IAppsProps {

}

export interface IAppsState {
    webToken: string;
    facebookId: string;
}

/**
 * Composant host de l'ensemble de l'application
 */
export default class Apps extends React.Component<IAppsProps, IAppsState> {

    constructor(props: IAppsProps) {
        super(props);

        this.state = {
            webToken: localStorage.getItem(Constants.LOCAL_STORAGE_WEBTOKEN_KEY),
            facebookId: localStorage.getItem(Constants.LOCAL_STORAGE_FACEBOOKID_KEY)
        };
    }

    public render() {
        if (this.state.webToken && this.state.facebookId) {
            return (
                <Router>
                    <div>
                        <Switch>
                            <Route exact={true} path="/group/:groupid" component={(props) => <GroupFeed groupid={props.match.params.groupid} />} />
                            <Route component={() => <Feed webToken={this.state.webToken} facebookId={this.state.facebookId} />} /> {/* Page par defaut */}
                        </Switch>
                    </div>
                </Router>
            );
        } else {
            return (
                <Login onWebTokenReceived={this.onWebTokenReceived.bind(this)} />
            );
        }
    }

    private onWebTokenReceived(data: any) {
        if (data && data.webToken && data.facebookId) {
            this.setState({ webToken: data.webToken, facebookId: data.facebookId });
        }
    }
}