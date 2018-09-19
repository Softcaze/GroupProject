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
            <div className="appbar-container">
                <div className="appbar-group-logo-container">
                    <div className="appbar-group-logo-text">
                        Group
                    </div>
                </div>
                <div className="appbar-search-container">
                    <div className="appbar-search-edittext-container">
                        <input className="app-bar-search-input" type="text" placeholder="Recherche un groupe, une personne..." />
                        <GoSearch className="app-bar-search-icon" />
                    </div>
                </div>
                <div className="appbar-action-container">
                    <div className="appbar-action-subcontainer">
                        <FiSettings className="appbar-action-icon" style={{ fontSize: "20px" }} />
                        <FiCalendar className="appbar-action-icon" style={{ fontSize: "22px" }} />
                        <FiMenu className="appbar-action-icon" style={{ fontSize: "30px" }} />
                    </div>
                </div>
            </div>
        );
    }
}