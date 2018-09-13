import axios, { AxiosRequestConfig } from "axios";
import { Constants } from "./Constants";

const API_PREFIX: string = "/_api/group/";
const CONNECT_FACEBOOK_API: string = "facebook_connect";

export class SecurityService {

    public static ConnectToFacebook(facebookDetails: any) {
        axios.post(`${API_PREFIX}${Constants.GROUP_API_URL}`, facebookDetails, {
            headers: {
                "Content-Type": "application/json"
            }
        } as AxiosRequestConfig).then((result) => {
            console.log(result);
        });
    }
}