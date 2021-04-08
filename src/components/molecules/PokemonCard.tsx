/* eslint-disable no-void */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// SERVICES
import PokemonService from 'src/services/PokemonService';

// INTERFACES
import { PokemonProps } from 'src/@types/PokemonTypes';
import ShoppingCartProps from '../../@types/ShoppingCart';

import { PokemonCardProps } from '../../@types';

import { formatReal } from '../../helpers/number';

import Image from '../atoms/Image';
import Button from '../atoms/Button';
import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';
import IconSVG from './IconSVG';
import QuantitativeGroupButton from './QuantitativeGroupButton';

import notFoundImage from '../../assets/images/image-not-found.svg';

import { handleShoppingCart } from '../../helpers/shoppingCart';

const dispatcher = (type: string, payload: ShoppingCartProps[]) => ({
  type,
  payload,
});

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
}: PokemonCardProps) => {
  const { id, name, url } = pokemon;
  // retailPrice,

  const dispatch = useDispatch();
  const [openAdition, setopenAdition] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);
  const [image, setImage] = useState<string | null>(null);

  const shoppingCart = useSelector(
    (store: Record<string, unknown>) =>
      store.shoppingCart as ShoppingCartProps[],
  );

  async function getPokemonImage() {
    const instance = PokemonService.getInstance();
    const res = await instance.getById(id);
    if (res.status === 200) {
      const data = res.data as PokemonProps;
      setImage(data.sprites?.other.dream_world.front_default as string);
    }
  }

  useEffect(() => {
    void getPokemonImage();
  }, []);

  const handleOpenAdition = () => {
    setopenAdition(!openAdition);
    setQuantity(1);
  };

  const handleQuantity = (operation: string, _quantity: number) => {
    if (operation === 'sum') {
      setQuantity(_quantity + 1);
    }
    if (operation === 'subtract' && quantity > 0) {
      setQuantity(_quantity - 1);
    }
  };

  const verifyShoppingCart = async () => {
    const promise = new Promise(() => {
      const pokemonlist = handleShoppingCart(
        shoppingCart,
        { ...pokemon, image: image as string },
        quantity,
      );
      dispatch(dispatcher('SHOPPING_CART', [...pokemonlist]));
    });

    await promise;
  };

  React.useEffect(() => {
    if (quantity >= 0 && openAdition)
      verifyShoppingCart().then(
        () => {},
        () => {},
      );
  }, [quantity]);

  React.useEffect(() => {
    const filteredProd = shoppingCart.find(prod => prod.id === id);
    if (filteredProd) {
      setQuantity(filteredProd.quantity);
      setopenAdition(true);
    } else {
      setQuantity(0);
      setopenAdition(false);
    }
  }, [shoppingCart]);

  return (
    <div key={id} className="pokemon-card">
      <div className="pokemon">
        {/* {promotion && (
          <div className="offer-label background-danger">
            <Title type="h4" text="OFERTA" />
          </div>
        )}
        {offer && (
          <div className="offer-label background-success">
            <IconSVG
              className="mr-2"
              icon="exclusive-offer"
              width="25"
              height="25"
            />
            <Title type="h4" text="OFERTA EXCLUSIVA" />
          </div>
        )} */}
        <Image src={image || notFoundImage} alt="" />
        <div className="group-text">
          <Subtitle props={{ id: 'pokemon-name' }} type="span" text={name} />
          {/* <Subtitle
            props={
              retailPrice !== retailPromotionPrice ? { id: 'price-of-for' } : {}
            }
            type="span"
            text={
              retailPrice !== retailPromotionPrice
                ? `de ${formatReal(retailPromotionPrice)} por`
                : ' '
            }
          /> */}
          {/* <Subtitle
            props={{ id: 'no-discounted-price' }}
            type="span"
            text={`${formatReal(retailPrice)}`}
          /> */}
          {/* <Subtitle
            props={{ id: 'save-price' }}
            type="span"
            text={
              retailPrice !== retailPromotionPrice
                ? `* Economize: ${formatReal(retailPromotionPrice)}`
                : ' '
            }
          /> */}
        </div>
        {!openAdition && (
          <div className="group-button">
            <Button
              type="button"
              text="Adicionar"
              handleClick={() => handleOpenAdition()}
            />
          </div>
        )}
        {openAdition && (
          <QuantitativeGroupButton
            handleQuantity={handleQuantity}
            quantity={quantity}
            labelValue="und."
          />
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
