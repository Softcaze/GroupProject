import { IGroup } from "../../../model/IGroup";
import axios, { AxiosRequestConfig } from "axios";
import { Constants } from "../../../common/Constants";

const GET_MY_GROUPS_API: string = "/getGroups";
const GET_SUGGESTED_GROUPS: string = "/getGroupSuggestion";

export class FeedService {

    public static getMyGroups(webToken: string, userId: string): Promise<IGroup[]> {
        return new Promise<IGroup[]>((resolve, reject) => {
            axios.get(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.GROUP}${GET_MY_GROUPS_API}?userId=${userId}&webToken=${webToken}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            } as AxiosRequestConfig).then((result: any) => {
                if (result)
                    resolve(result.data.map(lt => lt.id_group));
                else
                    resolve(null);
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    public static getSuggestedGroups(webToken: string, userId: string): Promise<IGroup[]> {
        return new Promise<IGroup[]>((resolve, reject) => {
            axios.get(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.GROUP}${GET_SUGGESTED_GROUPS}?userId=${userId}&webToken=${webToken}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            } as AxiosRequestConfig).then((result: any) => {
                if (result)
                    resolve(result.data);
                else
                    resolve(null);
            }).catch((err) => {
                console.log(err);
            });
        });
    }
}