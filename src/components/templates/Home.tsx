/* eslint-disable no-void */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// SERVICES
import PokemonService from 'src/services/PokemonService';
import Error from 'src/exceptions/Error';

// INTERFACES
import { PokemonProps, ResponsePokemonProps } from 'src/@types/PokemonTypes';
import ShoppingCartProps from 'src/@types/ShoppingCart';

import { partners } from 'src/helpers/functions';

import Banner from '../molecules/Banner';
import HorizontalOfferPokemon from '../organisms/HorizontalOfferPokemon';

import volcanic from '../../assets/images/volcanic.jpg';
import seavell from '../../assets/images/seavell.jpg';
import wingeon from '../../assets/images/wingeon.jpg';
import bannerDefault from '../../assets/images/banner.jpg';

const dispatcher = (type: string, payload: boolean | PokemonProps[]) => ({
  type,
  payload,
});

const Home: React.FC = () => {
  const [banner, setBanner] = React.useState<string>('');

  useEffect(() => {
    const partner = partners();
    switch (partner) {
      case 'volcanic':
        setBanner(volcanic);
        break;
      case 'seavell':
        setBanner(seavell);
        break;
      case 'wingeon':
        setBanner(wingeon);
        break;
      default:
        setBanner(bannerDefault);
        break;
    }
  }, []);

  const shoppingCart = useSelector(
    (store: Record<string, unknown>) =>
      store.shoppingCart as ShoppingCartProps[],
  );
  const pokes = useSelector(
    (store: Record<string, unknown>) => store.pokemon as PokemonProps[],
  );
  const dispatch = useDispatch();

  async function getPokemon() {
    dispatch(dispatcher('LOADING', true));
    try {
      // 649 - 20 (limit) = 629 total de imagens disponíveis para get
      // Get aleatório
      const limit = Math.floor(Math.random() * 629) + 1;
      const pokemon = PokemonService.getInstance();
      const res = await pokemon.getAll(20, limit);
      if (res.status === 200) {
        const data = res.data as ResponsePokemonProps;
        const pokemonFiltred = data.results.map(result => ({
          ...result,
          id: parseInt(result.url.split('/')[6], 10),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${parseInt(
            result.url.split('/')[6],
            10,
          )}.svg`,
          retailPrice: Math.floor(Math.random() * 9999) + 1,
          retailPromotionPrice: Math.floor(Math.random() * 9999) + 1,
        })) as PokemonProps[];
        dispatch(dispatcher('POKEMON_LIST', [...pokemonFiltred]));
      }
    } catch (error) {
      Error.generic(error);
    } finally {
      dispatch(dispatcher('LOADING', false));
    }
  }

  useEffect(() => {
    // somente se o carrinho estiver vazio
    if (shoppingCart.length === 0) {
      void getPokemon();
    }
  }, []);

  return (
    <div className="home">
      <Banner src={banner} />
      <HorizontalOfferPokemon offerPokemon={pokes} div="shopping" />
    </div>
  );
};

export default Home;
