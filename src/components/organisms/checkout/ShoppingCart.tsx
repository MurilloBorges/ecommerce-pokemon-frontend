import React from 'react';
import { useSelector } from 'react-redux';

import ShoppingCartProps from 'src/@types/ShoppingCart';
import Title from 'src/components/atoms/Title';
import IconSVG from 'src/components/molecules/IconSVG';
import ModalPayment from 'src/components/templates/ModalPayment';

import { formatReal } from 'src/helpers/number';

import CartProductList from '../CartPokemonList';

const ShoppingCart: React.FC = () => {
  const [totalCart, setTotalCart] = React.useState(0);
  const [modal, setModal] = React.useState<boolean>(false);
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
    <>
      <ModalPayment setModal={setModal} modal={modal} handleSubmit={() => {}} />
      <div className="modal-cart">
        {!shoppingCart.length && (
          <h6 className="text-center">
            Nenhum produto adicionado no carrinho!
          </h6>
        )}
        {shoppingCart.map((pokemon, key) => (
          <CartProductList
            type="checkout"
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
      </div>
    </>
  );
};

export default ShoppingCart;
