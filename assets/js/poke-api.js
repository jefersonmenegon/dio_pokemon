const pokeApi = {}

function convertPokeApiDetailToObjetoPokemon(pPokeDetail) {
    const vPokemon = new PokemonObjeto()
    vPokemon.numero = pPokeDetail.id
    vPokemon.name = pPokeDetail.name
    const vTypes = pPokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [vType1] = vTypes
    vPokemon.types = vTypes
    vPokemon.type = vType1
    vPokemon.photo = pPokeDetail.sprites.other.dream_world.front_default
    return vPokemon
}


pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
        .then((pokemon) => {
            return convertPokeApiDetailToObjetoPokemon(pokemon)
        })
}

pokeApi.getPokemons = function (pOffSet = 0, pLimit = 5) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${pOffSet}&limit=${pLimit}`
    return fetch(url).then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
        .catch((error) => console.error(error)
        )
}

