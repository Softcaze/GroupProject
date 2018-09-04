import * as React from "react";

export interface IFeedProps {

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
            <div>Feed</div>
        );
    }
}