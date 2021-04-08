import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ShoppingCartProps } from 'src/@types/ShoppingCart';

import { ModalCartProps } from '../../@types';

import Button from '../atoms/Button';
import Title from '../atoms/Title';
import IconSVG from '../molecules/IconSVG';

import Modal from '../organisms/Modal';

import CartProductList from '../organisms/CartProductList';

import { formatReal } from '../../helpers/number';

const ModalCart: React.FC<ModalCartProps> = ({
  modalCart,
  setModalCart,
}: ModalCartProps) => {
  const history = useHistory();
  const [totalCart, setTotalCart] = React.useState(0);
  const shoppingCart = useSelector(
    (store: Record<string, unknown>) =>
      store.shoppingCart as ShoppingCartProps[],
  );

  // React.useEffect(() => {
  //   const sum = shoppingCart
  //     .reduce((a, b) => a + (Number(b.retailPrice) * b.quantity || 0), 0)
  //     .toFixed(2);
  //   setTotalCart(Number(sum));
  // }, [shoppingCart]);

  return (
    <Modal
      start
      containerCustomClass="container-cart-modal"
      customClass="cart-modal"
      showCloseButton={false}
      showModal={setModalCart}
      show={modalCart}
    >
      <div className="modal-cart">
        <div className="header-modal-cart">
          <IconSVG icon="cart" width="35" height="35" fill="#000000" />
          <Title type="h3" text="Carrinho" />
        </div>
        {!shoppingCart.length && (
          <h6 className="text-center">
            Nenhum produto adicionado no carrinho :(
          </h6>
        )}
        {shoppingCart.map((pokemon, key) => (
          <CartProductList
            type="shoppingCart"
            key={key.toString()}
            pokemon={pokemon}
          />
        ))}
        <div className="price-footer">
          <div className="first-section">
            <Title type="h4" text="Total de Compras" />
          </div>
          <div className="second-section">
            <Title type="h4" text={formatReal(totalCart)} />
          </div>
        </div>
        <div className="section-buttons">
          <Button
            text="Finalizar Compra"
            handleClick={() => history.push('/checkout')}
            customClass="btn btn-lg"
          />
          <Button
            text="Continuar comprando"
            handleClick={() => setModalCart(!modalCart)}
            customClass="btn btn-light btn-lg"
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalCart;
