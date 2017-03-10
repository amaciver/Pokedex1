import React from 'react';

export const ItemDetail = (props) => {
  // debugger;
  return (
  <div className="itemBox">
    <ul>
      <img src={props.item.image_url} height="100" width="100"/>
      <br/>
      <br/>
      <li>name: {props.item.name}</li>
      <li>price: {props.item.price}</li>
      <li>happiness: {props.item.happiness}</li>
    </ul>
  </div>
);};
