import * as React from "react";
import Apps from "./apps/Apps";
import Login from "./login/Login";

export interface IAuthenticatorProps {
}

export interface IAuthenticatorState {
    accessToken: string;
    isLoading: boolean;
}

/**
 * Composant permettant de gérer le droit d'accès à l'application
 */
export default class Authenticator extends React.Component<IAuthenticatorProps, IAuthenticatorState> {

    constructor(props: IAuthenticatorProps) {
        super(props);

        this.state = {
            accessToken: "fsrdrrffs5f4sdr",
            isLoading: false
        };

        // on tente de récupérer une session en local storage
    }

    public render() {
        const { accessToken, isLoading } = this.state;

        if (accessToken && this.isValid(accessToken)) {
            return <Apps accessToken={accessToken} />;
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