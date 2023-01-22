import { ParsedUrlQuery } from 'querystring';
import { GetStaticPropsContext, PreviewData } from 'next';

import { pokeApiClient } from '../apiClient';
import { IIdProps, ISpecificPokemon } from '../models';

type ctxType = GetStaticPropsContext<ParsedUrlQuery, PreviewData>
type propOptions = "id" | "name";

export const getPokeInfo = async (ctx: ctxType, propToUse:propOptions) => {
  // Just initialize so we always return an object with correct types
  // We want the object we are returning to match the props type the PageComponent have
  // That's why we have this base object that fulfills the type
  // Then, we can "fix" its values
  const returnObj: IIdProps = {
    bigDreamWorldImgSrc: "",
    frontDefaultImgSrc: "",
    backDefaultImgSrc: "",
    frontShinyImgSrc: "",
    backShinyImgSrc: "",
    name: "",
    id: 0
  }

  const pokemonData = ctx.params;

  if (pokemonData) {
    const pokePath = `/pokemon/${pokemonData[propToUse]}`;
    const fetchResponse: ISpecificPokemon = await pokeApiClient.makeGetReq(pokePath);
    returnObj.bigDreamWorldImgSrc = fetchResponse.sprites.other.dream_world.front_default;
    returnObj.frontDefaultImgSrc = fetchResponse.sprites.front_default;
    returnObj.backDefaultImgSrc = fetchResponse.sprites.back_default;
    returnObj.frontShinyImgSrc = fetchResponse.sprites.front_shiny;
    returnObj.backShinyImgSrc = fetchResponse.sprites.back_shiny;
    returnObj.name = fetchResponse.name;
    returnObj.id = fetchResponse.id;
  }

  return {
    props: returnObj
  }
}