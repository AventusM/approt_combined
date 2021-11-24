import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";

import api from "../api";
import actions from "../store/actions";

import { GET_ALL_EVENTS_QUERY_KEY } from "../constants";

export const useJoinEvent = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutation = useMutation(api.events.participateInEvent, {
    onSuccess: (data) => {
      // Query was "succesful" in a technical sense, but custom error means
      // that the actual error (event action limits / edge cases reached in this request)
      // is returned here with error message field and 400 status
      if (data.message) {
        dispatch(actions.diagnosticsActions.setErrorMessage(data.message));
        setTimeout(() => {
          dispatch(actions.diagnosticsActions.setErrorMessage(null));
        }, 5000);
      } else {
        queryClient.invalidateQueries(GET_ALL_EVENTS_QUERY_KEY);
      }
    },
  });

  const joinEvent = (eventId) => {
    try {
      mutation.mutate(eventId);
    } catch (error) {
      console.log("joinEvent error", error);
    }
  };

  return [joinEvent];
};
