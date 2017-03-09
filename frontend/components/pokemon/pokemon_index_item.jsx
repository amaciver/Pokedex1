import React from 'react';
import { Link } from 'react-router';

export const PokemonIndexItem = ({pokemon}) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      {pokemon.name}
      <img src={pokemon.image_url} height="42" width="42"/>
    </Link>
  </li>
);
