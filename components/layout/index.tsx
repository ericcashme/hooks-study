import { FC } from 'react';
import Head from 'next/head';
import Container from '@components/container';
import Header from '@components/header';
import { SearchProps } from '@types';
import * as S from './layout.styles';

type Props = {
  head: JSX.Element | JSX.Element[] | React.ReactChild | React.ReactChild[];
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | React.ReactChild
    | React.ReactChild[];
  onSearch: ({}: SearchProps) => void;
};

const Layout: FC<Props> = ({ head, children, onSearch }) => {
  return (
    <S.Layout>
      {head ? (
        head
      ) : (
        <Head>
          <title>AvantStay - Go Together, Go Far.</title>
          <meta
            name="description"
            content="Travel with the people you love. Group travel has never been this easy - check out our homes and locations across the country."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      )}

      <Header onSearch={onSearch} />

      <Container type="search">{children}</Container>
    </S.Layout>
  );
};

export default Layout;
