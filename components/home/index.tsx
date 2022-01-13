import { memo, FC, useEffect } from 'react';
import Icon from '@components/icon';
import Image from 'next/image';
import QUERY from './HomePrice';
import useQuery from '@hooks/useQuery';
import { HomeProps, PeriodProps } from '@types';
import * as S from './home.styles';

type Props = {
  homeData: HomeProps;
  period: PeriodProps | undefined;
  coupon: string;
};

const priceFormatter = (value: number) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value);

  return formattedPrice;
};

const calcPerNight = (value: number, total: number): number | string => {
  if (value && total) {
    const valuePerNight = Math.round(value / total);
    return priceFormatter(valuePerNight);
  }

  return '';
};

const Home: FC<Props> = ({ homeData, period, coupon }): JSX.Element => {
  const { loading, data, runQuery } = useQuery();

  const {
    id,
    title,
    photos,
    roomsCount,
    bathroomsCount,
    maxOccupancy,
    hasPool,
    seasonPricing,
    cityName,
    stateName,
    stateCode,
  } = homeData;

  useEffect(() => {
    if (id && period?.checkIn && period.checkOut) {
      runQuery(QUERY, {
        id,
        period,
        coupon,
      });
    }
  }, [id, period, coupon, runQuery]);

  return (
    <S.Home>
      <S.Images>
        <Image
          src={`${photos[0].url}?width=390&height=208&quality=75&webp=true`}
          placeholder="blur"
          blurDataURL={`${photos[0].url}?width=16&height=10`}
          alt={title}
          width={390}
          height={208}
        />
      </S.Images>
      <S.Infos>
        <S.Address>
          {cityName}
          <span>•</span>
          {stateName}
          {', '}
          {stateCode}
        </S.Address>
        <S.Title>{title}</S.Title>
        <S.SubInfos>
          {roomsCount && (
            <S.Tag>
              <Icon name="Rooms" />
              {roomsCount}
              {roomsCount === 1 ? ' Bedroom' : ' Bedrooms'}
            </S.Tag>
          )}

          {bathroomsCount && (
            <S.Tag>
              <Icon name="Bath" />
              {bathroomsCount}
              {bathroomsCount === 1 ? ' Bathroom' : ' Bathrooms'}
            </S.Tag>
          )}

          {hasPool && (
            <S.Tag>
              <Icon name="Pool" />
              Pool
            </S.Tag>
          )}

          {maxOccupancy && (
            <S.Tag>
              <Icon name="User" />
              {maxOccupancy}
              {maxOccupancy === 1 ? ' Guest' : ' Guests'}
            </S.Tag>
          )}
        </S.SubInfos>

        <S.Price>
          {loading && <div>Loading...</div>}

          {!loading && data && (
            <S.PriceSeason>
              <S.PriceTitle>
                Total • {data?.homesPricing[0].numberOfNights} nights
              </S.PriceTitle>
              <S.PriceRange>
                {priceFormatter(data?.homesPricing[0].total)}
              </S.PriceRange>
              <S.PriceSubtitle>
                {calcPerNight(
                  data?.homesPricing[0].total,
                  data?.homesPricing[0].numberOfNights
                )}{' '}
                per night
              </S.PriceSubtitle>
            </S.PriceSeason>
          )}

          {!loading && !data && (
            <>
              <S.PriceSeason>
                <S.PriceTitle>
                  <Icon name="Low" />
                  Budget Season
                </S.PriceTitle>
                <S.PriceRange>
                  {priceFormatter(seasonPricing?.lowSeason?.minPrice)}
                  {' - '}
                  {priceFormatter(seasonPricing?.lowSeason?.maxPrice)}
                </S.PriceRange>
                <S.PriceSubtitle>per night</S.PriceSubtitle>
              </S.PriceSeason>
              <S.PriceSeason>
                <S.PriceTitle>
                  <Icon name="High" />
                  Budget Season
                </S.PriceTitle>
                <S.PriceRange>
                  {priceFormatter(seasonPricing?.highSeason?.minPrice)}
                  {' - '}
                  {priceFormatter(seasonPricing?.highSeason?.maxPrice)}
                </S.PriceRange>
                <S.PriceSubtitle>per night</S.PriceSubtitle>
              </S.PriceSeason>
            </>
          )}
        </S.Price>
      </S.Infos>
    </S.Home>
  );
};

export default memo(Home);
