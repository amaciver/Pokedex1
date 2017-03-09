import React from 'react';

export const ItemDetail = (props) => {
  // debugger;
  return (
  <div>
    <img src={props.item.image_url} height="100" width="100"/>
    <ul>
      <li>name: {props.item.name}</li>
      <li>price: {props.item.price}</li>
      <li>happiness:{props.item.happiness}</li>
    </ul>
  </div>
);};
