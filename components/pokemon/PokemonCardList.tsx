import { FC } from 'react'
import { GridedPokemonCard } from "./index";
import { IFullPokemonData } from '../../models'

interface IProps {
    pokemonArr: IFullPokemonData[]
}

export const PokemonCardList: FC<IProps> = ({pokemonArr}): JSX.Element => {
    const pokemonCardList = pokemonArr.map((pokemonDataObj, index:number) => {
        return <GridedPokemonCard 
                pokemonDataObj={pokemonDataObj} 
                index={index}
                key={`pokeCardKey_${index}`}
            />
    })
    return <>{pokemonCardList}</>
}
