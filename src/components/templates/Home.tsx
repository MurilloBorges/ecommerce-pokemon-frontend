/* eslint-disable no-void */
import React, { useEffect, useState } from 'react';

// SERVICES
import PokemonService from 'src/services/PokemonService';

// INTERFACES
import { PokemonProps, ResponsePokemonProps } from 'src/@types/PokemonTypes';

import Banner from '../molecules/Banner';
import HorizontalOfferPokemon from '../organisms/HorizontalOfferPokemon';
import bgFire from '../../assets/images/bg-poke-ball-fire.jpg';
import bgWater from '../../assets/images/bg-poke-ball-water.jpg';
import bgDragon from '../../assets/images/bg-poke-ball-dragon.jpg';
import banner from '../../assets/images/banner.jpg';

const Home: React.FC = () => {
  const [pokes, setPokes] = useState<PokemonProps[]>([]);

  async function getPokemon() {
    const pokemon = PokemonService.getInstance();
    const res = await pokemon.getAll();
    if (res.status === 200) {
      const data = res.data as ResponsePokemonProps;
      const pokemonFiltred = data.results.map((result, index) => ({
        ...result,
        id: index + 1,
      })) as PokemonProps[];
      setPokes(pokemonFiltred);
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
