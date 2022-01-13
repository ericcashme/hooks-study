import { FC, InputHTMLAttributes, memo } from 'react';
import * as S from './input.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'search';
  id: string;
  label: string;
  width?: string;
}

const Input: FC<Props> = ({
  type = 'text',
  id,
  label,
  width = 'auto',
  ...rest
}): JSX.Element => {
  return (
    <S.WrapInput width={width}>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        type={type}
        id={id}
        aria-required="false"
        aria-label={label}
        {...rest}
      />
    </S.WrapInput>
  );
};

export default memo(Input);
