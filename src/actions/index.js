import jsonPokemons from '../apis/jsonPokemons';
import {
    FETCH_POKEMONS,
    SEARCH_POKEMON,
    FETCH_FAILED,
    FETCH_POKEMON,
    POKEMON_SELECTED,
    FETCH_EVOLUTION
} from './types';

export const fetchPokemonsAndDetails = (page, pokemonPerPage) => async (dispatch, getState) => {
    await dispatch(fetchPokemons(page, pokemonPerPage));
    const result = getState().pokemonList;
    result.forEach(pokemon => {
        dispatch(fetchPokemonDetails(pokemon.name))
    });
}

export const fetchPokemons = (page, pokemonPerPage) => {
    return async (dispatch) => {
        const perPage = pokemonPerPage;
        const offset = (page * perPage) - perPage;
        const response = await jsonPokemons.get(`/pokemon?limit=${perPage}&offset=${offset}`);
        dispatch({
            type: FETCH_POKEMONS,
            payload: response.data
        });

    }
};

export const searchPokemon = id => async (dispatch, getState) => {
    await jsonPokemons.get(`/pokemon/${id}`).then(response => {
        dispatch({
            type: SEARCH_POKEMON,
            payload: response.data
        });
        dispatch(fetchPokemonDetails(id));
    }).catch(error => {
        dispatch({
            type: FETCH_FAILED,
            payload: error
        });
    });

}
export const fetchPokemonDetails = id => {
    return async (dispatch) => {
        const response = await jsonPokemons.get(`/pokemon/${id}/`).then(response => {
            dispatch({
                type: FETCH_POKEMON,
                payload: response.data
            });
        }).catch(error => {
            dispatch({
                type: FETCH_FAILED,
                payload: error
            });
        });

    }
}

export const selectPokemon = (id) => async (dispatch) => {
    const response = await jsonPokemons.get(`/pokemon/${id}/`)

    dispatch({
        type: POKEMON_SELECTED,
        payload: response.data
    });
    await dispatch(fetchPokemonEvolution(response.data.id));
};

export const fetchPokemonEvolution = (id) => {
    return async (dispatch) => {
        const response = await jsonPokemons.get(`/pokemon-species/${id}/`)
        const respondeId = response.data.evolution_chain.url.split("/");
        const evolution = await jsonPokemons.get(`/evolution-chain/${respondeId.slice(-2)[0]}`)
        dispatch({
            type: FETCH_EVOLUTION,
            payload: evolution.data
        });
    }
};