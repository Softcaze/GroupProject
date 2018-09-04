import * as React from "react";

export interface IGroupFeedProps {
    groupid: number;
}

export interface IGroupFeedState {

}

/**
 * Page du journal des publications d'un group
 */
export default class GroupFeed extends React.Component<IGroupFeedProps, IGroupFeedState> {

    constructor(props: IGroupFeedProps) {
        super(props);
    }

    public render() {
        return (
            <div>GroupFeed : {this.props.groupid}</div>
        );
    }
}