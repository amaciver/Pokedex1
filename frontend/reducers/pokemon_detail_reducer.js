import { RECEIVE_POKEMON_DETAIL } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonDetailReducer = (state = {}, action) => {
  // debugger;
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
      case RECEIVE_POKEMON_DETAIL:
        // debugger;
        return action.pokemonDetail;
      default:
        return state;
    }
};

export default pokemonDetailReducer ;
