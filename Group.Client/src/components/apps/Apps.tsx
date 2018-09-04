import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./home-feed/Feed";
import GroupFeed from "./group-feed/GroupFeed";

export interface IAppsProps {
    accessToken: string;
}

export interface IAppsState {

}

/**
 * Composant host de l'ensemble de l'application
 */
export default class Apps extends React.Component<IAppsProps, IAppsState> {

    constructor(props: IAppsProps) {
        super(props);

        this.state = {

        };
    }

    public render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact={true} path="/group/:groupid" component={(props) => <GroupFeed groupid={props.match.params.groupid} />} />
                        <Route component={Feed} /> {/* Page par defaut */}
                    </Switch>
                </div>
            </Router>
        );
    }
}