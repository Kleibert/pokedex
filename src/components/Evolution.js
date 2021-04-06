import React from 'react';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import { fetchPokemonDetails } from '../actions'

const Evolution = (props) => {

    const _hasEvo = (el) => {
        return (el.chain.evolves_to.length > 0) ? true : false;
    }

    const refresh = () => {
        window.location.reload();
    }

    const renderEvo = () => {
        let evolutions = props.evo.chain.evolves_to[0];
        let evolutionList = [props.evo.chain.species]

        evolutionList = [...evolutionList, evolutions.species]

        while (evolutions.evolves_to.length > 0) {
            evolutions = evolutions.evolves_to[0];
            evolutionList = [...evolutionList, evolutions.species];

        }

        return (
            <ol className="list">{evolutionList.map(element => {
                props.fetchPokemonDetails(element.name)
                return (
                    <li className="evo" key={element.name}>
                        <Link to={`/pokemon/${element.name}`} onClick={() => refresh()}>
                            <Avatar pokemonId={element.name} />
                            <span>{element.name}</span>
                        </Link>
                    </li>
                )

            })}</ol>
        )
    }
    if (props.evo) {
        if (_hasEvo(props.evo)) {
            return (
                <div className="pokemon-evo content" role="contentinfo" aria-label="Pokemon Evolution">
                    <h4> Pokemon Evolution</h4>
                    {renderEvo()}
                </div>
            )
        }
        return ''
    }
    return <div>Loading...</div>
}
const mapStateToProps = state => {
    return { evo: state.pokemonEvolutions }
}
export default connect(mapStateToProps, { fetchPokemonDetails })(Evolution);