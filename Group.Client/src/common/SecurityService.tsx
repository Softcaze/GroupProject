import axios, { AxiosRequestConfig } from "axios";
import { Constants } from "./Constants";

const API_PREFIX: string = "/_api/auth";
const CONNECT_FACEBOOK_API: string = "/facebook";
// const CONNECT_FACEBOOK_API: string = "/facebook_connect";

export class SecurityService {
    public static ConnectToFacebook(facebookDetails: any) {
        axios.post(`${Constants.GROUP_API_URL}${API_PREFIX}${CONNECT_FACEBOOK_API}`, { access_token: facebookDetails.accessToken, id: facebookDetails.id }, {
            headers: {
                "Content-Type": "application/json",
                "WWW-Authenticate": "facebook-token"
            },

        } as AxiosRequestConfig).then((result) => {
            console.log(result);

        }).catch((err) => {
            console.log(err);
        });
    }
}