import { combineReducers} from 'redux';
import {pokemonList,selectedPokemon,pokemonDetails,pokemonEvolutions} from './pokemonReducers';

export default combineReducers({
    pokemonList: pokemonList,
    pokemonDetails:pokemonDetails,
    selectedPokemon: selectedPokemon,
    pokemonEvolutions:pokemonEvolutions,
});