import React from 'react';

// INTERFACES
import { HrefProps } from '../../@types';

const Href: React.FC<HrefProps> = ({
  to, text, event,
}: HrefProps) => (
  <a
    href={to}
    onClick={event}
  >
    {text}
  </a>
);

Href.defaultProps = {
  event: () => undefined,
};

export default Href;
