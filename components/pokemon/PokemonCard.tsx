import { FC } from "react";
import { IFullPokemonData } from "../../models";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import Link from 'next/link';

interface IProps {
    pokemonDataObj: IFullPokemonData,
    index?: number
}

const PokemonCard: FC<IProps> = ({pokemonDataObj}) => {
  const folder = "name";
  const propToGo = "name";
  const pokemonURL = `/${folder}/` + pokemonDataObj[propToGo];
  return <>
        <Card>
          <Card.Body css={{p:1}}>
            <Link href={pokemonURL}>
            <Card.Image
              src={pokemonDataObj.img}
              alt={pokemonDataObj.name}
              width={"100%"}
              height={140}
            />
            </Link>
          </Card.Body>
          <Card.Footer>
            <Row justify='space-between'>
              <Text transform='capitalize'>{pokemonDataObj.name}</Text>
              <Text>{pokemonDataObj.id}</Text>
            </Row>
          </Card.Footer>
        </Card>
  </>
}


export const GridedPokemonCard: FC<IProps> = ({pokemonDataObj, index}) => {
  return <>
      {/* xs: in a Xtra Small screen, each card takes 6 positions, so we can have 2 in a row */}
      {/* sm: in a SMall screen, each card takes 3 positions, so we can have 4 in a row*/}
      {/* xl: in a Xtra Large screen, each card takes 1 positions, so we can have to 12/row */}
      <Grid xs={6} sm={3} md={2} xl={1} key={`pokeKey_${index}`}>
        <PokemonCard pokemonDataObj={pokemonDataObj}/>
      </Grid>
  </>
}

