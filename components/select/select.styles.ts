import styled from '@emotion/styled';
import Icon from '@components/icon';
import { color } from '@styles/tokens';

type WrapSelectProps = {
  width?: string;
};

export const WrapSelect = styled.button<WrapSelectProps>`
  position: relative;
  display: inline-block;
  padding-bottom: 1.5rem;
  width: ${(p) => p.width};
  height: 50px;
  padding: 24px 15px 0;
  border: none;
  border-radius: 3px;
  background-color: #ffffff;
  outline: none;
  appearance: none;
  cursor: pointer;
  text-align: left;
  vertical-align: middle;

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
`;

export const Label = styled.span`
  position: absolute;
  z-index: 2;
  top: 8px;
  left: 16px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 122%;
  letter-spacing: -0.01em;
  color: #53c3d0;
`;

type SelectProps = {
  hasPlaceholder?: boolean;
};

export const Select = styled.span<SelectProps>`
  display: block;
  width: 100%;
  height: 100%;
  text-align: left;
  color: ${(p) => (p.hasPlaceholder ? 'rgba(2, 43, 84, 0.3)' : '#022b54')};
  font-size: 13px;
`;

export const Arrow = styled(Icon)`
  position: absolute;
  z-index: 2;
  top: 23px;
  right: 15px;
`;

export const Options = styled.div`
  position: absolute;
  z-index: 999;
  top: 54px;
  left: 0px;
  width: 100%;
  max-height: 372px;
  padding: 7px 0;
  overflow-y: auto;
  background-color: white;
  border-radius: 5px;
  border: 2px solid ${color.accent.medium};
  box-shadow: rgb(83 195 208 / 12%) 0px 2px 16px;
`;

export const Option = styled.span`
  display: block;
  width: 100%;
  padding: 7px 16px;
  border: 0;
  outline: none;
  appearance: none;
  background-color: white;
  color: rgb(2, 43, 84);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.54;
  letter-spacing: -0.01rem;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${color.accent.light};
  }
`;
