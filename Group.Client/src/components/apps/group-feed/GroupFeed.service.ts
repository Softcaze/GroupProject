import { IGroup } from "../../../model/IGroup";
import { IUser } from "../../../model/IUser";
import { Constants } from "../../../common/Constants";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const GET_GROUP_BY_ID_API: string = "/getGroupById";
const GET_GROUP_MEMBERS_API: string = "/getGroupMembers";
const GET_GROUP_FOLLOWERS_API: string = "/getGroupFollowers";
const COUNT_GROUP_MEMBERS_API: string = "/countGroupMembers";
const COUNT_GROUP_FOLLOWERS_API: string = "/countGroupFollowers";

export class GroupFeedService {
    public static getGroupById(webToken: string, groupId: number): Promise<IGroup> {
        return new Promise<IGroup>((resolve, reject) => {
            axios.get(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.GROUP}${GET_GROUP_BY_ID_API}?groupId=${groupId}&webToken=${webToken}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            } as AxiosRequestConfig).then((result: any) => {
                if (result) {
                    resolve(result.data[0]);
                } else {
                    resolve(null);
                }
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    public static getGroupMembers(webToken: string, groupId: string): Promise<IUser[]> {
        return new Promise<IUser[]>((resolve, reject) => {
            axios.get(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.GROUP}${GET_GROUP_MEMBERS_API}?groupId=${groupId}&webToken=${webToken}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            } as AxiosRequestConfig).then((result: any) => {
                if (result) {
                    resolve(result.data);
                } else {
                    resolve(null);
                }
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    public static getGroupFollowers(webToken: string, groupId: string): Promise<IUser[]> {
        return new Promise<IUser[]>((resolve, reject) => {
            axios.get(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.GROUP}${GET_GROUP_FOLLOWERS_API}?groupId=${groupId}&webToken=${webToken}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            } as AxiosRequestConfig).then((result: any) => {
                if (result) {
                    resolve(result.data);
                } else {
                    resolve(null);
                }
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    public static countGroupMembers(webToken: string, groupId: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            axios.get(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.GROUP}${COUNT_GROUP_MEMBERS_API}?groupId=${groupId}&webToken=${webToken}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            } as AxiosRequestConfig).then((result: any) => {
                if (result) {
                    resolve(result.data[0].countMembers);
                } else {
                    resolve(null);
                }
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    public static countGroupFollowers(webToken: string, groupId: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            axios.get(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.GROUP}${COUNT_GROUP_FOLLOWERS_API}?groupId=${groupId}&webToken=${webToken}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            } as AxiosRequestConfig).then((result: any) => {
                if (result) {
                    resolve(result.data[0].countFollowers);
                } else {
                    resolve(null);
                }
            }).catch((err) => {
                console.log(err);
            });
        });
    }
}