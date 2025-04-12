const pokemonOl = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const vMaxRecords = 151
const vLimit = 10
let vOffset = 0

function convertPokemonTypesToLi(pPokemonTypes) {
    return pPokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.types}</li>`)
}

function ConvertPokemonToLI(pPokemon) {
    return `
            <li class="pokemon ${pPokemon.type}">
                <span class="number" >#${("000" + pPokemon.numero).slice(-3)}</span>
                <span class="name">${pPokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                       ${pPokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                    <img src="${pPokemon.photo}"
                    alt="${pPokemon.name}">
                </div>
            </li>
    `
}

function loadPokemonItens(pOffSet, pLimit) {
    pokeApi.getPokemons(pOffSet, pLimit).then((pokemons = []) => {
        const NewList = pokemons.map(ConvertPokemonToLI).join('')
        pokemonOl.innerHTML += NewList
    })
}

loadPokemonItens(vOffset, vLimit)

loadMoreButton.addEventListener('click', () => {
    vOffset += vLimit
    const vQtdeRecordNextPage = vOffset + vLimit

    if (vQtdeRecordNextPage >= vMaxRecords) {
        const vNewLimit = vMaxRecords - vOffset
        // debugger
        loadPokemonItens(vOffset, vNewLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else {

        loadPokemonItens(vOffset, vLimit)
    }

})