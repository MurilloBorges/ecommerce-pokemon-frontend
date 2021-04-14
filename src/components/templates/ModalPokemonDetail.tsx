import React, { useState } from 'react';

import { PokemonProps } from 'src/@types/PokemonTypes';

// COMPONENTS
import Modal from '../organisms/Modal';
import Title from '../atoms/Title';
import notFoundImage from '../../assets/images/image-not-found.svg';
import Subtitle from '../atoms/Subtitle';
import Image from '../atoms/Image';

interface ModalPokemonDetailProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  pokemon: PokemonProps;
}

const ModalPokemonDetail: React.FC<ModalPokemonDetailProps> = ({
  modal,
  setModal,
  pokemon,
}: ModalPokemonDetailProps) => (
  <Modal start showModal={setModal} show={modal}>
    <div className="pokemon-detail d-flex flex-column justify-content-center align-items-center text-center">
      <Image
        id={pokemon.id.toString()}
        src={pokemon.sprites?.other.dream_world.front_default || notFoundImage}
        alt={pokemon.name}
      />
      <Title
        props={{ className: 'col-sm-12' }}
        type="h5"
        text={pokemon.name.toUpperCase()}
      />

      <Subtitle props={{ id: 'pokemon-move' }} type="span" text="Movimentos" />
      {/* {pokemon.moves &&
          pokemon.moves.map((move, index) => (
            <p key={index.toString()} className="informative mb-4 col-sm-12">
              {move.move.name}
            </p>
          ))} */}
      <Subtitle
        props={{
          className: 'mt-4',
          id: 'note',
        }}
        type="p"
        text="Observação: O valor da sua compra pode sofrer alterações."
      />
    </div>
  </Modal>
);
export default ModalPokemonDetail;
