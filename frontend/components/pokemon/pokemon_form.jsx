import React from 'react';
import { withRouter } from 'react-router';

class PokemonForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {

        name: "",
        poke_type: "please",
        attack: "",
        defense: "",
        image_url: ""

    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.createPokemon(this.state)
      .then((newPokemon) => {
        this.props.router.push(`pokemon/${newPokemon.id}`);
      }).then(this.clearForm());
  }

  clearForm() {
    this.setState({
        name: "",
        poke_type: "please",
        attack: "",
        defense: "",
        image_url: ""
    });
  }

  render() {
    return(
      <div className="pokemonForm">
        <ul>
          {this.props.errors}
        </ul>
        <form>
          <input type="text" onChange={this.update('name')} value={this.state.name} placeholder="Name"/><br/>
          <select value={this.state.poke_type} onChange={this.update('poke_type')}>
            <option disabled value="please" >select poke type</option>
            <option value="fire">fire</option>
            <option value="electric">electric</option>
            <option value="normal">normal</option>
            <option value="ghost">ghost</option>
            <option value="psychic">psychic</option>
            <option value="water">water</option>
            <option value="bug">bug</option>
            <option value="dragon">dragon</option>
            <option value="grass">grass</option>
            <option value="fighting">fighting</option>
            <option value="ice">ice</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="steel">steel</option>
          </select><br/>
        <input type="text" onChange={this.update("image_url")} value={this.state.image_url} placeholder="image_url"/><br/>
          <input type="text" onChange={this.update("attack")} value={this.state.attack} placeholder="attack"/><br/>
          <input type="text" onChange={this.update("defense")} value={this.state.defense} placeholder="defense"/><br/>
          <button onClick={this.handleSubmit}>Create!</button>
        </form>
      </div>
    );
  }
}

export default withRouter(PokemonForm);
