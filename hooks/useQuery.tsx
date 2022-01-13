import { useState, useCallback } from 'react';
import { useApolloClient, ApolloQueryResult } from '@apollo/client';

type Variables = {
  [key: string]: string;
};

type UseQueryProps = {
  loading: boolean;
  data?: string | null;
  runQuery: (query: string, variables: Variables) => void;
};

const useQuery = (): UseQueryProps => {
  const client = useApolloClient();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const runQuery = useCallback(
    async (query, variables) => {
      setLoading(true);
      const result: ApolloQueryResult<any> = await client.query({
        query,
        variables,
      });
      setLoading(false);
      setData(() => result.data);
    },
    [client]
  );

  return {
    loading,
    data,
    runQuery,
  };
};

export default useQuery;
