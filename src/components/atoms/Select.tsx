import React from 'react';

// INTERFACES
import { SelectProps } from '../../@types';

const Select: React.FC<SelectProps> = ({
  name,
  placeholder,
  value,
  handleChange,
  options,
  className,
  placeholderDeEspera,
  disabled,
}: SelectProps) => (
  <select
    id={name}
    name={name}
    value={value}
    onChange={handleChange}
    className={`select ${className as string}`}
    disabled={options.length < 1 || options.length === 1 || disabled}
  >
    {options.length < 1 && (
      <option value="">
        {placeholderDeEspera}
      </option>
    )}
    {options.length > 1 && (
      <>
        <option value="">
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index.toString()} value={option.value}>
            {option.text}
          </option>
        ))}
      </>
    )}
    {options.length === 1 && (
      <option key={options[0].value} value={options[0].value}>
        {options[0].text}
      </option>
    )}
  </select>
);

Select.defaultProps = {
  handleChange: () => {},
  placeholder: '',
  className: '',
  placeholderDeEspera: 'Carregando...',
  disabled: false,
};

export default Select;
