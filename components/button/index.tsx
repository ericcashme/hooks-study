import { memo, FC, ButtonHTMLAttributes } from 'react';
import * as S from './button.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | React.ReactChild
    | React.ReactChild[];
}

const Buttom: FC<Props> = ({ children, ...rest }): JSX.Element => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default memo(Buttom);
