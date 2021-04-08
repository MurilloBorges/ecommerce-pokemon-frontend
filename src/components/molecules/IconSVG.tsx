import React from 'react';
import icone from '../../assets/images/icons/symbol-defs.svg';

// INTERFACES
import { IconSVGProps } from '../../@types';

const IconSVG: React.FC<IconSVGProps> = ({
  icon,
  className,
  width,
  height,
  fill,
}: IconSVGProps) => (
  <svg
    aria-hidden="true"
    className={className}
    width={width}
    height={height}
    fill={fill}
  >
    <use xlinkHref={`${icone}#icon-${icon}`} />
  </svg>
);

IconSVG.defaultProps = {
  className: '',
  width: '100%',
  height: '100%',
  fill: '#000000',
};

export default IconSVG;
