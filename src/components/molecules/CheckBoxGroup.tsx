import React from 'react';

// INTERFACE
import { LabelProps } from '../../@types';

// COMPONENTS
import Input from '../atoms/Input';

const CheckBoxGroup: React.FC<LabelProps> = ({
  label,
  input,
  className,
  size,
}: LabelProps) => (
  <div
    className={`${className as string}__group ${className as string}__group--${
      size as string
    }`}
  >
    <Input
      valid={input.valid}
      name={input.name}
      type={input.type}
      placeholder={input.placeholder}
      disabled={input.disabled}
      value={input.value}
      handleChange={input.handleChange}
    />
    {label !== '' && <label htmlFor={input.name}>{label}</label>}
  </div>
);

CheckBoxGroup.defaultProps = {
  className: 'input-checkbox',
  size: '',
};

export default CheckBoxGroup;
