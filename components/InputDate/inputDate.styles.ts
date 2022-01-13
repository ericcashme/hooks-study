import styled from '@emotion/styled';
import Icon from '@components/icon';
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
  background-color: white;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    border: 2px solid transparent;
    inset: -1px;
    border-radius: 3px;
  }

  &:hover::after {
    border: 1px solid ${color.accent.light};
  }

  &:focus::after {
    border: 2px solid ${color.accent.medium};
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  input {
    height: 50px;
    width: 100%;
    padding-top: 15px;
    padding-left: 15px;
    border: none;
    border-radius: 3px;
    background: transparent;
    color: #022b54;
    font-size: 13px;
    outline: none;

    ::placeholder {
      color: rgba(2, 43, 84, 0.3);
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  z-index: 0;
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

export const Arrow = styled(Icon)`
  position: absolute;
  z-index: 0;
  top: 23px;
  right: 15px;
`;
