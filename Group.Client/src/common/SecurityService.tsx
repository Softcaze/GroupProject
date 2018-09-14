import axios, { AxiosRequestConfig } from "axios";
import { Constants } from "./Constants";

const API_PREFIX: string = "/_api/auth";
const CONNECT_FACEBOOK_API: string = "/facebook";

export class SecurityService {
    public static ConnectToFacebook(facebookDetails: any): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            axios.post(`${Constants.GROUP_API_URL}${API_PREFIX}${CONNECT_FACEBOOK_API}`, { access_token: facebookDetails.accessToken, id: facebookDetails.id }, {
                headers: {
                    "Content-Type": "application/json",
                    "WWW-Authenticate": "facebook-token"
                },
            } as AxiosRequestConfig).then((result) => {
                localStorage.setItem(Constants.LOCAL_STORAGE_WEBTOKEN_KEY, result.data.token);
                resolve(result.data.token);
            }).catch((err) => {
                console.log(err);
            });
        });
    }
}