import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_KEY } from "../constants";

const setData = async (data) => {
  await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(data));
};

const getData = async () => {
  const authData = await AsyncStorage.getItem(AUTH_KEY);
  return authData ? JSON.parse(authData) : null;
};

const removeData = async () => {
  await AsyncStorage.removeItem(AUTH_KEY);
};

export default { setData, getData, removeData };
