import { useQuery } from 'react-query';
import api from '../api';
import { GET_ONE_EVENT_GROUP_QUERY_KEY } from '../constants';

export const useSingleAppro = (eventGroupId) => {
  const { data, error, status, isFetching, refetch } = useQuery(
    [GET_ONE_EVENT_GROUP_QUERY_KEY, { id: eventGroupId }],
    async () => await api.eventGroups.fetchSingleEventGroup(eventGroupId),
  );

  return { data, error, status, isFetching, refetch };
};
