import * as React from "react";
import Apps from "./apps/Apps";
import Login from "./login/Login";

export interface IAuthenticatorProps {
}

export interface IAuthenticatorState {
    facebookToken: string;
    webToken: string;
    isLoading: boolean;
}

/**
 * Composant permettant de gérer le droit d'accès à l'application
 */
export default class Authenticator extends React.Component<IAuthenticatorProps, IAuthenticatorState> {

    constructor(props: IAuthenticatorProps) {
        super(props);

        this.state = {
            facebookToken: null, // "fsrdrrffs5f4sdr",
            webToken: "dfsrdgf",
            isLoading: false
        };

        // on tente de récupérer une session en local storage
    }

    public render() {
        const { facebookToken, webToken, isLoading } = this.state;

        if (facebookToken && webToken) {
            return <Apps accessToken={webToken} />;
        } else if (!isLoading) {
            return <Login />;
        } else {
            return null;
        }
    }

    private isValid(token: string): boolean {
        return true;
    }
}