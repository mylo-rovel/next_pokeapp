import { useState, useEffect } from 'react';

import { NextPageWithLayout } from "../_app";
import { favPokeArrType } from "../../models";
import { Layout } from "../../components/layouts";
import { getFavouritePokemonArr } from '../../utils';
import { NoFavourites, YesFavourites } from "../../components/ui";
import { IFavouritesPageProps } from '../../models/pages/favourites/FavouritesPage';


const FavouritesPage: NextPageWithLayout<IFavouritesPageProps> = (props) => {

  const [favPokeArr, setFavPokeArr] = useState<favPokeArrType>([])

  useEffect(() => {
    setFavPokeArr(getFavouritePokemonArr())
  }, []);

  return <>
    {
      favPokeArr.length === 0
        ? (<NoFavourites/>)
        : (<YesFavourites favPokeArr={favPokeArr}/>)
    }
  </>
}

FavouritesPage.getLayout = function getLayout(page:JSX.Element){
    return(
      <Layout title="Pokémon favoritos">
        {page}
      </Layout>
    )
  }

export default FavouritesPage;