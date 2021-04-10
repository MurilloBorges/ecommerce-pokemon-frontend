import { PokemonProps } from 'src/@types/PokemonTypes';

const initialState = [];

type ACTIONTYPE = { type: 'POKEMON_LIST'; payload: PokemonProps[] };

function category(state = initialState, action: ACTIONTYPE): PokemonProps[] {
  switch (action.type) {
    case 'POKEMON_LIST':
      return [...action.payload];
    default:
      return state;
  }
}

export default category;
