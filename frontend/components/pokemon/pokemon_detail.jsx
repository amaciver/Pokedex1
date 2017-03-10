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

  render() {
    const {poke} = this.props;
    let items = [];
    if (this.props.poke.items) {
      items = poke.items
        .map(item => <li key={item.name}>
          <Link className="itemLink" to={`/pokemon/${poke.id}/items/${item.id}`}>
            {item.name}
          </Link>
        </li>);
    }
    // debugger;
    return (
      <div>
        <div className="pokemonDetail">
          <div className="detailLogo">
            <img src="http://vignette3.wikia.nocookie.net/logopedia/images/e/e5/Pokemon_logo.png/revision/latest?cb=20120128115827"
               />
          </div>
          <div className="detailsBox">
            <div className="detailBox">
              <ul>
                <img height="250" width="250" src={poke.image_url}/><br/>
                <li>name: {poke.name}</li>
                <li>type: {poke.poke_type}</li>
                <li>attack: {poke.attack}</li>
                <li>defense: {poke.defense}</li>
              </ul>
            </div>
            <div className="itemsBox">
              <ul>
                ITEMS:
                {items}
              </ul>


            </div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
