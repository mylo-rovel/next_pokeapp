import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../_app';
import { GetStaticProps, GetStaticPaths } from 'next'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from "canvas-confetti";

import { Layout } from '../../components/layouts';
import { togglePokemonFromFavs, checkIfIdExistInFavs, getPokeInfo } from '../../utils';
import { IIdProps } from '../../models';


const PokemonPage:NextPageWithLayout<IIdProps> = (props) => {
  const pokeID = props.id;
  const pokeName = props.name;
  // const router = useRouter();
  
  const [idExistInFavs, setIdInFavs] = useState<boolean>(false);

  useEffect(() => {
    const pokeExistInFavs = checkIfIdExistInFavs(pokeID);
    setIdInFavs(!pokeExistInFavs);
  }, [pokeID])
  
  const onClickAddToFavs = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    togglePokemonFromFavs(pokeID, pokeName);
    setIdInFavs(!idExistInFavs);
    
    if (idExistInFavs) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: { 
        x: 1,
        y: 0 
      }
    });
  }


  return <>
  <Layout title={pokeName}>
    <Grid.Container css={{marginTop: '5px'}} gap={2}>
      <Grid xs={12} sm={4}>
        <Card css={{padding: '30px'}}>
          <Card.Body>
            <Card.Image
              src={props.bigDreamWorldImgSrc}
              alt={props.name}
              width={'100%'}
              height={200}
            >
            </Card.Image>
          </Card.Body>
        </Card>
      </Grid>
      
      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
            <Text h1>{props.name}</Text>
            <Button
            color={(idExistInFavs) ? 'error' : 'gradient'}
            ghost
            onClick={onClickAddToFavs}
            >
              {(idExistInFavs) ? 'Borrar de favoritos' : 'Guardar en favoritos'}
            </Button>
          </Card.Header>

          <Card.Body>
            <Text size={30}>Sprites:</Text>
            <Container direction='row' display='flex'>
              <Image
                src= {props.frontDefaultImgSrc}
                alt={props.name}
                width={100}
                height={100}
              />
              <Image
                src= {props.backDefaultImgSrc}
                alt={props.name}
                width={100}
                height={100}
              />
              <Image
                src= {props.frontShinyImgSrc}
                alt={props.name}
                width={100}
                height={100}
              />
              <Image
                src= {props.backShinyImgSrc}
                alt={props.name}
                width={100}
                height={100}
              />              
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  </Layout>
  </>
}


// PokemonPage.getLayout = function getLayout(page:JSX.Element){
//   return(
//     <Layout title={pagePokeTitle}>
//       {page}
//     </Layout>
//   )
// }

export default PokemonPage;


export const getStaticProps: GetStaticProps = async (ctx) => {
  return getPokeInfo(ctx, "id");
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const totalPagesToPreGen = new Array(151).fill(null).map((_, index:number) => {
    return { params: { id:`${index+1}` } }
  })
  return {
    paths: totalPagesToPreGen,
    fallback: false
  }
}
