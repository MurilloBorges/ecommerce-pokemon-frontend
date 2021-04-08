import React from 'react';

// INTERFACES
import { UlProps } from '../../@types';

// COMPONENTS
import Li from '../atoms/Li';

const Ul: React.FC<UlProps> = ({ lists }: UlProps): React.ReactElement => (
  <ul>
    {
      lists.map((list, index) => <Li key={index.toString()}>{list.text}</Li>)
    }
  </ul>
);

export default Ul;
