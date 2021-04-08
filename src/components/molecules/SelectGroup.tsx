import React from 'react';

// INTERFACE
import { SelectGroupProps } from '../../@types';

// COMPONENTS
import Select from '../atoms/Select';

const SelectGroup: React.FC<SelectGroupProps> = ({
  label,
  select,
}: SelectGroupProps) => (
  <label htmlFor={select.name}>
    {label}
    <Select
      name={select.name}
      placeholder={select.placeholder}
      value={select.value}
      handleChange={select.handleChange}
      options={select.options}
      className={select.className}
      disabled={select.disabled}
    />
  </label>
);

export default SelectGroup;
