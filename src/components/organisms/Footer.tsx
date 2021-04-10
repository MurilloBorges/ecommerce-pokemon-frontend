import React from 'react';
import { useHistory } from 'react-router-dom';

import Image from '../atoms/Image';
import Subtitle from '../atoms/Subtitle';
import IconSVG from '../molecules/IconSVG';

import logo from '../../assets/images/logo.png';

const Footer: React.FC = () => {
  const history = useHistory();

  return (
    <div className="footer">
      <div className="d-flex justify-content-between align-items-center footer-group">
        <div className="d-flex">
          <Subtitle type="span" text="Desenvolvido por Murillo Borges ®" />
        </div>
        <div
          tabIndex={0}
          role="button"
          onClick={() => history.push('/')}
          onKeyDown={() => {}}
          className="image-header"
        >
          <Image src={logo} alt="logo" />
        </div>
        <div className="d-flex flex-lg-row">
          <div className="group-footer-icons">
            <a
              href="https://pt-br.facebook.com/Pokemon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconSVG width="35" height="35" icon="facebook2" fill="#f0f0f0" />
            </a>
            <a
              href="https://www.linkedin.com/company/pokemon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconSVG width="35" height="35" icon="linkedin" fill="#f0f0f0" />
            </a>
            <a
              href="https://www.instagram.com/pokemon/?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconSVG width="35" height="35" icon="instagram" fill="#f0f0f0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
