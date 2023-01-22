import { FC } from "react";
// import Link from 'next/link';
import { CSS, Card, Grid } from "@nextui-org/react";
import { useRouter } from 'next/router';

import styles from "./FavPokeCard.module.css";
import { IFavPokeCardProps } from '../../../models';

const pokeCardStyleObj: CSS | undefined = {
    padding: 10
  }
  

export const FavPokeCard:FC<IFavPokeCardProps> = ({pokeId}) => {
    const router = useRouter();
    const pokemonURL = "/pokemon/" + pokeId;

    const onClickGoToPoke = (id: number) => {
        router.push(pokemonURL);
    }

    return (
            <Grid xs={6} sm={3} md={2} xl={1} key={`favKey_${pokeId}`}>
                <Card css={pokeCardStyleObj}>
                    {/* <Link href={pokemonURL}> */}
                        <Card.Image
                            className={styles['fav-poke-card']}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
                            width={"100%"}
                            height={140}
                            onClick={() => onClickGoToPoke(pokeId)}
                        />
                    {/* </Link> */}
                </Card>
            </Grid>
        )
}
