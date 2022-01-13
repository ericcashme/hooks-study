import { FC, memo, useState, useRef } from 'react';
import useOnClickOutside from '@hooks/useOnClickOutside';
import * as S from './select.styles';

type ValueProps = {
  id: string | number;
  name?: string;
};

type Props = {
  label: string;
  width?: string;
  defaultValue?: string | number;
  placeholder?: string;
  value?: ValueProps | string;
  onChange: (option: ValueProps) => void;
  options: [ValueProps];
  formatOption?: [string];
};

const formatValue = (val: ValueProps, format: [string]) => {
  if (!format || !val) return '';

  const finalFormat = format.reduce((acc, curr) => {
    if (acc) {
      return acc + ' - ' + val[curr];
    }

    return val[curr];
  }, '');

  return finalFormat;
};

const Select: FC<Props> = ({
  label,
  width,
  defaultValue,
  placeholder,
  value,
  onChange,
  options = [],
  formatOption,
}): JSX.Element => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(ref, () => setIsOpen(() => false));

  const handleOpenOptions = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSelectOption = (option: ValueProps) => {
    onChange(option);
  };

  return (
    <S.WrapSelect ref={ref} width={width} onClick={handleOpenOptions}>
      <S.Label>{label}</S.Label>
      <S.Select aria-label={label} hasPlaceholder={!!placeholder}>
        {formatValue(value, formatOption) ||
          value?.name ||
          defaultValue ||
          placeholder}
      </S.Select>
      <S.Arrow name={isOpen ? 'ChevronUp' : 'ChevronDown'} />

      {isOpen && (
        <S.Options>
          {options.map((option) => (
            <S.Option
              key={option.id}
              role="button"
              tabIndex={0}
              onClick={() => handleSelectOption(option)}
            >
              {formatValue(option, formatOption) || option?.name}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.WrapSelect>
  );
};

export default memo(Select);
