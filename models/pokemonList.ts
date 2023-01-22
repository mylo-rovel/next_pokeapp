// This is used in getStaticProps of /pages/index.tsx
export interface IPokemonData {
    count: number;
    next: string;
    previous?: string;
    results: IPokemonReference[];
  }
  
export interface IPokemonReference {
    name: string;
    url: string;
}

export type splittedPokeUrlParts = [
  protocol: string,
  blankSpace1: string,
  domain: string,
  apiWord: string,
  version: string,
  pokemonWord: string,
  pokemonID: string,
  blankSpace2: string
]

export interface IFullPokemonData {
  name: string;
  url: string;
  id: number;
  img: string;
}

// TYPEGUARDS ---------------------------------------------------

export function isSplittedPokeUrlParts(stringArr: string[]): stringArr is splittedPokeUrlParts {
  // evaluate if the input is EXACTLY EQUAL TO our model arr EXCEPT FOR THE ELEMENT OF INDEX 6
  // because we know that the url will always have almost the same elements
  const whatShouldLookLikeArr = [ 'https:', '', 'pokeapi.co', 'api', 'v2', 'pokemon', '0', '' ]
  for (let i = 0; i < stringArr.length; i++) {
    const inputElement = stringArr[i];
    const modelRefElement = whatShouldLookLikeArr[i];
    if (i !== 6) {
      if (inputElement !== modelRefElement) return false;
    }
  }
  return true;
}