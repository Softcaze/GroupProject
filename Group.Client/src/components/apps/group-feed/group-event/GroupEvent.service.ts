import { Constants } from "../../../../common/Constants";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IEvent } from "../../../../model/IEvent";

const GET_EVENT_BY_ID_API: string = "/getEventById";

export class GroupEventService {
    public static getEventById(webToken: string, eventId: string): Promise<IEvent> {
        return new Promise<IEvent>((resolve, reject) => {
            axios.get(`${Constants.GROUP_API_URL}${Constants.API_PREFIX}${Constants.API_ROUTES.EVENT}${GET_EVENT_BY_ID_API}?eventId=${eventId}&webToken=${webToken}`, {
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
}