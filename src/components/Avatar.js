import React, { Component } from 'react';
import { connect } from 'react-redux';

class Avatar extends Component {
    render() {
        if (this.props.pokemon) {
            const { sprites } = this.props.pokemon;
            return <img src={sprites.front_default} alt={`Avatar Pokemon ${this.props.pokemon.name}`} />
        }
        return "";

    }
}

const mapStateToProps = (state, ownProps) => {
    return { pokemon: state.pokemonDetails.find(pk => pk.name === ownProps.pokemonId) };
};

export default connect(mapStateToProps)(Avatar);