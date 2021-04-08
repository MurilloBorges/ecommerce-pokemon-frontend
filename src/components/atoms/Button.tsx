import React from 'react';
import { ButtonProps } from '../../@types';

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  handleClick,
  customClass,
  id,
}: ButtonProps) => (
  <button
    id={id}
    type={type === 'submit' ? 'submit' : 'button'}
    className={customClass || ''}
    // onClick={handleClick}
    onClickCapture={handleClick}
  >
    {text}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
