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
                <div className="appbar-group-logo-container">
                    GROUP
                </div>
                <div className="appbar-search-container">
                    <div className="appbar-search-edittext-container">
                        <input className="app-bar-search-input" type="text" placeholder="Recherche un groupe, une personne..." />
                    </div>
                </div>
                <div className="appbar-action-container">

                </div>
            </div>
        );
    }
}