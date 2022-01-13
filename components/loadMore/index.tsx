import { FC, useEffect, useRef } from 'react';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import * as S from './loadMore.styles';

type LoadMoreProps = {
  callback: () => void;
};

const LoadMore: FC<LoadMoreProps> = ({ callback }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    root: null,
    threshold: 0.1,
  });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      callback();
    }
  }, [isVisible, callback]);

  return <S.LoadMore ref={ref}>Loading more homes...</S.LoadMore>;
};

export default LoadMore;
