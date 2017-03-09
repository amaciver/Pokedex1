import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.pokemonId !== this.props.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }
  // {poke.items.map(item => <li key={item.name} item={item}> {item.name} </li>)}

  render() {
    const {poke} = this.props;
    let items = [];
    if (this.props.poke.items) {
      items = poke.items
        .map(item => <li key={item.name}>
          <Link to={`/pokemon/${poke.id}/items/${item.id}`}>
            {item.name}
          </Link>
        </li>);
    }
    // debugger;
    return (
      <div>
        <img height="250" width="250" src={poke.image_url}/><br/>
        <li>name: {poke.name}</li>
        <li>type: {poke.poke_type}</li>
        <li>attack: {poke.attack}</li>
        <li>defense: {poke.defense}</li>
        <ul>
          {items}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default PokemonDetail;
