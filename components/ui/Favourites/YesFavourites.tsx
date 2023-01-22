import { FC } from "react";
import { Grid } from "@nextui-org/react";

import { IYesFavouritesProps } from "../../../models";
import { FavPokeCard } from '../index';

export const YesFavourites:FC<IYesFavouritesProps> = ({favPokeArr}) => {
    const PokeCardsArr = favPokeArr.map((item) => {
        return <FavPokeCard pokeId={item[0]} key={item[0]}/>
    })
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {PokeCardsArr}
        </Grid.Container>
    )
}
