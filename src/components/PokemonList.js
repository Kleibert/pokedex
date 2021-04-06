import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonsAndDetails, searchPokemon } from '../actions';
import Pagination from './Pagination';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import Search from './SearchBar';

const PokemonList = () => {
    const pokemons = useSelector(state => state.pokemonList)
    const dispatch = useDispatch();
    const [pokemonPerPage, setpokemontPerPage] = useState(150);
    const [currentPage, setCurrentPage] = useState(1);
    const [term, setTerm] = useState("");
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const perPage = perPage => setpokemontPerPage(perPage) 
    const searchTerm = searchTerm => setTerm(searchTerm);

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            if (term && term !== "") {
              dispatch(searchPokemon(term))
            } else {

                dispatch(fetchPokemonsAndDetails(currentPage, pokemonPerPage))
      
            }
      
          }, 1000);
          return () => {
            clearTimeout(timeoutId);
          };

        
    }, [currentPage, pokemonPerPage, term]);

    const renderList = () => {
        if (pokemons.length < 1) {
            return <div> Is loading..</div>
        }

        return pokemons.map(pokemon => {
            return (
                <li key={pokemon.name} className="card">
                    <Link to={`/pokemon/${pokemon.name}`}>
                        <Avatar pokemonId={pokemon.name} />
                        <span>{pokemon.name}</span>
                    </Link>
                </li>
            );
        })

    }

    return (
        <div>
            <div className="toolbar">
                <Pagination
                    pokemonPerPage={pokemonPerPage}
                    totalPosts={1118}
                    paginate={paginate}
                    currentPage={currentPage}
                />
                <Search searchTerm={searchTerm} term={term} pokemonPerPage={pokemonPerPage} />
                <Filter
                    pokemonPerPage={pokemonPerPage}
                    perPage={perPage}
                />
            </div>
            <div className="wrap-list">
                <ul>{renderList()}</ul>
            </div>
        </div>
    )



}

export default PokemonList;