import React from 'react';
import MaskedInput from 'react-text-mask';

// INTERFACES
import { InputProps } from '../../@types';

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  handleChange,
  handleBlur,
  handleInput,
  maxLength,
  valid,
  mask,
  guide,
  disabled,
}: InputProps) => (
  mask ? (
    <MaskedInput
      className={`input input-${type} ${!valid ? 'input--invalid' : ''}`}
      id={name}
      mask={mask as RegExp[]}
      guide={guide as boolean}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onInput={handleInput}
      maxLength={maxLength}
    />
  ) : (
    <input
      className={`input input-${type} ${!valid ? 'input--invalid' : ''}`}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value as string}
      checked={value as boolean}
      onChange={handleChange}
      onBlur={handleBlur}
      onInput={handleInput}
      maxLength={maxLength}
      disabled={disabled}
    />
  )
);

Input.defaultProps = {
  handleChange: () => {},
  handleBlur: () => {},
  handleInput: () => {},
  placeholder: '',
  maxLength: undefined,
  valid: true,
  mask: undefined,
  guide: false,
  disabled: false,
};

export default Input;
