import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

import api from '../api';
import actions from '../store/actions';

import {
  ERROR_MESSAGE_TYPE,
  GET_ALL_EVENT_GROUPS_QUERY_KEY,
} from '../constants';

export const useLeaveAppro = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutation = useMutation(api.eventGroups.leaveEventGroup, {
    onSuccess: (data) => {
      if (data.message) {
        dispatch(
          actions.diagnosticsActions.setMessage({
            message: data.message,
            status: ERROR_MESSAGE_TYPE,
          }),
        );
      } else {
        queryClient.invalidateQueries(GET_ALL_EVENT_GROUPS_QUERY_KEY);
      }
    },
  });

  const leaveAppro = (approId) => {
    try {
      mutation.mutate(approId);
    } catch (error) {
      console.log('leaveAppro error', error);
    }
  };

  return [leaveAppro];
};
