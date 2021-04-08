import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

// INTERFACES
import ShoppingCartProps from 'src/@types/ShoppingCart';

import Image from '../atoms/Image';
import Input from '../atoms/Input';
import IconSVG from '../molecules/IconSVG';
import logo from '../../assets/images/logo.png';
import ModalCart from '../templates/ModalCart';

const Header: React.FC = () => {
  const history = useHistory();

  const shoppingCart = useSelector(
    (store: Record<string, unknown>) =>
      store.shoppingCart as ShoppingCartProps[],
  );

  const [search, setSearch] = useState('');
  const [modalCart, setModalCart] = useState<boolean>(false);

  return (
    <>
      <ModalCart setModalCart={setModalCart} modalCart={modalCart} />
      <div className="header">
        <div className="container-fluid container-header">
          <div className="row section-header">
            <div className="col-12 col-xl-11 d-flex flex-row header-form-auth align-items-center justify-content-around">
              <div
                tabIndex={0}
                role="button"
                onClick={() => history.push('/')}
                onKeyDown={() => {}}
                className="image-header"
              >
                <Image src={logo} alt="logo" />
              </div>
              <div className="d-flex group-form">
                <Input
                  placeholder="Oque você procura?"
                  name="search-input"
                  type="text"
                  value={search}
                  handleChange={e => setSearch(e?.target?.value)}
                />
                <button type="button" className="btn btn-success">
                  <IconSVG
                    className="mb-1"
                    width="23"
                    height="23"
                    icon="search"
                    fill="#f0f0f0"
                  />
                </button>
              </div>
            </div>
            <div className="col-12 col-xl-1 d-flex flex-row header-buttons-auth justify-content-center justify-content-xl-end">
              <div className="cart-section d-flex flex-column align-items-center ml-5 justify-content-center">
                <div
                  tabIndex={0}
                  role="button"
                  onKeyDown={() => {}}
                  onClick={() => setModalCart(!modalCart)}
                  className="group-cart-icon"
                >
                  <span className="badge cart-badge text-white">
                    {shoppingCart.length}
                  </span>
                  <IconSVG width="35" height="35" icon="cart" fill="#979799" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
