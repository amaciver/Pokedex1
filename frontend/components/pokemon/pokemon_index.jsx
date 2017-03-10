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

    const pokemons = pokemon.map ( poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));


    return (
      <div className="main">
        <section className="pokedex">
          <ul>
            {pokemons}
          </ul>
        </section>
        {this.props.children}
        
      </div>
    );
  }
}

export default PokemonIndex;
