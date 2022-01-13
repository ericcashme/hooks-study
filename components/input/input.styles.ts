import styled from '@emotion/styled';
import { color } from '@styles/tokens';

type WrapInputProps = {
  width?: string;
};

export const WrapInput = styled.span<WrapInputProps>`
  position: relative;
  display: inline-block;
  text-align: left;
  vertical-align: middle;
  width: ${(p) => p.width};
`;

export const Label = styled.label`
  position: absolute;
  z-index: 2;
  top: 8px;
  left: 17px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 122%;
  letter-spacing: -0.01em;
  color: #53c3d0;
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  padding-top: 15px;
  padding-left: 15px;
  border: 1px solid #e8eff5;
  border-radius: 3px;
  background: #ffffff;
  color: #022b54;
  font-size: 13px;
  outline: none;

  ::placeholder {
    color: rgba(2, 43, 84, 0.3);
  }

  &:hover,
  &:focus {
    padding-left: 14px;
  }

  &:hover {
    border: 2px solid ${color.accent.light};
  }

  &:focus {
    border: 2px solid ${color.accent.medium};
  }
`;
