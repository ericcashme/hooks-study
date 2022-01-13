import styled from '@emotion/styled';
import { color } from '@styles/tokens';

export const SearchTitle = styled.div`
  margin-bottom: 30px;
`;

export const Subtitle = styled.span`
  position: relative;
  color: ${color.accent.medium};
  font-weight: 600;
  font-size: 10px;
  line-height: 1.22;
  letter-spacing: -0.01em;
  text-transform: uppercase;

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 68px;
    height: 1px;
    left: calc(100% + 7px);
    top: 45%;
    background-color: ${color.accent.medium};
  }
`;

export const TotalHomes = styled.h1`
  color: ${color.primary.medium};
  font-size: 28px;
  font-weight: 300;
  line-height: 1.22;
  letter-spacing: -0.01em;

  b {
    font-weight: 600;
  }
`;
