import { IGroup } from "../../../model/IGroup";
import axios, { AxiosRequestConfig } from "axios";
import { Constants } from "../../../common/Constants";
import { ILT_User_Group } from "../../../model/ILT_User_Group";

const GET_MY_GROUPS_API: string = "/getGroups";

export class FeedService {

    public static getMyGroups(webToken: string, userId: string): Promise<IGroup[]> {
        return new Promise<IGroup[]>((resolve, reject) => {
            axios.get(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.GROUP}${GET_MY_GROUPS_API}?userid=${userId}&token=${webToken}`, {
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
}