import React from 'react';

// INTERFACE
import { LabelProps } from '../../@types';

// COMPONENTS
import Input from '../atoms/Input';

const InputGroup: React.FC<LabelProps> = ({
  label,
  input,
}: LabelProps) => (
  <label htmlFor={input.name}>
    {label}
    <Input
      valid={input.valid}
      name={input.name}
      type={input.type}
      mask={input.mask as RegExp[]}
      placeholder={input.placeholder}
      value={input.value}
      handleChange={input.handleChange}
      handleInput={input.handleInput}
      handleBlur={input.handleBlur}
      maxLength={input.maxLength}
    />
  </label>
);

export default InputGroup;
