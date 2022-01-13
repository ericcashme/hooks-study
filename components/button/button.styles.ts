import styled from '@emotion/styled';
import { color } from '@styles/tokens';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: auto;
  padding: 0 25px;
  border-radius: 3px;
  border: 2px solid ${color.primary.medium};
  background-color: ${color.white};
  color: ${color.primary.medium};
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 142%;
  letter-spacing: -0.01em;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  appearance: none;
  outline: none;

  &:hover,
  &:focus {
    border-color: ${color.accent.medium};
    color: ${color.accent.medium};
  }

  &:active {
    border-color: ${color.accent.dark};
    color: ${color.accent.dark};
  }
`;
