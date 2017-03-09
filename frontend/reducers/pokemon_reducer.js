import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  // debugger;
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
      case RECEIVE_ALL_POKEMON:
        return action.pokemon;
      case RECEIVE_POKEMON:
        newState[action.poke.id] = action.poke;
        return newState;
      default:
        return state;
    }
};

export default pokemonReducer ;
