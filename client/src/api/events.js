import axios from 'axios';
import securestorage from '../securestorage';
import {
  BASEURL,
  EVENTS_API_PATH,
  PARTICIPATION_REQUEST_TYPE_ADD,
  PARTICIPATION_REQUEST_TYPE_COMPLETE,
  PARTICIPATION_REQUEST_TYPE_REMOVE,
  AUTH_KEY,
} from '../constants';

const fetchEvents = async () => {
  const response = await axios.get(`${BASEURL}/${EVENTS_API_PATH}`);
  return response.data;
};

const doEventAction = async ({ eventId, requestType }) => {
  try {
    const authData = await securestorage.getData(AUTH_KEY);
    const sentOptions = {
      requestType,
      ...authData,
    };

    const url = `${BASEURL}/${EVENTS_API_PATH}/${eventId}/participation`;
    const response = await axios.post(url, sentOptions, {
      validateStatus: (status) => status <= 500,
    });
    return response.data;
  } catch (error) {
    console.log('doEventAction error', error);
  }
};

const completeEvent = async (eventId) =>
  doEventAction({ eventId, requestType: PARTICIPATION_REQUEST_TYPE_COMPLETE });

const participateInEvent = async (eventId) =>
  doEventAction({ eventId, requestType: PARTICIPATION_REQUEST_TYPE_ADD });

const cancelParticipation = async (eventId) =>
  doEventAction({ eventId, requestType: PARTICIPATION_REQUEST_TYPE_REMOVE });

export default {
  fetchEvents,
  completeEvent,
  participateInEvent,
  cancelParticipation,
};
