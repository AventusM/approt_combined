import mongoose from "mongoose";
import { EVENT_DOCUMENT_REF, EVENT_GROUP_DOCUMENT_REF, USER_DOCUMENT_REF } from "../constants";
import { MongooseEventObject } from "../types";

// Probably useless --> consider using google places id and refetching relevant data when opening the map view
const geometryPointSchema = new mongoose.Schema({
  lat: { type: String, required: true },
  lng: { type: String, required: true },
});

// TODO: Max size of users for single event at once?
const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    eventGroup: { type: mongoose.Schema.Types.ObjectId, ref: EVENT_GROUP_DOCUMENT_REF },
    location: { type: String, required: true },
    point: { type: geometryPointSchema }, // TODO: Use the google place id and refetch the data when actually viewing the map later on? Seems much more logical than this (+ allows probably for linking with google maps to help route ppl)
    participants: [
      { type: mongoose.Schema.Types.ObjectId, ref: USER_DOCUMENT_REF },
    ], // TODO: Check if participants field is even necessary. completedParticipants is probably enough.
    completedParticipants: [
      { type: mongoose.Schema.Types.ObjectId, ref: USER_DOCUMENT_REF }, // TODO: Populate this with eventgroups --> frontend renders completed / not icon based whether on user is found in this array
    ],
  },
  { timestamps: true },
);

eventSchema.set("toJSON", {
  virtuals: true,
  transform: (_doc: unknown, converted: { _id: unknown; __v: unknown }) => {
    delete converted.__v;
    delete converted._id;
  },
});

export default mongoose.model<MongooseEventObject>(
  EVENT_DOCUMENT_REF,
  eventSchema
);
