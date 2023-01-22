class pokeApiClient {
    public static basePokeUrl: string = "https://pokeapi.co/api/v2";

    public static async makeGetReq <GenericType> (urlPath: string): Promise <GenericType> {
        const urlToFetch = pokeApiClient.basePokeUrl + urlPath
        return await fetch(urlToFetch)
            .then(data => data.json())
            .catch(err => err);
    }

    public static getPokeSpriteURL (pokeID: number) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeID}.svg`
    }
}

export {
    pokeApiClient
};