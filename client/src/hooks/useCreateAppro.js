import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import api from '../api';
import actions from '../store/actions';

import {
  GET_ALL_EVENT_GROUPS_QUERY_KEY,
  MAIN_ROUTE,
  ERROR_MESSAGE_TYPE,
  SUCCESS_MESSAGE_TYPE,
} from '../constants';

export const useCreateAppro = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const mutation = useMutation(api.eventGroups.createEventGroup, {
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
        dispatch(
          actions.diagnosticsActions.setMessage({
            message: 'Appro successfully created!',
            status: SUCCESS_MESSAGE_TYPE,
          }),
        );

        navigation.navigate(MAIN_ROUTE);
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
