import styled from '@emotion/styled';

type ContainerProps = {
  type?: 'default' | 'search';
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${(p) => (p.type === 'search' ? '800px' : '1280px')};
  margin: 0 auto;
`;
