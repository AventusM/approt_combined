import axios from "axios";
import { BASEURL, USERS_API_PATH } from "../constants";

const fetchUsers = async () => {
  const response = await axios.get(`${BASEURL}/${USERS_API_PATH}`);
  return response.data;
};

const createUser = async (newUserData) => {
  const response = await axios.post(
    `${BASEURL}/${USERS_API_PATH}`,
    newUserData
  );
  return response.data;
};

export default { fetchUsers, createUser };
