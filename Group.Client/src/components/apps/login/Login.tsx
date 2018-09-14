import * as React from "react";
import FacebookLogin from 'react-facebook-login';
import { Constants } from "../../../common/Constants";
import "./Login.scss";
import { SecurityService } from "../../../common/SecurityService";

export interface ILoginProps {
    onWebTokenReceived: (webToken: string) => any;
}

export interface ILoginState {

}

/**
 * Page d'inscription et de connexion
 */
export default class Login extends React.Component<ILoginProps, ILoginState> {

    constructor(props: ILoginProps) {
        super(props);
    }

    public render() {
        return (
            <div className="login-container">
                <div className="app-bar-container">
                    <span className="app-name">Group</span>
                </div>
                <div className="facebook-login-container">
                    <FacebookLogin
                        appId={Constants.FACEBOOK_APP_IP}
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.responseFacebook.bind(this)}
                        className="facebook-login"
                    />
                </div>
            </div>
        );
    }

    private responseFacebook(data: any) {
        SecurityService.ConnectToFacebook(data).then((receivedData: any) => {
            if (this.props.onWebTokenReceived) {
                this.props.onWebTokenReceived(receivedData);
            }
        });
    }
}