import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { pokemon: this.props.pokemon };
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    // debugger;

    const {pokemon} = this.props;

    const pokemonItems = pokemon.map ( poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));


    return (
      <div>
        {this.props.children}
        <section className="pokedex">
          <ul>
            {pokemonItems}
          </ul>
        </section>
      </div>
    );
  }
}

export default PokemonIndex;
