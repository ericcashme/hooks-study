import styled from '@emotion/styled';
import { color } from '@styles/tokens';

export const Home = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 40px;
`;

export const Images = styled.div`
  width: 390px;
  height: auto;
`;

export const Infos = styled.div`
  width: calc(100% - 390px);
  height: auto;
  padding-top: 15px;
  padding-left: 30px;
`;

export const Address = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.22;
  letter-spacing: -0.01em;
  color: ${color.accent.medium};

  span {
    margin: 0 6px;
  }
`;

export const Title = styled.h2`
  position: relative;
  margin-bottom: 10px;
  color: ${color.primary.medium};
  font-family: 'SangBleu Sunrise';
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.01rem;
  line-height: 1.14;
  white-space: nowrap;
  overflow: hidden;
`;

export const SubInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-bottom: 35px;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 4px 8px;
  color: ${color.primary.medium};
  font-size: 12px;
  letter-spacing: -0.01rem;
  line-height: 1.22;
  opacity: 0.5;

  svg {
    margin-right: 6px;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PriceSeason = styled.div`
  &:first-of-type {
    margin-right: 70px;
  }
`;

export const PriceTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: -4px;
  color: ${color.primary.medium};
  font-size: 12px;
  letter-spacing: -0.01rem;
  line-height: 1.22;
  opacity: 0.5;

  svg {
    opacity: 1;
    margin-right: 4px;
  }
`;

export const PriceRange = styled.div`
  color: ${color.primary.medium};
  font-family: Source Sans Pro;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.1;
  letter-spacing: -0.01em;
`;

export const PriceSubtitle = styled.div`
  color: ${color.primary.medium};
  font-size: 12px;
  letter-spacing: -0.01rem;
  line-height: 1.22;
  opacity: 0.5;
`;
