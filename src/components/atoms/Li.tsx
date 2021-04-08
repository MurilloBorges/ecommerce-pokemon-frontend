import React from 'react';

// INTERFACES
import { LiProps } from '../../@types';

const Li: React.FC<LiProps> = ({ children }: LiProps): React.ReactElement => (
  <li>
    { children }
  </li>
);

export default Li;
