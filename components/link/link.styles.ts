import styled from '@emotion/styled';
import { color } from '@styles/tokens';

export const Link = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 15px;
  color: ${color.primary.medium};
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.42;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${color.accent.medium};
  }

  &:focus {
    &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 1px;
      background-color: ${color.accent.medium};
    }
  }
`;
