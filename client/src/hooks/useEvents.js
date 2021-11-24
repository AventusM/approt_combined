import { useQuery } from "react-query";
import api from "../api";
import { GET_ALL_EVENTS_QUERY_KEY } from "../constants";

// TODO: useInfiniteQuery with <FlatList />
export const useEvents = () => {
  const { data, error, status } = useQuery(
    GET_ALL_EVENTS_QUERY_KEY,
    api.events.fetchEvents
  );

  return { data, error, status };
};
