import React from 'react';

import { TitleProps } from '../../@types';

const Title: React.FC<TitleProps> = ({ type, text, props }: TitleProps) =>
  React.createElement(type, props, text);

export default Title;
