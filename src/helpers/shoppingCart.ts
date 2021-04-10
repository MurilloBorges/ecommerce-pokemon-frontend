import { PokemonProps } from 'src/@types/PokemonTypes';
import ShoppingCartProps from '../@types/ShoppingCart';

const handleShoppingCart = (
  pokemonList: ShoppingCartProps[],
  pokemon: PokemonProps,
  quantity: number,
): ShoppingCartProps[] => {
  const newPokemonList = pokemonList;
  const { id, name, url, image, retailPrice, retailPromotionPrice } = pokemon;

  const filteredPokemon = newPokemonList.filter(prod => prod.id === id);
  if (!filteredPokemon.length) {
    newPokemonList.push({
      id,
      name,
      url,
      image: image as string,
      quantity: 1,
      retailPrice: retailPrice as number,
      retailPromotionPrice: retailPromotionPrice as number,
    });
  } else {
    const iPokemon = newPokemonList.findIndex(prod => prod.id === id);
    if (quantity === 0) newPokemonList.splice(iPokemon, 1);
    else newPokemonList[iPokemon].quantity = quantity;
  }

  return newPokemonList;
};

const func = () => {};

export { handleShoppingCart, func };
