import React from 'react';

import { BannerProps } from '../../@types';

import Image from '../atoms/Image';

const Banner: React.FC<BannerProps> = ({
  src,
}: BannerProps) => (
  <div className="banner">
    <Image src={src} alt={src} />
  </div>
);

export default Banner;
