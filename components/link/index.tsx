import { memo, FC, AnchorHTMLAttributes } from 'react';
import * as S from './link.styles';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | React.ReactChild
    | React.ReactChild[];
}

const Link: FC<Props> = ({ children, ...rest }): JSX.Element => {
  return <S.Link {...rest}>{children}</S.Link>;
};

export default memo(Link);
