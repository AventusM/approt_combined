import axios from 'axios';
import securestorage from '../../securestorage/';
import {
  BASEURL,
  LOGIN_API_PATH,
  SET_CURRENT_USER,
  REMOVE_CURRENT_USER,
  AUTH_KEY,
} from '../../constants';

import actions from '../actions';

const setCurrentUser = (data) => {
  return {
    type: SET_CURRENT_USER,
    payload: data,
  };
};

const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER,
  };
};

const login = (credentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${BASEURL}/${LOGIN_API_PATH}`,
        credentials,
      );

      await securestorage.setData(data, AUTH_KEY);
      const { username, userId } = data;
      dispatch(setCurrentUser({ username, userId }));
    } catch (error) {
      console.log('login error', error);
    }
  };
};

const logout = () => {
  return async (dispatch) => {
    try {
      await securestorage.removeData(AUTH_KEY);
      dispatch(removeCurrentUser());
    } catch (error) {
      console.log('logout error', error);
    }
  };
};

const register = (inputData) => {
  return async (dispatch) => {
    try {
      await dispatch(actions.usersActions.createUser(inputData));

      const { username, password } = inputData;
      dispatch(login({ username, password }));
    } catch (error) {
      console.log('register error', error);
    }
  };
};

export default { login, logout, register, setCurrentUser };
