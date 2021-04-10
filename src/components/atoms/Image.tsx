import React from 'react';

// INTERFACES
import { ImageProps } from '../../@types';

const Image: React.FC<ImageProps> = ({ src, classes, alt, id }: ImageProps) => (
  <img
    loading="lazy"
    className={classes}
    src={src as string}
    alt={alt}
    id={id as string}
  />
);
Image.defaultProps = {
  alt: '',
  id: '',
};

export default Image;
