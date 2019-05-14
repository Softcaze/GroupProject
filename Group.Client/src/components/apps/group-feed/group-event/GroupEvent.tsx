import * as React from "react";
import { GroupEventStrings } from "./loc/strings";
import { GroupEventService } from "./GroupEvent.service";
import "./GroupEvent.scss";

let DateImg = require("./images/date_ico.png");
let AdressImg = require("./images/map_ico.png");

export interface IGroupEventProps {
    groupId: string;
    webToken: string;
    location: string;
    eventId: string;
}

export interface IGroupEventState {
    resultEvent: any;
}

export default class GroupEvent extends React.Component<IGroupEventProps, IGroupEventState> {
    constructor(props: IGroupEventProps) {
        super(props);

        this.state = {
            resultEvent: null
        };

        GroupEventService.getEventById(this.props.webToken, this.props.eventId).then((result) => {
            this.setState({ resultEvent: result });
            console.log(result);
        });
    }

    public render() {
        if (this.state.resultEvent != null && this.state.resultEvent.event != null) {
            return (
                <div className="group-event-container">
                    <div className="group-event-title">
                        <span>{this.state.resultEvent.event.name}</span>
                    </div>
                    <img className="group-event-author-img" src={this.state.resultEvent.event.idAuthor.profil_picture} />
                    <div className="component-container">
                        <span className="group-event-date-title">{GroupEventStrings.DateTitleLabel}</span>
                        <div className="group-event-date-value">
                            <img src={DateImg} />
                            <span>15 septembre 2017 {GroupEventStrings.AtDateLabel} 15h00</span>
                        </div>
                    </div>
                    <div className="component-container">
                        <span className="group-event-date-title">{GroupEventStrings.ParticipantLabel}</span><br />
                        {this.state.resultEvent.participantPeople.map((user) => {
                            return (
                                <div className="user-event-container" key={"key_" + user.id}>
                                    <img src={user.idUser.profil_picture} />
                                    <span>{user.idUser.firstname} {user.idUser.lastname}</span>
                                </div>
                            );
                        })}
                        <span className="group-event-date-title">{GroupEventStrings.MissingLabel}</span><br />
                        {this.state.resultEvent.missingPeople.map((user) => {
                            return (
                                <div className="user-event-container" key={"key_" + user.id}>
                                    <img src={user.idUser.profil_picture} />
                                    <span>{user.idUser.firstname} {user.idUser.lastname}</span>
                                </div>
                            );
                        })}
                        <span className="group-event-date-title">{GroupEventStrings.WaitingLabel}</span>
                        {this.state.resultEvent.waitingPeople.map((user) => {
                            return (
                                <div className="user-event-container" key={"key_" + user.id}>
                                    <img src={user.idUser.profil_picture} />
                                    <span>{user.idUser.firstname} {user.idUser.lastname}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="component-container">
                        <span className="group-event-date-title">{GroupEventStrings.AdressLabel}</span>
                        <div className="group-event-date-value">
                            <img src={AdressImg} />
                            <span>{this.state.resultEvent.event.address}</span>
                        </div>
                    </div >
                </div>
            );
        } else {
            return (
                null
            );
        }
    }
}