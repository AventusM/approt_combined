import { useQuery } from 'react-query';
import api from '../api';
import { GET_ALL_EVENT_GROUPS_QUERY_KEY } from '../constants';

// TODO: useInfiniteQuery with <FlatList />
export const useAppros = () => {
  const { data, error, status, isFetching, refetch } = useQuery(
    GET_ALL_EVENT_GROUPS_QUERY_KEY,
    api.eventGroups.fetchEventGroups,
  );

  return { data, error, status, isFetching, refetch };
};
