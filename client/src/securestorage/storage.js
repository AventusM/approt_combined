import * as SecureStore from 'expo-secure-store';

const setData = async (data, key) => {
  await SecureStore.setItemAsync(key, JSON.stringify(data));
};

const getData = async (key) => {
  const authData = await SecureStore.getItemAsync(key);
  return authData ? JSON.parse(authData) : null;
};

const removeData = async (key) => {
  await SecureStore.deleteItemAsync(key);
};

export default { setData, getData, removeData };
