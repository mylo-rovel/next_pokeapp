import { IFavsCollection, isFavCollection, favPokeArrType } from "../models";

const getStoredFavsCollection = (localStorageKey: string): IFavsCollection | undefined => {
    // first check if window object exist
    if (typeof window === "undefined") return undefined;

    let rawFavsCollection = window.localStorage.getItem(localStorageKey);
    
    // check if the favourites collection exist
    // if it doesn't, create it in the local storage
    if (rawFavsCollection) {
        const jsonObj = JSON.parse(rawFavsCollection);
        // if the stored object is valid, return that stored info
        if (isFavCollection(jsonObj)) {
            return jsonObj;
        }
        // otherwise just ignore it because is another thing
    }
    // creating the new favsCollection in the localStorage
    window.localStorage.setItem(localStorageKey, "{}");
    return {};
}


//? IS THIS BETTER THAN JUST HAVING AN ARRAY OF POKEMON IDs
//? AND CHECKING ID THE ID EXIST IN THAT ARRAY?
export const togglePokemonFromFavs = (id:number, name:string) => {
    const localStorageKey = "favourites"
    const favsCollection = getStoredFavsCollection(localStorageKey);
    if (!favsCollection) return false;

    // now, check if the id exist in favsCollection
    // if it does, delete that entry, otherwise add it
    const pokeEntry: string | undefined = favsCollection[id];
    
    // now we can easily return the info if the pokemon is in favs
    let pokeExistInFavs: boolean = false;

    if (pokeEntry){
        delete favsCollection[id];
    }
    else {
        favsCollection[id] = name;
        pokeExistInFavs = true;
    }

    // finally, turn favsCollection into a JSON and save it
    const jsonedFavs = JSON.stringify(favsCollection)
    window.localStorage.setItem(localStorageKey, jsonedFavs);
    console.log(jsonedFavs);
    return pokeExistInFavs;
}

export const checkIfIdExistInFavs = (pokeId: number) => {
    const localStorageKey = "favourites"
    const favsCollection = getStoredFavsCollection(localStorageKey);
    if (!favsCollection) return false;
    const storedPokeName: string | undefined = favsCollection[pokeId]
    if (storedPokeName) return true;
    return false;
}


export const getFavouritePokemonArr = (): favPokeArrType => {
    const localStorageKey = "favourites"
    const favsCollection = getStoredFavsCollection(localStorageKey);
    if (!favsCollection) return [];
    return Object.entries(favsCollection).map((item) => {
        return [Number(item[0]), `${item[1]}`]
    })
}