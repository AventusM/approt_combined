import express from "express";

import services from "../services/";
import utils from "../utils";

import { ParticipationRequestType } from "../types";
import { NOT_FOUND_CODE, NO_CONTENT_CODE } from "../constants";

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = utils.toStringIdFromParamRequest(req.params);
    const foundEvent = await services.eventServices.findEvent(id);

    if (!foundEvent) {
      res.status(NOT_FOUND_CODE).send({ error: "Event not found" });
    } else {
      res.send(foundEvent.toJSON());
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", async (_req, res, next) => {
  try {
    const data = await services.eventServices.getAll();
    res.send(data.map((event) => event.toJSON()));
  } catch (error) {
    next(error);
  }
});

router.post("/:id/participation", async (req, res, next) => {
  try {
    const { id } = utils.toStringIdFromParamRequest(req.params);
    const { userId, requestType } = utils.toParticipationExtraData(req.body);

    console.log("req params", id);
    console.log("req userId", userId);
    console.log("req type", requestType);

    const foundEvent = await services.eventServices.findEvent(id);
    const foundUser = await services.userServices.findUser(userId);

    if (!foundUser) {
      res.status(NOT_FOUND_CODE).send({ error: "User not found" });
    } else if (!foundEvent) {
      res.status(NOT_FOUND_CODE).send({ error: "Event not found" });
    }

    if (foundUser && foundEvent) {
      const eventServicesFunction = getEventParticipationFunction(requestType);
      const result = await eventServicesFunction(foundEvent, foundUser);

      console.log("result", result);

      if("kind" in result){
        next(result);
      } else {
        res.json(result.toJSON());
      }
    }
  } catch (error) {
    next(error);
  }
});

const getEventParticipationFunction = (type: ParticipationRequestType) => {
  if(type === ParticipationRequestType.ADD_PARTICIPATION){
    return services.eventServices.addUserToEvent;
  } else if(type === ParticipationRequestType.COMPLETE_EVENT){
    return services.eventServices.completeEvent;
  } else {
    // 3 cases at the time of writing, removing it is
    return services.eventServices.removeUserFromEvent;
  }
};

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = utils.toStringIdFromParamRequest(req.params);
    await services.eventServices.deleteEvent(id);
    res.status(NO_CONTENT_CODE).end();
  } catch (error) {
    next(error);
  }
});

export default router;
