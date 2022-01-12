import * as SecureStore from 'expo-secure-store';
import { AUTH_KEY } from '../constants';

const setData = async (data) => {
  await SecureStore.setItemAsync(AUTH_KEY, JSON.stringify(data));
};

const getData = async () => {
  const authData = await SecureStore.getItemAsync(AUTH_KEY);
  return authData ? JSON.parse(authData) : null;
};

const removeData = async () => {
  await SecureStore.deleteItemAsync(AUTH_KEY);
};

export default { setData, getData, removeData };
