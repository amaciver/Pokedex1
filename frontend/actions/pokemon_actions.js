import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON_DETAIL = "RECEIVE_POKEMON_DETAIL";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemonDetail = pokemonDetail => ({
  type: RECEIVE_POKEMON_DETAIL,
  pokemonDetail
});

export const receivePokemon = poke => ({
  type: RECEIVE_POKEMON,
  poke
});

export const receivePokemonErrors = errors => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
  .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestSinglePokemon = (id) => (dispatch) => {
  return APIUtil.fetchSinglePokemon(id)
    .then(poke => dispatch(receivePokemonDetail(poke)));
};

export const createPokemon = (data) => (dispatch) => {
  return APIUtil.createPokemon(data).then(poke => {
    dispatch(receivePokemon(poke));
    return poke;
  }, errors => dispatch(receivePokemonErrors(errors)));
};
