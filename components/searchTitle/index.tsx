import { memo, FC } from 'react';
import * as S from './searchTitle.styles';

type Props = {
  isLoading: boolean;
  totalHomes?: number;
};

const SearchTitle: FC<Props> = ({ isLoading, totalHomes }): JSX.Element => {
  return (
    <S.SearchTitle>
      <S.Subtitle>
        {isLoading ? 'Please wait' : 'Your stay in one of'}
      </S.Subtitle>
      <S.TotalHomes>
        {isLoading && <b>Loading</b>}
        {!isLoading && totalHomes && <b>{totalHomes}</b>}
        {' homes'}
      </S.TotalHomes>
    </S.SearchTitle>
  );
};

export default memo(SearchTitle);
