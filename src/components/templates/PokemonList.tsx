import React from 'react';

import { useSelector } from 'react-redux';

import PokemonCard from '../molecules/PokemonCard';

import { PokemonProps } from '../../@types/PokemonTypes';

const PokemonList: React.FC = () => {
  const pokemon = useSelector(
    (store: Record<string, unknown>) =>
      store.pokemon as Record<string, unknown>,
  );

  const currentPokemonList = pokemon.pokemonList as PokemonProps[];

  return (
    <div className="pokemon-list">
      <div className="container-pokemon-list">
        <h5>
          <span className="badge badge-secondary">CONFERIR OFERTAS</span>
        </h5>

        <div className="row pokemon-list-section mt-5 mb-5">
          {!currentPokemonList.length && (
            <h5 className="ml-3">Nenhum Pokémon foi encontrado :(</h5>
          )}
          {currentPokemonList.map((data, key) => (
            <div key={key.toString()} className="col-2 pr-0 pl-0">
              <PokemonCard key={key.toString()} pokemon={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
