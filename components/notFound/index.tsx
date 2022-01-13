import { memo, FC } from 'react';
import Button from '@components/button';
import Image from 'next/image';
import * as S from './container.styles';

type Props = {
  region: string;
};

const NotFound: FC<Props> = ({ region }): JSX.Element => {
  return (
    <S.NotFound>
      <Image
        src="/satellite.svg"
        width={186}
        height={174}
        alt="Search not found"
      />
      <S.Description>
        Oops! We haven’t found anything mathing your search. <br />
        Try something else or reset the filters to see all {region} homes.
      </S.Description>
      <Button>See all {region} homes</Button>
    </S.NotFound>
  );
};

export default memo(NotFound);
