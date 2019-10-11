export interface PokemonList {
  url: string;
  name: string;
}

export interface Pokemon {
  name: string;
  order: number;
  sprites: {
    back_shiny: string;
    front_shiny: string;
    back_female: string;
    back_default: string;
    front_female: string;
    front_default: string;
    back_shiny_female: string;
    front_shiny_female: string;
  }
  stats: {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string;
    }
  }[]
}
