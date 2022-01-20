// Also known as "Appros"
import axios from 'axios';
import {
  BASEURL,
  EVENT_GROUPS_API_PATH,
  PARTICIPATION_REQUEST_TYPE_ADD,
  PARTICIPATION_REQUEST_TYPE_REMOVE,
  AUTH_KEY,
} from '../constants';
import securestorage from '../securestorage';

const fetchEventGroups = async () => {
  const response = await axios.get(`${BASEURL}/${EVENT_GROUPS_API_PATH}`);
  return response.data;
};

const fetchSingleEventGroup = async (eventGroupId) => {
  const response = await axios.get(
    `${BASEURL}/${EVENT_GROUPS_API_PATH}/${eventGroupId}`,
  );

  return response.data;
};

const createEventGroup = async (eventGroupInputData) => {
  try {
    const authData = await securestorage.getData(AUTH_KEY);
    const sentOptions = {
      ...eventGroupInputData,
      ...authData,
    };

    const url = `${BASEURL}/${EVENT_GROUPS_API_PATH}`;
    const response = await axios.post(url, sentOptions, {
      validateStatus: (status) => status <= 500,
    });

    return response.data;
  } catch (error) {
    console.log('createEventGroup error', error);
  }
};

const doEventGroupAction = async ({ approId, requestType }) => {
  try {
    const authData = await securestorage.getData(AUTH_KEY);
    const sentOptions = {
      requestType: requestType,
      ...authData,
    };

    const url = `${BASEURL}/${EVENT_GROUPS_API_PATH}/${approId}/participation`;
    const response = await axios.post(url, sentOptions, {
      validateStatus: (status) => status <= 500,
    });
    return response.data;
  } catch (error) {
    console.log('doEventGroupAction error', error);
  }
};

const joinEventGroup = async (approId) =>
  doEventGroupAction({ approId, requestType: PARTICIPATION_REQUEST_TYPE_ADD });

const leaveEventGroup = async (approId) =>
  doEventGroupAction({
    approId,
    requestType: PARTICIPATION_REQUEST_TYPE_REMOVE,
  });

export default {
  fetchEventGroups,
  joinEventGroup,
  fetchSingleEventGroup,
  createEventGroup,
  leaveEventGroup,
};
