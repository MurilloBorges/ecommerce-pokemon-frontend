interface DreamWorldProps {
  front_default: string;
  front_female?: string;
}

interface OtherProps {
  dream_world: DreamWorldProps;
  official_artwork: DreamWorldProps;
}
interface SpritesProps {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: OtherProps;
}
interface PokemonProps {
  id: number;
  name: string;
  url: string;
  sprites?: SpritesProps;
  image?: string;
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
