import React from 'react';

// INTERFACES
import { LinksProps } from '../../@types';

const Links: React.FC<LinksProps> = ({
  children,
}: LinksProps): React.ReactElement => (
  <ul>
    { children }
  </ul>
);

export default Links;
