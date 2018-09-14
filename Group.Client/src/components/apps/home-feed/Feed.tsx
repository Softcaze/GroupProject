import * as React from "react";
import MyGroups from "./my-groups/MyGroups";

export interface IFeedProps {
    webToken: string;
    facebookId: string;
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
            <div>
                <div>
                    <MyGroups webToken={this.props.webToken} facebookId={this.props.facebookId} />
                </div>
            </div>
        );
    }
}