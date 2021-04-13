import React from 'react';
import { useSelector } from 'react-redux';

import ShoppingCartProps from 'src/@types/ShoppingCart';
import Title from 'src/components/atoms/Title';

import { formatReal } from 'src/helpers/number';

import CartPokemonList from '../CartPokemonList';

const ShoppingCart: React.FC = () => {
  const [totalCart, setTotalCart] = React.useState(0);
  const [accQuantity, setAccQuantity] = React.useState<number>(0);
  const shoppingCart = useSelector(
    (store: Record<string, unknown>) =>
      store.shoppingCart as ShoppingCartProps[],
  );

  React.useEffect(() => {
    const sumQuantity = shoppingCart.reduce((acc, b) => acc + b.quantity, 0);
    setAccQuantity(sumQuantity);

    const sum = shoppingCart
      .reduce(
        (a, b) =>
          a +
          (Number(
            (b?.retailPromotionPrice || 0) < (b?.retailPrice || 0)
              ? b.retailPromotionPrice
              : b.retailPrice,
          ) * b.quantity || 0),
        0,
      )
      .toFixed(2);
    setTotalCart(Number(sum));
  }, [shoppingCart]);

  return (
    <div className="modal-cart">
      {!shoppingCart.length && (
        <h6 className="text-center">Nenhum Pokémon adicionado no carrinho!</h6>
      )}
      {shoppingCart.map((pokemon, key) => (
        <CartPokemonList
          type="checkout"
          key={key.toString()}
          pokemon={pokemon}
        />
      ))}
      <div className="price-footer price-footer-quantity">
        <div className="first-section">
          <Title type="h4" text="Total de Itens" />
        </div>
        <div className="second-section">
          <Title type="h4" text={accQuantity.toString()} />
        </div>
      </div>
      <div className="price-footer">
        <div className="first-section">
          <Title type="h4" text="Total de Compras" />
        </div>
        <div className="second-section">
          <Title type="h4" text={formatReal(totalCart)} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
