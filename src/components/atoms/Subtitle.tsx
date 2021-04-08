import React from 'react';

import { SubtitleProps } from '../../@types';

const Subtitle: React.FC<SubtitleProps> = ({
  type,
  text,
  props,
}: SubtitleProps) => React.createElement(type, props, text);

export default Subtitle;
