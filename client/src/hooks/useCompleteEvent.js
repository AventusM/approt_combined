import { Actions } from 'react-native-router-flux';
import { useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from 'react-query';

import {
  ERROR_MESSAGE_TYPE,
  GET_ALL_EVENTS_QUERY_KEY,
  SUCCESS_MESSAGE_TYPE,
} from '../constants';
import api from '../api';
import actions from '../store/actions';

export const useCompleteEvent = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutation = useMutation(api.events.completeEvent, {
    onSuccess: (data) => {
      if (data.message) {
        dispatch(
          actions.diagnosticsActions.setMessage({
            message: data.message,
            status: ERROR_MESSAGE_TYPE,
          }),
        );
      } else {
        queryClient.invalidateQueries(GET_ALL_EVENTS_QUERY_KEY);
        dispatch(
          actions.diagnosticsActions.setMessage({
            message: 'Successfully finished this event!',
            status: SUCCESS_MESSAGE_TYPE,
          }),
        );
      }
    },
  });

  const completeEvent = (eventData) => {
    try {
      mutation.mutate(eventData);
    } catch (error) {
      console.log('completeEvent error', error);
    }
  };

  return [completeEvent];
};
