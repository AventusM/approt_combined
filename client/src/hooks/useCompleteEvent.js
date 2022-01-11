import { useMutation, useQueryClient } from 'react-query';

import { GET_ALL_EVENTS_QUERY_KEY } from '../constants';
import api from '../api';

export const useCompleteEvent = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(api.events.completeEvent, {
    onSuccess: (data) => {
      if (data.message) {
        alert(data.message);
      } else {
        queryClient.invalidateQueries(GET_ALL_EVENTS_QUERY_KEY);
        alert('Successfully completed the event!');
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
