import * as React from "react";
import "./AppBar.scss";
import { GoSearch } from "react-icons/go";
import { FiMenu, FiSettings, FiCalendar } from "react-icons/fi";

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
            <div className="appbar">
                <div className="appbar-container">
                    <span className="appbar-group-logo-text">GROUP</span>
                    <div>
                        <input className="app-bar-search-input" type="text" placeholder="Recherche un groupe, une personne..." />
                        <GoSearch className="app-bar-search-icon" />
                    </div>
                </div>
            </div>
        );
    }
}