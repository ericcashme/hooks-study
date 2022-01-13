import { memo, FC } from 'react';
import * as S from './container.styles';

type Props = {
  type?: 'default' | 'search';
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | React.ReactChild
    | React.ReactChild[];
};

const Container: FC<Props> = ({ type, children }): JSX.Element => {
  return <S.Container type={type}>{children}</S.Container>;
};

export default memo(Container);
