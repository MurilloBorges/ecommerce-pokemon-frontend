import React from 'react';

import Image from '../atoms/Image';
import Subtitle from '../atoms/Subtitle';
import IconSVG from '../molecules/IconSVG';

import logo from '../../assets/images/logo.png';

const Footer: React.FC = () => (
  <div className="footer">
    <div className="d-flex justify-content-between align-items-center footer-group">
      <div className="d-flex">
        <Subtitle type="span" text="Desenvolvido por Murillo Borges ®" />
      </div>
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div className="d-flex flex-lg-row">
        <div className="group-footer-icons">
          <IconSVG width="35" height="35" icon="facebook2" fill="#f0f0f0" />
          <IconSVG width="35" height="35" icon="linkedin" fill="#f0f0f0" />
          <IconSVG width="35" height="35" icon="instagram" fill="#f0f0f0" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
