import React from 'react';

// INTERFACES
import { ImageProps } from '../../@types';

const Image: React.FC<ImageProps> = ({ src, classes, alt }: ImageProps) => (
  <img loading="lazy" className={classes} src={src as string} alt={alt} />
);
Image.defaultProps = {
  alt: '',
};

export default Image;
