import { memo, FC, useState, useEffect, useCallback, useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import dayjs from 'dayjs';
import Input from '@components/input';
import Select from '@components/select';
import InputDate from '@components/inputDate';
import {
  SearchProps,
  RegionProps,
  PeriodProps,
  GuestsProps,
  OrderProps,
} from '@types';
import { ORDER_OPTIONS, GUESTS_OPTIONS } from './constants';
import 'react-datepicker/dist/react-datepicker.css';

import * as S from './search.styles';

const QUERY = gql`
  query {
    regions {
      id
      name
      stateName
      stateCode
    }
  }
`;

type Props = {
  onSearch: ({}: SearchProps) => void;
};

const Search: FC<Props> = ({ onSearch }): JSX.Element => {
  const firstUpdate = useRef(true);
  const [region, setRegion] = useState<RegionProps>();
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [period, setPeriod] = useState<PeriodProps>();
  const [guests, setGuests] = useState<GuestsProps>({ id: 2, name: '2 Guest' });
  const [order, setOrder] = useState<OrderProps>({
    id: 'RELEVANCE',
    name: 'Relevance (default)',
  });
  const [couponValue, setCouponValue] = useState<string>('');
  const [coupon, setCoupon] = useState<string>('');
  const { data: dataRegions } = useQuery(QUERY);

  const handleDate = useCallback((dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      setPeriod(() => ({
        checkIn: dayjs(start).format('YYYY-MM-DD'),
        checkOut: dayjs(end).format('YYYY-MM-DD'),
      }));
    }
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    onSearch({ region, period, guests, order, coupon });
  }, [onSearch, region, period, guests, order, coupon]);

  return (
    <S.WrapSearch>
      <S.Search>
        <Select
          label="Where"
          width="35%"
          defaultValue="Any region"
          value={region}
          onChange={(option: RegionProps) => setRegion(option)}
          options={dataRegions?.regions}
          formatOption={['name', 'stateCode']}
        />

        <S.Divisor />

        <InputDate
          label="When"
          width="29%"
          selected={startDate}
          onChange={handleDate}
          startDate={startDate}
          endDate={endDate}
        />

        <S.Divisor />

        <Select
          label="Who"
          width="17%"
          defaultValue={1}
          value={guests}
          onChange={(option) => setGuests(option)}
          options={GUESTS_OPTIONS}
        />

        <S.Divisor />

        <Select
          label="Order"
          width="19%"
          defaultValue="Any region"
          value={order}
          onChange={(option) => setOrder(option)}
          options={ORDER_OPTIONS}
        />
      </S.Search>

      <S.Coupon>
        <Input
          id="cupon"
          name="cupon"
          label="Cupon"
          placeholder="Got a code?"
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            setCouponValue(e.currentTarget.value)
          }
          onBlur={(e: React.FormEvent<HTMLInputElement>): void =>
            setCoupon(e.currentTarget.value)
          }
          value={couponValue}
          width="100%"
        />
      </S.Coupon>
    </S.WrapSearch>
  );
};

export default memo(Search);
