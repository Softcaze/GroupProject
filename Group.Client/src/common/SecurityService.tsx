import axios, { AxiosRequestConfig } from "axios";
import { Constants } from "./Constants";

const API_PREFIX: string = "/_api/auth";
const CONNECT_FACEBOOK_API: string = "/facebook";

export class SecurityService {
    public static ConnectToFacebook(facebookDetails: any) {
        axios.post(`${Constants.GROUP_API_URL}${API_PREFIX}${CONNECT_FACEBOOK_API}`, facebookDetails, {
            headers: {
                "Content-Type": "application/json"
            }
        } as AxiosRequestConfig).then((result) => {
            console.log(result);
        });
    }
}