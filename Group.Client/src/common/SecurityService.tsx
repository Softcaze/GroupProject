import axios, { AxiosRequestConfig } from "axios";
import { Constants } from "./Constants";
import { IUser } from "../model/IUser";

const CONNECT_FACEBOOK_API: string = "/facebook";
const GET_USER_API: string = "/getUser";

export class SecurityService {
    public static ConnectToFacebook(facebookDetails: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios.post(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.AUTH}${CONNECT_FACEBOOK_API}`, { access_token: facebookDetails.accessToken, facebookId: facebookDetails.id }, {
                headers: {
                    "Content-Type": "application/json",
                },
            } as AxiosRequestConfig).then((result) => {
                localStorage.setItem(Constants.LOCAL_STORAGE_WEBTOKEN_KEY, result.data.webToken);
                localStorage.setItem(Constants.LOCAL_STORAGE_FACEBOOKID_KEY, facebookDetails.id);
                resolve({ webToken: result.data.webToken, facebookId: facebookDetails.id });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    public static GetUser(facebookId: string, webToken: string): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            axios.get(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.USER}${GET_USER_API}?facebookId=${facebookId}&webToken=${webToken}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            } as AxiosRequestConfig).then((result) => {
                resolve(result.data);
            }).catch((err) => {
                console.log(err);
            });
        });
    }
}