import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
                <FacebookLogin />
            </div>
        );
    }
}