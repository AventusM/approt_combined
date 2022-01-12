import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

import api from '../api';
import actions from '../store/actions';

import { GET_ALL_USERS_QUERY_KEY } from '../constants';

export const useSignup = ({ usernameRef, passwordRef }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutation = useMutation(api.users.createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(GET_ALL_USERS_QUERY_KEY);
      dispatch(
        actions.authActions.login({
          username: usernameRef.current,
          password: passwordRef.current,
        }),
      );
    },
  });

  const signUpAndLogin = (registrationData) => {
    try {
      mutation.mutate(registrationData);
    } catch (error) {
      console.log('signUpAndLogin error', error);
    }
  };

  return [signUpAndLogin];
};
