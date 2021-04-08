import React from 'react';
import { ButtonIconProps } from '../../@types';

import IconSVG from './IconSVG';

const Button: React.FC<ButtonIconProps> = ({
  type,
  text,
  handleClick,
  customClass,
  iconPosition,
  icon,
  fill,
  id,
}: ButtonIconProps) => (
  <button
    id={id}
    type={type === 'submit' ? 'submit' : 'button'}
    className={customClass || ''}
    // onClick={handleClick}
    onClickCapture={handleClick}
  >
    {iconPosition === 'left' && (
      <IconSVG
        className="mb-1 mr-1"
        width="20"
        height="20"
        icon={icon}
        fill={fill}
      />
    )}
    {` ${text} `}
    {iconPosition === 'right' && (
      <IconSVG
        className="mb-1 ml-1"
        width="20"
        height="20"
        icon={icon}
        fill={fill}
      />
    )}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
