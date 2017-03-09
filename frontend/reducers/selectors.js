import {values} from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectItem = (state, id) => {
  let result = {};
  if (state.pokemonDetail.items) {
    let items = state.pokemonDetail.items;
    for (var i = 0; i < items.length; i++) {
      if (items[i].id.toString() === id) {
        result = items[i];
      }
    }
  }
  return result;
};
