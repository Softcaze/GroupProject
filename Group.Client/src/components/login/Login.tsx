import * as React from "react";
import FacebookLogin from 'react-facebook-login';

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
                    appId="1088597931155576"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked.bind(this)}
                    callback={this.responseFacebook.bind(this)}
                />
            </div>
        );
    }

    private componentClicked() {

    }

    private responseFacebook() {

    }
}