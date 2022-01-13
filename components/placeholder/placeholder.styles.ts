import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { color } from '@styles/tokens';

const Opacity = keyframes`
  0%   { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
`;

export const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;
  animation: ${Opacity} 1.5s ease infinite;
`;

export const Image = styled.div`
  width: 390px;
  height: 208px;
  margin-right: 30px;
  background-color: ${color.primary.extraLight};
`;

export const Place = styled.div`
  width: 132px;
  height: 17px;
  margin-bottom: 4px;
  background-color: ${color.primary.extraLight};
`;

export const Title = styled.div`
  width: 218px;
  height: 28px;
  margin-bottom: 4px;
  background-color: ${color.primary.extraLight};
`;

export const SubInfos = styled.div`
  width: 241px;
  height: 17px;
  margin-bottom: 40px;
  background-color: ${color.primary.extraLight};
`;

export const Budget = styled.div`
  width: 74px;
  height: 17px;
  margin-bottom: 4px;
  background-color: ${color.primary.extraLight};
`;

export const Price = styled.div`
  width: 98px;
  height: 22px;
  margin-bottom: 4px;
  background-color: ${color.primary.extraLight};
`;

export const PerNight = styled.div`
  width: 45px;
  height: 17px;
  background-color: ${color.primary.extraLight};
`;
