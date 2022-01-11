import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

import api from '../api';
import actions from '../store/actions';

import { GET_ALL_EVENT_GROUPS_QUERY_KEY } from '../constants';

export const useCreateAppro = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutation = useMutation(api.eventGroups.createEventGroup, {
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

  const createAppro = (eventGroupData) => {
    try {
      mutation.mutate(eventGroupData);
    } catch (error) {
      console.log('createAppro error', error);
    }
  };

  return [createAppro];
};
