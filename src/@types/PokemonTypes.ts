interface PokemonProps {
  id: number;
  name: string;
  url: string;
}

interface ResponsePokemonProps {
  count: number;
  next: string;
  previous: string;
  results: PokemonProps[];
}

interface IPokemonInterface {
  data: ResponsePokemonProps;
}

export type { IPokemonInterface, PokemonProps, ResponsePokemonProps };
