import { IGroup } from "../../../model/IGroup";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Constants } from "../../../common/Constants";
import { IFeedEvent } from "../../../model/IFeedEvent";

const GET_MY_GROUPS_API: string = "/getGroups";
const GET_SUGGESTED_GROUPS: string = "/getGroupSuggestion";
const GET_FEED_EVENTS: string = "/getNews";

export class FeedService {

    public static getMyGroups(webToken: string, userId: string): Promise<IGroup[]> {
        return new Promise<IGroup[]>((resolve, reject) => {
            axios.get(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.GROUP}${GET_MY_GROUPS_API}?userId=${userId}&webToken=${webToken}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            } as AxiosRequestConfig).then((result: any) => {
                if (result) {
                    resolve(result.data.map(lt => lt.idGroup));
                }
                else {
                    resolve(null);
                }
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
            } as AxiosRequestConfig).then((result: AxiosResponse<IGroup[]>) => {
                if (result)
                    resolve(result.data);
                else
                    resolve(null);
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    public static getFeedEvents(webToken: string, userId: string): Promise<IFeedEvent[]> {
        return new Promise<IFeedEvent[]>((resolve, reject) => {
            axios.get(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.USER}${GET_FEED_EVENTS}?userId=${userId}&webToken=${webToken}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            } as AxiosRequestConfig).then((result: AxiosResponse<IFeedEvent[]>) => {
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