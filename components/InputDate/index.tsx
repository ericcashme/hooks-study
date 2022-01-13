import { FC, memo, useState } from 'react';
import DatePicker from 'react-datepicker';
import * as S from './inputDate.styles';

type Props = {
  label: string;
  width?: string;
  selected?: string;
  onChange: () => void;
  startDate?: string;
  endDate?: string;
};

const InputDate: FC<Props> = ({
  label,
  width = 'auto',
  selected,
  onChange,
  startDate,
  endDate,
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.WrapInput width={width}>
      <S.Label>{label}</S.Label>
      <S.Arrow name={isOpen ? 'ChevronUp' : 'ChevronDown'} />
      <DatePicker
        selectsRange
        minDate={new Date()}
        selected={selected}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        placeholderText="Select"
        dateFormat="MMM d, yyyy"
        onCalendarClose={() => setIsOpen(false)}
        onCalendarOpen={() => setIsOpen(true)}
      />
    </S.WrapInput>
  );
};

export default memo(InputDate);
