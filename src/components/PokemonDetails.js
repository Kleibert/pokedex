import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPokemon, fetchPokemonEvolution } from '../actions';
import Evolution from './Evolution';

class PokemonDetails extends Component {

    componentDidMount() {
        this.props.selectPokemon(this.props.pokemonName);
    }

    renderTypes(types) {
        return types.map(type => {
            return (
                <div key={type.slot} className={type.type.name}>{type.type.name}</div>
            );
        });
    }
    renderAbilities(abilities) {
        return abilities.map(ab => {
            return (
                <li key={ab.ability.name}>
                    {ab.ability.name}
                </li>
            )
        })
    }
    renderPk() {
        const pokemon = this.props.pokemon;
        console.log(pokemon)
        if (pokemon) {
            return (
                <section role="contentinfo" aria-label={`Details ${pokemon.name}`} className="content pk-detail">
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={`pokemon ${pokemon.name}`} />
                    <div className="info">
                        <h1>{pokemon.name}</h1>
                        <div className="measure">
                            <p>
                                Height: <span>{pokemon.height}</span>
                            </p>
                            <p>
                                Weight: <span>{pokemon.weight}</span>
                            </p>
                        </div>
                        <div className="wrap-abilities">
                            <h2>Abilities</h2>
                            <ul className="list abilities">
                                {this.renderAbilities(pokemon.abilities)}
                            </ul>
                        </div>

                        <h2>Types</h2>
                        <div className="types">
                            {this.renderTypes(pokemon.types)}
                        </div>
                    </div>
                    <Evolution />
                </section>

            )
        }
        return <div>Loading......</div>
    }

    render() {
        return this.renderPk()
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        pokemon: state.selectedPokemon,
        pokemonName: ownProps.match.params.pokemon
    };
};

export default connect(mapStateToProps, { selectPokemon, fetchPokemonEvolution })(PokemonDetails);