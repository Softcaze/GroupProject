import axios, { AxiosRequestConfig } from "axios";
import { Constants } from "./Constants";

const API_PREFIX: string = "/_api/auth";
const CONNECT_FACEBOOK_API: string = "/facebook";

export class SecurityService {
    public static ConnectToFacebook(facebookDetails: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios.post(`${Constants.GROUP_API_URL}${API_PREFIX}${CONNECT_FACEBOOK_API}`, { access_token: facebookDetails.accessToken, id: facebookDetails.id }, {
                headers: {
                    "Content-Type": "application/json",
                    "WWW-Authenticate": "facebook-token"
                },
            } as AxiosRequestConfig).then((result) => {
                localStorage.setItem(Constants.LOCAL_STORAGE_WEBTOKEN_KEY, result.data.token);
                localStorage.setItem(Constants.LOCAL_STORAGE_FACEBOOKID_KEY, facebookDetails.id);
                resolve({ webToken: result.data.token, facebookId: facebookDetails.id });
            }).catch((err) => {
                console.log(err);
            });
        });
    }
}