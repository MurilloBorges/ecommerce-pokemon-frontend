import React from 'react';

import { HorizontalOfferProps } from '../../@types';

import IconSVG from '../molecules/IconSVG';
import PokemonCard from '../molecules/PokemonCard';

const HorizontalOfferPokemon: React.FC<HorizontalOfferProps> = ({
  offerPokemon,
  div,
}: HorizontalOfferProps) => {
  console.log('teste', offerPokemon);
  const leftScroll = () => {
    const container = document.getElementById(div);
    container?.scrollBy({
      top: 0,
      left: -300,
      behavior: 'smooth',
    });
  };

  const rightScroll = () => {
    const container = document.getElementById(div);
    container?.scrollBy({
      top: 0,
      left: +300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="horizontal-offer-prod">
      <div id={div} className="horizontal-offer">
        {offerPokemon.map((pokemon, key) => (
          <PokemonCard key={key.toString()} pokemon={pokemon} />
        ))}
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => leftScroll()}
        onKeyDown={() => {}}
        className="category-menu-control-prev"
      >
        <div>
          <IconSVG
            icon="chevron-left"
            width="20px"
            height="20px"
            fill="#ffff"
          />
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => rightScroll()}
        onKeyDown={() => {}}
        className="category-menu-control-next"
      >
        <div>
          <IconSVG
            icon="chevron-right"
            width="20px"
            height="20px"
            fill="#ffff"
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalOfferPokemon;
