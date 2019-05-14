import { Request, Response } from "express";
import { EventRepo } from "../repositories/event.repository";
import { lt_user_event } from "../entities/lt_user_event";
import { events } from "../entities/events";


/**
 * Récupèrer un event à l'aide de son id
 * @param req 
 * @param res 
 */
export let getEventById = async (req: Request, res: Response) => {
    let eventRepo: EventRepo = new EventRepo();

    eventRepo.getEventById(req.query.eventId).then((event: any) => {
        eventRepo.getParticipantPeople(req.query.eventId).then((participant: any) => {
            eventRepo.getMissingPeople(req.query.eventId).then((missing: any) => {
                eventRepo.getWaitingPeople(req.query.eventId).then((waiting: any) => {
                    let result = {
                        "participantPeople": participant,
                        "missingPeople": missing,
                        "waitingPeople": waiting,
                        "event": event
                    }

                    res.status(200).send(result);
                })
            })
        })
    }).catch((err) => {
        res.status(400).send(err);
    })
}
