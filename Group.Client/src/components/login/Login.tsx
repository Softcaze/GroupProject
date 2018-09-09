import * as React from "react";
import FacebookLogin from 'react-facebook-login';
import { Constants } from "../../common/Constants";

export interface ILoginProps {

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
            <div>
                <FacebookLogin
                    appId={Constants.FACEBOOK_APP_IP}
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.responseFacebook.bind(this)}
                />
            </div>
        );
    }

    private responseFacebook(data) {
        console.log("AccessToken : " + data.accessToken);
        console.log("Email : " + data.email);
        console.log("Name : " + data.name);
    }
}