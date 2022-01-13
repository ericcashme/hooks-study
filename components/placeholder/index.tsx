import { memo } from 'react';
import * as S from './placeholder.styles';

const Placeholder = (): JSX.Element => {
  return (
    <S.Placeholder>
      <S.Image />
      <div>
        <S.Place />
        <S.Title />
        <S.SubInfos />
        <S.Budget />
        <S.Price />
        <S.PerNight />
      </div>
    </S.Placeholder>
  );
};

export default memo(Placeholder);
