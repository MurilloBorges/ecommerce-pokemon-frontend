/* eslint-disable no-void */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// SERVICES
import PokemonService from 'src/services/PokemonService';
import Error from 'src/exceptions/Error';

// INTERFACES
import { PokemonProps, ResponsePokemonProps } from 'src/@types/PokemonTypes';

import Banner from '../molecules/Banner';
import HorizontalOfferPokemon from '../organisms/HorizontalOfferPokemon';
import bgFire from '../../assets/images/bg-poke-ball-fire.jpg';
import bgWater from '../../assets/images/bg-poke-ball-water.jpg';
import bgDragon from '../../assets/images/bg-poke-ball-dragon.jpg';
import banner from '../../assets/images/banner.jpg';

const dispatcher = (type: string, payload: boolean | PokemonProps[]) => ({
  type,
  payload,
});

const Home: React.FC = () => {
  const pokes = useSelector(
    (store: Record<string, unknown>) => store.pokemon as PokemonProps[],
  );
  const dispatch = useDispatch();

  async function getPokemon() {
    dispatch(dispatcher('LOADING', true));
    try {
      const pokemon = PokemonService.getInstance();
      const res = await pokemon.getAll();
      if (res.status === 200) {
        const data = res.data as ResponsePokemonProps;
        const pokemonFiltred = data.results.map((result, index) => ({
          ...result,
          id: index + 1,
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
    void getPokemon();
  }, []);

  return (
    <div className="home">
      <Banner src={banner} />
      <HorizontalOfferPokemon offerPokemon={pokes} div="shopping" />
    </div>
  );
};

export default Home;
