import { PokemonProps } from 'src/@types/PokemonTypes';

const initialState = {
  pokemonlist: [],
};

type ACTIONTYPE = { type: 'POKEMON_LIST'; payload: PokemonProps[] };

function category(
  state = initialState,
  action: ACTIONTYPE,
): Record<string, unknown> {
  switch (action.type) {
    case 'POKEMON_LIST':
      return { pokemonlist: action.payload };
    default:
      return state;
  }
}

export default category;
