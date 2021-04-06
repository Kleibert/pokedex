import {
    FETCH_POKEMONS,
    SEARCH_POKEMON,
    FETCH_POKEMON,
    POKEMON_SELECTED,
    FETCH_EVOLUTION
} from '../actions/types';

export const pokemonList = (state = [], action) => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return action.payload.results;
        case SEARCH_POKEMON:
            return [action.payload];
        default:
            return state;
    }

};

export const pokemonDetails = (state = [], action) => {
    switch (action.type) {
        case FETCH_POKEMON:
            return [...state, action.payload];
        default:
            return state;
    }
};
export const selectedPokemon = (selectedPokemon = null, action) => {
    if (action.type === POKEMON_SELECTED) {
        return action.payload;
    }

    return selectedPokemon;
};

export const pokemonEvolutions = (state = null, action) => {
    switch (action.type) {
        case FETCH_EVOLUTION:
            return action.payload;
        default:
            return state;
    }
};

