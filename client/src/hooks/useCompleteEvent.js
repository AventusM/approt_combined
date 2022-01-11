import { Actions } from 'react-native-router-flux';
import { Vibration } from 'react-native';
import { useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from 'react-query';

import {
  ERROR_MESSAGE_TYPE,
  FAILURE_VIBRATE_MS,
  GET_ONE_EVENT_GROUP_QUERY_KEY,
  SUCCESS_MESSAGE_TYPE,
  SUCCESS_VIBRATE_MS,
} from '../constants';

import api from '../api';
import actions from '../store/actions';

export const useCompleteEvent = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutation = useMutation(api.events.completeEvent, {
    onSuccess: (data) => {
      if (data.message) {
        Vibration.vibrate(FAILURE_VIBRATE_MS);
        dispatch(
          actions.diagnosticsActions.setMessage({
            message: data.message,
            status: ERROR_MESSAGE_TYPE,
          }),
        );
      } else {
        Vibration.vibrate(SUCCESS_VIBRATE_MS);
        queryClient.invalidateQueries(GET_ONE_EVENT_GROUP_QUERY_KEY); // Just 1 appro
        dispatch(
          actions.diagnosticsActions.setMessage({
            message: 'Successfully finished this event!',
            status: SUCCESS_MESSAGE_TYPE,
          }),
        );
        Actions.pop();
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
