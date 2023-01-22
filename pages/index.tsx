import { GetStaticProps } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { NextPageWithLayout } from "./_app";
import { IPokemonData, IHomePageProps, IFullPokemonData, isSplittedPokeUrlParts } from "../models";
import { Layout } from '../components/layouts';
import { pokeApiClient } from "../apiClient";
import { PokemonCardList } from '../components/pokemon';

const HomePage: NextPageWithLayout<IHomePageProps> = (props) => {
  return (
    <>
      <Grid.Container gap={2} justify="flex-start">
        <PokemonCardList pokemonArr={props.pokemonListData}/>
      </Grid.Container>
    </>
  )
};

HomePage.getLayout = function getLayout(page:JSX.Element){
  return(
    <Layout title="Listado de Pokemon">
      {page}
    </Layout>
  )
}


export default HomePage;


export const getStaticProps: GetStaticProps = async (ctx) => {
  const pokeListPath = "/pokemon?limit=151";
  const fetchResponse: IPokemonData = await pokeApiClient.makeGetReq(pokeListPath);
  const pokemonListData: IFullPokemonData[] = fetchResponse.results.map((item) => {
    // First, just fulfill the interface. Then fix the ["id"] and ["img"] properties
    const fullDataPokeRef: IFullPokemonData = {
      ...item,
      id: 0,
      img: ""
    };
    const splittedURL = item.url.split("/");
    if (isSplittedPokeUrlParts(splittedURL)) {
      const numberTypeID = Number(splittedURL[6]);
      fullDataPokeRef.id = numberTypeID;
      fullDataPokeRef.img = pokeApiClient.getPokeSpriteURL(numberTypeID);
    }
    return fullDataPokeRef;
  })
  
  const returnObj: IHomePageProps = {
    pokemonListData
  }

  return {
    props: returnObj
  }
}