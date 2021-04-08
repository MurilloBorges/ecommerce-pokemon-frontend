import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCartProps } from 'src/@types/ShoppingCart';

import { handleShoppingCart } from 'src/helpers/shoppingCart';

import { formatReal } from '../../helpers/number';

// INTERFACES
import { PokemonCardProps } from '../../@types';

import Title from '../atoms/Title';
import Image from '../atoms/Image';
import Subtitle from '../atoms/Subtitle';

import IconSVG from '../molecules/IconSVG';

import QuantitativeGroupButton from '../molecules/QuantitativeGroupButton';

import ImageNotFound from '../../assets/images/image-not-found.svg';

const dispatcher = (type: string, payload: ShoppingCartProps[]) => ({
  type,
  payload,
});

const CartProductList: React.FC<PokemonCardProps> = ({
  type,
  pokemon,
}: PokemonCardProps) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(0);
  const [isEdited, setIsEdited] = React.useState(false);
  const [showRemove, setShowRemove] = React.useState(false);

  const shoppingCart = useSelector(
    (store: Record<string, unknown>) =>
      store.shoppingCart as ShoppingCartProps[],
  );

  const handleQuantity = (operation: string, _quantity: number) => {
    setIsEdited(true);
    if (operation === 'sum') {
      setQuantity(_quantity + 1);
    }
    if (operation === 'subtract' && quantity > 0) {
      setQuantity(_quantity - 1);
    }
  };

  const verifyShoppingCart = async () => {
    if (!isEdited) return;
    const promise = new Promise(() => {
      const products = handleShoppingCart(shoppingCart, pokemon, quantity);
      dispatch(dispatcher('SHOPPING_CART', [...products]));
    });

    await promise;
  };

  const handleRemoveProduct = async () => {
    const promise = new Promise(() => {
      const products = handleShoppingCart(shoppingCart, pokemon, 0);
      dispatch(dispatcher('SHOPPING_CART', [...products]));
    });

    await promise;

    setShowRemove(!showRemove);
  };

  React.useEffect(() => {
    if (quantity >= 0)
      verifyShoppingCart().then(
        () => {
          setIsEdited(false);
        },
        () => {},
      );
  }, [quantity]);

  React.useEffect(() => {
    const filteredProd = shoppingCart.find(prod => prod.id === pokemon.id);
    if (filteredProd) {
      setQuantity(filteredProd.quantity || quantity);
    }
  }, [shoppingCart]);

  const handleExcludeButtons = () => (
    <div className="section-exclude text-right">
      {!showRemove && (
        <div
          className="mb-1"
          tabIndex={0}
          role="button"
          onClick={() => setShowRemove(!showRemove)}
          onKeyDown={() => {}}
        >
          <Subtitle type="span" text="Remover" />
          <IconSVG icon="trash" width="16" height="16" fill="#000000" />
        </div>
      )}
      {showRemove && (
        <>
          <Subtitle type="span" text="Deseja Remover?" />
          <div
            tabIndex={0}
            role="button"
            onClick={() => handleRemoveProduct()}
            onKeyDown={() => {}}
          >
            <IconSVG
              className="icon-check"
              icon="checkmark"
              width="18"
              height="18"
              fill="#4fa10d"
            />
          </div>
          <div
            tabIndex={0}
            role="button"
            onClick={() => setShowRemove(!showRemove)}
            onKeyDown={() => {}}
          >
            <IconSVG
              className="icon-cross"
              icon="cross"
              width="24"
              height="24"
              fill="#f32013"
            />
          </div>
        </>
      )}
    </div>
  );

  const handleConfigureLayout = () => {
    switch (type) {
      case 'shoppingCart':
        return (
          <>
            <div className="container-modal-cart">
              <div>
                {/* <Image src={pokemon?.image?.url || ImageNotFound} /> */}
              </div>
              <div className="section-product-name">
                <Subtitle type="span" text={pokemon?.name} />
              </div>
              <div>
                {/* <Title type="h4" text={formatReal(pokemon?.retailPrice)} /> */}
              </div>
              <div>
                <div className="quantitative-group">
                  <QuantitativeGroupButton
                    handleQuantity={handleQuantity}
                    quantity={quantity}
                    labelValue="un."
                  />
                </div>
              </div>
            </div>
            {handleExcludeButtons()}
          </>
        );

      case 'checkout': {
        const filteredProd = shoppingCart.find(prod => prod.id === pokemon.id);
        // const numberedPrice = Number(pokemon?.retailPrice);

        return (
          <>
            {/* TODO: fazer o header da listagem com produtos, quantidades, valor un e total */}

            {/* <div className="">
              <h5>Produto</h5>
              <h5> </h5>
              <h5>Quantidade</h5>
              <h5>Valor Un.</h5>
              <h5>Total</h5>
            </div> */}
            <div className="container-modal-cart">
              <div>
                {/* <Image src={pokemon?.image?.url || ImageNotFound} /> */}
              </div>
              <div className="section-product-name">
                <Subtitle type="span" text={pokemon?.name} />
              </div>
              <div>
                <div className="quantitative-group mb-2">
                  <QuantitativeGroupButton
                    handleQuantity={handleQuantity}
                    quantity={quantity}
                    labelValue="un."
                  />
                </div>
                {handleExcludeButtons()}
              </div>
              <div>
                {/* <Title type="h4" text={formatReal(pokemon?.retailPrice)} /> */}
              </div>
              <div>
                {/* <Title
                  type="h4"
                  text={formatReal(
                    numberedPrice * (filteredProd?.quantity || 1),
                  )}
                /> */}
              </div>
            </div>
          </>
        );
      }

      default:
        return '';
    }
  };

  return <div className="container-cart">{handleConfigureLayout()}</div>;
};

export default CartProductList;
