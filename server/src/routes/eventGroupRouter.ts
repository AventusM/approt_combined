import express from "express";

import services from "../services/";
import utils from "../utils";

import { NOT_FOUND_CODE } from "../constants";
import { ParticipationRequestType } from "../types";

const router = express.Router();

router.get("/", async (_req, res, next) => {
  try {
    const data = await services.eventGroupServices.getAll();
    res.send(data.map((event) => event.toJSON()));
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = utils.toStringIdFromParamRequest(req.params);
    const foundEventGroup = await services.eventGroupServices.findEventGroup(
      id
    );

    if (!foundEventGroup) {
      res.status(NOT_FOUND_CODE).send({ error: "Event group not found" });
    } else {
      res.send(foundEventGroup.toJSON());
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { userId, endDate, startDate, name, events } = utils.toEventGroupBase(
      req.body
    );

    // Has to be a host type at all times or not?
    const foundHostUserResponse = await services.userServices.findUser(userId);
    if (!foundHostUserResponse) {
      res.status(NOT_FOUND_CODE).send({ error: "Host user not found" });
      // TODO: GO NEXT HERE WITH A MISSING HOST MESSAGE
    } else {
      // 1. Create base
      const createdEventGroupBase = await services.eventGroupServices.createEventGroupBase(
        {name, endDate, startDate},
        foundHostUserResponse,
        );

      //2. Create events with event group base id attached to them
      const promises = events.map(async (eventBase) => await services.eventServices.createEvent(eventBase, createdEventGroupBase));

      // We want to have an array of resolved objects instead of a promise
      // TODO: 2nd error as well if event creation fails
      const createdEvents = await Promise.all(promises);

      //3. Attach events to the event group base and save
      const result = await services.eventGroupServices.addEventsToEventGroup(createdEventGroupBase, createdEvents);

      if("kind" in result){
        next(result);
      } else {
        res.send(result.toJSON());
      }
    }
  } catch (error) {
    next(error);
  }
});

router.post("/:id/participation", async (req, res, next) => {
  try {
    const { id } = utils.toStringIdFromParamRequest(req.params);
    const { userId, requestType } = utils.toParticipationExtraData(req.body);

    const foundEventGroup = await services.eventGroupServices.findEventGroup(
      id
    );
    
    const foundUser = await services.userServices.findUser(userId);

    if (!foundUser) {
      res.status(NOT_FOUND_CODE).send({ error: "User not found" });
    } else if (!foundEventGroup) {
      res.status(NOT_FOUND_CODE).send({ error: "Event group not found" });
    }

    if (foundUser && foundEventGroup) {
      const eventGroupServicesFunction = getEventGroupParticipationFunction(requestType);
      const result = await eventGroupServicesFunction(foundEventGroup, foundUser);

      if("kind" in result){ // Or any other error-specific prop
        next(result);
      } else {
        res.json(result.toJSON());
      }
    }
  } catch (error) {
    next(error);
  }
});

const getEventGroupParticipationFunction = (type: ParticipationRequestType) => {
  if(type === ParticipationRequestType.ADD_PARTICIPATION){
    return services.eventGroupServices.addUserToEventGroup;
  } else if(type === ParticipationRequestType.REMOVE_PARTICIPATION){
    return services.eventGroupServices.removeUserFromEventGroup;
  } else {
    // TODO: This will get changed in the future as more use cases are developed (e.g. finishing one whole appro event)
    return services.eventGroupServices.addUserToEventGroup;
  }
};

export default router;
