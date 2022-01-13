import { ApolloClient, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

const client = new ApolloClient({
  uri: 'https://fake-api.avantstay.dev/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          homes: relayStylePagination(),
        },
      },
    },
  }),
});

export default client;
