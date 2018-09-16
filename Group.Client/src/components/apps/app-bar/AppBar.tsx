import * as React from "react";
import "./AppBar.scss";

export interface IAppBarProps {

}

export interface IAppBarState {

}

/**
 * Page du journal des publications d'un group
 */
export default class AppBar extends React.Component<IAppBarProps, IAppBarState> {

    constructor(props: IAppBarProps) {
        super(props);
    }

    public render() {
        return (
            <div className="appbar-container">

            </div>
        );
    }
}