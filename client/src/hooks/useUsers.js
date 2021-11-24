import { useQuery } from "react-query";
import api from "../api";
import { GET_ALL_USERS_QUERY_KEY } from "../constants";

// TODO: useInfiniteQuery with <FlatList />
export const useUsers = () => {
  const { data, error, status } = useQuery(
    GET_ALL_USERS_QUERY_KEY,
    api.users.fetchUsers
  );

  return { data, error, status };
};
