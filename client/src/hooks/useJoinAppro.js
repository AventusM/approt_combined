import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";

import api from "../api";
import actions from "../store/actions";

import { GET_ALL_EVENT_GROUPS_QUERY_KEY } from "../constants";

export const useJoinAppro = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutation = useMutation(api.eventGroups.joinEventGroup, {
    onSuccess: (data) => {
      if (data.message) {
        dispatch(actions.diagnosticsActions.setErrorMessage(data.message));
        setTimeout(() => {
          dispatch(actions.diagnosticsActions.setErrorMessage(null));
        }, 5000);
      } else {
        queryClient.invalidateQueries(GET_ALL_EVENT_GROUPS_QUERY_KEY);
      }
    },
  });

  const joinAppro = (approId) => {
    try {
      mutation.mutate(approId);
    } catch (error) {
      console.log("joinAppro error", error);
    }
  };

  return [joinAppro];
};
