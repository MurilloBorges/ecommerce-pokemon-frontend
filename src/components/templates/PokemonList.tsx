import React from 'react';

import { useSelector } from 'react-redux';

import PokemonCard from '../molecules/PokemonCard';

import { PokemonProps } from '../../@types/PokemonTypes';

const PokemonList: React.FC = () => {
  const category = useSelector(
    (store: Record<string, unknown>) =>
      store.category as Record<string, unknown>,
  );

  const products = useSelector(
    (store: Record<string, unknown>) =>
      store.product as Record<string, unknown>,
  );

  const { currentCategory } = category;

  const currentProducts = products.productList as PokemonProps[];

  const [imagesCarousel] = React.useState([
    'https://www.mercadomunicipaldecuritiba.com.br/wp-content/uploads/2019/04/banner-site-dia-trabalho-mercado-hor%C3%A1rio-funcionamento-v2.png',
    'https://www.mercadomunicipaldecuritiba.com.br/wp-content/uploads/2019/09/mmc-banner-site-setembro-amarelo.png',
    'https://subindodegraus.com/wp-content/uploads/2020/11/7_banners_14500.jpg',
  ]);

  return (
    <div className="product-list">
      <div className="container-product-list">
        <h5>
          <span className="badge badge-secondary">CONFERIR OFERTAS</span>
        </h5>

        <div className="row product-list-section mt-5 mb-5">
          {!currentProducts.length && (
            <h5 className="ml-3">Nenhum Pokémon foi encontrado :(</h5>
          )}
          {currentProducts.map((pokemon, key) => (
            <div key={key.toString()} className="col-2 pr-0 pl-0">
              <PokemonCard key={key.toString()} pokemon={pokemon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
