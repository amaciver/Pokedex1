import { RECEIVE_POKEMON_ERRORS } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const errorsReducer = (state= [], action) => {
  let newState = merge([], state);
  switch (action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return merge([], newState, action.errors.responseJSON);
    default:
      return state;
  }
};

export default errorsReducer;
