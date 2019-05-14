import { events } from "../entities/events";
import { users } from "../entities/users";
import { Constants } from "../common/Constants";
import { lt_user_event } from "../entities/lt_user_event";
import { getManager } from "typeorm";

export class EventRepo {
    getEventById(eventId: number) {
        return getManager().getRepository(events).findOne({
            where: { id: eventId },
            relations: ["idAuthor"]
        })
    }

    getParticipantPeople(eventId: number) {
        return getManager().getRepository(lt_user_event).find({
            where: { idEvent: eventId, state: Constants.EventPeopleState.PARTICIPANT },
            relations: ["idUser"]
        });
    }

    getMissingPeople(eventId: number) {
        return getManager().getRepository(lt_user_event).find({
            where: { idEvent: eventId, state: Constants.EventPeopleState.MISSING },
            relations: ["idUser"]
        });
    }

    getWaitingPeople(eventId: number) {
        return getManager().getRepository(lt_user_event).find({
            where: { idEvent: eventId, state: Constants.EventPeopleState.WAITING },
            relations: ["idUser"]
        });
    }
}