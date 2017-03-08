import React from 'react';

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

    const pokemonItems = pokemon.map ( (poke, idx) => (
      <li key={idx}>
        {poke.name}
        <img src={poke.image_url} height="42" width="42"/>
      </li>
    ));

    return (
      <div>
        <ul>
          {pokemonItems}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
