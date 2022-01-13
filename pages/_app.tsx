import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import { globalStyles } from '../styles/globalStyle.styles';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      {globalStyles}
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
export default MyApp;
